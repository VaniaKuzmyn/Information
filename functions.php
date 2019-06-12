<?php

    add_filter('show_admin_bar', '__return_false'); 

    define('NEWTHEME_THEME_ROOT', get_template_directory_uri());
    define('NEWTHEME_CSS_DIR', NEWTHEME_THEME_ROOT . '/build/css');
    define('NEWTHEME_JS_DIR', NEWTHEME_THEME_ROOT . '/build/js');
    define('NEWTHEME_IMG_DIR', NEWTHEME_THEME_ROOT . '/build/images/');
    define('NEWTHEME_AJAX_DIR', NEWTHEME_THEME_ROOT . '/build/ajax/');
    
    
    add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );
    function theme_name_scripts() {
        wp_enqueue_style( 'animate', NEWTHEME_CSS_DIR . '/animate.css');
        wp_enqueue_style( 'slick', NEWTHEME_CSS_DIR . '/slick.css');
        wp_enqueue_style( 'slick-theme', NEWTHEME_CSS_DIR . '/slick-theme.css');
        wp_enqueue_style( 'main', NEWTHEME_CSS_DIR . '/main.css');
        wp_enqueue_style( 'theme', get_stylesheet_uri());


        wp_deregister_script( 'jquery' );
        wp_register_script( 'jquery', 'https://code.jquery.com/jquery-3.4.0.min.js');
        wp_register_script( 'slick_carousel', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');

        wp_enqueue_script( 'jquery');
        wp_enqueue_script( 'slick_carousel');
        wp_enqueue_script( 'particlesjs', NEWTHEME_JS_DIR . '/particles.min.js');
        wp_enqueue_script( 'slick', NEWTHEME_JS_DIR . '/slick.js');

        wp_enqueue_script( 'main', NEWTHEME_JS_DIR . '/main.js');
    }

    add_action( 'init', 'register_post_types' );

        add_theme_support('post-thumbnails');

        function register_post_types(){

           
            register_post_type('PostType', array(
                'labels' => array(
                    'name'               => 'Name', // основное название для типа записи
                    'singular_name'      => 'ACF', // название для одной записи этого типа
                    'add_new'            => 'Добавить -', // для добавления новой записи
                    'add_new_item'       => 'Добавление -', // заголовка у вновь создаваемой записи в админ-панели.
                    'edit_item'          => 'Редактирование -', // для редактирования типа записи
                    'new_item'           => 'Новое -', // текст новой записи
                    'view_item'          => 'Смотреть -', // для просмотра записи этого типа.
                    'search_items'       => 'Искать -', // для поиска по этим типам записи
                    'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
                    'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
                    'menu_name'          => 'MenuName' // название меню
                ),
                'public'              => false,
                'show_ui'             => true, // зависит от public
                'menu_icon'           => 'dashicons-welcome-learn-more', // wp dashicons
                'supports'            => array('title', 'editor', 'thumbnail') // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
                                               // for thumbnail need  add_theme_support('post-thumbnails'); 
            ) );

    }

   
    $posts = get_posts( array(
        'orderby'     => 'date',
        'order'       => 'ASC',
        'post_type'   => 'PostType'
    ) );
    

    function getPostType(){
        $args = array(
            'orderby'     => 'date',
            'order'       => 'ASC',
            'post_type'   => 'PostType'
        );
            $variables = [];
            foreach(get_posts($args) as $post){
                $review = get_fields($post->ID);
                $review['title'] = $post->post_title;
                $review['content'] = $post->post_content;
                $review['thumbnail'] = get_the_post_thumbnail_url( $post->ID, 'thumbnail' );

                $variables[] = $review;
            }
        
        return $variables;
    }





    // remove tag 'span' from the form
    add_filter('wpcf7_form_elements', function($content) {
        $content = preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);
    
        return $content;
    });
   

    