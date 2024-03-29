// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"39Mbm":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "0fa2489aa94c8731ee2aee9f3fafb3e2"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5rkFb":[function(require,module,exports) {
var _rxjs = require("rxjs");
let tipAmounts = [
    0.1,
    0.2,
    0.3,
    0.4,
    0.5
];
let tipButtons = document.querySelectorAll(".tipButton");
console.log("Loaded");
let tipPercentage = 0, bill = 0;
let numberOfPeople = 1;
let buttonIndex = 0;
let prevButtonPushIndex = -1;
let tipPercentageSubject = new _rxjs.BehaviorSubject(tipPercentage);
let billSubject = new _rxjs.BehaviorSubject(bill);
let numberOfPeopleSubject = new _rxjs.BehaviorSubject(numberOfPeople);
let buttonIndexSubject = new _rxjs.BehaviorSubject(buttonIndex);
_rxjs.fromEvent(document.getElementById("billInput"), "input").pipe(_rxjs.debounceTime(400)).subscribe((event)=>billSubject.next(Number(event.target.value))
);
_rxjs.fromEvent(document.getElementById("numPeopleInput"), "input").pipe(_rxjs.debounceTime(400), _rxjs.filter((inputEvent)=>inputEvent.target.value > 0 === true
)).subscribe((event)=>numberOfPeopleSubject.next(Number(event.target.value))
);
tipAmounts.forEach((tip, index)=>{
    tipButtons[index].innerHTML = `${tip * 100}%`;
    _rxjs.fromEvent(tipButtons[index], "click").subscribe(()=>{
        //console.log(tipButtons[index].classList);
        buttonIndexSubject.next(index);
        tipPercentageSubject.next(tip);
        tipButtons[index].classList.toggle("click");
        removeClickStyle();
        prevButtonPushIndex = index;
        tipPercentage = tip;
    });
});
_rxjs.fromEvent(tipButtons[5], "click").subscribe(()=>{
    let customTipPercent = prompt("Please Enter a Percentage");
    customTipPercent = customTipPercent.replace("%", "");
    console.log(customTipPercent);
    if (isNaN(customTipPercent)) alert("Please enter a number");
    else tipPercentageSubject.next(Number(customTipPercent) / 100);
    tipButtons[5].classList.toggle("click");
    removeClickStyle();
    prevButtonPushIndex = 5;
});
function removeClickStyle() {
    if (prevButtonPushIndex !== -1) tipButtons[prevButtonPushIndex].classList.toggle("click");
}
let tipAmount = _rxjs.combineLatest([
    tipPercentageSubject,
    billSubject,
    numberOfPeopleSubject, 
]);
tipAmount.subscribe(([tipS, billS, numberOfPeopleS])=>{
    console.log({
        tip: tipS,
        bill: billS,
        numP: numberOfPeopleS
    });
    let totalTip = billS * tipS / numberOfPeopleS;
    let total = totalTip + billS / numberOfPeopleS;
    document.getElementById("tip").innerText = `R${totalTip}`;
    document.getElementById("total").innerText = `R${total}`;
});
_rxjs.fromEvent(document.getElementById("reset"), "click").subscribe(()=>{
    billSubject.next(0);
    tipButtons[buttonIndexSubject.value].classList.toggle("click");
    numberOfPeopleSubject.next(1);
    tipPercentageSubject.next(0);
});

},{"rxjs":"3ULHQ"}],"3ULHQ":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
exports.switchMapTo = exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = void 0;
exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = void 0;
var Observable_1 = require("./internal/Observable");
Object.defineProperty(exports, "Observable", {
    enumerable: true,
    get: function() {
        return Observable_1.Observable;
    }
});
var ConnectableObservable_1 = require("./internal/observable/ConnectableObservable");
Object.defineProperty(exports, "ConnectableObservable", {
    enumerable: true,
    get: function() {
        return ConnectableObservable_1.ConnectableObservable;
    }
});
var observable_1 = require("./internal/symbol/observable");
Object.defineProperty(exports, "observable", {
    enumerable: true,
    get: function() {
        return observable_1.observable;
    }
});
var animationFrames_1 = require("./internal/observable/dom/animationFrames");
Object.defineProperty(exports, "animationFrames", {
    enumerable: true,
    get: function() {
        return animationFrames_1.animationFrames;
    }
});
var Subject_1 = require("./internal/Subject");
Object.defineProperty(exports, "Subject", {
    enumerable: true,
    get: function() {
        return Subject_1.Subject;
    }
});
var BehaviorSubject_1 = require("./internal/BehaviorSubject");
Object.defineProperty(exports, "BehaviorSubject", {
    enumerable: true,
    get: function() {
        return BehaviorSubject_1.BehaviorSubject;
    }
});
var ReplaySubject_1 = require("./internal/ReplaySubject");
Object.defineProperty(exports, "ReplaySubject", {
    enumerable: true,
    get: function() {
        return ReplaySubject_1.ReplaySubject;
    }
});
var AsyncSubject_1 = require("./internal/AsyncSubject");
Object.defineProperty(exports, "AsyncSubject", {
    enumerable: true,
    get: function() {
        return AsyncSubject_1.AsyncSubject;
    }
});
var asap_1 = require("./internal/scheduler/asap");
Object.defineProperty(exports, "asap", {
    enumerable: true,
    get: function() {
        return asap_1.asap;
    }
});
Object.defineProperty(exports, "asapScheduler", {
    enumerable: true,
    get: function() {
        return asap_1.asapScheduler;
    }
});
var async_1 = require("./internal/scheduler/async");
Object.defineProperty(exports, "async", {
    enumerable: true,
    get: function() {
        return async_1.async;
    }
});
Object.defineProperty(exports, "asyncScheduler", {
    enumerable: true,
    get: function() {
        return async_1.asyncScheduler;
    }
});
var queue_1 = require("./internal/scheduler/queue");
Object.defineProperty(exports, "queue", {
    enumerable: true,
    get: function() {
        return queue_1.queue;
    }
});
Object.defineProperty(exports, "queueScheduler", {
    enumerable: true,
    get: function() {
        return queue_1.queueScheduler;
    }
});
var animationFrame_1 = require("./internal/scheduler/animationFrame");
Object.defineProperty(exports, "animationFrame", {
    enumerable: true,
    get: function() {
        return animationFrame_1.animationFrame;
    }
});
Object.defineProperty(exports, "animationFrameScheduler", {
    enumerable: true,
    get: function() {
        return animationFrame_1.animationFrameScheduler;
    }
});
var VirtualTimeScheduler_1 = require("./internal/scheduler/VirtualTimeScheduler");
Object.defineProperty(exports, "VirtualTimeScheduler", {
    enumerable: true,
    get: function() {
        return VirtualTimeScheduler_1.VirtualTimeScheduler;
    }
});
Object.defineProperty(exports, "VirtualAction", {
    enumerable: true,
    get: function() {
        return VirtualTimeScheduler_1.VirtualAction;
    }
});
var Scheduler_1 = require("./internal/Scheduler");
Object.defineProperty(exports, "Scheduler", {
    enumerable: true,
    get: function() {
        return Scheduler_1.Scheduler;
    }
});
var Subscription_1 = require("./internal/Subscription");
Object.defineProperty(exports, "Subscription", {
    enumerable: true,
    get: function() {
        return Subscription_1.Subscription;
    }
});
var Subscriber_1 = require("./internal/Subscriber");
Object.defineProperty(exports, "Subscriber", {
    enumerable: true,
    get: function() {
        return Subscriber_1.Subscriber;
    }
});
var Notification_1 = require("./internal/Notification");
Object.defineProperty(exports, "Notification", {
    enumerable: true,
    get: function() {
        return Notification_1.Notification;
    }
});
Object.defineProperty(exports, "NotificationKind", {
    enumerable: true,
    get: function() {
        return Notification_1.NotificationKind;
    }
});
var pipe_1 = require("./internal/util/pipe");
Object.defineProperty(exports, "pipe", {
    enumerable: true,
    get: function() {
        return pipe_1.pipe;
    }
});
var noop_1 = require("./internal/util/noop");
Object.defineProperty(exports, "noop", {
    enumerable: true,
    get: function() {
        return noop_1.noop;
    }
});
var identity_1 = require("./internal/util/identity");
Object.defineProperty(exports, "identity", {
    enumerable: true,
    get: function() {
        return identity_1.identity;
    }
});
var isObservable_1 = require("./internal/util/isObservable");
Object.defineProperty(exports, "isObservable", {
    enumerable: true,
    get: function() {
        return isObservable_1.isObservable;
    }
});
var lastValueFrom_1 = require("./internal/lastValueFrom");
Object.defineProperty(exports, "lastValueFrom", {
    enumerable: true,
    get: function() {
        return lastValueFrom_1.lastValueFrom;
    }
});
var firstValueFrom_1 = require("./internal/firstValueFrom");
Object.defineProperty(exports, "firstValueFrom", {
    enumerable: true,
    get: function() {
        return firstValueFrom_1.firstValueFrom;
    }
});
var ArgumentOutOfRangeError_1 = require("./internal/util/ArgumentOutOfRangeError");
Object.defineProperty(exports, "ArgumentOutOfRangeError", {
    enumerable: true,
    get: function() {
        return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
    }
});
var EmptyError_1 = require("./internal/util/EmptyError");
Object.defineProperty(exports, "EmptyError", {
    enumerable: true,
    get: function() {
        return EmptyError_1.EmptyError;
    }
});
var NotFoundError_1 = require("./internal/util/NotFoundError");
Object.defineProperty(exports, "NotFoundError", {
    enumerable: true,
    get: function() {
        return NotFoundError_1.NotFoundError;
    }
});
var ObjectUnsubscribedError_1 = require("./internal/util/ObjectUnsubscribedError");
Object.defineProperty(exports, "ObjectUnsubscribedError", {
    enumerable: true,
    get: function() {
        return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
    }
});
var SequenceError_1 = require("./internal/util/SequenceError");
Object.defineProperty(exports, "SequenceError", {
    enumerable: true,
    get: function() {
        return SequenceError_1.SequenceError;
    }
});
var timeout_1 = require("./internal/operators/timeout");
Object.defineProperty(exports, "TimeoutError", {
    enumerable: true,
    get: function() {
        return timeout_1.TimeoutError;
    }
});
var UnsubscriptionError_1 = require("./internal/util/UnsubscriptionError");
Object.defineProperty(exports, "UnsubscriptionError", {
    enumerable: true,
    get: function() {
        return UnsubscriptionError_1.UnsubscriptionError;
    }
});
var bindCallback_1 = require("./internal/observable/bindCallback");
Object.defineProperty(exports, "bindCallback", {
    enumerable: true,
    get: function() {
        return bindCallback_1.bindCallback;
    }
});
var bindNodeCallback_1 = require("./internal/observable/bindNodeCallback");
Object.defineProperty(exports, "bindNodeCallback", {
    enumerable: true,
    get: function() {
        return bindNodeCallback_1.bindNodeCallback;
    }
});
var combineLatest_1 = require("./internal/observable/combineLatest");
Object.defineProperty(exports, "combineLatest", {
    enumerable: true,
    get: function() {
        return combineLatest_1.combineLatest;
    }
});
var concat_1 = require("./internal/observable/concat");
Object.defineProperty(exports, "concat", {
    enumerable: true,
    get: function() {
        return concat_1.concat;
    }
});
var connectable_1 = require("./internal/observable/connectable");
Object.defineProperty(exports, "connectable", {
    enumerable: true,
    get: function() {
        return connectable_1.connectable;
    }
});
var defer_1 = require("./internal/observable/defer");
Object.defineProperty(exports, "defer", {
    enumerable: true,
    get: function() {
        return defer_1.defer;
    }
});
var empty_1 = require("./internal/observable/empty");
Object.defineProperty(exports, "empty", {
    enumerable: true,
    get: function() {
        return empty_1.empty;
    }
});
var forkJoin_1 = require("./internal/observable/forkJoin");
Object.defineProperty(exports, "forkJoin", {
    enumerable: true,
    get: function() {
        return forkJoin_1.forkJoin;
    }
});
var from_1 = require("./internal/observable/from");
Object.defineProperty(exports, "from", {
    enumerable: true,
    get: function() {
        return from_1.from;
    }
});
var fromEvent_1 = require("./internal/observable/fromEvent");
Object.defineProperty(exports, "fromEvent", {
    enumerable: true,
    get: function() {
        return fromEvent_1.fromEvent;
    }
});
var fromEventPattern_1 = require("./internal/observable/fromEventPattern");
Object.defineProperty(exports, "fromEventPattern", {
    enumerable: true,
    get: function() {
        return fromEventPattern_1.fromEventPattern;
    }
});
var generate_1 = require("./internal/observable/generate");
Object.defineProperty(exports, "generate", {
    enumerable: true,
    get: function() {
        return generate_1.generate;
    }
});
var iif_1 = require("./internal/observable/iif");
Object.defineProperty(exports, "iif", {
    enumerable: true,
    get: function() {
        return iif_1.iif;
    }
});
var interval_1 = require("./internal/observable/interval");
Object.defineProperty(exports, "interval", {
    enumerable: true,
    get: function() {
        return interval_1.interval;
    }
});
var merge_1 = require("./internal/observable/merge");
Object.defineProperty(exports, "merge", {
    enumerable: true,
    get: function() {
        return merge_1.merge;
    }
});
var never_1 = require("./internal/observable/never");
Object.defineProperty(exports, "never", {
    enumerable: true,
    get: function() {
        return never_1.never;
    }
});
var of_1 = require("./internal/observable/of");
Object.defineProperty(exports, "of", {
    enumerable: true,
    get: function() {
        return of_1.of;
    }
});
var onErrorResumeNext_1 = require("./internal/observable/onErrorResumeNext");
Object.defineProperty(exports, "onErrorResumeNext", {
    enumerable: true,
    get: function() {
        return onErrorResumeNext_1.onErrorResumeNext;
    }
});
var pairs_1 = require("./internal/observable/pairs");
Object.defineProperty(exports, "pairs", {
    enumerable: true,
    get: function() {
        return pairs_1.pairs;
    }
});
var partition_1 = require("./internal/observable/partition");
Object.defineProperty(exports, "partition", {
    enumerable: true,
    get: function() {
        return partition_1.partition;
    }
});
var race_1 = require("./internal/observable/race");
Object.defineProperty(exports, "race", {
    enumerable: true,
    get: function() {
        return race_1.race;
    }
});
var range_1 = require("./internal/observable/range");
Object.defineProperty(exports, "range", {
    enumerable: true,
    get: function() {
        return range_1.range;
    }
});
var throwError_1 = require("./internal/observable/throwError");
Object.defineProperty(exports, "throwError", {
    enumerable: true,
    get: function() {
        return throwError_1.throwError;
    }
});
var timer_1 = require("./internal/observable/timer");
Object.defineProperty(exports, "timer", {
    enumerable: true,
    get: function() {
        return timer_1.timer;
    }
});
var using_1 = require("./internal/observable/using");
Object.defineProperty(exports, "using", {
    enumerable: true,
    get: function() {
        return using_1.using;
    }
});
var zip_1 = require("./internal/observable/zip");
Object.defineProperty(exports, "zip", {
    enumerable: true,
    get: function() {
        return zip_1.zip;
    }
});
var scheduled_1 = require("./internal/scheduled/scheduled");
Object.defineProperty(exports, "scheduled", {
    enumerable: true,
    get: function() {
        return scheduled_1.scheduled;
    }
});
var empty_2 = require("./internal/observable/empty");
Object.defineProperty(exports, "EMPTY", {
    enumerable: true,
    get: function() {
        return empty_2.EMPTY;
    }
});
var never_2 = require("./internal/observable/never");
Object.defineProperty(exports, "NEVER", {
    enumerable: true,
    get: function() {
        return never_2.NEVER;
    }
});
__exportStar(require("./internal/types"), exports);
var config_1 = require("./internal/config");
Object.defineProperty(exports, "config", {
    enumerable: true,
    get: function() {
        return config_1.config;
    }
});
var audit_1 = require("./internal/operators/audit");
Object.defineProperty(exports, "audit", {
    enumerable: true,
    get: function() {
        return audit_1.audit;
    }
});
var auditTime_1 = require("./internal/operators/auditTime");
Object.defineProperty(exports, "auditTime", {
    enumerable: true,
    get: function() {
        return auditTime_1.auditTime;
    }
});
var buffer_1 = require("./internal/operators/buffer");
Object.defineProperty(exports, "buffer", {
    enumerable: true,
    get: function() {
        return buffer_1.buffer;
    }
});
var bufferCount_1 = require("./internal/operators/bufferCount");
Object.defineProperty(exports, "bufferCount", {
    enumerable: true,
    get: function() {
        return bufferCount_1.bufferCount;
    }
});
var bufferTime_1 = require("./internal/operators/bufferTime");
Object.defineProperty(exports, "bufferTime", {
    enumerable: true,
    get: function() {
        return bufferTime_1.bufferTime;
    }
});
var bufferToggle_1 = require("./internal/operators/bufferToggle");
Object.defineProperty(exports, "bufferToggle", {
    enumerable: true,
    get: function() {
        return bufferToggle_1.bufferToggle;
    }
});
var bufferWhen_1 = require("./internal/operators/bufferWhen");
Object.defineProperty(exports, "bufferWhen", {
    enumerable: true,
    get: function() {
        return bufferWhen_1.bufferWhen;
    }
});
var catchError_1 = require("./internal/operators/catchError");
Object.defineProperty(exports, "catchError", {
    enumerable: true,
    get: function() {
        return catchError_1.catchError;
    }
});
var combineAll_1 = require("./internal/operators/combineAll");
Object.defineProperty(exports, "combineAll", {
    enumerable: true,
    get: function() {
        return combineAll_1.combineAll;
    }
});
var combineLatestAll_1 = require("./internal/operators/combineLatestAll");
Object.defineProperty(exports, "combineLatestAll", {
    enumerable: true,
    get: function() {
        return combineLatestAll_1.combineLatestAll;
    }
});
var combineLatestWith_1 = require("./internal/operators/combineLatestWith");
Object.defineProperty(exports, "combineLatestWith", {
    enumerable: true,
    get: function() {
        return combineLatestWith_1.combineLatestWith;
    }
});
var concatAll_1 = require("./internal/operators/concatAll");
Object.defineProperty(exports, "concatAll", {
    enumerable: true,
    get: function() {
        return concatAll_1.concatAll;
    }
});
var concatMap_1 = require("./internal/operators/concatMap");
Object.defineProperty(exports, "concatMap", {
    enumerable: true,
    get: function() {
        return concatMap_1.concatMap;
    }
});
var concatMapTo_1 = require("./internal/operators/concatMapTo");
Object.defineProperty(exports, "concatMapTo", {
    enumerable: true,
    get: function() {
        return concatMapTo_1.concatMapTo;
    }
});
var concatWith_1 = require("./internal/operators/concatWith");
Object.defineProperty(exports, "concatWith", {
    enumerable: true,
    get: function() {
        return concatWith_1.concatWith;
    }
});
var connect_1 = require("./internal/operators/connect");
Object.defineProperty(exports, "connect", {
    enumerable: true,
    get: function() {
        return connect_1.connect;
    }
});
var count_1 = require("./internal/operators/count");
Object.defineProperty(exports, "count", {
    enumerable: true,
    get: function() {
        return count_1.count;
    }
});
var debounce_1 = require("./internal/operators/debounce");
Object.defineProperty(exports, "debounce", {
    enumerable: true,
    get: function() {
        return debounce_1.debounce;
    }
});
var debounceTime_1 = require("./internal/operators/debounceTime");
Object.defineProperty(exports, "debounceTime", {
    enumerable: true,
    get: function() {
        return debounceTime_1.debounceTime;
    }
});
var defaultIfEmpty_1 = require("./internal/operators/defaultIfEmpty");
Object.defineProperty(exports, "defaultIfEmpty", {
    enumerable: true,
    get: function() {
        return defaultIfEmpty_1.defaultIfEmpty;
    }
});
var delay_1 = require("./internal/operators/delay");
Object.defineProperty(exports, "delay", {
    enumerable: true,
    get: function() {
        return delay_1.delay;
    }
});
var delayWhen_1 = require("./internal/operators/delayWhen");
Object.defineProperty(exports, "delayWhen", {
    enumerable: true,
    get: function() {
        return delayWhen_1.delayWhen;
    }
});
var dematerialize_1 = require("./internal/operators/dematerialize");
Object.defineProperty(exports, "dematerialize", {
    enumerable: true,
    get: function() {
        return dematerialize_1.dematerialize;
    }
});
var distinct_1 = require("./internal/operators/distinct");
Object.defineProperty(exports, "distinct", {
    enumerable: true,
    get: function() {
        return distinct_1.distinct;
    }
});
var distinctUntilChanged_1 = require("./internal/operators/distinctUntilChanged");
Object.defineProperty(exports, "distinctUntilChanged", {
    enumerable: true,
    get: function() {
        return distinctUntilChanged_1.distinctUntilChanged;
    }
});
var distinctUntilKeyChanged_1 = require("./internal/operators/distinctUntilKeyChanged");
Object.defineProperty(exports, "distinctUntilKeyChanged", {
    enumerable: true,
    get: function() {
        return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
    }
});
var elementAt_1 = require("./internal/operators/elementAt");
Object.defineProperty(exports, "elementAt", {
    enumerable: true,
    get: function() {
        return elementAt_1.elementAt;
    }
});
var endWith_1 = require("./internal/operators/endWith");
Object.defineProperty(exports, "endWith", {
    enumerable: true,
    get: function() {
        return endWith_1.endWith;
    }
});
var every_1 = require("./internal/operators/every");
Object.defineProperty(exports, "every", {
    enumerable: true,
    get: function() {
        return every_1.every;
    }
});
var exhaust_1 = require("./internal/operators/exhaust");
Object.defineProperty(exports, "exhaust", {
    enumerable: true,
    get: function() {
        return exhaust_1.exhaust;
    }
});
var exhaustAll_1 = require("./internal/operators/exhaustAll");
Object.defineProperty(exports, "exhaustAll", {
    enumerable: true,
    get: function() {
        return exhaustAll_1.exhaustAll;
    }
});
var exhaustMap_1 = require("./internal/operators/exhaustMap");
Object.defineProperty(exports, "exhaustMap", {
    enumerable: true,
    get: function() {
        return exhaustMap_1.exhaustMap;
    }
});
var expand_1 = require("./internal/operators/expand");
Object.defineProperty(exports, "expand", {
    enumerable: true,
    get: function() {
        return expand_1.expand;
    }
});
var filter_1 = require("./internal/operators/filter");
Object.defineProperty(exports, "filter", {
    enumerable: true,
    get: function() {
        return filter_1.filter;
    }
});
var finalize_1 = require("./internal/operators/finalize");
Object.defineProperty(exports, "finalize", {
    enumerable: true,
    get: function() {
        return finalize_1.finalize;
    }
});
var find_1 = require("./internal/operators/find");
Object.defineProperty(exports, "find", {
    enumerable: true,
    get: function() {
        return find_1.find;
    }
});
var findIndex_1 = require("./internal/operators/findIndex");
Object.defineProperty(exports, "findIndex", {
    enumerable: true,
    get: function() {
        return findIndex_1.findIndex;
    }
});
var first_1 = require("./internal/operators/first");
Object.defineProperty(exports, "first", {
    enumerable: true,
    get: function() {
        return first_1.first;
    }
});
var groupBy_1 = require("./internal/operators/groupBy");
Object.defineProperty(exports, "groupBy", {
    enumerable: true,
    get: function() {
        return groupBy_1.groupBy;
    }
});
var ignoreElements_1 = require("./internal/operators/ignoreElements");
Object.defineProperty(exports, "ignoreElements", {
    enumerable: true,
    get: function() {
        return ignoreElements_1.ignoreElements;
    }
});
var isEmpty_1 = require("./internal/operators/isEmpty");
Object.defineProperty(exports, "isEmpty", {
    enumerable: true,
    get: function() {
        return isEmpty_1.isEmpty;
    }
});
var last_1 = require("./internal/operators/last");
Object.defineProperty(exports, "last", {
    enumerable: true,
    get: function() {
        return last_1.last;
    }
});
var map_1 = require("./internal/operators/map");
Object.defineProperty(exports, "map", {
    enumerable: true,
    get: function() {
        return map_1.map;
    }
});
var mapTo_1 = require("./internal/operators/mapTo");
Object.defineProperty(exports, "mapTo", {
    enumerable: true,
    get: function() {
        return mapTo_1.mapTo;
    }
});
var materialize_1 = require("./internal/operators/materialize");
Object.defineProperty(exports, "materialize", {
    enumerable: true,
    get: function() {
        return materialize_1.materialize;
    }
});
var max_1 = require("./internal/operators/max");
Object.defineProperty(exports, "max", {
    enumerable: true,
    get: function() {
        return max_1.max;
    }
});
var mergeAll_1 = require("./internal/operators/mergeAll");
Object.defineProperty(exports, "mergeAll", {
    enumerable: true,
    get: function() {
        return mergeAll_1.mergeAll;
    }
});
var flatMap_1 = require("./internal/operators/flatMap");
Object.defineProperty(exports, "flatMap", {
    enumerable: true,
    get: function() {
        return flatMap_1.flatMap;
    }
});
var mergeMap_1 = require("./internal/operators/mergeMap");
Object.defineProperty(exports, "mergeMap", {
    enumerable: true,
    get: function() {
        return mergeMap_1.mergeMap;
    }
});
var mergeMapTo_1 = require("./internal/operators/mergeMapTo");
Object.defineProperty(exports, "mergeMapTo", {
    enumerable: true,
    get: function() {
        return mergeMapTo_1.mergeMapTo;
    }
});
var mergeScan_1 = require("./internal/operators/mergeScan");
Object.defineProperty(exports, "mergeScan", {
    enumerable: true,
    get: function() {
        return mergeScan_1.mergeScan;
    }
});
var mergeWith_1 = require("./internal/operators/mergeWith");
Object.defineProperty(exports, "mergeWith", {
    enumerable: true,
    get: function() {
        return mergeWith_1.mergeWith;
    }
});
var min_1 = require("./internal/operators/min");
Object.defineProperty(exports, "min", {
    enumerable: true,
    get: function() {
        return min_1.min;
    }
});
var multicast_1 = require("./internal/operators/multicast");
Object.defineProperty(exports, "multicast", {
    enumerable: true,
    get: function() {
        return multicast_1.multicast;
    }
});
var observeOn_1 = require("./internal/operators/observeOn");
Object.defineProperty(exports, "observeOn", {
    enumerable: true,
    get: function() {
        return observeOn_1.observeOn;
    }
});
var pairwise_1 = require("./internal/operators/pairwise");
Object.defineProperty(exports, "pairwise", {
    enumerable: true,
    get: function() {
        return pairwise_1.pairwise;
    }
});
var pluck_1 = require("./internal/operators/pluck");
Object.defineProperty(exports, "pluck", {
    enumerable: true,
    get: function() {
        return pluck_1.pluck;
    }
});
var publish_1 = require("./internal/operators/publish");
Object.defineProperty(exports, "publish", {
    enumerable: true,
    get: function() {
        return publish_1.publish;
    }
});
var publishBehavior_1 = require("./internal/operators/publishBehavior");
Object.defineProperty(exports, "publishBehavior", {
    enumerable: true,
    get: function() {
        return publishBehavior_1.publishBehavior;
    }
});
var publishLast_1 = require("./internal/operators/publishLast");
Object.defineProperty(exports, "publishLast", {
    enumerable: true,
    get: function() {
        return publishLast_1.publishLast;
    }
});
var publishReplay_1 = require("./internal/operators/publishReplay");
Object.defineProperty(exports, "publishReplay", {
    enumerable: true,
    get: function() {
        return publishReplay_1.publishReplay;
    }
});
var raceWith_1 = require("./internal/operators/raceWith");
Object.defineProperty(exports, "raceWith", {
    enumerable: true,
    get: function() {
        return raceWith_1.raceWith;
    }
});
var reduce_1 = require("./internal/operators/reduce");
Object.defineProperty(exports, "reduce", {
    enumerable: true,
    get: function() {
        return reduce_1.reduce;
    }
});
var repeat_1 = require("./internal/operators/repeat");
Object.defineProperty(exports, "repeat", {
    enumerable: true,
    get: function() {
        return repeat_1.repeat;
    }
});
var repeatWhen_1 = require("./internal/operators/repeatWhen");
Object.defineProperty(exports, "repeatWhen", {
    enumerable: true,
    get: function() {
        return repeatWhen_1.repeatWhen;
    }
});
var retry_1 = require("./internal/operators/retry");
Object.defineProperty(exports, "retry", {
    enumerable: true,
    get: function() {
        return retry_1.retry;
    }
});
var retryWhen_1 = require("./internal/operators/retryWhen");
Object.defineProperty(exports, "retryWhen", {
    enumerable: true,
    get: function() {
        return retryWhen_1.retryWhen;
    }
});
var refCount_1 = require("./internal/operators/refCount");
Object.defineProperty(exports, "refCount", {
    enumerable: true,
    get: function() {
        return refCount_1.refCount;
    }
});
var sample_1 = require("./internal/operators/sample");
Object.defineProperty(exports, "sample", {
    enumerable: true,
    get: function() {
        return sample_1.sample;
    }
});
var sampleTime_1 = require("./internal/operators/sampleTime");
Object.defineProperty(exports, "sampleTime", {
    enumerable: true,
    get: function() {
        return sampleTime_1.sampleTime;
    }
});
var scan_1 = require("./internal/operators/scan");
Object.defineProperty(exports, "scan", {
    enumerable: true,
    get: function() {
        return scan_1.scan;
    }
});
var sequenceEqual_1 = require("./internal/operators/sequenceEqual");
Object.defineProperty(exports, "sequenceEqual", {
    enumerable: true,
    get: function() {
        return sequenceEqual_1.sequenceEqual;
    }
});
var share_1 = require("./internal/operators/share");
Object.defineProperty(exports, "share", {
    enumerable: true,
    get: function() {
        return share_1.share;
    }
});
var shareReplay_1 = require("./internal/operators/shareReplay");
Object.defineProperty(exports, "shareReplay", {
    enumerable: true,
    get: function() {
        return shareReplay_1.shareReplay;
    }
});
var single_1 = require("./internal/operators/single");
Object.defineProperty(exports, "single", {
    enumerable: true,
    get: function() {
        return single_1.single;
    }
});
var skip_1 = require("./internal/operators/skip");
Object.defineProperty(exports, "skip", {
    enumerable: true,
    get: function() {
        return skip_1.skip;
    }
});
var skipLast_1 = require("./internal/operators/skipLast");
Object.defineProperty(exports, "skipLast", {
    enumerable: true,
    get: function() {
        return skipLast_1.skipLast;
    }
});
var skipUntil_1 = require("./internal/operators/skipUntil");
Object.defineProperty(exports, "skipUntil", {
    enumerable: true,
    get: function() {
        return skipUntil_1.skipUntil;
    }
});
var skipWhile_1 = require("./internal/operators/skipWhile");
Object.defineProperty(exports, "skipWhile", {
    enumerable: true,
    get: function() {
        return skipWhile_1.skipWhile;
    }
});
var startWith_1 = require("./internal/operators/startWith");
Object.defineProperty(exports, "startWith", {
    enumerable: true,
    get: function() {
        return startWith_1.startWith;
    }
});
var subscribeOn_1 = require("./internal/operators/subscribeOn");
Object.defineProperty(exports, "subscribeOn", {
    enumerable: true,
    get: function() {
        return subscribeOn_1.subscribeOn;
    }
});
var switchAll_1 = require("./internal/operators/switchAll");
Object.defineProperty(exports, "switchAll", {
    enumerable: true,
    get: function() {
        return switchAll_1.switchAll;
    }
});
var switchMap_1 = require("./internal/operators/switchMap");
Object.defineProperty(exports, "switchMap", {
    enumerable: true,
    get: function() {
        return switchMap_1.switchMap;
    }
});
var switchMapTo_1 = require("./internal/operators/switchMapTo");
Object.defineProperty(exports, "switchMapTo", {
    enumerable: true,
    get: function() {
        return switchMapTo_1.switchMapTo;
    }
});
var switchScan_1 = require("./internal/operators/switchScan");
Object.defineProperty(exports, "switchScan", {
    enumerable: true,
    get: function() {
        return switchScan_1.switchScan;
    }
});
var take_1 = require("./internal/operators/take");
Object.defineProperty(exports, "take", {
    enumerable: true,
    get: function() {
        return take_1.take;
    }
});
var takeLast_1 = require("./internal/operators/takeLast");
Object.defineProperty(exports, "takeLast", {
    enumerable: true,
    get: function() {
        return takeLast_1.takeLast;
    }
});
var takeUntil_1 = require("./internal/operators/takeUntil");
Object.defineProperty(exports, "takeUntil", {
    enumerable: true,
    get: function() {
        return takeUntil_1.takeUntil;
    }
});
var takeWhile_1 = require("./internal/operators/takeWhile");
Object.defineProperty(exports, "takeWhile", {
    enumerable: true,
    get: function() {
        return takeWhile_1.takeWhile;
    }
});
var tap_1 = require("./internal/operators/tap");
Object.defineProperty(exports, "tap", {
    enumerable: true,
    get: function() {
        return tap_1.tap;
    }
});
var throttle_1 = require("./internal/operators/throttle");
Object.defineProperty(exports, "throttle", {
    enumerable: true,
    get: function() {
        return throttle_1.throttle;
    }
});
var throttleTime_1 = require("./internal/operators/throttleTime");
Object.defineProperty(exports, "throttleTime", {
    enumerable: true,
    get: function() {
        return throttleTime_1.throttleTime;
    }
});
var throwIfEmpty_1 = require("./internal/operators/throwIfEmpty");
Object.defineProperty(exports, "throwIfEmpty", {
    enumerable: true,
    get: function() {
        return throwIfEmpty_1.throwIfEmpty;
    }
});
var timeInterval_1 = require("./internal/operators/timeInterval");
Object.defineProperty(exports, "timeInterval", {
    enumerable: true,
    get: function() {
        return timeInterval_1.timeInterval;
    }
});
var timeout_2 = require("./internal/operators/timeout");
Object.defineProperty(exports, "timeout", {
    enumerable: true,
    get: function() {
        return timeout_2.timeout;
    }
});
var timeoutWith_1 = require("./internal/operators/timeoutWith");
Object.defineProperty(exports, "timeoutWith", {
    enumerable: true,
    get: function() {
        return timeoutWith_1.timeoutWith;
    }
});
var timestamp_1 = require("./internal/operators/timestamp");
Object.defineProperty(exports, "timestamp", {
    enumerable: true,
    get: function() {
        return timestamp_1.timestamp;
    }
});
var toArray_1 = require("./internal/operators/toArray");
Object.defineProperty(exports, "toArray", {
    enumerable: true,
    get: function() {
        return toArray_1.toArray;
    }
});
var window_1 = require("./internal/operators/window");
Object.defineProperty(exports, "window", {
    enumerable: true,
    get: function() {
        return window_1.window;
    }
});
var windowCount_1 = require("./internal/operators/windowCount");
Object.defineProperty(exports, "windowCount", {
    enumerable: true,
    get: function() {
        return windowCount_1.windowCount;
    }
});
var windowTime_1 = require("./internal/operators/windowTime");
Object.defineProperty(exports, "windowTime", {
    enumerable: true,
    get: function() {
        return windowTime_1.windowTime;
    }
});
var windowToggle_1 = require("./internal/operators/windowToggle");
Object.defineProperty(exports, "windowToggle", {
    enumerable: true,
    get: function() {
        return windowToggle_1.windowToggle;
    }
});
var windowWhen_1 = require("./internal/operators/windowWhen");
Object.defineProperty(exports, "windowWhen", {
    enumerable: true,
    get: function() {
        return windowWhen_1.windowWhen;
    }
});
var withLatestFrom_1 = require("./internal/operators/withLatestFrom");
Object.defineProperty(exports, "withLatestFrom", {
    enumerable: true,
    get: function() {
        return withLatestFrom_1.withLatestFrom;
    }
});
var zipAll_1 = require("./internal/operators/zipAll");
Object.defineProperty(exports, "zipAll", {
    enumerable: true,
    get: function() {
        return zipAll_1.zipAll;
    }
});
var zipWith_1 = require("./internal/operators/zipWith");
Object.defineProperty(exports, "zipWith", {
    enumerable: true,
    get: function() {
        return zipWith_1.zipWith;
    }
});

},{"./internal/Observable":"6XfFQ","./internal/observable/ConnectableObservable":"3B9kX","./internal/symbol/observable":"3EZgt","./internal/observable/dom/animationFrames":"25HgK","./internal/Subject":"CTCrE","./internal/BehaviorSubject":"1BSll","./internal/ReplaySubject":"7ewvk","./internal/AsyncSubject":"OZRwe","./internal/scheduler/asap":"6EbLW","./internal/scheduler/async":"5ysvr","./internal/scheduler/queue":"3YH6F","./internal/scheduler/animationFrame":"5T66N","./internal/scheduler/VirtualTimeScheduler":"xGadC","./internal/Scheduler":"4uCy0","./internal/Subscription":"55zJP","./internal/Subscriber":"1ew17","./internal/Notification":"6rp8f","./internal/util/pipe":"2vIS3","./internal/util/noop":"2s9LI","./internal/util/identity":"2QJLj","./internal/util/isObservable":"3VXNH","./internal/lastValueFrom":"1W7DR","./internal/firstValueFrom":"5wc49","./internal/util/ArgumentOutOfRangeError":"4Xzvo","./internal/util/EmptyError":"63brV","./internal/util/NotFoundError":"ZITwI","./internal/util/ObjectUnsubscribedError":"11G9r","./internal/util/SequenceError":"3yeE8","./internal/operators/timeout":"4fjS3","./internal/util/UnsubscriptionError":"2Cu79","./internal/observable/bindCallback":"5GyYi","./internal/observable/bindNodeCallback":"6Uys1","./internal/observable/combineLatest":"wOUJf","./internal/observable/concat":"3qROP","./internal/observable/connectable":"2YaUG","./internal/observable/defer":"6CxUm","./internal/observable/empty":"2Zbmy","./internal/observable/forkJoin":"1UQr7","./internal/observable/from":"Fatr8","./internal/observable/fromEvent":"4a11j","./internal/observable/fromEventPattern":"21Udi","./internal/observable/generate":"3pBIw","./internal/observable/iif":"5ps6j","./internal/observable/interval":"aMShB","./internal/observable/merge":"3u8OG","./internal/observable/never":"2htjn","./internal/observable/of":"745Yx","./internal/observable/onErrorResumeNext":"78agF","./internal/observable/pairs":"3vJ31","./internal/observable/partition":"7lv9y","./internal/observable/race":"1MY0M","./internal/observable/range":"1MLuR","./internal/observable/throwError":"6xzeK","./internal/observable/timer":"MBto6","./internal/observable/using":"1yWKa","./internal/observable/zip":"3Wymr","./internal/scheduled/scheduled":"3LGAO","./internal/types":"69AK9","./internal/config":"4ddy5","./internal/operators/audit":"75SMu","./internal/operators/auditTime":"PKYwH","./internal/operators/buffer":"6n1cy","./internal/operators/bufferCount":"3M5dW","./internal/operators/bufferTime":"7tNuJ","./internal/operators/bufferToggle":"5JyKb","./internal/operators/bufferWhen":"6DFbp","./internal/operators/catchError":"6OsqQ","./internal/operators/combineAll":"4FwjR","./internal/operators/combineLatestAll":"7c2Jv","./internal/operators/combineLatestWith":"t4ehX","./internal/operators/concatAll":"2P5sS","./internal/operators/concatMap":"68xy2","./internal/operators/concatMapTo":"1kQZJ","./internal/operators/concatWith":"4c2En","./internal/operators/connect":"50Bzu","./internal/operators/count":"5faBf","./internal/operators/debounce":"67FsD","./internal/operators/debounceTime":"4Upo7","./internal/operators/defaultIfEmpty":"2I3x9","./internal/operators/delay":"6aRaf","./internal/operators/delayWhen":"8SVw1","./internal/operators/dematerialize":"3oX5j","./internal/operators/distinct":"3ORk0","./internal/operators/distinctUntilChanged":"6aPCt","./internal/operators/distinctUntilKeyChanged":"17gnY","./internal/operators/elementAt":"5XXxa","./internal/operators/endWith":"4RjZA","./internal/operators/every":"7fEfN","./internal/operators/exhaust":"6cmhn","./internal/operators/exhaustAll":"6R2EU","./internal/operators/exhaustMap":"7MBzU","./internal/operators/expand":"5TMHk","./internal/operators/filter":"2N5w7","./internal/operators/finalize":"3kxvl","./internal/operators/find":"3TWil","./internal/operators/findIndex":"45zuM","./internal/operators/first":"N6ye1","./internal/operators/groupBy":"4QN6N","./internal/operators/ignoreElements":"3Y2dk","./internal/operators/isEmpty":"4nR9K","./internal/operators/last":"4m9Y7","./internal/operators/map":"7vINI","./internal/operators/mapTo":"1gdEu","./internal/operators/materialize":"4BEyj","./internal/operators/max":"57zqa","./internal/operators/mergeAll":"3xK3Y","./internal/operators/flatMap":"6hXFK","./internal/operators/mergeMap":"4fW0U","./internal/operators/mergeMapTo":"5p4nZ","./internal/operators/mergeScan":"4l3Oi","./internal/operators/mergeWith":"6LlCu","./internal/operators/min":"6jdSe","./internal/operators/multicast":"3iTSS","./internal/operators/observeOn":"4GztM","./internal/operators/pairwise":"65oXR","./internal/operators/pluck":"yepFU","./internal/operators/publish":"39qzq","./internal/operators/publishBehavior":"2YMyb","./internal/operators/publishLast":"4yeyu","./internal/operators/publishReplay":"5jD4L","./internal/operators/raceWith":"2v4aE","./internal/operators/reduce":"3TxGZ","./internal/operators/repeat":"5y2D2","./internal/operators/repeatWhen":"1i6sg","./internal/operators/retry":"2eQI2","./internal/operators/retryWhen":"6LMq8","./internal/operators/refCount":"bJjLi","./internal/operators/sample":"1lKzw","./internal/operators/sampleTime":"6Fu8N","./internal/operators/scan":"6ImHt","./internal/operators/sequenceEqual":"M5aEq","./internal/operators/share":"3vbZZ","./internal/operators/shareReplay":"H0qLJ","./internal/operators/single":"3HVwH","./internal/operators/skip":"1Zvvz","./internal/operators/skipLast":"53Cgb","./internal/operators/skipUntil":"3oGQD","./internal/operators/skipWhile":"5Ncfr","./internal/operators/startWith":"1VLVH","./internal/operators/subscribeOn":"3ycX1","./internal/operators/switchAll":"6Nq3y","./internal/operators/switchMap":"4GFqi","./internal/operators/switchMapTo":"1wyvB","./internal/operators/switchScan":"5MvyL","./internal/operators/take":"1xTbv","./internal/operators/takeLast":"4EHbt","./internal/operators/takeUntil":"24StW","./internal/operators/takeWhile":"74gW2","./internal/operators/tap":"60jQz","./internal/operators/throttle":"2K2ad","./internal/operators/throttleTime":"2adRM","./internal/operators/throwIfEmpty":"Cm5Iw","./internal/operators/timeInterval":"6I8Z5","./internal/operators/timeoutWith":"5TIWv","./internal/operators/timestamp":"4nqSg","./internal/operators/toArray":"527FC","./internal/operators/window":"105g5","./internal/operators/windowCount":"1quEw","./internal/operators/windowTime":"3AzuH","./internal/operators/windowToggle":"4GYVF","./internal/operators/windowWhen":"4AibY","./internal/operators/withLatestFrom":"6sbEL","./internal/operators/zipAll":"6NXh1","./internal/operators/zipWith":"4rW6Y"}],"6XfFQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Observable = void 0;
var Subscriber_1 = require("./Subscriber");
var Subscription_1 = require("./Subscription");
var observable_1 = require("./symbol/observable");
var pipe_1 = require("./util/pipe");
var config_1 = require("./config");
var isFunction_1 = require("./util/isFunction");
var errorContext_1 = require("./util/errorContext");
var Observable = function() {
    function Observable1(subscribe) {
        if (subscribe) this._subscribe = subscribe;
    }
    Observable1.prototype.lift = function(operator) {
        var observable = new Observable1();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable1.prototype.subscribe = function(observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
        errorContext_1.errorContext(function() {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable1.prototype._trySubscribe = function(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            sink.error(err);
        }
    };
    Observable1.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function(value) {
                try {
                    next(value);
                } catch (err) {
                    reject(err);
                    subscription === null || subscription === void 0 || subscription.unsubscribe();
                }
            }, reject, resolve);
        });
    };
    Observable1.prototype._subscribe = function(subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable1.prototype[observable_1.observable] = function() {
        return this;
    };
    Observable1.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++)operations[_i] = arguments[_i];
        return operations.length ? pipe_1.pipeFromArray(operations)(this) : this;
    };
    Observable1.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
                return value = x;
            }, function(err) {
                return reject(err);
            }, function() {
                return resolve(value);
            });
        });
    };
    Observable1.create = function(subscribe) {
        return new Observable1(subscribe);
    };
    return Observable1;
}();
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
}
function isSubscriber(value) {
    return value && value instanceof Subscriber_1.Subscriber || isObserver(value) && Subscription_1.isSubscription(value);
}

},{"./Subscriber":"1ew17","./Subscription":"55zJP","./symbol/observable":"3EZgt","./util/pipe":"2vIS3","./config":"4ddy5","./util/isFunction":"1rux0","./util/errorContext":"2nVow"}],"1ew17":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;
var isFunction_1 = require("./util/isFunction");
var Subscription_1 = require("./Subscription");
var config_1 = require("./config");
var reportUnhandledError_1 = require("./util/reportUnhandledError");
var noop_1 = require("./util/noop");
var NotificationFactories_1 = require("./NotificationFactories");
var timeoutProvider_1 = require("./scheduler/timeoutProvider");
var errorContext_1 = require("./util/errorContext");
var Subscriber1 = function(_super) {
    __extends(Subscriber2, _super);
    function Subscriber2(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (Subscription_1.isSubscription(destination)) destination.add(_this);
        } else _this.destination = exports.EMPTY_OBSERVER;
        return _this;
    }
    Subscriber2.create = function(next, error, complete) {
        return new SafeSubscriber1(next, error, complete);
    };
    Subscriber2.prototype.next = function(value) {
        if (this.isStopped) handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
        else this._next(value);
    };
    Subscriber2.prototype.error = function(err) {
        if (this.isStopped) handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber2.prototype.complete = function() {
        if (this.isStopped) handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber2.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
    };
    Subscriber2.prototype._error = function(err) {
        try {
            this.destination.error(err);
        } finally{
            this.unsubscribe();
        }
    };
    Subscriber2.prototype._complete = function() {
        try {
            this.destination.complete();
        } finally{
            this.unsubscribe();
        }
    };
    return Subscriber2;
}(Subscription_1.Subscription);
exports.Subscriber = Subscriber1;
var SafeSubscriber1 = function(_super) {
    __extends(SafeSubscriber2, _super);
    function SafeSubscriber2(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var next;
        if (isFunction_1.isFunction(observerOrNext)) next = observerOrNext;
        else if (observerOrNext) {
            next = observerOrNext.next, error = observerOrNext.error, complete = observerOrNext.complete;
            var context_1;
            if (_this && config_1.config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function() {
                    return _this.unsubscribe();
                };
            } else context_1 = observerOrNext;
            next = next === null || next === void 0 ? void 0 : next.bind(context_1);
            error = error === null || error === void 0 ? void 0 : error.bind(context_1);
            complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
        }
        _this.destination = {
            next: next ? wrapForErrorHandling(next, _this) : noop_1.noop,
            error: wrapForErrorHandling(error !== null && error !== void 0 ? error : defaultErrorHandler, _this),
            complete: complete ? wrapForErrorHandling(complete, _this) : noop_1.noop
        };
        return _this;
    }
    return SafeSubscriber2;
}(Subscriber1);
exports.SafeSubscriber = SafeSubscriber1;
function wrapForErrorHandling(handler, instance) {
    return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        try {
            handler.apply(void 0, __spreadArray([], __read(args)));
        } catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) errorContext_1.captureError(err);
            else reportUnhandledError_1.reportUnhandledError(err);
        }
    };
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config_1.config.onStoppedNotification;
    onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
    });
}
exports.EMPTY_OBSERVER = {
    closed: true,
    next: noop_1.noop,
    error: defaultErrorHandler,
    complete: noop_1.noop
};

},{"./util/isFunction":"1rux0","./Subscription":"55zJP","./config":"4ddy5","./util/reportUnhandledError":"2980V","./util/noop":"2s9LI","./NotificationFactories":"LKkZb","./scheduler/timeoutProvider":"1Wqve","./util/errorContext":"2nVow"}],"1rux0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isFunction = void 0;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;

},{}],"55zJP":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;
var isFunction_1 = require("./util/isFunction");
var UnsubscriptionError_1 = require("./util/UnsubscriptionError");
var arrRemove_1 = require("./util/arrRemove");
var Subscription = function() {
    function Subscription1(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._teardowns = null;
    }
    Subscription1.prototype.unsubscribe = function() {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) try {
                    for(var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()){
                        var parent_1 = _parentage_1_1.value;
                        parent_1.remove(this);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
                else _parentage.remove(this);
            }
            var initialTeardown = this.initialTeardown;
            if (isFunction_1.isFunction(initialTeardown)) try {
                initialTeardown();
            } catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [
                    e
                ];
            }
            var _teardowns = this._teardowns;
            if (_teardowns) {
                this._teardowns = null;
                try {
                    for(var _teardowns_1 = __values(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()){
                        var teardown_1 = _teardowns_1_1.value;
                        try {
                            execTeardown(teardown_1);
                        } catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            else errors.push(err);
                        }
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return)) _b.call(_teardowns_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
            }
            if (errors) throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription1.prototype.add = function(teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) execTeardown(teardown);
            else {
                if (teardown instanceof Subscription1) {
                    if (teardown.closed || teardown._hasParent(this)) return;
                    teardown._addParent(this);
                }
                (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription1.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription1.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [
            _parentage,
            parent
        ] : parent;
    };
    Subscription1.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) this._parentage = null;
        else if (Array.isArray(_parentage)) arrRemove_1.arrRemove(_parentage, parent);
    };
    Subscription1.prototype.remove = function(teardown) {
        var _teardowns = this._teardowns;
        _teardowns && arrRemove_1.arrRemove(_teardowns, teardown);
        if (teardown instanceof Subscription1) teardown._removeParent(this);
    };
    Subscription1.EMPTY = (function() {
        var empty = new Subscription1();
        empty.closed = true;
        return empty;
    })();
    return Subscription1;
}();
exports.Subscription = Subscription;
exports.EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return value instanceof Subscription || value && 'closed' in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe);
}
exports.isSubscription = isSubscription;
function execTeardown(teardown) {
    if (isFunction_1.isFunction(teardown)) teardown();
    else teardown.unsubscribe();
}

},{"./util/isFunction":"1rux0","./util/UnsubscriptionError":"2Cu79","./util/arrRemove":"4Y9kk"}],"2Cu79":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnsubscriptionError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.UnsubscriptionError = createErrorClass_1.createErrorClass(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

},{"./createErrorClass":"4TwIo"}],"4TwIo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createErrorClass = void 0;
function createErrorClass(createImpl) {
    var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
exports.createErrorClass = createErrorClass;

},{}],"4Y9kk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arrRemove = void 0;
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
exports.arrRemove = arrRemove;

},{}],"4ddy5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.config = void 0;
exports.config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
};

},{}],"2980V":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reportUnhandledError = void 0;
var config_1 = require("../config");
var timeoutProvider_1 = require("../scheduler/timeoutProvider");
function reportUnhandledError(err) {
    timeoutProvider_1.timeoutProvider.setTimeout(function() {
        var onUnhandledError = config_1.config.onUnhandledError;
        if (onUnhandledError) onUnhandledError(err);
        else throw err;
    });
}
exports.reportUnhandledError = reportUnhandledError;

},{"../config":"4ddy5","../scheduler/timeoutProvider":"1Wqve"}],"1Wqve":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timeoutProvider = void 0;
exports.timeoutProvider = {
    setTimeout: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = exports.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, __spreadArray([], __read(args)));
    },
    clearTimeout: function(handle) {
        var delegate = exports.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined
};

},{}],"2s9LI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noop = void 0;
function noop() {
}
exports.noop = noop;

},{}],"LKkZb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = void 0;
exports.COMPLETE_NOTIFICATION = (function() {
    return createNotification('C', undefined, undefined);
})();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
exports.errorNotification = errorNotification;
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
exports.nextNotification = nextNotification;
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error
    };
}
exports.createNotification = createNotification;

},{}],"2nVow":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.captureError = exports.errorContext = void 0;
var config_1 = require("../config");
var context = null;
function errorContext(cb) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) context = {
            errorThrown: false,
            error: null
        };
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) throw error;
        }
    } else cb();
}
exports.errorContext = errorContext;
function captureError(err) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
exports.captureError = captureError;

},{"../config":"4ddy5"}],"3EZgt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.observable = void 0;
exports.observable = (function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

},{}],"2vIS3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pipeFromArray = exports.pipe = void 0;
var identity_1 = require("./identity");
function pipe() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++)fns[_i] = arguments[_i];
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) return identity_1.identity;
    if (fns.length === 1) return fns[0];
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
}
exports.pipeFromArray = pipeFromArray;

},{"./identity":"2QJLj"}],"2QJLj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.identity = void 0;
function identity(x) {
    return x;
}
exports.identity = identity;

},{}],"3B9kX":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectableObservable = void 0;
var Observable_1 = require("../Observable");
var Subscription_1 = require("../Subscription");
var refCount_1 = require("../operators/refCount");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
var lift_1 = require("../util/lift");
var ConnectableObservable1 = function(_super) {
    __extends(ConnectableObservable2, _super);
    function ConnectableObservable2(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (lift_1.hasLift(source)) _this.lift = source.lift;
        return _this;
    }
    ConnectableObservable2.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable2.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) this._subject = this.subjectFactory();
        return this._subject;
    };
    ConnectableObservable2.prototype._teardown = function() {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 || _connection.unsubscribe();
    };
    ConnectableObservable2.prototype.connect = function() {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription_1.Subscription();
            var subject_1 = this.getSubject();
            connection.add(this.source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subject_1, undefined, function() {
                _this._teardown();
                subject_1.complete();
            }, function(err) {
                _this._teardown();
                subject_1.error(err);
            }, function() {
                return _this._teardown();
            })));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable2.prototype.refCount = function() {
        return refCount_1.refCount()(this);
    };
    return ConnectableObservable2;
}(Observable_1.Observable);
exports.ConnectableObservable = ConnectableObservable1;

},{"../Observable":"6XfFQ","../Subscription":"55zJP","../operators/refCount":"bJjLi","../operators/OperatorSubscriber":"3gY6m","../util/lift":"3Hhm5"}],"bJjLi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.refCount = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function refCount() {
    return lift_1.operate(function(source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, undefined, undefined, function() {
            if (!source || source._refCount <= 0 || 0 < --source._refCount) {
                connection = null;
                return;
            }
            var sharedConnection = source._connection;
            var conn = connection;
            connection = null;
            if (sharedConnection && (!conn || sharedConnection === conn)) sharedConnection.unsubscribe();
            subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) connection = source.connect();
    });
}
exports.refCount = refCount;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"3Hhm5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.operate = exports.hasLift = void 0;
var isFunction_1 = require("./isFunction");
function hasLift(source) {
    return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
exports.hasLift = hasLift;
function operate(init) {
    return function(source) {
        if (hasLift(source)) return source.lift(function(liftedSource) {
            try {
                return init(liftedSource, this);
            } catch (err) {
                this.error(err);
            }
        });
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
exports.operate = operate;

},{"./isFunction":"1rux0"}],"3gY6m":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperatorSubscriber = void 0;
var Subscriber_1 = require("../Subscriber");
var OperatorSubscriber1 = function(_super) {
    __extends(OperatorSubscriber2, _super);
    function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this._next = onNext ? function(value) {
            try {
                onNext(value);
            } catch (err) {
                destination.error(err);
            }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
            try {
                onError(err);
            } catch (err1) {
                destination.error(err1);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
            try {
                onComplete();
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber2.prototype.unsubscribe = function() {
        var _a;
        var closed = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed && ((_a = this.onFinalize) === null || _a === void 0 || _a.call(this));
    };
    return OperatorSubscriber2;
}(Subscriber_1.Subscriber);
exports.OperatorSubscriber = OperatorSubscriber1;

},{"../Subscriber":"1ew17"}],"25HgK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animationFrames = void 0;
var Observable_1 = require("../../Observable");
var Subscription_1 = require("../../Subscription");
var performanceTimestampProvider_1 = require("../../scheduler/performanceTimestampProvider");
var animationFrameProvider_1 = require("../../scheduler/animationFrameProvider");
function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
exports.animationFrames = animationFrames;
function animationFramesFactory(timestampProvider) {
    var schedule = animationFrameProvider_1.animationFrameProvider.schedule;
    return new Observable_1.Observable(function(subscriber) {
        var subscription = new Subscription_1.Subscription();
        var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
        var start = provider.now();
        var run = function(timestamp) {
            var now = provider.now();
            subscriber.next({
                timestamp: timestampProvider ? now : timestamp,
                elapsed: now - start
            });
            if (!subscriber.closed) subscription.add(schedule(run));
        };
        subscription.add(schedule(run));
        return subscription;
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();

},{"../../Observable":"6XfFQ","../../Subscription":"55zJP","../../scheduler/performanceTimestampProvider":"4ZrEN","../../scheduler/animationFrameProvider":"5lHAX"}],"4ZrEN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.performanceTimestampProvider = void 0;
exports.performanceTimestampProvider = {
    now: function() {
        return (exports.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: undefined
};

},{}],"5lHAX":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animationFrameProvider = void 0;
var Subscription_1 = require("../Subscription");
exports.animationFrameProvider = {
    schedule: function(callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = exports.animationFrameProvider.delegate;
        if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function(timestamp) {
            cancel = undefined;
            callback(timestamp);
        });
        return new Subscription_1.Subscription(function() {
            return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
        });
    },
    requestAnimationFrame: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    cancelAnimationFrame: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    delegate: undefined
};

},{"../Subscription":"55zJP"}],"CTCrE":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnonymousSubject = exports.Subject = void 0;
var Observable_1 = require("./Observable");
var Subscription_1 = require("./Subscription");
var ObjectUnsubscribedError_1 = require("./util/ObjectUnsubscribedError");
var arrRemove_1 = require("./util/arrRemove");
var errorContext_1 = require("./util/errorContext");
var Subject1 = function(_super) {
    __extends(Subject2, _super);
    function Subject2() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject2.prototype.lift = function(operator) {
        var subject = new AnonymousSubject1(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject2.prototype._throwIfClosed = function() {
        if (this.closed) throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    };
    Subject2.prototype.next = function(value) {
        var _this = this;
        errorContext_1.errorContext(function() {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                var copy = _this.observers.slice();
                try {
                    for(var copy_1 = __values(copy), copy_1_1 = copy_1.next(); !copy_1_1.done; copy_1_1 = copy_1.next()){
                        var observer = copy_1_1.value;
                        observer.next(value);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (copy_1_1 && !copy_1_1.done && (_a = copy_1.return)) _a.call(copy_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
            }
        });
    };
    Subject2.prototype.error = function(err) {
        var _this = this;
        errorContext_1.errorContext(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while(observers.length)observers.shift().error(err);
            }
        });
    };
    Subject2.prototype.complete = function() {
        var _this = this;
        errorContext_1.errorContext(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while(observers.length)observers.shift().complete();
            }
        });
    };
    Subject2.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = null;
    };
    Object.defineProperty(Subject2.prototype, "observed", {
        get: function() {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject2.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject2.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject2.prototype._innerSubscribe = function(subscriber) {
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        return hasError || isStopped ? Subscription_1.EMPTY_SUBSCRIPTION : (observers.push(subscriber), new Subscription_1.Subscription(function() {
            return arrRemove_1.arrRemove(observers, subscriber);
        }));
    };
    Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) subscriber.error(thrownError);
        else if (isStopped) subscriber.complete();
    };
    Subject2.prototype.asObservable = function() {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject2.create = function(destination, source) {
        return new AnonymousSubject1(destination, source);
    };
    return Subject2;
}(Observable_1.Observable);
exports.Subject = Subject1;
var AnonymousSubject1 = function(_super) {
    __extends(AnonymousSubject2, _super);
    function AnonymousSubject2(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject2.prototype.next = function(value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 || _b.call(_a, value);
    };
    AnonymousSubject2.prototype.error = function(err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 || _b.call(_a, err);
    };
    AnonymousSubject2.prototype.complete = function() {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 || _b.call(_a);
    };
    AnonymousSubject2.prototype._subscribe = function(subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject2;
}(Subject1);
exports.AnonymousSubject = AnonymousSubject1;

},{"./Observable":"6XfFQ","./Subscription":"55zJP","./util/ObjectUnsubscribedError":"11G9r","./util/arrRemove":"4Y9kk","./util/errorContext":"2nVow"}],"11G9r":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ObjectUnsubscribedError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function(_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

},{"./createErrorClass":"4TwIo"}],"1BSll":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BehaviorSubject = void 0;
var Subject_1 = require("./Subject");
var BehaviorSubject1 = function(_super) {
    __extends(BehaviorSubject2, _super);
    function BehaviorSubject2(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject2.prototype, "value", {
        get: function() {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject2.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject2.prototype.getValue = function() {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) throw thrownError;
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject2.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject2;
}(Subject_1.Subject);
exports.BehaviorSubject = BehaviorSubject1;

},{"./Subject":"CTCrE"}],"7ewvk":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReplaySubject = void 0;
var Subject_1 = require("./Subject");
var dateTimestampProvider_1 = require("./scheduler/dateTimestampProvider");
var ReplaySubject1 = function(_super) {
    __extends(ReplaySubject2, _super);
    function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) _bufferSize = Infinity;
        if (_windowTime === void 0) _windowTime = Infinity;
        if (_timestampProvider === void 0) _timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
    }
    ReplaySubject2.prototype.next = function(value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
            _buffer.push(value);
            !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject2.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for(var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2)subscriber.next(copy[i]);
        this._checkFinalizedStatuses(subscriber);
        return subscription;
    };
    ReplaySubject2.prototype._trimBuffer = function() {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
            var now = _timestampProvider.now();
            var last = 0;
            for(var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2)last = i;
            last && _buffer.splice(0, last + 1);
        }
    };
    return ReplaySubject2;
}(Subject_1.Subject);
exports.ReplaySubject = ReplaySubject1;

},{"./Subject":"CTCrE","./scheduler/dateTimestampProvider":"30F63"}],"30F63":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dateTimestampProvider = void 0;
exports.dateTimestampProvider = {
    now: function() {
        return (exports.dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined
};

},{}],"OZRwe":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncSubject = void 0;
var Subject_1 = require("./Subject");
var AsyncSubject1 = function(_super) {
    __extends(AsyncSubject2, _super);
    function AsyncSubject2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
    }
    AsyncSubject2.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) subscriber.error(thrownError);
        else if (isStopped) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    };
    AsyncSubject2.prototype.next = function(value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    };
    AsyncSubject2.prototype.complete = function() {
        var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && _super.prototype.next.call(this, _value);
            _super.prototype.complete.call(this);
        }
    };
    return AsyncSubject2;
}(Subject_1.Subject);
exports.AsyncSubject = AsyncSubject1;

},{"./Subject":"CTCrE"}],"6EbLW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.asap = exports.asapScheduler = void 0;
var AsapAction_1 = require("./AsapAction");
var AsapScheduler_1 = require("./AsapScheduler");
exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
exports.asap = exports.asapScheduler;

},{"./AsapAction":"6JMMr","./AsapScheduler":"Nxe97"}],"6JMMr":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsapAction = void 0;
var AsyncAction_1 = require("./AsyncAction");
var immediateProvider_1 = require("./immediateProvider");
var AsapAction1 = function(_super) {
    __extends(AsapAction2, _super);
    function AsapAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
    };
    AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        if (scheduler.actions.length === 0) {
            immediateProvider_1.immediateProvider.clearImmediate(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction2;
}(AsyncAction_1.AsyncAction);
exports.AsapAction = AsapAction1;

},{"./AsyncAction":"KAR0W","./immediateProvider":"4byTx"}],"KAR0W":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncAction = void 0;
var Action_1 = require("./Action");
var intervalProvider_1 = require("./intervalProvider");
var arrRemove_1 = require("../util/arrRemove");
var AsyncAction1 = function(_super) {
    __extends(AsyncAction2, _super);
    function AsyncAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (this.closed) return this;
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) this.id = this.recycleAsyncId(scheduler, id, delay);
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) delay = 0;
        return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && this.delay === delay && this.pending === false) return id;
        intervalProvider_1.intervalProvider.clearInterval(id);
        return undefined;
    };
    AsyncAction2.prototype.execute = function(state, delay) {
        if (this.closed) return new Error('executing a cancelled action');
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) return error;
        else if (this.pending === false && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    };
    AsyncAction2.prototype._execute = function(state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction2.prototype.unsubscribe = function() {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove_1.arrRemove(actions, this);
            if (id != null) this.id = this.recycleAsyncId(scheduler, id, null);
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction2;
}(Action_1.Action);
exports.AsyncAction = AsyncAction1;

},{"./Action":"2DZ2a","./intervalProvider":"4QzKq","../util/arrRemove":"4Y9kk"}],"2DZ2a":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Action = void 0;
var Subscription_1 = require("../Subscription");
var Action1 = function(_super) {
    __extends(Action2, _super);
    function Action2(scheduler, work) {
        return _super.call(this) || this;
    }
    Action2.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        return this;
    };
    return Action2;
}(Subscription_1.Subscription);
exports.Action = Action1;

},{"../Subscription":"55zJP"}],"4QzKq":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.intervalProvider = void 0;
exports.intervalProvider = {
    setInterval: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = exports.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) || setInterval).apply(void 0, __spreadArray([], __read(args)));
    },
    clearInterval: function(handle) {
        var delegate = exports.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined
};

},{}],"4byTx":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.immediateProvider = void 0;
var Immediate_1 = require("../util/Immediate");
var setImmediate = Immediate_1.Immediate.setImmediate, clearImmediate = Immediate_1.Immediate.clearImmediate;
exports.immediateProvider = {
    setImmediate: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
    },
    clearImmediate: function(handle) {
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: undefined
};

},{"../util/Immediate":"5DcJq"}],"5DcJq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TestTools = exports.Immediate = void 0;
var nextHandle = 1;
var resolved;
var activeHandles = {
};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
exports.Immediate = {
    setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) resolved = Promise.resolve();
        resolved.then(function() {
            return findAndClearHandle(handle) && cb();
        });
        return handle;
    },
    clearImmediate: function(handle) {
        findAndClearHandle(handle);
    }
};
exports.TestTools = {
    pending: function() {
        return Object.keys(activeHandles).length;
    }
};

},{}],"Nxe97":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsapScheduler = void 0;
var AsyncScheduler_1 = require("./AsyncScheduler");
var AsapScheduler1 = function(_super) {
    __extends(AsapScheduler2, _super);
    function AsapScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler2.prototype.flush = function(action) {
        this._active = true;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        action = action || actions.shift();
        var count = actions.length;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while ((++index) < count && (action = actions.shift()))
        this._active = false;
        if (error) {
            while((++index) < count && (action = actions.shift()))action.unsubscribe();
            throw error;
        }
    };
    return AsapScheduler2;
}(AsyncScheduler_1.AsyncScheduler);
exports.AsapScheduler = AsapScheduler1;

},{"./AsyncScheduler":"38LRN"}],"38LRN":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncScheduler = void 0;
var Scheduler_1 = require("../Scheduler");
var AsyncScheduler1 = function(_super) {
    __extends(AsyncScheduler2, _super);
    function AsyncScheduler2(SchedulerAction, now) {
        if (now === void 0) now = Scheduler_1.Scheduler.now;
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        _this._scheduled = undefined;
        return _this;
    }
    AsyncScheduler2.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (action = actions.shift())
        this._active = false;
        if (error) {
            while(action = actions.shift())action.unsubscribe();
            throw error;
        }
    };
    return AsyncScheduler2;
}(Scheduler_1.Scheduler);
exports.AsyncScheduler = AsyncScheduler1;

},{"../Scheduler":"4uCy0"}],"4uCy0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Scheduler = void 0;
var dateTimestampProvider_1 = require("./scheduler/dateTimestampProvider");
var Scheduler = function() {
    function Scheduler1(schedulerActionCtor, now) {
        if (now === void 0) now = Scheduler1.now;
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler1.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) delay = 0;
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler1.now = dateTimestampProvider_1.dateTimestampProvider.now;
    return Scheduler1;
}();
exports.Scheduler = Scheduler;

},{"./scheduler/dateTimestampProvider":"30F63"}],"5ysvr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.async = exports.asyncScheduler = void 0;
var AsyncAction_1 = require("./AsyncAction");
var AsyncScheduler_1 = require("./AsyncScheduler");
exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
exports.async = exports.asyncScheduler;

},{"./AsyncAction":"KAR0W","./AsyncScheduler":"38LRN"}],"3YH6F":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.queue = exports.queueScheduler = void 0;
var QueueAction_1 = require("./QueueAction");
var QueueScheduler_1 = require("./QueueScheduler");
exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
exports.queue = exports.queueScheduler;

},{"./QueueAction":"1wHkV","./QueueScheduler":"20At9"}],"1wHkV":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QueueAction = void 0;
var AsyncAction_1 = require("./AsyncAction");
var QueueAction1 = function(_super) {
    __extends(QueueAction2, _super);
    function QueueAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (delay > 0) return _super.prototype.schedule.call(this, state, delay);
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction2.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        return scheduler.flush(this);
    };
    return QueueAction2;
}(AsyncAction_1.AsyncAction);
exports.QueueAction = QueueAction1;

},{"./AsyncAction":"KAR0W"}],"20At9":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QueueScheduler = void 0;
var AsyncScheduler_1 = require("./AsyncScheduler");
var QueueScheduler1 = function(_super) {
    __extends(QueueScheduler2, _super);
    function QueueScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler2;
}(AsyncScheduler_1.AsyncScheduler);
exports.QueueScheduler = QueueScheduler1;

},{"./AsyncScheduler":"38LRN"}],"5T66N":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animationFrame = exports.animationFrameScheduler = void 0;
var AnimationFrameAction_1 = require("./AnimationFrameAction");
var AnimationFrameScheduler_1 = require("./AnimationFrameScheduler");
exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
exports.animationFrame = exports.animationFrameScheduler;

},{"./AnimationFrameAction":"6FSE0","./AnimationFrameScheduler":"1Lu2o"}],"6FSE0":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnimationFrameAction = void 0;
var AsyncAction_1 = require("./AsyncAction");
var animationFrameProvider_1 = require("./animationFrameProvider");
var AnimationFrameAction1 = function(_super) {
    __extends(AnimationFrameAction2, _super);
    function AnimationFrameAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function() {
            return scheduler.flush(undefined);
        }));
    };
    AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        if (scheduler.actions.length === 0) {
            animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction2;
}(AsyncAction_1.AsyncAction);
exports.AnimationFrameAction = AnimationFrameAction1;

},{"./AsyncAction":"KAR0W","./animationFrameProvider":"5lHAX"}],"1Lu2o":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnimationFrameScheduler = void 0;
var AsyncScheduler_1 = require("./AsyncScheduler");
var AnimationFrameScheduler1 = function(_super) {
    __extends(AnimationFrameScheduler2, _super);
    function AnimationFrameScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler2.prototype.flush = function(action) {
        this._active = true;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        action = action || actions.shift();
        var count = actions.length;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while ((++index) < count && (action = actions.shift()))
        this._active = false;
        if (error) {
            while((++index) < count && (action = actions.shift()))action.unsubscribe();
            throw error;
        }
    };
    return AnimationFrameScheduler2;
}(AsyncScheduler_1.AsyncScheduler);
exports.AnimationFrameScheduler = AnimationFrameScheduler1;

},{"./AsyncScheduler":"38LRN"}],"xGadC":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
var AsyncAction_1 = require("./AsyncAction");
var Subscription_1 = require("../Subscription");
var AsyncScheduler_1 = require("./AsyncScheduler");
var VirtualTimeScheduler1 = function(_super) {
    __extends(VirtualTimeScheduler2, _super);
    function VirtualTimeScheduler2(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) schedulerActionCtor = VirtualAction1;
        if (maxFrames === void 0) maxFrames = Infinity;
        var _this = _super.call(this, schedulerActionCtor, function() {
            return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler2.prototype.flush = function() {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while((action = actions[0]) && action.delay <= maxFrames){
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) break;
        }
        if (error) {
            while(action = actions.shift())action.unsubscribe();
            throw error;
        }
    };
    VirtualTimeScheduler2.frameTimeFactor = 10;
    return VirtualTimeScheduler2;
}(AsyncScheduler_1.AsyncScheduler);
exports.VirtualTimeScheduler = VirtualTimeScheduler1;
var VirtualAction1 = function(_super) {
    __extends(VirtualAction2, _super);
    function VirtualAction2(scheduler, work, index) {
        if (index === void 0) index = scheduler.index += 1;
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (Number.isFinite(delay)) {
            if (!this.id) return _super.prototype.schedule.call(this, state, delay);
            this.active = false;
            var action = new VirtualAction2(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        } else return Subscription_1.Subscription.EMPTY;
    };
    VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction2.sortActions);
        return true;
    };
    VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        return undefined;
    };
    VirtualAction2.prototype._execute = function(state, delay) {
        if (this.active === true) return _super.prototype._execute.call(this, state, delay);
    };
    VirtualAction2.sortActions = function(a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) return 0;
            else if (a.index > b.index) return 1;
            else return -1;
        } else if (a.delay > b.delay) return 1;
        else return -1;
    };
    return VirtualAction2;
}(AsyncAction_1.AsyncAction);
exports.VirtualAction = VirtualAction1;

},{"./AsyncAction":"KAR0W","../Subscription":"55zJP","./AsyncScheduler":"38LRN"}],"6rp8f":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;
var empty_1 = require("./observable/empty");
var of_1 = require("./observable/of");
var throwError_1 = require("./observable/throwError");
var isFunction_1 = require("./util/isFunction");
var NotificationKind;
(function(NotificationKind1) {
    NotificationKind1["NEXT"] = "N";
    NotificationKind1["ERROR"] = "E";
    NotificationKind1["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {
}));
var Notification1 = function() {
    function Notification2(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification2.prototype.observe = function(observer) {
        return observeNotification(this, observer);
    };
    Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        return kind === 'N' ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === 'E' ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
    };
    Notification2.prototype.accept = function(nextOrObserver, error, complete) {
        var _a;
        return isFunction_1.isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
    };
    Notification2.prototype.toObservable = function() {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        var result = kind === 'N' ? of_1.of(value) : kind === 'E' ? throwError_1.throwError(function() {
            return error;
        }) : kind === 'C' ? empty_1.EMPTY : 0;
        if (!result) throw new TypeError("Unexpected notification kind " + kind);
        return result;
    };
    Notification2.createNext = function(value) {
        return new Notification2('N', value);
    };
    Notification2.createError = function(err) {
        return new Notification2('E', undefined, err);
    };
    Notification2.createComplete = function() {
        return Notification2.completeNotification;
    };
    Notification2.completeNotification = new Notification2('C');
    return Notification2;
}();
exports.Notification = Notification1;
function observeNotification(notification, observer) {
    var _a, _b, _c;
    var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
    if (typeof kind !== 'string') throw new TypeError('Invalid notification, missing "kind"');
    kind === 'N' ? (_a = observer.next) === null || _a === void 0 || _a.call(observer, value) : kind === 'E' ? (_b = observer.error) === null || _b === void 0 || _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 || _c.call(observer);
}
exports.observeNotification = observeNotification;

},{"./observable/empty":"2Zbmy","./observable/of":"745Yx","./observable/throwError":"6xzeK","./util/isFunction":"1rux0"}],"2Zbmy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.empty = exports.EMPTY = void 0;
var Observable_1 = require("../Observable");
exports.EMPTY = new Observable_1.Observable(function(subscriber) {
    return subscriber.complete();
});
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
            return subscriber.complete();
        });
    });
}

},{"../Observable":"6XfFQ"}],"745Yx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.of = void 0;
var fromArray_1 = require("./fromArray");
var scheduleArray_1 = require("../scheduled/scheduleArray");
var args_1 = require("../util/args");
function of() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(args);
    return scheduler ? scheduleArray_1.scheduleArray(args, scheduler) : fromArray_1.internalFromArray(args);
}
exports.of = of;

},{"./fromArray":"PMrPy","../scheduled/scheduleArray":"69Ztx","../util/args":"3JFPu"}],"PMrPy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.internalFromArray = void 0;
var scheduleArray_1 = require("../scheduled/scheduleArray");
var from_1 = require("./from");
function internalFromArray(input, scheduler) {
    return scheduler ? scheduleArray_1.scheduleArray(input, scheduler) : from_1.fromArrayLike(input);
}
exports.internalFromArray = internalFromArray;

},{"../scheduled/scheduleArray":"69Ztx","./from":"Fatr8"}],"69Ztx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduleArray = void 0;
var Observable_1 = require("../Observable");
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
            if (i === input.length) subscriber.complete();
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) this.schedule();
            }
        });
    });
}
exports.scheduleArray = scheduleArray;

},{"../Observable":"6XfFQ"}],"Fatr8":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
};
var __asyncValues = this && this.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v1) {
            resolve({
                value: v1,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
};
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromArrayLike = exports.innerFrom = exports.from = void 0;
var isArrayLike_1 = require("../util/isArrayLike");
var isPromise_1 = require("../util/isPromise");
var observable_1 = require("../symbol/observable");
var Observable_1 = require("../Observable");
var scheduled_1 = require("../scheduled/scheduled");
var isFunction_1 = require("../util/isFunction");
var reportUnhandledError_1 = require("../util/reportUnhandledError");
var isInteropObservable_1 = require("../util/isInteropObservable");
var isAsyncIterable_1 = require("../util/isAsyncIterable");
var throwUnobservableError_1 = require("../util/throwUnobservableError");
var isIterable_1 = require("../util/isIterable");
var isReadableStreamLike_1 = require("../util/isReadableStreamLike");
function from(input, scheduler) {
    return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom(input);
}
exports.from = from;
function innerFrom(input) {
    if (input instanceof Observable_1.Observable) return input;
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) return fromInteropObservable(input);
        if (isArrayLike_1.isArrayLike(input)) return fromArrayLike(input);
        if (isPromise_1.isPromise(input)) return fromPromise(input);
        if (isAsyncIterable_1.isAsyncIterable(input)) return fromAsyncIterable(input);
        if (isIterable_1.isIterable(input)) return fromIterable(input);
        if (isReadableStreamLike_1.isReadableStreamLike(input)) return fromReadableStreamLike(input);
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.innerFrom = innerFrom;
function fromInteropObservable(obj) {
    return new Observable_1.Observable(function(subscriber) {
        var obs = obj[observable_1.observable]();
        if (isFunction_1.isFunction(obs.subscribe)) return obs.subscribe(subscriber);
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable_1.Observable(function(subscriber) {
        for(var i = 0; i < array.length && !subscriber.closed; i++)subscriber.next(array[i]);
        subscriber.complete();
    });
}
exports.fromArrayLike = fromArrayLike;
function fromPromise(promise) {
    return new Observable_1.Observable(function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, reportUnhandledError_1.reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable_1.Observable(function(subscriber) {
        var e_1, _a;
        try {
            for(var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()){
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) return;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable_1.Observable(function(subscriber) {
        process(asyncIterable, subscriber).catch(function(err) {
            return subscriber.error(err);
        });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function() {
        var value, e_2_1;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    _b.trys.push([
                        0,
                        5,
                        6,
                        11
                    ]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1:
                    return [
                        4,
                        asyncIterable_1.next()
                    ];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [
                        3,
                        4
                    ];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) return [
                        2
                    ];
                    _b.label = 3;
                case 3:
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        3,
                        11
                    ];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3,
                        11
                    ];
                case 6:
                    _b.trys.push([
                        6,
                        ,
                        9,
                        10
                    ]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        _a.call(asyncIterable_1)
                    ];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    if (e_2) throw e_2.error;
                    return [
                        7
                    ];
                case 10:
                    return [
                        7
                    ];
                case 11:
                    subscriber.complete();
                    return [
                        2
                    ];
            }
        });
    });
}

},{"../util/isArrayLike":"Y3Lij","../util/isPromise":"7KELv","../symbol/observable":"3EZgt","../Observable":"6XfFQ","../scheduled/scheduled":"3LGAO","../util/isFunction":"1rux0","../util/reportUnhandledError":"2980V","../util/isInteropObservable":"1TsRv","../util/isAsyncIterable":"7CsRz","../util/throwUnobservableError":"7HnBI","../util/isIterable":"6JGlx","../util/isReadableStreamLike":"6F3tn"}],"Y3Lij":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isArrayLike = void 0;
exports.isArrayLike = function(x) {
    return x && typeof x.length === 'number' && typeof x !== 'function';
};

},{}],"7KELv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPromise = void 0;
var isFunction_1 = require("./isFunction");
function isPromise(value) {
    return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
}
exports.isPromise = isPromise;

},{"./isFunction":"1rux0"}],"3LGAO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduled = void 0;
var scheduleObservable_1 = require("./scheduleObservable");
var schedulePromise_1 = require("./schedulePromise");
var scheduleArray_1 = require("./scheduleArray");
var scheduleIterable_1 = require("./scheduleIterable");
var scheduleAsyncIterable_1 = require("./scheduleAsyncIterable");
var isInteropObservable_1 = require("../util/isInteropObservable");
var isPromise_1 = require("../util/isPromise");
var isArrayLike_1 = require("../util/isArrayLike");
var isIterable_1 = require("../util/isIterable");
var isAsyncIterable_1 = require("../util/isAsyncIterable");
var throwUnobservableError_1 = require("../util/throwUnobservableError");
var isReadableStreamLike_1 = require("../util/isReadableStreamLike");
var scheduleReadableStreamLike_1 = require("./scheduleReadableStreamLike");
function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) return scheduleObservable_1.scheduleObservable(input, scheduler);
        if (isArrayLike_1.isArrayLike(input)) return scheduleArray_1.scheduleArray(input, scheduler);
        if (isPromise_1.isPromise(input)) return schedulePromise_1.schedulePromise(input, scheduler);
        if (isAsyncIterable_1.isAsyncIterable(input)) return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
        if (isIterable_1.isIterable(input)) return scheduleIterable_1.scheduleIterable(input, scheduler);
        if (isReadableStreamLike_1.isReadableStreamLike(input)) return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.scheduled = scheduled;

},{"./scheduleObservable":"aMrnF","./schedulePromise":"33plC","./scheduleArray":"69Ztx","./scheduleIterable":"3CwLs","./scheduleAsyncIterable":"1LmoI","../util/isInteropObservable":"1TsRv","../util/isPromise":"7KELv","../util/isArrayLike":"Y3Lij","../util/isIterable":"6JGlx","../util/isAsyncIterable":"7CsRz","../util/throwUnobservableError":"7HnBI","../util/isReadableStreamLike":"6F3tn","./scheduleReadableStreamLike":"M2x5c"}],"aMrnF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduleObservable = void 0;
var Observable_1 = require("../Observable");
var Subscription_1 = require("../Subscription");
var observable_1 = require("../symbol/observable");
function scheduleObservable(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        var sub = new Subscription_1.Subscription();
        sub.add(scheduler.schedule(function() {
            var observable = input[observable_1.observable]();
            sub.add(observable.subscribe({
                next: function(value) {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.next(value);
                    }));
                },
                error: function(err) {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.error(err);
                    }));
                },
                complete: function() {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.complete();
                    }));
                }
            }));
        }));
        return sub;
    });
}
exports.scheduleObservable = scheduleObservable;

},{"../Observable":"6XfFQ","../Subscription":"55zJP","../symbol/observable":"3EZgt"}],"33plC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schedulePromise = void 0;
var Observable_1 = require("../Observable");
function schedulePromise(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
            return input.then(function(value) {
                subscriber.add(scheduler.schedule(function() {
                    subscriber.next(value);
                    subscriber.add(scheduler.schedule(function() {
                        return subscriber.complete();
                    }));
                }));
            }, function(err) {
                subscriber.add(scheduler.schedule(function() {
                    return subscriber.error(err);
                }));
            });
        });
    });
}
exports.schedulePromise = schedulePromise;

},{"../Observable":"6XfFQ"}],"3CwLs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduleIterable = void 0;
var Observable_1 = require("../Observable");
var iterator_1 = require("../symbol/iterator");
var isFunction_1 = require("../util/isFunction");
var caughtSchedule_1 = require("../util/caughtSchedule");
function scheduleIterable(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        var iterator;
        subscriber.add(scheduler.schedule(function() {
            iterator = input[iterator_1.iterator]();
            caughtSchedule_1.caughtSchedule(subscriber, scheduler, function() {
                var _a = iterator.next(), value = _a.value, done = _a.done;
                if (done) subscriber.complete();
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            });
        }));
        return function() {
            return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
    });
}
exports.scheduleIterable = scheduleIterable;

},{"../Observable":"6XfFQ","../symbol/iterator":"3gAVo","../util/isFunction":"1rux0","../util/caughtSchedule":"6BYyn"}],"3gAVo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iterator = exports.getSymbolIterator = void 0;
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) return '@@iterator';
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();

},{}],"6BYyn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.caughtSchedule = void 0;
function caughtSchedule(subscriber, scheduler, execute, delay) {
    if (delay === void 0) delay = 0;
    var subscription = scheduler.schedule(function() {
        try {
            execute.call(this);
        } catch (err) {
            subscriber.error(err);
        }
    }, delay);
    subscriber.add(subscription);
    return subscription;
}
exports.caughtSchedule = caughtSchedule;

},{}],"1LmoI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduleAsyncIterable = void 0;
var Observable_1 = require("../Observable");
var Subscription_1 = require("../Subscription");
function scheduleAsyncIterable(input, scheduler) {
    if (!input) throw new Error('Iterable cannot be null');
    return new Observable_1.Observable(function(subscriber) {
        var sub = new Subscription_1.Subscription();
        sub.add(scheduler.schedule(function() {
            var iterator = input[Symbol.asyncIterator]();
            sub.add(scheduler.schedule(function() {
                var _this = this;
                iterator.next().then(function(result) {
                    if (result.done) subscriber.complete();
                    else {
                        subscriber.next(result.value);
                        _this.schedule();
                    }
                });
            }));
        }));
        return sub;
    });
}
exports.scheduleAsyncIterable = scheduleAsyncIterable;

},{"../Observable":"6XfFQ","../Subscription":"55zJP"}],"1TsRv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isInteropObservable = void 0;
var observable_1 = require("../symbol/observable");
var isFunction_1 = require("./isFunction");
function isInteropObservable(input) {
    return isFunction_1.isFunction(input[observable_1.observable]);
}
exports.isInteropObservable = isInteropObservable;

},{"../symbol/observable":"3EZgt","./isFunction":"1rux0"}],"6JGlx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isIterable = void 0;
var iterator_1 = require("../symbol/iterator");
var isFunction_1 = require("./isFunction");
function isIterable(input) {
    return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
}
exports.isIterable = isIterable;

},{"../symbol/iterator":"3gAVo","./isFunction":"1rux0"}],"7CsRz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAsyncIterable = void 0;
var isFunction_1 = require("./isFunction");
function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
exports.isAsyncIterable = isAsyncIterable;

},{"./isFunction":"1rux0"}],"7HnBI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createInvalidObservableTypeError = void 0;
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
exports.createInvalidObservableTypeError = createInvalidObservableTypeError;

},{}],"6F3tn":[function(require,module,exports) {
"use strict";
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
};
var __await = this && this.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = this && this.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = void 0;
var isFunction_1 = require("./isFunction");
function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]);
                    _b.label = 2;
                case 2:
                    return [
                        4,
                        __await(reader.read())
                    ];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        __await(void 0)
                    ];
                case 4:
                    return [
                        2,
                        _b.sent()
                    ];
                case 5:
                    return [
                        4,
                        __await(value)
                    ];
                case 6:
                    return [
                        4,
                        _b.sent()
                    ];
                case 7:
                    _b.sent();
                    return [
                        3,
                        2
                    ];
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    reader.releaseLock();
                    return [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
}
exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
function isReadableStreamLike(obj) {
    return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
exports.isReadableStreamLike = isReadableStreamLike;

},{"./isFunction":"1rux0"}],"M2x5c":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduleReadableStreamLike = void 0;
var scheduleAsyncIterable_1 = require("./scheduleAsyncIterable");
var isReadableStreamLike_1 = require("../util/isReadableStreamLike");
function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
}
exports.scheduleReadableStreamLike = scheduleReadableStreamLike;

},{"./scheduleAsyncIterable":"1LmoI","../util/isReadableStreamLike":"6F3tn"}],"3JFPu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
var isFunction_1 = require("./isFunction");
var isScheduler_1 = require("./isScheduler");
function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return isFunction_1.isFunction(last(args)) ? args.pop() : undefined;
}
exports.popResultSelector = popResultSelector;
function popScheduler(args) {
    return isScheduler_1.isScheduler(last(args)) ? args.pop() : undefined;
}
exports.popScheduler = popScheduler;
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
exports.popNumber = popNumber;

},{"./isFunction":"1rux0","./isScheduler":"5CcUT"}],"5CcUT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isScheduler = void 0;
var isFunction_1 = require("./isFunction");
function isScheduler(value) {
    return value && isFunction_1.isFunction(value.schedule);
}
exports.isScheduler = isScheduler;

},{"./isFunction":"1rux0"}],"6xzeK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throwError = void 0;
var Observable_1 = require("../Observable");
var isFunction_1 = require("../util/isFunction");
function throwError(errorOrErrorFactory, scheduler) {
    var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
        return errorOrErrorFactory;
    };
    var init = function(subscriber) {
        return subscriber.error(errorFactory());
    };
    return new Observable_1.Observable(scheduler ? function(subscriber) {
        return scheduler.schedule(init, 0, subscriber);
    } : init);
}
exports.throwError = throwError;

},{"../Observable":"6XfFQ","../util/isFunction":"1rux0"}],"3VXNH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isObservable = void 0;
var Observable_1 = require("../Observable");
var isFunction_1 = require("./isFunction");
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe));
}
exports.isObservable = isObservable;

},{"../Observable":"6XfFQ","./isFunction":"1rux0"}],"1W7DR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lastValueFrom = void 0;
var EmptyError_1 = require("./util/EmptyError");
function lastValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function(resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
            next: function(value) {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: function() {
                if (_hasValue) resolve(_value);
                else if (hasConfig) resolve(config.defaultValue);
                else reject(new EmptyError_1.EmptyError());
            }
        });
    });
}
exports.lastValueFrom = lastValueFrom;

},{"./util/EmptyError":"63brV"}],"63brV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmptyError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.EmptyError = createErrorClass_1.createErrorClass(function(_super) {
    return function EmptyErrorImpl() {
        _super(this);
        this.name = 'EmptyError';
        this.message = 'no elements in sequence';
    };
});

},{"./createErrorClass":"4TwIo"}],"5wc49":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.firstValueFrom = void 0;
var EmptyError_1 = require("./util/EmptyError");
var Subscriber_1 = require("./Subscriber");
function firstValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function(resolve, reject) {
        var subscriber = new Subscriber_1.SafeSubscriber({
            next: function(value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function() {
                if (hasConfig) resolve(config.defaultValue);
                else reject(new EmptyError_1.EmptyError());
            }
        });
        source.subscribe(subscriber);
    });
}
exports.firstValueFrom = firstValueFrom;

},{"./util/EmptyError":"63brV","./Subscriber":"1ew17"}],"4Xzvo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArgumentOutOfRangeError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function(_super) {
    return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = 'ArgumentOutOfRangeError';
        this.message = 'argument out of range';
    };
});

},{"./createErrorClass":"4TwIo"}],"ZITwI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NotFoundError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.NotFoundError = createErrorClass_1.createErrorClass(function(_super) {
    return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = 'NotFoundError';
        this.message = message;
    };
});

},{"./createErrorClass":"4TwIo"}],"3yeE8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SequenceError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.SequenceError = createErrorClass_1.createErrorClass(function(_super) {
    return function SequenceErrorImpl(message) {
        _super(this);
        this.name = 'SequenceError';
        this.message = message;
    };
});

},{"./createErrorClass":"4TwIo"}],"4fjS3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timeout = exports.TimeoutError = void 0;
var async_1 = require("../scheduler/async");
var isDate_1 = require("../util/isDate");
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var createErrorClass_1 = require("../util/createErrorClass");
var caughtSchedule_1 = require("../util/caughtSchedule");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
exports.TimeoutError = createErrorClass_1.createErrorClass(function(_super) {
    return function TimeoutErrorImpl(info) {
        if (info === void 0) info = null;
        _super(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        this.info = info;
    };
});
function timeout(config, schedulerArg) {
    var _a = isDate_1.isValidDate(config) ? {
        first: config
    } : typeof config === 'number' ? {
        each: config
    } : config, first = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
    if (first == null && each == null) throw new TypeError('No timeout provided.');
    return lift_1.operate(function(source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = function(delay) {
            timerSubscription = caughtSchedule_1.caughtSchedule(subscriber, scheduler, function() {
                originalSourceSubscription.unsubscribe();
                from_1.innerFrom(_with({
                    meta: meta,
                    lastValue: lastValue,
                    seen: seen
                })).subscribe(subscriber);
            }, delay);
        };
        originalSourceSubscription = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            timerSubscription === null || timerSubscription === void 0 || timerSubscription.unsubscribe();
            seen++;
            subscriber.next(lastValue = value);
            each > 0 && startTimer(each);
        }, undefined, undefined, function() {
            if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) timerSubscription === null || timerSubscription === void 0 || timerSubscription.unsubscribe();
            lastValue = null;
        }));
        startTimer(first != null ? typeof first === 'number' ? first : +first - scheduler.now() : each);
    });
}
exports.timeout = timeout;
function timeoutErrorFactory(info) {
    throw new exports.TimeoutError(info);
}

},{"../scheduler/async":"5ysvr","../util/isDate":"1CkFX","../util/lift":"3Hhm5","../observable/from":"Fatr8","../util/createErrorClass":"4TwIo","../util/caughtSchedule":"6BYyn","./OperatorSubscriber":"3gY6m"}],"1CkFX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidDate = void 0;
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
exports.isValidDate = isValidDate;

},{}],"5GyYi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindCallback = void 0;
var bindCallbackInternals_1 = require("./bindCallbackInternals");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
}
exports.bindCallback = bindCallback;

},{"./bindCallbackInternals":"6Hrkc"}],"6Hrkc":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindCallbackInternals = void 0;
var isScheduler_1 = require("../util/isScheduler");
var Observable_1 = require("../Observable");
var subscribeOn_1 = require("../operators/subscribeOn");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var observeOn_1 = require("../operators/observeOn");
var AsyncSubject_1 = require("../AsyncSubject");
function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) scheduler = resultSelector;
        else return function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
        };
    }
    if (scheduler) return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
    };
    return function() {
        var _this = this;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var subject = new AsyncSubject_1.AsyncSubject();
        var uninitialized = true;
        return new Observable_1.Observable(function(subscriber) {
            var subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                var isAsync_1 = false;
                var isComplete_1 = false;
                callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [
                    function() {
                        var results = [];
                        for(var _i1 = 0; _i1 < arguments.length; _i1++)results[_i1] = arguments[_i1];
                        if (isNodeStyle) {
                            var err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete_1 = true;
                        if (isAsync_1) subject.complete();
                    }, 
                ]));
                if (isComplete_1) subject.complete();
                isAsync_1 = true;
            }
            return subs;
        });
    };
}
exports.bindCallbackInternals = bindCallbackInternals;

},{"../util/isScheduler":"5CcUT","../Observable":"6XfFQ","../operators/subscribeOn":"3ycX1","../util/mapOneOrManyArgs":"6B4SF","../operators/observeOn":"4GztM","../AsyncSubject":"OZRwe"}],"3ycX1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeOn = void 0;
var lift_1 = require("../util/lift");
function subscribeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return lift_1.operate(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
            return source.subscribe(subscriber);
        }, delay));
    });
}
exports.subscribeOn = subscribeOn;

},{"../util/lift":"3Hhm5"}],"6B4SF":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapOneOrManyArgs = void 0;
var map_1 = require("../operators/map");
var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map_1.map(function(args) {
        return callOrApply(fn, args);
    });
}
exports.mapOneOrManyArgs = mapOneOrManyArgs;

},{"../operators/map":"7vINI"}],"7vINI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.map = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function map(project, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
exports.map = map;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"4GztM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.observeOn = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function observeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return subscriber.add(scheduler.schedule(function() {
                return subscriber.next(value);
            }, delay));
        }, function() {
            return subscriber.add(scheduler.schedule(function() {
                return subscriber.complete();
            }, delay));
        }, function(err) {
            return subscriber.add(scheduler.schedule(function() {
                return subscriber.error(err);
            }, delay));
        }));
    });
}
exports.observeOn = observeOn;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"6Uys1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindNodeCallback = void 0;
var bindCallbackInternals_1 = require("./bindCallbackInternals");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
}
exports.bindNodeCallback = bindNodeCallback;

},{"./bindCallbackInternals":"6Hrkc"}],"wOUJf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineLatestInit = exports.combineLatest = void 0;
var Observable_1 = require("../Observable");
var argsArgArrayOrObject_1 = require("../util/argsArgArrayOrObject");
var from_1 = require("./from");
var identity_1 = require("../util/identity");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var args_1 = require("../util/args");
var createObject_1 = require("../util/createObject");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(args);
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
    if (observables.length === 0) return from_1.from([], scheduler);
    var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
        return createObject_1.createObject(keys, values);
    } : identity_1.identity));
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.combineLatest = combineLatest;
function combineLatestInit(observables, scheduler, valueTransform) {
    if (valueTransform === void 0) valueTransform = identity_1.identity;
    return function(subscriber) {
        maybeSchedule(scheduler, function() {
            var length = observables.length;
            var values = new Array(length);
            var active = length;
            var remainingFirstValues = length;
            var _loop_1 = function(i) {
                maybeSchedule(scheduler, function() {
                    var source = from_1.from(observables[i], scheduler);
                    var hasFirstValue = false;
                    source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                        values[i] = value;
                        if (!hasFirstValue) {
                            hasFirstValue = true;
                            remainingFirstValues--;
                        }
                        if (!remainingFirstValues) subscriber.next(valueTransform(values.slice()));
                    }, function() {
                        if (!--active) subscriber.complete();
                    }));
                }, subscriber);
            };
            for(var i = 0; i < length; i++)_loop_1(i);
        }, subscriber);
    };
}
exports.combineLatestInit = combineLatestInit;
function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) subscription.add(scheduler.schedule(execute));
    else execute();
}

},{"../Observable":"6XfFQ","../util/argsArgArrayOrObject":"3tBWg","./from":"Fatr8","../util/identity":"2QJLj","../util/mapOneOrManyArgs":"6B4SF","../util/args":"3JFPu","../util/createObject":"4Qj1e","../operators/OperatorSubscriber":"3gY6m"}],"3tBWg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.argsArgArrayOrObject = void 0;
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) return {
            args: first_1,
            keys: null
        };
        if (isPOJO(first_1)) {
            var keys = getKeys(first_1);
            return {
                args: keys.map(function(key) {
                    return first_1[key];
                }),
                keys: keys
            };
        }
    }
    return {
        args: args,
        keys: null
    };
}
exports.argsArgArrayOrObject = argsArgArrayOrObject;
function isPOJO(obj) {
    return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}

},{}],"4Qj1e":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createObject = void 0;
function createObject(keys, values) {
    return keys.reduce(function(result, key, i) {
        return result[key] = values[i], result;
    }, {
    });
}
exports.createObject = createObject;

},{}],"3qROP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concat = void 0;
var concatAll_1 = require("../operators/concatAll");
var fromArray_1 = require("./fromArray");
var args_1 = require("../util/args");
function concat() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return concatAll_1.concatAll()(fromArray_1.internalFromArray(args, args_1.popScheduler(args)));
}
exports.concat = concat;

},{"../operators/concatAll":"2P5sS","./fromArray":"PMrPy","../util/args":"3JFPu"}],"2P5sS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatAll = void 0;
var mergeAll_1 = require("./mergeAll");
function concatAll() {
    return mergeAll_1.mergeAll(1);
}
exports.concatAll = concatAll;

},{"./mergeAll":"3xK3Y"}],"3xK3Y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeAll = void 0;
var mergeMap_1 = require("./mergeMap");
var identity_1 = require("../util/identity");
function mergeAll(concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll;

},{"./mergeMap":"4fW0U","../util/identity":"2QJLj"}],"4fW0U":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeMap = void 0;
var map_1 = require("./map");
var from_1 = require("../observable/from");
var lift_1 = require("../util/lift");
var mergeInternals_1 = require("./mergeInternals");
var isFunction_1 = require("../util/isFunction");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    if (isFunction_1.isFunction(resultSelector)) return mergeMap(function(a, i) {
        return map_1.map(function(b, ii) {
            return resultSelector(a, b, i, ii);
        })(from_1.innerFrom(project(a, i)));
    }, concurrent);
    else if (typeof resultSelector === 'number') concurrent = resultSelector;
    return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent);
    });
}
exports.mergeMap = mergeMap;

},{"./map":"7vINI","../observable/from":"Fatr8","../util/lift":"3Hhm5","./mergeInternals":"3hBCt","../util/isFunction":"1rux0"}],"3hBCt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeInternals = void 0;
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalTeardown) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
        if (isComplete && !buffer.length && !active) subscriber.complete();
    };
    var outerNext = function(value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function(value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        from_1.innerFrom(project(value, index++)).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 || onBeforeNext(innerValue);
            if (expand) outerNext(innerValue);
            else subscriber.next(innerValue);
        }, function() {
            innerComplete = true;
        }, undefined, function() {
            if (innerComplete) try {
                active--;
                var _loop_1 = function() {
                    var bufferedValue = buffer.shift();
                    innerSubScheduler ? subscriber.add(innerSubScheduler.schedule(function() {
                        return doInnerSub(bufferedValue);
                    })) : doInnerSub(bufferedValue);
                };
                while(buffer.length && active < concurrent)_loop_1();
                checkComplete();
            } catch (err) {
                subscriber.error(err);
            }
        }));
    };
    source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
    }));
    return function() {
        additionalTeardown === null || additionalTeardown === void 0 || additionalTeardown();
    };
}
exports.mergeInternals = mergeInternals;

},{"../observable/from":"Fatr8","./OperatorSubscriber":"3gY6m"}],"2YaUG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectable = void 0;
var Subject_1 = require("../Subject");
var Observable_1 = require("../Observable");
var defer_1 = require("./defer");
var DEFAULT_CONFIG = {
    connector: function() {
        return new Subject_1.Subject();
    },
    resetOnDisconnect: true
};
function connectable(source, config) {
    if (config === void 0) config = DEFAULT_CONFIG;
    var connection = null;
    var connector = config.connector, _a = config.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
    var subject = connector();
    var result = new Observable_1.Observable(function(subscriber) {
        return subject.subscribe(subscriber);
    });
    result.connect = function() {
        if (!connection || connection.closed) {
            connection = defer_1.defer(function() {
                return source;
            }).subscribe(subject);
            if (resetOnDisconnect) connection.add(function() {
                return subject = connector();
            });
        }
        return connection;
    };
    return result;
}
exports.connectable = connectable;

},{"../Subject":"CTCrE","../Observable":"6XfFQ","./defer":"6CxUm"}],"6CxUm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defer = void 0;
var Observable_1 = require("../Observable");
var from_1 = require("./from");
function defer(observableFactory) {
    return new Observable_1.Observable(function(subscriber) {
        from_1.innerFrom(observableFactory()).subscribe(subscriber);
    });
}
exports.defer = defer;

},{"../Observable":"6XfFQ","./from":"Fatr8"}],"1UQr7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.forkJoin = void 0;
var Observable_1 = require("../Observable");
var argsArgArrayOrObject_1 = require("../util/argsArgArrayOrObject");
var from_1 = require("./from");
var args_1 = require("../util/args");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var createObject_1 = require("../util/createObject");
function forkJoin() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
    var result = new Observable_1.Observable(function(subscriber) {
        var length = sources.length;
        if (!length) {
            subscriber.complete();
            return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function(sourceIndex) {
            var hasValue = false;
            from_1.innerFrom(sources[sourceIndex]).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex] = value;
            }, function() {
                if (!--remainingCompletions || !hasValue) {
                    if (!remainingEmissions) subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
                    subscriber.complete();
                }
            }));
        };
        for(var sourceIndex = 0; sourceIndex < length; sourceIndex++)_loop_1(sourceIndex);
    });
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.forkJoin = forkJoin;

},{"../Observable":"6XfFQ","../util/argsArgArrayOrObject":"3tBWg","./from":"Fatr8","../util/args":"3JFPu","../operators/OperatorSubscriber":"3gY6m","../util/mapOneOrManyArgs":"6B4SF","../util/createObject":"4Qj1e"}],"4a11j":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromEvent = void 0;
var Observable_1 = require("../Observable");
var mergeMap_1 = require("../operators/mergeMap");
var isArrayLike_1 = require("../util/isArrayLike");
var isFunction_1 = require("../util/isFunction");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var fromArray_1 = require("./fromArray");
var nodeEventEmitterMethods = [
    'addListener',
    'removeListener'
];
var eventTargetMethods = [
    'addEventListener',
    'removeEventListener'
];
var jqueryMethods = [
    'on',
    'off'
];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler, options);
        };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike_1.isArrayLike(target)) return mergeMap_1.mergeMap(function(subTarget) {
            return fromEvent(subTarget, eventName, options);
        })(fromArray_1.internalFromArray(target));
    }
    if (!add) throw new TypeError('Invalid event target');
    return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function() {
            return remove(handler);
        };
    });
}
exports.fromEvent = fromEvent;
function toCommonHandlerRegistry(target, eventName) {
    return function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler);
        };
    };
}
function isNodeStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
}

},{"../Observable":"6XfFQ","../operators/mergeMap":"4fW0U","../util/isArrayLike":"Y3Lij","../util/isFunction":"1rux0","../util/mapOneOrManyArgs":"6B4SF","./fromArray":"PMrPy"}],"21Udi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromEventPattern = void 0;
var Observable_1 = require("../Observable");
var isFunction_1 = require("../util/isFunction");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
            var e = [];
            for(var _i = 0; _i < arguments.length; _i++)e[_i] = arguments[_i];
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return isFunction_1.isFunction(removeHandler) ? function() {
            return removeHandler(handler, retValue);
        } : undefined;
    });
}
exports.fromEventPattern = fromEventPattern;

},{"../Observable":"6XfFQ","../util/isFunction":"1rux0","../util/mapOneOrManyArgs":"6B4SF"}],"3pBIw":[function(require,module,exports) {
"use strict";
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generate = void 0;
var identity_1 = require("../util/identity");
var isScheduler_1 = require("../util/isScheduler");
var defer_1 = require("./defer");
var scheduleIterable_1 = require("../scheduled/scheduleIterable");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    var _a, _b;
    var resultSelector;
    var initialState;
    if (arguments.length === 1) _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a.scheduler;
    else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
            resultSelector = identity_1.identity;
            scheduler = resultSelectorOrScheduler;
        } else resultSelector = resultSelectorOrScheduler;
    }
    function gen() {
        var state;
        return __generator(this, function(_a1) {
            switch(_a1.label){
                case 0:
                    state = initialState;
                    _a1.label = 1;
                case 1:
                    if (!(!condition || condition(state))) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        resultSelector(state)
                    ];
                case 2:
                    _a1.sent();
                    _a1.label = 3;
                case 3:
                    state = iterate(state);
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }
    return defer_1.defer(scheduler ? function() {
        return scheduleIterable_1.scheduleIterable(gen(), scheduler);
    } : gen);
}
exports.generate = generate;

},{"../util/identity":"2QJLj","../util/isScheduler":"5CcUT","./defer":"6CxUm","../scheduled/scheduleIterable":"3CwLs"}],"5ps6j":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iif = void 0;
var defer_1 = require("./defer");
function iif(condition, trueResult, falseResult) {
    return defer_1.defer(function() {
        return condition() ? trueResult : falseResult;
    });
}
exports.iif = iif;

},{"./defer":"6CxUm"}],"aMShB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.interval = void 0;
var async_1 = require("../scheduler/async");
var timer_1 = require("./timer");
function interval(period, scheduler) {
    if (period === void 0) period = 0;
    if (scheduler === void 0) scheduler = async_1.asyncScheduler;
    if (period < 0) period = 0;
    return timer_1.timer(period, period, scheduler);
}
exports.interval = interval;

},{"../scheduler/async":"5ysvr","./timer":"MBto6"}],"MBto6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timer = void 0;
var Observable_1 = require("../Observable");
var async_1 = require("../scheduler/async");
var isScheduler_1 = require("../util/isScheduler");
var isDate_1 = require("../util/isDate");
function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) dueTime = 0;
    if (scheduler === void 0) scheduler = async_1.async;
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (isScheduler_1.isScheduler(intervalOrScheduler)) scheduler = intervalOrScheduler;
        else intervalDuration = intervalOrScheduler;
    }
    return new Observable_1.Observable(function(subscriber) {
        var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) due = 0;
        var n = 0;
        return scheduler.schedule(function() {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) this.schedule(undefined, intervalDuration);
                else subscriber.complete();
            }
        }, due);
    });
}
exports.timer = timer;

},{"../Observable":"6XfFQ","../scheduler/async":"5ysvr","../util/isScheduler":"5CcUT","../util/isDate":"1CkFX"}],"3u8OG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.merge = void 0;
var mergeAll_1 = require("../operators/mergeAll");
var fromArray_1 = require("./fromArray");
var from_1 = require("./from");
var empty_1 = require("./empty");
var args_1 = require("../util/args");
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    var sources = args;
    return !sources.length ? empty_1.EMPTY : sources.length === 1 ? from_1.innerFrom(sources[0]) : mergeAll_1.mergeAll(concurrent)(fromArray_1.internalFromArray(sources, scheduler));
}
exports.merge = merge;

},{"../operators/mergeAll":"3xK3Y","./fromArray":"PMrPy","./from":"Fatr8","./empty":"2Zbmy","../util/args":"3JFPu"}],"2htjn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.never = exports.NEVER = void 0;
var Observable_1 = require("../Observable");
var noop_1 = require("../util/noop");
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
    return exports.NEVER;
}
exports.never = never;

},{"../Observable":"6XfFQ","../util/noop":"2s9LI"}],"78agF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onErrorResumeNext = void 0;
var empty_1 = require("./empty");
var onErrorResumeNext_1 = require("../operators/onErrorResumeNext");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
function onErrorResumeNext() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    return onErrorResumeNext_1.onErrorResumeNext(argsOrArgArray_1.argsOrArgArray(sources))(empty_1.EMPTY);
}
exports.onErrorResumeNext = onErrorResumeNext;

},{"./empty":"2Zbmy","../operators/onErrorResumeNext":"6wRxZ","../util/argsOrArgArray":"4SxkS"}],"6wRxZ":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onErrorResumeNext = void 0;
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
function onErrorResumeNext() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return lift_1.operate(function(source, subscriber) {
        var remaining = __spreadArray([
            source
        ], __read(nextSources));
        var subscribeNext = function() {
            if (!subscriber.closed) {
                if (remaining.length > 0) {
                    var nextSource = void 0;
                    try {
                        nextSource = from_1.innerFrom(remaining.shift());
                    } catch (err) {
                        subscribeNext();
                        return;
                    }
                    var innerSub = new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, noop_1.noop, noop_1.noop);
                    subscriber.add(nextSource.subscribe(innerSub));
                    innerSub.add(subscribeNext);
                } else subscriber.complete();
            }
        };
        subscribeNext();
    });
}
exports.onErrorResumeNext = onErrorResumeNext;

},{"../util/lift":"3Hhm5","../observable/from":"Fatr8","../util/argsOrArgArray":"4SxkS","./OperatorSubscriber":"3gY6m","../util/noop":"2s9LI"}],"4SxkS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.argsOrArgArray = void 0;
var isArray = Array.isArray;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
exports.argsOrArgArray = argsOrArgArray;

},{}],"3vJ31":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pairs = void 0;
var from_1 = require("./from");
function pairs(obj, scheduler) {
    return from_1.from(Object.entries(obj), scheduler);
}
exports.pairs = pairs;

},{"./from":"Fatr8"}],"7lv9y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.partition = void 0;
var not_1 = require("../util/not");
var filter_1 = require("../operators/filter");
var from_1 = require("./from");
function partition(source, predicate, thisArg) {
    return [
        filter_1.filter(predicate, thisArg)(from_1.innerFrom(source)),
        filter_1.filter(not_1.not(predicate, thisArg))(from_1.innerFrom(source))
    ];
}
exports.partition = partition;

},{"../util/not":"7oKg7","../operators/filter":"2N5w7","./from":"Fatr8"}],"7oKg7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.not = void 0;
function not(pred, thisArg) {
    return function(value, index) {
        return !pred.call(thisArg, value, index);
    };
}
exports.not = not;

},{}],"2N5w7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filter = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function filter(predicate, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
    });
}
exports.filter = filter;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"1MY0M":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.raceInit = exports.race = void 0;
var Observable_1 = require("../Observable");
var from_1 = require("./from");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
function race() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    sources = argsOrArgArray_1.argsOrArgArray(sources);
    return sources.length === 1 ? from_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
}
exports.race = race;
function raceInit(sources) {
    return function(subscriber) {
        var subscriptions = [];
        var _loop_1 = function(i) {
            subscriptions.push(from_1.innerFrom(sources[i]).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                if (subscriptions) {
                    for(var s = 0; s < subscriptions.length; s++)s !== i && subscriptions[s].unsubscribe();
                    subscriptions = null;
                }
                subscriber.next(value);
            })));
        };
        for(var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++)_loop_1(i);
    };
}
exports.raceInit = raceInit;

},{"../Observable":"6XfFQ","./from":"Fatr8","../util/argsOrArgArray":"4SxkS","../operators/OperatorSubscriber":"3gY6m"}],"1MLuR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.range = void 0;
var Observable_1 = require("../Observable");
var empty_1 = require("./empty");
function range(start, count, scheduler) {
    if (count == null) {
        count = start;
        start = 0;
    }
    if (count <= 0) return empty_1.EMPTY;
    var end = count + start;
    return new Observable_1.Observable(scheduler ? function(subscriber) {
        var n = start;
        return scheduler.schedule(function() {
            if (n < end) {
                subscriber.next(n++);
                this.schedule();
            } else subscriber.complete();
        });
    } : function(subscriber) {
        var n = start;
        while(n < end && !subscriber.closed)subscriber.next(n++);
        subscriber.complete();
    });
}
exports.range = range;

},{"../Observable":"6XfFQ","./empty":"2Zbmy"}],"1yWKa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.using = void 0;
var Observable_1 = require("../Observable");
var from_1 = require("./from");
var empty_1 = require("./empty");
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function(subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? from_1.innerFrom(result) : empty_1.EMPTY;
        source.subscribe(subscriber);
        return function() {
            if (resource) resource.unsubscribe();
        };
    });
}
exports.using = using;

},{"../Observable":"6XfFQ","./from":"Fatr8","./empty":"2Zbmy"}],"3Wymr":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zip = void 0;
var Observable_1 = require("../Observable");
var from_1 = require("./from");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var empty_1 = require("./empty");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
var args_1 = require("../util/args");
function zip() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var resultSelector = args_1.popResultSelector(args);
    var sources = argsOrArgArray_1.argsOrArgArray(args);
    return sources.length ? new Observable_1.Observable(function(subscriber) {
        var buffers = sources.map(function() {
            return [];
        });
        var completed = sources.map(function() {
            return false;
        });
        subscriber.add(function() {
            buffers = completed = null;
        });
        var _loop_1 = function(sourceIndex) {
            from_1.innerFrom(sources[sourceIndex]).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                buffers[sourceIndex].push(value);
                if (buffers.every(function(buffer) {
                    return buffer.length;
                })) {
                    var result = buffers.map(function(buffer) {
                        return buffer.shift();
                    });
                    subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);
                    if (buffers.some(function(buffer, i) {
                        return !buffer.length && completed[i];
                    })) subscriber.complete();
                }
            }, function() {
                completed[sourceIndex] = true;
                !buffers[sourceIndex].length && subscriber.complete();
            }));
        };
        for(var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++)_loop_1(sourceIndex);
        return function() {
            buffers = completed = null;
        };
    }) : empty_1.EMPTY;
}
exports.zip = zip;

},{"../Observable":"6XfFQ","./from":"Fatr8","../util/argsOrArgArray":"4SxkS","./empty":"2Zbmy","../operators/OperatorSubscriber":"3gY6m","../util/args":"3JFPu"}],"69AK9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"75SMu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.audit = void 0;
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function audit(durationSelector) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function() {
            durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
            isComplete && subscriber.complete();
        };
        var cleanupDuration = function() {
            durationSubscriber = null;
            isComplete && subscriber.complete();
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            lastValue = value;
            if (!durationSubscriber) from_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, endDuration, cleanupDuration));
        }, function() {
            isComplete = true;
            (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
    });
}
exports.audit = audit;

},{"../util/lift":"3Hhm5","../observable/from":"Fatr8","./OperatorSubscriber":"3gY6m"}],"PKYwH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.auditTime = void 0;
var async_1 = require("../scheduler/async");
var audit_1 = require("./audit");
var timer_1 = require("../observable/timer");
function auditTime(duration, scheduler) {
    if (scheduler === void 0) scheduler = async_1.async;
    return audit_1.audit(function() {
        return timer_1.timer(duration, scheduler);
    });
}
exports.auditTime = auditTime;

},{"../scheduler/async":"5ysvr","./audit":"75SMu","../observable/timer":"MBto6"}],"6n1cy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buffer = void 0;
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function buffer(closingNotifier) {
    return lift_1.operate(function(source, subscriber) {
        var currentBuffer = [];
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return currentBuffer.push(value);
        }, function() {
            subscriber.next(currentBuffer);
            subscriber.complete();
        }));
        closingNotifier.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            var b = currentBuffer;
            currentBuffer = [];
            subscriber.next(b);
        }, noop_1.noop));
        return function() {
            currentBuffer = null;
        };
    });
}
exports.buffer = buffer;

},{"../util/lift":"3Hhm5","../util/noop":"2s9LI","./OperatorSubscriber":"3gY6m"}],"3M5dW":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bufferCount = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var arrRemove_1 = require("../util/arrRemove");
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) startBufferEvery = null;
    startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
    return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a, e_2, _b;
            var toEmit = null;
            if ((count++) % startBufferEvery === 0) buffers.push([]);
            try {
                for(var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()){
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                    if (bufferSize <= buffer.length) {
                        toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                        toEmit.push(buffer);
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            if (toEmit) try {
                for(var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()){
                    var buffer = toEmit_1_1.value;
                    arrRemove_1.arrRemove(buffers, buffer);
                    subscriber.next(buffer);
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                };
            } finally{
                try {
                    if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return)) _b.call(toEmit_1);
                } finally{
                    if (e_2) throw e_2.error;
                }
            }
        }, function() {
            var e_3, _a;
            try {
                for(var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()){
                    var buffer = buffers_2_1.value;
                    subscriber.next(buffer);
                }
            } catch (e_3_1) {
                e_3 = {
                    error: e_3_1
                };
            } finally{
                try {
                    if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return)) _a.call(buffers_2);
                } finally{
                    if (e_3) throw e_3.error;
                }
            }
            subscriber.complete();
        }, undefined, function() {
            buffers = null;
        }));
    });
}
exports.bufferCount = bufferCount;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../util/arrRemove":"4Y9kk"}],"7tNuJ":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bufferTime = void 0;
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var arrRemove_1 = require("../util/arrRemove");
var async_1 = require("../scheduler/async");
var args_1 = require("../util/args");
function bufferTime(bufferTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for(var _i = 1; _i < arguments.length; _i++)otherArgs[_i - 1] = arguments[_i];
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxBufferSize = otherArgs[1] || Infinity;
    return lift_1.operate(function(source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = function(record) {
            var buffer = record.buffer, subs = record.subs;
            subs.unsubscribe();
            arrRemove_1.arrRemove(bufferRecords, record);
            subscriber.next(buffer);
            restartOnEmit && startBuffer();
        };
        var startBuffer = function() {
            if (bufferRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var buffer = [];
                var record_1 = {
                    buffer: buffer,
                    subs: subs
                };
                bufferRecords.push(record_1);
                subs.add(scheduler.schedule(function() {
                    return emit(record_1);
                }, bufferTimeSpan));
            }
        };
        bufferCreationInterval !== null && bufferCreationInterval >= 0 ? subscriber.add(scheduler.schedule(function() {
            startBuffer();
            !this.closed && subscriber.add(this.schedule(null, bufferCreationInterval));
        }, bufferCreationInterval)) : restartOnEmit = true;
        startBuffer();
        var bufferTimeSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a1;
            var recordsCopy = bufferRecords.slice();
            try {
                for(var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()){
                    var record = recordsCopy_1_1.value;
                    var buffer = record.buffer;
                    buffer.push(value);
                    maxBufferSize <= buffer.length && emit(record);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a1 = recordsCopy_1.return)) _a1.call(recordsCopy_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length)subscriber.next(bufferRecords.shift().buffer);
            bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 || bufferTimeSubscriber.unsubscribe();
            subscriber.complete();
            subscriber.unsubscribe();
        }, undefined, function() {
            return bufferRecords = null;
        });
        source.subscribe(bufferTimeSubscriber);
    });
}
exports.bufferTime = bufferTime;

},{"../Subscription":"55zJP","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../util/arrRemove":"4Y9kk","../scheduler/async":"5ysvr","../util/args":"3JFPu"}],"5JyKb":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bufferToggle = void 0;
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
var arrRemove_1 = require("../util/arrRemove");
function bufferToggle(openings, closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        from_1.innerFrom(openings).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(openValue) {
            var buffer = [];
            buffers.push(buffer);
            var closingSubscription = new Subscription_1.Subscription();
            var emitBuffer = function() {
                arrRemove_1.arrRemove(buffers, buffer);
                subscriber.next(buffer);
                closingSubscription.unsubscribe();
            };
            closingSubscription.add(from_1.innerFrom(closingSelector(openValue)).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
        }, noop_1.noop));
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            try {
                for(var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()){
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(buffers.length > 0)subscriber.next(buffers.shift());
            subscriber.complete();
        }));
    });
}
exports.bufferToggle = bufferToggle;

},{"../Subscription":"55zJP","../util/lift":"3Hhm5","../observable/from":"Fatr8","./OperatorSubscriber":"3gY6m","../util/noop":"2s9LI","../util/arrRemove":"4Y9kk"}],"6DFbp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bufferWhen = void 0;
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
function bufferWhen(closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = function() {
            closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
            var b = buffer;
            buffer = [];
            b && subscriber.next(b);
            from_1.innerFrom(closingSelector()).subscribe(closingSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, openBuffer, noop_1.noop));
        };
        openBuffer();
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
        }, function() {
            buffer && subscriber.next(buffer);
            subscriber.complete();
        }, undefined, function() {
            return buffer = closingSubscriber = null;
        }));
    });
}
exports.bufferWhen = bufferWhen;

},{"../util/lift":"3Hhm5","../util/noop":"2s9LI","./OperatorSubscriber":"3gY6m","../observable/from":"Fatr8"}],"6OsqQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.catchError = void 0;
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var lift_1 = require("../util/lift");
function catchError(selector) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, undefined, function(err) {
            handledResult = from_1.innerFrom(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            } else syncUnsub = true;
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}
exports.catchError = catchError;

},{"../observable/from":"Fatr8","./OperatorSubscriber":"3gY6m","../util/lift":"3Hhm5"}],"4FwjR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineAll = void 0;
var combineLatestAll_1 = require("./combineLatestAll");
exports.combineAll = combineLatestAll_1.combineLatestAll;

},{"./combineLatestAll":"7c2Jv"}],"7c2Jv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineLatestAll = void 0;
var combineLatest_1 = require("../observable/combineLatest");
var joinAllInternals_1 = require("./joinAllInternals");
function combineLatestAll(project) {
    return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
}
exports.combineLatestAll = combineLatestAll;

},{"../observable/combineLatest":"wOUJf","./joinAllInternals":"5NH2Z"}],"5NH2Z":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.joinAllInternals = void 0;
var identity_1 = require("../util/identity");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var pipe_1 = require("../util/pipe");
var mergeMap_1 = require("./mergeMap");
var toArray_1 = require("./toArray");
function joinAllInternals(joinFn, project) {
    return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function(sources) {
        return joinFn(sources);
    }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
}
exports.joinAllInternals = joinAllInternals;

},{"../util/identity":"2QJLj","../util/mapOneOrManyArgs":"6B4SF","../util/pipe":"2vIS3","./mergeMap":"4fW0U","./toArray":"527FC"}],"527FC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toArray = void 0;
var reduce_1 = require("./reduce");
var lift_1 = require("../util/lift");
var arrReducer = function(arr, value) {
    return arr.push(value), arr;
};
function toArray() {
    return lift_1.operate(function(source, subscriber) {
        reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
    });
}
exports.toArray = toArray;

},{"./reduce":"3TxGZ","../util/lift":"3Hhm5"}],"3TxGZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reduce = void 0;
var scanInternals_1 = require("./scanInternals");
var lift_1 = require("../util/lift");
function reduce(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
}
exports.reduce = reduce;

},{"./scanInternals":"luUi9","../util/lift":"3Hhm5"}],"luUi9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scanInternals = void 0;
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function(source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var i = index++;
            state = hasState ? accumulator(state, value, i) : (hasState = true, value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete && function() {
            hasState && subscriber.next(state);
            subscriber.complete();
        }));
    };
}
exports.scanInternals = scanInternals;

},{"./OperatorSubscriber":"3gY6m"}],"t4ehX":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineLatestWith = void 0;
var combineLatest_1 = require("./combineLatest");
function combineLatestWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.combineLatestWith = combineLatestWith;

},{"./combineLatest":"5eas8"}],"5eas8":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineLatest = void 0;
var combineLatest_1 = require("../observable/combineLatest");
var lift_1 = require("../util/lift");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var pipe_1 = require("../util/pipe");
var args_1 = require("../util/args");
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var resultSelector = args_1.popResultSelector(args);
    return resultSelector ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : lift_1.operate(function(source, subscriber) {
        combineLatest_1.combineLatestInit(__spreadArray([
            source
        ], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
    });
}
exports.combineLatest = combineLatest;

},{"../observable/combineLatest":"wOUJf","../util/lift":"3Hhm5","../util/argsOrArgArray":"4SxkS","../util/mapOneOrManyArgs":"6B4SF","../util/pipe":"2vIS3","../util/args":"3JFPu"}],"68xy2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatMap = void 0;
var mergeMap_1 = require("./mergeMap");
var isFunction_1 = require("../util/isFunction");
function concatMap(project, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
}
exports.concatMap = concatMap;

},{"./mergeMap":"4fW0U","../util/isFunction":"1rux0"}],"1kQZJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatMapTo = void 0;
var concatMap_1 = require("./concatMap");
var isFunction_1 = require("../util/isFunction");
function concatMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function() {
        return innerObservable;
    }, resultSelector) : concatMap_1.concatMap(function() {
        return innerObservable;
    });
}
exports.concatMapTo = concatMapTo;

},{"./concatMap":"68xy2","../util/isFunction":"1rux0"}],"4c2En":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatWith = void 0;
var concat_1 = require("./concat");
function concatWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.concatWith = concatWith;

},{"./concat":"3tps8"}],"3tps8":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concat = void 0;
var lift_1 = require("../util/lift");
var concatAll_1 = require("./concatAll");
var fromArray_1 = require("../observable/fromArray");
var args_1 = require("../util/args");
function concat() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(args);
    return lift_1.operate(function(source, subscriber) {
        concatAll_1.concatAll()(fromArray_1.internalFromArray(__spreadArray([
            source
        ], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.concat = concat;

},{"../util/lift":"3Hhm5","./concatAll":"2P5sS","../observable/fromArray":"PMrPy","../util/args":"3JFPu"}],"50Bzu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connect = void 0;
var Subject_1 = require("../Subject");
var from_1 = require("../observable/from");
var lift_1 = require("../util/lift");
var fromSubscribable_1 = require("../observable/fromSubscribable");
var DEFAULT_CONFIG = {
    connector: function() {
        return new Subject_1.Subject();
    }
};
function connect(selector, config) {
    if (config === void 0) config = DEFAULT_CONFIG;
    var connector = config.connector;
    return lift_1.operate(function(source, subscriber) {
        var subject = connector();
        from_1.from(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
    });
}
exports.connect = connect;

},{"../Subject":"CTCrE","../observable/from":"Fatr8","../util/lift":"3Hhm5","../observable/fromSubscribable":"2pPqG"}],"2pPqG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromSubscribable = void 0;
var Observable_1 = require("../Observable");
function fromSubscribable(subscribable) {
    return new Observable_1.Observable(function(subscriber) {
        return subscribable.subscribe(subscriber);
    });
}
exports.fromSubscribable = fromSubscribable;

},{"../Observable":"6XfFQ"}],"5faBf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.count = void 0;
var reduce_1 = require("./reduce");
function count(predicate) {
    return reduce_1.reduce(function(total, value, i) {
        return !predicate || predicate(value, i) ? total + 1 : total;
    }, 0);
}
exports.count = count;

},{"./reduce":"3TxGZ"}],"67FsD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debounce = void 0;
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
function debounce(durationSelector) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function() {
            durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
            hasValue = true;
            lastValue = value;
            durationSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, emit, noop_1.noop);
            from_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, function() {
            emit();
            subscriber.complete();
        }, undefined, function() {
            lastValue = durationSubscriber = null;
        }));
    });
}
exports.debounce = debounce;

},{"../util/lift":"3Hhm5","../util/noop":"2s9LI","./OperatorSubscriber":"3gY6m","../observable/from":"Fatr8"}],"4Upo7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debounceTime = void 0;
var async_1 = require("../scheduler/async");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) scheduler = async_1.asyncScheduler;
    return lift_1.operate(function(source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function() {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            var targetTime = lastTime + dueTime;
            var now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                subscriber.add(activeTask);
                return;
            }
            emit();
        }
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) {
                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                subscriber.add(activeTask);
            }
        }, function() {
            emit();
            subscriber.complete();
        }, undefined, function() {
            lastValue = activeTask = null;
        }));
    });
}
exports.debounceTime = debounceTime;

},{"../scheduler/async":"5ysvr","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"2I3x9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultIfEmpty = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function defaultIfEmpty(defaultValue) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            subscriber.next(value);
        }, function() {
            if (!hasValue) subscriber.next(defaultValue);
            subscriber.complete();
        }));
    });
}
exports.defaultIfEmpty = defaultIfEmpty;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"6aRaf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.delay = void 0;
var async_1 = require("../scheduler/async");
var delayWhen_1 = require("./delayWhen");
var timer_1 = require("../observable/timer");
function delay(due, scheduler) {
    if (scheduler === void 0) scheduler = async_1.asyncScheduler;
    var duration = timer_1.timer(due, scheduler);
    return delayWhen_1.delayWhen(function() {
        return duration;
    });
}
exports.delay = delay;

},{"../scheduler/async":"5ysvr","./delayWhen":"8SVw1","../observable/timer":"MBto6"}],"8SVw1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.delayWhen = void 0;
var concat_1 = require("../observable/concat");
var take_1 = require("./take");
var ignoreElements_1 = require("./ignoreElements");
var mapTo_1 = require("./mapTo");
var mergeMap_1 = require("./mergeMap");
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) return function(source) {
        return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
    };
    return mergeMap_1.mergeMap(function(value, index) {
        return delayDurationSelector(value, index).pipe(take_1.take(1), mapTo_1.mapTo(value));
    });
}
exports.delayWhen = delayWhen;

},{"../observable/concat":"3qROP","./take":"1xTbv","./ignoreElements":"3Y2dk","./mapTo":"1gdEu","./mergeMap":"4fW0U"}],"1xTbv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.take = void 0;
var empty_1 = require("../observable/empty");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function take(count) {
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var seen = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            if ((++seen) <= count) {
                subscriber.next(value);
                if (count <= seen) subscriber.complete();
            }
        }));
    });
}
exports.take = take;

},{"../observable/empty":"2Zbmy","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"3Y2dk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ignoreElements = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
function ignoreElements() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, noop_1.noop));
    });
}
exports.ignoreElements = ignoreElements;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../util/noop":"2s9LI"}],"1gdEu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapTo = void 0;
var map_1 = require("./map");
function mapTo(value) {
    return map_1.map(function() {
        return value;
    });
}
exports.mapTo = mapTo;

},{"./map":"7vINI"}],"3oX5j":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dematerialize = void 0;
var Notification_1 = require("../Notification");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function dematerialize() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(notification) {
            return Notification_1.observeNotification(notification, subscriber);
        }));
    });
}
exports.dematerialize = dematerialize;

},{"../Notification":"6rp8f","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"3ORk0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.distinct = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
function distinct(keySelector, flushes) {
    return lift_1.operate(function(source, subscriber) {
        var distinctKeys = new Set();
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var key = keySelector ? keySelector(value) : value;
            if (!distinctKeys.has(key)) {
                distinctKeys.add(key);
                subscriber.next(value);
            }
        }));
        flushes === null || flushes === void 0 || flushes.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            return distinctKeys.clear();
        }, noop_1.noop));
    });
}
exports.distinct = distinct;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../util/noop":"2s9LI"}],"6aPCt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.distinctUntilChanged = void 0;
var identity_1 = require("../util/identity");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) keySelector = identity_1.identity;
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return lift_1.operate(function(source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
exports.distinctUntilChanged = distinctUntilChanged;
function defaultCompare(a, b) {
    return a === b;
}

},{"../util/identity":"2QJLj","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"17gnY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.distinctUntilKeyChanged = void 0;
var distinctUntilChanged_1 = require("./distinctUntilChanged");
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged(function(x, y) {
        return compare ? compare(x[key], y[key]) : x[key] === y[key];
    });
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;

},{"./distinctUntilChanged":"6aPCt"}],"5XXxa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.elementAt = void 0;
var ArgumentOutOfRangeError_1 = require("../util/ArgumentOutOfRangeError");
var filter_1 = require("./filter");
var throwIfEmpty_1 = require("./throwIfEmpty");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var take_1 = require("./take");
function elementAt(index, defaultValue) {
    if (index < 0) throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(filter_1.filter(function(v, i) {
            return i === index;
        }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }));
    };
}
exports.elementAt = elementAt;

},{"../util/ArgumentOutOfRangeError":"4Xzvo","./filter":"2N5w7","./throwIfEmpty":"Cm5Iw","./defaultIfEmpty":"2I3x9","./take":"1xTbv"}],"Cm5Iw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throwIfEmpty = void 0;
var EmptyError_1 = require("../util/EmptyError");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) errorFactory = defaultErrorFactory;
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            subscriber.next(value);
        }, function() {
            return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
        }));
    });
}
exports.throwIfEmpty = throwIfEmpty;
function defaultErrorFactory() {
    return new EmptyError_1.EmptyError();
}

},{"../util/EmptyError":"63brV","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"4RjZA":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.endWith = void 0;
var concat_1 = require("../observable/concat");
var of_1 = require("../observable/of");
function endWith() {
    var values = [];
    for(var _i = 0; _i < arguments.length; _i++)values[_i] = arguments[_i];
    return function(source) {
        return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values))));
    };
}
exports.endWith = endWith;

},{"../observable/concat":"3qROP","../observable/of":"745Yx"}],"7fEfN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.every = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function every(predicate, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            if (!predicate.call(thisArg, value, index++, source)) {
                subscriber.next(false);
                subscriber.complete();
            }
        }, function() {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.every = every;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"6cmhn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exhaust = void 0;
var exhaustAll_1 = require("./exhaustAll");
exports.exhaust = exhaustAll_1.exhaustAll;

},{"./exhaustAll":"6R2EU"}],"6R2EU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exhaustAll = void 0;
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function exhaustAll() {
    return lift_1.operate(function(source, subscriber) {
        var isComplete = false;
        var innerSub = null;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(inner) {
            if (!innerSub) innerSub = from_1.innerFrom(inner).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, function() {
                innerSub = null;
                isComplete && subscriber.complete();
            }));
        }, function() {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}
exports.exhaustAll = exhaustAll;

},{"../util/lift":"3Hhm5","../observable/from":"Fatr8","./OperatorSubscriber":"3gY6m"}],"7MBzU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exhaustMap = void 0;
var map_1 = require("./map");
var from_1 = require("../observable/from");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function exhaustMap(project, resultSelector) {
    if (resultSelector) return function(source) {
        return source.pipe(exhaustMap(function(a, i) {
            return from_1.innerFrom(project(a, i)).pipe(map_1.map(function(b, ii) {
                return resultSelector(a, b, i, ii);
            }));
        }));
    };
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(outerValue) {
            if (!innerSub) {
                innerSub = new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, function() {
                    innerSub = null;
                    isComplete && subscriber.complete();
                });
                from_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
            }
        }, function() {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}
exports.exhaustMap = exhaustMap;

},{"./map":"7vINI","../observable/from":"Fatr8","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"5TMHk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expand = void 0;
var lift_1 = require("../util/lift");
var mergeInternals_1 = require("./mergeInternals");
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) concurrent = Infinity;
    concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
    return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, undefined, true, scheduler);
    });
}
exports.expand = expand;

},{"../util/lift":"3Hhm5","./mergeInternals":"3hBCt"}],"3kxvl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.finalize = void 0;
var lift_1 = require("../util/lift");
function finalize(callback) {
    return lift_1.operate(function(source, subscriber) {
        try {
            source.subscribe(subscriber);
        } finally{
            subscriber.add(callback);
        }
    });
}
exports.finalize = finalize;

},{"../util/lift":"3Hhm5"}],"3TWil":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createFind = exports.find = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function find(predicate, thisArg) {
    return lift_1.operate(createFind(predicate, thisArg, 'value'));
}
exports.find = find;
function createFind(predicate, thisArg, emit) {
    var findIndex = emit === 'index';
    return function(source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var i = index++;
            if (predicate.call(thisArg, value, i, source)) {
                subscriber.next(findIndex ? i : value);
                subscriber.complete();
            }
        }, function() {
            subscriber.next(findIndex ? -1 : undefined);
            subscriber.complete();
        }));
    };
}
exports.createFind = createFind;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"45zuM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findIndex = void 0;
var lift_1 = require("../util/lift");
var find_1 = require("./find");
function findIndex(predicate, thisArg) {
    return lift_1.operate(find_1.createFind(predicate, thisArg, 'index'));
}
exports.findIndex = findIndex;

},{"../util/lift":"3Hhm5","./find":"3TWil"}],"N6ye1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = void 0;
var EmptyError_1 = require("../util/EmptyError");
var filter_1 = require("./filter");
var take_1 = require("./take");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var throwIfEmpty_1 = require("./throwIfEmpty");
var identity_1 = require("../util/identity");
function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
            return predicate(v, i, source);
        }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new EmptyError_1.EmptyError();
        }));
    };
}
exports.first = first;

},{"../util/EmptyError":"63brV","./filter":"2N5w7","./take":"1xTbv","./defaultIfEmpty":"2I3x9","./throwIfEmpty":"Cm5Iw","../util/identity":"2QJLj"}],"4QN6N":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.groupBy = void 0;
var Observable_1 = require("../Observable");
var from_1 = require("../observable/from");
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function groupBy(keySelector, elementOrOptions, duration, connector) {
    return lift_1.operate(function(source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === 'function') element = elementOrOptions;
        else duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
        var groups = new Map();
        var notify = function(cb) {
            groups.forEach(cb);
            cb(subscriber);
        };
        var handleError = function(err) {
            return notify(function(consumer) {
                return consumer.error(err);
            });
        };
        var groupBySourceSubscriber = new GroupBySubscriber1(subscriber, function(value) {
            try {
                var key_1 = keySelector(value);
                var group_1 = groups.get(key_1);
                if (!group_1) {
                    groups.set(key_1, group_1 = connector ? connector() : new Subject_1.Subject());
                    var grouped = createGroupedObservable(key_1, group_1);
                    subscriber.next(grouped);
                    if (duration) {
                        var durationSubscriber_1 = new OperatorSubscriber_1.OperatorSubscriber(group_1, function() {
                            group_1.complete();
                            durationSubscriber_1 === null || durationSubscriber_1 === void 0 || durationSubscriber_1.unsubscribe();
                        }, undefined, undefined, function() {
                            return groups.delete(key_1);
                        });
                        groupBySourceSubscriber.add(from_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
                    }
                }
                group_1.next(element ? element(value) : value);
            } catch (err) {
                handleError(err);
            }
        }, function() {
            return notify(function(consumer) {
                return consumer.complete();
            });
        }, handleError, function() {
            return groups.clear();
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
            var result = new Observable_1.Observable(function(groupSubscriber) {
                groupBySourceSubscriber.activeGroups++;
                var innerSub = groupSubject.subscribe(groupSubscriber);
                return function() {
                    innerSub.unsubscribe();
                    (--groupBySourceSubscriber.activeGroups) === 0 && groupBySourceSubscriber.teardownAttempted && groupBySourceSubscriber.unsubscribe();
                };
            });
            result.key = key;
            return result;
        }
    });
}
exports.groupBy = groupBy;
var GroupBySubscriber1 = function(_super) {
    __extends(GroupBySubscriber2, _super);
    function GroupBySubscriber2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeGroups = 0;
        _this.teardownAttempted = false;
        return _this;
    }
    GroupBySubscriber2.prototype.unsubscribe = function() {
        this.teardownAttempted = true;
        this.activeGroups === 0 && _super.prototype.unsubscribe.call(this);
    };
    return GroupBySubscriber2;
}(OperatorSubscriber_1.OperatorSubscriber);

},{"../Observable":"6XfFQ","../observable/from":"Fatr8","../Subject":"CTCrE","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"4nR9K":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEmpty = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function isEmpty() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            subscriber.next(false);
            subscriber.complete();
        }, function() {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.isEmpty = isEmpty;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"4m9Y7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.last = void 0;
var EmptyError_1 = require("../util/EmptyError");
var filter_1 = require("./filter");
var takeLast_1 = require("./takeLast");
var throwIfEmpty_1 = require("./throwIfEmpty");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var identity_1 = require("../util/identity");
function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
            return predicate(v, i, source);
        }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new EmptyError_1.EmptyError();
        }));
    };
}
exports.last = last;

},{"../util/EmptyError":"63brV","./filter":"2N5w7","./takeLast":"4EHbt","./throwIfEmpty":"Cm5Iw","./defaultIfEmpty":"2I3x9","../util/identity":"2QJLj"}],"4EHbt":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.takeLast = void 0;
var empty_1 = require("../observable/empty");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function takeLast(count) {
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var buffer = [];
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            buffer.push(value);
            count < buffer.length && buffer.shift();
        }, function() {
            var e_1, _a;
            try {
                for(var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()){
                    var value = buffer_1_1.value;
                    subscriber.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return)) _a.call(buffer_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            subscriber.complete();
        }, undefined, function() {
            buffer = null;
        }));
    });
}
exports.takeLast = takeLast;

},{"../observable/empty":"2Zbmy","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"4BEyj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.materialize = void 0;
var Notification_1 = require("../Notification");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function materialize() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            subscriber.next(Notification_1.Notification.createNext(value));
        }, function() {
            subscriber.next(Notification_1.Notification.createComplete());
            subscriber.complete();
        }, function(err) {
            subscriber.next(Notification_1.Notification.createError(err));
            subscriber.complete();
        }));
    });
}
exports.materialize = materialize;

},{"../Notification":"6rp8f","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"57zqa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.max = void 0;
var reduce_1 = require("./reduce");
var isFunction_1 = require("../util/isFunction");
function max(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) > 0 ? x : y;
    } : function(x, y) {
        return x > y ? x : y;
    });
}
exports.max = max;

},{"./reduce":"3TxGZ","../util/isFunction":"1rux0"}],"6hXFK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flatMap = void 0;
var mergeMap_1 = require("./mergeMap");
exports.flatMap = mergeMap_1.mergeMap;

},{"./mergeMap":"4fW0U"}],"5p4nZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeMapTo = void 0;
var mergeMap_1 = require("./mergeMap");
var isFunction_1 = require("../util/isFunction");
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    if (isFunction_1.isFunction(resultSelector)) return mergeMap_1.mergeMap(function() {
        return innerObservable;
    }, resultSelector, concurrent);
    if (typeof resultSelector === 'number') concurrent = resultSelector;
    return mergeMap_1.mergeMap(function() {
        return innerObservable;
    }, concurrent);
}
exports.mergeMapTo = mergeMapTo;

},{"./mergeMap":"4fW0U","../util/isFunction":"1rux0"}],"4l3Oi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeScan = void 0;
var lift_1 = require("../util/lift");
var mergeInternals_1 = require("./mergeInternals");
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    return lift_1.operate(function(source, subscriber) {
        var state = seed;
        return mergeInternals_1.mergeInternals(source, subscriber, function(value, index) {
            return accumulator(state, value, index);
        }, concurrent, function(value) {
            state = value;
        }, false, undefined, function() {
            return state = null;
        });
    });
}
exports.mergeScan = mergeScan;

},{"../util/lift":"3Hhm5","./mergeInternals":"3hBCt"}],"6LlCu":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeWith = void 0;
var merge_1 = require("./merge");
function mergeWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.mergeWith = mergeWith;

},{"./merge":"5SIJK"}],"5SIJK":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.merge = void 0;
var lift_1 = require("../util/lift");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var fromArray_1 = require("../observable/fromArray");
var mergeAll_1 = require("./mergeAll");
var args_1 = require("../util/args");
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    args = argsOrArgArray_1.argsOrArgArray(args);
    return lift_1.operate(function(source, subscriber) {
        mergeAll_1.mergeAll(concurrent)(fromArray_1.internalFromArray(__spreadArray([
            source
        ], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.merge = merge;

},{"../util/lift":"3Hhm5","../util/argsOrArgArray":"4SxkS","../observable/fromArray":"PMrPy","./mergeAll":"3xK3Y","../util/args":"3JFPu"}],"6jdSe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.min = void 0;
var reduce_1 = require("./reduce");
var isFunction_1 = require("../util/isFunction");
function min(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) < 0 ? x : y;
    } : function(x, y) {
        return x < y ? x : y;
    });
}
exports.min = min;

},{"./reduce":"3TxGZ","../util/isFunction":"1rux0"}],"3iTSS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multicast = void 0;
var ConnectableObservable_1 = require("../observable/ConnectableObservable");
var isFunction_1 = require("../util/isFunction");
var connect_1 = require("./connect");
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function() {
        return subjectOrSubjectFactory;
    };
    if (isFunction_1.isFunction(selector)) return connect_1.connect(selector, {
        connector: subjectFactory
    });
    return function(source) {
        return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory);
    };
}
exports.multicast = multicast;

},{"../observable/ConnectableObservable":"3B9kX","../util/isFunction":"1rux0","./connect":"50Bzu"}],"65oXR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pairwise = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function pairwise() {
    return lift_1.operate(function(source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var p = prev;
            prev = value;
            hasPrev && subscriber.next([
                p,
                value
            ]);
            hasPrev = true;
        }));
    });
}
exports.pairwise = pairwise;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"yepFU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pluck = void 0;
var map_1 = require("./map");
function pluck() {
    var properties = [];
    for(var _i = 0; _i < arguments.length; _i++)properties[_i] = arguments[_i];
    var length = properties.length;
    if (length === 0) throw new Error('list of properties cannot be empty.');
    return map_1.map(function(x) {
        var currentProp = x;
        for(var i = 0; i < length; i++){
            var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
            if (typeof p !== 'undefined') currentProp = p;
            else return undefined;
        }
        return currentProp;
    });
}
exports.pluck = pluck;

},{"./map":"7vINI"}],"39qzq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publish = void 0;
var Subject_1 = require("../Subject");
var multicast_1 = require("./multicast");
var connect_1 = require("./connect");
function publish(selector) {
    return selector ? function(source) {
        return connect_1.connect(selector)(source);
    } : function(source) {
        return multicast_1.multicast(new Subject_1.Subject())(source);
    };
}
exports.publish = publish;

},{"../Subject":"CTCrE","./multicast":"3iTSS","./connect":"50Bzu"}],"2YMyb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publishBehavior = void 0;
var BehaviorSubject_1 = require("../BehaviorSubject");
var ConnectableObservable_1 = require("../observable/ConnectableObservable");
function publishBehavior(initialValue) {
    return function(source) {
        var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
            return subject;
        });
    };
}
exports.publishBehavior = publishBehavior;

},{"../BehaviorSubject":"1BSll","../observable/ConnectableObservable":"3B9kX"}],"4yeyu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publishLast = void 0;
var AsyncSubject_1 = require("../AsyncSubject");
var ConnectableObservable_1 = require("../observable/ConnectableObservable");
function publishLast() {
    return function(source) {
        var subject = new AsyncSubject_1.AsyncSubject();
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
            return subject;
        });
    };
}
exports.publishLast = publishLast;

},{"../AsyncSubject":"OZRwe","../observable/ConnectableObservable":"3B9kX"}],"5jD4L":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publishReplay = void 0;
var ReplaySubject_1 = require("../ReplaySubject");
var multicast_1 = require("./multicast");
var isFunction_1 = require("../util/isFunction");
function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
    if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) timestampProvider = selectorOrScheduler;
    var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : undefined;
    return function(source) {
        return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
    };
}
exports.publishReplay = publishReplay;

},{"../ReplaySubject":"7ewvk","./multicast":"3iTSS","../util/isFunction":"1rux0"}],"2v4aE":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.raceWith = void 0;
var race_1 = require("../observable/race");
var lift_1 = require("../util/lift");
var identity_1 = require("../util/identity");
function raceWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return !otherSources.length ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        race_1.raceInit(__spreadArray([
            source
        ], __read(otherSources)))(subscriber);
    });
}
exports.raceWith = raceWith;

},{"../observable/race":"1MY0M","../util/lift":"3Hhm5","../util/identity":"2QJLj"}],"5y2D2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.repeat = void 0;
var empty_1 = require("../observable/empty");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function repeat(count) {
    if (count === void 0) count = Infinity;
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRepeat = function() {
            var syncUnsub = false;
            innerSub = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, function() {
                if ((++soFar) < count) {
                    if (innerSub) {
                        innerSub.unsubscribe();
                        innerSub = null;
                        subscribeForRepeat();
                    } else syncUnsub = true;
                } else subscriber.complete();
            }));
            if (syncUnsub) {
                innerSub.unsubscribe();
                innerSub = null;
                subscribeForRepeat();
            }
        };
        subscribeForRepeat();
    });
}
exports.repeat = repeat;

},{"../observable/empty":"2Zbmy","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"1i6sg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.repeatWhen = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function repeatWhen(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = function() {
            return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
        };
        var getCompletionSubject = function() {
            if (!completions$) {
                completions$ = new Subject_1.Subject();
                notifier(completions$).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
                    if (innerSub) subscribeForRepeatWhen();
                    else syncResub = true;
                }, function() {
                    isNotifierComplete = true;
                    checkComplete();
                }));
            }
            return completions$;
        };
        var subscribeForRepeatWhen = function() {
            isMainComplete = false;
            innerSub = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, function() {
                isMainComplete = true;
                !checkComplete() && getCompletionSubject().next();
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRepeatWhen();
            }
        };
        subscribeForRepeatWhen();
    });
}
exports.repeatWhen = repeatWhen;

},{"../Subject":"CTCrE","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"2eQI2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.retry = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var identity_1 = require("../util/identity");
function retry(configOrCount) {
    if (configOrCount === void 0) configOrCount = Infinity;
    var config;
    if (configOrCount && typeof configOrCount === 'object') config = configOrCount;
    else config = {
        count: configOrCount
    };
    var count = config.count, _a = config.resetOnSuccess, resetOnSuccess = _a === void 0 ? false : _a;
    return count <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRetry = function() {
            var syncUnsub = false;
            innerSub = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                if (resetOnSuccess) soFar = 0;
                subscriber.next(value);
            }, undefined, function(err) {
                if ((soFar++) < count) {
                    if (innerSub) {
                        innerSub.unsubscribe();
                        innerSub = null;
                        subscribeForRetry();
                    } else syncUnsub = true;
                } else subscriber.error(err);
            }));
            if (syncUnsub) {
                innerSub.unsubscribe();
                innerSub = null;
                subscribeForRetry();
            }
        };
        subscribeForRetry();
    });
}
exports.retry = retry;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../util/identity":"2QJLj"}],"6LMq8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.retryWhen = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function retryWhen(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = function() {
            innerSub = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, undefined, function(err) {
                if (!errors$) {
                    errors$ = new Subject_1.Subject();
                    notifier(errors$).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
                        return innerSub ? subscribeForRetryWhen() : syncResub = true;
                    }));
                }
                if (errors$) errors$.next(err);
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRetryWhen();
            }
        };
        subscribeForRetryWhen();
    });
}
exports.retryWhen = retryWhen;

},{"../Subject":"CTCrE","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"1lKzw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sample = void 0;
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function sample(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            lastValue = value;
        }));
        var emit = function() {
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        notifier.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, emit, noop_1.noop));
    });
}
exports.sample = sample;

},{"../util/lift":"3Hhm5","../util/noop":"2s9LI","./OperatorSubscriber":"3gY6m"}],"6Fu8N":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sampleTime = void 0;
var async_1 = require("../scheduler/async");
var sample_1 = require("./sample");
var interval_1 = require("../observable/interval");
function sampleTime(period, scheduler) {
    if (scheduler === void 0) scheduler = async_1.asyncScheduler;
    return sample_1.sample(interval_1.interval(period, scheduler));
}
exports.sampleTime = sampleTime;

},{"../scheduler/async":"5ysvr","./sample":"1lKzw","../observable/interval":"aMShB"}],"6ImHt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scan = void 0;
var lift_1 = require("../util/lift");
var scanInternals_1 = require("./scanInternals");
function scan(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
}
exports.scan = scan;

},{"../util/lift":"3Hhm5","./scanInternals":"luUi9"}],"M5aEq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sequenceEqual = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function sequenceEqual(compareTo, comparator) {
    if (comparator === void 0) comparator = function(a, b) {
        return a === b;
    };
    return lift_1.operate(function(source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = function(isEqual) {
            subscriber.next(isEqual);
            subscriber.complete();
        };
        var createSubscriber = function(selfState, otherState) {
            var sequenceEqualSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(a) {
                var buffer = otherState.buffer, complete = otherState.complete;
                if (buffer.length === 0) complete ? emit(false) : selfState.buffer.push(a);
                else !comparator(a, buffer.shift()) && emit(false);
            }, function() {
                selfState.complete = true;
                var complete = otherState.complete, buffer = otherState.buffer;
                complete && emit(buffer.length === 0);
                sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 || sequenceEqualSubscriber.unsubscribe();
            });
            return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        compareTo.subscribe(createSubscriber(bState, aState));
    });
}
exports.sequenceEqual = sequenceEqual;
function createState() {
    return {
        buffer: [],
        complete: false
    };
}

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"3vbZZ":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.share = void 0;
var from_1 = require("../observable/from");
var take_1 = require("../operators/take");
var Subject_1 = require("../Subject");
var Subscriber_1 = require("../Subscriber");
var lift_1 = require("../util/lift");
function share(options) {
    if (options === void 0) options = {
    };
    var _a = options.connector, connector = _a === void 0 ? function() {
        return new Subject_1.Subject();
    } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
    return function(wrapperSource) {
        var connection = null;
        var resetConnection = null;
        var subject = null;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function() {
            resetConnection === null || resetConnection === void 0 || resetConnection.unsubscribe();
            resetConnection = null;
        };
        var reset = function() {
            cancelReset();
            connection = subject = null;
            hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function() {
            var conn = connection;
            reset();
            conn === null || conn === void 0 || conn.unsubscribe();
        };
        return lift_1.operate(function(source, subscriber) {
            refCount++;
            if (!hasErrored && !hasCompleted) cancelReset();
            var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
            subscriber.add(function() {
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
            });
            dest.subscribe(subscriber);
            if (!connection) {
                connection = new Subscriber_1.SafeSubscriber({
                    next: function(value) {
                        return dest.next(value);
                    },
                    error: function(err) {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: function() {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    }
                });
                from_1.from(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
exports.share = share;
function handleReset(reset, on) {
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
    if (on === true) {
        reset();
        return null;
    }
    if (on === false) return null;
    return on.apply(void 0, __spreadArray([], __read(args))).pipe(take_1.take(1)).subscribe(function() {
        return reset();
    });
}

},{"../observable/from":"Fatr8","../operators/take":"1xTbv","../Subject":"CTCrE","../Subscriber":"1ew17","../util/lift":"3Hhm5"}],"H0qLJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shareReplay = void 0;
var ReplaySubject_1 = require("../ReplaySubject");
var share_1 = require("./share");
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var _a, _b;
    var bufferSize;
    var refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        bufferSize = (_a = configOrBufferSize.bufferSize) !== null && _a !== void 0 ? _a : Infinity;
        windowTime = (_b = configOrBufferSize.windowTime) !== null && _b !== void 0 ? _b : Infinity;
        refCount = !!configOrBufferSize.refCount;
        scheduler = configOrBufferSize.scheduler;
    } else bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
    return share_1.share({
        connector: function() {
            return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
        },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
    });
}
exports.shareReplay = shareReplay;

},{"../ReplaySubject":"7ewvk","./share":"3vbZZ"}],"3HVwH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.single = void 0;
var EmptyError_1 = require("../util/EmptyError");
var SequenceError_1 = require("../util/SequenceError");
var NotFoundError_1 = require("../util/NotFoundError");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function single(predicate) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            seenValue = true;
            if (!predicate || predicate(value, index++, source)) {
                hasValue && subscriber.error(new SequenceError_1.SequenceError('Too many matching values'));
                hasValue = true;
                singleValue = value;
            }
        }, function() {
            if (hasValue) {
                subscriber.next(singleValue);
                subscriber.complete();
            } else subscriber.error(seenValue ? new NotFoundError_1.NotFoundError('No matching values') : new EmptyError_1.EmptyError());
        }));
    });
}
exports.single = single;

},{"../util/EmptyError":"63brV","../util/SequenceError":"3yeE8","../util/NotFoundError":"ZITwI","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"1Zvvz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skip = void 0;
var filter_1 = require("./filter");
function skip(count) {
    return filter_1.filter(function(_, index) {
        return count <= index;
    });
}
exports.skip = skip;

},{"./filter":"2N5w7"}],"53Cgb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skipLast = void 0;
var identity_1 = require("../util/identity");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function skipLast(skipCount) {
    return skipCount <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var ring = new Array(skipCount);
        var seen = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var valueIndex = seen++;
            if (valueIndex < skipCount) ring[valueIndex] = value;
            else {
                var index = valueIndex % skipCount;
                var oldValue = ring[index];
                ring[index] = value;
                subscriber.next(oldValue);
            }
        }));
        return function() {
            ring = null;
        };
    });
}
exports.skipLast = skipLast;

},{"../util/identity":"2QJLj","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"3oGQD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skipUntil = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
var noop_1 = require("../util/noop");
function skipUntil(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var skipSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            skipSubscriber === null || skipSubscriber === void 0 || skipSubscriber.unsubscribe();
            taking = true;
        }, noop_1.noop);
        from_1.innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return taking && subscriber.next(value);
        }));
    });
}
exports.skipUntil = skipUntil;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../observable/from":"Fatr8","../util/noop":"2s9LI"}],"5Ncfr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skipWhile = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function skipWhile(predicate) {
    return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
        }));
    });
}
exports.skipWhile = skipWhile;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"1VLVH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startWith = void 0;
var concat_1 = require("../observable/concat");
var args_1 = require("../util/args");
var lift_1 = require("../util/lift");
function startWith() {
    var values = [];
    for(var _i = 0; _i < arguments.length; _i++)values[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(values);
    return lift_1.operate(function(source, subscriber) {
        (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
    });
}
exports.startWith = startWith;

},{"../observable/concat":"3qROP","../util/args":"3JFPu","../util/lift":"3Hhm5"}],"6Nq3y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.switchAll = void 0;
var switchMap_1 = require("./switchMap");
var identity_1 = require("../util/identity");
function switchAll() {
    return switchMap_1.switchMap(identity_1.identity);
}
exports.switchAll = switchAll;

},{"./switchMap":"4GFqi","../util/identity":"2QJLj"}],"4GFqi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.switchMap = void 0;
var from_1 = require("../observable/from");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function switchMap(project, resultSelector) {
    return lift_1.operate(function(source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function() {
            return isComplete && !innerSubscriber && subscriber.complete();
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            innerSubscriber === null || innerSubscriber === void 0 || innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            from_1.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(innerValue) {
                return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
            }, function() {
                innerSubscriber = null;
                checkComplete();
            }));
        }, function() {
            isComplete = true;
            checkComplete();
        }));
    });
}
exports.switchMap = switchMap;

},{"../observable/from":"Fatr8","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"1wyvB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.switchMapTo = void 0;
var switchMap_1 = require("./switchMap");
var isFunction_1 = require("../util/isFunction");
function switchMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function() {
        return innerObservable;
    }, resultSelector) : switchMap_1.switchMap(function() {
        return innerObservable;
    });
}
exports.switchMapTo = switchMapTo;

},{"./switchMap":"4GFqi","../util/isFunction":"1rux0"}],"5MvyL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.switchScan = void 0;
var switchMap_1 = require("./switchMap");
var lift_1 = require("../util/lift");
function switchScan(accumulator, seed) {
    return lift_1.operate(function(source, subscriber) {
        var state = seed;
        switchMap_1.switchMap(function(value, index) {
            return accumulator(state, value, index);
        }, function(_, innerValue) {
            return state = innerValue, innerValue;
        })(source).subscribe(subscriber);
        return function() {
            state = null;
        };
    });
}
exports.switchScan = switchScan;

},{"./switchMap":"4GFqi","../util/lift":"3Hhm5"}],"24StW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.takeUntil = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
var noop_1 = require("../util/noop");
function takeUntil(notifier) {
    return lift_1.operate(function(source, subscriber) {
        from_1.innerFrom(notifier).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            return subscriber.complete();
        }, noop_1.noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}
exports.takeUntil = takeUntil;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../observable/from":"Fatr8","../util/noop":"2s9LI"}],"74gW2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.takeWhile = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) inclusive = false;
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
        }));
    });
}
exports.takeWhile = takeWhile;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"60jQz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tap = void 0;
var isFunction_1 = require("../util/isFunction");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var identity_1 = require("../util/identity");
function tap(observerOrNext, error, complete) {
    var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete ? {
        next: observerOrNext,
        error: error,
        complete: complete
    } : observerOrNext;
    return tapObserver ? lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var _a;
            (_a = tapObserver.next) === null || _a === void 0 || _a.call(tapObserver, value);
            subscriber.next(value);
        }, function() {
            var _a;
            (_a = tapObserver.complete) === null || _a === void 0 || _a.call(tapObserver);
            subscriber.complete();
        }, function(err) {
            var _a;
            (_a = tapObserver.error) === null || _a === void 0 || _a.call(tapObserver, err);
            subscriber.error(err);
        }));
    }) : identity_1.identity;
}
exports.tap = tap;

},{"../util/isFunction":"1rux0","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../util/identity":"2QJLj"}],"2K2ad":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throttle = exports.defaultThrottleConfig = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
exports.defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, _a) {
    var _b = _a === void 0 ? exports.defaultThrottleConfig : _a, leading = _b.leading, trailing = _b.trailing;
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function() {
            throttled === null || throttled === void 0 || throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        var cleanupThrottling = function() {
            throttled = null;
            isComplete && subscriber.complete();
        };
        var startThrottle = function(value) {
            return throttled = from_1.innerFrom(durationSelector(value)).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
        };
        var send = function() {
            if (hasValue) {
                hasValue = false;
                var value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function() {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}
exports.throttle = throttle;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../observable/from":"Fatr8"}],"2adRM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throttleTime = void 0;
var async_1 = require("../scheduler/async");
var throttle_1 = require("./throttle");
var timer_1 = require("../observable/timer");
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) scheduler = async_1.asyncScheduler;
    if (config === void 0) config = throttle_1.defaultThrottleConfig;
    var duration$ = timer_1.timer(duration, scheduler);
    return throttle_1.throttle(function() {
        return duration$;
    }, config);
}
exports.throttleTime = throttleTime;

},{"../scheduler/async":"5ysvr","./throttle":"2K2ad","../observable/timer":"MBto6"}],"6I8Z5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimeInterval = exports.timeInterval = void 0;
var async_1 = require("../scheduler/async");
var scan_1 = require("./scan");
var defer_1 = require("../observable/defer");
var map_1 = require("./map");
function timeInterval(scheduler) {
    if (scheduler === void 0) scheduler = async_1.async;
    return function(source) {
        return defer_1.defer(function() {
            return source.pipe(scan_1.scan(function(_a, value) {
                var current = _a.current;
                return {
                    value: value,
                    current: scheduler.now(),
                    last: current
                };
            }, {
                current: scheduler.now(),
                value: undefined,
                last: undefined
            }), map_1.map(function(_a) {
                var current = _a.current, last = _a.last, value = _a.value;
                return new TimeInterval(value, current - last);
            }));
        });
    };
}
exports.timeInterval = timeInterval;
var TimeInterval = function() {
    function TimeInterval1(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval1;
}();
exports.TimeInterval = TimeInterval;

},{"../scheduler/async":"5ysvr","./scan":"6ImHt","../observable/defer":"6CxUm","./map":"7vINI"}],"5TIWv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timeoutWith = void 0;
var async_1 = require("../scheduler/async");
var isDate_1 = require("../util/isDate");
var timeout_1 = require("./timeout");
function timeoutWith(due, withObservable, scheduler) {
    var first;
    var each;
    var _with;
    scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;
    if (isDate_1.isValidDate(due)) first = due;
    else if (typeof due === 'number') each = due;
    if (withObservable) _with = function() {
        return withObservable;
    };
    else throw new TypeError('No observable provided to switch to');
    if (first == null && each == null) throw new TypeError('No timeout provided.');
    return timeout_1.timeout({
        first: first,
        each: each,
        scheduler: scheduler,
        with: _with
    });
}
exports.timeoutWith = timeoutWith;

},{"../scheduler/async":"5ysvr","../util/isDate":"1CkFX","./timeout":"4fjS3"}],"4nqSg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timestamp = void 0;
var dateTimestampProvider_1 = require("../scheduler/dateTimestampProvider");
var map_1 = require("./map");
function timestamp(timestampProvider) {
    if (timestampProvider === void 0) timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
    return map_1.map(function(value) {
        return {
            value: value,
            timestamp: timestampProvider.now()
        };
    });
}
exports.timestamp = timestamp;

},{"../scheduler/dateTimestampProvider":"30F63","./map":"7vINI"}],"105g5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.window = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
function window(windowBoundaries) {
    return lift_1.operate(function(source, subscriber) {
        var windowSubject = new Subject_1.Subject();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = function(err) {
            windowSubject.error(err);
            subscriber.error(err);
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
        }, function() {
            windowSubject.complete();
            subscriber.complete();
        }, errorHandler));
        windowBoundaries.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            windowSubject.complete();
            subscriber.next(windowSubject = new Subject_1.Subject());
        }, noop_1.noop, errorHandler));
        return function() {
            windowSubject === null || windowSubject === void 0 || windowSubject.unsubscribe();
            windowSubject = null;
        };
    });
}
exports.window = window;

},{"../Subject":"CTCrE","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../util/noop":"2s9LI"}],"1quEw":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.windowCount = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) startWindowEvery = 0;
    var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
    return lift_1.operate(function(source, subscriber) {
        var windows = [
            new Subject_1.Subject()
        ];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            try {
                for(var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()){
                    var window_1 = windows_1_1.value;
                    window_1.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return)) _a.call(windows_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            var c = count - windowSize + 1;
            if (c >= 0 && c % startEvery === 0) windows.shift().complete();
            if ((++count) % startEvery === 0) {
                var window_2 = new Subject_1.Subject();
                windows.push(window_2);
                subscriber.next(window_2.asObservable());
            }
        }, function() {
            while(windows.length > 0)windows.shift().complete();
            subscriber.complete();
        }, function(err) {
            while(windows.length > 0)windows.shift().error(err);
            subscriber.error(err);
        }, function() {
            starts = null;
            windows = null;
        }));
    });
}
exports.windowCount = windowCount;

},{"../Subject":"CTCrE","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m"}],"3AzuH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.windowTime = void 0;
var Subject_1 = require("../Subject");
var async_1 = require("../scheduler/async");
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var arrRemove_1 = require("../util/arrRemove");
var args_1 = require("../util/args");
function windowTime(windowTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for(var _i = 1; _i < arguments.length; _i++)otherArgs[_i - 1] = arguments[_i];
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxWindowSize = otherArgs[1] || Infinity;
    return lift_1.operate(function(source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = function(record) {
            var window = record.window, subs = record.subs;
            window.complete();
            subs.unsubscribe();
            arrRemove_1.arrRemove(windowRecords, record);
            restartOnClose && startWindow();
        };
        var startWindow = function() {
            if (windowRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var window_1 = new Subject_1.Subject();
                var record_1 = {
                    window: window_1,
                    subs: subs,
                    seen: 0
                };
                windowRecords.push(record_1);
                subscriber.next(window_1.asObservable());
                subs.add(scheduler.schedule(function() {
                    return closeWindow(record_1);
                }, windowTimeSpan));
            }
        };
        windowCreationInterval !== null && windowCreationInterval >= 0 ? subscriber.add(scheduler.schedule(function() {
            startWindow();
            !this.closed && subscriber.add(this.schedule(null, windowCreationInterval));
        }, windowCreationInterval)) : restartOnClose = true;
        startWindow();
        var loop = function(cb) {
            return windowRecords.slice().forEach(cb);
        };
        var terminate = function(cb) {
            loop(function(_a1) {
                var window = _a1.window;
                return cb(window);
            });
            cb(subscriber);
            subscriber.unsubscribe();
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            loop(function(record) {
                record.window.next(value);
                maxWindowSize <= ++record.seen && closeWindow(record);
            });
        }, function() {
            return terminate(function(consumer) {
                return consumer.complete();
            });
        }, function(err) {
            return terminate(function(consumer) {
                return consumer.error(err);
            });
        }));
        return function() {
            windowRecords = null;
        };
    });
}
exports.windowTime = windowTime;

},{"../Subject":"CTCrE","../scheduler/async":"5ysvr","../Subscription":"55zJP","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../util/arrRemove":"4Y9kk","../util/args":"3JFPu"}],"4GYVF":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.windowToggle = void 0;
var Subject_1 = require("../Subject");
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
var arrRemove_1 = require("../util/arrRemove");
function windowToggle(openings, closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var windows = [];
        var handleError = function(err) {
            while(0 < windows.length)windows.shift().error(err);
            subscriber.error(err);
        };
        from_1.innerFrom(openings).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(openValue) {
            var window = new Subject_1.Subject();
            windows.push(window);
            var closingSubscription = new Subscription_1.Subscription();
            var closeWindow = function() {
                arrRemove_1.arrRemove(windows, window);
                window.complete();
                closingSubscription.unsubscribe();
            };
            var closingNotifier;
            try {
                closingNotifier = from_1.innerFrom(closingSelector(openValue));
            } catch (err) {
                handleError(err);
                return;
            }
            subscriber.next(window.asObservable());
            closingSubscription.add(closingNotifier.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
        }, noop_1.noop));
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            var windowsCopy = windows.slice();
            try {
                for(var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()){
                    var window_1 = windowsCopy_1_1.value;
                    window_1.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return)) _a.call(windowsCopy_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(0 < windows.length)windows.shift().complete();
            subscriber.complete();
        }, handleError, function() {
            while(0 < windows.length)windows.shift().unsubscribe();
        }));
    });
}
exports.windowToggle = windowToggle;

},{"../Subject":"CTCrE","../Subscription":"55zJP","../util/lift":"3Hhm5","../observable/from":"Fatr8","./OperatorSubscriber":"3gY6m","../util/noop":"2s9LI","../util/arrRemove":"4Y9kk"}],"4AibY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.windowWhen = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
function windowWhen(closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var window;
        var closingSubscriber;
        var handleError = function(err) {
            window.error(err);
            subscriber.error(err);
        };
        var openWindow = function() {
            closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
            window === null || window === void 0 || window.complete();
            window = new Subject_1.Subject();
            subscriber.next(window.asObservable());
            var closingNotifier;
            try {
                closingNotifier = from_1.innerFrom(closingSelector());
            } catch (err) {
                handleError(err);
                return;
            }
            closingNotifier.subscribe(closingSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, openWindow, openWindow, handleError));
        };
        openWindow();
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return window.next(value);
        }, function() {
            window.complete();
            subscriber.complete();
        }, handleError, function() {
            closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
            window = null;
        }));
    });
}
exports.windowWhen = windowWhen;

},{"../Subject":"CTCrE","../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../observable/from":"Fatr8"}],"6sbEL":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withLatestFrom = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
var identity_1 = require("../util/identity");
var noop_1 = require("../util/noop");
var args_1 = require("../util/args");
function withLatestFrom() {
    var inputs = [];
    for(var _i = 0; _i < arguments.length; _i++)inputs[_i] = arguments[_i];
    var project = args_1.popResultSelector(inputs);
    return lift_1.operate(function(source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function() {
            return false;
        });
        var ready = false;
        var _loop_1 = function(i) {
            from_1.innerFrom(inputs[i]).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                otherValues[i] = value;
                if (!ready && !hasValue[i]) {
                    hasValue[i] = true;
                    (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
                }
            }, noop_1.noop));
        };
        for(var i = 0; i < len; i++)_loop_1(i);
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            if (ready) {
                var values = __spreadArray([
                    value
                ], __read(otherValues));
                subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
            }
        }));
    });
}
exports.withLatestFrom = withLatestFrom;

},{"../util/lift":"3Hhm5","./OperatorSubscriber":"3gY6m","../observable/from":"Fatr8","../util/identity":"2QJLj","../util/noop":"2s9LI","../util/args":"3JFPu"}],"6NXh1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zipAll = void 0;
var zip_1 = require("../observable/zip");
var joinAllInternals_1 = require("./joinAllInternals");
function zipAll(project) {
    return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
}
exports.zipAll = zipAll;

},{"../observable/zip":"3Wymr","./joinAllInternals":"5NH2Z"}],"4rW6Y":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zipWith = void 0;
var zip_1 = require("./zip");
function zipWith() {
    var otherInputs = [];
    for(var _i = 0; _i < arguments.length; _i++)otherInputs[_i] = arguments[_i];
    return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
}
exports.zipWith = zipWith;

},{"./zip":"6Tk6F"}],"6Tk6F":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zip = void 0;
var zip_1 = require("../observable/zip");
var lift_1 = require("../util/lift");
function zip() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    return lift_1.operate(function(source, subscriber) {
        zip_1.zip.apply(void 0, __spreadArray([
            source
        ], __read(sources))).subscribe(subscriber);
    });
}
exports.zip = zip;

},{"../observable/zip":"3Wymr","../util/lift":"3Hhm5"}]},["39Mbm","5rkFb"], "5rkFb", "parcelRequire2300")

//# sourceMappingURL=index.3fafb3e2.js.map
