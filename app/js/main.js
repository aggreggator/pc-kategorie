/* global dust */
$(function () {
    'use strict';

    $.getJSON('products.json', function (data) {

        var productsData = data;
        // Set up and compile the Dust.js template
        var productTpl = dust.compile($('#product-tpl').html(), 'productTpl');
        dust.loadSource(productTpl);

        // you could render the template like this

        dust.render('productTpl', productsData, function (err, res) {
            $('#content').append(res);
        });
    });

    // hover on product images
    $( '#content' ).on( 'mouseenter mouseout', '#products img[data-hover-src]', function() {
        console.log('clicked');
        var original = $(this).attr('src');
        var replacement = $(this).data('hover-src');
        $(this).attr('src', replacement).data('hover-src', original);
        //$(this).css('background-color', '#f00');
    });


    $( '#content' ).on( 'click', '#products img', function() {
        console.log('clicked');
        $(this).css('background-color', '#f00');
    });
});