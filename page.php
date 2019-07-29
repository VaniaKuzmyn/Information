<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset')?>" >
    <title><?php the_title(); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale = 1.0" >
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="краткое описание страницы">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
   
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />

    <?
        wp_head();
    ?>
</head>
<body>

    <?php the_field('name_field'); ?>

    <?php
    global $post;
    $tmp_post = $post;
    $args = array('post_type'   => 'type');
    $myposts = get_posts( $args );
    foreach( $myposts as $post ){ setup_postdata($post);
        ?>
        <?php the_meta(); ?>
        <?php echo $post->post_title; ?>
        <?php echo $post->post_content; ?>
        <?php
    } 
    $post = $tmp_post;
    ?>
           
    <?php foreach(getFunc() as $review): ?>
        <img class ='' src="<?php echo $review['thumbnail'] ?>" alt="alt">
        <?php echo $review['title'] ?>
        <?php echo $review['content'] ?>
    <?php endforeach ?>

    <?php 
        echo do_shortcode('[contact-form-7 id="8" title="Контактная форма 1"]');
    ?>
    
    <?
        wp_footer();
    ?>       
    </body>
</html>