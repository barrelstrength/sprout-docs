<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once '../vendor/autoload.php';

use Sunra\PhpSimple\HtmlDomParser;

/**
 * Sprout Docs Scraper Robot ಠ_ಠ
*/
Class Optimize
{
    public function run()
    {
        $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator('../docs/.vuepress/dist'));
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
        echo $i.' files optimized....';
    }

    private function processFile($htmlPath)
    {
        $dom = HtmlDomParser::file_get_html($htmlPath);
        $defaultTitle = "Sprout Docs";
        $head = $dom->find('head', 0);
        $h1 = $dom->find('div[id="app"] div.content h1');
        $p = $dom->find('div[id="app"] div.content p');

        // Let's remove current title
        $currentTitle = $dom->find('title', 0);
        if ($currentTitle){
            $currentTitle->innertext = '';
        }

        // Let's remove the current description
        $currentDescription = $dom->find( "meta[name=description]", 0);
        if ($currentDescription){
            $currentDescription->innertext = '';
        }

        $title = isset($h1[0]) ? $h1[0]->text() : $defaultTitle;
        $head->innertext = "<title> content='{$title}'</title>".$head->innertext;

        $paragrah = isset($p[0]) ? $p[0]->text() : $title;

        $head->innertext .= "<meta name='description' content='{$paragrah}'>";

        // Facebook
        $head->innertext .= "<meta property='og:type' content='website'>";
        $head->innertext .= "<meta property='og:site_name' content='Sprout Docs'>";
        #$head->innertext .= "<meta property='og:url' content=''>";
        $head->innertext .= "<meta property='og:title' content='{$title}'>";
        $head->innertext .= "<meta property='og:description' content='{$paragrah}'>";
        #$head->innertext .= "<meta property='og:image' content=''>";
        #$head->innertext .= "<meta property='og:image:secure_url' content=''>";
        #$head->innertext .= "<meta property='og:image:width' content='1280'>";
        #$head->innertext .= "<meta property='og:image:type' content='image/svg+xml'>";
        $head->innertext .= "<meta property='og:locale' content='en'>";

        // Twitter
        $head->innertext .= "<meta name='twitter:card' content='summary_large_image'>";
        $head->innertext .= "<meta name='twitter:site' content='@Barrel_Strength'>";
        #$head->innertext .= "<meta name='twitter:url' content=''>";
        $head->innertext .= "<meta name='twitter:title' content='{$title}'>";
        $head->innertext .= "<meta name='twitter:description' content='{$paragrah}'>";
        #$head->innertext .= "<meta name='twitter:image' content=''>";

        $dom->save($htmlPath);
    }
}

$optimize = new Optimize();

$optimize->run();