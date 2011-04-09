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
	multiFade: function(opacity){
		var elems = this;
		if(!opacity) opacity = 0.3;
		this.addEvents({
			'mouseenter':	function(){
				elems.filter(function(item){
					if(item != this) return item;
				}.bind(this)).tween('opacity', opacity);
			},
			'mouseleave':	function(){
				elems.tween('opacity', 1);
			}
		});
	}
});