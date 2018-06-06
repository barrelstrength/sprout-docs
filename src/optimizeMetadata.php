<?php
namespace barrelstrength\sproutdocs;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once realpath(__DIR__ . '/../vendor/autoload.php');

use Sunra\PhpSimple\HtmlDomParser;
use RecursiveIteratorIterator;
use RecursiveDirectoryIterator;

/**
 * Sprout Docs Scraper Robot ಠ_ಠ
*/
Class Optimize
{
    public function run()
    {

        $docsDirectory = realpath(__DIR__ . '/../docs/.vuepress/dist');

        $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($docsDirectory));
        $i = 0;
        foreach ($rii as $pos => $file) {
            if ($file->isDir()){
                continue;
            }

            $ext = pathinfo($file->getPathname(), PATHINFO_EXTENSION);
            if ($ext == 'html'){
                $this->processFile($file->getPathname());
                $i++;
            }
        }
        echo $i.' files optimized.';
    }

    private function processFile($htmlPath)
    {
        // Need to pass fourth parameter as '0' because PHP 7.1 throws an error otherwise
        // https://github.com/sunra/php-simple-html-dom-parser/issues/59
        $dom = HtmlDomParser::file_get_html($htmlPath, false, null, 0);

        // Grab our metadata
        $siteName = 'Sprout Documentation';
        $defaultDescription = 'The Sprout Business Suite is a premium suite of plugins designed for businesses who want to use Craft CMS as the core of their content management and digital marketing workflows.';
        $defaultImage = 'https://s3.amazonaws.com/sprout.barrelstrengthdesign.com-assets/content/plugins/sprout-plugins-logo.png';

        $currentTitle = $dom->find('title', 0);
        $firstH1 = $dom->find('div[id="app"] div.content h1');
        $firstParagraph = $dom->find('div[id="app"] div.content p');

        // Remove the default description
        $currentDescription = $dom->find( "meta[name=description]", 0);

        if ($currentDescription){
            $currentDescription->outertext  = '';
        }

        $dom->save($htmlPath);

        $metaTitle = isset($firstH1[0]) ? $firstH1[0]->text() . ' - ' . $siteName : $currentTitle ?? $appendTitle;
        $metaDescription = isset($firstParagraph[0]) ? $firstParagraph[0]->text() : $defaultDescription;

        $metadataTags = "<title>{$metaTitle}</title>";
        $metadataTags .= "<meta name='description' content='{$metaDescription}'>";

        // Facebook
        $metadataTags .= "<meta property='og:type' content='website'>";
        $metadataTags .= "<meta property='og:site_name' content='{$siteName}'>";
        $metadataTags .= "<meta property='og:title' content='{$metaTitle}'>";
        $metadataTags .= "<meta property='og:description' content='{$metaDescription}'>";
        $metadataTags .= "<meta property='og:image' content='{$defaultImage}'>";
        $metadataTags .= "<meta property='og:image:secure_url' content='{$defaultImage}'>";
        $metadataTags .= "<meta property='og:image:height' content='200'>";
        $metadataTags .= "<meta property='og:image:width' content='200'>";
        $metadataTags .= "<meta property='og:image:type' content='image/png'>";
        $metadataTags .= "<meta property='og:locale' content='en'>";

        // Twitter
        $metadataTags .= "<meta name='twitter:card' content='summary'>";
        $metadataTags .= "<meta name='twitter:site' content='@Barrel_Strength'>";
        $metadataTags .= "<meta name='twitter:title' content='{$metaTitle}'>";
        $metadataTags .= "<meta name='twitter:description' content='{$metaDescription}'>";
        $metadataTags .= "<meta name='twitter:image' content='{$defaultImage}'>";

        $currentTitle->outertext = $metadataTags;

        $dom->save($htmlPath);
    }
}

$optimize = new Optimize();

$optimize->run();
