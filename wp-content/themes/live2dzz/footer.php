<?php
/* The template for displaying the footer.
 * Contains the closing of the body div and all contents
 *
 * 
 * @package    Auxin
 * @author     averta (c) 2014-2023
 * @link       http://averta.net
 */

do_action( 'auxin_before_the_footer' );
?>
</div>
<!--! end of #inner-body -->

<?php do_action( "auxin_before_body_close", $post ); ?>

<!-- outputs by wp_footer -->
<?php wp_footer(); ?>
<div class="_tool-bar hidden-xs hidden-sm hidden-md">
  <div class="wachat-box phone-box _tool-oval-info">
    <div class="_tool-oval-info-pos">
      <div class="qrcode-box _tool-contact _phoneContent">
        <div class="_tool-contact-cell _tool-contact-cell-tit">
          <div class="_fl _tool-contact-tit">
            <p>欢迎联系我们</p>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="_tool-contact-cell">
          <div class="_fl _tool-contact-type">
            <p onclick="window.open('https://wpa.qq.com/msgrd?v=3&uin=75221521&site=qq&menu=yes')">QQ联系</p>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="_tool-contact-cell">
          <div class="_fl _tool-contact-type">
            <p onclick="window.open('tel:15815887663')">电话沟通</p>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="_tool-contact-cell _tool-contact-cell-mail">
          <div class="_fl _tool-contact-type">
            <p onclick="window.open('mailto:75221521@qq.com')">在线邮件</p>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="fk_service"> 请注明来意（^ _ <）</div>
        <div class="fk_service"> <a href="<?php echo esc_url(home_url('/')); ?>">Live2D制造工坊</a> </div>
      </div>
      <div class="iconfont iconce-zaixianzixun" aria-hidden="true"></div>
      <span>在线咨询</span> </div>
  </div>
  <div class="_tool-bar-bottom">
    <div class="wachat-box">
      <div class="qrcode-box"> <img class="qrcode-img" src="/wp-content/uploads/2018/07/qrcode.jpg" alt="qrcode" />
        <p class="qrcode-tip">扫一扫&nbsp;&nbsp;联系<span>工坊</span>客服</p>
      </div>
      <div class="iconfont iconce-erweima" aria-hidden="true"></div>
      <span>微信咨询</span> </div>
  </div>
</div>
<!-- m -->
<div class="m-tool-bar hidden-lg">
  <div class="m-tool-header"> <img src="<?php echo get_stylesheet_directory_uri() ?>/css/images/tool-bar/toolbar-kf.png" alt=""> </div>
  <a href="tel:15815887663" class="m-tool-contact">
  <div class="m-tool-i"><img src="<?php echo get_stylesheet_directory_uri() ?>/css/images/tool-bar/iconshouyedibudianhua.png" class="iconfont iconshouyedibudianhua"></div>
  <div class="m-tool-tip">电话</div>
  </a>
  <a href="javascript:void(0)" class="m-tool-contact m-qr-show">
  <div class="m-tool-i"><img src="<?php echo get_stylesheet_directory_uri() ?>/css/images/tool-bar/iconweixin.png"  class="iconfont iconweixin"></i></div>
  <div class="m-tool-tip">微信</div>
  </a>
  <div class="m-qr-mask">
    <div class="m-qr-mask-body">
      <div class="m-qr-mask-head">扫一扫&nbsp;&nbsp;联系工坊客服 <span class="m-qr-close">X</span> </div>
      <div class="m-qr-code"> <img src="/wp-content/uploads/2018/07/qrcode.jpg" alt="qrcode"> </div>
    </div>
  </div>
</div>
<!-- end wp_footer -->
<script src="<?php echo get_stylesheet_directory_uri() ?>/live2d/js/live2dcubismcore.min.js"></script> 
<script src="<?php echo get_stylesheet_directory_uri() ?>/live2d/js/unzip.min.js"></script> 
<script src="<?php echo get_stylesheet_directory_uri() ?>/live2d/js/webpack-bundle.js" data-canvasid="root" data-coordinateid="coordinate" data-zippath="<?php echo get_stylesheet_directory_uri() ?>/live2d/preview.zip"></script>
<script src="<?php echo get_stylesheet_directory_uri() ?>/js/nav.js"></script> 
</body>
</html>
