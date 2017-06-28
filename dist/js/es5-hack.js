if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback) {
        var _arr = this;
        for (var i in _arr) {
            if (_arr.hasOwnProperty(i)) {
                callback(_arr[i], parseInt(i), _arr);
            }
        }
    }
}

if (!Array.prototype.map) {
    Array.prototype.map = function(callback) {
        var _arr = [];
        this.forEach(function(el, i, arr) {
            _arr.push(callback(el, i, arr));
        });
        return _arr;
    }
}

if (!Array.prototype.filter) {
    Array.prototype.filter = function(callback) {
        var _arr = [];
        this.forEach(function(el, i, arr) {
            if (callback(el, i, arr)) {
                _arr.push(el);
            }
        });
        return _arr;
    }
}

if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        var _arr = this;
        for (var i in _arr) {
            if (_arr.hasOwnProperty(i) && callback(_arr[i], parseInt(i), _arr)) {
                return _arr[i];
            }
        }
        return null;
    }
}


if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(callback) {
        var _arr = this;
        for (var i in _arr) {
            var j = parseInt(i)
            if (_arr.hasOwnProperty(i) && callback(_arr[i], j, _arr)) {
                return j;
            }
        }
        return -1;
    }
}

if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callback) {
        var _arr = this,
            r = callback(_arr[0], _arr[1], 0, _arr);
        for (var i = 1; i < _arr.length - 2; i++) {
            if (_arr.hasOwnProperty(i)) {
                r = callback(r, _arr[i + 1], i, _arr);
            }
        }
        return r;
    }
}

if (!Array.prototype.some) {
    Array.prototype.some = function(callback) {
        var _arr = this;
        for (var i in _arr) {
            if (_arr.hasOwnProperty(i) && callback(_arr[i], parseInt(i), _arr)) {
                return true;
            }
        }
        return false;
    }
}

if (!Array.prototype.every) {
    Array.prototype.every = function(callback) {
        var _arr = this;
        for (var i in _arr) {
            if (_arr.hasOwnProperty(i) && !callback(_arr[i], parseInt(i), _arr)) {
                return false;
            }
        }
        return true;
    }
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(el) {
        var _arr = this;
        for (var i in _arr) {
            if (_arr.hasOwnProperty(i) && arr[i] === el) {
                return parseInt(i);
            }
        }
        return -1;
    }
}


if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }
        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function() {},
            fBound = function() {
                return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    };
}


! function() {
    var hasOwn = Object.prototype.hasOwnProperty;

    Object.keys = Object.keys || function(obj) {
        var result = [];
        for (var key in obj)
            if (hasOwn.call(obj, key)) {
                result.push(key);
            }
        return result;
    };


    if (!JSON) {
        window.JSON = {
            parse: function(str) {
                return eval('(' + str + ')');
            },
            stringify: function(obj) {
                var otype = typeof obj;
                if (otype !== 'object') {
                    return obj;
                }

                var str = '',
                    boolOrNum = function(o) {
                        var type = typeof o;
                        if (type === 'number' || type === 'boolean') {
                            return true;
                        }
                        return false;
                    }

                for (var i in obj) {
                    if (hasOwn.call(obj, i)) {
                        var value = obj[i],
                            valueStr = value.toString();
                        str += '"' + i + '":' + boolOrNum(value) ? valueStr : '"' + valueStr + '"';
                    }
                }
                return '{' + str + '}';
            },
            toString: function() {
                return "[Object JSON]";
            },
            toLocalString: function() {
                return "[Object JSON]";
            },
            valueOf: function() {
                return {};
            }
        };
    }

}();
