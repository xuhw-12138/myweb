
var AnchorClick = function (obj) {
    var index = obj.indexOf('#');
    var o = obj.substring( index );
    var pos = $(o).offset().top;
    $('html,body').animate({scrollTop: pos}, 500);
};
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("btn").style.display = "block";
    } else {
        document.getElementById("btn").style.display = "none";
    }
}
var posX;
    var posY;
    fwuss = document.getElementById("#");
    fwuss.onmousedown=function(e){
        posX = event.x - fwuss.offsetLeft;//获得横坐标x
        posY = event.y - fwuss.offsetTop;//获得纵坐标y
        document.onmousemove = mousemove;//调用函数，只要一直按着按钮就能一直调用
    }
    document.onmouseup = function()
    {
        document.onmousemove = null;//鼠标举起，停止
    }
    function mousemove(ev) {
        if(ev==null) ev = window.event;//IE
        fwuss.style.left = (ev.clientX - posX) + "px";
        fwuss.style.right = document.body.clientWidth - fwuss.style.left.toString().replace('px','') + "px";
        fwuss.style.top = (ev.clientY - posY) + "px";
        fwuss.style.bottom = document.body.clientHeight - fwuss.style.top.toString().replace('px','') + "px";

        var left = fwuss.style.left.toString().replace('px','');
        if(left < 0){fwuss.style.left = 0; fwuss.style.right = 100; }
        var top = fwuss.style.top.toString().replace('px','');
        if(top < 0){fwuss.style.top = 0; fwuss.style.bottom = 100;}
        var bottom = fwuss.style.bottom.toString().replace('px','');
        if(bottom < 0){fwuss.style.bottom = 0; fwuss.style.top = 100;}
        var right = fwuss.style.right.toString().replace('px','');
        if(right < 0){fwuss.style.left = 100; fwuss.style.right = 0; }
    }