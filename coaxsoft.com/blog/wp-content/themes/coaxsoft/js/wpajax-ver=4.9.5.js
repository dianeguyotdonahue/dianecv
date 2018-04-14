jQuery('.blog_post-like button').click(function($) {
		var data = {
			action: 'add_like',
			id: jQuery(this).attr('post-id')
		};
		jQuery.post( myajax.url, data, function(response) {
			jQuery('.blog_post-like span.counter').html(response);
		});
	});
var more_posts = 0;
	jQuery('.blog_pagination button').click(function(){
		more_posts += 3;
		var data = {
			action: 'more_posts',
			count: more_posts
		};
		jQuery.post( myajax.url, data, function(response) {
			jQuery('.blog_posts').append(response);
		});
	});