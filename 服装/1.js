var span = document.querySelectorAll('.nav .moon')
var nav = document.querySelector('.nav');
console.log(span);
var bool = true
var arr = ['b1', 'b4', 'b3']
var item = ['your new style', 'custom made suits', 'styles and trends'];
var bg = document.querySelector('.bg');
var num = 0
var next = document.querySelector('.bg .next');
var before = document.querySelector('.bg .before');
var list = document.querySelector(".i i");
var vs= document.querySelector('.nav .visible-xs')
var vs2= document.querySelector('.nav .visible-xs .nav-name')
next.onclick = show;
before.onclick = function () {
    if (num <= 0) {
        num = arr.length - 1
    }
    document.querySelector('.bg h1').innerText = item[num];
    bg.style.backgroundImage = "url('../整容/img/" + arr[num] + ".jpg')";
    num--
}
function show() {
    if (num >= arr.length) {
        num = 0
    }
    document.querySelector('.bg h1').innerText = item[num];
    bg.style.backgroundImage = "url('../整容/img/" + arr[num] + ".jpg')";
    num++
}

setInterval(show, 4000)
window.onscroll = function () {
    console.log(scrollY);
    if (scrollY !== 0) {
        nav.style.backgroundColor = "lightyellow";
        nav.style.color = "black";
        // span.style.color="black"
        vs2.style.backgroundColor="white";
        span[0].style.color = "red"; 
        document.querySelectorAll('.nav a').forEach(function (e) {
            e.style.color = "black";
        })
    } else {
        nav.style.backgroundColor = "";
        nav.style.color = "white";
        vs2.style.backgroundColor="black";
        span[0].style.color = "white";
        document.querySelectorAll('.nav a').forEach(function (e) {
            e.style.color = "white";
        })
    }
}
span.forEach(function(e){

e.onclick = function () {
    console.log(e.children);
    if (bool) {
        e.firstChild.className = "fa fa-sun-o";
        bool = false
    }
    else {
        e.firstChild.className = "fa fa-moon-o";
        bool = true
    }
    document.body.classList.toggle("act");
    nav.classList.toggle('act')
}})
var bool1 = true

console.log(vs);
list.onclick = function () {
    // document.querySelector('.nav .row').classList.toggle('add')
    if (bool1) {
        document.querySelector('.nav .visible-xs').classList.add('add')
        document.querySelector('.nav .visible-xs').classList.remove('remover')
        bool1 = false
        list.className = "fa fa icon-close fa-times";
    }
    else {
        document.querySelector('.nav .visible-xs').classList.remove('add')
        document.querySelector('.nav .visible-xs').classList.add('remover')
        // document.querySelector('.nav .row').classList.add('add')
        list.className = "fa icon-expand fa-bars";
        bool1 = true
    }
}
