"use strict";
function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
var _createClass = (function () {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
        }
        return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
        };
    })(),
    _typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                  return typeof t;
              }
            : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t;
              };
!(function (t) {
    (t.matches = t.matches || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector),
        (t.closest =
            t.closest ||
            function (t) {
                return this ? (this.matches(t) ? this : this.parentElement ? this.parentElement.closest(t) : null) : null;
            });
})(Element.prototype),
    Object.assign ||
        Object.defineProperty(Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (t, e) {
                if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
                for (var i = Object(t), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (void 0 !== r && null !== r)
                        for (var o = Object.keys(Object(r)), s = 0, a = o.length; s < a; s++) {
                            var l = o[s],
                                c = Object.getOwnPropertyDescriptor(r, l);
                            void 0 !== c && c.enumerable && (i[l] = r[l]);
                        }
                }
                return i;
            },
        }),
    (function (t) {
        function e() {}
        function i(t, e) {
            return function () {
                t.apply(e, arguments);
            };
        }
        function n(t) {
            if ("object" !== _typeof(this)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t) throw new TypeError("not a function");
            (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), c(t, this);
        }
        function r(t, e) {
            for (; 3 === t._state; ) t = t._value;
            0 !== t._state
                ? ((t._handled = !0),
                  n._immediateFn(function () {
                      var i = 1 === t._state ? e.onFulfilled : e.onRejected;
                      if (null !== i) {
                          var n;
                          try {
                              n = i(t._value);
                          } catch (t) {
                              return void s(e.promise, t);
                          }
                          o(e.promise, n);
                      } else (1 === t._state ? o : s)(e.promise, t._value);
                  }))
                : t._deferreds.push(e);
        }
        function o(t, e) {
            try {
                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e)) {
                    var r = e.then;
                    if (e instanceof n) return (t._state = 3), (t._value = e), void a(t);
                    if ("function" == typeof r) return void c(i(r, e), t);
                }
                (t._state = 1), (t._value = e), a(t);
            } catch (e) {
                s(t, e);
            }
        }
        function s(t, e) {
            (t._state = 2), (t._value = e), a(t);
        }
        function a(t) {
            2 === t._state &&
                0 === t._deferreds.length &&
                n._immediateFn(function () {
                    t._handled || n._unhandledRejectionFn(t._value);
                });
            for (var e = 0, i = t._deferreds.length; e < i; e++) r(t, t._deferreds[e]);
            t._deferreds = null;
        }
        function l(t, e, i) {
            (this.onFulfilled = "function" == typeof t ? t : null), (this.onRejected = "function" == typeof e ? e : null), (this.promise = i);
        }
        function c(t, e) {
            var i = !1;
            try {
                t(
                    function (t) {
                        i || ((i = !0), o(e, t));
                    },
                    function (t) {
                        i || ((i = !0), s(e, t));
                    }
                );
            } catch (t) {
                if (i) return;
                (i = !0), s(e, t);
            }
        }
        var h = setTimeout;
        (n.prototype.catch = function (t) {
            return this.then(null, t);
        }),
            (n.prototype.then = function (t, i) {
                var n = new this.constructor(e);
                return r(this, new l(t, i, n)), n;
            }),
            (n.all = function (t) {
                var e = Array.prototype.slice.call(t);
                return new n(function (t, i) {
                    function n(o, s) {
                        try {
                            if (s && ("object" === (void 0 === s ? "undefined" : _typeof(s)) || "function" == typeof s)) {
                                var a = s.then;
                                if ("function" == typeof a)
                                    return void a.call(
                                        s,
                                        function (t) {
                                            n(o, t);
                                        },
                                        i
                                    );
                            }
                            (e[o] = s), 0 == --r && t(e);
                        } catch (t) {
                            i(t);
                        }
                    }
                    if (0 === e.length) return t([]);
                    for (var r = e.length, o = 0; o < e.length; o++) n(o, e[o]);
                });
            }),
            (n.resolve = function (t) {
                return t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && t.constructor === n
                    ? t
                    : new n(function (e) {
                          e(t);
                      });
            }),
            (n.reject = function (t) {
                return new n(function (e, i) {
                    i(t);
                });
            }),
            (n.race = function (t) {
                return new n(function (e, i) {
                    for (var n = 0, r = t.length; n < r; n++) t[n].then(e, i);
                });
            }),
            (n._immediateFn =
                ("function" == typeof setImmediate &&
                    function (t) {
                        setImmediate(t);
                    }) ||
                function (t) {
                    h(t, 0);
                }),
            (n._unhandledRejectionFn = function (t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
            }),
            (n._setImmediateFn = function (t) {
                n._immediateFn = t;
            }),
            (n._setUnhandledRejectionFn = function (t) {
                n._unhandledRejectionFn = t;
            }),
            "undefined" != typeof module && module.exports ? (module.exports = n) : t.Promise || (t.Promise = n);
    })(window);
var EE = {
        subscribers: {},
        on: function (t, e) {
            var i = t || "default";
            this.subscribers[i] || (this.subscribers[i] = []), this.subscribers[i].push(e);
        },
        off: function () {},
        trigger: function (t, e) {
            for (var i = this.subscribers[t], n = 0, r = i.length; n < r; n++) i[n](e);
        },
    },
    Components = (function () {
        function t(e) {
            _classCallCheck(this, t), (this._el = e.elem), (this.activeEl = null), (this._isActive = !1), (this._onDocClick = this._onDocClick.bind(this));
        }
        return (
            _createClass(t, [
                {
                    key: "router",
                    value: function (t) {
                        var e = t.target,
                            i = e.closest("[data-action]");
                        i && this[i.getAttribute("data-action")](i, e);
                    },
                },
                {
                    key: "_onDocClick",
                    value: function (t) {
                        this.activeEl.contains(t.target) || this._close();
                    },
                },
                {
                    key: "toggle",
                    value: function (t) {
                        (this.activeEl = t || this.activeEl), this._isActive ? this._close() : this.open();
                    },
                },
                {
                    key: "open",
                    value: function () {
                        this.activeEl.classList.add("active_js"), document.addEventListener("click", this._onDocClick), (this._isActive = !0);
                    },
                },
                {
                    key: "_close",
                    value: function () {
                        this.activeEl.classList.remove("active_js"), document.removeEventListener("click", this._onDocClick), (this._isActive = !1);
                    },
                },
            ]),
            t
        );
    })(),
    AjaxServices = (function () {
        function t() {
            _classCallCheck(this, t);
        }
        return (
            _createClass(t, null, [
                {
                    key: "ajax",
                    value: function (t, e) {
                        var i = e.method || "GET",
                            n = e.data || "",
                            r = new XMLHttpRequest();
                        r.open(i, t, !0),
                            r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                            r.send(n),
                            (r.onload = function () {
                                200 !== r.status ? console.error("РћС€РёР±РєР°" + r.status) : e.cb(r.responseText);
                            });
                    },
                },
                {
                    key: "promise",
                    value: function (t, e) {
                        return new Promise(function (i, n) {
                            function r() {
                                n(new Error(o.status + ": " + o.statusText));
                            }
                            var o = new XMLHttpRequest(),
                                s = e.method || "GET",
                                a = e.data || "";
                            o.open(s, t, !0),
                                o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                                (o.onload = function () {
                                    200 != o.status ? r() : i();
                                }),
                                (o.onerror = r),
                                o.send(a);
                        });
                    },
                },
            ]),
            t
        );
    })(),
    InstagramServices = (function () {
        function t() {
            _classCallCheck(this, t);
        }
        return (
            _createClass(t, null, [
                {
                    key: "init",
                    value: function () {
                        var e = t.makeQueryString("https://api.instagram.com/oauth/authorize/", { client_id: INSTAGRAM.client_id, redirect_uri: INSTAGRAM.redirect_uri, response_type: "code" }),
                            i = window.open(e, "insta", "width=700,height=700,top=100,left=200");
                        AjaxServices.ajax(LONG_POLLING_URL, {
                            cb: function (t) {
                                1 == (t = JSON.parse(t)).success && (i.close(), (INSTAGRAM.user_id = t.data.user.id), EE.trigger("successApi", { api: "inst" }));
                            },
                        });
                    },
                },
                {
                    key: "makeQueryString",
                    value: function (t, e, i) {
                        var n = t + "?";
                        for (var r in e) n += r + "=" + e[r] + "&";
                        if (i) {
                            var o = "_JSONP_" + Math.floor(100 * Math.random());
                            (window[o] = i), (n += "callback=" + o);
                        } else n = n.slice(0, -1);
                        return n;
                    },
                },
            ]),
            t
        );
    })();
(function () {
    var t;
    (t = (function () {
        function t(t, e) {
            var i, n;
            if (((this.options = { target: "instafeed", get: "popular", resolution: "thumbnail", sortBy: "none", links: !0, mock: !1, useHttp: !1 }), "object" === (void 0 === t ? "undefined" : _typeof(t))))
                for (i in t) (n = t[i]), (this.options[i] = n);
            (this.context = null != e ? e : this), (this.unique = this._genKey());
        }
        return (
            (t.prototype.hasNext = function () {
                return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0;
            }),
            (t.prototype.next = function () {
                return !!this.hasNext() && this.run(this.context.nextUrl);
            }),
            (t.prototype.run = function (e) {
                var i, n;
                if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
                if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
                return (
                    null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this),
                    "undefined" != typeof document &&
                        null !== document &&
                        (((n = document.createElement("script")).id = "instafeed-fetcher"),
                        (n.src = e || this._buildUrl()),
                        document.getElementsByTagName("head")[0].appendChild(n),
                        (i = "instafeedCache" + this.unique),
                        (window[i] = new t(this.options, this)),
                        (window[i].unique = this.unique)),
                    !0
                );
            }),
            (t.prototype.parse = function (t) {
                var e, i, n, r, o, s, a, l, c, h, u, d, _, p, f, y, m, g, v, w, L, E, C, k, x, b, T, S;
                if ("object" !== (void 0 === t ? "undefined" : _typeof(t))) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
                    throw new Error("Invalid JSON response");
                }
                if (200 !== t.meta.code) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, t.meta.error_message), !1;
                    throw new Error("Error from Instagram: " + t.meta.error_message);
                }
                if (0 === t.data.length) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
                    throw new Error("No images were returned from Instagram");
                }
                if (
                    (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, t),
                    (this.context.nextUrl = ""),
                    null != t.pagination && (this.context.nextUrl = t.pagination.next_url),
                    "none" !== this.options.sortBy)
                )
                    switch (((b = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-")), (x = "least" === b[0]), b[1])) {
                        case "random":
                            t.data.sort(function () {
                                return 0.5 - Math.random();
                            });
                            break;
                        case "recent":
                            t.data = this._sortBy(t.data, "created_time", x);
                            break;
                        case "liked":
                            t.data = this._sortBy(t.data, "likes.count", x);
                            break;
                        case "commented":
                            t.data = this._sortBy(t.data, "comments.count", x);
                            break;
                        default:
                            throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.");
                    }
                if ("undefined" != typeof document && null !== document && !1 === this.options.mock) {
                    if (
                        ((d = t.data),
                        (k = parseInt(this.options.limit, 10)),
                        null != this.options.limit && d.length > k && (d = d.slice(0, k)),
                        (s = document.createDocumentFragment()),
                        null != this.options.filter && "function" == typeof this.options.filter && (d = this._filter(d, this.options.filter)),
                        null != this.options.template && "string" == typeof this.options.template)
                    ) {
                        for (a = "", "", "", S = document.createElement("div"), l = 0, w = d.length; l < w; l++) {
                            if (((c = d[l]), (h = c.images[this.options.resolution]), "object" !== (void 0 === h ? "undefined" : _typeof(h)))) throw ((o = "No image found for resolution: " + this.options.resolution + "."), new Error(o));
                            (f = "square"),
                                (y = h.width) > (p = h.height) && (f = "landscape"),
                                y < p && (f = "portrait"),
                                (u = h.url),
                                window.location.protocol.indexOf("http") >= 0 && !this.options.useHttp && (u = u.replace(/https?:\/\//, "//")),
                                (a += this._makeTemplate(this.options.template, {
                                    model: c,
                                    id: c.id,
                                    link: c.link,
                                    type: c.type,
                                    image: u,
                                    width: y,
                                    height: p,
                                    orientation: f,
                                    caption: this._getObjectProperty(c, "caption.text"),
                                    likes: c.likes.count,
                                    comments: c.comments.count,
                                    location: this._getObjectProperty(c, "location.name"),
                                }));
                        }
                        for (S.innerHTML = a, r = [], n = 0, i = S.childNodes.length; n < i; ) r.push(S.childNodes[n]), (n += 1);
                        for (g = 0, L = r.length; g < L; g++) (C = r[g]), s.appendChild(C);
                    } else
                        for (v = 0, E = d.length; v < E; v++) {
                            if (((c = d[v]), (_ = document.createElement("img")), (h = c.images[this.options.resolution]), "object" !== (void 0 === h ? "undefined" : _typeof(h))))
                                throw ((o = "No image found for resolution: " + this.options.resolution + "."), new Error(o));
                            (u = h.url),
                                window.location.protocol.indexOf("http") >= 0 && !this.options.useHttp && (u = u.replace(/https?:\/\//, "//")),
                                (_.src = u),
                                !0 === this.options.links ? (((e = document.createElement("a")).href = c.link), e.appendChild(_), s.appendChild(e)) : s.appendChild(_);
                        }
                    if (("string" == typeof (T = this.options.target) && (T = document.getElementById(T)), null == T)) throw ((o = 'No element with id="' + this.options.target + '" on page.'), new Error(o));
                    T.appendChild(s), document.getElementsByTagName("head")[0].removeChild(document.getElementById("instafeed-fetcher")), (m = "instafeedCache" + this.unique), (window[m] = void 0);
                    try {
                        delete window[m];
                    } catch (t) {
                        t;
                    }
                }
                return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0;
            }),
            (t.prototype._buildUrl = function () {
                var t, e, i;
                switch (((t = "https://api.instagram.com/v1"), this.options.get)) {
                    case "popular":
                        e = "media/popular";
                        break;
                    case "tagged":
                        if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                        e = "tags/" + this.options.tagName + "/media/recent";
                        break;
                    case "location":
                        if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                        e = "locations/" + this.options.locationId + "/media/recent";
                        break;
                    case "user":
                        if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                        e = "users/" + this.options.userId + "/media/recent";
                        break;
                    default:
                        throw new Error("Invalid option for get: '" + this.options.get + "'.");
                }
                return (
                    (i = t + "/" + e),
                    null != this.options.accessToken ? (i += "?access_token=" + this.options.accessToken) : (i += "?client_id=" + this.options.clientId),
                    null != this.options.limit && (i += "&count=" + this.options.limit),
                    (i += "&callback=instafeedCache" + this.unique + ".parse")
                );
            }),
            (t.prototype._genKey = function () {
                var t;
                return (
                    "" +
                    (t = function () {
                        return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
                    })() +
                    t() +
                    t() +
                    t()
                );
            }),
            (t.prototype._makeTemplate = function (t, e) {
                var i, n, r, o, s;
                for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = t; n.test(i); )
                    (o = i.match(n)[1]),
                        (s = null != (r = this._getObjectProperty(e, o)) ? r : ""),
                        (i = i.replace(n, function () {
                            return "" + s;
                        }));
                return i;
            }),
            (t.prototype._getObjectProperty = function (t, e) {
                var i, n;
                for (n = (e = e.replace(/\[(\w+)\]/g, ".$1")).split("."); n.length; ) {
                    if (((i = n.shift()), !(null != t && i in t))) return null;
                    t = t[i];
                }
                return t;
            }),
            (t.prototype._sortBy = function (t, e, i) {
                var n;
                return (
                    (n = function (t, n) {
                        var r, o;
                        return (r = this._getObjectProperty(t, e)), (o = this._getObjectProperty(n, e)), i ? (r > o ? 1 : -1) : r < o ? 1 : -1;
                    }),
                    t.sort(n.bind(this)),
                    t
                );
            }),
            (t.prototype._filter = function (t, e) {
                var i, n, r, o;
                for (
                    i = [],
                        n = function (t) {
                            if (e(t)) return i.push(t);
                        },
                        r = 0,
                        o = t.length;
                    r < o;
                    r++
                )
                    n(t[r]);
                return i;
            }),
            t
        );
    })()),
        (function (t, e) {
            "function" == typeof define && define.amd ? define([], e) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? (module.exports = e()) : (t.Instafeed = e());
        })(this, function () {
            return t;
        });
}.call(window),
    (function () {
        function t(t, e) {
            return "https://graph.facebook.com/" + t + "/picture?access_token=" + e;
        }
        function e(t) {
            FB.login(
                function (e) {
                    e.authResponse ? t && t(e) : console.log("User cancelled login or did not fully authorize.");
                },
                { scope: "user_photos" }
            );
        }
        function i(t) {
            FB.api("/me/albums", { fields: "id,cover_photo" }, function (e) {
                t && t(e);
            });
        }
        function n(t, e) {
            FB.api("/" + t + "/photos", { fields: "id" }, function (i) {
                e && e(t, i);
            });
        }
        function r(r) {
            var o = [],
                s = "";
            e(function (e) {
                (s = e.authResponse.accessToken || ""),
                    i(function (e) {
                        var i,
                            a,
                            l = {},
                            c = [];
                        for (i = 0; i < e.data.length; i++)
                            (a = e.data[i]),
                                (l[a.id] = $.Deferred()),
                                c.push(l[a.id]),
                                n(a.id, function (e, i) {
                                    var n, r;
                                    for (n = 0; n < i.data.length; n++) (r = i.data[n]), o.push({ id: r.id, added: r.created_time, url: t(r.id, s) });
                                    l[e].resolve();
                                });
                        $.when.apply($, c).then(
                            function () {
                                r && r(o);
                            },
                            function (t) {
                                r && r(o, t);
                            }
                        );
                    });
            });
        }
        window.FacebookServicesInit = function () {
            var t,
                e = "facebook-jssdk";
            if (!document.getElementById(e)) {
                ((t = document.createElement("script")).id = e), (t.async = !0), (t.src = "http://connect.facebook.net/en_US/all.js"), document.getElementsByTagName("head")[0].appendChild(t);
                var i = $.Deferred();
                (window.fbAsyncInit = function () {
                    FB.init(FACEBOOK), i.resolve();
                }),
                    $.when(i).then(function () {
                        void 0 !== r &&
                            r(function (t) {
                                EE.trigger("successApi", { data: t, api: "fb" });
                            });
                    });
            }
        };
    })());
var StepsPanel = (function (t) {
        function e(t) {
            _classCallCheck(this, e);
            var i = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (
                (i.activeEl = i._el.querySelector('[data-action="toggle"]')),
                (i._modalOptions = document.getElementById("order_options")),
                (i._ListColor = i._modalOptions.querySelector('[data-item="list_color"]')),
                (i._colorTitle = i._ListColor.querySelector('[data-item="color_title"]')),
                (i._quaEl = document.getElementById("qua")),
                (i._isPreview = !1),
                (i._orderOpt = { color: "default", print: "3D Plastic", quantity: 1 }),
                i._el.addEventListener("click", i.router.bind(i)),
                i._modalOptions.addEventListener("click", i.router.bind(i)),
                (i._quaEl.onkeypress = i._quantity.bind(i)),
                i
            );
        }
        return (
            _inherits(e, t),
            _createClass(e, [
                {
                    key: "_choiceProduct",
                    value: function (t) {
                        var e = { name: t.innerHTML, path: t.getAttribute("data-path") };
                        EE.trigger("choiceProduct", e), this.toggle();
                    },
                },
                {
                    key: "_toggleOptions",
                    value: function (t) {
                        this._modalOptions.classList.toggle("active_js");
                    },
                },
                {
                    key: "_addImg",
                    value: function (t) {
                        EE.trigger("showUploadPanel", null);
                    },
                },
                {
                    key: "_addText",
                    value: function (t) {
                        EE.trigger("showTextPanel", null);
                    },
                },
                {
                    key: "_options",
                    value: function (t, e) {
                        e.closest(".order_options") || this.toggle(t);
                    },
                },
                {
                    key: "_quantity",
                    value: function (t) {
                        if (!(t.ctrlKey || t.altKey || t.metaKey)) {
                            var e = this._getChar(t);
                            if (null != e) {
                                if (e < "0" || e > "9") return !1;
                                var i = this._quaEl.value.length;
                                return (0 != i || 0 != e) && 2 != i && void 0;
                            }
                        }
                    },
                },
                {
                    key: "_silicone2d",
                    value: function () {
                        (this._ListColor.style.maxHeight = "500px"), (this._orderOpt.print = "2D Silicone");
                    },
                },
                {
                    key: "_plastic3d",
                    value: function () {
                        (this._ListColor.style.maxHeight = 0), (this._orderOpt.print = "3D Plastic"), (this._orderOpt.color = "default");
                    },
                },
                {
                    key: "_choiceColor",
                    value: function (t, e) {
                        var i = e.innerHTML;
                        (this._colorTitle.className = i.toLowerCase()), (this._colorTitle.firstElementChild.innerHTML = i), (this._orderOpt.color = i);
                    },
                },
                {
                    key: "_preview",
                    value: function (t) {
                        var e;
                        this._isPreview ? ((e = "visible"), (t.innerHTML = '<p class="get_preview">Step 04 <br> <strong>Preview</strong></p>')) : ((e = "hidden"), (t.innerHTML = '<p class="get_preview preview"><strong>Edit</strong></p>')),
                            EE.trigger("preview", { value: e }),
                            this._toggleViewSteps(e),
                            (this._isPreview = !this._isPreview);
                    },
                },
                {
                    key: "_toggleViewSteps",
                    value: function (t) {
                        var e;
                        e = "hidden" === t ? 0 : 1;
                        for (var i = this._el.querySelectorAll(".steps_list_js>li"), n = 0, r = i.length - 2; n < r; n++) (i[n].style.visibility = t), (i[n].style.opacity = e);
                    },
                },
                {
                    key: "_addToCart",
                    value: function () {
                        var t = this._quaEl.value;
                        (this._orderOpt.quantity = t || 1), EE.trigger("addToCart", { opt: this._orderOpt });
                    },
                },
                {
                    key: "_getChar",
                    value: function (t) {
                        return null == t.which ? (t.keyCode < 32 ? null : String.fromCharCode(t.keyCode)) : 0 != t.which && 0 != t.charCode ? (t.which < 32 ? null : String.fromCharCode(t.which)) : null;
                    },
                },
            ]),
            e
        );
    })(Components),
    BtnPanel = (function (t) {
        function e(t) {
            _classCallCheck(this, e);
            var i = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (i._editBtn = i._el.querySelector('[data-action="_editText"]')), i._el.addEventListener("click", i.router.bind(i)), EE.on("showEditBtn", i._toggleEdit.bind(i)), EE.on("preview", i._preview.bind(i)), i;
        }
        return (
            _inherits(e, t),
            _createClass(e, [
                {
                    key: "_rotate",
                    value: function (t) {
                        var e = parseInt(t.getAttribute("data-value"));
                        EE.trigger("editView", { command: "rotate", value: e });
                    },
                },
                {
                    key: "_scale",
                    value: function (t) {
                        var e = parseInt(t.getAttribute("data-value"));
                        EE.trigger("editView", { value: e, command: "scale" });
                    },
                },
                {
                    key: "_del",
                    value: function () {
                        EE.trigger("del", {});
                    },
                },
                {
                    key: "_toggleEdit",
                    value: function (t) {
                        "hide" === t.action ? this._editBtn.classList.add("disabled") : this._editBtn.classList.remove("disabled");
                    },
                },
                {
                    key: "_editText",
                    value: function (t) {
                        t.matches(".disabled") || EE.trigger("initEditText", null);
                    },
                },
                {
                    key: "_preview",
                    value: function (t) {
                        (this._el.style.visibility = t.value), "hidden" === t.value ? (this._el.style.opacity = 0) : (this._el.style.opacity = 1);
                    },
                },
            ]),
            e
        );
    })(Components),
    ImgEditor = (function (t) {
        function e(t) {
            _classCallCheck(this, e);
            var i = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (
                (i.input = i._el.querySelector("#file")),
                (i.maxFileSize = 5e6),
                (i._fbImages = null),
                (i._instaImages = null),
                i._el.addEventListener("click", i.router.bind(i)),
                i.input.addEventListener("change", i._load.bind(i)),
                EE.on("showUploadPanel", i._togglePanel.bind(i)),
                EE.on("saveDataApi", i._saveDataApi.bind(i)),
                i
            );
        }
        return (
            _inherits(e, t),
            _createClass(e, [
                {
                    key: "_togglePanel",
                    value: function () {
                        this._el.classList.toggle("active_js");
                    },
                },
                {
                    key: "_load",
                    value: function (t) {
                        var e = t.target.files[0];
                        if (e) {
                            var i = this._validateFile(e);
                            if (i) alert(i);
                            else {
                                var n = new FileReader(),
                                    r = this;
                                (n.onload = (function (t, e) {
                                    return function (i) {
                                        EE.trigger("load", { name: t.name, data: this.result }), e._el.classList.remove("active_js");
                                    };
                                })(e, r)),
                                    n.readAsDataURL(e);
                            }
                        }
                    },
                },
                {
                    key: "_validateFile",
                    value: function (t) {
                        return t.type.match(/image\/(jpeg|jpg|png|gif)/) ? (t.size > this.maxFileSize ? "File size should not exceed 5 MB" : void 0) : "The photo must be in the format jpg, png or gif";
                    },
                },
                {
                    key: "_instagram",
                    value: function () {
                        this._instaImages ? this._showImages(this._instaImages) : InstagramServices.init();
                    },
                },
                {
                    key: "_facebook",
                    value: function () {
                        this._fbImages ? this._showImages(this._fbImages) : FacebookServicesInit();
                    },
                },
                {
                    key: "_saveDataApi",
                    value: function (t) {
                        "fb" === t.api ? (this._fbImages = t.data) : (this._instaImages = t.data);
                    },
                },
                {
                    key: "_showImages",
                    value: function (t) {
                        for (var e = "", i = 0, n = t.length; i < n; i++) e += '<div data-action="_choice" class="img_box"><img class="img-responsive" src=' + t[i].url + "/></div>";
                        (document.getElementById("instafeed").innerHTML = e), EE.trigger("toggleImgViewer", null);
                    },
                },
            ]),
            e
        );
    })(Components),
    TextEditor = (function (t) {
        function e(t) {
            _classCallCheck(this, e);
            var i = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (
                (i._inputText = i._el.querySelector("#text")),
                (i._fontTitle = i._el.querySelector('[data-item="font_title"]')),
                (i._sizeTitle = i._el.querySelector('[data-item="size_title"]')),
                (i.outputColor = i._el.querySelector("#output")),
                (i._mainTitle = i._el.querySelector(".m_header h1")),
                (i._mainBtn = i._el.querySelector('[data-action="_addText"]')),
                (i._defaultData = { size: 100, font: "orange_juice", fontName: "Orange juice", mainSize: 40, color: "rgb(255,0,0)" }),
                (i._data = {}),
                (i._picker = !1),
                (i._isEdit = !1),
                i._el.addEventListener("click", i.router.bind(i)),
                EE.on("showTextPanel", i._showPanel.bind(i)),
                EE.on("addColor", i._addColor.bind(i)),
                EE.on("initEditText", i._initEditText.bind(i)),
                EE.on("removeEditText", i._clearFields.bind(i)),
                i
            );
        }
        return (
            _inherits(e, t),
            _createClass(e, [
                {
                    key: "_showPanel",
                    value: function (t) {
                        if ((this._el.classList.add("active_js"), !this._picker)) {
                            var e = document.getElementById("picker");
                            return (
                                (e.style.display = "block"),
                                (this._picker = new ColorPicker({
                                    line: document.getElementById("line_picker"),
                                    _picker: document.getElementById("field_picker"),
                                    output: document.getElementById("output"),
                                    parent: e,
                                    imgPath: "bgGradient.png",
                                    colors: ["rgb(255,0,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,255)", "rgb(0,0,255)", "rgb(255,0,255)", "rgb(255,0,0)"],
                                })),
                                void (e.style.display = "")
                            );
                        }
                        this._clearFields();
                    },
                },
                {
                    key: "_closePanel",
                    value: function () {
                        this._el.classList.remove("active_js");
                    },
                },
                {
                    key: "_addFont",
                    value: function (t) {
                        (this._data.font = t.className), (this._fontTitle.innerHTML = t.innerHTML), (this._fontTitle.className = t.className), (this._inputText.className = t.className);
                    },
                },
                {
                    key: "_addSize",
                    value: function (t) {
                        var e = parseInt(t.innerHTML);
                        (this._sizeTitle.innerHTML = e), (this._data.size = (100 * e) / this._defaultData.mainSize), (this._inputText.style.fontSize = e + "px");
                    },
                },
                {
                    key: "_addColor",
                    value: function (t) {
                        (this._inputText.style.color = t.color), (this._data.color = t.color);
                    },
                },
                {
                    key: "_addText",
                    value: function (t) {
                        var e = this._inputText.value;
                        e
                            ? ((this._data.text = e),
                              (this._data.size = this._data.size || this._defaultData.size),
                              (this._data.font = this._data.font || this._defaultData.font),
                              (this._data.color = this._data.color || this._defaultData.color),
                              (this._data.edit = this._isEdit),
                              EE.trigger("addText", this._data),
                              (this._data = {}),
                              this._closePanel())
                            : alert("You did not add text!");
                    },
                },
                {
                    key: "_initEditText",
                    value: function (t) {
                        if (t) {
                            (this._inputText.value = t.text), (this._inputText.className = t.font), (this._inputText.style.color = t.color), (this.outputColor.style.background = t.color);
                            var e = Math.round((40 * t.size) / 100);
                            (this._inputText.style.fontSize = e + "px"),
                                (this._data.size = t.size),
                                (this._data.font = t.font),
                                (this._data.color = t.color),
                                (this._fontTitle.innerHTML = t.font),
                                (this._fontTitle.className = t.font),
                                (this._sizeTitle.innerHTML = e),
                                (this._mainTitle.innerHTML = "Edit text"),
                                (this._mainBtn.innerHTML = "edit"),
                                EE.trigger("showEditBtn", { action: "show" });
                        } else this._el.classList.add("active_js");
                        this._isEdit = !0;
                    },
                },
                {
                    key: "_clearFields",
                    value: function () {
                        (this._inputText.value = ""),
                            (this._inputText.className = this._defaultData.font),
                            (this._inputText.style.fontSize = "40px"),
                            (this.outputColor.style.background = ""),
                            (this._inputText.style.color = ""),
                            (this._fontTitle.innerHTML = this._defaultData.fontName),
                            (this._fontTitle.className = this._defaultData.font),
                            (this._mainTitle.innerHTML = "Step 2 - add text"),
                            (this._mainBtn.innerHTML = "add text"),
                            (this._sizeTitle.innerHTML = "40"),
                            (this._isEdit = !1),
                            (this._data = {}),
                            EE.trigger("showEditBtn", { action: "hide" });
                    },
                },
            ]),
            e
        );
    })(Components),
    ImgViewer = (function (t) {
        function e(t) {
            _classCallCheck(this, e);
            var i = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (i._imgBox = document.getElementById("instafeed")), (i.activeEl = i._el), i._el.addEventListener("click", i.router.bind(i)), EE.on("successApi", i._viewImg.bind(i)), EE.on("toggleImgViewer", i._togglePanel.bind(i)), i;
        }
        return (
            _inherits(e, t),
            _createClass(e, [
                {
                    key: "_togglePanel",
                    value: function () {
                        this._el.classList.toggle("active_js");
                    },
                },
                {
                    key: "_viewImg",
                    value: function (t) {
                        if (((this._imgBox.innerHTML = ""), "fb" === t.api)) {
                            var e = "",
                                i = t.data;
                            i.length > 15 && (i.length = 15);
                            for (var n = 0, r = i.length; n < r; n++) e += '<div data-action="_choice" class="img_box"><img class="img-responsive" src=' + i[n].url + "/></div>";
                            (document.getElementById("instafeed").innerHTML = e), EE.trigger("saveDataApi", t);
                        } else {
                            var o = this;
                            new Instafeed({
                                get: "user",
                                target: "instafeed",
                                userId: INSTAGRAM.user_id,
                                accessToken: INSTAGRAM.access_token,
                                sortBy: "most-recent",
                                limit: 15,
                                resolution: "standard_resolution",
                                template: '<div data-action="_choice" class="img_box"><img class="img-responsive" src="{{image}}" /></div>',
                                after: function () {
                                    var t = o._prepareData(o._imgBox);
                                    EE.trigger("saveDataApi", { data: t, api: "inst" });
                                },
                            }).run();
                        }
                        this._togglePanel();
                    },
                },
                {
                    key: "_prepareData",
                    value: function (t) {
                        for (var e = [], i = t.querySelectorAll("img"), n = 0; n < i.length; n++) e.push({ url: i[n].src });
                        return e;
                    },
                },
                {
                    key: "_choice",
                    value: function (t) {
                        var e = this,
                            i = new Image();
                        i.setAttribute("crossorigin", "anonymous"),
                            (i.src = t.firstElementChild.src),
                            (i.onload = function () {
                                var t = document.createElement("canvas");
                                (t.width = i.width), (t.height = i.height), document.body.appendChild(t), t.getContext("2d").drawImage(i, 0, 0, t.width, t.height);
                                var n = t.toDataURL("image/jpg");
                                document.body.removeChild(t), EE.trigger("load", { name: "photo.jpg", data: n }), EE.trigger("showUploadPanel", null), e._togglePanel(), (e._imgBox.innerHTML = "");
                            });
                    },
                },
            ]),
            e
        );
    })(Components),
    ColorPicker = (function () {
        function t(e) {
            _classCallCheck(this, t),
                (this.line = e.line),
                (this._picker = e._picker),
                (this.output = e.output),
                (this.imgPath = e.imgPath),
                (this.colors = e.colors),
                (this.caretLine = { el: this.line.querySelector(".caret"), top: 0, left: this.line.offsetWidth / 2 }),
                (this.caretPicker = { el: this._picker.querySelector(".caret"), right: -3, top: -3 }),
                (this.ctxL = null),
                (this.ctxP = null),
                (this.IMG = new Image()),
                (this.moveOnLine = this.moveOnLine.bind(this)),
                (this.lineUp = this.lineUp.bind(this)),
                (this.moveOnPicker = this.moveOnPicker.bind(this)),
                (this.lineCoords = this.getCoords(this.line)),
                (this.pickerCoords = this.getCoords(this._picker)),
                (this.line.onmousedown = this.clickOnLine.bind(this)),
                (this._picker.onmousedown = this.clickOnPicker.bind(this)),
                this.init();
        }
        return (
            _createClass(t, [
                {
                    key: "init",
                    value: function () {
                        (this._canvasP = this._picker.querySelector("canvas")),
                            (this._canvasL = this.line.querySelector("canvas")),
                            (this._canvasP.width = this._picker.offsetWidth),
                            (this._canvasP.height = this._picker.offsetHeight),
                            (this._canvasL.width = this.line.offsetWidth),
                            (this._canvasL.height = this.line.offsetHeight),
                            (this.ctxP = this._canvasP.getContext("2d")),
                            (this.ctxL = this._canvasL.getContext("2d")),
                            this.createGradient();
                    },
                },
                {
                    key: "createGradient",
                    value: function () {
                        for (var t = this.ctxL.createLinearGradient(this._canvasL.width / 2, this._canvasL.height, this._canvasL.width / 2, 0), e = 0, i = this.colors.length; e < i; e++) t.addColorStop(e / 6, this.colors[e]);
                        (this.ctxL.fillStyle = t),
                            this.ctxL.fillRect(0, 0, this._canvasL.width, this.line.offsetHeight),
                            (this.IMG.src = PICKER_PATH),
                            (this.IMG.onload = function () {
                                this.draw();
                            }.bind(this));
                    },
                },
                {
                    key: "clickOnPicker",
                    value: function (t) {
                        if (t.target === this.caretPicker.el) return (document.onmousemove = this.moveOnPicker), void (document.onmouseup = this.lineUp);
                        var e = t.pageX - this.pickerCoords.left,
                            i = t.pageY - this.pickerCoords.top;
                        (this.caretPicker.el.style.top = i - 3 + "px"), (this.caretPicker.el.style.left = e - 3 + "px"), this.getColor(e, i, this.ctxP);
                    },
                },
                {
                    key: "moveOnPicker",
                    value: function (t) {
                        var e = t.pageY - this.pickerCoords.top,
                            i = t.pageX - this.pickerCoords.left;
                        if (!(e < 0 || e > this._canvasP.height - 4 || i < 0 || i > this._canvasP.width - 4)) {
                            (this.caretPicker.el.style.top = e - 3 + "px"), (this.caretPicker.el.style.left = i - 3 + "px");
                            this.getColor(i, e, this.ctxP);
                        }
                    },
                },
                {
                    key: "clickOnLine",
                    value: function (t) {
                        if (t.target === this.caretLine.el) return (document.onmousemove = this.moveOnLine), void (document.onmouseup = this.lineUp);
                        var e = t.pageY - this.lineCoords.top;
                        if ((e < 0 && (e = 0), !(e > this._canvasL.height - 5))) {
                            this.caretLine.el.style.top = e + "px";
                            var i = this.getColor(this.caretLine.left, e, this.ctxL);
                            this.draw(i);
                        }
                    },
                },
                {
                    key: "moveOnLine",
                    value: function (t) {
                        var e = t.pageY - this.lineCoords.top;
                        if ((e < 0 && (e = 0), !(e > this._canvasL.height - 5))) {
                            this.caretLine.el.style.top = e + "px";
                            var i = this.getColor(this.caretLine.left, e, this.ctxL);
                            this.draw(i);
                        }
                    },
                },
                {
                    key: "lineUp",
                    value: function (t) {
                        (document.onmousemove = null), (document.onmouseup = null);
                    },
                },
                {
                    key: "draw",
                    value: function (t) {
                        this.ctxP.clearRect(0, 0, this._canvasP.width, this._canvasP.height),
                            this.ctxP.drawImage(this.IMG, 0, 0, this._canvasP.width, this._canvasP.height),
                            this.ctxP.save(),
                            (this.ctxP.globalCompositeOperation = "destination-over"),
                            (this.ctxP.fillStyle = t || "rgb(255,0,0)"),
                            this.ctxP.fillRect(0, 0, this._canvasP.width, this._canvasP.height),
                            this.ctxP.restore();
                    },
                },
                {
                    key: "getColor",
                    value: function (t, e, i) {
                        var n = i.getImageData(t, e, 1, 1).data,
                            r = "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")";
                        return (this.output.style.backgroundColor = r), EE.trigger("addColor", { color: r }), r;
                    },
                },
                {
                    key: "getCoords",
                    value: function (t) {
                        var e = t.getBoundingClientRect();
                        return { top: e.top + pageYOffset, left: e.left + pageXOffset };
                    },
                },
            ]),
            t
        );
    })(),
    Layer = (function (t) {
        function e(t) {
            _classCallCheck(this, e);
            var i = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (i._size = t.size), (i._canvasCoords = t.coords), (i._parent = t.parent), (i._pCoords = t.pCoords), (i.data = i._createLayer(i._size)), i._el.addEventListener("mousedown", i._initClick.bind(i)), i;
        }
        return (
            _inherits(e, t),
            _createClass(e, [
                {
                    key: "_createLayer",
                    value: function (t) {
                        var e = {};
                        return (
                            (e.x = this._canvasCoords.x + t.mLeft),
                            (e.y = this._canvasCoords.y + t.mTop),
                            t.text ? ((t.el.type = "text"), this._setStyle(this._el.style, { top: e.y, left: e.x })) : ((e.el = this._el), (e.el.type = "img"), this._setStyle(e.el.style, { top: e.y, left: e.x, width: t.w, height: t.h })),
                            (e.cx = e.x + t.w / 2),
                            (e.cy = e.y + t.h / 2),
                            (e.rotate = 0),
                            (e.sx = e.x),
                            (e.sy = e.y),
                            (e.sw = t.w),
                            (e.sh = t.h),
                            (e.sml = t.mLeft),
                            (e.smt = t.mTop),
                            this.toggle(this._el),
                            this._parent.appendChild(this._el),
                            Object.assign(e, t),
                            e
                        );
                    },
                },
                {
                    key: "_initClick",
                    value: function (t) {
                        if (1 == t.which) {
                            var e = t.target,
                                i = e.getAttribute("data-action");
                            i && ("text" === e.parentNode.type || "text" === e.type ? EE.trigger("initEditText", this.data) : EE.trigger("removeEditText", null), this.open(), this[i](e, t));
                        }
                    },
                },
                {
                    key: "_drag",
                    value: function (t, e) {
                        var i = e.pageX - this._pCoords.left,
                            n = e.pageY - this._pCoords.top;
                        (this.data.shiftX = i - this.data.x), (this.data.shiftY = n - this.data.y), EE.trigger("startDrag", { data: this.data });
                    },
                },
                {
                    key: "_scale",
                    value: function (t, e) {
                        var i = t.parentNode.type;
                        (this.data.downX = e.pageX - this._pCoords.left), (this.data.downY = e.pageY - this._pCoords.top), (this.data.course = parseInt(t.getAttribute("data-course"))), EE.trigger("startScale", { data: this.data, type: i });
                    },
                },
                {
                    key: "_rotate",
                    value: function (t, e) {
                        (this.data.downX = e.pageX - this._pCoords.left), (this.data.downY = e.pageY - this._pCoords.top), EE.trigger("startRotate", { data: this.data });
                    },
                },
                {
                    key: "_setStyle",
                    value: function (t, e) {
                        for (var i in e) t[i] = e[i] + "px";
                    },
                },
            ]),
            e
        );
    })(Components),
    FieldDrawing = (function (t) {
        function e(t) {
            _classCallCheck(this, e);
            var i = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (
                (i._CANVAS = i._el.querySelector("#canvas")),
                (i._layerTemplate = i._el.querySelector('[data-component="layer"]')),
                (i._productTitle = t.titleEl),
                (i._product = new Image()),
                (i._layers = []),
                (i._currentLayer = null),
                (i._canvasCoords = {}),
                (i._elCoords = i._getCoords(i._el)),
                (i._defaultSize = { w: 350, h: 350 }),
                (i._move = i._move.bind(i)),
                (i._mouseUp = i._mouseUp.bind(i)),
                (i._initCourse = i._initCourse.bind(i)),
                (i._stopScale = i._stopScale.bind(i)),
                (i._rotate = i._rotate.bind(i)),
                (i._stopRotate = i._stopRotate.bind(i)),
                EE.on("choiceProduct", i._choiceProduct.bind(i)),
                EE.on("load", i._loadImg.bind(i)),
                EE.on("startDrag", i._startDrag.bind(i)),
                EE.on("startScale", i._startScale.bind(i)),
                EE.on("startRotate", i._startRotate.bind(i)),
                EE.on("editView", i._editView.bind(i)),
                EE.on("del", i._delLayer.bind(i)),
                EE.on("addText", i._addText.bind(i)),
                EE.on("preview", i._preview.bind(i)),
                EE.on("addToCart", i._initDataForSend.bind(i)),
                i
            );
        }
        return (
            _inherits(e, t),
            _createClass(e, [
                {
                    key: "_addText",
                    value: function (t) {
                        if (t.edit) this._updateTextData(t);
                        else {
                            var e = this._initTextData(t);
                            (e.index = this._layers.length),
                                (this._currentLayer = new Layer({ elem: e.el, size: e, coords: this._canvasCoords, pCoords: this._elCoords, parent: this._el }).data),
                                this._layers.push(this._currentLayer),
                                (this._currentText = !0),
                                this._draw(this._layers),
                                EE.trigger("initEditText", this._currentLayer);
                        }
                    },
                },
                {
                    key: "_updateTextData",
                    value: function (t) {
                        (this._currentLayer.size = t.size),
                            (this._currentLayer.text = t.text),
                            (this._currentLayer.font = t.font),
                            (this._currentLayer.color = t.color),
                            this._currentLayer.el.removeChild(this._currentLayer.el.lastChild),
                            this._currentLayer.el.appendChild(document.createTextNode(t.text)),
                            (this._currentLayer.el.style.font = t.size + "% " + t.font),
                            (this._currentLayer.sw = this._currentLayer.w),
                            (this._currentLayer.w = this._currentLayer.el.offsetWidth),
                            (this._currentLayer.h = this._currentLayer.el.offsetHeight),
                            (this._currentLayer.x = this._currentLayer.x - (this._currentLayer.w - this._currentLayer.sw) / 2),
                            (this._currentLayer.mLeft = this._currentLayer.x - this._canvasCoords.x),
                            (this._currentLayer.el.style.left = this._currentLayer.x + "px"),
                            this._draw(this._layers);
                    },
                },
                {
                    key: "_initTextData",
                    value: function (t) {
                        var e = {};
                        return (
                            (e.size = t.size),
                            (e.text = t.text),
                            (e.font = t.font),
                            (e.color = t.color),
                            (e.el = this._layerTemplate.cloneNode(!0)),
                            e.el.appendChild(document.createTextNode(t.text)),
                            (e.el.style.font = t.size + "% " + t.font),
                            this._el.appendChild(e.el),
                            (e.w = e.el.offsetWidth),
                            (e.h = e.el.offsetHeight),
                            (e.percent = (100 * e.h) / e.w),
                            (e.bigW = !0),
                            (e.mTop = (this._CANVAS.height - e.h) / 2),
                            (e.mLeft = (this._CANVAS.width - e.w) / 2),
                            e
                        );
                    },
                },
                {
                    key: "_choiceProduct",
                    value: function (t) {
                        var e = this;
                        (this._productTitle.innerHTML = t.name),
                            this._delAllLayers(),
                            (this._product.src = t.path),
                            (this._product.onload = function () {
                                var t,
                                    i = e._product.width,
                                    n = e._product.height;
                                i >= n ? ((t = (100 * n) / i), (n = ((i = e._defaultSize.w) * t) / 100)) : ((t = (100 * i) / n), (i = ((n = e._defaultSize.h) * t) / 100)), (e._CANVAS.width = i), (e._CANVAS.height = n);
                                var r = e._getCoords(e._CANVAS);
                                (e._canvasCoords.x = r.left - e._elCoords.left), (e._canvasCoords.y = r.top - e._elCoords.top);
                                var o = e._CANVAS.getContext("2d");
                                o.clearRect(0, 0, e._CANVAS.width, e._CANVAS.height), o.drawImage(e._product, 0, 0, e._CANVAS.width, e._CANVAS.height);
                            });
                    },
                },
                {
                    key: "_loadImg",
                    value: function (t) {
                        var e = this,
                            i = new Image();
                        (i.src = t.data),
                            (i.onload = function () {
                                var n = e._layerTemplate.cloneNode(!0),
                                    r = e._initLayerSize(i);
                                (r.index = e._layers.length),
                                    (e._currentLayer = new Layer({ elem: n, size: r, coords: e._canvasCoords, pCoords: e._elCoords, parent: e._el }).data),
                                    (e._currentLayer.file = t),
                                    e._layers.push(e._currentLayer),
                                    e._draw(e._layers),
                                    EE.trigger("removeEditText", null);
                            });
                    },
                },
                {
                    key: "_initLayerSize",
                    value: function (t) {
                        var e,
                            i = {},
                            n = t.width,
                            r = t.height;
                        return (
                            n >= r
                                ? ((e = (100 * r) / n),
                                  this._CANVAS.width <= n ? (i.w = this._CANVAS.width) : (i.w = n),
                                  (i.h = (i.w * e) / 100),
                                  (i.bigW = !0),
                                  (i.mTop = (this._CANVAS.height - i.h) / 2),
                                  (i.mLeft = n == r ? (this._CANVAS.width - i.w) / 2 : 0))
                                : ((e = (100 * n) / r), this._CANVAS.height <= r ? (i.h = this._CANVAS.height) : (i.h = r), (i.w = (i.h * e) / 100), (i.mTop = 0), (i.mLeft = (this._CANVAS.width - i.w) / 2)),
                            (i.percent = e),
                            (i.img = t),
                            i
                        );
                    },
                },
                {
                    key: "_draw",
                    value: function (t) {
                        var e = this._CANVAS.getContext("2d"),
                            i = this._CANVAS.width,
                            n = this._CANVAS.height;
                        e.clearRect(0, 0, i, n), e.drawImage(this._product, 0, 0, i, n), e.save(), (e.globalCompositeOperation = "source-atop");
                        for (var r = 0, o = t.length; r < o; r++) {
                            var s = t[r];
                            s.text
                                ? this._drawText(e, s)
                                : s.rotate
                                ? (e.save(), e.translate(s.mLeft + s.w / 2, s.mTop + s.h / 2), e.rotate(s.rotate), e.drawImage(s.img, -s.w / 2, -s.h / 2, s.w, s.h), e.restore())
                                : e.drawImage(s.img, s.mLeft, s.mTop, s.w, s.h);
                        }
                        e.restore();
                    },
                },
                {
                    key: "_drawText",
                    value: function (t, e) {
                        (t.font = e.size + "% " + e.font),
                            (t.fillStyle = e.color),
                            (t.textBaseline = "top"),
                            e.rotate ? (t.save(), t.translate(e.mLeft + e.w / 2, e.mTop + e.h / 2), t.rotate(e.rotate), t.fillText(e.text, -e.w / 2, -e.h / 2), t.restore()) : t.fillText(e.text, e.mLeft, e.mTop);
                    },
                },
                {
                    key: "_startDrag",
                    value: function (t) {
                        (this._currentLayer = t.data), this._el.addEventListener("mousemove", this._move), document.addEventListener("mouseup", this._mouseUp);
                    },
                },
                {
                    key: "_move",
                    value: function (t) {
                        (this._currentLayer.x = t.pageX - this._elCoords.left - this._currentLayer.shiftX),
                            (this._currentLayer.y = t.pageY - this._elCoords.top - this._currentLayer.shiftY),
                            (this._currentLayer.mLeft = this._currentLayer.x - this._canvasCoords.x),
                            (this._currentLayer.mTop = this._currentLayer.y - this._canvasCoords.y),
                            this._draw(this._layers),
                            (this._currentLayer.el.style.left = t.pageX - this._elCoords.left - this._currentLayer.shiftX + "px"),
                            (this._currentLayer.el.style.top = t.pageY - this._elCoords.top - this._currentLayer.shiftY + "px");
                    },
                },
                {
                    key: "_mouseUp",
                    value: function (t) {
                        (this._currentLayer.cx = this._currentLayer.x + this._currentLayer.w / 2),
                            (this._currentLayer.cy = this._currentLayer.y + this._currentLayer.h / 2),
                            this._el.removeEventListener("mousemove", this._move),
                            document.removeEventListener("mouseup", this._mouseUp);
                    },
                },
                {
                    key: "_startScale",
                    value: function (t) {
                        (this._currentLayer = t.data),
                            this._saveStartSize(),
                            "text" === t.type && ((this._currentLayer.sSize = this._currentLayer.size), (this._currentLayer.el.style.width = "auto"), (this._currentLayer.el.style.height = "auto")),
                            this._el.addEventListener("mousemove", this._initCourse),
                            this._el.addEventListener("mouseup", this._stopScale);
                    },
                },
                {
                    key: "_saveStartSize",
                    value: function () {
                        (this._currentLayer.sx = this._currentLayer.x),
                            (this._currentLayer.sy = this._currentLayer.y),
                            (this._currentLayer.sw = this._currentLayer.w),
                            (this._currentLayer.sh = this._currentLayer.h),
                            (this._currentLayer.sml = this._currentLayer.mLeft),
                            (this._currentLayer.smt = this._currentLayer.mTop);
                    },
                },
                {
                    key: "_initCourse",
                    value: function (t) {
                        var e,
                            i = this._currentLayer;
                        (e = 1 == i.course ? t.pageY - this._elCoords.top - i.downY : (e = -(t.pageY - this._elCoords.top - i.downY))), i.text ? this._textScale(i, e) : this._scale(i, e);
                    },
                },
                {
                    key: "_textScale",
                    value: function (t, e) {
                        var i = (100 * (23 - e)) / 23 - 100;
                        t.sSize + i <= 30 ||
                            ((t.size = t.sSize + i),
                            (t.el.style.fontSize = t.size + "%"),
                            (t.w = t.el.offsetWidth),
                            (t.h = t.el.offsetHeight),
                            (t.x = t.sx - (t.w - t.sw) / 2),
                            (t.y = t.sy - (t.h - t.sh) / 2),
                            (t.mLeft = t.x - this._canvasCoords.x),
                            (t.mTop = t.y - this._canvasCoords.y),
                            (t.el.style.top = t.y + "px"),
                            (t.el.style.left = t.x + "px"),
                            this._draw(this._layers));
                    },
                },
                {
                    key: "_scale",
                    value: function (t, e) {
                        if (t.bigW) {
                            var i = t.sw - 2 * e;
                            if (i <= 10) return;
                            (t.w = i), (t.h = (t.w * t.percent) / 100);
                        } else {
                            var n = t.sh - 2 * e;
                            if (n <= 10) return;
                            (t.h = n), (t.w = (t.h * t.percent) / 100);
                        }
                        (t.mLeft = e + t.sml),
                            (t.mTop = e + t.smt),
                            (t.x = e + t.sx),
                            (t.y = e + t.sy),
                            (t.el.style.left = t.x + "px"),
                            (t.el.style.top = t.y + "px"),
                            (t.el.style.width = t.w + "px"),
                            (t.el.style.height = t.h + "px"),
                            this._draw(this._layers);
                    },
                },
                {
                    key: "_stopScale",
                    value: function () {
                        (this._currentLayer.cx = this._currentLayer.x + this._currentLayer.w / 2),
                            (this._currentLayer.cy = this._currentLayer.y + this._currentLayer.h / 2),
                            this._el.removeEventListener("mousemove", this._initCourse),
                            this._el.removeEventListener("mouseup", this._stopScale);
                    },
                },
                {
                    key: "_startRotate",
                    value: function (t) {
                        (this._currentLayer = t.data), this._el.addEventListener("mousemove", this._rotate), this._el.addEventListener("mouseup", this._stopRotate);
                    },
                },
                {
                    key: "_rotate",
                    value: function (t) {
                        var e = this._currentLayer,
                            i = t.pageX - this._elCoords.left - e.cx,
                            n = t.pageY - this._elCoords.top - e.cy;
                        e.rotate = n > 0 ? Math.atan2(n, i) : 2 * Math.PI + Math.atan2(n, i);
                        var r = (180 * e.rotate) / Math.PI;
                        (e.el.style.transform = "rotate(" + r + "deg)"), this._draw(this._layers);
                    },
                },
                {
                    key: "_stopRotate",
                    value: function (t) {
                        this._el.removeEventListener("mousemove", this._rotate), this._el.removeEventListener("mouseup", this._stopRotate);
                    },
                },
                {
                    key: "_preview",
                    value: function (t) {
                        for (var e = 0, i = this._layers.length; e < i; e++) this._layers[e].el.style.visibility = t.value;
                    },
                },
                {
                    key: "_editView",
                    value: function (t) {
                        var e = this._currentLayer;
                        if (e)
                            if ("rotate" === t.command) {
                                var i = (180 * e.rotate) / Math.PI;
                                (i += t.value) < 0 && (i = 360 + i), (e.rotate = (i * Math.PI) / 180), (this._currentLayer.el.style.transform = "rotate(" + i + "deg)"), this._draw(this._layers);
                            } else
                                this._saveStartSize(),
                                    this._currentLayer.text ? ((this._currentLayer.sSize = this._currentLayer.size), this._textScale(this._currentLayer, t.value)) : this._scale(this._currentLayer, t.value),
                                    (this._currentLayer.cx = this._currentLayer.x + this._currentLayer.w / 2),
                                    (this._currentLayer.cy = this._currentLayer.y + this._currentLayer.h / 2);
                    },
                },
                {
                    key: "_delLayer",
                    value: function () {
                        if (this._currentLayer) {
                            this._currentLayer.text && EE.trigger("removeEditText", null), this._el.removeChild(this._currentLayer.el), this._layers.splice(this._currentLayer.index, 1);
                            for (var t = 0, e = this._layers.length; t < e; t++) this._layers[t].index = t;
                            if (e > 0) (this._currentLayer = this._layers[e - 1]), this._draw(this._layers);
                            else {
                                this._currentLayer = null;
                                var i = this._CANVAS.getContext("2d");
                                i.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height), i.drawImage(this._product, 0, 0, this._CANVAS.width, this._CANVAS.height);
                            }
                        }
                    },
                },
                {
                    key: "_delAllLayers",
                    value: function () {
                        var t = this._layers.length;
                        if (0 != t) {
                            this._currentLayer = null;
                            for (var e = 0; e < t; e++) {
                                var i = this._layers[e];
                                this._el.removeChild(i.el);
                            }
                            this._layers = [];
                        }
                    },
                },
                {
                    key: "_initDataForSend",
                    value: function (t) {
                        for (var e = this, i = this._layers.length, n = [], r = document.getElementById("preloader"), o = 0; o < i; o++) {
                            var s = this._layers[o];
                            if (s.file) {
                                r.classList.add("active_js");
                                var a = "file=" + JSON.stringify(s.file);
                                n.push(AjaxServices.promise(URL, { method: "POST", data: a }));
                            }
                        }
                        Promise.all(n).then(function () {
                            var i = e._CANVAS.toDataURL("image/png"),
                                n = "",
                                o = e._productTitle.innerHTML.replace(/\//g, " ");
                            t.opt && (n = t.opt),
                                AjaxServices.ajax(URL, {
                                    method: "POST",
                                    data: "file=" + JSON.stringify({ name: "canvas", data: i, product: o, opt: n }),
                                    cb: function (t) {
                                        r.classList.remove("active_js"), (window.location = SITE_NAME + SITE_CART);
                                    },
                                });
                        });
                    },
                },
                {
                    key: "_getCoords",
                    value: function (t) {
                        var e = t.getBoundingClientRect();
                        return { top: e.top + pageYOffset, left: e.left + pageXOffset };
                    },
                },
            ]),
            e
        );
    })(Components),
    App = function t(e) {
        _classCallCheck(this, t),
            (this._el = e.elem),
            (this._defaultProduct = document.getElementById("products-title").firstElementChild),
            (this.stepsPanel = new StepsPanel({ elem: this._el.querySelector('[data-component="steps"]') })),
            (this.btnPanel = new BtnPanel({ elem: this._el.querySelector('[data-component="btn_panel"]') })),
            (this.fieldDrawing = new FieldDrawing({ elem: this._el.querySelector('[data-component="view_box"]'), titleEl: this._defaultProduct })),
            (this.imgEditor = new ImgEditor({ elem: this._el.querySelector('[data-component="img_editor"]') })),
            (this.textEditor = new TextEditor({ elem: this._el.querySelector('[data-component="text_editor"]') })),
            (this.imgViewer = new ImgViewer({ elem: this._el.querySelector('[data-component="img_viewer"]') })),
            EE.trigger("choiceProduct", { name: this._defaultProduct.innerHTML, path: this._defaultProduct.getAttribute("data-path") });
    },
    constructor = new App({ elem: document.getElementById("constructor") });
