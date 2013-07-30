/*
    http://www.JSON.org/json2.js
    2009-09-29

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/
/*jslint evil: true, strict: false */
/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/
// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.
this.JSON || (this.JSON = {}), this.module && (module.exports = JSON),
function () {
    function f(a) {
        return a < 10 ? "0" + a : a
    }

    function quote(a) {
        return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function (a) {
            var b = meta[a];
            return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function str(a, b) {
        var c, d, e, f, g = gap,
            h, i = b[a];
        i && typeof i == "object" && typeof i.toJSON == "function" && (i = i.toJSON(a)), typeof rep == "function" && (i = rep.call(b, a, i));
        switch (typeof i) {
        case "string":
            return quote(i);
        case "number":
            return isFinite(i) ? String(i) : "null";
        case "boolean":
        case "null":
            return String(i);
        case "object":
            if (!i) return "null";
            gap += indent, h = [];
            if (Object.prototype.toString.apply(i) === "[object Array]") {
                f = i.length;
                for (c = 0; c < f; c += 1) h[c] = str(c, i) || "null";
                return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
            }
            if (rep && typeof rep == "object") {
                f = rep.length;
                for (c = 0; c < f; c += 1) d = rep[c], typeof d == "string" && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e))
            } else
                for (d in i) Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
            return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (a) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "   ": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (a, b, c) {
        var d;
        gap = "", indent = "";
        if (typeof c == "number")
            for (d = 0; d < c; d += 1) indent += " ";
        else typeof c == "string" && (indent = c);
        rep = b;
        if (!b || typeof b == "function" || typeof b == "object" && typeof b.length == "number") return str("", {
            "": a
        });
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && typeof e == "object")
                for (c in e) Object.hasOwnProperty.call(e, c) && (d = walk(e, c), d !== undefined ? e[c] = d : delete e[c]);
            return reviver.call(a, b, e)
        }
        var j;
        cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(),
function (a, b) {
    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function J() {
        return !1
    }

    function K() {
        return !0
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !! b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }

    function ib(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function jb(a, b) {
        if (b.nodeType !== 1 || !f.hasData(a)) return;
        var c, d, e, g = f._data(a),
            h = f._data(b, g),
            i = g.events;
        if (i) {
            delete h.handle, h.events = {};
            for (c in i)
                for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
        }
        h.data && (h.data = f.extend({}, h.data))
    }

    function kb(a, b) {
        var c;
        if (b.nodeType !== 1) return;
        b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached")
    }

    function lb(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function mb(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function nb(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? mb(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), mb)
    }

    function ob(a) {
        var b = c.createElement("div");
        return hb.appendChild(b), b.innerHTML = a.outerHTML, b.firstChild
    }

    function Bb(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? 1 : 0,
            g = 4;
        if (d > 0) {
            if (c !== "border")
                for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + xb[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + xb[e])) || 0 : d -= parseFloat(f.css(a, "border" + xb[e] + "Width")) || 0;
            return d + "px"
        }
        d = yb(a, b);
        if (d < 0 || d == null) d = a.style[b];
        if (tb.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c)
            for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + xb[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + xb[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + xb[e])) || 0);
        return d + "px"
    }

    function Yb(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(Ob),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function Zb(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === Sb,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = Zb(a, c, d, e, l, g)));
        return (k || !l) && !g["*"] && (l = Zb(a, c, d, e, "*", g)), l
    }

    function $b(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function _b(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || Db.test(a) ? d(a, e) : _b(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        });
        else if (!c && f.type(b) === "object")
            for (var e in b) _b(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function ac(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        } if (j) return j !== f[0] && f.unshift(j), d[j]
    }

    function bc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {}, g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function rc() {
        return setTimeout(sc, 0), qc = f.now()
    }

    function sc() {
        qc = b
    }

    function tc(a, b) {
        var c = {};
        return f.each(pc.concat.apply([], pc.slice(0, b)), function () {
            c[this] = a
        }), c
    }

    function uc(a) {
        if (!jc[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                kc || (kc = c.createElement("iframe"), kc.frameBorder = kc.width = kc.height = 0), b.appendChild(kc);
                if (!lc || !kc.createElement) lc = (kc.contentWindow || kc.contentDocument).document, lc.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), lc.close();
                d = lc.createElement(a), lc.body.appendChild(d), e = f.css(d, "display"), b.removeChild(kc)
            }
            jc[a] = e
        }
        return jc[a]
    }

    function yc(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function J() {
                if (e.isReady) return;
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
            var e = function (a, b) {
                return new e.fn.init(a, b, h)
            }, f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function (a, b) {
                    return (b + "").toUpperCase()
                }, y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            return e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if (a === "body" && !d && c.body) return this.context = c, this[0] = c.body, this.selector = a, this.length = 1, this;
                    if (typeof a == "string") {
                        a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? g = [null, a, null] : g = i.exec(a);
                        if (g && (g[1] || !d)) {
                            if (g[1]) return d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes), e.merge(this, a);
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1, this[0] = h
                            }
                            return this.context = c, this.selector = a, this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    return e.isFunction(a) ? f.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), e.makeArray(a, this))
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return F.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    return e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    return e.bindReady(), A.add(a), this
                },
                eq: function (a) {
                    return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {}, j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                    return i
            }, e.extend({
                noConflict: function (b) {
                    return a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f), e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (A) return;
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete") return setTimeout(e.ready, 1);
                    if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1);
                    else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch (d) {}
                        c.documentElement.doScroll && b && J()
                    }
                },
                isFunction: function (a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function (a) {
                    return e.type(a) === "array"
                },
                isWindow: function (a) {
                    return a != null && a == a.window
                },
                isNumeric: function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function (a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function (a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function (a) {
                    throw new Error(a)
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function (c) {
                    if (typeof c != "string" || !c) return null;
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }
                    return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c), d
                },
                noop: function () {},
                globalEval: function (b) {
                    b && j.test(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1) break
                        } else
                            for (; g < h;)
                                if (c.apply(a[g++], d) === !1) break
                    } else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1) break
                    } else
                        for (; g < h;)
                            if (c.call(a[g], g, a[g++]) === !1) break; return a
                },
                trim: G ? function (a) {
                    return a == null ? "" : G.call(a)
                } : function (a) {
                    return a == null ? "" : a.toString().replace(k, "").replace(l, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (H) return H.call(b, a, c);
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number")
                        for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else
                        while (c[e] !== b) a[d++] = c[e++];
                    return a.length = d, a
                },
                grep: function (a, b, c) {
                    var d = [],
                        e;
                    c = !! c;
                    for (var f = 0, g = a.length; f < g; f++) e = !! b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function (a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else
                        for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function (a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = F.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    return g.guid = a.guid = a.guid || g.guid || e.guid++, g
                },
                access: function (a, c, d, f, g, h, i) {
                    var j, k = d == null,
                        l = 0,
                        m = a.length;
                    if (d && typeof d == "object") {
                        for (l in d) e.access(a, c, l, d[l], 1, h, f);
                        g = 1
                    } else if (f !== b) {
                        j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                            return j.call(e(a), c)
                        }) : (c.call(a, f), c = null));
                        if (c)
                            for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                        g = 1
                    }
                    return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                        return f && f instanceof e && !(f instanceof a) && (f = a(f)), e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
                c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
            } : c.attachEvent && (B = function () {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            }), e
        }(),
        g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m, n = function (b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
            }, o = function (b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
                for (; c && m < l; m++)
                    if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
            }, p = {
                add: function () {
                    if (c) {
                        var a = c.length;
                        n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                    }
                    return this
                },
                remove: function () {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                                    if (a.unique) break
                                }
                    }
                    return this
                },
                has: function (a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++)
                            if (a === c[b]) return !0
                    }
                    return !1
                },
                empty: function () {
                    return c = [], this
                },
                disable: function () {
                    return c = d = e = b, this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    return d = b, (!e || e === !0) && p.disable(), this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (b, c) {
                    return d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c)), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                }, h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function () {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c) {
                        return i.done(a).fail(b).progress(c), this
                    },
                    always: function () {
                        return i.done.apply(i, arguments).fail.apply(i, arguments), this
                    },
                    pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (a == null) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                }, i = h.promise({}),
                j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            return i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i), i
        },
        when: function (a) {
            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }

            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = new Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
            q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !! e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !! c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent)
            for (n in {
                submit: 1,
                change: 1,
                focusin: 1
            }) m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
        return j.removeChild(p), j = g = h = p = i = null, f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            if (!u) return;
            m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j)
        }), b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            return a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando], !! a && !m(a)
        },
        data: function (a, c, d, e) {
            if (!f.acceptData(a)) return;
            var g, h, i, j = f.expando,
                k = typeof c == "string",
                l = a.nodeType,
                m = l ? f.cache : a,
                n = l ? a[j] : a[j] && j,
                o = c === "events";
            if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
            n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
            if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
            return g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d), o && !h[c] ? g.events : (k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h, i)
        },
        removeData: function (a, b, c) {
            if (!f.acceptData(a)) return;
            var d, e, g, h = f.expando,
                i = a.nodeType,
                j = i ? f.cache : a,
                k = i ? a[h] : h;
            if (!j[k]) return;
            if (b) {
                d = c ? j[k] : j[k].data;
                if (d) {
                    f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                    if (!(c ? m : f.isEmptyObject)(d)) return
                }
            }
            if (!c) {
                delete j[k].data;
                if (!m(j[k])) return
            }
            f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h, i, j = this[0],
                k = 0,
                m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            return typeof a == "object" ? this.each(function () {
                f.data(this, a)
            }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", f.access(this, function (c) {
                if (c === b) return m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m)), m === b && d[1] ? this.data(d[0]) : m;
                d[1] = c, this.each(function () {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1))
        },
        removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function (a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? f.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            return a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--)
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            return m(), d.promise(c)
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = f.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++)~ g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            return f.isFunction(a) ? this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, g = this[0];
            if (!arguments.length) {
                if (g) return c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()], c && "get" in c && (d = c.get(g, "value")) !== b ? d : (d = g.value, typeof d == "string" ? d.replace(q, "") : d == null ? "" : d);
                return
            }
            return e = f.isFunction(a), this.each(function (d) {
                var g = f(this),
                    h;
                if (this.nodeType !== 1) return;
                e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                    return a == null ? "" : a + ""
                })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
            })
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    return j && !h.length && i.length ? f(i[g]).val() : h
                },
                set: function (a, b) {
                    var c = f.makeArray(b);
                    return f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!a || j === 3 || j === 8 || j === 2) return;
            if (e && c in f.attrFn) return f(a)[c](d);
            if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
            i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
            if (d !== b) {
                if (d === null) {
                    f.removeAttr(a, c);
                    return
                }
                return h && "set" in h && i && (g = h.set(a, d, c)) !== b ? g : (a.setAttribute(c, "" + d), d)
            }
            return h && "get" in h && i && (g = h.get(a, c)) !== null ? g : (g = a.getAttribute(c), g === null ? b : g)
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++) e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            value: {
                get: function (a, b) {
                    return w && f.nodeName(a, "button") ? w.get(a, b) : b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2) return;
            return h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]), d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            return b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, v || (y = {
        name: !0,
        id: !0,
        coords: !0
    }, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            return e || (e = c.createAttribute(d), a.setAttributeNode(e)), e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") return a.setAttribute(b, "auto"), c
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function (a) {
            var b = F.exec(a);
            return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b
        }, H = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        }, I = function (a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a))) return;
            d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                return typeof f == "undefined" || !! a && f.event.triggered === a.type ? b : f.event.dispatch.apply(i.elem, arguments)
            }, i.elem = a), c = f.trim(I(c)).split(" ");
            for (k = 0; k < c.length; k++) {
                l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                    type: m,
                    origType: l[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: g,
                    quick: g && G(g),
                    namespace: n.join(".")
                }, p), r = j[m];
                if (!r) {
                    r = j[m] = [], r.delegateCount = 0;
                    if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                }
                s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
            }
            a = null
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a),
                h, i, j, k, l, m, n, o, p, q, r, s;
            if (!g || !(o = g.events)) return;
            b = f.trim(I(b || "")).split(" ");
            for (h = 0; h < b.length; h++) {
                i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                if (!j) {
                    for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                    continue
                }
                p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
            }
            f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [
                    [e, p.bindType || h]
                ];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode) r.push([m, s]), n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                return c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n)), c.result
            }
            return
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
                e = d.delegateCount,
                g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace,
                i = f.event.special[c.type] || {}, j = [],
                k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c, c.delegateTarget = this;
            if (i.preDispatch && i.preDispatch.call(this, c) === !1) return;
            if (e && (!c.button || c.type !== "click")) {
                n = f(this), n.context = this.ownerDocument || this;
                for (m = c.target; m != this; m = m.parentNode || this)
                    if (m.disabled !== !0) {
                        p = {}, r = [], n[0] = m;
                        for (k = 0; k < e; k++) s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
                        r.length && j.push({
                            elem: m,
                            matches: r
                        })
                    }
            }
            d.length > e && j.push({
                elem: this,
                matches: d.slice(e)
            });
            for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                q = j[k], c.currentTarget = q.elem;
                for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                    s = q.matches[l];
                    if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            return i.postDispatch && i.postDispatch.call(this, c), c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button,
                    i = d.fromElement;
                return a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[f.expando]) return a;
            var d, e, g = a,
                h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d], a[e] = g[e];
            return a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            if (!a) return;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        stopPropagation: function () {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            if (!a) return;
            a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = K, this.stopPropagation()
        },
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c = this,
                    d = a.relatedTarget,
                    e = a.handleObj,
                    g = e.selector,
                    h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return f.event.remove(this, "._change"), z.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var d = 0,
            e = function (a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J;
            else if (!e) return this;
            return g === 1 && (h = e, e = function (a) {
                return f().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++)), this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                return f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            return d === !1 && (d = J), this.each(function () {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        live: function (a, b, c) {
            return f(this.context).on(a, this.selector, b, c), this
        },
        die: function (a, b) {
            return f(this.context).off(a, this.selector || "**", b), this
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function (a) {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function (c) {
                    var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                    return f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }),
    function () {
        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""),
            e = 0,
            g = Object.prototype.toString,
            h = !1,
            i = !0,
            j = /\\/g,
            k = /\r\n/g,
            l = /\W/;
        [0, 0].sort(function () {
                return i = !1, 0
            });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0,
                v = m.isXML(d),
                w = [],
                x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b))
                if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
                else {
                    j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                    while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                } else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length !== 1 || w[0] !== "~" && w[0] !== "+" || !d.parentNode ? d : d.parentNode, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                        while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                    } else k = w = []
                }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]")
                if (!u) e.push.apply(e, k);
                else if (d && d.nodeType === 1)
                for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
            else
                for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else s(k, e);
            return l && (m(l, h, e, f), m.uniqueSort(e)), e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h)
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            return d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []), {
                set: d,
                expr: a
            }
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a,
                r = [],
                s = c,
                t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter)
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\") continue;
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f) g = i = !0;
                            else if (f === !0) continue
                        }
                        if (f)
                            for (n = 0;
                                (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                        if (i !== b) {
                            d || (s = r), a = a.replace(o.match[h], "");
                            if (!g) return [];
                            break
                        }
                    }
                if (a === q) {
                    if (g != null) break;
                    m.error(a)
                }
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType,
                e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (d === 3 || d === 4) return a.nodeValue
            } else
                for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        }, o = m.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (a) {
                        return a.getAttribute("href")
                    },
                    type: function (a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (a, b) {
                        var c = typeof b == "string",
                            d = c && !l.test(b),
                            e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f = 0, g = a.length, h; f < g; f++)
                            if (h = a[f]) {
                                while ((h = h.previousSibling) && h.nodeType !== 1);
                                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                            }
                        e && m.filter(b, a, !0)
                    },
                    ">": function (a, b) {
                        var c, d = typeof b == "string",
                            e = 0,
                            f = a.length;
                        if (d && !l.test(b)) {
                            b = b.toLowerCase();
                            for (; e < f; e++) {
                                c = a[e];
                                if (c) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                            }
                        } else {
                            for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && m.filter(b, a, !0)
                        }
                    },
                    "": function (a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                    },
                    "~": function (a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                    }
                },
                find: {
                    ID: function (a, b, c) {
                        if (typeof b.getElementById != "undefined" && !c) {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : []
                        }
                    },
                    NAME: function (a, b) {
                        if (typeof b.getElementsByName != "undefined") {
                            var c = [],
                                d = b.getElementsByName(a[1]);
                            for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function (a, b) {
                        if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function (a, b, c, d, e, f) {
                        a = " " + a[1].replace(j, "") + " ";
                        if (f) return a;
                        for (var g = 0, h;
                            (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                        return !1
                    },
                    ID: function (a) {
                        return a[1].replace(j, "")
                    },
                    TAG: function (a, b) {
                        return a[1].replace(j, "").toLowerCase()
                    },
                    CHILD: function (a) {
                        if (a[1] === "nth") {
                            a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                        } else a[2] && m.error(a[0]);
                        return a[0] = e++, a
                    },
                    ATTR: function (a, b, c, d, e, f) {
                        var g = a[1] = a[1].replace(j, "");
                        return !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " "), a
                    },
                    PSEUDO: function (b, c, d, e, f) {
                        if (b[1] === "not") {
                            if (!((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))) {
                                var g = m.filter(b[3], c, d, !0 ^ f);
                                return d || e.push.apply(e, g), !1
                            }
                            b[3] = m(b[3], null, null, c)
                        } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                        return b
                    },
                    POS: function (a) {
                        return a.unshift(!0), a
                    }
                },
                filters: {
                    enabled: function (a) {
                        return a.disabled === !1 && a.type !== "hidden"
                    },
                    disabled: function (a) {
                        return a.disabled === !0
                    },
                    checked: function (a) {
                        return a.checked === !0
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    parent: function (a) {
                        return !!a.firstChild
                    },
                    empty: function (a) {
                        return !a.firstChild
                    },
                    has: function (a, b, c) {
                        return !!m(c[3], a).length
                    },
                    header: function (a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function (a) {
                        var b = a.getAttribute("type"),
                            c = a.type;
                        return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                    },
                    radio: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                    },
                    checkbox: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                    },
                    file: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "file" === a.type
                    },
                    password: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "password" === a.type
                    },
                    submit: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "submit" === a.type
                    },
                    image: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "image" === a.type
                    },
                    reset: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "reset" === a.type
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && "button" === a.type || b === "button"
                    },
                    input: function (a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function (a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (a, b) {
                        return b === 0
                    },
                    last: function (a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function (a, b) {
                        return b % 2 === 0
                    },
                    odd: function (a, b) {
                        return b % 2 === 1
                    },
                    lt: function (a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function (a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function (a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function (a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function (a, b, c, d) {
                        var e = b[1],
                            f = o.filters[e];
                        if (f) return f(a, c, b, d);
                        if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            var g = b[3];
                            for (var h = 0, i = g.length; h < i; h++)
                                if (g[h] === a) return !1;
                            return !0
                        }
                        m.error(e)
                    },
                    CHILD: function (a, b) {
                        var c, e, f, g, h, i, j, k = b[1],
                            l = a;
                        switch (k) {
                        case "only":
                        case "first":
                            while (l = l.previousSibling)
                                if (l.nodeType === 1) return !1;
                            if (k === "first") return !0;
                            l = a;
                        case "last":
                            while (l = l.nextSibling)
                                if (l.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0) return !0;
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            return j = a.nodeIndex - e, c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                        }
                    },
                    ID: function (a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function (a, b) {
                        return b === "*" && a.nodeType === 1 || !! a.nodeName && a.nodeName.toLowerCase() === b
                    },
                    CLASS: function (a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function (a, b) {
                        var c = b[1],
                            d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                            e = d + "",
                            f = b[2],
                            g = b[4];
                        return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                    },
                    POS: function (a, b, c, d) {
                        var e = b[2],
                            f = o.setFilters[e];
                        if (f) return f(a, c, b, d)
                    }
                }
            }, p = o.match.POS,
            q = function (a, b) {
                return "\\" + (b - 0 + 1)
            };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function (a, b) {
            return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0,
                    d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number")
                    for (var e = a.length; c < e; c++) d.push(a[c]);
                else
                    for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            return a === b ? (h = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) return h = !0, 0;
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
                f = [],
                g = a.parentNode,
                i = b.parentNode,
                j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++)
                if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }),
        function () {
            var a = c.createElement("div"),
                d = "script" + (new Date).getTime(),
                e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(),
        function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m,
                b = c.createElement("div"),
                d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (b.querySelectorAll && b.querySelectorAll(".TEST").length === 0) return;
            m = function (b, e, f, g) {
                e = e || c;
                if (!g && !m.isXML(e)) {
                    var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                    if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                        if (h[1]) return s(e.getElementsByTagName(b), f);
                        if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                    }
                    if (e.nodeType === 9) {
                        if (b === "body" && e.body) return s([e.body], f);
                        if (h && h[3]) {
                            var i = e.getElementById(h[3]);
                            if (!i || !i.parentNode) return s([], f);
                            if (i.id === h[3]) return s([i], f)
                        }
                        try {
                            return s(e.querySelectorAll(b), f)
                        } catch (j) {}
                    } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                        var k = e,
                            l = e.getAttribute("id"),
                            n = l || d,
                            p = e.parentNode,
                            q = /^\s*[+~]/.test(b);
                        l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                        try {
                            if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                        } catch (r) {} finally {
                            l || k.removeAttribute("id")
                        }
                    }
                }
                return a(b, e, f, g)
            };
            for (var e in a) m[e] = a[e];
            b = null
        }(),
        function () {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                    e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(),
        function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!a.getElementsByClassName || a.getElementsByClassName("e").length === 0) return;
            a.lastChild.className = "e";
            if (a.getElementsByClassName("e").length === 1) return;
            o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
            }, a = null
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [],
                f = "",
                g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.globalPOS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++)
                    if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            return c = c.length > 1 ? f.unique(c) : c, this.pushStack(c, "closest", a)
        },
        index: function (a) {
            return a ? typeof a == "string" ? f.inArray(this[0], f(a)) : f.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function (a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return f.sibling(a.firstChild)
        },
        contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            return L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse()), this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function (a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ab = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        cb = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
        db = /checked\s*(?:[^=]|=\s*.checked.)/i,
        eb = /\/(java|ecma)script/i,
        fb = /^\s*<!(?:\[CDATA\[|\-\-)/,
        gb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, hb = U(c);
    gb.optgroup = gb.option, gb.tbody = gb.tfoot = gb.colgroup = gb.caption = gb.thead, gb.th = gb.td, f.support.htmlSerialize || (gb._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            return f.access(this, function (a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return f.isFunction(a) ? this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f.clean(arguments);
                return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, f.clean(arguments)), a
            }
        },
        remove: function (a, b) {
            for (var c = 0, d;
                (d = this[c]) != null; c++)
                if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function () {
            for (var a = 0, b;
                (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function (a, b) {
            return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function () {
                return f.clone(this, a, b)
            })
        },
        html: function (a) {
            return f.access(this, function (a) {
                var c = this[0] || {}, d = 0,
                    e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ab.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !gb[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (g) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function (a) {
            return this[0] && this[0].parentNode ? f.isFunction(a) ? this.each(function (b) {
                var c = f(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : (typeof a != "string" && (a = f(a).detach()), this.each(function () {
                var b = this.nextSibling,
                    c = this.parentNode;
                f(this).remove(), b ? f(b).before(a) : f(c).append(a)
            })) : this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && db.test(j)) return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? ib(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, function (a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(fb, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        return b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !db.test(j)) && (f.support.html5Clone || !cb.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1), {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) return e[b](this[0]), this;
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !cb.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : ob(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                kb(a, h), d = lb(a), e = lb(h);
                for (g = 0; d[g]; ++g) e[g] && kb(d[g], e[g])
            }
            if (b) {
                jb(a, h);
                if (c) {
                    d = lb(a), e = lb(h);
                    for (g = 0; d[g]; ++g) jb(d[g], e[g])
                }
            }
            return d = e = null, h
        },
        clean: function (a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l;
                (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) continue;
                if (typeof l == "string")
                    if (!_.test(l)) l = b.createTextNode(l);
                    else {
                        l = l.replace(Y, "<$1></$2>");
                        var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                            n = gb[m] || gb._default,
                            o = n[0],
                            p = b.createElement("div"),
                            q = hb.childNodes,
                            r;
                        b === c ? hb.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                        while (o--) p = p.lastChild;
                        if (!f.support.tbody) {
                            var s = $.test(l),
                                t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                            for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                        }!f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                    }
                var u;
                if (!f.support.appendChecked)
                    if (l[0] && typeof (u = l.length) == "number")
                        for (i = 0; i < u; i++) nb(l[i]);
                    else nb(l);
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function (a) {
                    return !a.type || eb.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || eb.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
                    else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        },
        cleanData: function (a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
                (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var pb = /alpha\([^)]*\)/i,
        qb = /opacity=([^)]*)/,
        rb = /([A-Z]|^ms)/g,
        sb = /^[\-+]?(?:\d*\.)?\d+$/i,
        tb = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        ub = /^([\-+])=([\-+.\de]+)/,
        vb = /^margin/,
        wb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, xb = ["Top", "Right", "Bottom", "Left"],
        yb, zb, Ab;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = yb(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
            var g, h, i = f.camelCase(c),
                j = a.style,
                k = f.cssHooks[i];
            c = f.cssProps[i] || i;
            if (d === b) return k && "get" in k && (g = k.get(a, !1, e)) !== b ? g : j[c];
            h = typeof d, h === "string" && (g = ub.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
            if (d == null || h === "number" && isNaN(d)) return;
            h === "number" && !f.cssNumber[i] && (d += "px");
            if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                j[c] = d
            } catch (l) {}
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (yb) return yb(a, c)
        },
        swap: function (a, b, c) {
            var d = {}, e, f;
            for (f in b) d[f] = a.style[f], a.style[f] = b[f];
            e = c.call(a);
            for (f in b) a.style[f] = d[f];
            return e
        }
    }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (zb = function (a, b) {
        var c, d, e, g, h = a.style;
        return b = b.replace(rb, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && vb.test(b) && tb.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g), c
    }), c.documentElement.currentStyle && (Ab = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        return f == null && g && (e = g[b]) && (f = e), tb.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)), f === "" ? "auto" : f
    }), yb = zb || Ab, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return a.offsetWidth !== 0 ? Bb(a, b, d) : f.swap(a, wb, function () {
                    return Bb(a, b, d)
                })
            },
            set: function (a, b) {
                return sb.test(b) ? b + "px" : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return qb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(pb, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = pb.test(g) ? g.replace(pb, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                return f.swap(a, {
                    display: "inline-block"
                }, function () {
                    return b ? yb(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    }), f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        f.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) f[a + xb[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var Cb = /%20/g,
        Db = /\[\]$/,
        Eb = /\r?\n/g,
        Fb = /#.*$/,
        Gb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Hb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Ib = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Jb = /^(?:GET|HEAD)$/,
        Kb = /^\/\//,
        Lb = /\?/,
        Mb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Nb = /^(?:select|textarea)/i,
        Ob = /\s+/,
        Pb = /([?&])_=[^&]*/,
        Qb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        Rb = f.fn.load,
        Sb = {}, Tb = {}, Ub, Vb, Wb = ["*/"] + ["*"];
    try {
        Ub = e.href
    } catch (Xb) {
        Ub = c.createElement("a"), Ub.href = "", Ub = Ub.href
    }
    Vb = Qb.exec(Ub.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && Rb) return Rb.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            return f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(Mb, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            }), this
        },
        serialize: function () {
            return f.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Nb.test(this.nodeName) || Hb.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(Eb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Eb, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            return f.isFunction(d) && (g = g || e, e = d, d = b), f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            return b ? $b(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), $b(a, b), a
        },
        ajaxSettings: {
            url: Ub,
            isLocal: Ib.test(Vb[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Wb
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Yb(Sb),
        ajaxTransport: Yb(Tb),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s === 2) return;
                s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                var o, r, u, w = c,
                    x = l ? ac(d, v, l) : b,
                    y, z;
                if (a >= 200 && a < 300 || a === 304) {
                    if (d.ifModified) {
                        if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                        if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                    }
                    if (a === 304) w = "notmodified", o = !0;
                    else try {
                        r = bc(d, x), w = "success", o = !0
                    } catch (A) {
                        w = "parsererror", u = A
                    }
                } else {
                    u = w;
                    if (!w || a) w = "error", a < 0 && (a = 0)
                }
                v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = Gb.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        return s || (d.mimeType = a), this
                    },
                    abort: function (a) {
                        return a = a || "abort", p && p.abort(a), w(0, a), this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2)
                        for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(Fb, "").replace(Kb, Vb[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(Ob), d.crossDomain == null && (r = Qb.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == Vb[1] && r[2] == Vb[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (Vb[3] || (Vb[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), Zb(Sb, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Jb.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (Lb.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(Pb, "$1_=" + x);
                    d.url = y + (y === d.url ? (Lb.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + Wb + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (!d.beforeSend || d.beforeSend.call(e, v, d) !== !1 && s !== 2) {
                for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[u](d[u]);
                p = Zb(Tb, d, c, v);
                if (!p) w(-1, "No Transport");
                else {
                    v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                        v.abort("timeout")
                    }, d.timeout));
                    try {
                        s = 1, p.send(l, w)
                    } catch (z) {
                        if (!(s < 2)) throw z;
                        w(-1, z)
                    }
                }
                return v
            }
            return v.abort(), !1
        },
        param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (var g in a) _b(g, a[g], c, e);
            return d.join("&").replace(Cb, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cc = f.now(),
        dc = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (dc.test(b.url) || e && dc.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            return b.jsonp !== !1 && (j = j.replace(dc, l), b.url === j && (e && (k = k.replace(dc, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                return g || f.error(h + " was not called"), g[0]
            }, b.dataTypes[0] = "json", "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                return f.globalEval(a), a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ec = a.ActiveXObject ? function () {
            for (var a in gc) gc[a](0, 1)
        } : !1,
        fc = 0,
        gc;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && hc() || ic()
    } : hc,
    function (a) {
        f.extend(f.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(),
                        i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, ec && delete gc[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch (a) {}
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++fc, ec && (gc || (gc = {}, f(a).unload(ec)), gc[i] = d), h.onreadystatechange = d)
                },
                abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var jc = {}, kc, lc, mc = /^(?:toggle|show|hide)$/,
        nc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        oc, pc = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        qc;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(tc("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", uc(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0) return this.animate(tc("hide", 3), a, b, c);
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            return f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(tc("toggle", 3), a, b, c), this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || uc(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], mc.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = nc.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
                return !0
            }
            var e = f.speed(b, c, d);
            return f.isEmptyObject(a) ? this.each(e.complete, [!1]) : (a = f.extend({}, a), e.queue === !1 ? this.each(g) : this.queue(e.queue, g))
        },
        stop: function (a, c, d) {
            return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: tc("show", 1),
        slideUp: tc("hide", 1),
        slideToggle: tc("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            return d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            }, d
        },
        easing: {
            linear: function (a) {
                return a
            },
            swing: function (a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
                var a, b = f.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
            }
            return this.elem[this.prop]
        },
        custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = qc || rc(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !oc && (oc = setInterval(g.tick, g.interval))
        },
        show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a ||
                f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b, c, d, e = qc || rc(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show)
                        for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            return i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(oc), oc = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(pc.concat.apply([], pc), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var vc, wc = /^t(?:able|d|h)$/i,
        xc = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? vc = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {}
        if (!d || !f.contains(c, a)) return d ? {
            top: d.top,
            left: d.left
        } : {
            top: 0,
            left: 0
        };
        var g = b.body,
            h = yc(b),
            i = c.clientTop || g.clientTop || 0,
            j = c.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
            l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
            m = d.top + k - i,
            n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    } : vc = function (a, b, c) {
        var d, e = a.offsetParent,
            g = a,
            h = b.body,
            i = b.defaultView,
            j = i ? i.getComputedStyle(a, null) : a.currentStyle,
            k = a.offsetTop,
            l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !wc.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft;
        return f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft)), {
            top: k,
            left: l
        }
    }, f.fn.offset = function (a) {
        if (arguments.length) return a === b ? this : this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0],
            d = c && c.ownerDocument;
        return d ? c === d.body ? f.offset.bodyOffset(c) : vc(c, d, d.documentElement) : null
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = xc.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !xc.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = yc(a);
                if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({
        Height: "height",
        Width: "width"
    }, function (a, c) {
        var d = "client" + a,
            e = "scroll" + a,
            g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) return i = a.document, j = i.documentElement[d], f.support.boxModel && j || i.body && i.body[d] || j;
                if (a.nodeType === 9) return i = a.documentElement, i[d] >= i[e] ? i[d] : Math.max(a.body[e], i[e], a.body[g], i[g]);
                if (h === b) return k = f.css(a, c), l = parseFloat(k), f.isNumeric(l) ? l : k;
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
}(window),
function (a, b) {
    var c;
    a.rails = c = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (b) {
            var c = a('meta[name="csrf-token"]').attr("content");
            c && b.setRequestHeader("X-CSRF-Token", c)
        },
        fire: function (b, c, d) {
            var e = a.Event(c);
            return b.trigger(e, d), e.result !== !1
        },
        confirm: function (a) {
            return confirm(a)
        },
        ajax: function (b) {
            return a.ajax(b)
        },
        href: function (a) {
            return a.attr("href")
        },
        handleRemote: function (d) {
            var e, f, g, h, i, j;
            if (c.fire(d, "ajax:before")) {
                h = d.data("cross-domain") || null, i = d.data("type") || a.ajaxSettings && a.ajaxSettings.dataType;
                if (d.is("form")) {
                    e = d.attr("method"), f = d.attr("action"), g = d.serializeArray();
                    var k = d.data("ujs:submit-button");
                    k && (g.push(k), d.data("ujs:submit-button", null))
                } else d.is(c.inputChangeSelector) ? (e = d.data("method"), f = d.data("url"), g = d.serialize(), d.data("params") && (g = g + "&" + d.data("params"))) : (e = d.data("method"), f = c.href(d), g = d.data("params") || null);
                return j = {
                    type: e || "GET",
                    data: g,
                    dataType: i,
                    crossDomain: h,
                    beforeSend: function (a, e) {
                        return e.dataType === b && a.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script), c.fire(d, "ajax:beforeSend", [a, e])
                    },
                    success: function (a, b, c) {
                        d.trigger("ajax:success", [a, b, c])
                    },
                    complete: function (a, b) {
                        d.trigger("ajax:complete", [a, b])
                    },
                    error: function (a, b, c) {
                        d.trigger("ajax:error", [a, b, c])
                    }
                }, f && (j.url = f), c.ajax(j)
            }
            return !1
        },
        handleMethod: function (d) {
            var e = c.href(d),
                f = d.data("method"),
                g = d.attr("target"),
                h = a("meta[name=csrf-token]").attr("content"),
                i = a("meta[name=csrf-param]").attr("content"),
                j = a('<form method="post" action="' + e + '"></form>'),
                k = '<input name="_method" value="' + f + '" type="hidden" />';
            i !== b && h !== b && (k += '<input name="' + i + '" value="' + h + '" type="hidden" />'), g && j.attr("target", g), j.hide().append(k).appendTo("body"), j.submit()
        },
        disableFormElements: function (b) {
            b.find(c.disableSelector).each(function () {
                var b = a(this),
                    c = b.is("button") ? "html" : "val";
                b.data("ujs:enable-with", b[c]()), b[c](b.data("disable-with")), b.prop("disabled", !0)
            })
        },
        enableFormElements: function (b) {
            b.find(c.enableSelector).each(function () {
                var b = a(this),
                    c = b.is("button") ? "html" : "val";
                b.data("ujs:enable-with") && b[c](b.data("ujs:enable-with")), b.prop("disabled", !1)
            })
        },
        allowAction: function (a) {
            var b = a.data("confirm"),
                d = !1,
                e;
            return b ? (c.fire(a, "confirm") && (d = c.confirm(b), e = c.fire(a, "confirm:complete", [d])), d && e) : !0
        },
        blankInputs: function (b, c, d) {
            var e = a(),
                f, g = c || "input,textarea";
            return b.find(g).each(function () {
                f = a(this);
                if (d ? f.val() : !f.val()) e = e.add(f)
            }), e.length ? e : !1
        },
        nonBlankInputs: function (a, b) {
            return c.blankInputs(a, b, !0)
        },
        stopEverything: function (b) {
            return a(b.target).trigger("ujs:everythingStopped"), b.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (c, d) {
            var e = c.data("events"),
                f = !0;
            return e !== b && e.submit !== b && a.each(e.submit, function (a, b) {
                if (typeof b.handler == "function") return f = b.handler(d)
            }), f
        },
        disableElement: function (a) {
            a.data("ujs:enable-with", a.html()), a.html(a.data("disable-with")), a.bind("click.railsDisable", function (a) {
                return c.stopEverything(a)
            })
        },
        enableElement: function (a) {
            a.data("ujs:enable-with") !== b && (a.html(a.data("ujs:enable-with")), a.data("ujs:enable-with", !1)), a.unbind("click.railsDisable")
        }
    }, a.ajaxPrefilter(function (a, b, d) {
        a.crossDomain || c.CSRFProtection(d)
    }), a(document).delegate(c.linkDisableSelector, "ajax:complete", function () {
        c.enableElement(a(this))
    }), a(document).delegate(c.linkClickSelector, "click.rails", function (d) {
        var e = a(this),
            f = e.data("method"),
            g = e.data("params");
        if (!c.allowAction(e)) return c.stopEverything(d);
        e.is(c.linkDisableSelector) && c.disableElement(e);
        if (e.data("remote") !== b) return (d.metaKey || d.ctrlKey) && (!f || f === "GET") && !g ? !0 : (c.handleRemote(e) === !1 && c.enableElement(e), !1);
        if (e.data("method")) return c.handleMethod(e), !1
    }), a(document).delegate(c.inputChangeSelector, "change.rails", function (b) {
        var d = a(this);
        return c.allowAction(d) ? (c.handleRemote(d), !1) : c.stopEverything(b)
    }), a(document).delegate(c.formSubmitSelector, "submit.rails", function (d) {
        var e = a(this),
            f = e.data("remote") !== b,
            g = c.blankInputs(e, c.requiredInputSelector),
            h = c.nonBlankInputs(e, c.fileInputSelector);
        if (!c.allowAction(e)) return c.stopEverything(d);
        if (g && e.attr("novalidate") == b && c.fire(e, "ajax:aborted:required", [g])) return c.stopEverything(d);
        if (f) return h ? c.fire(e, "ajax:aborted:file", [h]) : !a.support.submitBubbles && a().jquery < "1.7" && c.callFormSubmitBindings(e, d) === !1 ? c.stopEverything(d) : (c.handleRemote(e), !1);
        setTimeout(function () {
            c.disableFormElements(e)
        }, 13)
    }), a(document).delegate(c.formInputClickSelector, "click.rails", function (b) {
        var d = a(this);
        if (!c.allowAction(d)) return c.stopEverything(b);
        var e = d.attr("name"),
            f = e ? {
                name: e,
                value: d.val()
            } : null;
        d.closest("form").data("ujs:submit-button", f)
    }), a(document).delegate(c.formSubmitSelector, "ajax:beforeSend.rails", function (b) {
        this == b.target && c.disableFormElements(a(this))
    }), a(document).delegate(c.formSubmitSelector, "ajax:complete.rails", function (b) {
        this == b.target && c.enableFormElements(a(this))
    })
}(jQuery),
function () {
    var a = Math,
        b = function (a) {
            return a >> 0
        }, c = /webkit/i.test(navigator.appVersion) ? "webkit" : /firefox/i.test(navigator.userAgent) ? "Moz" : "opera" in window ? "O" : "",
        d = /android/gi.test(navigator.appVersion),
        e = /iphone|ipad/gi.test(navigator.appVersion),
        f = /playbook/gi.test(navigator.appVersion),
        g = /hp-tablet/gi.test(navigator.appVersion),
        h = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
        i = "ontouchstart" in window && !g,
        j = c + "Transform" in document.documentElement.style,
        k = e || f,
        l = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
                return setTimeout(a, 17)
            }
        }(),
        m = function () {
            return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
        }(),
        n = "onorientationchange" in window ? "orientationchange" : "resize",
        o = i ? "touchstart" : "mousedown",
        p = i ? "touchmove" : "mousemove",
        q = i ? "touchend" : "mouseup",
        r = i ? "touchcancel" : "mouseup",
        s = "translate" + (h ? "3d(" : "("),
        t = h ? ",0)" : ")",
        u = function (a, b) {
            var d = this,
                e = document,
                f;
            d.wrapper = typeof a == "object" ? a : e.getElementById(a), d.wrapper.style.overflow = "hidden", d.scroller = d.wrapper.children[0], d.options = {
                hScroll: !0,
                vScroll: !0,
                x: 0,
                y: 0,
                bounce: !0,
                bounceLock: !1,
                momentum: !0,
                lockDirection: !0,
                useTransform: !0,
                useTransition: !1,
                onRefresh: null,
                onBeforeScrollStart: function (a) {
                    a.preventDefault()
                },
                onScrollStart: null,
                onBeforeScrollMove: null,
                onScrollMove: null,
                onBeforeScrollEnd: null,
                onScrollEnd: null,
                onTouchEnd: null,
                onDestroy: null
            };
            for (f in b) d.options[f] = b[f];
            d.x = d.options.x, d.y = d.options.y, d.options.useTransform = j ? d.options.useTransform : !1, d.options.hScrollbar = d.options.hScroll && d.options.hScrollbar, d.options.vScrollbar = d.options.vScroll && d.options.vScrollbar, d.options.useTransition = k && d.options.useTransition, d.scroller.style[c + "TransitionProperty"] = d.options.useTransform ? "-" + c.toLowerCase() + "-transform" : "top left", d.scroller.style[c + "TransitionDuration"] = "0", d.scroller.style[c + "TransformOrigin"] = "0 0", d.options.useTransition && (d.scroller.style[c + "TransitionTimingFunction"] = "cubic-bezier(0.33,0.66,0.66,1)"), d.options.useTransform ? d.scroller.style[c + "Transform"] = s + d.x + "px," + d.y + "px" + t : d.scroller.style.cssText += ";position:absolute;top:" + d.y + "px;left:" + d.x + "px", d.refresh(), d._bind(n, window), d._bind(o), i || d._bind("mouseout", d.wrapper)
        };
    u.prototype = {
        enabled: !0,
        x: 0,
        y: 0,
        steps: [],
        scale: 1,
        handleEvent: function (a) {
            var b = this;
            switch (a.type) {
            case o:
                if (!i && a.button !== 0) return;
                b._start(a);
                break;
            case p:
                b._move(a);
                break;
            case q:
            case r:
                b._end(a);
                break;
            case n:
                b._resize();
                break;
            case "mouseout":
                b._mouseout(a);
                break;
            case "webkitTransitionEnd":
                b._transitionEnd(a)
            }
        },
        _resize: function () {
            this.refresh()
        },
        _pos: function (a, d) {
            a = this.hScroll ? a : 0, d = this.vScroll ? d : 0, this.options.useTransform ? this.scroller.style[c + "Transform"] = s + a + "px," + d + "px" + t + " scale(" + this.scale + ")" : (a = b(a), d = b(d), this.scroller.style.left = a + "px", this.scroller.style.top = d + "px"), this.x = a, this.y = d
        },
        _start: function (a) {
            var b = this,
                d = i ? a.touches[0] : a,
                e, f, g;
            if (!b.enabled) return;
            b.options.onBeforeScrollStart && b.options.onBeforeScrollStart.call(b, a), b.options.useTransition && b._transitionTime(0), b.moved = !1, b.animating = !1, b.zoomed = !1, b.distX = 0, b.distY = 0, b.absDistX = 0, b.absDistY = 0, b.dirX = 0, b.dirY = 0;
            if (b.options.momentum) {
                b.options.useTransform ? (e = getComputedStyle(b.scroller, null)[c + "Transform"].replace(/[^0-9-.,]/g, "").split(","), f = e[4] * 1, g = e[5] * 1) : (f = getComputedStyle(b.scroller, null).left.replace(/[^0-9-]/g, "") * 1, g = getComputedStyle(b.scroller, null).top.replace(/[^0-9-]/g, "") * 1);
                if (f != b.x || g != b.y) b.options.useTransition ? b._unbind("webkitTransitionEnd") : m(b.aniTime), b.steps = [], b._pos(f, g)
            }
            b.startX = b.x, b.startY = b.y, b.pointX = d.pageX, b.pointY = d.pageY, b.startTime = a.timeStamp || Date.now(), b.options.onScrollStart && b.options.onScrollStart.call(b, a), b._bind(p), b._bind(q), b._bind(r)
        },
        _move: function (b) {
            var c = this,
                d = i ? b.touches[0] : b,
                e = d.pageX - c.pointX,
                f = d.pageY - c.pointY,
                g = c.x + e,
                h = c.y + f,
                j = b.timeStamp || Date.now();
            c.options.onBeforeScrollMove && c.options.onBeforeScrollMove.call(c, b), c.pointX = d.pageX, c.pointY = d.pageY;
            if (g > 0 || g < c.maxScrollX) g = c.options.bounce ? c.x + e / 2 : g >= 0 || c.maxScrollX >= 0 ? 0 : c.maxScrollX;
            if (h > 0 || h < c.maxScrollY) h = c.options.bounce ? c.y + f / 2 : h >= 0 || c.maxScrollY >= 0 ? 0 : c.maxScrollY;
            c.distX += e, c.distY += f, c.absDistX = a.abs(c.distX), c.absDistY = a.abs(c.distY);
            if (c.absDistX < 6 && c.absDistY < 6) return;
            c.options.lockDirection && (c.absDistX > c.absDistY + 5 ? (h = c.y, f = 0) : c.absDistY > c.absDistX + 5 && (g = c.x, e = 0)), c.moved = !0, c._pos(g, h), c.dirX = e > 0 ? -1 : e < 0 ? 1 : 0, c.dirY = f > 0 ? -1 : f < 0 ? 1 : 0, j - c.startTime > 300 && (c.startTime = j, c.startX = c.x, c.startY = c.y), c.options.onScrollMove && c.options.onScrollMove.call(c, b)
        },
        _end: function (c) {
            if (i && c.touches.length != 0) return;
            var d = this,
                e = i ? c.changedTouches[0] : c,
                f, g, h = {
                    dist: 0,
                    time: 0
                }, j = {
                    dist: 0,
                    time: 0
                }, k = (c.timeStamp || Date.now()) - d.startTime,
                l = d.x,
                m = d.y,
                n;
            d._unbind(p), d._unbind(q), d._unbind(r), d.options.onBeforeScrollEnd && d.options.onBeforeScrollEnd.call(d, c);
            if (!d.moved) {
                if (i) {
                    f = e.target;
                    while (f.nodeType != 1) f = f.parentNode;
                    f.tagName != "SELECT" && f.tagName != "INPUT" && f.tagName != "TEXTAREA" && (g = document.createEvent("MouseEvents"), g.initMouseEvent("click", !0, !0, c.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, 0, null), g._fake = !0, f.dispatchEvent(g))
                }
                d._resetPos(200), d.options.onTouchEnd && d.options.onTouchEnd.call(d, c);
                return
            }
            if (k < 300 && d.options.momentum) {
                h = l ? d._momentum(l - d.startX, k, -d.x, d.scrollerW - d.wrapperW + d.x, d.options.bounce ? d.wrapperW : 0) : h, j = m ? d._momentum(m - d.startY, k, -d.y, d.maxScrollY < 0 ? d.scrollerH - d.wrapperH + d.y : 0, d.options.bounce ? d.wrapperH : 0) : j, l = d.x + h.dist, m = d.y + j.dist;
                if (d.x > 0 && l > 0 || d.x < d.maxScrollX && l < d.maxScrollX) h = {
                    dist: 0,
                    time: 0
                };
                if (d.y > 0 && m > 0 || d.y < d.maxScrollY && m < d.maxScrollY) j = {
                    dist: 0,
                    time: 0
                }
            }
            if (h.dist || j.dist) {
                n = a.max(a.max(h.time, j.time), 10), d.scrollTo(b(l), b(m), n), d.options.onTouchEnd && d.options.onTouchEnd.call(d, c);
                return
            }
            d._resetPos(200), d.options.onTouchEnd && d.options.onTouchEnd.call(d, c)
        },
        _resetPos: function (a) {
            var b = this,
                c = b.x >= 0 ? 0 : b.x < b.maxScrollX ? b.maxScrollX : b.x,
                d = b.y >= 0 || b.maxScrollY > 0 ? 0 : b.y < b.maxScrollY ? b.maxScrollY : b.y;
            if (c == b.x && d == b.y) {
                b.moved && (b.options.onScrollEnd && b.options.onScrollEnd.call(b), b.moved = !1);
                return
            }
            b.scrollTo(c, d, a || 0)
        },
        _mouseout: function (a) {
            var b = a.relatedTarget;
            if (!b) {
                this._end(a);
                return
            }
            while (b = b.parentNode)
                if (b == this.wrapper) return;
            this._end(a)
        },
        _transitionEnd: function (a) {
            var b = this;
            if (a.target != b.scroller) return;
            b._unbind("webkitTransitionEnd"), b._startAni()
        },
        _startAni: function () {
            var b = this,
                c = b.x,
                d = b.y,
                e = Date.now(),
                f, g, h;
            if (b.animating) return;
            if (!b.steps.length) {
                b._resetPos(400);
                return
            }
            f = b.steps.shift(), f.x == c && f.y == d && (f.time = 0), b.animating = !0, b.moved = !0;
            if (b.options.useTransition) {
                b._transitionTime(f.time), b._pos(f.x, f.y), b.animating = !1, f.time ? b._bind("webkitTransitionEnd") : b._resetPos(0);
                return
            }
            h = function () {
                var i = Date.now(),
                    j, k;
                if (i >= e + f.time) {
                    b._pos(f.x, f.y), b.animating = !1, b.options.onAnimationEnd && b.options.onAnimationEnd.call(b), b._startAni();
                    return
                }
                i = (i - e) / f.time - 1, g = a.sqrt(1 - i * i), j = (f.x - c) * g + c, k = (f.y - d) * g + d, b._pos(j, k), b.animating && (b.aniTime = l(h))
            }, h()
        },
        _transitionTime: function (a) {
            this.scroller.style[c + "TransitionDuration"] = a + "ms"
        },
        _momentum: function (c, d, e, f, g) {
            var h = 6e-4,
                i = a.abs(c) / d,
                j = i * i / (2 * h),
                k = 0,
                l = 0;
            return c > 0 && j > e ? (l = g / (6 / (j / i * h)), e += l, i = i * e / j, j = e) : c < 0 && j > f && (l = g / (6 / (j / i * h)), f += l, i = i * f / j, j = f), j *= c < 0 ? -1 : 1, k = i / h, {
                dist: j,
                time: b(k)
            }
        },
        _offset: function (a) {
            var b = -a.offsetLeft,
                c = -a.offsetTop;
            while (a = a.offsetParent) b -= a.offsetLeft, c -= a.offsetTop;
            return {
                left: b,
                top: c
            }
        },
        _bind: function (a, b, c) {
            (b || this.scroller).addEventListener(a, this, !! c)
        },
        _unbind: function (a, b, c) {
            (b || this.scroller).removeEventListener(a, this, !! c)
        },
        destroy: function () {
            var a = this;
            a.scroller.style[c + "Transform"] = "", a._unbind(n, window), a._unbind(o), a._unbind(p), a._unbind(q), a._unbind(r), a._unbind("mouseout", a.wrapper), a.options.useTransition && a._unbind("webkitTransitionEnd"), a.options.onDestroy && a.options.onDestroy.call(a)
        },
        refresh: function () {
            var a = this,
                b;
            a.wrapperW = a.wrapper.clientWidth, a.wrapperH = a.wrapper.clientHeight, a.scrollerW = a.scroller.offsetWidth, a.scrollerH = a.scroller.offsetHeight, a.maxScrollX = a.wrapperW - a.scrollerW, a.maxScrollY = a.wrapperH - a.scrollerH, a.dirX = 0, a.dirY = 0, a.hScroll = a.options.hScroll && a.maxScrollX < 0, a.vScroll = a.options.vScroll && (!a.options.bounceLock && !a.hScroll || a.scrollerH > a.wrapperH), b = a._offset(a.wrapper), a.wrapperOffsetLeft = -b.left, a.wrapperOffsetTop = -b.top, a.scroller.style[c + "TransitionDuration"] = "0", a._resetPos(200)
        },
        scrollTo: function (a, b, c, d) {
            var e = this,
                f = a,
                g, h;
            e.stop(), f.length || (f = [{
                x: a,
                y: b,
                time: c,
                relative: d
            }]);
            for (g = 0, h = f.length; g < h; g++) f[g].relative && (f[g].x = e.x - f[g].x, f[g].y = e.y - f[g].y), e.steps.push({
                x: f[g].x,
                y: f[g].y,
                time: f[g].time || 0
            });
            e._startAni()
        },
        scrollToElement: function (b, c) {
            var d = this,
                e;
            b = b.nodeType ? b : d.scroller.querySelector(b);
            if (!b) return;
            e = d._offset(b), e.left += d.wrapperOffsetLeft, e.top += d.wrapperOffsetTop, e.left = e.left > 0 ? 0 : e.left < d.maxScrollX ? d.maxScrollX : e.left, e.top = e.top > 0 ? 0 : e.top < d.maxScrollY ? d.maxScrollY : e.top, c = c === undefined ? a.max(a.abs(e.left) * 2, a.abs(e.top) * 2) : c, d.scrollTo(e.left, e.top, c)
        },
        disable: function () {
            this.stop(), this._resetPos(0), this.enabled = !1, this._unbind(p), this._unbind(q), this._unbind(r)
        },
        enable: function () {
            this.enabled = !0
        },
        stop: function () {
            m(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
        }
    }, typeof exports != "undefined" ? exports.iScroll = u : window.iScroll = u
}(),
function () {
    var a, b, c, d, e, f, g, h, i, j, k, l = Array.prototype.slice,
        m = Array.prototype.indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        }, n = Object.prototype.hasOwnProperty,
        o = function (a, b) {
            function d() {
                this.constructor = a
            }
            for (var c in b) n.call(b, c) && (a[c] = b[c]);
            return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
        }, p = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        };
    c = {
        bind: function (a, b) {
            var c, d, e, f, g;
            d = a.split(" "), c = this.hasOwnProperty("_callbacks") && this._callbacks || (this._callbacks = {});
            for (f = 0, g = d.length; f < g; f++) e = d[f], c[e] || (c[e] = []), c[e].push(b);
            return this
        },
        one: function (a, b) {
            return this.bind(a, function () {
                return this.unbind(a, arguments.callee), b.apply(this, arguments)
            })
        },
        trigger: function () {
            var a, b, c, d, e, f, g;
            a = 1 <= arguments.length ? l.call(arguments, 0) : [], c = a.shift(), d = this.hasOwnProperty("_callbacks") && ((g = this._callbacks) != null ? g[c] : void 0);
            if (!d) return;
            for (e = 0, f = d.length; e < f; e++) {
                b = d[e];
                if (b.apply(this, a) === !1) break
            }
            return !0
        },
        unbind: function (a, b) {
            var c, d, e, f, g;
            if (!a) return this._callbacks = {}, this;
            e = (g = this._callbacks) != null ? g[a] : void 0;
            if (!e) return this;
            if (!b) return delete this._callbacks[a], this;
            for (d = 0, f = e.length; d < f; d++) {
                c = e[d];
                if (c !== b) continue;
                e = e.slice(), e.splice(d, 1), this._callbacks[a] = e;
                break
            }
            return this
        }
    }, d = {
        trace: !0,
        logPrefix: "(App)",
        log: function () {
            var a;
            a = 1 <= arguments.length ? l.call(arguments, 0) : [];
            if (!this.trace) return;
            return this.logPrefix && a.unshift(this.logPrefix), typeof console != "undefined" && console !== null && typeof console.log == "function" && console.log.apply(console, a), this
        }
    }, k = ["included", "extended"], f = function () {
        function a() {
            typeof this.init == "function" && this.init.apply(this, arguments)
        }
        return a.include = function (a) {
            var b, c, d;
            if (!a) throw "include(obj) requires obj";
            for (b in a) c = a[b], m.call(k, b) < 0 && (this.prototype[b] = c);
            return (d = a.included) != null && d.apply(this), this
        }, a.extend = function (a) {
            var b, c, d;
            if (!a) throw "extend(obj) requires obj";
            for (b in a) c = a[b], m.call(k, b) < 0 && (this[b] = c);
            return (d = a.extended) != null && d.apply(this), this
        }, a.proxy = function (a) {
            var b = this;
            return function () {
                return a.apply(b, arguments)
            }
        }, a.prototype.proxy = function (a) {
            var b = this;
            return function () {
                return a.apply(b, arguments)
            }
        }, a
    }(), e = function (b) {
        function d(a) {
            d.__super__.constructor.apply(this, arguments), a && this.load(a), this.cid || (this.cid = "c-" + this.constructor.uid())
        }
        return o(d, b), d.extend(c), d.records = {}, d.crecords = {}, d.attributes = [], d.configure = function () {
            var a, b;
            return b = arguments[0], a = 2 <= arguments.length ? l.call(arguments, 1) : [], this.className = b, this.records = {}, this.crecords = {}, a.length && (this.attributes = a), this.attributes && (this.attributes = j(this.attributes)), this.attributes || (this.attributes = []), this.unbind(), this
        }, d.toString = function () {
            return "" + this.className + "(" + this.attributes.join(", ") + ")"
        }, d.find = function (a) {
            var b;
            if (("" + a).match(/c-\d+/)) return this.findCID(a);
            b = this.records[a];
            if (!b) throw "Unknown record";
            return b.clone()
        }, d.findCID = function (a) {
            var b;
            b = this.crecords[a];
            if (!b) throw "Unknown record";
            return b.clone()
        }, d.exists = function (a) {
            try {
                return this.find(a)
            } catch (b) {
                return !1
            }
        }, d.refresh = function (a, b) {
            var c, d, e, f;
            b == null && (b = {}), b.clear && (this.records = {}, this.crecords = {}), d = this.fromJSON(a), h(d) || (d = [d]);
            for (e = 0, f = d.length; e < f; e++) c = d[e], c.id || (c.id = c.cid), this.records[c.id] = c, this.crecords[c.cid] = c;
            return this.trigger("refresh", !b.clear && this.cloneArray(d)), this
        }, d.select = function (a) {
            var b, c, d;
            return d = function () {
                var d, e;
                d = this.records, e = [];
                for (b in d) c = d[b], a(c) && e.push(c);
                return e
            }.call(this), this.cloneArray(d)
        }, d.findByAttribute = function (a, b) {
            var c, d, e;
            e = this.records;
            for (c in e) {
                d = e[c];
                if (d[a] === b) return d.clone()
            }
            return null
        }, d.findAllByAttribute = function (a, b) {
            return this.select(function (c) {
                return c[a] === b
            })
        }, d.each = function (a) {
            var b, c, d, e;
            d = this.records, e = [];
            for (b in d) c = d[b], e.push(a(c.clone()));
            return e
        }, d.all = function () {
            return this.cloneArray(this.recordsValues())
        }, d.first = function () {
            var a;
            return a = this.recordsValues()[0], a != null ? a.clone() : void 0
        }, d.last = function () {
            var a, b;
            return b = this.recordsValues(), a = b[b.length - 1], a != null ? a.clone() : void 0
        }, d.count = function () {
            return this.recordsValues().length
        }, d.deleteAll = function () {
            var a, b, c, d;
            c = this.records, d = [];
            for (a in c) b = c[a], d.push(delete this.records[a]);
            return d
        }, d.destroyAll = function () {
            var a, b, c, d;
            c = this.records, d = [];
            for (a in c) b = c[a], d.push(this.records[a].destroy());
            return d
        }, d.update = function (a, b, c) {
            return this.find(a).updateAttributes(b, c)
        }, d.create = function (a, b) {
            var c;
            return c = new this(a), c.save(b)
        }, d.destroy = function (a, b) {
            return this.find(a).destroy(b)
        }, d.change = function (a) {
            return typeof a == "function" ? this.bind("change", a) : this.trigger("change", a)
        }, d.fetch = function (a) {
            return typeof a == "function" ? this.bind("fetch", a) : this.trigger("fetch", a)
        }, d.toJSON = function () {
            return this.recordsValues()
        }, d.fromJSON = function (a) {
            var b, c, d, e;
            if (!a) return;
            typeof a == "string" && (a = JSON.parse(a));
            if (h(a)) {
                e = [];
                for (c = 0, d = a.length; c < d; c++) b = a[c], e.push(new this(b));
                return e
            }
            return new this(a)
        }, d.fromForm = function () {
            var a;
            return (a = new this).fromForm.apply(a, arguments)
        }, d.recordsValues = function () {
            var a, b, c, d;
            b = [], d = this.records;
            for (a in d) c = d[a], b.push(c);
            return b
        }, d.cloneArray = function (a) {
            var b, c, d, e;
            e = [];
            for (c = 0, d = a.length; c < d; c++) b = a[c], e.push(b.clone());
            return e
        }, d.idCounter = 0, d.uid = function () {
            return this.idCounter++
        }, d.prototype.isNew = function () {
            return !this.exists()
        }, d.prototype.isValid = function () {
            return !this.validate()
        }, d.prototype.validate = function () {}, d.prototype.load = function (a) {
            var b, c;
            for (b in a) c = a[b], typeof this[b] == "function" ? this[b](c) : this[b] = c;
            return this
        }, d.prototype.attributes = function () {
            var a, b, c, d, e;
            b = {}, e = this.constructor.attributes;
            for (c = 0, d = e.length; c < d; c++) a = e[c], a in this && (typeof this[a] == "function" ? b[a] = this[a]() : b[a] = this[a]);
            return this.id && (b.id = this.id), b
        }, d.prototype.eql = function (a) {
            return a && a.constructor === this.constructor && (a.id === this.id || a.cid === this.cid)
        }, d.prototype.save = function (a) {
            var b, c;
            a == null && (a = {});
            if (a.validate !== !1) {
                b = this.validate();
                if (b) return this.trigger("error", b), !1
            }
            return this.trigger("beforeSave", a), c = this.isNew() ? this.create(a) : this.update(a), this.trigger("save", a), c
        }, d.prototype.updateAttribute = function (a, b) {
            return this[a] = b, this.save()
        }, d.prototype.updateAttributes = function (a, b) {
            return this.load(a), this.save(b)
        }, d.prototype.changeID = function (a) {
            var b;
            return b = this.constructor.records, b[a] = b[this.id], delete b[this.id], this.id = a, this.save()
        }, d.prototype.destroy = function (a) {
            return a == null && (a = {}), this.trigger("beforeDestroy", a), delete this.constructor.records[this.id], delete this.constructor.crecords[this.cid], this.destroyed = !0, this.trigger("destroy", a), this.trigger("change", "destroy", a), this.unbind(), this
        }, d.prototype.dup = function (a) {
            var b;
            return b = new this.constructor(this.attributes()), a === !1 ? b.cid = this.cid : delete b.id, b
        }, d.prototype.clone = function () {
            return Object.create(this)
        }, d.prototype.reload = function () {
            var a;
            return this.isNew() ? this : (a = this.constructor.find(this.id), this.load(a.attributes()), a)
        }, d.prototype.toJSON = function () {
            return this.attributes()
        }, d.prototype.toString = function () {
            return "<" + this.constructor.className + " (" + JSON.stringify(this) + ")>"
        }, d.prototype.fromForm = function (b) {
            var c, d, e, f, g;
            d = {}, g = a(b).serializeArray();
            for (e = 0, f = g.length; e < f; e++) c = g[e], d[c.name] = c.value;
            return this.load(d)
        }, d.prototype.exists = function () {
            return this.id && this.id in this.constructor.records
        }, d.prototype.update = function (a) {
            var b, c;
            return this.trigger("beforeUpdate", a), c = this.constructor.records, c[this.id].load(this.attributes()), b = c[this.id].clone(), b.trigger("update", a), b.trigger("change", "update", a), b
        }, d.prototype.create = function (a) {
            var b, c;
            return this.trigger("beforeCreate", a), this.id || (this.id = this.cid), c = this.dup(!1), this.constructor.records[this.id] = c, this.constructor.crecords[this.cid] = c, b = c.clone(), b.trigger("create", a), b.trigger("change", "create", a), b
        }, d.prototype.bind = function (a, b) {
            var c, d, e = this;
            return this.constructor.bind(a, c = function (a) {
                if (a && e.eql(a)) return b.apply(e, arguments)
            }), this.constructor.bind("unbind", d = function (b) {
                if (b && e.eql(b)) return e.constructor.unbind(a, c), e.constructor.unbind("unbind", d)
            }), c
        }, d.prototype.one = function (a, b) {
            var c, d = this;
            return c = this.bind(a, function () {
                return d.constructor.unbind(a, c), b.apply(d)
            })
        }, d.prototype.trigger = function () {
            var a, b;
            return a = 1 <= arguments.length ? l.call(arguments, 0) : [], a.splice(1, 0, this), (b = this.constructor).trigger.apply(b, a)
        }, d.prototype.unbind = function () {
            return this.trigger("unbind")
        }, d
    }(f), b = function (b) {
        function e(b) {
            this.release = p(this.release, this);
            var c, d, f;
            this.options = b, f = this.options;
            for (c in f) d = f[c], this[c] = d;
            this.el || (this.el = document.createElement(this.tag)), this.el = a(this.el), this.className && this.el.addClass(this.className), this.release(function () {
                return this.el.remove()
            }), this.events || (this.events = this.constructor.events), this.elements || (this.elements = this.constructor.elements), this.events && this.delegateEvents(), this.elements && this.refreshElements(), e.__super__.constructor.apply(this, arguments)
        }
        return o(e, b), e.include(c), e.include(d), e.prototype.eventSplitter = /^(\S+)\s*(.*)$/, e.prototype.tag = "div", e.prototype.release = function (a) {
            return typeof a == "function" ? this.bind("release", a) : this.trigger("release")
        }, e.prototype.$ = function (b) {
            return a(b, this.el)
        }, e.prototype.delegateEvents = function () {
            var a, b, c, d, e, f, g;
            f = this.events, g = [];
            for (b in f) d = f[b], typeof d != "function" && (d = this.proxy(this[d])), c = b.match(this.eventSplitter), a = c[1], e = c[2], e === "" ? g.push(this.el.bind(a, d)) : g.push(this.el.delegate(e, a, d));
            return g
        }, e.prototype.refreshElements = function () {
            var a, b, c, d;
            c = this.elements, d = [];
            for (a in c) b = c[a], d.push(this[b] = this.$(a));
            return d
        }, e.prototype.delay = function (a, b) {
            return setTimeout(this.proxy(a), b || 0)
        }, e.prototype.html = function (a) {
            return this.el.html(a.el || a), this.refreshElements(), this.el
        }, e.prototype.append = function () {
            var a, b, c;
            return b = 1 <= arguments.length ? l.call(arguments, 0) : [], b = function () {
                var c, d, e;
                e = [];
                for (c = 0, d = b.length; c < d; c++) a = b[c], e.push(a.el || a);
                return e
            }(), (c = this.el).append.apply(c, b), this.refreshElements(), this.el
        }, e.prototype.appendTo = function (a) {
            return this.el.appendTo(a.el || a), this.refreshElements(), this.el
        }, e.prototype.prepend = function () {
            var a, b, c;
            return b = 1 <= arguments.length ? l.call(arguments, 0) : [], b = function () {
                var c, d, e;
                e = [];
                for (c = 0, d = b.length; c < d; c++) a = b[c], e.push(a.el || a);
                return e
            }(), (c = this.el).prepend.apply(c, b), this.refreshElements(), this.el
        }, e.prototype.replace = function (b) {
            var c, d;
            return d = [this.el, a(b.el || b)], c = d[0], this.el = d[1], c.replaceWith(this.el), this.delegateEvents(), this.refreshElements(), this.el
        }, e
    }(f), a = window.jQuery || window.Zepto || function (a) {
        return a
    }, typeof Object.create != "function" && (Object.create = function (a) {
        var b;
        return b = function () {}, b.prototype = a, new b
    }), h = function (a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }, i = function (a) {
        var b;
        if (!a) return !0;
        for (b in a) return !1;
        return !0
    }, j = function (a) {
        return Array.prototype.slice.call(a, 0)
    }, g = this.Spine = {}, typeof module != "undefined" && module !== null && (module.exports = g), g.version = "1.0.5", g.isArray = h, g.isBlank = i, g.$ = a, g.Events = c, g.Log = d, g.Module = f, g.Controller = b, g.Model = e, f.extend.call(g, c), f.create = f.sub = b.create = b.sub = e.sub = function (a, b) {
        var c;
        return c = function (a) {
            function b() {
                b.__super__.constructor.apply(this, arguments)
            }
            return o(b, a), b
        }(this), a && c.include(a), b && c.extend(b), typeof c.unbind == "function" && c.unbind(), c
    }, e.setup = function (a, b) {
        var c;
        return b == null && (b = []), c = function (a) {
            function b() {
                b.__super__.constructor.apply(this, arguments)
            }
            return o(b, a), b
        }(this), c.configure.apply(c, [a].concat(l.call(b))), c
    }, f.init = b.init = e.init = function (a, b, c, d, e) {
        return new this(a, b, c, d, e)
    }, g.Class = f
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        }, d = Array.prototype.slice;
    if (typeof Spine == "undefined" || Spine === null) Spine = require("spine");
    a = Spine.$, Spine.Manager = function (a) {
        function b() {
            this.controllers = [], this.bind("change", this.change), this.add.apply(this, arguments)
        }
        return c(b, a), b.include(Spine.Events), b.prototype.add = function () {
            var a, b, c, e, f;
            b = 1 <= arguments.length ? d.call(arguments, 0) : [], f = [];
            for (c = 0, e = b.length; c < e; c++) a = b[c], f.push(this.addOne(a));
            return f
        }, b.prototype.addOne = function (a) {
            var b = this;
            return a.bind("active", function () {
                var c;
                return c = 1 <= arguments.length ? d.call(arguments, 0) : [], b.trigger.apply(b, ["change", a].concat(d.call(c)))
            }), a.bind("release", function () {
                return b.controllers.splice(b.controllers.indexOf(a), 1)
            }), this.controllers.push(a)
        }, b.prototype.deactivate = function () {
            return this.trigger.apply(this, ["change", !1].concat(d.call(arguments)))
        }, b.prototype.change = function () {
            var a, b, c, e, f, g, h;
            c = arguments[0], a = 2 <= arguments.length ? d.call(arguments, 1) : [], g = this.controllers, h = [];
            for (e = 0, f = g.length; e < f; e++) b = g[e], b === c ? h.push(b.activate.apply(b, a)) : h.push(b.deactivate.apply(b, a));
            return h
        }, b
    }(Spine.Module), Spine.Controller.include({
        active: function () {
            var a;
            return a = 1 <= arguments.length ? d.call(arguments, 0) : [], typeof a[0] == "function" ? this.bind("active", a[0]) : (a.unshift("active"), this.trigger.apply(this, a)), this
        },
        isActive: function () {
            return this.el.hasClass("active")
        },
        activate: function () {
            return this.el.addClass("active"), this
        },
        deactivate: function () {
            return this.el.removeClass("active"), this
        }
    }), Spine.Stack = function (a) {
        function b() {
            var a, c, e, f, g, h = this;
            b.__super__.constructor.apply(this, arguments), this.manager = new Spine.Manager, this.manager.bind("change", function () {
                var a, b;
                b = arguments[0], a = 2 <= arguments.length ? d.call(arguments, 1) : [];
                if (b) return h.active.apply(h, a)
            }), f = this.controllers;
            for (a in f) c = f[a], this[a] = new c({
                stack: this
            }), this.add(this[a]);
            g = this.routes, e = function (a, b) {
                var c;
                return typeof b == "function" && (c = b), c || (c = function () {
                    var a;
                    return (a = h[b]).active.apply(a, arguments)
                }), h.route(a, c)
            };
            for (a in g) c = g[a], e(a, c);
            this["default"] && this[this["default"]].active()
        }
        return c(b, a), b.prototype.controllers = {}, b.prototype.routes = {}, b.prototype.className = "spine stack", b.prototype.add = function (a) {
            return this.manager.add(a), this.append(a)
        }, b
    }(Spine.Controller), typeof module != "undefined" && module !== null && (module.exports = Spine.Manager)
}.call(this),
function () {
    var a, b, c, d, e, f, g, h, i = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }, j = Object.prototype.hasOwnProperty,
        k = function (a, b) {
            function d() {
                this.constructor = a
            }
            for (var c in b) j.call(b, c) && (a[c] = b[c]);
            return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
        }, l = Array.prototype.slice;
    if (typeof Spine == "undefined" || Spine === null) Spine = require("spine");
    a = Spine.$, g = Spine.Model, b = {
        getURL: function (a) {
            return a && (typeof a.url == "function" ? a.url() : void 0) || a.url
        },
        enabled: !0,
        pending: !1,
        requests: [],
        disable: function (a) {
            return this.enabled ? (this.enabled = !1, a(), this.enabled = !0) : a()
        },
        requestNext: function () {
            var a;
            return a = this.requests.shift(), a ? this.request(a) : this.pending = !1
        },
        request: function (a) {
            var b = this;
            return a().complete(function () {
                return b.requestNext()
            })
        },
        queue: function (a) {
            if (!this.enabled) return;
            return this.pending ? this.requests.push(a) : (this.pending = !0, this.request(a)), a
        }
    }, c = function () {
        function c() {}
        return c.prototype.defaults = {
            contentType: "application/json",
            dataType: "json",
            processData: !1,
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }, c.prototype.ajax = function (b, c) {
            return a.ajax(a.extend({}, this.defaults, c, b))
        }, c.prototype.queue = function (a) {
            return b.queue(a)
        }, c
    }(), d = function (a) {
        function c(a) {
            this.model = a, this.errorResponse = i(this.errorResponse, this), this.recordsResponse = i(this.recordsResponse, this)
        }
        return k(c, a), c.prototype.find = function (a, c) {
            var d;
            return d = new this.model({
                id: a
            }), this.ajax(c, {
                type: "GET",
                url: b.getURL(d)
            }).success(this.recordsResponse).error(this.errorResponse)
        }, c.prototype.all = function (a) {
            return this.ajax(a, {
                type: "GET",
                url: b.getURL(this.model)
            }).success(this.recordsResponse).error(this.errorResponse)
        }, c.prototype.fetch = function (a) {
            var b, c = this;
            return a == null && (a = {}), (b = a.id) ? (delete a.id, this.find(b, a).success(function (a) {
                return c.model.refresh(a)
            })) : this.all(a).success(function (a) {
                return c.model.refresh(a)
            })
        }, c.prototype.recordsResponse = function (a, b, c) {
            return this.model.trigger("ajaxSuccess", null, b, c)
        }, c.prototype.errorResponse = function (a, b, c) {
            return this.model.trigger("ajaxError", null, a, b, c)
        }, c
    }(c), h = function (a) {
        function c(a) {
            this.record = a, this.errorResponse = i(this.errorResponse, this), this.recordResponse = i(this.recordResponse, this), this.model = this.record.constructor
        }
        return k(c, a), c.prototype.reload = function (a, c) {
            var d = this;
            return this.queue(function () {
                return d.ajax(a, {
                    type: "GET",
                    url: b.getURL(d.record)
                }).success(d.recordResponse(c)).error(d.errorResponse(c))
            })
        }, c.prototype.create = function (a, c) {
            var d = this;
            return this.queue(function () {
                return d.ajax(a, {
                    type: "POST",
                    data: JSON.stringify(d.record),
                    url: b.getURL(d.model)
                }).success(d.recordResponse(c)).error(d.errorResponse(c))
            })
        }, c.prototype.update = function (a, c) {
            var d = this;
            return this.queue(function () {
                return d.ajax(a, {
                    type: "PUT",
                    data: JSON.stringify(d.record),
                    url: b.getURL(d.record)
                }).success(d.recordResponse(c)).error(d.errorResponse(c))
            })
        }, c.prototype.destroy = function (a, c) {
            var d = this;
            return this.queue(function () {
                return d.ajax(a, {
                    type: "DELETE",
                    url: b.getURL(d.record)
                }).success(d.recordResponse(c)).error(d.errorResponse(c))
            })
        }, c.prototype.recordResponse = function (a) {
            var c = this;
            return a == null && (a = {}),
            function (d, e, f) {
                var g;
                return Spine.isBlank(d) ? d = !1 : d = c.model.fromJSON(d), b.disable(function () {
                    if (d) return d.id && c.record.id !== d.id && c.record.changeID(d.id), c.record.updateAttributes(d.attributes())
                }), c.record.trigger("ajaxSuccess", d, e, f), (g = a.success) != null ? g.apply(c.record) : void 0
            }
        }, c.prototype.errorResponse = function (a) {
            var b = this;
            return a == null && (a = {}),
            function (c, d, e) {
                var f;
                return b.record.trigger("ajaxError", c, d, e), (f = a.error) != null ? f.apply(b.record) : void 0
            }
        }, c
    }(c), g.host = "", f = {
        ajax: function () {
            return new h(this)
        },
        url: function () {
            var a, c;
            return a = 1 <= arguments.length ? l.call(arguments, 0) : [], c = b.getURL(this.constructor), c.charAt(c.length - 1) !== "/" && (c += "/"), c += encodeURIComponent(this.id), a.unshift(c), a.join("/")
        }
    }, e = {
        ajax: function () {
            return new d(this)
        },
        url: function () {
            var a;
            return a = 1 <= arguments.length ? l.call(arguments, 0) : [], a.unshift(this.className.toLowerCase() + "s"), a.unshift(g.host), a.join("/")
        }
    }, g.Ajax = {
        extended: function () {
            return this.fetch(this.ajaxFetch), this.change(this.ajaxChange), this.extend(e), this.include(f)
        },
        ajaxFetch: function () {
            var a;
            return (a = this.ajax()).fetch.apply(a, arguments)
        },
        ajaxChange: function (a, b, c) {
            c == null && (c = {});
            if (c.ajax === !1) return;
            return a.ajax()[b](c.ajax, c)
        }
    }, g.Ajax.Methods = {
        extended: function () {
            return this.extend(e), this.include(f)
        }
    }, b.defaults = c.prototype.defaults, Spine.Ajax = b, typeof module != "undefined" && module !== null && (module.exports = b)
}.call(this),
function () {
    var a, b, c, d, e, f = Object.prototype.hasOwnProperty,
        g = function (a, b) {
            function d() {
                this.constructor = a
            }
            for (var c in b) f.call(b, c) && (a[c] = b[c]);
            return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
        }, h = Array.prototype.slice;
    if (typeof Spine == "undefined" || Spine === null) Spine = require("spine");
    a = Spine.$, c = /^#*/, d = /:([\w\d]+)/g, e = /\*([\w\d]+)/g, b = /[-[\]{}()+?.,\\^$|#\s]/g, Spine.Route = function (f) {
        function j(a, c) {
            var f;
            this.path = a, this.callback = c, this.names = [];
            if (typeof a == "string") {
                d.lastIndex = 0;
                while ((f = d.exec(a)) !== null) this.names.push(f[1]);
                a = a.replace(b, "\\$&").replace(d, "([^/]*)").replace(e, "(.*?)"), this.route = new RegExp("^" + a + "$")
            } else this.route = a
        }
        var i;
        return g(j, f), j.extend(Spine.Events), j.historySupport = ((i = window.history) != null ? i.pushState : void 0) != null, j.routes = [], j.options = {
            trigger: !0,
            history: !1,
            shim: !1
        }, j.add = function (a, b) {
            var c, d, e;
            if (typeof a != "object" || a instanceof RegExp) return this.routes.push(new this(a, b));
            e = [];
            for (c in a) d = a[c], e.push(this.add(c, d));
            return e
        }, j.setup = function (b) {
            b == null && (b = {}), this.options = a.extend({}, this.options, b), this.options.history && (this.history = this.historySupport && this.options.history);
            if (this.options.shim) return;
            return this.history ? a(window).bind("popstate", this.change) : a(window).bind("hashchange", this.change), this.change()
        }, j.unbind = function () {
            return this.history ? a(window).unbind("popstate", this.change) : a(window).unbind("hashchange", this.change)
        }, j.navigate = function () {
            var b, c, d, e;
            b = 1 <= arguments.length ? h.call(arguments, 0) : [], d = {}, c = b[b.length - 1], typeof c == "object" ? d = b.pop() : typeof c == "boolean" && (d.trigger = b.pop()), d = a.extend({}, this.options, d), e = b.join("/");
            if (this.path === e) return;
            this.path = e, this.trigger("navigate", this.path), d.trigger && this.matchRoute(this.path, d);
            if (d.shim) return;
            return this.history ? history.pushState({}, document.title, this.path) : window.location.hash = this.path
        }, j.getPath = function () {
            var a;
            return a = window.location.pathname, a.substr(0, 1) !== "/" && (a = "/" + a), a
        }, j.getHash = function () {
            return window.location.hash
        }, j.getFragment = function () {
            return this.getHash().replace(c, "")
        }, j.getHost = function () {
            return (document.location + "").replace(this.getPath() + this.getHash(), "")
        }, j.change = function () {
            var a;
            a = this.getFragment() !== "" ? this.getFragment() : this.getPath();
            if (a === this.path) return;
            return this.path = a, this.matchRoute(this.path)
        }, j.matchRoute = function (a, b) {
            var c, d, e, f;
            f = this.routes;
            for (d = 0, e = f.length; d < e; d++) {
                c = f[d];
                if (c.match(a, b)) return this.trigger("change", c, a), c
            }
        }, j.prototype.match = function (a, b) {
            var c, d, e, f, g;
            b == null && (b = {}), d = this.route.exec(a);
            if (!d) return !1;
            b.match = d, f = d.slice(1);
            if (this.names.length)
                for (c = 0, g = f.length; c < g; c++) e = f[c], b[this.names[c]] = e;
            return this.callback.call(null, b) !== !1
        }, j
    }(Spine.Module), Spine.Route.change = Spine.Route.proxy(Spine.Route.change), Spine.Controller.include({
        route: function (a, b) {
            return Spine.Route.add(a, this.proxy(b))
        },
        routes: function (a) {
            var b, c, d;
            d = [];
            for (b in a) c = a[b], d.push(this.route(b, c));
            return d
        },
        navigate: function () {
            return Spine.Route.navigate.apply(Spine.Route, arguments)
        }
    }), typeof module != "undefined" && module !== null && (module.exports = Spine.Route)
}.call(this),
function () {
    var Collection, Instance, Singleton, isArray, singularize, underscore, __hasProp = Object.prototype.hasOwnProperty,
        __extends = function (a, b) {
            function d() {
                this.constructor = a
            }
            for (var c in b) __hasProp.call(b, c) && (a[c] = b[c]);
            return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
        };
    if (typeof Spine == "undefined" || Spine === null) Spine = require("spine");
    isArray = Spine.isArray;
    if (typeof require == "undefined" || require === null) require = function (value) {
        return eval(value)
    };
    Collection = function (a) {
        function b(a) {
            var b, c;
            a == null && (a = {});
            for (b in a) c = a[b], this[b] = c
        }
        return __extends(b, a), b.prototype.all = function () {
            var a = this;
            return this.model.select(function (b) {
                return a.associated(b)
            })
        }, b.prototype.first = function () {
            return this.all()[0]
        }, b.prototype.last = function () {
            var a;
            return a = this.all(), a[a.length - 1]
        }, b.prototype.find = function (a) {
            var b, c = this;
            b = this.select(function (b) {
                return b.id + "" == a + ""
            });
            if (!b[0]) throw "Unknown record";
            return b[0]
        }, b.prototype.findAllByAttribute = function (a, b) {
            var c = this;
            return this.model.select(function (c) {
                return c[a] === b
            })
        }, b.prototype.findByAttribute = function (a, b) {
            return this.findAllByAttribute(a, b)[0]
        }, b.prototype.select = function (a) {
            var b = this;
            return this.model.select(function (c) {
                return b.associated(c) && a(c)
            })
        }, b.prototype.refresh = function (a) {
            var b, c, d, e, f, g, h;
            h = this.all();
            for (d = 0, f = h.length; d < f; d++) b = h[d], delete this.model.records[b.id];
            c = this.model.fromJSON(a), isArray(c) || (c = [c]);
            for (e = 0, g = c.length; e < g; e++) b = c[e], b.newRecord = !1, b[this.fkey] = this.record.id, this.model.records[b.id] = b;
            return this.model.trigger("refresh", c)
        }, b.prototype.create = function (a) {
            return a[this.fkey] = this.record.id, this.model.create(a)
        }, b.prototype.associated = function (a) {
            return a[this.fkey] === this.record.id
        }, b
    }(Spine.Module), Instance = function (a) {
        function b(a) {
            var b, c;
            a == null && (a = {});
            for (b in a) c = a[b], this[b] = c
        }
        return __extends(b, a), b.prototype.exists = function () {
            return this.record[this.fkey] && this.model.exists(this.record[this.fkey])
        }, b.prototype.update = function (a) {
            return a instanceof this.model || (a = new this.model(a)), a.isNew() && a.save(), this.record[this.fkey] = a && a.id
        }, b
    }(Spine.Module), Singleton = function (a) {
        function b(a) {
            var b, c;
            a == null && (a = {});
            for (b in a) c = a[b], this[b] = c
        }
        return __extends(b, a), b.prototype.find = function () {
            return this.record.id && this.model.findByAttribute(this.fkey, this.record.id)
        }, b.prototype.update = function (a) {
            return a instanceof this.model || (a = this.model.fromJSON(a)), a[this.fkey] = this.record.id, a.save()
        }, b
    }(Spine.Module), singularize = function (a) {
        return a.replace(/s$/, "")
    }, underscore = function (a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/-/g, "_").toLowerCase()
    }, Spine.Model.extend({
        hasMany: function (a, b, c) {
            var d;
            return c == null && (c = "" + underscore(this.className) + "_id"), d = function (d) {
                return typeof b == "string" && (b = require(b)), new Collection({
                    name: a,
                    model: b,
                    record: d,
                    fkey: c
                })
            }, this.prototype[a] = function (a) {
                return a != null && d(this).refresh(a), d(this)
            }
        },
        belongsTo: function (a, b, c) {
            var d;
            return c == null && (c = "" + singularize(a) + "_id"), d = function (d) {
                return typeof b == "string" && (b = require(b)), new Instance({
                    name: a,
                    model: b,
                    record: d,
                    fkey: c
                })
            }, this.prototype[a] = function (a) {
                return a != null && d(this).update(a), d(this).exists()
            }, this.attributes.push(c)
        },
        hasOne: function (a, b, c) {
            var d;
            return c == null && (c = "" + underscore(this.className) + "_id"), d = function (d) {
                return typeof b == "string" && (b = require(b)), new Singleton({
                    name: a,
                    model: b,
                    record: d,
                    fkey: c
                })
            }, this.prototype[a] = function (a) {
                return a != null && d(this).update(a), d(this).find()
            }
        }
    })
}.call(this),
function () {
    Array.prototype.randomize = function () {
        var a, b, c, d;
        a = this.concat(), c = void 0, d = void 0, b = a.length;
        while (b) c = parseInt(Math.random() * b), d = a[--b], a[b] = a[c], a[c] = d;
        return a
    }, Array.prototype.at = function (a) {
        return a >= 0 ? this[a] : this[this.length + a]
    }, Array.prototype.first = function () {
        return this[0]
    }, Array.prototype.last = function () {
        return this[this.length - 1]
    }
}.call(this),
function () {
    Number.prototype.toCurrency = function (a) {
        return a == null && (a = 2), this.toFixed(a).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    }
}.call(this),
function () {
    String.prototype.lpad = function (a, b) {
        var c;
        return c = (new Array(a - this.length + 1)).join(b), "" + c + this
    }, String.prototype.rpad = function (a, b) {
        var c;
        return c = (new Array(a - this.length + 1)).join(b), "" + this + c
    }, String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }, String.prototype.topicize = function () {
        var a, b;
        return b = this.split(/\s+/), b = function () {
            var c, d, e;
            e = [];
            for (c = 0, d = b.length; c < d; c++) a = b[c], e.push(a.capitalize());
            return e
        }(), b.join(" ")
    }, String.prototype.parameterize = function (a) {
        return a == null && (a = "-"), this.toLowerCase().split(/\W+/).join(a)
    }, String.prototype.toCurrency = function (a) {
        return parseFloat(this).toCurrency(a)
    }, String.prototype.humanize = function () {
        var a;
        return a = this.split("_"), a[0] = a[0].capitalize(), a.join(" ")
    }
}.call(this), this.Handlebars = {},
function (a) {
    a.VERSION = "1.0.0-rc.3", a.COMPILER_REVISION = 2, a.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: ">= 1.0.0-rc.3"
    }, a.helpers = {}, a.partials = {}, a.registerHelper = function (a, b, c) {
        c && (b.not = c), this.helpers[a] = b
    }, a.registerPartial = function (a, b) {
        this.partials[a] = b
    }, a.registerHelper("helperMissing", function (a) {
        if (arguments.length === 2) return undefined;
        throw new Error("Could not find property '" + a + "'")
    });
    var b = Object.prototype.toString,
        c = "[object Function]";
    a.registerHelper("blockHelperMissing", function (d, e) {
        var f = e.inverse || function () {}, g = e.fn,
            h = "",
            i = b.call(d);
        return i === c && (d = d.call(this)), d === !0 ? g(this) : d === !1 || d == null ? f(this) : i === "[object Array]" ? d.length > 0 ? a.helpers.each(d, e) : f(this) : g(d)
    }), a.K = function () {}, a.createFrame = Object.create || function (b) {
        a.K.prototype = b;
        var c = new a.K;
        return a.K.prototype = null, c
    }, a.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        log: function (b, c) {
            if (a.logger.level <= b) {
                var d = a.logger.methodMap[b];
                typeof console != "undefined" && console[d] && console[d].call(console, c)
            }
        }
    }, a.log = function (b, c) {
        a.logger.log(b, c)
    }, a.registerHelper("each", function (b, c) {
        var d = c.fn,
            e = c.inverse,
            f = 0,
            g = "",
            h;
        c.data && (h = a.createFrame(c.data));
        if (b && typeof b == "object")
            if (b instanceof Array)
                for (var i = b.length; f < i; f++) h && (h.index = f), g += d(b[f], {
                    data: h
                });
            else
                for (var j in b) b.hasOwnProperty(j) && (h && (h.key = j), g += d(b[j], {
                    data: h
                }), f++);
        return f === 0 && (g = e(this)), g
    }), a.registerHelper("if", function (d, e) {
        var f = b.call(d);
        return f === c && (d = d.call(this)), !d || a.Utils.isEmpty(d) ? e.inverse(this) : e.fn(this)
    }), a.registerHelper("unless", function (b, c) {
        var d = c.fn,
            e = c.inverse;
        return c.fn = e, c.inverse = d, a.helpers["if"].call(this, b, c)
    }), a.registerHelper("with", function (a, b) {
        return b.fn(a)
    }), a.registerHelper("log", function (b, c) {
        var d = c.data && c.data.level != null ? parseInt(c.data.level, 10) : 1;
        a.log(d, b)
    })
}(this.Handlebars);
var errorProps = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
Handlebars.Exception = function (a) {
    var b = Error.prototype.constructor.apply(this, arguments);
    for (var c = 0; c < errorProps.length; c++) this[errorProps[c]] = b[errorProps[c]]
}, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function (a) {
    this.string = a
}, Handlebars.SafeString.prototype.toString = function () {
    return this.string.toString()
},
function () {
    var a = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, b = /[&<>"'`]/g,
        c = /[&<>"'`]/,
        d = function (b) {
            return a[b] || "&amp;"
        };
    Handlebars.Utils = {
        escapeExpression: function (a) {
            return a instanceof Handlebars.SafeString ? a.toString() : a == null || a === !1 ? "" : c.test(a) ? a.replace(b, d) : a
        },
        isEmpty: function (a) {
            return !a && a !== 0 ? !0 : Object.prototype.toString.call(a) === "[object Array]" && a.length === 0 ? !0 : !1
        }
    }
}(), Handlebars.VM = {
    template: function (a) {
        var b = {
            escapeExpression: Handlebars.Utils.escapeExpression,
            invokePartial: Handlebars.VM.invokePartial,
            programs: [],
            program: function (a, b, c) {
                var d = this.programs[a];
                return c ? Handlebars.VM.program(b, c) : d ? d : (d = this.programs[a] = Handlebars.VM.program(b), d)
            },
            programWithDepth: Handlebars.VM.programWithDepth,
            noop: Handlebars.VM.noop,
            compilerInfo: null
        };
        return function (c, d) {
            d = d || {};
            var e = a.call(b, Handlebars, c, d.helpers, d.partials, d.data),
                f = b.compilerInfo || [],
                g = f[0] || 1,
                h = Handlebars.COMPILER_REVISION;
            if (g !== h) {
                if (g < h) {
                    var i = Handlebars.REVISION_CHANGES[h],
                        j = Handlebars.REVISION_CHANGES[g];
                    throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + j + ")."
                }
                throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + f[1] + ")."
            }
            return e
        }
    },
    programWithDepth: function (a, b, c) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function (c, e) {
            return e = e || {}, a.apply(this, [c, e.data || b].concat(d))
        }
    },
    program: function (a, b) {
        return function (c, d) {
            return d = d || {}, a(c, d.data || b)
        }
    },
    noop: function () {
        return ""
    },
    invokePartial: function (a, b, c, d, e, f) {
        var g = {
            helpers: d,
            partials: e,
            data: f
        };
        if (a === undefined) throw new Handlebars.Exception("The partial " + b + " could not be found");
        if (a instanceof Function) return a(c, g);
        if (!Handlebars.compile) throw new Handlebars.Exception("The partial " + b + " could not be compiled when running in runtime-only mode");
        return e[b] = Handlebars.compile(a, {
            data: f !== undefined
        }), e[b](c, g)
    }
}, Handlebars.template = Handlebars.VM.template,
function () {
    var a, b, c, d, e, f, g, h, i = Array.prototype.indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    a = typeof jQuery != "undefined" && jQuery !== null ? jQuery : require("jqueryify");
    if (!a) throw "jQuery required";
    (h = a.support).transition || (h.transition = function () {
        var b;
        return a.browser.mozilla ? !1 : (b = (new Image).style, "transition" in b || "webkitTransition" in b)
    }()), f = a.browser.mozilla ? "moz" : void 0, f || (f = "webkit"), d = "-" + f + "-", g = c = {
        transition: "" + d + "transition",
        transform: "" + d + "transform",
        transitionEnd: "" + f + "TransitionEnd"
    }, b = {
        duration: 400,
        queue: !0,
        easing: "",
        enabled: a.support.transition
    }, e = ["scale", "scaleX", "scaleY", "scale3d", "rotate", "rotateX", "rotateY", "rotateZ", "rotate3d", "translate", "translateX", "translateY", "translateZ", "translate3d", "skew", "skewX", "skewY", "matrix", "matrix3d", "perspective"], a.fn.queueNext = function (a, b) {
        return b || (b = "fx"), this.queue(function () {
            var c;
            return a.apply(this, arguments), c = this.offsetHeight, jQuery.dequeue(this, b)
        })
    }, a.fn.emulateTransitionEnd = function (b) {
        var d, e, f = this;
        return e = !1, a(this).one(c.transitionEnd, function () {
            return e = !0
        }), d = function () {
            if (!e) return a(f).trigger(c.transitionEnd)
        }, setTimeout(d, b)
    }, a.fn.transform = function (f, g) {
        var h, j, k, l;
        j = a.extend({}, b, g);
        if (!j.enabled) return this;
        k = [];
        for (h in f) {
            l = f[h];
            if (!(i.call(e, h) >= 0)) continue;
            k.push("" + h + "(" + l + ")"), delete f[h]
        }
        return k.length && (f[c.transform] = k.join(" ")), j.origin && (f["" + d + "transform-origin"] = j.origin), a(this).css(f)
    }, a.fn.gfx = function (d, e) {
        var f, g;
        return g = a.extend({}, b, e), g.enabled ? (d[c.transition] = "all " + g.duration + "ms " + g.easing, f = function () {
            var b;
            return a(this).css(c.transition, ""), (b = g.complete) != null && b.apply(this, arguments), a(this).dequeue()
        }, this[g.queue === !1 ? "each" : "queue"](function () {
            return a(this).one(c.transitionEnd, f), a(this).transform(d), a(this).emulateTransitionEnd(g.duration + 50)
        })) : this
    }, a.fn.gfx.defaults = b
}.call(this),
function () {
    var a, b, c, d, e, f;
    a = jQuery, f = {
        front: {
            rotateY: "0deg",
            rotateX: "0deg"
        },
        back: {
            rotateX: "-180deg",
            rotateX: "0deg"
        },
        right: {
            rotateY: "-90deg",
            rotateX: "0deg"
        },
        left: {
            rotateY: "90deg",
            rotateX: "0deg"
        },
        top: {
            rotateY: "0deg",
            rotateX: "-90deg"
        },
        bottom: {
            rotateY: "0deg",
            rotateX: "90deg"
        }
    }, e = {
        width: 300,
        height: 300
    }, a.fn.gfxCube = function (b) {
        var c, d, g, h, i, j, k, l, m, n;
        return j = a.extend({}, e, b), g = a(this), l = j.translateZ || j.width / 2, typeof l == "number" && (l += "px"), g.transform({
            position: "relative",
            width: j.width,
            height: j.height,
            "-webkit-perspective": "3000",
            "-moz-perspective": "3000",
            "-webkit-perspective-origin": "50% 50%",
            "-moz-perspective-origin": "50% 50%"
        }), n = a("<div />"), n.addClass("gfxCubeWrapper"), n.transform({
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            overflow: "visible",
            rotateY: "0deg",
            rotateX: "0deg",
            translateZ: "-" + l,
            "-webkit-transform-style": "preserve-3d",
            "-moz-transform-style": "preserve-3d",
            "-webkit-transform-origin": "50% 50%",
            "-moz-transform-origin": "50% 50%"
        }), g.children().wrapAll(n).css({
            display: "block",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            overflow: "hidden"
        }), h = g.find(".front"), c = g.find(".back"), k = g.find(".right"), i = g.find(".left"), m = g.find(".top"), d = g.find(".bottom"), h.transform({
            rotateY: "0deg",
            translateZ: l
        }), c.transform({
            rotateY: "180deg",
            translateZ: l
        }), k.transform({
            rotateY: "90deg",
            translateZ: l
        }), i.transform({
            rotateY: "-90deg",
            translateZ: l
        }), m.transform({
            rotateX: "90deg",
            translateZ: l
        }), d.transform({
            rotateX: "-90deg",
            translateZ: l
        }), a(this).bind("cube", function (b, c) {
            return n = g.find(".gfxCubeWrapper"), n.gfx(a.extend({}, {
                translateZ: "-" + l
            }, f[c]))
        })
    }, d = /(Chrome)[\/]([\w.]+)/, c = d.exec(navigator.userAgent) || [], b = d[1] && d[2].test(/^12\./);
    if (!a.browser.webkit || b) a.fn.gfxCube = function (b) {
        var c, d, f;
        return d = a.extend({}, e, b), c = a(this), c.css({
            position: "relative",
            width: d.width,
            height: d.height
        }), f = a("<div />"), f.addClass("gfxCubeWrapper"), f.transform({
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            overflow: "visible"
        }), c.children().wrapAll(f).css({
            display: "block",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            overflow: "hidden"
        }), f = c.find(".gfxCubeWrapper"), f.children("*:not(.front)").hide(), c.bind("cube", function (a, b) {
            return f.children().hide(), f.children("." + b).show()
        })
    }
}.call(this),
function () {
    $.fn.gfxPopIn = function (a) {
        return a == null && (a = {}), a.scale == null && (a.scale = ".2"), $(this).queueNext(function () {
            return $(this).transform({
                "-webkit-transform-origin": "50% 50%",
                "-moz-transform-origin": "50% 50%",
                scale: a.scale
            }).show()
        }), $(this).gfx({
            scale: "1",
            opacity: "1"
        }, a)
    }, $.fn.gfxPopOut = function (a) {
        return $(this).queueNext(function () {
            return $(this).transform({
                "-webkit-transform-origin": "50% 50%",
                "-moz-transform-origin": "50% 50%",
                scale: "1",
                opacity: "1"
            })
        }), $(this).gfx({
            scale: ".2",
            opacity: "0"
        }, a), $(this).queueNext(function () {
            return $(this).hide().transform({
                opacity: "1",
                scale: "1"
            })
        })
    }, $.fn.gfxFadeIn = function (a) {
        return a == null && (a = {}), a.duration == null && (a.duration = 1e3), $(this).queueNext(function () {
            return $(this).css({
                opacity: "0"
            }).show()
        }), $(this).gfx({
            opacity: 1
        }, a)
    }, $.fn.gfxFadeOut = function (a) {
        return a == null && (a = {}), $(this).queueNext(function () {
            return $(this).css({
                opacity: 1
            })
        }), $(this).gfx({
            opacity: 0
        }, a), $(this).queueNext(function () {
            return $(this).hide().css({
                opacity: 1
            })
        })
    }, $.fn.gfxShake = function (a) {
        var b;
        return a == null && (a = {}), a.duration == null && (a.duration = 100), a.easing == null && (a.easing = "ease-out"), b = a.distance || 20, $(this).gfx({
            translateX: "-" + b + "px"
        }, a), $(this).gfx({
            translateX: "" + b + "px"
        }, a), $(this).gfx({
            translateX: "-" + b + "px"
        }, a), $(this).gfx({
            translateX: "" + b + "px"
        }, a), $(this).queueNext(function () {
            return $(this).transform({
                translateX: 0
            })
        })
    }, $.fn.gfxBlip = function (a) {
        return a == null && (a = {}), a.scale || (a.scale = "1.15"), $(this).gfx({
            scale: a.scale
        }, a), $(this).gfx({
            scale: "1"
        }, a)
    }, $.fn.gfxExplodeIn = function (a) {
        return a == null && (a = {}), a.scale || (a.scale = "3"), $(this).queueNext(function () {
            return $(this).transform({
                scale: a.scale,
                opacity: "0"
            }).show()
        }), $(this).gfx({
            scale: "1",
            opacity: "1"
        }, a)
    }, $.fn.gfxExplodeOut = function (a) {
        return a == null && (a = {}), a.scale || (a.scale = "3"), $(this).queueNext(function () {
            return $(this).transform({
                scale: "1",
                opacity: "1"
            })
        }), $(this).gfx({
            scale: a.scale,
            opacity: "0"
        }, a), a.reset !== !1 && $(this).queueNext(function () {
            return $(this).hide().transform({
                scale: "1",
                opacity: "1"
            })
        }), this
    }, $.fn.gfxFlipIn = function (a) {
        return a == null && (a = {}), $(this).queueNext(function () {
            return $(this).transform({
                rotateY: "180deg",
                scale: ".8",
                display: "block"
            })
        }), $(this).gfx({
            rotateY: 0,
            scale: 1
        }, a)
    }, $.fn.gfxFlipOut = function (a) {
        return a == null && (a = {}), $(this).queueNext(function () {
            return $(this).transform({
                rotateY: 0,
                scale: 1
            })
        }), $(this).gfx({
            rotateY: "-180deg",
            scale: ".8"
        }, a), a.reset !== !1 && $(this).queueNext(function () {
            return $(this).transform({
                scale: 1,
                rotateY: 0,
                display: "none"
            })
        }), this
    }, $.fn.gfxRotateOut = function (a) {
        return a == null && (a = {}), $(this).queueNext(function () {
            return $(this).transform({
                rotateY: 0
            }).fix()
        }), $(this).gfx({
            rotateY: "-180deg"
        }, a), a.reset !== !1 && $(this).queueNext(function () {
            return $(this).transform({
                rotateY: 0,
                display: "none"
            }).unfix()
        }), this
    }, $.fn.gfxRotateIn = function (a) {
        var b;
        return a == null && (a = {}), b(this).queueNext(function () {
            return b(this).transform({
                rotateY: "180deg",
                display: "block"
            }).fix()
        }), b(this).gfx({
            rotateY: 0
        }, a), b(this).queueNext(function () {
            return b(this).unfix()
        }), b = jQuery
    }, $.fn.gfxSlideOut = function (a) {
        var b, c, d, e, f;
        a == null && (a = {}), a.direction || (a.direction = "right"), c = 0, d = 0;
        if ((e = a.direction) === "up" || e === "down") d = a.distance || 100, a.direction === "down" && (d *= -1), d += "%";
        if ((f = a.direction) === "left" || f === "right") c = a.distance || 100, a.direction === "left" && (c *= -1), c += "%";
        return b = a.fade ? 0 : 1, $(this).queueNext(function () {
            return $(this).show()
        }), $(this).gfx({
            translate3d: "" + c + "," + d + ",0",
            opacity: b
        }, a), $(this).queueNext(function () {
            return $(this).transform({
                translate3d: "0,0,0",
                opacity: 1
            }).hide()
        })
    }, $.fn.gfxSlideIn = function (a) {
        var b, c, d, e, f;
        a == null && (a = {}), a.direction || (a.direction = "right"), c = 0, d = 0;
        if ((e = a.direction) === "up" || e === "down") d = a.distance || 100, a.direction === "down" && (d *= -1), d += "%";
        if ((f = a.direction) === "left" || f === "right") c = a.distance || 100, a.direction === "left" && (c *= -1), c += "%";
        return b = a.fade ? 0 : 1, $(this).queueNext(function () {
            return $(this).transform({
                translate3d: "" + c + "," + d + ",0",
                opacity: b
            }).show()
        }), $(this).gfx({
            translate3d: "0,0,0",
            opacity: 1
        }, a)
    }, $.fn.gfxRaisedIn = function (a) {
        return a == null && (a = {}), $(this).queueNext(function () {
            return $(this).transform({
                scale: "1",
                opacity: "0",
                translate3d: "0,-15px,0"
            }).show()
        }), $(this).gfx({
            scale: "1",
            opacity: "1",
            translate3d: "0,0,0"
        }, a)
    }, $.fn.gfxRaisedOut = function (a) {
        return a == null && (a = {}), $(this).queueNext(function () {
            return $(this).transform({
                scale: "1",
                opacity: "1",
                translate3d: "0,0,0"
            })
        }), $(this).gfx({
            scale: "1",
            opacity: "0",
            translate3d: "0,-8px,0"
        }, a), $(this).queueNext(function () {
            return $(this).hide().transform({
                scale: "1",
                opacity: "1",
                translate3d: "0,0,0"
            })
        })
    }, $.fn.fix = function () {
        return $(this).each(function () {
            var a, b, c;
            return a = $(this), c = a.offset(), b = a.parent().offset(), c.left -= b.left, c.top -= b.top, c.position = "absolute", a.css(c)
        })
    }, $.fn.unfix = function () {
        return $(this).each(function () {
            var a;
            return a = $(this), a.css({
                position: "",
                top: "",
                left: ""
            })
        })
    }
}.call(this),
function () {
    var a, b;
    a = jQuery, b = {
        width: 120,
        height: 120
    }, a.fn.gfxFlip = function (c) {
        var d, e, f;
        return c == null && (c = {}), f = a.extend({}, b, c), e = a(this).find(".front"), d = a(this).find(".back"), a(this).css({
            position: "relative",
            "-webkit-perspective": "600",
            "-moz-perspective": "600",
            "-webkit-transform-style": "preserve-3d",
            "-moz-transform-style": "preserve-3d",
            "-webkit-transform-origin": "50% 50%",
            "-moz-transform-origin": "50% 50%",
            width: f.width,
            height: f.height
        }), e.add(d).css({
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "block",
            "-webkit-backface-visibility": "hidden",
            "-moz-backface-visibility": "hidden"
        }), d.transform({
            rotateY: "-180deg"
        }), a(this).bind("flip", function () {
            var b;
            return a(this).toggleClass("flipped"), b = a(this).hasClass("flipped"), e.gfx({
                rotateY: b ? "180deg" : "0deg"
            }), d.gfx({
                rotateY: b ? "0deg" : "-180deg"
            })
        })
    }
}.call(this),
function () {
    var a, b, c, d, e;
    a = jQuery, c = function () {
        return !!a("#gfxOverlay").length
    }, b = function () {
        var b;
        return b = a("#gfxOverlay"), b.find("#gfxOverlayPanel").gfx({
            scale: "1.1",
            opacity: 0
        }), b.gfx({
            background: "rgba(0,0,0,0)"
        }), b.queueNext(function () {
            return b.remove()
        })
    }, e = {
        opacity: 0,
        scale: .5
    }, d = {
        display: "block",
        position: "fixed",
        zIndex: 99,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0)"
    }, a.gfxOverlay = function (f, g) {
        var h, i;
        return g == null && (g = {}), c() && b(), f = a(f), f[0].tagName === "SCRIPT" ? f = f.html() : f = f.clone(), g.css || (g.css = {}), g.width && (g.css.width = g.width), g.height && (g.css.height = g.height), h = a("<div />").attr({
            id: "gfxOverlay"
        }), h.css(d), h.click(b), h.delegate(".close", "click", b), h.bind("close", b), i = a("<div />").attr({
            id: "gfxOverlayPanel"
        }), i.transform(a.extend({}, e, g.css)), i.append(f), h.append(i), a("body").append(h), h.delay().gfx({
            background: "rgba(0,0,0,0.5)"
        }, {
            duration: g.duration
        }), i.delay().gfx({
            scale: 1,
            opacity: 1
        }, {
            duration: g.duration
        })
    }
}.call(this),
function () {
    var a, b, c, d = Object.prototype.hasOwnProperty,
        e = function (a, b) {
            function e() {
                this.constructor = a
            }
            for (var c in b) d.call(b, c) && (a[c] = b[c]);
            return e.prototype = b.prototype, a.prototype = new e, a.__super__ = b.prototype, a
        }, f = Array.prototype.slice;
    window.Spine == null && (window.Spine = require("spine")), a = Spine.$, c = new Spine.Manager, b = function (b) {
        function d() {
            d.__super__.constructor.apply(this, arguments), this.el.addClass("stage"), this.header = a("<header />"), this.content = a("<article />"), this.footer = a("<footer />"), this.viewport && this.content.addClass("viewport"), this.content.bind("scroll", function (b) {
                return a(b.target).trigger("touchcancel")
            }), this.el.append(this.header, this.content, this.footer), this.global && c.add(this)
        }
        return e(d, b), d.globalManager = function () {
            return c
        }, d.globalStage = function () {
            return this.globalManager().controllers[0]
        }, d.prototype.effectDefaults = {
            duration: 450,
            easing: "cubic-bezier(.25, .1, .25, 1)"
        }, d.prototype.effectOptions = function (b) {
            return b == null && (b = {}), a.extend({}, this.effectDefaults, b)
        }, d.prototype.viewport = !0, d.prototype.append = function () {
            var a, b, c;
            return b = 1 <= arguments.length ? f.call(arguments, 0) : [], b = function () {
                var c, d, e;
                e = [];
                for (c = 0, d = b.length; c < d; c++) a = b[c], e.push(a.el || a);
                return e
            }(), (c = this.content).append.apply(c, b)
        }, d.prototype.html = function () {
            return this.content.html.apply(this.content, arguments), this.refreshElements(), this.content
        }, d.prototype.add = function () {
            var a, b;
            return a = 1 <= arguments.length ? f.call(arguments, 0) : [], this.manager || (this.manager = new Spine.Manager), (b = this.manager).add.apply(b, a), this.append.apply(this, a)
        }, d.prototype.activate = function (a) {
            var b;
            return a == null && (a = {}), b = a.transition || a.trans, b ? this.effects[b].apply(this) : this.el.addClass("active")
        }, d.prototype.deactivate = function (a) {
            var b;
            a == null && (a = {});
            if (!this.isActive()) return;
            return b = a.transition || a.trans, b ? this.reverseEffects[b].apply(this) : this.el.removeClass("active")
        }, d.prototype.isActive = function () {
            return this.el.hasClass("active")
        }, d.prototype.effects = {
            left: function () {
                return this.el.addClass("active"), this.el.gfxSlideIn(this.effectOptions({
                    direction: "left"
                }))
            },
            right: function () {
                return this.el.addClass("active"), this.el.gfxSlideIn(this.effectOptions({
                    direction: "right"
                }))
            }
        }, d.prototype.reverseEffects = {
            left: function () {
                var a = this;
                return this.el.gfxSlideOut(this.effectOptions({
                    direction: "right"
                })), this.el.queueNext(function () {
                    return a.el.removeClass("active")
                })
            },
            right: function () {
                var a = this;
                return this.el.gfxSlideOut(this.effectOptions({
                    direction: "left"
                })), this.el.queueNext(function () {
                    return a.el.removeClass("active")
                })
            }
        }, d
    }(Spine.Controller), b.Global = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return e(b, a), b.prototype.global = !0, b
    }(b), (typeof module != "undefined" && module !== null ? module.exports = b : void 0) || (this.Stage = b)
}.call(this),
function () {
    var a, b, c = Object.prototype.hasOwnProperty,
        d = function (a, b) {
            function e() {
                this.constructor = a
            }
            for (var d in b) c.call(b, d) && (a[d] = b[d]);
            return e.prototype = b.prototype, a.prototype = new e, a.__super__ = b.prototype, a
        };
    a = Spine.$, a.fn.gfx || require("gfx"), window.Stage == null && (window.Stage = require("./stage")), b = function (b) {
        function c() {
            var b;
            c.__super__.constructor.apply(this, arguments), this.el.removeClass("stage").addClass("panel"), this.header.append(a("<h2 />")), this.title && this.setTitle(this.title), this.stage == null && (this.stage = Stage.globalStage()), (b = this.stage) != null && b.add(this)
        }
        return d(c, b), c.prototype.title = !1, c.prototype.viewport = !1, c.prototype.setTitle = function (a) {
            return a == null && (a = ""), this.header.find("h2:first").html(a)
        }, c.prototype.addButton = function (b, c, d) {
            var e;
            return d == null && (d = this.header), typeof c == "string" && (c = this[c]), e = a("<button />").text(b), e.tap(this.proxy(c)), d.append(e), e
        }, c.prototype.transitionFooter = function () {
            return !1
        }, c.prototype.activate = function (a) {
            var b;
            return a == null && (a = {}), b = a.transition || a.trans, b ? this.effects[b].apply(this) : (this.content.add(this.header).show(), this.el.addClass("active"))
        }, c.prototype.deactivate = function (a) {
            var b;
            a == null && (a = {});
            if (!this.isActive()) return;
            return b = a.transition || a.trans, b ? this.reverseEffects[b].apply(this) : this.el.removeClass("active")
        }, c.prototype.effects = {
            left: function () {
                this.el.addClass("active"), this.content.gfxSlideIn(this.effectOptions({
                    direction: "left"
                })), this.header.gfxSlideIn(this.effectOptions({
                    direction: "left",
                    fade: !0,
                    distance: 50
                }));
                if (this.transitionFooter()) return this.footer.gfxSlideIn(this.effectOptions({
                    direction: "left"
                }))
            },
            right: function () {
                this.el.addClass("active"), this.content.gfxSlideIn(this.effectOptions({
                    direction: "right"
                })), this.header.gfxSlideIn(this.effectOptions({
                    direction: "right",
                    fade: !0,
                    distance: 50
                }));
                if (this.transitionFooter()) return this.footer.gfxSlideIn(this.effectOptions({
                    direction: "right"
                }))
            },
            up: function () {
                return this.el.addClass("active"), this.el.gfxSlideIn(this.effectOptions({
                    direction: "up"
                })), this.el.queueNext(function () {
                    return ClarityPanel.deactivating.el.removeClass("active")
                })
            },
            down: function () {
                return this.el.addClass("active")
            }
        }, c.prototype.reverseEffects = {
            left: function () {
                var a = this;
                return this.content.gfxSlideOut(this.effectOptions({
                    direction: "right"
                })), this.header.gfxSlideOut(this.effectOptions({
                    direction: "right",
                    fade: !0,
                    distance: 50
                })), this.transitionFooter() && this.footer.gfxSlideOut(this.effectOptions({
                    direction: "right"
                })), this.content.queueNext(function () {
                    return a.el.removeClass("active")
                })
            },
            right: function () {
                var a = this;
                return this.content.gfxSlideOut(this.effectOptions({
                    direction: "left"
                })), this.header.gfxSlideOut(this.effectOptions({
                    direction: "left",
                    fade: !0,
                    distance: 50
                })), this.transitionFooter() && this.footer.gfxSlideOut(this.effectOptions({
                    direction: "left"
                })), this.content.queueNext(function () {
                    return a.el.removeClass("active")
                })
            },
            up: function () {},
            down: function () {
                var a = this;
                return this.el.gfxSlideOut(this.effectOptions({
                    direction: "up"
                })), this.el.queueNext(function () {
                    return a.el.removeClass("active")
                })
            }
        }, c
    }(Stage), (typeof module != "undefined" && module !== null ? module.exports = b : void 0) || (this.Panel = b)
}.call(this),
function () {
    var a, b;
    window.$ == null && (window.$ = require("spine").$), $.support.touch = !navigator.userAgent.match(/windows.*chrome/i) && !navigator.userAgent.match(/CrOS.*chrome/i) && "ontouchstart" in window, b = {}, a = function (a) {
        return "tagName" in a ? a : a.parentNode
    }, window.previousEvent = null, window.shouldPreventTap = function (a) {
        return typeof previousEvent == "undefined" || previousEvent === null ? !1 : a.timeStamp - previousEvent.timeStamp > 500 ? !1 : !0
    }, window.triggerTap = function (a, b) {
        var c;
        if (typeof ClarityPanel != "undefined" && ClarityPanel !== null ? (c = ClarityPanel.activating) != null ? c._transitioning : void 0 : void 0) return;
        if (!window.shouldPreventTap(b)) return window.previousEvent = b, a.trigger("tap", [b])
    }, $(function () {
        return $("body").on("touchstart", function (c) {
            var d, e;
            return c = c.originalEvent, e = Date.now(), d = e - (b.last || e), b.target = a(c.touches[0].target), b.x1 = c.touches[0].pageX, b.y1 = c.touches[0].pageY, b.last = e
        }).on("touchmove", function (a) {
            return a = a.originalEvent, b.x2 = a.touches[0].pageX, b.y2 = a.touches[0].pageY
        }).on("touchend", function (a) {
            return setTimeout(function () {
                return a = a.originalEvent, (b.x2 > 0 || b.y2 > 0) && (Math.abs(b.x1 - b.x2) > 30 || Math.abs(b.y1 - b.y2) > 30) ? $(b.target).trigger("swipe") : "last" in b && triggerTap($(b.target), a), b = {}
            }, 10)
        }).on("touchstart", ".active > article", function (a) {
            var c, d;
            c = a.currentTarget, d = c.scrollTop, d <= 0 && (c.scrollTop = 1, b.skipCancel = !0);
            if (d + c.offsetHeight >= c.scrollHeight) return c.scrollTop = c.scrollHeight - c.offsetHeight - 1, b.skipCancel = !0
        }).on("touchmove", ".active > article", function (a) {
            var b;
            b = a.currentTarget;
            if ($(b).hasClass("allow-scroll") ? void 0 : b.offsetHeight === b.scrollHeight) return a.preventDefault()
        }).on("touchcancel", function (a) {
            return b.skipCancel ? b.skipCancel = !1 : b = {}
        }).on("touchstart", "header,footer", function (b) {
            return b.stopImmediatePropagation(), b = b.originalEvent, triggerTap($(a(b.touches[0].target)), b)
        }).on("click", function (a) {
            $.support.touch || triggerTap($(a.target), a);
            if (!$(a.target).closest(".allow-default").length) return a.preventDefault()
        }).on("focus", "input, textarea", function (a) {
            if (window.shouldPreventTap(a) && $.support.touch) return console.log("preventFocus"), $(a.target).blur()
        })
    }), $.fn.tap = function (a) {
        return this.bind("tap", a)
    }
}.call(this),
function () {
    var a, b = Array.prototype.slice;
    a = function () {
        function a(b, c) {
            var d, e, f;
            this.elem = $(b), e = $.extend({}, a.defaults, c);
            for (d in e) f = e[d], this[d] = f;
            this.elem.data(this.dataName, this), this.wrapCheckboxWithDivs(), this.attachEvents(), this.disableTextSelection(), this.resizeHandle && this.optionallyResize("handle"), this.resizeContainer && this.optionallyResize("container"), this.initialPosition()
        }
        return a.prototype.isDisabled = function () {
            return this.elem.is(":disabled")
        }, a.prototype.wrapCheckboxWithDivs = function () {
            return this.elem.wrap("<div class='" + this.containerClass + "' />"), this.container = this.elem.parent(), this.offLabel = $("<label class='" + this.labelOffClass + "'>\n  <span>" + this.uncheckedLabel + "</span>\n</label>").appendTo(this.container), this.offSpan = this.offLabel.children("span"), this.onLabel = $("<label class='" + this.labelOnClass + "'>\n  <span>" + this.checkedLabel + "</span>\n</label>").appendTo(this.container), this.onSpan = this.onLabel.children("span"), this.handle = $("<div class='" + this.handleClass + "'>\n  <div class='" + this.handleRightClass + "'>\n    <div class='" + this.handleCenterClass + "' />\n  </div>\n</div>").appendTo(this.container)
        }, a.prototype.disableTextSelection = function () {
            if ($.browser.msie) return $([this.handle, this.offLabel, this.onLabel, this.container]).attr("unselectable", "on")
        }, a.prototype._getDimension = function (a, b) {
            return $.fn.actual != null ? a.actual(b) : a[b]()
        }, a.prototype.optionallyResize = function (a) {
            var b, c, d;
            return d = this._getDimension(this.onLabel, "width"), c = this._getDimension(this.offLabel, "width"), a === "container" ? (b = d > c ? d : c, b += this._getDimension(this.handle, "width") + this.handleMargin, this.container.css({
                width: b
            })) : (b = d > c ? d : c, this.handle.css({
                width: b
            }))
        }, a.prototype.onMouseDown = function (b) {
            var c;
            b.preventDefault();
            if (this.isDisabled()) return;
            return c = b.pageX || b.originalEvent.changedTouches[0].pageX, a.currentlyClicking = this.handle, a.dragStartPosition = c, a.handleLeftOffset = parseInt(this.handle.css("left"), 10) || 0
        }, a.prototype.onDragMove = function (b, c) {
            var d, e;
            if (a.currentlyClicking !== this.handle) return;
            return e = (c + a.handleLeftOffset - a.dragStartPosition) / this.rightSide, e < 0 && (e = 0), e > 1 && (e = 1), d = e * this.rightSide, this.handle.css({
                left: d
            }), this.onLabel.css({
                width: d + this.handleRadius
            }), this.offSpan.css({
                marginRight: -d
            }), this.onSpan.css({
                marginLeft: -(1 - e) * this.rightSide
            })
        }, a.prototype.onDragEnd = function (b, c) {
            var d;
            if (a.currentlyClicking !== this.handle) return;
            if (this.isDisabled()) return;
            return a.dragging ? (d = (c - a.dragStartPosition) / this.rightSide, this.elem.prop("checked", d >= .5)) : this.elem.prop("checked", !this.elem.prop("checked")), a.currentlyClicking = null, a.dragging = null, this.didChange()
        }, a.prototype.refresh = function () {
            return this.didChange()
        }, a.prototype.didChange = function () {
            var a;
            return typeof this.onChange == "function" && this.onChange(this.elem, this.elem.prop("checked")), this.isDisabled() ? (this.container.addClass(this.disabledClass), !1) : (this.container.removeClass(this.disabledClass), a = this.elem.prop("checked") ? this.rightSide : 0, this.handle.animate({
                left: a
            }, this.duration), this.onLabel.animate({
                width: a + this.handleRadius
            }, this.duration), this.offSpan.animate({
                marginRight: -a
            }, this.duration), this.onSpan.animate({
                marginLeft: a - this.rightSide
            }, this.duration))
        }, a.prototype.attachEvents = function () {
            var a, b, c;
            return c = this, a = function (a) {
                return c.onGlobalMove.apply(c, arguments)
            }, b = function (d) {
                return c.onGlobalUp.apply(c, arguments), $(document).unbind("mousemove touchmove", a), $(document).unbind("mouseup touchend", b)
            }, this.elem.change(function () {
                return c.refresh()
            }), this.container.bind("mousedown touchstart", function (d) {
                return c.onMouseDown.apply(c, arguments), $(document).bind("mousemove touchmove", a), $(document).bind("mouseup touchend", b)
            })
        }, a.prototype.initialPosition = function () {
            var a, b;
            a = this._getDimension(this.container, "width"), this.offLabel.css({
                width: a - this.containerRadius
            }), b = this.containerRadius + 1, $.browser.msie && $.browser.version < 7 && (b -= 3), this.rightSide = a - this._getDimension(this.handle, "width") - b, this.elem.is(":checked") ? (this.handle.css({
                left: this.rightSide
            }), this.onLabel.css({
                width: this.rightSide + this.handleRadius
            }), this.offSpan.css({
                marginRight: -this.rightSide
            })) : (this.onLabel.css({
                width: 0
            }), this.onSpan.css({
                marginLeft: -this.rightSide
            }));
            if (this.isDisabled()) return this.container.addClass(this.disabledClass)
        }, a.prototype.onGlobalMove = function (b) {
            var c;
            if ( !! this.isDisabled() || !a.currentlyClicking) return;
            return b.preventDefault(), c = b.pageX || b.originalEvent.changedTouches[0].pageX, !a.dragging && Math.abs(a.dragStartPosition - c) > this.dragThreshold && (a.dragging = !0), this.onDragMove(b, c)
        }, a.prototype.onGlobalUp = function (b) {
            var c;
            if (!a.currentlyClicking) return;
            return b.preventDefault(), c = b.pageX || b.originalEvent.changedTouches[0].pageX, this.onDragEnd(b, c), !1
        }, a.defaults = {
            duration: 200,
            checkedLabel: "ON",
            uncheckedLabel: "OFF",
            resizeHandle: !0,
            resizeContainer: !0,
            disabledClass: "iPhoneCheckDisabled",
            containerClass: "iPhoneCheckContainer",
            labelOnClass: "iPhoneCheckLabelOn",
            labelOffClass: "iPhoneCheckLabelOff",
            handleClass: "iPhoneCheckHandle",
            handleCenterClass: "iPhoneCheckHandleCenter",
            handleRightClass: "iPhoneCheckHandleRight",
            dragThreshold: 5,
            handleMargin: 0,
            handleRadius: 0,
            containerRadius: 0,
            dataName: "iphoneStyle",
            onChange: function () {}
        }, a
    }(), $.iphoneStyle = this.iOSCheckbox = a, $.fn.iphoneStyle = function () {
        var c, d, e, f, g, h, i, j, k, l, m, n;
        c = 1 <= arguments.length ? b.call(arguments, 0) : [], e = (k = (l = c[0]) != null ? l.dataName : void 0) != null ? k : a.defaults.dataName, m = this.filter(":checkbox");
        for (i = 0, j = m.length; i < j; i++) d = m[i], f = $(d).data(e), f != null ? (g = c[0], h = 2 <= c.length ? b.call(c, 1) : [], (n = f[g]) != null && n.apply(f, h)) : new a(d, c[0]);
        return this
    }, $.fn.iOSCheckbox = function (a) {
        var b;
        return a == null && (a = {}), b = $.extend({}, a, {
            resizeHandle: !1,
            disabledClass: "iOSCheckDisabled",
            containerClass: "iOSCheckContainer",
            labelOnClass: "iOSCheckLabelOn",
            labelOffClass: "iOSCheckLabelOff",
            handleClass: "iOSCheckHandle",
            handleCenterClass: "iOSCheckHandleCenter",
            handleRightClass: "iOSCheckHandleRight",
            dataName: "iOSCheckbox"
        }), this.iphoneStyle(b)
    }
}.call(this),
function (a, b, c) {
    function e(a) {
        return a
    }

    function f(a) {
        return decodeURIComponent(a.replace(d, " "))
    }
    var d = /\+/g;
    a.cookie = function (d, g, h) {
        if (g !== c && !/Object/.test(Object.prototype.toString.call(g))) {
            h = a.extend({}, a.cookie.defaults, h), g === null && (h.expires = -1);
            if (typeof h.expires == "number") {
                var i = h.expires,
                    j = h.expires = new Date;
                j.setDate(j.getDate() + i)
            }
            return g = String(g), b.cookie = [encodeURIComponent(d), "=", h.raw ? g : encodeURIComponent(g), h.expires ? "; expires=" + h.expires.toUTCString() : "", h.path ? "; path=" + h.path : "", h.domain ? "; domain=" + h.domain : "", h.secure ? "; secure" : ""].join("")
        }
        h = g || a.cookie.defaults || {};
        var k = h.raw ? e : f,
            l = b.cookie.split("; ");
        for (var m = 0, n; n = l[m] && l[m].split("="); m++)
            if (k(n.shift()) === d) return k(n.join("="));
        return null
    }, a.cookie.defaults = {}, a.removeCookie = function (b, c) {
        return a.cookie(b, c) !== null ? (a.cookie(b, null, c), !0) : !1
    }
}(jQuery, document),
function () {
    function r() {
        return function () {}
    }
    window.JSON && window.JSON.stringify || function () {
        function w(a) {
            return k.lastIndex = 0, k.test(a) ? '"' + a.replace(k, function (a) {
                var b = g[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function t(a, b) {
            var c, d, e, f, g = i,
                h, j = b[a];
            j && "object" == typeof j && "function" == typeof j.toJSON && (j = j.toJSON(a)), "function" == typeof m && (j = m.call(b, a, j));
            switch (typeof j) {
            case "string":
                return w(j);
            case "number":
                return isFinite(j) ? "" + j : "null";
            case "boolean":
            case "null":
                return "" + j;
            case "object":
                if (!j) return "null";
                i += p, h = [];
                if ("[object Array]" === Object.prototype.toString.apply(j)) {
                    f = j.length;
                    for (c = 0; c < f; c += 1) h[c] = t(c, j) || "null";
                    return e = 0 === h.length ? "[]" : i ? "[\n" + i + h.join(",\n" + i) + "\n" + g + "]" : "[" + h.join(",") + "]", i = g, e
                }
                if (m && "object" == typeof m) {
                    f = m.length;
                    for (c = 0; c < f; c += 1) d = m[c], "string" == typeof d && (e = t(d, j)) && h.push(w(d) + (i ? ": " : ":") + e)
                } else
                    for (d in j) Object.hasOwnProperty.call(j, d) && (e = t(d, j)) && h.push(w(d) + (i ? ": " : ":") + e);
                return e = 0 === h.length ? "{}" : i ? "{\n" + i + h.join(",\n" + i) + "\n" + g + "}" : "{" + h.join(",") + "}", i = g, e
            }
        }
        window.JSON || (window.JSON = {}), "function" != typeof String.prototype.toJSON && (String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        });
        var k = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            i, p, g = {
                "\b": "\\b",
                "   ": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, m;
        "function" != typeof JSON.stringify && (JSON.stringify = function (a, b, c) {
            var d;
            p = i = "";
            if ("number" == typeof c)
                for (d = 0; d < c; d += 1) p += " ";
            else "string" == typeof c && (p = c); if (!(m = b) || "function" == typeof b || "object" == typeof b && "number" == typeof b.length) return t("", {
                "": a
            });
            throw Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function (c) {
            return eval("(" + c + ")")
        })
    }(), window.PUBNUB || function () {
        function a(t) {
            var v = {}, x = t.publish_key || "",
                y = t.subscribe_key || "",
                z = t.ssl ? "s" : "",
                A = "http" + z + "://" + (t.origin || "pubsub.pubnub.com"),
                B = {
                    history: function (a, b) {
                        var b = a.callback || b,
                            c = a.limit || 100,
                            d = a.channel,
                            e = p();
                        if (!d) return f("Missing Channel");
                        if (!b) return f("Missing Callback");
                        s({
                            c: e,
                            url: [A, "history", y, q(d), e, c],
                            b: function (a) {
                                b(a)
                            },
                            a: function (a) {
                                f(a)
                            }
                        })
                    },
                    time: function (a) {
                        var b = p();
                        s({
                            c: b,
                            url: [A, "time", b],
                            b: function (b) {
                                a(b[0])
                            },
                            a: function () {
                                a(0)
                            }
                        })
                    },
                    uuid: function (a) {
                        var b = p();
                        s({
                            c: b,
                            url: ["http" + z + "://pubnub-prod.appspot.com/uuid?callback=" + b],
                            b: function (b) {
                                a(b[0])
                            },
                            a: function () {
                                a(0)
                            }
                        })
                    },
                    publish: function (a, b) {
                        var b = b || a.callback || r(),
                            c = a.message,
                            d = a.channel,
                            e = p();
                        if (!c) return f("Missing Message");
                        if (!d) return f("Missing Channel");
                        if (!x) return f("Missing Publish Key");
                        c = JSON.stringify(c), c = [A, "publish", x, y, 0, q(d), e, q(c)];
                        if (1800 < c.join().length) return f("Message Too Big");
                        s({
                            c: e,
                            b: function (a) {
                                b(a)
                            },
                            a: function () {
                                b([0, "Disconnected"])
                            },
                            url: c
                        })
                    },
                    unsubscribe: function (a) {
                        a = a.channel, a in v && (v[a].d = 0, v[a].e && v[a].e(0))
                    },
                    subscribe: function (a, b) {
                        function c() {
                            var a = p();
                            v[d].d && (v[d].e = s({
                                c: a,
                                url: [o, "subscribe", y, q(d), a, g],
                                a: function () {
                                    m || (m = 1, l()), setTimeout(c, C), B.time(function (a) {
                                        a || i()
                                    })
                                },
                                b: function (a) {
                                    v[d].d && (n || (n = 1, j()), m && (m = 0, k()), e = w.set(y + d, g = e && w.get(y + d) || a[1]), h(a[0], function (c) {
                                        b(c, a)
                                    }), setTimeout(c, 10))
                                }
                            }))
                        }
                        var d = a.channel,
                            b = b || a.callback,
                            e = a.restore,
                            g = 0,
                            i = a.error || r(),
                            j = a.connect || r(),
                            k = a.reconnect || r(),
                            l = a.disconnect || r(),
                            m = 0,
                            n = 0,
                            o = E(A);
                        if (!H) return I.push([a, b, B]);
                        if (!d) return f("Missing Channel");
                        if (!b) return f("Missing Callback");
                        if (!y) return f("Missing Subscribe Key");
                        d in v || (v[d] = {});
                        if (v[d].d) return f("Already Connected");
                        v[d].d = 1, c()
                    },
                    xdr: s,
                    ready: u,
                    db: w,
                    each: h,
                    map: i,
                    css: n,
                    $: e,
                    create: o,
                    bind: k,
                    supplant: j,
                    head: l,
                    search: g,
                    attr: m,
                    now: c,
                    unique: b,
                    events: F,
                    updater: d,
                    init: a
                };
            return B
        }

        function b() {
            return "x" + ++x + "" + +(new Date)
        }

        function c() {
            return +(new Date)
        }

        function d(a, b) {
            function d() {
                f + b > c() ? (clearTimeout(e), e = setTimeout(d, b)) : (f = c(), a())
            }
            var e, f = 0;
            return d
        }

        function e(a) {
            return document.getElementById(a)
        }

        function f(a) {
            console.log(a)
        }

        function g(a, b) {
            var c = [];
            return h(a.split(/\s+/), function (a) {
                h((b || document).getElementsByTagName(a), function (a) {
                    c.push(a)
                })
            }), c
        }

        function h(a, b) {
            if (a && b)
                if ("undefined" != typeof a[0])
                    for (var c = 0, d = a.length; c < d;) b.call(a[c], a[c], c++);
                else
                    for (c in a) a.hasOwnProperty && a.hasOwnProperty(c) && b.call(a[c], c, a[c])
        }

        function i(a, b) {
            var c = [];
            return h(a || [], function (a, d) {
                c.push(b(a, d))
            }), c
        }

        function j(a, b) {
            return a.replace(y, function (a, c) {
                return b[c] || a
            })
        }

        function k(a, b, c) {
            h(a.split(","), function (a) {
                function d(a) {
                    a || (a = window.event), c(a) || (a.cancelBubble = !0, a.returnValue = !1, a.preventDefault && a.preventDefault(), a.stopPropagation && a.stopPropagation())
                }
                b.addEventListener ? b.addEventListener(a, d, !1) : b.attachEvent ? b.attachEvent("on" + a, d) : b["on" + a] = d
            })
        }

        function l() {
            return g("head")[0]
        }

        function m(a, b, c) {
            if (!c) return a && a.getAttribute && a.getAttribute(b);
            a.setAttribute(b, c)
        }

        function n(a, b) {
            for (var c in b)
                if (b.hasOwnProperty(c)) try {
                    a.style[c] = b[c] + (0 < "|width|height|top|left|".indexOf(c) && "number" == typeof b[c] ? "px" : "")
                } catch (d) {}
        }

        function o(a) {
            return document.createElement(a)
        }

        function p() {
            return D || v() ? 0 : b()
        }

        function q(a) {
            return i(encodeURIComponent(a).split(""), function (a) {
                return 0 > "-_.!~*'()".indexOf(a) ? a : "%" + a.charCodeAt(0).toString(16).toUpperCase()
            }).join("")
        }

        function s(a) {
            function c(a, b) {
                h || (h = 1, a || k(b), d.onerror = null, clearTimeout(i), setTimeout(function () {
                    a && j();
                    var b = e(g),
                        c = b && b.parentNode;
                    c && c.removeChild(b)
                }, C))
            }
            if (D || v()) return t(a);
            var d = o("script"),
                f = a.c,
                g = b(),
                h = 0,
                i = setTimeout(function () {
                    c(1)
                }, B),
                j = a.a || r(),
                k = a.b || r();
            return window[f] = function (a) {
                c(0, a)
            }, d[z] = z, d.onerror = function () {
                c(1)
            }, d.src = a.url.join(A), m(d, "id", g), l().appendChild(d), c
        }

        function t(a) {
            function b(a) {
                e || (e = 1, clearTimeout(g), d && (d.onerror = d.onload = null, d.abort && d.abort(), d = null), a && h())
            }

            function c() {
                if (!f) {
                    f = 1, clearTimeout(g);
                    try {
                        response = JSON.parse(d.responseText)
                    } catch (a) {
                        return b(1)
                    }
                    i(response)
                }
            }
            var d, e = 0,
                f = 0,
                g = setTimeout(function () {
                    b(1)
                }, B),
                h = a.a || r(),
                i = a.b || r();
            try {
                d = v() || window.XDomainRequest && new XDomainRequest || new XMLHttpRequest, d.onerror = d.onabort = function () {
                    b(1)
                }, d.onload = d.onloadend = c, d.timeout = B, d.open("GET", a.url.join(A), !0), d.send()
            } catch (j) {
                return b(0), D = 0, s(a)
            }
            return b
        }

        function u() {
            PUBNUB.time(c), PUBNUB.time(function () {
                setTimeout(function () {
                    H || (H = 1, h(I, function (a) {
                        a[2].subscribe(a[0], a[1])
                    }))
                }, C)
            })
        }

        function v() {
            if (!J.get) return 0;
            var a = {
                id: v.id++,
                send: r(),
                abort: function () {
                    a.id = {}
                },
                open: function (b, c) {
                    v[a.id] = a, J.get(a.id, c)
                }
            };
            return a
        }
        window.console || (window.console = window.console || {}), console.log || (console.log = (window.opera || {}).postError || r());
        var w = function () {
            var a = window.localStorage;
            return {
                get: function (b) {
                    try {
                        return a ? a.getItem(b) : -1 == document.cookie.indexOf(b) ? null : ((document.cookie || "").match(RegExp(b + "=([^;]+)")) || [])[1] || null
                    } catch (c) {}
                },
                set: function (b, c) {
                    try {
                        if (a) return a.setItem(b, c) && 0;
                        document.cookie = b + "=" + c + "; expires=Thu, 1 Aug 2030 20:00:00 UTC; path=/"
                    } catch (d) {}
                }
            }
        }(),
            x = 1,
            y = /{([\w\-]+)}/g,
            z = "async",
            A = "/",
            B = 14e4,
            C = 1e3,
            D = -1 == navigator.userAgent.indexOf("MSIE 6"),
            E = function () {
                var a = Math.floor(9 * Math.random()) + 1;
                return function (b) {
                    return 0 < b.indexOf("pubsub") && b.replace("pubsub", "ps" + (10 > ++a ? a : a = 1)) || b
                }
            }(),
            F = {
                list: {},
                unbind: function (a) {
                    F.list[a] = []
                },
                bind: function (a, b) {
                    (F.list[a] = F.list[a] || []).push(b)
                },
                fire: function (a, b) {
                    h(F.list[a] || [], function (a) {
                        a(b)
                    })
                }
            }, G = e("pubnub") || {}, H = 0,
            I = [];
        PUBNUB = a({
            publish_key: m(G, "pub-key"),
            subscribe_key: m(G, "sub-key"),
            ssl: "on" == m(G, "ssl"),
            origin: m(G, "origin")
        }), n(G, {
            position: "absolute",
            top: -C
        });
        if ("opera" in window || m(G, "flash")) G.innerHTML = "<object id=pubnubs data=https://dh15atwfs066y.cloudfront.net/pubnub.swf><param name=movie value=https://dh15atwfs066y.cloudfront.net/pubnub.swf><param name=allowscriptaccess value=always></object>";
        var J = e("pubnubs") || {};
        k("load", window, function () {
            setTimeout(u, 0)
        }), PUBNUB.rdx = function (a, b) {
            if (!b) return v[a].onerror();
            v[a].responseText = unescape(b), v[a].onload()
        }, v.id = C, window.jQuery && (window.jQuery.PUBNUB = PUBNUB), "undefined" != typeof module && (module.f = PUBNUB) && u()
    }()
}(),
function (a, b) {
    "use strict", a.ajaxPrefilter(function (a, b, c) {
        if (a.iframe) return "iframe"
    }), a.ajaxTransport("iframe", function (b, c, d) {
        function j() {
            i.replaceWith(function (a) {
                return h.get(a)
            }), e.remove(), f.attr("src", "javascript:false;").remove()
        }
        var e = null,
            f = null,
            g = "iframe-" + a.now(),
            h = a(b.files).filter(":file:enabled"),
            i = null;
        b.dataTypes.shift();
        if (h.length) return e = a("<form enctype='multipart/form-data' method='post'></form>").hide().attr({
            action: b.url,
            target: g
        }), typeof b.data == "string" && b.data.length > 0 && a.error("data must not be serialized"), a.each(b.data || {}, function (b, c) {
            a.isPlainObject(c) && (b = c.name, c = c.value), a("<input type='hidden' />").attr({
                name: b,
                value: c
            }).appendTo(e)
        }), a("<input type='hidden' value='IFrame' name='X-Requested-With' />").appendTo(e), i = h.after(function (b) {
            return a(this).clone().prop("disabled", !0)
        }).next(), h.appendTo(e), {
            send: function (b, c) {
                f = a("<iframe src='javascript:false;' name='" + g + "' id='" + g + "' style='display:none'></iframe>"), f.bind("load", function () {
                    f.unbind("load").bind("load", function () {
                        var a = this.contentWindow ? this.contentWindow.document : this.contentDocument ? this.contentDocument : this.document,
                            b = a.documentElement ? a.documentElement : a.body,
                            d = b.getElementsByTagName("textarea")[0],
                            e = d ? d.getAttribute("data-type") : null,
                            f = d ? d.getAttribute("data-status") : 200,
                            g = d ? d.getAttribute("data-statusText") : "OK",
                            h = {
                                html: b.innerHTML,
                                text: e ? d.value : b ? b.textContent || b.innerText : null
                            };
                        j(), c(f, g, h, e ? "Content-Type: " + e : null)
                    }), e[0].submit()
                }), a("body").append(e, f)
            },
            abort: function () {
                f !== null && (f.unbind("load").attr("src", "javascript:false;"), j())
            }
        }
    })
}(jQuery),
function (a, b) {
    function A(a, b) {
        this._d = a, this._isUTC = !! b
    }

    function B(a) {
        return a < 0 ? Math.ceil(a) : Math.floor(a)
    }

    function C(a) {
        var b = this._data = {}, c = a.years || a.y || 0,
            d = a.months || a.M || 0,
            e = a.weeks || a.w || 0,
            f = a.days || a.d || 0,
            g = a.hours || a.h || 0,
            h = a.minutes || a.m || 0,
            i = a.seconds || a.s || 0,
            j = a.milliseconds || a.ms || 0;
        this._milliseconds = j + i * 1e3 + h * 6e4 + g * 36e5, this._days = f + e * 7, this._months = d + c * 12, b.milliseconds = j % 1e3, i += B(j / 1e3), b.seconds = i % 60, h += B(i / 60), b.minutes = h % 60, g += B(h / 60), b.hours = g % 24, f += B(g / 24), f += e * 7, b.days = f % 30, d += B(f / 30), b.months = d % 12, c += B(d / 12), b.years = c
    }

    function D(a, b) {
        var c = a + "";
        while (c.length < b) c = "0" + c;
        return c
    }

    function E(a, b, c) {
        var d = b._milliseconds,
            e = b._days,
            f = b._months,
            g;
        d && a._d.setTime(+a + d * c), e && a.date(a.date() + e * c), f && (g = a.date(), a.date(1).month(a.month() + f * c).date(Math.min(g, a.daysInMonth())))
    }

    function F(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function G(b) {
        return new a(b[0], b[1] || 0, b[2] || 1, b[3] || 0, b[4] || 0, b[5] || 0, b[6] || 0)
    }

    function H(b, d) {
        function q(d) {
            var l, r;
            switch (d) {
            case "M":
                return e + 1;
            case "Mo":
                return e + 1 + o(e + 1);
            case "MM":
                return D(e + 1, 2);
            case "MMM":
                return c.monthsShort[e];
            case "MMMM":
                return c.months[e];
            case "D":
                return f;
            case "Do":
                return f + o(f);
            case "DD":
                return D(f, 2);
            case "DDD":
                return l = new a(g, e, f), r = new a(g, 0, 1), ~~ ((l - r) / 864e5 + 1.5);
            case "DDDo":
                return l = q("DDD"), l + o(l);
            case "DDDD":
                return D(q("DDD"), 3);
            case "d":
                return h;
            case "do":
                return h + o(h);
            case "ddd":
                return c.weekdaysShort[h];
            case "dddd":
                return c.weekdays[h];
            case "w":
                return l = new a(g, e, f - h + 5), r = new a(l.getFullYear(), 0, 4), ~~ ((l - r) / 864e5 / 7 + 1.5);
            case "wo":
                return l = q("w"), l + o(l);
            case "ww":
                return D(q("w"), 2);
            case "YY":
                return D(g % 100, 2);
            case "YYYY":
                return g;
            case "a":
                return p ? p(i, j, !1) : i > 11 ? "pm" : "am";
            case "A":
                return p ? p(i, j, !0) : i > 11 ? "PM" : "AM";
            case "H":
                return i;
            case "HH":
                return D(i, 2);
            case "h":
                return i % 12 || 12;
            case "hh":
                return D(i % 12 || 12, 2);
            case "m":
                return j;
            case "mm":
                return D(j, 2);
            case "s":
                return k;
            case "ss":
                return D(k, 2);
            case "S":
                return~~ (m / 100);
            case "SS":
                return D(~~(m / 10), 2);
            case "SSS":
                return D(m, 3);
            case "Z":
                return (n < 0 ? "-" : "+") + D(~~(Math.abs(n) / 60), 2) + ":" + D(~~(Math.abs(n) % 60), 2);
            case "ZZ":
                return (n < 0 ? "-" : "+") + D(~~(10 * Math.abs(n) / 6), 4);
            case "L":
            case "LL":
            case "LLL":
            case "LLLL":
            case "LT":
                return H(b, c.longDateFormat[d]);
            default:
                return d.replace(/(^\[)|(\\)|\]$/g, "")
            }
        }
        var e = b.month(),
            f = b.date(),
            g = b.year(),
            h = b.day(),
            i = b.hours(),
            j = b.minutes(),
            k = b.seconds(),
            m = b.milliseconds(),
            n = -b.zone(),
            o = c.ordinal,
            p = c.meridiem;
        return d.replace(l, q)
    }

    function I(a) {
        switch (a) {
        case "DDDD":
            return p;
        case "YYYY":
            return q;
        case "S":
        case "SS":
        case "SSS":
        case "DDD":
            return o;
        case "MMM":
        case "MMMM":
        case "ddd":
        case "dddd":
        case "a":
        case "A":
            return r;
        case "Z":
        case "ZZ":
            return s;
        case "T":
            return t;
        case "MM":
        case "DD":
        case "dd":
        case "YY":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
            return n;
        default:
            return new RegExp(a.replace("\\", ""))
        }
    }

    function J(a, b, d, e) {
        var f;
        switch (a) {
        case "M":
        case "MM":
            d[1] = b == null ? 0 : ~~b - 1;
            break;
        case "MMM":
        case "MMMM":
            for (f = 0; f < 12; f++)
                if (c.monthsParse[f].test(b)) {
                    d[1] = f;
                    break
                }
            break;
        case "D":
        case "DD":
        case "DDD":
        case "DDDD":
            d[2] = ~~b;
            break;
        case "YY":
            b = ~~b, d[0] = b + (b > 70 ? 1900 : 2e3);
            break;
        case "YYYY":
            d[0] = ~~Math.abs(b);
            break;
        case "a":
        case "A":
            e.isPm = (b + "").toLowerCase() === "pm";
            break;
        case "H":
        case "HH":
        case "h":
        case "hh":
            d[3] = ~~b;
            break;
        case "m":
        case "mm":
            d[4] = ~~b;
            break;
        case "s":
        case "ss":
            d[5] = ~~b;
            break;
        case "S":
        case "SS":
        case "SSS":
            d[6] = ~~ (("0." + b) * 1e3);
            break;
        case "Z":
        case "ZZ":
            e.isUTC = !0, f = (b + "").match(x), f && f[1] && (e.tzh = ~~f[1]), f && f[2] && (e.tzm = ~~f[2]), f && f[0] === "+" && (e.tzh = -e.tzh, e.tzm = -e.tzm)
        }
    }

    function K(b, c) {
        var d = [0, 0, 1, 0, 0, 0, 0],
            e = {
                tzh: 0,
                tzm: 0
            }, f = c.match(l),
            g, h;
        for (g = 0; g < f.length; g++) h = (I(f[g]).exec(b) || [])[0], b = b.replace(I(f[g]), ""), J(f[g], h, d, e);
        return e.isPm && d[3] < 12 && (d[3] += 12), e.isPm === !1 && d[3] === 12 && (d[3] = 0), d[3] += e.tzh, d[4] += e.tzm, e.isUTC ? new a(a.UTC.apply({}, d)) : G(d)
    }

    function L(a, b) {
        var c = Math.min(a.length, b.length),
            d = Math.abs(a.length - b.length),
            e = 0,
            f;
        for (f = 0; f < c; f++)~~ a[f] !== ~~b[f] && e++;
        return e + d
    }

    function M(a, b) {
        var c, d = a.match(m) || [],
            e, f = 99,
            g, h, i;
        for (g = 0; g < b.length; g++) h = K(a, b[g]), e = H(new A(h), b[g]).match(m) || [], i = L(d, e), i < f && (f = i, c = h);
        return c
    }

    function N(b) {
        var c = "YYYY-MM-DDT",
            d;
        if (u.exec(b)) {
            for (d = 0; d < 4; d++)
                if (w[d][1].exec(b)) {
                    c += w[d][0];
                    break
                }
            return s.exec(b) ? K(b, c + " Z") : K(b, c)
        }
        return new a(b)
    }

    function O(a, b, d, e) {
        var f = c.relativeTime[a];
        return typeof f == "function" ? f(b || 1, !! d, a, e) : f.replace(/%d/i, b || 1)
    }

    function P(a, b) {
        var c = e(Math.abs(a) / 1e3),
            d = e(c / 60),
            f = e(d / 60),
            g = e(f / 24),
            h = e(g / 365),
            i = c < 45 && ["s", c] || d === 1 && ["m"] || d < 45 && ["mm", d] || f === 1 && ["h"] || f < 22 && ["hh", f] || g === 1 && ["d"] || g <= 25 && ["dd", g] || g <= 45 && ["M"] || g < 345 && ["MM", e(g / 30)] || h === 1 && ["y"] || ["yy", h];
        return i[2] = b, i[3] = a > 0, O.apply({}, i)
    }

    function Q(a, b) {
        c.fn[a] = function (a) {
            var c = this._isUTC ? "UTC" : "";
            return a != null ? (this._d["set" + c + b](a), this) : this._d["get" + c + b]()
        }
    }

    function R(a) {
        c.duration.fn[a] = function () {
            return this._data[a]
        }
    }

    function S(a, b) {
        c.duration.fn["as" + a] = function () {
            return +this / b
        }
    }
    var c, d = "1.6.2",
        e = Math.round,
        f, g = {}, h = "en",
        i = typeof module != "undefined",
        j = "months|monthsShort|monthsParse|weekdays|weekdaysShort|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),
        k = /^\/?Date\((\-?\d+)/i,
        l = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|LT|LL?L?L?)/g,
        m = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,
        n = /\d\d?/,
        o = /\d{1,3}/,
        p = /\d{3}/,
        q = /\d{4}/,
        r = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,
        s = /Z|[\+\-]\d\d:?\d\d/i,
        t = /T/i,
        u = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        v = "YYYY-MM-DDTHH:mm:ssZ",
        w = [
            ["HH:mm:ss.S", /T\d\d:\d\d:\d\d\.\d{1,3}/],
            ["HH:mm:ss", /T\d\d:\d\d:\d\d/],
            ["HH:mm", /T\d\d:\d\d/],
            ["HH", /T\d\d/]
        ],
        x = /([\+\-]|\d\d)/gi,
        y = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
        z = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        };
    c = function (d, e) {
        if (d === null || d === "") return null;
        var f, g, h;
        return c.isMoment(d) ? (f = new a(+d._d), h = d._isUTC) : e ? F(e) ? f = M(d, e) : f = K(d, e) : (g = k.exec(d), f = d === b ? new a : g ? new a(+g[1]) : d instanceof a ? d : F(d) ? G(d) : typeof d == "string" ? N(d) : new a(d)), new A(f, h)
    }, c.utc = function (b, d) {
        return F(b) ? new A(new a(a.UTC.apply({}, b)), !0) : d && b ? c(b + " +0000", d + " Z").utc() : c(b && !s.exec(b) ? b + "+0000" : b).utc()
    }, c.unix = function (a) {
        return c(a * 1e3)
    }, c.duration = function (a, b) {
        var d = c.isDuration(a),
            e = typeof a == "number",
            f = d ? a._data : e ? {} : a;
        return e && (b ? f[b] = a : f.milliseconds = a), new C(f)
    }, c.humanizeDuration = function (a, b, d) {
        return c.duration(a, b === !0 ? null : b).humanize(b === !0 ? !0 : d)
    }, c.version = d, c.defaultFormat = v, c.lang = function (a, b) {
        var d, e, f = [];
        if (!a) return h;
        if (b) {
            for (d = 0; d < 12; d++) f[d] = new RegExp("^" + b.months[d] + "|^" + b.monthsShort[d].replace(".", ""), "i");
            b.monthsParse = b.monthsParse || f, g[a] = b
        }
        if (g[a]) {
            for (d = 0; d < j.length; d++) c[j[d]] = g[a][j[d]] || g.en[j[d]];
            h = a
        } else i && (e = require("./lang/" + a), c.lang(a, e))
    }, c.lang("en", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        meridiem: !1,
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinal: function (a) {
            var b = a % 10;
            return~~ (a % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th"
        }
    }), c.isMoment = function (a) {
        return a instanceof A
    }, c.isDuration = function (a) {
        return a instanceof C
    }, c.fn = A.prototype = {
        clone: function () {
            return c(this)
        },
        valueOf: function () {
            return +this._d
        },
        unix: function () {
            return Math.floor(+this._d / 1e3)
        },
        toString: function () {
            return this._d.toString()
        },
        toDate: function () {
            return this._d
        },
        utc: function () {
            return this._isUTC = !0, this
        },
        local: function () {
            return this._isUTC = !1, this
        },
        format: function (a) {
            return H(this, a ? a : c.defaultFormat)
        },
        add: function (a, b) {
            var d = b ? c.duration(+b, a) : c.duration(a);
            return E(this, d, 1), this
        },
        subtract: function (a, b) {
            var d = b ? c.duration(+b, a) : c.duration(a);
            return E(this, d, -1), this
        },
        diff: function (a, b, d) {
            var f = this._isUTC ? c(a).utc() : c(a).local(),
                g = (this.zone() - f.zone()) * 6e4,
                h = this._d - f._d - g,
                i = this.year() - f.year(),
                j = this.month() - f.month(),
                k = this.date() - f.date(),
                l;
            return b === "months" ? l = i * 12 + j + k / 30 : b === "years" ? l = i + (j + k / 30) / 12 : l = b === "seconds" ? h / 1e3 : b === "minutes" ? h / 6e4 : b === "hours" ? h / 36e5 : b === "days" ? h / 864e5 : b === "weeks" ? h / 6048e5 : h, d ? l : e(l)
        },
        from: function (a, b) {
            return c.duration(this.diff(a)).humanize(!b)
        },
        fromNow: function (a) {
            return this.from(c(), a)
        },
        calendar: function () {
            var a = this.diff(c().sod(), "days", !0),
                b = c.calendar,
                d = b.sameElse,
                e = a < -6 ? d : a < -1 ? b.lastWeek : a < 0 ? b.lastDay : a < 1 ? b.sameDay : a < 2 ? b.nextDay : a < 7 ? b.nextWeek : d;
            return this.format(typeof e == "function" ? e.apply(this) : e)
        },
        isLeapYear: function () {
            var a = this.year();
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        },
        isDST: function () {
            return this.zone() < c([this.year()]).zone() || this.zone() < c([this.year(), 5]).zone()
        },
        day: function (a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return a == null ? b : this.add({
                d: a - b
            })
        },
        sod: function () {
            return c(this).hours(0).minutes(0).seconds(0).milliseconds(0)
        },
        eod: function () {
            return this.sod().add({
                d: 1,
                ms: -1
            })
        },
        zone: function () {
            return this._isUTC ? 0 : this._d.getTimezoneOffset()
        },
        daysInMonth: function () {
            return c(this).month(this.month() + 1).date(0).date()
        }
    };
    for (f = 0; f < y.length; f++) Q(y[f].toLowerCase(), y[f]);
    Q("year", "FullYear"), c.duration.fn = C.prototype = {
        weeks: function () {
            return B(this.days() / 7)
        },
        valueOf: function () {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6
        },
        humanize: function (a) {
            var b = +this,
                d = c.relativeTime,
                e = P(b, !a);
            return a && (e = (b <= 0 ? d.past : d.future).replace(/%s/i, e)), e
        }
    };
    for (f in z) z.hasOwnProperty(f) && (S(f, z[f]), R(f.toLowerCase()));
    S("Weeks", 6048e5), i && (module.exports = c), typeof window != "undefined" && typeof ender == "undefined" && (window.moment = c), typeof define == "function" && define.amd && define("moment", [], function () {
        return c
    })
}(Date),
function () {
    (function () {
        var a;
        return a = {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                L: "YYYY-MM-DD",
                LL: "D MMMM, YYYY",
                LLL: "D MMMM, YYYY LT",
                LLLL: "dddd, D MMMM, YYYY LT"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "%d min",
                mm: "%d mins",
                h: "1 hr",
                hh: "%d hrs",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinal: function (a) {
                var b;
                return b = a % 10, ~~ (a % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th"
            }
        }, typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("en-short-relative-times", a), this.moment.lang("en")
    })()
}.call(this),
function () {
    (function () {
        var a;
        return a = {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                L: "YYYY-MM-DD",
                LL: "D MMMM, YYYY",
                LLL: "D MMMM, YYYY LT",
                LLLL: "dddd, D MMMM, YYYY LT"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s",
                s: "%ds",
                m: "%dm",
                mm: "%dm",
                h: "1h",
                hh: "%dh",
                d: "1d",
                dd: "%dd",
                M: "1m",
                MM: "%dm",
                y: "1y",
                yy: "%dy"
            },
            ordinal: function (a) {
                var b;
                return b = a % 10, ~~ (a % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th"
            }
        }, typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("en-mini-relative-times", a), this.moment.lang("en")
    })()
}.call(this),
function () {
    moment.unix = function (a) {
        return moment(a * 1e3)
    }
}.call(this),
function () {
    jQuery.roundToK = function (a, b) {
        var c, d;
        return b == null && (b = 1e4), a < b ? ("" + a).toCurrency(0) : (d = Math.round(a / 100) / 10, c = 1, d - parseInt(d, 10) === 0 && (c = 0), d.toFixed(c) + "k")
    }
}.call(this),
function () {
    moment.relativeDayInTheFuture = function (a, b) {
        var c, d, e;
        return b == null && (b = !1), d = moment(), c = moment.duration(d.diff(a)), e = d.clone().add("days", 1), c.asDays() > -2 && a.format("dddd") === d.format("dddd") ? "Today" : c.asDays() > -3 && a.format("dddd") === e.format("dddd") ? "Tomorrow" : a.format("dddd, MMMM D, YYYY")
    }, moment.relativeDayStringInThePast = function (a, b) {
        var c, d, e;
        return b == null && (b = !1), d = moment().utc().member(), c = moment.duration(d.diff(a.member())), c.asDays() > 4 ? (e = a.format("MMMM D, YYYY"), b != null && b && (e = "on " + e), e) : c.asDays() > 2 ? (e = a.subtract(4, "days").format("dddd"), b != null && b && (e = "on " + e), e) : c.asDays() > 1 || a.format("dddd") !== d.format("dddd") ? "Yesterday" : "Today"
    }
}.call(this),
function () {
    moment.fn.shortTimeOrDate = function (a, b) {
        var c, d, e, f, g, h, i, j, k, l, m;
        return h = {
            sameDay: "h:mm A",
            sameYear: "MMM D",
            sameElse: "MM/DD/YYYY"
        }, l = moment(), d = this.diff(l, "days", !0), e = this.diff(l, "hours", !0), f = this.diff(l, "minutes", !0), j = this.sod().valueOf() === l.sod().valueOf(), g = l.year() !== this.year() ? h.sameElse : e > -24 && b ? j ? h.sameDay : h.sameYear : e > -24 ? h.sameDay : h.sameYear, m = this.format(g), a && (e > -1 ? (k = Math.floor(Math.abs(f)), k === 1 ? m += " (1 minute ago)" : m += " (" + k + " minutes ago)") : e > -24 ? (i = Math.floor(Math.abs(e)), i === 1 ? m += " (1 hour ago)" : m += " (" + i + " hours ago)") : d > -7 && (c = Math.floor(Math.abs(d)), c === 1 ? m += " (1 day ago)" : m += " (" + c + " days ago)")), m
    }
}.call(this),
function () {
    (function (a) {
        return a.fn.ratioKeeper = function (b) {
            return this.each(function () {
                var c, d;
                return c = a(this), d = Math.round(c.width() * b), c.find("*").css("height", d), a(window).resize(function () {
                    return d = Math.round(c.width() * b), c.find("*").css("height", d)
                })
            })
        }
    })(jQuery)
}.call(this),
function (a) {
    a.fn.charCount = function (b) {
        function d(c) {
            var d = a(".counter"),
                e = c.val().length,
                f = b.allowed - e;
            f <= b.warning && f >= 0 ? d.addClass(b.cssWarning) : d.removeClass(b.cssWarning), f < 0 ? d.addClass(b.cssExceeded) : d.removeClass(b.cssExceeded), b.up ? d.html(b.counterText + (b.allowed - f) + "/" + b.allowed) : d.html(b.counterText + f)
        }
        var c = {
            allowed: 140,
            warning: 25,
            cssWarning: "warning",
            cssExceeded: "exceeded",
            counterText: "",
            up: !1
        }, b = a.extend(c, b);
        this.each(function () {
            var b = a(this);
            d(b), b.keyup(function () {
                d(b)
            }), b.change(function () {
                d(b)
            })
        })
    }
}(jQuery),
function () {
    var a, b = Array.prototype.slice;
    a = function (a) {
        var c, d, e;
        d = function () {
            var c, d, e;
            return d = arguments[0], c = 2 <= arguments.length ? b.call(arguments, 1) : [], e = a.apply(null, [d].concat(b.call(c))), e._originalInput == null && (e._originalInput = d), e
        };
        for (c in a) e = a[c], d[c] = e;
        return d
    }, window.moment = a(window.moment), moment.utc = a(moment.utc), moment.fn.member = function () {
        return Member.current() && this._originalInput && typeof this._originalInput == "string" ? moment(this._originalInput.replace(/[-\+]\d\d:\d\d$/, "").replace(/Z$/, "")) : this
    }, moment.fn.timezoneAdjusted = function (a) {
        return this.clone().utc().add("minutes", a * 60)
    }, moment.fn.memberTimezoneAdjusted = function () {
        return Member.current() != null ? this.clone().timezoneAdjusted(Member.current().timezone_offset) : this.clone()
    }
}.call(this),
function (a) {
    var b = "hidden",
        c = "border-box",
        d = "lineHeight",
        e = '<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;">',
        f = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
        g = "oninput",
        h = "onpropertychange",
        i = a(e)[0];
    i.setAttribute(g, "return"), a.isFunction(i[g]) || h in i ? (a(i).css(d, "99px"), a(i).css(d) === "99px" && f.push(d), a.fn.autosize = function (d) {
        return this.each(function () {
            function r() {
                var a, c;
                n || (n = !0, k.value = i.value, k.style.overflowY = i.style.overflowY, k.style.width = j.css("width"), k.scrollTop = 0, k.scrollTop = 9e4, a = k.scrollTop, c = b, a > m ? (a = m, c = "scroll") : a < l && (a = l), i.style.overflowY = c, i.style.height = a + q + "px", setTimeout(function () {
                    n = !1
                }, 1))
            }
            var i = this,
                j = a(i),
                k, l = j.height(),
                m = parseInt(j.css("maxHeight"), 10),
                n, o = f.length,
                p, q = 0;
            if (j.css("box-sizing") === c || j.css("-moz-box-sizing") === c || j.css("-webkit-box-sizing") === c) q = j.outerHeight() - j.height();
            if (j.data("mirror") || j.data("ismirror")) return;
            k = a(e).data("ismirror", !0).addClass(d || "autosizejs")[0], p = j.css("resize") === "none" ? "none" : "horizontal", j.data("mirror", a(k)).css({
                overflow: b,
                overflowY: b,
                wordWrap: "break-word",
                resize: p
            }), m = m && m > 0 ? m : 9e4;
            while (o--) k.style[f[o]] = j.css(f[o]);
            a("body").append(k), h in i ? g in i ? i[g] = i.onkeyup = r : i[h] = r : i[g] = r, a(window).resize(r), j.bind("autosize", r), j.text(j.text()), r()
        })
    }) : a.fn.autosize = function () {
        return this
    }
}(jQuery),
function (a, b, c) {
    function d(a, c) {
        var d = b.createElement(a || "div"),
            e;
        for (e in c) d[e] = c[e];
        return d
    }

    function e(a) {
        for (var b = 1, c = arguments.length; b < c; b++) a.appendChild(arguments[b]);
        return a
    }

    function f(a, b, c, d) {
        var e = ["opacity", b, ~~ (a * 100), c, d].join("-"),
            f = .01 + c / d * 100,
            g = Math.max(1 - (1 - a) / b * (100 - f), a),
            h = m.substring(0, m.indexOf("Animation")).toLowerCase(),
            i = h && "-" + h + "-" || "";
        return l[e] || (n.insertRule("@" + i + "keyframes " + e + "{" + "0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}" + "100%{opacity:" + g + "}" + "}", 0), l[e] = 1), e
    }

    function g(a, b) {
        var d = a.style,
            e, f;
        if (d[b] !== c) return b;
        b = b.charAt(0).toUpperCase() + b.slice(1);
        for (f = 0; f < k.length; f++) {
            e = k[f] + b;
            if (d[e] !== c) return e
        }
    }

    function h(a, b) {
        for (var c in b) a.style[g(a, c) || c] = b[c];
        return a
    }

    function i(a) {
        for (var b = 1; b < arguments.length; b++) {
            var d = arguments[b];
            for (var e in d) a[e] === c && (a[e] = d[e])
        }
        return a
    }

    function j(a) {
        var b = {
            x: a.offsetLeft,
            y: a.offsetTop
        };
        while (a = a.offsetParent) b.x += a.offsetLeft, b.y += a.offsetTop;
        return b
    }
    var k = ["webkit", "Moz", "ms", "O"],
        l = {}, m, n = function () {
            var a = d("style");
            return e(b.getElementsByTagName("head")[0], a), a.sheet || a.styleSheet
        }(),
        o = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            color: "#000",
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto"
        }, p = function q(a) {
            if (!this.spin) return new q(a);
            this.opts = i(a || {}, q.defaults, o)
        };
    p.defaults = {}, i(p.prototype, {
        spin: function (a) {
            this.stop();
            var b = this,
                c = b.opts,
                e = b.el = h(d(0, {
                    className: c.className
                }), {
                    position: "relative",
                    zIndex: c.zIndex
                }),
                f = c.radius + c.length + c.width,
                g, i;
            a && (a.insertBefore(e, a.firstChild || null), i = j(a), g = j(e), h(e, {
                left: (c.left == "auto" ? i.x - g.x + (a.offsetWidth >> 1) : c.left + f) + "px",
                top: (c.top == "auto" ? i.y - g.y + (a.offsetHeight >> 1) : c.top + f) + "px"
            })), e.setAttribute("aria-role", "progressbar"), b.lines(e, b.opts);
            if (!m) {
                var k = 0,
                    l = c.fps,
                    n = l / c.speed,
                    o = (1 - c.opacity) / (n * c.trail / 100),
                    p = n / c.lines;
                ! function q() {
                    k++;
                    for (var a = c.lines; a; a--) {
                        var d = Math.max(1 - (k + a * p) % n * o, c.opacity);
                        b.opacity(e, c.lines - a, d, c)
                    }
                    b.timeout = b.el && setTimeout(q, ~~ (1e3 / l))
                }()
            }
            return b
        },
        stop: function () {
            var a = this.el;
            return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = c), this
        },
        lines: function (a, b) {
            function c(a, c) {
                return h(d(), {
                    position: "absolute",
                    width: b.length + b.width + "px",
                    height: b.width + "px",
                    background: a,
                    boxShadow: c,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / b.lines * g + b.rotate) + "deg) translate(" + b.radius + "px" + ",0)",
                    borderRadius: (b.width >> 1) + "px"
                })
            }
            var g = 0,
                i;
            for (; g < b.lines; g++) i = h(d(), {
                position: "absolute",
                top: 1 + ~(b.width / 2) + "px",
                transform: b.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: b.opacity,
                animation: m && f(b.opacity, b.trail, g, b.lines) + " " + 1 / b.speed + "s linear infinite"
            }), b.shadow && e(i, h(c("#000", "0 0 4px #000"), {
                top: "2px"
            })), e(a, e(i, c(b.color, "0 0 1px rgba(0,0,0,.1)")));
            return a
        },
        opacity: function (a, b, c) {
            b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
        }
    }), ! function () {
        function a(a, b) {
            return d("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', b)
        }
        var b = h(d("group"), {
            behavior: "url(#default#VML)"
        });
        !g(b, "transform") && b.adj ? (n.addRule(".spin-vml", "behavior:url(#default#VML)"), p.prototype.lines = function (b, c) {
            function d() {
                return h(a("group", {
                    coordsize: i + " " + i,
                    coordorigin: -g + " " + -g
                }), {
                    width: i,
                    height: i
                })
            }

            function f(b, f, i) {
                e(k, e(h(d(), {
                    rotation: 360 / c.lines * b + "deg",
                    left: ~~f
                }), e(h(a("roundrect", {
                    arcsize: 1
                }), {
                    width: g,
                    height: c.width,
                    left: c.radius,
                    top: -c.width >> 1,
                    filter: i
                }), a("fill", {
                    color: c.color,
                    opacity: c.opacity
                }), a("stroke", {
                    opacity: 0
                }))))
            }
            var g = c.length + c.width,
                i = 2 * g,
                j = -(c.width + c.length) * 2 + "px",
                k = h(d(), {
                    position: "absolute",
                    top: j,
                    left: j
                }),
                l;
            if (c.shadow)
                for (l = 1; l <= c.lines; l++) f(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; l <= c.lines; l++) f(l);
            return e(b, k)
        }, p.prototype.opacity = function (a, b, c, d) {
            var e = a.firstChild;
            d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
        }) : m = g(b, "animation")
    }(), a.Spinner = p
}(window, document), $.fn.spin = function (a) {
    return this.each(function () {
        var b = $(this),
            c = b.data();
        c.spinner && (c.spinner.stop(), delete c.spinner), a !== !1 && (c.spinner = (new Spinner($.extend({
            color: b.css("color")
        }, a))).spin(this))
    }), this
},
function (a) {
    function b() {
        this._defaults = {
            pickerClass: "",
            showOnFocus: !0,
            showTrigger: null,
            showAnim: "show",
            showOptions: {},
            showSpeed: "normal",
            popupContainer: null,
            alignment: "bottom",
            fixedWeeks: !1,
            firstDay: 0,
            calculateWeek: this.iso8601Week,
            monthsToShow: 1,
            monthsOffset: 0,
            monthsToStep: 1,
            monthsToJump: 12,
            useMouseWheel: !0,
            changeMonth: !0,
            yearRange: "c-10:c+10",
            shortYearCutoff: "+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            defaultDate: null,
            selectDefaultDate: !1,
            minDate: null,
            maxDate: null,
            dateFormat: "mm/dd/yyyy",
            autoSize: !1,
            rangeSelect: !1,
            rangeSeparator: " - ",
            multiSelect: 0,
            multiSeparator: ",",
            onDate: null,
            onShow: null,
            onChangeMonthYear: null,
            onSelect: null,
            onClose: null,
            altField: null,
            altFormat: null,
            constrainInput: !0,
            commandsAsDateFormat: !1,
            commands: this.commands
        }, this.regional = {
            "": {
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                dateFormat: "mm/dd/yyyy",
                firstDay: 0,
                renderer: this.defaultRenderer,
                prevText: "&lt;Prev",
                prevStatus: "Show the previous month",
                prevJumpText: "&lt;&lt;",
                prevJumpStatus: "Show the previous year",
                nextText: "Next&gt;",
                nextStatus: "Show the next month",
                nextJumpText: "&gt;&gt;",
                nextJumpStatus: "Show the next year",
                currentText: "Current",
                currentStatus: "Show the current month",
                todayText: "Today",
                todayStatus: "Show today's month",
                clearText: "Clear",
                clearStatus: "Clear all the dates",
                closeText: "Close",
                closeStatus: "Close the datepicker",
                yearStatus: "Change the year",
                monthStatus: "Change the month",
                weekText: "Wk",
                weekStatus: "Week of the year",
                dayStatus: "Select DD, M d, yyyy",
                defaultStatus: "Select a date",
                isRTL: !1
            }
        }, a.extend(this._defaults, this.regional[""]), this._disabled = []
    }

    function c(b, c) {
        a.extend(b, c);
        for (var d in c)
            if (c[d] == null || c[d] == undefined) b[d] = c[d];
        return b
    }
    a.extend(b.prototype, {
        dataName: "datepick",
        markerClass: "hasDatepick",
        _popupClass: "datepick-popup",
        _triggerClass: "datepick-trigger",
        _disableClass: "datepick-disable",
        _coverClass: "datepick-cover",
        _monthYearClass: "datepick-month-year",
        _curMonthClass: "datepick-month-",
        _anyYearClass: "datepick-any-year",
        _curDoWClass: "datepick-dow-",
        commands: {
            prev: {
                text: "prevText",
                status: "prevStatus",
                keystroke: {
                    keyCode: 33
                },
                enabled: function (b) {
                    var c = b.curMinDate();
                    return !c || a.datepick.add(a.datepick.day(a.datepick._applyMonthsOffset(a.datepick.add(a.datepick.newDate(b.drawDate), 1 - b.get("monthsToStep"), "m"), b), 1), -1, "d").getTime() >= c.getTime()
                },
                date: function (b) {
                    return a.datepick.day(a.datepick._applyMonthsOffset(a.datepick.add(a.datepick.newDate(b.drawDate), -b.get("monthsToStep"), "m"), b), 1)
                },
                action: function (b) {
                    a.datepick.changeMonth(this, -b.get("monthsToStep"))
                }
            },
            prevJump: {
                text: "prevJumpText",
                status: "prevJumpStatus",
                keystroke: {
                    keyCode: 33,
                    ctrlKey: !0
                },
                enabled: function (b) {
                    var c = b.curMinDate();
                    return !c || a.datepick.add(a.datepick.day(a.datepick._applyMonthsOffset(a.datepick.add(a.datepick.newDate(b.drawDate), 1 - b.get("monthsToJump"), "m"), b), 1), -1, "d").getTime() >= c.getTime()
                },
                date: function (b) {
                    return a.datepick.day(a.datepick._applyMonthsOffset(a.datepick.add(a.datepick.newDate(b.drawDate), -b.get("monthsToJump"), "m"), b), 1)
                },
                action: function (b) {
                    a.datepick.changeMonth(this, -b.get("monthsToJump"))
                }
            },
            next: {
                text: "nextText",
                status: "nextStatus",
                keystroke: {
                    keyCode: 34
                },
                enabled: function (b) {
                    var c = b.get("maxDate");
                    return !c || a.datepick.day(a.datepick._applyMonthsOffset(a.datepick.add(a.datepick.newDate(b.drawDate), b.get("monthsToStep"), "m"), b), 1).getTime() <= c.getTime()
                },
                date: function (b) {
                    return a.datepick.day(a.datepick._applyMonthsOffset(a.datepick.add(a.datepick.newDate(b.drawDate), b.get("monthsToStep"), "m"), b), 1)
                },
                action: function (b) {
                    a.datepick.changeMonth(this, b.get("monthsToStep"))
                }
            },
            nextJump: {
                text: "nextJumpText",
                status: "nextJumpStatus",
                keystroke: {
                    keyCode: 34,
                    ctrlKey: !0
                },
                enabled: function (b) {
                    var c = b.get("maxDate");
                    return !c || a.datepick.day(a.datepick._applyMonthsOffset(a.datepick.add(a.datepick.newDate(b.drawDate), b.get("monthsToJump"), "m"), b), 1).getTime() <= c.getTime()
                },
                date: function (b) {
                    return a.datepick.day(a.datepick._applyMonthsOffset(a.datepick.add(a.datepick.newDate(b.drawDate), b.get("monthsToJump"), "m"), b), 1)
                },
                action: function (b) {
                    a.datepick.changeMonth(this, b.get("monthsToJump"))
                }
            },
            current: {
                text: "currentText",
                status: "currentStatus",
                keystroke: {
                    keyCode: 36,
                    ctrlKey: !0
                },
                enabled: function (b) {
                    var c = b.curMinDate(),
                        d = b.get("maxDate"),
                        e = b.selectedDates[0] || a.datepick.today();
                    return (!c || e.getTime() >= c.getTime()) && (!d || e.getTime() <= d.getTime())
                },
                date: function (b) {
                    return b.selectedDates[0] || a.datepick.today()
                },
                action: function (b) {
                    var c = b.selectedDates[0] || a.datepick.today();
                    a.datepick.showMonth(this, c.getFullYear(), c.getMonth() + 1)
                }
            },
            today: {
                text: "todayText",
                status: "todayStatus",
                keystroke: {
                    keyCode: 36,
                    ctrlKey: !0
                },
                enabled: function (b) {
                    var c = b.curMinDate(),
                        d = b.get("maxDate");
                    return (!c || a.datepick.today().getTime() >= c.getTime()) && (!d || a.datepick.today().getTime() <= d.getTime())
                },
                date: function (b) {
                    return a.datepick.today()
                },
                action: function (b) {
                    a.datepick.showMonth(this)
                }
            },
            clear: {
                text: "clearText",
                status: "clearStatus",
                keystroke: {
                    keyCode: 35,
                    ctrlKey: !0
                },
                enabled: function (a) {
                    return !0
                },
                date: function (a) {
                    return null
                },
                action: function (b) {
                    a.datepick.clear(this)
                }
            },
            close: {
                text: "closeText",
                status: "closeStatus",
                keystroke: {
                    keyCode: 27
                },
                enabled: function (a) {
                    return !0
                },
                date: function (a) {
                    return null
                },
                action: function (b) {
                    a.datepick.hide(this)
                }
            },
            prevWeek: {
                text: "prevWeekText",
                status: "prevWeekStatus",
                keystroke: {
                    keyCode: 38,
                    ctrlKey: !0
                },
                enabled: function (b) {
                    var c = b.curMinDate();
                    return !c || a.datepick.add(a.datepick.newDate(b.drawDate), -7, "d").getTime() >= c.getTime()
                },
                date: function (b) {
                    return a.datepick.add(a.datepick.newDate(b.drawDate), -7, "d")
                },
                action: function (b) {
                    a.datepick.changeDay(this, -7)
                }
            },
            prevDay: {
                text: "prevDayText",
                status: "prevDayStatus",
                keystroke: {
                    keyCode: 37,
                    ctrlKey: !0
                },
                enabled: function (b) {
                    var c = b.curMinDate();
                    return !c || a.datepick.add(a.datepick.newDate(b.drawDate), -1, "d").getTime() >= c.getTime()
                },
                date: function (b) {
                    return a.datepick.add(a.datepick.newDate(b.drawDate), -1, "d")
                },
                action: function (b) {
                    a.datepick.changeDay(this, -1)
                }
            },
            nextDay: {
                text: "nextDayText",
                status: "nextDayStatus",
                keystroke: {
                    keyCode: 39,
                    ctrlKey: !0
                },
                enabled: function (b) {
                    var c = b.get("maxDate");
                    return !c || a.datepick.add(a.datepick.newDate(b.drawDate), 1, "d").getTime() <= c.getTime()
                },
                date: function (b) {
                    return a.datepick.add(a.datepick.newDate(b.drawDate), 1, "d")
                },
                action: function (b) {
                    a.datepick.changeDay(this, 1)
                }
            },
            nextWeek: {
                text: "nextWeekText",
                status: "nextWeekStatus",
                keystroke: {
                    keyCode: 40,
                    ctrlKey: !0
                },
                enabled: function (b) {
                    var c = b.get("maxDate");
                    return !c || a.datepick.add(a.datepick.newDate(b.drawDate), 7, "d").getTime() <= c.getTime()
                },
                date: function (b) {
                    return a.datepick.add(a.datepick.newDate(b.drawDate), 7, "d")
                },
                action: function (b) {
                    a.datepick.changeDay(this, 7)
                }
            }
        },
        defaultRenderer: {
            picker: '<div class="datepick"><div class="datepick-nav">{link:prev}{link:today}{link:next}</div>{months}{popup:start}<div class="datepick-ctrl">{link:clear}{link:close}</div>{popup:end}<div class="datepick-clear-fix"></div></div>',
            monthRow: '<div class="datepick-month-row">{months}</div>',
            month: '<div class="datepick-month"><div class="datepick-month-header">{monthHeader}</div><table><thead>{weekHeader}</thead><tbody>{weeks}</tbody></table></div>',
            weekHeader: "<tr>{days}</tr>",
            dayHeader: "<th>{day}</th>",
            week: "<tr>{days}</tr>",
            day: "<td>{day}</td>",
            monthSelector: ".datepick-month",
            daySelector: "td",
            rtlClass: "datepick-rtl",
            multiClass: "datepick-multi",
            defaultClass: "",
            selectedClass: "datepick-selected",
            highlightedClass: "datepick-highlight",
            todayClass: "datepick-today",
            otherMonthClass: "datepick-other-month",
            weekendClass: "datepick-weekend",
            commandClass: "datepick-cmd",
            commandButtonClass: "",
            commandLinkClass: "",
            disabledClass: "datepick-disabled"
        },
        setDefaults: function (b) {
            return a.extend(this._defaults, b || {}), this
        },
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
        _msPerDay: 864e5,
        ATOM: "yyyy-mm-dd",
        COOKIE: "D, dd M yyyy",
        FULL: "DD, MM d, yyyy",
        ISO_8601: "yyyy-mm-dd",
        JULIAN: "J",
        RFC_822: "D, d M yy",
        RFC_850: "DD, dd-M-yy",
        RFC_1036: "D, d M yy",
        RFC_1123: "D, d M yyyy",
        RFC_2822: "D, d M yyyy",
        RSS: "D, d M yy",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yyyy-mm-dd",
        formatDate: function (a, b, c) {
            typeof a != "string" && (c = b, b = a, a = "");
            if (!b) return "";
            a = a || this._defaults.dateFormat, c = c || {};
            var d = c.dayNamesShort || this._defaults.dayNamesShort,
                e = c.dayNames || this._defaults.dayNames,
                f = c.monthNamesShort || this._defaults.monthNamesShort,
                g = c.monthNames || this._defaults.monthNames,
                h = c.calculateWeek || this._defaults.calculateWeek,
                i = function (b, c) {
                    var d = 1;
                    while (n + d < a.length && a.charAt(n + d) == b) d++;
                    return n += d - 1, Math.floor(d / (c || 1)) > 1
                }, j = function (a, b, c, d) {
                    var e = "" + b;
                    if (i(a, d))
                        while (e.length < c) e = "0" + e;
                    return e
                }, k = function (a, b, c, d) {
                    return i(a) ? d[b] : c[b]
                }, l = "",
                m = !1;
            for (var n = 0; n < a.length; n++)
                if (m) a.charAt(n) == "'" && !i("'") ? m = !1 : l += a.charAt(n);
                else switch (a.charAt(n)) {
                case "d":
                    l += j("d", b.getDate(), 2);
                    break;
                case "D":
                    l += k("D", b.getDay(), d, e);
                    break;
                case "o":
                    l += j("o", this.dayOfYear(b), 3);
                    break;
                case "w":
                    l += j("w", h(b), 2);
                    break;
                case "m":
                    l += j("m", b.getMonth() + 1, 2);
                    break;
                case "M":
                    l += k("M", b.getMonth(), f, g);
                    break;
                case "y":
                    l += i("y", 2) ? b.getFullYear() : (b.getFullYear() % 100 < 10 ? "0" : "") + b.getFullYear() % 100;
                    break;
                case "@":
                    l += Math.floor(b.getTime() / 1e3);
                    break;
                case "!":
                    l += b.getTime() * 1e4 + this._ticksTo1970;
                    break;
                case "'":
                    i("'") ? l += "'" : m = !0;
                    break;
                default:
                    l += a.charAt(n)
                }
                return l
        },
        parseDate: function (a, b, c) {
            if (b == null) throw "Invalid arguments";
            b = typeof b == "object" ? b.toString() : b + "";
            if (b == "") return null;
            a = a || this._defaults.dateFormat, c = c || {};
            var d = c.shortYearCutoff || this._defaults.shortYearCutoff;
            d = typeof d != "string" ? d : this.today().getFullYear() % 100 + parseInt(d, 10);
            var e = c.dayNamesShort || this._defaults.dayNamesShort,
                f = c.dayNames || this._defaults.dayNames,
                g = c.monthNamesShort || this._defaults.monthNamesShort,
                h = c.monthNames || this._defaults.monthNames,
                i = -1,
                j = -1,
                k = -1,
                l = -1,
                m = !1,
                n = !1,
                o = function (b, c) {
                    var d = 1;
                    while (t + d < a.length && a.charAt(t + d) == b) d++;
                    return t += d - 1, Math.floor(d / (c || 1)) > 1
                }, p = function (a, c) {
                    var d = o(a, c),
                        e = [2, 3, d ? 4 : 2, 11, 20]["oy@!".indexOf(a) + 1],
                        f = new RegExp("^-?\\d{1," + e + "}"),
                        g = b.substring(s).match(f);
                    if (!g) throw "Missing number at position {0}".replace(/\{0\}/, s);
                    return s += g[0].length, parseInt(g[0], 10)
                }, q = function (a, c, d, e) {
                    var f = o(a, e) ? d : c;
                    for (var g = 0; g < f.length; g++)
                        if (b.substr(s, f[g].length) == f[g]) return s += f[g].length, g + 1;
                    throw "Unknown name at position {0}".replace(/\{0\}/, s)
                }, r = function () {
                    if (b.charAt(s) != a.charAt(t)) throw "Unexpected literal at position {0}".replace(/\{0\}/, s);
                    s++
                }, s = 0;
            for (var t = 0; t < a.length; t++)
                if (n) a.charAt(t) == "'" && !o("'") ? n = !1 : r();
                else switch (a.charAt(t)) {
                case "d":
                    k = p("d");
                    break;
                case "D":
                    q("D", e, f);
                    break;
                case "o":
                    l = p("o");
                    break;
                case "w":
                    p("w");
                    break;
                case "m":
                    j = p("m");
                    break;
                case "M":
                    j = q("M", g, h);
                    break;
                case "y":
                    var u = t;
                    m = !o("y", 2), t = u, i = p("y", 2);
                    break;
                case "@":
                    var v = this._normaliseDate(new Date(p("@") * 1e3));
                    i = v.getFullYear(), j = v.getMonth() + 1, k = v.getDate();
                    break;
                case "!":
                    var v = this._normaliseDate(new Date((p("!") - this._ticksTo1970) / 1e4));
                    i = v.getFullYear(), j = v.getMonth() + 1, k = v.getDate();
                    break;
                case "*":
                    s = b.length;
                    break;
                case "'":
                    o("'") ? r() : n = !0;
                    break;
                default:
                    r()
                }
                if (s < b.length) throw "Additional text found at end";
            i == -1 ? i = this.today().getFullYear() : i < 100 && m && (i += d == -1 ? 1900 : this.today().getFullYear() - this.today().getFullYear() % 100 - (i <= d ? 0 : 100));
            if (l > -1) {
                j = 1, k = l;
                for (var w = this.daysInMonth(i, j); k > w; w = this.daysInMonth(i, j)) j++, k -= w
            }
            var v = this.newDate(i, j, k);
            if (v.getFullYear() != i || v.getMonth() + 1 != j || v.getDate() != k) throw "Invalid date";
            return v
        },
        determineDate: function (b, c, d, e, f) {
            d && typeof d != "object" && (f = e, e = d, d = null), typeof e != "string" && (f = e, e = "");
            var g = function (b) {
                try {
                    return a.datepick.parseDate(e, b, f)
                } catch (c) {}
                b = b.toLowerCase();
                var g = (b.match(/^c/) && d ? a.datepick.newDate(d) : null) || a.datepick.today(),
                    h = /([+-]?[0-9]+)\s*(d|w|m|y)?/g,
                    i = h.exec(b);
                while (i) g = a.datepick.add(g, parseInt(i[1], 10), i[2] || "d"), i = h.exec(b);
                return g
            };
            return c = c ? a.datepick.newDate(c) : null, b = b == null ? c : typeof b == "string" ? g(b) : typeof b == "number" ? isNaN(b) || b == Infinity || b == -Infinity ? c : a.datepick.add(a.datepick.today(), b, "d") : a.datepick.newDate(b), b
        },
        daysInMonth: function (a, b) {
            return b = a.getFullYear ? a.getMonth() + 1 : b, a = a.getFullYear ? a.getFullYear() : a, this.newDate(a, b + 1, 0).getDate()
        },
        dayOfYear: function (a, b, c) {
            var d = a.getFullYear ? a : this.newDate(a, b, c),
                e = this.newDate(d.getFullYear(), 1, 1);
            return Math.floor((d.getTime() - e.getTime()) / this._msPerDay) + 1
        },
        iso8601Week: function (a, b, c) {
            var d = a.getFullYear ? new Date(a.getTime()) : this.newDate(a, b, c);
            d.setDate(d.getDate() + 4 - (d.getDay() || 7));
            var e = d.getTime();
            return d.setMonth(0, 1), Math.floor(Math.round((e - d) / 864e5) / 7) + 1
        },
        today: function () {
            return this._normaliseDate(new Date)
        },
        newDate: function (a, b, c) {
            return a ? a.getFullYear ? this._normaliseDate(new Date(a.getTime())) : new Date(a, b - 1, c, 12) : null
        },
        _normaliseDate: function (a) {
            return a && a.setHours(12, 0, 0, 0), a
        },
        year: function (a, b) {
            return a.setFullYear(b), this._normaliseDate(a)
        },
        month: function (a, b) {
            return a.setMonth(b - 1), this._normaliseDate(a)
        },
        day: function (a, b) {
            return a.setDate(b), this._normaliseDate(a)
        },
        add: function (b, c, d) {
            if (d == "d" || d == "w") this._normaliseDate(b), b.setDate(b.getDate() + c * (d == "w" ? 7 : 1));
            else {
                var e = b.getFullYear() + (d == "y" ? c : 0),
                    f = b.getMonth() + (d == "m" ? c : 0);
                b.setTime(a.datepick.newDate(e, f + 1, Math.min(b.getDate(), this.daysInMonth(e, f + 1))).getTime())
            }
            return b
        },
        _applyMonthsOffset: function (b, c) {
            var d = c.get("monthsOffset");
            return a.isFunction(d) && (d = d.apply(c.target[0], [b])), a.datepick.add(b, -d, "m")
        },
        _attachPicker: function (b, c) {
            b = a(b);
            if (b.hasClass(this.markerClass)) return;
            b.addClass(this.markerClass);
            var d = {
                target: b,
                selectedDates: [],
                drawDate: null,
                pickingRange: !1,
                inline: a.inArray(b[0].nodeName.toLowerCase(), ["div", "span"]) > -1,
                get: function (b) {
                    var c = this.settings[b] !== undefined ? this.settings[b] : a.datepick._defaults[b];
                    return a.inArray(b, ["defaultDate", "minDate", "maxDate"]) > -1 && (c = a.datepick.determineDate(c, null, this.selectedDates[0], this.get("dateFormat"), d.getConfig())), c
                },
                curMinDate: function () {
                    return this.pickingRange ? this.selectedDates[0] : this.get("minDate")
                },
                getConfig: function () {
                    return {
                        dayNamesShort: this.get("dayNamesShort"),
                        dayNames: this.get("dayNames"),
                        monthNamesShort: this.get("monthNamesShort"),
                        monthNames: this.get("monthNames"),
                        calculateWeek: this.get("calculateWeek"),
                        shortYearCutoff: this.get("shortYearCutoff")
                    }
                }
            };
            a.data(b[0], this.dataName, d);
            var e = a.fn.metadata ? b.metadata() : {};
            d.settings = a.extend({}, c || {}, e || {}), d.inline ? (d.drawDate = a.datepick._checkMinMax(a.datepick.newDate(d.selectedDates[0] || d.get("defaultDate") || a.datepick.today()), d), d.prevDate = a.datepick.newDate(d.drawDate), this._update(b[0]), a.fn.mousewheel && b.mousewheel(this._doMouseWheel)) : (this._attachments(b, d), b.bind("keydown." + this.dataName, this._keyDown).bind("keypress." + this.dataName, this._keyPress).bind("keyup." + this.dataName, this._keyUp), b.attr("disabled") && this.disable(b[0]))
        },
        options: function (b, c) {
            var d = a.data(b, this.dataName);
            return d ? c ? c == "all" ? d.settings : d.settings[c] : a.datepick._defaults : {}
        },
        option: function (b, d, e) {
            b = a(b);
            if (!b.hasClass(this.markerClass)) return;
            d = d || {};
            if (typeof d == "string") {
                var f = d;
                d = {}, d[f] = e
            }
            var g = a.data(b[0], this.dataName),
                h = g.selectedDates;
            c(g.settings, d), this.setDate(b[0], h, null, !1, !0), g.pickingRange = !1, g.drawDate = a.datepick.newDate(this._checkMinMax((d.defaultDate ? g.get("defaultDate") : g.drawDate) || g.get("defaultDate") || a.datepick.today(), g)), g.inline || this._attachments(b, g), (g.inline || g.div) && this._update(b[0])
        },
        _attachments: function (b, c) {
            b.unbind("focus." + this.dataName), c.get("showOnFocus") && b.bind("focus." + this.dataName, this.show), c.trigger && c.trigger.remove();
            var d = c.get("showTrigger");
            c.trigger = d ? a(d).clone().removeAttr("id").addClass(this._triggerClass)[c.get("isRTL") ? "insertBefore" : "insertAfter"](b).click(function () {
                a.datepick.isDisabled(b[0]) || a.datepick[a.datepick.curInst == c ? "hide" : "show"](b[0])
            }) : a([]), this._autoSize(b, c);
            var e = this._extractDates(c, b.val());
            e && this.setDate(b[0], e, null, !0), c.get("selectDefaultDate") && c.get("defaultDate") && c.selectedDates.length == 0 && this.setDate(b[0], a.datepick.newDate(c.get("defaultDate") || a.datepick.today()))
        },
        _autoSize: function (b, c) {
            if (c.get("autoSize") && !c.inline) {
                var d = a.datepick.newDate(2009, 10, 20),
                    e = c.get("dateFormat");
                if (e.match(/[DM]/)) {
                    var f = function (a) {
                        var b = 0,
                            c = 0;
                        for (var d = 0; d < a.length; d++) a[d].length > b && (b = a[d].length, c = d);
                        return c
                    };
                    d.setMonth(f(c.get(e.match(/MM/) ? "monthNames" : "monthNamesShort"))), d.setDate(f(c.get(e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - d.getDay())
                }
                c.target.attr("size", a.datepick.formatDate(e, d, c.getConfig()).length)
            }
        },
        destroy: function (b) {
            b = a(b);
            if (!b.hasClass(this.markerClass)) return;
            var c = a.data(b[0], this.dataName);
            c.trigger && c.trigger.remove(), b.removeClass(this.markerClass).empty().unbind("." + this.dataName), c.inline && a.fn.mousewheel && b.unmousewheel(), !c.inline && c.get("autoSize") && b.removeAttr("size"), a.removeData(b[0], this.dataName)
        },
        multipleEvents: function (a) {
            var b = arguments;
            return function (a) {
                for (var c = 0; c < b.length; c++) b[c].apply(this, arguments)
            }
        },
        enable: function (b) {
            var c = a(b);
            if (!c.hasClass(this.markerClass)) return;
            var d = a.data(b, this.dataName);
            d.inline ? c.children("." + this._disableClass).remove().end().find("button,select").attr("disabled", "").end().find("a").attr("href", "javascript:void(0)") : (b.disabled = !1, d.trigger.filter("button." + this._triggerClass).attr("disabled", "").end().filter("img." + this._triggerClass).css({
                opacity: "1.0",
                cursor: ""
            })), this._disabled = a.map(this._disabled, function (a) {
                return a == b ? null : a
            })
        },
        disable: function (b) {
            var c = a(b);
            if (!c.hasClass(this.markerClass)) return;
            var d = a.data(b, this.dataName);
            if (d.inline) {
                var e = c.children(":last"),
                    f = e.offset(),
                    g = {
                        left: 0,
                        top: 0
                    };
                e.parents().each(function () {
                    if (a(this).css("position") == "relative") return g = a(this).offset(), !1
                });
                var h = c.css("zIndex");
                h = (h == "auto" ? 0 : parseInt(h, 10)) + 1, c.prepend('<div class="' + this._disableClass + '" style="' + "width: " + e.outerWidth() + "px; height: " + e.outerHeight() + "px; left: " + (f.left - g.left) + "px; top: " + (f.top - g.top) + "px; z-index: " + h + '"></div>').find("button,select").attr("disabled", "disabled").end().find("a").removeAttr("href")
            } else b.disabled = !0, d.trigger.filter("button." + this._triggerClass).attr("disabled", "disabled").end().filter("img." + this._triggerClass).css({
                opacity: "0.5",
                cursor: "default"
            });
            this._disabled = a.map(this._disabled, function (a) {
                return a == b ? null : a
            }), this._disabled.push(b)
        },
        isDisabled: function (b) {
            return b && a.inArray(b, this._disabled) > -1
        },
        show: function (b) {
            b = b.target || b;
            var c = a.data(b, a.datepick.dataName);
            if (a.datepick.curInst == c) return;
            a.datepick.curInst && a.datepick.hide(a.datepick.curInst, !0);
            if (c) {
                c.lastVal = null, c.selectedDates = a.datepick._extractDates(c, a(b).val()), c.pickingRange = !1, c.drawDate = a.datepick._checkMinMax(a.datepick.newDate(c.selectedDates[0] || c.get("defaultDate") || a.datepick.today()), c), c.prevDate = a.datepick.newDate(c.drawDate), a.datepick.curInst = c, a.datepick._update(b, !0);
                var d = a.datepick._checkOffset(c);
                c.div.css({
                    left: d.left,
                    top: d.top
                });
                var e = c.get("showAnim"),
                    f = c.get("showSpeed");
                f = f == "normal" && a.ui && a.ui.version >= "1.8" ? "_default" : f;
                var g = function () {
                    var b = c.div.find("." + a.datepick._coverClass);
                    if (b.length) {
                        var d = a.datepick._getBorders(c.div);
                        b.css({
                            left: -d[0],
                            top: -d[1],
                            width: c.div.outerWidth() + d[0],
                            height: c.div.outerHeight() + d[1]
                        })
                    }
                };
                if (a.effects && a.effects[e]) {
                    var h = c.div.data();
                    for (var i in h) i.match(/^ec\.storage\./) && (h[i] = c._mainDiv.css(i.replace(/ec\.storage\./, "")));
                    c.div.data(h).show(e, c.get("showOptions"), f, g)
                } else c.div[e || "show"](e ? f : "", g);
                e || g()
            }
        },
        _extractDates: function (b, c) {
            if (c == b.lastVal) return;
            b.lastVal = c;
            var d = b.get("dateFormat"),
                e = b.get("multiSelect"),
                f = b.get("rangeSelect");
            c = c.split(e ? b.get("multiSeparator") : f ? b.get("rangeSeparator") : "\0");
            var g = [];
            for (var h = 0; h < c.length; h++) try {
                var i = a.datepick.parseDate(d, c[h], b.getConfig());
                if (i) {
                    var j = !1;
                    for (var k = 0; k < g.length; k++)
                        if (g[k].getTime() == i.getTime()) {
                            j = !0;
                            break
                        }
                    j || g.push(i)
                }
            } catch (l) {}
            return g.splice(e || (f ? 2 : 1), g.length), f && g.length == 1 && (g[1] = g[0]), g
        },
        _update: function (b, c) {
            b = a(b.target || b);
            var d = a.data(b[0], a.datepick.dataName);
            if (d) {
                if (d.inline || a.datepick.curInst == d) {
                    var e = d.get("onChangeMonthYear");
                    e && (!d.prevDate || d.prevDate.getFullYear() != d.drawDate.getFullYear() || d.prevDate.getMonth() != d.drawDate.getMonth()) && e.apply(b[0], [d.drawDate.getFullYear(), d.drawDate.getMonth() + 1])
                }
                d.inline ? b.html(this._generateContent(b[0], d)) : a.datepick.curInst == d && (d.div || (d.div = a("<div></div>").addClass(this._popupClass).css({
                    display: c ? "none" : "static",
                    position: "absolute",
                    left: b.offset().left,
                    top: b.offset().top + b.outerHeight()
                }).appendTo(a(d.get("popupContainer") || "body")), a.fn.mousewheel && d.div.mousewheel(this._doMouseWheel)), d.div.html(this._generateContent(b[0], d)), b.focus())
            }
        },
        _updateInput: function (b, c) {
            var d = a.data(b, this.dataName);
            if (d) {
                var e = "",
                    f = "",
                    g = d.get("multiSelect") ? d.get("multiSeparator") : d.get("rangeSeparator"),
                    h = d.get("dateFormat"),
                    i = d.get("altFormat") || h;
                for (var j = 0; j < d.selectedDates.length; j++) e += c ? "" : (j > 0 ? g : "") + a.datepick.formatDate(h, d.selectedDates[j], d.getConfig()), f += (j > 0 ? g : "") + a.datepick.formatDate(i, d.selectedDates[j], d.getConfig());
                !d.inline && !c && a(b).val(e), a(d.get("altField")).val(f);
                var k = d.get("onSelect");
                k && !c && !d.inSelect && (d.inSelect = !0, k.apply(b, [d.selectedDates]), d.inSelect = !1)
            }
        },
        _getBorders: function (b) {
            var c = function (b) {
                var c = a.browser.msie ? 1 : 0;
                return {
                    thin: 1 + c,
                    medium: 3 + c,
                    thick: 5 + c
                }[b] || b
            };
            return [parseFloat(c(b.css("border-left-width"))), parseFloat(c(b.css("border-top-width")))]
        },
        _checkOffset: function (b) {
            var c = b.target.is(":hidden") && b.trigger ? b.trigger : b.target,
                d = c.offset(),
                e = !1;
            a(b.target).parents().each(function () {
                return e |= a(this).css("position") == "fixed", !e
            }), e && a.browser.opera && (d.left -= document.documentElement.scrollLeft, d.top -= document.documentElement.scrollTop);
            var f = (!a.browser.mozilla || document.doctype ? document.documentElement.clientWidth : 0) || document.body.clientWidth,
                g = (!a.browser.mozilla || document.doctype ? document.documentElement.clientHeight : 0) || document.body.clientHeight;
            if (f == 0) return d;
            var h = b.get("alignment"),
                i = b.get("isRTL"),
                j = document.documentElement.scrollLeft || document.body.scrollLeft,
                k = document.documentElement.scrollTop || document.body.scrollTop,
                l = d.top - b.div.outerHeight() - (e && a.browser.opera ? document.documentElement.scrollTop : 0),
                m = d.top + c.outerHeight(),
                n = d.left,
                o = d.left + c.outerWidth() - b.div.outerWidth() - (e && a.browser.opera ? document.documentElement.scrollLeft : 0),
                p = d.left + b.div.outerWidth() - j > f,
                q = d.top + b.target.outerHeight() + b.div.outerHeight() - k > g;
            return h == "topLeft" ? d = {
                left: n,
                top: l
            } : h == "topRight" ? d = {
                left: o,
                top: l
            } : h == "bottomLeft" ? d = {
                left: n,
                top: m
            } : h == "bottomRight" ? d = {
                left: o,
                top: m
            } : h == "top" ? d = {
                left: i || p ? o : n,
                top: l
            } : d = {
                left: i || p ? o : n,
                top: q ? l : m
            }, d.left = Math.max(e ? 0 : j, d.left - (e ? j : 0)), d.top = Math.max(e ? 0 : k, d.top - (e ? k : 0)), d
        },
        _checkExternalClick: function (b) {
            if (!a.datepick.curInst) return;
            var c = a(b.target);
            !c.parents().andSelf().hasClass(a.datepick._popupClass) && !c.hasClass(a.datepick.markerClass) && !c.parents().andSelf().hasClass(a.datepick._triggerClass) && a.datepick.hide(a.datepick.curInst)
        },
        hide: function (b, c) {
            var d = a.data(b, this.dataName) || b;
            if (d && d == a.datepick.curInst) {
                var e = c ? "" : d.get("showAnim"),
                    f = d.get("showSpeed");
                f = f == "normal" && a.ui && a.ui.version >= "1.8" ? "_default" : f;
                var g = function () {
                    d.div.remove(), d.div = null, a.datepick.curInst = null;
                    var c = d.get("onClose");
                    c && c.apply(b, [d.selectedDates])
                };
                d.div.stop();
                if (a.effects && a.effects[e]) d.div.hide(e, d.get("showOptions"), f, g);
                else {
                    var h = e == "slideDown" ? "slideUp" : e == "fadeIn" ? "fadeOut" : "hide";
                    d.div[h](e ? f : "", g)
                }
                e || g()
            }
        },
        _keyDown: function (b) {
            var c = b.target,
                d = a.data(c, a.datepick.dataName),
                e = !1;
            if (d.div)
                if (b.keyCode == 9) a.datepick.hide(c);
                else if (b.keyCode == 13) a.datepick.selectDate(c, a("a." + d.get("renderer").highlightedClass, d.div)[0]), e = !0;
            else {
                var f = d.get("commands");
                for (var g in f) {
                    var h = f[g];
                    if (h.keystroke.keyCode == b.keyCode && !! h.keystroke.ctrlKey == !! (b.ctrlKey || b.metaKey) && !! h.keystroke.altKey == b.altKey && !! h.keystroke.shiftKey == b.shiftKey) {
                        a.datepick.performAction(c, g), e = !0;
                        break
                    }
                }
            } else {
                var h = d.get("commands").current;
                h.keystroke.keyCode == b.keyCode && !! h.keystroke.ctrlKey == !! (b.ctrlKey || b.metaKey) && !! h.keystroke.altKey == b.altKey && !! h.keystroke.shiftKey == b.shiftKey && (a.datepick.show(c), e = !0)
            }
            return d.ctrlKey = b.keyCode < 48 && b.keyCode != 32 || b.ctrlKey || b.metaKey, e && (b.preventDefault(), b.stopPropagation()), !e
        },
        _keyPress: function (b) {
            var c = b.target,
                d = a.data(c, a.datepick.dataName);
            if (d && d.get("constrainInput")) {
                var e = String.fromCharCode(b.keyCode || b.charCode),
                    f = a.datepick._allowedChars(d);
                return b.metaKey || d.ctrlKey || e < " " || !f || f.indexOf(e) > -1
            }
            return !0
        },
        _allowedChars: function (a) {
            var b = a.get("dateFormat"),
                c = a.get("multiSelect") ? a.get("multiSeparator") : a.get("rangeSelect") ? a.get("rangeSeparator") : "",
                d = !1,
                e = !1;
            for (var f = 0; f < b.length; f++) {
                var g = b.charAt(f);
                if (d) g == "'" && b.charAt(f + 1) != "'" ? d = !1 : c += g;
                else switch (g) {
                case "d":
                case "m":
                case "o":
                case "w":
                    c += e ? "" : "0123456789", e = !0;
                    break;
                case "y":
                case "@":
                case "!":
                    c += (e ? "" : "0123456789") + "-", e = !0;
                    break;
                case "J":
                    c += (e ? "" : "0123456789") + "-.", e = !0;
                    break;
                case "D":
                case "M":
                case "Y":
                    return null;
                case "'":
                    b.charAt(f + 1) == "'" ? c += "'" : d = !0;
                    break;
                default:
                    c += g
                }
            }
            return c
        },
        _keyUp: function (b) {
            var c = b.target,
                d = a.data(c, a.datepick.dataName);
            if (d && !d.ctrlKey && d.lastVal != d.target.val()) try {
                var e = a.datepick._extractDates(d, d.target.val());
                e.length > 0 && a.datepick.setDate(c, e, null, !0)
            } catch (b) {}
            return !0
        },
        _doMouseWheel: function (b, c) {
            var d = a.datepick.curInst && a.datepick.curInst.target[0] || a(b.target).closest("." + a.datepick.markerClass)[0];
            if (a.datepick.isDisabled(d)) return;
            var e = a.data(d, a.datepick.dataName);
            e.get("useMouseWheel") && (c = a.browser.opera ? -c : c, c = c < 0 ? -1 : 1, a.datepick.changeMonth(d, -e.get(b.ctrlKey ? "monthsToJump" : "monthsToStep") * c)), b.preventDefault()
        },
        clear: function (b) {
            var c = a.data(b, this.dataName);
            c && (c.selectedDates = [], this.hide(b), c.get("selectDefaultDate") && c.get("defaultDate") ? this.setDate(b, a.datepick.newDate(c.get("defaultDate") || a.datepick.today())) : this._updateInput(b))
        },
        getDate: function (b) {
            var c = a.data(b, this.dataName);
            return c ? c.selectedDates : []
        },
        setDate: function (b, c, d, e, f) {
            var g = a.data(b, this.dataName);
            if (g) {
                a.isArray(c) || (c = [c], d && c.push(d));
                var h = g.get("dateFormat"),
                    i = g.get("minDate"),
                    j = g.get("maxDate"),
                    k = g.selectedDates[0];
                g.selectedDates = [];
                for (var l = 0; l < c.length; l++) {
                    var m = a.datepick.determineDate(c[l], null, k, h, g.getConfig());
                    if (m && (!i || m.getTime() >= i.getTime()) && (!j || m.getTime() <= j.getTime())) {
                        var n = !1;
                        for (var o = 0; o < g.selectedDates.length; o++)
                            if (g.selectedDates[o].getTime() == m.getTime()) {
                                n = !0;
                                break
                            }
                        n || g.selectedDates.push(m)
                    }
                }
                var p = g.get("rangeSelect");
                g.selectedDates.splice(g.get("multiSelect") || (p ? 2 : 1), g.selectedDates.length);
                if (p) {
                    switch (g.selectedDates.length) {
                    case 1:
                        g.selectedDates[1] = g.selectedDates[0];
                        break;
                    case 2:
                        g.selectedDates[1] = g.selectedDates[0].getTime() > g.selectedDates[1].getTime() ? g.selectedDates[0] : g.selectedDates[1]
                    }
                    g.pickingRange = !1
                }
                g.prevDate = g.drawDate ? a.datepick.newDate(g.drawDate) : null, g.drawDate = this._checkMinMax(a.datepick.newDate(g.selectedDates[0] || g.get("defaultDate") || a.datepick.today()), g), f || (this._update(b), this._updateInput(b, e))
            }
        },
        isSelectable: function (b, c) {
            var d = a.data(b, this.dataName);
            return d ? (c = a.datepick.determineDate(c, d.selectedDates[0] || this.today(), null, d.get("dateFormat"), d.getConfig()), this._isSelectable(b, c, d.get("onDate"), d.get("minDate"), d.get("maxDate"))) : !1
        },
        _isSelectable: function (a, b, c, d, e) {
            var f = typeof c == "boolean" ? {
                selectable: c
            } : c ? c.apply(a, [b, !0]) : {};
            return f.selectable != 0 && (!d || b.getTime() >= d.getTime()) && (!e || b.getTime() <= e.getTime())
        },
        performAction: function (b, c) {
            var d = a.data(b, this.dataName);
            if (d && !this.isDisabled(b)) {
                var e = d.get("commands");
                e[c] && e[c].enabled.apply(b, [d]) && e[c].action.apply(b, [d])
            }
        },
        showMonth: function (b, c, d, e) {
            var f = a.data(b, this.dataName);
            if (f && (e != null || f.drawDate.getFullYear() != c || f.drawDate.getMonth() + 1 != d)) {
                f.prevDate = a.datepick.newDate(f.drawDate);
                var g = this._checkMinMax(c != null ? a.datepick.newDate(c, d, 1) : a.datepick.today(), f);
                f.drawDate = a.datepick.newDate(g.getFullYear(), g.getMonth() + 1, e != null ? e : Math.min(f.drawDate.getDate(), a.datepick.daysInMonth(g.getFullYear(), g.getMonth() + 1))), this._update(b)
            }
        },
        changeMonth: function (b, c) {
            var d = a.data(b, this.dataName);
            if (d) {
                var e = a.datepick.add(a.datepick.newDate(d.drawDate), c, "m");
                this.showMonth(b, e.getFullYear(), e.getMonth() + 1)
            }
        },
        changeDay: function (b, c) {
            var d = a.data(b, this.dataName);
            if (d) {
                var e = a.datepick.add(a.datepick.newDate(d.drawDate), c, "d");
                this.showMonth(b, e.getFullYear(), e.getMonth() + 1, e.getDate())
            }
        },
        _checkMinMax: function (b, c) {
            var d = c.get("minDate"),
                e = c.get("maxDate");
            return b = d && b.getTime() < d.getTime() ? a.datepick.newDate(d) : b, b = e && b.getTime() > e.getTime() ? a.datepick.newDate(e) : b, b
        },
        retrieveDate: function (b, c) {
            var d = a.data(b, this.dataName);
            return d ? this._normaliseDate(new Date(parseInt(c.className.replace(/^.*dp(-?\d+).*$/, "$1"), 10))) : null
        },
        selectDate: function (b, c) {
            var d = a.data(b, this.dataName);
            if (d && !this.isDisabled(b)) {
                var e = this.retrieveDate(b, c),
                    f = d.get("multiSelect"),
                    g = d.get("rangeSelect");
                if (f) {
                    var h = !1;
                    for (var i = 0; i < d.selectedDates.length; i++)
                        if (e.getTime() == d.selectedDates[i].getTime()) {
                            d.selectedDates.splice(i, 1), h = !0;
                            break
                        }!h && d.selectedDates.length < f && d.selectedDates.push(e)
                } else g ? (d.pickingRange ? d.selectedDates[1] = e : d.selectedDates = [e, e], d.pickingRange = !d.pickingRange) : d.selectedDates = [e];
                d.prevDate = a.datepick.newDate(e), this._updateInput(b), d.inline || d.pickingRange || d.selectedDates.length < (f || (g ? 2 : 1)) ? this._update(b) : this.hide(b)
            }
        },
        _generateContent: function (b, c) {
            var d = c.get("renderer"),
                e = c.get("monthsToShow");
            e = a.isArray(e) ? e : [1, e], c.drawDate = this._checkMinMax(c.drawDate || c.get("defaultDate") || a.datepick.today(), c);
            var f = a.datepick._applyMonthsOffset(a.datepick.newDate(c.drawDate), c),
                g = "";
            for (var h = 0; h < e[0]; h++) {
                var i = "";
                for (var j = 0; j < e[1]; j++) i += this._generateMonth(b, c, f.getFullYear(), f.getMonth() + 1, d, h == 0 && j == 0), a.datepick.add(f, 1, "m");
                g += this._prepare(d.monthRow, c).replace(/\{months\}/, i)
            }
            var k = this._prepare(d.picker, c).replace(/\{months\}/, g).replace(/\{weekHeader\}/g, this._generateDayHeaders(c, d)) + (a.browser.msie && parseInt(a.browser.version, 10) < 7 && !c.inline ? '<iframe src="javascript:void(0);" class="' + this._coverClass + '"></iframe>' : ""),
                l = c.get("commands"),
                m = c.get("commandsAsDateFormat"),
                n = function (e, f, g, h, i) {
                    if (k.indexOf("{" + e + ":" + h + "}") == -1) return;
                    var j = l[h],
                        n = m ? j.date.apply(b, [c]) : null;
                    k = k.replace(new RegExp("\\{" + e + ":" + h + "\\}", "g"), "<" + f + (j.status ? ' title="' + c.get(j.status) + '"' : "") + ' class="' + d.commandClass + " " + d.commandClass + "-" + h + " " + i + (j.enabled(c) ? "" : " " + d.disabledClass) + '">' + (n ? a.datepick.formatDate(c.get(j.text), n, c.getConfig()) : c.get(j.text)) + "</" + g + ">")
                };
            for (var o in l) n("button", 'button type="button"', "button", o, d.commandButtonClass), n("link", 'a href="javascript:void(0)"', "a", o, d.commandLinkClass);
            k = a(k);
            if (e[1] > 1) {
                var p = 0;
                a(d.monthSelector, k).each(function () {
                    var b = ++p % e[1];
                    a(this).addClass(b == 1 ? "first" : b == 0 ? "last" : "")
                })
            }
            var q = this;
            k.find(d.daySelector + " a").hover(function () {
                a("body").hasClass("desktop-browser") && a(this).addClass(d.highlightedClass)
            }, function () {
                (c.inline ? a(this).parents("." + q.markerClass) : c.div).find(d.daySelector + " a").removeClass(d.highlightedClass)
            }).on("mousedown", function (a) {
                a.preventDefault(), a.stopImmediatePropagation()
            }).on("tap", function (a) {
                a.stopImmediatePropagation(), q.selectDate(b, this)
            }).end().find("select." + this._monthYearClass + ":not(." + this._anyYearClass + ")").change(function () {
                var c = a(this).val().split("/");
                q.showMonth(b, parseInt(c[1], 10), parseInt(c[0], 10))
            }).end().find("select." + this._anyYearClass).click(function () {
                a(this).css("visibility", "hidden").next("input").css({
                    left: this.offsetLeft,
                    top: this.offsetTop,
                    width: this.offsetWidth,
                    height: this.offsetHeight
                }).show().focus()
            }).end().find("input." + q._monthYearClass).change(function () {
                try {
                    var d = parseInt(a(this).val(), 10);
                    d = isNaN(d) ? c.drawDate.getFullYear() : d, q.showMonth(b, d, c.drawDate.getMonth() + 1, c.drawDate.getDate())
                } catch (e) {
                    alert(e)
                }
            }).keydown(function (b) {
                b.keyCode == 13 ? a(b.target).change() : b.keyCode == 27 && (a(b.target).hide().prev("select").css("visibility", "visible"), c.target.focus())
            }), k.find("." + d.commandClass).click(function () {
                if (!a(this).hasClass(d.disabledClass)) {
                    var c = this.className.replace(new RegExp("^.*" + d.commandClass + "-([^ ]+).*$"), "$1");
                    a.datepick.performAction(b, c)
                }
            }), c.get("isRTL") && k.addClass(d.rtlClass), e[0] * e[1] > 1 && k.addClass(d.multiClass);
            var r = c.get("pickerClass");
            r && k.addClass(r), a("body").append(k);
            var s = 0;
            k.find(d.monthSelector).each(function () {
                s += a(this).outerWidth()
            }), k.width(s / e[0]);
            var t = c.get("onShow");
            return t && t.apply(b, [k, c]), k
        },
        _generateMonth: function (b, c, d, e, f, g) {
            var h = a.datepick.daysInMonth(d, e),
                i = c.get("monthsToShow");
            i = a.isArray(i) ? i : [1, i];
            var j = c.get("fixedWeeks") || i[0] * i[1] > 1,
                k = c.get("firstDay"),
                l = (a.datepick.newDate(d, e, 1).getDay() - k + 7) % 7,
                m = j ? 6 : Math.ceil((l + h) / 7),
                n = c.get("showOtherMonths"),
                o = c.get("selectOtherMonths") && n,
                p = c.get("dayStatus"),
                q = c.pickingRange ? c.selectedDates[0] : c.get("minDate"),
                r = c.get("maxDate"),
                s = c.get("rangeSelect"),
                t = c.get("onDate"),
                u = f.week.indexOf("{weekOfYear}") > -1,
                v = c.get("calculateWeek"),
                w = a.datepick.today(),
                x = a.datepick.newDate(d, e, 1);
            a.datepick.add(x, -l - (j && x.getDay() == k ? 7 : 0), "d");
            var y = x.getTime(),
                z = "";
            for (var A = 0; A < m; A++) {
                var B = u ? '<span class="dp' + y + '">' + (v ? v(x) : 0) + "</span>" : "",
                    C = "";
                for (var D = 0; D < 7; D++) {
                    var E = !1;
                    if (s && c.selectedDates.length > 0) E = x.getTime() >= c.selectedDates[0] && x.getTime() <= c.selectedDates[1];
                    else
                        for (var F = 0; F < c.selectedDates.length; F++)
                            if (c.selectedDates[F].getTime() == x.getTime()) {
                                E = !0;
                                break
                            } var G = t ? t.apply(b, [x, x.getMonth() + 1 == e]) : {}, H = (o || x.getMonth() + 1 == e) && this._isSelectable(b, x, G.selectable, q, r);
                    C += this._prepare(f.day, c).replace(/\{day\}/g, (H ? '<a href="javascript:void(0)"' : "<span") + ' class="dp' + y + " " + (G.dateClass || "") + (E && (o || x.getMonth() + 1 == e) ? " " + f.selectedClass : "") + (H ? " " + f.defaultClass : "") + ((x.getDay() || 7) < 6 ? "" : " " + f.weekendClass) + (x.getMonth() + 1 == e ? "" : " " + f.otherMonthClass) + (x.getTime() == w.getTime() && x.getMonth() + 1 == e ? " " + f.todayClass : "") + (x.getTime() == c.drawDate.getTime() && x.getMonth() + 1 == e ? " " + f.highlightedClass : "") + '"' + (G.title || p && H ? ' title="' + (G.title || a.datepick.formatDate(p, x, c.getConfig())) + '"' : "") + ">" + (n || x.getMonth() + 1 == e ? G.content || x.getDate() : "&nbsp;") + (H ? "</a>" : "</span>")), a.datepick.add(x, 1, "d"), y = x.getTime()
                }
                z += this._prepare(f.week, c).replace(/\{days\}/g, C).replace(/\{weekOfYear\}/g, B)
            }
            var I = this._prepare(f.month, c).match(/\{monthHeader(:[^\}]+)?\}/);
            I = I[0].length <= 13 ? "MM yyyy" : I[0].substring(13, I[0].length - 1), I = g ? this._generateMonthSelection(c, d, e, q, r, I, f) : a.datepick.formatDate(I, a.datepick.newDate(d, e, 1), c.getConfig());
            var J = this._prepare(f.weekHeader, c).replace(/\{days\}/g, this._generateDayHeaders(c, f));
            return this._prepare(f.month, c).replace(/\{monthHeader(:[^\}]+)?\}/g, I).replace(/\{weekHeader\}/g, J).replace(/\{weeks\}/g, z)
        },
        _generateDayHeaders: function (a, b) {
            var c = a.get("firstDay"),
                d = a.get("dayNames"),
                e = a.get("dayNamesMin"),
                f = "";
            for (var g = 0; g < 7; g++) {
                var h = (g + c) % 7;
                f += this._prepare(b.dayHeader, a).replace(/\{day\}/g, '<span class="' + this._curDoWClass + h + '" title="' + d[h] + '">' + e[h] + "</span>")
            }
            return f
        },
        _generateMonthSelection: function (b, c, d, e, f, g) {
            if (!b.get("changeMonth")) return a.datepick.formatDate(g, a.datepick.newDate(c, d, 1), b.getConfig());
            var h = b.get("monthNames" + (g.match(/mm/i) ? "" : "Short")),
                i = g.replace(/m+/i, "\\x2E").replace(/y+/i, "\\x2F"),
                j = '<select class="' + this._monthYearClass + '" title="' + b.get("monthStatus") + '">';
            for (var k = 1; k <= 12; k++)(!e || a.datepick.newDate(c, k, a.datepick.daysInMonth(c, k)).getTime() >= e.getTime()) && (!f || a.datepick.newDate(c, k, 1).getTime() <= f.getTime()) && (j += '<option value="' + k + "/" + c + '"' + (d == k ? ' selected="selected"' : "") + ">" + h[k - 1] + "</option>");
            j += "</select>", i = i.replace(/\\x2E/, j);
            var l = b.get("yearRange");
            if (l == "any") j = '<select class="' + this._monthYearClass + " " + this._anyYearClass + '" title="' + b.get("yearStatus") + '">' + "<option>" + c + "</option></select>" + '<input class="' + this._monthYearClass + " " + this._curMonthClass + d + '" value="' + c + '">';
            else {
                l = l.split(":");
                var m = a.datepick.today().getFullYear(),
                    n = l[0].match("c[+-].*") ? c + parseInt(l[0].substring(1), 10) : (l[0].match("[+-].*") ? m : 0) + parseInt(l[0], 10),
                    o = l[1].match("c[+-].*") ? c + parseInt(l[1].substring(1), 10) : (l[1].match("[+-].*") ? m : 0) + parseInt(l[1], 10);
                j = '<select class="' + this._monthYearClass + '" title="' + b.get("yearStatus") + '">', n = a.datepick.add(a.datepick.newDate(n + 1, 1, 1), -1, "d"), o = a.datepick.newDate(o, 1, 1);
                var p = function (a) {
                    a != 0 && (j += '<option value="' + d + "/" + a + '"' + (c == a ? ' selected="selected"' : "") + ">" + a + "</option>")
                };
                if (n.getTime() < o.getTime()) {
                    n = (e && e.getTime() > n.getTime() ? e : n).getFullYear(), o = (f && f.getTime() < o.getTime() ? f : o).getFullYear();
                    for (var q = n; q <= o; q++) p(q)
                } else {
                    n = (f && f.getTime() < n.getTime() ? f : n).getFullYear(), o = (e && e.getTime() > o.getTime() ? e : o).getFullYear();
                    for (var q = n; q >= o; q--) p(q)
                }
                j += "</select>"
            }
            return i = i.replace(/\\x2F/, j), i
        },
        _prepare: function (a, b) {
            var c = function (b, c) {
                for (;;) {
                    var d = a.indexOf("{" + b + ":start}");
                    if (d == -1) return;
                    var e = a.substring(d).indexOf("{" + b + ":end}");
                    e > -1 && (a = a.substring(0, d) + (c ? a.substr(d + b.length + 8, e - b.length - 8) : "") + a.substring(d + e + b.length + 6))
                }
            };
            c("inline", b.inline), c("popup", !b.inline);
            var d = /\{l10n:([^\}]+)\}/,
                e = null;
            while (e = d.exec(a)) a = a.replace(e[0], b.get(e[1]));
            return a
        }
    }), a.fn.datepick = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return a.inArray(b, ["getDate", "isDisabled", "isSelectable", "options", "retrieveDate"]) > -1 ? a.datepick[b].apply(a.datepick, [this[0]].concat(c)) : this.each(function () {
            typeof b == "string" ? a.datepick[b].apply(a.datepick, [this].concat(c)) : a.datepick._attachPicker(this, b || {})
        })
    }, a.datepick = new b, a(function () {
        a(document).mousedown(a.datepick._checkExternalClick).resize(function () {
            a.datepick.hide(a.datepick.curInst)
        })
    })
}(jQuery),
function (a) {
    function d(b) {
        var c = b || window.event,
            d = [].slice.call(arguments, 1),
            e = 0,
            f = !0,
            g = 0,
            h = 0;
        return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d)
    }
    var b = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks)
        for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener)
                for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
            else this.onmousewheel = d
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
            else this.onmousewheel = null
        }
    }, a.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
}(jQuery),
function () {
    function a(a, b) {
        function k(a, b) {
            return d.getComputedStyle || (d.getComputedStyle = function (a, b) {
                return this.el = a, this.getPropertyValue = function (b) {
                    var c = /(\-([a-z]){1})/g;
                    return b == "float" && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function () {
                        return arguments[2].toUpperCase()
                    })), a.currentStyle && a.currentStyle[b] ? a.currentStyle[b] : null
                }, this
            }), d.getComputedStyle(a, null).getPropertyValue(b)
        }

        function l(b) {
            var c = b || a.clientHeight,
                d = n(a);
            return Math.max(Math.floor(c / d), 0)
        }

        function m(b) {
            var c = n(a);
            return c * b
        }

        function n(a) {
            var b = k(a, "line-height");
            return b == "normal" && (b = parseInt(k(a, "font-size")) * 1.2), parseInt(b)
        }

        function s(b) {
            return b.lastChild.children && b.lastChild.children.length > 0 ? s(Array.prototype.slice.call(b.children).pop()) : !b.lastChild || !b.lastChild.nodeValue || b.lastChild.nodeValue == "" || b.lastChild.nodeValue == "…" ? (b.lastChild.parentNode.removeChild(b.lastChild), s(a)) : b.lastChild
        }

        function t(b, c) {
            function d() {
                o = e.splitOnChars.slice(0), p = o[0], q = null, r = null
            }
            if (!c) return;
            var f = b.nodeValue.replace(/…/, "");
            q || (o.length > 0 ? p = o.shift() : p = "", q = f.split(p)), q.length > 1 ? (r = q.pop(), u(b, q.join(p))) : q = null;
            if (q) {
                if (a.clientHeight <= c) {
                    if (!(o.length >= 0 && p != "")) return !1;
                    u(b, q.join(p) + p + r), q = null
                }
            } else p == "" && (u(b, ""), b = s(a), d());
            e.animate ? setTimeout(function () {
                t(b, c)
            }, e.animate === !0 ? 10 : e.animate) : t(b, c)
        }

        function u(a, b) {
            a.nodeValue = b + "…"
        }
        b = b || {};
        var c = this,
            d = window,
            e = {
                clamp: b.clamp || 2,
                useNativeClamp: typeof b.useNativeClamp != "undefined" ? b.useNativeClamp : !0,
                splitOnChars: b.splitOnChars || [".", "-", "–", "—", " "],
                animate: b.animate || !1
            }, f = a.style,
            g = a.innerHTML,
            h = typeof a.style.webkitLineClamp != "undefined",
            i = e.clamp,
            j = i.indexOf && (i.indexOf("px") > -1 || i.indexOf("em") > -1),
            o = e.splitOnChars.slice(0),
            p = o[0],
            q, r;
        i == "auto" ? i = l() : j && (i = l(parseInt(i)));
        if (h && e.useNativeClamp) f.overflow = "hidden", f.textOverflow = "ellipsis", f.webkitBoxOrient = "vertical", f.display = "-webkit-box", f.webkitLineClamp = i, j && (f.height = e.clamp + "px");
        else {
            var v = m(i);
            v <= a.clientHeight && t(s(a), v)
        }
    }
    window.$clamp = a
}(),
function () {
    $.fn.scrollTo = function (a, b, c) {
        var d;
        return typeof b == "function" && arguments_.length === 2 && (c = b, b = a), d = $.extend({
            scrollTarget: a,
            offsetTop: 50,
            duration: 500,
            easing: "swing"
        }, b), this.each(function () {
            var a, b, e;
            return a = $(this), b = typeof d.scrollTarget == "number" ? d.scrollTarget : $(d.scrollTarget), e = typeof b == "number" ? b : b.offset().top + a.scrollTop() - parseInt(d.offsetTop), a.animate({
                scrollTop: e
            }, parseInt(d.duration), d.easing, function () {
                if (typeof c == "function") return c.call(this)
            })
        })
    }
}.call(this), (!window.localStorage || !window.sessionStorage) && function () {
    var a = function (a) {
        function b(a, b, c) {
            var d, e;
            c ? (d = new Date, d.setTime(d.getTime() + c * 24 * 60 * 60 * 1e3), e = "; expires=" + d.toGMTString()) : e = "", document.cookie = a + "=" + b + e + "; path=/"
        }

        function c(a) {
            var b = a + "=",
                c = document.cookie.split(";"),
                d, e;
            for (d = 0; d < c.length; d++) {
                e = c[d];
                while (e.charAt(0) == " ") e = e.substring(1, e.length);
                if (e.indexOf(b) == 0) return e.substring(b.length, e.length)
            }
            return null
        }

        function d(c) {
            c = JSON.stringify(c), a == "session" ? window.name = c : b("localStorage", c, 365)
        }

        function e() {
            a == "session" ? window.name = "" : b("localStorage", "", 365)
        }

        function f() {
            var b = a == "session" ? window.name : c("localStorage");
            return b ? JSON.parse(b) : {}
        }

        function h() {
            var a = 0;
            for (var b in g) g.hasOwnProperty(b) && (a += 1);
            return a
        }
        var g = f();
        return {
            clear: function () {
                g = {}, e(), this.length = h()
            },
            getItem: function (a) {
                return a = encodeURIComponent(a), g[a] === undefined ? null : g[a]
            },
            key: function (a) {
                var b = 0;
                for (var c in g) {
                    if (b == a) return decodeURIComponent(c);
                    b++
                }
                return null
            },
            removeItem: function (a) {
                a = encodeURIComponent(a), delete g[a], d(g), this.length = h()
            },
            setItem: function (a, b) {
                a = encodeURIComponent(a), g[a] = String(b), d(g), this.length = h()
            },
            length: 0
        }
    };
    window.localStorage || (window.localStorage = new a("local")), window.sessionStorage || (window.sessionStorage = new a("session"))
}(),
function (a) {
    var b = "0.9.2",
        c = {
            isMsie: function () {
                var a = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
                return a ? parseInt(a[2], 10) : !1
            },
            isBlankString: function (a) {
                return !a || /^\s*$/.test(a)
            },
            escapeRegExChars: function (a) {
                return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            isString: function (a) {
                return typeof a == "string"
            },
            isNumber: function (a) {
                return typeof a == "number"
            },
            isArray: a.isArray,
            isFunction: a.isFunction,
            isObject: a.isPlainObject,
            isUndefined: function (a) {
                return typeof a == "undefined"
            },
            bind: a.proxy,
            bindAll: function (b) {
                var c;
                for (var d in b) a.isFunction(c = b[d]) && (b[d] = a.proxy(c, b))
            },
            indexOf: function (a, b) {
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b) return c;
                return -1
            },
            each: a.each,
            map: a.map,
            filter: a.grep,
            every: function (b, c) {
                var d = !0;
                return b ? (a.each(b, function (a, e) {
                    if (!(d = c.call(null, e, a, b))) return !1
                }), !! d) : d
            },
            some: function (b, c) {
                var d = !1;
                return b ? (a.each(b, function (a, e) {
                    if (d = c.call(null, e, a, b)) return !1
                }), !! d) : d
            },
            mixin: a.extend,
            getUniqueId: function () {
                var a = 0;
                return function () {
                    return a++
                }
            }(),
            defer: function (a) {
                setTimeout(a, 0)
            },
            debounce: function (a, b, c) {
                var d, e;
                return function () {
                    var f = this,
                        g = arguments,
                        h, i;
                    return h = function () {
                        d = null, c || (e = a.apply(f, g))
                    }, i = c && !d, clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
                }
            },
            throttle: function (a, b) {
                var c, d, e, f, g, h;
                return g = 0, h = function () {
                    g = new Date, e = null, f = a.apply(c, d)
                },
                function () {
                    var i = new Date,
                        j = b - (i - g);
                    return c = this, d = arguments, j <= 0 ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
                }
            },
            tokenizeQuery: function (b) {
                return a.trim(b).toLowerCase().split(/[\s]+/)
            },
            tokenizeText: function (b) {
                return a.trim(b).toLowerCase().split(/[\s\-_]+/)
            },
            getProtocol: function () {
                return location.protocol
            },
            noop: function () {}
        }, d = function () {
            var a = /\s+/;
            return {
                on: function (b, c) {
                    var d;
                    if (!c) return this;
                    this._callbacks = this._callbacks || {}, b = b.split(a);
                    while (d = b.shift()) this._callbacks[d] = this._callbacks[d] || [], this._callbacks[d].push(c);
                    return this
                },
                trigger: function (b, c) {
                    var d, e;
                    if (!this._callbacks) return this;
                    b = b.split(a);
                    while (d = b.shift())
                        if (e = this._callbacks[d])
                            for (var f = 0; f < e.length; f += 1) e[f].call(this, {
                                type: d,
                                data: c
                            });
                    return this
                }
            }
        }(),
        e = function () {
            function d(b) {
                (!b || !b.el) && a.error("EventBus initialized without el"), this.$el = a(b.el)
            }
            var b = "typeahead:";
            return c.mixin(d.prototype, {
                trigger: function (a) {
                    var c = [].slice.call(arguments, 1);
                    this.$el.trigger(b + a, c)
                }
            }), d
        }(),
        f = function () {
            function e(a) {
                this.prefix = ["__", a, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + this.prefix)
            }

            function f() {
                return (new Date).getTime()
            }

            function g(a) {
                return JSON.stringify(c.isUndefined(a) ? null : a)
            }

            function h(a) {
                return JSON.parse(a)
            }
            var a, b;
            try {
                a = window.localStorage
            } catch (d) {
                a = null
            }
            return a && window.JSON ? b = {
                _prefix: function (a) {
                    return this.prefix + a
                },
                _ttlKey: function (a) {
                    return this._prefix(a) + this.ttlKey
                },
                get: function (b) {
                    return this.isExpired(b) && this.remove(b), h(a.getItem(this._prefix(b)))
                },
                set: function (b, d, e) {
                    return c.isNumber(e) ? a.setItem(this._ttlKey(b), g(f() + e)) : a.removeItem(this._ttlKey(b)), a.setItem(this._prefix(b), g(d))
                },
                remove: function (b) {
                    return a.removeItem(this._ttlKey(b)), a.removeItem(this._prefix(b)), this
                },
                clear: function () {
                    var b, c, d = [],
                        e = a.length;
                    for (b = 0; b < e; b++)(c = a.key(b)).match(this.keyMatcher) && d.push(c.replace(this.keyMatcher, ""));
                    for (b = d.length; b--;) this.remove(d[b]);
                    return this
                },
                isExpired: function (b) {
                    var d = h(a.getItem(this._ttlKey(b)));
                    return c.isNumber(d) && f() > d ? !0 : !1
                }
            } : b = {
                get: c.noop,
                set: c.noop,
                remove: c.noop,
                clear: c.noop,
                isExpired: c.noop
            }, c.mixin(e.prototype, b), e
        }(),
        g = function () {
            function a(a) {
                c.bindAll(this), a = a || {}, this.sizeLimit = a.sizeLimit || 10, this.cache = {}, this.cachedKeysByAge = []
            }
            return c.mixin(a.prototype, {
                get: function (a) {
                    return this.cache[a]
                },
                set: function (a, b) {
                    var c;
                    this.cachedKeysByAge.length === this.sizeLimit && (c = this.cachedKeysByAge.shift(), delete this.cache[c]), this.cache[a] = b, this.cachedKeysByAge.push(a)
                }
            }), a
        }(),
        h = function () {
            function h(a) {
                c.bindAll(this), a = c.isString(a) ? {
                    url: a
                } : a, f = f || new g, e = c.isNumber(a.maxParallelRequests) ? a.maxParallelRequests : e || 6, this.url = a.url, this.wildcard = a.wildcard || "%QUERY", this.filter = a.filter, this.replace = a.replace, this.ajaxSettings = {
                    type: "get",
                    cache: a.cache,
                    timeout: a.timeout,
                    dataType: a.dataType || "json",
                    beforeSend: a.beforeSend
                }, this._get = (/^throttle$/i.test(a.rateLimitFn) ? c.throttle : c.debounce)(this._get, a.rateLimitWait || 300)
            }

            function i() {
                return b <= 0
            }

            function j() {
                b++
            }

            function k() {
                b--
            }

            function l() {
                return b < e
            }
            var b = 0,
                d = {}, e, f;
            return c.mixin(h.prototype, {
                _get: function (a, b) {
                    function d(d) {
                        var e = c.filter ? c.filter(d) : d;
                        b && b(e), f.set(a, d)
                    }
                    var c = this;
                    l() ? this._sendRequest(a).done(d) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
                },
                _sendRequest: function (b) {
                    function f() {
                        k(), d[b] = null, c.onDeckRequestArgs && (c._get.apply(c, c.onDeckRequestArgs), c.onDeckRequestArgs = null)
                    }
                    var c = this,
                        e = d[b];
                    return e || (j(), e = d[b] = a.ajax(b, this.ajaxSettings).always(f)), e
                },
                get: function (a, b) {
                    var d = this,
                        e = encodeURIComponent(a || ""),
                        g, h;
                    return b = b || c.noop, g = this.replace ? this.replace(this.url, e) : this.url.replace(this.wildcard, e), (h = f.get(g)) ? c.defer(function () {
                        b(d.filter ? d.filter(h) : h)
                    }) : this._get(g, b), !! h
                },
                noPendingRequests: function () {
                    return i()
                }
            }), h
        }(),
        i = function () {
            function e(b) {
                c.bindAll(this), c.isString(b.template) && !b.engine && a.error("no template engine specified"), !b.local && !b.prefetch && !b.remote && a.error("one of local, prefetch, or remote is required"), this.name = b.name || c.getUniqueId(), this.limit = b.limit || 5, this.minLength = b.minLength || 1, this.header = b.header, this.footer = b.footer, this.valueKey = b.valueKey || "value", this.template = g(b.template, b.engine, this.valueKey), this.closeOnBlur = typeof b.closeOnBlur != "undefined" ? b.closeOnBlur : !0, this.local = b.local, this.custom = b.custom, this.prefetch = b.prefetch, this.remote = b.remote, this.itemHash = {}, this.adjacencyList = {}, this.storage = b.name ? new f(b.name) : null
            }

            function g(a, b, d) {
                var e, f;
                return c.isFunction(a) ? e = a : c.isString(a) ? (f = b.compile(a), e = c.bind(f.render, f)) : e = function (a) {
                    return "<p>" + a[d] + "</p>"
                }, e
            }
            var d = {
                thumbprint: "thumbprint",
                protocol: "protocol",
                itemHash: "itemHash",
                adjacencyList: "adjacencyList"
            };
            return c.mixin(e.prototype, {
                _processLocalData: function (a) {
                    this._mergeProcessedData(this._processData(a))
                },
                _loadPrefetchData: function (e) {
                    function n(a) {
                        var b = e.filter ? e.filter(a) : a,
                            h = f._processData(b),
                            i = h.itemHash,
                            j = h.adjacencyList;
                        f.storage && (f.storage.set(d.itemHash, i, e.ttl), f.storage.set(d.adjacencyList, j, e.ttl), f.storage.set(d.thumbprint, g, e.ttl), f.storage.set(d.protocol, c.getProtocol(), e.ttl)), f._mergeProcessedData(h)
                    }
                    var f = this,
                        g = b + (e.thumbprint || ""),
                        h, i, j, k, l, m;
                    return this.storage && (h = this.storage.get(d.thumbprint), i = this.storage.get(d.protocol), j = this.storage.get(d.itemHash), k = this.storage.get(d.adjacencyList)), l = h !== g || i !== c.getProtocol(), e = c.isString(e) ? {
                        url: e
                    } : e, e.ttl = c.isNumber(e.ttl) ? e.ttl : 864e5, j && k && !l ? (this._mergeProcessedData({
                        itemHash: j,
                        adjacencyList: k
                    }), m = a.Deferred().resolve()) : m = a.getJSON(e.url).done(n), m
                },
                _transformDatum: function (a) {
                    var b = c.isString(a) ? a : a[this.valueKey],
                        d = a.tokens || c.tokenizeText(b),
                        e = {
                            value: b,
                            tokens: d
                        };
                    return c.isString(a) ? (e.datum = {}, e.datum[this.valueKey] = a) : e.datum = a, e.tokens = c.filter(e.tokens, function (a) {
                        return !c.isBlankString(a)
                    }), e.tokens = c.map(e.tokens, function (a) {
                        return a.toLowerCase()
                    }), e
                },
                _processData: function (a) {
                    var b = this,
                        d = {}, e = {};
                    return c.each(a, function (a, f) {
                        var g = b._transformDatum(f),
                            h = c.getUniqueId(g.value);
                        d[h] = g, c.each(g.tokens, function (a, b) {
                            var d = b.charAt(0),
                                f = e[d] || (e[d] = [h]);
                            !~c.indexOf(f, h) && f.push(h)
                        })
                    }), {
                        itemHash: d,
                        adjacencyList: e
                    }
                },
                _mergeProcessedData: function (a) {
                    var b = this;
                    c.mixin(this.itemHash, a.itemHash), c.each(a.adjacencyList, function (a, c) {
                        var d = b.adjacencyList[a];
                        b.adjacencyList[a] = d ? d.concat(c) : c
                    })
                },
                _getLocalSuggestions: function (a) {
                    var b = this,
                        d = [],
                        e = [],
                        f, g = [];
                    return c.each(a, function (a, b) {
                        var e = b.charAt(0);
                        !~c.indexOf(d, e) && d.push(e)
                    }), c.each(d, function (a, c) {
                        var d = b.adjacencyList[c];
                        if (!d) return !1;
                        e.push(d);
                        if (!f || d.length < f.length) f = d
                    }), e.length < d.length ? [] : (c.each(f, function (d, f) {
                        var h = b.itemHash[f],
                            i, j;
                        i = c.every(e, function (a) {
                            return~ c.indexOf(a, f)
                        }), j = i && c.every(a, function (a) {
                            return c.some(h.tokens, function (b) {
                                return b.indexOf(a) === 0
                            })
                        }), j && g.push(h)
                    }), g)
                },
                initialize: function () {
                    var b;
                    return this.local && this._processLocalData(this.local), this.transport = this.remote ? new h(this.remote) : null, b = this.prefetch ? this._loadPrefetchData(this.prefetch) : a.Deferred().resolve(), this.local = this.prefetch = this.remote = null, this.initialize = function () {
                        return b
                    }, b
                },
                getSuggestions: function (a, b) {
                    function i(a) {
                        f = f.slice(0), c.each(a, function (a, b) {
                            var e = d._transformDatum(b),
                                g;
                            return g = c.some(f, function (a) {
                                return e.value === a.value
                            }), !g && f.push(e), f.length < d.limit
                        }), b && b(f)
                    }
                    var d = this,
                        e, f, g = !1;
                    if (b && this.custom) {
                        var h = c.map(this._processData(this.custom(a) || []).itemHash, function (a, b) {
                            return a
                        });
                        if (h.length) return b(h), !0
                    }
                    if (a.length < this.minLength) return !0;
                    e = c.tokenizeQuery(a), f = this._getLocalSuggestions(e).slice(0, this.limit), f.length < this.limit && this.transport && (g = this.transport.get(a, i)), !g && b && b(f, !0)
                }
            }), e
        }(),
        j = function () {
            function b(b) {
                var d = this;
                c.bindAll(this), this.specialKeyCodeMap = {
                    9: "tab",
                    27: "esc",
                    37: "left",
                    39: "right",
                    13: "enter",
                    38: "up",
                    40: "down"
                }, this.$hint = a(b.hint), this.$input = a(b.input).on("blur.tt", this._handleBlur).on("focus.tt", this._handleFocus).on("keydown.tt", this._handleSpecialKeyEvent), c.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (a) {
                    if (d.specialKeyCodeMap[a.which || a.keyCode]) return;
                    c.defer(d._compareQueryToInputValue)
                }) : this.$input.on("input.tt", this._compareQueryToInputValue), this.query = this.$input.val(), this.$overflowHelper = e(this.$input)
            }

            function e(b) {
                return a("<span></span>").css({
                    position: "absolute",
                    left: "-9999px",
                    visibility: "hidden",
                    whiteSpace: "nowrap",
                    fontFamily: b.css("font-family"),
                    fontSize: b.css("font-size"),
                    fontStyle: b.css("font-style"),
                    fontVariant: b.css("font-variant"),
                    fontWeight: b.css("font-weight"),
                    wordSpacing: b.css("word-spacing"),
                    letterSpacing: b.css("letter-spacing"),
                    textIndent: b.css("text-indent"),
                    textRendering: b.css("text-rendering"),
                    textTransform: b.css("text-transform")
                }).insertAfter(b)
            }

            function f(a, b) {
                return a = (a || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "), b = (b || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "), a === b
            }
            return c.mixin(b.prototype, d, {
                _handleFocus: function () {
                    this.trigger("focused")
                },
                _handleBlur: function () {
                    this.trigger("blured")
                },
                _handleSpecialKeyEvent: function (a) {
                    var b = this.specialKeyCodeMap[a.which || a.keyCode];
                    b && this.trigger(b + "Keyed", a)
                },
                _compareQueryToInputValue: function () {
                    var a = this.getInputValue(),
                        b = f(this.query, a),
                        c = b ? this.query.length !== a.length : !1;
                    c ? this.trigger("whitespaceChanged", {
                        value: this.query
                    }) : b || this.trigger("queryChanged", {
                        value: this.query = a
                    })
                },
                destroy: function () {
                    this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
                },
                focus: function () {
                    this.$input.focus()
                },
                blur: function () {
                    this.$input.blur()
                },
                getQuery: function () {
                    return this.query
                },
                setQuery: function (a) {
                    this.query = a
                },
                getInputValue: function () {
                    return this.$input.val()
                },
                setInputValue: function (a, b) {
                    this.$input.val(a), !b && this._compareQueryToInputValue()
                },
                getHintValue: function () {
                    return this.$hint.val()
                },
                setHintValue: function (a) {
                    this.$hint.val(a)
                },
                getLanguageDirection: function () {
                    return (this.$input.css("direction") || "ltr").toLowerCase()
                },
                isOverflow: function () {
                    return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() > this.$input.width()
                },
                isCursorAtEnd: function () {
                    var a = this.$input.val().length,
                        b = this.$input[0].selectionStart,
                        d;
                    return c.isNumber(b) ? b === a : document.selection ? (d = document.selection.createRange(), d.moveStart("character", -a), a === d.text.length) : !0
                }
            }), b
        }(),
        k = function () {
            function f(b) {
                c.bindAll(this), this.isOpen = !1, this.isEmpty = !0, this.isMouseOverDropdown = !1, this.o = b.opts[0], this.$menu = a(b.menu).on("mouseenter.tt", this._handleMouseenter).on("mouseleave.tt", this._handleMouseleave).on("tap.tt", ".tt-suggestion", this._handleSelection).on("mouseover.tt", ".tt-suggestion", this._handleMouseover)
            }

            function g(a) {
                return a.data("suggestion")
            }
            var b = {
                suggestionsList: '<span class="tt-suggestions"></span>'
            }, e = {
                    suggestionsList: {
                        display: "block"
                    },
                    suggestion: {
                        whiteSpace: "nowrap",
                        cursor: "pointer"
                    },
                    suggestionChild: {
                        whiteSpace: "normal"
                    }
                };
            return c.mixin(f.prototype, d, {
                _handleMouseenter: function () {
                    this.isMouseOverDropdown = !0
                },
                _handleMouseleave: function () {
                    this.isMouseOverDropdown = !1
                },
                _handleMouseover: function (b) {
                    var c = a(b.currentTarget);
                    this._getSuggestions().removeClass("tt-is-under-cursor"), c.addClass("tt-is-under-cursor")
                },
                _handleSelection: function (b) {
                    var c = a(b.currentTarget);
                    this.trigger("suggestionSelected", g(c))
                },
                _show: function () {
                    this.$menu.css("display", "block")
                },
                _hide: function () {
                    this.$menu.hide()
                },
                _moveCursor: function (a) {
                    var b, c, d, e;
                    if (!this.isVisible()) return;
                    b = this._getSuggestions(), c = b.filter(".tt-is-under-cursor"), c.removeClass("tt-is-under-cursor"), d = b.index(c) + a, d = (d + 1) % (b.length + 1) - 1;
                    if (d === -1) {
                        this.trigger("cursorRemoved");
                        return
                    }
                    d < -1 && (d = b.length - 1), e = b.eq(d).addClass("tt-is-under-cursor"), this.trigger("cursorMoved", g(e))
                },
                _getSuggestions: function () {
                    return this.$menu.find(".tt-suggestions > .tt-suggestion")
                },
                destroy: function () {
                    this.$menu.off(".tt"), this.$menu = null
                },
                isVisible: function () {
                    return this.isOpen && !this.isEmpty
                },
                closeUnlessMouseIsOverDropdown: function () {
                    this.isMouseOverDropdown || this.close()
                },
                close: function () {
                    this.isOpen && this.o.closeOnBlur && (this.isOpen = !1, this._hide(), this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor"), this.trigger("closed"))
                },
                open: function () {
                    this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
                },
                setLanguageDirection: function (a) {
                    var b = {
                        left: "0",
                        right: "auto"
                    }, c = {
                            left: "auto",
                            right: " 0"
                        };
                    a === "ltr" ? this.$menu.css(b) : this.$menu.css(c)
                },
                moveCursorUp: function () {
                    this._moveCursor(-1)
                },
                moveCursorDown: function () {
                    this._moveCursor(1)
                },
                getSuggestionUnderCursor: function () {
                    var a = this._getSuggestions().filter(".tt-is-under-cursor").first();
                    return a.length > 0 ? g(a) : null
                },
                getFirstSuggestion: function () {
                    var a = this._getSuggestions().first();
                    return a.length > 0 ? g(a) : null
                },
                renderSuggestions: function (d, f) {
                    var g = "tt-dataset-" + d.name,
                        h = '<div class="tt-suggestion">%body</div>',
                        i, j, k = this.$menu.find("." + g),
                        l, m, n;
                    k.length === 0 && (j = a(b.suggestionsList).css(e.suggestionsList), k = a("<div></div>").addClass(g).append(d.header).append(j).append(d.footer).appendTo(this.$menu)), f.length > 0 ? (this.isEmpty = !1, this.isOpen && this._show(), l = document.createElement("div"), m = document.createDocumentFragment(), c.each(f, function (b, c) {
                        i = d.template(c.datum), l.innerHTML = h.replace("%body", i), n = a(l.firstChild).css(e.suggestion).data("suggestion", c), n.children().each(function () {
                            a(this).css(e.suggestionChild)
                        }), m.appendChild(n[0])
                    }), k.show().find(".tt-suggestions").html(m)) : this.clearSuggestions(d.name), this.trigger("suggestionsRendered")
                },
                clearSuggestions: function (a) {
                    var b = a ? this.$menu.find(".tt-dataset-" + a) : this.$menu.find('[class^="tt-dataset-"]'),
                        c = b.find(".tt-suggestions");
                    b.hide(), c.empty(), this._getSuggestions().length === 0 && (this.isEmpty = !0, this._hide())
                }
            }), f
        }(),
        l = function () {
            function f(a) {
                var b, d, e;
                c.bindAll(this), this.$node = g(a.input), this.datasets = a.datasets, this.dir = null, this.eventBus = a.eventBus, b = this.$node.find(".tt-dropdown-menu"), d = this.$node.find(".tt-query"), e = this.$node.find(".tt-hint"), this.dropdownView = (new k({
                    menu: b,
                    opts: a.datasets
                })).on("suggestionSelected", this._handleSelection).on("cursorMoved", this._clearHint).on("cursorMoved", this._setInputValueToSuggestionUnderCursor).on("cursorRemoved", this._setInputValueToQuery).on("cursorRemoved", this._updateHint).on("suggestionsRendered", this._updateHint).on("opened", this._updateHint).on("closed", this._clearHint).on("opened closed suggestionsRendered", this._propagateEvent), this.inputView = (new j({
                    input: d,
                    hint: e
                })).on("focused", this._openDropdown).on("blured", this._closeDropdown).on("blured", this._setInputValueToQuery).on("enterKeyed", this._handleSelection).on("queryChanged", this._clearHint).on("queryChanged", this._clearSuggestions).on("queryChanged", this._getSuggestions).on("whitespaceChanged", this._updateHint).on("queryChanged whitespaceChanged", this._openDropdown).on("queryChanged whitespaceChanged", this._setLanguageDirection).on("escKeyed", this._closeDropdown).on("escKeyed", this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed", this._managePreventDefault).on("upKeyed downKeyed", this._moveDropdownCursor).on("upKeyed downKeyed", this._openDropdown).on("tabKeyed leftKeyed rightKeyed", this._autocomplete)
            }

            function g(c) {
                var d = a(b.wrapper),
                    f = a(b.dropdown),
                    g = a(c),
                    h = a(b.hint);
                d = d.css(e.wrapper), f = f.css(e.dropdown), h.css(e.hint).css({
                    backgroundAttachment: g.css("background-attachment"),
                    backgroundClip: g.css("background-clip"),
                    backgroundColor: g.css("background-color"),
                    backgroundImage: g.css("background-image"),
                    backgroundOrigin: g.css("background-origin"),
                    backgroundPosition: g.css("background-position"),
                    backgroundRepeat: g.css("background-repeat"),
                    backgroundSize: g.css("background-size")
                }), g.data("ttAttrs", {
                    dir: g.attr("dir"),
                    autocomplete: g.attr("autocomplete"),
                    spellcheck: g.attr("spellcheck"),
                    style: g.attr("style")
                }), g.addClass("tt-query").attr({
                    autocomplete: "off",
                    spellcheck: !1
                }).css(e.query);
                try {
                    !g.attr("dir") && g.attr("dir", "auto")
                } catch (i) {}
                return g.wrap(d).parent().prepend(h).append(f)
            }

            function h(a) {
                var b = a.find(".tt-query");
                c.each(b.data("ttAttrs"), function (a, d) {
                    c.isUndefined(d) ? b.removeAttr(a) : b.attr(a, d)
                }), b.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(a), a.remove()
            }
            var b = {
                wrapper: '<span class="twitter-typeahead"></span>',
                hint: '<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',
                dropdown: '<span class="tt-dropdown-menu"></span>'
            }, e = {
                    wrapper: {
                        position: "relative",
                        display: "inline-block"
                    },
                    hint: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderColor: "transparent",
                        boxShadow: "none"
                    },
                    query: {
                        position: "relative",
                        verticalAlign: "top",
                        backgroundColor: "transparent"
                    },
                    dropdown: {
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "100",
                        display: "none"
                    }
                };
            return c.isMsie() && c.mixin(e.query, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
            }), c.isMsie() && c.isMsie() <= 7 && (c.mixin(e.wrapper, {
                display: "inline",
                zoom: "1"
            }), c.mixin(e.query, {
                marginTop: "-1px"
            })), c.mixin(f.prototype, d, {
                _managePreventDefault: function (a) {
                    var b = a.data,
                        c, d, e = !1;
                    switch (a.type) {
                    case "tabKeyed":
                        c = this.inputView.getHintValue(), d = this.inputView.getInputValue(), e = c && c !== d;
                        break;
                    case "upKeyed":
                    case "downKeyed":
                        e = !b.shiftKey && !b.ctrlKey && !b.metaKey
                    }
                    e && b.preventDefault()
                },
                _setLanguageDirection: function () {
                    var a = this.inputView.getLanguageDirection();
                    a !== this.dir && (this.dir = a, this.$node.css("direction", a), this.dropdownView.setLanguageDirection(a))
                },
                _updateHint: function () {
                    var a = this.dropdownView.getFirstSuggestion(),
                        b = a ? a.value : null,
                        d = this.dropdownView.isVisible(),
                        e = this.inputView.isOverflow(),
                        f, g, h, i, j;
                    b && d && !e && (f = this.inputView.getInputValue(), g = f.replace(/\s{2,}/g, " ").replace(/^\s+/g, ""), h = c.escapeRegExChars(g), i = new RegExp("^(?:" + h + ")(.*$)", "i"), j = i.exec(b), this.inputView.setHintValue(f + (j ? j[1] : "")))
                },
                _clearHint: function () {
                    this.inputView.setHintValue("")
                },
                _clearSuggestions: function () {
                    this.dropdownView.clearSuggestions(), this.inputView.getQuery() == "" && this.eventBus.trigger("loaded")
                },
                _setInputValueToQuery: function () {
                    this.inputView.setInputValue(this.inputView.getQuery())
                },
                _setInputValueToSuggestionUnderCursor: function (a) {
                    var b = a.data;
                    this.inputView.setInputValue(b.value, !0)
                },
                _openDropdown: function () {
                    this.dropdownView.open()
                },
                _closeDropdown: function (a) {
                    this.dropdownView[a.type === "blured" ? "closeUnlessMouseIsOverDropdown" : "close"](), this.eventBus.trigger("loaded")
                },
                _moveDropdownCursor: function (a) {
                    var b = a.data;
                    !b.shiftKey && !b.ctrlKey && !b.metaKey && this.dropdownView[a.type === "upKeyed" ? "moveCursorUp" : "moveCursorDown"]()
                },
                _handleSelection: function (a) {
                    var b = a.type === "suggestionSelected",
                        d = b ? a.data : this.dropdownView.getSuggestionUnderCursor();
                    d && (this.inputView.setInputValue(d.value), b ? this.inputView.focus() : a.data.preventDefault(), b && c.isMsie() ? c.defer(this.dropdownView.close) : this.dropdownView.close(), this.eventBus.trigger("selected", d.datum))
                },
                _getSuggestions: function () {
                    var a = this,
                        b = this.inputView.getQuery();
                    c.each(this.datasets, function (c, d) {
                        var e = d.getSuggestions(b, function (c, e) {
                            b === a.inputView.getQuery() && (a.dropdownView.renderSuggestions(d, c), (c.length > 0 || d.transport.noPendingRequests()) && !e && a.eventBus.trigger("loaded"))
                        });
                        e || a.eventBus.trigger("loading")
                    })
                },
                _autocomplete: function (a) {
                    var b, c, d, e, f;
                    if (a.type === "rightKeyed" || a.type === "leftKeyed") {
                        b = this.inputView.isCursorAtEnd(), c = this.inputView.getLanguageDirection() === "ltr" ? a.type === "leftKeyed" : a.type === "rightKeyed";
                        if (!b || c) return
                    }
                    d = this.inputView.getQuery(), e = this.inputView.getHintValue(), e !== "" && d !== e && (f = this.dropdownView.getFirstSuggestion(), this.inputView.setInputValue(f.value), this.eventBus.trigger("autocompleted", f.datum))
                },
                _propagateEvent: function (a) {
                    this.eventBus.trigger(a.type)
                },
                destroy: function () {
                    this.inputView.destroy(), this.dropdownView.destroy(), h(this.$node), this.$node = null
                },
                setQuery: function (a) {
                    this.inputView.setQuery(a), this.inputView.setInputValue(a), this._clearHint(), this._clearSuggestions(), this._getSuggestions()
                }
            }), f
        }();
    (function () {
        var b = {}, d = "ttView",
            f;
        f = {
            initialize: function (f) {
                function h() {
                    var b = a(this),
                        f, h = new e({
                            el: b
                        });
                    f = c.map(g, function (a) {
                        return a.initialize()
                    }), b.data(d, new l({
                        input: b,
                        eventBus: h = new e({
                            el: b
                        }),
                        datasets: g
                    })), a.when.apply(a, f).always(function () {
                        c.defer(function () {
                            h.trigger("initialized")
                        })
                    })
                }
                var g;
                return f = c.isArray(f) ? f : [f], f.length === 0 && a.error("no datasets provided"), g = c.map(f, function (a) {
                    var c = b[a.name] ? b[a.name] : new i(a);
                    return a.name && (b[a.name] = c), c
                }), this.each(h)
            },
            destroy: function () {
                function b() {
                    var b = a(this),
                        c = b.data(d);
                    c && (c.destroy(), b.removeData(d))
                }
                return this.each(b)
            },
            setQuery: function (b) {
                function c() {
                    var c = a(this).data(d);
                    c && c.setQuery(b)
                }
                return this.each(c)
            }
        }, jQuery.fn.typeahead = function (a) {
            return f[a] ? f[a].apply(this, [].slice.call(arguments, 1)) : f.initialize.apply(this, arguments)
        }
    })()
}(window.jQuery),
function (a) {
    a.fn.zclip = function (b) {
        if (typeof b == "object" && !b.length) {
            var c = a.extend({
                path: "ZeroClipboard.swf",
                copy: null,
                beforeCopy: null,
                afterCopy: null,
                clickAfter: !0,
                setHandCursor: !0,
                setCSSEffects: !0
            }, b);
            return this.each(function () {
                var b = a(this);
                if (b.is(":visible") && (typeof c.copy == "string" || a.isFunction(c.copy))) {
                    ZeroClipboard.setMoviePath(c.path);
                    var d = new ZeroClipboard.Client;
                    a.isFunction(c.copy) && b.bind("zClip_copy", c.copy), a.isFunction(c.beforeCopy) && b.bind("zClip_beforeCopy", c.beforeCopy), a.isFunction(c.afterCopy) && b.bind("zClip_afterCopy", c.afterCopy), d.setHandCursor(c.setHandCursor), d.setCSSEffects(c.setCSSEffects), d.addEventListener("mouseOver", function (a) {
                        b.trigger("mouseenter")
                    }), d.addEventListener("mouseOut", function (a) {
                        b.trigger("mouseleave")
                    }), d.addEventListener("mouseDown", function (f) {
                        b.trigger("mousedown"), a.isFunction(c.copy) ? d.setText(b.triggerHandler("zClip_copy")) : d.setText(c.copy), a.isFunction(c.beforeCopy) && b.trigger("zClip_beforeCopy")
                    }), d.addEventListener("complete", function (d, f) {
                        a.isFunction(c.afterCopy) ? b.trigger("zClip_afterCopy") : (f.length > 500 && (f = f.substr(0, 500) + "...\n\n(" + (f.length - 500) + " characters not shown)"), b.removeClass("hover"), alert("Copied text to clipboard:\n\n " + f)), c.clickAfter && b.trigger("click")
                    }), d.glue(b[0], b.parent()[0]), a(window).bind("load resize", function () {
                        d.reposition()
                    })
                }
            })
        }
        if (typeof b == "string") return this.each(function () {
            var c = a(this);
            b = b.toLowerCase();
            var d = c.data("zclipId"),
                e = a("#" + d + ".zclip");
            b == "remove" ? (e.remove(), c.removeClass("active hover")) : b == "hide" ? (e.hide(), c.removeClass("active hover")) : b == "show" && e.show()
        })
    }
}(jQuery);
var ZeroClipboard = {
    version: "1.0.7",
    clients: {},
    moviePath: "ZeroClipboard.swf",
    nextId: 1,
    $: function (a) {
        return typeof a == "string" && (a = document.getElementById(a)), a.addClass || (a.hide = function () {
            this.style.display = "none"
        }, a.show = function () {
            this.style.display = ""
        }, a.addClass = function (a) {
            this.removeClass(a), this.className += " " + a
        }, a.removeClass = function (a) {
            var b = this.className.split(/\s+/),
                c = -1;
            for (var d = 0; d < b.length; d++) b[d] == a && (c = d, d = b.length);
            return c > -1 && (b.splice(c, 1), this.className = b.join(" ")), this
        }, a.hasClass = function (a) {
            return !!this.className.match(new RegExp("\\s*" + a + "\\s*"))
        }), a
    },
    setMoviePath: function (a) {
        this.moviePath = a
    },
    dispatch: function (a, b, c) {
        var d = this.clients[a];
        d && d.receiveEvent(b, c)
    },
    register: function (a, b) {
        this.clients[a] = b
    },
    getDOMObjectPosition: function (a, b) {
        var c = {
            left: 0,
            top: 0,
            width: a.width ? a.width : a.offsetWidth,
            height: a.height ? a.height : a.offsetHeight
        };
        return a && a != b && (c.left += a.offsetLeft, c.top += a.offsetTop), c
    },
    Client: function (a) {
        this.handlers = {}, this.id = ZeroClipboard.nextId++, this.movieId = "ZeroClipboardMovie_" + this.id, ZeroClipboard.register(this.id, this), a && this.glue(a)
    }
};
ZeroClipboard.Client.prototype = {
    id: 0,
    ready: !1,
    movie: null,
    clipText: "",
    handCursorEnabled: !0,
    cssEffects: !0,
    handlers: null,
    glue: function (a, b, c) {
        this.domElement = ZeroClipboard.$(a);
        var d = 99;
        this.domElement.style.zIndex && (d = parseInt(this.domElement.style.zIndex, 10) + 1), typeof b == "string" ? b = ZeroClipboard.$(b) : typeof b == "undefined" && (b = document.getElementsByTagName("body")[0]);
        var e = ZeroClipboard.getDOMObjectPosition(this.domElement, b);
        this.div = document.createElement("div"), this.div.className = "zclip", this.div.id = "zclip-" + this.movieId, $(this.domElement).data("zclipId", "zclip-" + this.movieId);
        var f = this.div.style;
        f.position = "absolute", f.left = "" + e.left + "px", f.top = "" + e.top + "px", f.width = "" + e.width + "px", f.height = "" + e.height + "px", f.zIndex = d;
        if (typeof c == "object")
            for (addedStyle in c) f[addedStyle] = c[addedStyle];
        b.appendChild(this.div), this.div.innerHTML = this.getHTML(e.width, e.height)
    },
    getHTML: function (a, b) {
        var c = "",
            d = "id=" + this.id + "&width=" + a + "&height=" + b;
        if (navigator.userAgent.match(/MSIE/)) {
            var e = location.href.match(/^https/i) ? "https://" : "http://";
            c += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + e + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + a + '" height="' + b + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + d + '"/><param name="wmode" value="transparent"/></object>'
        } else c += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + a + '" height="' + b + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + d + '" wmode="transparent" />';
        return c
    },
    hide: function () {
        this.div && (this.div.style.left = "-2000px")
    },
    show: function () {
        this.reposition()
    },
    destroy: function () {
        if (this.domElement && this.div) {
            this.hide(), this.div.innerHTML = "";
            var a = document.getElementsByTagName("body")[0];
            try {
                a.removeChild(this.div)
            } catch (b) {}
            this.domElement = null, this.div = null
        }
    },
    reposition: function (a) {
        a && (this.domElement = ZeroClipboard.$(a), this.domElement || this.hide());
        if (this.domElement && this.div) {
            var b = ZeroClipboard.getDOMObjectPosition(this.domElement),
                c = this.div.style;
            c.left = "" + b.left + "px", c.top = "" + b.top + "px"
        }
    },
    setText: function (a) {
        this.clipText = a, this.ready && this.movie.setText(a)
    },
    addEventListener: function (a, b) {
        a = a.toString().toLowerCase().replace(/^on/, ""), this.handlers[a] || (this.handlers[a] = []), this.handlers[a].push(b)
    },
    setHandCursor: function (a) {
        this.handCursorEnabled = a, this.ready && this.movie.setHandCursor(a)
    },
    setCSSEffects: function (a) {
        this.cssEffects = !! a
    },
    receiveEvent: function (a, b) {
        a = a.toString().toLowerCase().replace(/^on/, "");
        switch (a) {
        case "load":
            this.movie = document.getElementById(this.movieId);
            if (!this.movie) {
                var c = this;
                setTimeout(function () {
                    c.receiveEvent("load", null)
                }, 1);
                return
            }
            if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                var c = this;
                setTimeout(function () {
                    c.receiveEvent("load", null)
                }, 100), this.ready = !0;
                return
            }
            this.ready = !0;
            try {
                this.movie.setText(this.clipText)
            } catch (d) {}
            try {
                this.movie.setHandCursor(this.handCursorEnabled)
            } catch (d) {}
            break;
        case "mouseover":
            this.domElement && this.cssEffects && (this.domElement.addClass("hover"), this.recoverActive && this.domElement.addClass("active"));
            break;
        case "mouseout":
            this.domElement && this.cssEffects && (this.recoverActive = !1, this.domElement.hasClass("active") && (this.domElement.removeClass("active"), this.recoverActive = !0), this.domElement.removeClass("hover"));
            break;
        case "mousedown":
            this.domElement && this.cssEffects && this.domElement.addClass("active");
            break;
        case "mouseup":
            this.domElement && this.cssEffects && (this.domElement.removeClass("active"), this.recoverActive = !1)
        }
        if (this.handlers[a])
            for (var e = 0, f = this.handlers[a].length; e < f; e++) {
                var g = this.handlers[a][e];
                typeof g == "function" ? g(this, b) : typeof g == "object" && g.length == 2 ? g[0][g[1]](this, b) : typeof g == "string" && window[g](this, b)
            }
    }
},
function () {}.call(this);
