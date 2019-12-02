$(function(){
    $('.gnb a').on('click', function(event) {
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    });

    $(window).on('scroll', function() {
        $('.target').each(function() {
            if($(window).scrollTop() >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('.gnb a').removeClass('active');
                $('.gnb a[href=#'+ id +']').addClass('active');
            }
        });
    });
    
    $(".gnb li").click(function(){
        var scrollPosition = $($(this).attr("data-target")).offset().top;
        
        $("body").animate({
            scrollTop: scrollPosition
        },500);
    })
})
