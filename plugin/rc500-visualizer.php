<?php
/*
Plugin Name: RC500 Visualizer
Description: Serves the RC-500 visualizer app as a page or shortcode.
Version: 0.1
Author: Barbarach BC
*/

function rc500_visualizer_enqueue_assets() {
    $plugin_url = plugin_dir_url(__FILE__);
    wp_enqueue_style('bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css');
    wp_enqueue_style('rc500-visualizer-css', $plugin_url . 'rc500_visualizer.min.css');
    wp_enqueue_style('bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css');
    wp_enqueue_script_module('rc500-visualizer-js', $plugin_url . 'rc500_visualizer.bundle.min.js');
}
add_action('wp_enqueue_scripts', 'rc500_visualizer_enqueue_assets');

function rc500_visualizer_shortcode() {
    ob_start();
    ?>
    <div id="app" class="container py-4">
        <h1 class="mb-4">RC-500 Config Visualizer</h1>
        <rc500-memories />
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('rc500_visualizer', 'rc500_visualizer_shortcode');
