Elements.multiFade
===========

Packager compatible.

*Notice*:
This plugin used to be Elements.highlight but I realized when looking through the mootools Docs that highlight was already being used by them and it was being used for color tweening and not opacity.
So I'm re-releasing this plugin as Elements.multiFade since they also have a "fade" function for the Element class that will manipulate a single element. This plugin is somewhat similar but is applied to an Element Collection
and activated on mouseenter/leave events causing the surrounding elements and not the element that is moused over to fadeout.

*Update 1*:
Changed the events types from mouseover/mouseout to mouseenter/mouseleave. This remedies issues when an element has children and one is moused over causing the element itself to fade out.

Keeps full opacity to element that is moused over while dimming all other elements of same class.

![Screenshot](http://github.com/subhaze/mootools-elements-multifade/raw/master/logo.png)

How to use
----------

JavaScript

	#JS
	// Use any selector to grab elements that you wish to apply this effect to.
	$$( '.link' ).multiFade();
	
	// Over ride the default opacity value of .3
	$$('.link').multiFade(.5);
	
HTML

	#HTML
	<div id="link-container">
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
	</div>