/* jshint onevar:false, smarttabs:true */

( function($) {

	function TiledGalleryCollection() {
		this.galleries = [];
		this.findAndSetupNewGalleries();
	}

	TiledGalleryCollection.prototype.findAndSetupNewGalleries = function() {
		var self = this;
		$( '.tiled-gallery.tiled-gallery-unresized' ).each( function() {
			self.galleries.push( new TiledGallery( $( this ) ) );
		} );
	};

	TiledGalleryCollection.prototype.resizeAll = function() {
		$.each(this.galleries, function(i, gallery) {
			gallery.resize();
		} );
	};

	function TiledGallery( galleryElem ) {
		this.gallery = galleryElem;

		this.addCaptionEvents();

		// Resize when initialized to fit the gallery to window dimensions
		this.resize();

		// Displays the gallery and prevents it from being initialized again
		this.gallery.removeClass( 'tiled-gallery-unresized' );
	}

	/**
	 * Selector for all resizeable elements inside a Tiled Gallery
	 */

	TiledGallery.prototype.resizeableElementsSelector = '.gallery-row, .gallery-group, .tiled-gallery-item img';

	/**
	 * Story
	 */

	TiledGallery.prototype.addCaptionEvents = function() {
		// Hide captions
		this.gallery.find( '.tiled-gallery-caption' ).hide();

		// Add hover effects to bring the caption up and down for each item
		this.gallery.find( '.tiled-gallery-item' ).hover(
			function() { $( this ).find( '.tiled-gallery-caption' ).stop(true, true).slideDown( 'fast' ); },
			function() { $( this ).find( '.tiled-gallery-caption' ).stop(true, true).slideUp( 'fast' ); }
		);
	};

	TiledGallery.prototype.getExtraDimension = function( el, attribute, mode ) {
		if ( mode === 'horizontal' ) {
			var left = ( attribute === 'border' ) ? 'borderLeftWidth' : attribute + 'Left';
			var right = ( attribute === 'border' ) ? 'borderRightWidth' : attribute + 'Right';
			return ( parseInt( el.css( left ), 10 ) || 0 ) +  ( parseInt( el.css( right ), 10 ) || 0 );
		} else if ( mode === 'vertical' ) {
			var top = ( attribute === 'border' ) ? 'borderTopWidth' : attribute + 'Top';
			var bottom = ( attribute === 'border' ) ? 'borderBottomWidth' : attribute + 'Bottom';
			return ( parseInt( el.css( top ), 10 ) || 0 ) + ( parseInt( el.css( bottom ), 10 ) || 0 );
		} else {
			return 0;
		}
	};

	TiledGallery.prototype.resize = function() {
		// Resize everything in the gallery based on the ratio of the current content width
		// to the original content width;
		var originalWidth = this.gallery.data( 'original-width' );
		var currentWidth = this.gallery.parent().width();
		var resizeRatio = Math.min( 1, currentWidth / originalWidth );

		var self = this;
		this.gallery.find( this.resizeableElementsSelector ).each( function () {
			var thisGalleryElement = $( this );

			var marginWidth = self.getExtraDimension( thisGalleryElement, 'margin', 'horizontal' );
			var marginHeight = self.getExtraDimension( thisGalleryElement, 'margin', 'vertical' );

			var paddingWidth = self.getExtraDimension( thisGalleryElement, 'padding', 'horizontal' );
			var paddingHeight = self.getExtraDimension( thisGalleryElement, 'padding', 'vertical' );

			var borderWidth = self.getExtraDimension( thisGalleryElement, 'border', 'horizontal' );
			var borderHeight = self.getExtraDimension( thisGalleryElement, 'border', 'vertical' );

			// Take all outer dimensions into account when resizing so that images
			// scale with constant empty space between them
			var outerWidth = thisGalleryElement.data( 'original-width' ) + paddingWidth + borderWidth + marginWidth;
			var outerHeight = thisGalleryElement.data( 'original-height' ) + paddingHeight + borderHeight + marginHeight;

			// Subtract margins so that images don't overflow on small browser windows
			thisGalleryElement
				.width( Math.floor( resizeRatio * outerWidth ) - marginWidth )
				.height( Math.floor( resizeRatio * outerHeight ) - marginHeight );
		} );
	};

	/**
	 * Resizing logic
	 */

	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	function attachResizeInAnimationFrames( tiledGalleries ) {
		var resizing = false;
		var resizeTimeout = null;

		function handleFrame() {
			tiledGalleries.resizeAll();
			if ( resizing ) {
				requestAnimationFrame( handleFrame );
			}
		}

		$( window ).resize( function() {
			clearTimeout( resizeTimeout );

			if ( ! resizing ) {
				requestAnimationFrame( handleFrame );
			}
			resizing = true;
			resizeTimeout = setTimeout( function() {
				resizing = false;
			}, 15 );
		} );
	}

	function attachPlainResize( tiledGalleries ) {
		$( window ).resize( function() {
			tiledGalleries.resizeAll();
		} );
	}

	/**
	 * Ready, set...
	 */

	$( document ).ready( function() {
		var tiledGalleries = new TiledGalleryCollection();

		$( 'body' ).on( 'post-load', function() {
			tiledGalleries.findAndSetupNewGalleries();
		} );
		$( document ).on( 'page-rendered.wpcom-newdash', function() {
			tiledGalleries.findAndSetupNewGalleries();
		} );

		// Chrome is a unique snow flake and will start lagging on occasion
		// It helps if we only resize on animation frames
		//
		// For other browsers it seems like there is no lag even if we resize every
		// time there is an event
		if ( window.chrome && requestAnimationFrame ) {
			attachResizeInAnimationFrames( tiledGalleries );
		} else {
			attachPlainResize( tiledGalleries );
		}
	});

})(jQuery);
;
if ( 'undefined' === typeof wpcom || !wpcom ) {
	wpcom = {};
}
if ( 'undefined' === typeof wpcom.modules || !wpcom.modules ) {
	wpcom.modules = {};
}

// a simple fallback definition for require() that uses the wpcom.modules namespace to resolve dependencies.
// This approach requires that UMD modules exist, it won't load them asynchronously for you
// (just enqueue and register the scripts with wp_enqueue_script and wp_register_script)
if ( typeof require === 'undefined' ) {
	require = function( dependencies, callback ){
		var dependencies = dependencies || [],
			resolvedDependencies = [];

		for ( var i = 0, l = dependencies.length; i < l; i++) {
			resolvedDependencies.push( wpcom.modules[ dependencies[ i ] ] );
		}

		callback.apply( this, resolvedDependencies );
	};
	define = function( moduleName, dependencies, factory ){
		require( dependencies, function(){
			wpcom.modules[ moduleName ] = factory.apply( this, arguments );
		} );
	}
}
;
define( 'newdashI18n', [], function() {
	var newdashI18n = {
		// Return a string matching key. If the data is several layers deep (eg:
		// 'key': { 'key2': 'string' }), pass an array as the key with a sequential
		// list of keys (eg: newdashI18n.get( [ 'key', 'key2' ] )).
		get: function( key ) {
			var data = this.data(),
			value = key;
			if ( _.isArray( key ) ) {
				_.each( key, function( subKey ) {
					if ( ! data || 'undefined' === typeof data[ subKey ] ) {
						value = _.last( key );
						return;
					}
					if ( _.isString( data[ subKey ] ) ) {
						value = data[ subKey ];
						return;
					}
					data = data[ subKey ];
				} );
			} else {
				if ( ! data || 'undefined' === typeof data[ key ] ) {
					value = key;
				} else if ( _.isString( data[ key ] ) ) {
					value = data[ key ];
				}
			}
			return value;
		},

		// Return the whole translations object.
		data: function() {
			if ( 'undefined' !== typeof window.wpcom_newdash_i18n && window.wpcom_newdash_i18n ) {
				return window.wpcom_newdash_i18n;
			}
			if ( 'undefined' !== typeof window.newdashI18nData && window.newdashI18nData ) {
				return window.newdashI18nData;
			}
			return {};
		}
	};

	return newdashI18n;
} );
;
define( 'templateFactory', [] , function(){
	// unmoduled dependencies - jQuery, Hogan
	return {
		cache: {},

		/**
		 * @param {string} 	template	- The name of the template file to be found in the document
		 * @param {obj} 	data		- The data to be applied for rendering the template
		 * @param (array) 	[partials] 	- (optional) An array of child partials to be made available to the parent template
		 * @returns Injectable DOM element
		 */
		fetch: function( template, data, partials ) {
			var template_compiled = this.cache[ template ];

			if ( ! template_compiled ) {
				var template_raw = null;
				if ( jQuery( 'html' ).hasClass( 'ie' ) ) {
					template_raw = jQuery( '#' + template + '-tmpl' ).html()
				}
				if ( ! template_raw ) {
					template_raw = jQuery( '#' + template + '-tmpl' ).text()
				}
				template_compiled = Hogan.compile( template_raw );

				if ( ! template_compiled ) return false;

				this.cache[ template ] = template_compiled;
			}

			if ( ! data ) return template_compiled;

			return template_compiled.render( data, partials );
		},

		hydrate: function( string, data ) {
			return Hogan.compile( string ).render( data );
		}
	};

} ) ;
;
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */



var Hogan = {};

(function (Hogan, useArrayBuffer) {
  Hogan.Template = function (renderFunc, text, compiler, options) {
    this.r = renderFunc || this.r;
    this.c = compiler;
    this.options = options;
    this.text = text || '';
    this.buf = (useArrayBuffer) ? [] : '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // tries to find a partial in the curent scope and render it
    rp: function(name, context, partials, indent) {
      var partial = partials[name];

      if (!partial) {
        return '';
      }

      if (this.c && typeof partial == 'string') {
        partial = this.c.compile(partial, this.options);
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ls(val, ctx, partials, inverted, start, end, tags);
      }

      pass = (val === '') || !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        return ctx[ctx.length - 1];
      }

      for (var i = 1; i < names.length; i++) {
        if (val && typeof val == 'object' && names[i] in val) {
          cx = val;
          val = val[names[i]];
        } else {
          val = '';
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.lv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        if (v && typeof v == 'object' && key in v) {
          val = v[key];
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.lv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ho: function(val, cx, partials, text, tags) {
      var compiler = this.c;
      var options = this.options;
      options.delimiters = tags;
      var text = val.call(cx, text);
      text = (text == null) ? String(text) : text.toString();
      this.b(compiler.compile(text, options).render(cx, partials));
      return false;
    },

    // template result buffering
    b: (useArrayBuffer) ? function(s) { this.buf.push(s); } :
                          function(s) { this.buf += s; },
    fl: (useArrayBuffer) ? function() { var r = this.buf.join(''); this.buf = []; return r; } :
                           function() { var r = this.buf; this.buf = ''; return r; },

    // lambda replace section
    ls: function(val, ctx, partials, inverted, start, end, tags) {
      var cx = ctx[ctx.length - 1],
          t = null;

      if (!inverted && this.c && val.length > 0) {
        return this.ho(val, cx, partials, this.text.substring(start, end), tags);
      }

      t = val.call(cx);

      if (typeof t == 'function') {
        if (inverted) {
          return true;
        } else if (this.c) {
          return this.ho(t, cx, partials, this.text.substring(start, end), tags);
        }
      }

      return t;
    },

    // lambda replace variable
    lv: function(val, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = val.call(cx);

      if (typeof result == 'function') {
        result = coerceToString(result.call(cx));
        if (this.c && ~result.indexOf("{\u007B")) {
          return this.c.compile(result, this.options).render(cx, partials);
        }
      }

      return coerceToString(result);
    }

  };

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos =/\'/g,
      rQuot = /\"/g,
      hChars =/[&<>\"\']/;


  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp,'&amp;')
        .replace(rLt,'&lt;')
        .replace(rGt,'&gt;')
        .replace(rApos,'&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})(typeof exports !== 'undefined' ? exports : Hogan);




(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      tagTypes = {
        '#': 1, '^': 2, '/': 3,  '!': 4, '>': 5,
        '<': 6, '=': 7, '_v': 8, '{': 9, '&': 10
      };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push(new String(buf));
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (tokens[j].tag && tagTypes[tokens[j].tag] < tagTypes['_v']) ||
          (!tokens[j].tag && tokens[j].match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (!tokens[j].tag) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = tagTypes[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - ctag.length : i + otag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        token = null;

    while (tokens.length > 0) {
      token = tokens.shift();
      if (token.tag == '#' || token.tag == '^' || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
        instructions.push(token);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else {
        instructions.push(token);
      }
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  Hogan.generate = function (tree, text, options) {
    var code = 'var _=this;_.b(i=i||"");' + walk(tree) + 'return _.fl();';
    if (options.asString) {
      return 'function(c,p,i){' + code + ';}';
    }

    return new Hogan.Template(new Function('c', 'p', 'i', code), text, Hogan, options);
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function walk(tree) {
    var code = '';
    for (var i = 0, l = tree.length; i < l; i++) {
      var tag = tree[i].tag;
      if (tag == '#') {
        code += section(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n),
                        tree[i].i, tree[i].end, tree[i].otag + " " + tree[i].ctag);
      } else if (tag == '^') {
        code += invertedSection(tree[i].nodes, tree[i].n,
                                chooseMethod(tree[i].n));
      } else if (tag == '<' || tag == '>') {
        code += partial(tree[i]);
      } else if (tag == '{' || tag == '&') {
        code += tripleStache(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag == '\n') {
        code += text('"\\n"' + (tree.length-1 == i ? '' : ' + i'));
      } else if (tag == '_v') {
        code += variable(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag === undefined) {
        code += text('"' + esc(tree[i]) + '"');
      }
    }
    return code;
  }

  function section(nodes, id, method, start, end, tags) {
    return 'if(_.s(_.' + method + '("' + esc(id) + '",c,p,1),' +
           'c,p,0,' + start + ',' + end + ',"' + tags + '")){' +
           '_.rs(c,p,' +
           'function(c,p,_){' +
           walk(nodes) +
           '});c.pop();}';
  }

  function invertedSection(nodes, id, method) {
    return 'if(!_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,1,0,0,"")){' +
           walk(nodes) +
           '};';
  }

  function partial(tok) {
    return '_.b(_.rp("' +  esc(tok.n) + '",c,p,"' + (tok.indent || '') + '"));';
  }

  function tripleStache(id, method) {
    return '_.b(_.t(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function variable(id, method) {
    return '_.b(_.v(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function text(id) {
    return '_.b(' + id + ');';
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  },

  Hogan.cache = {};

  Hogan.compile = function(text, options) {
    // options
    //
    // asString: false (default)
    //
    // sectionTags: [{o: '_foo', c: 'foo'}]
    // An array of object with o and c fields that indicate names for custom
    // section tags. The example above allows parsing of {{_foo}}{{/foo}}.
    //
    // delimiters: A string that overrides the default delimiters.
    // Example: "<% %>"
    //
    options = options || {};

    var key = text + '||' + !!options.asString;

    var t = this.cache[key];

    if (t) {
      return t;
    }

    t = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = t;
  };
})(typeof exports !== 'undefined' ? exports : Hogan);

;
define( 'TemplateElView', [] , function(){
	var TemplateElView = Backbone.View.extend( {
		/* Abstract View, requires this.template */
		initialize: function() {
			/*auto renders on init, re-renders on change, calls this.unload on model remove */
			this.listenTo( this.model, 'remove', this.unload );
	//		this.listenTo( this.model, 'change', this.render );

			// might be a dynamic template, hooking onto a model attribute
			if ( 'function' === typeof this.template && ! ( this.template instanceof Hogan.Template ) ) {
				this.template = this.template( this.model );
			}

			// template should already have been ran through Hogan.compile by the caller, but enforce here if it has not
			if ( ! ( this.template instanceof Hogan.Template ) ) {
				this.template = Hogan.compile( this.template );
			}

			// You can add partials to be rendered with the template by adding them to
			// this object in the form key: value, where key is the name of the partial
			// used in the template and value is the compiled partial itself.
			this.partials = {};

			this.render();
		},
		preRender: function() {
			/*pre render hook, useful for augmenting model*/
		},
		render: function() {
			/*renders model into Mustache template, triggers pre and post hooks
			* performs element switching allowing root element of template
			* to be the view element (no empty divs!) - http://stackoverflow.com/questions/11594961/backbone-not-this-el-wrapping/11598543#11598543*/
			var $templateEl,
				$oldEl=this.$el;

			this.preRender();

			$templateEl=jQuery( this.template.render( this.model.toJSON(), this.partials ) );

			this.setElement( $templateEl );
			$oldEl.replaceWith( $templateEl );

			this.postRender();
		},
		postRender: function() {
			/*post render hook*/
		},
		unload: function() {
			this.remove();
		}
	} );

	return TemplateElView;

} );
;
define( 'PostView', ['TemplateElView', 'templateFactory', 'ActionButtonsView', 'FollowPillButtonView', 'FullPostModel'] , function( TemplateElView, templateFactory, ActionButtonsView, FollowPillButtonView, FullPostModel ){
	// unmoduled dependencies - jQuery
	var $ = jQuery,
		WpcomPostView = TemplateElView.extend( {
			initialize: function( options ) {
				options = options || {};
				this.showReblogAction = options.showReblogAction;

				var self = this;
				this.listenTo( this.model, 'change:post_time_since', function() { self.timeSinceUpdated(); } );

				TemplateElView.prototype.initialize.apply( this );
			},
			events: {
				'openFullPostView': 'viewPostClicked',
				'click': 'postBodyClicked',
				'click .post-title': 'viewPostClicked',
				'click .media-link': 'viewPostClicked',
				'click .post-topics a': 'viewTopicClicked',
				'click .post-tags a': 'viewTagClicked'
			},
			template: function( model ) {
				var postFormatTemplates = [ 'aside', 'image', 'link', 'p2', 'p2-xpost', 'quote', 'standard', 'video', 'activity' ],
					thisPostType = model.get( 'post_format' );

				if ( !thisPostType || $.inArray( thisPostType, postFormatTemplates ) === -1 ) {
					this.model.set( {
						post_format: 'standard'
					}, {
						silent: 'true'
					} );
				}

				return templateFactory.fetch( model.get( 'post_format' ) + '-post' );
				// For searchability: aside-post image-post link-lost p2-post p2-xpost-post
				//                    quote-post standard-post video-post activity-post
			},
			preRender: function() {
				var comments, tagGroup, i;
				// stub for the moment, but any model augmenting to be shared across child views should go here
				if ( 'activity' === this.model.get( 'post_format' ) ) {
					this.partials[ 'comment-list' ] = templateFactory.fetch( 'comment-list' );

					// We have to make sure that comments exists, so mustache doesn't
					// snag the parent element's comments and bring forth the grey goo.
					comments = this.model.get( 'comments' );
					for ( i in comments ) {
						comments[ i ] = jQuery.extend( { comments : [] }, comments[ i ] );
					}
					this.model.set( 'comments', comments );
				}

				// If the user is not logged in, update the model so that we always use the post_permalink.
				if ( ! $( 'body' ).hasClass( 'logged-in' ) ) {
					this.model.set( 'full_post_url', this.model.get( 'post_permalink' ) );
				}

				// decode HTML entities in the tag display names.
				tagGroup = this.model.get( 'primary_tag' );
				if ( tagGroup ) {
					tagGroup.name = _.unescape( tagGroup.name );
					this.model.set( 'primary_tag', tagGroup );
				}
				tagGroup = this.model.get( 'topics' );
				if ( tagGroup ) {
					_.each( tagGroup, function( title, slug ) {
						tagGroup[ slug ] = _.unescape( title );
					} );
					this.model.set( 'topics', tagGroup );
				}
			},
			postRender: function() {
				// todo - this is not the right place for this decision making, since item view should be unaware of collection
				// should be cascaded down from the collection via view options, but doing the simplest thing that works for now
				var showFollowAction = ( -1 !== $.inArray( this.model.collection.settings.stream_type, ['topic', 'fresh', 'activities', 'activities_comments', 'postlike', 'local'] ) );

				if ( FollowPillButtonView ) {
					// Render the follow pill button
					this.followPillButton = new FollowPillButtonView( {
						el: this.$el.find( '.follow-button' ),
						model: this.model
					} );
				}
				// Render the header action buttons
				if ( ActionButtonsView ) { // todo - quick fix for logged out reader which shouldn't show buttons, research nicer approach

					// If this is a Discover post, show comments/likes for featured post
					if ( this.model.get('discover_post') ) {
						model = new FullPostModel(this.model.get('discover_post'));							
					} else {
						model = this.model;
					}

					this.actionButtons = new ActionButtonsView( {
						el: this.$el.find( '.actions' ),
						model: model,
						showFollowAction: showFollowAction,
						showReblogAction: this.showReblogAction
					} );
				}
			},
			postBodyClicked: function( ev ) {
				if ( ! window.wpcomNewdashFeatures.reader_shorten_a8c ) {
					return true;
				}
				// Purposefully do not pass along the event so that if this is an actual
				// link it will get resolved.
				if ( ev && 'undefined' !== ev.target.href && ev.target.href ) {
					return true;
				}
				this.viewPostClicked();
			},
			viewPostClicked: function( ev ) {
				this.model.trigger( 'viewPostClicked' );
				// Use the reader link (full_post_url) unless it's not a normal click
				// (command-click, right-click, etc.) in which case use the
				// post_permalink, so that opening in a new window/tab can go to the
				// original URL.
				if ( ev ) {
					if ( ev.which > 1 || ev.shiftKey || ev.altKey || ev.metaKey || ev.ctrlKey ) {
						return;
					}
					ev.preventDefault();
					ev.stopPropagation();
				}
				var url = this.model.get( 'full_post_url' );
				if ( window.wpcomNewdash && window.wpcomNewdash.router ) {
					window.wpcomNewdash.router.setRoute( url );
				} else {
					window.location = url;
				}
			},
			viewTopicClicked: function() {
				this.model.trigger( 'viewTopicClicked' );
			},
			viewTagClicked: function() {
				this.model.trigger( 'viewTagClicked' );
			},
			timeSinceUpdated: function() {
				this.$el.find( '.time-since' ).text( this.model.get( 'post_time_since' ) );
			}

		} );

	return WpcomPostView;
} );
;
define( 'StreamPostView', ['PostView', 'templateFactory'] , function( PostView, templateFactory ){
	var WpcomStreamPostView = PostView.extend( {
		preRender: function () {
			PostView.prototype.preRender.apply( this );

			this.partials[ 'post-meta' ] = templateFactory.fetch( 'post-meta' );
		}
	} );

	return WpcomStreamPostView;
} );
;
define( 'Post', [] , function( ){
// requires available Backbone
	return Backbone.Model.extend( {} );
} );
;
define( 'PostCollection', ['Post'] , function( Post ){
// requires available Backbone

	var PostCollection = Backbone.Collection.extend( {
		model: Post,
		initialize: function( models, options) {

			// todo - this might not be the best place for this granularity
			// keeping here for now but might be better to do this less globally
			this.settings = {
				per_page : options.per_page || 7,
				stream_type : options.stream_type || 'following',
				location : options.location || '',
				location_name : options.location_name || '',
				google_places_reference : options.google_places_reference || '',
				action : options.action || null,
				offset : options.offset || '',
				filter : options.filter || '',
				slug : options.slug || '',
				blog_id : options.blog_id || '',
				feed_id : options.feed_id || '',
				list_author: options.list_author || '',
				list_slug: options.list_slug || '',
				post_status: options.post_status || '',
				post_type: options.post_type || ''
			};

			if ( !options.useServerOrdering ){
				this.comparator = function( post ) {
					return -post.get("post_timestamp");
				};
			}

			this.metadata = options.metadata || {};
		},
		url: function() {
			var lastModel = this.at( this.length-1 ),
				before = ( lastModel ) ? lastModel.get( 'post_timestamp' ) : '';

			return '/wp-admin/admin-ajax.php?action=get_' + this.settings.stream_type +'_posts&before=' + before;
		}
	} );

	return PostCollection;
} );
;
define( 'localStorage', [] , function(){
	var w = window,
		whitelist;

	// Protect these values from clear(), as they are used in calypso and we cannot assume atlas
	// is able to clear them appropriately.
	whitelist = [ 'show-welcome' ];

	return {
		// todo - since this will always need init() executing, it may be better to self execute here
		init: function() {
			var supported;
			try {
				supported = w.localStorage;
				if ( supported ) {
					w.localStorage.setItem( 'wpcom_test_storage', '' );
					w.localStorage.removeItem( 'wpcom_test_storage' );
					this.storage = w.localStorage;
				}
			} catch( err ) {
				// Use a session fallback if localStorage is not supported
				this.storage = {
					_data : {},
					setItem  : function( id, val ) { return this._data[ id ] = String( val ); },
					getItem  : function( id ) { return this._data.hasOwnProperty( id ) ? this._data[ id ] : null; },
					removeItem  : function( id ) { return delete this._data[ id ]; },
					clear : function() { return this._data = {}; }
				};
			}
		},
		set: function( key, val ) { return this.storage.setItem( key + w.localstorageHash, val ); },
		get: function( key ) { return this.storage.getItem( key + w.localstorageHash ); },
		remove: function( key ) { return this.storage.removeItem( key + w.localstorageHash ); },
		clear: function() {
			var saveThese = {},
				value, key;

			_.each( whitelist, function( key ) {
				value = this.storage.getItem( key );
				if ( value ) {
					saveThese[ key ] = value;
				}
			}, this );
			this.storage.clear();

			for( key in saveThese ) {
				if ( ! saveThese.hasOwnProperty( key ) ) {
					continue;
				}
				this.storage.setItem( key, value );
			}

			return;
		}
	};

} );
;
define( 'urlUtils', [] , function(){
	// unmoduled dependencies - jQuery
	var $ = jQuery,
		urlUtils = {
			/***
			* Take an arbitrary number of query strings ( 'a=1&b=2' ) and return a single search string.
			* Leading '?'s will be stripped. On duplicate keys, latest value is preserved. Be aware
			* that the strings should raw... not be urlencoded.
			* Requires jQuery.
			*
			* @param1 [string] e.g., 'a=1&b=2'
			* @param2 [string]
			* @param...
			*
			* @return [string]
			*
			* returns string in format 'a=1&b=2&c=3'
			*/
			mergeQueryParams: function() {
				var params, splits,
					result = {};

				// handle each passed argument
				$.each( arguments, function( i, paramStr ) {
					if ( 'undefined' === typeof paramStr ) return true; // skip empty arguments
					params = ( paramStr + '' ).replace( /^\?/, '' ).split( '&' );
					$.each( params, function( i, param ) {
						splits = param.split( '=' );
						result[ splits[ 0 ] ] = splits[ 1 ]; // save as key -> val
					} );
				} );

				return $.param( result );
			},

			/**
			* Add params to url, overwriting existing duplicate keys
			*
			* @param [string] url -> 'http://example.com?a=5#blah'
			* @param [string] params -> 'a=1&b=2'
			*
			* @return [string] 'http://example.com?a=1&b=2#blah
			*/
			urlAddParams: function( url, params ) {
				var sections, uri, query, hash, result;

				// separate the sections
				sections = url.split( '#' );
				hash = ( sections.length = 2 ) ? sections[ 1 ] : false;
				sections = sections[ 0 ].split( '?' );
				uri = sections[ 0 ];
				query = ( sections.length = 2 ) ? sections[ 1 ] : false;

				// merge params
				query = this.mergeQueryParams( query, params );

				// put together result
				result = ( query ) ? uri + '?' + query : uri;
				result = ( hash ) ? result + '#' + hash : result;
				return result;
			},

			/**
			* getAjaxUrl()
			*
			* Get the ajax_url based on whether we need a nonce, piggybacking from instapost_text.ajaxurl. This is necessary to remove the iframe
			* stripping code that otherwise gets added in /themes/h4/functions.php since newdash pages get served in /wp-admin/ for our text.
			* `instapost_text.ajaxurl` gets updated when necessary in /admin-ajax.php script.
			* See the `update_frame_nonce()` method in /themes/h4/functions.php
			*/
			getAjaxUrl: function() {
				var ajaxUrl = ( 'undefined' === typeof instapost_text || !instapost_text.ajaxurl ) ? '/wp-admin/admin-ajax.php' : instapost_text.ajaxurl;
				return ajaxUrl;
			},

			/**
			 * Turn an object into a query string without encoding it, as expected by mergeQueryParams
			 * @param  {object} obj A single-level object
			 * @return {string}     A querystring without any encoding
			 */
			toQueryString: function( obj ) {
				var queries = [];
				$.each( obj, function( key, val ){
					queries.push( key + '=' + val );
				});
				return queries.join( '&' );
			}
		};

	return urlUtils;

} );;
define( 'ReaderPostCollection', ['PostCollection', 'localStorage', 'urlUtils'] , function( PostCollection, localStorage, urlUtils ){
	// unmoduled dependencies - jQuery,
	var $ = jQuery,
		WpcomReaderPostCollection = PostCollection.extend( {
		initialize: function( models, options) {
			this.isDestroying = false;

			if ( options.cachingEnabled ) {
				this.cachingEnabled = true;

				this.on( 'change', this.syncCache, this );
				this.on( 'sync', this.syncCache, this );
				this.on( 'new_posts_added', this.syncCache, this );
				this.on( 'cache_bootstrap', this.syncCache, this );
				this.on( 'change:is_following', this.updateIsFollowing, this );
			}

			this.baseUrl = options.baseUrl || function(){ return ''; };

			var self = this;
			clearInterval( this.timeSinceUpdater );
			this.timeSinceUpdater = setInterval( function() { self.updateTimeSince(); }, 60000 );

			PostCollection.prototype.initialize.apply( this, [ models, options ] );
		},
		url: function( options ) {
			options = options || {
				getPostsSinceCurrentLatest: false
			};
			var lastModel = this.at( this.length-1 ),
				firstModel = this.at( 0 ),
				before = ( ( false === options.getPostsSinceCurrentLatest ) && lastModel ) ? lastModel.get( 'post_timestamp' ) : '',
				after = ( options.getPostsSinceCurrentLatest && firstModel ) ? firstModel.get( 'post_timestamp' ) : '',
				perPage = ( options.getPostsSinceCurrentLatest ) ? '' : this.settings.per_page, // When getting new posts, do not limit
				voyeurRegex = new RegExp( '[\\?&]voyeur=([^&#]*)' ),
				voyeurResults = voyeurRegex.exec( window.location.href ),
				voyeur = ( voyeurResults !== null ) ? voyeurResults[1] : '',
				action = ( this.settings.action ) ? this.settings.action : 'get_' + this.settings.stream_type + '_posts',
				args = {
					action: action,
					per_page: perPage,
					before: before,
					after: after,
					slug: this.settings.slug,
					blog_id: this.settings.blog_id,
					feed_id: this.settings.feed_id,
					list_author: this.settings.list_author,
					list_slug: this.settings.list_slug,
					location: this.settings.location,
					location_name: this.settings.location_name,
					google_places_reference: this.settings.google_places_reference,
					offset: this.settings.offset,
					filter: this.settings.filter,
					post_status: this.settings.post_status,
					post_type: this.settings.post_type,
					voyeur: voyeur
				}
			;

			return urlUtils.urlAddParams( this.baseUrl(), $.param( args ) );
		},
		latestPostsStorageKey: function() {
			return this.settings.stream_type + this.settings.slug + '_b_' + this.settings.blog_id + '_f_' + this.settings.feed_id + '_list_' + this.settings.list_author + '_' + this.settings.list_slug + '_l_' + this.settings.location + '_posts.latest';
		},
		syncCache: function() {
			// updates posts and metadata, prepends to any existing posts and making sure a max of *this.settings.per_page* is stored
			var cache = {
					posts: []
				},
				existingCache = this.getCache() || cache,
				existingMetadata = _.omit( existingCache, 'posts' ),
				newPosts = this.toJSON(),
				newMetadata = this.metadata,
				updateCache = false
			;

			// if there are new posts, prepend them to the cached posts and enforce the this.per_page limit
			if ( newPosts.length > 0 ) {
				cache.posts = _.uniq( newPosts.concat( existingCache.posts ), false, function( post ) {
					if ( post.feed_id ) {
						return post.feed_id + ':' + post.feed_item_id;
					}
					return post.blog_id + ':' + post.ID;
				} );

				if ( cache.posts.length > this.settings.per_page ) {
					cache.posts.length = this.settings.per_page;
				}

				updateCache = true;
			} else {
				// in case anything else sets updateCache to true, ensure posts are perpetuated
				cache.posts = existingCache.posts;
			}

			// if metadata encountered does not match the cache - update it
			if ( JSON.stringify( existingMetadata ) !== JSON.stringify( newMetadata ) ) {
				_.extend( cache, newMetadata );
				updateCache = true;
			} else {
				// in case anything else sets updateCache to true, ensure metadata is perpetuated
				_.extend( cache, existingMetadata );
			}

			if ( updateCache ) {
				this.setCache( cache );
			}

		},
		hasCache: function() {
			return ( false !== this.getCache() );
		},
		getCache: function() {
			var cache = localStorage.get( this.latestPostsStorageKey() );

			if ( null !== cache && ( cache = JSON.parse( cache ) ) && cache.posts ) {
				return cache;
			}

			return false;
		},
		setCache: function( data ) {
			localStorage.set( this.latestPostsStorageKey(), JSON.stringify( data ) );
		},
		sync: function( method, model, options ) {
			var cache,
				useCache = false,
				isNewerPostsRequest = options.getPostsSinceCurrentLatest || false,
				isLatestPostsRequest = ( !isNewerPostsRequest && this.length === 0 ),
				isOlderPostsRequest = ( !isNewerPostsRequest && !isLatestPostsRequest),
				thisCollection = this,
				dfd = $.Deferred();

			if ( this.isDestroying ) {
				return;
			}

			if ( false === isNewerPostsRequest ) {

				this.trigger( 'request' ); // when overriding Backbone.sync manually trigger the Collection request event to allow for subscribers

				if ( isLatestPostsRequest && thisCollection.cachingEnabled ) {
					cache = this.getCache();
					if ( cache && cache.posts && cache.posts.length ) {
						useCache = true;
					}
				}
			}

			if ( useCache ) {
				options.success( cache );
				dfd.resolve();
				return dfd;
			} else {
				return $.getJSON( this.url( { getPostsSinceCurrentLatest: isNewerPostsRequest } ), this.apiParams, function( data, textStatus ) {
					var postsFound;

					if ( ( textStatus !== 'success' && textStatus !== 200 ) || !data ) {
						options.error();
					} else {
						postsFound = ( data.posts ) ? ( 0 < data.posts.length ) : false; // api returns posts: false rather than posts: [] for newer posts requests, hence the oddness

						if ( !postsFound && isLatestPostsRequest ) {
							thisCollection.trigger( 'noLatestItemsAvailable' );
						} else if ( !postsFound && isOlderPostsRequest ) {
							thisCollection.trigger( 'noOlderItemsAvailable' );
						}

						if ( isNewerPostsRequest ) {
							thisCollection.trigger( 'finishedCheckingForNewPosts' );

							if ( postsFound ) {

								// directly call add rather than success to avoid triggering a sync event and interfering with scroll observer
								// todo - better to find a way of doing this where collection is unaware of view stuff, probably fix the way scroll observer works
								thisCollection.add( thisCollection.parse( data ) );
								thisCollection.trigger( 'new_posts_added' );
							}
						} else {
							// still want to call success with non-newer posts requests due to metadata
							options.success( data );
						}
					}
				} );
			}
		},
		parse: function( response ) {
			var posts = response.posts;

			this.metadata = _.omit( response, 'posts' );

			_.each( posts, function( post ) {

				// todo - not sure if this is the correct place, but some templates (action buttons for example) expect post_id and this ensures it is always there
				// i should probably just amend the templates to not look for post_id
				if ( !post.post_id && post.ID ) {
					post.post_id = post.ID;
				}

			} );

			return posts;
		},
		checkForNewPosts: function() {
			this.trigger( 'checking_for_new_posts' );
			this.fetch( {
				remove: false,
				getPostsSinceCurrentLatest: true
			} );

			this.checkForNewPostsPoller = setTimeout( jQuery.proxy( this.checkForNewPosts, this ), 15000 );
		},

		updateIsFollowing: function( model, value ) {
			var models;
			if ( model.get( 'blog_id' ) ) {
				models = this.where( { blog_id: model.get( 'blog_id' ) } );
			} else {
				models = this.where( { feed_id: model.get( 'feed_id' ) } );
			}
			_.each( models, function( model ) {
				model.set( 'is_following', value );
			} );
		},

		unload: function() {
			this.isDestroying = true;
			clearTimeout( this.checkForNewPostsPoller );
			clearInterval( this.timeSinceUpdater );
			this.remove( this.models );
			this.trigger( 'unload' );
		},
		updateTimeSince: function() {
			this.invoke( 'updateTimeSince' );
		}

	} );

	return WpcomReaderPostCollection;
} );
;
define( 'CurrentUser', [] , function() {
	// unmoduled dependencies - Backbone,
	return Backbone.Model.extend( {} );
} );;
define( 'FullPostModel', ['readerSync','CurrentUser', 'PostCommentTree'] , function( readerSync, CurrentUser, PostCommentTree ){
	// unmoduled dependencies - window.currentUser, window.moment
	var WpcomReaderFullPostModel = Backbone.Model.extend( {
		action: 'get_single_post',

		initialize: function() {
			if ( window.currentUser ) {
				this.currentUser = new CurrentUser( window.currentUser );
			}

			if ( ! this.get( 'post_title' ) || '' === this.get( 'post_title' ) ) {
				this.set( { has_title: false } );
			}

			if ( this.get( 'post_featured_thumbnail' ) ) {
				this.set( { has_thumb: true} );
			}

			if ( 'status' === this.get( 'post_format' ) ) {
				this.set( { post_format: 'aside' } );
			}

			this.listenTo( this, 'change:post_status', this.savePreviousState );

			this.updateTimeSince();
		},

		initComments: function() {
			if ( this.get('ID') && this.get('blog_id') ) {

				this.commentsTree = new PostCommentTree(null, {post: this});
				this.commentsTree.load();
			}
		},

		sync: function( method, model, options ) {

			var action = this.action;
			// Right now create isn't supported and probably means update.
			if ( 'create' === method ) method = 'update';
			// Delete should be handled by update right now.
			if ( 'delete' === method ) method = 'update';
			if ( 'update' === method ) action = 'newdash_update_post';

			var nonce = jQuery( '#newdash_nonce' ).val(); // TODO: the nonce should be saved somewhere instead of grabbing from the DOM.
			var data = _.extend( { '_wpnonce': nonce, 'action': action, 'method': method }, model.toJSON() );
			options = _.extend( { 'data': data }, options );

			return readerSync.call( this, method, this, options );
		},

		parse: function( response, options ) {
			if ( response && Object == response.constructor ) {
				if ( 'errors' in response && ! _.isEmpty( response[ 'errors' ] ) ) this.trigger( 'wp_error', response[ 'errors' ] );
				if ( 'post' in response ) return response[ 'post' ];
			}
			return response;
		},

		savePreviousState: function() {
			this.set( 'old_post_status', this.previous( 'post_status' ) );
		},

		undoStateChange: function() {
			if ( ! this.has( 'old_post_status' ) ) return;
			this.save( { 'post_status': this.get( 'old_post_status' ) } );
			this.unset( 'old_post_status' );
		},

		areCommentsOpen: function() {
			return this.get( 'comment_status' ) === 'open';
		},

		updateTimeSince: function() {
			if ( window.moment ) { // todo - make moment a module
				var timestamp = parseInt( this.get( 'post_timestamp' ), 10 );
				if ( ! timestamp ) return;
				var now = Math.round( new Date() / 1000 );
				if ( timestamp >= now ) {
					this.set( 'post_time_since', moment.unix( timestamp ).format( 'LLL' ) );
				} else {
					this.set( 'post_time_since', moment.unix( timestamp ).fromNow() );
				}
			}
		}
	} );

	return WpcomReaderFullPostModel;
} );
;
define( 'InfiniteScrollView', [ 'statUtils' ] , function( statUtils ) {
// requires available Backbone, jQuery
	return Backbone.View.extend( {
		initialize: function( options ){
			this.infiniteScrollEnabled = ( options.infiniteScrollEnabled === false ) ? false :  true;
			this.itemView = options.itemView;
			this.listenTo( this.collection, 'add', this.addItem );
			this.listenTo( this.collection, 'remove', this.removeItem );
			this.listenTo( this.collection, 'request', this.showSpinner );
			this.listenTo( this.collection, 'sync', this.hideSpinner );
			this.listenTo( this.collection, 'unload', this.unload );
			this.listenTo( this.collection, 'noOlderItemsAvailable', this.noOlderItemsAvailable );
			this.listenTo( this.collection, 'noLatestItemsAvailable', this.noLatestItemsAvailable );
			this.renderedItems = [];
			this.unrenderedItems = [];
			this.bootstrap();
			this.startScrollObserver();
		},
		bootstrap: function() {
			this.$el.empty();
			this.collection.each( this.addItem, this );
		},
		removeItem: function( model ){
			var target = _.find( this.renderedItems, function( item ) {
				return ( item.model.cid === model.cid )
			} );

			this.renderedItems = _.without( this.renderedItems, target );
		},
		addItem: function( model ){
			this.trigger( 'addingItem', model );

			// inspect model index in collection to isolate whether this should be appended or prepended to the view
			// it wouldn't be much more work to analyse renderedItems and add the ability to inject item views mid-stream
			// rather than just at the start or the end, which could be a nice touch
			var item,
				newItemIndex = this.collection.indexOf( model ),
				firstRenderedItemIndex = ( this.renderedItems[0] ) ? this.collection.indexOf( this.renderedItems[0].model ) : -1,
				doPrepend = ( newItemIndex < firstRenderedItemIndex );

			if ( doPrepend ) {
				this.unrenderedItems.push( model );
				this.trigger( 'newerViewsAvailable', this.unrenderedItems.length );
			}
			else {
				item = new this.itemView( {
					model: model
				} );
				this.$el.append( item.$el );
				this.registerRenderedItem( item, model, false );
				this.trigger( 'itemRendered', item );
			}
		},
		registerRenderedItem: function ( view, model, is_prepend ){
			var attachMethod = ( is_prepend ) ? 'unshift' : 'push';

			this.renderedItems[attachMethod]( {
				model: model,
				view: view
			} );
		},
		removeAllRenderedItems: function(){
			_.each( this.renderedItems, function( item ) {
				item.model.destroy();
			} );
		},
		renderNewerItems: function(){
			var sortedItems = _.sortBy( this.unrenderedItems, this.collection.comparator );

			this.unrenderedItems = sortedItems;

			var newItemModel, newItemView,
				firstItem = ( this.renderedItems[0] ) ? this.renderedItems[0].view.$el : [];

			while( this.unrenderedItems.length ) {
				newItemModel = this.unrenderedItems.pop(); // use of pop() takes care of keeping this.unregistered_items current
				newItemView = new this.itemView( {
					model: newItemModel
				} );

				if ( firstItem.length ) {
					newItemView.$el.insertBefore( firstItem );
				} else {
					this.$el.append( newItemView .$el);
				}

				firstItem = newItemView .$el;

				this.registerRenderedItem( newItemView, newItemModel, true );
			}

		},
		startScrollObserver: function() {
			if ( this.infiniteScrollEnabled ) {
				this.interval = setInterval( jQuery.proxy( this.scrollHandler, this ), 50 );
			} else {
				this.trigger( this.noItemsType ); // todo - may not be the right place
			}
		},
		stopScrollObserver: function() {
			clearInterval( this.interval );
		},
		shouldLoadMore: function() {
			// can be overridden to enable custom scroll trigger rules
			return ( jQuery( window ).scrollTop() >= jQuery( document ).height() - jQuery( window ).height() - ( ( jQuery( document ).height() - jQuery( window ).height() ) * 0.2 ) );
		},
		noOlderItemsAvailable: function() {
			this.noItemsType = 'noOlderItemsAvailable';
			this.infiniteScrollEnabled = false;
		},
		noLatestItemsAvailable: function() {
			this.noItemsType = 'noLatestItemsAvailable';
			this.infiniteScrollEnabled = false;
		},
		scrollHandler: function() {
			if ( this.shouldLoadMore() ){
				this.collection.fetch( {
					remove: false,
					success: _.bind( this.trigger, this, 'finishedCheckingForOlderItems' )
				} );
			}
		},
		showSpinner: function() {
			this.stopScrollObserver();
			this.trigger( 'checkingForOlderItems' );
		},
		hideSpinner: function() {
			this.startScrollObserver();

			if ( this.collection.length > this.collection.settings.per_page ) {
				statUtils.bumpStat( 'newdash_pageviews', 'scroll' );
			}
		},
		unload: function() {
			this.stopScrollObserver();
			delete this.interval;
			delete this.renderedItems;
			delete this.unrenderedItems;
			this.stopListening();
		}
	} );
} );;
define( 'NoPostsView', ['TemplateElView', 'templateFactory'] , function( TemplateElView, templateFactory ){
	// unmoduled dependencies - Backbone

	var WpcomNoPostsView = TemplateElView.extend( {
		initialize: function( options ) {
			options = options || {};
			this.noPostTemplate = options.noPostTemplate;
			this.model = new Backbone.Model();
			TemplateElView.prototype.initialize.apply( this );
		},
		template: function() {
			return templateFactory.fetch( this.noPostTemplate, 'no-data' );
		}
	} );

	return WpcomNoPostsView;
} );
;
define( 'wpcomReaderConstants', [] , function(){
	// quite possibly over-engineering, but then again it has to go somewhere
	return {
		initialPageTitle: 'WordPress.com'
	};
} );;
define( 'PostStream', [
	'StreamPostView',
	'ReaderPostCollection',
	'FullPostModel',
	'InfiniteScrollView',
	'NoPostsView',
	'wpcomReaderConstants',
	'newdashI18n'
] ,
function(
	WpcomStreamPostView,
	WpcomReaderPostCollection,
	WpcomReaderFullPostModel,
	InfiniteScrollView,
	WpcomNoPostsView,
	wpcomReaderConstants,
	newdashI18n
){
	// unmoduled dependencies - jQuery, Backbone
	var $ = jQuery,
		WpcomPostStream = Backbone.View.extend( {
			events: {
				'click .new-post-notify' : 'renderNewPosts',
				'renderNewPosts' : 'renderNewPosts'
			},
			initialize: function( models, options ) {
				var container = options.container || $( '#reader-content' ),
					infiniteScrollEnabled = ( options.infiniteScrollEnabled === false ) ? false :  true,
					cachingEnabled = ( options.cachingEnabled === false ) ? false :  true,
					collectionType = options.collectionType || WpcomReaderPostCollection,
					itemView = options.itemView || WpcomStreamPostView,
					metadata = options.metadata || {}
				;

				this.setElement( container );

				this.bootstrap = options.bootstrap || [];

				this.pollForNewPostsEnabled = ( options.pollForNewPostsEnabled === false ) ? false :  true;

				this.noPostTemplate = options.noPostTemplate || false;

				this.pageTitle = options.pageTitle || wpcomReaderConstants.initialPageTitle;

				// todo - properties passed for usage in ajax requests should also be camelCase in js if we're being strict,
				// but need to rework the serialisation before doing this

				this.collection = new collectionType( this.bootstrap, {
					model: WpcomReaderFullPostModel,
					per_page: options.per_page || 7,
					stream_type: options.stream_type || 'following',
					location: options.location || '',
					location_name: options.location_name || '',
					google_places_reference : options.google_places_reference || '',
					action : options.action || '',
					offset : options.offset || '',
					filter: options.filter || '',
					slug: options.slug || '',
					blog_id: options.blog_id || '',
					feed_id: options.feed_id || '',
					list_author: options.list_author || '',
					list_slug: options.list_slug || '',
					group: options.group || '',
					post_status: options.post_status|| '',
					post_type: options.post_type || '',
					useServerOrdering: options.useServerOrdering || false,
					cachingEnabled: cachingEnabled,
					baseUrl: options.baseUrl,
					metadata: metadata
				} );

				this.view = new InfiniteScrollView( {
					el: container,
					collection: this.collection,
					itemView: itemView,
					infiniteScrollEnabled: infiniteScrollEnabled
				} );

				this.listenTo( this.view, 'noOlderItemsAvailable', this.noOlderItems );
				this.listenTo( this.view, 'noLatestItemsAvailable', this.noLatestItems );
				this.listenTo( this.view, 'finishedCheckingForOlderItems', this.finishedCheckingForOlderItems );
				this.listenTo( this.view, 'newerViewsAvailable', this.newerPostsAvailable );
				this.listenTo( this.view, 'checkingForOlderItems', this.checkingForOlderItems );
				this.listenTo( this.view, 'itemRendered', this.removeNoLatestItems );

				_.bindAll( this, 'firstRender' ); // simplifies usage in fetch success callback
			},

			start: function() {
				if ( 0 === this.bootstrap.length ) {
					this.collection.fetch( {
						success: this.firstRender
					} );
				}
				else {
					this.collection.trigger( 'cache_bootstrap' );
					this.firstRender();
				}
			},

			firstRender: function() {
				this.trigger( 'beforeFirstRender' );
				var loading = this.$el.find( '.loading' );

				loading.remove();

				this.$el.append( this.view.render().$el );

				if ( !this.collection.isDestroying ) {
					this.trigger( 'afterFirstRender' );
				}

				if ( this.pollForNewPostsEnabled ) {
					this.collection.checkForNewPosts();
				}
			},

			resetNewPostsIndicator : function() {
				this.$el.find( 'div.page-activity' ).html( '' );
			},

			checkingForOlderItems: function() {
				if ( !this.$el.find( '#subs-loading' ).length && ( this.$el.find( 'div.sub:first div:first' ).hasClass( 'sub-avatar' ) || this.$el.find( 'div.sub:first div.sub-body-content' ).length > 0 ) ) {
					this.$el.children( ':last' ).after( '<div id="subs-loading"><span></span>' + newdashI18n.get( [ 'post_stream', "Wait, there's more!" ] ) + '</div>' );
					this.$el.find( '#subs-loading' ).hide().fadeIn( 'fast' );
				}

				this.trigger( 'checkingForOlderItems' );
			},

			finishedCheckingForOlderItems: function() {
				this.$el.find( '#subs-loading' ).remove();

				this.trigger( 'finishedCheckingForOlderItems' );
			},

			newerPostsAvailable: function( postCount ) {
				var countText = newdashI18n.get( [ 'post_stream', 'new posts' ] );

				this.removeNoLatestItems();

				// todo - maybe we should also auto-render in the edge case no posts are currently shown
				// If there are more than 20 new posts, just render the new posts.
				if ( postCount > 20 ) {
					this.renderNewPosts();
					return;
				}

				// otherwise, update the notification button
				if ( 1 === postCount ) {
					countText = newdashI18n.get( [ 'post_stream', 'new post' ] );
				}

				if ( !this.$el.find( 'div.new-post-notify' ).length ) {
					this.$el.find( 'div.page-activity' ).html( '<div class="new-post-notify"><span class="count">' + postCount + '</span> <span class="count-text">' + countText + '</span></div>' );
					this.$el.find( 'div.new-post-notify' ).fadeIn( 'fast' );
				} else {
					this.$el.find( 'div.new-post-notify span.count' ).html( postCount );
					this.$el.find( 'div.new-post-notify span.count-text' ).html( countText );
				}

				this.setTitle( '(' + postCount + ')' );
			},

			noOlderItems : function() {
			},

			setTitle : function( title ) {
				var pageTitle = this.pageTitle;
				if ( 'function' === typeof( this.pageTitle ) ) {
					pageTitle = this.pageTitle();
				}
				if ( title ) {
					pageTitle = title + ' ' + pageTitle;
				}
				document.title = pageTitle;
			},

			noLatestItems : function() {
				if ( this.noPostTemplate ) {
					this.noPostsView = new WpcomNoPostsView( {
						noPostTemplate: this.noPostTemplate
					} );
					this.$el.append( this.noPostsView.$el );
				}
			},

			removeNoLatestItems : function() {
				if ( this.noPostsView ) {
					this.noPostsView.remove();
				}
			},

			renderNewPosts : function() {
				// If the new post count is equal or greater than the per-page then remove all the existing posts in the list.
				if ( this.view.unrenderedItems.length >= this.collection.settings.per_page ) {
					this.view.removeAllRenderedItems();
				}

				this.view.renderNewerItems();


				// reset the new post indicator
				this.resetNewPostsIndicator();

				// reset the document title
				this.setTitle();

				// Bump the stat.
				this.trigger( 'newPostsRendered' );

			},

			unload: function() {
				this.resetNewPostsIndicator();
				this.undelegateEvents();
				this.collection.unload();
			}

		} );

	return WpcomPostStream;
} );
;
var wpcom = wpcom || {};
wpcom.ajaxUrl = '/wp-admin/admin-ajax.php';

require( [ 'PostStream', 'StreamPostView' ], function( PostStream, PostView ){
	var $ = jQuery,
		LoggedOutPostView,
		discover = wpcom.discover || {};

	$( '#nav-signup a' ).on( 'click', function() {
		wpcom.bumpStat( 'logged_out_reader_actions', 'clicked_start_blog' );
	} );

	$( '#nav-signin a' ).on( 'click', function() {
		wpcom.bumpStat( 'logged_out_reader_actions', 'clicked_sign_in' );
	} );

 	// todo - simplify this pattern via a helper method
 	discover.bootstrap = discover.bootstrap || {};
	discover.bootstrap.loggedOutPosts = discover.bootstrap.loggedOutPosts || { posts: [] };
	if ( discover.bootstrap.loggedOutPosts.posts.length < 1 ) return;

 	// Accepted stats are whitelisted server side
	wpcom.bumpStat = wpcom.bumpStat || function( group, statname ) {
		var url = wpcom.ajaxUrl,
 			data = { 'action': 'wpcom_bump_stat', 'nonce': jQuery( 'input#logged-out-nonce' ).val(), 'group': group, 'stat': statname };

		jQuery.ajax( {
			type: "POST",
			url: url,
			data: data
		} );
	};


	// setup custom classes
	LoggedOutPostView = PostView.extend( {
		template: jQuery( '#logged-out-post, #logged-out-post-tmpl').html(),
		events: function() {
			return _.extend( {}, PostView.prototype.events, {
				'click >a': 'postClicked',
				'click .sub-body-content>h4>a': 'postClicked'
			} );
		},
		preRender: function() {
			this.imageShim=false;
			// nasty i know, this should be done in the backend but for now it demonstrates
			// a use case of the preRender and postRender hooks in TemplateElView
			var imgHolder = jQuery( this.model.get( 'post_featured_media' ) ),
				imgSrc = imgHolder.find('img' ).attr('src');

			if ( imgSrc ) {
				this.imageShim=imgSrc;
			}

			PostView.prototype.preRender.apply( this );
		},
		postRender: function() {
			var mediaEl;

			if ( this.imageShim ) {
				mediaEl = this.$el.find('.featured-media.image' );
				mediaEl.css( {
					'background-image': 'url(\'' + this.imageShim + '\')'
				} );
				mediaEl.find( 'img' ).addClass( 'background-size-shim' );
			}

			PostView.prototype.postRender.apply( this );
		},
		postClicked: function() {
			this.model.trigger( 'postClicked' );
		}
	} );

	var streamType = 'fresh',
		slug = null;

	if ( discover.bootstrap.slug ) {
		streamType = ( $( '#list-posts' ).length > 0 ) ? 'logged_out_list' : 'tag';
		slug = discover.bootstrap.slug;
	}

	var LoggedOutPostStreamBase = PostStream.extend( {
		initialize : function( models, options ) {
			options.baseUrl = function() {
				return wpcom.ajaxUrl;
			};

			PostStream.prototype.initialize.apply( this, [models, options] );
		}
	} );

	var loggedOutPostStream = new LoggedOutPostStreamBase( [], {
		container: $('#reader-content .posts'),
		per_page: ( 'fresh' == streamType ) ? 27 : 7,
		stream_type: streamType,
		slug: slug,
		itemView: ( slug ? PostView : LoggedOutPostView ),
		cachingEnabled: false,
		pollForNewPostsEnabled: false,
		bootstrap: discover.bootstrap.loggedOutPosts.posts
	} );

	// render
	loggedOutPostStream.start();

	// tracking
	if ( 'fresh' === streamType ) {
		wpcom.kissmetrics.recordEvent( 'Logged_Out_Reader_View' );
		wpcom.bumpStat( 'logged_out_reader_views', 'fp_load' );

		loggedOutPostStream.collection.on('request', function() {
			wpcom.kissmetrics.recordEvent( 'Logged_Out_Reader_Scroll' );
			wpcom.bumpStat( 'logged_out_reader_views', 'fp_scroll' );
		} );

		loggedOutPostStream.collection.on('postClicked', function() {
			wpcom.kissmetrics.recordEvent( 'Logged_Out_Reader_Post_Clicked' );
			wpcom.bumpStat( 'logged_out_reader_actions', 'fp_post_clicked' );
		} );
	}
} );
;
window.olark || (function (c) {
    var f = window,
        d = document,
        l = f.location.protocol == "https:" ? "https:" : "http:",
        z = c.name,
        r = "load";
    var nt = function () {
        f[z] = function () {
            (a.s = a.s || []).push(arguments)
        };
        var a = f[z]._ = {}, q = c.methods.length;
        while (q--) {
            (function (n) {
                f[z][n] = function () {
                    f[z]("call", n, arguments)
                }
            })(c.methods[q])
        }
        a.l = c.loader;
        a.i = nt;
        a.p = {
            0: +new Date
        };
        a.P = function (u) {
            a.p[u] = new Date - a.p[0]
        };

        function s() {
            a.P(r);
            f[z](r)
        }
        f.addEventListener ? f.addEventListener(r, s, false) : f.attachEvent("on" + r, s);
        var ld = function () {
            function p(hd) {
                hd = "head";
                return ["<", hd, "></", hd, "><", i, ' onl' + 'oad="var d=', g, ";d.getElementsByTagName('head')[0].", j, "(d.", h, "('script')).", k, "='", l, "//", a.l, "'", '"', "></", i, ">"].join("")
            }
            var i = "body",
                m = d[i];
            if (!m) {
                return setTimeout(ld, 100)
            }
            a.P(1);
            var j = "appendChild",
                h = "createElement",
                k = "src",
                n = d[h]("div"),
                v = n[j](d[h](z)),
                b = d[h]("iframe"),
                g = "document",
                e = "domain",
                o;
            n.style.display = "none";
            m.insertBefore(n, m.firstChild).id = z;
            b.frameBorder = "0";
            b.id = z + "-loader";
            if (/MSIE[ ]+6/.test(navigator.userAgent)) {
                b.src = "javascript:false"
            }
            b.allowTransparency = "true";
            v[j](b);
            try {
                b.contentWindow[g].open()
            } catch (w) {
                c[e] = d[e];
                o = "javascript:var d=" + g + ".open();d.domain='" + d.domain + "';";
                b[k] = o + "void(0);"
            }
            try {
                var t = b.contentWindow[g];
                t.write(p());
                t.close()
            } catch (x) {
                b[k] = o + 'd.write("' + p().replace(/"/g, String.fromCharCode(92) + '"') + '");d.close();'
            }
            a.P(2)
        };
        ld()
    };
    nt()
})({
    loader: "static.olark.com/jsclient/loader0.js",
    name: "olark",
    methods: ["configure", "extend", "declare", "identify"]
});
;
( function( $ ) {
	var wpcom_olark = window.wpcom_olark || {},
		olark = window.olark || {};

	var skip_ajax = wpcom_olark.skip_ajax || false;

	var chat_displayed = false;
	var page_load_time = new Date().getTime();

	var configureSystem = function( system ) {
		if ( system.group && olark.configure ) {
			olark.configure( 'system.group', system.group );
			olark.configure( 'system.chat_does_not_follow_external_links', true );
			olark.configure( 'locale.welcome_message', wpcom_olark.campaignArgs.welcome_message );
		}
	};

	var configureBox = function( box ) {
		if ( box.start_hidden && olark.configure )
			olark.configure( 'box.start_hidden', box.start_hidden );
	};

	var doVisitorCalls = function( data, call ) {
		olark( 'api.visitor.' + call, data );
	};

	var doAjaxCallOnBeginConversation = function() {
		if ( wpcom_olark.skip_ajax || ! wpcom_olark.nonce || ! wpcom_olark.campaignArgs ) {
			return false;
		}
		var wp_nonce = wpcom_olark.nonce,
			wp_campaign = wpcom_olark.campaignArgs;

		if ( ! wp_campaign.campaign || ! wp_campaign.fromPage )
			return false;

		$.post( '/wp-admin/admin-ajax.php', {
			action:    'on_begin_conversation',
			nonce:     wp_nonce,
			campaign:  wp_campaign.campaign,
			from_page: wp_campaign.fromPage,
			group:     wpcom_olark.system.group
		}, function( data ) {
			try {
				var json = $.parseJSON( data );
				if ( json.count > 0 && json.zd_id > 0 ) {
					var plural = ( json.count > 1 ) ? 's' : '';
					olark( 'api.chat.sendNotificationToOperator', { body: 'This VIP user has ' + json.count + ' unresolved Zendesk ticket' + plural + ': https://wordpressvip.zendesk.com/agent/users/' + json.zd_id + '/requested_tickets' } );
				}
			} catch ( e ) {}
		} );
	};

	var updateVisitorNickname = function( api ) {
		if ( ! api.chat || ! api.chat.visitorNickname )
			return false;

		olark( 'api.chat.updateVisitorNickname', api.chat.visitorNickname );
	};

	var updateVisitorStatus = function( api ) {
		if ( ! api.chat || ! api.chat.visitorStatus )
			return false;

		olark( 'api.chat.updateVisitorStatus', api.chat.visitorStatus );
	};

	var updateEmailAddress = function( api ) {
		if ( ! api.visitor || ! api.visitor.EmailAddress )
			return false;

		olark( 'api.visitor.updateEmailAddress', api.visitor.EmailAddress );
	};

	var updateFullName = function( api ) {
		if ( ! api.visitor || ! api.visitor.FullName )
			return false;

		olark( 'api.visitor.updateFullName', api.visitor.FullName );
	};

	var doChatNotifications = function( olarkEvent ) {
		var process = function( receiver, notifications, olarkEvent ) {
			if ( ! notifications[olarkEvent] )
				return false;

			send( receiver, notifications[olarkEvent] );
		};

		var send = function( receiver, messages ) {
			var i,
			capitalizeFirstLetter = function( string ) {
				return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
			};

			for ( i = 0; i < messages.length; i++ ) {
				olark( 'api.chat.sendNotificationTo' + capitalizeFirstLetter( receiver ), { body: messages[i] } );
			}
		};

		if ( ! wpcom_olark.notifications )
			return false;

		var receivers = [ 'operator', 'visitor' ], i;
		for ( i = 0; i < receivers.length; i++ ) {
			if ( ! wpcom_olark.notifications[receivers[i]] )
				continue;
			process( receivers[i], wpcom_olark.notifications[receivers[i]], olarkEvent );
		};
	};

	var updateVisitorCustomFields = function( api ) {
		if ( ! api.visitor || ! api.visitor.customFields )
			return false;
		doVisitorCalls( api.visitor.customFields, 'updateCustomFields' );
	};

	var callback = {
		onBeginConversation : function() {
			pingTracks(
				{
					stat_name: 'wpcom_live_chat_begin',
					oper_group: wpcom_olark.system.group,
					seconds_since_page_load: Math.round( ( new Date().getTime() - page_load_time ) / 1000 ),
				} );
			wpcom_olark.conversationStarted = true;
			doChatNotifications( 'onBeginConversation' );
			doAjaxCallOnBeginConversation();
		},
		onOperatorsAway: function() {
			// TODO: To be enabled later. See https://happinessgardeningp2.wordpress.com/2015/02/02/olark-groups-with-one-account-project/
			// olark( 'api.chat.setOperatorGroup', { group: wpcom_olark.system.fallback_group } );
			// Use weird negative logic here b/c some Olark installs don't have this object.
			if ( 1 !== wpcom_olark.campaignArgs.show_offline ) {
				olark( 'api.box.hide' );
			}
		},
		onOperatorsAvailable: function() {
			// Use weird negative logic here b/c some Olark installs don't have this object.
			if ( 1 !== wpcom_olark.user_hid_chat ) {
				olark( 'api.box.show' );
			}

			if ( false === chat_displayed ) {
				chat_displayed = true;
			}
		},
        onCommandFromOperator: function( event ) {
            if ( event.command.name == 'ticket' ) {
                olark( 'api.visitor.updateCustomFields', { create_support_ticket: true } );
            }
        },
		onMessageToOperator: function() {
			if ( wpcom_olark.skip_ajax ) {
				return;
			}
			var nonce = wpcom_olark.message_nonce;
			$.post( '/wp-admin/admin-ajax.php', {
				action:    'on_message_to_operator',
				group:     wpcom_olark.system.group,
				campaign:  wpcom_olark.campaignArgs.campaign,
				nonce:     nonce
			} );
		}
	};

	var identify = function() {
		// Need site identity in order to do anything here
		if ( ! wpcom_olark.identity || ! olark.identify ) {
			return false;
		}

		olark.identify( wpcom_olark.identity );
		return true;
	};

	var maybePingTracks = function( properties ) {
		if ( true === chat_displayed ) {
			return;
		}
		pingTracks( properties );
	};

	var pingTracks = function( properties ) {
		// TODO: Limit to /wp-admin (we show chat in other contexts sometimes)?

		var _properties = {
			from_page: wpcom_olark.campaignArgs.fromPage,
			user_type: wpcom_olark.campaignArgs.user_type,
			campaign: wpcom_olark.campaignArgs.campaign,
			source: getTracksSource()
		};

		var stat_name = 'undefined_olark_stat';

		if ( 'object' === typeof properties ) {
			for ( var key in properties ) {
				if ( 'stat_name' === key ) {
					stat_name = properties[ key ];
					continue;
				}
				_properties[ key ] = properties[ key ];
			}
		}

		_tkq = window._tkq || [];
		_tkq.push( [ 'recordEvent', stat_name, _properties ] );
	}.bind( wpcom_olark );

	var getTracksSource = function() {
		if ( document.location.pathname.indexOf( '/wp-admin' ) > -1 ) {
			return 'wp-admin';
		}
		if ( document.location.pathname.indexOf( 'support.wordpress.com' ) > -1 ) {
			return 'support';
		}
		if ( document.location.host.indexOf( 'akismet.com' ) > -1 ) {
			return 'akismet';
		}
		if ( document.location.host.indexOf( 'vaultpress.com' ) > -1 ) {
			return 'vaultpress';
		}
		// TODO: What about non-newdash admin?
		if ( document.location.host == 'wordpress.com' ) {
			return 'newdash';
		}
		return 'unknown';
	};

	var init = function() {

		var eligible_for_chat = 'boolean' === typeof wpcom_olark.campaignArgs.eligible && true === wpcom_olark.campaignArgs.eligible;

		setTimeout( maybePingTracks, 15000, { stat_name: 'wpcom_admin_page_view_without_opers_available', seconds: 15, eligible_for_chat: eligible_for_chat } );
		setTimeout( maybePingTracks, 30000, { stat_name: 'wpcom_admin_page_view_without_opers_available', seconds: 30, eligible_for_chat: eligible_for_chat } );
		setTimeout( maybePingTracks, 300000, { stat_name: 'wpcom_admin_page_view_without_opers_available', seconds: 300, eligible_for_chat: eligible_for_chat } );

		if ( ! eligible_for_chat ) {
			return false;
		}

		if ( ! olark || ! identify() ) {
			return false;
		}

		pingTracks( { stat_name: 'wpcom_admin_page_view_eligible_for_chat' } );

		if ( wpcom_olark.system ) {
			configureSystem( wpcom_olark.system );
		}

		if ( wpcom_olark.box ) {
			configureBox( wpcom_olark.box );
		}

		/* Optional Custom Configuration */
		if ( ! wpcom_olark.api ) {
			return false;
		}

		updateVisitorStatus( wpcom_olark.api );
//		updateEmailAddress( wpcom_olark.api );
//		updateFullName( wpcom_olark.api );
		updateVisitorNickname( wpcom_olark.api );
		updateVisitorCustomFields( wpcom_olark.api );

		doChatNotifications( 'beforeBeginConversation' );

		olark( 'api.chat.onBeginConversation', callback.onBeginConversation );
		olark( 'api.chat.onOperatorsAvailable', callback.onOperatorsAvailable );
		olark( 'api.chat.onOperatorsAway', callback.onOperatorsAway );
		olark( 'api.chat.onCommandFromOperator', callback.onCommandFromOperator );
		olark( 'api.chat.onMessageToOperator', callback.onMessageToOperator );

		window.wpcom_olark = wpcom_olark;
		return true;
	};

	init();
} ( jQuery ) );

;
