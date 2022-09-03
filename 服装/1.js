var span = document.querySelectorAll('.nav span')[1]
var nav = document.querySelector('.nav');
var bool = true
var arr=['b1','b4','b3']
var item=['your new style','custom made suits','styles and trends'];
var bg=document.querySelector('.bg');
 var num=0
 var next = document.querySelector('.bg .next');
 var before = document.querySelector('.bg .before');
next.onclick=show;
before.onclick=function(){
    if (num<=0) {
        num=arr.length-1
    }
    document.querySelector('.bg h1').innerText=item[num];
    bg.style.backgroundImage="url('../整容/img/"+arr[num]+".jpg')";
    num--
}
function show(){
    if (num>=arr.length) {
        num=0
    }
    document.querySelector('.bg h1').innerText=item[num];
    bg.style.backgroundImage="url('../整容/img/"+arr[num]+".jpg')";
    num++
}

setInterval(show,4000)
window.onscroll = function () {
    console.log(scrollY);
    if (scrollY !== 0) {
        nav.style.backgroundColor = "white";
        nav.style.color = "black";
        span.style.color = "black";
        document.querySelectorAll('.nav a').forEach(function (e) {
            e.style.color = "black";
        })
    } else {
        nav.style.backgroundColor = "";
        nav.style.color = "white";
        span.style.color = "white";
        document.querySelectorAll('.nav a').forEach(function (e) {
            e.style.color = "white";
        })
    }
    span.onclick = function () {
        if (bool) {
            document.querySelector('.nav span i').className = "fa fa-sun-o";
            bool = false
        }
        else {
            document.querySelector('.nav span i').className = "fa fa-moon-o";
            bool = true
        }
        document.body.classList.toggle("act");
        nav.classList.toggle('act')
    }
}
