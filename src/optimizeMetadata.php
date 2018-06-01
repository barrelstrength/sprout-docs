<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once '../vendor/autoload.php';

use Sunra\PhpSimple\HtmlDomParser;

/**
 * Class
*/
Class Optimize
{

    public function render()
    {
        $html = 'test.html';
        $dom = HtmlDomParser::file_get_html($html);
        $head = $dom->find('head', 0);
        $elements = $dom->find('h1');
        if (isset($elements[0])){
            $title = $elements[0]->text();
            $head->innertext .= "<meta name='description' content='{$title}'>";
        }

        $dom->save($html);
    }
}

$class = new Optimize();

$class->render();