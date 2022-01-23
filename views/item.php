<div class="h1_title"> 
<h2 id="products-title"><span data-path="<?=$data_path?>"><?=$h2_title?></span></h2>
</div>
 <div class="main_container">

        <!--CONSTRUCTOR-->
        <div id="constructor" class="constructor">
            <!--MODALS-->
            <!--IMG EDITOR-->
            <div data-component="img_editor" class="img_editor modal">

                <div class="m_body">

                    <div class="m_header">

                        <h1>Step 1 - add image</h1>

                        <span data-action="_togglePanel" class="close"></span>

                    </div>

                    <div class="upload_bar">



                    <div class="icon_box col-md-12" style="margin: 0 auto;">

                            <label class="upload icon" for="file"></label>

                            <input id="file" type="file" hidden>

                            <label  for="file" class="btn">Upload</label>

                    </div>





                        <!--

                        <div class="icon_box col-md-4" data-action="_facebook">

                            <span class="icon facebook"></span>

                            <span class="btn">Facebook</span>

                        </div>

                        <div class="icon_box col-md-4" data-action="_instagram">

                            <span class="instagram icon"></span>

                            <span class="btn">Instagram</span>

                        </div>-->

                    </div>

                </div>

            </div>

            <!--END IMG EDITOR-->



            <!--TEXT EDITOR-->

            <div data-component="text_editor" class="text_editor modal">

                <div class="m_body">



                    <div class="m_header">

                        <h1>Step 2 - add text</h1>

                        <span data-action="_closePanel" class="close"></span>

                    </div>



                    <div class="input_box">

                        <input class="orange_juice" type="text" name="text" id="text" placeholder="Add your text!">

                    </div>



                    <ul class="selects">



                        <!--Fonts list-->

                            <li class="col-md-4">

                                <p>Select font:</p>

                                <span data-item="font_title" class="orange_juice">Orange juice</span>

                                <ul>

                                    <li data-action="_addFont" class="days_later">28 days later</li>

                                    <li data-action="_addFont" class="amble">Amble</li>

                                    <li data-action="_addFont" class="crafty_girls">Crafty girls</li>

                                    <li data-action="_addFont" class="faster_one">Faster one</li>

                                    <li data-action="_addFont" class="lato">Lato</li>

                                    <li data-action="_addFont" class="monsieur_la_doulaise">Monsieur la doulaise</li>

                                    <li data-action="_addFont" class="nosifer">Nosifer</li>

                                    <li data-action="_addFont" class="orange_juice">Orange juice</li>

                                    <li data-action="_addFont" class="planetbe">Planetbe</li>

                                    <li data-action="_addFont" class="remachine_script">Remachine script</li>

                                    <li data-action="_addFont" class="snowburst_one">Snowburst one</li>

                                    <li data-action="_addFont" class="syncopate">Syncopate</li>

                                </ul>

                            </li>

                        <!--End font list-->



                        <!--Size list-->

                            <li class="col-md-4">

                                <p>Select Size:</p>

                                <span data-item="size_title">40</span>

                                <ul>

                                    <li data-action="_addSize">20</li>

                                    <li data-action="_addSize">30</li>

                                    <li data-action="_addSize">40</li>

                                    <li data-action="_addSize">50</li>

                                    <li data-action="_addSize">60</li>

                                    <li data-action="_addSize">70</li>

                                    <li data-action="_addSize">80</li>

                                    <li data-action="_addSize">90</li>

                                    <li data-action="_addSize">100</li>

                                    <li data-action="_addSize">110</li>

                                    <li data-action="_addSize">120</li>

                                    <li data-action="_addSize">130</li>

                                </ul>

                            </li>

                        <!--End Size list-->



                        <!--Color picker-->

                            <li class="col-md-3">

                                <p>Select color:</p>

                                <span id="output" class="color_output"></span>

                                <ul class="picker" id="picker">

                                    <li id="field_picker">

                                        <i class="caret circle"></i>

                                        <canvas></canvas>

                                    </li>

                                    <li id="line_picker">

                                        <i class="caret line"></i>

                                        <canvas></canvas>

                                    </li>



                                </ul>

                            </li>

                        <!--End Color picker-->



                        <div class="clearfix"></div>



                    </ul>



                    <div class="buttons">

                        <div data-action="_addText" class="btn add_text pull-right">add text</div>

                        <div data-action="_closePanel" class="btn cancel pull-right">cancel</div>

                        <div class="clearfix"></div>

                    </div>

                </div>

            </div>

            <!--END TEXT EDITOR-->



            <!--IMG VIEWER-->

            <div data-component="img_viewer" class="modal">



                <div class="m_body">

                    <div class="m_header">

                        <h1>Step 1 - add image</h1>

                        <span data-action="_togglePanel" class="close"></span>

                    </div>

                    <div id="instafeed"></div>

                </div>

            </div>

            <!--END IMG VIEWER-->



            <!--Options-->

            <div id="order_options" class="modal">

                <div class="m_body order_options">

                    <div class="m_header">

                        <h1>Step 4 - Order options</h1>

                        <span data-action="_toggleOptions" class="close"></span>

                    </div>

                    <!--options Options-->

                        <div class="quantity">

                            <input min="1" max="99"  type="number" name="qua" id="qua" value="1" />

                            <label for="qua">Quantity</label>

                            <div class="clearfix"></div>

                        </div>



                        <div class="print">

                            <div>

                                <input hidden type="radio" name="print" id="print_2d" />

                                <label data-action="_silicone2d" class="print_2d" for="print_2d">2D Silicone</label>

                                <div class="clearfix"></div>

                            </div>



                            <div>

                                <input hidden type="radio" name="print" id="print_3d" checked>

                                <label data-action="_plastic3d" class="print_3d" for="print_3d">3D Plastic</label>

                                <div class="clearfix"></div>

                            </div>

                        </div>





                        <div data-item="list_color" class="list_color">

                            <p data-item="color_title" class="black">Color: <span>Black</span></p>

                            <ul data-action="_choiceColor">

                                <li class="black">Black</li>

                                <li class="white">White</li>

                                <li class="grey">Transparent</li>

                            </ul>

                        </div>



                    <button data-action="_toggleOptions" class="btn">OK</button>

                </div>

            </div>

            <!--END Options-->



            <!--END MODALS-->

            <div id="preloader" class="modal preloader">

                <div class="m_body">

                    <p>Loading files to the server...</p>

                    <div class="icon"></div>

                </div>

            </div>



            <!--BTN PANEL-->

            <div data-component="btn_panel" class="btn_panel col-sm-3">

                <ul>

                    <li><span class="rotate_p" data-action="_rotate" data-value="5" role="button">Rotate</span> <div class="clearfix"></div></li>

                    <li><span class="rotate_m" data-action="_rotate" data-value="-5" role="button">Rotate</span><div class="clearfix"></div></li>

                    <li><span class="scale_p" data-action="_scale" data-value="-5" role="button">Scale</span><div class="clearfix"></div></li>

                    <li><span class="scale_m" data-action="_scale" data-value="5" role="button">Scale</span><div class="clearfix"></div></li>

                    <li><span class="edit_text disabled" data-action="_editText" role="button">Edit Text</span><div class="clearfix"></div></li>

                    <li><span class="del" data-action="_del" role="button">Delete</span><div class="clearfix"></div></li>

                </ul>

            </div>

            <!--END BTN PANEL-->



            <!--VIEW BOX-->

            <div data-component="view_box" class="view_box col-md-6 col-sm-5">



                <!--Template layer-->

                <div data-action="_drag" data-component="layer" class="layer">

                    <div data-course="1" data-action="_scale" class="corner left_top"></div>

                    <div data-course="1" data-action="_scale" class="corner top_right"></div>

                    <div data-course="0" data-action="_scale" class="corner right_bottom"></div>

                    <div data-course="0" data-action="_scale" class="corner bottom_left"></div>

                    <div data-action="_rotate" class="control_rotate"></div>

                </div>



                <!--Main canvas-->

                <canvas id="canvas"></canvas>



            </div>

            <!--END VIEW BOX-->





            <!--STEPS PANEL-->

            <div class="steps_panel col-md-3 col-sm-4" data-component="steps">

                <ul class="steps_list_js">

                    <li data-action="toggle">

                        <p class="devices">Step 01 <br> <strong>Choise device</strong></p>

                        <!--List devices-->



                        <ul class="list_products">

                          <?foreach($itemsList as $item):?>

                          <li data-action="_choiceProduct"
                              data-path="/images/products/<?=$page?>/icons/<?=$item['url']?>.png">

                              <?=$item['name']?>

                          </li>

                          <?endforeach;?>

                        </ul>

                        <!--End list devices-->

                    </li>

                    <li data-action="_addImg"><p class="add_images">Step 02 <br> <strong>Add images</strong></p></li>

                    <li data-action="_addText"><p class="add_text">Step 03 <br> <strong>Add text</strong></p></li>

                    <li data-action="_toggleOptions"><p class="options">Step 04 <br> <strong>Order options</strong></p></li>

                    <li data-action="_preview"><p class="get_preview">Step 05 <br> <strong>Preview</strong></p></li>

                    <li class="add_to_cart" data-action="_addToCart"><p class="to_cart"><strong>Add to cart</strong></p></li>

                </ul>
            </div>
            <!--END STEPS PANEL-->
        </div>
        <!--END CONSTRUCTOR-->
     </div>
