/*
---

name: Elements.multiFade

description: Sets full opacity to element that is moused over while dimming all other elements of same class.

license: MIT-style

requires: 
  - Core/Elements
  - Core/Fx.Tween

provides: Elements.multiFade

authors: [Michael Russell]

...
*/

Elements.implement({

	multiFade: function( opacity ) {
	  
		var opacity = ( opacity ) ? opacity : .3,
		    elems = this;
		    
		this.addEvents({
		  'mouseenter':  function( e ) {
		    elems.each( function( elem ) {
		      if( elem != e.target ) elem.tween( 'opacity', opacity );
		    });
		  },
		  
		  'mouseleave':   function( e ) {
		    elems.each( function( elem ){
		      elem.tween( 'opacity', 1);
		    });
		  }
		});
		
	}
});