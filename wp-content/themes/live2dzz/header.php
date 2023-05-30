<?php
/**
 * The header of all pages.
 *
 * Displays all of the <head> section and everything up till <main id="main">
 *
 * 
 * @package    Auxin
 * @author     averta (c) 2014-2023
 * @link       http://averta.net
 */
global $post;
do_action( "auxin_before_head_open", $post );
?>
<!DOCTYPE html>
<!--[if IE 9 ]>   <html class="no-js oldie ie9 ie" <?php language_attributes(); ?> > <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html class="no-js" <?php language_attributes(); ?> >
<!--<![endif]-->
<head>
<meta charset="<?php esc_attr( bloginfo( 'charset' ) ); ?>" >
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- devices setting -->
<meta name="viewport"   content="initial-scale=1<?php echo auxin_get_option( 'enable_site_reponsiveness', 1 ) ? ',user-scalable=no,width=device-width' : ''; ?>">
<!-- outputs by wp_head -->
<?php wp_head(); ?>
<!-- end wp_head -->
<?php
$description = '';
$keywords = '';

if ( is_home() || is_page() ) {
  $description = "专业、高效、优质的VUP制作团队，为您提供Live2D虚拟主播人物形像定制";
  $keywords = "live2d,live2d建模,live2d专业定制,live2d虚拟形象制作,live2d人物模型免费下载,live2d中文论坛,live2d教程,虚拟偶像,虚拟主播,VUP,VTUBER,皮套";
} elseif ( is_single() ) {
  $description1 = get_post_meta( $post->ID, "description", true );
  $description2 = str_replace( "\n", "", mb_strimwidth( strip_tags( $post->post_content ), 0, 200, "…", 'utf-8' ) );
  $description = $description1 ? $description1 : $description2;
  $keywords = get_post_meta( $post->ID, "keywords", true );
  if ( $keywords == '' ) {
    $tags = wp_get_post_tags( $post->ID );
    foreach ( $tags as $tag ) {
      $keywords = $keywords . $tag->name . ", ";
    }
    $keywords = rtrim( $keywords, ', ' );
  }
}
elseif ( is_category() ) {
  $description = category_description();
  $keywords = single_cat_title( '', false );
}
elseif ( is_tag() ) {
  $description = tag_description();
  $keywords = single_tag_title( '', false );
}
$description = trim( strip_tags( $description ) );
$keywords = trim( strip_tags( $keywords ) );
?>
<meta name="description" content="<?php echo $description; ?>" />
<meta name="keywords" content="<?php echo $keywords; ?>" />
</head>

<body <?php body_class(); auxin_dom_attributes( 'body' );?>>
<?php do_action( "auxin_after_body_open", $post ); ?>
<div class="fixed bottom-0 z-50 flex justify-center pb-8 -translate-x-1/2 left-1/2 header">
  <div class="inline-flex flex-shrink-0 flex-col md:flex-row items-center justify-center px-3 p-2 overflow-hidden rounded-2xl relative transition-colors" id="stnav">
    <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 z-40" id="h1px"></div>
    <div class="md:block" id="mnav">
      <div class="relative flex gap-2 flex-col w-full mt-2 mb-2 text-center md:m-0 md:w-auto md:flex-row">
        <div class="relative flex gap-2 flex-col w-full mt-2 mb-6 text-center md:m-0 md:w-auto md:flex-row">
          <?php
          $menuParameters = array(
            'theme_location' => 'main-menu',
            'container' => false,
            'echo' => false,
            'items_wrap' => '%3$s',
            'depth' => 0,
          );
          echo strip_tags( wp_nav_menu( $menuParameters ), '<a>' );
          ?>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="px-3 py-2 md:hidden" id="mbtn">
        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="text-2xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
      <div class="w-0 opacity-0 cta">
        <div class="pl-2 md:pl-10">
          <div class="" style="transform: translateZ(100px); display: inline-flex;">
            <div class="hover-3d w-full" style="transform-style: preserve-3d; display: inline-flex; transform: perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"> <div class="shadow-sm inline-block relative overflow-hidden cursor-pointer select-none group text-white text-opacity-90 from-[#4F69DE] to-[#504DE6] bg-[#4C4BEE] px-3 py-2 rounded-xl block w-[40px] px-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] bg-opacity-0 goTop">
              <div class="flex items-center justify-center gap-3 font-medium whitespace-nowrap">
                <div class="absolute top-0 left-0 w-full h-full transition-opacity duration-300 bg-white opacity-0 pointer-events-none group-hover:opacity-10 group-active:opacity-0 px-3 py-2 rounded-xl"></div>
                <div class="">
                  <div class="flex items-center gap-2"><i class="fas fa-angle-double-up"></i></div>
                </div>
              </div>
              </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="inner-body">
<?php
do_action( "auxin_after_inner_body_open", $post );
