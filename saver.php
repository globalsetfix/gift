<?php
session_start();
$req = json_decode($_POST['file']);

// Вытаскиваем необходимые данные
$file = $req->data;
$name = $req->name;
$prefix = $req->product;

//Здесь должен быть уникальынй индефикатор сессии
$user_id = session_id();

// Все загруженные файлы помещаются в эту папку
$uploadDir = $_SERVER['DOCUMENT_ROOT'].'/uploads/'.$user_id;
if(!is_dir($uploadDir)){
    mkdir($uploadDir);
}

if($name === 'canvas'){

$options = $req->opt;
$color = $options->color;
$print = $options->print;
$quantity = $options->quantity;

$mime = 'png';

$prefix = strtolower($prefix);
$prefix = str_replace('/','-',$prefix);
$prefix = str_replace(' ','',$prefix);
$randomName = $prefix . '-' . substr_replace(sha1(microtime(true)), '', 12).'.'.$mime;

$_SESSION["type"]='constructor';

$ads = $print.'('.$color.')';
if($color == 'default'){
   $ads = $print;
}

$cart_product = 'Mobile Case';
$cart_name = str_replace('-','/',$req->product);
$cart_format = $ads;
$cart_size = $cart_name;
$cart_img = '/uploads/'.$user_id.'/'.$randomName;
$cart_uri = $_SERVER['HTTP_REFERER'];
$cart_price = 12.99;
$cart_quantity = $quantity;
$cart_total = floatval($cart_quantity * $cart_price);

$_SESSION["cart"] = array();

$_SESSION["cart"][] = array(
  "product" => $cart_product,
  "name" => $cart_name,
  "format" => $cart_format,
  "size" => $cart_size,
  "img" => $cart_img,
  "uri" => $cart_uri,
  "price" => $cart_price,
  "quantity" => $cart_quantity,
  "cart_total" => $cart_total
);

} else {
  // Получаем расширение файла
  $getMime = explode('.', $name);
  $mime = end($getMime);
  $randomName = substr_replace(sha1(microtime(true)), '', 12).'.'.$mime;
}

// Выделим данные
$data = explode(',', $file);

// Декодируем данные, закодированные алгоритмом MIME base64
$encodedData = str_replace(' ','+',$data[1]);
$decodedData = base64_decode($encodedData);

// Создаем изображение файл
if(file_put_contents($uploadDir.'/'.$randomName, $decodedData)) {
    echo $randomName.": loaded successfully";
}
else {
    // Показать сообщение об ошибке, если что-то пойдет не так.
    echo "Something went wrong. Make sure that the file is not corrupt!";
}
