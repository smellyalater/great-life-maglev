// The MIT License (MIT)
// Copyright (c) 2015 Selz.com
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define(null, function() { t(e, document) }) : e.plyr = t(e, document) }("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n() {
        var e, n, r, s = navigator.userAgent,
            a = navigator.appName,
            o = "" + parseFloat(navigator.appVersion),
            i = parseInt(navigator.appVersion, 10);
        return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (a = "IE", o = "11;") : -1 !== (n = s.indexOf("MSIE")) ? (a = "IE", o = s.substring(n + 5)) : -1 !== (n = s.indexOf("Chrome")) ? (a = "Chrome", o = s.substring(n + 7)) : -1 !== (n = s.indexOf("Safari")) ? (a = "Safari", o = s.substring(n + 7), -1 !== (n = s.indexOf("Version")) && (o = s.substring(n + 8))) : -1 !== (n = s.indexOf("Firefox")) ? (a = "Firefox", o = s.substring(n + 8)) : (e = s.lastIndexOf(" ") + 1) < (n = s.lastIndexOf("/")) && (a = s.substring(e, n), o = s.substring(n + 1), a.toLowerCase() == a.toUpperCase() && (a = navigator.appName)), -1 !== (r = o.indexOf(";")) && (o = o.substring(0, r)), -1 !== (r = o.indexOf(" ")) && (o = o.substring(0, r)), i = parseInt("" + o, 10), isNaN(i) && (o = "" + parseFloat(navigator.appVersion), i = parseInt(navigator.appVersion, 10)), { name: a, version: i, ios: /(iPad|iPhone|iPod)/g.test(navigator.platform), touch: "ontouchstart" in t.documentElement } }

    function r(e, t) {
        var n = e.media;
        if ("video" == e.type) switch (t) {
                case "video/webm":
                    return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
                case "video/mp4":
                    return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
                case "video/ogg":
                    return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, "")) } else if ("audio" == e.type) switch (t) {
                case "audio/mpeg":
                    return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
                case "audio/ogg":
                    return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
                case "audio/wav":
                    return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, "")) }
            return !1 }

    function s(e) {
        if (!t.querySelectorAll('script[src="' + e + '"]').length) {
            var n = t.createElement("script");
            n.src = e;
            var r = t.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(n, r) } }

    function a(e, t) {
        return Array.prototype.indexOf && -1 != e.indexOf(t) }

    function o(e, t, n) {
        return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), n) }

    function i(e, t) { e.length || (e = [e]);
        for (var n = e.length - 1; n >= 0; n--) {
            var r = n > 0 ? t.cloneNode(!0) : t,
                s = e[n],
                a = s.parentNode,
                o = s.nextSibling;
            r.appendChild(s), o ? a.insertBefore(r, o) : a.appendChild(r) } }

    function l(e) {
        for (var t = e.parentNode; e.firstChild;) t.insertBefore(e.firstChild, e);
        t.removeChild(e) }

    function u(e) { e && e.parentNode.removeChild(e) }

    function c(e, t) { e.insertBefore(t, e.firstChild) }

    function p(e, t) {
        for (var n in t) e.setAttribute(n, "boolean" == typeof t[n] && t[n] ? "" : t[n]) }

    function d(e, n, r) {
        var s = t.createElement(e);
        p(s, r), c(n, s) }

    function f(e) {
        return e.replace(".", "") }

    function m(e, t, n) {
        if (e)
            if (e.classList) e.classList[n ? "add" : "remove"](t);
            else {
                var r = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                e.className = r + (n ? " " + t : "") } }

    function y(e, t) {
        return e ? e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className) : !1 }

    function b(e, t, n) { e && h(e, t, n, !0) }

    function v(e, t, n) { e && h(e, t, n, !1) }

    function g(e, t, n, r) { b(e, t, function(t) { n && n.apply(e, [t]), r.apply(e, [t]) }) }

    function h(e, t, n, r) {
        var s = t.split(" ");
        if (e instanceof NodeList)
            for (var a = 0; a < e.length; a++) e[a] instanceof Node && h(e[a], arguments[1], arguments[2], arguments[3]);
        else
            for (var o = 0; o < s.length; o++) e[r ? "addEventListener" : "removeEventListener"](s[o], n, !1) }

    function k(e, t, n) {
        if (e && t) {
            var r = new CustomEvent(t, n);
            e.dispatchEvent(r) } }

    function w(e, t) {
        return e ? (t = "boolean" == typeof t ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t) : void 0 }

    function x(e, t) {
        return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2) }

    function T() {
        var e = arguments;
        if (e.length) {
            if (1 == e.lenth) return e[0];
            for (var t = Array.prototype.shift.call(e), n = e.length, r = 0; n > r; r++) {
                var s = e[r];
                for (var a in s) s[a] && s[a].constructor && s[a].constructor === Object ? (t[a] = t[a] || {}, T(t[a], s[a])) : t[a] = s[a] }
            return t } }

    function _() {
        var e = { supportsFullScreen: !1, isFullScreen: function() {
                    return !1 }, requestFullScreen: function() {}, cancelFullScreen: function() {}, fullScreenEventName: "", element: null, prefix: "" },
            n = "webkit moz o ms khtml".split(" ");
        if ("undefined" != typeof t.cancelFullScreen) e.supportsFullScreen = !0;
        else
            for (var r = 0, s = n.length; s > r; r++) {
                if (e.prefix = n[r], "undefined" != typeof t[e.prefix + "CancelFullScreen"]) { e.supportsFullScreen = !0;
                    break }
                if ("undefined" != typeof t.msExitFullscreen && t.msFullscreenEnabled) { e.prefix = "ms", e.supportsFullScreen = !0;
                    break } }
        return e.supportsFullScreen && (e.fullScreenEventName = "ms" == e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function(e) {
            switch ("undefined" == typeof e && (e = t.body), this.prefix) {
                case "":
                    return t.fullscreenElement == e;
                case "moz":
                    return t.mozFullScreenElement == e;
                default:
                    return t[this.prefix + "FullscreenElement"] == e } }, e.requestFullScreen = function(e) {
            return "undefined" == typeof e && (e = t.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" == this.prefix ? "RequestFullscreen" : "RequestFullScreen")]() }, e.cancelFullScreen = function() {
            return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + ("ms" == this.prefix ? "ExitFullscreen" : "CancelFullScreen")]() }, e.element = function() {
            return "" === this.prefix ? t.fullscreenElement : t[this.prefix + "FullscreenElement"] }), e }

    function F() {
        var t = { supported: function() {
                if (!("localStorage" in e)) return !1;
                try { e.localStorage.setItem("___test", "OK");
                    var t = e.localStorage.getItem("___test");
                    return e.localStorage.removeItem("___test"), "OK" === t } catch (n) {
                    return !1 }
                return !1 }() };
        return t }

    function C(h, T) {
        function C(t, n) { T.debug && e.console && console[n ? "warn" : "log"](t) }

        function N() {
            var e = ['<div class="plyr__controls">', '<div class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0">', "<span>0</span>% " + T.i18n.played, "</progress>", '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + T.i18n.buffered, "</progress>"];
            return T.tooltips.seek && e.push('<span class="plyr__tooltip">00:00</span>'), e.push("</div>", '<span class="plyr__controls--left">'), a(T.controls, "restart") && e.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="#' + T.iconPrefix + '-restart" /></svg>', '<span class="plyr__sr-only">' + T.i18n.restart + "</span>", "</button>"), a(T.controls, "rewind") && e.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="#' + T.iconPrefix + '-rewind" /></svg>', '<span class="plyr__sr-only">' + T.i18n.rewind + "</span>", "</button>"), a(T.controls, "play") && e.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="#' + T.iconPrefix + '-play" /></svg>', '<span class="plyr__sr-only">' + T.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="#' + T.iconPrefix + '-pause" /></svg>', '<span class="plyr__sr-only">' + T.i18n.pause + "</span>", "</button>"), a(T.controls, "fast-forward") && e.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="#' + T.iconPrefix + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + T.i18n.forward + "</span>", "</button>"), a(T.controls, "current-time") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + T.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"), a(T.controls, "duration") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + T.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"), e.push("</span>", '<span class="plyr__controls--right">'), a(T.controls, "mute") && e.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="#' + T.iconPrefix + '-muted" /></svg>', '<svg><use xlink:href="#' + T.iconPrefix + '-volume" /></svg>', '<span class="plyr__sr-only">' + T.i18n.toggleMute + "</span>", "</button>"), a(T.controls, "volume") && e.push('<label for="volume{id}" class="plyr__sr-only">' + T.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume" type="range" min="0" max="10" value="5" data-plyr="volume">'), a(T.controls, "captions") && e.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="#' + T.iconPrefix + '-captions-on" /></svg>', '<svg><use xlink:href="#' + T.iconPrefix + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + T.i18n.toggleCaptions + "</span>", "</button>"), a(T.controls, "fullscreen") && e.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="#' + T.iconPrefix + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="#' + T.iconPrefix + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + T.i18n.toggleFullscreen + "</span>", "</button>"), e.push("</span>", "</div>"), e.join("") }

        function I() {
            if (Ee.supported.full && ("audio" != Ee.type || T.fullscreen.allowAudio) && T.fullscreen.enabled) {
                var e = E.supportsFullScreen;
                e || T.fullscreen.fallback && !R() ? (C((e ? "Native" : "Fallback") + " fullscreen enabled"), m(Ee.container, T.classes.fullscreen.enabled, !0)) : C("Fullscreen not supported and fallback disabled"), w(Ee.buttons.fullscreen, !1), j(), T.fullscreen.hideControls && m(Ee.container, T.classes.fullscreen.hideControls, !0) } }

        function P() {
            if ("video" === Ee.type) { q(T.selectors.captions) || Ee.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + f(T.selectors.captions) + '"></div>'), Ee.usingTextTracks = !1, Ee.media.textTracks && (Ee.usingTextTracks = !0);
                for (var e, t = "", n = Ee.media.childNodes, r = 0; r < n.length; r++) "track" === n[r].nodeName.toLowerCase() && (e = n[r].kind, ("captions" === e || "subtitles" === e) && (t = n[r].getAttribute("src")));
                if (Ee.captionExists = !0, "" === t ? (Ee.captionExists = !1, C("No caption track found")) : C("Caption track found; URI: " + t), Ee.captionExists) {
                    for (var s = Ee.media.textTracks, a = 0; a < s.length; a++) s[a].mode = "hidden";
                    if (O(Ee), ("IE" === Ee.browser.name && Ee.browser.version >= 10 || "Firefox" === Ee.browser.name && Ee.browser.version >= 31) && (C("Detected browser with known TextTrack issues - using manual fallback"), Ee.usingTextTracks = !1), Ee.usingTextTracks) { C("TextTracks supported");
                        for (var o = 0; o < s.length; o++) {
                            var i = s[o];
                            ("captions" === i.kind || "subtitles" === i.kind) && b(i, "cuechange", function() { this.activeCues[0] && "text" in this.activeCues[0] ? M(this.activeCues[0].getCueAsHTML()) : M() }) } } else if (C("TextTracks not supported so rendering captions manually"), Ee.currentCaption = "", Ee.captions = [], "" !== t) {
                        var l = new XMLHttpRequest;
                        l.onreadystatechange = function() {
                            if (4 === l.readyState)
                                if (200 === l.status) {
                                    var e, t = [],
                                        n = l.responseText;
                                    t = n.split("\n\n");
                                    for (var r = 0; r < t.length; r++) { e = t[r], Ee.captions[r] = [];
                                        var s = e.split("\n"),
                                            a = 0; - 1 === s[a].indexOf(":") && (a = 1), Ee.captions[r] = [s[a], s[a + 1]] }
                                    Ee.captions.shift(), C("Successfully loaded the caption file via AJAX") } else C("There was a problem loading the caption file via AJAX", !0) }, l.open("get", t, !0), l.send() } } else m(Ee.container, T.classes.captions.enabled) } }

        function M(e) {
            var n = q(T.selectors.captions),
                r = t.createElement("span");
            n.innerHTML = "", "undefined" == typeof e && (e = ""), "string" == typeof e ? r.innerHTML = e.trim() : r.appendChild(e), n.appendChild(r);
            n.offsetHeight }

        function L(e) {
            function t(e, t) {
                var n = [];
                n = e.split(" --> ");
                for (var r = 0; r < n.length; r++) n[r] = n[r].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                return s(n[t]) }

            function n(e) {
                return t(e, 0) }

            function r(e) {
                return t(e, 1) }

            function s(e) {
                if (null === e || void 0 === e) return 0;
                var t, n = [],
                    r = [];
                return n = e.split(","), r = n[0].split(":"), t = Math.floor(60 * r[0] * 60) + Math.floor(60 * r[1]) + Math.floor(r[2]) }
            if (!Ee.usingTextTracks && "video" === Ee.type && Ee.supported.full && (Ee.subcount = 0, e = "number" == typeof e ? e : Ee.media.currentTime, Ee.captions[Ee.subcount])) {
                for (; r(Ee.captions[Ee.subcount][0]) < e.toFixed(1);)
                    if (Ee.subcount++, Ee.subcount > Ee.captions.length - 1) { Ee.subcount = Ee.captions.length - 1;
                        break }
                Ee.media.currentTime.toFixed(1) >= n(Ee.captions[Ee.subcount][0]) && Ee.media.currentTime.toFixed(1) <= r(Ee.captions[Ee.subcount][0]) ? (Ee.currentCaption = Ee.captions[Ee.subcount][1], M(Ee.currentCaption)) : M() } }

        function O() { Ee.buttons.captions && (m(Ee.container, T.classes.captions.enabled, !0), T.captions.defaultActive && (m(Ee.container, T.classes.captions.active, !0), w(Ee.buttons.captions, !0))) }

        function V(e) {
            return Ee.container.querySelectorAll(e) }

        function q(e) {
            return V(e)[0] }

        function R() {
            try {
                return e.self !== e.top } catch (t) {
                return !0 } }

        function j() {
            function e(e) { 9 === e.which && Ee.isFullscreen && (e.target !== r || e.shiftKey ? e.target === n && e.shiftKey && (e.preventDefault(), r.focus()) : (e.preventDefault(), n.focus())) }
            var t = V("input:not([disabled]), button:not([disabled])"),
                n = t[0],
                r = t[t.length - 1];
            b(Ee.container, "keydown", e) }

        function H(e, t) {
            if ("string" == typeof t) d(e, Ee.media, { src: t });
            else if (t.constructor === Array)
                for (var n = t.length - 1; n >= 0; n--) d(e, Ee.media, t[n]) }

        function B() {
            var e = T.html;
            C("Injecting custom controls"), e || (e = N()), e = o(e, "{seektime}", T.seekTime), e = o(e, "{id}", Math.floor(1e4 * Math.random()));
            var n;
            if (null !== T.selectors.controls.container && (n = T.selectors.controls.container, "string" == typeof selector && (n = t.querySelector(n))), n instanceof HTMLElement || (n = Ee.container), n.insertAdjacentHTML("beforeend", e), T.tooltips.controls)
                for (var r = V(T.selectors.labels + " ." + T.classes.hidden), s = r.length - 1; s >= 0; s--) {
                    var a = r[s];
                    m(a, T.classes.hidden, !1), m(a, T.classes.tooltip, !0) } }

        function D() {
            try {
                return Ee.controls = q(T.selectors.controls.wrapper), Ee.buttons = {}, Ee.buttons.seek = q(T.selectors.buttons.seek), Ee.buttons.play = q(T.selectors.buttons.play), Ee.buttons.pause = q(T.selectors.buttons.pause), Ee.buttons.restart = q(T.selectors.buttons.restart), Ee.buttons.rewind = q(T.selectors.buttons.rewind), Ee.buttons.forward = q(T.selectors.buttons.forward), Ee.buttons.fullscreen = q(T.selectors.buttons.fullscreen), Ee.buttons.volume = q(T.selectors.buttons.volume), Ee.buttons.mute = q(T.selectors.buttons.mute), Ee.buttons.captions = q(T.selectors.buttons.captions), Ee.checkboxes = V('[type="checkbox"]'), Ee.progress = {}, Ee.progress.container = q(T.selectors.progress.container), Ee.progress.buffer = {}, Ee.progress.buffer.bar = q(T.selectors.progress.buffer), Ee.progress.buffer.text = Ee.progress.buffer.bar && Ee.progress.buffer.bar.getElementsByTagName("span")[0], Ee.progress.played = {}, Ee.progress.played.bar = q(T.selectors.progress.played), Ee.progress.played.text = Ee.progress.played.bar && Ee.progress.played.bar.getElementsByTagName("span")[0], Ee.progress.tooltip = Ee.progress.container && Ee.progress.container.querySelector("." + T.classes.tooltip), Ee.volume = q(T.selectors.buttons.volume), Ee.duration = q(T.selectors.duration), Ee.currentTime = q(T.selectors.currentTime), Ee.seekTime = V(T.selectors.seekTime), !0 } catch (e) {
                return C("It looks like there is a problem with your controls html", !0), $(!0), !1 } }

        function Y() { m(Ee.container, A.selectors.container.replace(".", ""), Ee.supported.full) }

        function $(e) { e ? Ee.media.setAttribute("controls", "") : Ee.media.removeAttribute("controls") }

        function W(e) {
            var t = T.i18n.play; "undefined" != typeof T.title && T.title.length && (t += ", " + T.title), Ee.supported.full && Ee.buttons.play && Ee.buttons.play.setAttribute("aria-label", t), e instanceof HTMLElement && e.setAttribute("title", T.i18n.frameTitle.replace("{title}", T.title)) }

        function z() {
            if (!Ee.media) return C("No audio or video element found", !0), !1;
            if (Ee.supported.full && (m(Ee.container, T.classes.type.replace("{0}", Ee.type), !0), m(Ee.container, T.classes.stopped, T.autoplay), m(Ee.container, T.classes.isIos, Ee.browser.ios), m(Ee.container, T.classes.isTouch, Ee.browser.touch), "video" === Ee.type)) {
                var e = t.createElement("div");
                e.setAttribute("class", T.classes.videoWrapper), i(Ee.media, e), Ee.videoContainer = e }
            a(T.types.embed, Ee.type) ? (K(), Ee.embedId = null) : T.autoplay && G() }

        function K() {
            for (var n = t.createElement("div"), r = Ee.embedId, a = Ee.type + "-" + Math.floor(1e4 * Math.random()), o = V('[id^="' + Ee.type + '-"]'), i = o.length - 1; i >= 0; i--) u(o[i]);
            if (m(Ee.media, T.classes.videoWrapper, !0), m(Ee.media, T.classes.embedWrapper, !0), "youtube" === Ee.type) Ee.media.appendChild(n), n.setAttribute("id", a), "object" == typeof YT ? X(r, n) : (s(T.urls.youtube.api), e.onYouTubeReadyCallbacks = e.onYouTubeReadyCallbacks || [], e.onYouTubeReadyCallbacks.push(function() { X(r, n) }), e.onYouTubeIframeAPIReady = function() { e.onYouTubeReadyCallbacks.forEach(function(e) { e() }) });
            else if ("vimeo" === Ee.type) {
                var l = t.createElement("iframe");
                l.loaded = !1, b(l, "load", function() { l.loaded = !0 }), p(l, { src: "https://player.vimeo.com/video/" + r + "?player_id=" + a + "&api=1&badge=0&byline=0&portrait=0&title=0", id: a, webkitallowfullscreen: "", mozallowfullscreen: "", allowfullscreen: "", frameborder: 0 }), Ee.supported.full ? (n.appendChild(l), Ee.media.appendChild(n)) : Ee.media.appendChild(l), "$f" in e || s(T.urls.vimeo.api);
                var c = e.setInterval(function() { "$f" in e && l.loaded && (e.clearInterval(c), J.call(l)) }, 50) } }

        function U() { Ce(), W(q("iframe")) }

        function X(t, n) { "timer" in Ee || (Ee.timer = {}), Ee.embed = new YT.Player(n.id, { videoId: t, playerVars: { autoplay: 0, controls: Ee.supported.full ? 0 : 1, rel: 0, showinfo: 0, iv_load_policy: 3, cc_load_policy: T.captions.defaultActive ? 1 : 0, cc_lang_pref: "en", wmode: "transparent", modestbranding: 1, disablekb: 1, origin: "*" }, events: { onReady: function(t) {
                        var n = t.target;
                        Ee.media.play = function() { n.playVideo(), Ee.media.paused = !1 }, Ee.media.pause = function() { n.pauseVideo(), Ee.media.paused = !0 }, Ee.media.stop = function() { n.stopVideo(), Ee.media.paused = !0 }, Ee.media.duration = n.getDuration(), Ee.media.paused = !0, Ee.media.currentTime = n.getCurrentTime(), Ee.media.muted = n.isMuted(), k(Ee.media, "timeupdate"), e.clearInterval(Ee.timer.buffering), Ee.timer.buffering = e.setInterval(function() { Ee.media.buffered = n.getVideoLoadedFraction(), k(Ee.media, "progress"), 1 === Ee.media.buffered && (e.clearInterval(Ee.timer.buffering), k(Ee.media, "canplaythrough")) }, 200), U(), me() }, onStateChange: function(t) {
                        var n = t.target;
                        switch (e.clearInterval(Ee.timer.playing), t.data) {
                            case 0:
                                Ee.media.paused = !0, k(Ee.media, "ended");
                                break;
                            case 1:
                                Ee.media.paused = !1, Ee.media.seeking = !1, k(Ee.media, "play"), k(Ee.media, "playing"), Ee.timer.playing = e.setInterval(function() { Ee.media.currentTime = n.getCurrentTime(), k(Ee.media, "timeupdate") }, 100);
                                break;
                            case 2:
                                Ee.media.paused = !0, k(Ee.media, "pause") } } } }) }

        function J() { Ee.embed = $f(this), Ee.embed.addEvent("ready", function() { Ee.media.play = function() { Ee.embed.api("play"), Ee.media.paused = !1 }, Ee.media.pause = function() { Ee.embed.api("pause"), Ee.media.paused = !0 }, Ee.media.stop = function() { Ee.embed.api("stop"), Ee.media.paused = !0 }, Ee.media.paused = !0, Ee.media.currentTime = 0, U(), Ee.embed.api("getCurrentTime", function(e) { Ee.media.currentTime = e, k(Ee.media, "timeupdate") }), Ee.embed.api("getDuration", function(e) { Ee.media.duration = e, me() }), Ee.embed.addEvent("play", function() { Ee.media.paused = !1, k(Ee.media, "play"), k(Ee.media, "playing") }), Ee.embed.addEvent("pause", function() { Ee.media.paused = !0, k(Ee.media, "pause") }), Ee.embed.addEvent("playProgress", function(e) { Ee.media.seeking = !1, Ee.media.currentTime = e.seconds, k(Ee.media, "timeupdate") }), Ee.embed.addEvent("loadProgress", function(e) { Ee.media.buffered = e.percent, k(Ee.media, "progress"), 1 === parseInt(e.percent) && k(Ee.media, "canplaythrough") }), Ee.embed.addEvent("finish", function() { Ee.media.paused = !0, k(Ee.media, "ended") }) }) }

        function G() { "play" in Ee.media && Ee.media.play() }

        function Q() { "pause" in Ee.media && Ee.media.pause() }

        function Z(e) { e === !0 ? G() : e === !1 ? Q() : Ee.media[Ee.media.paused ? "play" : "pause"]() }

        function ee(e) { "number" != typeof e && (e = T.seekTime), ne(Ee.media.currentTime - e) }

        function te(e) { "number" != typeof e && (e = T.seekTime), ne(Ee.media.currentTime + e) }

        function ne(e) {
            var t = 0,
                n = Ee.media.paused,
                r = re(); "number" == typeof e ? t = e : "object" != typeof e || "input" !== e.type && "change" !== e.type || (t = e.target.value / e.target.max * r), 0 > t ? t = 0 : t > r && (t = r);
            try { Ee.media.currentTime = t.toFixed(1) } catch (s) {}
            if (a(T.types.embed, Ee.type)) {
                switch (Ee.type) {
                    case "youtube":
                        Ee.embed.seekTo(t);
                        break;
                    case "vimeo":
                        Ee.embed.api("seekTo", t.toFixed(0)) }
                n && Q(), k(Ee.media, "timeupdate"), Ee.media.seeking = !0 }
            C("Seeking to " + Ee.media.currentTime + " seconds"), L(t) }

        function re() {
            var e = parseInt(T.duration);
            return isNaN(e) ? Ee.media.duration : e }

        function se() { m(Ee.container, T.classes.playing, !Ee.media.paused), m(Ee.container, T.classes.stopped, Ee.media.paused) }

        function ae(e) {
            var n = E.supportsFullScreen;
            e && e.type === E.fullScreenEventName ? Ee.isFullscreen = E.isFullScreen(Ee.container) : n ? (E.isFullScreen(Ee.container) ? E.cancelFullScreen() : E.requestFullScreen(Ee.container), Ee.isFullscreen = E.isFullScreen(Ee.container)) : (Ee.isFullscreen = !Ee.isFullscreen, Ee.isFullscreen ? (b(t, "keyup", oe), t.body.style.overflow = "hidden") : (v(t, "keyup", oe), t.body.style.overflow = "")), m(Ee.container, T.classes.fullscreen.active, Ee.isFullscreen), Ee.isFullscreen ? Ee.container.setAttribute("tabindex", "-1") : Ee.container.removeAttribute("tabindex"), j(Ee.isFullscreen), w(Ee.buttons.fullscreen, Ee.isFullscreen), T.fullscreen.hideControls && ve(!0), k(Ee.container, Ee.isFullscreen ? "enterfullscreen" : "exitfullscreen") }

        function oe(e) { 27 === (e.which || e.charCode || e.keyCode) && Ee.isFullscreen && ae() }

        function ie(e) {
            if ("boolean" != typeof e && (e = !Ee.media.muted), w(Ee.buttons.mute, e), Ee.media.muted = e, a(T.types.embed, Ee.type)) {
                switch (Ee.type) {
                    case "youtube":
                        Ee.embed[Ee.media.muted ? "mute" : "unMute"]();
                        break;
                    case "vimeo":
                        Ee.embed.api("setVolume", Ee.media.muted ? 0 : parseFloat(T.volume / 10)) }
                k(Ee.media, "volumechange") } }

        function le(t) {
            if ("undefined" == typeof t && (t = T.volume, T.storage.enabled && F().supported && (t = e.localStorage.getItem(T.storage.key), e.localStorage.removeItem("plyr-volume"))), (null === t || isNaN(t)) && (t = T.volume), t > 10 && (t = 10), 0 > t && (t = 0), Ee.media.volume = parseFloat(t / 10), T.volume = t, a(T.types.embed, Ee.type)) {
                switch (Ee.type) {
                    case "youtube":
                        Ee.embed.setVolume(100 * Ee.media.volume);
                        break;
                    case "vimeo":
                        Ee.embed.api("setVolume", Ee.media.volume) }
                k(Ee.media, "volumechange") }
            Ee.media.muted && t > 0 && ie() }

        function ue() {
            var t = Ee.media.muted ? 0 : 10 * Ee.media.volume;
            Ee.supported.full && Ee.volume && (Ee.volume.value = t), T.storage.enabled && F().supported && !isNaN(t) && e.localStorage.setItem(T.storage.key, t), m(Ee.container, T.classes.muted, 0 === t), Ee.supported.full && Ee.buttons.mute && w(Ee.buttons.mute, 0 === t) }

        function ce(e) { Ee.supported.full && Ee.buttons.captions && ("boolean" != typeof e && (e = -1 === Ee.container.className.indexOf(T.classes.captions.active)), Ee.captionsEnabled = e, w(Ee.buttons.captions, Ee.captionsEnabled), m(Ee.container, T.classes.captions.active, Ee.captionsEnabled), k(Ee.container, Ee.captionsEnabled ? "captionsenabled" : "captionsdisabled")) }

        function pe(e) {
            var t = "waiting" === e.type;
            clearTimeout(Ee.timers.loading), Ee.timers.loading = setTimeout(function() { m(Ee.container, T.classes.loading, t) }, t ? 250 : 0) }

        function de(e) {
            var t = Ee.progress.played.bar,
                n = Ee.progress.played.text,
                r = 0,
                s = re();
            if (e) switch (e.type) {
                case "timeupdate":
                case "seeking":
                    r = x(Ee.media.currentTime, s), "timeupdate" == e.type && Ee.buttons.seek && (Ee.buttons.seek.value = r);
                    break;
                case "change":
                case "input":
                    r = e.target.value;
                    break;
                case "playing":
                case "progress":
                    t = Ee.progress.buffer.bar, n = Ee.progress.buffer.text, r = function() {
                        var e = Ee.media.buffered;
                        return e && e.length ? x(e.end(0), s) : "number" == typeof e ? 100 * e : 0 }() }
            t && (t.value = r), n && (n.innerHTML = r) }

        function fe(e, t) {
            if (t) { isNaN(e) && (e = 0), Ee.secs = parseInt(e % 60), Ee.mins = parseInt(e / 60 % 60), Ee.hours = parseInt(e / 60 / 60 % 60);
                var n = parseInt(re() / 60 / 60 % 60) > 0;
                Ee.secs = ("0" + Ee.secs).slice(-2), Ee.mins = ("0" + Ee.mins).slice(-2), t.innerHTML = (n ? Ee.hours + ":" : "") + Ee.mins + ":" + Ee.secs } }

        function me() {
            if (Ee.supported.full) {
                var e = re() || 0;!Ee.duration && T.displayDuration && Ee.media.paused && fe(e, Ee.currentTime), Ee.duration && fe(e, Ee.duration), be() } }

        function ye(e) { fe(Ee.media.currentTime, Ee.currentTime), e && "timeupdate" == e.type && Ee.media.seeking || de(e) }

        function be(e) {
            if (T.tooltips.seek && !Ee.browser.touch) {
                var t = Ee.progress.container.getBoundingClientRect(),
                    n = 0,
                    r = T.classes.tooltip + "--visible";
                if (e) n = 100 / t.width * (e.pageX - t.left);
                else {
                    if (!y(Ee.progress.tooltip, r)) return;
                    n = Ee.progress.tooltip.style.left.replace("%", "") }
                0 > n ? n = 0 : n > 100 && (n = 100), fe(re() / 100 * n, Ee.progress.tooltip), Ee.progress.tooltip.style.left = n + "%", e && a(["mouseenter", "mouseleave"], e.type) && m(Ee.progress.tooltip, r, "mouseenter" === e.type) } }

        function ve(t) { Ee.isFullscreen && (m(Ee.container, T.classes.hover, !0), e.clearTimeout(Ee.timers.hover), Ee.timers.hover = e.setTimeout(function() { Ee.controls.mouseover && t !== !0 || m(Ee.container, T.classes.hover, !1) }, 2e3)) }

        function ge(e) {
            if ("undefined" != typeof e) return void he(e);
            var t;
            switch (Ee.type) {
                case "youtube":
                    t = Ee.embed.getVideoUrl();
                    break;
                case "vimeo":
                    Ee.embed.api("getVideoUrl", function(e) { t = e });
                    break;
                default:
                    t = Ee.media.currentSrc }
            return t || "" }

        function he(n) {
            if (!("undefined" != typeof n && "sources" in n && n.sources.length)) return void C("Invalid source format", !0);
            if (Q(), "youtube" === Ee.type ? (Ee.embed.destroy(), e.clearInterval(Ee.timer.buffering), e.clearInterval(Ee.timer.playing)) : "video" === Ee.type && Ee.videoContainer && u(Ee.videoContainer), Te(), u(Ee.media), "type" in n && (Ee.type = n.type, "video" === Ee.type)) {
                var r = n.sources[0]; "type" in r && a(T.types.embed, r.type) && (Ee.type = r.type) }
            switch (Ee.supported = S.supported(Ee.type), Ee.type) {
                case "video":
                    Ee.media = t.createElement("video");
                    break;
                case "audio":
                    Ee.media = t.createElement("audio");
                    break;
                case "youtube":
                case "vimeo":
                    Ee.media = t.createElement("div"), Ee.embedId = n.sources[0].src }
            c(Ee.container, Ee.media), a(T.types.html5, Ee.type) && (T.crossorigin && Ee.media.setAttribute("crossorigin", ""), T.autoplay && Ee.media.setAttribute("autoplay", ""), "poster" in n && Ee.media.setAttribute("poster", n.poster), T.loop && Ee.media.setAttribute("loop", "")), Ee.container.className = Ee.originalClassName, m(Ee.container, T.classes.fullscreen.active, Ee.isFullscreen), m(Ee.container, T.classes.captions.active, Ee.captionsEnabled), Y(), T.autoplay = n.autoplay || T.autoplay, a(T.types.html5, Ee.type) && H("source", n.sources), z(), a(T.types.html5, Ee.type) && ("tracks" in n && H("track", n.tracks), Ee.media.load(), Ce(), me()), T.autoplay && G(), "title" in n && (T.title = n.title, W()), Ee.container.plyr.media = Ee.media }

        function ke(e) { "video" === Ee.type && Ee.media.setAttribute("poster", e) }

        function we() {
            function n() {
                var e = Ee.media.paused;
                e ? G() : Q();
                var t = Ee.buttons[e ? "play" : "pause"],
                    n = Ee.buttons[e ? "pause" : "play"];
                if (n) {
                    var r = y(t, T.classes.tabFocus);
                    setTimeout(function() { n.focus(), r && (m(t, T.classes.tabFocus, !1), m(n, T.classes.tabFocus, !0)) }, 100) } }

            function r() {
                var e = t.activeElement;
                e && e != t.body ? t.querySelector && (e = t.querySelector(":focus")) : e = null;
                for (var n in Ee.buttons) {
                    var r = Ee.buttons[n];
                    m(r, T.classes.tabFocus, r === e) } }
            var s = "IE" == Ee.browser.name ? "change" : "input";
            b(e, "keyup", function(e) {
                var t = e.keyCode ? e.keyCode : e.which;
                9 == t && r() }), b(t.body, "click", function() { m(q("." + T.classes.tabFocus), T.classes.tabFocus, !1) });
            for (var a in Ee.buttons) {
                var o = Ee.buttons[a];
                b(o, "blur", function() { m(o, "tab-focus", !1) }) }
            g(Ee.buttons.play, "click", T.listeners.play, n), g(Ee.buttons.pause, "click", T.listeners.pause, n), g(Ee.buttons.restart, "click", T.listeners.restart, ne), g(Ee.buttons.rewind, "click", T.listeners.rewind, ee), g(Ee.buttons.forward, "click", T.listeners.forward, te), g(Ee.buttons.seek, s, T.listeners.seek, ne), g(Ee.volume, s, T.listeners.volume, function() { le(Ee.volume.value) }), g(Ee.buttons.mute, "click", T.listeners.mute, ie), g(Ee.buttons.fullscreen, "click", T.listeners.fullscreen, ae), E.supportsFullScreen && b(t, E.fullScreenEventName, ae), b(Ee.buttons.captions, "click", ce), b(Ee.progress.container, "mouseenter mouseleave mousemove", be);
            T.fullscreen.hideControls && b(Ee.controls, "mouseenter mouseleave", function(e) { Ee.controls.mouseover = "mouseenter" === e.type }) }

        function xe() { b(Ee.media, "timeupdate seeking", ye), b(Ee.media, "timeupdate", L), b(Ee.media, "durationchange loadedmetadata", me), b(Ee.media, "ended", function() { "video" === Ee.type && M(), se() }), b(Ee.media, "progress playing", de), b(Ee.media, "volumechange", ue), b(Ee.media, "play pause", se), b(Ee.media, "waiting canplay seeked", pe), T.click && b(Ee.media, "click", function() { Ee.media.paused ? G() : Ee.media.ended ? (ne(), G()) : Q() }), T.fullscreen.hideControls && b(Ee.media, "mousemove", ve), b(Ee.media, T.events.join(" "), function(e) { k(Ee.container, e.type) }) }

        function Te() {
            if (a(T.types.html5, Ee.type)) { Ee.media.setAttribute("src", "");
                for (var e = Ee.media.querySelectorAll("source"), t = 0; t < e.length; t++) u(e[t]);
                Ee.media.load(), C("Cancelled network requests for old media") } }

        function _e() {
            if (!Ee.init) return null;
            if (Ee.container.setAttribute("class", f(T.selectors.container)), Ee.init = !1, u(q(T.selectors.controls.wrapper)), "youtube" === Ee.type) return void Ee.embed.destroy(); "video" === Ee.type && (u(q(T.selectors.captions)), l(Ee.videoContainer)), $(!0);
            var e = Ee.media.cloneNode(!0);
            Ee.media.parentNode.replaceChild(e, Ee.media) }

        function Fe() {
            if (Ee.init) return null;
            E = _(), Ee.browser = n(), Ee.media = Ee.container.querySelectorAll("audio, video, div")[0], Ee.originalClassName = Ee.container.className;
            var e = Ee.media.tagName.toLowerCase();
            if ("div" === e ? (Ee.type = Ee.media.getAttribute("data-type"), Ee.embedId = Ee.media.getAttribute("data-video-id"), Ee.media.removeAttribute("data-type"), Ee.media.removeAttribute("data-video-id")) : (Ee.type = e, T.crossorigin = null !== Ee.media.getAttribute("crossorigin"), T.autoplay = T.autoplay || null !== Ee.media.getAttribute("autoplay"), T.loop = T.loop || null !== Ee.media.getAttribute("loop")), Ee.supported = S.supported(Ee.type), Y(), !Ee.supported.basic) return !1;
            if (C(Ee.browser.name + " " + Ee.browser.version), z(), a(T.types.html5, Ee.type)) {
                if (!Ee.supported.full) return void(Ee.init = !0);
                Ce(), W() }
            Ee.init = !0 }

        function Ce() {
            if (!Ee.supported.full) return C("No full support for this media type (" + Ee.type + ")", !0), u(q(T.selectors.controls.wrapper)), void $(!0);
            var e = !V(T.selectors.controls.wrapper).length;
            e && B(), D() && (e && we(), xe(), $(), I(), P(), le(), ue(), ye(), se(), me()) }
        var Ee = this;
        return Ee.container = h, Ee.timers = {}, C(T), Fe(), Ee.init ? { media: Ee.media, play: G, pause: Q, restart: ne, rewind: ee, forward: te, seek: ne, source: ge, poster: ke, setVolume: le, togglePlay: Z, toggleMute: ie, toggleCaptions: ce, toggleFullscreen: ae, isFullscreen: function() {
                return Ee.isFullscreen || !1 }, support: function(e) {
                return r(Ee, e) }, destroy: _e, restore: Fe } : {} }
    var E, S = {},
        A = {
            enabled: !0,
            debug: !1,
            autoplay: !1,
            loop: !1,
            seekTime: 10,
            volume: 5,
            duration: null,
            displayDuration: !0,
            iconPrefix: "icon",
            click: !0,
            tooltips: { controls: !1, seek: !0 },
            selectors: { container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { seek: '[data-plyr="seek"]', play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', forward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', volume: '[data-plyr="volume"]', captions: '[data-plyr="captions"]', fullscreen: '[data-plyr="fullscreen"]' }, progress: { container: ".plyr__progress", buffer: ".plyr__progress--buffer", played: ".plyr__progress--played" }, captions: ".plyr__captions", currentTime: ".plyr__time--current", duration: ".plyr__time--duration" },
            classes: { videoWrapper: "plyr__video-wrapper", embedWrapper: "plyr__video-embed", type: "plyr--{0}", stopped: "plyr--stopped", playing: "plyr--playing", muted: "plyr--muted", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", hidden: "plyr__sr-only", isIos: "plyr--is-ios", isTouch: "plyr--is-touch", captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", active: "plyr--fullscreen-active", hideControls: "plyr--fullscreen--hide-controls" }, tabFocus: "tab-focus" },
            captions: { defaultActive: !1 },
            fullscreen: { enabled: !0, fallback: !0, hideControls: !0, allowAudio: !1 },
            storage: { enabled: !0, key: "plyr" },
            controls: ["restart", "rewind", "play", "fast-forward", "current-time", "duration", "mute", "volume", "captions", "fullscreen"],
            i18n: { restart: "Restart", rewind: "Rewind {seektime} secs", play: "Play", pause: "Pause", forward: "Forward {seektime} secs", played: "played", buffered: "buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", toggleMute: "Toggle Mute", toggleCaptions: "Toggle Captions", toggleFullscreen: "Toggle Fullscreen", frameTitle: "Player for {title}" },
            types: { embed: ["youtube", "vimeo"], html5: ["video", "audio"] },
            urls: { vimeo: { api: "https://cdn.plyr.io/froogaloop/1.0.0/plyr.froogaloop.js" }, youtube: { api: "https://www.youtube.com/iframe_api" } },
            listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, forward: null, mute: null, volume: null, captions: null, fullscreen: null },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "emptied"]
        };
    return S.supported = function(e) {
        var r, s, a = n(),
            o = "IE" === a.name && a.version <= 9,
            i = /iPhone|iPod/i.test(navigator.userAgent),
            l = !!t.createElement("audio").canPlayType,
            u = !!t.createElement("video").canPlayType;
        switch (e) {
            case "video":
                r = u, s = r && !o && !i;
                break;
            case "audio":
                r = l, s = r && !o;
                break;
            case "vimeo":
            case "youtube":
                r = !0, s = !o && !i;
                break;
            default:
                r = l && u, s = r && !o }
        return { basic: r, full: s } }, S.setup = function(e, n) {
        var r = [];
        if ("string" == typeof e ? e = t.querySelectorAll(e) : e instanceof HTMLElement ? e = [e] : e instanceof NodeList || "string" == typeof e || ("undefined" == typeof n && "object" == typeof e && (n = e), e = t.querySelectorAll(A.selectors.container)), !S.supported().basic || !e.length) return !1;
        for (var s = e.length - 1; s >= 0; s--) {
            var a = e[s];
            if ("undefined" == typeof a.plyr) {
                var o = T(A, n, JSON.parse(a.getAttribute("data-plyr")));
                if (!o.enabled) return;
                var i = new C(a, o);
                a.plyr = Object.keys(i).length ? i : !1, k(a, "setup", { plyr: a.plyr }) }
            r.push(a.plyr) }
        return r }, S
}),
function() {
    function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n }
    return "function" == typeof window.CustomEvent ? !1 : (e.prototype = window.Event.prototype, void(window.CustomEvent = e)) }();


//run the player
plyr.setup('.plyr', {
  fullscreen: true,
  fallback: true,
  tooltips: {
      controls: true,
      seek: true
  },
  displayDuration: true,
});
