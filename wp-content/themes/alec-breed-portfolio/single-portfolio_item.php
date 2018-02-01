<?php


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;

Timber::render(array( 'pages/single-' . $post->post_type . '.twig', 'pages/single.twig' ), $context );