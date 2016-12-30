"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by findl on 2016/12/14.
 */

var YYNotify = function () {
    function YYNotify(options) {
        var _this = this;

        _classCallCheck(this, YYNotify);

        this.index = 0;
        this.options = options;
        var defaultPositon = {
            middleTop: "top:10px;left:50%;margin-left:-150px;",
            middleBottom: "bottom:10px;left:50%;margin-left:-150px;",
            leftTop: "left:10px; top:10px;",
            leftBottom: "bottom:10px;left:10px;",
            rightTop: "top:10px;right:10px;",
            rightBottom: "bottom:10px;right:10px;"
        };
        var defautsvg = {
            "error": "M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027 c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236 c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209 S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972 c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723 c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843 C160.878,195.732,152.878,187.723,143.036,187.723z",
            "success": 'M143.031,0C64.027,0,0.004,64.04,0.004,143.027c0,78.996,64.031,143.027,143.027,143.027 c78.987,0,143.018-64.031,143.018-143.027C286.049,64.049,222.018,0,143.031,0z M143.031,259.236 c-64.183,0-116.209-52.026-116.209-116.209S78.857,26.818,143.031,26.818s116.2,52.026,116.2,116.209 S207.206,259.236,143.031,259.236z M199.241,82.187c-6.079-3.629-13.847-1.475-17.342,4.827l-47.959,86.147l-26.71-32.512 c-4.836-5.569-11.263-8.456-17.333-4.827c-6.079,3.638-8.591,12.39-4.657,18.004l37.169,45.241c2.78,3.611,5.953,5.775,9.27,6.392 l0.027,0.054l0.34,0.018c0.751,0.116,11.979,2.19,16.815-6.463l55.048-98.876C207.402,93.879,205.32,85.825,199.241,82.187z',
            "close": 'M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027 s143.027-64.031,143.027-143.027C286.054,64.04,222.014,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209 S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M168.352,142.938l25.289-25.289 c3.486-3.486,3.486-9.145,0-12.631l-12.649-12.649c-3.495-3.486-9.145-3.495-12.64,0l-25.289,25.289l-25.271-25.271 c-3.495-3.504-9.163-3.504-12.658-0.018l-12.649,12.649c-3.486,3.486-3.486,9.145,0.009,12.649l25.271,25.271l-25.217,25.217 c-3.495,3.495-3.495,9.145,0,12.649l12.64,12.64c3.495,3.486,9.154,3.486,12.64,0l25.226-25.226l25.405,25.414 c3.504,3.495,9.163,3.504,12.658,0.009l12.64-12.64c3.495-3.495,3.486-9.154-0.009-12.649 C193.748,168.352,168.352,142.938,168.352,142.938z'
        };
        //let svg = this.options.svg?this.options.svg:defautsvg;
        this.getSVG = function (type) {
            var color = '#3DB39E';
            if (type == 'error') {
                color = '#FF0000';
            }
            var svgtmp = "<svg version=\"1.1\"  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 286.054 286.054\" style=\"enable-background:new 0 0 286.054 286.054;\" xml:space=\"preserve\"><path style=\"fill:" + color + ";\" d=\"" + _this.options.svg[type] + "\"/></svg>";
            return svgtmp;
        };
        var defaultOptions = {
            showMethod: 'shake', //shake。flyIn
            showTime: 2000, // ms ,default 1500ms -1 is not hide
            position: 'rightTop',
            animate: "yynotify-flyin",
            svg: defautsvg
        };
        for (var i in defaultOptions) {
            this.options[i] = options[i] ? options[i] : defaultOptions[i];
        }
        this.boxtemplate = document.createElement('div');
        this.boxtemplate.className = "yynotify-box";
        this.boxtemplate.setAttribute('style', defaultPositon[this.options['position']]);
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(this.boxtemplate);
    }

    _createClass(YYNotify, [{
        key: "playAudio",
        value: function playAudio(src) {
            if (src) {
                console.log(src);
                var audio = new Audio();
                audio.src = src;
                audio.volume = 1;
                audio.autoplay = true;
            } else {
                console.log(src);
            }
        }
    }, {
        key: "show",
        value: function show(param) {
            var _this2 = this;

            var statusIcon = '';
            var title = "通知",
                time = void 0,
                content = "通知测试";
            if (param instanceof Object) {
                time = param.time;
                title = param.title;
                content = param.content;
                if (!param.icon) {
                    if (param.tipsType) {
                        statusIcon = this.getSVG('success');
                    } else {
                        statusIcon = this.getSVG('error');
                    }
                } else {
                    statusIcon = "<img src=\"" + param.icon + "\"/>";
                }
            } else {
                content = param;
            }
            time = time || this.options.showTime;
            var template = "\n        <div class=\"yynotify-header\">\n            <div class=\"yynotify-title\">" + title + "</div>\n            <div class=\"yynotify-close\">" + this.getSVG('close') + "</div>\n        </div>\n        <div class=\"yynotify-icon\">" + statusIcon + "</div>\n        <div class=\"yynotify-body\">" + content + "</div>\n        ";
            var child = document.createElement('div');
            child.className = "yynotify " + this.options.animate;
            child.id = "yynotify-" + this.index;
            child.innerHTML = template;
            this.boxtemplate.appendChild(child);
            this.playAudio('./src/static/Windows-Notify-Messaging.wav');
            child.querySelector('#yynotify-' + this.index + ' .yynotify-close').addEventListener('click', function (event) {
                child.className += " yynotify-hide";
                _this2.boxtemplate.removeChild(child);
                _this2.index--;
            });
            if (time > 0) {
                setTimeout(function () {
                    _this2.boxtemplate.removeChild(child);
                    _this2.index--;
                }, time);
            } else {
                //不清除
            }
            this.index++;
        }
    }]);

    return YYNotify;
}();

module.exports = YYNotify;

//# sourceMappingURL=YYNotify-compiled.jsjs.map