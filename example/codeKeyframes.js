/*!
 * wavesurfer.js 2.0.6 (Fri Jun 15 2018 10:57:58 GMT+0200 (CEST))
 * https://github.com/katspaugh/wavesurfer.js
 * @license BSD-3-Clause
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("WaveSurfer",[],t):"object"==typeof exports?exports.WaveSurfer=t():e.WaveSurfer=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=17)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(16);Object.defineProperty(t,"ajax",{enumerable:!0,get:function(){return p(n).default}});var i=r(15);Object.defineProperty(t,"getId",{enumerable:!0,get:function(){return p(i).default}});var a=r(14);Object.defineProperty(t,"max",{enumerable:!0,get:function(){return p(a).default}});var s=r(13);Object.defineProperty(t,"min",{enumerable:!0,get:function(){return p(s).default}});var o=r(3);Object.defineProperty(t,"Observer",{enumerable:!0,get:function(){return p(o).default}});var u=r(12);Object.defineProperty(t,"extend",{enumerable:!0,get:function(){return p(u).default}});var l=r(11);Object.defineProperty(t,"style",{enumerable:!0,get:function(){return p(l).default}});var c=r(2);Object.defineProperty(t,"requestAnimationFrame",{enumerable:!0,get:function(){return p(c).default}});var h=r(10);Object.defineProperty(t,"frame",{enumerable:!0,get:function(){return p(h).default}});var f=r(9);Object.defineProperty(t,"debounce",{enumerable:!0,get:function(){return p(f).default}});var d=r(8);function p(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"preventClick",{enumerable:!0,get:function(){return p(d).default}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0));function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s="playing",o="paused",u="finished",l=function(e){function t(e){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.audioContext=null,i.offlineAudioContext=null,i.stateBehaviors=(a(r={},s,{init:function(){this.addOnAudioProcess()},getPlayedPercents:function(){var e=this.getDuration();return this.getCurrentTime()/e||0},getCurrentTime:function(){return this.startPosition+this.getPlayedTime()}}),a(r,o,{init:function(){this.removeOnAudioProcess()},getPlayedPercents:function(){var e=this.getDuration();return this.getCurrentTime()/e||0},getCurrentTime:function(){return this.startPosition}}),a(r,u,{init:function(){this.removeOnAudioProcess(),this.fireEvent("finish")},getPlayedPercents:function(){return 1},getCurrentTime:function(){return this.getDuration()}}),r),i.params=e,i.ac=e.audioContext||i.getAudioContext(),i.lastPlay=i.ac.currentTime,i.startPosition=0,i.scheduledPause=null,i.states=(a(n={},s,Object.create(i.stateBehaviors[s])),a(n,o,Object.create(i.stateBehaviors[o])),a(n,u,Object.create(i.stateBehaviors[u])),n),i.analyser=null,i.buffer=null,i.filters=[],i.gainNode=null,i.mergedPeaks=null,i.offlineAc=null,i.peaks=null,i.playbackRate=1,i.analyser=null,i.scriptNode=null,i.source=null,i.splitPeaks=[],i.state=null,i.explicitDuration=null,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Observer),n(t,[{key:"supportsWebAudio",value:function(){return!(!window.AudioContext&&!window.webkitAudioContext)}},{key:"getAudioContext",value:function(){return window.WaveSurferAudioContext||(window.WaveSurferAudioContext=new(window.AudioContext||window.webkitAudioContext)),window.WaveSurferAudioContext}},{key:"getOfflineAudioContext",value:function(e){return window.WaveSurferOfflineAudioContext||(window.WaveSurferOfflineAudioContext=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,2,e)),window.WaveSurferOfflineAudioContext}}]),n(t,[{key:"init",value:function(){this.createVolumeNode(),this.createScriptNode(),this.createAnalyserNode(),this.setState(o),this.setPlaybackRate(this.params.audioRate),this.setLength(0)}},{key:"disconnectFilters",value:function(){this.filters&&(this.filters.forEach(function(e){e&&e.disconnect()}),this.filters=null,this.analyser.connect(this.gainNode))}},{key:"setState",value:function(e){this.state!==this.states[e]&&(this.state=this.states[e],this.state.init.call(this))}},{key:"setFilter",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this.setFilters(t)}},{key:"setFilters",value:function(e){this.disconnectFilters(),e&&e.length&&(this.filters=e,this.analyser.disconnect(),e.reduce(function(e,t){return e.connect(t),t},this.analyser).connect(this.gainNode))}},{key:"createScriptNode",value:function(){this.params.audioScriptProcessor?this.scriptNode=this.params.audioScriptProcessor:this.ac.createScriptProcessor?this.scriptNode=this.ac.createScriptProcessor(t.scriptBufferSize):this.scriptNode=this.ac.createJavaScriptNode(t.scriptBufferSize),this.scriptNode.connect(this.ac.destination)}},{key:"addOnAudioProcess",value:function(){var e=this;this.scriptNode.onaudioprocess=function(){var t=e.getCurrentTime();t>=e.getDuration()?(e.setState(u),e.fireEvent("pause")):t>=e.scheduledPause?e.pause():e.state===e.states[s]&&e.fireEvent("audioprocess",t)}}},{key:"removeOnAudioProcess",value:function(){this.scriptNode.onaudioprocess=null}},{key:"createAnalyserNode",value:function(){this.analyser=this.ac.createAnalyser(),this.analyser.connect(this.gainNode)}},{key:"createVolumeNode",value:function(){this.ac.createGain?this.gainNode=this.ac.createGain():this.gainNode=this.ac.createGainNode(),this.gainNode.connect(this.ac.destination)}},{key:"setSinkId",value:function(e){if(e){var t=new window.Audio;if(!t.setSinkId)return Promise.reject(new Error("setSinkId is not supported in your browser"));t.autoplay=!0;var r=this.ac.createMediaStreamDestination();return this.gainNode.disconnect(),this.gainNode.connect(r),t.src=URL.createObjectURL(r.stream),t.setSinkId(e)}return Promise.reject(new Error("Invalid deviceId: "+e))}},{key:"setVolume",value:function(e){this.gainNode.gain.setValueAtTime(e,this.ac.currentTime)}},{key:"getVolume",value:function(){return this.gainNode.gain.value}},{key:"decodeArrayBuffer",value:function(e,t,r){this.offlineAc||(this.offlineAc=this.getOfflineAudioContext(this.ac?this.ac.sampleRate:44100)),this.offlineAc.decodeAudioData(e,function(e){return t(e)},r)}},{key:"setPeaks",value:function(e,t){this.explicitDuration=t,this.peaks=e}},{key:"setLength",value:function(e){if(!this.mergedPeaks||e!=2*this.mergedPeaks.length-1+2){this.splitPeaks=[],this.mergedPeaks=[];var t=this.buffer?this.buffer.numberOfChannels:1,r=void 0;for(r=0;r<t;r++)this.splitPeaks[r]=[],this.splitPeaks[r][2*(e-1)]=0,this.splitPeaks[r][2*(e-1)+1]=0;this.mergedPeaks[2*(e-1)]=0,this.mergedPeaks[2*(e-1)+1]=0}}},{key:"getPeaks",value:function(e,t,r){if(this.peaks)return this.peaks;if(t=t||0,r=r||e-1,this.setLength(e),!this.buffer.length){var n=this.createBuffer(1,4096,this.sampleRate);this.buffer=n.buffer}var i=this.buffer.length/e,a=~~(i/10)||1,s=this.buffer.numberOfChannels,o=void 0;for(o=0;o<s;o++){var u=this.splitPeaks[o],l=this.buffer.getChannelData(o),c=void 0;for(c=t;c<=r;c++){var h=~~(c*i),f=~~(h+i),d=0,p=0,v=void 0;for(v=h;v<f;v+=a){var y=l[v];y>p&&(p=y),y<d&&(d=y)}u[2*c]=p,u[2*c+1]=d,(0==o||p>this.mergedPeaks[2*c])&&(this.mergedPeaks[2*c]=p),(0==o||d<this.mergedPeaks[2*c+1])&&(this.mergedPeaks[2*c+1]=d)}}return this.params.splitChannels?this.splitPeaks:this.mergedPeaks}},{key:"getPlayedPercents",value:function(){return this.state.getPlayedPercents.call(this)}},{key:"disconnectSource",value:function(){this.source&&this.source.disconnect()}},{key:"destroy",value:function(){this.isPaused()||this.pause(),this.unAll(),this.buffer=null,this.disconnectFilters(),this.disconnectSource(),this.gainNode.disconnect(),this.scriptNode.disconnect(),this.analyser.disconnect(),this.params.closeAudioContext&&("function"==typeof this.ac.close&&"closed"!=this.ac.state&&this.ac.close(),this.ac=null,this.params.audioContext?this.params.audioContext=null:window.WaveSurferAudioContext=null,window.WaveSurferOfflineAudioContext=null)}},{key:"load",value:function(e){this.startPosition=0,this.lastPlay=this.ac.currentTime,this.buffer=e,this.createSource()}},{key:"createSource",value:function(){this.disconnectSource(),this.source=this.ac.createBufferSource(),this.source.start=this.source.start||this.source.noteGrainOn,this.source.stop=this.source.stop||this.source.noteOff,this.source.playbackRate.setValueAtTime(this.playbackRate,this.ac.currentTime),this.source.buffer=this.buffer,this.source.connect(this.analyser)}},{key:"isPaused",value:function(){return this.state!==this.states[s]}},{key:"getDuration",value:function(){return this.buffer?this.buffer.duration:this.explicitDuration?this.explicitDuration:0}},{key:"seekTo",value:function(e,t){if(this.buffer)return this.scheduledPause=null,null==e&&(e=this.getCurrentTime())>=this.getDuration()&&(e=0),null==t&&(t=this.getDuration()),this.startPosition=e,this.lastPlay=this.ac.currentTime,this.state===this.states[u]&&this.setState(o),{start:e,end:t}}},{key:"getPlayedTime",value:function(){return(this.ac.currentTime-this.lastPlay)*this.playbackRate}},{key:"play",value:function(e,t){if(this.buffer){this.createSource();var r=this.seekTo(e,t);e=r.start,t=r.end,this.scheduledPause=t,this.source.start(0,e,t-e),"suspended"==this.ac.state&&this.ac.resume&&this.ac.resume(),this.setState(s),this.fireEvent("play")}}},{key:"pause",value:function(){this.scheduledPause=null,this.startPosition+=this.getPlayedTime(),this.source&&this.source.stop(0),this.setState(o),this.fireEvent("pause")}},{key:"getCurrentTime",value:function(){return this.state.getCurrentTime.call(this)}},{key:"getPlaybackRate",value:function(){return this.playbackRate}},{key:"setPlaybackRate",value:function(e){e=e||1,this.isPaused()?this.playbackRate=e:(this.pause(),this.playbackRate=e,this.play())}}]),t}();l.scriptBufferSize=256,t.default=l,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){return setTimeout(e,1e3/60)}).bind(window),e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handlers=null}return n(e,[{key:"on",value:function(e,t){var r=this;this.handlers||(this.handlers={});var n=this.handlers[e];return n||(n=this.handlers[e]=[]),n.push(t),{name:e,callback:t,un:function(e,t){return r.un(e,t)}}}},{key:"un",value:function(e,t){if(this.handlers){var r=this.handlers[e],n=void 0;if(r)if(t)for(n=r.length-1;n>=0;n--)r[n]==t&&r.splice(n,1);else r.length=0}}},{key:"unAll",value:function(){this.handlers=null}},{key:"once",value:function(e,t){var r=this;return this.on(e,function n(){for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];t.apply(r,a),setTimeout(function(){r.un(e,n)},0)})}},{key:"fireEvent",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];if(this.handlers){var i=this.handlers[e];i&&i.forEach(function(e){e.apply(void 0,r)})}}}]),e}();t.default=i,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.clearPeakCache()}return n(e,[{key:"clearPeakCache",value:function(){this.peakCacheRanges=[],this.peakCacheLength=-1}},{key:"addRangeToPeakCache",value:function(e,t,r){e!=this.peakCacheLength&&(this.clearPeakCache(),this.peakCacheLength=e);for(var n=[],i=0;i<this.peakCacheRanges.length&&this.peakCacheRanges[i]<t;)i++;for(i%2==0&&n.push(t);i<this.peakCacheRanges.length&&this.peakCacheRanges[i]<=r;)n.push(this.peakCacheRanges[i]),i++;i%2==0&&n.push(r),n=n.filter(function(e,t,r){return 0==t?e!=r[t+1]:t==r.length-1?e!=r[t-1]:e!=r[t-1]&&e!=r[t+1]}),this.peakCacheRanges=this.peakCacheRanges.concat(n),this.peakCacheRanges=this.peakCacheRanges.sort(function(e,t){return e-t}).filter(function(e,t,r){return 0==t?e!=r[t+1]:t==r.length-1?e!=r[t-1]:e!=r[t-1]&&e!=r[t+1]});var a=[];for(i=0;i<n.length;i+=2)a.push([n[i],n[i+1]]);return a}},{key:"getCacheRanges",value:function(){var e=[],t=void 0;for(t=0;t<this.peakCacheRanges.length;t+=2)e.push([this.peakCacheRanges[t],this.peakCacheRanges[t+1]]);return e}}]),e}();t.default=i,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),s=(n=a)&&n.__esModule?n:{default:n};!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e}(r(0));var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.params=e,r.media={currentTime:0,duration:0,paused:!0,playbackRate:1,play:function(){},pause:function(){},volume:0},r.mediaType=e.mediaType.toLowerCase(),r.elementPosition=e.elementPosition,r.peaks=null,r.playbackRate=1,r.volume=1,r.buffer=null,r.onPlayEnd=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),i(t,[{key:"init",value:function(){this.setPlaybackRate(this.params.audioRate),this.createTimer()}},{key:"createTimer",value:function(){var e=this;this.on("play",function t(){e.isPaused()||(e.fireEvent("audioprocess",e.getCurrentTime()),(window.requestAnimationFrame||window.webkitRequestAnimationFrame)(t))}),this.on("pause",function(){e.fireEvent("audioprocess",e.getCurrentTime())})}},{key:"load",value:function(e,t,r,n){var i=document.createElement(this.mediaType);i.controls=this.params.mediaControls,i.autoplay=this.params.autoplay||!1,i.preload=null==n?"auto":n,i.src=e,i.style.width="100%";var a=t.querySelector(this.mediaType);a&&t.removeChild(a),t.appendChild(i),this._load(i,r)}},{key:"loadElt",value:function(e,t){e.controls=this.params.mediaControls,e.autoplay=this.params.autoplay||!1,this._load(e,t)}},{key:"_load",value:function(e,t){var r=this;"function"==typeof e.load&&e.load(),e.addEventListener("error",function(){r.fireEvent("error","Error loading media element")}),e.addEventListener("canplay",function(){r.fireEvent("canplay")}),e.addEventListener("ended",function(){r.fireEvent("finish")}),e.addEventListener("play",function(){r.fireEvent("play")}),e.addEventListener("pause",function(){r.fireEvent("pause")}),this.media=e,this.peaks=t,this.onPlayEnd=null,this.buffer=null,this.setPlaybackRate(this.playbackRate),this.setVolume(this.volume)}},{key:"isPaused",value:function(){return!this.media||this.media.paused}},{key:"getDuration",value:function(){if(this.explicitDuration)return this.explicitDuration;var e=(this.buffer||this.media).duration;return e>=1/0&&(e=this.media.seekable.end(0)),e}},{key:"getCurrentTime",value:function(){return this.media&&this.media.currentTime}},{key:"getPlayedPercents",value:function(){return this.getCurrentTime()/this.getDuration()||0}},{key:"getPlaybackRate",value:function(){return this.playbackRate||this.media.playbackRate}},{key:"setPlaybackRate",value:function(e){this.playbackRate=e||1,this.media.playbackRate=this.playbackRate}},{key:"seekTo",value:function(e){null!=e&&(this.media.currentTime=e),this.clearPlayEnd()}},{key:"play",value:function(e,t){this.seekTo(e);var r=this.media.play();return t&&this.setPlayEnd(t),r}},{key:"pause",value:function(){var e=void 0;return this.media&&(e=this.media.pause()),this.clearPlayEnd(),e}},{key:"setPlayEnd",value:function(e){var t=this;this._onPlayEnd=function(r){r>=e&&(t.pause(),t.seekTo(e))},this.on("audioprocess",this._onPlayEnd)}},{key:"clearPlayEnd",value:function(){this._onPlayEnd&&(this.un("audioprocess",this._onPlayEnd),this._onPlayEnd=null)}},{key:"getPeaks",value:function(e,r,n){return this.buffer?function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getPeaks",this).call(this,e,r,n):this.peaks||[]}},{key:"setSinkId",value:function(e){return e?this.media.setSinkId?this.media.setSinkId(e):Promise.reject(new Error("setSinkId is not supported in your browser")):Promise.reject(new Error("Invalid deviceId: "+e))}},{key:"getVolume",value:function(){return this.volume||this.media.volume}},{key:"setVolume",value:function(e){this.volume=e,this.media.volume=this.volume}},{key:"destroy",value:function(){this.pause(),this.unAll(),this.params.removeMediaElementOnDestroy&&this.media&&this.media.parentNode&&this.media.parentNode.removeChild(this.media),this.media=null}}]),t}();t.default=o,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0));var a=function(e){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.container=e,n.params=r,n.width=0,n.height=r.height*n.params.pixelRatio,n.lastPos=0,n.wrapper=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Observer),n(t,[{key:"style",value:function(e,t){return i.style(e,t)}},{key:"createWrapper",value:function(){this.wrapper=this.container.appendChild(document.createElement("wave")),this.style(this.wrapper,{display:"block",position:"relative",userSelect:"none",webkitUserSelect:"none",height:this.params.height+"px"}),(this.params.fillParent||this.params.scrollParent)&&this.style(this.wrapper,{width:"100%",overflowX:this.params.hideScrollbar?"hidden":"auto",overflowY:"hidden"}),this.setupWrapperEvents()}},{key:"handleEvent",value:function(e,t){!t&&e.preventDefault();var r=e.targetTouches?e.targetTouches[0].clientX:e.clientX,n=this.wrapper.getBoundingClientRect(),i=this.width,a=this.getWidth(),s=void 0;return!this.params.fillParent&&i<a?(s=(r-n.left)*(this.params.pixelRatio/i)||0)>1&&(s=1):s=(r-n.left+this.wrapper.scrollLeft)/this.wrapper.scrollWidth||0,s}},{key:"setupWrapperEvents",value:function(){var e=this;this.wrapper.addEventListener("click",function(t){var r=e.wrapper.offsetHeight-e.wrapper.clientHeight;if(0!=r){var n=e.wrapper.getBoundingClientRect();if(t.clientY>=n.bottom-r)return}e.params.interact&&e.fireEvent("click",t,e.handleEvent(t))}),this.wrapper.addEventListener("scroll",function(t){return e.fireEvent("scroll",t)})}},{key:"drawPeaks",value:function(e,t,r,n){this.setWidth(t)||this.clearWave(),this.params.barWidth?this.drawBars(e,0,r,n):this.drawWave(e,0,r,n)}},{key:"resetScroll",value:function(){null!==this.wrapper&&(this.wrapper.scrollLeft=0)}},{key:"recenter",value:function(e){var t=this.wrapper.scrollWidth*e;this.recenterOnPosition(t,!0)}},{key:"recenterOnPosition",value:function(e,t){var r=this.wrapper.scrollLeft,n=~~(this.wrapper.clientWidth/2),i=this.wrapper.scrollWidth-this.wrapper.clientWidth,a=e-n,s=a-r;if(0!=i){if(!t&&-n<=s&&s<n){a=r+(s=Math.max(-5,Math.min(5,s)))}(a=Math.max(0,Math.min(i,a)))!=r&&(this.wrapper.scrollLeft=a)}}},{key:"getScrollX",value:function(){var e=this.params.pixelRatio,t=Math.round(this.wrapper.scrollLeft*e);if(this.params.scrollParent){var r=~~(this.wrapper.scrollWidth*e-this.getWidth());t=Math.min(r,Math.max(0,t))}return t}},{key:"getWidth",value:function(){return Math.round(this.container.clientWidth*this.params.pixelRatio)}},{key:"setWidth",value:function(e){return this.width!=e&&(this.width=e,this.params.fillParent||this.params.scrollParent?this.style(this.wrapper,{width:""}):this.style(this.wrapper,{width:~~(this.width/this.params.pixelRatio)+"px"}),this.updateSize(),!0)}},{key:"setHeight",value:function(e){return e!=this.height&&(this.height=e,this.style(this.wrapper,{height:~~(this.height/this.params.pixelRatio)+"px"}),this.updateSize(),!0)}},{key:"progress",value:function(e){var t=1/this.params.pixelRatio,r=Math.round(e*this.width)*t;if(r<this.lastPos||r-this.lastPos>=t){if(this.lastPos=r,this.params.scrollParent&&this.params.autoCenter){var n=~~(this.wrapper.scrollWidth*e);this.recenterOnPosition(n)}this.updateProgress(r)}}},{key:"destroy",value:function(){this.unAll(),this.wrapper&&(this.wrapper.parentNode==this.container&&this.container.removeChild(this.wrapper),this.wrapper=null)}},{key:"updateCursor",value:function(){}},{key:"updateSize",value:function(){}},{key:"drawBars",value:function(e,t,r,n){}},{key:"drawWave",value:function(e,t,r,n){}},{key:"clearWave",value:function(){}},{key:"updateProgress",value:function(e){}}]),t}();t.default=a,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(6),s=(n=a)&&n.__esModule?n:{default:n},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0));var u=function(e){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return n.maxCanvasWidth=r.maxCanvasWidth,n.maxCanvasElementWidth=Math.round(r.maxCanvasWidth/r.pixelRatio),n.hasProgressCanvas=r.waveColor!=r.progressColor,n.halfPixel=.5/r.pixelRatio,n.canvases=[],n.progressWave=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),i(t,[{key:"init",value:function(){this.createWrapper(),this.createElements()}},{key:"createElements",value:function(){this.progressWave=this.wrapper.appendChild(this.style(document.createElement("wave"),{position:"absolute",zIndex:3,left:0,top:0,bottom:0,overflow:"hidden",width:"0",display:"none",boxSizing:"border-box",borderRightStyle:"solid",pointerEvents:"none"})),this.addCanvas(),this.updateCursor()}},{key:"updateCursor",value:function(){this.style(this.progressWave,{borderRightWidth:this.params.cursorWidth+"px",borderRightColor:this.params.cursorColor})}},{key:"updateSize",value:function(){for(var e=this,t=Math.round(this.width/this.params.pixelRatio),r=Math.ceil(t/this.maxCanvasElementWidth);this.canvases.length<r;)this.addCanvas();for(;this.canvases.length>r;)this.removeCanvas();this.canvases.forEach(function(t,r){var n=e.maxCanvasWidth+2*Math.ceil(e.params.pixelRatio/2);r==e.canvases.length-1&&(n=e.width-e.maxCanvasWidth*(e.canvases.length-1)),e.updateDimensions(t,n,e.height),e.clearWaveForEntry(t)})}},{key:"addCanvas",value:function(){var e={},t=this.maxCanvasElementWidth*this.canvases.length;e.wave=this.wrapper.appendChild(this.style(document.createElement("canvas"),{position:"absolute",zIndex:2,left:t+"px",top:0,bottom:0,height:"100%",pointerEvents:"none"})),e.waveCtx=e.wave.getContext("2d"),this.hasProgressCanvas&&(e.progress=this.progressWave.appendChild(this.style(document.createElement("canvas"),{position:"absolute",left:t+"px",top:0,bottom:0,height:"100%"})),e.progressCtx=e.progress.getContext("2d")),this.canvases.push(e)}},{key:"removeCanvas",value:function(){var e=this.canvases.pop();e.wave.parentElement.removeChild(e.wave),this.hasProgressCanvas&&e.progress.parentElement.removeChild(e.progress)}},{key:"updateDimensions",value:function(e,t,r){var n=Math.round(t/this.params.pixelRatio),i=Math.round(this.width/this.params.pixelRatio);e.start=e.waveCtx.canvas.offsetLeft/i||0,e.end=e.start+n/i,e.waveCtx.canvas.width=t,e.waveCtx.canvas.height=r,this.style(e.waveCtx.canvas,{width:n+"px"}),this.style(this.progressWave,{display:"block"}),this.hasProgressCanvas&&(e.progressCtx.canvas.width=t,e.progressCtx.canvas.height=r,this.style(e.progressCtx.canvas,{width:n+"px"}))}},{key:"clearWave",value:function(){var e=this;this.canvases.forEach(function(t){return e.clearWaveForEntry(t)})}},{key:"clearWaveForEntry",value:function(e){e.waveCtx.clearRect(0,0,e.waveCtx.canvas.width,e.waveCtx.canvas.height),this.hasProgressCanvas&&e.progressCtx.clearRect(0,0,e.progressCtx.canvas.width,e.progressCtx.canvas.height)}},{key:"drawBars",value:function(e,t,r,n){var i=this;return this.prepareDraw(e,t,r,n,function(e){var t=e.absmax,a=e.hasMinVals,s=(e.height,e.offsetY),o=e.halfH,u=e.peaks;if(void 0!==r){var l=a?2:1,c=u.length/l,h=i.params.barWidth*i.params.pixelRatio,f=h+(null===i.params.barGap?Math.max(i.params.pixelRatio,~~(h/2)):Math.max(i.params.pixelRatio,i.params.barGap*i.params.pixelRatio)),d=c/i.width,p=n,v=void 0;for(v=r;v<p;v+=f){var y=u[Math.floor(v*d*l)]||0,m=Math.round(y/t*o);i.fillRect(v+i.halfPixel,o-m+s,h+i.halfPixel,2*m)}}})}},{key:"drawWave",value:function(e,t,r,n){var i=this;return this.prepareDraw(e,t,r,n,function(e){var t=e.absmax,a=e.hasMinVals,s=(e.height,e.offsetY),o=e.halfH,u=e.peaks;if(!a){var l=[],c=u.length,h=void 0;for(h=0;h<c;h++)l[2*h]=u[h],l[2*h+1]=-u[h];u=l}void 0!==r&&i.drawLine(u,t,o,s,r,n),i.fillRect(0,o+s-i.halfPixel,i.width,i.halfPixel)})}},{key:"drawLine",value:function(e,t,r,n,i,a){var s=this;this.canvases.forEach(function(o){s.setFillStyles(o),s.drawLineToContext(o,o.waveCtx,e,t,r,n,i,a),s.drawLineToContext(o,o.progressCtx,e,t,r,n,i,a)})}},{key:"drawLineToContext",value:function(e,t,r,n,i,a,s,o){if(t){var u=r.length/2,l=this.params.fillParent&&this.width!=u?this.width/u:1,c=Math.round(u*e.start),h=Math.round(u*e.end)+1;if(!(c>o||h<s)){var f=Math.min(c,s),d=Math.max(h,o),p=void 0,v=void 0;for(t.beginPath(),t.moveTo((f-c)*l+this.halfPixel,i+a),p=f;p<d;p++){var y=r[2*p]||0,m=Math.round(y/n*i);t.lineTo((p-c)*l+this.halfPixel,i-m+a)}for(v=d-1;v>=f;v--){var k=r[2*v+1]||0,g=Math.round(k/n*i);t.lineTo((v-c)*l+this.halfPixel,i-g+a)}t.closePath(),t.fill()}}}},{key:"fillRect",value:function(e,t,r,n){var i=Math.floor(e/this.maxCanvasWidth),a=Math.min(Math.ceil((e+r)/this.maxCanvasWidth)+1,this.canvases.length),s=void 0;for(s=i;s<a;s++){var o=this.canvases[s],u=s*this.maxCanvasWidth,l={x1:Math.max(e,s*this.maxCanvasWidth),y1:t,x2:Math.min(e+r,s*this.maxCanvasWidth+o.waveCtx.canvas.width),y2:t+n};l.x1<l.x2&&(this.setFillStyles(o),this.fillRectToContext(o.waveCtx,l.x1-u,l.y1,l.x2-l.x1,l.y2-l.y1),this.fillRectToContext(o.progressCtx,l.x1-u,l.y1,l.x2-l.x1,l.y2-l.y1))}}},{key:"prepareDraw",value:function(e,t,r,n,i){var a=this;return o.frame(function(){if(e[0]instanceof Array){var s=e;if(a.params.splitChannels)return a.setHeight(s.length*a.params.height*a.params.pixelRatio),s.forEach(function(e,t){return a.prepareDraw(e,t,r,n,i)});e=s[0]}var u=1/a.params.barHeight;if(a.params.normalize){var l=o.max(e),c=o.min(e);u=-c>l?-c:l}var h=[].some.call(e,function(e){return e<0}),f=a.params.height*a.params.pixelRatio;return i({absmax:u,hasMinVals:h,height:f,offsetY:f*t||0,halfH:f/2,peaks:e})})()}},{key:"fillRectToContext",value:function(e,t,r,n,i){e&&e.fillRect(t,r,n,i)}},{key:"setFillStyles",value:function(e){e.waveCtx.fillStyle=this.params.waveColor,this.hasProgressCanvas&&(e.progressCtx.fillStyle=this.params.progressColor)}},{key:"getImage",value:function(e,t){var r=this.canvases.map(function(r){return r.wave.toDataURL(e,t)});return r.length>1?r:r[0]}},{key:"updateProgress",value:function(e){this.style(this.progressWave,{width:e+"px"})}}]),t}();t.default=u,e.exports=t.default},function(e,t,r){"use strict";function n(e){e.stopPropagation(),document.body.removeEventListener("click",n,!0)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){document.body.addEventListener("click",n,!0)},e.exports=t.default},function(e,t){e.exports=function(e,t,r){var n,i,a,s,o;function u(){var l=Date.now()-s;l<t&&l>=0?n=setTimeout(u,t-l):(n=null,r||(o=e.apply(a,i),a=i=null))}null==t&&(t=100);var l=function(){a=this,i=arguments,s=Date.now();var l=r&&!n;return n||(n=setTimeout(u,t)),l&&(o=e.apply(a,i),a=i=null),o};return l.clear=function(){n&&(clearTimeout(n),n=null)},l.flush=function(){n&&(o=e.apply(a,i),a=i=null,clearTimeout(n),n=null)},l}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return(0,a.default)(function(){return e.apply(void 0,r)})}};var n,i=r(2),a=(n=i)&&n.__esModule?n:{default:n};e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return Object.keys(t).forEach(function(r){e.style[r]!==t[r]&&(e.style[r]=t[r])}),e},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(function(t){Object.keys(t).forEach(function(r){e[r]=t[r]})}),e},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=Number(1/0);return Object.keys(e).forEach(function(r){e[r]<t&&(t=e[r])}),t},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=-1/0;return Object.keys(e).forEach(function(r){e[r]>t&&(t=e[r])}),t},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"wavesurfer_"+Math.random().toString(32).substring(2)},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new a.default,r=new XMLHttpRequest,n=!1;r.open(e.method||"GET",e.url,!0),r.responseType=e.responseType||"json",e.xhr&&(e.xhr.requestHeaders&&e.xhr.requestHeaders.forEach(function(e){r.setRequestHeader(e.key,e.value)}),e.xhr.withCredentials&&(r.withCredentials=!0));return r.addEventListener("progress",function(e){t.fireEvent("progress",e),e.lengthComputable&&e.loaded==e.total&&(n=!0)}),r.addEventListener("load",function(e){n||t.fireEvent("progress",e),t.fireEvent("load",e),200==r.status||206==r.status?t.fireEvent("success",r.response,e):t.fireEvent("error",e)}),r.addEventListener("error",function(e){return t.fireEvent("error",e)}),r.send(),t.xhr=r,t};var n,i=r(3),a=(n=i)&&n.__esModule?n:{default:n};e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),a=l(r(7)),s=l(r(1)),o=l(r(5)),u=l(r(4));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){function e(t,r){h(this,e)}n(e,[{key:"create",value:function(e){}}]),n(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}])}();var f=function(e){function t(e){h(this,t);var r=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));if(r.defaultParams={audioContext:null,audioRate:1,autoCenter:!0,backend:"WebAudio",barHeight:1,barGap:null,container:null,cursorColor:"#333",cursorWidth:1,dragSelection:!0,fillParent:!0,forceDecode:!1,height:128,hideScrollbar:!1,interact:!0,loopSelection:!0,maxCanvasWidth:4e3,mediaContainer:null,mediaControls:!1,mediaType:"audio",minPxPerSec:20,normalize:!1,partialRender:!1,pixelRatio:window.devicePixelRatio||screen.deviceXDPI/screen.logicalXDPI,plugins:[],progressColor:"#555",removeMediaElementOnDestroy:!0,renderer:a.default,responsive:!1,scrollParent:!1,skipLength:2,splitChannels:!1,waveColor:"#999",xhr:{}},r.backends={MediaElement:o.default,WebAudio:s.default},r.util=i,r.params=i.extend({},r.defaultParams,e),r.container="string"==typeof e.container?document.querySelector(r.params.container):r.params.container,!r.container)throw new Error("Container element not found");if(null==r.params.mediaContainer?r.mediaContainer=r.container:"string"==typeof r.params.mediaContainer?r.mediaContainer=document.querySelector(r.params.mediaContainer):r.mediaContainer=r.params.mediaContainer,!r.mediaContainer)throw new Error("Media Container element not found");if(r.params.maxCanvasWidth<=1)throw new Error("maxCanvasWidth must be greater than 1");if(r.params.maxCanvasWidth%2==1)throw new Error("maxCanvasWidth must be an even number");if(r.savedVolume=0,r.isMuted=!1,r.tmpEvents=[],r.currentAjax=null,r.arraybuffer=null,r.drawer=null,r.backend=null,r.peakCache=null,"function"!=typeof r.params.renderer)throw new Error("Renderer parameter is invalid");r.Drawer=r.params.renderer,r.Backend=r.backends[r.params.backend],r.initialisedPluginList={},r.isDestroyed=!1,r.isReady=!1;var n=0;return r._onResize=i.debounce(function(){n==r.drawer.wrapper.clientWidth||r.params.scrollParent||(n=r.drawer.wrapper.clientWidth,r.drawer.fireEvent("redraw"))},"number"==typeof r.params.responsive?r.params.responsive:100),c(r,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Observer),n(t,null,[{key:"create",value:function(e){return new t(e).init()}}]),n(t,[{key:"init",value:function(){return this.registerPlugins(this.params.plugins),this.createDrawer(),this.createBackend(),this.createPeakCache(),this}},{key:"registerPlugins",value:function(e){var t=this;return e.forEach(function(e){return t.addPlugin(e)}),e.forEach(function(e){e.deferInit||t.initPlugin(e.name)}),this.fireEvent("plugins-registered",e),this}},{key:"addPlugin",value:function(e){var t=this;if(!e.name)throw new Error("Plugin does not have a name!");if(!e.instance)throw new Error("Plugin "+e.name+" does not have an instance property!");e.staticProps&&Object.keys(e.staticProps).forEach(function(r){t[r]=e.staticProps[r]});var r=e.instance;return Object.getOwnPropertyNames(i.Observer.prototype).forEach(function(e){r.prototype[e]=i.Observer.prototype[e]}),this[e.name]=new r(e.params||{},this),this.fireEvent("plugin-added",e.name),this}},{key:"initPlugin",value:function(e){if(!this[e])throw new Error("Plugin "+e+" has not been added yet!");return this.initialisedPluginList[e]&&this.destroyPlugin(e),this[e].init(),this.initialisedPluginList[e]=!0,this.fireEvent("plugin-initialised",e),this}},{key:"destroyPlugin",value:function(e){if(!this[e])throw new Error("Plugin "+e+" has not been added yet and cannot be destroyed!");if(!this.initialisedPluginList[e])throw new Error("Plugin "+e+" is not active and cannot be destroyed!");if("function"!=typeof this[e].destroy)throw new Error("Plugin "+e+" does not have a destroy function!");return this[e].destroy(),delete this.initialisedPluginList[e],this.fireEvent("plugin-destroyed",e),this}},{key:"destroyAllPlugins",value:function(){var e=this;Object.keys(this.initialisedPluginList).forEach(function(t){return e.destroyPlugin(t)})}},{key:"createDrawer",value:function(){var e=this;this.drawer=new this.Drawer(this.container,this.params),this.drawer.init(),this.fireEvent("drawer-created",this.drawer),!1!==this.params.responsive&&(window.addEventListener("resize",this._onResize,!0),window.addEventListener("orientationchange",this._onResize,!0)),this.drawer.on("redraw",function(){e.drawBuffer(),e.drawer.progress(e.backend.getPlayedPercents())}),this.drawer.on("click",function(t,r){setTimeout(function(){return e.seekTo(r)},0)}),this.drawer.on("scroll",function(t){e.params.partialRender&&e.drawBuffer(),e.fireEvent("scroll",t)})}},{key:"createBackend",value:function(){var e=this;this.backend&&this.backend.destroy(),"AudioElement"==this.params.backend&&(this.params.backend="MediaElement"),"WebAudio"!=this.params.backend||this.Backend.prototype.supportsWebAudio.call(null)||(this.params.backend="MediaElement"),this.backend=new this.Backend(this.params),this.backend.init(),this.fireEvent("backend-created",this.backend),this.backend.on("finish",function(){return e.fireEvent("finish")}),this.backend.on("play",function(){return e.fireEvent("play")}),this.backend.on("pause",function(){return e.fireEvent("pause")}),this.backend.on("audioprocess",function(t){e.drawer.progress(e.backend.getPlayedPercents()),e.fireEvent("audioprocess",t)})}},{key:"createPeakCache",value:function(){this.params.partialRender&&(this.peakCache=new u.default)}},{key:"getDuration",value:function(){return this.backend.getDuration()}},{key:"getCurrentTime",value:function(){return this.backend.getCurrentTime()}},{key:"setCurrentTime",value:function(e){e>=this.getDuration()?this.seekTo(1):this.seekTo(e/this.getDuration())}},{key:"play",value:function(e,t){var r=this;return this.fireEvent("interaction",function(){return r.play(e,t)}),this.backend.play(e,t)}},{key:"pause",value:function(){if(!this.backend.isPaused())return this.backend.pause()}},{key:"playPause",value:function(){return this.backend.isPaused()?this.play():this.pause()}},{key:"isPlaying",value:function(){return!this.backend.isPaused()}},{key:"skipBackward",value:function(e){this.skip(-e||-this.params.skipLength)}},{key:"skipForward",value:function(e){this.skip(e||this.params.skipLength)}},{key:"skip",value:function(e){var t=this.getDuration()||1,r=this.getCurrentTime()||0;r=Math.max(0,Math.min(t,r+(e||0))),this.seekAndCenter(r/t)}},{key:"seekAndCenter",value:function(e){this.seekTo(e),this.drawer.recenter(e)}},{key:"seekTo",value:function(e){var t=this;if("number"!=typeof e||!isFinite(e)||e<0||e>1)return console.error("Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!");this.fireEvent("interaction",function(){return t.seekTo(e)});var r=this.backend.isPaused();r||this.backend.pause();var n=this.params.scrollParent;this.params.scrollParent=!1,this.backend.seekTo(e*this.getDuration()),this.drawer.progress(e),r||this.backend.play(),this.params.scrollParent=n,this.fireEvent("seek",e)}},{key:"stop",value:function(){this.pause(),this.seekTo(0),this.drawer.progress(0)}},{key:"setSinkId",value:function(e){return this.backend.setSinkId(e)}},{key:"setVolume",value:function(e){this.backend.setVolume(e),this.fireEvent("volume",e)}},{key:"getVolume",value:function(){return this.backend.getVolume()}},{key:"setPlaybackRate",value:function(e){this.backend.setPlaybackRate(e)}},{key:"getPlaybackRate",value:function(){return this.backend.getPlaybackRate()}},{key:"toggleMute",value:function(){this.setMute(!this.isMuted)}},{key:"setMute",value:function(e){e!==this.isMuted?(e?(this.savedVolume=this.backend.getVolume(),this.backend.setVolume(0),this.isMuted=!0,this.fireEvent("volume",0)):(this.backend.setVolume(this.savedVolume),this.isMuted=!1,this.fireEvent("volume",this.savedVolume)),this.fireEvent("mute",this.isMuted)):this.fireEvent("mute",this.isMuted)}},{key:"getMute",value:function(){return this.isMuted}},{key:"isReady",value:function(){return this.isReady}},{key:"getFilters",value:function(){return this.backend.filters||[]}},{key:"toggleScroll",value:function(){this.params.scrollParent=!this.params.scrollParent,this.drawBuffer()}},{key:"toggleInteraction",value:function(){this.params.interact=!this.params.interact}},{key:"getWaveColor",value:function(){return this.params.waveColor}},{key:"setWaveColor",value:function(e){this.params.waveColor=e,this.drawBuffer()}},{key:"getProgressColor",value:function(){return this.params.progressColor}},{key:"setProgressColor",value:function(e){this.params.progressColor=e,this.drawBuffer()}},{key:"getCursorColor",value:function(){return this.params.cursorColor}},{key:"setCursorColor",value:function(e){this.params.cursorColor=e,this.drawer.updateCursor()}},{key:"getHeight",value:function(){return this.params.height}},{key:"setHeight",value:function(e){this.params.height=e,this.drawer.setHeight(e*this.params.pixelRatio),this.drawBuffer()}},{key:"drawBuffer",value:function(){var e=Math.round(this.getDuration()*this.params.minPxPerSec*this.params.pixelRatio),t=this.drawer.getWidth(),r=e,n=this.drawer.getScrollX(),i=Math.max(n+t,r);this.params.fillParent&&(!this.params.scrollParent||e<t)&&(n=0,i=r=t);var a=void 0;if(this.params.partialRender){var s=this.peakCache.addRangeToPeakCache(r,n,i),o=void 0;for(o=0;o<s.length;o++)a=this.backend.getPeaks(r,s[o][0],s[o][1]),this.drawer.drawPeaks(a,r,s[o][0],s[o][1])}else a=this.backend.getPeaks(r,n,i),this.drawer.drawPeaks(a,r,n,i);this.fireEvent("redraw",a,r)}},{key:"zoom",value:function(e){e?(this.params.minPxPerSec=e,this.params.scrollParent=!0):(this.params.minPxPerSec=this.defaultParams.minPxPerSec,this.params.scrollParent=!1),this.drawBuffer(),this.drawer.progress(this.backend.getPlayedPercents()),this.drawer.recenter(this.getCurrentTime()/this.getDuration()),this.fireEvent("zoom",e)}},{key:"loadArrayBuffer",value:function(e){var t=this;this.decodeArrayBuffer(e,function(e){t.isDestroyed||t.loadDecodedBuffer(e)})}},{key:"loadDecodedBuffer",value:function(e){this.backend.load(e),this.drawBuffer(),this.fireEvent("ready"),this.isReady=!0}},{key:"loadBlob",value:function(e){var t=this,r=new FileReader;r.addEventListener("progress",function(e){return t.onProgress(e)}),r.addEventListener("load",function(e){return t.loadArrayBuffer(e.target.result)}),r.addEventListener("error",function(){return t.fireEvent("error","Error reading file")}),r.readAsArrayBuffer(e),this.empty()}},{key:"load",value:function(e,t,r,n){if(this.empty(),r){var i={"Preload is not 'auto', 'none' or 'metadata'":-1===["auto","metadata","none"].indexOf(r),"Peaks are not provided":!t,"Backend is not of type MediaElement":"MediaElement"!==this.params.backend,"Url is not of type string":"string"!=typeof e},a=Object.keys(i).filter(function(e){return i[e]});a.length&&(console.warn("Preload parameter of wavesurfer.load will be ignored because:\n\t- "+a.join("\n\t- ")),r=null)}switch(this.params.backend){case"WebAudio":return this.loadBuffer(e,t,n);case"MediaElement":return this.loadMediaElement(e,t,r,n)}}},{key:"loadBuffer",value:function(e,t,r){var n=this,i=function(t){return t&&n.tmpEvents.push(n.once("ready",t)),n.getArrayBuffer(e,function(e){return n.loadArrayBuffer(e)})};if(!t)return i();this.backend.setPeaks(t,r),this.drawBuffer(),this.tmpEvents.push(this.once("interaction",i))}},{key:"loadMediaElement",value:function(e,t,r,n){var i=this,a=e;if("string"==typeof e)this.backend.load(a,this.mediaContainer,t,r);else{var s=e;this.backend.loadElt(s,t),a=s.src}this.tmpEvents.push(this.backend.once("canplay",function(){i.drawBuffer(),i.fireEvent("ready"),i.isReady=!0}),this.backend.once("error",function(e){return i.fireEvent("error",e)})),t&&this.backend.setPeaks(t,n),t&&!this.params.forceDecode||!this.backend.supportsWebAudio()||this.getArrayBuffer(a,function(e){i.decodeArrayBuffer(e,function(e){i.backend.buffer=e,i.backend.setPeaks(null),i.drawBuffer(),i.fireEvent("waveform-ready")})})}},{key:"decodeArrayBuffer",value:function(e,t){var r=this;this.arraybuffer=e,this.backend.decodeArrayBuffer(e,function(n){r.isDestroyed||r.arraybuffer!=e||(t(n),r.arraybuffer=null)},function(){return r.fireEvent("error","Error decoding audiobuffer")})}},{key:"getArrayBuffer",value:function(e,t){var r=this,n=i.ajax({url:e,responseType:"arraybuffer",xhr:this.params.xhr});return this.currentAjax=n,this.tmpEvents.push(n.on("progress",function(e){r.onProgress(e)}),n.on("success",function(e,n){t(e),r.currentAjax=null}),n.on("error",function(e){r.fireEvent("error","XHR error: "+e.target.statusText),r.currentAjax=null})),n}},{key:"onProgress",value:function(e){var t=void 0;t=e.lengthComputable?e.loaded/e.total:e.loaded/(e.loaded+1e6),this.fireEvent("loading",Math.round(100*t),e.target)}},{key:"exportPCM",value:function(e,t,r,n){e=e||1024,n=n||0,t=t||1e4,r=r||!1;var i=this.backend.getPeaks(e,n),a=[].map.call(i,function(e){return Math.round(e*t)/t}),s=JSON.stringify(a);return r||window.open("data:application/json;charset=utf-8,"+encodeURIComponent(s)),s}},{key:"exportImage",value:function(e,t){return e||(e="image/png"),t||(t=1),this.drawer.getImage(e,t)}},{key:"cancelAjax",value:function(){this.currentAjax&&(this.currentAjax.xhr.abort(),this.currentAjax=null)}},{key:"clearTmpEvents",value:function(){this.tmpEvents.forEach(function(e){return e.un()})}},{key:"empty",value:function(){this.backend.isPaused()||(this.stop(),this.backend.disconnectSource()),this.cancelAjax(),this.clearTmpEvents(),this.drawer.progress(0),this.drawer.setWidth(0),this.drawer.drawPeaks({length:this.drawer.getWidth()},0)}},{key:"destroy",value:function(){this.destroyAllPlugins(),this.fireEvent("destroy"),this.cancelAjax(),this.clearTmpEvents(),this.unAll(),!1!==this.params.responsive&&(window.removeEventListener("resize",this._onResize,!0),window.removeEventListener("orientationchange",this._onResize,!0)),this.backend.destroy(),this.drawer.destroy(),this.isDestroyed=!0,this.arraybuffer=null}}]),t}();f.util=i,t.default=f,e.exports=t.default}])});
//# sourceMappingURL=wavesurfer.min.js.map
/*!
 * wavesurfer.js 2.0.6 (Fri Jun 15 2018 10:58:05 GMT+0200 (CEST))
 * https://github.com/katspaugh/wavesurfer.js
 * @license BSD-3-Clause
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("cursor",[],t):"object"==typeof exports?exports.cursor=t():(e.WaveSurfer=e.WaveSurfer||{},e.WaveSurfer.cursor=t())}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="localhost:8080/dist/plugin/",r(r.s=3)}({3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaultParams={hideOnBlur:!0,width:"1px",color:"black",opacity:"0.25",style:"solid",zIndex:4,customStyle:{}},this._onMousemove=function(e){var t=n.wavesurfer.container.getBoundingClientRect();n.updateCursorPosition(e.clientX-t.left)},this._onMouseenter=function(){return n.showCursor()},this._onMouseleave=function(){return n.hideCursor()},this.wavesurfer=r,this.style=r.util.style,this.cursor=null,this.params=r.util.extend({},this.defaultParams,t)}return n(e,null,[{key:"create",value:function(t){return{name:"cursor",deferInit:!(!t||!t.deferInit)&&t.deferInit,params:t,staticProps:{enableCursor:function(){console.warn("Deprecated enableCursor!"),this.initPlugins("cursor")}},instance:e}}}]),n(e,[{key:"init",value:function(){var e=this.wavesurfer.container;this.cursor=e.appendChild(this.style(document.createElement("cursor"),this.wavesurfer.util.extend({position:"absolute",zIndex:this.params.zIndex,left:0,top:0,bottom:0,width:"0",display:"block",borderRightStyle:this.params.style,borderRightWidth:this.params.width,borderRightColor:this.params.color,opacity:this.params.opacity,pointerEvents:"none"},this.params.customStyle))),e.addEventListener("mousemove",this._onMousemove),this.params.hideOnBlur&&(e.addEventListener("mouseenter",this._onMouseenter),e.addEventListener("mouseleave",this._onMouseleave))}},{key:"destroy",value:function(){this.cursor.parentNode.removeChild(this.cursor),this.wrapper.removeEventListener("mousemove",this._onMousemove),this.params.hideOnBlur&&(this.wrapper.removeEventListener("mouseenter",this._onMouseenter),this.wrapper.removeEventListener("mouseleave",this._onMouseleave))}},{key:"updateCursorPosition",value:function(e){this.style(this.cursor,{left:e+"px"})}},{key:"showCursor",value:function(){this.style(this.cursor,{display:"block"})}},{key:"hideCursor",value:function(){this.style(this.cursor,{display:"none"})}}]),e}();t.default=o,e.exports=t.default}})});
//# sourceMappingURL=wavesurfer.cursor.min.js.map
/*!
 * wavesurfer.js 2.0.6 (Fri Jun 15 2018 10:58:05 GMT+0200 (CEST))
 * https://github.com/katspaugh/wavesurfer.js
 * @license BSD-3-Clause
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("regions",[],t):"object"==typeof exports?exports.regions=t():(e.WaveSurfer=e.WaveSurfer||{},e.WaveSurfer.regions=t())}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="localhost:8080/dist/plugin/",r(r.s=5)}({5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(t,r){var n=this;i(this,e),this.wavesurfer=r,this.wrapper=r.drawer.wrapper,this.util=r.util,this.style=this.util.style,this.id=null==t.id?r.util.getId():t.id,this.start=Number(t.start)||0,this.end=null==t.end?this.start+4/this.wrapper.scrollWidth*this.wavesurfer.getDuration():Number(t.end),this.resize=void 0===t.resize||Boolean(t.resize),this.drag=void 0===t.drag||Boolean(t.drag),this.loop=Boolean(t.loop),this.color=t.color||"rgba(0, 0, 0, 0.1)",this.data=t.data||{},this.attributes=t.attributes||{},this.maxLength=t.maxLength,this.minLength=t.minLength,this._onRedraw=function(){return n.updateRender()},this.scroll=!1!==t.scroll&&r.params.scrollParent,this.scrollSpeed=t.scrollSpeed||1,this.scrollThreshold=t.scrollThreshold||10,this.bindInOut(),this.render(),this.wavesurfer.on("zoom",this._onRedraw),this.wavesurfer.on("redraw",this._onRedraw),this.wavesurfer.fireEvent("region-created",this)}return n(e,[{key:"update",value:function(e){null!=e.start&&(this.start=Number(e.start)),null!=e.end&&(this.end=Number(e.end)),null!=e.loop&&(this.loop=Boolean(e.loop)),null!=e.color&&(this.color=e.color),null!=e.data&&(this.data=e.data),null!=e.resize&&(this.resize=Boolean(e.resize)),null!=e.drag&&(this.drag=Boolean(e.drag)),null!=e.maxLength&&(this.maxLength=Number(e.maxLength)),null!=e.minLength&&(this.minLength=Number(e.minLength)),null!=e.attributes&&(this.attributes=e.attributes),this.updateRender(),this.fireEvent("update"),this.wavesurfer.fireEvent("region-updated",this)}},{key:"remove",value:function(){this.element&&(this.wrapper.removeChild(this.element),this.element=null,this.fireEvent("remove"),this.wavesurfer.un("zoom",this._onRedraw),this.wavesurfer.un("redraw",this._onRedraw),this.wavesurfer.fireEvent("region-removed",this))}},{key:"play",value:function(){this.wavesurfer.play(this.start,this.end),this.fireEvent("play"),this.wavesurfer.fireEvent("region-play",this)}},{key:"playLoop",value:function(){var e=this;this.play(),this.once("out",function(){return e.playLoop()})}},{key:"render",value:function(){var e=document.createElement("region");for(var t in e.className="wavesurfer-region",e.title=this.formatTime(this.start,this.end),e.setAttribute("data-id",this.id),this.attributes)e.setAttribute("data-region-"+t,this.attributes[t]);this.wrapper.scrollWidth;if(this.style(e,{position:"absolute",zIndex:2,height:"100%",top:"0px"}),this.resize){var r=e.appendChild(document.createElement("handle")),n=e.appendChild(document.createElement("handle"));r.className="wavesurfer-handle wavesurfer-handle-start",n.className="wavesurfer-handle wavesurfer-handle-end";var i={cursor:"col-resize",position:"absolute",left:"0px",top:"0px",width:"1%",maxWidth:"4px",height:"100%"};this.style(r,i),this.style(n,i),this.style(n,{left:"100%"})}this.element=this.wrapper.appendChild(e),this.updateRender(),this.bindEvents(e)}},{key:"formatTime",value:function(e,t){return(e==t?[e]:[e,t]).map(function(e){return[Math.floor(e%3600/60),("00"+Math.floor(e%60)).slice(-2)].join(":")}).join("-")}},{key:"getWidth",value:function(){return this.wavesurfer.drawer.width/this.wavesurfer.params.pixelRatio}},{key:"updateRender",value:function(){var e=this.wavesurfer.getDuration(),t=this.getWidth();if(this.start<0&&(this.start=0,this.end=this.end-this.start),this.end>e&&(this.end=e,this.start=e-(this.end-this.start)),null!=this.minLength&&(this.end=Math.max(this.start+this.minLength,this.end)),null!=this.maxLength&&(this.end=Math.min(this.start+this.maxLength,this.end)),null!=this.element){var r=Math.round(this.start/e*t),n=Math.round(this.end/e*t)-r;for(var i in this.style(this.element,{left:r+"px",width:n+"px",backgroundColor:this.color,cursor:this.drag?"move":"default"}),this.attributes)this.element.setAttribute("data-region-"+i,this.attributes[i]);this.element.title=this.formatTime(this.start,this.end)}}},{key:"bindInOut",value:function(){var e=this;this.firedIn=!1,this.firedOut=!1;var t=function(t){!e.firedOut&&e.firedIn&&(e.start>=Math.round(100*t)/100||e.end<=Math.round(100*t)/100)&&(e.firedOut=!0,e.firedIn=!1,e.fireEvent("out"),e.wavesurfer.fireEvent("region-out",e)),!e.firedIn&&e.start<=t&&e.end>t&&(e.firedIn=!0,e.firedOut=!1,e.fireEvent("in"),e.wavesurfer.fireEvent("region-in",e))};this.wavesurfer.backend.on("audioprocess",t),this.on("remove",function(){e.wavesurfer.backend.un("audioprocess",t)}),this.on("out",function(){e.loop&&e.wavesurfer.play(e.start)})}},{key:"bindEvents",value:function(){var e,t,r,n,i,s,a,o,u,l,d,h,c,v,f,p=this;this.element.addEventListener("mouseenter",function(e){p.fireEvent("mouseenter",e),p.wavesurfer.fireEvent("region-mouseenter",p,e)}),this.element.addEventListener("mouseleave",function(e){p.fireEvent("mouseleave",e),p.wavesurfer.fireEvent("region-mouseleave",p,e)}),this.element.addEventListener("click",function(e){e.preventDefault(),p.fireEvent("click",e),p.wavesurfer.fireEvent("region-click",p,e)}),this.element.addEventListener("dblclick",function(e){e.stopPropagation(),e.preventDefault(),p.fireEvent("dblclick",e),p.wavesurfer.fireEvent("region-dblclick",p,e)}),(this.drag||this.resize)&&(e=p.wavesurfer.drawer.container,t=p.wavesurfer.getDuration(),r=p.scrollSpeed,n=p.scrollThreshold,i=void 0,s=void 0,a=void 0,o=void 0,u=void 0,l=!1,d=void 0,h=void 0,c=function(e){e.touches&&e.touches.length>1||(s=e.targetTouches?e.targetTouches[0].identifier:null,e.stopPropagation(),i=p.wavesurfer.drawer.handleEvent(e,!0)*t,o=p.wrapper.scrollWidth-p.wrapper.clientWidth,h=p.wrapper.getBoundingClientRect(),"handle"==e.target.tagName.toLowerCase()?u=e.target.classList.contains("wavesurfer-handle-start")?"start":"end":(a=!0,u=!1))},v=function(e){e.touches&&e.touches.length>1||((a||u)&&(a=!1,d=null,u=!1),l&&(l=!1,p.util.preventClick(),p.fireEvent("update-end",e),p.wavesurfer.fireEvent("region-update-end",p,e)))},f=function(c){if(!(c.touches&&c.touches.length>1)&&(!c.targetTouches||c.targetTouches[0].identifier==s)&&(a||u)){var v=i,f=p.wavesurfer.drawer.handleEvent(c)*t,m=f-i;if(i=f,p.drag&&a&&(l=l||!!m,p.onDrag(m)),p.resize&&u&&(l=l||!!m,p.onResize(m,u)),p.scroll&&e.clientWidth<p.wrapper.scrollWidth){if(a){var g=p.element.getBoundingClientRect(),w=g.left-h.left;f<v&&w>=0?d=-1:f>v&&w+g.width<=h.right&&(d=1),(-1===d&&w>n||1===d&&w+g.width<h.right-n)&&(d=null)}else{var y=c.clientX-h.left;d=y<=n?-1:y>=h.right-n?1:null}d&&function e(n){if(d&&(a||u)){var s=p.wrapper.scrollLeft+r*d;p.wrapper.scrollLeft=s=Math.min(o,Math.max(0,s));var l=p.wavesurfer.drawer.handleEvent(n)*t,h=l-i;i=l,a?p.onDrag(h):p.onResize(h,u),window.requestAnimationFrame(function(){e(n)})}}(c)}}},p.element.addEventListener("mousedown",c),p.element.addEventListener("touchstart",c),p.wrapper.addEventListener("mousemove",f),p.wrapper.addEventListener("touchmove",f),document.body.addEventListener("mouseup",v),document.body.addEventListener("touchend",v),p.on("remove",function(){document.body.removeEventListener("mouseup",v),document.body.removeEventListener("touchend",v),p.wrapper.removeEventListener("mousemove",f),p.wrapper.removeEventListener("touchmove",f)}),p.wavesurfer.on("destroy",function(){document.body.removeEventListener("mouseup",v),document.body.removeEventListener("touchend",v)}))}},{key:"onDrag",value:function(e){var t=this.wavesurfer.getDuration();this.end+e>t||this.start+e<0||this.update({start:this.start+e,end:this.end+e})}},{key:"onResize",value:function(e,t){"start"==t?this.update({start:Math.min(this.start+e,this.end),end:Math.max(this.start+e,this.end)}):this.update({start:Math.min(this.end+e,this.start),end:Math.max(this.end+e,this.start)})}}]),e}(),a=function(){function e(t,r){var n=this;i(this,e),this.params=t,this.wavesurfer=r,this.util=r.util,Object.getOwnPropertyNames(this.util.Observer.prototype).forEach(function(e){s.prototype[e]=n.util.Observer.prototype[e]}),this.wavesurfer.Region=s,this.list={},this._onReady=function(){n.wrapper=n.wavesurfer.drawer.wrapper,n.params.regions&&n.params.regions.forEach(function(e){n.add(e)}),n.params.dragSelection&&n.enableDragSelection(n.params)}}return n(e,null,[{key:"create",value:function(t){return{name:"regions",deferInit:!(!t||!t.deferInit)&&t.deferInit,params:t,staticProps:{initRegions:function(){console.warn('Deprecated initRegions! Use wavesurfer.initPlugins("regions") instead!'),this.initPlugin("regions")},addRegion:function(e){return this.initialisedPluginList.regions||this.initPlugin("regions"),this.regions.add(e)},clearRegions:function(){this.regions&&this.regions.clear()},enableDragSelection:function(e){this.initialisedPluginList.regions||this.initPlugin("regions"),this.regions.enableDragSelection(e)},disableDragSelection:function(){this.regions.disableDragSelection()}},instance:e}}}]),n(e,[{key:"init",value:function(){this.wavesurfer.isReady&&this._onReady(),this.wavesurfer.on("ready",this._onReady)}},{key:"destroy",value:function(){this.wavesurfer.un("ready",this._onReady),this.disableDragSelection(),this.clear()}},{key:"add",value:function(e){var t=this,r=new this.wavesurfer.Region(e,this.wavesurfer);return this.list[r.id]=r,r.on("remove",function(){delete t.list[r.id]}),r}},{key:"clear",value:function(){var e=this;Object.keys(this.list).forEach(function(t){e.list[t].remove()})}},{key:"enableDragSelection",value:function(e){var t=this,r=e.slop||2,n=this.wavesurfer.drawer.container,i=!1!==e.scroll&&this.wavesurfer.params.scrollParent,s=e.scrollSpeed||1,a=e.scrollThreshold||10,o=void 0,u=this.wavesurfer.getDuration(),l=void 0,d=void 0,h=void 0,c=void 0,v=0,f=void 0,p=void 0,m=function(e){e.touches&&e.touches.length>1||(u=t.wavesurfer.getDuration(),c=e.targetTouches?e.targetTouches[0].identifier:null,l=t.wrapper.scrollWidth-t.wrapper.clientWidth,p=t.wrapper.getBoundingClientRect(),o=!0,d=t.wavesurfer.drawer.handleEvent(e,!0),h=null,f=null)};this.wrapper.addEventListener("mousedown",m),this.wrapper.addEventListener("touchstart",m),this.on("disable-drag-selection",function(){t.wrapper.removeEventListener("touchstart",m),t.wrapper.removeEventListener("mousedown",m)});var g=function(e){e.touches&&e.touches.length>1||(o=!1,v=0,f=null,h&&(t.util.preventClick(),h.fireEvent("update-end",e),t.wavesurfer.fireEvent("region-update-end",h,e)),h=null)};this.wrapper.addEventListener("mouseup",g),this.wrapper.addEventListener("touchend",g),document.body.addEventListener("mouseup",g),document.body.addEventListener("touchend",g),this.on("disable-drag-selection",function(){document.body.removeEventListener("mouseup",g),document.body.removeEventListener("touchend",g),t.wrapper.removeEventListener("touchend",g),t.wrapper.removeEventListener("mouseup",g)});var w=function(m){if(o&&!(++v<=r||m.touches&&m.touches.length>1||m.targetTouches&&m.targetTouches[0].identifier!=c)){h||(h=t.add(e||{}));var g=t.wavesurfer.drawer.handleEvent(m);if(h.update({start:Math.min(g*u,d*u),end:Math.max(g*u,d*u)}),i&&n.clientWidth<t.wrapper.scrollWidth){var w=m.clientX-p.left;(f=w<=a?-1:w>=p.right-a?1:null)&&function e(r){if(h&&f){var n=t.wrapper.scrollLeft+s*f;t.wrapper.scrollLeft=n=Math.min(l,Math.max(0,n));var i=t.wavesurfer.drawer.handleEvent(r);h.update({start:Math.min(i*u,d*u),end:Math.max(i*u,d*u)}),n<l&&n>0&&window.requestAnimationFrame(function(){e(r)})}}(m)}}};this.wrapper.addEventListener("mousemove",w),this.wrapper.addEventListener("touchmove",w),this.on("disable-drag-selection",function(){t.wrapper.removeEventListener("touchmove",w),t.wrapper.removeEventListener("mousemove",w)})}},{key:"disableDragSelection",value:function(){this.fireEvent("disable-drag-selection")}},{key:"getCurrentRegion",value:function(){var e=this,t=this.wavesurfer.getCurrentTime(),r=null;return Object.keys(this.list).forEach(function(n){var i=e.list[n];i.start<=t&&i.end>=t&&(!r||i.end-i.start<r.end-r.start)&&(r=i)}),r}}]),e}();t.default=a,e.exports=t.default}})});
//# sourceMappingURL=wavesurfer.regions.min.js.map
function CodeKeyframes(args){

  if( !args.audioPath ) return

  this.audioPath  = args.audioPath
  this.editorOpen = args.editorOpen || false
  this.keyframes  = args.keyframes  || []
  this.label      = args.label
  this.autoplay   = args.autoplay   || false
  this.onCanPlay  = args.onCanPlay  || function(){}

  this.activeRegion = null
  this.skipLength   = 1
  this.zoom         = 30
  this.nudging      = false
  this.nudgeMult    = 1

  this.sequence         = []
  this.sequenceCursor   = 0
  this.sequenceNextTime = null


  document.querySelector('body').insertAdjacentHTML('beforeend',`
    <div id="ckf-editor">
      <div id="ckf-waveform" tabindex="0"></div>
      <form class="code-form">
        <textarea name="code" id="code" cols="30" rows="10"></textarea>
        <div class="controls">
          <a href="#" class="render">Export Keyframes</a>
          <a href="#" class="close">Close Editor</a>
        </div>
      </form>
    </div>`)

  this._editor       = document.querySelector('#ckf-editor')
  this._waveform     = document.querySelector('#ckf-editor #waveform')
  this._codeForm     = document.querySelector('#ckf-editor .code-form')
  this._code         = document.querySelector('#ckf-editor #code')
  this._renderButton = document.querySelector('#ckf-editor .render')
  this._closeButton  = document.querySelector('#ckf-editor .close')

  if( this.label ){
    _label = document.createElement('div')
    _label.innerHTML = this.label
    _label.classList.add('ckf-label')
    this._editor.appendChild(_label)
  }

  if( !this.editorOpen ){
    this._editor.classList.add('closed')
    this._codeForm.remove()
  }

  
  /*
  
  ███████╗██╗     ███████╗███╗   ███╗███████╗███╗   ██╗████████╗
  ██╔════╝██║     ██╔════╝████╗ ████║██╔════╝████╗  ██║╚══██╔══╝
  █████╗  ██║     █████╗  ██╔████╔██║█████╗  ██╔██╗ ██║   ██║   
  ██╔══╝  ██║     ██╔══╝  ██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║   
  ███████╗███████╗███████╗██║ ╚═╝ ██║███████╗██║ ╚████║   ██║   
  ╚══════╝╚══════╝╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝   
                                                                
  ███████╗██╗   ██╗███████╗███╗   ██╗████████╗███████╗          
  ██╔════╝██║   ██║██╔════╝████╗  ██║╚══██╔══╝██╔════╝          
  █████╗  ██║   ██║█████╗  ██╔██╗ ██║   ██║   ███████╗          
  ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║╚██╗██║   ██║   ╚════██║          
  ███████╗ ╚████╔╝ ███████╗██║ ╚████║   ██║   ███████║          
  ╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝          
  
  */                                                            

  // save regions on keyup
  this._code.onkeyup = (e) => {
    this.activeRegion.data.code = this._code.value
    this.saveRegions()
    this.updateSequence()
    this.runRegionCode(this.activeRegion)
  }

  this._code.onkeydown = (e) => {
    // prevent keystrokes from running other functions
    // but allow page up/down
    if( e.which == 33 ) return
    if( e.which == 34 ) return
    e.stopPropagation()
  }  

  this._renderButton.onclick = (e) => {
    var keyframes = []
    var regions = this.wavesurfer.regions.list
    for( var key in this.wavesurfer.regions.list ){
      var region = this.wavesurfer.regions.list[key]
      keyframes.push({
        start:region.start,
        end:region.end,
        data:region.data
      })
    }

    this.activeRegion = null
    this._code.value = JSON.stringify(keyframes)
  }

  this._closeButton.onclick = (e) => {
    this._editor.classList.add('closed')
    this._codeForm.remove()
    this.editorOpen = false
  }

  document.addEventListener('keydown', (e) => {


    // console.log(e.which)

    var keycodes = {

      // left
      37:()=>{ 

        if( this.nudging ){
          this.nudgeActiveRegion('left')
        }else{
          this.wavesurfer.skip(this.skipLength*-1)  
        }

        
      },

      // right
      39:()=>{
        if( this.nudging ){
          this.nudgeActiveRegion('right')
        }else{ 
          this.wavesurfer.skip(this.skipLength)
        }
      },

      // up
      38:()=>{ 
        this.zoom += 0.5
        this.nudgeMult = this.nudgeMult * .985
        this.wavesurfer.zoom(this.zoom)
      },

      // down
      40:()=>{ 
        this.zoom -= 0.5
        this.nudgeMult = this.nudgeMult * 1.025
        this.wavesurfer.zoom(this.zoom)
      },

      // shift
      16:()=>{
        this.skipLength = 0.1
        e.preventDefault()
      },

      // alt
      18:()=>{
        this.nudging = true
        // alert(this.nudging)
        e.preventDefault()
      },

      // enter
      13:()=>{
        
        var region = this.wavesurfer.addRegion({
          start:  this.wavesurfer.getCurrentTime(),
          end:    this.wavesurfer.getCurrentTime()+0.1,
          drag:   false,
          resize: false,
          data:{
            code:this._code.value
          }
        })

        this.editCode(region)
        this.saveRegions()
        this.updateSequence()
      },

      // space
      32:()=>{
        this.wavesurfer.playPause()
        this._code.classList.remove('error')
      },

      // page up
      33:()=>{
        this.editCode( this.getNextRegion() )
      },

      // page down
      34:()=>{
        this.editCode( this.getPrevRegion() )
      },

      // left bracket
      219:()=>{
        this.editCode( this.getPrevRegion() )
      },

      // right bracket
      221:()=>{
        this.editCode( this.getNextRegion() )
      },

      // delete
      46:()=>{
        this.activeRegion.remove()
        this.saveRegions()
        this.updateSequence()
      },

      // delete (backspace)
      8:()=>{
        this.activeRegion.remove()
        this.saveRegions()
        this.updateSequence()
      },

    }

    // prevent all key actions except space bar when editor closed
  	if(!this.editorOpen && e.which !== 32 ) return

    if( keycodes[e.which] ){
      keycodes[e.which]()
    }

  })

  document.addEventListener('keyup', (e) =>{

  	if( !this.editorOpen ) return

    var keycodes = {
      // shift
      16:()=>{
        this.skipLength = 1
      },

      // alt
      18:()=>{
        this.nudging = false
      },
    }

    if( keycodes[e.which] ){
      keycodes[e.which]()
    }
  })


  /*

  ███╗   ███╗███████╗████████╗██╗  ██╗ ██████╗ ██████╗ ███████╗
  ████╗ ████║██╔════╝╚══██╔══╝██║  ██║██╔═══██╗██╔══██╗██╔════╝
  ██╔████╔██║█████╗     ██║   ███████║██║   ██║██║  ██║███████╗
  ██║╚██╔╝██║██╔══╝     ██║   ██╔══██║██║   ██║██║  ██║╚════██║
  ██║ ╚═╝ ██║███████╗   ██║   ██║  ██║╚██████╔╝██████╔╝███████║
  ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
  
  */

  this.saveRegions = ()=>{

    if( !this.editorOpen ) return

    localStorage.regions = JSON.stringify(
      Object.keys( this.wavesurfer.regions.list ).map( (id)=>{

        var region = this.wavesurfer.regions.list[id]
        return {
          start: region.start,
          end:   region.end,
          data:  region.data
        }
      })
    )
  }

  this.loadRegions = function(regions){

  	// load regions from saved code in declaration
    var keyframeRegions = this.keyframes

    // load regions from localstorage
    var localRegions = []
    if( localStorage.regions && this.editorOpen ) {
      localRegions = JSON.parse(localStorage.regions)
    }

    // combine and deduplicate
    var combinedRegions = []

    var arr = keyframeRegions.concat(localRegions)
    var len = arr.length
    while (len--) {
      var itm = arr[len]
      unique = true
      for (var i = combinedRegions.length - 1; i >= 0; i--) {
        if( combinedRegions[i].start == itm.start ){
          unique = false
        }
      }
      if( unique ) combinedRegions.unshift(itm)
    }

    combinedRegions.forEach((region) => {
      this.wavesurfer.addRegion({
        start:  region.start,
        end:    region.end,
        data:   region.data,
        drag:   false,
        resize: false
      })
    })
  }

  this.updateSequence = () => {

    this.sequence = []

    var regions = this.wavesurfer.regions.list
    for( var key in regions ){    
      // convert regions to commands and add to sequence
      var command = {
        time: regions[key].start,
        code: regions[key].data.code
      }
      this.sequence.push(command)
    }

    this.sequence.sort(function(a,b){
      if( a.time > b.time ) return 1
      if( a.time < b.time ) return -1
      if( a.time == b.time ) return 0
    })

    // update sequence cursor
    this.sequenceCursor = 0
    var playheadTime = this.wavesurfer.getCurrentTime()

    for (var i = 0; i < this.sequence.length; i++) {
      var commandTime = this.sequence[this.sequenceCursor].time
      if( commandTime < playheadTime ){
        this.sequenceCursor++
      }else{
        break
      }
    }
  }

  this.nudgeActiveRegion = (direction) => {

    region = this.activeRegion

    nudgeAmount = .1 * this.nudgeMult
    if( direction == 'left' ) nudgeAmount = nudgeAmount * -1

    // nudgeAmount = (direction == 'left') ? -.1 : .1

    this.activeRegion = this.wavesurfer.addRegion({
      start:  region.start + nudgeAmount,
      end:    region.end +nudgeAmount,
      data:   region.data,
      drag:   false,
      resize: false
    })

    this.activeRegion.element.classList.add('active')
    region.remove()
    this.saveRegions()

  }

  this.editCode = function(region, seek = true) {

    if(!region) return

    // execute the keyframe code
    this.runRegionCode(region)

    if( !this.editorOpen ) return

    // remove active class from all regions
    _regions = this._editor.querySelectorAll('region')
    for (var i = _regions.length - 1; i >= 0; i--) {
      _regions[i].classList.remove('active')
    }
    
    region.element.classList.add('active')

    // seek to region start
    if( seek ){
      this.wavesurfer.seekAndCenter( (region.start / this.wavesurfer.getDuration()))  
    }

    // show the code for this region
    this._code.value = region.data.code

    // set active region
    this.activeRegion = region
    
  }

  this.runRegionCode = function(region){
    this._code.classList.remove('error')
      
    try{
      eval(region.data.code)
    } catch(error){
      this._code.classList.add('error')
      console.log(error)
    }
  },

  this.getNextRegion = function(){

    if( !this.editorOpen ) return

    var currentTime = -1
    if( this.activeRegion ){
      currentTime = this.activeRegion.start  
    }

    var regionsAfter = []

    for( var key in this.wavesurfer.regions.list ){
      var region = this.wavesurfer.regions.list[key]
      if( region.start > currentTime ) regionsAfter.push(region)
    }

    regionsAfter.sort(function(a,b){
      if( a.start > b.start ) return 1
      if( a.start < b.start ) return -1
      if( a.start == b.start ) return 0
    })  

    return regionsAfter[0]
  }


  this.getPrevRegion = function(){

    if( !this.editorOpen ) return

    var currentTime = 9999999
    if( this.activeRegion ){
      currentTime = this.activeRegion.start
    }

    var regionsBefore = []

    for( var key in this.wavesurfer.regions.list ){
      var region = this.wavesurfer.regions.list[key]
      if( region.start < currentTime ) regionsBefore.push(region)
    }

    regionsBefore.sort(function(a,b){
      if( a.start < b.start ) return 1
      if( a.start > b.start ) return -1
      if( a.start == b.start ) return 0
    })

    return regionsBefore[0]
  }

  /*

  ██╗    ██╗ █████╗ ██╗   ██╗███████╗███████╗██╗   ██╗██████╗ ███████╗███████╗██████╗ 
  ██║    ██║██╔══██╗██║   ██║██╔════╝██╔════╝██║   ██║██╔══██╗██╔════╝██╔════╝██╔══██╗
  ██║ █╗ ██║███████║██║   ██║█████╗  ███████╗██║   ██║██████╔╝█████╗  █████╗  ██████╔╝
  ██║███╗██║██╔══██║╚██╗ ██╔╝██╔══╝  ╚════██║██║   ██║██╔══██╗██╔══╝  ██╔══╝  ██╔══██╗
  ╚███╔███╔╝██║  ██║ ╚████╔╝ ███████╗███████║╚██████╔╝██║  ██║██║     ███████╗██║  ██║
   ╚══╝╚══╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝
                                                                                      
  */

  var waveHeight = 100
  if( !this.editorOpen ){
    waveHeight = 30
  }

  var waveColor     = args.waveColor     || '#3AEAD2'
  var progressColor = args.progressColor || '#0c9fa7'

  this.wavesurfer = WaveSurfer.create({
      container:     '#ckf-waveform',
      height:        waveHeight,
      scrollParent:  true,
      normalize:     true,
      waveColor:     waveColor,
      progressColor: progressColor,
      barWidth:      1,
      cursorColor:   '#fff',
      plugins: [WaveSurfer.cursor.create(),WaveSurfer.regions.create()]
  })

  this.wavesurfer.load(this.audioPath)

  this.wavesurfer.on('ready', (e) =>{
    this.wavesurfer.zoom(this.zoom)

    // load regions from localstorage and keyframes
    this.loadRegions()

    // build the sequence
    this.updateSequence()

    // autoplay
    if(this.autoplay){
      this.wavesurfer.play()
    }

    this.onCanPlay()
  })

  this.wavesurfer.on('region-click', (region) => {
    this.editCode(region)
    this.updateSequence()
  })

  this.wavesurfer.on('seek', () => {
    this.updateSequence()
  })

  this.wavesurfer.on('audioprocess', () => {
    var time    = this.wavesurfer.getCurrentTime()
    var command = this.sequence[this.sequenceCursor]
    if( !command ) return
    if( time > command.time ){
      this.sequenceCursor++      

      // find the region to show
      var regions = this.wavesurfer.regions.list
      for( var key in regions){
        if( regions[key].start == command.time ){
          this.editCode(regions[key], false)
          break
        }
      }

    }
  })
}