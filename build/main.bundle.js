var testLibrary;
(() => {
  "use strict";
  var e = {
      d: (t, n) => {
        for (var o in n)
          e.o(n, o) &&
            !e.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      r: (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      },
    },
    t = {};
  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(e, o.key, o);
    }
  }
  function o(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  e.r(t), e.d(t, { default: () => i });
  var i = (function () {
    function e(t, n) {
      var i = this;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        o(this, "formElement", null),
        o(this, "options", null),
        (t && n) || console.error("Invalid parameter"),
        (this.formElement = t),
        (this.options = n),
        this.formElement.addEventListener("submit", function (e) {
          return i.validateForm(e);
        });
    }
    var t, i;
    return (
      (t = e),
      (i = [
        {
          key: "validateForm",
          value: function (e) {
            var t = this;
            e.preventDefault(),
              Object.keys(this.options).forEach(function (e) {
                var n = t.formElement.querySelector('[name="'.concat(e, '"]'));
                if ("minLength" in t.options[e]) {
                  var o = t.options[e].minLength,
                    i = t.options[e].nonNumeric;
                  n.value.length > o && /[0-9]+/.test(n.value) !== i
                    ? u("valid")
                    : u("invalid");
                }
                if ("maxLength" in t.options[e]) {
                  var a = t.options[e].maxLength;
                  n.value.length > null && n.value.length < a
                    ? u("valid")
                    : u("invalid");
                }
                if ("hasLowerCase" in t.options[e]) {
                  var r = t.options[e].hasUpperCase;
                  /[a-z]/gm.test(n.value) == r ? u("valid") : u("invalid");
                }
                if ("hasHttps" in t.options[e]) {
                  var l = t.options[e].hasHttps;
                  console.log(l),
                    /https/g.test(n.value) == l ? u("valid") : u("invalid");
                }
                if ("hasUpperCase" in t.options[e]) {
                  var s = t.options[e].hasUpperCase;
                  console.log(n.value),
                    /[A-Z]/gm.test(n.value) == s ? u("valid") : u("invalid");
                }
                function u(t) {
                  return (document.getElementById(e).innerText = ""
                    .concat(e, "  ")
                    .concat(t));
                }
              });
          },
        },
      ]) && n(t.prototype, i),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e
    );
  })();
  testLibrary = t;
})();
