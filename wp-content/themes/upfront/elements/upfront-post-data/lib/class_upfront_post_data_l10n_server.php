<?php

/**
 * Data parts strings server.
 */
class Upfront_PostData_L10n_Server implements IUpfront_Server {

	public static function serve () {
		$me = new self;
		$me->_add_hooks();
	}

	private function _add_hooks () {
		add_filter('upfront_l10n', array($this, 'add_l10n_strings'));
	}

	public function add_l10n_strings ($strings) {
		if (!empty($strings['post_data_element'])) return $strings;
		$strings['post_data_element'] = self::get_l10n();
		return $strings;
	}

	public static function get_l10n ($key=false) {
		$l10n = array(
			'author' => array(
				'author_part_title' => __('Author', 'upfront'),
				'email_part_title' => __('Email', 'upfront'),
				'url_part_title' => __('URL', 'upfront'),
				'bio_part_title' => __('Biography', 'upfront'),
				'gravatar_part_title' => __('Gravatar', 'upfront'),

				'display' => __('Display', 'upfront'),
				'display_name' => __('Display name', 'upfront'),
				'first_last' => __('First &amp; Last Name', 'upfront'),
				'last_first' => __('Last &amp; First Name', 'upfront'),
				'nickname' => __('Nickname', 'upfront'),
				'username' => __('Username', 'upfront'),
				'link_to' => __('Link To', 'upfront'),
				'website' => __('Website', 'upfront'),
				'author_page' => __('Author page', 'upfront'),

				'email_text_label' => __('Email Text Label', 'upfront'),

				'link_text' => __('Link Text', 'upfront'),

				'gravatar_size' => __('Size in px', 'upfront'),
			),
			'comments' => array(
				'cc_part_title' => __('Comment Count', 'upfront'),
				'form_part_title' => __('Comments Form', 'upfront'),
				'pagination_part_title' => __('Comments Pagination', 'upfront'),
				'comments_part_title' => __('Comments', 'upfront'),

				'warning_pagination' => __('Comments pagination is disabled in admin. Toggling this part will have no effect.', 'upfront'),

				'disable_for_post' => __('For this post:', 'upfront'),
				'disable_comments' => __('Disable comments', 'upfront'),
				'disable_trackbacks' => __('Disable trackbacks', 'upfront'),
				'disable_showing' => __('Do not show:', 'upfront'),
				'comments' => __('Comments', 'upfront'),
				'trackbacks' => __('Trackbacks', 'upfront'),
				'limit' => __('Comments per page', 'upfront'),
				'order' => __('Order by:', 'upfront'),
				'date' => __('Date', 'upfront'),
				'karma' => __('Karma', 'upfront'),
				'parent' => __('Parent', 'upfront'),
				'direction' => __('Direction:', 'upfront'),
				'asc' => __('Oldest first', 'upfront'),
				'desc' => __('Newest first', 'upfront'),
			),
			'thumb' => array(
				'fimg_part_title' => __('Feature Image', 'upfront'),

				'resize_to_fit' => __('Re-size to fit Container', 'upfront'),
				'fallback' => __('If Post Has No Feat. Image', 'upfront'),
				'hide' => __('Hide', 'upfront'),
				'use_color' => __('Use color', 'upfront'),
				'use_default_img' => __('Use default image', 'upfront'),
				'fallback_color' => __('Fallback Color', 'upfront'),
				'fallback_image' => __('Choose', 'upfront'),
			),
			'meta' => array(
				'meta_part_title' => __('Post Meta', 'upfront'),
			),
			'post' => array(
				'date_part_title' => __('Date posted', 'upfront'),
				'title_part_title' => __('Title', 'upfront'),
				'content_part_title' => __('Contents', 'upfront'),

				'date_format' => __('Date Format', 'upfront'),
				'wp_date' => __('WordPress date', 'upfront'),
				'dMY' => __('30 Jan 2015', 'upfront'),
				'MdY' => __('Jan 30 2015', 'upfront'),
				'dmY' => __('30 01 2015', 'upfront'),
				'mdY' => __('01 30 2015', 'upfront'),
				'custom_format' => __('Custom PHP Format', 'upfront'),
				'php_format' => __('PHP Format', 'upfront'),
				'reference' => __('Reference', 'upfront'),

				'left_indent' => __('Left indent', 'upfront'),
				'right_indent' => __('Right indent', 'upfront'),
				'returns_into_dividers' => __('Convert 3 Returns into Divider', 'upfront'),
				'allow_splitting' => __('Allow content splitting', 'upfront'),
				'content_part' => __('Content part', 'upfront'),
			),
			'tax' => array(
				'cats_part_title' => __('Cats & Tags', 'upfront'),
				'tags_part_title' => __('Tags', 'upfront'),

				'max_limit' => __('Show max:', 'upfront'),
				'separator' => __('Separate with', 'upfront'),
			),

			'new_tab' => __('New Tab', 'upfront'),

			// --- Legacy ---
			'loading' => __('Loading', 'upfront'),
			'error' => __('Oops, something went wrong', 'upfront'),
			'post_parts' => __('Post Parts', 'upfront'),
			'post_parts_picker' => __('Pick Post Parts to Display', 'upfront'),
			'post_parts_sorter' => __('Drag to re-order Post Parts', 'upfront'),
			'resize_featured' => __('Re-size featured image to fit container', 'upfront'),
			'edit_post_parts' => __('Edit post parts', 'upfront'),

			'css' => array(
				'container_label' => __('Element container', 'upfront'),
				'container_info' => __('The container for all posts', 'upfront'),
				'post_label' => __('Individual post', 'upfront'),
				'post_info' => __('The container for each individual post', 'upfront'),
				'post_part_label' => __('Post part', 'upfront'),
				'post_part_info' => __('General post part selector', 'upfront'),
				'date_label' => __('Date posted', 'upfront'),
				'date_info' => __('Date posted part', 'upfront'),
				'author_label' => __('Author', 'upfront'),
				'author_info' => __('Author part', 'upfront'),
				'categories_label' => __('Categories', 'upfront'),
				'categories_info' => __('Post categories list part', 'upfront'),
				'comment_count_label' => __('Comment count', 'upfront'),
				'comment_count_info' => __('Comments count part', 'upfront'),
				'content_label' => __('Content', 'upfront'),
				'content_info' => __('Main content part', 'upfront'),
				'gravatar_label' => __('Gravatar', 'upfront'),
				'gravatar_info' => __('Author gravatar part', 'upfront'),
				'read_more_label' => __('Read more', 'upfront'),
				'read_more_info' => __('Read more button part', 'upfront'),
				'post_tags_label' => __('Tags', 'upfront'),
				'post_tags_info' => __('Post tags part', 'upfront'),
				'thumbnail_label' => __('Thumbnail', 'upfront'),
				'thumbnail_info' => __('Featured image part', 'upfront'),
				'title_label' => __('Title', 'upfront'),
				'title_info' => __('Post title part', 'upfront'),
				'post_data_date_label' => __('Date', 'upfront'),
				'post_data_date_info' => __('The layer that contains publish date', 'upfront'),
				'post_data_title_label' => __('Title Wrapper', 'upfront'),
				'post_data_title_info' => __('The layer that contains post title', 'upfront'),
				'post_data_title_h1_label' => __('Title Wrapper', 'upfront'),
				'post_data_title_h1_info' => __('The layer that contains post title', 'upfront'),
				'post_data_content_label' => __('Content', 'upfront'),
				'post_data_content_info' => __('The layer that contains post content', 'upfront'),
				'post_data_content_p_label' => __('Content Paragraph', 'upfront'),
				'post_data_content_p_info' => __('The layer that contains post content', 'upfront'),
				'author_author_label' => __('Author Wrapper', 'upfront'),
				'author_author_info' => __('The layer that contains post author username', 'upfront'),
				'author_author_link_label' => __('Author Links', 'upfront'),
				'author_author_link_info' => __('Author Links', 'upfront'),
				'author_gravatar_label' => __('Gravatar', 'upfront'),
				'author_gravatar_info' => __('The layer that contains gravatar image', 'upfront'),
				'author_email_label' => __('Author Email Wrapper', 'upfront'),
				'author_email_info' => __('The layer that contains author email', 'upfront'),
				'author_url_label' => __('Author URL Wrapper', 'upfront'),
				'author_url_info' => __('The layer that contains author url', 'upfront'),
				'author_email_link_label' => __('Author Email', 'upfront'),
				'author_email_link_info' => __('Author Email', 'upfront'),
				'author_url_link_label' => __('Author URL', 'upfront'),
				'author_url_link_info' => __('Author URL', 'upfront'),
				'author_bio_label' => __('Author Bio', 'upfront'),
				'author_bio_info' => __('The layer that contains author biography', 'upfront'),
				'taxonomy_tags_label' => __('Tags Wrapper', 'upfront'),
				'taxonomy_tags_info' => __('The layer that contains all post tags', 'upfront'),
				'taxonomy_category_label' => __('Categories Wrapper', 'upfront'),
				'taxonomy_category_info' => __('The layer that contains all post categories', 'upfront'),
				'taxonomy_tags_link_label' => __('Tag Link', 'upfront'),
				'taxonomy_tags_link_info' => __('Tag link', 'upfront'),
				'taxonomy_category_link_label' => __('Category Link', 'upfront'),
				'taxonomy_category_link_info' => __('Category Link', 'upfront'),
				'featured_thumbnail_label' => __('Thumbnail Wrapper', 'upfront'),
				'featured_thumbnail_info' => __('The layer that contains featured image', 'upfront'),
				'featured_thumbnail_img_label' => __('Thumbnail Image', 'upfront'),
				'featured_thumbnail_img_info' => __('Featured image', 'upfront'),
				'post_meta_label' => __('Meta Wrapper', 'upfront'),
				'post_meta_info' => __('The layer that contains all meta contents', 'upfront'),
				'comment_count_label' => __('Comment Count', 'upfront'),
				'comment_count_info' => __('The layer that contains meta count', 'upfront'),
				'comments_label' => __('Comments', 'upfront'),
				'comments_info' => __('The layer that contains all comments', 'upfront'),
				'comments_pagination_label' => __('Pagination', 'upfront'),
				'comments_pagination_info' => __('The layer that contains pagination links', 'upfront'),
				'comment_form_label' => __('Form', 'upfront'),
				'comment_form_info' => __('The layer that contains comments form', 'upfront'),
				'comments_label' => __('Comments Wrapper', 'upfront'),
				'comments_info' => __('The layer that contains all comments', 'upfront'),
				'comment_label' => __('Comment LI', 'upfront'),
				'comment_info' => __('The LI that contains comment data', 'upfront'),
				'comment_wrapper_label' => __('Comment', 'upfront'),
				'comment_wrapper_info' => __('The layer that contains comment data', 'upfront'),
				'comment_avatar_label' => __('Avatar', 'upfront'),
				'comment_avatar_info' => __('The layer that contains comment avatar', 'upfront'),
				'comment_avatar_image_label' => __('Avatar Image', 'upfront'),
				'comment_avatar_image_info' => __('Avatar Image', 'upfront'),
				'comment_meta_label' => __('Meta', 'upfront'),
				'comment_meta_info' => __('The layer that contains comment meta', 'upfront'),
				'comment_athor_label' => __('Meta Author', 'upfront'),
				'comment_author_info' => __('Comment author link', 'upfront'),
				'comment_time_label' => __('Meta Time', 'upfront'),
				'comment_time_info' => __('The layer that contains publis time', 'upfront'),
				'comment_content_label' => __('Content', 'upfront'),
				'comment_content_info' => __('The layer that contains comment content', 'upfront'),
				'comment_content_p_label' => __('Content Paragraph', 'upfront'),
				'comment_content_p_info' => __('The layer that contains comment text', 'upfront'),
				'edit_link_label' => __('Edit Link', 'upfront'),
				'edint_link_info' => __('Edit link', 'upfront'),
				'meta_actions_label' => __('Actions Wrapper', 'upfront'),
				'meta_actions_info' => __('The layer that contains all action buttons', 'upfront'),
				'comment_reply_label' => __('Reply', 'upfront'),
				'comment_reply_info' => __('Reply button', 'upfront'),

				'reply_title_label' => __('Respond Title', 'upfront'),
				'reply_title_info' => __('Respond Title Heading', 'upfront'),
				'logged_in_label' => __('Logged In Wrapper', 'upfront'),
				'logged_in_info' => __('The layer that contains logged in info', 'upfront'),
				'logged_in_link_label' => __('Logged In Wrapper', 'upfront'),
				'logged_in_link_info' => __('The layer that contains logged in info', 'upfront'),
				'respond_label' => __('Fields Wrapper', 'upfront'),
				'respond_info' => __('The layer that contains all fields to publish comment', 'upfront'),
				'comment_input_label' => __('Input', 'upfront'),
				'comment_input_info' => __('Comment publish inputs', 'upfront'),
				'comment_textarea_label' => __('Textarea', 'upfront'),
				'comment_textarea_info' => __('Comment publish text box', 'upfront'),
				'submit_button' => __('Comment Button', 'upfront'),
				'submit_button' => __('Button to ', 'upfront'),
			),

			'elements' => array(
				'post_data' => __('Post Data', 'upfront'),
				'author' => __('Author', 'upfront'),
				'taxonomy' => __('Categories &amp; Tags', 'upfront'),
				'featured_image' => __('Featured Image', 'upfront'),
				'comments' => __('Comments', 'upfront'),
			),

			'part_date_posted' => __('Date posted', 'upfront'),
			'part_author' => __('Name', 'upfront'),
			'part_gravatar' => __('Gravatar', 'upfront'),
			'part_author_email' => __('Email', 'upfront'),
			'part_author_url' => __('Website', 'upfront'),
			'part_author_bio' => __('Biography', 'upfront'),
			'part_comment_count' => __('Comment count', 'upfront'),
			'part_comment_form' => __('Comment form', 'upfront'),
			'part_comments' => __('Comments', 'upfront'),
			'part_comments_pagination' => __('Comments pagination', 'upfront'),
			'part_featured_image' => __('Featured Image', 'upfront'),
			'part_title' => __('Title', 'upfront'),
			'part_content' => __('Content', 'upfront'),
			'part_read_more' => __('Read More', 'upfront'),
			'part_tags' => __('Tags', 'upfront'),
			'part_categories' => __('Cats & Tags', 'upfront'),
			'part_meta' => __('Meta', 'upfront'),
			'part_cats_and_tags' => __("Cats & Tags", 'upfront'),
			'part_post_data' => __("Post Data", 'upfront'),
			'image_options' => __('Image Options'),
			'lock_image' => __('Lock Image'),
			'swap_image' => __('Swap Image', 'upfront'),
			'edit_image' => __('Edit image', 'upfront'),
			'edit' => __('Edit', 'upfront'),
			'edit_html' => __('Edit HTML', 'upfront'),
			'edit_template' => __('Edit Template', 'upfront'),
			'custom_markup' => __('Custom Markup', 'upfront'),
			'format' => __('Format', 'upfront'),
			'max_categories' => __('max. categories', 'upfront'),
			'max_tags' => __('max. tags', 'upfront'),
			'hide_comments' => __('Hide if no comments', 'upfront'),
			'limit_words' => __('Limit words', 'upfront'),
			'resize_to_fit' => __('Re-size to fit container', 'upfront'),
			'size_px' => __('Size in px', 'upfront'),

			'meta_insert' => __('Insert meta field', 'upfront'),
			'meta_toggle' => __('Hide hidden fields', 'upfront'),
			'meta_fields' => __('Available meta fields', 'upfront'),
		);
		return !empty($key)
			? (!empty($l10n[$key]) ? $l10n[$key] : $key)
			: $l10n
		;
	}
}