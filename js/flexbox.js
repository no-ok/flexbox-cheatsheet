$(function() {
    $('.control-btn').on('click', function(e){
    	e.preventDefault();
    	var btn = $(this).attr('data-value');
        var btnText = $(this).text();

    	$(this).parents('.playground-container').find('.flex-container').removeClass().addClass('flex-container ' + btn);
        $(this).parents('.playground-container').find('.code-property-value').empty().append(btnText);
    	$(this).parents('.playground-container').find('.control-btn').removeClass('checked');
    	$(this).addClass('checked');
    });

    $('.basis-btn').on('click', function(e){
    	e.preventDefault();
    	var btn = $(this).attr('data-value');
        var btnText = $(this).text();

    	$(this).parents('.playground-container').find('.flex-container .third-item').css('flex-basis', btn);
        $(this).parents('.playground-container').find('.code-property-value').empty().append(btnText);
    	$(this).parents('.playground-container').find('.basis-btn').removeClass('checked');
    	$(this).addClass('checked');
    });

    $('.flex-grow').on('change', function(e){
    	var input = $(this).val(); 
    	var data = $(this).attr('data-grow-input');

    	$('.grow-container').find('.item[data-grow-item="' + data + '"]').css('flex-grow', input);
        $(this).parents('.playground-container').find('.code-property-value[data-grow-css="' + data + '"]').text(input);
    });

    $('.flex-shrink').on('change', function(e){
    	var input = $(this).val(); 
    	var data = $(this).attr('data-shrink-input');

    	$('.shrink-container').find('.item[data-shrink-item="' + data + '"]').css('flex-shrink', input);
        $(this).parents('.playground-container').find('.code-property-value[data-shrink-css="' + data + '"]').text(input);
    });

    $('.flex-order').on('change', function(e){
    	var input = $(this).val(); 
    	var data = $(this).attr('data-order-input');

    	$('.order-container').find('.item[data-order-item="' + data + '"]').css('order', input);
        $(this).parents('.playground-container').find('.code-property-value[data-order-css="' + data + '"]').text(input);
    });

    $('.flex-short-btn').on('click', function(e){
    	e.preventDefault();
    	var btn = $(this).attr('data-value');
        var btnText = $(this).text();
        
    	$(this).parents('.playground-container').find('.flex-container .third-item').css('flex', btn);
        $(this).parents('.playground-container').find('.code-property-value').empty().append(btnText);
    	$(this).parents('.playground-container').find('.flex-short-btn').removeClass('checked');
    	$(this).addClass('checked');
    });
});
