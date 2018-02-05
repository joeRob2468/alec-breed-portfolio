<?php
/*
Plugin Name: Alec Breed Custom Post Types
Description: Custom Post Types for the "Alec Breed" website.
Author: John Boyer
Author URI: http://www.boyerwebstudios.com
*/

add_action( 'init', 'alec_breed_cpt' );
add_action('wp_ajax_get_portfolio_items', __NAMESPACE__ . '\\get_portfolio_items');
add_action('wp_ajax_nopriv_get_portfolio_items', __NAMESPACE__ . '\\get_portfolio_items');

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

function get_portfolio_items() {
    $limit = $_POST['limit'] or $_GET['limit'] or 6;
    $page = $_POST['page'] or $_GET['page'] or 1;

    // get items
    $args = array(
      'post_type' => 'portfolio_item',
      'posts_per_page' => $limit,
      'paged' => $page
    );
    query_posts($args); // required to use pagination

    $items = Timber\Timber::get_posts($args);
    $res = array(
      'items' => array(),
      'totalPages' => Timber\Timber::get_pagination()['total'],
      'status' => ""
    );

    // compile items and add to response
    if ($items) {
      foreach ($items as $item) {
        $response = array(
          'data' => Timber\Timber::compile('templates/partials/portfolio-item.twig', ['item' => $item])
        );
        $res['items'][] = $response; // this is an implicit array_push. 
      }
      $res['status'] = 'success';
    } else {
      $res['status'] = 'complete';
    }

    // do response
    wp_reset_query();
    wp_reset_postdata();
    wp_send_json($res);

    die();
  }