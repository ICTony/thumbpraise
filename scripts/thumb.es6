// import Thumb from './index.es6'
//import SystemJS from './system.js'
//  let f=new Thumb(0,$('#thumb'));
//  f.clickAction();

SystemJS.config({
        baseURL: './scripts'
    });
    SystemJS.import('index.js').then(function (m) {
        //console.log(m);
        //console.log(m.default);
        $.extend({
            thumb: m.default
        });
        //console.log(thumb);
        //console.log($.thumb);
        callBack();
    });

    function callBack() {
        var f = new $.thumb(0, $('#thumb'));
        f.clickAction();
    }