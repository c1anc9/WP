<?php
/**
 *  Functions and definitions for auxin framework
 *
 * 
 * @package    Auxin
 * @author     averta (c) 2014-2023
 * @link       http://averta.net
 */

/*-----------------------------------------------------------------------------------*/
/*  Add your custom functions here -  We recommend you to use "code-snippets" plugin instead
/*  https://wordpress.org/plugins/code-snippets/
/*-----------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------*/
/*  Init theme framework
/*-----------------------------------------------------------------------------------*/
require( 'auxin/auxin-include/auxin.php' );
/*-----------------------------------------------------------------------------------*/


function get_ssl_avatar( $avatar ) {
  $avatar = preg_replace( '/.*\/avatar\/(.*)\?s=([\d]+)&.*/', '<img src="https://dn-qiniu-avatar.qbox.me/avatar/$1?s=$2" class="avatar avatar-$2" height="50px" width="50px">', $avatar );
  return $avatar;
}
add_filter( 'get_avatar', 'get_ssl_avatar' );


//菜单
register_nav_menus(
  array(
    'main-menu' => '主菜单',
  )
);

function add_menu_link_atts( $atts, $item, $args ) {
  $atts[ 'class' ] = 'group relative px-4 py-2 font-medium text-[#ffffff] rounded-xl whitespace-nowrap text-opacity-70 ahc';
  $atts[ 'target' ] = '_self';
  return $atts;
}
add_filter( 'nav_menu_link_attributes', 'add_menu_link_atts', 10, 3 );
add_filter( 'run_wptexturize', '__return_false' );