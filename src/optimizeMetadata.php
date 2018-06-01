<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once '../vendor/autoload.php';

use Sunra\PhpSimple\HtmlDomParser;

/**
 * Sprout Docs Scrapper Robot ಠ_ಠ
*/
Class Optimize
{
    public function run()
    {
        $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator('../docs/.vuepress/dist'));
        foreach ($rii as $file) {

            if ($file->isDir()){
                continue;
            }

            $ext = pathinfo($file->getPathname(), PATHINFO_EXTENSION);
            if ($ext == 'html'){
                $this->processFile($file->getPathname());
            }
        }
    }

    private function processFile($htmlPath)
    {
        $dom = HtmlDomParser::file_get_html($htmlPath);
        $defaultTitle = "Sprout Docs";
        $head = $dom->find('head', 0);
        $h1 = $dom->find('div[id="app"] h1');
        $p = $dom->find('div[id="app"] p');

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

        $dom->save($htmlPath);
    }
}

$optimize = new Optimize();

$optimize->run();