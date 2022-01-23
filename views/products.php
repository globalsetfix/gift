<div class="container">
<?foreach ($itemsList as $item): ?>
<div class="block">
  <div class="image">
    <a href="/<?=$page?>/<?=$item['url']?>">
      <img src="/images/products/<?=$page?>/icons/<?=$item['url']?>.png" />
    </a>
    </div>
  <div class="title"><a href="/<?=$page?>/<?=$item['url']?>"><?=$item['name']?></a></div>
</div>
<?endforeach; ?>
</div>
