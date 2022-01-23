<div class="container">
<?foreach ($productsList as $item):?>
  <div class="block">
  <?
  $url = '';
  if($item['hash'] == 'iphone-case') { $url = $item['hash']; }
  if($url == ''):
  ?>
      <img src="/images/catalog/<?=$item['hash']?>.jpg" class="sh" />
      <div class="title"> <?=$item['title']?> </div>
      <div class="description">
         <?=$item['custom_title']?>
      </div>
    <?else:?>
      <a href="/<?=$url?>" class="">
         <img src="/images/catalog/<?=$item['hash']?>.jpg" class="sh" />
      </a>
      <div class="title"><a href="/<?=$url?>"><?=$item['title']?></a></div>
      <div class="description">
         <a href="/<?=$url?>"><?=$item['custom_title']?></a>
      </div>
    <?endif;?>
   </div>
 <?endforeach; ?>
</div>
