<?if(isset($_SESSION['cart']) AND count($_SESSION['cart'])>0):
  $total = 0;
?>
<div class="cart_tbl__wrap">
  <div class="scroll-cont js_scrollBox">
  <table align="center" class="tab_cart">
  <tr>
    <td width="20" align="center" class="cart_table_head">#</td>
    <td width="140" align="center" class="cart_table_head">Image</td>
    <td width="250" align="center" class="cart_table_head">Product</td>
    <td width="125" align="center" class="cart_table_head">Price</td>
    <td width="100" align="center" class="cart_table_head">Amount</td>
    <td width="75" align="center" class="cart_table_head">Total</td>
    <td width="50" align="center" class="cart_table_head"></td>
  </tr>
  <?

  $n=0;
  foreach($_SESSION['cart'] as $key => $item):
  $n++;
  ?>
  <tr>
    <td align="center" class="cart_table"><?=$n?></td>
    <td align="center" class="cart_table">
      <a class="link_back" href="<?=$item['uri']?>">
        <img style="width:125px;" src="<?=$item['img']?>" border="0" />
      </a>
    </td>
    <td align="center" class="cart_table">
      <a class="link_back" href="<?=$item['uri']?>">
        <span style="font-size:18px;">
        <?=$item['name']?>
        </span>
      </a>
      <br /><?=$item['format']?>
     </td>
    <td align="center" class="cart_table">
      <span style="font-weight:bold;">$</span><?=$item['price']?>
    </td>
    <td align="center" class="cart_table cart_count_cel">
      <input type="text" maxlength="3" style="margin-left:16px;" value="<?=$item['quantity']?>">
        <a href="javascript:void(0);" id="update-cart">
      <span class="update-icon"></span></a>
    </td>
    <td align="center" class="cart_table"><span style="font-weight:bold;">$</span><?=$item['cart_total']?></td>
    <td align="center" class="cart_table">
      <a href="/shopping-cart/?remove=<?=$key?>" id="delete-cart">
        <span class="delete-icon"></span>
      </a>
     </td>
    </tr>
   <?
   $total += $item['cart_total'];
   $shipping = 12.99;
   $grandTotal = $total + $shipping;
   endforeach;?>
  </table>
 </div>
 <br>
  <table align="center" class="tab_cart">
        <tr>
          <td colspan="7" class="cart_table" align="right">
            <div class="sum_2">Total : <span style="font-weight:bold;">$</span><?=$total?></div>
            <div class="sum_2">Shipping and Packaging : <span style="font-weight:bold;">$</span><?=$shipping?></div>
            <div class="sum_2"><b>Grand Total : <span style="font-weight:bold;">$</span><?=$grandTotal?></b></div>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="cart_table" align="right">
           <a href="javascript:void(0);" id="checkout" style="text-decoration:none;">
             <div class="checkout-now">Checkout</div>
           </a>
        </td>
   </tr>
</table>
</div>
<?endif;?>
