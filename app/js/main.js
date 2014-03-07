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
            $('#products').append(res);
        });
    });
});