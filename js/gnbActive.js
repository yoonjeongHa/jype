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
    
})
function fnMove(seq){
        var offset = $(".scroll" + seq).offset();
        $('html, body').animate({
            scrollTop:offset.top
        },400);
}

/*
$(window).on('load', function () {
    load('#js-load', '4');
    $("#js-btn-wrap .button").on("click", function () {
        load('#js-load', '4', '#js-btn-wrap');
    })
});
 
function load(id, cnt, btn) {
    var girls_list = id + " .articleList:not(.active)";
    var girls_length = $(girls_list).length;
    var girls_total_cnt;
    if (cnt < girls_length) {
        girls_total_cnt = cnt;
    } else {
        girls_total_cnt = girls_length;
        $('.button').hide()
    }
    $(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
}

*/
