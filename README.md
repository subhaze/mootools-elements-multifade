Elements.multiFade
===========

Packager compatible.

*Notice*:
This plugin used to be Elements.highlight but I realized when looking through the mootools Docs that highlight was already being used by them and it was being used for color tweening and not opacity.
So I'm re-releasing this plugin as Elements.multiFade since they also have a "fade" function for the Element class that will manipulate a single element. This plugin is somewhat similar but is applied to an Element Collection
and activated on mouseover/out events causing the surrounding elements and not the element that is moused over to fadeout.

Sets full opacity to element that is moused over while dimming all other elements of same class.

![Screenshot](http://github.com/subhaze/mootools-element-highlight/raw/master/logo.png)

How to use
----------

JavaScript
	
	// Use any selector to grab elements that you wish to apply this effect to.
	$$( '.link' ).multiFade();
	
	// Over ride the default opacity value of .3
	$$('.link').multiFade(.5);
HTML

	<div id="link-container">
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
	</div>