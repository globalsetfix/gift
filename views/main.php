<!DOCTYPE html>
<html lang="en">
 <head>
  <title>Gift Prints</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
  <link type="text/css" rel="stylesheet" href="/css/bootstrapv3.3.7.css?v=<?=microtime(true)?>" />
  <link type="text/css" rel="stylesheet" href="/css/constructor.css?v=<?=microtime(true)?>" />
  <link type="text/css" rel="stylesheet" href="/css/style.css?v=<?=microtime(true)?>" />
 </head>
 <body>
  <div class="wrapper">
    <ul class="navigation">
      <li style="padding:0 20px 0 0;">
      <a href="/" title="Gift Prints"><i class="fa fa-print fa-1x"></i> <b>Gift Prints</b></a></li>
      <?if(count($productsList)>0):?>
      <li><a href="#" title="Catalog">Catalog</a>
        <ul>
            <?foreach ($productsList as $item):
            $url = '#';
            if($item['hash'] == 'iphone-case') { $url = $item['hash']; }
            ?>
            <li><a href="/<?=$url?>" title="<?=$item['title']?>"><?=$item['title']?></a></li>
            <?endforeach;?>
        </ul>
      </li>
      <?endif;?>
      <?if(count($menuList)>0):?>
        <?foreach($menuList as $item):?>
            <li>
            <?if($item['title'] == 'Shopping Cart'):?>
              <a href="/<?=$item['url']?>"><?=$item['title']?><?=$total_cart?></a>
            <?else:?>
              <a href="/<?=$item['url']?>"><?=$item['title']?></a>
            <?endif;?>
            </li>
        <?endforeach;?>
       <?endif;?>
      <div class="clear"></div>
    </ul>
  </div>
  <div class="slider__item" style="background-image: url('/images/slider/bg-image.jpg');"></div>
  <div class="h1_title"><h1><?=$h1_title?></h1></div>
  <div class="content">
    <?php include($template)?>
  </div>
  <div class="footer">
    <div class="container">
       <p class="as">
         THORNHILL, 29 Rustwood Rd<br>
         ON, L4J 9E5<br>
         Canada<br><br>
         Phone: +1 647 504 38 81<br><br>
         E-mail: giftprintstoyou@gmail.com<br>
      </p>
    <div>
    <div class="container soc">
      <div class="social youtube">
          <a href="#"><i class="fa fa-youtube fa-2x"></i></a>
      </div>
      <div class="social twitter">
          <a href="#"><i class="fa fa-twitter fa-2x"></i></a>
      </div>
      <div class="social instagram">
          <a href="#"><i class="fa fa-instagram fa-2x"></i></a>
      </div>
      <div class="social facebook">
          <a href="#"><i class="fa fa-facebook fa-2x"></i></a>
      </div>
      <div class="social pinterest">
          <a href="#"><i class="fa fa-pinterest fa-2x"></i></a>
      </div>
     </div>
    <div class="container">
      <div class="copy">www.gift-prints.com @ 2020</div>
    <div>
  </div>
  <script type="text/javascript" src="/js/constansts.js?v=<?=microtime(true)?>"></script>
  <script type="text/javascript" src="/js/builders.js?v=<?=microtime(true)?>"></script></div>
 </body>
</html>
