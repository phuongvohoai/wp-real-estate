<?php
/**
 * Custom template displaying posts
 */

?>
<?php if(!is_single()) {?>
<div class="col-md-3 col-sm-4 col-xs-12 grid-item"  id="post-<?php the_ID(); ?>">
    <div class="post-card-item">
        <figure class="post-image">
            <?php if( has_post_thumbnail() && !is_single() ){ ?>
                <a class="text-center" class="hover-effect" href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
                    <?php the_post_thumbnail( 'shapely-featured', array( 'class' => '')); ?>
                </a><?php
            }
            else { ?>
                <a class="text-center" class="hover-effect" href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
                    <img src="http://placehold.it/350x150"/>
                </a><?php
            }
            shapely_posted_on(); ?><!-- post-meta -->           
        </figure>                            
        <div class="post-card-body">
            <h3 class="post-title"><?php the_title_attribute(); ?></h3>
            <?php
            if( !is_single() ){
                    $post_excerpt = get_the_excerpt();
                    $trimmed = wp_trim_words( $post_excerpt, $num_words = 25, $more = '… ' );
                    echo('<p>'.$trimmed.'</p>');
                    if ( function_exists( 'ADDTOANY_SHARE_SAVE_KIT' ) ) { 
                        ADDTOANY_SHARE_SAVE_KIT( array( 
                            'buttons' => array( 'facebook', 'twitter', 'google_plus', 'whatsapp' ),
                        ) );
                    }
                ?>
                <a href="<?php the_permalink(); ?>" class="read">Xem thêm <i class="fa fa-caret-right"></i></a>
                <?php shapely_author();
            }
            else{
                the_content( sprintf(
                    /* translators: %s: Name of current post. */
                    wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'shapely' ), array( 'span' => array( 'class' => array() ) ) ),
                    the_title( '<span class="screen-reader-text">"', '"</span>', false )
                ) );
                
                echo '<hr>';
            }
            
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'shapely' ),
				'after'  => '</div>',
			) );
		    ?>
        </div>
    </div>
</div>  
<?php } 
else {
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('post-snippet mb64'.( is_single() ? ' content': "")); ?>>
	<header class="entry-header nolist">
		<?php
            the_title( '<h2 class="post-title entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		    shapely_posted_on_detail(); 
        ?><!-- post-meta -->
		
	</header><!-- .entry-header -->
    
    <?php the_post_thumbnail( $size, $attr); ?>

	<div class="entry-content">
		<?php
            the_content();            
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'shapely' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
	
</article><!-- #post-## -->
<?php } ?>