var bb = document.querySelector('.bb')
var gg = document.querySelector('.gg')
var bz = document.querySelector('.bz')
var tb = document.querySelector('.tb')
var bbfy = document.querySelector('.bbfy')
var inp = document.querySelector('input')

inp.focus()



bb.onclick = function() {
    var url = inp.value;
    window.location.href = `https://www.baidu.com/s?wd=${url}`;

}
gg.onclick = function() {
    var url = inp.value;
    window.location.href = `https://www.google.com.hk/search?q=${url}`;

}
bz.onclick = function() {
    var url = inp.value;
    window.location.href = `https://search.bilibili.com/all?keyword=${url}`;

}
tb.onclick = function() {
    var url = inp.value;
    window.location.href = `https://search.jd.com/Search?keyword=${url}`;

}
bbfy.onclick = function() {
    var url = inp.value;
    window.location.href = `https://fanyi.baidu.com/translate?aldtype=16047&query=${url}&keyfrom=baidu&smartresult=dict&lang=auto2zh#en/zh/${url}`;

}