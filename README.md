# Alec Breed's Portfolio 

A simple portfolio theme built on Timber and Foundation.

# Configuration and Installation

This project uses WP Starter and Webpack, so both of those need to be initialized before the theme can be built and used. You'll also need to configure and host a development server for Wordpress.

To initialize WP Starter, copy `.env.example` to `.env` and configure your environment settings. Then run `composer install` to pull in dependencies and run the installation scripts.

To initialize Webpack, cd to the `wp-content/themes/alec-breed-portfolio` directory and run `yarn install`. 

# Build Commands

Webpack is configured to use BrowserSync when watching files, and it proxies the address configured in the BrowserSyncPlugin initialization code in `webpack.config.js`, so be sure to set update that address to match your environment. 
Use `yarn watch` to build files, watch for changes, and host the BrowserSync proxy. 
use `yarn build` to build for production. 
