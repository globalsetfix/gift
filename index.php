<?
session_start();
define('DB_HOST', 'localhost');
define('DB_USER', 'user_gift');
define('DB_PASSWORD', 'i6^6fnC3');
define('DB_BASE_NAME', 'db_gift');
try {
    $db = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_BASE_NAME, DB_USER, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec("set names utf8");
}
catch (PDOException $e) {
    echo $e->getMessage();
}

$productsList = $db->query("SELECT * FROM `products` WHERE `visib` = 1 ORDER By `rating` ASC")->fetchAll();
$menuList = $db->query("SELECT * FROM `pages` WHERE `visib` = 1 ORDER By `rating` ASC")->fetchAll();

if(isset($_SESSION['cart']) AND count($_SESSION['cart'])>0):
   $total_cart = ' (<b>' . count($_SESSION['cart']) . '</b>)';
endif;

if(isset($_GET['route'])):
  $route = explode('/',$_GET['route']);
  if(isset($route[0])):
    $page = $route[0];
    $stmt = $db->prepare("SELECT * FROM `pages` WHERE `url` = ? AND `visib` = 1 LIMIT 1");
    $stmt->execute(array($page));
    $pageData = $stmt->fetch(PDO::FETCH_LAZY);

    if(isset($pageData['id']) OR isset($_GET['remove'])):
       if(isset($_GET['remove'])):
          $delete = $_GET['remove'];
          unset($_SESSION['cart'][$delete]);
          header("Location: /shopping-cart");
       endif;
       $h1_title = $pageData['title'];
       $template = $pageData['template'];
    else:
       $stmt = $db->prepare("SELECT * FROM `products` WHERE `hash` = ? LIMIT 1");
       $stmt->execute(array($route[0]));
       $productData = $stmt->fetch(PDO::FETCH_LAZY);
       $stmt = $db->prepare("SELECT * FROM `items` WHERE `visib` = 1 AND `product` = ? ORDER By `rating` ASC");
       $stmt->execute(array($productData['id']));
       $itemsList = $stmt->fetchAll();
       $h1_title = $productData['title'];
       $template = 'views/products.php';
    endif;
    if(isset($route[1]) AND $route[1]!=''):
       $stmt = $db->prepare("SELECT * FROM `items` WHERE `url` = ? LIMIT 1");
       $stmt->execute(array($route[1]));
       $itemData = $stmt->fetch(PDO::FETCH_LAZY);
       $h2_title = $itemData['name'];
       $data_path = '/images/products/'.$page.'/icons/'.$itemData['url'].'.png';
       $template = 'views/item.php';
    endif;
  endif;
else:
  $h1_title = 'Our Products';
  $template = 'views/catalog.php';
endif;
include ('views/main.php');
?>
