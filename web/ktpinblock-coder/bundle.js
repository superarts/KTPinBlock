(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//region block: polyfills
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Math.clz32 === 'undefined') {
  Math.clz32 = function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0; // the "| 0" acts like math.floor
    };
  }(Math.log, Math.LN2);
}
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
//endregion
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-kotlin-stdlib-js-ir'] = factory(typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined' ? {} : this['kotlin-kotlin-stdlib-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: imports
  var clz32 = Math.clz32;
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Collection, 'Collection', interfaceMeta);
  setMetadataFor(AbstractCollection, 'AbstractCollection', classMeta, VOID, [Collection]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Random, 'Random', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Random);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(XorWowRandom, 'XorWowRandom', classMeta, Random);
  setMetadataFor(Pair, 'Pair', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(UByte, 'UByte', classMeta);
  setMetadataFor(Iterator, 'Iterator', classMeta);
  setMetadataFor(UByteArray, 'UByteArray', classMeta, VOID, [Collection]);
  setMetadataFor(CharSequence, 'CharSequence', interfaceMeta);
  setMetadataFor(Number_0, 'Number', classMeta);
  setMetadataFor(Unit, 'Unit', objectMeta);
  setMetadataFor(IntCompanionObject, 'IntCompanionObject', objectMeta);
  setMetadataFor(AbstractMutableCollection, 'AbstractMutableCollection', classMeta, AbstractCollection, [AbstractCollection, Collection]);
  setMetadataFor(IteratorImpl, 'IteratorImpl', classMeta);
  setMetadataFor(AbstractMutableList, 'AbstractMutableList', classMeta, AbstractMutableCollection, [AbstractMutableCollection, Collection]);
  setMetadataFor(ArrayList, 'ArrayList', classMeta, AbstractMutableList, [AbstractMutableList, Collection]);
  setMetadataFor(StringBuilder, 'StringBuilder', classMeta, VOID, [CharSequence]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Char, 'Char', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Enum, 'Enum', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Long, 'Long', classMeta, Number_0);
  setMetadataFor(Exception, 'Exception', classMeta, Error);
  setMetadataFor(RuntimeException, 'RuntimeException', classMeta, Exception);
  setMetadataFor(IllegalArgumentException, 'IllegalArgumentException', classMeta, RuntimeException);
  setMetadataFor(IndexOutOfBoundsException, 'IndexOutOfBoundsException', classMeta, RuntimeException);
  setMetadataFor(IllegalStateException, 'IllegalStateException', classMeta, RuntimeException);
  setMetadataFor(NoSuchElementException, 'NoSuchElementException', classMeta, RuntimeException);
  setMetadataFor(UnsupportedOperationException, 'UnsupportedOperationException', classMeta, RuntimeException);
  setMetadataFor(ClassCastException, 'ClassCastException', classMeta, RuntimeException);
  setMetadataFor(UninitializedPropertyAccessException, 'UninitializedPropertyAccessException', classMeta, RuntimeException);
  //endregion
  function zip(_this__u8e3s4, other) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.zip' call
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = _this__u8e3s4.length;
    var tmp1_minOf = other.length;
    tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
    var size = tmp$ret$0;
    var list = ArrayList_init_$Create$(size);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.zip.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4[i];
        var tmp3__anonymous__ufb84q = other[i];
        tmp$ret$1 = to(tmp2__anonymous__z9zvc9, tmp3__anonymous__ufb84q);
        list.d(tmp$ret$1);
      }
       while (inductionVariable < size);
    tmp$ret$2 = list;
    return tmp$ret$2;
  }
  function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.e(prefix);
    var count = 0;
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.e(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.e(truncated);
    }
    buffer.e(postfix);
    return buffer;
  }
  function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo_0(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.e(prefix);
    var count = 0;
    var tmp0_iterator = _this__u8e3s4.f();
    $l$loop: while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.e(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.e(truncated);
    }
    buffer.e(postfix);
    return buffer;
  }
  function toByteArray(_this__u8e3s4) {
    var result = new Int8Array(_this__u8e3s4.i());
    var index = 0;
    var tmp0_iterator = _this__u8e3s4.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      result[tmp1] = element;
    }
    return result;
  }
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_2(it);
    };
  }
  function AbstractCollection() {
  }
  protoOf(AbstractCollection).toString = function () {
    return joinToString_0(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
  };
  protoOf(AbstractCollection).toArray = function () {
    return copyToArrayImpl(this);
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).j = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(Companion).k = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function collectionSizeOrDefault(_this__u8e3s4, default_0) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.i();
    } else {
      tmp = default_0;
    }
    return tmp;
  }
  function Default() {
    Default_instance = this;
    Random.call(this);
    this.l_1 = defaultPlatformRandom();
  }
  protoOf(Default).m = function (bitCount) {
    return this.l_1.m(bitCount);
  };
  protoOf(Default).n = function () {
    return this.l_1.n();
  };
  protoOf(Default).o = function (from, until) {
    return this.l_1.o(from, until);
  };
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Random() {
    Default_getInstance();
  }
  protoOf(Random).n = function () {
    return this.m(32);
  };
  protoOf(Random).o = function (from, until) {
    checkRangeBounds(from, until);
    var n = until - from | 0;
    if (n > 0 ? true : n === IntCompanionObject_getInstance().MIN_VALUE) {
      var tmp;
      if ((n & (-n | 0)) === n) {
        var bitCount = fastLog2(n);
        tmp = this.m(bitCount);
      } else {
        var v;
        do {
          var bits = this.n() >>> 1 | 0;
          v = bits % n | 0;
        }
         while (((bits - v | 0) + (n - 1 | 0) | 0) < 0);
        tmp = v;
      }
      var rnd = tmp;
      return from + rnd | 0;
    } else {
      while (true) {
        var rnd_0 = this.n();
        if (from <= rnd_0 ? rnd_0 < until : false)
          return rnd_0;
      }
    }
  };
  function checkRangeBounds(from, until) {
    var tmp0_require = until > from;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.random.checkRangeBounds.<anonymous>' call
      tmp$ret$0 = boundsErrorMessage(from, until);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_3(message));
    }
    return tmp;
  }
  function fastLog2(value) {
    var tmp$ret$0;
    // Inline function 'kotlin.countLeadingZeroBits' call
    tmp$ret$0 = clz32(value);
    return 31 - tmp$ret$0 | 0;
  }
  function boundsErrorMessage(from, until) {
    return 'Random range is empty: [' + toString_3(from) + ', ' + toString_3(until) + ').';
  }
  function Random_0(seed) {
    return XorWowRandom_init_$Create$(seed, seed >> 31);
  }
  function takeUpperBits(_this__u8e3s4, bitCount) {
    return (_this__u8e3s4 >>> (32 - bitCount | 0) | 0) & (-bitCount | 0) >> 31;
  }
  function XorWowRandom_init_$Init$(seed1, seed2, $this) {
    XorWowRandom.call($this, seed1, seed2, 0, 0, ~seed1, seed1 << 10 ^ (seed2 >>> 4 | 0));
    return $this;
  }
  function XorWowRandom_init_$Create$(seed1, seed2) {
    return XorWowRandom_init_$Init$(seed1, seed2, objectCreate(protoOf(XorWowRandom)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.p_1 = new Long(0, 0);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function XorWowRandom(x, y, z, w, v, addend) {
    Companion_getInstance_0();
    Random.call(this);
    this.q_1 = x;
    this.r_1 = y;
    this.s_1 = z;
    this.t_1 = w;
    this.u_1 = v;
    this.v_1 = addend;
    // Inline function 'kotlin.require' call
    var tmp0_require = !((this.q_1 | this.r_1 | this.s_1 | this.t_1 | this.u_1) === 0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.random.XorWowRandom.<anonymous>' call
      tmp$ret$0 = 'Initial state must have at least one non-zero element.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_3(message));
    }
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < 64)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.random.XorWowRandom.<anonymous>' call
        this.n();
      }
       while (inductionVariable < 64);
  }
  protoOf(XorWowRandom).n = function () {
    var t = this.q_1;
    t = t ^ (t >>> 2 | 0);
    this.q_1 = this.r_1;
    this.r_1 = this.s_1;
    this.s_1 = this.t_1;
    var v0 = this.u_1;
    this.t_1 = v0;
    t = t ^ t << 1 ^ v0 ^ v0 << 4;
    this.u_1 = t;
    var tmp0_this = this;
    tmp0_this.v_1 = tmp0_this.v_1 + 362437 | 0;
    return t + this.v_1 | 0;
  };
  protoOf(XorWowRandom).m = function (bitCount) {
    return takeUpperBits(this.n(), bitCount);
  };
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.e(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.e(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.x(element.w_1);
        } else {
          _this__u8e3s4.e(toString_2(element));
        }
      }
    }
  }
  function get_lastIndex(_this__u8e3s4) {
    return charSequenceLength(_this__u8e3s4) - 1 | 0;
  }
  function Pair(first, second) {
    this.y_1 = first;
    this.z_1 = second;
  }
  protoOf(Pair).toString = function () {
    return '(' + this.y_1 + ', ' + this.z_1 + ')';
  };
  protoOf(Pair).a1 = function () {
    return this.y_1;
  };
  protoOf(Pair).b1 = function () {
    return this.z_1;
  };
  function to(_this__u8e3s4, that) {
    return new Pair(_this__u8e3s4, that);
  }
  function _UByte___init__impl__g9hnc4(data) {
    return data;
  }
  function _UByte___get_data__impl__jof9qr($this) {
    return $this;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.c1_1 = _UByte___init__impl__g9hnc4(0);
    this.d1_1 = _UByte___init__impl__g9hnc4(-1);
    this.e1_1 = 1;
    this.f1_1 = 8;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function UByte__compareTo_impl_5w5192($this, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toInt' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr($this) & 255;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.UByte.toInt' call
    tmp$ret$1 = _UByte___get_data__impl__jof9qr(other) & 255;
    return compareTo(tmp, tmp$ret$1);
  }
  function UByte__compareTo_impl_5w5192_0($this, other) {
    var tmp = $this.g1_1;
    return UByte__compareTo_impl_5w5192(tmp, other instanceof UByte ? other.g1_1 : THROW_CCE());
  }
  function UByte__toString_impl_v72jg($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toInt' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr($this) & 255;
    return tmp$ret$0.toString();
  }
  function UByte(data) {
    Companion_getInstance_1();
    this.g1_1 = data;
  }
  protoOf(UByte).h1 = function (other) {
    return UByte__compareTo_impl_5w5192(this.g1_1, other);
  };
  protoOf(UByte).i1 = function (other) {
    return UByte__compareTo_impl_5w5192_0(this, other);
  };
  protoOf(UByte).toString = function () {
    return UByte__toString_impl_v72jg(this.g1_1);
  };
  function _UByteArray___init__impl__ip4y9n(storage) {
    return storage;
  }
  function _UByteArray___get_storage__impl__d4kctt($this) {
    return $this;
  }
  function _UByteArray___get_size__impl__h6pkdv($this) {
    return _UByteArray___get_storage__impl__d4kctt($this).length;
  }
  function UByteArray__iterator_impl_509y1p($this) {
    return new Iterator(_UByteArray___get_storage__impl__d4kctt($this));
  }
  function Iterator(array) {
    this.j1_1 = array;
    this.k1_1 = 0;
  }
  protoOf(Iterator).g = function () {
    return this.k1_1 < this.j1_1.length;
  };
  protoOf(Iterator).l1 = function () {
    var tmp;
    if (this.k1_1 < this.j1_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      var tmp0_this = this;
      var tmp1 = tmp0_this.k1_1;
      tmp0_this.k1_1 = tmp1 + 1 | 0;
      var tmp0_toUByte = this.j1_1[tmp1];
      tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
      tmp = tmp$ret$0;
    } else {
      throw NoSuchElementException_init_$Create$_0(this.k1_1.toString());
    }
    return tmp;
  };
  protoOf(Iterator).h = function () {
    return new UByte(this.l1());
  };
  function UByteArray__toString_impl_ukpl97($this) {
    return 'UByteArray(storage=' + toString_3($this) + ')';
  }
  function UByteArray(storage) {
    this.m1_1 = storage;
  }
  protoOf(UByteArray).i = function () {
    return _UByteArray___get_size__impl__h6pkdv(this.m1_1);
  };
  protoOf(UByteArray).f = function () {
    return UByteArray__iterator_impl_509y1p(this.m1_1);
  };
  protoOf(UByteArray).toString = function () {
    return UByteArray__toString_impl_ukpl97(this.m1_1);
  };
  function _UShort___init__impl__jigrne(data) {
    return data;
  }
  function _UShort___get_data__impl__g0245($this) {
    return $this;
  }
  function toString(_this__u8e3s4, radix) {
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toInt' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(_this__u8e3s4) & 255;
    return toString_0(tmp$ret$0, radix);
  }
  function CharSequence() {
  }
  function Number_0() {
  }
  function Unit() {
    Unit_instance = this;
  }
  protoOf(Unit).toString = function () {
    return 'kotlin.Unit';
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function IntCompanionObject() {
    IntCompanionObject_instance = this;
    this.MIN_VALUE = -2147483648;
    this.MAX_VALUE = 2147483647;
    this.SIZE_BYTES = 4;
    this.SIZE_BITS = 32;
  }
  protoOf(IntCompanionObject).p1 = function () {
    return this.MIN_VALUE;
  };
  protoOf(IntCompanionObject).q1 = function () {
    return this.MAX_VALUE;
  };
  protoOf(IntCompanionObject).r1 = function () {
    return this.SIZE_BYTES;
  };
  protoOf(IntCompanionObject).s1 = function () {
    return this.SIZE_BITS;
  };
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject();
    return IntCompanionObject_instance;
  }
  function copyToArrayImpl(collection) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    var array = tmp$ret$0;
    var iterator = collection.f();
    while (iterator.g()) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = array;
      tmp$ret$1.push(iterator.h());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  protoOf(AbstractMutableCollection).toJSON = function () {
    return this.toArray();
  };
  protoOf(AbstractMutableCollection).t1 = function () {
  };
  function IteratorImpl($outer) {
    this.w1_1 = $outer;
    this.u1_1 = 0;
    this.v1_1 = -1;
  }
  protoOf(IteratorImpl).g = function () {
    return this.u1_1 < this.w1_1.i();
  };
  protoOf(IteratorImpl).h = function () {
    if (!this.g())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this.u1_1;
    tmp0_this.u1_1 = tmp1 + 1 | 0;
    tmp.v1_1 = tmp1;
    return this.w1_1.x1(this.v1_1);
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this.y1_1 = 0;
  }
  protoOf(AbstractMutableList).d = function (element) {
    this.t1();
    this.z1(this.i(), element);
    return true;
  };
  protoOf(AbstractMutableList).f = function () {
    return new IteratorImpl(this);
  };
  function ArrayList_init_$Init$(initialCapacity, $this) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$(initialCapacity) {
    return ArrayList_init_$Init$(initialCapacity, objectCreate(protoOf(ArrayList)));
  }
  function rangeCheck($this, index) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.rangeCheck.<anonymous>' call
    Companion_getInstance().j(index, $this.i());
    tmp$ret$0 = index;
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.insertionRangeCheck.<anonymous>' call
    Companion_getInstance().k(index, $this.i());
    tmp$ret$0 = index;
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this.b_1 = array;
    this.c_1 = false;
  }
  protoOf(ArrayList).i = function () {
    return this.b_1.length;
  };
  protoOf(ArrayList).x1 = function (index) {
    var tmp = this.b_1[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(ArrayList).d = function (element) {
    this.t1();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.b_1;
    tmp$ret$0 = tmp0_asDynamic;
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.y1_1;
    tmp0_this.y1_1 = tmp1 + 1 | 0;
    return true;
  };
  protoOf(ArrayList).z1 = function (index, element) {
    this.t1();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.b_1;
    tmp$ret$0 = tmp0_asDynamic;
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.y1_1;
    tmp0_this.y1_1 = tmp1 + 1 | 0;
  };
  protoOf(ArrayList).toString = function () {
    return arrayToString(this.b_1);
  };
  protoOf(ArrayList).a2 = function () {
    return [].slice.call(this.b_1);
  };
  protoOf(ArrayList).toArray = function () {
    return this.a2();
  };
  protoOf(ArrayList).t1 = function () {
    if (this.c_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  var INV_2_26;
  var INV_2_53;
  function defaultPlatformRandom() {
    _init_properties_PlatformRandom_kt__6kjv62();
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Math.random() * Math.pow(2, 32) | 0;
    tmp$ret$0 = tmp0_unsafeCast;
    return Random_0(tmp$ret$0);
  }
  var properties_initialized_PlatformRandom_kt_uibhw8;
  function _init_properties_PlatformRandom_kt__6kjv62() {
    if (properties_initialized_PlatformRandom_kt_uibhw8) {
    } else {
      properties_initialized_PlatformRandom_kt_uibhw8 = true;
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      tmp$ret$0 = Math.pow(2.0, -26.0);
      INV_2_26 = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.math.pow' call
      tmp$ret$0_0 = Math.pow(2.0, -53.0);
      INV_2_53 = tmp$ret$0_0;
    }
  }
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(objectCreate(protoOf(StringBuilder)));
  }
  function StringBuilder(content) {
    this.b2_1 = !(content === undefined) ? content : '';
  }
  protoOf(StringBuilder).n1 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.b2_1;
    tmp$ret$0 = tmp0_asDynamic;
    return tmp$ret$0.length;
  };
  protoOf(StringBuilder).o1 = function (index) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.getOrElse' call
    var tmp0_getOrElse = this.b2_1;
    var tmp;
    if (index >= 0 ? index <= get_lastIndex(tmp0_getOrElse) : false) {
      tmp = charSequenceGet(tmp0_getOrElse, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', length: ' + this.n1() + '}');
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  protoOf(StringBuilder).x = function (value) {
    var tmp0_this = this;
    tmp0_this.b2_1 = tmp0_this.b2_1 + new Char(value);
    return this;
  };
  protoOf(StringBuilder).e = function (value) {
    var tmp0_this = this;
    tmp0_this.b2_1 = tmp0_this.b2_1 + toString_2(value);
    return this;
  };
  protoOf(StringBuilder).toString = function () {
    return this.b2_1;
  };
  function toString_0(_this__u8e3s4, radix) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0.toString(checkRadix(radix));
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$('radix ' + radix + ' was not in valid range 2..36');
    }
    return radix;
  }
  function _Char___init__impl__6a9atx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _Char___init__impl__6a9atx_0(code) {
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(code) & 65535;
    var tmp = _Char___init__impl__6a9atx(tmp$ret$0);
    return tmp;
  }
  function Char__compareTo_impl_ypi4mb($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__compareTo_impl_ypi4mb_0($this, other) {
    var tmp = $this.w_1;
    return Char__compareTo_impl_ypi4mb(tmp, other instanceof Char ? other.w_1 : THROW_CCE());
  }
  function Char__toInt_impl_vasixd($this) {
    return _get_value__a43j40($this);
  }
  function toString_1($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = String.fromCharCode(_get_value__a43j40($this));
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.c2_1 = _Char___init__impl__6a9atx(0);
    this.d2_1 = _Char___init__impl__6a9atx(65535);
    this.e2_1 = _Char___init__impl__6a9atx(55296);
    this.f2_1 = _Char___init__impl__6a9atx(56319);
    this.g2_1 = _Char___init__impl__6a9atx(56320);
    this.h2_1 = _Char___init__impl__6a9atx(57343);
    this.i2_1 = _Char___init__impl__6a9atx(55296);
    this.j2_1 = _Char___init__impl__6a9atx(57343);
    this.k2_1 = 2;
    this.l2_1 = 16;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Char(value) {
    Companion_getInstance_2();
    this.w_1 = value;
  }
  protoOf(Char).m2 = function (other) {
    return Char__compareTo_impl_ypi4mb(this.w_1, other);
  };
  protoOf(Char).i1 = function (other) {
    return Char__compareTo_impl_ypi4mb_0(this, other);
  };
  protoOf(Char).toString = function () {
    return toString_1(this.w_1);
  };
  function Collection() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_3();
    this.n2_1 = name;
    this.o2_1 = ordinal;
  }
  protoOf(Enum).p2 = function () {
    return this.n2_1;
  };
  protoOf(Enum).q2 = function () {
    return this.o2_1;
  };
  protoOf(Enum).r2 = function (other) {
    return compareTo(this.o2_1, other.o2_1);
  };
  protoOf(Enum).i1 = function (other) {
    return this.r2(other instanceof Enum ? other : THROW_CCE());
  };
  protoOf(Enum).equals = function (other) {
    return this === other;
  };
  protoOf(Enum).hashCode = function () {
    return identityHashCode(this);
  };
  protoOf(Enum).toString = function () {
    return this.n2_1;
  };
  function toString_2(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_3(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function implement(interfaces) {
    var maxSize = 1;
    var masks = [];
    var indexedObject = interfaces;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var i = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var currentSize = maxSize;
      var tmp1_elvis_lhs = i.prototype.$imask$;
      var imask = tmp1_elvis_lhs == null ? i.$imask$ : tmp1_elvis_lhs;
      if (!(imask == null)) {
        masks.push(imask);
        currentSize = imask.length;
      }
      var iid = i.$metadata$.iid;
      var tmp2_safe_receiver = iid;
      var tmp;
      if (tmp2_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.implement.<anonymous>' call
        tmp$ret$0 = bitMaskWith(tmp2_safe_receiver);
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var iidImask = tmp;
      if (!(iidImask == null)) {
        masks.push(iidImask);
        currentSize = Math.max(currentSize, iidImask.length);
      }
      if (currentSize > maxSize) {
        maxSize = currentSize;
      }
    }
    return compositeBitMask(maxSize, masks);
  }
  function bitMaskWith(activeBit) {
    var intArray = new Int32Array((activeBit >> 5) + 1 | 0);
    var numberIndex = activeBit >> 5;
    var positionInNumber = activeBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
    return intArray;
  }
  function compositeBitMask(capacity, masks) {
    var tmp = 0;
    var tmp_0 = capacity;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'kotlin.js.compositeBitMask.<anonymous>' call
      var result = 0;
      var indexedObject = masks;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var mask = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (tmp_2 < mask.length) {
          result = result | mask[tmp_2];
        }
      }
      tmp$ret$0 = result;
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isBitSet(_this__u8e3s4, possibleActiveBit) {
    var numberIndex = possibleActiveBit >> 5;
    if (numberIndex > _this__u8e3s4.length)
      return false;
    var positionInNumber = possibleActiveBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    return !((_this__u8e3s4[numberIndex] & numberWithSettledBit) === 0);
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      // Inline function 'kotlin.Char' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = a;
      var tmp0_unsafeCast = tmp$ret$0.charCodeAt(index);
      tmp$ret$1 = tmp0_unsafeCast;
      var tmp3_Char = tmp$ret$1;
      var tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      Companion_getInstance_2();
      var tmp1__get_code__adl84j = _Char___init__impl__6a9atx(0);
      tmp$ret$2 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
      if (tmp3_Char < tmp$ret$2) {
        tmp_0 = true;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        Companion_getInstance_2();
        var tmp2__get_code__cifwzm = _Char___init__impl__6a9atx(65535);
        tmp$ret$3 = Char__toInt_impl_vasixd(tmp2__get_code__cifwzm);
        tmp_0 = tmp3_Char > tmp$ret$3;
      }
      if (tmp_0) {
        throw IllegalArgumentException_init_$Create$('Invalid Char code: ' + tmp3_Char);
      }
      tmp$ret$4 = numberToChar(tmp3_Char);
      tmp = tmp$ret$4;
    } else {
      tmp = a.o1(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = a;
      var tmp0_unsafeCast = tmp$ret$0.length;
      tmp$ret$1 = tmp0_unsafeCast;
      tmp = tmp$ret$1;
    } else {
      tmp = a.n1();
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString(array, ', ', '[', ']', VOID, VOID, arrayToString$lambda);
  }
  function arrayToString$lambda(it) {
    return toString_3(it);
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.u2());
          } else {
            tmp_0 = primitiveCompareTo(a, b);
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:
        tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 1;
        var ia = tmp$ret$0 / a;
        var tmp_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = 1;
        if (ia === tmp$ret$1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            tmp_1 = 1;
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.i1(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsIn' call
    var tmp0_jsIn = 'kotlinHashCodeValue$';
    var tmp1_jsIn = obj;
    tmp$ret$0 = tmp0_jsIn in tmp1_jsIn;
    if (!tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp2_jsBitwiseOr = Math.random() * 4.294967296E9;
      tmp$ret$1 = tmp2_jsBitwiseOr | 0;
      var hash = tmp$ret$1;
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp3_unsafeCast = obj['kotlinHashCodeValue$'];
    tmp$ret$2 = tmp3_unsafeCast;
    return tmp$ret$2;
  }
  function toString_3(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = o.toString();
      tmp$ret$0 = tmp0_unsafeCast;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function boxIntrinsic(x) {
    throw IllegalStateException_init_$Create$_0('Should be lowered');
  }
  function unboxIntrinsic(x) {
    throw IllegalStateException_init_$Create$_0('Should be lowered');
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = instance;
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function protoOf(constructor) {
    return constructor.prototype;
  }
  function defineProp(obj, name, getter, setter) {
    return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter});
  }
  function objectCreate(proto) {
    return Object.create(proto);
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
        } else {
          tmp_0 = VOID;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Object.getPrototypeOf(o).hasOwnProperty(name);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$('lateinit property ' + name + ' has not been initialized');
  }
  function THROW_ISE() {
    throw IllegalStateException_init_$Create$();
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.v2_1 = new Long(0, -2147483648);
    this.w2_1 = new Long(-1, 2147483647);
    this.x2_1 = 8;
    this.y2_1 = 64;
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Long(low, high) {
    Companion_getInstance_4();
    Number_0.call(this);
    this.s2_1 = low;
    this.t2_1 = high;
  }
  protoOf(Long).z2 = function (other) {
    return compare(this, other);
  };
  protoOf(Long).i1 = function (other) {
    return this.z2(other instanceof Long ? other : THROW_CCE());
  };
  protoOf(Long).a3 = function (other) {
    return add(this, other);
  };
  protoOf(Long).b3 = function (other) {
    return divide(this, other);
  };
  protoOf(Long).c3 = function () {
    return this.d3().a3(new Long(1, 0));
  };
  protoOf(Long).d3 = function () {
    return new Long(~this.s2_1, ~this.t2_1);
  };
  protoOf(Long).e3 = function () {
    return this.s2_1;
  };
  protoOf(Long).u2 = function () {
    return toNumber(this);
  };
  protoOf(Long).valueOf = function () {
    return this.u2();
  };
  protoOf(Long).toString = function () {
    return toStringImpl(this, 10);
  };
  function get_ZERO() {
    _init_properties_longjs_kt__tqrzid();
    return ZERO;
  }
  var ZERO;
  function get_ONE() {
    _init_properties_longjs_kt__tqrzid();
    return ONE;
  }
  var ONE;
  function get_NEG_ONE() {
    _init_properties_longjs_kt__tqrzid();
    return NEG_ONE;
  }
  var NEG_ONE;
  function get_MAX_VALUE() {
    _init_properties_longjs_kt__tqrzid();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function get_MIN_VALUE() {
    _init_properties_longjs_kt__tqrzid();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function get_TWO_PWR_24_() {
    _init_properties_longjs_kt__tqrzid();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    if (equalsLong(_this__u8e3s4, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__u8e3s4);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
  }
  function add(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    var a48 = _this__u8e3s4.t2_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.t2_1 & 65535;
    var a16 = _this__u8e3s4.s2_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.s2_1 & 65535;
    var b48 = other.t2_1 >>> 16 | 0;
    var b32 = other.t2_1 & 65535;
    var b16 = other.s2_1 >>> 16 | 0;
    var b00 = other.s2_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return add(_this__u8e3s4, other.c3());
  }
  function multiply(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    } else if (isZero(other)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__u8e3s4, negate(other)));
    }
    if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) ? lessThan(other, get_TWO_PWR_24_()) : false) {
      return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
    }
    var a48 = _this__u8e3s4.t2_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.t2_1 & 65535;
    var a16 = _this__u8e3s4.s2_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.s2_1 & 65535;
    var b48 = other.t2_1 >>> 16 | 0;
    var b32 = other.t2_1 & 65535;
    var b16 = other.s2_1 >>> 16 | 0;
    var b00 = other.s2_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      if (equalsLong(other, get_ONE()) ? true : equalsLong(other, get_NEG_ONE())) {
        return get_MIN_VALUE();
      } else if (equalsLong(other, get_MIN_VALUE())) {
        return get_ONE();
      } else {
        var halfThis = shiftRight(_this__u8e3s4, 1);
        var approx = shiftLeft(halfThis.b3(other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, rem.b3(other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__u8e3s4).b3(negate(other));
      } else {
        tmp = negate(negate(_this__u8e3s4).b3(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__u8e3s4.b3(negate(other)));
    }
    var res = get_ZERO();
    var rem_0 = _this__u8e3s4;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = get_ONE();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__u8e3s4, numBits) {
    _init_properties_longjs_kt__tqrzid();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.s2_1 << numBits_0, _this__u8e3s4.t2_1 << numBits_0 | (_this__u8e3s4.s2_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.s2_1 << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__u8e3s4, numBits) {
    _init_properties_longjs_kt__tqrzid();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.s2_1 >>> numBits_0 | 0 | _this__u8e3s4.t2_1 << (32 - numBits_0 | 0), _this__u8e3s4.t2_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.t2_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.t2_1 >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.t2_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function equalsLong(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.t2_1 === other.t2_1 ? _this__u8e3s4.s2_1 === other.s2_1 : false;
  }
  function toStringImpl(_this__u8e3s4, radix) {
    _init_properties_longjs_kt__tqrzid();
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('radix out of range: ' + radix);
    }
    if (isZero(_this__u8e3s4)) {
      return '0';
    }
    if (isNegative(_this__u8e3s4)) {
      if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
        var radixLong = fromInt(radix);
        var div = _this__u8e3s4.b3(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__u8e3s4).e3();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = rem;
        var tmp0_unsafeCast = tmp$ret$0.toString(radix);
        tmp$ret$1 = tmp0_unsafeCast;
        return tmp + tmp$ret$1;
      } else {
        return '-' + toStringImpl(negate(_this__u8e3s4), radix);
      }
    }
    var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
    var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
    var rem_0 = _this__u8e3s4;
    var result = '';
    while (true) {
      var remDiv = rem_0.b3(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).e3();
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = intval;
      var tmp1_unsafeCast = tmp$ret$2.toString(radix);
      tmp$ret$3 = tmp1_unsafeCast;
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < digitsPerTime) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    _init_properties_longjs_kt__tqrzid();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.t2_1 < 0;
  }
  function isZero(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.t2_1 === 0 ? _this__u8e3s4.s2_1 === 0 : false;
  }
  function isOdd(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return (_this__u8e3s4.s2_1 & 1) === 1;
  }
  function negate(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.c3();
  }
  function lessThan(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return compare(_this__u8e3s4, other) < 0;
  }
  function fromNumber(value) {
    _init_properties_longjs_kt__tqrzid();
    if (isNaN_0(value)) {
      return get_ZERO();
    } else if (value <= -9.223372036854776E18) {
      return get_MIN_VALUE();
    } else if (value + 1 >= 9.223372036854776E18) {
      return get_MAX_VALUE();
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      var tmp$ret$0;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp0_jsBitwiseOr = value % twoPwr32;
      tmp$ret$0 = tmp0_jsBitwiseOr | 0;
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp1_jsBitwiseOr = value / twoPwr32;
      tmp$ret$1 = tmp1_jsBitwiseOr | 0;
      return new Long(tmp, tmp$ret$1);
    }
  }
  function greaterThan(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return compare(_this__u8e3s4, other) > 0;
  }
  function greaterThanOrEqual(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return compare(_this__u8e3s4, other) >= 0;
  }
  function getLowBitsUnsigned(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.s2_1 >= 0 ? _this__u8e3s4.s2_1 : 4.294967296E9 + _this__u8e3s4.s2_1;
  }
  var properties_initialized_longjs_kt_5aju7t;
  function _init_properties_longjs_kt__tqrzid() {
    if (properties_initialized_longjs_kt_5aju7t) {
    } else {
      properties_initialized_longjs_kt_5aju7t = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function toByte(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = a << 24 >> 24;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.e3();
    } else {
      tmp = doubleToInt(a);
    }
    return tmp;
  }
  function doubleToInt(a) {
    var tmp;
    if (a > 2.147483647E9) {
      tmp = 2147483647;
    } else if (a < -2.147483648E9) {
      tmp = -2147483648;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      tmp$ret$0 = a | 0;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function toShort(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = a << 16 >> 16;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = numberToInt(a);
    tmp$ret$0 = _UShort___init__impl__jigrne(toShort(tmp0_toUShort));
    return _Char___init__impl__6a9atx_0(tmp$ret$0);
  }
  function classMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('class', name, associatedObjectKey, associatedObjects, suspendArity, null);
  }
  function createMetadata(kind, name, associatedObjectKey, associatedObjects, suspendArity, iid) {
    var undef = VOID;
    return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, iid: iid};
  }
  function isArrayish(o) {
    return isJsArray(o) ? true : isView(o);
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Array.isArray(obj);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function setMetadataFor(ctor, name, metadataConstructor, parent, interfaces, associatedObjectKey, associatedObjects, suspendArity) {
    if (!(parent == null)) {
      ctor.prototype = Object.create(parent.prototype);
      ctor.prototype.constructor = ctor;
    }
    var tmp0_elvis_lhs = suspendArity;
    var metadata = metadataConstructor(name, associatedObjectKey, associatedObjects, tmp0_elvis_lhs == null ? [] : tmp0_elvis_lhs);
    ctor.$metadata$ = metadata;
    if (!(interfaces == null)) {
      var receiver = !(metadata.iid == null) ? ctor : ctor.prototype;
      receiver.$imask$ = implement(interfaces);
    }
  }
  function isInterface(obj, iface) {
    return isInterfaceImpl(obj, iface.$metadata$.iid);
  }
  function isInterfaceImpl(obj, iface) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = obj.$imask$;
    tmp$ret$0 = tmp0_unsafeCast;
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mask = tmp;
    return isBitSet(mask, iface);
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = true;
        break;
      case 'number':
        tmp = true;
        break;
      case 'boolean':
        tmp = true;
        break;
      case 'function':
        tmp = true;
        break;
      default:
        var tmp$ret$0;
        // Inline function 'kotlin.js.jsInstanceOf' call
        var tmp0_jsInstanceOf = Object;
        tmp$ret$0 = obj instanceof tmp0_jsInstanceOf;

        tmp = tmp$ret$0;
        break;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, CharSequence);
  }
  function interfaceMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('interface', name, associatedObjectKey, associatedObjects, suspendArity, generateInterfaceId());
  }
  function generateInterfaceId() {
    if (!!(iid == null)) {
      iid = 0;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = get_iid();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    iid = tmp$ret$1 + 1 | 0;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp1_unsafeCast = get_iid();
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_unsafeCast;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function get_iid() {
    var tmp = iid;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('iid');
    }
  }
  var iid;
  function objectMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('object', name, associatedObjectKey, associatedObjects, suspendArity, null);
  }
  function get_VOID() {
    _init_properties_void_kt__3zg9as();
    return VOID;
  }
  var VOID;
  var properties_initialized_void_kt_e4ret2;
  function _init_properties_void_kt__3zg9as() {
    if (properties_initialized_void_kt_e4ret2) {
    } else {
      properties_initialized_void_kt_e4ret2 = true;
      VOID = void 0;
    }
  }
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, objectCreate(protoOf(IllegalArgumentException)));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, objectCreate(protoOf(IndexOutOfBoundsException)));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message) {
    var tmp = IllegalStateException_init_$Init$_0(message, objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, objectCreate(protoOf(Exception)));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(objectCreate(protoOf(ClassCastException)));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  function UninitializedPropertyAccessException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$(message, objectCreate(protoOf(UninitializedPropertyAccessException)));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ArrayList_init_$Create$;
  _.$_$.b = Exception_init_$Init$_0;
  _.$_$.c = Char__toInt_impl_vasixd;
  _.$_$.d = _UByteArray___init__impl__ip4y9n;
  _.$_$.e = Default_getInstance;
  _.$_$.f = Unit_getInstance;
  _.$_$.g = collectionSizeOrDefault;
  _.$_$.h = joinToString_0;
  _.$_$.i = toByteArray;
  _.$_$.j = zip;
  _.$_$.k = captureStack;
  _.$_$.l = charSequenceGet;
  _.$_$.m = charSequenceLength;
  _.$_$.n = classMeta;
  _.$_$.o = defineProp;
  _.$_$.p = interfaceMeta;
  _.$_$.q = objectMeta;
  _.$_$.r = protoOf;
  _.$_$.s = setMetadataFor;
  _.$_$.t = toByte;
  _.$_$.u = toString;
  _.$_$.v = Enum;
  _.$_$.w = Exception;
  _.$_$.x = THROW_ISE;
  _.$_$.y = UByteArray;
  _.$_$.z = VOID;
  //endregion
  return _;
}));



},{}],2:[function(require,module,exports){
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktpinblock-ktpinblock'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktpinblock-ktpinblock'.");
    }
    root['ktpinblock-ktpinblock'] = factory(typeof this['ktpinblock-ktpinblock'] === 'undefined' ? {} : this['ktpinblock-ktpinblock'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.r;
  var objectMeta = kotlin_kotlin.$_$.q;
  var VOID = kotlin_kotlin.$_$.z;
  var setMetadataFor = kotlin_kotlin.$_$.s;
  var Exception = kotlin_kotlin.$_$.w;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.b;
  var captureStack = kotlin_kotlin.$_$.k;
  var classMeta = kotlin_kotlin.$_$.n;
  var toByte = kotlin_kotlin.$_$.t;
  var Unit_getInstance = kotlin_kotlin.$_$.f;
  var interfaceMeta = kotlin_kotlin.$_$.p;
  var THROW_ISE = kotlin_kotlin.$_$.x;
  var Enum = kotlin_kotlin.$_$.v;
  var defineProp = kotlin_kotlin.$_$.o;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.d;
  var UByteArray = kotlin_kotlin.$_$.y;
  var joinToString = kotlin_kotlin.$_$.h;
  var toString = kotlin_kotlin.$_$.u;
  var Default_getInstance = kotlin_kotlin.$_$.e;
  var zip = kotlin_kotlin.$_$.j;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a;
  var toByteArray = kotlin_kotlin.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.m;
  var charSequenceGet = kotlin_kotlin.$_$.l;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Const, 'Const', objectMeta);
  setMetadataFor(PinBlockException, 'PinBlockException', classMeta, Exception);
  setMetadataFor(PinException, 'PinException', classMeta, PinBlockException);
  setMetadataFor(PanException, 'PanException', classMeta, PinBlockException);
  setMetadataFor(PinBlockLengthException, 'PinBlockLengthException', classMeta, PinBlockException);
  setMetadataFor(NotImplementedException, 'NotImplementedException', classMeta, PinBlockException);
  setMetadataFor(UnexpectedNullException, 'UnexpectedNullException', classMeta, PinBlockException);
  setMetadataFor(UnexpectedNotNullException, 'UnexpectedNotNullException', classMeta, PinBlockException);
  setMetadataFor(PinBlockEncoder, 'PinBlockEncoder', interfaceMeta);
  setMetadataFor(PinBlockDecoder, 'PinBlockDecoder', interfaceMeta);
  setMetadataFor(PinBlock, 'PinBlock', classMeta, VOID, [PinBlockEncoder, PinBlockDecoder]);
  setMetadataFor(Platform, 'Platform', interfaceMeta);
  setMetadataFor(PinBlockFormat, 'PinBlockFormat', classMeta, Enum);
  setMetadataFor(EftInputValidator, 'EftInputValidator', objectMeta);
  setMetadataFor(IsoPanPreparer, 'IsoPanPreparer', objectMeta);
  setMetadataFor(IsoPinDecoder, 'IsoPinDecoder', objectMeta);
  setMetadataFor(IsoPinPreparer, 'IsoPinPreparer', classMeta);
  setMetadataFor(PinBlockIso0, 'PinBlockIso0', objectMeta);
  setMetadataFor(PinBlockIso1, 'PinBlockIso1', objectMeta);
  setMetadataFor(PinBlockIso2, 'PinBlockIso2', objectMeta);
  setMetadataFor(PinBlockIso3, 'PinBlockIso3', objectMeta);
  setMetadataFor(MathUtilityX, 'MathUtilityX', objectMeta);
  setMetadataFor(RandomNibbleProvider, 'RandomNibbleProvider', objectMeta);
  setMetadataFor(FNibbleProvider, 'FNibbleProvider', objectMeta);
  setMetadataFor(StringUtilityX, 'StringUtilityX', objectMeta);
  //endregion
  function Const() {
    Const_instance = this;
    this.h3_1 = 4;
    this.i3_1 = 12;
    this.j3_1 = 48;
    this.k3_1 = 12;
    this.l3_1 = 19;
    this.m3_1 = 16;
    this.n3_1 = 65;
    this.o3_1 = 0;
    this.p3_1 = 1;
    this.q3_1 = 2;
    this.r3_1 = 3;
  }
  var Const_instance;
  function Const_getInstance() {
    if (Const_instance == null)
      new Const();
    return Const_instance;
  }
  function PinBlockException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, PinBlockException);
  }
  function PinException(message) {
    PinBlockException.call(this, message);
    captureStack(this, PinException);
  }
  function PanException(message) {
    PinBlockException.call(this, message);
    captureStack(this, PanException);
  }
  function PinBlockLengthException(message) {
    PinBlockException.call(this, message);
    captureStack(this, PinBlockLengthException);
  }
  function NotImplementedException(message) {
    PinBlockException.call(this, message);
    captureStack(this, NotImplementedException);
  }
  function UnexpectedNullException(message) {
    PinBlockException.call(this, message);
    captureStack(this, UnexpectedNullException);
  }
  function UnexpectedNotNullException(message) {
    PinBlockException.call(this, message);
    captureStack(this, UnexpectedNotNullException);
  }
  function setHiNibbleValue($this, value) {
    return toByte(240 & value << 4);
  }
  function setLowNibbleValue($this, value) {
    return toByte(15 & value);
  }
  function PinBlock() {
    this.s3_1 = EftInputValidator_getInstance();
  }
  protoOf(PinBlock).encodeToBytes = function (pan, pin, format) {
    this.s3_1.t3(pan, format);
    this.s3_1.u3(pin, format);
    return format.y3(pan, pin);
  };
  protoOf(PinBlock).encode = function (pan, pin, format) {
    return toHexString(this.encodeToBytes(pan, pin, format));
  };
  protoOf(PinBlock).encodeToCompactBytes = function (pan, pin, format) {
    var blockBytes = this.encodeToBytes(pan, pin, format);
    if (!(blockBytes.length === Const_getInstance().m3_1)) {
      throw new PinBlockLengthException('PIN block size should be: ' + Const_getInstance().m3_1);
    }
    var compactBytes = new Int8Array(blockBytes.length / 2 | 0);
    var inductionVariable = 0;
    var last = blockBytes.length / 2 | 0;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var highByte = setHiNibbleValue(this, blockBytes[imul(index, 2)]);
        var lowByte = setLowNibbleValue(this, blockBytes[imul(index, 2) + 1 | 0]);
        var tmp$ret$0;
        // Inline function 'kotlin.experimental.or' call
        tmp$ret$0 = toByte(highByte | lowByte);
        compactBytes[index] = tmp$ret$0;
      }
       while (inductionVariable < last);
    return compactBytes;
  };
  protoOf(PinBlock).decodePinBlock = function (pinBlock, pan, format) {
    this.s3_1.z3(pinBlock, format);
    this.s3_1.t3(pan, format);
    return format.a4(pinBlock, pan);
  };
  protoOf(PinBlock).decodePinBlockFromBytes = function (pinBlock, pan, format) {
    this.s3_1.t3(pan, format);
    return format.a4(toHexString(pinBlock), pan);
  };
  function Platform() {
  }
  function PinBlockDecoder() {
  }
  function PinBlockEncoder() {
  }
  var PinBlockFormat_ISO0_instance;
  var PinBlockFormat_ISO1_instance;
  var PinBlockFormat_ISO2_instance;
  var PinBlockFormat_ISO3_instance;
  var PinBlockFormat_ISO4_instance;
  var PinBlockFormat_ANSIX98_instance;
  var PinBlockFormat_OEM1_instance;
  var PinBlockFormat_ECI1_instance;
  var PinBlockFormat_ECI2_instance;
  var PinBlockFormat_ECI3_instance;
  var PinBlockFormat_ECI4_instance;
  var PinBlockFormat_IBM3621_instance;
  var PinBlockFormat_IBM3624_instance;
  var PinBlockFormat_IBM4704_instance;
  var PinBlockFormat_IBM5906_instance;
  var PinBlockFormat_VISA1_instance;
  var PinBlockFormat_VISA2_instance;
  var PinBlockFormat_VISA3_instance;
  var PinBlockFormat_VISA4_instance;
  var PinBlockFormat_DOCUTEL2_instance;
  var PinBlockFormat_AS2805Format1_instance;
  var PinBlockFormat_AS2805Format8_instance;
  function values() {
    return [PinBlockFormat_ISO0_getInstance(), PinBlockFormat_ISO1_getInstance(), PinBlockFormat_ISO2_getInstance(), PinBlockFormat_ISO3_getInstance(), PinBlockFormat_ISO4_getInstance(), PinBlockFormat_ANSIX98_getInstance(), PinBlockFormat_OEM1_getInstance(), PinBlockFormat_ECI1_getInstance(), PinBlockFormat_ECI2_getInstance(), PinBlockFormat_ECI3_getInstance(), PinBlockFormat_ECI4_getInstance(), PinBlockFormat_IBM3621_getInstance(), PinBlockFormat_IBM3624_getInstance(), PinBlockFormat_IBM4704_getInstance(), PinBlockFormat_IBM5906_getInstance(), PinBlockFormat_VISA1_getInstance(), PinBlockFormat_VISA2_getInstance(), PinBlockFormat_VISA3_getInstance(), PinBlockFormat_VISA4_getInstance(), PinBlockFormat_DOCUTEL2_getInstance(), PinBlockFormat_AS2805Format1_getInstance(), PinBlockFormat_AS2805Format8_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ISO0':
        return PinBlockFormat_ISO0_getInstance();
      case 'ISO1':
        return PinBlockFormat_ISO1_getInstance();
      case 'ISO2':
        return PinBlockFormat_ISO2_getInstance();
      case 'ISO3':
        return PinBlockFormat_ISO3_getInstance();
      case 'ISO4':
        return PinBlockFormat_ISO4_getInstance();
      case 'ANSIX98':
        return PinBlockFormat_ANSIX98_getInstance();
      case 'OEM1':
        return PinBlockFormat_OEM1_getInstance();
      case 'ECI1':
        return PinBlockFormat_ECI1_getInstance();
      case 'ECI2':
        return PinBlockFormat_ECI2_getInstance();
      case 'ECI3':
        return PinBlockFormat_ECI3_getInstance();
      case 'ECI4':
        return PinBlockFormat_ECI4_getInstance();
      case 'IBM3621':
        return PinBlockFormat_IBM3621_getInstance();
      case 'IBM3624':
        return PinBlockFormat_IBM3624_getInstance();
      case 'IBM4704':
        return PinBlockFormat_IBM4704_getInstance();
      case 'IBM5906':
        return PinBlockFormat_IBM5906_getInstance();
      case 'VISA1':
        return PinBlockFormat_VISA1_getInstance();
      case 'VISA2':
        return PinBlockFormat_VISA2_getInstance();
      case 'VISA3':
        return PinBlockFormat_VISA3_getInstance();
      case 'VISA4':
        return PinBlockFormat_VISA4_getInstance();
      case 'DOCUTEL2':
        return PinBlockFormat_DOCUTEL2_getInstance();
      case 'AS2805Format1':
        return PinBlockFormat_AS2805Format1_getInstance();
      case 'AS2805Format8':
        return PinBlockFormat_AS2805Format8_getInstance();
      default:
        PinBlockFormat_initEntries();
        THROW_ISE();
        break;
    }
  }
  var PinBlockFormat_entriesInitialized;
  function PinBlockFormat_initEntries() {
    if (PinBlockFormat_entriesInitialized)
      return Unit_getInstance();
    PinBlockFormat_entriesInitialized = true;
    PinBlockFormat_ISO0_instance = new PinBlockFormat('ISO0', 0);
    PinBlockFormat_ISO1_instance = new PinBlockFormat('ISO1', 1);
    PinBlockFormat_ISO2_instance = new PinBlockFormat('ISO2', 2);
    PinBlockFormat_ISO3_instance = new PinBlockFormat('ISO3', 3);
    PinBlockFormat_ISO4_instance = new PinBlockFormat('ISO4', 4);
    PinBlockFormat_ANSIX98_instance = new PinBlockFormat('ANSIX98', 5);
    PinBlockFormat_OEM1_instance = new PinBlockFormat('OEM1', 6);
    PinBlockFormat_ECI1_instance = new PinBlockFormat('ECI1', 7);
    PinBlockFormat_ECI2_instance = new PinBlockFormat('ECI2', 8);
    PinBlockFormat_ECI3_instance = new PinBlockFormat('ECI3', 9);
    PinBlockFormat_ECI4_instance = new PinBlockFormat('ECI4', 10);
    PinBlockFormat_IBM3621_instance = new PinBlockFormat('IBM3621', 11);
    PinBlockFormat_IBM3624_instance = new PinBlockFormat('IBM3624', 12);
    PinBlockFormat_IBM4704_instance = new PinBlockFormat('IBM4704', 13);
    PinBlockFormat_IBM5906_instance = new PinBlockFormat('IBM5906', 14);
    PinBlockFormat_VISA1_instance = new PinBlockFormat('VISA1', 15);
    PinBlockFormat_VISA2_instance = new PinBlockFormat('VISA2', 16);
    PinBlockFormat_VISA3_instance = new PinBlockFormat('VISA3', 17);
    PinBlockFormat_VISA4_instance = new PinBlockFormat('VISA4', 18);
    PinBlockFormat_DOCUTEL2_instance = new PinBlockFormat('DOCUTEL2', 19);
    PinBlockFormat_AS2805Format1_instance = new PinBlockFormat('AS2805Format1', 20);
    PinBlockFormat_AS2805Format8_instance = new PinBlockFormat('AS2805Format8', 21);
  }
  function PinBlockFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
    this.x3_1 = EftInputValidator_getInstance();
  }
  protoOf(PinBlockFormat).y3 = function (pan, pin) {
    this.x3_1.t3(pan, this);
    this.x3_1.u3(pin, this);
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.o2_1;
    var tmp;
    switch (tmp0) {
      case 0:
      case 7:
      case 15:
        tmp = PinBlockIso0_getInstance().y3(pan, pin);
        break;
      case 1:
      case 10:
        tmp = PinBlockIso1_getInstance().y3(null, pin);
        break;
      case 2:
        tmp = PinBlockIso2_getInstance().y3(null, pin);
        break;
      case 3:
        tmp = PinBlockIso3_getInstance().y3(pan, pin);
        break;
      default:
        throw new NotImplementedException('Encoder for this format is not implemented yet.');
    }
    return tmp;
  };
  protoOf(PinBlockFormat).a4 = function (pinBlock, pan) {
    this.x3_1.z3(pinBlock, this);
    this.x3_1.t3(pan, this);
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.o2_1;
    var tmp;
    switch (tmp0) {
      case 0:
      case 7:
      case 15:
        tmp = PinBlockIso0_getInstance().a4(pinBlock, pan);
        break;
      case 1:
      case 10:
        tmp = PinBlockIso1_getInstance().a4(pinBlock, null);
        break;
      case 2:
        tmp = PinBlockIso2_getInstance().a4(pinBlock, null);
        break;
      case 3:
        tmp = PinBlockIso3_getInstance().a4(pinBlock, pan);
        break;
      default:
        throw new NotImplementedException('Decoder for this format is not implemented yet.');
    }
    return tmp;
  };
  defineProp(protoOf(PinBlockFormat), 'name', protoOf(PinBlockFormat).p2);
  defineProp(protoOf(PinBlockFormat), 'ordinal', protoOf(PinBlockFormat).q2);
  function PinBlockFormat_ISO0_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_ISO0_instance;
  }
  function PinBlockFormat_ISO1_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_ISO1_instance;
  }
  function PinBlockFormat_ISO2_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_ISO2_instance;
  }
  function PinBlockFormat_ISO3_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_ISO3_instance;
  }
  function PinBlockFormat_ISO4_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_ISO4_instance;
  }
  function PinBlockFormat_ANSIX98_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_ANSIX98_instance;
  }
  function PinBlockFormat_OEM1_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_OEM1_instance;
  }
  function PinBlockFormat_ECI1_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_ECI1_instance;
  }
  function PinBlockFormat_ECI2_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_ECI2_instance;
  }
  function PinBlockFormat_ECI3_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_ECI3_instance;
  }
  function PinBlockFormat_ECI4_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_ECI4_instance;
  }
  function PinBlockFormat_IBM3621_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_IBM3621_instance;
  }
  function PinBlockFormat_IBM3624_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_IBM3624_instance;
  }
  function PinBlockFormat_IBM4704_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_IBM4704_instance;
  }
  function PinBlockFormat_IBM5906_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_IBM5906_instance;
  }
  function PinBlockFormat_VISA1_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_VISA1_instance;
  }
  function PinBlockFormat_VISA2_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_VISA2_instance;
  }
  function PinBlockFormat_VISA3_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_VISA3_instance;
  }
  function PinBlockFormat_VISA4_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_VISA4_instance;
  }
  function PinBlockFormat_DOCUTEL2_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_DOCUTEL2_instance;
  }
  function PinBlockFormat_AS2805Format1_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_AS2805Format1_instance;
  }
  function PinBlockFormat_AS2805Format8_getInstance() {
    PinBlockFormat_initEntries();
    return PinBlockFormat_AS2805Format8_instance;
  }
  function EftInputValidator() {
    EftInputValidator_instance = this;
  }
  protoOf(EftInputValidator).u3 = function (pin, format) {
    if (pin.length < Const_getInstance().h3_1) {
      throw new PinException('Pin length is less than ' + Const_getInstance().h3_1);
    }
    if (pin.length >= Const_getInstance().i3_1) {
      throw new PinException('Pin length is larger than ' + Const_getInstance().i3_1);
    }
  };
  protoOf(EftInputValidator).t3 = function (pan, format) {
    var tmp0_subject = format;
    var tmp0 = tmp0_subject.o2_1;
    switch (tmp0) {
      case 0:
      case 3:
      case 4:
      case 5:
      case 7:
      case 15:
      case 18:
      case 19:
        if (pan == null) {
          throw new UnexpectedNullException('PAN should NOT be null for this format.');
        }

        this.r4(pan);
        ;
        break;
      case 1:
      case 2:
      case 6:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 16:
      case 17:
      case 20:
      case 21:
        if (!(pan == null)) {
          throw new UnexpectedNotNullException('PAN should be null for this format.');
        }

        break;
    }
  };
  protoOf(EftInputValidator).r4 = function (pan) {
    if (pan.length < Const_getInstance().k3_1) {
      throw new PanException('Pan length is less than ' + Const_getInstance().k3_1);
    }
    if (pan.length >= Const_getInstance().l3_1) {
      throw new PinException('Pin length is larger than ' + Const_getInstance().l3_1);
    }
  };
  protoOf(EftInputValidator).z3 = function (pinBlock, format) {
    if (!(pinBlock.length === Const_getInstance().m3_1)) {
      throw new PinBlockLengthException('PIN block length is not ' + Const_getInstance().m3_1);
    }
  };
  var EftInputValidator_instance;
  function EftInputValidator_getInstance() {
    if (EftInputValidator_instance == null)
      new EftInputValidator();
    return EftInputValidator_instance;
  }
  function preparePanBytes($this, panBytes) {
    var blockBytes = new Int8Array(Const_getInstance().m3_1);
    var inductionVariable = 0;
    if (inductionVariable < 4)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        blockBytes[index] = 0;
      }
       while (inductionVariable < 4);
    var inductionVariable_0 = 4;
    var last = Const_getInstance().m3_1;
    if (inductionVariable_0 < last)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        blockBytes[index_0] = toByte(panBytes[(((panBytes.length - 12 | 0) - 1 | 0) + index_0 | 0) - 4 | 0] - Const_getInstance().j3_1 | 0);
      }
       while (inductionVariable_0 < last);
    return blockBytes;
  }
  function IsoPanPreparer() {
    IsoPanPreparer_instance = this;
    this.s4_1 = StringUtilityX_getInstance();
  }
  protoOf(IsoPanPreparer).t4 = function (pan) {
    var panBytes = this.s4_1.u4(pan);
    return preparePanBytes(this, panBytes);
  };
  var IsoPanPreparer_instance;
  function IsoPanPreparer_getInstance() {
    if (IsoPanPreparer_instance == null)
      new IsoPanPreparer();
    return IsoPanPreparer_instance;
  }
  function IsoPinDecoder() {
    IsoPinDecoder_instance = this;
    this.v4_1 = StringUtilityX_getInstance();
  }
  protoOf(IsoPinDecoder).w4 = function (pinBlock) {
    var blockBytes = this.v4_1.u4(pinBlock);
    var preparedBlockBytes = new Int8Array(blockBytes.length);
    var inductionVariable = 0;
    var last = blockBytes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var byte = blockBytes[index];
        if (byte < Const_getInstance().n3_1) {
          preparedBlockBytes[index] = toByte(byte - Const_getInstance().j3_1 | 0);
        } else {
          preparedBlockBytes[index] = toByte((byte - Const_getInstance().n3_1 | 0) + 10 | 0);
        }
      }
       while (inductionVariable <= last);
    return preparedBlockBytes;
  };
  protoOf(IsoPinDecoder).x4 = function (pinBytes, version) {
    if (!(pinBytes[0] === version)) {
      throw new PinException('Invalid PIN bit 1, version mismatch');
    }
    var length = pinBytes[1];
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = toHexString(pinBytes);
    var tmp1_substring = 2 + length | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(2, tmp1_substring);
    return tmp$ret$1;
  };
  var IsoPinDecoder_instance;
  function IsoPinDecoder_getInstance() {
    if (IsoPinDecoder_instance == null)
      new IsoPinDecoder();
    return IsoPinDecoder_instance;
  }
  function preparePinBytes($this, pinBytes, version) {
    var blockBytes = new Int8Array(Const_getInstance().m3_1);
    blockBytes[0] = version;
    blockBytes[1] = toByte(pinBytes.length);
    var inductionVariable = 2;
    if (inductionVariable < 6)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        blockBytes[index] = toByte(pinBytes[index - 2 | 0] - Const_getInstance().j3_1 | 0);
      }
       while (inductionVariable < 6);
    var inductionVariable_0 = 6;
    var last = Const_getInstance().m3_1;
    if (inductionVariable_0 < last)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if ((pinBytes.length + 2 | 0) > index_0) {
          blockBytes[index_0] = toByte(pinBytes[index_0 - 2 | 0] - Const_getInstance().j3_1 | 0);
        } else {
          blockBytes[index_0] = $this.y4_1.a5();
        }
      }
       while (inductionVariable_0 < last);
    return blockBytes;
  }
  function IsoPinPreparer(fillProvider) {
    this.y4_1 = fillProvider;
    this.z4_1 = StringUtilityX_getInstance();
  }
  protoOf(IsoPinPreparer).b5 = function (pin, version) {
    var pinBytes = this.z4_1.u4(pin);
    return preparePinBytes(this, pinBytes, version);
  };
  function preparePin($this, pin) {
    return $this.c4_1.b5(pin, Const_getInstance().o3_1);
  }
  function preparePan($this, pan) {
    return $this.d4_1.t4(pan);
  }
  function encodeBlock($this, panBytes, pinBytes) {
    return $this.b4_1.c5(panBytes, pinBytes);
  }
  function PinBlockIso0() {
    PinBlockIso0_instance = this;
    this.b4_1 = MathUtilityX_getInstance();
    this.c4_1 = new IsoPinPreparer(FNibbleProvider_getInstance());
    this.d4_1 = IsoPanPreparer_getInstance();
    this.e4_1 = IsoPinDecoder_getInstance();
    this.f4_1 = EftInputValidator_getInstance();
  }
  protoOf(PinBlockIso0).y3 = function (pan, pin) {
    this.f4_1.t3(pan, PinBlockFormat_ISO0_getInstance());
    this.f4_1.u3(pin, PinBlockFormat_ISO0_getInstance());
    if (pan == null) {
      throw new UnexpectedNullException('PAN should not be null for ISO0');
    }
    var pinBytes = preparePin(this, pin);
    var panBytes = preparePan(this, pan);
    return encodeBlock(this, pinBytes, panBytes);
  };
  protoOf(PinBlockIso0).a4 = function (pinBlock, pan) {
    this.f4_1.z3(pinBlock, PinBlockFormat_ISO0_getInstance());
    this.f4_1.t3(pan, PinBlockFormat_ISO0_getInstance());
    if (pan == null) {
      throw new UnexpectedNullException('PAN should not be null for ISO0');
    }
    var blockBytes = this.e4_1.w4(pinBlock);
    var panBytes = preparePan(this, pan);
    var pinBytes = this.b4_1.c5(blockBytes, panBytes);
    return this.e4_1.x4(pinBytes, Const_getInstance().o3_1);
  };
  var PinBlockIso0_instance;
  function PinBlockIso0_getInstance() {
    if (PinBlockIso0_instance == null)
      new PinBlockIso0();
    return PinBlockIso0_instance;
  }
  function PinBlockIso1() {
    PinBlockIso1_instance = this;
    this.g4_1 = new IsoPinPreparer(RandomNibbleProvider_getInstance());
    this.h4_1 = IsoPinDecoder_getInstance();
    this.i4_1 = EftInputValidator_getInstance();
  }
  protoOf(PinBlockIso1).y3 = function (pan, pin) {
    this.i4_1.t3(pan, PinBlockFormat_ISO1_getInstance());
    this.i4_1.u3(pin, PinBlockFormat_ISO1_getInstance());
    return this.g4_1.b5(pin, Const_getInstance().p3_1);
  };
  protoOf(PinBlockIso1).a4 = function (pinBlock, pan) {
    this.i4_1.z3(pinBlock, PinBlockFormat_ISO1_getInstance());
    this.i4_1.t3(pan, PinBlockFormat_ISO1_getInstance());
    var blockBytes = this.h4_1.w4(pinBlock);
    return this.h4_1.x4(blockBytes, Const_getInstance().p3_1);
  };
  var PinBlockIso1_instance;
  function PinBlockIso1_getInstance() {
    if (PinBlockIso1_instance == null)
      new PinBlockIso1();
    return PinBlockIso1_instance;
  }
  function PinBlockIso2() {
    PinBlockIso2_instance = this;
    this.j4_1 = new IsoPinPreparer(FNibbleProvider_getInstance());
    this.k4_1 = IsoPinDecoder_getInstance();
    this.l4_1 = EftInputValidator_getInstance();
  }
  protoOf(PinBlockIso2).y3 = function (pan, pin) {
    this.l4_1.t3(pan, PinBlockFormat_ISO2_getInstance());
    this.l4_1.u3(pin, PinBlockFormat_ISO2_getInstance());
    return this.j4_1.b5(pin, Const_getInstance().q3_1);
  };
  protoOf(PinBlockIso2).a4 = function (pinBlock, pan) {
    this.l4_1.z3(pinBlock, PinBlockFormat_ISO2_getInstance());
    this.l4_1.t3(pan, PinBlockFormat_ISO2_getInstance());
    var blockBytes = this.k4_1.w4(pinBlock);
    return this.k4_1.x4(blockBytes, Const_getInstance().q3_1);
  };
  var PinBlockIso2_instance;
  function PinBlockIso2_getInstance() {
    if (PinBlockIso2_instance == null)
      new PinBlockIso2();
    return PinBlockIso2_instance;
  }
  function preparePin_0($this, pin) {
    return $this.n4_1.b5(pin, Const_getInstance().r3_1);
  }
  function preparePan_0($this, pan) {
    return $this.o4_1.t4(pan);
  }
  function encodeBlock_0($this, panBytes, pinBytes) {
    return $this.m4_1.c5(panBytes, pinBytes);
  }
  function PinBlockIso3() {
    PinBlockIso3_instance = this;
    this.m4_1 = MathUtilityX_getInstance();
    this.n4_1 = new IsoPinPreparer(RandomNibbleProvider_getInstance());
    this.o4_1 = IsoPanPreparer_getInstance();
    this.p4_1 = IsoPinDecoder_getInstance();
    this.q4_1 = EftInputValidator_getInstance();
  }
  protoOf(PinBlockIso3).y3 = function (pan, pin) {
    this.q4_1.t3(pan, PinBlockFormat_ISO3_getInstance());
    this.q4_1.u3(pin, PinBlockFormat_ISO3_getInstance());
    if (pan == null) {
      throw new UnexpectedNullException('PAN should not be null for ISO3');
    }
    var pinBytes = preparePin_0(this, pin);
    var panBytes = preparePan_0(this, pan);
    return encodeBlock_0(this, pinBytes, panBytes);
  };
  protoOf(PinBlockIso3).a4 = function (pinBlock, pan) {
    this.q4_1.z3(pinBlock, PinBlockFormat_ISO3_getInstance());
    this.q4_1.t3(pan, PinBlockFormat_ISO3_getInstance());
    if (pan == null) {
      throw new UnexpectedNullException('PAN should not be null for ISO3');
    }
    var blockBytes = this.p4_1.w4(pinBlock);
    var panBytes = preparePan_0(this, pan);
    var pinBytes = this.m4_1.c5(blockBytes, panBytes);
    return this.p4_1.x4(pinBytes, Const_getInstance().r3_1);
  };
  var PinBlockIso3_instance;
  function PinBlockIso3_getInstance() {
    if (PinBlockIso3_instance == null)
      new PinBlockIso3();
    return PinBlockIso3_instance;
  }
  function toHexString(_this__u8e3s4, separator, prefix) {
    separator = separator === VOID ? '' : separator;
    prefix = prefix === VOID ? '' : prefix;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.asUByteArray' call
    tmp$ret$0 = _UByteArray___init__impl__ip4y9n(_this__u8e3s4);
    var tmp = new UByteArray(tmp$ret$0);
    return joinToString(tmp, separator, VOID, VOID, VOID, VOID, toHexString$lambda(prefix));
  }
  function toHexString$lambda($prefix) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.uppercase' call
      var tmp0_uppercase = toString(it.g1_1, 16);
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_uppercase;
      tmp$ret$1 = tmp$ret$0.toUpperCase();
      return $prefix + tmp$ret$1;
    };
  }
  function MathUtilityX() {
    MathUtilityX_instance = this;
  }
  protoOf(MathUtilityX).d5 = function () {
    return toByte(Default_getInstance().o(0, 16));
  };
  protoOf(MathUtilityX).c5 = function (lhs, rhs) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = zip(lhs, rhs);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      var tmp$ret$1;
      // Inline function 'org.superarts.ktpinblock.utility.MathUtilityX.xor.<anonymous>' call
      var x = item.a1();
      var y = item.b1();
      var tmp$ret$0;
      // Inline function 'kotlin.experimental.xor' call
      tmp$ret$0 = toByte(x ^ y);
      tmp$ret$1 = tmp$ret$0;
      tmp0_mapTo.d(tmp$ret$1);
    }
    tmp$ret$2 = tmp0_mapTo;
    tmp$ret$3 = tmp$ret$2;
    return toByteArray(tmp$ret$3);
  };
  var MathUtilityX_instance;
  function MathUtilityX_getInstance() {
    if (MathUtilityX_instance == null)
      new MathUtilityX();
    return MathUtilityX_instance;
  }
  function RandomNibbleProvider() {
    RandomNibbleProvider_instance = this;
    this.e5_1 = MathUtilityX_getInstance();
  }
  protoOf(RandomNibbleProvider).a5 = function () {
    return this.e5_1.d5();
  };
  var RandomNibbleProvider_instance;
  function RandomNibbleProvider_getInstance() {
    if (RandomNibbleProvider_instance == null)
      new RandomNibbleProvider();
    return RandomNibbleProvider_instance;
  }
  function FNibbleProvider() {
    FNibbleProvider_instance = this;
  }
  protoOf(FNibbleProvider).a5 = function () {
    return 15;
  };
  var FNibbleProvider_instance;
  function FNibbleProvider_getInstance() {
    if (FNibbleProvider_instance == null)
      new FNibbleProvider();
    return FNibbleProvider_instance;
  }
  function StringUtilityX() {
    StringUtilityX_instance = this;
  }
  protoOf(StringUtilityX).u4 = function (string) {
    var bytes = new Int8Array(string.length);
    var inductionVariable = 0;
    var last = charSequenceLength(string) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(string, index);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        bytes[index] = toByte(tmp$ret$0);
      }
       while (inductionVariable <= last);
    return bytes;
  };
  var StringUtilityX_instance;
  function StringUtilityX_getInstance() {
    if (StringUtilityX_instance == null)
      new StringUtilityX();
    return StringUtilityX_instance;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $org = _.org || (_.org = {});
    var $org$superarts = $org.superarts || ($org.superarts = {});
    var $org$superarts$ktpinblock = $org$superarts.ktpinblock || ($org$superarts.ktpinblock = {});
    $org$superarts$ktpinblock.PinBlock = PinBlock;
    var $org = _.org || (_.org = {});
    var $org$superarts = $org.superarts || ($org.superarts = {});
    var $org$superarts$ktpinblock = $org$superarts.ktpinblock || ($org$superarts.ktpinblock = {});
    var $org = _.org || (_.org = {});
    var $org$superarts = $org.superarts || ($org.superarts = {});
    var $org$superarts$ktpinblock = $org$superarts.ktpinblock || ($org$superarts.ktpinblock = {});
    var $org$superarts$ktpinblock$coder = $org$superarts$ktpinblock.coder || ($org$superarts$ktpinblock.coder = {});
    var $org = _.org || (_.org = {});
    var $org$superarts = $org.superarts || ($org.superarts = {});
    var $org$superarts$ktpinblock = $org$superarts.ktpinblock || ($org$superarts.ktpinblock = {});
    var $org$superarts$ktpinblock$coder = $org$superarts$ktpinblock.coder || ($org$superarts$ktpinblock.coder = {});
    var $org = _.org || (_.org = {});
    var $org$superarts = $org.superarts || ($org.superarts = {});
    var $org$superarts$ktpinblock = $org$superarts.ktpinblock || ($org$superarts.ktpinblock = {});
    var $org$superarts$ktpinblock$format = $org$superarts$ktpinblock.format || ($org$superarts$ktpinblock.format = {});
    $org$superarts$ktpinblock$format.PinBlockFormat = PinBlockFormat;
    $org$superarts$ktpinblock$format.PinBlockFormat.values = values;
    $org$superarts$ktpinblock$format.PinBlockFormat.valueOf = valueOf;
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'ISO0', PinBlockFormat_ISO0_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'ISO1', PinBlockFormat_ISO1_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'ISO2', PinBlockFormat_ISO2_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'ISO3', PinBlockFormat_ISO3_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'ISO4', PinBlockFormat_ISO4_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'ANSIX98', PinBlockFormat_ANSIX98_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'OEM1', PinBlockFormat_OEM1_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'ECI1', PinBlockFormat_ECI1_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'ECI2', PinBlockFormat_ECI2_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'ECI3', PinBlockFormat_ECI3_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'ECI4', PinBlockFormat_ECI4_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'IBM3621', PinBlockFormat_IBM3621_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'IBM3624', PinBlockFormat_IBM3624_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'IBM4704', PinBlockFormat_IBM4704_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'IBM5906', PinBlockFormat_IBM5906_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'VISA1', PinBlockFormat_VISA1_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'VISA2', PinBlockFormat_VISA2_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'VISA3', PinBlockFormat_VISA3_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'VISA4', PinBlockFormat_VISA4_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'DOCUTEL2', PinBlockFormat_DOCUTEL2_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'AS2805Format1', PinBlockFormat_AS2805Format1_getInstance);
    defineProp($org$superarts$ktpinblock$format.PinBlockFormat, 'AS2805Format8', PinBlockFormat_AS2805Format8_getInstance);
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));



},{"./kotlin-kotlin-stdlib-js-ir.js":1}],3:[function(require,module,exports){
// TODO: refactor this terrible JS code.

// Encode all
function calculateAll() {
    const kotlin = require('ktpinblock-ktpinblock')
    const ktpinblock = new kotlin.org.superarts.ktpinblock.PinBlock
    const format = kotlin.org.superarts.ktpinblock.format.PinBlockFormat

    var pan = document.getElementById("inputPanIso0").value
    var pin = document.getElementById("inputPinIso0").value
    try {
        document.getElementById("resultIso0").innerHTML = ktpinblock.encode(pan, pin, format.ISO0)
    } catch (error) {
        document.getElementById("resultIso0").innerHTML = error.message
    }

    var pan = document.getElementById("inputPanIso1").value
    var pin = document.getElementById("inputPinIso1").value
    try {
        document.getElementById("resultIso1").innerHTML = ktpinblock.encode(null, pin, format.ISO1)
    } catch (error) {
        document.getElementById("resultIso1").innerHTML = error.message
    }

    var pan = document.getElementById("inputPanIso2").value
    var pin = document.getElementById("inputPinIso2").value
    try {
        document.getElementById("resultIso2").innerHTML = ktpinblock.encode(null, pin, format.ISO2)
    } catch (error) {
        document.getElementById("resultIso2").innerHTML = error.message
    }

    var pan = document.getElementById("inputPanIso3").value
    var pin = document.getElementById("inputPinIso3").value
    try {
        document.getElementById("resultIso3").innerHTML = ktpinblock.encode(pan, pin, format.ISO3)
    } catch (error) {
        document.getElementById("resultIso3").innerHTML = error.message
    }

    var pinBlock = document.getElementById("inputDecodePinBlockIso0").value
    var pan = document.getElementById("inputDecodePanIso0").value
    try {
        document.getElementById("resultDecodeIso0").innerHTML = ktpinblock.decodePinBlock(pinBlock, pan, format.ISO0)
    } catch (error) {
        document.getElementById("resultDecodeIso0").innerHTML = error.message
    }

    var pinBlock = document.getElementById("inputDecodePinBlockIso1").value
    var pan = document.getElementById("inputDecodePanIso1").value
    try {
        document.getElementById("resultDecodeIso1").innerHTML = ktpinblock.decodePinBlock(pinBlock, null, format.ISO1)
    } catch (error) {
        document.getElementById("resultDecodeIso1").innerHTML = error.message
    }

    var pinBlock = document.getElementById("inputDecodePinBlockIso2").value
    var pan = document.getElementById("inputDecodePanIso2").value
    try {
        document.getElementById("resultDecodeIso2").innerHTML = ktpinblock.decodePinBlock(pinBlock, null, format.ISO2)
    } catch (error) {
        document.getElementById("resultDecodeIso2").innerHTML = error.message
    }

    var pinBlock = document.getElementById("inputDecodePinBlockIso3").value
    var pan = document.getElementById("inputDecodePanIso3").value
    try {
        document.getElementById("resultDecodeIso3").innerHTML = ktpinblock.decodePinBlock(pinBlock, pan, format.ISO3)
    } catch (error) {
        document.getElementById("resultDecodeIso3").innerHTML = error.message
    }
}

function prefill1() {
    const pan = "1111222233334444"
    const pin = "1234"
    document.getElementById("inputPanIso0").value = pan
    document.getElementById("inputPanIso1").value = null
    document.getElementById("inputPanIso2").value = null
    document.getElementById("inputPanIso3").value = pan

    document.getElementById("inputPinIso0").value = pin
    document.getElementById("inputPinIso1").value = pin
    document.getElementById("inputPinIso2").value = pin
    document.getElementById("inputPinIso3").value = pin

    document.getElementById("inputDecodePanIso0").value = pan
    document.getElementById("inputDecodePanIso1").value = null
    document.getElementById("inputDecodePanIso2").value = null
    document.getElementById("inputDecodePanIso3").value = pan

    document.getElementById("inputDecodePinBlockIso0").value = "041226DDDCCCCBBB"
    document.getElementById("inputDecodePinBlockIso1").value = "1412344BDC3D0DE0"
    document.getElementById("inputDecodePinBlockIso2").value = "241234FFFFFFFFFF"
    document.getElementById("inputDecodePinBlockIso3").value = "341226DF55C982F9"
}

function prefill2() {
    const pan = "43219876543210987"
    const pin = "1234"
    document.getElementById("inputPanIso0").value = pan
    document.getElementById("inputPanIso1").value = null
    document.getElementById("inputPanIso2").value = null
    document.getElementById("inputPanIso3").value = pan

    document.getElementById("inputPinIso0").value = pin
    document.getElementById("inputPinIso1").value = pin
    document.getElementById("inputPinIso2").value = pin
    document.getElementById("inputPinIso3").value = pin

    document.getElementById("inputDecodePanIso0").value = pan
    document.getElementById("inputDecodePanIso1").value = null
    document.getElementById("inputDecodePanIso2").value = null
    document.getElementById("inputDecodePanIso3").value = pan

    document.getElementById("inputDecodePinBlockIso0").value = "0412AC89ABCDEF67"
    document.getElementById("inputDecodePinBlockIso1").value = "141234CE8C767872"
    document.getElementById("inputDecodePinBlockIso2").value = "241234FFFFFFFFFF"
    document.getElementById("inputDecodePinBlockIso3").value = "3412ACC9B98CDF43"
}

window.prefill1 = prefill1
window.prefill2 = prefill2
window.calculateAll = calculateAll
},{"ktpinblock-ktpinblock":2}]},{},[3]);
