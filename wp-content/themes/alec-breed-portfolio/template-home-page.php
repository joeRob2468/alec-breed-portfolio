<?php
/**
 * Template Name: Home Page
 * Description: A landing page design.
 */

$context = Timber::get_context();
$args = array(
// Get post type project
'post_type' => 'portfolio_item',
// Get 6 posts (all is -1)
'posts_per_page' => 6,
// Get post by "graphic" category
// 'meta_query' => array(
//     array(
//         'key' => 'project_category',
//         'value' => 'graphic',
//         'compare' => 'LIKE'
//     )
// ),
// Order by post date
'orderby' => array(
    'date' => 'DESC'
));

$context['portfolio_items'] = Timber::get_posts($args);
$page = new TimberPost();
$context['page'] = $page;

Timber::render( array(
    'pages/page-home.twig',
    'page/page.twig'
), $context );