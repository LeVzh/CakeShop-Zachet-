var lis = document.getElementsByTagName('li');
for (var i = 0; i < 17; i++) {
    lis[i].style.position = 'relative';
    var span = document.createElement('span');
    span.style.cssText = 'position:absolute;left:0;top:0';
    span.innerHTML = i + 1;
    lis[i].appendChild(span);
}

var width = 385;
var count = 3;
var incr = 0;

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

carousel.querySelector('.prev').onclick = function () {
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
    if (incr !== 0) {
        incr -= 1;
        focusing(incr);
    }


};

carousel.querySelector('.next').onclick = function () {
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
    if (incr !== 5) {
        incr += 1;
        focusing(incr);
    }
};

function focusing(inc) {
    var temp;

    switch (inc) {
        case 0:
            temp = document.getElementById('l2');
            temp.classList.remove('active');
            temp = document.getElementById('l1');
            temp.classList.add('active');
            break;
        case 1:
            temp = document.getElementById('l1');
            temp.classList.remove('active');
            temp = document.getElementById('l3');
            temp.classList.remove('active');
            temp = document.getElementById('l2');
            temp.classList.add('active');
            break;
        case 2:
            temp = document.getElementById('l2');
            temp.classList.remove('active');
            temp = document.getElementById('l4');
            temp.classList.remove('active');
            temp = document.getElementById('l3');
            temp.classList.add('active');
            break;
        case 3:
            temp = document.getElementById('l3');
            temp.classList.remove('active');
            temp = document.getElementById('l5');
            temp.classList.remove('active');
            temp = document.getElementById('l4');
            temp.classList.add('active');
            break;
        case 4:
            temp = document.getElementById('l6');
            temp.classList.remove('active');
            temp = document.getElementById('l4');
            temp.classList.remove('active');
            temp = document.getElementById('l5');
            temp.classList.add('active');
            break;
        case 5:
            temp = document.getElementById('l5');
            temp.classList.remove('active');
            temp = document.getElementById('l6');
            temp.classList.add('active');
            break;

    }
}

function hiddener() {
    var a = document.getElementById('undreg');
    a.style.visibility = 'visible';
}

function ahiddener() {
    var a = document.getElementById('undreg');
    a.style.visibility = 'hidden';
}