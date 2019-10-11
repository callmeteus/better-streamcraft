!function(t) {
    var e = {};
    function i(r) {
        if (e[r])
            return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    i.m = t,
    i.c = e,
    i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(t, e) {
        if (1 & e && (t = i(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (i.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var n in t)
                i.d(r, n, function(e) {
                    return t[e]
                }
                .bind(null, n));
        return r
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "//static-sc-us1.akamaized.net/",
    i(i.s = 30)
}([function(t, e, i) {
    var r, n, s;
    n = [i(21)],
    void 0 === (s = "function" == typeof (r = function(t) {
        "use strict";
        var e = function(t, i, n) {
            if (void 0 === t && (t = e.DEFAULT_CAPACITY),
            void 0 === i && (i = e.DEFAULT_ENDIAN),
            void 0 === n && (n = e.DEFAULT_NOASSERT),
            !n) {
                if ((t |= 0) < 0)
                    throw RangeError("Illegal capacity");
                i = !!i,
                n = !!n
            }
            this.buffer = 0 === t ? r : new ArrayBuffer(t),
            this.view = 0 === t ? null : new Uint8Array(this.buffer),
            this.offset = 0,
            this.markedOffset = -1,
            this.limit = t,
            this.littleEndian = i,
            this.noAssert = n
        };
        e.VERSION = "5.0.1",
        e.LITTLE_ENDIAN = !0,
        e.BIG_ENDIAN = !1,
        e.DEFAULT_CAPACITY = 16,
        e.DEFAULT_ENDIAN = e.BIG_ENDIAN,
        e.DEFAULT_NOASSERT = !1,
        e.Long = t || null;
        var i = e.prototype;
        i.__isByteBuffer__,
        Object.defineProperty(i, "__isByteBuffer__", {
            value: !0,
            enumerable: !1,
            configurable: !1
        });
        var r = new ArrayBuffer(0)
          , n = String.fromCharCode;
        function s(t) {
            var e = 0;
            return function() {
                return e < t.length ? t.charCodeAt(e++) : null
            }
        }
        function o() {
            var t = []
              , e = [];
            return function() {
                if (0 === arguments.length)
                    return e.join("") + n.apply(String, t);
                t.length + arguments.length > 1024 && (e.push(n.apply(String, t)),
                t.length = 0),
                Array.prototype.push.apply(t, arguments)
            }
        }
        function a(t, e, i, r, n) {
            var s, o, a = 8 * n - r - 1, h = (1 << a) - 1, f = h >> 1, l = -7, u = i ? n - 1 : 0, d = i ? -1 : 1, c = t[e + u];
            for (u += d,
            s = c & (1 << -l) - 1,
            c >>= -l,
            l += a; l > 0; s = 256 * s + t[e + u],
            u += d,
            l -= 8)
                ;
            for (o = s & (1 << -l) - 1,
            s >>= -l,
            l += r; l > 0; o = 256 * o + t[e + u],
            u += d,
            l -= 8)
                ;
            if (0 === s)
                s = 1 - f;
            else {
                if (s === h)
                    return o ? NaN : 1 / 0 * (c ? -1 : 1);
                o += Math.pow(2, r),
                s -= f
            }
            return (c ? -1 : 1) * o * Math.pow(2, s - r)
        }
        function h(t, e, i, r, n, s) {
            var o, a, h, f = 8 * s - n - 1, l = (1 << f) - 1, u = l >> 1, d = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, c = r ? 0 : s - 1, g = r ? 1 : -1, v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e),
            isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0,
            o = l) : (o = Math.floor(Math.log(e) / Math.LN2),
            e * (h = Math.pow(2, -o)) < 1 && (o--,
            h *= 2),
            (e += o + u >= 1 ? d / h : d * Math.pow(2, 1 - u)) * h >= 2 && (o++,
            h /= 2),
            o + u >= l ? (a = 0,
            o = l) : o + u >= 1 ? (a = (e * h - 1) * Math.pow(2, n),
            o += u) : (a = e * Math.pow(2, u - 1) * Math.pow(2, n),
            o = 0)); n >= 8; t[i + c] = 255 & a,
            c += g,
            a /= 256,
            n -= 8)
                ;
            for (o = o << n | a,
            f += n; f > 0; t[i + c] = 255 & o,
            c += g,
            o /= 256,
            f -= 8)
                ;
            t[i + c - g] |= 128 * v
        }
        e.accessor = function() {
            return Uint8Array
        }
        ,
        e.allocate = function(t, i, r) {
            return new e(t,i,r)
        }
        ,
        e.concat = function(t, i, r, n) {
            "boolean" != typeof i && "string" == typeof i || (n = r,
            r = i,
            i = void 0);
            for (var s, o = 0, a = 0, h = t.length; a < h; ++a)
                e.isByteBuffer(t[a]) || (t[a] = e.wrap(t[a], i)),
                (s = t[a].limit - t[a].offset) > 0 && (o += s);
            if (0 === o)
                return new e(0,r,n);
            var f, l = new e(o,r,n);
            for (a = 0; a < h; )
                (s = (f = t[a++]).limit - f.offset) <= 0 || (l.view.set(f.view.subarray(f.offset, f.limit), l.offset),
                l.offset += s);
            return l.limit = l.offset,
            l.offset = 0,
            l
        }
        ,
        e.isByteBuffer = function(t) {
            return !0 === (t && t.__isByteBuffer__)
        }
        ,
        e.type = function() {
            return ArrayBuffer
        }
        ,
        e.wrap = function(t, r, n, s) {
            if ("string" != typeof r && (s = n,
            n = r,
            r = void 0),
            "string" == typeof t)
                switch (void 0 === r && (r = "utf8"),
                r) {
                case "base64":
                    return e.fromBase64(t, n);
                case "hex":
                    return e.fromHex(t, n);
                case "binary":
                    return e.fromBinary(t, n);
                case "utf8":
                    return e.fromUTF8(t, n);
                case "debug":
                    return e.fromDebug(t, n);
                default:
                    throw Error("Unsupported encoding: " + r)
                }
            if (null === t || "object" != typeof t)
                throw TypeError("Illegal buffer");
            var o;
            if (e.isByteBuffer(t))
                return (o = i.clone.call(t)).markedOffset = -1,
                o;
            if (t instanceof Uint8Array)
                o = new e(0,n,s),
                t.length > 0 && (o.buffer = t.buffer,
                o.offset = t.byteOffset,
                o.limit = t.byteOffset + t.byteLength,
                o.view = new Uint8Array(t.buffer));
            else if (t instanceof ArrayBuffer)
                o = new e(0,n,s),
                t.byteLength > 0 && (o.buffer = t,
                o.offset = 0,
                o.limit = t.byteLength,
                o.view = t.byteLength > 0 ? new Uint8Array(t) : null);
            else {
                if ("[object Array]" !== Object.prototype.toString.call(t))
                    throw TypeError("Illegal buffer");
                (o = new e(t.length,n,s)).limit = t.length;
                for (var a = 0; a < t.length; ++a)
                    o.view[a] = t[a]
            }
            return o
        }
        ,
        i.writeBitSet = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if (!(t instanceof Array))
                    throw TypeError("Illegal BitSet: Not an array");
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            var r, n = e, s = t.length, o = s >> 3, a = 0;
            for (e += this.writeVarint32(s, e); o--; )
                r = 1 & !!t[a++] | (1 & !!t[a++]) << 1 | (1 & !!t[a++]) << 2 | (1 & !!t[a++]) << 3 | (1 & !!t[a++]) << 4 | (1 & !!t[a++]) << 5 | (1 & !!t[a++]) << 6 | (1 & !!t[a++]) << 7,
                this.writeByte(r, e++);
            if (a < s) {
                var h = 0;
                for (r = 0; a < s; )
                    r |= (1 & !!t[a++]) << h++;
                this.writeByte(r, e++)
            }
            return i ? (this.offset = e,
            this) : e - n
        }
        ,
        i.readBitSet = function(t) {
            var e = void 0 === t;
            e && (t = this.offset);
            var i, r = this.readVarint32(t), n = r.value, s = n >> 3, o = 0, a = [];
            for (t += r.length; s--; )
                i = this.readByte(t++),
                a[o++] = !!(1 & i),
                a[o++] = !!(2 & i),
                a[o++] = !!(4 & i),
                a[o++] = !!(8 & i),
                a[o++] = !!(16 & i),
                a[o++] = !!(32 & i),
                a[o++] = !!(64 & i),
                a[o++] = !!(128 & i);
            if (o < n) {
                var h = 0;
                for (i = this.readByte(t++); o < n; )
                    a[o++] = !!(i >> h++ & 1)
            }
            return e && (this.offset = t),
            a
        }
        ,
        i.readBytes = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + t > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+" + t + ") <= " + this.buffer.byteLength)
            }
            var r = this.slice(e, e + t);
            return i && (this.offset += t),
            r
        }
        ,
        i.writeBytes = i.append,
        i.writeInt8 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 1;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e),
            e -= 1,
            this.view[e] = t,
            i && (this.offset += 1),
            this
        }
        ,
        i.writeByte = i.writeInt8,
        i.readInt8 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
            }
            var i = this.view[t];
            return 128 == (128 & i) && (i = -(255 - i + 1)),
            e && (this.offset += 1),
            i
        }
        ,
        i.readByte = i.readInt8,
        i.writeUint8 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 1;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e),
            e -= 1,
            this.view[e] = t,
            i && (this.offset += 1),
            this
        }
        ,
        i.writeUInt8 = i.writeUint8,
        i.readUint8 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
            }
            var i = this.view[t];
            return e && (this.offset += 1),
            i
        }
        ,
        i.readUInt8 = i.readUint8,
        i.writeInt16 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 2;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e),
            e -= 2,
            this.littleEndian ? (this.view[e + 1] = (65280 & t) >>> 8,
            this.view[e] = 255 & t) : (this.view[e] = (65280 & t) >>> 8,
            this.view[e + 1] = 255 & t),
            i && (this.offset += 2),
            this
        }
        ,
        i.writeShort = i.writeInt16,
        i.readInt16 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength)
            }
            var i = 0;
            return this.littleEndian ? (i = this.view[t],
            i |= this.view[t + 1] << 8) : (i = this.view[t] << 8,
            i |= this.view[t + 1]),
            32768 == (32768 & i) && (i = -(65535 - i + 1)),
            e && (this.offset += 2),
            i
        }
        ,
        i.readShort = i.readInt16,
        i.writeUint16 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 2;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e),
            e -= 2,
            this.littleEndian ? (this.view[e + 1] = (65280 & t) >>> 8,
            this.view[e] = 255 & t) : (this.view[e] = (65280 & t) >>> 8,
            this.view[e + 1] = 255 & t),
            i && (this.offset += 2),
            this
        }
        ,
        i.writeUInt16 = i.writeUint16,
        i.readUint16 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength)
            }
            var i = 0;
            return this.littleEndian ? (i = this.view[t],
            i |= this.view[t + 1] << 8) : (i = this.view[t] << 8,
            i |= this.view[t + 1]),
            e && (this.offset += 2),
            i
        }
        ,
        i.readUInt16 = i.readUint16,
        i.writeInt32 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 4;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e),
            e -= 4,
            this.littleEndian ? (this.view[e + 3] = t >>> 24 & 255,
            this.view[e + 2] = t >>> 16 & 255,
            this.view[e + 1] = t >>> 8 & 255,
            this.view[e] = 255 & t) : (this.view[e] = t >>> 24 & 255,
            this.view[e + 1] = t >>> 16 & 255,
            this.view[e + 2] = t >>> 8 & 255,
            this.view[e + 3] = 255 & t),
            i && (this.offset += 4),
            this
        }
        ,
        i.writeInt = i.writeInt32,
        i.readInt32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
            }
            var i = 0;
            return this.littleEndian ? (i = this.view[t + 2] << 16,
            i |= this.view[t + 1] << 8,
            i |= this.view[t],
            i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16,
            i |= this.view[t + 2] << 8,
            i |= this.view[t + 3],
            i += this.view[t] << 24 >>> 0),
            i |= 0,
            e && (this.offset += 4),
            i
        }
        ,
        i.readInt = i.readInt32,
        i.writeUint32 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 4;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e),
            e -= 4,
            this.littleEndian ? (this.view[e + 3] = t >>> 24 & 255,
            this.view[e + 2] = t >>> 16 & 255,
            this.view[e + 1] = t >>> 8 & 255,
            this.view[e] = 255 & t) : (this.view[e] = t >>> 24 & 255,
            this.view[e + 1] = t >>> 16 & 255,
            this.view[e + 2] = t >>> 8 & 255,
            this.view[e + 3] = 255 & t),
            i && (this.offset += 4),
            this
        }
        ,
        i.writeUInt32 = i.writeUint32,
        i.readUint32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
            }
            var i = 0;
            return this.littleEndian ? (i = this.view[t + 2] << 16,
            i |= this.view[t + 1] << 8,
            i |= this.view[t],
            i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16,
            i |= this.view[t + 2] << 8,
            i |= this.view[t + 3],
            i += this.view[t] << 24 >>> 0),
            e && (this.offset += 4),
            i
        }
        ,
        i.readUInt32 = i.readUint32,
        t && (i.writeInt64 = function(e, i) {
            var r = void 0 === i;
            if (r && (i = this.offset),
            !this.noAssert) {
                if ("number" == typeof e)
                    e = t.fromNumber(e);
                else if ("string" == typeof e)
                    e = t.fromString(e);
                else if (!(e && e instanceof t))
                    throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                if ("number" != typeof i || i % 1 != 0)
                    throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
            }
            "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e)),
            i += 8;
            var n = this.buffer.byteLength;
            i > n && this.resize((n *= 2) > i ? n : i),
            i -= 8;
            var s = e.low
              , o = e.high;
            return this.littleEndian ? (this.view[i + 3] = s >>> 24 & 255,
            this.view[i + 2] = s >>> 16 & 255,
            this.view[i + 1] = s >>> 8 & 255,
            this.view[i] = 255 & s,
            i += 4,
            this.view[i + 3] = o >>> 24 & 255,
            this.view[i + 2] = o >>> 16 & 255,
            this.view[i + 1] = o >>> 8 & 255,
            this.view[i] = 255 & o) : (this.view[i] = o >>> 24 & 255,
            this.view[i + 1] = o >>> 16 & 255,
            this.view[i + 2] = o >>> 8 & 255,
            this.view[i + 3] = 255 & o,
            i += 4,
            this.view[i] = s >>> 24 & 255,
            this.view[i + 1] = s >>> 16 & 255,
            this.view[i + 2] = s >>> 8 & 255,
            this.view[i + 3] = 255 & s),
            r && (this.offset += 8),
            this
        }
        ,
        i.writeLong = i.writeInt64,
        i.readInt64 = function(e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
            }
            var r = 0
              , n = 0;
            this.littleEndian ? (r = this.view[e + 2] << 16,
            r |= this.view[e + 1] << 8,
            r |= this.view[e],
            r += this.view[e + 3] << 24 >>> 0,
            e += 4,
            n = this.view[e + 2] << 16,
            n |= this.view[e + 1] << 8,
            n |= this.view[e],
            n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16,
            n |= this.view[e + 2] << 8,
            n |= this.view[e + 3],
            n += this.view[e] << 24 >>> 0,
            e += 4,
            r = this.view[e + 1] << 16,
            r |= this.view[e + 2] << 8,
            r |= this.view[e + 3],
            r += this.view[e] << 24 >>> 0);
            var s = new t(r,n,!1);
            return i && (this.offset += 8),
            s
        }
        ,
        i.readLong = i.readInt64,
        i.writeUint64 = function(e, i) {
            var r = void 0 === i;
            if (r && (i = this.offset),
            !this.noAssert) {
                if ("number" == typeof e)
                    e = t.fromNumber(e);
                else if ("string" == typeof e)
                    e = t.fromString(e);
                else if (!(e && e instanceof t))
                    throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                if ("number" != typeof i || i % 1 != 0)
                    throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
            }
            "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e)),
            i += 8;
            var n = this.buffer.byteLength;
            i > n && this.resize((n *= 2) > i ? n : i),
            i -= 8;
            var s = e.low
              , o = e.high;
            return this.littleEndian ? (this.view[i + 3] = s >>> 24 & 255,
            this.view[i + 2] = s >>> 16 & 255,
            this.view[i + 1] = s >>> 8 & 255,
            this.view[i] = 255 & s,
            i += 4,
            this.view[i + 3] = o >>> 24 & 255,
            this.view[i + 2] = o >>> 16 & 255,
            this.view[i + 1] = o >>> 8 & 255,
            this.view[i] = 255 & o) : (this.view[i] = o >>> 24 & 255,
            this.view[i + 1] = o >>> 16 & 255,
            this.view[i + 2] = o >>> 8 & 255,
            this.view[i + 3] = 255 & o,
            i += 4,
            this.view[i] = s >>> 24 & 255,
            this.view[i + 1] = s >>> 16 & 255,
            this.view[i + 2] = s >>> 8 & 255,
            this.view[i + 3] = 255 & s),
            r && (this.offset += 8),
            this
        }
        ,
        i.writeUInt64 = i.writeUint64,
        i.readUint64 = function(e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
            }
            var r = 0
              , n = 0;
            this.littleEndian ? (r = this.view[e + 2] << 16,
            r |= this.view[e + 1] << 8,
            r |= this.view[e],
            r += this.view[e + 3] << 24 >>> 0,
            e += 4,
            n = this.view[e + 2] << 16,
            n |= this.view[e + 1] << 8,
            n |= this.view[e],
            n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16,
            n |= this.view[e + 2] << 8,
            n |= this.view[e + 3],
            n += this.view[e] << 24 >>> 0,
            e += 4,
            r = this.view[e + 1] << 16,
            r |= this.view[e + 2] << 8,
            r |= this.view[e + 3],
            r += this.view[e] << 24 >>> 0);
            var s = new t(r,n,!0);
            return i && (this.offset += 8),
            s
        }
        ,
        i.readUInt64 = i.readUint64),
        i.writeFloat32 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t)
                    throw TypeError("Illegal value: " + t + " (not a number)");
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 4;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e),
            e -= 4,
            h(this.view, t, e, this.littleEndian, 23, 4),
            i && (this.offset += 4),
            this
        }
        ,
        i.writeFloat = i.writeFloat32,
        i.readFloat32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
            }
            var i = a(this.view, t, this.littleEndian, 23, 4);
            return e && (this.offset += 4),
            i
        }
        ,
        i.readFloat = i.readFloat32,
        i.writeFloat64 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t)
                    throw TypeError("Illegal value: " + t + " (not a number)");
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 8;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e),
            e -= 8,
            h(this.view, t, e, this.littleEndian, 52, 8),
            i && (this.offset += 8),
            this
        }
        ,
        i.writeDouble = i.writeFloat64,
        i.readFloat64 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
            }
            var i = a(this.view, t, this.littleEndian, 52, 8);
            return e && (this.offset += 8),
            i
        }
        ,
        i.readDouble = i.readFloat64,
        e.MAX_VARINT32_BYTES = 5,
        e.calculateVarint32 = function(t) {
            return (t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 1 << 21 ? 3 : t < 1 << 28 ? 4 : 5
        }
        ,
        e.zigZagEncode32 = function(t) {
            return ((t |= 0) << 1 ^ t >> 31) >>> 0
        }
        ,
        e.zigZagDecode32 = function(t) {
            return t >>> 1 ^ -(1 & t) | 0
        }
        ,
        i.writeVarint32 = function(t, i) {
            var r = void 0 === i;
            if (r && (i = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof i || i % 1 != 0)
                    throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
            }
            var n, s = e.calculateVarint32(t);
            i += s;
            var o = this.buffer.byteLength;
            for (i > o && this.resize((o *= 2) > i ? o : i),
            i -= s,
            t >>>= 0; t >= 128; )
                n = 127 & t | 128,
                this.view[i++] = n,
                t >>>= 7;
            return this.view[i++] = t,
            r ? (this.offset = i,
            this) : s
        }
        ,
        i.writeVarint32ZigZag = function(t, i) {
            return this.writeVarint32(e.zigZagEncode32(t), i)
        }
        ,
        i.readVarint32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
            }
            var i, r = 0, n = 0;
            do {
                if (!this.noAssert && t > this.limit) {
                    var s = Error("Truncated");
                    throw s.truncated = !0,
                    s
                }
                i = this.view[t++],
                r < 5 && (n |= (127 & i) << 7 * r),
                ++r
            } while (0 != (128 & i));return n |= 0,
            e ? (this.offset = t,
            n) : {
                value: n,
                length: r
            }
        }
        ,
        i.readVarint32ZigZag = function(t) {
            var i = this.readVarint32(t);
            return "object" == typeof i ? i.value = e.zigZagDecode32(i.value) : i = e.zigZagDecode32(i),
            i
        }
        ,
        t && (e.MAX_VARINT64_BYTES = 10,
        e.calculateVarint64 = function(e) {
            "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e));
            var i = e.toInt() >>> 0
              , r = e.shiftRightUnsigned(28).toInt() >>> 0
              , n = e.shiftRightUnsigned(56).toInt() >>> 0;
            return 0 == n ? 0 == r ? i < 16384 ? i < 128 ? 1 : 2 : i < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : n < 128 ? 9 : 10
        }
        ,
        e.zigZagEncode64 = function(e) {
            return "number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()),
            e.shiftLeft(1).xor(e.shiftRight(63)).toUnsigned()
        }
        ,
        e.zigZagDecode64 = function(e) {
            return "number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()),
            e.shiftRightUnsigned(1).xor(e.and(t.ONE).toSigned().negate()).toSigned()
        }
        ,
        i.writeVarint64 = function(i, r) {
            var n = void 0 === r;
            if (n && (r = this.offset),
            !this.noAssert) {
                if ("number" == typeof i)
                    i = t.fromNumber(i);
                else if ("string" == typeof i)
                    i = t.fromString(i);
                else if (!(i && i instanceof t))
                    throw TypeError("Illegal value: " + i + " (not an integer or Long)");
                if ("number" != typeof r || r % 1 != 0)
                    throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
            }
            "number" == typeof i ? i = t.fromNumber(i, !1) : "string" == typeof i ? i = t.fromString(i, !1) : !1 !== i.unsigned && (i = i.toSigned());
            var s = e.calculateVarint64(i)
              , o = i.toInt() >>> 0
              , a = i.shiftRightUnsigned(28).toInt() >>> 0
              , h = i.shiftRightUnsigned(56).toInt() >>> 0;
            r += s;
            var f = this.buffer.byteLength;
            switch (r > f && this.resize((f *= 2) > r ? f : r),
            r -= s,
            s) {
            case 10:
                this.view[r + 9] = h >>> 7 & 1;
            case 9:
                this.view[r + 8] = 9 !== s ? 128 | h : 127 & h;
            case 8:
                this.view[r + 7] = 8 !== s ? a >>> 21 | 128 : a >>> 21 & 127;
            case 7:
                this.view[r + 6] = 7 !== s ? a >>> 14 | 128 : a >>> 14 & 127;
            case 6:
                this.view[r + 5] = 6 !== s ? a >>> 7 | 128 : a >>> 7 & 127;
            case 5:
                this.view[r + 4] = 5 !== s ? 128 | a : 127 & a;
            case 4:
                this.view[r + 3] = 4 !== s ? o >>> 21 | 128 : o >>> 21 & 127;
            case 3:
                this.view[r + 2] = 3 !== s ? o >>> 14 | 128 : o >>> 14 & 127;
            case 2:
                this.view[r + 1] = 2 !== s ? o >>> 7 | 128 : o >>> 7 & 127;
            case 1:
                this.view[r] = 1 !== s ? 128 | o : 127 & o
            }
            return n ? (this.offset += s,
            this) : s
        }
        ,
        i.writeVarint64ZigZag = function(t, i) {
            return this.writeVarint64(e.zigZagEncode64(t), i)
        }
        ,
        i.readVarint64 = function(e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
            }
            var r = e
              , n = 0
              , s = 0
              , o = 0
              , a = 0;
            if (a = this.view[e++],
            n = 127 & a,
            128 & a && (a = this.view[e++],
            n |= (127 & a) << 7,
            (128 & a || this.noAssert && void 0 === a) && (a = this.view[e++],
            n |= (127 & a) << 14,
            (128 & a || this.noAssert && void 0 === a) && (a = this.view[e++],
            n |= (127 & a) << 21,
            (128 & a || this.noAssert && void 0 === a) && (a = this.view[e++],
            s = 127 & a,
            (128 & a || this.noAssert && void 0 === a) && (a = this.view[e++],
            s |= (127 & a) << 7,
            (128 & a || this.noAssert && void 0 === a) && (a = this.view[e++],
            s |= (127 & a) << 14,
            (128 & a || this.noAssert && void 0 === a) && (a = this.view[e++],
            s |= (127 & a) << 21,
            (128 & a || this.noAssert && void 0 === a) && (a = this.view[e++],
            o = 127 & a,
            (128 & a || this.noAssert && void 0 === a) && (a = this.view[e++],
            o |= (127 & a) << 7,
            128 & a || this.noAssert && void 0 === a))))))))))
                throw Error("Buffer overrun");
            var h = t.fromBits(n | s << 28, s >>> 4 | o << 24, !1);
            return i ? (this.offset = e,
            h) : {
                value: h,
                length: e - r
            }
        }
        ,
        i.readVarint64ZigZag = function(i) {
            var r = this.readVarint64(i);
            return r && r.value instanceof t ? r.value = e.zigZagDecode64(r.value) : r = e.zigZagDecode64(r),
            r
        }
        ),
        i.writeCString = function(t, e) {
            var i = void 0 === e;
            i && (e = this.offset);
            var r, n = t.length;
            if (!this.noAssert) {
                if ("string" != typeof t)
                    throw TypeError("Illegal str: Not a string");
                for (r = 0; r < n; ++r)
                    if (0 === t.charCodeAt(r))
                        throw RangeError("Illegal str: Contains NULL-characters");
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            n = l.calculateUTF16asUTF8(s(t))[1],
            e += n + 1;
            var o = this.buffer.byteLength;
            return e > o && this.resize((o *= 2) > e ? o : e),
            e -= n + 1,
            l.encodeUTF16toUTF8(s(t), function(t) {
                this.view[e++] = t
            }
            .bind(this)),
            this.view[e++] = 0,
            i ? (this.offset = e,
            this) : n
        }
        ,
        i.readCString = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
            }
            var i, r = t, n = -1;
            return l.decodeUTF8toUTF16(function() {
                if (0 === n)
                    return null;
                if (t >= this.limit)
                    throw RangeError("Illegal range: Truncated data, " + t + " < " + this.limit);
                return 0 === (n = this.view[t++]) ? null : n
            }
            .bind(this), i = o(), !0),
            e ? (this.offset = t,
            i()) : {
                string: i(),
                length: t - r
            }
        }
        ,
        i.writeIString = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("string" != typeof t)
                    throw TypeError("Illegal str: Not a string");
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            var r, n = e;
            r = l.calculateUTF16asUTF8(s(t), this.noAssert)[1],
            e += 4 + r;
            var o = this.buffer.byteLength;
            if (e > o && this.resize((o *= 2) > e ? o : e),
            e -= 4 + r,
            this.littleEndian ? (this.view[e + 3] = r >>> 24 & 255,
            this.view[e + 2] = r >>> 16 & 255,
            this.view[e + 1] = r >>> 8 & 255,
            this.view[e] = 255 & r) : (this.view[e] = r >>> 24 & 255,
            this.view[e + 1] = r >>> 16 & 255,
            this.view[e + 2] = r >>> 8 & 255,
            this.view[e + 3] = 255 & r),
            e += 4,
            l.encodeUTF16toUTF8(s(t), function(t) {
                this.view[e++] = t
            }
            .bind(this)),
            e !== n + 4 + r)
                throw RangeError("Illegal range: Truncated data, " + e + " == " + (e + 4 + r));
            return i ? (this.offset = e,
            this) : e - n
        }
        ,
        i.readIString = function(t) {
            var i = void 0 === t;
            if (i && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
            }
            var r = t
              , n = this.readUint32(t)
              , s = this.readUTF8String(n, e.METRICS_BYTES, t += 4);
            return t += s.length,
            i ? (this.offset = t,
            s.string) : {
                string: s.string,
                length: t - r
            }
        }
        ,
        e.METRICS_CHARS = "c",
        e.METRICS_BYTES = "b",
        i.writeUTF8String = function(t, e) {
            var i, r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            var n = e;
            i = l.calculateUTF16asUTF8(s(t))[1],
            e += i;
            var o = this.buffer.byteLength;
            return e > o && this.resize((o *= 2) > e ? o : e),
            e -= i,
            l.encodeUTF16toUTF8(s(t), function(t) {
                this.view[e++] = t
            }
            .bind(this)),
            r ? (this.offset = e,
            this) : e - n
        }
        ,
        i.writeString = i.writeUTF8String,
        e.calculateUTF8Chars = function(t) {
            return l.calculateUTF16asUTF8(s(t))[0]
        }
        ,
        e.calculateUTF8Bytes = function(t) {
            return l.calculateUTF16asUTF8(s(t))[1]
        }
        ,
        e.calculateString = e.calculateUTF8Bytes,
        i.readUTF8String = function(t, i, r) {
            "number" == typeof i && (r = i,
            i = void 0);
            var n = void 0 === r;
            if (n && (r = this.offset),
            void 0 === i && (i = e.METRICS_CHARS),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal length: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof r || r % 1 != 0)
                    throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
            }
            var s, a = 0, h = r;
            if (i === e.METRICS_CHARS) {
                if (s = o(),
                l.decodeUTF8(function() {
                    return a < t && r < this.limit ? this.view[r++] : null
                }
                .bind(this), function(t) {
                    ++a,
                    l.UTF8toUTF16(t, s)
                }),
                a !== t)
                    throw RangeError("Illegal range: Truncated data, " + a + " == " + t);
                return n ? (this.offset = r,
                s()) : {
                    string: s(),
                    length: r - h
                }
            }
            if (i === e.METRICS_BYTES) {
                if (!this.noAssert) {
                    if ("number" != typeof r || r % 1 != 0)
                        throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + t > this.buffer.byteLength)
                        throw RangeError("Illegal offset: 0 <= " + r + " (+" + t + ") <= " + this.buffer.byteLength)
                }
                var f = r + t;
                if (l.decodeUTF8toUTF16(function() {
                    return r < f ? this.view[r++] : null
                }
                .bind(this), s = o(), this.noAssert),
                r !== f)
                    throw RangeError("Illegal range: Truncated data, " + r + " == " + f);
                return n ? (this.offset = r,
                s()) : {
                    string: s(),
                    length: r - h
                }
            }
            throw TypeError("Unsupported metrics: " + i)
        }
        ,
        i.readString = i.readUTF8String,
        i.writeVString = function(t, i) {
            var r = void 0 === i;
            if (r && (i = this.offset),
            !this.noAssert) {
                if ("string" != typeof t)
                    throw TypeError("Illegal str: Not a string");
                if ("number" != typeof i || i % 1 != 0)
                    throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
            }
            var n, o, a = i;
            n = l.calculateUTF16asUTF8(s(t), this.noAssert)[1],
            o = e.calculateVarint32(n),
            i += o + n;
            var h = this.buffer.byteLength;
            if (i > h && this.resize((h *= 2) > i ? h : i),
            i -= o + n,
            i += this.writeVarint32(n, i),
            l.encodeUTF16toUTF8(s(t), function(t) {
                this.view[i++] = t
            }
            .bind(this)),
            i !== a + n + o)
                throw RangeError("Illegal range: Truncated data, " + i + " == " + (i + n + o));
            return r ? (this.offset = i,
            this) : i - a
        }
        ,
        i.readVString = function(t) {
            var i = void 0 === t;
            if (i && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
            }
            var r = t
              , n = this.readVarint32(t)
              , s = this.readUTF8String(n.value, e.METRICS_BYTES, t += n.length);
            return t += s.length,
            i ? (this.offset = t,
            s.string) : {
                string: s.string,
                length: t - r
            }
        }
        ,
        i.append = function(t, i, r) {
            "number" != typeof i && "string" == typeof i || (r = i,
            i = void 0);
            var n = void 0 === r;
            if (n && (r = this.offset),
            !this.noAssert) {
                if ("number" != typeof r || r % 1 != 0)
                    throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
            }
            t instanceof e || (t = e.wrap(t, i));
            var s = t.limit - t.offset;
            if (s <= 0)
                return this;
            r += s;
            var o = this.buffer.byteLength;
            return r > o && this.resize((o *= 2) > r ? o : r),
            r -= s,
            this.view.set(t.view.subarray(t.offset, t.limit), r),
            t.offset += s,
            n && (this.offset += s),
            this
        }
        ,
        i.appendTo = function(t, e) {
            return t.append(this, e),
            this
        }
        ,
        i.assert = function(t) {
            return this.noAssert = !t,
            this
        }
        ,
        i.capacity = function() {
            return this.buffer.byteLength
        }
        ,
        i.clear = function() {
            return this.offset = 0,
            this.limit = this.buffer.byteLength,
            this.markedOffset = -1,
            this
        }
        ,
        i.clone = function(t) {
            var i = new e(0,this.littleEndian,this.noAssert);
            return t ? (i.buffer = new ArrayBuffer(this.buffer.byteLength),
            i.view = new Uint8Array(i.buffer)) : (i.buffer = this.buffer,
            i.view = this.view),
            i.offset = this.offset,
            i.markedOffset = this.markedOffset,
            i.limit = this.limit,
            i
        }
        ,
        i.compact = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0,
                t < 0 || t > e || e > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
            }
            if (0 === t && e === this.buffer.byteLength)
                return this;
            var i = e - t;
            if (0 === i)
                return this.buffer = r,
                this.view = null,
                this.markedOffset >= 0 && (this.markedOffset -= t),
                this.offset = 0,
                this.limit = 0,
                this;
            var n = new ArrayBuffer(i)
              , s = new Uint8Array(n);
            return s.set(this.view.subarray(t, e)),
            this.buffer = n,
            this.view = s,
            this.markedOffset >= 0 && (this.markedOffset -= t),
            this.offset = 0,
            this.limit = i,
            this
        }
        ,
        i.copy = function(t, i) {
            if (void 0 === t && (t = this.offset),
            void 0 === i && (i = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof i || i % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (i >>>= 0,
                t < 0 || t > i || i > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + i + " <= " + this.buffer.byteLength)
            }
            if (t === i)
                return new e(0,this.littleEndian,this.noAssert);
            var r = i - t
              , n = new e(r,this.littleEndian,this.noAssert);
            return n.offset = 0,
            n.limit = r,
            n.markedOffset >= 0 && (n.markedOffset -= t),
            this.copyTo(n, 0, t, i),
            n
        }
        ,
        i.copyTo = function(t, i, r, n) {
            var s, o;
            if (!this.noAssert && !e.isByteBuffer(t))
                throw TypeError("Illegal target: Not a ByteBuffer");
            if (i = (o = void 0 === i) ? t.offset : 0 | i,
            r = (s = void 0 === r) ? this.offset : 0 | r,
            n = void 0 === n ? this.limit : 0 | n,
            i < 0 || i > t.buffer.byteLength)
                throw RangeError("Illegal target range: 0 <= " + i + " <= " + t.buffer.byteLength);
            if (r < 0 || n > this.buffer.byteLength)
                throw RangeError("Illegal source range: 0 <= " + r + " <= " + this.buffer.byteLength);
            var a = n - r;
            return 0 === a ? t : (t.ensureCapacity(i + a),
            t.view.set(this.view.subarray(r, n), i),
            s && (this.offset += a),
            o && (t.offset += a),
            this)
        }
        ,
        i.ensureCapacity = function(t) {
            var e = this.buffer.byteLength;
            return e < t ? this.resize((e *= 2) > t ? e : t) : this
        }
        ,
        i.fill = function(t, e, i) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            "string" == typeof t && t.length > 0 && (t = t.charCodeAt(0)),
            void 0 === e && (e = this.offset),
            void 0 === i && (i = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (e >>>= 0,
                "number" != typeof i || i % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (i >>>= 0,
                e < 0 || e > i || i > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + e + " <= " + i + " <= " + this.buffer.byteLength)
            }
            if (e >= i)
                return this;
            for (; e < i; )
                this.view[e++] = t;
            return r && (this.offset = e),
            this
        }
        ,
        i.flip = function() {
            return this.limit = this.offset,
            this.offset = 0,
            this
        }
        ,
        i.mark = function(t) {
            if (t = void 0 === t ? this.offset : t,
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
            }
            return this.markedOffset = t,
            this
        }
        ,
        i.order = function(t) {
            if (!this.noAssert && "boolean" != typeof t)
                throw TypeError("Illegal littleEndian: Not a boolean");
            return this.littleEndian = !!t,
            this
        }
        ,
        i.LE = function(t) {
            return this.littleEndian = void 0 === t || !!t,
            this
        }
        ,
        i.BE = function(t) {
            return this.littleEndian = void 0 !== t && !t,
            this
        }
        ,
        i.prepend = function(t, i, r) {
            "number" != typeof i && "string" == typeof i || (r = i,
            i = void 0);
            var n = void 0 === r;
            if (n && (r = this.offset),
            !this.noAssert) {
                if ("number" != typeof r || r % 1 != 0)
                    throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
            }
            t instanceof e || (t = e.wrap(t, i));
            var s = t.limit - t.offset;
            if (s <= 0)
                return this;
            var o = s - r;
            if (o > 0) {
                var a = new ArrayBuffer(this.buffer.byteLength + o)
                  , h = new Uint8Array(a);
                h.set(this.view.subarray(r, this.buffer.byteLength), s),
                this.buffer = a,
                this.view = h,
                this.offset += o,
                this.markedOffset >= 0 && (this.markedOffset += o),
                this.limit += o,
                r += o
            } else
                new Uint8Array(this.buffer);
            return this.view.set(t.view.subarray(t.offset, t.limit), r - s),
            t.offset = t.limit,
            n && (this.offset -= s),
            this
        }
        ,
        i.prependTo = function(t, e) {
            return t.prepend(this, e),
            this
        }
        ,
        i.printDebug = function(t) {
            "function" != typeof t && (t = console.log.bind(console)),
            t(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0))
        }
        ,
        i.remaining = function() {
            return this.limit - this.offset
        }
        ,
        i.reset = function() {
            return this.markedOffset >= 0 ? (this.offset = this.markedOffset,
            this.markedOffset = -1) : this.offset = 0,
            this
        }
        ,
        i.resize = function(t) {
            if (!this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal capacity: " + t + " (not an integer)");
                if ((t |= 0) < 0)
                    throw RangeError("Illegal capacity: 0 <= " + t)
            }
            if (this.buffer.byteLength < t) {
                var e = new ArrayBuffer(t)
                  , i = new Uint8Array(e);
                i.set(this.view),
                this.buffer = e,
                this.view = i
            }
            return this
        }
        ,
        i.reverse = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0,
                t < 0 || t > e || e > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
            }
            return t === e ? this : (Array.prototype.reverse.call(this.view.subarray(t, e)),
            this)
        }
        ,
        i.skip = function(t) {
            if (!this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal length: " + t + " (not an integer)");
                t |= 0
            }
            var e = this.offset + t;
            if (!this.noAssert && (e < 0 || e > this.buffer.byteLength))
                throw RangeError("Illegal length: 0 <= " + this.offset + " + " + t + " <= " + this.buffer.byteLength);
            return this.offset = e,
            this
        }
        ,
        i.slice = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0,
                t < 0 || t > e || e > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
            }
            var i = this.clone();
            return i.offset = t,
            i.limit = e,
            i
        }
        ,
        i.toBuffer = function(t) {
            var e = this.offset
              , i = this.limit;
            if (!this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: Not an integer");
                if (e >>>= 0,
                "number" != typeof i || i % 1 != 0)
                    throw TypeError("Illegal limit: Not an integer");
                if (i >>>= 0,
                e < 0 || e > i || i > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + e + " <= " + i + " <= " + this.buffer.byteLength)
            }
            if (!t && 0 === e && i === this.buffer.byteLength)
                return this.buffer;
            if (e === i)
                return r;
            var n = new ArrayBuffer(i - e);
            return new Uint8Array(n).set(new Uint8Array(this.buffer).subarray(e, i), 0),
            n
        }
        ,
        i.toArrayBuffer = i.toBuffer,
        i.toString = function(t, e, i) {
            if (void 0 === t)
                return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
            switch ("number" == typeof t && (i = e = t = "utf8"),
            t) {
            case "utf8":
                return this.toUTF8(e, i);
            case "base64":
                return this.toBase64(e, i);
            case "hex":
                return this.toHex(e, i);
            case "binary":
                return this.toBinary(e, i);
            case "debug":
                return this.toDebug();
            case "columns":
                return this.toColumns();
            default:
                throw Error("Unsupported encoding: " + t)
            }
        }
        ;
        var f = function() {
            for (var t = {}, e = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47], i = [], r = 0, n = e.length; r < n; ++r)
                i[e[r]] = r;
            return t.encode = function(t, i) {
                for (var r, n; null !== (r = t()); )
                    i(e[r >> 2 & 63]),
                    n = (3 & r) << 4,
                    null !== (r = t()) ? (i(e[63 & ((n |= r >> 4 & 15) | r >> 4 & 15)]),
                    n = (15 & r) << 2,
                    null !== (r = t()) ? (i(e[63 & (n | r >> 6 & 3)]),
                    i(e[63 & r])) : (i(e[63 & n]),
                    i(61))) : (i(e[63 & n]),
                    i(61),
                    i(61))
            }
            ,
            t.decode = function(t, e) {
                var r, n, s;
                function o(t) {
                    throw Error("Illegal character code: " + t)
                }
                for (; null !== (r = t()); )
                    if (void 0 === (n = i[r]) && o(r),
                    null !== (r = t()) && (void 0 === (s = i[r]) && o(r),
                    e(n << 2 >>> 0 | (48 & s) >> 4),
                    null !== (r = t()))) {
                        if (void 0 === (n = i[r])) {
                            if (61 === r)
                                break;
                            o(r)
                        }
                        if (e((15 & s) << 4 >>> 0 | (60 & n) >> 2),
                        null !== (r = t())) {
                            if (void 0 === (s = i[r])) {
                                if (61 === r)
                                    break;
                                o(r)
                            }
                            e((3 & n) << 6 >>> 0 | s)
                        }
                    }
            }
            ,
            t.test = function(t) {
                return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(t)
            }
            ,
            t
        }();
        i.toBase64 = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            e |= 0,
            (t |= 0) < 0 || e > this.capacity || t > e)
                throw RangeError("begin, end");
            var i;
            return f.encode(function() {
                return t < e ? this.view[t++] : null
            }
            .bind(this), i = o()),
            i()
        }
        ,
        e.fromBase64 = function(t, i) {
            if ("string" != typeof t)
                throw TypeError("str");
            var r = new e(t.length / 4 * 3,i)
              , n = 0;
            return f.decode(s(t), function(t) {
                r.view[n++] = t
            }),
            r.limit = n,
            r
        }
        ,
        e.btoa = function(t) {
            return e.fromBinary(t).toBase64()
        }
        ,
        e.atob = function(t) {
            return e.fromBase64(t).toBinary()
        }
        ,
        i.toBinary = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            e |= 0,
            (t |= 0) < 0 || e > this.capacity() || t > e)
                throw RangeError("begin, end");
            if (t === e)
                return "";
            for (var i = [], r = []; t < e; )
                i.push(this.view[t++]),
                i.length >= 1024 && (r.push(String.fromCharCode.apply(String, i)),
                i = []);
            return r.join("") + String.fromCharCode.apply(String, i)
        }
        ,
        e.fromBinary = function(t, i) {
            if ("string" != typeof t)
                throw TypeError("str");
            for (var r, n = 0, s = t.length, o = new e(s,i); n < s; ) {
                if ((r = t.charCodeAt(n)) > 255)
                    throw RangeError("illegal char code: " + r);
                o.view[n++] = r
            }
            return o.limit = s,
            o
        }
        ,
        i.toDebug = function(t) {
            for (var e, i = -1, r = this.buffer.byteLength, n = "", s = "", o = ""; i < r; ) {
                if (-1 !== i && (e = this.view[i],
                n += e < 16 ? "0" + e.toString(16).toUpperCase() : e.toString(16).toUpperCase(),
                t && (s += e > 32 && e < 127 ? String.fromCharCode(e) : ".")),
                ++i,
                t && i > 0 && i % 16 == 0 && i !== r) {
                    for (; n.length < 51; )
                        n += " ";
                    o += n + s + "\n",
                    n = s = ""
                }
                i === this.offset && i === this.limit ? n += i === this.markedOffset ? "!" : "|" : i === this.offset ? n += i === this.markedOffset ? "[" : "<" : i === this.limit ? n += i === this.markedOffset ? "]" : ">" : n += i === this.markedOffset ? "'" : t || 0 !== i && i !== r ? " " : ""
            }
            if (t && " " !== n) {
                for (; n.length < 51; )
                    n += " ";
                o += n + s + "\n"
            }
            return t ? o : n
        }
        ,
        e.fromDebug = function(t, i, r) {
            for (var n, s, o = t.length, a = new e((o + 1) / 3 | 0,i,r), h = 0, f = 0, l = !1, u = !1, d = !1, c = !1, g = !1; h < o; ) {
                switch (n = t.charAt(h++)) {
                case "!":
                    if (!r) {
                        if (u || d || c) {
                            g = !0;
                            break
                        }
                        u = d = c = !0
                    }
                    a.offset = a.markedOffset = a.limit = f,
                    l = !1;
                    break;
                case "|":
                    if (!r) {
                        if (u || c) {
                            g = !0;
                            break
                        }
                        u = c = !0
                    }
                    a.offset = a.limit = f,
                    l = !1;
                    break;
                case "[":
                    if (!r) {
                        if (u || d) {
                            g = !0;
                            break
                        }
                        u = d = !0
                    }
                    a.offset = a.markedOffset = f,
                    l = !1;
                    break;
                case "<":
                    if (!r) {
                        if (u) {
                            g = !0;
                            break
                        }
                        u = !0
                    }
                    a.offset = f,
                    l = !1;
                    break;
                case "]":
                    if (!r) {
                        if (c || d) {
                            g = !0;
                            break
                        }
                        c = d = !0
                    }
                    a.limit = a.markedOffset = f,
                    l = !1;
                    break;
                case ">":
                    if (!r) {
                        if (c) {
                            g = !0;
                            break
                        }
                        c = !0
                    }
                    a.limit = f,
                    l = !1;
                    break;
                case "'":
                    if (!r) {
                        if (d) {
                            g = !0;
                            break
                        }
                        d = !0
                    }
                    a.markedOffset = f,
                    l = !1;
                    break;
                case " ":
                    l = !1;
                    break;
                default:
                    if (!r && l) {
                        g = !0;
                        break
                    }
                    if (s = parseInt(n + t.charAt(h++), 16),
                    !r && (isNaN(s) || s < 0 || s > 255))
                        throw TypeError("Illegal str: Not a debug encoded string");
                    a.view[f++] = s,
                    l = !0
                }
                if (g)
                    throw TypeError("Illegal str: Invalid symbol at " + h)
            }
            if (!r) {
                if (!u || !c)
                    throw TypeError("Illegal str: Missing offset or limit");
                if (f < a.buffer.byteLength)
                    throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + f + " < " + o)
            }
            return a
        }
        ,
        i.toHex = function(t, e) {
            if (t = void 0 === t ? this.offset : t,
            e = void 0 === e ? this.limit : e,
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0,
                t < 0 || t > e || e > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
            }
            for (var i, r = new Array(e - t); t < e; )
                (i = this.view[t++]) < 16 ? r.push("0", i.toString(16)) : r.push(i.toString(16));
            return r.join("")
        }
        ,
        e.fromHex = function(t, i, r) {
            if (!r) {
                if ("string" != typeof t)
                    throw TypeError("Illegal str: Not a string");
                if (t.length % 2 != 0)
                    throw TypeError("Illegal str: Length not a multiple of 2")
            }
            for (var n, s = t.length, o = new e(s / 2 | 0,i), a = 0, h = 0; a < s; a += 2) {
                if (n = parseInt(t.substring(a, a + 2), 16),
                !r && (!isFinite(n) || n < 0 || n > 255))
                    throw TypeError("Illegal str: Contains non-hex characters");
                o.view[h++] = n
            }
            return o.limit = h,
            o
        }
        ;
        var l = function() {
            var t = {
                MAX_CODEPOINT: 1114111,
                encodeUTF8: function(t, e) {
                    var i = null;
                    for ("number" == typeof t && (i = t,
                    t = function() {
                        return null
                    }
                    ); null !== i || null !== (i = t()); )
                        i < 128 ? e(127 & i) : i < 2048 ? (e(i >> 6 & 31 | 192),
                        e(63 & i | 128)) : i < 65536 ? (e(i >> 12 & 15 | 224),
                        e(i >> 6 & 63 | 128),
                        e(63 & i | 128)) : (e(i >> 18 & 7 | 240),
                        e(i >> 12 & 63 | 128),
                        e(i >> 6 & 63 | 128),
                        e(63 & i | 128)),
                        i = null
                },
                decodeUTF8: function(t, e) {
                    for (var i, r, n, s, o = function(t) {
                        t = t.slice(0, t.indexOf(null));
                        var e = Error(t.toString());
                        throw e.name = "TruncatedError",
                        e.bytes = t,
                        e
                    }; null !== (i = t()); )
                        if (0 == (128 & i))
                            e(i);
                        else if (192 == (224 & i))
                            null === (r = t()) && o([i, r]),
                            e((31 & i) << 6 | 63 & r);
                        else if (224 == (240 & i))
                            (null === (r = t()) || null === (n = t())) && o([i, r, n]),
                            e((15 & i) << 12 | (63 & r) << 6 | 63 & n);
                        else {
                            if (240 != (248 & i))
                                throw RangeError("Illegal starting byte: " + i);
                            (null === (r = t()) || null === (n = t()) || null === (s = t())) && o([i, r, n, s]),
                            e((7 & i) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & s)
                        }
                },
                UTF16toUTF8: function(t, e) {
                    for (var i, r = null; null !== (i = null !== r ? r : t()); )
                        i >= 55296 && i <= 57343 && null !== (r = t()) && r >= 56320 && r <= 57343 ? (e(1024 * (i - 55296) + r - 56320 + 65536),
                        r = null) : e(i);
                    null !== r && e(r)
                },
                UTF8toUTF16: function(t, e) {
                    var i = null;
                    for ("number" == typeof t && (i = t,
                    t = function() {
                        return null
                    }
                    ); null !== i || null !== (i = t()); )
                        i <= 65535 ? e(i) : (e(55296 + ((i -= 65536) >> 10)),
                        e(i % 1024 + 56320)),
                        i = null
                },
                encodeUTF16toUTF8: function(e, i) {
                    t.UTF16toUTF8(e, function(e) {
                        t.encodeUTF8(e, i)
                    })
                },
                decodeUTF8toUTF16: function(e, i) {
                    t.decodeUTF8(e, function(e) {
                        t.UTF8toUTF16(e, i)
                    })
                },
                calculateCodePoint: function(t) {
                    return t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4
                },
                calculateUTF8: function(t) {
                    for (var e, i = 0; null !== (e = t()); )
                        i += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
                    return i
                },
                calculateUTF16asUTF8: function(e) {
                    var i = 0
                      , r = 0;
                    return t.UTF16toUTF8(e, function(t) {
                        ++i,
                        r += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4
                    }),
                    [i, r]
                }
            };
            return t
        }();
        return i.toUTF8 = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0,
                t < 0 || t > e || e > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
            }
            var i;
            try {
                l.decodeUTF8toUTF16(function() {
                    return t < e ? this.view[t++] : null
                }
                .bind(this), i = o())
            } catch (i) {
                if (t !== e)
                    throw RangeError("Illegal range: Truncated data, " + t + " != " + e)
            }
            return i()
        }
        ,
        e.fromUTF8 = function(t, i, r) {
            if (!r && "string" != typeof t)
                throw TypeError("Illegal str: Not a string");
            var n = new e(l.calculateUTF16asUTF8(s(t), !0)[1],i,r)
              , o = 0;
            return l.encodeUTF16toUTF8(s(t), function(t) {
                n.view[o++] = t
            }),
            n.limit = o,
            n
        }
        ,
        e
    }
    ) ? r.apply(e, n) : r) || (t.exports = s)
}
, function(t, e, i) {
    "use strict";
    var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
    function n(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    e.assign = function(t) {
        for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
            var i = e.shift();
            if (i) {
                if ("object" != typeof i)
                    throw new TypeError(i + "must be non-object");
                for (var r in i)
                    n(i, r) && (t[r] = i[r])
            }
        }
        return t
    }
    ,
    e.shrinkBuf = function(t, e) {
        return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e,
        t)
    }
    ;
    var s = {
        arraySet: function(t, e, i, r, n) {
            if (e.subarray && t.subarray)
                t.set(e.subarray(i, i + r), n);
            else
                for (var s = 0; s < r; s++)
                    t[n + s] = e[i + s]
        },
        flattenChunks: function(t) {
            var e, i, r, n, s, o;
            for (r = 0,
            e = 0,
            i = t.length; e < i; e++)
                r += t[e].length;
            for (o = new Uint8Array(r),
            n = 0,
            e = 0,
            i = t.length; e < i; e++)
                s = t[e],
                o.set(s, n),
                n += s.length;
            return o
        }
    }
      , o = {
        arraySet: function(t, e, i, r, n) {
            for (var s = 0; s < r; s++)
                t[n + s] = e[i + s]
        },
        flattenChunks: function(t) {
            return [].concat.apply([], t)
        }
    };
    e.setTyped = function(t) {
        t ? (e.Buf8 = Uint8Array,
        e.Buf16 = Uint16Array,
        e.Buf32 = Int32Array,
        e.assign(e, s)) : (e.Buf8 = Array,
        e.Buf16 = Array,
        e.Buf32 = Array,
        e.assign(e, o))
    }
    ,
    e.setTyped(r)
}
, function(t, e, i) {
    var r = i(18)
      , n = i(19)
      , s = i(20);
    t.exports = function(t) {
        return r(t) || n(t) || s()
    }
}
, function(t, e) {
    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function r(e) {
        return "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? t.exports = r = function(t) {
            return i(t)
        }
        : t.exports = r = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : i(t)
        }
        ,
        r(e)
    }
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    t.exports = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
}
, function(t, e) {
    function i(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    t.exports = function(t, e, r) {
        return e && i(t.prototype, e),
        r && i(t, r),
        t
    }
}
, function(t, e, i) {
    "use strict";
    var r = {};
    (0,
    i(1).assign)(r, i(22), i(25), i(12)),
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    t.exports = function(t, e, i, r) {
        for (var n = 65535 & t | 0, s = t >>> 16 & 65535 | 0, o = 0; 0 !== i; ) {
            i -= o = i > 2e3 ? 2e3 : i;
            do {
                s = s + (n = n + e[r++] | 0) | 0
            } while (--o);n %= 65521,
            s %= 65521
        }
        return n | s << 16 | 0
    }
}
, function(t, e, i) {
    "use strict";
    var r = function() {
        for (var t, e = [], i = 0; i < 256; i++) {
            t = i;
            for (var r = 0; r < 8; r++)
                t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
            e[i] = t
        }
        return e
    }();
    t.exports = function(t, e, i, n) {
        var s = r
          , o = n + i;
        t ^= -1;
        for (var a = n; a < o; a++)
            t = t >>> 8 ^ s[255 & (t ^ e[a])];
        return -1 ^ t
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(1)
      , n = !0
      , s = !0;
    try {
        String.fromCharCode.apply(null, [0])
    } catch (t) {
        n = !1
    }
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (t) {
        s = !1
    }
    for (var o = new r.Buf8(256), a = 0; a < 256; a++)
        o[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
    function h(t, e) {
        if (e < 65534 && (t.subarray && s || !t.subarray && n))
            return String.fromCharCode.apply(null, r.shrinkBuf(t, e));
        for (var i = "", o = 0; o < e; o++)
            i += String.fromCharCode(t[o]);
        return i
    }
    o[254] = o[254] = 1,
    e.string2buf = function(t) {
        var e, i, n, s, o, a = t.length, h = 0;
        for (s = 0; s < a; s++)
            55296 == (64512 & (i = t.charCodeAt(s))) && s + 1 < a && 56320 == (64512 & (n = t.charCodeAt(s + 1))) && (i = 65536 + (i - 55296 << 10) + (n - 56320),
            s++),
            h += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
        for (e = new r.Buf8(h),
        o = 0,
        s = 0; o < h; s++)
            55296 == (64512 & (i = t.charCodeAt(s))) && s + 1 < a && 56320 == (64512 & (n = t.charCodeAt(s + 1))) && (i = 65536 + (i - 55296 << 10) + (n - 56320),
            s++),
            i < 128 ? e[o++] = i : i < 2048 ? (e[o++] = 192 | i >>> 6,
            e[o++] = 128 | 63 & i) : i < 65536 ? (e[o++] = 224 | i >>> 12,
            e[o++] = 128 | i >>> 6 & 63,
            e[o++] = 128 | 63 & i) : (e[o++] = 240 | i >>> 18,
            e[o++] = 128 | i >>> 12 & 63,
            e[o++] = 128 | i >>> 6 & 63,
            e[o++] = 128 | 63 & i);
        return e
    }
    ,
    e.buf2binstring = function(t) {
        return h(t, t.length)
    }
    ,
    e.binstring2buf = function(t) {
        for (var e = new r.Buf8(t.length), i = 0, n = e.length; i < n; i++)
            e[i] = t.charCodeAt(i);
        return e
    }
    ,
    e.buf2string = function(t, e) {
        var i, r, n, s, a = e || t.length, f = new Array(2 * a);
        for (r = 0,
        i = 0; i < a; )
            if ((n = t[i++]) < 128)
                f[r++] = n;
            else if ((s = o[n]) > 4)
                f[r++] = 65533,
                i += s - 1;
            else {
                for (n &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && i < a; )
                    n = n << 6 | 63 & t[i++],
                    s--;
                s > 1 ? f[r++] = 65533 : n < 65536 ? f[r++] = n : (n -= 65536,
                f[r++] = 55296 | n >> 10 & 1023,
                f[r++] = 56320 | 1023 & n)
            }
        return h(f, r)
    }
    ,
    e.utf8border = function(t, e) {
        var i;
        for ((e = e || t.length) > t.length && (e = t.length),
        i = e - 1; i >= 0 && 128 == (192 & t[i]); )
            i--;
        return i < 0 ? e : 0 === i ? e : i + o[t[i]] > e ? i : e
    }
}
, function(t, e, i) {
    "use strict";
    t.exports = function() {
        this.input = null,
        this.next_in = 0,
        this.avail_in = 0,
        this.total_in = 0,
        this.output = null,
        this.next_out = 0,
        this.avail_out = 0,
        this.total_out = 0,
        this.msg = "",
        this.state = null,
        this.data_type = 2,
        this.adler = 0
    }
}
, function(t, e, i) {
    "use strict";
    t.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
    }
}
, function(t, e, i) {
    var r = i(3)
      , n = i(16);
    t.exports = function(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? n(t) : e
    }
}
, function(t, e) {
    function i(e) {
        return t.exports = i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        i(e)
    }
    t.exports = i
}
, function(t, e, i) {
    var r = i(17);
    t.exports = function(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && r(t, e)
    }
}
, function(t, e) {
    t.exports = function(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
}
, function(t, e) {
    function i(e, r) {
        return t.exports = i = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        i(e, r)
    }
    t.exports = i
}
, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = new Array(t.length); e < t.length; e++)
                i[e] = t[e];
            return i
        }
    }
}
, function(t, e) {
    t.exports = function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
            return Array.from(t)
    }
}
, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}
, function(t, e, i) {
    var r, n, s;
    n = [],
    void 0 === (s = "function" == typeof (r = function() {
        "use strict";
        function t(t, e, i) {
            this.low = 0 | t,
            this.high = 0 | e,
            this.unsigned = !!i
        }
        function e(t) {
            return !0 === (t && t.__isLong__)
        }
        t.prototype.__isLong__,
        Object.defineProperty(t.prototype, "__isLong__", {
            value: !0,
            enumerable: !1,
            configurable: !1
        }),
        t.isLong = e;
        var i = {}
          , r = {};
        function n(t, e) {
            var n, s, a;
            return e ? (a = 0 <= (t >>>= 0) && t < 256) && (s = r[t]) ? s : (n = o(t, (0 | t) < 0 ? -1 : 0, !0),
            a && (r[t] = n),
            n) : (a = -128 <= (t |= 0) && t < 128) && (s = i[t]) ? s : (n = o(t, t < 0 ? -1 : 0, !1),
            a && (i[t] = n),
            n)
        }
        function s(t, e) {
            if (isNaN(t) || !isFinite(t))
                return e ? v : g;
            if (e) {
                if (t < 0)
                    return v;
                if (t >= u)
                    return y
            } else {
                if (t <= -d)
                    return m;
                if (t + 1 >= d)
                    return _
            }
            return t < 0 ? s(-t, e).neg() : o(t % l | 0, t / l | 0, e)
        }
        function o(e, i, r) {
            return new t(e,i,r)
        }
        t.fromInt = n,
        t.fromNumber = s,
        t.fromBits = o;
        var a = Math.pow;
        function h(t, e, i) {
            if (0 === t.length)
                throw Error("empty string");
            if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t)
                return g;
            if ("number" == typeof e ? (i = e,
            e = !1) : e = !!e,
            (i = i || 10) < 2 || 36 < i)
                throw RangeError("radix");
            var r;
            if ((r = t.indexOf("-")) > 0)
                throw Error("interior hyphen");
            if (0 === r)
                return h(t.substring(1), e, i).neg();
            for (var n = s(a(i, 8)), o = g, f = 0; f < t.length; f += 8) {
                var l = Math.min(8, t.length - f)
                  , u = parseInt(t.substring(f, f + l), i);
                if (l < 8) {
                    var d = s(a(i, l));
                    o = o.mul(d).add(s(u))
                } else
                    o = (o = o.mul(n)).add(s(u))
            }
            return o.unsigned = e,
            o
        }
        function f(e) {
            return e instanceof t ? e : "number" == typeof e ? s(e) : "string" == typeof e ? h(e) : o(e.low, e.high, e.unsigned)
        }
        t.fromString = h,
        t.fromValue = f;
        var l = 4294967296
          , u = l * l
          , d = u / 2
          , c = n(1 << 24)
          , g = n(0);
        t.ZERO = g;
        var v = n(0, !0);
        t.UZERO = v;
        var w = n(1);
        t.ONE = w;
        var b = n(1, !0);
        t.UONE = b;
        var p = n(-1);
        t.NEG_ONE = p;
        var _ = o(-1, 2147483647, !1);
        t.MAX_VALUE = _;
        var y = o(-1, -1, !0);
        t.MAX_UNSIGNED_VALUE = y;
        var m = o(0, -2147483648, !1);
        t.MIN_VALUE = m;
        var k = t.prototype;
        return k.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low
        }
        ,
        k.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * l + (this.low >>> 0) : this.high * l + (this.low >>> 0)
        }
        ,
        k.toString = function(t) {
            if ((t = t || 10) < 2 || 36 < t)
                throw RangeError("radix");
            if (this.isZero())
                return "0";
            if (this.isNegative()) {
                if (this.eq(m)) {
                    var e = s(t)
                      , i = this.div(e)
                      , r = i.mul(e).sub(this);
                    return i.toString(t) + r.toInt().toString(t)
                }
                return "-" + this.neg().toString(t)
            }
            for (var n = s(a(t, 6), this.unsigned), o = this, h = ""; ; ) {
                var f = o.div(n)
                  , l = (o.sub(f.mul(n)).toInt() >>> 0).toString(t);
                if ((o = f).isZero())
                    return l + h;
                for (; l.length < 6; )
                    l = "0" + l;
                h = "" + l + h
            }
        }
        ,
        k.getHighBits = function() {
            return this.high
        }
        ,
        k.getHighBitsUnsigned = function() {
            return this.high >>> 0
        }
        ,
        k.getLowBits = function() {
            return this.low
        }
        ,
        k.getLowBitsUnsigned = function() {
            return this.low >>> 0
        }
        ,
        k.getNumBitsAbs = function() {
            if (this.isNegative())
                return this.eq(m) ? 64 : this.neg().getNumBitsAbs();
            for (var t = 0 != this.high ? this.high : this.low, e = 31; e > 0 && 0 == (t & 1 << e); e--)
                ;
            return 0 != this.high ? e + 33 : e + 1
        }
        ,
        k.isZero = function() {
            return 0 === this.high && 0 === this.low
        }
        ,
        k.isNegative = function() {
            return !this.unsigned && this.high < 0
        }
        ,
        k.isPositive = function() {
            return this.unsigned || this.high >= 0
        }
        ,
        k.isOdd = function() {
            return 1 == (1 & this.low)
        }
        ,
        k.isEven = function() {
            return 0 == (1 & this.low)
        }
        ,
        k.equals = function(t) {
            return e(t) || (t = f(t)),
            (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && this.high === t.high && this.low === t.low
        }
        ,
        k.eq = k.equals,
        k.notEquals = function(t) {
            return !this.eq(t)
        }
        ,
        k.neq = k.notEquals,
        k.lessThan = function(t) {
            return this.comp(t) < 0
        }
        ,
        k.lt = k.lessThan,
        k.lessThanOrEqual = function(t) {
            return this.comp(t) <= 0
        }
        ,
        k.lte = k.lessThanOrEqual,
        k.greaterThan = function(t) {
            return this.comp(t) > 0
        }
        ,
        k.gt = k.greaterThan,
        k.greaterThanOrEqual = function(t) {
            return this.comp(t) >= 0
        }
        ,
        k.gte = k.greaterThanOrEqual,
        k.compare = function(t) {
            if (e(t) || (t = f(t)),
            this.eq(t))
                return 0;
            var i = this.isNegative()
              , r = t.isNegative();
            return i && !r ? -1 : !i && r ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
        }
        ,
        k.comp = k.compare,
        k.negate = function() {
            return !this.unsigned && this.eq(m) ? m : this.not().add(w)
        }
        ,
        k.neg = k.negate,
        k.add = function(t) {
            e(t) || (t = f(t));
            var i = this.high >>> 16
              , r = 65535 & this.high
              , n = this.low >>> 16
              , s = 65535 & this.low
              , a = t.high >>> 16
              , h = 65535 & t.high
              , l = t.low >>> 16
              , u = 0
              , d = 0
              , c = 0
              , g = 0;
            return c += (g += s + (65535 & t.low)) >>> 16,
            d += (c += n + l) >>> 16,
            u += (d += r + h) >>> 16,
            u += i + a,
            o((c &= 65535) << 16 | (g &= 65535), (u &= 65535) << 16 | (d &= 65535), this.unsigned)
        }
        ,
        k.subtract = function(t) {
            return e(t) || (t = f(t)),
            this.add(t.neg())
        }
        ,
        k.sub = k.subtract,
        k.multiply = function(t) {
            if (this.isZero())
                return g;
            if (e(t) || (t = f(t)),
            t.isZero())
                return g;
            if (this.eq(m))
                return t.isOdd() ? m : g;
            if (t.eq(m))
                return this.isOdd() ? m : g;
            if (this.isNegative())
                return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
            if (t.isNegative())
                return this.mul(t.neg()).neg();
            if (this.lt(c) && t.lt(c))
                return s(this.toNumber() * t.toNumber(), this.unsigned);
            var i = this.high >>> 16
              , r = 65535 & this.high
              , n = this.low >>> 16
              , a = 65535 & this.low
              , h = t.high >>> 16
              , l = 65535 & t.high
              , u = t.low >>> 16
              , d = 65535 & t.low
              , v = 0
              , w = 0
              , b = 0
              , p = 0;
            return b += (p += a * d) >>> 16,
            w += (b += n * d) >>> 16,
            b &= 65535,
            w += (b += a * u) >>> 16,
            v += (w += r * d) >>> 16,
            w &= 65535,
            v += (w += n * u) >>> 16,
            w &= 65535,
            v += (w += a * l) >>> 16,
            v += i * d + r * u + n * l + a * h,
            o((b &= 65535) << 16 | (p &= 65535), (v &= 65535) << 16 | (w &= 65535), this.unsigned)
        }
        ,
        k.mul = k.multiply,
        k.divide = function(t) {
            if (e(t) || (t = f(t)),
            t.isZero())
                throw Error("division by zero");
            if (this.isZero())
                return this.unsigned ? v : g;
            var i, r, n;
            if (this.unsigned) {
                if (t.unsigned || (t = t.toUnsigned()),
                t.gt(this))
                    return v;
                if (t.gt(this.shru(1)))
                    return b;
                n = v
            } else {
                if (this.eq(m))
                    return t.eq(w) || t.eq(p) ? m : t.eq(m) ? w : (i = this.shr(1).div(t).shl(1)).eq(g) ? t.isNegative() ? w : p : (r = this.sub(t.mul(i)),
                    n = i.add(r.div(t)));
                if (t.eq(m))
                    return this.unsigned ? v : g;
                if (this.isNegative())
                    return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
                if (t.isNegative())
                    return this.div(t.neg()).neg();
                n = g
            }
            for (r = this; r.gte(t); ) {
                i = Math.max(1, Math.floor(r.toNumber() / t.toNumber()));
                for (var o = Math.ceil(Math.log(i) / Math.LN2), h = o <= 48 ? 1 : a(2, o - 48), l = s(i), u = l.mul(t); u.isNegative() || u.gt(r); )
                    u = (l = s(i -= h, this.unsigned)).mul(t);
                l.isZero() && (l = w),
                n = n.add(l),
                r = r.sub(u)
            }
            return n
        }
        ,
        k.div = k.divide,
        k.modulo = function(t) {
            return e(t) || (t = f(t)),
            this.sub(this.div(t).mul(t))
        }
        ,
        k.mod = k.modulo,
        k.not = function() {
            return o(~this.low, ~this.high, this.unsigned)
        }
        ,
        k.and = function(t) {
            return e(t) || (t = f(t)),
            o(this.low & t.low, this.high & t.high, this.unsigned)
        }
        ,
        k.or = function(t) {
            return e(t) || (t = f(t)),
            o(this.low | t.low, this.high | t.high, this.unsigned)
        }
        ,
        k.xor = function(t) {
            return e(t) || (t = f(t)),
            o(this.low ^ t.low, this.high ^ t.high, this.unsigned)
        }
        ,
        k.shiftLeft = function(t) {
            return e(t) && (t = t.toInt()),
            0 == (t &= 63) ? this : t < 32 ? o(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : o(0, this.low << t - 32, this.unsigned)
        }
        ,
        k.shl = k.shiftLeft,
        k.shiftRight = function(t) {
            return e(t) && (t = t.toInt()),
            0 == (t &= 63) ? this : t < 32 ? o(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : o(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned)
        }
        ,
        k.shr = k.shiftRight,
        k.shiftRightUnsigned = function(t) {
            if (e(t) && (t = t.toInt()),
            0 == (t &= 63))
                return this;
            var i = this.high;
            return t < 32 ? o(this.low >>> t | i << 32 - t, i >>> t, this.unsigned) : o(32 === t ? i : i >>> t - 32, 0, this.unsigned)
        }
        ,
        k.shru = k.shiftRightUnsigned,
        k.toSigned = function() {
            return this.unsigned ? o(this.low, this.high, !1) : this
        }
        ,
        k.toUnsigned = function() {
            return this.unsigned ? this : o(this.low, this.high, !0)
        }
        ,
        k.toBytes = function(t) {
            return t ? this.toBytesLE() : this.toBytesBE()
        }
        ,
        k.toBytesLE = function() {
            var t = this.high
              , e = this.low;
            return [255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255]
        }
        ,
        k.toBytesBE = function() {
            var t = this.high
              , e = this.low;
            return [t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
        }
        ,
        t
    }
    ) ? r.apply(e, n) : r) || (t.exports = s)
}
, function(t, e, i) {
    "use strict";
    var r = i(23)
      , n = i(1)
      , s = i(10)
      , o = i(4)
      , a = i(11)
      , h = Object.prototype.toString
      , f = 0
      , l = -1
      , u = 0
      , d = 8;
    function c(t) {
        if (!(this instanceof c))
            return new c(t);
        this.options = n.assign({
            level: l,
            method: d,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: u,
            to: ""
        }, t || {});
        var e = this.options;
        e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
        this.err = 0,
        this.msg = "",
        this.ended = !1,
        this.chunks = [],
        this.strm = new a,
        this.strm.avail_out = 0;
        var i = r.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
        if (i !== f)
            throw new Error(o[i]);
        if (e.header && r.deflateSetHeader(this.strm, e.header),
        e.dictionary) {
            var g;
            if (g = "string" == typeof e.dictionary ? s.string2buf(e.dictionary) : "[object ArrayBuffer]" === h.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary,
            (i = r.deflateSetDictionary(this.strm, g)) !== f)
                throw new Error(o[i]);
            this._dict_set = !0
        }
    }
    function g(t, e) {
        var i = new c(e);
        if (i.push(t, !0),
        i.err)
            throw i.msg || o[i.err];
        return i.result
    }
    c.prototype.push = function(t, e) {
        var i, o, a = this.strm, l = this.options.chunkSize;
        if (this.ended)
            return !1;
        o = e === ~~e ? e : !0 === e ? 4 : 0,
        "string" == typeof t ? a.input = s.string2buf(t) : "[object ArrayBuffer]" === h.call(t) ? a.input = new Uint8Array(t) : a.input = t,
        a.next_in = 0,
        a.avail_in = a.input.length;
        do {
            if (0 === a.avail_out && (a.output = new n.Buf8(l),
            a.next_out = 0,
            a.avail_out = l),
            1 !== (i = r.deflate(a, o)) && i !== f)
                return this.onEnd(i),
                this.ended = !0,
                !1;
            0 !== a.avail_out && (0 !== a.avail_in || 4 !== o && 2 !== o) || ("string" === this.options.to ? this.onData(s.buf2binstring(n.shrinkBuf(a.output, a.next_out))) : this.onData(n.shrinkBuf(a.output, a.next_out)))
        } while ((a.avail_in > 0 || 0 === a.avail_out) && 1 !== i);return 4 === o ? (i = r.deflateEnd(this.strm),
        this.onEnd(i),
        this.ended = !0,
        i === f) : 2 !== o || (this.onEnd(f),
        a.avail_out = 0,
        !0)
    }
    ,
    c.prototype.onData = function(t) {
        this.chunks.push(t)
    }
    ,
    c.prototype.onEnd = function(t) {
        t === f && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = n.flattenChunks(this.chunks)),
        this.chunks = [],
        this.err = t,
        this.msg = this.strm.msg
    }
    ,
    e.Deflate = c,
    e.deflate = g,
    e.deflateRaw = function(t, e) {
        return (e = e || {}).raw = !0,
        g(t, e)
    }
    ,
    e.gzip = function(t, e) {
        return (e = e || {}).gzip = !0,
        g(t, e)
    }
}
, function(t, e, i) {
    "use strict";
    var r, n = i(1), s = i(24), o = i(8), a = i(9), h = i(4), f = 0, l = 1, u = 3, d = 4, c = 5, g = 0, v = 1, w = -2, b = -3, p = -5, _ = -1, y = 1, m = 2, k = 3, I = 4, E = 0, T = 2, S = 8, L = 9, A = 15, U = 8, x = 286, R = 30, B = 19, z = 2 * x + 1, N = 15, C = 3, O = 258, F = O + C + 1, M = 32, D = 42, Z = 69, j = 73, q = 91, P = 103, V = 113, H = 666, G = 1, K = 2, Y = 3, X = 4, W = 3;
    function J(t, e) {
        return t.msg = h[e],
        e
    }
    function Q(t) {
        return (t << 1) - (t > 4 ? 9 : 0)
    }
    function $(t) {
        for (var e = t.length; --e >= 0; )
            t[e] = 0
    }
    function tt(t) {
        var e = t.state
          , i = e.pending;
        i > t.avail_out && (i = t.avail_out),
        0 !== i && (n.arraySet(t.output, e.pending_buf, e.pending_out, i, t.next_out),
        t.next_out += i,
        e.pending_out += i,
        t.total_out += i,
        t.avail_out -= i,
        e.pending -= i,
        0 === e.pending && (e.pending_out = 0))
    }
    function et(t, e) {
        s._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e),
        t.block_start = t.strstart,
        tt(t.strm)
    }
    function it(t, e) {
        t.pending_buf[t.pending++] = e
    }
    function rt(t, e) {
        t.pending_buf[t.pending++] = e >>> 8 & 255,
        t.pending_buf[t.pending++] = 255 & e
    }
    function nt(t, e) {
        var i, r, n = t.max_chain_length, s = t.strstart, o = t.prev_length, a = t.nice_match, h = t.strstart > t.w_size - F ? t.strstart - (t.w_size - F) : 0, f = t.window, l = t.w_mask, u = t.prev, d = t.strstart + O, c = f[s + o - 1], g = f[s + o];
        t.prev_length >= t.good_match && (n >>= 2),
        a > t.lookahead && (a = t.lookahead);
        do {
            if (f[(i = e) + o] === g && f[i + o - 1] === c && f[i] === f[s] && f[++i] === f[s + 1]) {
                s += 2,
                i++;
                do {} while (f[++s] === f[++i] && f[++s] === f[++i] && f[++s] === f[++i] && f[++s] === f[++i] && f[++s] === f[++i] && f[++s] === f[++i] && f[++s] === f[++i] && f[++s] === f[++i] && s < d);if (r = O - (d - s),
                s = d - O,
                r > o) {
                    if (t.match_start = e,
                    o = r,
                    r >= a)
                        break;
                    c = f[s + o - 1],
                    g = f[s + o]
                }
            }
        } while ((e = u[e & l]) > h && 0 != --n);return o <= t.lookahead ? o : t.lookahead
    }
    function st(t) {
        var e, i, r, s, h, f, l, u, d, c, g = t.w_size;
        do {
            if (s = t.window_size - t.lookahead - t.strstart,
            t.strstart >= g + (g - F)) {
                n.arraySet(t.window, t.window, g, g, 0),
                t.match_start -= g,
                t.strstart -= g,
                t.block_start -= g,
                e = i = t.hash_size;
                do {
                    r = t.head[--e],
                    t.head[e] = r >= g ? r - g : 0
                } while (--i);e = i = g;
                do {
                    r = t.prev[--e],
                    t.prev[e] = r >= g ? r - g : 0
                } while (--i);s += g
            }
            if (0 === t.strm.avail_in)
                break;
            if (f = t.strm,
            l = t.window,
            u = t.strstart + t.lookahead,
            d = s,
            c = void 0,
            (c = f.avail_in) > d && (c = d),
            i = 0 === c ? 0 : (f.avail_in -= c,
            n.arraySet(l, f.input, f.next_in, c, u),
            1 === f.state.wrap ? f.adler = o(f.adler, l, c, u) : 2 === f.state.wrap && (f.adler = a(f.adler, l, c, u)),
            f.next_in += c,
            f.total_in += c,
            c),
            t.lookahead += i,
            t.lookahead + t.insert >= C)
                for (h = t.strstart - t.insert,
                t.ins_h = t.window[h],
                t.ins_h = (t.ins_h << t.hash_shift ^ t.window[h + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[h + C - 1]) & t.hash_mask,
                t.prev[h & t.w_mask] = t.head[t.ins_h],
                t.head[t.ins_h] = h,
                h++,
                t.insert--,
                !(t.lookahead + t.insert < C)); )
                    ;
        } while (t.lookahead < F && 0 !== t.strm.avail_in)
    }
    function ot(t, e) {
        for (var i, r; ; ) {
            if (t.lookahead < F) {
                if (st(t),
                t.lookahead < F && e === f)
                    return G;
                if (0 === t.lookahead)
                    break
            }
            if (i = 0,
            t.lookahead >= C && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + C - 1]) & t.hash_mask,
            i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
            t.head[t.ins_h] = t.strstart),
            0 !== i && t.strstart - i <= t.w_size - F && (t.match_length = nt(t, i)),
            t.match_length >= C)
                if (r = s._tr_tally(t, t.strstart - t.match_start, t.match_length - C),
                t.lookahead -= t.match_length,
                t.match_length <= t.max_lazy_match && t.lookahead >= C) {
                    t.match_length--;
                    do {
                        t.strstart++,
                        t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + C - 1]) & t.hash_mask,
                        i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                        t.head[t.ins_h] = t.strstart
                    } while (0 != --t.match_length);t.strstart++
                } else
                    t.strstart += t.match_length,
                    t.match_length = 0,
                    t.ins_h = t.window[t.strstart],
                    t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
            else
                r = s._tr_tally(t, 0, t.window[t.strstart]),
                t.lookahead--,
                t.strstart++;
            if (r && (et(t, !1),
            0 === t.strm.avail_out))
                return G
        }
        return t.insert = t.strstart < C - 1 ? t.strstart : C - 1,
        e === d ? (et(t, !0),
        0 === t.strm.avail_out ? Y : X) : t.last_lit && (et(t, !1),
        0 === t.strm.avail_out) ? G : K
    }
    function at(t, e) {
        for (var i, r, n; ; ) {
            if (t.lookahead < F) {
                if (st(t),
                t.lookahead < F && e === f)
                    return G;
                if (0 === t.lookahead)
                    break
            }
            if (i = 0,
            t.lookahead >= C && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + C - 1]) & t.hash_mask,
            i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
            t.head[t.ins_h] = t.strstart),
            t.prev_length = t.match_length,
            t.prev_match = t.match_start,
            t.match_length = C - 1,
            0 !== i && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - F && (t.match_length = nt(t, i),
            t.match_length <= 5 && (t.strategy === y || t.match_length === C && t.strstart - t.match_start > 4096) && (t.match_length = C - 1)),
            t.prev_length >= C && t.match_length <= t.prev_length) {
                n = t.strstart + t.lookahead - C,
                r = s._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - C),
                t.lookahead -= t.prev_length - 1,
                t.prev_length -= 2;
                do {
                    ++t.strstart <= n && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + C - 1]) & t.hash_mask,
                    i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                    t.head[t.ins_h] = t.strstart)
                } while (0 != --t.prev_length);if (t.match_available = 0,
                t.match_length = C - 1,
                t.strstart++,
                r && (et(t, !1),
                0 === t.strm.avail_out))
                    return G
            } else if (t.match_available) {
                if ((r = s._tr_tally(t, 0, t.window[t.strstart - 1])) && et(t, !1),
                t.strstart++,
                t.lookahead--,
                0 === t.strm.avail_out)
                    return G
            } else
                t.match_available = 1,
                t.strstart++,
                t.lookahead--
        }
        return t.match_available && (r = s._tr_tally(t, 0, t.window[t.strstart - 1]),
        t.match_available = 0),
        t.insert = t.strstart < C - 1 ? t.strstart : C - 1,
        e === d ? (et(t, !0),
        0 === t.strm.avail_out ? Y : X) : t.last_lit && (et(t, !1),
        0 === t.strm.avail_out) ? G : K
    }
    function ht(t, e, i, r, n) {
        this.good_length = t,
        this.max_lazy = e,
        this.nice_length = i,
        this.max_chain = r,
        this.func = n
    }
    function ft() {
        this.strm = null,
        this.status = 0,
        this.pending_buf = null,
        this.pending_buf_size = 0,
        this.pending_out = 0,
        this.pending = 0,
        this.wrap = 0,
        this.gzhead = null,
        this.gzindex = 0,
        this.method = S,
        this.last_flush = -1,
        this.w_size = 0,
        this.w_bits = 0,
        this.w_mask = 0,
        this.window = null,
        this.window_size = 0,
        this.prev = null,
        this.head = null,
        this.ins_h = 0,
        this.hash_size = 0,
        this.hash_bits = 0,
        this.hash_mask = 0,
        this.hash_shift = 0,
        this.block_start = 0,
        this.match_length = 0,
        this.prev_match = 0,
        this.match_available = 0,
        this.strstart = 0,
        this.match_start = 0,
        this.lookahead = 0,
        this.prev_length = 0,
        this.max_chain_length = 0,
        this.max_lazy_match = 0,
        this.level = 0,
        this.strategy = 0,
        this.good_match = 0,
        this.nice_match = 0,
        this.dyn_ltree = new n.Buf16(2 * z),
        this.dyn_dtree = new n.Buf16(2 * (2 * R + 1)),
        this.bl_tree = new n.Buf16(2 * (2 * B + 1)),
        $(this.dyn_ltree),
        $(this.dyn_dtree),
        $(this.bl_tree),
        this.l_desc = null,
        this.d_desc = null,
        this.bl_desc = null,
        this.bl_count = new n.Buf16(N + 1),
        this.heap = new n.Buf16(2 * x + 1),
        $(this.heap),
        this.heap_len = 0,
        this.heap_max = 0,
        this.depth = new n.Buf16(2 * x + 1),
        $(this.depth),
        this.l_buf = 0,
        this.lit_bufsize = 0,
        this.last_lit = 0,
        this.d_buf = 0,
        this.opt_len = 0,
        this.static_len = 0,
        this.matches = 0,
        this.insert = 0,
        this.bi_buf = 0,
        this.bi_valid = 0
    }
    function lt(t) {
        var e;
        return t && t.state ? (t.total_in = t.total_out = 0,
        t.data_type = T,
        (e = t.state).pending = 0,
        e.pending_out = 0,
        e.wrap < 0 && (e.wrap = -e.wrap),
        e.status = e.wrap ? D : V,
        t.adler = 2 === e.wrap ? 0 : 1,
        e.last_flush = f,
        s._tr_init(e),
        g) : J(t, w)
    }
    function ut(t) {
        var e, i = lt(t);
        return i === g && ((e = t.state).window_size = 2 * e.w_size,
        $(e.head),
        e.max_lazy_match = r[e.level].max_lazy,
        e.good_match = r[e.level].good_length,
        e.nice_match = r[e.level].nice_length,
        e.max_chain_length = r[e.level].max_chain,
        e.strstart = 0,
        e.block_start = 0,
        e.lookahead = 0,
        e.insert = 0,
        e.match_length = e.prev_length = C - 1,
        e.match_available = 0,
        e.ins_h = 0),
        i
    }
    function dt(t, e, i, r, s, o) {
        if (!t)
            return w;
        var a = 1;
        if (e === _ && (e = 6),
        r < 0 ? (a = 0,
        r = -r) : r > 15 && (a = 2,
        r -= 16),
        s < 1 || s > L || i !== S || r < 8 || r > 15 || e < 0 || e > 9 || o < 0 || o > I)
            return J(t, w);
        8 === r && (r = 9);
        var h = new ft;
        return t.state = h,
        h.strm = t,
        h.wrap = a,
        h.gzhead = null,
        h.w_bits = r,
        h.w_size = 1 << h.w_bits,
        h.w_mask = h.w_size - 1,
        h.hash_bits = s + 7,
        h.hash_size = 1 << h.hash_bits,
        h.hash_mask = h.hash_size - 1,
        h.hash_shift = ~~((h.hash_bits + C - 1) / C),
        h.window = new n.Buf8(2 * h.w_size),
        h.head = new n.Buf16(h.hash_size),
        h.prev = new n.Buf16(h.w_size),
        h.lit_bufsize = 1 << s + 6,
        h.pending_buf_size = 4 * h.lit_bufsize,
        h.pending_buf = new n.Buf8(h.pending_buf_size),
        h.d_buf = 1 * h.lit_bufsize,
        h.l_buf = 3 * h.lit_bufsize,
        h.level = e,
        h.strategy = o,
        h.method = i,
        ut(t)
    }
    r = [new ht(0,0,0,0,function(t, e) {
        var i = 65535;
        for (i > t.pending_buf_size - 5 && (i = t.pending_buf_size - 5); ; ) {
            if (t.lookahead <= 1) {
                if (st(t),
                0 === t.lookahead && e === f)
                    return G;
                if (0 === t.lookahead)
                    break
            }
            t.strstart += t.lookahead,
            t.lookahead = 0;
            var r = t.block_start + i;
            if ((0 === t.strstart || t.strstart >= r) && (t.lookahead = t.strstart - r,
            t.strstart = r,
            et(t, !1),
            0 === t.strm.avail_out))
                return G;
            if (t.strstart - t.block_start >= t.w_size - F && (et(t, !1),
            0 === t.strm.avail_out))
                return G
        }
        return t.insert = 0,
        e === d ? (et(t, !0),
        0 === t.strm.avail_out ? Y : X) : (t.strstart > t.block_start && (et(t, !1),
        t.strm.avail_out),
        G)
    }
    ), new ht(4,4,8,4,ot), new ht(4,5,16,8,ot), new ht(4,6,32,32,ot), new ht(4,4,16,16,at), new ht(8,16,32,32,at), new ht(8,16,128,128,at), new ht(8,32,128,256,at), new ht(32,128,258,1024,at), new ht(32,258,258,4096,at)],
    e.deflateInit = function(t, e) {
        return dt(t, e, S, A, U, E)
    }
    ,
    e.deflateInit2 = dt,
    e.deflateReset = ut,
    e.deflateResetKeep = lt,
    e.deflateSetHeader = function(t, e) {
        return t && t.state ? 2 !== t.state.wrap ? w : (t.state.gzhead = e,
        g) : w
    }
    ,
    e.deflate = function(t, e) {
        var i, n, o, h;
        if (!t || !t.state || e > c || e < 0)
            return t ? J(t, w) : w;
        if (n = t.state,
        !t.output || !t.input && 0 !== t.avail_in || n.status === H && e !== d)
            return J(t, 0 === t.avail_out ? p : w);
        if (n.strm = t,
        i = n.last_flush,
        n.last_flush = e,
        n.status === D)
            if (2 === n.wrap)
                t.adler = 0,
                it(n, 31),
                it(n, 139),
                it(n, 8),
                n.gzhead ? (it(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)),
                it(n, 255 & n.gzhead.time),
                it(n, n.gzhead.time >> 8 & 255),
                it(n, n.gzhead.time >> 16 & 255),
                it(n, n.gzhead.time >> 24 & 255),
                it(n, 9 === n.level ? 2 : n.strategy >= m || n.level < 2 ? 4 : 0),
                it(n, 255 & n.gzhead.os),
                n.gzhead.extra && n.gzhead.extra.length && (it(n, 255 & n.gzhead.extra.length),
                it(n, n.gzhead.extra.length >> 8 & 255)),
                n.gzhead.hcrc && (t.adler = a(t.adler, n.pending_buf, n.pending, 0)),
                n.gzindex = 0,
                n.status = Z) : (it(n, 0),
                it(n, 0),
                it(n, 0),
                it(n, 0),
                it(n, 0),
                it(n, 9 === n.level ? 2 : n.strategy >= m || n.level < 2 ? 4 : 0),
                it(n, W),
                n.status = V);
            else {
                var b = S + (n.w_bits - 8 << 4) << 8;
                b |= (n.strategy >= m || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6,
                0 !== n.strstart && (b |= M),
                b += 31 - b % 31,
                n.status = V,
                rt(n, b),
                0 !== n.strstart && (rt(n, t.adler >>> 16),
                rt(n, 65535 & t.adler)),
                t.adler = 1
            }
        if (n.status === Z)
            if (n.gzhead.extra) {
                for (o = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > o && (t.adler = a(t.adler, n.pending_buf, n.pending - o, o)),
                tt(t),
                o = n.pending,
                n.pending !== n.pending_buf_size)); )
                    it(n, 255 & n.gzhead.extra[n.gzindex]),
                    n.gzindex++;
                n.gzhead.hcrc && n.pending > o && (t.adler = a(t.adler, n.pending_buf, n.pending - o, o)),
                n.gzindex === n.gzhead.extra.length && (n.gzindex = 0,
                n.status = j)
            } else
                n.status = j;
        if (n.status === j)
            if (n.gzhead.name) {
                o = n.pending;
                do {
                    if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > o && (t.adler = a(t.adler, n.pending_buf, n.pending - o, o)),
                    tt(t),
                    o = n.pending,
                    n.pending === n.pending_buf_size)) {
                        h = 1;
                        break
                    }
                    h = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0,
                    it(n, h)
                } while (0 !== h);n.gzhead.hcrc && n.pending > o && (t.adler = a(t.adler, n.pending_buf, n.pending - o, o)),
                0 === h && (n.gzindex = 0,
                n.status = q)
            } else
                n.status = q;
        if (n.status === q)
            if (n.gzhead.comment) {
                o = n.pending;
                do {
                    if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > o && (t.adler = a(t.adler, n.pending_buf, n.pending - o, o)),
                    tt(t),
                    o = n.pending,
                    n.pending === n.pending_buf_size)) {
                        h = 1;
                        break
                    }
                    h = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0,
                    it(n, h)
                } while (0 !== h);n.gzhead.hcrc && n.pending > o && (t.adler = a(t.adler, n.pending_buf, n.pending - o, o)),
                0 === h && (n.status = P)
            } else
                n.status = P;
        if (n.status === P && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && tt(t),
        n.pending + 2 <= n.pending_buf_size && (it(n, 255 & t.adler),
        it(n, t.adler >> 8 & 255),
        t.adler = 0,
        n.status = V)) : n.status = V),
        0 !== n.pending) {
            if (tt(t),
            0 === t.avail_out)
                return n.last_flush = -1,
                g
        } else if (0 === t.avail_in && Q(e) <= Q(i) && e !== d)
            return J(t, p);
        if (n.status === H && 0 !== t.avail_in)
            return J(t, p);
        if (0 !== t.avail_in || 0 !== n.lookahead || e !== f && n.status !== H) {
            var _ = n.strategy === m ? function(t, e) {
                for (var i; ; ) {
                    if (0 === t.lookahead && (st(t),
                    0 === t.lookahead)) {
                        if (e === f)
                            return G;
                        break
                    }
                    if (t.match_length = 0,
                    i = s._tr_tally(t, 0, t.window[t.strstart]),
                    t.lookahead--,
                    t.strstart++,
                    i && (et(t, !1),
                    0 === t.strm.avail_out))
                        return G
                }
                return t.insert = 0,
                e === d ? (et(t, !0),
                0 === t.strm.avail_out ? Y : X) : t.last_lit && (et(t, !1),
                0 === t.strm.avail_out) ? G : K
            }(n, e) : n.strategy === k ? function(t, e) {
                for (var i, r, n, o, a = t.window; ; ) {
                    if (t.lookahead <= O) {
                        if (st(t),
                        t.lookahead <= O && e === f)
                            return G;
                        if (0 === t.lookahead)
                            break
                    }
                    if (t.match_length = 0,
                    t.lookahead >= C && t.strstart > 0 && (r = a[n = t.strstart - 1]) === a[++n] && r === a[++n] && r === a[++n]) {
                        o = t.strstart + O;
                        do {} while (r === a[++n] && r === a[++n] && r === a[++n] && r === a[++n] && r === a[++n] && r === a[++n] && r === a[++n] && r === a[++n] && n < o);t.match_length = O - (o - n),
                        t.match_length > t.lookahead && (t.match_length = t.lookahead)
                    }
                    if (t.match_length >= C ? (i = s._tr_tally(t, 1, t.match_length - C),
                    t.lookahead -= t.match_length,
                    t.strstart += t.match_length,
                    t.match_length = 0) : (i = s._tr_tally(t, 0, t.window[t.strstart]),
                    t.lookahead--,
                    t.strstart++),
                    i && (et(t, !1),
                    0 === t.strm.avail_out))
                        return G
                }
                return t.insert = 0,
                e === d ? (et(t, !0),
                0 === t.strm.avail_out ? Y : X) : t.last_lit && (et(t, !1),
                0 === t.strm.avail_out) ? G : K
            }(n, e) : r[n.level].func(n, e);
            if (_ !== Y && _ !== X || (n.status = H),
            _ === G || _ === Y)
                return 0 === t.avail_out && (n.last_flush = -1),
                g;
            if (_ === K && (e === l ? s._tr_align(n) : e !== c && (s._tr_stored_block(n, 0, 0, !1),
            e === u && ($(n.head),
            0 === n.lookahead && (n.strstart = 0,
            n.block_start = 0,
            n.insert = 0))),
            tt(t),
            0 === t.avail_out))
                return n.last_flush = -1,
                g
        }
        return e !== d ? g : n.wrap <= 0 ? v : (2 === n.wrap ? (it(n, 255 & t.adler),
        it(n, t.adler >> 8 & 255),
        it(n, t.adler >> 16 & 255),
        it(n, t.adler >> 24 & 255),
        it(n, 255 & t.total_in),
        it(n, t.total_in >> 8 & 255),
        it(n, t.total_in >> 16 & 255),
        it(n, t.total_in >> 24 & 255)) : (rt(n, t.adler >>> 16),
        rt(n, 65535 & t.adler)),
        tt(t),
        n.wrap > 0 && (n.wrap = -n.wrap),
        0 !== n.pending ? g : v)
    }
    ,
    e.deflateEnd = function(t) {
        var e;
        return t && t.state ? (e = t.state.status) !== D && e !== Z && e !== j && e !== q && e !== P && e !== V && e !== H ? J(t, w) : (t.state = null,
        e === V ? J(t, b) : g) : w
    }
    ,
    e.deflateSetDictionary = function(t, e) {
        var i, r, s, a, h, f, l, u, d = e.length;
        if (!t || !t.state)
            return w;
        if (2 === (a = (i = t.state).wrap) || 1 === a && i.status !== D || i.lookahead)
            return w;
        for (1 === a && (t.adler = o(t.adler, e, d, 0)),
        i.wrap = 0,
        d >= i.w_size && (0 === a && ($(i.head),
        i.strstart = 0,
        i.block_start = 0,
        i.insert = 0),
        u = new n.Buf8(i.w_size),
        n.arraySet(u, e, d - i.w_size, i.w_size, 0),
        e = u,
        d = i.w_size),
        h = t.avail_in,
        f = t.next_in,
        l = t.input,
        t.avail_in = d,
        t.next_in = 0,
        t.input = e,
        st(i); i.lookahead >= C; ) {
            r = i.strstart,
            s = i.lookahead - (C - 1);
            do {
                i.ins_h = (i.ins_h << i.hash_shift ^ i.window[r + C - 1]) & i.hash_mask,
                i.prev[r & i.w_mask] = i.head[i.ins_h],
                i.head[i.ins_h] = r,
                r++
            } while (--s);i.strstart = r,
            i.lookahead = C - 1,
            st(i)
        }
        return i.strstart += i.lookahead,
        i.block_start = i.strstart,
        i.insert = i.lookahead,
        i.lookahead = 0,
        i.match_length = i.prev_length = C - 1,
        i.match_available = 0,
        t.next_in = f,
        t.input = l,
        t.avail_in = h,
        i.wrap = a,
        g
    }
    ,
    e.deflateInfo = "pako deflate (from Nodeca project)"
}
, function(t, e, i) {
    "use strict";
    var r = i(1)
      , n = 4
      , s = 0
      , o = 1
      , a = 2;
    function h(t) {
        for (var e = t.length; --e >= 0; )
            t[e] = 0
    }
    var f = 0
      , l = 1
      , u = 2
      , d = 29
      , c = 256
      , g = c + 1 + d
      , v = 30
      , w = 19
      , b = 2 * g + 1
      , p = 15
      , _ = 16
      , y = 7
      , m = 256
      , k = 16
      , I = 17
      , E = 18
      , T = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
      , S = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
      , L = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
      , A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
      , U = new Array(2 * (g + 2));
    h(U);
    var x = new Array(2 * v);
    h(x);
    var R = new Array(512);
    h(R);
    var B = new Array(256);
    h(B);
    var z = new Array(d);
    h(z);
    var N, C, O, F = new Array(v);
    function M(t, e, i, r, n) {
        this.static_tree = t,
        this.extra_bits = e,
        this.extra_base = i,
        this.elems = r,
        this.max_length = n,
        this.has_stree = t && t.length
    }
    function D(t, e) {
        this.dyn_tree = t,
        this.max_code = 0,
        this.stat_desc = e
    }
    function Z(t) {
        return t < 256 ? R[t] : R[256 + (t >>> 7)]
    }
    function j(t, e) {
        t.pending_buf[t.pending++] = 255 & e,
        t.pending_buf[t.pending++] = e >>> 8 & 255
    }
    function q(t, e, i) {
        t.bi_valid > _ - i ? (t.bi_buf |= e << t.bi_valid & 65535,
        j(t, t.bi_buf),
        t.bi_buf = e >> _ - t.bi_valid,
        t.bi_valid += i - _) : (t.bi_buf |= e << t.bi_valid & 65535,
        t.bi_valid += i)
    }
    function P(t, e, i) {
        q(t, i[2 * e], i[2 * e + 1])
    }
    function V(t, e) {
        var i = 0;
        do {
            i |= 1 & t,
            t >>>= 1,
            i <<= 1
        } while (--e > 0);return i >>> 1
    }
    function H(t, e, i) {
        var r, n, s = new Array(p + 1), o = 0;
        for (r = 1; r <= p; r++)
            s[r] = o = o + i[r - 1] << 1;
        for (n = 0; n <= e; n++) {
            var a = t[2 * n + 1];
            0 !== a && (t[2 * n] = V(s[a]++, a))
        }
    }
    function G(t) {
        var e;
        for (e = 0; e < g; e++)
            t.dyn_ltree[2 * e] = 0;
        for (e = 0; e < v; e++)
            t.dyn_dtree[2 * e] = 0;
        for (e = 0; e < w; e++)
            t.bl_tree[2 * e] = 0;
        t.dyn_ltree[2 * m] = 1,
        t.opt_len = t.static_len = 0,
        t.last_lit = t.matches = 0
    }
    function K(t) {
        t.bi_valid > 8 ? j(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
        t.bi_buf = 0,
        t.bi_valid = 0
    }
    function Y(t, e, i, r) {
        var n = 2 * e
          , s = 2 * i;
        return t[n] < t[s] || t[n] === t[s] && r[e] <= r[i]
    }
    function X(t, e, i) {
        for (var r = t.heap[i], n = i << 1; n <= t.heap_len && (n < t.heap_len && Y(e, t.heap[n + 1], t.heap[n], t.depth) && n++,
        !Y(e, r, t.heap[n], t.depth)); )
            t.heap[i] = t.heap[n],
            i = n,
            n <<= 1;
        t.heap[i] = r
    }
    function W(t, e, i) {
        var r, n, s, o, a = 0;
        if (0 !== t.last_lit)
            do {
                r = t.pending_buf[t.d_buf + 2 * a] << 8 | t.pending_buf[t.d_buf + 2 * a + 1],
                n = t.pending_buf[t.l_buf + a],
                a++,
                0 === r ? P(t, n, e) : (P(t, (s = B[n]) + c + 1, e),
                0 !== (o = T[s]) && q(t, n -= z[s], o),
                P(t, s = Z(--r), i),
                0 !== (o = S[s]) && q(t, r -= F[s], o))
            } while (a < t.last_lit);P(t, m, e)
    }
    function J(t, e) {
        var i, r, n, s = e.dyn_tree, o = e.stat_desc.static_tree, a = e.stat_desc.has_stree, h = e.stat_desc.elems, f = -1;
        for (t.heap_len = 0,
        t.heap_max = b,
        i = 0; i < h; i++)
            0 !== s[2 * i] ? (t.heap[++t.heap_len] = f = i,
            t.depth[i] = 0) : s[2 * i + 1] = 0;
        for (; t.heap_len < 2; )
            s[2 * (n = t.heap[++t.heap_len] = f < 2 ? ++f : 0)] = 1,
            t.depth[n] = 0,
            t.opt_len--,
            a && (t.static_len -= o[2 * n + 1]);
        for (e.max_code = f,
        i = t.heap_len >> 1; i >= 1; i--)
            X(t, s, i);
        n = h;
        do {
            i = t.heap[1],
            t.heap[1] = t.heap[t.heap_len--],
            X(t, s, 1),
            r = t.heap[1],
            t.heap[--t.heap_max] = i,
            t.heap[--t.heap_max] = r,
            s[2 * n] = s[2 * i] + s[2 * r],
            t.depth[n] = (t.depth[i] >= t.depth[r] ? t.depth[i] : t.depth[r]) + 1,
            s[2 * i + 1] = s[2 * r + 1] = n,
            t.heap[1] = n++,
            X(t, s, 1)
        } while (t.heap_len >= 2);t.heap[--t.heap_max] = t.heap[1],
        function(t, e) {
            var i, r, n, s, o, a, h = e.dyn_tree, f = e.max_code, l = e.stat_desc.static_tree, u = e.stat_desc.has_stree, d = e.stat_desc.extra_bits, c = e.stat_desc.extra_base, g = e.stat_desc.max_length, v = 0;
            for (s = 0; s <= p; s++)
                t.bl_count[s] = 0;
            for (h[2 * t.heap[t.heap_max] + 1] = 0,
            i = t.heap_max + 1; i < b; i++)
                (s = h[2 * h[2 * (r = t.heap[i]) + 1] + 1] + 1) > g && (s = g,
                v++),
                h[2 * r + 1] = s,
                r > f || (t.bl_count[s]++,
                o = 0,
                r >= c && (o = d[r - c]),
                a = h[2 * r],
                t.opt_len += a * (s + o),
                u && (t.static_len += a * (l[2 * r + 1] + o)));
            if (0 !== v) {
                do {
                    for (s = g - 1; 0 === t.bl_count[s]; )
                        s--;
                    t.bl_count[s]--,
                    t.bl_count[s + 1] += 2,
                    t.bl_count[g]--,
                    v -= 2
                } while (v > 0);for (s = g; 0 !== s; s--)
                    for (r = t.bl_count[s]; 0 !== r; )
                        (n = t.heap[--i]) > f || (h[2 * n + 1] !== s && (t.opt_len += (s - h[2 * n + 1]) * h[2 * n],
                        h[2 * n + 1] = s),
                        r--)
            }
        }(t, e),
        H(s, f, t.bl_count)
    }
    function Q(t, e, i) {
        var r, n, s = -1, o = e[1], a = 0, h = 7, f = 4;
        for (0 === o && (h = 138,
        f = 3),
        e[2 * (i + 1) + 1] = 65535,
        r = 0; r <= i; r++)
            n = o,
            o = e[2 * (r + 1) + 1],
            ++a < h && n === o || (a < f ? t.bl_tree[2 * n] += a : 0 !== n ? (n !== s && t.bl_tree[2 * n]++,
            t.bl_tree[2 * k]++) : a <= 10 ? t.bl_tree[2 * I]++ : t.bl_tree[2 * E]++,
            a = 0,
            s = n,
            0 === o ? (h = 138,
            f = 3) : n === o ? (h = 6,
            f = 3) : (h = 7,
            f = 4))
    }
    function $(t, e, i) {
        var r, n, s = -1, o = e[1], a = 0, h = 7, f = 4;
        for (0 === o && (h = 138,
        f = 3),
        r = 0; r <= i; r++)
            if (n = o,
            o = e[2 * (r + 1) + 1],
            !(++a < h && n === o)) {
                if (a < f)
                    do {
                        P(t, n, t.bl_tree)
                    } while (0 != --a);
                else
                    0 !== n ? (n !== s && (P(t, n, t.bl_tree),
                    a--),
                    P(t, k, t.bl_tree),
                    q(t, a - 3, 2)) : a <= 10 ? (P(t, I, t.bl_tree),
                    q(t, a - 3, 3)) : (P(t, E, t.bl_tree),
                    q(t, a - 11, 7));
                a = 0,
                s = n,
                0 === o ? (h = 138,
                f = 3) : n === o ? (h = 6,
                f = 3) : (h = 7,
                f = 4)
            }
    }
    h(F);
    var tt = !1;
    function et(t, e, i, n) {
        q(t, (f << 1) + (n ? 1 : 0), 3),
        function(t, e, i, n) {
            K(t),
            n && (j(t, i),
            j(t, ~i)),
            r.arraySet(t.pending_buf, t.window, e, i, t.pending),
            t.pending += i
        }(t, e, i, !0)
    }
    e._tr_init = function(t) {
        tt || (function() {
            var t, e, i, r, n, s = new Array(p + 1);
            for (i = 0,
            r = 0; r < d - 1; r++)
                for (z[r] = i,
                t = 0; t < 1 << T[r]; t++)
                    B[i++] = r;
            for (B[i - 1] = r,
            n = 0,
            r = 0; r < 16; r++)
                for (F[r] = n,
                t = 0; t < 1 << S[r]; t++)
                    R[n++] = r;
            for (n >>= 7; r < v; r++)
                for (F[r] = n << 7,
                t = 0; t < 1 << S[r] - 7; t++)
                    R[256 + n++] = r;
            for (e = 0; e <= p; e++)
                s[e] = 0;
            for (t = 0; t <= 143; )
                U[2 * t + 1] = 8,
                t++,
                s[8]++;
            for (; t <= 255; )
                U[2 * t + 1] = 9,
                t++,
                s[9]++;
            for (; t <= 279; )
                U[2 * t + 1] = 7,
                t++,
                s[7]++;
            for (; t <= 287; )
                U[2 * t + 1] = 8,
                t++,
                s[8]++;
            for (H(U, g + 1, s),
            t = 0; t < v; t++)
                x[2 * t + 1] = 5,
                x[2 * t] = V(t, 5);
            N = new M(U,T,c + 1,g,p),
            C = new M(x,S,0,v,p),
            O = new M(new Array(0),L,0,w,y)
        }(),
        tt = !0),
        t.l_desc = new D(t.dyn_ltree,N),
        t.d_desc = new D(t.dyn_dtree,C),
        t.bl_desc = new D(t.bl_tree,O),
        t.bi_buf = 0,
        t.bi_valid = 0,
        G(t)
    }
    ,
    e._tr_stored_block = et,
    e._tr_flush_block = function(t, e, i, r) {
        var h, f, d = 0;
        t.level > 0 ? (t.strm.data_type === a && (t.strm.data_type = function(t) {
            var e, i = 4093624447;
            for (e = 0; e <= 31; e++,
            i >>>= 1)
                if (1 & i && 0 !== t.dyn_ltree[2 * e])
                    return s;
            if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26])
                return o;
            for (e = 32; e < c; e++)
                if (0 !== t.dyn_ltree[2 * e])
                    return o;
            return s
        }(t)),
        J(t, t.l_desc),
        J(t, t.d_desc),
        d = function(t) {
            var e;
            for (Q(t, t.dyn_ltree, t.l_desc.max_code),
            Q(t, t.dyn_dtree, t.d_desc.max_code),
            J(t, t.bl_desc),
            e = w - 1; e >= 3 && 0 === t.bl_tree[2 * A[e] + 1]; e--)
                ;
            return t.opt_len += 3 * (e + 1) + 5 + 5 + 4,
            e
        }(t),
        h = t.opt_len + 3 + 7 >>> 3,
        (f = t.static_len + 3 + 7 >>> 3) <= h && (h = f)) : h = f = i + 5,
        i + 4 <= h && -1 !== e ? et(t, e, i, r) : t.strategy === n || f === h ? (q(t, (l << 1) + (r ? 1 : 0), 3),
        W(t, U, x)) : (q(t, (u << 1) + (r ? 1 : 0), 3),
        function(t, e, i, r) {
            var n;
            for (q(t, e - 257, 5),
            q(t, i - 1, 5),
            q(t, r - 4, 4),
            n = 0; n < r; n++)
                q(t, t.bl_tree[2 * A[n] + 1], 3);
            $(t, t.dyn_ltree, e - 1),
            $(t, t.dyn_dtree, i - 1)
        }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, d + 1),
        W(t, t.dyn_ltree, t.dyn_dtree)),
        G(t),
        r && K(t)
    }
    ,
    e._tr_tally = function(t, e, i) {
        return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255,
        t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e,
        t.pending_buf[t.l_buf + t.last_lit] = 255 & i,
        t.last_lit++,
        0 === e ? t.dyn_ltree[2 * i]++ : (t.matches++,
        e--,
        t.dyn_ltree[2 * (B[i] + c + 1)]++,
        t.dyn_dtree[2 * Z(e)]++),
        t.last_lit === t.lit_bufsize - 1
    }
    ,
    e._tr_align = function(t) {
        q(t, l << 1, 3),
        P(t, m, U),
        function(t) {
            16 === t.bi_valid ? (j(t, t.bi_buf),
            t.bi_buf = 0,
            t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf,
            t.bi_buf >>= 8,
            t.bi_valid -= 8)
        }(t)
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(26)
      , n = i(1)
      , s = i(10)
      , o = i(12)
      , a = i(4)
      , h = i(11)
      , f = i(29)
      , l = Object.prototype.toString;
    function u(t) {
        if (!(this instanceof u))
            return new u(t);
        this.options = n.assign({
            chunkSize: 16384,
            windowBits: 0,
            to: ""
        }, t || {});
        var e = this.options;
        e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits,
        0 === e.windowBits && (e.windowBits = -15)),
        !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32),
        e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
        this.err = 0,
        this.msg = "",
        this.ended = !1,
        this.chunks = [],
        this.strm = new h,
        this.strm.avail_out = 0;
        var i = r.inflateInit2(this.strm, e.windowBits);
        if (i !== o.Z_OK)
            throw new Error(a[i]);
        if (this.header = new f,
        r.inflateGetHeader(this.strm, this.header),
        e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = s.string2buf(e.dictionary) : "[object ArrayBuffer]" === l.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)),
        e.raw && (i = r.inflateSetDictionary(this.strm, e.dictionary)) !== o.Z_OK))
            throw new Error(a[i])
    }
    function d(t, e) {
        var i = new u(e);
        if (i.push(t, !0),
        i.err)
            throw i.msg || a[i.err];
        return i.result
    }
    u.prototype.push = function(t, e) {
        var i, a, h, f, u, d = this.strm, c = this.options.chunkSize, g = this.options.dictionary, v = !1;
        if (this.ended)
            return !1;
        a = e === ~~e ? e : !0 === e ? o.Z_FINISH : o.Z_NO_FLUSH,
        "string" == typeof t ? d.input = s.binstring2buf(t) : "[object ArrayBuffer]" === l.call(t) ? d.input = new Uint8Array(t) : d.input = t,
        d.next_in = 0,
        d.avail_in = d.input.length;
        do {
            if (0 === d.avail_out && (d.output = new n.Buf8(c),
            d.next_out = 0,
            d.avail_out = c),
            (i = r.inflate(d, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && g && (i = r.inflateSetDictionary(this.strm, g)),
            i === o.Z_BUF_ERROR && !0 === v && (i = o.Z_OK,
            v = !1),
            i !== o.Z_STREAM_END && i !== o.Z_OK)
                return this.onEnd(i),
                this.ended = !0,
                !1;
            d.next_out && (0 !== d.avail_out && i !== o.Z_STREAM_END && (0 !== d.avail_in || a !== o.Z_FINISH && a !== o.Z_SYNC_FLUSH) || ("string" === this.options.to ? (h = s.utf8border(d.output, d.next_out),
            f = d.next_out - h,
            u = s.buf2string(d.output, h),
            d.next_out = f,
            d.avail_out = c - f,
            f && n.arraySet(d.output, d.output, h, f, 0),
            this.onData(u)) : this.onData(n.shrinkBuf(d.output, d.next_out)))),
            0 === d.avail_in && 0 === d.avail_out && (v = !0)
        } while ((d.avail_in > 0 || 0 === d.avail_out) && i !== o.Z_STREAM_END);return i === o.Z_STREAM_END && (a = o.Z_FINISH),
        a === o.Z_FINISH ? (i = r.inflateEnd(this.strm),
        this.onEnd(i),
        this.ended = !0,
        i === o.Z_OK) : a !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK),
        d.avail_out = 0,
        !0)
    }
    ,
    u.prototype.onData = function(t) {
        this.chunks.push(t)
    }
    ,
    u.prototype.onEnd = function(t) {
        t === o.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = n.flattenChunks(this.chunks)),
        this.chunks = [],
        this.err = t,
        this.msg = this.strm.msg
    }
    ,
    e.Inflate = u,
    e.inflate = d,
    e.inflateRaw = function(t, e) {
        return (e = e || {}).raw = !0,
        d(t, e)
    }
    ,
    e.ungzip = d
}
, function(t, e, i) {
    "use strict";
    var r = i(1)
      , n = i(8)
      , s = i(9)
      , o = i(27)
      , a = i(28)
      , h = 0
      , f = 1
      , l = 2
      , u = 4
      , d = 5
      , c = 6
      , g = 0
      , v = 1
      , w = 2
      , b = -2
      , p = -3
      , _ = -4
      , y = -5
      , m = 8
      , k = 1
      , I = 2
      , E = 3
      , T = 4
      , S = 5
      , L = 6
      , A = 7
      , U = 8
      , x = 9
      , R = 10
      , B = 11
      , z = 12
      , N = 13
      , C = 14
      , O = 15
      , F = 16
      , M = 17
      , D = 18
      , Z = 19
      , j = 20
      , q = 21
      , P = 22
      , V = 23
      , H = 24
      , G = 25
      , K = 26
      , Y = 27
      , X = 28
      , W = 29
      , J = 30
      , Q = 31
      , $ = 32
      , tt = 852
      , et = 592
      , it = 15;
    function rt(t) {
        return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24)
    }
    function nt() {
        this.mode = 0,
        this.last = !1,
        this.wrap = 0,
        this.havedict = !1,
        this.flags = 0,
        this.dmax = 0,
        this.check = 0,
        this.total = 0,
        this.head = null,
        this.wbits = 0,
        this.wsize = 0,
        this.whave = 0,
        this.wnext = 0,
        this.window = null,
        this.hold = 0,
        this.bits = 0,
        this.length = 0,
        this.offset = 0,
        this.extra = 0,
        this.lencode = null,
        this.distcode = null,
        this.lenbits = 0,
        this.distbits = 0,
        this.ncode = 0,
        this.nlen = 0,
        this.ndist = 0,
        this.have = 0,
        this.next = null,
        this.lens = new r.Buf16(320),
        this.work = new r.Buf16(288),
        this.lendyn = null,
        this.distdyn = null,
        this.sane = 0,
        this.back = 0,
        this.was = 0
    }
    function st(t) {
        var e;
        return t && t.state ? (e = t.state,
        t.total_in = t.total_out = e.total = 0,
        t.msg = "",
        e.wrap && (t.adler = 1 & e.wrap),
        e.mode = k,
        e.last = 0,
        e.havedict = 0,
        e.dmax = 32768,
        e.head = null,
        e.hold = 0,
        e.bits = 0,
        e.lencode = e.lendyn = new r.Buf32(tt),
        e.distcode = e.distdyn = new r.Buf32(et),
        e.sane = 1,
        e.back = -1,
        g) : b
    }
    function ot(t) {
        var e;
        return t && t.state ? ((e = t.state).wsize = 0,
        e.whave = 0,
        e.wnext = 0,
        st(t)) : b
    }
    function at(t, e) {
        var i, r;
        return t && t.state ? (r = t.state,
        e < 0 ? (i = 0,
        e = -e) : (i = 1 + (e >> 4),
        e < 48 && (e &= 15)),
        e && (e < 8 || e > 15) ? b : (null !== r.window && r.wbits !== e && (r.window = null),
        r.wrap = i,
        r.wbits = e,
        ot(t))) : b
    }
    function ht(t, e) {
        var i, r;
        return t ? (r = new nt,
        t.state = r,
        r.window = null,
        (i = at(t, e)) !== g && (t.state = null),
        i) : b
    }
    var ft, lt, ut = !0;
    function dt(t) {
        if (ut) {
            var e;
            for (ft = new r.Buf32(512),
            lt = new r.Buf32(32),
            e = 0; e < 144; )
                t.lens[e++] = 8;
            for (; e < 256; )
                t.lens[e++] = 9;
            for (; e < 280; )
                t.lens[e++] = 7;
            for (; e < 288; )
                t.lens[e++] = 8;
            for (a(f, t.lens, 0, 288, ft, 0, t.work, {
                bits: 9
            }),
            e = 0; e < 32; )
                t.lens[e++] = 5;
            a(l, t.lens, 0, 32, lt, 0, t.work, {
                bits: 5
            }),
            ut = !1
        }
        t.lencode = ft,
        t.lenbits = 9,
        t.distcode = lt,
        t.distbits = 5
    }
    function ct(t, e, i, n) {
        var s, o = t.state;
        return null === o.window && (o.wsize = 1 << o.wbits,
        o.wnext = 0,
        o.whave = 0,
        o.window = new r.Buf8(o.wsize)),
        n >= o.wsize ? (r.arraySet(o.window, e, i - o.wsize, o.wsize, 0),
        o.wnext = 0,
        o.whave = o.wsize) : ((s = o.wsize - o.wnext) > n && (s = n),
        r.arraySet(o.window, e, i - n, s, o.wnext),
        (n -= s) ? (r.arraySet(o.window, e, i - n, n, 0),
        o.wnext = n,
        o.whave = o.wsize) : (o.wnext += s,
        o.wnext === o.wsize && (o.wnext = 0),
        o.whave < o.wsize && (o.whave += s))),
        0
    }
    e.inflateReset = ot,
    e.inflateReset2 = at,
    e.inflateResetKeep = st,
    e.inflateInit = function(t) {
        return ht(t, it)
    }
    ,
    e.inflateInit2 = ht,
    e.inflate = function(t, e) {
        var i, tt, et, it, nt, st, ot, at, ht, ft, lt, ut, gt, vt, wt, bt, pt, _t, yt, mt, kt, It, Et, Tt, St = 0, Lt = new r.Buf8(4), At = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in)
            return b;
        (i = t.state).mode === z && (i.mode = N),
        nt = t.next_out,
        et = t.output,
        ot = t.avail_out,
        it = t.next_in,
        tt = t.input,
        st = t.avail_in,
        at = i.hold,
        ht = i.bits,
        ft = st,
        lt = ot,
        It = g;
        t: for (; ; )
            switch (i.mode) {
            case k:
                if (0 === i.wrap) {
                    i.mode = N;
                    break
                }
                for (; ht < 16; ) {
                    if (0 === st)
                        break t;
                    st--,
                    at += tt[it++] << ht,
                    ht += 8
                }
                if (2 & i.wrap && 35615 === at) {
                    i.check = 0,
                    Lt[0] = 255 & at,
                    Lt[1] = at >>> 8 & 255,
                    i.check = s(i.check, Lt, 2, 0),
                    at = 0,
                    ht = 0,
                    i.mode = I;
                    break
                }
                if (i.flags = 0,
                i.head && (i.head.done = !1),
                !(1 & i.wrap) || (((255 & at) << 8) + (at >> 8)) % 31) {
                    t.msg = "incorrect header check",
                    i.mode = J;
                    break
                }
                if ((15 & at) !== m) {
                    t.msg = "unknown compression method",
                    i.mode = J;
                    break
                }
                if (ht -= 4,
                kt = 8 + (15 & (at >>>= 4)),
                0 === i.wbits)
                    i.wbits = kt;
                else if (kt > i.wbits) {
                    t.msg = "invalid window size",
                    i.mode = J;
                    break
                }
                i.dmax = 1 << kt,
                t.adler = i.check = 1,
                i.mode = 512 & at ? R : z,
                at = 0,
                ht = 0;
                break;
            case I:
                for (; ht < 16; ) {
                    if (0 === st)
                        break t;
                    st--,
                    at += tt[it++] << ht,
                    ht += 8
                }
                if (i.flags = at,
                (255 & i.flags) !== m) {
                    t.msg = "unknown compression method",
                    i.mode = J;
                    break
                }
                if (57344 & i.flags) {
                    t.msg = "unknown header flags set",
                    i.mode = J;
                    break
                }
                i.head && (i.head.text = at >> 8 & 1),
                512 & i.flags && (Lt[0] = 255 & at,
                Lt[1] = at >>> 8 & 255,
                i.check = s(i.check, Lt, 2, 0)),
                at = 0,
                ht = 0,
                i.mode = E;
            case E:
                for (; ht < 32; ) {
                    if (0 === st)
                        break t;
                    st--,
                    at += tt[it++] << ht,
                    ht += 8
                }
                i.head && (i.head.time = at),
                512 & i.flags && (Lt[0] = 255 & at,
                Lt[1] = at >>> 8 & 255,
                Lt[2] = at >>> 16 & 255,
                Lt[3] = at >>> 24 & 255,
                i.check = s(i.check, Lt, 4, 0)),
                at = 0,
                ht = 0,
                i.mode = T;
            case T:
                for (; ht < 16; ) {
                    if (0 === st)
                        break t;
                    st--,
                    at += tt[it++] << ht,
                    ht += 8
                }
                i.head && (i.head.xflags = 255 & at,
                i.head.os = at >> 8),
                512 & i.flags && (Lt[0] = 255 & at,
                Lt[1] = at >>> 8 & 255,
                i.check = s(i.check, Lt, 2, 0)),
                at = 0,
                ht = 0,
                i.mode = S;
            case S:
                if (1024 & i.flags) {
                    for (; ht < 16; ) {
                        if (0 === st)
                            break t;
                        st--,
                        at += tt[it++] << ht,
                        ht += 8
                    }
                    i.length = at,
                    i.head && (i.head.extra_len = at),
                    512 & i.flags && (Lt[0] = 255 & at,
                    Lt[1] = at >>> 8 & 255,
                    i.check = s(i.check, Lt, 2, 0)),
                    at = 0,
                    ht = 0
                } else
                    i.head && (i.head.extra = null);
                i.mode = L;
            case L:
                if (1024 & i.flags && ((ut = i.length) > st && (ut = st),
                ut && (i.head && (kt = i.head.extra_len - i.length,
                i.head.extra || (i.head.extra = new Array(i.head.extra_len)),
                r.arraySet(i.head.extra, tt, it, ut, kt)),
                512 & i.flags && (i.check = s(i.check, tt, ut, it)),
                st -= ut,
                it += ut,
                i.length -= ut),
                i.length))
                    break t;
                i.length = 0,
                i.mode = A;
            case A:
                if (2048 & i.flags) {
                    if (0 === st)
                        break t;
                    ut = 0;
                    do {
                        kt = tt[it + ut++],
                        i.head && kt && i.length < 65536 && (i.head.name += String.fromCharCode(kt))
                    } while (kt && ut < st);if (512 & i.flags && (i.check = s(i.check, tt, ut, it)),
                    st -= ut,
                    it += ut,
                    kt)
                        break t
                } else
                    i.head && (i.head.name = null);
                i.length = 0,
                i.mode = U;
            case U:
                if (4096 & i.flags) {
                    if (0 === st)
                        break t;
                    ut = 0;
                    do {
                        kt = tt[it + ut++],
                        i.head && kt && i.length < 65536 && (i.head.comment += String.fromCharCode(kt))
                    } while (kt && ut < st);if (512 & i.flags && (i.check = s(i.check, tt, ut, it)),
                    st -= ut,
                    it += ut,
                    kt)
                        break t
                } else
                    i.head && (i.head.comment = null);
                i.mode = x;
            case x:
                if (512 & i.flags) {
                    for (; ht < 16; ) {
                        if (0 === st)
                            break t;
                        st--,
                        at += tt[it++] << ht,
                        ht += 8
                    }
                    if (at !== (65535 & i.check)) {
                        t.msg = "header crc mismatch",
                        i.mode = J;
                        break
                    }
                    at = 0,
                    ht = 0
                }
                i.head && (i.head.hcrc = i.flags >> 9 & 1,
                i.head.done = !0),
                t.adler = i.check = 0,
                i.mode = z;
                break;
            case R:
                for (; ht < 32; ) {
                    if (0 === st)
                        break t;
                    st--,
                    at += tt[it++] << ht,
                    ht += 8
                }
                t.adler = i.check = rt(at),
                at = 0,
                ht = 0,
                i.mode = B;
            case B:
                if (0 === i.havedict)
                    return t.next_out = nt,
                    t.avail_out = ot,
                    t.next_in = it,
                    t.avail_in = st,
                    i.hold = at,
                    i.bits = ht,
                    w;
                t.adler = i.check = 1,
                i.mode = z;
            case z:
                if (e === d || e === c)
                    break t;
            case N:
                if (i.last) {
                    at >>>= 7 & ht,
                    ht -= 7 & ht,
                    i.mode = Y;
                    break
                }
                for (; ht < 3; ) {
                    if (0 === st)
                        break t;
                    st--,
                    at += tt[it++] << ht,
                    ht += 8
                }
                switch (i.last = 1 & at,
                ht -= 1,
                3 & (at >>>= 1)) {
                case 0:
                    i.mode = C;
                    break;
                case 1:
                    if (dt(i),
                    i.mode = j,
                    e === c) {
                        at >>>= 2,
                        ht -= 2;
                        break t
                    }
                    break;
                case 2:
                    i.mode = M;
                    break;
                case 3:
                    t.msg = "invalid block type",
                    i.mode = J
                }
                at >>>= 2,
                ht -= 2;
                break;
            case C:
                for (at >>>= 7 & ht,
                ht -= 7 & ht; ht < 32; ) {
                    if (0 === st)
                        break t;
                    st--,
                    at += tt[it++] << ht,
                    ht += 8
                }
                if ((65535 & at) != (at >>> 16 ^ 65535)) {
                    t.msg = "invalid stored block lengths",
                    i.mode = J;
                    break
                }
                if (i.length = 65535 & at,
                at = 0,
                ht = 0,
                i.mode = O,
                e === c)
                    break t;
            case O:
                i.mode = F;
            case F:
                if (ut = i.length) {
                    if (ut > st && (ut = st),
                    ut > ot && (ut = ot),
                    0 === ut)
                        break t;
                    r.arraySet(et, tt, it, ut, nt),
                    st -= ut,
                    it += ut,
                    ot -= ut,
                    nt += ut,
                    i.length -= ut;
                    break
                }
                i.mode = z;
                break;
            case M:
                for (; ht < 14; ) {
                    if (0 === st)
                        break t;
                    st--,
                    at += tt[it++] << ht,
                    ht += 8
                }
                if (i.nlen = 257 + (31 & at),
                at >>>= 5,
                ht -= 5,
                i.ndist = 1 + (31 & at),
                at >>>= 5,
                ht -= 5,
                i.ncode = 4 + (15 & at),
                at >>>= 4,
                ht -= 4,
                i.nlen > 286 || i.ndist > 30) {
                    t.msg = "too many length or distance symbols",
                    i.mode = J;
                    break
                }
                i.have = 0,
                i.mode = D;
            case D:
                for (; i.have < i.ncode; ) {
                    for (; ht < 3; ) {
                        if (0 === st)
                            break t;
                        st--,
                        at += tt[it++] << ht,
                        ht += 8
                    }
                    i.lens[At[i.have++]] = 7 & at,
                    at >>>= 3,
                    ht -= 3
                }
                for (; i.have < 19; )
                    i.lens[At[i.have++]] = 0;
                if (i.lencode = i.lendyn,
                i.lenbits = 7,
                Et = {
                    bits: i.lenbits
                },
                It = a(h, i.lens, 0, 19, i.lencode, 0, i.work, Et),
                i.lenbits = Et.bits,
                It) {
                    t.msg = "invalid code lengths set",
                    i.mode = J;
                    break
                }
                i.have = 0,
                i.mode = Z;
            case Z:
                for (; i.have < i.nlen + i.ndist; ) {
                    for (; bt = (St = i.lencode[at & (1 << i.lenbits) - 1]) >>> 16 & 255,
                    pt = 65535 & St,
                    !((wt = St >>> 24) <= ht); ) {
                        if (0 === st)
                            break t;
                        st--,
                        at += tt[it++] << ht,
                        ht += 8
                    }
                    if (pt < 16)
                        at >>>= wt,
                        ht -= wt,
                        i.lens[i.have++] = pt;
                    else {
                        if (16 === pt) {
                            for (Tt = wt + 2; ht < Tt; ) {
                                if (0 === st)
                                    break t;
                                st--,
                                at += tt[it++] << ht,
                                ht += 8
                            }
                            if (at >>>= wt,
                            ht -= wt,
                            0 === i.have) {
                                t.msg = "invalid bit length repeat",
                                i.mode = J;
                                break
                            }
                            kt = i.lens[i.have - 1],
                            ut = 3 + (3 & at),
                            at >>>= 2,
                            ht -= 2
                        } else if (17 === pt) {
                            for (Tt = wt + 3; ht < Tt; ) {
                                if (0 === st)
                                    break t;
                                st--,
                                at += tt[it++] << ht,
                                ht += 8
                            }
                            ht -= wt,
                            kt = 0,
                            ut = 3 + (7 & (at >>>= wt)),
                            at >>>= 3,
                            ht -= 3
                        } else {
                            for (Tt = wt + 7; ht < Tt; ) {
                                if (0 === st)
                                    break t;
                                st--,
                                at += tt[it++] << ht,
                                ht += 8
                            }
                            ht -= wt,
                            kt = 0,
                            ut = 11 + (127 & (at >>>= wt)),
                            at >>>= 7,
                            ht -= 7
                        }
                        if (i.have + ut > i.nlen + i.ndist) {
                            t.msg = "invalid bit length repeat",
                            i.mode = J;
                            break
                        }
                        for (; ut--; )
                            i.lens[i.have++] = kt
                    }
                }
                if (i.mode === J)
                    break;
                if (0 === i.lens[256]) {
                    t.msg = "invalid code -- missing end-of-block",
                    i.mode = J;
                    break
                }
                if (i.lenbits = 9,
                Et = {
                    bits: i.lenbits
                },
                It = a(f, i.lens, 0, i.nlen, i.lencode, 0, i.work, Et),
                i.lenbits = Et.bits,
                It) {
                    t.msg = "invalid literal/lengths set",
                    i.mode = J;
                    break
                }
                if (i.distbits = 6,
                i.distcode = i.distdyn,
                Et = {
                    bits: i.distbits
                },
                It = a(l, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, Et),
                i.distbits = Et.bits,
                It) {
                    t.msg = "invalid distances set",
                    i.mode = J;
                    break
                }
                if (i.mode = j,
                e === c)
                    break t;
            case j:
                i.mode = q;
            case q:
                if (st >= 6 && ot >= 258) {
                    t.next_out = nt,
                    t.avail_out = ot,
                    t.next_in = it,
                    t.avail_in = st,
                    i.hold = at,
                    i.bits = ht,
                    o(t, lt),
                    nt = t.next_out,
                    et = t.output,
                    ot = t.avail_out,
                    it = t.next_in,
                    tt = t.input,
                    st = t.avail_in,
                    at = i.hold,
                    ht = i.bits,
                    i.mode === z && (i.back = -1);
                    break
                }
                for (i.back = 0; bt = (St = i.lencode[at & (1 << i.lenbits) - 1]) >>> 16 & 255,
                pt = 65535 & St,
                !((wt = St >>> 24) <= ht); ) {
                    if (0 === st)
                        break t;
                    st--,
                    at += tt[it++] << ht,
                    ht += 8
                }
                if (bt && 0 == (240 & bt)) {
                    for (_t = wt,
                    yt = bt,
                    mt = pt; bt = (St = i.lencode[mt + ((at & (1 << _t + yt) - 1) >> _t)]) >>> 16 & 255,
                    pt = 65535 & St,
                    !(_t + (wt = St >>> 24) <= ht); ) {
                        if (0 === st)
                            break t;
                        st--,
                        at += tt[it++] << ht,
                        ht += 8
                    }
                    at >>>= _t,
                    ht -= _t,
                    i.back += _t
                }
                if (at >>>= wt,
                ht -= wt,
                i.back += wt,
                i.length = pt,
                0 === bt) {
                    i.mode = K;
                    break
                }
                if (32 & bt) {
                    i.back = -1,
                    i.mode = z;
                    break
                }
                if (64 & bt) {
                    t.msg = "invalid literal/length code",
                    i.mode = J;
                    break
                }
                i.extra = 15 & bt,
                i.mode = P;
            case P:
                if (i.extra) {
                    for (Tt = i.extra; ht < Tt; ) {
                        if (0 === st)
                            break t;
                        st--,
                        at += tt[it++] << ht,
                        ht += 8
                    }
                    i.length += at & (1 << i.extra) - 1,
                    at >>>= i.extra,
                    ht -= i.extra,
                    i.back += i.extra
                }
                i.was = i.length,
                i.mode = V;
            case V:
                for (; bt = (St = i.distcode[at & (1 << i.distbits) - 1]) >>> 16 & 255,
                pt = 65535 & St,
                !((wt = St >>> 24) <= ht); ) {
                    if (0 === st)
                        break t;
                    st--,
                    at += tt[it++] << ht,
                    ht += 8
                }
                if (0 == (240 & bt)) {
                    for (_t = wt,
                    yt = bt,
                    mt = pt; bt = (St = i.distcode[mt + ((at & (1 << _t + yt) - 1) >> _t)]) >>> 16 & 255,
                    pt = 65535 & St,
                    !(_t + (wt = St >>> 24) <= ht); ) {
                        if (0 === st)
                            break t;
                        st--,
                        at += tt[it++] << ht,
                        ht += 8
                    }
                    at >>>= _t,
                    ht -= _t,
                    i.back += _t
                }
                if (at >>>= wt,
                ht -= wt,
                i.back += wt,
                64 & bt) {
                    t.msg = "invalid distance code",
                    i.mode = J;
                    break
                }
                i.offset = pt,
                i.extra = 15 & bt,
                i.mode = H;
            case H:
                if (i.extra) {
                    for (Tt = i.extra; ht < Tt; ) {
                        if (0 === st)
                            break t;
                        st--,
                        at += tt[it++] << ht,
                        ht += 8
                    }
                    i.offset += at & (1 << i.extra) - 1,
                    at >>>= i.extra,
                    ht -= i.extra,
                    i.back += i.extra
                }
                if (i.offset > i.dmax) {
                    t.msg = "invalid distance too far back",
                    i.mode = J;
                    break
                }
                i.mode = G;
            case G:
                if (0 === ot)
                    break t;
                if (ut = lt - ot,
                i.offset > ut) {
                    if ((ut = i.offset - ut) > i.whave && i.sane) {
                        t.msg = "invalid distance too far back",
                        i.mode = J;
                        break
                    }
                    ut > i.wnext ? (ut -= i.wnext,
                    gt = i.wsize - ut) : gt = i.wnext - ut,
                    ut > i.length && (ut = i.length),
                    vt = i.window
                } else
                    vt = et,
                    gt = nt - i.offset,
                    ut = i.length;
                ut > ot && (ut = ot),
                ot -= ut,
                i.length -= ut;
                do {
                    et[nt++] = vt[gt++]
                } while (--ut);0 === i.length && (i.mode = q);
                break;
            case K:
                if (0 === ot)
                    break t;
                et[nt++] = i.length,
                ot--,
                i.mode = q;
                break;
            case Y:
                if (i.wrap) {
                    for (; ht < 32; ) {
                        if (0 === st)
                            break t;
                        st--,
                        at |= tt[it++] << ht,
                        ht += 8
                    }
                    if (lt -= ot,
                    t.total_out += lt,
                    i.total += lt,
                    lt && (t.adler = i.check = i.flags ? s(i.check, et, lt, nt - lt) : n(i.check, et, lt, nt - lt)),
                    lt = ot,
                    (i.flags ? at : rt(at)) !== i.check) {
                        t.msg = "incorrect data check",
                        i.mode = J;
                        break
                    }
                    at = 0,
                    ht = 0
                }
                i.mode = X;
            case X:
                if (i.wrap && i.flags) {
                    for (; ht < 32; ) {
                        if (0 === st)
                            break t;
                        st--,
                        at += tt[it++] << ht,
                        ht += 8
                    }
                    if (at !== (4294967295 & i.total)) {
                        t.msg = "incorrect length check",
                        i.mode = J;
                        break
                    }
                    at = 0,
                    ht = 0
                }
                i.mode = W;
            case W:
                It = v;
                break t;
            case J:
                It = p;
                break t;
            case Q:
                return _;
            case $:
            default:
                return b
            }
        return t.next_out = nt,
        t.avail_out = ot,
        t.next_in = it,
        t.avail_in = st,
        i.hold = at,
        i.bits = ht,
        (i.wsize || lt !== t.avail_out && i.mode < J && (i.mode < Y || e !== u)) && ct(t, t.output, t.next_out, lt - t.avail_out) ? (i.mode = Q,
        _) : (ft -= t.avail_in,
        lt -= t.avail_out,
        t.total_in += ft,
        t.total_out += lt,
        i.total += lt,
        i.wrap && lt && (t.adler = i.check = i.flags ? s(i.check, et, lt, t.next_out - lt) : n(i.check, et, lt, t.next_out - lt)),
        t.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === z ? 128 : 0) + (i.mode === j || i.mode === O ? 256 : 0),
        (0 === ft && 0 === lt || e === u) && It === g && (It = y),
        It)
    }
    ,
    e.inflateEnd = function(t) {
        if (!t || !t.state)
            return b;
        var e = t.state;
        return e.window && (e.window = null),
        t.state = null,
        g
    }
    ,
    e.inflateGetHeader = function(t, e) {
        var i;
        return t && t.state ? 0 == (2 & (i = t.state).wrap) ? b : (i.head = e,
        e.done = !1,
        g) : b
    }
    ,
    e.inflateSetDictionary = function(t, e) {
        var i, r = e.length;
        return t && t.state ? 0 !== (i = t.state).wrap && i.mode !== B ? b : i.mode === B && n(1, e, r, 0) !== i.check ? p : ct(t, e, r, r) ? (i.mode = Q,
        _) : (i.havedict = 1,
        g) : b
    }
    ,
    e.inflateInfo = "pako inflate (from Nodeca project)"
}
, function(t, e, i) {
    "use strict";
    t.exports = function(t, e) {
        var i, r, n, s, o, a, h, f, l, u, d, c, g, v, w, b, p, _, y, m, k, I, E, T, S;
        i = t.state,
        r = t.next_in,
        T = t.input,
        n = r + (t.avail_in - 5),
        s = t.next_out,
        S = t.output,
        o = s - (e - t.avail_out),
        a = s + (t.avail_out - 257),
        h = i.dmax,
        f = i.wsize,
        l = i.whave,
        u = i.wnext,
        d = i.window,
        c = i.hold,
        g = i.bits,
        v = i.lencode,
        w = i.distcode,
        b = (1 << i.lenbits) - 1,
        p = (1 << i.distbits) - 1;
        t: do {
            g < 15 && (c += T[r++] << g,
            g += 8,
            c += T[r++] << g,
            g += 8),
            _ = v[c & b];
            e: for (; ; ) {
                if (c >>>= y = _ >>> 24,
                g -= y,
                0 === (y = _ >>> 16 & 255))
                    S[s++] = 65535 & _;
                else {
                    if (!(16 & y)) {
                        if (0 == (64 & y)) {
                            _ = v[(65535 & _) + (c & (1 << y) - 1)];
                            continue e
                        }
                        if (32 & y) {
                            i.mode = 12;
                            break t
                        }
                        t.msg = "invalid literal/length code",
                        i.mode = 30;
                        break t
                    }
                    m = 65535 & _,
                    (y &= 15) && (g < y && (c += T[r++] << g,
                    g += 8),
                    m += c & (1 << y) - 1,
                    c >>>= y,
                    g -= y),
                    g < 15 && (c += T[r++] << g,
                    g += 8,
                    c += T[r++] << g,
                    g += 8),
                    _ = w[c & p];
                    i: for (; ; ) {
                        if (c >>>= y = _ >>> 24,
                        g -= y,
                        !(16 & (y = _ >>> 16 & 255))) {
                            if (0 == (64 & y)) {
                                _ = w[(65535 & _) + (c & (1 << y) - 1)];
                                continue i
                            }
                            t.msg = "invalid distance code",
                            i.mode = 30;
                            break t
                        }
                        if (k = 65535 & _,
                        g < (y &= 15) && (c += T[r++] << g,
                        (g += 8) < y && (c += T[r++] << g,
                        g += 8)),
                        (k += c & (1 << y) - 1) > h) {
                            t.msg = "invalid distance too far back",
                            i.mode = 30;
                            break t
                        }
                        if (c >>>= y,
                        g -= y,
                        k > (y = s - o)) {
                            if ((y = k - y) > l && i.sane) {
                                t.msg = "invalid distance too far back",
                                i.mode = 30;
                                break t
                            }
                            if (I = 0,
                            E = d,
                            0 === u) {
                                if (I += f - y,
                                y < m) {
                                    m -= y;
                                    do {
                                        S[s++] = d[I++]
                                    } while (--y);I = s - k,
                                    E = S
                                }
                            } else if (u < y) {
                                if (I += f + u - y,
                                (y -= u) < m) {
                                    m -= y;
                                    do {
                                        S[s++] = d[I++]
                                    } while (--y);if (I = 0,
                                    u < m) {
                                        m -= y = u;
                                        do {
                                            S[s++] = d[I++]
                                        } while (--y);I = s - k,
                                        E = S
                                    }
                                }
                            } else if (I += u - y,
                            y < m) {
                                m -= y;
                                do {
                                    S[s++] = d[I++]
                                } while (--y);I = s - k,
                                E = S
                            }
                            for (; m > 2; )
                                S[s++] = E[I++],
                                S[s++] = E[I++],
                                S[s++] = E[I++],
                                m -= 3;
                            m && (S[s++] = E[I++],
                            m > 1 && (S[s++] = E[I++]))
                        } else {
                            I = s - k;
                            do {
                                S[s++] = S[I++],
                                S[s++] = S[I++],
                                S[s++] = S[I++],
                                m -= 3
                            } while (m > 2);m && (S[s++] = S[I++],
                            m > 1 && (S[s++] = S[I++]))
                        }
                        break
                    }
                }
                break
            }
        } while (r < n && s < a);r -= m = g >> 3,
        c &= (1 << (g -= m << 3)) - 1,
        t.next_in = r,
        t.next_out = s,
        t.avail_in = r < n ? n - r + 5 : 5 - (r - n),
        t.avail_out = s < a ? a - s + 257 : 257 - (s - a),
        i.hold = c,
        i.bits = g
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(1)
      , n = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]
      , s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]
      , o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]
      , a = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
    t.exports = function(t, e, i, h, f, l, u, d) {
        var c, g, v, w, b, p, _, y, m, k = d.bits, I = 0, E = 0, T = 0, S = 0, L = 0, A = 0, U = 0, x = 0, R = 0, B = 0, z = null, N = 0, C = new r.Buf16(16), O = new r.Buf16(16), F = null, M = 0;
        for (I = 0; I <= 15; I++)
            C[I] = 0;
        for (E = 0; E < h; E++)
            C[e[i + E]]++;
        for (L = k,
        S = 15; S >= 1 && 0 === C[S]; S--)
            ;
        if (L > S && (L = S),
        0 === S)
            return f[l++] = 20971520,
            f[l++] = 20971520,
            d.bits = 1,
            0;
        for (T = 1; T < S && 0 === C[T]; T++)
            ;
        for (L < T && (L = T),
        x = 1,
        I = 1; I <= 15; I++)
            if (x <<= 1,
            (x -= C[I]) < 0)
                return -1;
        if (x > 0 && (0 === t || 1 !== S))
            return -1;
        for (O[1] = 0,
        I = 1; I < 15; I++)
            O[I + 1] = O[I] + C[I];
        for (E = 0; E < h; E++)
            0 !== e[i + E] && (u[O[e[i + E]]++] = E);
        if (0 === t ? (z = F = u,
        p = 19) : 1 === t ? (z = n,
        N -= 257,
        F = s,
        M -= 257,
        p = 256) : (z = o,
        F = a,
        p = -1),
        B = 0,
        E = 0,
        I = T,
        b = l,
        A = L,
        U = 0,
        v = -1,
        w = (R = 1 << L) - 1,
        1 === t && R > 852 || 2 === t && R > 592)
            return 1;
        for (; ; ) {
            _ = I - U,
            u[E] < p ? (y = 0,
            m = u[E]) : u[E] > p ? (y = F[M + u[E]],
            m = z[N + u[E]]) : (y = 96,
            m = 0),
            c = 1 << I - U,
            T = g = 1 << A;
            do {
                f[b + (B >> U) + (g -= c)] = _ << 24 | y << 16 | m | 0
            } while (0 !== g);for (c = 1 << I - 1; B & c; )
                c >>= 1;
            if (0 !== c ? (B &= c - 1,
            B += c) : B = 0,
            E++,
            0 == --C[I]) {
                if (I === S)
                    break;
                I = e[i + u[E]]
            }
            if (I > L && (B & w) !== v) {
                for (0 === U && (U = L),
                b += T,
                x = 1 << (A = I - U); A + U < S && !((x -= C[A + U]) <= 0); )
                    A++,
                    x <<= 1;
                if (R += 1 << A,
                1 === t && R > 852 || 2 === t && R > 592)
                    return 1;
                f[v = B & w] = L << 24 | A << 16 | b - l | 0
            }
        }
        return 0 !== B && (f[b + B] = I - U << 24 | 64 << 16 | 0),
        d.bits = L,
        0
    }
}
, function(t, e, i) {
    "use strict";
    t.exports = function() {
        this.text = 0,
        this.time = 0,
        this.xflags = 0,
        this.os = 0,
        this.extra = null,
        this.extra_len = 0,
        this.name = "",
        this.comment = "",
        this.hcrc = 0,
        this.done = !1
    }
}
, function(t, e, i) {
    "use strict";
    i.r(e);
    var r = i(13)
      , n = i.n(r)
      , s = i(14)
      , o = i.n(s)
      , a = i(15)
      , h = i.n(a)
      , f = i(2)
      , l = i.n(f)
      , u = i(5)
      , d = i.n(u)
      , c = i(6)
      , g = i.n(c)
      , v = i(0)
      , w = i.n(v)
      , b = i(7)
      , p = i.n(b)
      , _ = 600100
      , y = 10300100
      , m = 10300003
      , k = 300104
      , I = 300141
      , E = 600016
      , T = 10600100;
    i(3);
    var S = !/^http(s)?:\/\/(www\.|m\.)?streamcraft\.com$/.test(location.origin)
      , L = {
        Language: "en",
        Country: "China",
        CountryCode: "cn",
        Inc_deviceid: ""
    }
      , A = function() {
        function t(e, i) {
            d()(this, t),
            this._seq = 1,
            this._uri = e,
            this._token = "",
            this._uin = 0,
            this._sid = 0,
            this._nick = "",
            this._sign = 0,
            this._isenter = 0,
            this._socks = null,
            this._sptimer = null,
            this._compres = i ? t.MMCPR_ZLIB_COMPRESS : t.MMCPR_NO_COMPRESS,
            this._msgsend = {},
            this._socketNameSpace = "",
            this._linkId = 0,
            this.members = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4
                  , e = arguments.length > 1 ? arguments[1] : void 0
                  , i = !0;
                return function() {
                    var r = this
                      , n = arguments;
                    i && (e.apply(r, n),
                    i = !1,
                    setTimeout(function() {
                        e.apply(r, n),
                        i = !0
                    }, t))
                }
            }(1e4, this.memberscopy)
        }
        return g()(t, [{
            key: "postMessage",
            value: function(t) {
                function e() {
                    return t.apply(this, arguments)
                }
                return e.toString = function() {
                    return t.toString()
                }
                ,
                e
            }(function() {
                for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
                    i[r] = arguments[r];
                postMessage([i[0] + this._socketNameSpace].concat(l()(i.slice(1)))),
                t.IsDebug
            })
        }, {
            key: "connect",
            value: function() {
                var t = this;
                if (this.onstart(),
                WebSocket)
                    this._socks = new WebSocket(this._uri);
                else {
                    if (!MozWebSocket)
                        return void this.postMessage("error", "your broswer could not support websocket!");
                    this._socks = new MozWebSocket(this._uri)
                }
                this._socks.onmessage = function(e) {
                    t.onmessage(e)
                }
                ,
                this._socks.onclose = this.onclose.bind(this),
                this._socks.onopen = this.onopen.bind(this),
                this._socks.onerror = this.onerror.bind(this)
            }
        }, {
            key: "seqno",
            value: function() {
                return this._seq++
            }
        }, {
            key: "wraper",
            value: function(t) {
                return {
                    Buff: t
                }
            }
        }, {
            key: "jsonstr",
            value: function(e, i) {
                this._socks || this.postMessage("init");
                var r = {
                    BaseRequest: {
                        SessionKey: t.bytes(this._token, 36),
                        Uin: this._uin,
                        DeviceID: t.deviceid(16),
                        ClientVersion: t.ClientVer,
                        DeviceType: t.devicetype(132),
                        Scene: 0,
                        Seq: i
                    }
                };
                for (var n in e)
                    r[n] = e[n];
                return r = JSON.stringify(r)
            }
        }, {
            key: "signin",
            value: function(t, e, i) {
                return this._uin = t,
                this._nick = e,
                this._token = i,
                this
            }
        }, {
            key: "reauth",
            value: function(e) {
                if (!(this._uin < 1 || this._token.length < 1)) {
                    this._sid = parseInt(e);
                    var i = this.seqno()
                      , r = {
                        RandomEncryKey: this.wraper(t.getstr(4))
                    };
                    t.attaches(r),
                    r = this.jsonstr(r, i),
                    this.sendpacket(300003, r, i)
                }
            }
        }, {
            key: "members",
            value: function(e, i, r) {
                t.debug("members++", ~~((new Date).getTime() / 1e3));
                var n = this.seqno()
                  , s = i ? parseInt(i) : 0
                  , o = r ? parseInt(r) : 0
                  , a = e ? parseInt(e) : 0
                  , h = {
                    StudioId: this._sid,
                    MemberUin: o,
                    LastUin: s,
                    SortType: a
                };
                h = this.jsonstr(h, n),
                this.sendpacket(300101, h, n)
            }
        }, {
            key: "memberscopy",
            value: function(e, i, r) {
                t.debug("members++", ~~((new Date).getTime() / 1e3));
                var n = this.seqno()
                  , s = i ? parseInt(i) : 0
                  , o = r ? parseInt(r) : 0
                  , a = e ? parseInt(e) : 0
                  , h = {
                    StudioId: this._sid,
                    MemberUin: o,
                    LastUin: s,
                    SortType: a
                };
                h = this.jsonstr(h, n),
                this.sendpacket(300101, h, n)
            }
        }, {
            key: "getconfig",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    ConfigureType: t
                };
                i = this.jsonstr(i, e),
                this.sendpacket(300102, i, e)
            }
        }, {
            key: "historycontribution",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    StudioId: this._sid,
                    Offset: t
                };
                i = this.jsonstr(i, e),
                this.sendpacket(300113, i, e)
            }
        }, {
            key: "getcontribution",
            value: function() {
                var t = this.seqno()
                  , e = {};
                e = this.jsonstr(e, t),
                this.sendpacket(300124, e, t)
            }
        }, {
            key: "gethistoryguard",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    StudioId: this._sid,
                    Offset: t
                };
                i = this.jsonstr(i, e),
                this.sendpacket(300117, i, e)
            }
        }, {
            key: "getcurguard",
            value: function() {
                var t = this.seqno()
                  , e = {
                    StudioId: this._sid
                };
                e = this.jsonstr(e, t),
                this.sendpacket(300118, e, t)
            }
        }, {
            key: "getwatchliverewardlist",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = this.seqno()
                  , i = {
                    RoomId: this._sid,
                    InitFlag: t
                };
                i = this.jsonstr(i, e),
                this.sendpacket(900083, i, e)
            }
        }, {
            key: "getlivefanslist",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    StudioId: this._sid,
                    Skip: t
                };
                i = this.jsonstr(i, e),
                this.sendpacket(300151, i, e)
            }
        }, {
            key: "getmallgoodsbypage",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    StudioId: this._sid,
                    Skip: t,
                    AllPlatFormFlag: 1
                };
                i = this.jsonstr(i, e),
                this.sendpacket(300143, i, e)
            }
        }, {
            key: "getMyMissionList",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 ? arguments[1] : void 0
                  , i = this.seqno()
                  , r = {
                    Skip: t,
                    FetchType: e
                };
                r = this.jsonstr(r, i),
                this.sendpacket(300154, r, i)
            }
        }, {
            key: "sendpacket",
            value: function(e, i, r) {
                var n = new w.a;
                n.append(i);
                var s = n.buffer.byteLength;
                if (this._compres === t.MMCPR_ZLIB_COMPRESS) {
                    var o = new p.a.Deflate;
                    try {
                        if (o.push(n.view, !0),
                        o.err)
                            return this.postMessage("error", "zlib compress error:" + o.err + "!"),
                            !1;
                        (n = new w.a).append(o.result)
                    } catch (t) {
                        return this.postMessage("error", "zlib compress error:" + t + "!"),
                        !1
                    }
                }
                var a = n.buffer.byteLength + 74
                  , h = new w.a(a);
                h.writeUint32(a),
                h.writeUint16(16),
                h.writeUint16(1),
                h.writeUint32(e),
                h.writeUint32(r),
                h.writeUint8(190),
                h.writeUint32(t.DefRet),
                h.writeUint32(t.ClientVer),
                h.writeUint32(e),
                h.writeUint32(this._uin),
                h.writeUint16(t.DefLng),
                h.append(t.DeviceID),
                h.writeUint16(t.CompressVer),
                h.writeUint16(this._compres),
                h.writeUint16(t.NO_ENCRYPT),
                h.writeUint32(s),
                h.writeUint32(n.buffer.byteLength),
                h.writeUint32(0),
                h.writeUint32(0),
                new Uint8Array(h.buffer).set(n.view, h.offset),
                h.offset += n.buffer.byteLength,
                h.writeUint8(237),
                this._socks && (t.debug("+++++++++++++++ send +++++++++++++++"),
                t.debug(e + ">>>>>>>>>>>" + this.getCallerName()),
                t.debug(i),
                t.debug("+++++++++++++++ send +++++++++++++++"),
                this._socks.send(h.buffer))
            }
        }, {
            key: "getCallerName",
            value: function() {
                var t;
                try {
                    throw new Error
                } catch (i) {
                    var e;
                    t = (e = i.stack.match(/((?:at\s+)([\w\.])+?(?=\s+\())|(\w+)(?=@)/gi))[2] || e[1]
                }
                return t
            }
        }, {
            key: "onmessage",
            value: function(e) {
                var i = this
                  , r = new w.a;
                r.append(e.data, "utf8", 0);
                var n = {};
                if (t.debug("==================================================================="),
                n.pocketLen = r.readUint32(),
                n.headerLength = r.readShort(),
                n.version = r.readShort(),
                n.cmd = r.readUint32(),
                n.seq = r.readUint32(),
                n.cmd !== T) {
                    if (n.cmd === E)
                        n.St = r.readUint32(),
                        t.debug("=============ST=============="),
                        t.debug(n.St);
                    else if (n.cmd === I || n.cmd === k) {
                        n.Len = r.readInt();
                        var s = r.buffer.slice(r.offset, -1)
                          , o = (new w.a).append(s, "utf8").flip().toUTF8();
                        n.Response = JSON.parse(o)
                    } else {
                        r.readByte(),
                        n.Ret = r.readUint32(),
                        n.ClientVersion = r.readUint32(),
                        n.CmdId = r.readUint32(),
                        n.Uin = r.readUint32(),
                        n.Lan = r.readShort(),
                        n.DeviceId = new Array(16);
                        for (var a = 0; a < 16; a++)
                            n.DeviceId[a] = r.readByte();
                        n.CompressVersion = r.readShort(),
                        n.CompressAlgorithm = r.readShort(),
                        n.CryptAlgorithm = r.readShort(),
                        n.CompressLen = r.readUint32(),
                        n.CompressedLen = r.readUint32(),
                        n.iInt1 = r.readUint32(),
                        n.iInt2 = r.readUint32();
                        o = "";
                        if ((s = r.buffer.slice(r.offset, -1)).byteLength > 0) {
                            if (t.MMCPR_ZLIB_COMPRESS === n.CompressAlgorithm)
                                try {
                                    var h = new p.a.Inflate;
                                    if (h.push(s, !0),
                                    h.err || h.result.byteLength != n.CompressLen)
                                        return !h.err && (h.err = "uncompress length not matchs."),
                                        this.postMessage("error", "zlib uncompress error:" + h.err + "!"),
                                        !1;
                                    s = h.result,
                                    t.debug("=============================zlibuncompress======================================")
                                } catch (t) {
                                    return this.postMessage("error", "zlib compress error:" + t + "!"),
                                    !1
                                }
                            o = (new w.a).append(s, "utf8").flip().toUTF8()
                        }
                        if (o)
                            try {
                                o = o.replace(/"GoldBoxId":.(\d+),/g, '"GoldBoxId":"$1",'),
                                n.Response = JSON.parse(o)
                            } catch (t) {
                                this.postMessage("error", "json parse error:" + t + "!")
                            }
                        if (n.Response && n.Response.SessionKey && (n.Response.SessionKey = t.byte2str(n.Response.SessionKey, !0)),
                        401 === n.Ret)
                            return void this.postMessage("iperror", "IP被禁用");
                        if (n.cmd === m)
                            return void (-1 == n.Response.BaseResponse.Ret ? (setTimeout(function() {
                                i.reauth()
                            }, 1e3 * t.ReconSec),
                            t.ReconSec = (t.ReconSec + 1) % 5,
                            t.debug(">>>>>>>>>>>>>>>>>>重连>>>>>>>>>>>>>>>>>>>>>>")) : 0 == n.Response.BaseResponse.Ret ? (this._sign = 1,
                            t.ReconSec = 1,
                            this.postMessage("connectFirst")) : this.postMessage("pop_signin"));
                        n.cmd === y && (0 == n.Response.BaseResponse.Ret ? (this._isenter = 1,
                        this.docycleping()) : -369 == n.Response.BaseResponse.Ret ? this.postMessage("kickout") : this.postMessage("error", n.Response.BaseResponse.ErrMsg.Buff))
                    }
                    this.postMessage("onmessage", n)
                } else
                    t.debug("=============================PONG81===================================")
            }
        }, {
            key: "onstart",
            value: function() {
                this.postMessage("onstart")
            }
        }, {
            key: "onopen",
            value: function() {
                this._socks.binaryType = "arraybuffer",
                this.postMessage("onopen")
            }
        }, {
            key: "onclose",
            value: function(t) {
                this._isenter = 0,
                this._sptimer && (clearInterval(this._sptimer),
                this._sptimer = null),
                this.postMessage("onclose", t.code)
            }
        }, {
            key: "onerror",
            value: function() {
                this.postMessage("onerror")
            }
        }, {
            key: "ping",
            value: function() {
                var t = new w.a(16);
                t.writeUint32(16),
                t.writeUint16(16),
                t.writeUint16(1),
                t.writeUint32(_),
                t.writeUint32(0),
                this._socks && this._socks.send(t.buffer)
            }
        }, {
            key: "docycleping",
            value: function() {
                var e = this;
                this._sptimer = setInterval(function() {
                    e.ping(),
                    t.debug("=============================PING===================================")
                }, t.CyclePsTimer)
            }
        }, {
            key: "close",
            value: function() {
                this._socks && (this._socks.onclose = function() {}
                ,
                this._socks.close()),
                this._socks = null,
                this.postMessage("onclose"),
                this._isenter = 0,
                this._sptimer && (clearInterval(this._sptimer),
                this._sptimer = null)
            }
        }], [{
            key: "debug",
            value: function() {
                if (t.IsDebug)
                    for (var e = arguments.length - 1; e >= 0; e--)
                        console.log(arguments[e])
            }
        }, {
            key: "attaches",
            value: function(e) {
                e.TimeZone = t.timezone(),
                e.Language = L.Language,
                e.Country = L.Country,
                e.CountryCode = L.CountryCode,
                e.RandomEncryKey = {
                    Buff: t.getstr(4)
                }
            }
        }, {
            key: "getstr",
            value: function(e) {
                var i, r = "";
                !e && (e = 4);
                for (var n = 0; n < e; n++)
                    i = Math.ceil(Math.random() * t.RansStr.length) - 1,
                    r += t.RansStr.substr(i, 1);
                return r
            }
        }, {
            key: "bytes",
            value: function(t, e) {
                for (var i = new Array(e), r = new w.a, n = r.writeString(t, 0), s = 0; s < e; s++)
                    i[s] = n > s ? r.readUint8() : 0;
                return i
            }
        }, {
            key: "byte2str",
            value: function(t, e) {
                for (var i = "", r = 0; r < t.length && (!e || 0 != t[r]); r++)
                    i += String.fromCharCode(t[r]);
                return i
            }
        }, {
            key: "devicetype",
            value: function(e) {
                if (t.DeviceType && t.DeviceType.length == e)
                    return t.DeviceType;
                var i = navigator.userAgent ? navigator.userAgent : "Unknow";
                return t.DeviceType = t.bytes(i, e),
                t.DeviceType
            }
        }, {
            key: "timezone",
            value: function() {
                var t = 0 - (new Date).getTimezoneOffset() / 60;
                return "GMT" + (t > 0 ? "+" : "-") + Math.abs(t)
            }
        }, {
            key: "deviceid",
            value: function(e) {
                return t.DeviceID && t.DeviceID.length == e ? t.DeviceID : (t.DeviceID = L.Inc_deviceid ? L.Inc_deviceid : t.getstr(e),
                t.DeviceID = t.bytes(t.DeviceID, e),
                t.DeviceID)
            }
        }]),
        t
    }();
    A.RansStr = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM",
    A.ClientVer = 30000003,
    A.CompressVer = 1001,
    A.IsDebug = S,
    A.CyclePsTimer = 6e4,
    A.MMCPR_ZLIB_COMPRESS = 1,
    A.MMCPR_NO_COMPRESS = 2,
    A.NO_ENCRYPT = 0,
    A.DefRet = 0,
    A.DefLng = 0,
    A.ReconSec = 1;
    var U, x, R = function(t) {
        function e(t, i, r) {
            var s;
            return d()(this, e),
            (s = n()(this, o()(e).call(this, t, i)))._socketNameSpace = r,
            s.connect(),
            s
        }
        return h()(e, t),
        g()(e, [{
            key: "enter",
            value: function(t, e, i) {
                var r = this.seqno();
                this._sid = parseInt(t),
                this._vid = parseInt(e),
                this._linkId = i;
                var n = {
                    StudioId: this._sid,
                    VideoId: this._vid,
                    LinkId: this._linkId
                };
                n = this.jsonstr(n, r),
                this.sendpacket(300100, n, r)
            }
        }, {
            key: "chats",
            value: function(t, e, i) {
                var r = this.seqno()
                  , n = i ? parseInt(i) : 0
                  , s = Math.ceil((new Date).getTime() / 1e3)
                  , o = "IGG_TEXT#".concat(this._sid, "#").concat(this._uin, "#").concat(n, "#").concat(s)
                  , a = t
                  , h = {
                    Count: 1,
                    List: [{
                        MsgType: 1,
                        StudioId: this._sid,
                        ToUin: n,
                        ClientMsgId: this.wraper(o),
                        MsgContent: this.wraper(a),
                        EmojiFlag: e,
                        CreateTime: s
                    }]
                };
                h = this.jsonstr(h, r),
                this.sendpacket(300103, h, r)
            }
        }, {
            key: "shareroom",
            value: function() {
                var t = this.seqno()
                  , e = Math.ceil((new Date).getTime() / 1e3)
                  , i = "IGG_TEXT#".concat(this._sid, "#").concat(this._uin, "#").concat(0, "#").concat(e)
                  , r = {
                    Count: 1,
                    List: [{
                        MsgType: 10004,
                        StudioId: this._sid,
                        ToUin: 0,
                        ClientMsgId: this.wraper(i),
                        MsgContent: this.wraper(""),
                        EmojiFlag: 0,
                        CreateTime: e
                    }]
                };
                r = this.jsonstr(r, t),
                this.sendpacket(300103, r, t)
            }
        }, {
            key: "sendgift",
            value: function(t, e, i, r) {
                var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
                  , s = this.seqno()
                  , o = parseInt(t)
                  , a = parseInt(e)
                  , h = parseInt(i)
                  , f = parseInt(r)
                  , l = {
                    StudioId: this._sid,
                    GiftId: o,
                    Nums: a,
                    Index: h,
                    GroupCount: f,
                    ForceSend: n
                };
                l = this.jsonstr(l, s),
                this.sendpacket(300114, l, s)
            }
        }, {
            key: "sendcharm",
            value: function(t, e, i) {
                var r = this.seqno()
                  , n = t ? parseInt(t) : 0
                  , s = parseInt(e)
                  , o = parseInt(i)
                  , a = {
                    StudioId: this._sid,
                    CheckOnly: n,
                    CharmCount: s,
                    Cumulative: o
                };
                a = this.jsonstr(a, r),
                this.sendpacket(300108, a, r)
            }
        }, {
            key: "getrecvrtmp",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    RecvRtmpByResolution: t,
                    StudioId: this._sid
                };
                i = this.jsonstr(i, e),
                this.sendpacket(300105, i, e)
            }
        }, {
            key: "changelivestatus",
            value: function(t, e) {
                var i = this.seqno()
                  , r = {
                    StudioId: this._sid,
                    EventId: t,
                    LiveStatus: e
                };
                r = this.jsonstr(r, i),
                this.sendpacket(300109, r, i)
            }
        }, {
            key: "getpreliveconf",
            value: function() {
                var t = this.seqno()
                  , e = {};
                e = this.jsonstr(e, t),
                this.sendpacket(300110, e, t)
            }
        }, {
            key: "setlive",
            value: function(t, e, i, r, n) {
                var s = this.seqno()
                  , o = {
                    Title: t,
                    GameId: e,
                    Across: across,
                    ClarityType: i,
                    TagId: r,
                    SysLang: n
                };
                o = this.jsonstr(o, s),
                this.sendpacket(300111, o, s)
            }
        }, {
            key: "auctionguard",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    StudioId: this._sid,
                    Offer: parseInt(t)
                };
                i = this.jsonstr(i, e),
                this.sendpacket(300116, i, e)
            }
        }, {
            key: "getRecentContact",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    Skip: t
                };
                i = this.jsonstr(i, e),
                this.sendpacket(300138, i, e)
            }
        }, {
            key: "getQueryUserMsg",
            value: function() {
                var t = this.seqno()
                  , e = {
                    Type: 1
                };
                e = this.jsonstr(e, t),
                this.sendpacket(300140, e, t)
            }
        }, {
            key: "sendWXChat",
            value: function(t, e, i, r) {
                var n = this.seqno()
                  , s = Math.ceil((new Date).getTime())
                  , o = {
                    ToUserName: i,
                    MsgType: 1,
                    ClientMsgId: "IGG_TEXT_WX#".concat(i, "#").concat(this._nick, "#1#").concat(s),
                    Content: t,
                    EmojiFlag: e,
                    MsgExternalInfo: "",
                    AppPkgId: r,
                    ServiceTokenId: "",
                    IsAutoReply: 0,
                    ServiceQuestionType: 0
                };
                o = this.jsonstr(o, n),
                this.sendpacket(300011, o, n)
            }
        }, {
            key: "incrviewcount",
            value: function(t, e) {
                var i = this.seqno()
                  , r = {
                    StudioId: this._sid,
                    EventId: t,
                    VideoId: e
                };
                r = this.jsonstr(r, i),
                this.sendpacket(300120, r, i)
            }
        }, {
            key: "getrank",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    StudioId: this._sid,
                    RankType: t
                };
                i = this.jsonstr(i, e),
                this.sendpacket(300115, i, e)
            }
        }, {
            key: "sendgoldbox",
            value: function(t, e) {
                var i = this.seqno()
                  , r = parseInt(t)
                  , n = parseInt(e)
                  , s = {
                    LiveRoomId: this._sid,
                    TotalGold: r,
                    ReceiveCount: n
                };
                s = this.jsonstr(s, i),
                this.sendpacket(620014, s, i)
            }
        }, {
            key: "receivegoldbox",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    LiveRoomId: this._sid,
                    GoldBoxId: t
                };
                i = this.jsonstr(i, e),
                this.sendpacket(620015, i, e)
            }
        }, {
            key: "getgoldboxreceivelist",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    LiveRoomId: this._sid,
                    GoldBoxId: t
                };
                i = this.jsonstr(i, e),
                this.sendpacket(620016, i, e)
            }
        }, {
            key: "gaguser",
            value: function(t, e) {
                var i = this.seqno()
                  , r = {
                    StudioId: this._sid,
                    GagUin: t,
                    OpType: e
                };
                r = this.jsonstr(r, i),
                this.sendpacket(300106, r, i)
            }
        }, {
            key: "kickoutuser",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    StudioId: this._sid,
                    OutUin: t
                };
                i = this.jsonstr(i, e),
                this.sendpacket(300107, i, e)
            }
        }, {
            key: "setstudioauthority",
            value: function(t, e) {
                var i = this.seqno()
                  , r = {
                    StudioId: this._sid,
                    OpType: e,
                    OpUin: t,
                    Access: 2
                };
                r = this.jsonstr(r, i),
                this.sendpacket(300112, r, i)
            }
        }, {
            key: "acceptReward",
            value: function(t, e) {
                var i = this.seqno()
                  , r = {
                    RewardId: t,
                    RewardType: e,
                    RoomId: this._sid
                };
                r = this.jsonstr(r, i),
                this.sendpacket(900084, r, i)
            }
        }, {
            key: "getMyMedalList",
            value: function(t) {
                var e = this.seqno()
                  , i = {
                    Skip: t
                };
                i = this.jsonstr(i, e),
                this.sendpacket(300147, i, e)
            }
        }, {
            key: "getMyGoods",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  , r = this.seqno()
                  , n = {
                    Skip: t,
                    Status: e,
                    Type: i
                };
                n = this.jsonstr(n, r),
                this.sendpacket(300145, n, r)
            }
        }]),
        e
    }(A), B = {
        init81: function(t, e) {
            U = new R(t,e,"81")
        },
        init82: function(t, e) {
            x = new R(t,e,"82")
        },
        store: function(t) {
            L = t
        },
        exit: function() {
            close()
        }
    };
    addEventListener("message", function(t) {
        if (Array.isArray(t.data)) {
            var e = t.data[0];
            if (e)
                if (B[e])
                    B[e].apply(B, l()(t.data.splice(1)));
                else if (-1 !== e.indexOf("81") && U) {
                    var i;
                    (i = U)[e.replace(/81/g, "")].apply(i, l()(t.data.splice(1)))
                } else if (-1 !== e.indexOf("82") && x) {
                    var r;
                    (r = x)[e.replace(/82/g, "")].apply(r, l()(t.data.splice(1)))
                } else
                    console.error("无效命令", e);
            else
                console.error("方法为空!!!")
        } else
            console.error("参数必须是[command, ...params]的形式")
    }, !1)
}
]);
