$('.nav_side>ul>li').eq(3).click(function (e) {
    console.log($('.nav_side>ul>li').eq(3).find('a')[0]);
    console.log(e.target);
    if (!e.target.isSameNode($('.nav_side>ul>li').eq(3).find('a')[0])) {
        $(this).find('ul').toggleClass('active')
        $(this).find('span').toggleClass('active')
    }

})
$('.side').click(function (e) {
    // console.log();
    if (this.isSameNode(e.target)) {
        console.log('ok');
        $(this).addClass('active');
    }
})
console.log($('.side .button_header'));
$('.side_bottom').click(function (e) {
    $('.side').removeClass('active');
})

$('.asc select').click(function () {
    console.log($(this).children().eq(0).height());
    console.log($(this).is('dispaly'));
})
// $('.side').mousedown(function (e) {
//     console.log(e.pageX,e.pageY);
// })
// $('.side').mouseup(function (e) {
//     console.log(e,e.pageY);
// })
var start = 0
var num = 1
$('.side').on('touchstart',function (e) {
    start=e.targetTouches[0].pageX
    console.log(e);
    // alert(e.changedTouches.length)
    $(this).on('touchmove',function (e) {
        console.log(e);
    })
})
$('.side').on('touchend',function (e) {
    e.changedTouches[0].pageX
    console.log(start-e.changedTouches[0].pageX);
    if(start-e.changedTouches[0].pageX>=50){
        $('.side').addClass('active');
    }
    // alert(e.changedTouches.length)
})