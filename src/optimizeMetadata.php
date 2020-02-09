<?php

namespace barrelstrength\sproutdocs;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once realpath(__DIR__.'/../vendor/autoload.php');

use Sunra\PhpSimple\HtmlDomParser;
use RecursiveIteratorIterator;
use RecursiveDirectoryIterator;
use DOMDocument;
use DomAttr;

/**
 * Sprout Docs Scraper Robot ಠ_ಠ
 */
class Optimize
{
    public $config;

    public $pageUrl;

    public function run()
    {
        $this->config = include('optimizeMetadataConfig.php');

        // Create <xml> document
        $dom = new DOMDocument('1.0', 'UTF-8');
        $dom->formatOutput = true;

        // create <urlset> element
        $urlSet = $dom->createElement('urlset');
        $urlSet->appendChild(new DomAttr('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9'));
        $urlSet->appendChild(new DomAttr('xmlns:xhtml', 'http://www.w3.org/1999/xhtml'));

        $docsDirectory = realpath(__DIR__.'/../docs/.vuepress/dist');

        $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($docsDirectory));
        $i = 0;
        foreach ($rii as $pos => $file) {

            if ($file->isDir()) {
                continue;
            }

            $ext = pathinfo($file->getPathname(), PATHINFO_EXTENSION);

            if ($ext !== 'html') {
                continue;
            }

            $baseUrl = $this->config['baseUrl'];
            $pathInfo = explode('.vuepress/dist', $file->getPathname());
            $this->pageUrl = $baseUrl.$pathInfo[1];

            $this->processFile($file->getPathname());
            $i++;

            // create <url> element
            $url = $dom->createElement('url');

            // Add <loc> to <url>
            $loc = $dom->createElement('loc');
            $locText = $dom->createTextNode($this->pageUrl);
            $loc->appendChild($locText);
            $url->appendChild($loc);

            // Add <lastmod> to <url>
            $lastmod = $dom->createElement('lastmod');
            $lastmodText = $dom->createTextNode(date('c', time()));
            $lastmod->appendChild($lastmodText);
            $url->appendChild($lastmod);

            // Add <changefreq> to <url>
            $changefreq = $dom->createElement('changefreq');
            $changefreqText = $dom->createTextNode($this->config['sitemap']['changefreq']);
            $changefreq->appendChild($changefreqText);
            $url->appendChild($changefreq);

            // Add <priority> to <url>
            $priority = $dom->createElement('priority');
            $priorityText = $dom->createTextNode($this->config['sitemap']['priority']);
            $priority->appendChild($priorityText);
            $url->appendChild($priority);

            $urlSet->appendChild($url);
        }

        echo "Generating XML Sitemap.\n";

        // Add the <url> to the <urlset>
        $dom->appendChild($urlSet);

        file_put_contents($docsDirectory.'/sitemap.xml', $dom->saveXML());

        echo 'Metadata added to '.$i.' files.';
    }

    private function processFile($htmlPath)
    {
        // Need to pass fourth parameter as '0' because PHP 7.1 throws an error otherwise
        // https://github.com/sunra/php-simple-html-dom-parser/issues/59
        $dom = HtmlDomParser::file_get_html($htmlPath, false, null, 0);

        // Grab our metadata
        $siteName = $this->config['metadata']['siteName'];
        $defaultDescription = $this->config['metadata']['siteName'];
        $defaultImage = $this->config['metadata']['image'];

        $currentTitle = $dom->find('title', 0);
        $firstH1 = $dom->find($this->config['selectors']['title']);
        $firstParagraph = $dom->find($this->config['selectors']['description']);

        // Remove the default description
        $currentDescription = $dom->find("meta[name=description]", 0);

        if ($currentDescription) {
            $currentDescription->outertext = '';
        }

        $dom->save($htmlPath);

        $metaTitle = isset($firstH1[0]) ? $firstH1[0]->text().' - '.$siteName : $currentTitle ?? $appendTitle;
        $metaDescription = isset($firstParagraph[0]) ? $firstParagraph[0]->text() : $defaultDescription;

        $metadataTags = '<title>'.$metaTitle.'</title>';
        $metadataTags .= '<meta name="description" content="'.$metaDescription.'">';
        $metadataTags .= '<link rel="canonical" href="'.$this->pageUrl.'">';

        // Facebook
        $metadataTags .= '<meta property="og:type" content="article">';
        $metadataTags .= '<meta property="og:site_name" content="'.$siteName.'">';
        $metadataTags .= '<meta property="og:url" content="'.$this->pageUrl.'">';
        $metadataTags .= '<meta property="og:title" content="'.$metaTitle.'">';
        $metadataTags .= '<meta property="og:description" content="'.$metaDescription.'">';
        $metadataTags .= '<meta property="og:image" content="'.$defaultImage.'">';
        $metadataTags .= '<meta property="og:image:secure_url" content="'.$defaultImage.'">';
        $metadataTags .= '<meta property="og:image:height" content="200">';
        $metadataTags .= '<meta property="og:image:width" content="200">';
        $metadataTags .= '<meta property="og:image:type" content="image/png">';
        $metadataTags .= '<meta property="og:locale" content="en">';

        // Twitter
        $metadataTags .= '<meta name="twitter:card" content="summary">';
        $metadataTags .= '<meta name="twitter:url" content="'.$this->pageUrl.'">';
        $metadataTags .= '<meta name="twitter:site" content="'.$this->config['metadata']['twitterSite'].'">';
        $metadataTags .= '<meta name="twitter:title" content="'.$metaTitle.'">';
        $metadataTags .= '<meta name="twitter:description" content="'.$metaDescription.'">';
        $metadataTags .= '<meta name="twitter:image" content="'.$defaultImage.'">';

        $currentTitle->outertext = $metadataTags;

        $dom->save($htmlPath);
    }
}

$optimize = new Optimize();

$optimize->run();
