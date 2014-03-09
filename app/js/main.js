$(function () {
    'use strict';

    $.getJSON('json/category-products.json', function (data) {

        var productsData = data;
        // set up and compile the dust.js template
        var productTpl = dust.compile($('#category-product-tpl').html(), 'productTpl');
        dust.loadSource(productTpl);

        // render the template
        dust.render('productTpl', productsData, function (err, res) {
            $('#content').append(res);
        });
    });

    // hover on product images
    $( '#content' ).on( 'mouseenter mouseleave', '.category-product', function() {
        // hover image
        var categoryProductImage = $(this).find('img.product-image');
        var categoryProductImageOriginal = categoryProductImage.attr('src');
        var categoryProductImageHover = categoryProductImage.data('hover-src');
        categoryProductImage.attr('src', categoryProductImageHover).data('hover-src', categoryProductImageOriginal);

        // show additional info
        var categoryProductInfo = $(this).find('.info');
        categoryProductInfo.fadeToggle();
    });
});