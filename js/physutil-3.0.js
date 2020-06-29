var ρσ_iterator_symbol = (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") ? Symbol.iterator : "iterator-Symbol-5d0927e5554349048cf0e3762a228256";
var ρσ_kwargs_symbol = (typeof Symbol === "function") ? Symbol("kwargs-object") : "kwargs-object-Symbol-5d0927e5554349048cf0e3762a228256";
var ρσ_cond_temp, ρσ_expr_temp, ρσ_last_exception;
var ρσ_object_counter = 0;
var ρσ_len;
function ρσ_bool(val) {
    return !!val;
};
Object.defineProperties(ρσ_bool, {
    __argnames__ : {value: ["val"]}
});

function ρσ_print() {
    var parts;
    if (typeof console === "object") {
        parts = [];
        for (var i = 0; i < arguments.length; i++) {
            parts.push(ρσ_str(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]));
        }
        console.log(parts.join(" "));
    }
};

function ρσ_int(val, base) {
    var ans;
    ans = parseInt(val, base || 10);
    if (isNaN(ans)) {
        throw new ValueError("Invalid literal for int with base " + (base || 10) + ": " + val);
    }
    return ans;
};
Object.defineProperties(ρσ_int, {
    __argnames__ : {value: ["val", "base"]}
});

function ρσ_float() {
    var ans;
    ans = parseFloat.apply(null, arguments);
    if (isNaN(ans)) {
        throw new ValueError("Could not convert string to float: " + arguments[0]);
    }
    return ans;
};

function ρσ_arraylike_creator() {
    var names;
    names = "Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ");
    if (typeof HTMLCollection === "function") {
        names = names.concat("HTMLCollection NodeList NamedNodeMap".split(" "));
    }
    return (function() {
        var ρσ_anonfunc = function (x) {
            if (Array.isArray(x) || typeof x === "string" || names.indexOf(Object.prototype.toString.call(x).slice(8, -1)) > -1) {
                return true;
            }
            return false;
        };
        Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["x"]}
        });
        return ρσ_anonfunc;
    })();
};

function options_object(f) {
    return function () {
        if (typeof arguments[arguments.length - 1] === "object") {
            arguments[ρσ_bound_index(arguments.length - 1, arguments)][ρσ_kwargs_symbol] = true;
        }
        return f.apply(this, arguments);
    };
};
Object.defineProperties(options_object, {
    __argnames__ : {value: ["f"]}
});

function ρσ_id(x) {
    return x.ρσ_object_id;
};
Object.defineProperties(ρσ_id, {
    __argnames__ : {value: ["x"]}
});

function ρσ_dir(item) {
    var arr;
    arr = ρσ_list_decorate([]);
    for (var i in item) {
        arr.push(i);
    }
    return arr;
};
Object.defineProperties(ρσ_dir, {
    __argnames__ : {value: ["item"]}
});

function ρσ_ord(x) {
    var ans, second;
    ans = x.charCodeAt(0);
    if (55296 <= ans && ans <= 56319) {
        second = x.charCodeAt(1);
        if (56320 <= second && second <= 57343) {
            return (ans - 55296) * 1024 + second - 56320 + 65536;
        }
        throw new TypeError("string is missing the low surrogate char");
    }
    return ans;
};
Object.defineProperties(ρσ_ord, {
    __argnames__ : {value: ["x"]}
});

function ρσ_chr(code) {
    if (code <= 65535) {
        return String.fromCharCode(code);
    }
    code -= 65536;
    return String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
};
Object.defineProperties(ρσ_chr, {
    __argnames__ : {value: ["code"]}
});

function ρσ_callable(x) {
    return typeof x === "function";
};
Object.defineProperties(ρσ_callable, {
    __argnames__ : {value: ["x"]}
});

function ρσ_bin(x) {
    var ans;
    if (typeof x !== "number" || x % 1 !== 0) {
        throw new TypeError("integer required");
    }
    ans = x.toString(2);
    if (ans[0] === "-") {
        ans = "-" + "0b" + ans.slice(1);
    } else {
        ans = "0b" + ans;
    }
    return ans;
};
Object.defineProperties(ρσ_bin, {
    __argnames__ : {value: ["x"]}
});

function ρσ_hex(x) {
    var ans;
    if (typeof x !== "number" || x % 1 !== 0) {
        throw new TypeError("integer required");
    }
    ans = x.toString(16);
    if (ans[0] === "-") {
        ans = "-" + "0x" + ans.slice(1);
    } else {
        ans = "0x" + ans;
    }
    return ans;
};
Object.defineProperties(ρσ_hex, {
    __argnames__ : {value: ["x"]}
});

function ρσ_enumerate(iterable) {
    var ans, iterator;
    ans = {"_i":-1};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    if (ρσ_arraylike(iterable)) {
        ans["next"] = function () {
            this._i += 1;
            if (this._i < iterable.length) {
                return {'done':false, 'value':[this._i, iterable[this._i]]};
            }
            return {'done':true};
        };
        return ans;
    }
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && ρσ_instanceof(iterable, Map)) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans["_iterator"] = iterator;
        ans["next"] = function () {
            var r;
            r = this._iterator.next();
            if (r.done) {
                return {'done':true};
            }
            this._i += 1;
            return {'done':false, 'value':[this._i, r.value]};
        };
        return ans;
    }
    return ρσ_enumerate(Object.keys(iterable));
};
Object.defineProperties(ρσ_enumerate, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_reversed(iterable) {
    var ans;
    if (ρσ_arraylike(iterable)) {
        ans = {"_i": iterable.length};
        ans["next"] = function () {
            this._i -= 1;
            if (this._i > -1) {
                return {'done':false, 'value':iterable[this._i]};
            }
            return {'done':true};
        };
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        return ans;
    }
    throw new TypeError("reversed() can only be called on arrays or strings");
};
Object.defineProperties(ρσ_reversed, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_iter(iterable) {
    var ans;
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        return (typeof Map === "function" && ρσ_instanceof(iterable, Map)) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
    }
    if (ρσ_arraylike(iterable)) {
        ans = {"_i":-1};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i < iterable.length) {
                return {'done':false, 'value':iterable[this._i]};
            }
            return {'done':true};
        };
        return ans;
    }
    return ρσ_iter(Object.keys(iterable));
};
Object.defineProperties(ρσ_iter, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_range(start, stop, step) {
    var length, ans;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    ans = {'_i': start - step, '_idx': -1};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        this._i += step;
        this._idx += 1;
        if (this._idx >= length) {
            return {'done':true};
        }
        return {'done':false, 'value':this._i};
    };
    return ans;
};
Object.defineProperties(ρσ_range, {
    __argnames__ : {value: ["start", "stop", "step"]}
});

function ρσ_getattr(obj, name, defval) {
    var ret;
    try {
        ret = obj[(typeof name === "number" && name < 0) ? obj.length + name : name];
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            if (defval === undefined) {
                throw new AttributeError("The attribute " + name + " is not present");
            }
            return defval;
        } else {
            throw ρσ_Exception;
        }
    }
    if (ret === undefined && !(name in obj)) {
        if (defval === undefined) {
            throw new AttributeError("The attribute " + name + " is not present");
        }
        ret = defval;
    }
    return ret;
};
Object.defineProperties(ρσ_getattr, {
    __argnames__ : {value: ["obj", "name", "defval"]}
});

function ρσ_setattr(obj, name, value) {
    obj[(typeof name === "number" && name < 0) ? obj.length + name : name] = value;
};
Object.defineProperties(ρσ_setattr, {
    __argnames__ : {value: ["obj", "name", "value"]}
});

function ρσ_hasattr(obj, name) {
    return name in obj;
};
Object.defineProperties(ρσ_hasattr, {
    __argnames__ : {value: ["obj", "name"]}
});

ρσ_len = function () {
    function len(obj) {
        if (ρσ_arraylike(obj)) {
            return obj.length;
        }
        if (typeof obj.__len__ === "function") {
            return obj.__len__();
        }
        if (obj instanceof Set || obj instanceof Map) {
            return obj.size;
        }
        return Object.keys(obj).length;
    };
    Object.defineProperties(len, {
        __argnames__ : {value: ["obj"]}
    });

    function len5(obj) {
        if (ρσ_arraylike(obj)) {
            return obj.length;
        }
        if (typeof obj.__len__ === "function") {
            return obj.__len__();
        }
        return Object.keys(obj).length;
    };
    Object.defineProperties(len5, {
        __argnames__ : {value: ["obj"]}
    });

    return (typeof Set === "function" && typeof Map === "function") ? len : len5;
}();
function ρσ_get_module(name) {
    return ρσ_modules[(typeof name === "number" && name < 0) ? ρσ_modules.length + name : name];
};
Object.defineProperties(ρσ_get_module, {
    __argnames__ : {value: ["name"]}
});

function ρσ_pow(x, y, z) {
    var ans;
    ans = Math.pow(x, y);
    if (z !== undefined) {
        ans %= z;
    }
    return ans;
};
Object.defineProperties(ρσ_pow, {
    __argnames__ : {value: ["x", "y", "z"]}
});

var abs = Math.abs, max = Math.max, min = Math.min, bool = ρσ_bool;
var float = ρσ_float, int = ρσ_int, arraylike = ρσ_arraylike_creator(), ρσ_arraylike = arraylike;
var print = ρσ_print, id = ρσ_id, get_module = ρσ_get_module, pow = ρσ_pow;
var dir = ρσ_dir, ord = ρσ_ord, chr = ρσ_chr, bin = ρσ_bin, hex = ρσ_hex, callable = ρσ_callable;
var enumerate = ρσ_enumerate, iter = ρσ_iter, reversed = ρσ_reversed, len = ρσ_len;
var range = ρσ_range, getattr = ρσ_getattr, setattr = ρσ_setattr, hasattr = ρσ_hasattr;function ρσ_equals(a, b) {
    var ρσ_unpack, akeys, bkeys, key;
    if (a === b) {
        return true;
    }
    if (a && typeof a.__eq__ === "function") {
        return a.__eq__(b);
    }
    if (b && typeof b.__eq__ === "function") {
        return b.__eq__(a);
    }
    if (ρσ_arraylike(a) && ρσ_arraylike(b)) {
        if ((a.length !== b.length && (typeof a.length !== "object" || ρσ_not_equals(a.length, b.length)))) {
            return false;
        }
        for (var i=0; i < a.length; i++) {
            if (!((a[(typeof i === "number" && i < 0) ? a.length + i : i] === b[(typeof i === "number" && i < 0) ? b.length + i : i] || typeof a[(typeof i === "number" && i < 0) ? a.length + i : i] === "object" && ρσ_equals(a[(typeof i === "number" && i < 0) ? a.length + i : i], b[(typeof i === "number" && i < 0) ? b.length + i : i])))) {
                return false;
            }
        }
        return true;
    }
    if (typeof a === "object" && typeof b === "object" && (a.constructor === Object && b.constructor === Object || Object.getPrototypeOf(a) === null && Object.getPrototypeOf(b) === null)) {
        ρσ_unpack = [Object.keys(a), Object.keys(b)];
        akeys = ρσ_unpack[0];
        bkeys = ρσ_unpack[1];
        if (akeys.length !== bkeys.length) {
            return false;
        }
        for (var j=0; j < akeys.length; j++) {
            key = akeys[(typeof j === "number" && j < 0) ? akeys.length + j : j];
            if (!((a[(typeof key === "number" && key < 0) ? a.length + key : key] === b[(typeof key === "number" && key < 0) ? b.length + key : key] || typeof a[(typeof key === "number" && key < 0) ? a.length + key : key] === "object" && ρσ_equals(a[(typeof key === "number" && key < 0) ? a.length + key : key], b[(typeof key === "number" && key < 0) ? b.length + key : key])))) {
                return false;
            }
        }
        return true;
    }
    return false;
};
Object.defineProperties(ρσ_equals, {
    __argnames__ : {value: ["a", "b"]}
});

function ρσ_not_equals(a, b) {
    if (a === b) {
        return false;
    }
    if (a && typeof a.__ne__ === "function") {
        return a.__ne__(b);
    }
    if (b && typeof b.__ne__ === "function") {
        return b.__ne__(a);
    }
    return !ρσ_equals(a, b);
};
Object.defineProperties(ρσ_not_equals, {
    __argnames__ : {value: ["a", "b"]}
});

var equals = ρσ_equals;
function ρσ_list_extend(iterable) {
    var start, iterator, result;
    if (Array.isArray(iterable) || typeof iterable === "string") {
        start = this.length;
        this.length += iterable.length;
        for (var i = 0; i < iterable.length; i++) {
            (ρσ_expr_temp = this)[ρσ_bound_index(start + i, ρσ_expr_temp)] = iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i];
        }
    } else {
        iterator = (typeof Map === "function" && ρσ_instanceof(iterable, Map)) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            this.push(result.value);
            result = iterator.next();
        }
    }
};
Object.defineProperties(ρσ_list_extend, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_list_index(val, start, stop) {
    var idx;
    start = start || 0;
    if (start < 0) {
        start = this.length + start;
    }
    if (start < 0) {
        throw new ValueError(val + " is not in list");
    }
    if (stop === undefined) {
        idx = this.indexOf(val, start);
        if (idx === -1) {
            throw new ValueError(val + " is not in list");
        }
        return idx;
    }
    if (stop < 0) {
        stop = this.length + stop;
    }
    for (var i = start; i < stop; i++) {
        if (((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === val || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], val))) {
            return i;
        }
    }
    throw new ValueError(val + " is not in list");
};
Object.defineProperties(ρσ_list_index, {
    __argnames__ : {value: ["val", "start", "stop"]}
});

function ρσ_list_pop(index) {
    var ans;
    if (this.length === 0) {
        throw new IndexError("list is empty");
    }
    ans = this.splice(index, 1);
    if (!ans.length) {
        throw new IndexError("pop index out of range");
    }
    return ans[0];
};
Object.defineProperties(ρσ_list_pop, {
    __argnames__ : {value: ["index"]}
});

function ρσ_list_remove(value) {
    var idx;
    idx = this.indexOf(value);
    if (idx === -1) {
        throw new ValueError(value + " not in list");
    }
    this.splice(idx, 1);
};
Object.defineProperties(ρσ_list_remove, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_to_string() {
    return "[" + this.join(", ") + "]";
};

function ρσ_list_insert(index, val) {
    if (index < 0) {
        index += this.length;
    }
    index = min(this.length, max(index, 0));
    if (index === 0) {
        this.unshift(val);
        return;
    }
    for (var i = this.length; i > index; i--) {
        (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = (ρσ_expr_temp = this)[ρσ_bound_index(i - 1, ρσ_expr_temp)];
    }
    (ρσ_expr_temp = this)[(typeof index === "number" && index < 0) ? ρσ_expr_temp.length + index : index] = val;
};
Object.defineProperties(ρσ_list_insert, {
    __argnames__ : {value: ["index", "val"]}
});

function ρσ_list_copy() {
    return ρσ_list_constructor(this);
};

function ρσ_list_clear() {
    this.length = 0;
};

function ρσ_list_as_array() {
    return Array.prototype.slice.call(this);
};

function ρσ_list_count(value) {
    return this.reduce((function() {
        var ρσ_anonfunc = function (n, val) {
            return n + (val === value);
        };
        Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["n", "val"]}
        });
        return ρσ_anonfunc;
    })(), 0);
};
Object.defineProperties(ρσ_list_count, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_sort_key(value) {
    var t;
    t = typeof value;
    if (t === "string" || t === "number") {
        return value;
    }
    return value.toString();
};
Object.defineProperties(ρσ_list_sort_key, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_sort_cmp(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};
Object.defineProperties(ρσ_list_sort_cmp, {
    __argnames__ : {value: ["a", "b"]}
});

function ρσ_list_sort(key, reverse) {
    var mult, keymap, k;
    key = key || ρσ_list_sort_key;
    mult = (reverse) ? -1 : 1;
    keymap = dict();
    for (var i=0; i < this.length; i++) {
        k = (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        keymap.set(k, key(k));
    }
    this.sort((function() {
        var ρσ_anonfunc = function (a, b) {
            return mult * ρσ_list_sort_cmp(keymap.get(a), keymap.get(b));
        };
        Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["a", "b"]}
        });
        return ρσ_anonfunc;
    })());
};
Object.defineProperties(ρσ_list_sort, {
    __argnames__ : {value: ["key", "reverse"]}
});

function ρσ_list_concat() {
    var ans;
    ans = Array.prototype.concat.apply(this, arguments);
    ρσ_list_decorate(ans);
    return ans;
};

function ρσ_list_slice() {
    var ans;
    ans = Array.prototype.slice.apply(this, arguments);
    ρσ_list_decorate(ans);
    return ans;
};

function ρσ_list_iterator(value) {
    var self;
    self = this;
    return (function(){
        var ρσ_d = {};
        ρσ_d["_i"] = -1;
        ρσ_d["_list"] = self;
        ρσ_d["next"] = function () {
            this._i += 1;
            if (this._i >= this._list.length) {
                return (function(){
                    var ρσ_d = {};
                    ρσ_d["done"] = true;
                    return ρσ_d;
                }).call(this);
            }
            return (function(){
                var ρσ_d = {};
                ρσ_d["done"] = false;
                ρσ_d["value"] = (ρσ_expr_temp = this._list)[ρσ_bound_index(this._i, ρσ_expr_temp)];
                return ρσ_d;
            }).call(this);
        };
        return ρσ_d;
    }).call(this);
};
Object.defineProperties(ρσ_list_iterator, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_len() {
    return this.length;
};

function ρσ_list_contains(val) {
    for (var i = 0; i < this.length; i++) {
        if (((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === val || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], val))) {
            return true;
        }
    }
    return false;
};
Object.defineProperties(ρσ_list_contains, {
    __argnames__ : {value: ["val"]}
});

function ρσ_list_eq(other) {
    if (!ρσ_arraylike(other)) {
        return false;
    }
    if ((this.length !== other.length && (typeof this.length !== "object" || ρσ_not_equals(this.length, other.length)))) {
        return false;
    }
    for (var i = 0; i < this.length; i++) {
        if (!(((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === other[(typeof i === "number" && i < 0) ? other.length + i : i] || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], other[(typeof i === "number" && i < 0) ? other.length + i : i])))) {
            return false;
        }
    }
    return true;
};
Object.defineProperties(ρσ_list_eq, {
    __argnames__ : {value: ["other"]}
});

function ρσ_list_decorate(ans) {
    ans.append = Array.prototype.push;
    ans.toString = ρσ_list_to_string;
    ans.inspect = ρσ_list_to_string;
    ans.extend = ρσ_list_extend;
    ans.index = ρσ_list_index;
    ans.pypop = ρσ_list_pop;
    ans.remove = ρσ_list_remove;
    ans.insert = ρσ_list_insert;
    ans.copy = ρσ_list_copy;
    ans.clear = ρσ_list_clear;
    ans.count = ρσ_list_count;
    ans.concat = ρσ_list_concat;
    ans.pysort = ρσ_list_sort;
    ans.slice = ρσ_list_slice;
    ans.as_array = ρσ_list_as_array;
    ans.__len__ = ρσ_list_len;
    ans.__contains__ = ρσ_list_contains;
    ans.__eq__ = ρσ_list_eq;
    ans.constructor = ρσ_list_constructor;
    if (typeof ans[ρσ_iterator_symbol] !== "function") {
        ans[ρσ_iterator_symbol] = ρσ_list_iterator;
    }
    return ans;
};
Object.defineProperties(ρσ_list_decorate, {
    __argnames__ : {value: ["ans"]}
});

function ρσ_list_constructor(iterable) {
    var ans, iterator, result;
    if (iterable === undefined) {
        ans = [];
    } else if (ρσ_arraylike(iterable)) {
        ans = new Array(iterable.length);
        for (var i = 0; i < iterable.length; i++) {
            ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i];
        }
    } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && ρσ_instanceof(iterable, Map)) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans = ρσ_list_decorate([]);
        result = iterator.next();
        while (!result.done) {
            ans.push(result.value);
            result = iterator.next();
        }
    } else if (typeof iterable === "number") {
        ans = new Array(iterable);
    } else {
        ans = Object.keys(iterable);
    }
    return ρσ_list_decorate(ans);
};
Object.defineProperties(ρσ_list_constructor, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_list_constructor.__name__ = "list";
var list = ρσ_list_constructor, list_wrap = ρσ_list_decorate;
function sorted() {
    var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var key = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? sorted.__defaults__.key : arguments[1];
    var reverse = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? sorted.__defaults__.reverse : arguments[2];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "key")){
        key = ρσ_kwargs_obj.key;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "reverse")){
        reverse = ρσ_kwargs_obj.reverse;
    }
    var ans;
    ans = ρσ_list_constructor(iterable);
    ans.pysort(key, reverse);
    return ans;
};
Object.defineProperties(sorted, {
    __defaults__ : {value: {key:null, reverse:false}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["iterable", "key", "reverse"]}
});

var ρσ_global_object_id = 0, ρσ_set_implementation;
function ρσ_set_keyfor(x) {
    var t, ans;
    t = typeof x;
    if (t === "string" || t === "number" || t === "boolean") {
        return "_" + t[0] + x;
    }
    if (x === null) {
        return "__!@#$0";
    }
    ans = x.ρσ_hash_key_prop;
    if (ans === undefined) {
        ans = "_!@#$" + (++ρσ_global_object_id);
        Object.defineProperty(x, "ρσ_hash_key_prop", (function(){
            var ρσ_d = {};
            ρσ_d["value"] = ans;
            return ρσ_d;
        }).call(this));
    }
    return ans;
};
Object.defineProperties(ρσ_set_keyfor, {
    __argnames__ : {value: ["x"]}
});

function ρσ_set_polyfill() {
    this._store = {};
    this.size = 0;
};

ρσ_set_polyfill.prototype.add = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (!Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size += 1;
            (ρσ_expr_temp = this._store)[(typeof key === "number" && key < 0) ? ρσ_expr_temp.length + key : key] = x;
        }
        return this;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.clear = (function() {
    var ρσ_anonfunc = function (x) {
        this._store = {};
        this.size = 0;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.delete = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size -= 1;
            delete this._store[key];
            return true;
        }
        return false;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.has = (function() {
    var ρσ_anonfunc = function (x) {
        return Object.prototype.hasOwnProperty.call(this._store, ρσ_set_keyfor(x));
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.values = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]]};
        };
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
if (typeof Set !== "function" || typeof Set.prototype.delete !== "function") {
    ρσ_set_implementation = ρσ_set_polyfill;
} else {
    ρσ_set_implementation = Set;
}
function ρσ_set(iterable) {
    var ans, s, iterator, result, keys;
    if (ρσ_instanceof(this, ρσ_set)) {
        this.jsset = new ρσ_set_implementation;
        ans = this;
        if (iterable === undefined) {
            return ans;
        }
        s = ans.jsset;
        if (ρσ_arraylike(iterable)) {
            for (var i = 0; i < iterable.length; i++) {
                s.add(iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i]);
            }
        } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
            iterator = (typeof Map === "function" && ρσ_instanceof(iterable, Map)) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
            result = iterator.next();
            while (!result.done) {
                s.add(result.value);
                result = iterator.next();
            }
        } else {
            keys = Object.keys(iterable);
            for (var j=0; j < keys.length; j++) {
                s.add(keys[(typeof j === "number" && j < 0) ? keys.length + j : j]);
            }
        }
        return ans;
    } else {
        return new ρσ_set(iterable);
    }
};
Object.defineProperties(ρσ_set, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_set.prototype.__name__ = "set";
Object.defineProperties(ρσ_set.prototype, (function(){
    var ρσ_d = {};
    ρσ_d["length"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsset.size;
        };
        return ρσ_d;
    }).call(this);
    ρσ_d["size"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsset.size;
        };
        return ρσ_d;
    }).call(this);
    return ρσ_d;
}).call(this));
ρσ_set.prototype.__len__ = function () {
    return this.jsset.size;
};
ρσ_set.prototype.has = ρσ_set.prototype.__contains__ = (function() {
    var ρσ_anonfunc = function (x) {
        return this.jsset.has(x);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.add = (function() {
    var ρσ_anonfunc = function (x) {
        this.jsset.add(x);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.clear = function () {
    this.jsset.clear();
};
ρσ_set.prototype.copy = function () {
    return ρσ_set(this);
};
ρσ_set.prototype.discard = (function() {
    var ρσ_anonfunc = function (x) {
        this.jsset.delete(x);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype[ρσ_iterator_symbol] = function () {
    return this.jsset.values();
};
ρσ_set.prototype.difference = function () {
    var ans, s, iterator, r, x, has;
    ans = new ρσ_set;
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = false;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                has = true;
                break;
            }
        }
        if (!has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
ρσ_set.prototype.difference_update = function () {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var j = 0; j < remove.length; j++) {
        s.delete(remove[(typeof j === "number" && j < 0) ? remove.length + j : j]);
    }
};
ρσ_set.prototype.intersection = function () {
    var ans, s, iterator, r, x, has;
    ans = new ρσ_set;
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = true;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                has = false;
                break;
            }
        }
        if (has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
ρσ_set.prototype.intersection_update = function () {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var j = 0; j < remove.length; j++) {
        s.delete(remove[(typeof j === "number" && j < 0) ? remove.length + j : j]);
    }
};
ρσ_set.prototype.isdisjoint = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        iterator = this.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (other.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.issubset = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        iterator = this.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (!other.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.issuperset = (function() {
    var ρσ_anonfunc = function (other) {
        var s, iterator, r, x;
        s = this.jsset;
        iterator = other.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (!s.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.pop = function () {
    var iterator, r;
    iterator = this.jsset.values();
    r = iterator.next();
    if (r.done) {
        throw new KeyError("pop from an empty set");
    }
    this.jsset.delete(r.value);
    return r.value;
};
ρσ_set.prototype.remove = (function() {
    var ρσ_anonfunc = function (x) {
        if (!this.jsset.delete(x)) {
            throw new KeyError(x.toString());
        }
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.symmetric_difference = (function() {
    var ρσ_anonfunc = function (other) {
        return this.union(other).difference(this.intersection(other));
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.symmetric_difference_update = (function() {
    var ρσ_anonfunc = function (other) {
        var common;
        common = this.intersection(other);
        this.update(other);
        this.difference_update(common);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.union = function () {
    var ans;
    ans = ρσ_set(this);
    ans.update.apply(ans, arguments);
    return ans;
};
ρσ_set.prototype.update = function () {
    var s, iterator, r;
    s = this.jsset;
    for (var i=0; i < arguments.length; i++) {
        iterator = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i][ρσ_iterator_symbol]();
        r = iterator.next();
        while (!r.done) {
            s.add(r.value);
            r = iterator.next();
        }
    }
};
ρσ_set.prototype.toString = ρσ_set.prototype.inspect = function () {
    return "{" + list(this).join(", ") + "}";
};
ρσ_set.prototype.__eq__ = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r;
        if (!(ρσ_instanceof(other, this.constructor))) {
            return false;
        }
        if (other.size !== this.size) {
            return false;
        }
        if (other.size === 0) {
            return true;
        }
        iterator = other[ρσ_iterator_symbol]();
        r = iterator.next();
        while (!r.done) {
            if (!this.has(r.value)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
function ρσ_set_wrap(x) {
    var ans;
    ans = new ρσ_set;
    ans.jsset = x;
    return ans;
};
Object.defineProperties(ρσ_set_wrap, {
    __argnames__ : {value: ["x"]}
});

var set = ρσ_set, set_wrap = ρσ_set_wrap;
var ρσ_dict_implementation;
function ρσ_dict_polyfill() {
    this._store = {};
    this.size = 0;
};

ρσ_dict_polyfill.prototype.set = (function() {
    var ρσ_anonfunc = function (x, value) {
        var key;
        key = ρσ_set_keyfor(x);
        if (!Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size += 1;
        }
        (ρσ_expr_temp = this._store)[(typeof key === "number" && key < 0) ? ρσ_expr_temp.length + key : key] = [x, value];
        return this;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.clear = (function() {
    var ρσ_anonfunc = function (x) {
        this._store = {};
        this.size = 0;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.delete = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size -= 1;
            delete this._store[key];
            return true;
        }
        return false;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.has = (function() {
    var ρσ_anonfunc = function (x) {
        return Object.prototype.hasOwnProperty.call(this._store, ρσ_set_keyfor(x));
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.get = (function() {
    var ρσ_anonfunc = function (x) {
        try {
            return (ρσ_expr_temp = this._store)[ρσ_bound_index(ρσ_set_keyfor(x), ρσ_expr_temp)][1];
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            if (ρσ_Exception instanceof TypeError) {
                return undefined;
            } else {
                throw ρσ_Exception;
            }
        }
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.values = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]][1]};
        };
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.keys = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]][0]};
        };
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.entries = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]]};
        };
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
if (typeof Map !== "function" || typeof Map.prototype.delete !== "function") {
    ρσ_dict_implementation = ρσ_dict_polyfill;
} else {
    ρσ_dict_implementation = Map;
}
function ρσ_dict(iterable) {
    if (ρσ_instanceof(this, ρσ_dict)) {
        this.jsmap = new ρσ_dict_implementation;
        if (iterable !== undefined) {
            this.update(iterable);
        }
        return this;
    } else {
        return new ρσ_dict(iterable);
    }
};
Object.defineProperties(ρσ_dict, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_dict.prototype.__name__ = "dict";
Object.defineProperties(ρσ_dict.prototype, (function(){
    var ρσ_d = {};
    ρσ_d["length"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsmap.size;
        };
        return ρσ_d;
    }).call(this);
    ρσ_d["size"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsmap.size;
        };
        return ρσ_d;
    }).call(this);
    return ρσ_d;
}).call(this));
ρσ_dict.prototype.__len__ = function () {
    return this.jsmap.size;
};
ρσ_dict.prototype.has = ρσ_dict.prototype.__contains__ = (function() {
    var ρσ_anonfunc = function (x) {
        return this.jsmap.has(x);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.set = ρσ_dict.prototype.__setitem__ = (function() {
    var ρσ_anonfunc = function (key, value) {
        this.jsmap.set(key, value);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.__delitem__ = (function() {
    var ρσ_anonfunc = function (key) {
        this.jsmap.delete(key);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.clear = function () {
    this.jsmap.clear();
};
ρσ_dict.prototype.copy = function () {
    return ρσ_dict(this);
};
ρσ_dict.prototype.keys = function () {
    return this.jsmap.keys();
};
ρσ_dict.prototype.values = function () {
    return this.jsmap.values();
};
ρσ_dict.prototype.items = ρσ_dict.prototype.entries = function () {
    return this.jsmap.entries();
};
ρσ_dict.prototype[ρσ_iterator_symbol] = function () {
    return this.jsmap.keys();
};
ρσ_dict.prototype.__getitem__ = (function() {
    var ρσ_anonfunc = function (key) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            throw new KeyError(key + "");
        }
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.get = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            return (defval === undefined) ? null : defval;
        }
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.set_default = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var j;
        j = this.jsmap;
        if (!j.has(key)) {
            j.set(key, defval);
            return defval;
        }
        return j.get(key);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.fromkeys = ρσ_dict.prototype.fromkeys = (function() {
    var ρσ_anonfunc = function () {
        var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var value = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? ρσ_anonfunc.__defaults__.value : arguments[1];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "value")){
            value = ρσ_kwargs_obj.value;
        }
        var ans, iterator, r;
        ans = ρσ_dict();
        iterator = iter(iterable);
        r = iterator.next();
        while (!r.done) {
            ans.set(r.value, value);
            r = iterator.next();
        }
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __defaults__ : {value: {value:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["iterable", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.pop = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            if (defval === undefined) {
                throw new KeyError(key);
            }
            return defval;
        }
        this.jsmap.delete(key);
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.popitem = function () {
    var r;
    r = this.jsmap.entries().next();
    if (r.done) {
        throw new KeyError("dict is empty");
    }
    this.jsmap.delete(r.value[0]);
    return r.value;
};
ρσ_dict.prototype.update = function () {
    var m, iterable, iterator, result, keys;
    if (arguments.length === 0) {
        return;
    }
    m = this.jsmap;
    iterable = arguments[0];
    if (Array.isArray(iterable)) {
        for (var i = 0; i < iterable.length; i++) {
            m.set(iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i][0], iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i][1]);
        }
    } else if (ρσ_instanceof(iterable, ρσ_dict)) {
        iterator = iterable.items();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof Map === "function" && ρσ_instanceof(iterable, Map)) {
        iterator = iterable.entries();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = iterable[ρσ_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else {
        keys = Object.keys(iterable);
        for (var j=0; j < keys.length; j++) {
            if (keys[(typeof j === "number" && j < 0) ? keys.length + j : j] !== ρσ_iterator_symbol) {
                m.set(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], iterable[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], iterable)]);
            }
        }
    }
    if (arguments.length > 1) {
        ρσ_dict.prototype.update.call(this, arguments[1]);
    }
};
ρσ_dict.prototype.toString = ρσ_dict.prototype.inspect = function () {
    var entries, iterator, r;
    entries = [];
    iterator = this.jsmap.entries();
    r = iterator.next();
    while (!r.done) {
        entries.push(r.value[0] + ": " + r.value[1]);
        r = iterator.next();
    }
    return "{" + entries.join(", ") + "}";
};
ρσ_dict.prototype.__eq__ = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        if (!(ρσ_instanceof(other, this.constructor))) {
            return false;
        }
        if (other.size !== this.size) {
            return false;
        }
        if (other.size === 0) {
            return true;
        }
        iterator = other.items();
        r = iterator.next();
        while (!r.done) {
            x = this.jsmap.get(r.value[0]);
            if (x === undefined && !this.jsmap.has(r.value[0]) || x !== r.value[1]) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.as_object = (function() {
    var ρσ_anonfunc = function (other) {
        var ans, iterator, r;
        ans = {};
        iterator = this.jsmap.entries();
        r = iterator.next();
        while (!r.done) {
            ans[ρσ_bound_index(r.value[0], ans)] = r.value[1];
            r = iterator.next();
        }
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
function ρσ_dict_wrap(x) {
    var ans;
    ans = new ρσ_dict;
    ans.jsmap = x;
    return ans;
};
Object.defineProperties(ρσ_dict_wrap, {
    __argnames__ : {value: ["x"]}
});

var dict = ρσ_dict, dict_wrap = ρσ_dict_wrap;var NameError;
NameError = ReferenceError;
function Exception() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    Exception.prototype.__init__.apply(this, arguments);
}
ρσ_extends(Exception, Error);
Exception.prototype.__init__ = function __init__(message) {
    var self = this;
    self.message = message;
    self.stack = (new Error).stack;
    self.name = self.constructor.name;
};
Object.defineProperties(Exception.prototype.__init__, {
    __argnames__ : {value: ["message"]}
});
Exception.__argnames__ = Exception.prototype.__init__.__argnames__;
Exception.__handles_kwarg_interpolation__ = Exception.prototype.__init__.__handles_kwarg_interpolation__;
Exception.prototype.__repr__ = function __repr__() {
    var self = this;
    return self.name + ": " + self.message;
};
Object.defineProperties(Exception.prototype.__repr__, {
    __argnames__ : {value: []}
});
Exception.prototype.__str__ = function __str__ () {
    if(Error.prototype.__str__) return Error.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(Exception.prototype, "__bases__", {value: [Error]});

function AttributeError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    AttributeError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(AttributeError, Exception);
AttributeError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
AttributeError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
AttributeError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(AttributeError.prototype, "__bases__", {value: [Exception]});


function IndexError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    IndexError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(IndexError, Exception);
IndexError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
IndexError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
IndexError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(IndexError.prototype, "__bases__", {value: [Exception]});


function KeyError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    KeyError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(KeyError, Exception);
KeyError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
KeyError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
KeyError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(KeyError.prototype, "__bases__", {value: [Exception]});


function ValueError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    ValueError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(ValueError, Exception);
ValueError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
ValueError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
ValueError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(ValueError.prototype, "__bases__", {value: [Exception]});


function UnicodeDecodeError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    UnicodeDecodeError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(UnicodeDecodeError, Exception);
UnicodeDecodeError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
UnicodeDecodeError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
UnicodeDecodeError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(UnicodeDecodeError.prototype, "__bases__", {value: [Exception]});


function AssertionError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    AssertionError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(AssertionError, Exception);
AssertionError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
AssertionError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
AssertionError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(AssertionError.prototype, "__bases__", {value: [Exception]});

var ρσ_in, ρσ_desugar_kwargs, ρσ_exists;
function ρσ_eslice(arr, step, start, end) {
    var is_string;
    if (typeof arr === "string" || ρσ_instanceof(arr, String)) {
        is_string = true;
        arr = arr.split("");
    }
    if (step < 0) {
        step = -step;
        arr = arr.slice().reverse();
        if (typeof start !== "undefined") {
            start = arr.length - start - 1;
        }
        if (typeof end !== "undefined") {
            end = arr.length - end - 1;
        }
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    arr = arr.slice(start, end).filter((function() {
        var ρσ_anonfunc = function (e, i) {
            return i % step === 0;
        };
        Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["e", "i"]}
        });
        return ρσ_anonfunc;
    })());
    if (is_string) {
        arr = arr.join("");
    }
    return arr;
};
Object.defineProperties(ρσ_eslice, {
    __argnames__ : {value: ["arr", "step", "start", "end"]}
});

function ρσ_delslice(arr, step, start, end) {
    var is_string, ρσ_unpack, indices;
    if (typeof arr === "string" || ρσ_instanceof(arr, String)) {
        is_string = true;
        arr = arr.split("");
    }
    if (step < 0) {
        if (typeof start === "undefined") {
            start = arr.length;
        }
        if (typeof end === "undefined") {
            end = 0;
        }
        ρσ_unpack = [end, start, -step];
        start = ρσ_unpack[0];
        end = ρσ_unpack[1];
        step = ρσ_unpack[2];
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    if (step === 1) {
        arr.splice(start, end - start);
    } else {
        if (end > start) {
            indices = [];
            for (var i = start; i < end; i += step) {
                indices.push(i);
            }
            for (var i = indices.length - 1; i >= 0; i--) {
                arr.splice(indices[(typeof i === "number" && i < 0) ? indices.length + i : i], 1);
            }
        }
    }
    if (is_string) {
        arr = arr.join("");
    }
    return arr;
};
Object.defineProperties(ρσ_delslice, {
    __argnames__ : {value: ["arr", "step", "start", "end"]}
});

function ρσ_flatten(arr) {
    var ans, value;
    ans = ρσ_list_decorate([]);
    for (var i=0; i < arr.length; i++) {
        value = arr[(typeof i === "number" && i < 0) ? arr.length + i : i];
        if (Array.isArray(value)) {
            ans = ans.concat(ρσ_flatten(value));
        } else {
            ans.push(value);
        }
    }
    return ans;
};
Object.defineProperties(ρσ_flatten, {
    __argnames__ : {value: ["arr"]}
});

function ρσ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
};
Object.defineProperties(ρσ_extends, {
    __argnames__ : {value: ["child", "parent"]}
});

ρσ_in = function () {
    if (typeof Map === "function" && typeof Set === "function") {
        return (function() {
            var ρσ_anonfunc = function (val, arr) {
                if (typeof arr === "string") {
                    return arr.indexOf(val) !== -1;
                }
                if (typeof arr.__contains__ === "function") {
                    return arr.__contains__(val);
                }
                if (ρσ_instanceof.apply(null, [arr, Map, Set])) {
                    return arr.has(val);
                }
                if (ρσ_arraylike(arr)) {
                    return ρσ_list_contains.call(arr, val);
                }
                return Object.prototype.hasOwnProperty.call(arr, val);
            };
            Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["val", "arr"]}
            });
            return ρσ_anonfunc;
        })();
    }
    return (function() {
        var ρσ_anonfunc = function (val, arr) {
            if (typeof arr === "string") {
                return arr.indexOf(val) !== -1;
            }
            if (typeof arr.__contains__ === "function") {
                return arr.__contains__(val);
            }
            if (ρσ_arraylike(arr)) {
                return ρσ_list_contains.call(arr, val);
            }
            return Object.prototype.hasOwnProperty.call(arr, val);
        };
        Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["val", "arr"]}
        });
        return ρσ_anonfunc;
    })();
}();
function ρσ_Iterable(iterable) {
    var iterator, ans, result;
    if (ρσ_arraylike(iterable)) {
        return iterable;
    }
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && ρσ_instanceof(iterable, Map)) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans = ρσ_list_decorate([]);
        result = iterator.next();
        while (!result.done) {
            ans.push(result.value);
            result = iterator.next();
        }
        return ans;
    }
    return Object.keys(iterable);
};
Object.defineProperties(ρσ_Iterable, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_desugar_kwargs = function () {
    if (typeof Object.assign === "function") {
        return function () {
            var ans;
            ans = Object.create(null);
            ans[ρσ_kwargs_symbol] = true;
            for (var i = 0; i < arguments.length; i++) {
                Object.assign(ans, arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
            }
            return ans;
        };
    }
    return function () {
        var ans, keys;
        ans = Object.create(null);
        ans[ρσ_kwargs_symbol] = true;
        for (var i = 0; i < arguments.length; i++) {
            keys = Object.keys(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
            for (var j = 0; j < keys.length; j++) {
                ans[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], ans)] = (ρσ_expr_temp = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i])[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], ρσ_expr_temp)];
            }
        }
        return ans;
    };
}();
function ρσ_interpolate_kwargs(f, supplied_args) {
    var has_prop, kwobj, args, prop;
    if (!f.__argnames__) {
        return f.apply(this, supplied_args);
    }
    has_prop = Object.prototype.hasOwnProperty;
    kwobj = supplied_args.pop();
    if (f.__handles_kwarg_interpolation__) {
        args = new Array(Math.max(supplied_args.length, f.__argnames__.length) + 1);
        args[args.length-1] = kwobj;
        for (var i = 0; i < args.length - 1; i++) {
            if (i < f.__argnames__.length) {
                prop = (ρσ_expr_temp = f.__argnames__)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
                if (has_prop.call(kwobj, prop)) {
                    args[(typeof i === "number" && i < 0) ? args.length + i : i] = kwobj[(typeof prop === "number" && prop < 0) ? kwobj.length + prop : prop];
                    delete kwobj[prop];
                } else if (i < supplied_args.length) {
                    args[(typeof i === "number" && i < 0) ? args.length + i : i] = supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i];
                }
            } else {
                args[(typeof i === "number" && i < 0) ? args.length + i : i] = supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i];
            }
        }
        return f.apply(this, args);
    }
    for (var i = 0; i < f.__argnames__.length; i++) {
        prop = (ρσ_expr_temp = f.__argnames__)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        if (has_prop.call(kwobj, prop)) {
            supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i] = kwobj[(typeof prop === "number" && prop < 0) ? kwobj.length + prop : prop];
        }
    }
    return f.apply(this, supplied_args);
};
Object.defineProperties(ρσ_interpolate_kwargs, {
    __argnames__ : {value: ["f", "supplied_args"]}
});

function ρσ_interpolate_kwargs_constructor(apply, f, supplied_args) {
    if (apply) {
        f.apply(this, supplied_args);
    } else {
        ρσ_interpolate_kwargs.call(this, f, supplied_args);
    }
    return this;
};
Object.defineProperties(ρσ_interpolate_kwargs_constructor, {
    __argnames__ : {value: ["apply", "f", "supplied_args"]}
});

function ρσ_getitem(obj, key) {
    if (obj.__getitem__) {
        return obj.__getitem__(key);
    }
    if (typeof key === "number" && key < 0) {
        key += obj.length;
    }
    return obj[(typeof key === "number" && key < 0) ? obj.length + key : key];
};
Object.defineProperties(ρσ_getitem, {
    __argnames__ : {value: ["obj", "key"]}
});

function ρσ_setitem(obj, key, val) {
    if (obj.__setitem__) {
        obj.__setitem__(key, val);
    } else {
        if (typeof key === "number" && key < 0) {
            key += obj.length;
        }
        obj[(typeof key === "number" && key < 0) ? obj.length + key : key] = val;
    }
};
Object.defineProperties(ρσ_setitem, {
    __argnames__ : {value: ["obj", "key", "val"]}
});

function ρσ_delitem(obj, key) {
    if (obj.__delitem__) {
        obj.__delitem__(key);
    } else if (typeof obj.splice === "function") {
        obj.splice(key, 1);
    } else {
        if (typeof key === "number" && key < 0) {
            key += obj.length;
        }
        delete obj[key];
    }
};
Object.defineProperties(ρσ_delitem, {
    __argnames__ : {value: ["obj", "key"]}
});

function ρσ_bound_index(idx, arr) {
    if (typeof idx === "number" && idx < 0) {
        idx += arr.length;
    }
    return idx;
};
Object.defineProperties(ρσ_bound_index, {
    __argnames__ : {value: ["idx", "arr"]}
});

ρσ_exists = (function(){
    var ρσ_d = {};
    ρσ_d["n"] = (function() {
        var ρσ_anonfunc = function (expr) {
            return expr !== undefined && expr !== null;
        };
        Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["d"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (expr === undefined || expr === null) {
                return Object.create(null);
            }
            return expr;
        };
        Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["c"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (typeof expr === "function") {
                return expr;
            }
            return function () {
                return undefined;
            };
        };
        Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["g"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (expr === undefined || expr === null || typeof expr.__getitem__ !== "function") {
                return (function(){
                    var ρσ_d = {};
                    ρσ_d["__getitem__"] = function () {
                        return undefined;
                    };
                    return ρσ_d;
                }).call(this);
            }
        };
        Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["e"] = (function() {
        var ρσ_anonfunc = function (expr, alt) {
            return (expr === undefined || expr === null) ? alt : expr;
        };
        Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr", "alt"]}
        });
        return ρσ_anonfunc;
    })();
    return ρσ_d;
}).call(this);
function ρσ_mixin() {
    var seen, resolved_props, p, target, props, name;
    seen = Object.create(null);
    seen.__argnames__ = seen.__handles_kwarg_interpolation__ = seen.__init__ = seen.__annotations__ = seen.__doc__ = seen.__bind_methods__ = seen.__bases__ = seen.constructor = seen.__class__ = true;
    resolved_props = {};
    p = target = arguments[0].prototype;
    while (p && p !== Object.prototype) {
        props = Object.getOwnPropertyNames(p);
        for (var i = 0; i < props.length; i++) {
            seen[ρσ_bound_index(props[(typeof i === "number" && i < 0) ? props.length + i : i], seen)] = true;
        }
        p = Object.getPrototypeOf(p);
    }
    for (var c = 1; c < arguments.length; c++) {
        p = arguments[(typeof c === "number" && c < 0) ? arguments.length + c : c].prototype;
        while (p && p !== Object.prototype) {
            props = Object.getOwnPropertyNames(p);
            for (var i = 0; i < props.length; i++) {
                name = props[(typeof i === "number" && i < 0) ? props.length + i : i];
                if (seen[(typeof name === "number" && name < 0) ? seen.length + name : name]) {
                    continue;
                }
                seen[(typeof name === "number" && name < 0) ? seen.length + name : name] = true;
                resolved_props[(typeof name === "number" && name < 0) ? resolved_props.length + name : name] = Object.getOwnPropertyDescriptor(p, name);
            }
            p = Object.getPrototypeOf(p);
        }
    }
    Object.defineProperties(target, resolved_props);
};

function ρσ_instanceof() {
    var obj, bases, q, cls, p;
    obj = arguments[0];
    bases = "";
    if (obj && obj.constructor && obj.constructor.prototype) {
        bases = obj.constructor.prototype.__bases__ || "";
    }
    for (var i = 1; i < arguments.length; i++) {
        q = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i];
        if (obj instanceof q) {
            return true;
        }
        if ((q === Array || q === ρσ_list_constructor) && Array.isArray(obj)) {
            return true;
        }
        if (q === ρσ_str && (typeof obj === "string" || obj instanceof String)) {
            return true;
        }
        if (bases.length > 1) {
            for (var c = 1; c < bases.length; c++) {
                cls = bases[(typeof c === "number" && c < 0) ? bases.length + c : c];
                while (cls) {
                    if (q === cls) {
                        return true;
                    }
                    p = Object.getPrototypeOf(cls.prototype);
                    if (!p) {
                        break;
                    }
                    cls = p.constructor;
                }
            }
        }
    }
    return false;
};
function sum(iterable, start) {
    var ans, iterator, r;
    if (Array.isArray(iterable)) {
        return iterable.reduce((function() {
            var ρσ_anonfunc = function (prev, cur) {
                return prev + cur;
            };
            Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["prev", "cur"]}
            });
            return ρσ_anonfunc;
        })(), start || 0);
    }
    ans = start || 0;
    iterator = iter(iterable);
    r = iterator.next();
    while (!r.done) {
        ans += r.value;
        r = iterator.next();
    }
    return ans;
};
Object.defineProperties(sum, {
    __argnames__ : {value: ["iterable", "start"]}
});

function map() {
    var iterators, func, args, ans;
    iterators = new Array(arguments.length - 1);
    func = arguments[0];
    args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++) {
        iterators[ρσ_bound_index(i - 1, iterators)] = iter(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
    }
    ans = {'_func':func, '_iterators':iterators, '_args':args};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var r;
        for (var i = 0; i < this._iterators.length; i++) {
            r = (ρσ_expr_temp = this._iterators)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].next();
            if (r.done) {
                return {'done':true};
            }
            (ρσ_expr_temp = this._args)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = r.value;
        }
        return {'done':false, 'value':this._func.apply(undefined, this._args)};
    };
    return ans;
};

function filter(func_or_none, iterable) {
    var func, ans;
    func = (func_or_none === null) ? ρσ_bool : func_or_none;
    ans = {'_func':func, '_iterator':ρσ_iter(iterable)};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var r;
        r = this._iterator.next();
        while (!r.done) {
            if (this._func(r.value)) {
                return r;
            }
            r = this._iterator.next();
        }
        return {'done':true};
    };
    return ans;
};
Object.defineProperties(filter, {
    __argnames__ : {value: ["func_or_none", "iterable"]}
});

function zip() {
    var iterators, ans;
    iterators = new Array(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        iterators[(typeof i === "number" && i < 0) ? iterators.length + i : i] = iter(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
    }
    ans = {'_iterators':iterators};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var args, r;
        args = new Array(this._iterators.length);
        for (var i = 0; i < this._iterators.length; i++) {
            r = (ρσ_expr_temp = this._iterators)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].next();
            if (r.done) {
                return {'done':true};
            }
            args[(typeof i === "number" && i < 0) ? args.length + i : i] = r.value;
        }
        return {'done':false, 'value':args};
    };
    return ans;
};

function any(iterable) {
    var i;
    var ρσ_Iter0 = ρσ_Iterable(iterable);
    for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
        i = ρσ_Iter0[ρσ_Index0];
        if (i) {
            return true;
        }
    }
    return false;
};
Object.defineProperties(any, {
    __argnames__ : {value: ["iterable"]}
});

function all(iterable) {
    var i;
    var ρσ_Iter1 = ρσ_Iterable(iterable);
    for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
        i = ρσ_Iter1[ρσ_Index1];
        if (!i) {
            return false;
        }
    }
    return true;
};
Object.defineProperties(all, {
    __argnames__ : {value: ["iterable"]}
});
var define_str_func, ρσ_unpack, ρσ_orig_split, ρσ_orig_replace;
function ρσ_repr_js_builtin(x, as_array) {
    var ans, b, keys, key;
    ans = [];
    b = "{}";
    if (as_array) {
        b = "[]";
        for (var i = 0; i < x.length; i++) {
            ans.push(ρσ_repr(x[(typeof i === "number" && i < 0) ? x.length + i : i]));
        }
    } else {
        keys = Object.keys(x);
        for (var k = 0; k < keys.length; k++) {
            key = keys[(typeof k === "number" && k < 0) ? keys.length + k : k];
            ans.push(JSON.stringify(key) + ":" + ρσ_repr(x[(typeof key === "number" && key < 0) ? x.length + key : key]));
        }
    }
    return b[0] + ans.join(", ") + b[1];
};
Object.defineProperties(ρσ_repr_js_builtin, {
    __argnames__ : {value: ["x", "as_array"]}
});

function ρσ_repr(x) {
    var ans, name;
    if (x === null) {
        return "None";
    }
    if (x === undefined) {
        return "undefined";
    }
    ans = x;
    if (typeof x.__repr__ === "function") {
        ans = x.__repr__();
    } else if (x === true || x === false) {
        ans = (x) ? "True" : "False";
    } else if (Array.isArray(x)) {
        ans = ρσ_repr_js_builtin(x, true);
    } else if (typeof x === "function") {
        ans = x.toString();
    } else if (typeof x === "object" && !x.toString) {
        ans = ρσ_repr_js_builtin(x);
    } else {
        name = Object.prototype.toString.call(x).slice(8, -1);
        if (ρσ_not_equals("Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".indexOf(name), -1)) {
            return name + "([" + x.map((function() {
                var ρσ_anonfunc = function (i) {
                    return str.format("0x{:02x}", i);
                };
                Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["i"]}
                });
                return ρσ_anonfunc;
            })()).join(", ") + "])";
        }
        ans = (typeof x.toString === "function") ? x.toString() : x;
        if (ans === "[object Object]") {
            return ρσ_repr_js_builtin(x);
        }
        try {
            ans = JSON.stringify(x);
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            {
            }
        }
    }
    return ans + "";
};
Object.defineProperties(ρσ_repr, {
    __argnames__ : {value: ["x"]}
});

function ρσ_str(x) {
    var ans, name;
    if (x === null) {
        return "None";
    }
    if (x === undefined) {
        return "undefined";
    }
    ans = x;
    if (typeof x.__str__ === "function") {
        ans = x.__str__();
    } else if (typeof x.__repr__ === "function") {
        ans = x.__repr__();
    } else if (x === true || x === false) {
        ans = (x) ? "True" : "False";
    } else if (Array.isArray(x)) {
        ans = ρσ_repr_js_builtin(x, true);
    } else if (typeof x.toString === "function") {
        name = Object.prototype.toString.call(x).slice(8, -1);
        if (ρσ_not_equals("Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".indexOf(name), -1)) {
            return name + "([" + x.map((function() {
                var ρσ_anonfunc = function (i) {
                    return str.format("0x{:02x}", i);
                };
                Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["i"]}
                });
                return ρσ_anonfunc;
            })()).join(", ") + "])";
        }
        ans = x.toString();
        if (ans === "[object Object]") {
            ans = ρσ_repr_js_builtin(x);
        }
    } else if (typeof x === "object" && !x.toString) {
        ans = ρσ_repr_js_builtin(x);
    }
    return ans + "";
};
Object.defineProperties(ρσ_str, {
    __argnames__ : {value: ["x"]}
});

define_str_func = (function() {
    var ρσ_anonfunc = function (name, func) {
        var f;
        (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = func;
        ρσ_str[(typeof name === "number" && name < 0) ? ρσ_str.length + name : name] = f = func.call.bind(func);
        if (func.__argnames__) {
            Object.defineProperty(f, "__argnames__", (function(){
                var ρσ_d = {};
                ρσ_d["value"] = ['string'].concat(func.__argnames__);
                return ρσ_d;
            }).call(this));
        }
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["name", "func"]}
    });
    return ρσ_anonfunc;
})();
ρσ_unpack = [String.prototype.split.call.bind(String.prototype.split), String.prototype.replace.call.bind(String.prototype.replace)];
ρσ_orig_split = ρσ_unpack[0];
ρσ_orig_replace = ρσ_unpack[1];
define_str_func("format", function () {
    var template, args, kwargs, explicit, implicit, idx, split, ans, pos, in_brace, markup, ch;
    template = this;
    if (template === undefined) {
        throw new TypeError("Template is required");
    }
    args = Array.prototype.slice.call(arguments);
    kwargs = {};
    if (args[args.length-1] && args[args.length-1][ρσ_kwargs_symbol] !== undefined) {
        kwargs = args[args.length-1];
        args = args.slice(0, -1);
    }
    explicit = implicit = false;
    idx = 0;
    split = ρσ_orig_split;
    if (ρσ_str.format._template_resolve_pat === undefined) {
        ρσ_str.format._template_resolve_pat = /[.\[]/;
    }
    function resolve(arg, object) {
        var ρσ_unpack, first, key, rest, ans;
        if (!arg) {
            return object;
        }
        ρσ_unpack = [arg[0], arg.slice(1)];
        first = ρσ_unpack[0];
        arg = ρσ_unpack[1];
        key = split(arg, ρσ_str.format._template_resolve_pat, 1)[0];
        rest = arg.slice(key.length);
        ans = (first === "[") ? object[ρσ_bound_index(key.slice(0, -1), object)] : getattr(object, key);
        if (ans === undefined) {
            throw new KeyError((first === "[") ? key.slice(0, -1) : key);
        }
        return resolve(rest, ans);
    };
    Object.defineProperties(resolve, {
        __argnames__ : {value: ["arg", "object"]}
    });

    function resolve_format_spec(format_spec) {
        if (ρσ_str.format._template_resolve_fs_pat === undefined) {
            ρσ_str.format._template_resolve_fs_pat = /[{]([a-zA-Z0-9_]+)[}]/g;
        }
        return format_spec.replace(ρσ_str.format._template_resolve_fs_pat, (function() {
            var ρσ_anonfunc = function (match, key) {
                if (!Object.prototype.hasOwnProperty.call(kwargs, key)) {
                    return "";
                }
                return "" + kwargs[(typeof key === "number" && key < 0) ? kwargs.length + key : key];
            };
            Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["match", "key"]}
            });
            return ρσ_anonfunc;
        })());
    };
    Object.defineProperties(resolve_format_spec, {
        __argnames__ : {value: ["format_spec"]}
    });

    function apply_formatting(value, format_spec) {
        var ρσ_unpack, fill, align, sign, fhash, zeropad, width, comma, precision, ftype, is_numeric, is_int, lftype, code, exp, nval, is_positive, left, right;
        if (format_spec.indexOf("{") !== -1) {
            format_spec = resolve_format_spec(format_spec);
        }
        if (ρσ_str.format._template_format_pat === undefined) {
            ρσ_str.format._template_format_pat = /([^{}](?=[<>=^]))?([<>=^])?([-+\x20])?(\#)?(0)?(\d+)?(,)?(?:\.(\d+))?([bcdeEfFgGnosxX%])?/;
        }
        try {
            ρσ_unpack = format_spec.match(ρσ_str.format._template_format_pat).slice(1);
            fill = ρσ_unpack[0];
            align = ρσ_unpack[1];
            sign = ρσ_unpack[2];
            fhash = ρσ_unpack[3];
            zeropad = ρσ_unpack[4];
            width = ρσ_unpack[5];
            comma = ρσ_unpack[6];
            precision = ρσ_unpack[7];
            ftype = ρσ_unpack[8];
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            if (ρσ_Exception instanceof TypeError) {
                return value;
            } else {
                throw ρσ_Exception;
            }
        }
        if (zeropad) {
            fill = fill || "0";
            align = align || "=";
        } else {
            fill = fill || " ";
            align = align || ">";
        }
        is_numeric = Number(value) === value;
        is_int = is_numeric && value % 1 === 0;
        precision = parseInt(precision, 10);
        lftype = (ftype || "").toLowerCase();
        if (ftype === "n") {
            is_numeric = true;
            if (is_int) {
                if (comma) {
                    throw new ValueError("Cannot specify ',' with 'n'");
                }
                value = parseInt(value, 10).toLocaleString();
            } else {
                value = parseFloat(value).toLocaleString();
            }
        } else if (['b', 'c', 'd', 'o', 'x'].indexOf(lftype) !== -1) {
            value = parseInt(value, 10);
            is_numeric = true;
            if (!isNaN(value)) {
                if (ftype === "b") {
                    value = (value >>> 0).toString(2);
                    if (fhash) {
                        value = "0b" + value;
                    }
                } else if (ftype === "c") {
                    if (value > 65535) {
                        code = value - 65536;
                        value = String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
                    } else {
                        value = String.fromCharCode(value);
                    }
                } else if (ftype === "d") {
                    if (comma) {
                        value = value.toLocaleString("en-US");
                    } else {
                        value = value.toString(10);
                    }
                } else if (ftype === "o") {
                    value = value.toString(8);
                    if (fhash) {
                        value = "0o" + value;
                    }
                } else if (lftype === "x") {
                    value = value.toString(16);
                    value = (ftype === "x") ? value.toLowerCase() : value.toUpperCase();
                    if (fhash) {
                        value = "0x" + value;
                    }
                }
            }
        } else if (['e','f','g','%'].indexOf(lftype) !== -1) {
            is_numeric = true;
            value = parseFloat(value);
            if (lftype === "e") {
                value = value.toExponential((isNaN(precision)) ? 6 : precision);
                value = (ftype === "E") ? value.toUpperCase() : value.toLowerCase();
            } else if (lftype === "f") {
                value = value.toFixed((isNaN(precision)) ? 6 : precision);
                value = (ftype === "F") ? value.toUpperCase() : value.toLowerCase();
            } else if (ftype === "%") {
                value *= 100;
                value = value.toFixed((isNaN(precision)) ? 6 : precision) + "%";
            } else if (lftype === "g") {
                if (isNaN(precision)) {
                    precision = 6;
                }
                precision = max(1, precision);
                exp = parseInt(split(value.toExponential(precision - 1).toLowerCase(), "e")[1], 10);
                if (-4 <= exp && exp < precision) {
                    value = value.toFixed(precision - 1 - exp);
                } else {
                    value = value.toExponential(precision - 1);
                }
                value = value.replace(/0+$/g, "");
                if (value[value.length-1] === ".") {
                    value = value.slice(0, -1);
                }
                if (ftype === "G") {
                    value = value.toUpperCase();
                }
            }
        } else {
            value += "";
            if (!isNaN(precision)) {
                value = value.slice(0, precision);
            }
        }
        value += "";
        if (is_numeric && sign) {
            nval = Number(value);
            is_positive = !isNaN(nval) && nval >= 0;
            if (is_positive && (sign === " " || sign === "+")) {
                value = sign + value;
            }
        }
        function repeat(char, num) {
            return (new Array(num+1)).join(char);
        };
        Object.defineProperties(repeat, {
            __argnames__ : {value: ["char", "num"]}
        });

        if (is_numeric && width && width[0] === "0") {
            width = width.slice(1);
            ρσ_unpack = ["0", "="];
            fill = ρσ_unpack[0];
            align = ρσ_unpack[1];
        }
        width = parseInt(width || "-1", 10);
        if (isNaN(width)) {
            throw new ValueError("Invalid width specification: " + width);
        }
        if (fill && value.length < width) {
            if (align === "<") {
                value = value + repeat(fill, width - value.length);
            } else if (align === ">") {
                value = repeat(fill, width - value.length) + value;
            } else if (align === "^") {
                left = Math.floor((width - value.length) / 2);
                right = width - left - value.length;
                value = repeat(fill, left) + value + repeat(fill, right);
            } else if (align === "=") {
                if (ρσ_in(value[0], "+- ")) {
                    value = value[0] + repeat(fill, width - value.length) + value.slice(1);
                } else {
                    value = repeat(fill, width - value.length) + value;
                }
            } else {
                throw new ValueError("Unrecognized alignment: " + align);
            }
        }
        return value;
    };
    Object.defineProperties(apply_formatting, {
        __argnames__ : {value: ["value", "format_spec"]}
    });

    function parse_markup(markup) {
        var key, transformer, format_spec, pos, state, ch;
        key = transformer = format_spec = "";
        pos = 0;
        state = 0;
        while (pos < markup.length) {
            ch = markup[(typeof pos === "number" && pos < 0) ? markup.length + pos : pos];
            if (state === 0) {
                if (ch === "!") {
                    state = 1;
                } else if (ch === ":") {
                    state = 2;
                } else {
                    key += ch;
                }
            } else if (state === 1) {
                if (ch === ":") {
                    state = 2;
                } else {
                    transformer += ch;
                }
            } else {
                format_spec += ch;
            }
            pos += 1;
        }
        return [key, transformer, format_spec];
    };
    Object.defineProperties(parse_markup, {
        __argnames__ : {value: ["markup"]}
    });

    function render_markup(markup) {
        var ρσ_unpack, key, transformer, format_spec, lkey, nvalue, object, ans;
        ρσ_unpack = parse_markup(markup);
        key = ρσ_unpack[0];
        transformer = ρσ_unpack[1];
        format_spec = ρσ_unpack[2];
        if (transformer && ['a', 'r', 's'].indexOf(transformer) === -1) {
            throw new ValueError("Unknown conversion specifier: " + transformer);
        }
        lkey = key.length && split(key, /[.\[]/, 1)[0];
        if (lkey) {
            explicit = true;
            if (implicit) {
                throw new ValueError("cannot switch from automatic field numbering to manual field specification");
            }
            nvalue = parseInt(lkey);
            object = (isNaN(nvalue)) ? kwargs[(typeof lkey === "number" && lkey < 0) ? kwargs.length + lkey : lkey] : args[(typeof nvalue === "number" && nvalue < 0) ? args.length + nvalue : nvalue];
            if (object === undefined) {
                if (isNaN(nvalue)) {
                    throw new KeyError(lkey);
                }
                throw new IndexError(lkey);
            }
            object = resolve(key.slice(lkey.length), object);
        } else {
            implicit = true;
            if (explicit) {
                throw new ValueError("cannot switch from manual field specification to automatic field numbering");
            }
            if (idx >= args.length) {
                throw new IndexError("Not enough arguments to match template: " + template);
            }
            object = args[(typeof idx === "number" && idx < 0) ? args.length + idx : idx];
            idx += 1;
        }
        if (typeof object === "function") {
            object = object();
        }
        ans = "" + object;
        if (format_spec) {
            ans = apply_formatting(ans, format_spec);
        }
        return ans;
    };
    Object.defineProperties(render_markup, {
        __argnames__ : {value: ["markup"]}
    });

    ans = "";
    pos = 0;
    in_brace = 0;
    markup = "";
    while (pos < template.length) {
        ch = template[(typeof pos === "number" && pos < 0) ? template.length + pos : pos];
        if (in_brace) {
            if (ch === "{") {
                in_brace += 1;
                markup += "{";
            } else if (ch === "}") {
                in_brace -= 1;
                if (in_brace > 0) {
                    markup += "}";
                } else {
                    ans += render_markup(markup);
                }
            } else {
                markup += ch;
            }
        } else {
            if (ch === "{") {
                if (template[ρσ_bound_index(pos + 1, template)] === "{") {
                    pos += 1;
                    ans += "{";
                } else {
                    in_brace = 1;
                    markup = "";
                }
            } else {
                ans += ch;
            }
        }
        pos += 1;
    }
    if (in_brace) {
        throw new ValueError("expected '}' before end of string");
    }
    return ans;
});
define_str_func("capitalize", function () {
    var string;
    string = this;
    if (string) {
        string = string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
    return string;
});
define_str_func("center", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var left, right;
        left = Math.floor((width - this.length) / 2);
        right = width - left - this.length;
        fill = fill || " ";
        return new Array(left+1).join(fill) + this + new Array(right+1).join(fill);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("count", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var string, ρσ_unpack, pos, step, ans;
        string = this;
        start = start || 0;
        end = end || string.length;
        if (start < 0 || end < 0) {
            string = string.slice(start, end);
            ρσ_unpack = [0, string.length];
            start = ρσ_unpack[0];
            end = ρσ_unpack[1];
        }
        pos = start;
        step = needle.length;
        if (!step) {
            return 0;
        }
        ans = 0;
        while (pos !== -1) {
            pos = string.indexOf(needle, pos);
            if (pos !== -1) {
                ans += 1;
                pos += step;
            }
        }
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("endswith", (function() {
    var ρσ_anonfunc = function (suffixes, start, end) {
        var string, q;
        string = this;
        start = start || 0;
        if (typeof suffixes === "string") {
            suffixes = [suffixes];
        }
        if (end !== undefined) {
            string = string.slice(0, end);
        }
        for (var i = 0; i < suffixes.length; i++) {
            q = suffixes[(typeof i === "number" && i < 0) ? suffixes.length + i : i];
            if (string.indexOf(q, Math.max(start, string.length - q.length)) !== -1) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["suffixes", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("startswith", (function() {
    var ρσ_anonfunc = function (prefixes, start, end) {
        var prefix;
        start = start || 0;
        if (typeof prefixes === "string") {
            prefixes = [prefixes];
        }
        for (var i = 0; i < prefixes.length; i++) {
            prefix = prefixes[(typeof i === "number" && i < 0) ? prefixes.length + i : i];
            end = (end === undefined) ? this.length : end;
            if (end - start >= prefix.length && prefix === this.slice(start, start + prefix.length)) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["prefixes", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("find", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        while (start < 0) {
            start += this.length;
        }
        ans = this.indexOf(needle, start);
        if (end !== undefined && ans !== -1) {
            while (end < 0) {
                end += this.length;
            }
            if (ans >= end - needle.length) {
                return -1;
            }
        }
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rfind", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        while (end < 0) {
            end += this.length;
        }
        ans = this.lastIndexOf(needle, end - 1);
        if (start !== undefined && ans !== -1) {
            while (start < 0) {
                start += this.length;
            }
            if (ans < start) {
                return -1;
            }
        }
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("index", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        ans = ρσ_str.prototype.find.apply(this, arguments);
        if (ans === -1) {
            throw new ValueError("substring not found");
        }
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rindex", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        ans = ρσ_str.prototype.rfind.apply(this, arguments);
        if (ans === -1) {
            throw new ValueError("substring not found");
        }
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("islower", function () {
    return this.length > 0 && this.toUpperCase() !== this;
});
define_str_func("isupper", function () {
    return this.length > 0 && this.toLowerCase() !== this;
});
define_str_func("isspace", function () {
    return this.length > 0 && /^\s+$/.test(this);
});
define_str_func("join", (function() {
    var ρσ_anonfunc = function (iterable) {
        var ans, r;
        if (Array.isArray(iterable)) {
            return iterable.join(this);
        }
        ans = "";
        r = iterable.next();
        while (!r.done) {
            if (ans) {
                ans += this;
            }
            ans += r.value;
            r = iterable.next();
        }
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["iterable"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("ljust", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var string;
        string = this;
        if (width > string.length) {
            fill = fill || " ";
            string += new Array(width - string.length + 1).join(fill);
        }
        return string;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rjust", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var string;
        string = this;
        if (width > string.length) {
            fill = fill || " ";
            string = new Array(width - string.length + 1).join(fill) + string;
        }
        return string;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("lower", function () {
    return this.toLowerCase();
});
define_str_func("upper", function () {
    return this.toUpperCase();
});
define_str_func("lstrip", (function() {
    var ρσ_anonfunc = function (chars) {
        var string, pos;
        string = this;
        pos = 0;
        chars = chars || ρσ_str.whitespace;
        while (chars.indexOf(string[(typeof pos === "number" && pos < 0) ? string.length + pos : pos]) !== -1) {
            pos += 1;
        }
        if (pos) {
            string = string.slice(pos);
        }
        return string;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rstrip", (function() {
    var ρσ_anonfunc = function (chars) {
        var string, pos;
        string = this;
        pos = string.length - 1;
        chars = chars || ρσ_str.whitespace;
        while (chars.indexOf(string[(typeof pos === "number" && pos < 0) ? string.length + pos : pos]) !== -1) {
            pos -= 1;
        }
        if (pos < string.length - 1) {
            string = string.slice(0, pos + 1);
        }
        return string;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("strip", (function() {
    var ρσ_anonfunc = function (chars) {
        return ρσ_str.prototype.lstrip.call(ρσ_str.prototype.rstrip.call(this, chars), chars);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("partition", (function() {
    var ρσ_anonfunc = function (sep) {
        var idx;
        idx = this.indexOf(sep);
        if (idx === -1) {
            return [this, "", ""];
        }
        return [this.slice(0, idx), sep, this.slice(idx + sep.length)];
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rpartition", (function() {
    var ρσ_anonfunc = function (sep) {
        var idx;
        idx = this.lastIndexOf(sep);
        if (idx === -1) {
            return ["", "", this];
        }
        return [this.slice(0, idx), sep, this.slice(idx + sep.length)];
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("replace", (function() {
    var ρσ_anonfunc = function (old, repl, count) {
        var string, pos, idx;
        string = this;
        if (count === 1) {
            return ρσ_orig_replace(string, old, repl);
        }
        if (count < 1) {
            return string;
        }
        count = count || Number.MAX_VALUE;
        pos = 0;
        while (count > 0) {
            count -= 1;
            idx = string.indexOf(old, pos);
            if (idx === -1) {
                break;
            }
            pos = idx + repl.length;
            string = string.slice(0, idx) + repl + string.slice(idx + old.length);
        }
        return string;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["old", "repl", "count"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("split", (function() {
    var ρσ_anonfunc = function (sep, maxsplit) {
        var split, ans, extra, parts;
        if (maxsplit === 0) {
            return ρσ_list_decorate([ this ]);
        }
        split = ρσ_orig_split;
        if (sep === undefined || sep === null) {
            if (maxsplit > 0) {
                ans = split(this, /(\s+)/);
                extra = "";
                parts = [];
                for (var i = 0; i < ans.length; i++) {
                    if (parts.length >= maxsplit + 1) {
                        extra += ans[(typeof i === "number" && i < 0) ? ans.length + i : i];
                    } else if (i % 2 === 0) {
                        parts.push(ans[(typeof i === "number" && i < 0) ? ans.length + i : i]);
                    }
                }
                parts[parts.length-1] += extra;
                ans = parts;
            } else {
                ans = split(this, /\s+/);
            }
        } else {
            if (sep === "") {
                throw new ValueError("empty separator");
            }
            ans = split(this, sep);
            if (maxsplit > 0 && ans.length > maxsplit) {
                extra = ans.slice(maxsplit).join(sep);
                ans = ans.slice(0, maxsplit);
                ans.push(extra);
            }
        }
        return ρσ_list_decorate(ans);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep", "maxsplit"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rsplit", (function() {
    var ρσ_anonfunc = function (sep, maxsplit) {
        var split, ans, is_space, pos, current, spc, ch, end, idx;
        if (!maxsplit) {
            return ρσ_str.prototype.split.call(this, sep);
        }
        split = ρσ_orig_split;
        if (sep === undefined || sep === null) {
            if (maxsplit > 0) {
                ans = [];
                is_space = /\s/;
                pos = this.length - 1;
                current = "";
                while (pos > -1 && maxsplit > 0) {
                    spc = false;
                    ch = (ρσ_expr_temp = this)[(typeof pos === "number" && pos < 0) ? ρσ_expr_temp.length + pos : pos];
                    while (pos > -1 && is_space.test(ch)) {
                        spc = true;
                        ch = this[--pos];
                    }
                    if (spc) {
                        if (current) {
                            ans.push(current);
                            maxsplit -= 1;
                        }
                        current = ch;
                    } else {
                        current += ch;
                    }
                    pos -= 1;
                }
                ans.push(this.slice(0, pos + 1) + current);
                ans.reverse();
            } else {
                ans = split(this, /\s+/);
            }
        } else {
            if (sep === "") {
                throw new ValueError("empty separator");
            }
            ans = [];
            pos = end = this.length;
            while (pos > -1 && maxsplit > 0) {
                maxsplit -= 1;
                idx = this.lastIndexOf(sep, pos);
                if (idx === -1) {
                    break;
                }
                ans.push(this.slice(idx + sep.length, end));
                pos = idx - 1;
                end = idx;
            }
            ans.push(this.slice(0, end));
            ans.reverse();
        }
        return ρσ_list_decorate(ans);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep", "maxsplit"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("splitlines", (function() {
    var ρσ_anonfunc = function (keepends) {
        var split, parts, ans;
        split = ρσ_orig_split;
        if (keepends) {
            parts = split(this, /((?:\r?\n)|\r)/);
            ans = [];
            for (var i = 0; i < parts.length; i++) {
                if (i % 2 === 0) {
                    ans.push(parts[(typeof i === "number" && i < 0) ? parts.length + i : i]);
                } else {
                    ans[ans.length-1] += parts[(typeof i === "number" && i < 0) ? parts.length + i : i];
                }
            }
        } else {
            ans = split(this, /(?:\r?\n)|\r/);
        }
        return ρσ_list_decorate(ans);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["keepends"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("swapcase", function () {
    var ans, a, b;
    ans = new Array(this.length);
    for (var i = 0; i < ans.length; i++) {
        a = (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        b = a.toLowerCase();
        if (a === b) {
            b = a.toUpperCase();
        }
        ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = b;
    }
    return ans.join("");
});
define_str_func("zfill", (function() {
    var ρσ_anonfunc = function (width) {
        var string;
        string = this;
        if (width > string.length) {
            string = new Array(width - string.length + 1).join("0") + string;
        }
        return string;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width"]}
    });
    return ρσ_anonfunc;
})());
ρσ_str.uchrs = (function() {
    var ρσ_anonfunc = function (string, with_positions) {
        return (function(){
            var ρσ_d = {};
            ρσ_d["_string"] = string;
            ρσ_d["_pos"] = 0;
            ρσ_d[ρσ_iterator_symbol] = function () {
                return this;
            };
            ρσ_d["next"] = function () {
                var length, pos, value, ans, extra;
                length = this._string.length;
                if (this._pos >= length) {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = true;
                        return ρσ_d;
                    }).call(this);
                }
                pos = this._pos;
                value = this._string.charCodeAt(this._pos++);
                ans = "\ufffd";
                if (55296 <= value && value <= 56319) {
                    if (this._pos < length) {
                        extra = this._string.charCodeAt(this._pos++);
                        if ((extra & 56320) === 56320) {
                            ans = String.fromCharCode(value, extra);
                        }
                    }
                } else if ((value & 56320) !== 56320) {
                    ans = String.fromCharCode(value);
                }
                if (with_positions) {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = false;
                        ρσ_d["value"] = ρσ_list_decorate([ pos, ans ]);
                        return ρσ_d;
                    }).call(this);
                } else {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = false;
                        ρσ_d["value"] = ans;
                        return ρσ_d;
                    }).call(this);
                }
            };
            return ρσ_d;
        }).call(this);
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string", "with_positions"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.uslice = (function() {
    var ρσ_anonfunc = function (string, start, end) {
        var items, iterator, r;
        items = [];
        iterator = ρσ_str.uchrs(string);
        r = iterator.next();
        while (!r.done) {
            items.push(r.value);
            r = iterator.next();
        }
        return items.slice(start || 0, (end === undefined) ? items.length : end).join("");
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string", "start", "end"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.ulen = (function() {
    var ρσ_anonfunc = function (string) {
        var iterator, r, ans;
        iterator = ρσ_str.uchrs(string);
        r = iterator.next();
        ans = 0;
        while (!r.done) {
            r = iterator.next();
            ans += 1;
        }
        return ans;
    };
    Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.ascii_lowercase = "abcdefghijklmnopqrstuvwxyz";
ρσ_str.ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
ρσ_str.ascii_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
ρσ_str.digits = "0123456789";
ρσ_str.punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
ρσ_str.printable = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\u000b\f";
ρσ_str.whitespace = " \t\n\r\u000b\f";
define_str_func = undefined;
var str = ρσ_str, repr = ρσ_repr;;

var __name__ = "__main__";

var graphColors;
function MotionMap(obj, tf, numMarkers, args) {
    if (!(this instanceof MotionMap)) return new MotionMap(arguments)
	arguments = arguments[0]
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    MotionMap.prototype.__bind_methods__.call(this);
    MotionMap.prototype.__init__.apply(this, arguments);
}
Object.defineProperty(MotionMap.prototype, "__bind_methods__", {value: function () {
    this.update = MotionMap.prototype.update.bind(this);
}});
MotionMap.prototype.__init__ = function __init__() {
    var self = this;
    var obj = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var tf = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
    var numMarkers = ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[2];
    var markerType = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.markerType : arguments[3];
    var markerScale = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.markerScale : arguments[4];
    var markerColor = (arguments[5] === undefined || ( 5 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.markerColor : arguments[5];
    var labelMarkerOrder = (arguments[6] === undefined || ( 6 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.labelMarkerOrder : arguments[6];
    var labelMarkerOffset = (arguments[7] === undefined || ( 7 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.labelMarkerOffset : arguments[7];
    var dropTime = (arguments[8] === undefined || ( 8 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.dropTime : arguments[8];
    var timeOffset = (arguments[9] === undefined || ( 9 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.timeOffset : arguments[9];
    var arrowOffset = (arguments[10] === undefined || ( 10 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.arrowOffset : arguments[10];
    var labelColor = (arguments[11] === undefined || ( 11 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.labelColor : arguments[11];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    //if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object") ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "markerType")){
        markerType = ρσ_kwargs_obj.markerType;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "markerScale")){
        markerScale = ρσ_kwargs_obj.markerScale;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "markerColor")){
        markerColor = ρσ_kwargs_obj.markerColor;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "labelMarkerOrder")){
        labelMarkerOrder = ρσ_kwargs_obj.labelMarkerOrder;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "labelMarkerOffset")){
        labelMarkerOffset = ρσ_kwargs_obj.labelMarkerOffset;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "dropTime")){
        dropTime = ρσ_kwargs_obj.dropTime;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "timeOffset")){
        timeOffset = ρσ_kwargs_obj.timeOffset;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "arrowOffset")){
        arrowOffset = ρσ_kwargs_obj.arrowOffset;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "labelColor")){
        labelColor = ρσ_kwargs_obj.labelColor;
    }
    self.obj = obj;
    self.tf = tf;
    self.numMarkers = numMarkers;
    self.markerType = markerType;
    self.markerScale = markerScale;
    self.markerColor = markerColor;
    self.labelMarkerOrder = labelMarkerOrder;
    self.labelMarkerOffset = labelMarkerOffset;
    self.timeOffset = timeOffset;
    self.dropTime = dropTime;
    self.arrowOffset = arrowOffset;
    self.labelColor = labelColor;
    self.curMarker = 0;
    try {
        self.interval = self.tf / self.numMarkers;
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            var err = ρσ_Exception;
            GSprint("**********TYPE ERROR**********");
            GSprint("Please check that you are not passing in a variable of the wrong type (e.g. a scalar as a vec, or vice-versa)!");
            GSprint("******************************");
            GSprint(err);
            throw err;
        } else {
            throw ρσ_Exception;
        }
    }
};
Object.defineProperties(MotionMap.prototype.__init__, {
    __defaults__ : {value: {markerType:"arrow", markerScale:1, markerColor:color.red, labelMarkerOrder:true, labelMarkerOffset:vec(0, 0, 0), dropTime:false, timeOffset:vec(0, 0, 0), arrowOffset:vec(0, 0, 0), labelColor:color.white}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["obj", "tf", "numMarkers", "markerType", "markerScale", "markerColor", "labelMarkerOrder", "labelMarkerOffset", "dropTime", "timeOffset", "arrowOffset", "labelColor"]}
});
MotionMap.__argnames__ = MotionMap.prototype.__init__.__argnames__;
MotionMap.__handles_kwarg_interpolation__ = MotionMap.prototype.__init__.__handles_kwarg_interpolation__;
MotionMap.prototype.update = function update() {
    var self = this;
    var t = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var quantity = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? update.__defaults__.quantity : arguments[1];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "quantity")){
        quantity = ρσ_kwargs_obj.quantity;
    }
    var epsilon, droptimeText;
    try {
        if (t > self.interval * self.curMarker) {
            self.curMarker += 1;
            if ((self.markerType === "arrow" || typeof self.markerType === "object" && ρσ_equals(self.markerType, "arrow"))) {
                ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: self.obj.pos.add(self.arrowOffset), axis: quantity.multiply(self.markerScale), color: self.markerColor})]);
            } else if ((self.markerType === "breadcrumbs" || typeof self.markerType === "object" && ρσ_equals(self.markerType, "breadcrumbs"))) {
                ρσ_interpolate_kwargs.call(this, points, [ρσ_desugar_kwargs({pos: self.obj.pos, radius: 5 * self.markerScale * quantity, color: self.markerColor})]);
            }
            if (self.dropTime) {
                epsilon = vec(0, self.markerScale * .5, 0).add(self.timeOffset);
                droptimeText = ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({pos: self.obj.pos.add(epsilon), text: "t={:1.2f} s".format(t), height: 10, box: false, color: self.labelColor})]);
            }
            if (self.labelMarkerOrder) {
                epsilon = vec(0, -self.markerScale * .5, 0).add(self.labelMarkerOffset);
                ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({pos: self.obj.pos.add(epsilon), text: self.curMarker, height: 10, box: false, color: self.labelColor})]);
            }
        }
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            var err = ρσ_Exception;
            GSprint("**********TYPE ERROR**********");
            GSprint("Please check that you are not passing in a variable of the wrong type (e.g. a scalar as a vec, or vice-versa)!");
            GSprint("******************************");
            GSprint(err);
            throw err;
        } else {
            throw ρσ_Exception;
        }
    }
};
Object.defineProperties(MotionMap.prototype.update, {
    __defaults__ : {value: {quantity:1}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["t", "quantity"]}
});
MotionMap.prototype.__repr__ = function __repr__ () {
        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
MotionMap.prototype.__str__ = function __str__ () {
    return this.__repr__();
};
Object.defineProperty(MotionMap.prototype, "__bases__", {value: []});

function MotionMapN(obj, dt, numSteps, args) {
    if (!(this instanceof MotionMapN)) return new MotionMapN(arguments)
	arguments = arguments[0]
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    MotionMapN.prototype.__bind_methods__.call(this);
    MotionMapN.prototype.__init__.apply(this, arguments);
}
Object.defineProperty(MotionMapN.prototype, "__bind_methods__", {value: function () {
    this.update = MotionMapN.prototype.update.bind(this);
}});
MotionMapN.prototype.__init__ = function __init__() {
    var self = this;
    var obj = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var dt = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
    var numSteps = ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[2];
    var markerType = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.markerType : arguments[3];
    var markerScale = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.markerScale : arguments[4];
    var markerColor = (arguments[5] === undefined || ( 5 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.markerColor : arguments[5];
    var labelMarkerOrder = (arguments[6] === undefined || ( 6 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.labelMarkerOrder : arguments[6];
    var labelMarkerOffset = (arguments[7] === undefined || ( 7 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.labelMarkerOffset : arguments[7];
    var dropTime = (arguments[8] === undefined || ( 8 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.dropTime : arguments[8];
    var timeOffset = (arguments[9] === undefined || ( 9 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.timeOffset : arguments[9];
    var arrowOffset = (arguments[10] === undefined || ( 10 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.arrowOffset : arguments[10];
    var labelColor = (arguments[11] === undefined || ( 11 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.labelColor : arguments[11];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    //if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object") ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "markerType")){
        markerType = ρσ_kwargs_obj.markerType;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "markerScale")){
        markerScale = ρσ_kwargs_obj.markerScale;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "markerColor")){
        markerColor = ρσ_kwargs_obj.markerColor;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "labelMarkerOrder")){
        labelMarkerOrder = ρσ_kwargs_obj.labelMarkerOrder;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "labelMarkerOffset")){
        labelMarkerOffset = ρσ_kwargs_obj.labelMarkerOffset;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "dropTime")){
        dropTime = ρσ_kwargs_obj.dropTime;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "timeOffset")){
        timeOffset = ρσ_kwargs_obj.timeOffset;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "arrowOffset")){
        arrowOffset = ρσ_kwargs_obj.arrowOffset;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "labelColor")){
        labelColor = ρσ_kwargs_obj.labelColor;
    }
    self.obj = obj;
    self.dt = dt;
    self.numSteps = numSteps;
    self.markerType = markerType;
    self.markerScale = markerScale;
    self.markerColor = markerColor;
    self.labelMarkerOrder = labelMarkerOrder;
    self.labelMarkerOffset = labelMarkerOffset;
    self.timeOffset = timeOffset;
    self.dropTime = dropTime;
    self.arrowOffset = arrowOffset;
    self.labelColor = labelColor;
    try {
        self.interval = self.dt * self.numSteps;
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            var err = ρσ_Exception;
            GSprint("**********TYPE ERROR**********");
            GSprint("Please check that you are not passing in a variable of the wrong type (e.g. a scalar as a vec, or vice-versa)!");
            GSprint("******************************");
            GSprint(err);
            throw err;
        } else {
            throw ρσ_Exception;
        }
    }
    self.curMarker = 0;
};
Object.defineProperties(MotionMapN.prototype.__init__, {
    __defaults__ : {value: {markerType:"arrow", markerScale:1, markerColor:color.red, labelMarkerOrder:true, labelMarkerOffset:vec(0, 0, 0), dropTime:false, timeOffset:vec(0, 0, 0), arrowOffset:vec(0, 0, 0), labelColor:color.white}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["obj", "dt", "numSteps", "markerType", "markerScale", "markerColor", "labelMarkerOrder", "labelMarkerOffset", "dropTime", "timeOffset", "arrowOffset", "labelColor"]}
});
MotionMapN.__argnames__ = MotionMapN.prototype.__init__.__argnames__;
MotionMapN.__handles_kwarg_interpolation__ = MotionMapN.prototype.__init__.__handles_kwarg_interpolation__;
MotionMapN.prototype.update = function update() {
    var self = this;
    var t = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var quantity = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? update.__defaults__.quantity : arguments[1];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "quantity")){
        quantity = ρσ_kwargs_obj.quantity;
    }
    var threshold, epsilon, droptimeText;
    try {
        threshold = self.interval * self.curMarker;
        if (t >= threshold) {
            self.curMarker += 1;
            if ((self.markerType === "arrow" || typeof self.markerType === "object" && ρσ_equals(self.markerType, "arrow"))) {
                ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: self.obj.pos + self.arrowOffset, axis: self.markerScale * quantity, color: self.markerColor})]);
            } else if ((self.markerType === "breadcrumbs" || typeof self.markerType === "object" && ρσ_equals(self.markerType, "breadcrumbs"))) {
                ρσ_interpolate_kwargs.call(this, points, [ρσ_desugar_kwargs({pos: self.obj.pos, radius: 5 * self.markerScale * quantity, color: self.markerColor})]);
            }
            if (self.dropTime) {
                epsilon = vec(0, self.markerScale * .5, 0).add(self.timeOffset);
                droptimeText = ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({pos: self.obj.pos + epsilon, text: "t=" + str(t) + "s", height: 10, box: false, color: self.labelColor})]);
            }
            if (self.labelMarkerOrder) {
                ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({pos: self.obj.pos.sub(vec(0, self.markerScale * .5, 0)).add(self.labelMarkerOffset), text: str(self.curMarker), height: 10, box: false, color: self.labelColor})]);
            }
        }
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            var err = ρσ_Exception;
            GSprint("**********TYPE ERROR**********");
            GSprint("Please check that you are not passing in a variable of the wrong type (e.g. a scalar as a vec, or vice-versa)!");
            GSprint("******************************");
            GSprint(err);
            throw err;
        } else {
            throw ρσ_Exception;
        }
    }
};
Object.defineProperties(MotionMapN.prototype.update, {
    __defaults__ : {value: {quantity:1}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["t", "quantity"]}
});
MotionMapN.prototype.__repr__ = function __repr__ () {
        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
MotionMapN.prototype.__str__ = function __str__ () {
    return this.__repr__();
};
Object.defineProperty(MotionMapN.prototype, "__bases__", {value: []});

function PhysAxis(obj, numLabels, args) {
    if (!(this instanceof PhysAxis)) return new PhysAxis(arguments)
	arguments = arguments[0]
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    PhysAxis.prototype.__bind_methods__.call(this);
    PhysAxis.prototype.__init__.apply(this, arguments);
}
Object.defineProperty(PhysAxis.prototype, "__bind_methods__", {value: function () {
    this.update = PhysAxis.prototype.update.bind(this);
    this.reorient = PhysAxis.prototype.reorient.bind(this);
    this.reorient_base = PhysAxis.prototype.reorient_base.bind(this);
}});
PhysAxis.prototype.__init__ = function __init__() {
    var self = this;
    var obj = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var numLabels = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
    var axisType = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.axisType : arguments[2];
    var axis = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.axis : arguments[3];
    var startPos = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.startPos : arguments[4];
    var length = (arguments[5] === undefined || ( 5 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.length : arguments[5];
    var labels = (arguments[6] === undefined || ( 6 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.labels : arguments[6];
    var labelOrientation = (arguments[7] === undefined || ( 7 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.labelOrientation : arguments[7];
    var axisColor = (arguments[8] === undefined || ( 8 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.axisColor : arguments[8];
    var labelColor = (arguments[9] === undefined || ( 9 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.labelColor : arguments[9];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    //if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object") ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "axisType")){
        axisType = ρσ_kwargs_obj.axisType;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "axis")){
        axis = ρσ_kwargs_obj.axis;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "startPos")){
        startPos = ρσ_kwargs_obj.startPos;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "length")){
        length = ρσ_kwargs_obj.length;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "labels")){
        labels = ρσ_kwargs_obj.labels;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "labelOrientation")){
        labelOrientation = ρσ_kwargs_obj.labelOrientation;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "axisColor")){
        axisColor = ρσ_kwargs_obj.axisColor;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "labelColor")){
        labelColor = ρσ_kwargs_obj.labelColor;
    }
    try {
        self.intervalMarkers = ρσ_list_decorate([]);
        self.intervalLabels = ρσ_list_decorate([]);
        self.labelText = labels;
        self.obj = obj;
        self.lastPos = vec(obj.pos);
        self.numLabels = numLabels;
        self.axisType = axisType;
        self.axis = axis;
        if ((axisType === "y" || typeof axisType === "object" && ρσ_equals(axisType, "y"))) {
            self.axis = vec(0, 1, 0);
        }
        self.length = length;
        if (length === null) {
            self.length = obj.size.x;
        }
        self.startPos = startPos;
        if (startPos === null) {
            self.startPos = vec(-obj.size.x / 2, -4 * obj.size.y, 0).add(obj.pos);
        }
        self.axisColor = axisColor;
        self.labelColor = labelColor;
        if ((labelOrientation === "down" || typeof labelOrientation === "object" && ρσ_equals(labelOrientation, "down"))) {
            self.labelShift = vec(0, -.05 * self.length, 0);
        } else if ((labelOrientation === "up" || typeof labelOrientation === "object" && ρσ_equals(labelOrientation, "up"))) {
            self.labelShift = vec(0, .05 * self.length, 0);
        } else if ((labelOrientation === "left" || typeof labelOrientation === "object" && ρσ_equals(labelOrientation, "left"))) {
            self.labelShift = vec(-.1 * self.length, 0, 0);
        } else if ((labelOrientation === "right" || typeof labelOrientation === "object" && ρσ_equals(labelOrientation, "right"))) {
            self.labelShift = vec(.1 * self.length, 0, 0);
        }
        self.reorient_base();
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            var err = ρσ_Exception;
            GSprint("**********TYPE ERROR**********");
            GSprint("Please check that you are not passing in a variable of the wrong type (e.g. a scalar as a vec, or vice-versa)!");
            GSprint("******************************");
            GSprint(err);
            throw err;
        } else {
            throw ρσ_Exception;
        }
    }
};
Object.defineProperties(PhysAxis.prototype.__init__, {
    __defaults__ : {value: {axisType:"x", axis:vec(1, 0, 0), startPos:null, length:null, labels:null, labelOrientation:"down", axisColor:color.yellow, labelColor:color.white}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["obj", "numLabels", "axisType", "axis", "startPos", "length", "labels", "labelOrientation", "axisColor", "labelColor"]}
});
PhysAxis.__argnames__ = PhysAxis.prototype.__init__.__argnames__;
PhysAxis.__handles_kwarg_interpolation__ = PhysAxis.prototype.__init__.__handles_kwarg_interpolation__;
PhysAxis.prototype.update = function update() {
    var self = this;
    var diff, i, pt;
    try {
        if (!self.obj.pos.equals(self.lastPos)) {
            diff = self.obj.pos.sub(self.lastPos);
            var ρσ_Iter0 = ρσ_Iterable(range(len(self.intervalMarkers)));
            for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
                i = ρσ_Iter0[ρσ_Index0];
                (ρσ_expr_temp = self.intervalMarkers)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].pos = (ρσ_expr_temp = self.intervalMarkers)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].pos.add(diff);
                (ρσ_expr_temp = self.intervalLabels)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].pos = (ρσ_expr_temp = self.intervalLabels)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].pos.add(diff);
            }
            for (var ρσ_Index1 = 0; ρσ_Index1 < self.axisCurve.npoints; ρσ_Index1++) {
                i = ρσ_Index1;
                pt = self.axisCurve.point(i);
                ρσ_interpolate_kwargs.call(self.axisCurve, self.axisCurve.modify, [i].concat([ρσ_desugar_kwargs({pos: pt.pos.add(diff)})]));
            }
            self.lastPos = vec(self.obj.pos);
        }
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            var err = ρσ_Exception;
            GSprint("**********TYPE ERROR**********");
            GSprint("Please check that you are not passing in a variable of the wrong type (e.g. a scalar as a vec, or vice-versa)!");
            GSprint("******************************");
            GSprint(err);
            throw err;
        } else {
            throw ρσ_Exception;
        }
    }
};
Object.defineProperties(PhysAxis.prototype.update, {
    __argnames__ : {value: []}
});
PhysAxis.prototype.reorient = function reorient() {
    var self = this;
    var axis = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? reorient.__defaults__.axis : arguments[0];
    var startPos = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? reorient.__defaults__.startPos : arguments[1];
    var length = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? reorient.__defaults__.length : arguments[2];
    var labels = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? reorient.__defaults__.labels : arguments[3];
    var labelOrientation = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? reorient.__defaults__.labelOrientation : arguments[4];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "axis")){
        axis = ρσ_kwargs_obj.axis;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "startPos")){
        startPos = ρσ_kwargs_obj.startPos;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "length")){
        length = ρσ_kwargs_obj.length;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "labels")){
        labels = ρσ_kwargs_obj.labels;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "labelOrientation")){
        labelOrientation = ρσ_kwargs_obj.labelOrientation;
    }
    try {
        self.axis = axis;
        if (axis !== null) {
            self.axis = axis;
        }
        if (startPos !== null) {
            self.startPos = startPos;
        }
        if (length !== null) {
            self.length = length;
        }
        if (labels !== null) {
            self.labelText = labels;
        }
        if ((labelOrientation === "down" || typeof labelOrientation === "object" && ρσ_equals(labelOrientation, "down"))) {
            self.labelShift = vec(0, -.05 * self.length, 0);
        } else if ((labelOrientation === "up" || typeof labelOrientation === "object" && ρσ_equals(labelOrientation, "up"))) {
            self.labelShift = vec(0, .05 * self.length, 0);
        } else if ((labelOrientation === "left" || typeof labelOrientation === "object" && ρσ_equals(labelOrientation, "left"))) {
            self.labelShift = vec(-.1 * self.length, 0, 0);
        } else if ((labelOrientation === "right" || typeof labelOrientation === "object" && ρσ_equals(labelOrientation, "right"))) {
            self.labelShift = vec(.1 * self.length, 0, 0);
        }
        self.reorient_base();
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            var err = ρσ_Exception;
            GSprint("**********TYPE ERROR**********");
            GSprint("Please check that you are not passing in a variable of the wrong type (e.g. a scalar as a vec, or vice-versa)!");
            GSprint("******************************");
            GSprint(err);
            throw err;
        } else {
            throw ρσ_Exception;
        }
    }
};
Object.defineProperties(PhysAxis.prototype.reorient, {
    __defaults__ : {value: {axis:null, startPos:null, length:null, labels:null, labelOrientation:null}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["axis", "startPos", "length", "labels", "labelOrientation"]}
});
PhysAxis.prototype.reorient_base = function reorient_base() {
    var self = this;
    var updating, final, interval, i, intervalPos, labelText;
    updating = len(self.intervalMarkers) > 0;
    final = self.startPos.add(self.axis.multiply(self.length));
    interval = self.axis.multiply(self.length / (self.numLabels - 1));
    i = 0;
    while (i < self.numLabels) {
        intervalPos = self.startPos.add(interval.multiply(i));
        if (self.labelText !== null) {
            labelText = (ρσ_expr_temp = self.labelText)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        } else if ((self.axisType === "y" || typeof self.axisType === "object" && ρσ_equals(self.axisType, "y"))) {
            labelText = "{:.2f}".format(intervalPos.y);
        } else {
            labelText = "{:.2f}".format(intervalPos.x);
        }
        if (updating) {
            (ρσ_expr_temp = self.intervalMarkers)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].pos = intervalPos;
            (ρσ_expr_temp = self.intervalLabels)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].pos = intervalPos.add(self.labelShift);
            (ρσ_expr_temp = self.intervalLabels)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].text = labelText;
        } else {
            self.intervalMarkers.append(ρσ_interpolate_kwargs.call(this, points, [ρσ_desugar_kwargs({pos: intervalPos, color: self.axisColor, radius: 3})]));
            self.intervalLabels.append(ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({pos: intervalPos.add(self.labelShift), text: str(labelText), box: false, height: 8, color: self.labelColor})]));
        }
        i = i + 1;
    }
    if (updating) {
        ρσ_interpolate_kwargs.call(self.axisCurve, self.axisCurve.modify, [0].concat([ρσ_desugar_kwargs({pos: self.startPos})]));
        ρσ_interpolate_kwargs.call(self.axisCurve, self.axisCurve.modify, [1].concat([ρσ_desugar_kwargs({pos: final})]));
    } else {
        self.axisCurve = ρσ_interpolate_kwargs.call(this, curve, [ρσ_desugar_kwargs({pos: ρσ_list_decorate([ self.startPos, final ]), color: self.axisColor})]);
    }
};
Object.defineProperties(PhysAxis.prototype.reorient_base, {
    __argnames__ : {value: []}
});
PhysAxis.prototype.__repr__ = function __repr__ () {
        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
PhysAxis.prototype.__str__ = function __str__ () {
    return this.__repr__();
};
Object.defineProperty(PhysAxis.prototype, "__bases__", {value: []});

function PhysTimer(x, y, args) {
    if (!(this instanceof PhysTimer)) return new PhysTimer(arguments)
	arguments = arguments[0]
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    PhysTimer.prototype.__bind_methods__.call(this);
    PhysTimer.prototype.__init__.apply(this, arguments);
}
Object.defineProperty(PhysTimer.prototype, "__bind_methods__", {value: function () {
    this.update = PhysTimer.prototype.update.bind(this);
}});
PhysTimer.prototype.__init__ = function __init__() {
    var self = this;
    var x = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var y = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
    var fontsize = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.fontsize : arguments[2];
    var useScientific = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.useScientific : arguments[3];
    var timerColor = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.timerColor : arguments[4];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    //if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object") ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "fontsize")){
        fontsize = ρσ_kwargs_obj.fontsize;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "useScientific")){
        useScientific = ρσ_kwargs_obj.useScientific;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "timerColor")){
        timerColor = ρσ_kwargs_obj.timerColor;
    }
    try {
        self.useScientific = useScientific;
        self.timerColor = timerColor;
        if (useScientific === false) {
            self.timerLabel = ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({pos: vec(x, y, 0), text: "00:00:00.00", box: false, height: fontsize})]);
        } else {
            self.timerLabel = ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({pos: vec(x, y, 0), text: "00E01", box: false, height: fontsize})]);
        }
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            var err = ρσ_Exception;
            GSprint("**********TYPE ERROR**********");
            GSprint("Please check that you are not passing in a variable of the wrong type (e.g. a scalar as a vec, or vice-versa)!");
            GSprint("******************************");
            GSprint(err);
            throw err;
        } else {
            throw ρσ_Exception;
        }
    }
};
Object.defineProperties(PhysTimer.prototype.__init__, {
    __defaults__ : {value: {fontsize:13, useScientific:false, timerColor:color.white}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["x", "y", "fontsize", "useScientific", "timerColor"]}
});
PhysTimer.__argnames__ = PhysTimer.prototype.__init__.__argnames__;
PhysTimer.__handles_kwarg_interpolation__ = PhysTimer.prototype.__init__.__handles_kwarg_interpolation__;
PhysTimer.prototype.update = function update(t) {
    var self = this;
    var hours, mins, secs, frac;
    try {
        if (self.useScientific) {
            self.timerLabel.text = "{:.4E}".format(t);
        } else {
            hours = int(t / 3600);
            mins = int(t / 60 % 60);
            secs = int(t % 60);
            frac = int(round(100 * (t % 1)));
            if ((frac === 100 || typeof frac === "object" && ρσ_equals(frac, 100))) {
                frac = 0;
                secs = secs + 1;
            }
            self.timerLabel.text = "{:02d}:{:02d}:{:02d}.{:02d}".format(hours, mins, secs, frac);
        }
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            var err = ρσ_Exception;
            GSprint("**********TYPE ERROR**********");
            GSprint("Please check that you are not passing in a variable of the wrong type (e.g. a scalar as a vec, or vice-versa)!");
            GSprint("******************************");
            GSprint(err);
            throw err;
        } else {
            throw ρσ_Exception;
        }
    }
};
Object.defineProperties(PhysTimer.prototype.update, {
    __argnames__ : {value: ["t"]}
});
PhysTimer.prototype.__repr__ = function __repr__ () {
        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
PhysTimer.prototype.__str__ = function __str__ () {
    return this.__repr__();
};
Object.defineProperty(PhysTimer.prototype, "__bases__", {value: []});

graphColors = ρσ_list_decorate([ color.red, color.green, color.blue, color.yellow, color.orange, color.cyan, color.magenta, color.white ]);
function PhysGraph(args) {
    if (!(this instanceof PhysGraph)) return new PhysGraph(arguments)
	arguments = arguments[0]
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    PhysGraph.prototype.__bind_methods__.call(this);
    PhysGraph.prototype.__init__.apply(this, arguments);
}
Object.defineProperty(PhysGraph.prototype, "__bind_methods__", {value: function () {
    this.plot = PhysGraph.prototype.plot.bind(this);
}});
PhysGraph.prototype.__init__ = function __init__() {
    var self = this;
    var numPlots = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.numPlots : arguments[0];
    var title = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.title : arguments[1];
    var xlabel = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.xlabel : arguments[2];
    var ylabel = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.ylabel : arguments[3];
    var backgroundColor = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.backgroundColor : arguments[4];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    //if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object") ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "numPlots")){
        numPlots = ρσ_kwargs_obj.numPlots;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "title")){
        title = ρσ_kwargs_obj.title;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "xlabel")){
        xlabel = ρσ_kwargs_obj.xlabel;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "ylabel")){
        ylabel = ρσ_kwargs_obj.ylabel;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "backgroundColor")){
        backgroundColor = ρσ_kwargs_obj.backgroundColor;
    }
    var i;
    try {
        self.graphDisplay = ρσ_interpolate_kwargs.call(this, vp_graph, [ρσ_desugar_kwargs({title: title, xtitle: xlabel, ytitle: ylabel, background: backgroundColor})]);
        self.numPlots = numPlots;
        self.graphs = ρσ_list_decorate([]);
        for (var ρσ_Index2 = 0; ρσ_Index2 < numPlots; ρσ_Index2++) {
            i = ρσ_Index2;
            self.graphs.append(ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({color: graphColors[ρσ_bound_index(i % len(graphColors), graphColors)]})]));
        }
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            var err = ρσ_Exception;
            GSprint("**********TYPE ERROR**********");
            GSprint("Please check that you are not passing in a variable of the wrong type (e.g. a scalar as a vec, or vice-versa)!");
            GSprint("******************************");
            GSprint(err);
            throw err;
        } else {
            throw ρσ_Exception;
        }
    }
};
Object.defineProperties(PhysGraph.prototype.__init__, {
    __defaults__ : {value: {numPlots:1, title:"", xlabel:"", ylabel:"", backgroundColor:color.white}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["numPlots", "title", "xlabel", "ylabel", "backgroundColor"]}
});
PhysGraph.__argnames__ = PhysGraph.prototype.__init__.__argnames__;
PhysGraph.__handles_kwarg_interpolation__ = PhysGraph.prototype.__init__.__handles_kwarg_interpolation__;
PhysGraph.prototype.plot = function plot() {
    var self = this;
    var independent = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var dependents = Array.prototype.slice.call(arguments, 1);
    if (arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) dependents.pop();
    var i;
    try {
        if (ρσ_not_equals(len(dependents), self.numPlots)) {
            throw new Exception("ERROR: Number of dependent parameters given does not match numPlots given at initialization!");
        }
        var ρσ_Iter3 = ρσ_Iterable(range(len(dependents)));
        for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
            i = ρσ_Iter3[ρσ_Index3];
            ρσ_interpolate_kwargs.call((ρσ_expr_temp = self.graphs)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], (ρσ_expr_temp = self.graphs)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].plot, [ρσ_desugar_kwargs({pos: [independent,
            dependents[(typeof i === "number" && i < 0) ? dependents.length + i : i]]})]);
        }
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            var err = ρσ_Exception;
            GSprint("**********TYPE ERROR**********");
            GSprint("Please check that you are not passing in a variable of the wrong type (e.g. a scalar as a vec, or vice-versa)!");
            GSprint("******************************");
            GSprint(err);
            throw err;
        } else {
            throw ρσ_Exception;
        }
    }
};
Object.defineProperties(PhysGraph.prototype.plot, {
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["independent"]}
});
PhysGraph.prototype.__repr__ = function __repr__ () {
        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
PhysGraph.prototype.__str__ = function __str__ () {
    return this.__repr__();
};
Object.defineProperty(PhysGraph.prototype, "__bases__", {value: []});
