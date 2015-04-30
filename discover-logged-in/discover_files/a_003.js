/**
 * js library to generate passwords
 * dependencies: underscore.js
 * insprired by https://lastpass.com/generatepassword.php
 */

// Make sure the 'wpcom' global object exists
window.wpcom = window.wpcom || {};

(function($){
	wpcom.password_generator = {

		default_use_upper_chars : true,
		default_use_digits : true,
		default_use_special_chars : true,
		default_use_ambiguous_chars : false,
		default_require_at_least_one_of_each : true,
		lower_chars : 'abcdefghjkmnpqrstuvwxyz',
		ambiguous_lower_chars : 'ilo',
		upper_chars : 'ABCDEFGHJKMNPQRSTUVWXYZ',
		ambiguous_upper_chars : 'ILO',
		digit_chars : '23456789',
		ambiguous_digit_chars : '10',
		special_chars : '!@#$%^&*',
		min_length : 7,
		max_length : 72, // WordPress doesn't handle passwords longer than this properly, see: http://codemebaby.wordpress.com/2012/10/25/wondering-about-the-maximum-password-length-in-wordpress/

		generate : function( length, use_upper_chars, use_digits, use_special_chars, use_ambiguous_chars, require_at_least_one_of_each ) {
			this.parse_args( length, use_upper_chars, use_digits, use_special_chars, use_ambiguous_chars, require_at_least_one_of_each );
			this.determine_chars_to_use();
			this.generate_password();
			return this.password;
		},

		parse_args : function( length, use_upper_chars, use_digits, use_special_chars, use_ambiguous_chars, require_at_least_one_of_each ) {
			this.length = ( ! _.isUndefined( length ) && _.isNumber( length ) ) ? length : this.generate_default_length();
			this.use_upper_chars = ( ! _.isUndefined( use_upper_chars ) ) ? use_upper_chars : this.default_use_upper_chars;
			this.use_digits = ( ! _.isUndefined( use_digits ) ) ? use_digits : this.default_use_digits;
			this.use_special_chars = ( ! _.isUndefined( use_special_chars ) ) ? use_special_chars : this.default_use_special_chars;
			this.use_ambiguous_chars = ( ! _.isUndefined( use_ambiguous_chars ) ) ? use_ambiguous_chars : this.default_use_ambiguous_chars;
			this.require_at_least_one_of_each = ( ! _.isUndefined( require_at_least_one_of_each ) ) ? require_at_least_one_of_each : this.default_require_at_least_one_of_each;
		},

		generate_default_length : function() {
			return wpcom.password_generator.get_random( 12, 35 );
		},

		determine_chars_to_use : function() {
			var chars_to_use = this.lower_chars;

			if ( this.use_ambiguous_chars )
				chars_to_use += this.ambiguous_lower_chars;

			if ( this.use_upper_chars )
				chars_to_use += this.upper_chars;

			if ( this.use_upper_chars && this.use_ambiguous_chars )
				chars_to_use += this.ambiguous_upper_chars;

			if ( this.use_digits )
				chars_to_use += this.digit_chars;

			if ( this.use_digits && this.use_ambiguous_chars )
				chars_to_use += this.ambiguous_digit_chars;

			if ( this.use_special_chars )
				chars_to_use += this.special_chars

			this.chars_to_use = chars_to_use;
		},

		generate_password : function() {

			// enforce min length
			if ( this.length < this.min_length )
				this.length = this.min_length

			// enforce max length
			if ( this.length > this.max_length )
				this.length = this.max_length;

			var positions = new Array();

			if ( this.require_at_least_one_of_each ) {
				positions[positions.length] = 'L';

				if ( this.use_upper_chars )
					positions[positions.length] = 'U';

				if ( this.use_digits )
					positions[positions.length] = 'D';

				if ( this.use_special_chars )
					positions[positions.length] = 'S';
			}

			while ( positions.length < this.length )
				positions[positions.length] = 'A';

			positions.sort(function(){
				return wpcom.password_generator.get_random(0, 1) * 2 - 1;
			});

	  	var pass = '';
	  	var usechars;
			for( var i = 0; i < this.length; i++ ) {
				switch ( positions[i] ) {
					case 'L' :
						usechars = this.lower_chars;
						break;
					case 'U' :
						usechars = this.upper_chars;
						break;
					case 'D' :
						usechars = this.digit_chars;
						break;
					case 'S' :
						usechars = this.special_chars;
						break;
					case 'A' :
						usechars = this.chars_to_use;
						break;
	    	}
	    	var x = wpcom.password_generator.get_random( 0, usechars.length - 1 );
	    	pass += usechars.charAt(x);
		  }
		 	this.password = pass;
		},

		get_random : function( min, max ) {
			return Math.floor( Math.random() * (max - min + 1) ) + min;
		}

	}
}(jQuery));;
/**
 * check passwords to see if they meet the imposed standards,
 * and display a small popup indicating if all the rules are met or not
 * dependencies: jQuery, underscore.js
 *
 */

// Make sure the 'wpcom' global object exists
window.wpcom = window.wpcom || {};

(function($){
	wpcom.better_password_enforcer = {

		typing_timer : 0,
		done_typing_interval : 800, // in milliseconds

		init : function( form_selector, pass1_field_selector, loading_selector, test_results_selector, submit_field_selector ) {

			// setup provided selectors/elements
			this.form_selector = form_selector;
			this.$form = $( this.form_selector );
			this.pass1_field_selector = pass1_field_selector;
			this.$pass1 = $( this.pass1_field_selector );
			this.submit_field_selector = submit_field_selector;
			this.$submit_field = $( this.submit_field_selector );
			this.test_results_selector = test_results_selector;
			this.$test_results_div = $( this.test_results_selector );
			this.loading_selector = loading_selector;
			this.$loading = $( this.loading_selector );

			// setup internal selectors/elements
			this.generate_password_button_selector = '#wp-generate-password';
			this.$generate_password_button = $( this.generate_password_button_selector );
			this.hide_button_id = 'wp-hide-password';
			this.hide_button_selector = '#' + this.hide_button_id;
			this.$hide_button = $( this.hide_button_selector );
			this.show_button_id = 'wp-show-password';
			this.show_button_selector = '#' + this.show_button_id;
			this.$show_button = $( this.show_button_selector );

			// setup wp_localize_script data
			this.min_length = better_password_enforcer_data.min_length;
			this.tests = better_password_enforcer_data.tests;
			this.ajax_url = better_password_enforcer_data.ajax_url;
			this.hide_button_text = better_password_enforcer_data.hide_button_text;
			this.show_button_text = better_password_enforcer_data.show_button_text;
			this.pro_tip_text = better_password_enforcer_data.pro_tip_text;
			this.all_good_text = better_password_enforcer_data.all_good_text;
			this.locale = $( '[name=locale]' ).val();

			// run functions
			this.init_show_hide_button();
			this.init_password_generator();
			this.init_password_checker();

		},

		init_disable_form : function() {
			// Make sure the form buttons are disabled once the page is done loading.
			$().ready( function() {
				if ( '' == wpcom.better_password_enforcer.$pass1.val() )
					wpcom.better_password_enforcer.toggle_submit_field( 'disable' );
			} );

			// prevent submission if form is currently disabled
			this.$form.on( 'submit', function(e){
				if ( $( wpcom.better_password_enforcer.submit_field_selector ).prop( 'disabled' ) )
					e.preventDefault();
			})
		},
		hide_password : function( e ) {
			e.preventDefault();
			var $this_button = $( wpcom.better_password_enforcer.hide_button_selector );
			wpcom.better_password_enforcer.$pass1.prop( 'type', 'password' );
			$this_button.attr( 'id', wpcom.better_password_enforcer.show_button_id );
			$this_button.text( wpcom.better_password_enforcer.show_button_text );
			new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv&x_account-protection-actions=hide-password&rand=' + Math.random();
		},
		show_password : function( e ) {
				e.preventDefault();
				var $this_button = $( wpcom.better_password_enforcer.show_button_selector );
				wpcom.better_password_enforcer.$pass1.prop( 'type', 'text' );
				$this_button.attr( 'id', wpcom.better_password_enforcer.hide_button_id );
				$this_button.text( wpcom.better_password_enforcer.hide_button_text );
				new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv&x_account-protection-actions=show-password&rand=' + Math.random();
		},
		init_show_hide_button : function() {
			this.$form.on( 'click', this.hide_button_selector, this.hide_password );
			this.$form.on( 'click', this.show_button_selector, this.show_password );
		},

		init_password_generator : function() {
			this.$form.on( 'click', this.generate_password_button_selector, function(e){
				e.preventDefault();
				var password = wpcom.password_generator.generate();
				wpcom.better_password_enforcer.hide_loading();
				wpcom.better_password_enforcer.hide_test_results();
				wpcom.better_password_enforcer.$pass1.val( password ).trigger('change');
				wpcom.better_password_enforcer.toggle_submit_field( 'enable' );
				wpcom.better_password_enforcer.$test_results_div.removeClass( 'error' );
				wpcom.better_password_enforcer.show_password( e );
				$generated_password_element = $('<input/>').attr('type', 'hidden').attr('name', 'generated_password').val( password );
				wpcom.better_password_enforcer.$form.append( $generated_password_element );
				new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv&x_account-protection-actions=generate-password&rand=' + Math.random();
			});
		},

		init_password_checker : function() {
			this.$form.on( 'keyup', this.pass1_field_selector, function(e){

				// Ignore tab or return, we only want to check actual typing
				if ( 13 == e.which || 9 == e.which )
					return;

				e.preventDefault();

				wpcom.better_password_enforcer.hide_loading();
				wpcom.better_password_enforcer.hide_test_results();
				clearTimeout( wpcom.better_password_enforcer.typing_timer );
				var pass_val = $( wpcom.better_password_enforcer.pass1_field_selector ).val();
				var gen_pass = $( "input[name='generated_password']" ).val();

				//Password is empty
				if ( _.isEmpty( pass_val ) || '' === pass_val ) {
					wpcom.better_password_enforcer.toggle_submit_field( 'disable' );
					return;
				}

				//Password is a generated one
				if ( ! _.isEmpty( gen_pass ) && pass_val === gen_pass ) {
					wpcom.better_password_enforcer.toggle_submit_field( 'enable' );
					return;
				}

				//Unknown value, let's check it
				wpcom.better_password_enforcer.toggle_submit_field( 'disable' );
				wpcom.better_password_enforcer.typing_timer = setTimeout( wpcom.better_password_enforcer.test_password_ajax, wpcom.better_password_enforcer.done_typing_interval );

			});
		},

		toggle_submit_field : function( enable_or_disable ) {
			should_be_disabled = 'disable' == enable_or_disable ? true : false;
			$( wpcom.better_password_enforcer.submit_field_selector ).each( function() {
				$( this ).prop( 'disabled', should_be_disabled );
				if ( should_be_disabled )
					$( this ).addClass( 'disabled' );
				else
					$( this ).removeClass( 'disabled' );
			} );
		},

		test_password_ajax : function() {
			wpcom.better_password_enforcer.$pass1.trigger( 'validation-start' );
			wpcom.better_password_enforcer.show_loading();
			wpcom.better_password_enforcer.$test_results_div.removeClass( 'success warning' );
			$.post( wpcom.better_password_enforcer.ajax_url, {
				locale: wpcom.better_password_enforcer.locale,
				action: 'better_password_test',
				password: wpcom.better_password_enforcer.$pass1.val()
			}, function( test_results ){
					wpcom.better_password_enforcer.ajax_tests_done( test_results );
			});
		},

		ajax_tests_done : function( test_results ) {
			var test_results = $.parseJSON( test_results );
			var failed_results = {};
			var error_to_display = null;

			// check the "required" ajax tests first and display error if any
			if ( ! test_results.passed && 'undefined' != typeof( test_results.test_results.failed ) ) {
				failed_results = test_results.test_results.failed;
				if ( ! _.isEmpty( failed_results ) ) {
					error_to_display = _.first( failed_results );
					wpcom.better_password_enforcer.display_error( error_to_display );
					return;
				}
			}

			// if we made it here, there were no errors, so display the all good message
			wpcom.better_password_enforcer.display_all_good();

		},

		run_js_tests : function() {
			results = new Array();
			$.each( wpcom.better_password_enforcer.tests, function( type_of_tests, tests ){
				if ( 'preg_match' == type_of_tests ) {
					$.each( tests, function( name, test ) {
						test_result = wpcom.better_password_enforcer.run_regex_test( test );
						if ( true !== test_result )
							results.push( { test_name: name, explanation: test_result } );
					});
				}
			});

			return results;
		},

		run_regex_test : function( test ) {
			var check = new RegExp( test.pattern );

			var password = wpcom.better_password_enforcer.$pass1.val();
			if ( ! _.isUndefined( test.trim ) )
				password = password.substring( 1, password.length - 1 );

			var result = check.test( password );

			if ( !result )
				return test.error;
			else
				return true;
		},

		display_error : function( error ) {
			wpcom.better_password_enforcer.display_test_results( error.explanation, 'error' );
		},

		display_warning : function( warning ) {
			wpcom.better_password_enforcer.display_test_results( warning.explanation, 'warning' );
		},

		display_all_good : function() {
			wpcom.better_password_enforcer.display_test_results( wpcom.better_password_enforcer.all_good_text, 'success' );
		},

		display_test_results : function( text, css_class ) {
			if ( 'error' == css_class )
				wpcom.better_password_enforcer.toggle_submit_field( 'disable' );
			else
				wpcom.better_password_enforcer.toggle_submit_field( 'enable' );

			if ( 'warning' == css_class )
				text = wpcom.better_password_enforcer.pro_tip_text + ' ' +  text;

			if ( 'success' === css_class )
				wpcom.better_password_enforcer.$test_results_div.removeClass( 'error' );
			else
				wpcom.better_password_enforcer.$test_results_div.addClass( 'error' );

			wpcom.better_password_enforcer.hide_loading();
			wpcom.better_password_enforcer.$test_results_div.text( text ).addClass( 'currently-showing ' + css_class ).show();
			wpcom.better_password_enforcer.$pass1.trigger( 'validation-complete' );
		},

		hide_test_results : function() {
			wpcom.better_password_enforcer.$test_results_div.text( '' ).removeClass( 'currently-showing warning success' );
		},

		show_loading : function() {
			wpcom.better_password_enforcer.$loading.addClass( 'currently-loading' );
		},

		hide_loading : function() {
			wpcom.better_password_enforcer.$loading.removeClass( 'currently-loading' );
		}

	}
}(jQuery));
;
(function($){
	var ajaxurl, console, wpcom, i18n, translations, lang, follow_recommendations, Hogan;

	console = window.console;
	ajaxurl = window.ajaxurl || '/wp-admin/admin-ajax.php';
	wpcom = window.wpcom || {};
	Hogan = window.Hogan;

	if ( !wpcom.events ) {
		wpcom.events = _.extend( {}, Backbone.Events );
	}

	i18n = window.wpcom_follow_recos_i18n || {};
	translations = {
		Follow: i18n.Follow || 'Follow',
		Following: i18n.Following || 'Following',
		More: i18n.More || 'More',
		'You May Like': i18n[ 'You May Like' ] || 'You May Like'
	};
	lang = i18n.lang || 'en';

	// viewport detection adapted from http://upshots.org/javascript/jquery-test-if-element-is-in-viewport-visible-on-screen
	function isInViewport ( $el ) {
		var width, $win, viewport, bounds,
			height = $el.outerHeight();

		if ( !height ) {
			return;
		}
		width = $el.outerWidth();
		if ( !width ) {
			return;
		}
		$win = $(window);
		viewport = {
			top: $win.scrollTop(),
			left: $win.scrollLeft()
		};
		viewport.right = viewport.left + $win.width();
		viewport.bottom = viewport.top + $win.height();

		bounds = $el.offset();
		bounds.right = bounds.left + height;
		bounds.bottom = bounds.top + width;

		return (
			viewport.right > bounds.left &&
			viewport.left < bounds.right &&
			viewport.bottom > bounds.top &&
			viewport.top < bounds.bottom
		);
	}

	follow_recommendations = {
		itemClass: 'follow-recommendations-item',

		// Limit views from all showing the same recos and use localStorage to mix things up as well.
		controller: {
			parentViews:                          [],
			initialized:                       false,
			shown_blogs:                          {},
			seen_blogs_ls:                        [],
			seen_in_viewport:                     {},
			impressions_recorded:                 [],

			initialize: function() {
				var t = this;
				// only run this once
				if ( t.initialized ) {
					return t;
				}
				try {
					// These were seen in the viewport recently
					t.seen_blogs_ls = JSON.parse( localStorage.getItem( 'follow_recommendations.seen_blogs' ) ) || [];
				} catch( e ){
					if ( console && 'function' === typeof console.error ) {
						console.error( 'error in: controller.initialize()' );
						console.error( e );
					}
				}

				t.trackImpressions();
				t.initialized = true;
				return t;
			},

			show: function( blog_id, follow_reco_id, follow_source ) {
				var t = this;
				if ( 'undefined' !== typeof t.shown_blogs[ blog_id ] || !t.blogIsShowable( blog_id ) ) {
					return false;
				}

				t.shown_blogs[ blog_id ] = {
					blog_id: blog_id,
					follow_reco_id: follow_reco_id,
					follow_source: follow_source
				};

				return true;
			},

			blogIsShowable: function( blog_id ) {
				blog_id = parseInt( blog_id, 10 );
				if ( !blog_id ) {
					return false;
				}
				return !_.contains( this.blogsShownThisTime(), blog_id );
			},

			blogsShownThisTime: function() {
				var parsed,
					t = this;

				parsed = _.map( _.keys( t.shown_blogs ), function( blog_id ) {
					return parseInt( blog_id, 10 );
				});

				return _.filter( parsed, function( blog_id ) {
					return blog_id && !isNaN( blog_id );
				});
			},

			blogsSeenThisTime: function() {
				return _.pluck( this.seen_in_viewport, 'blog_id' );
			},

			blogsSeenRecently: function() {
				return _.union( this.blogsSeenThisTime(), this.seen_blogs_ls );
			},

			hasBlogBeenSeenInViewport: function( blog_id ) {
				return !_.isEmpty( this.seen_in_viewport[ blog_id ] );
			},

			setBlogHasBeenSeenInViewport: function( blog ) {
				var blog_id,
					t = this;

				blog_id = parseInt( blog.blog_id, 10 );
				if ( blog_id ) {
					t.seen_in_viewport[ blog_id ] = blog;

					// batch the IO
					clearTimeout( t.netTimeout );
					t.netTimeout = setTimeout( function() {
						t.flushToServer();
					}, 500 );

					clearTimeout( t.lsTimeout );
					t.lsTimeout = setTimeout( function() {
						t.flushToLs();
					}, 500 );

				}
			},

			// keep a copy of what has been seen recently, so we can try to show different ones next time
			flushToLs: function() {
				var oldLs, seen, newLs,
					t = this,
					maxBlogs = 24;

				try {
					oldLs = t.seen_blogs_ls || [];
					seen = t.blogsSeenThisTime();

					// prioritize saving those seen this time. Fill to the max w/ previously seen (shuffled)
					newLs = ( seen.length >= maxBlogs ) ? seen : _.union( seen, _.shuffle( oldLs ) );

					// keep at most maxBlogs around
					newLs = newLs.slice( 0, maxBlogs );
					t.seen_blogs_ls = newLs;
					localStorage.setItem( 'follow_recommendations.seen_blogs', JSON.stringify( t.seen_blogs_ls ) );
				} catch ( e ) {
					if ( console && 'function' === typeof console.error ) {
						console.error( 'error in: flushToLs()' );
					}
				}
			},

			// record impressions to the server in batches
			flushToServer: function() {
				var t = this,
					impressions = [];

				_.each( t.seen_in_viewport, function( blog, blog_id ) {
					if ( t.impressions_recorded[ blog_id ] ) {
						return;
					}

					t.impressions_recorded[ blog_id ] = true;
					impressions.push( blog );
				});

				if ( impressions.length ) {
					$.ajax({
						url: ajaxurl,
						type: 'POST',
						cache: false,
						data: {
							action: 'follow_recos_record_impressions',
							impressions: impressions
						}
					});
				}
			},

			trackImpressions: function() {
				var doTrack, impressionInterval,
					t = this;

				doTrack = function() {
					_.each( t.parentViews, function( parent ) {
						if ( parent.$el.not( ':visible' ).length ) {
							return;
						}
						_.each( parent.childViews, function( child ) {
							var $el, blog_id;
							if ( child.hasBeenSeen ) {
								return;
							}
							$el = child.$el;
							if ( $el.not( ':visible' ).length ) {
								return;
							}
							blog_id = parseInt( $el.data( 'blog_id' ), 10 );
							if ( !blog_id ) {
								return;
							}
							if ( t.hasBlogBeenSeenInViewport( blog_id ) ) {
								return;
							}
							if ( child.$el && child.$el.length && isInViewport( child.$el ) ) {
								child.recordImpression();
								return;
							}
						});
					});
				};

				// track every second
				// @todo move the check to a scroll handler & event listener
				impressionInterval = setInterval( function() {
					doTrack();
				}, 1000 );
			}
		},

		models: {
			Blog: Backbone.Model.extend({
				defaults: {
					blog_id:         0,
					follow_reco_id:  0,
					title:          '',
					image:          '',
					url:            '',
					reason:         '',
					score:           0,
					nonce:           ''
				},

				validate: function() {
					if ( parseInt( this.blog_id, 10 ) < 2 ) {
						return 'invalid blog_id';
					}
				}
			})
		},
		collections: {},
		views: {}
	};

	follow_recommendations.controller.initialize();

	follow_recommendations.collections.BlogsToFollow = Backbone.Collection.extend({
		model: follow_recommendations.models.Blog,
		fetching: false,

		ajax: function( args, method ) {
			method = method || '';
			method = ( 'post' === method.toLowerCase() ) ? 'POST' : 'GET';

			return $.ajax({
				type: method,
				url: ajaxurl,
				cache: false,
				data: args
			});
		},

		fetchBlogs: function( num, exclude ) {
			var args,
				t = this;

			num = parseInt( num, 10 );
			if ( !num ) {
				num = 10;
			}

			args = {
				action: 'follow_recos_get_recos',
				exclude: exclude,
				lang: lang,
				number: num,
				follow_source: t.follow_source || 'other'
			};

			t.fetching = t.ajax( args ).always( function() {
				setTimeout( function() {
					// Block subsequent requests for a time
					t.fetching = false;
				}, 2000 );
			} ).promise();

			return t.fetching;
		},

		// POST to the endpoint. Returns a promise so the view can react accordingly to success or failure
		followBlog: function( blog_id ) {
			var model,
				t = this;

			blog_id = parseInt( blog_id, 10 );
			model = t.get( blog_id );

			if ( blog_id !== model.get( 'id' ) ) {
				return (new $.Deferred()).reject( 'Invalid blog_id' );
			}

			return t.ajax({
				action: 'follow_recos_follow_blog',
				blog_id: blog_id,
				follow_reco_id: model.get( 'follow_reco_id' ),
				follow_source: t.follow_source || 'other',
				nonce: model.get( 'nonce' )
			}, 'POST' );
		},

		// Tell the server the user doesn't want to see this recommendation again
		hideBlog: function( blog_id ) {
			var model, source,
				t = this;

			blog_id = parseInt( blog_id, 10 );
			model = t.get( blog_id );

			if ( blog_id !== model.get( 'id' ) ) {
				return (new $.Deferred()).reject( 'Invalid blog_id' );
			}

			source = t.follow_source || 'other';

			// @todo retry on failure
			return t.ajax({
				action: 'follow_recos_hide_blog',
				blog_id: model.get( 'id' ),
				follow_source: source,
				follow_reco_id: model.get( 'follow_reco_id' ),
				nonce: model.get( 'nonce' )
			}, 'POST' );
		}
	});

	/* ParentView is the main entry point for this feature
	 *  Builds the wrapper and constructs the ItemView Child Views
	 */
	follow_recommendations.views.ParentView = Backbone.View.extend({
		controller: follow_recommendations.controller,
		childViews: {},
		maxItems: 2,
		wrapperClass: 'follow-recommendations-wrapper',
		childClass: follow_recommendations.itemClass,

		initialize: function( options ) {
			var t = this;
			if ( !isNaN( options.maxItems ) ) {
				t.maxItems = Math.max( 1, parseInt( options.maxItems, 10 ) );
			}

			t.collection.follow_source = options.follow_source || 'other';

			t.collection.comparator = function( model ) {
				// weight by score attribute (higher the better) w/ a blog_id tie breaker (the lower the better)
				return -( 2 * model.get( 'score' ) + ( 1 / model.id ) );
			};

			// event listener for the removal of a blog from the collection
			t.collection.on( 'remove', function( model ) {
				var idRemoved, exclude, idToShow, $el,
					showing = t.getShowingBlogs();

				if ( showing.length < t.maxItems ) {
					// Get more recommendations if there aren't many left in the collection
					if ( t.collection.models.length < t.maxItems + 2 ) {
						t.getMoreBlogs();
					}
				}
				// only continue if there's room to show another suggestion
				else {
					return;
				}

				idRemoved = model.get( 'id' ) || 0;

				// exclude seen blogs and the one we just removed from the collection
				exclude = _.union( [ model.id ], _.union( showing, t.controller.blogsSeenRecently() ) );
				idToShow = t.getIdToShow( exclude );

				// Reuse the DOM element of the View that was just dismissed
				$el = ( 'undefined' === typeof t.childViews[idRemoved] ) ? null : t.childViews[idRemoved].$el;

				if ( idToShow ) {
					if ( !t.showBlog( idToShow, $el ) ) {
						t.getMoreBlogs();
					}
				} else {
					t.getMoreBlogs();
				}

				delete t.childViews[idRemoved];
			});

			t.collection.on( 'gotMoreBlogs', function() {
				t.tryToFill();
			});

			t.getMoreBlogs();

		},

		// find a blog to suggest from the collection
		getIdToShow: function( exclude ) {
			var ids, i, _exclude,
				t = this;

			ids = t.collection.pluck( 'blog_id' );
			if ( !exclude || !_.isArray( exclude ) ) {
				exclude = [];
			}
			for ( i = 0; i < ids.length; i++ ) {
				// don't include those that should be excluded
				_exclude = _.union( exclude, t.controller.blogsShownThisTime(), t.controller.blogsSeenRecently() );
				if ( _.contains( _exclude, parseInt( ids[i], 10 ) ) || !t.controller.blogIsShowable( ids[i] ) ) {
					continue;
				}
				return ids[i];
			}
			return 0;
		},

		getMoreBlogs: function() {
			var t = this;

			return $.Deferred( function( dfd ) {
				var model, i,
					exclude = t.controller.blogsSeenRecently();

				if ( t.collection.fetching ) {
					return dfd.reject( 'already fetching' );
				}
				t.collection.fetchBlogs( t.maxItems * 2, exclude ).done( function(r) {
					try {
						var results = JSON.parse( r );
						if ( !results.length ) {
							return dfd.reject();
						}
						for ( i = 0; i < results.length; i++ ) {
							if ( t.controller.blogIsShowable( results[i].blog_id ) ) {
								results[i].id = results[i].blog_id;
								try {
									model = new follow_recommendations.models.Blog( results[i] );
									t.collection.add( model );
								} catch( e ) {
									if ( console && 'function' === typeof console.error ) {
										console.error( 'error in: adding result: ' );
									}
								}
							}
						}
						t.collection.trigger( 'gotMoreBlogs' );
						return dfd.resolve();
					} catch( e ) {
						// if the response doesn't parse, display an error in the console
						if ( console && 'function' === typeof console.error ) {
							console.error( 'error in: getMoreBlogs()' );
						}
						return dfd.reject();
					}
				});
			});
		},

		// create a child view from a blog_id or Blog model. second param is an optional jQuery element to replace
		showBlog: function( blog, $el ) {
			var id,
				t = this,
				model = t.collection.get( blog );

			if ( !model ) {
				return false;
			}
			id = parseInt( model.get( 'id' ), 10 );

			if ( !t.controller.show( id, model.get( 'follow_reco_id' ), t.collection.follow_source ) ) {
				t.collection.remove( id );
				return false;
			}

			t.render();

			t.childViews[ id ] = new follow_recommendations.views.ItemView({
				$el: $el,
				$parent: t.$childWrapper,
				className: t.childClass,
				model: model
			});

			return true;
		},

		getShowingBlogs: function() {
			var t = this, blogs = [];
			t.$( '.' + t.childClass ).filter( ':visible' ).each( function( i, el ) {
				var blog_id = parseInt( $(el).data( 'blog_id' ), 10 ) || 0;
				if ( blog_id ) {
					blogs.push( blog_id );
				}
			});
			return blogs;
		},

		isFull: function() {
			return this.getShowingBlogs().length >= this.maxItems;
		},

		tryToFill: function() {
			var t = this,
				i = 0,

				// how long between attempts in ms
				time = 1000,

				// how many times to try
				maxIntervals = 30;

			clearInterval( t.fillerInterval );
			t.fillerInterval = setInterval( function() {
				var limit, j, idToShow, $el;

				i++;

				if ( t.isFull() || i >= maxIntervals ) {
					clearInterval( t.fillerInterval );
					return;
				}

				// number of open spots
				limit = t.maxItems - t.getShowingBlogs().length;
				for ( j = 0; ( j < limit ); j++ ) {
					if ( t.isFull() ) {
						return;
					}

					idToShow = t.getIdToShow();
					if ( !idToShow ) {
						// kick off an async request -- it will trigger another call to tryToFill
						t.getMoreBlogs();
						clearInterval( t.fillerInterval );
						return;
					}

					// use any empty placeholders
					$el = t.$( '.' + t.childClass + ':empty:first' );
					if ( !$el.length ) {
						$el = null;
					}

					t.showBlog( t.collection.get( idToShow ), $el );
				}
			}, time );
		},

       replaceAllBlogs: function() {
           var t = this,
               deferreds = [],
               showing;

           if ( t._replacingAll && t._replacingAll.state && t._replacingAll.state() === 'pending' ) {
               return ($.Deferred()).reject( 'one at a time' );
           }

           showing = t.getShowingBlogs();

           t._replacingAll = $.Deferred( function( dfd ) {
               _.each( showing, function( blogId ) {
                   var childView = t.childViews[ blogId ];
                   if ( !childView ) {
                       return;
                   }

                   deferreds.push( childView.fadeOut().done( function() {
                       t.collection.remove( blogId );
                   } ) );
               } );

               // When the animations are all done, delay, then resolve this $.Deferred so it can be run again
               $.when( deferreds ).then( function() {
                   setTimeout( function() {
                       dfd.resolve();
                       t.tryToFill();
                   }, 3000 );
               } );
           } ).promise();
       },

		render: function() {
			var $header,
				t = this;

			if ( !t.collection.length ) {
				return;
			}

			if ( t.hasRendered ) {
				return;
			}
			t.hasRendered = true;

			$header = $( '<li class="sidebar-header you-may-like">' + translations[ 'You May Like' ] + '<span class="rec-more"><div class="noticon noticon-refresh"></div>' + translations.More + '</span></li>' );
			t.$childWrapper = $( '<ul />' ).addClass( t.wrapperClass );

			t.$el
				.empty()
				.append( t.$childWrapper )
				.parent().show({
					done: function() { t.$el.show(); }
				})
			;
			t.$el.children( '.follow-recommendations-wrapper' ).prepend( $header );

			t.bindUI();
			return t;
       },

       bindUI: function() {
           var t = this;
           $( '.rec-more' ).off( 'click' ).on( 'click', function() {
               t.replaceAllBlogs();
           } );
		}
	});

	/* Child View that actually shows the UI
	 *  Construct with options:
	 *    $parent:   the jQuery object that will contain the view's UI
	 *    className: the name of the DOM class -- hardcoded in the ParentView
	 *    model:     The Blog Backbone model
	 *    $el:       The optional jQuery object to replace
	*/
	follow_recommendations.views.ItemView = Backbone.View.extend({
		hasBeenSeen: false,
		tagName: 'li',

		// use blavatar for image if there is one -- otherwise owner's gravatar
		// @todo hovercard.  do we even have one for blavatar?
		// @todo serve precompiled
		template: Hogan.compile(' \
				<a class="rec-title" href="{{url}}" target="_blank" title="{{title}}"> \
					<img alt="" width="58" height="58" class="gravatar" src="{{image}}" /> \
					<b>{{title}}</b> \
					{{#reason}}<small>{{{reason}}}</small>{{/reason}} \
				</a> \
				<a href="#" class="btn-follow" title="{{Follow}}" data-blog_id={{id}}><span>Follow</span></a> \
				<div class="btn-close noticon noticon-close-alt" title="Don\'t show this again."></div> \
			'),

		initialize: function( options ) {
			var t = this;
			t.options = options || {};
			t.blog_id = t.model.get( 'id' ) || 0;

			if ( t.blog_id ) {
				t.render();
			}
		},

		bindUI: function() {
			var t = this;

			// Clicking the X removes the model from the collection which triggers the 'remove' action
			t.$( '.btn-close' ).off( 'click.followRecs' ).one( 'click.followRecs', function(e) {
				e.preventDefault();

				t.model.collection.hideBlog( t.model.get( 'id' ) );

				// don't wait for the response before removing the UI
				t.fadeOut().done( function() {
					t.model.collection.remove( t.model );
				});
			});

			t.$( 'a.btn-follow' ).off( 'click.followRecs' ).on( 'click.followRecs', function( e ) {
				var $original = $(this),
					$replacement = $( '<span title="' + translations.Following + '" class="blog-following">Followed!</span>'  );

				e.preventDefault();

				$original.replaceWith( $replacement );

				t.model.collection.followBlog( t.model.get( 'id' ) );

				t.fadeOut().done( function() {
					t.model.collection.remove( t.model );
				});
			});
		},

		// Track impessions so we can determine CTR
		recordImpression: function() {
			var blog,
				t = this;

			this.hasBeenSeen = true;
			blog = {
				blog_id: t.blog_id,
				follow_reco_id: t.model.get( 'follow_reco_id' ) || 'other',
				follow_source: t.model.collection.follow_source || 'other'
			};
			follow_recommendations.controller.setBlogHasBeenSeenInViewport( blog );
		},

		/**
		 * Transition the item to invisible.
		 * Returns a deferred.promise for the animation so the caller knows when it's .done()
		 * Uses CSS3 transitions for bacground color and opacity
		 */
		fadeOut: function() {
			var t = this;

			return $.Deferred( function( dfd ) {
				t.$el.css( {
					'-webkit-transition': 'all 400ms ease',
					'-moz-transition': 'all 400ms ease',
					'-ms-transition': 'all 400ms ease',
					'-o-transition': 'all 400ms ease',
					'transition': 'all 400ms ease',
					'opacity': 0.6
				} );

				// wait for the first transition
				setTimeout( function() {
					// hide it
					t.$el.css( {
						'opacity': '0'
					} );

					// wait for the second transition
					setTimeout( function() {
						t.$el
							.html( '' )
							.removeData( 'blog_id' )
						;

						// done
						return dfd.resolve();
					}, 600 );
				}, 420 );
			}).promise();
		},

		render: function() {
			var $passedEl, localized,
				t = this;

			$passedEl = t.options.$el || [];
			if ( $passedEl.length ) {
				$passedEl.empty();
				t.setElement( $passedEl );
			}
			else {
				t.$el.appendTo( t.options.$parent );
			}
			t.$el.data( 'blog_id', t.model.get( 'id' ) ).addClass( t.className );

			// use the localized version of UI strings
			localized = _.extend( {}, t.model.attributes, { Follow: translations.Follow } );
			t.$el.css({
				'display': '',
				'opacity': ''
			});
			t.$el.html( t.template.render( localized ) );
			t.bindUI();
		}
	});

	wpcom.events.on( 'followRecos:show', function( args ) {
		var _args = {
			collection: new follow_recommendations.collections.BlogsToFollow()
		};
		_args = _.extend( _args, args );
		follow_recommendations.controller.parentViews.push( new follow_recommendations.views.ParentView( _args ) );
	});

})(jQuery);
;
