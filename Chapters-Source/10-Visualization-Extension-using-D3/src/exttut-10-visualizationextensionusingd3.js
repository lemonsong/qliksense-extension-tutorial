define([
        'jquery',
        /*'underscore',*/
        './properties',
        './initialproperties',
        './lib/js/extensionUtils',
        'text!./lib/css/style.css'
],
function ($, /*_,*/ props, initProps, extensionUtils, cssContent) {
    'use strict';

    extensionUtils.addStyleToHeader(cssContent);

    console.log('Initializing - remove me');

    return {

        definition: props,

        initialProperties: initProps,

        snapshot: { canTakeSnapshot: true },

        resize : function( /*$element, layout*/ ) {
            //do nothing
        },

		//clearSelectedValues : function($element) {
		//
		//},


        // Angular Support (uncomment to use)
        //template: '',

        // Angular Controller
        //controller: ['$scope', function ($scope) {
		//
        //}],


        paint: function ( $element /*, layout*/ ) {

            $element.empty();
            var $helloWorld = $(document.createElement('div'));
            $helloWorld.addClass('hello-world');
            $helloWorld.html('Hello World from the extension "10 - Visualization Extension using D3"');
            $element.append($helloWorld);

        }
    };

});
