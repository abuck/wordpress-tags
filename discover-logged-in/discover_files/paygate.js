(function () {
	"use strict";
	var api_url = 'https://pay.automattic.com/v1/';
	var Request = {};

	( function() {
		/*
		 * Modified version of jQuery JSONP Core Plugin 2.4.0 (2012-08-21)
		 *
		 * https://github.com/jaubourg/jquery-jsonp
		 *
		 * Copyright (c) 2012 Julian Aubourg
		 *
		 * This document is licensed as free software under the terms of the
		 * MIT License: http://www.opensource.org/licenses/mit-license.php
		 */
		// Noop
		function noop() {}

		// Generic callback
		function genericCallback( data ) {
			lastValue = [ data ];
		}

		// Call if defined
		function callIfDefined( method , object , parameters ) {
			return method && method.apply( object.context || object , parameters );
		}

		var $ = jQuery;

		// Window
		var win = window;
		// Head element
		var head = $( "head" )[ 0 ] || document.documentElement;
		// Counter
		var count = $.now();
		// Last returned value
		var lastValue;

		// opera demands sniffing :/
		var opera = win.opera;

		// IE < 10
		var oldIE = !!$( "<div>" ).html( "<!--[if IE]><i><![endif]-->" ).find("i").length;

		// ###################### MAIN FUNCTION ##
		this.jsonp = function( xOptions ) {
			// References to xOptions members (for better minification)
			var successCallback = xOptions.success;
			var errorCallback = xOptions.error;
			var completeCallback = xOptions.complete;
			var successCallbackName = 'pg_callback' + count++;
			var charset = xOptions.charset;
			var url = xOptions.url || "";
			var data = xOptions.data || {};
			var timeout = xOptions.timeout;

			// Abort/done flag
			var done = 0;

			// Life-cycle functions
			var cleanUp = noop;

			// Request execution vars
			var firstChild;
			var script;
			var scriptAfter;
			var timeoutTimer;

			// Create the abort method
			xOptions.abort = function() {
				if ( !( done++ ) )
					cleanUp();
			};

			if ( callIfDefined( xOptions.beforeSend , xOptions , [ xOptions ] ) === false || done ) {
				return xOptions;
			}

			// Success notifier
			function notifySuccess( json ) {
				if ( !( done++ ) ) {
					cleanUp();
					// Call success then complete
					callIfDefined( successCallback , xOptions , [ json , 'success', xOptions ] );
					callIfDefined( completeCallback , xOptions , [ xOptions , 'success' ] );
				}
			}

			// Error notifier
			function notifyError( type ) {
				if ( !( done++ ) ) {
					// Clean up
					cleanUp();
					// Call error then complete
					callIfDefined( errorCallback , xOptions , [ xOptions , type ] );
					callIfDefined( completeCallback , xOptions , [ xOptions , type ] );
				}
			}

			// Install the generic callback
			// (BEWARE: global namespace pollution ahoy)
			win[ successCallbackName ] = genericCallback;

			// Create the script tag
			script = $( '<script>' )[ 0 ];
			script.id = successCallbackName;

			// Set charset if provided
			if ( charset ) {
				script.charset = charset;
			}

			if ( opera && opera.version() < 11.60 ) {
				// onerror is not supported: do not set as async and assume in-order execution.
				// Add a trailing script to emulate the event
				scriptAfter = $( '<script>' )[ 0 ];
				scriptAfter.text = "document.getElementById('" + script.id + "').onerror()";
			} else {
				// onerror is supported: set the script as async to avoid requests blocking each others
				script.async = 'async';
			}

			// Internet Explorer: event/htmlFor trick
			if ( oldIE ) {
				script.htmlFor = script.id;
				script.event = 'onclick';
			}

			// Attached event handlers
			script.onload = script.onreadystatechange = script.onerror = function ( result ) {

				// Test readyState if it exists
				if ( !script.readyState || !/i/.test( script.readyState ) ) {

					try {
						if ( script.onclick )
							script.onclick();
					} catch( _ ) {}

					result = lastValue;
					lastValue = void 0;
					if ( result )
						notifySuccess( result[ 0 ] );
					else
						notifyError( 'error' );

				}
			};

			data.callback = successCallbackName;
			// Set source
			script.src = url + ( /\?$/.test(url) ? '' : '?' ) + $.param( data );

			// Re-declare cleanUp function
			cleanUp = function() {
				if ( timeoutTimer )
					clearTimeout( timeoutTimer );
				script.onreadystatechange = script.onload = script.onerror = null;
				head.removeChild( script );
				if ( scriptAfter )
					head.removeChild( scriptAfter );
				try {
					delete win[successCallbackName];
				} catch( _ ) {
					win[successCallbackName] = void 0;
				}
			};

			// Append main script
			head.insertBefore( script , ( firstChild = head.firstChild ) );

			// Append trailing script if needed
			if ( scriptAfter )
				head.insertBefore( scriptAfter , firstChild );

			// If a timeout is needed, install it
			timeoutTimer = timeout > 0 && setTimeout( function() {
				notifyError( 'timeout' );
			} , timeout );

			return xOptions;
		};
	} ).call( Request );

	this.Paygate = {
		environment:  'production',
		setPublicKey: function( public_key ) {
			this.public_key = public_key;
		},
		setEnvironment: function( new_environment ){
			if ( new_environment === 'sandbox' ){
				this.environment = 'sandbox';
			} else {
				this.environment = 'production';
			}
		},

		createToken: function( card, doneHandler, failHandler ) {
			var api_endpoint = api_url + 'card/';
			var api_data = {
				public_key: this.public_key,
				environment: this.environment,
				card: {
					name: card.name,
					number: card.number,
					cvc: card.cvc,
					exp_month: card.exp_month,
					exp_year: card.exp_year
				}
			};
			Request.jsonp( { url: api_endpoint, data: api_data, success: doneHandler, error: failHandler });
		},
		Request: Request
	};
}).call(this);
