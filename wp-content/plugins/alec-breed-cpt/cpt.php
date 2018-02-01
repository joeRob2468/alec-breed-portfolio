<?php
/*
Plugin Name: Alec Breed Custom Post Types
Description: Custom Post Types for the "Alec Breed" website.
Author: John Boyer
Author URI: http://www.boyerwebstudios.com
*/

add_action( 'init', 'alec_breed_cpt' );

function alec_breed_cpt() {

register_post_type( 'portfolio_item', array(
  'labels' => array(
    'name' => 'Portfolio Items',
    'singular_name' => 'Portfolio Item',
   ),
  'description' => 'Work and Designs that we want to display on the site.',
  'public' => true,
  'menu_position' => 20,
  'supports' => array( 'title', 'editor', 'custom-fields' )
));
}