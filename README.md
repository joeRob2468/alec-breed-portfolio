# Wordpress, Webpack, and Timber starter. 

This is a simple, bare-bones wordpress and webpack build system based on the Timber starter theme.

# Configuration and Installation

This project uses WP Starter and Webpack, so both of those need to be initialized before the theme can be built and used. You'll also need to configure and host a development server for Wordpress.

To initialize WP Starter, copy `.env.example` to `.env` and configure your environment settings. Then run `composer install` to pull in dependencies and run the installation scripts.

To initialize Webpack, cd to the `wp-content/themes/alec-breed-portfolio` directory and run `yarn install`. 

# Build Commands

Webpack is configured to use BrowserSync when watching files, and it proxies the `WP_HOME` address configured in `.env. 
Use `yarn watch` to build files, watch for changes, and host the BrowserSync proxy. 
use `yarn build` to build for production. 
