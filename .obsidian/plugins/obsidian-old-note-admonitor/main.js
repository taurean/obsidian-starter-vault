"use strict";
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module2) {
    !function(t, e) {
      typeof exports == "object" && typeof module2 != "undefined" ? module2.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis != "undefined" ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, g = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date())
          return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return t2 === void 0;
      } }, v = "en", D = {};
      D[v] = M;
      var p = function(t2) {
        return t2 instanceof _;
      }, S = function t2(e2, n2, r2) {
        var i2;
        if (!e2)
          return v;
        if (typeof e2 == "string") {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1)
            return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (v = i2), i2 || !r2 && v;
      }, w = function(t2, e2) {
        if (p(t2))
          return t2.clone();
        var n2 = typeof e2 == "object" ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, O = g;
      O.l = S, O.i = p, O.w = function(t2, e2) {
        return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = S(t2.locale, null, true), this.parse(t2);
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (e2 === null)
              return new Date(NaN);
            if (O.u(e2))
              return new Date();
            if (e2 instanceof Date)
              return new Date(e2);
            if (typeof e2 == "string" && !/Z$/i.test(e2)) {
              var r2 = e2.match(l);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.$x = t2.x || {}, this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return O;
        }, m2.isValid = function() {
          return !(this.$d.toString() === $);
        }, m2.isSame = function(t2, e2) {
          var n2 = w(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return w(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < w(t2);
        }, m2.$g = function(t2, e2, n2) {
          return O.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), $2 = function(t3, e3) {
            var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, l2 = function(t3, e3) {
            return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
          switch (h2) {
            case c:
              return r2 ? $2(1, 0) : $2(31, 11);
            case f:
              return r2 ? $2(1, M3) : $2(0, M3 + 1);
            case o:
              var v2 = this.$locale().weekStart || 0, D2 = (y2 < v2 ? y2 + 7 : y2) - v2;
              return $2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return l2(g2 + "Hours", 0);
            case u:
              return l2(g2 + "Minutes", 1);
            case s:
              return l2(g2 + "Seconds", 2);
            case i:
              return l2(g2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), $2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], l2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === f || o2 === c) {
            var y2 = this.clone().set(d, 1);
            y2.$d[$2](l2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            $2 && this.$d[$2](l2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[O.p(t2)]();
        }, m2.add = function(r2, h2) {
          var d2, $2 = this;
          r2 = Number(r2);
          var l2 = O.p(h2), y2 = function(t2) {
            var e2 = w($2);
            return O.w(e2.date(e2.date() + Math.round(t2 * r2)), $2);
          };
          if (l2 === f)
            return this.set(f, this.$M + r2);
          if (l2 === c)
            return this.set(c, this.$y + r2);
          if (l2 === a)
            return y2(1);
          if (l2 === o)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[l2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return O.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || $;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, c2 = function(t3) {
            return O.s(s2 % 12 || 12, t3, "0");
          }, d2 = n2.meridiem || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          }, l2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
          return r2.replace(y, function(t3, e3) {
            return e3 || l2[t3] || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, $2) {
          var l2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, g2 = this - M3, v2 = O.m(this, M3);
          return v2 = (l2 = {}, l2[c] = v2 / 12, l2[f] = v2, l2[h] = v2 / 3, l2[o] = (g2 - m3) / 6048e5, l2[a] = (g2 - m3) / 864e5, l2[u] = g2 / n, l2[s] = g2 / e, l2[i] = g2 / t, l2)[y2] || g2, $2 ? v2 : O.a(v2);
        }, m2.daysInMonth = function() {
          return this.endOf(f).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2)
            return this.$L;
          var n2 = this.clone(), r2 = S(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return O.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), T = _.prototype;
      return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
        T[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), w.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, w), t2.$i = true), w;
      }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
        return w(1e3 * t2);
      }, w.en = D[v], w.Ls = D, w.p = {}, w;
    });
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => OldNoteAdmonitorPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");
var import_dayjs = __toESM(require_dayjs_min());

// src/app-helper.ts
var import_obsidian = require("obsidian");
var AppHelper = class {
  constructor(app2) {
    this.unsafeApp = app2;
  }
  getActiveFile() {
    return this.unsafeApp.workspace.getActiveFile();
  }
  getMarkdownViewInActiveLeaf() {
    return this.unsafeApp.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
  }
  getNoCacheFrontMatter(content) {
    const lines = content.split("\n");
    if (lines[0] !== "---") {
      return null;
    }
    let frontMatter = {};
    lines.slice(1).forEach((line) => {
      if (line === "---") {
        return frontMatter;
      }
      if (/.+: .+/.test(line)) {
        const [key, value] = line.trim().split(":");
        frontMatter[key] = value;
      }
    });
    return frontMatter;
  }
};

// src/settings.ts
var import_obsidian2 = require("obsidian");

// src/collections.ts
function mirrorMap(collection, toValue) {
  return collection.reduce((p, c) => ({ ...p, [toValue(c)]: toValue(c) }), {});
}
function mirror(collection) {
  return mirrorMap(collection, (x) => x);
}

// src/utils/strings.ts
function smartLineBreakSplit(text) {
  return text.split("\n").filter((x) => x);
}

// src/settings.ts
var dateToBeReferredList = [
  "Modified time",
  "Front matter",
  "Capture group"
];
var triggerToUpdateList = ["On open file", "On open or save file"];
var DEFAULT_SETTINGS = {
  minNumberOfDaysToShowWarning: 180,
  messageTemplate: "The following content hasn't been updated in the last ${numberOfDays} days",
  showWarningIfDataIsNotFound: false,
  triggerToUpdate: "On open file",
  dateToBeReferred: "Modified time",
  frontMatterKey: "updated",
  captureGroupPattern: `^// (?<date>[0-9]{4}/[0-9]{2}/[0-9]{2})`,
  excludePrefixPathPatterns: []
};
var OldNoteAdmonitorTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app2, plugin) {
    super(app2, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Old Note Admonitor - Settings" });
    new import_obsidian2.Setting(containerEl).setName("Message template").setDesc("${numberOfDays} and ${date} are available variables").addText((tc) => {
      tc.inputEl.addClass("old-note-admonitor__settings__message_template");
      return tc.setValue(String(this.plugin.settings.messageTemplate)).onChange(async (value) => {
        this.plugin.settings.messageTemplate = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian2.Setting(containerEl).setName("Date to be referred").addDropdown((dc) => dc.addOptions(mirror([...dateToBeReferredList])).setValue(this.plugin.settings.dateToBeReferred).onChange(async (value) => {
      this.plugin.settings.dateToBeReferred = value;
      await this.plugin.saveSettings();
      this.display();
    }));
    if (this.plugin.settings.dateToBeReferred === "Front matter") {
      new import_obsidian2.Setting(containerEl).setName("Front matter key").addText((tc) => {
        return tc.setValue(String(this.plugin.settings.frontMatterKey)).onChange(async (value) => {
          this.plugin.settings.frontMatterKey = value;
          await this.plugin.saveSettings();
        });
      });
    }
    if (this.plugin.settings.dateToBeReferred === "Capture group") {
      new import_obsidian2.Setting(containerEl).setName("Capture group pattern").setDesc("Use <date> as capture name. ex: // (?<date>[0-9]{4}/[0-9]{2}/[0-9]{2})").addText((tc) => {
        tc.inputEl.addClass("old-note-admonitor__settings__group_capture_patterns");
        return tc.setValue(String(this.plugin.settings.captureGroupPattern)).onChange(async (value) => {
          this.plugin.settings.captureGroupPattern = value;
          await this.plugin.saveSettings();
        });
      });
    }
    new import_obsidian2.Setting(containerEl).setName("Min number of days to show a warning").addText((tc) => {
      tc.inputEl.type = "number";
      return tc.setValue(String(this.plugin.settings.minNumberOfDaysToShowWarning)).onChange(async (value) => {
        this.plugin.settings.minNumberOfDaysToShowWarning = Number(value);
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian2.Setting(containerEl).setName("Trigger to update").addDropdown((dc) => {
      dc.addOptions(mirror([...triggerToUpdateList])).setValue(this.plugin.settings.triggerToUpdate).onChange(async (value) => {
        this.plugin.settings.triggerToUpdate = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian2.Setting(containerEl).setName("Show a warning if the date is not found").addToggle((cb) => cb.setValue(this.plugin.settings.showWarningIfDataIsNotFound).onChange(async (value) => {
      this.plugin.settings.showWarningIfDataIsNotFound = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian2.Setting(containerEl).setName("Exclude prefix path patterns").setDesc("If set, It doesn't show a warning in the file whose path starts with one of the patterns. It can set multi patterns by line breaks.").addTextArea((tc) => {
      const el = tc.setPlaceholder("(ex: Notes/Private)").setValue(this.plugin.settings.excludePrefixPathPatterns.join("\n")).onChange(async (value) => {
        this.plugin.settings.excludePrefixPathPatterns = smartLineBreakSplit(value);
        await this.plugin.saveSettings();
      });
      el.inputEl.className = "old-note-admonitor____settings__exclude_path_patterns";
      return el;
    });
  }
};

// src/errors.ts
var ExhaustiveError = class extends Error {
  constructor(value, message = `Unsupported type: ${value}`) {
    super(message);
  }
};

// src/main.ts
var ADMONITOR_CLS = "old-note-admonitor__old-note-container";
var ADMONITOR_WARNING_CLS = "old-note-admonitor__old-note-container__warning";
var ADMONITOR_ERR_CLS = "old-note-admonitor__old-note-container__error";
var OldNoteAdmonitorPlugin = class extends import_obsidian3.Plugin {
  async onload() {
    this.appHelper = new AppHelper(this.app);
    await this.loadSettings();
    this.addSettingTab(new OldNoteAdmonitorTab(this.app, this));
    await this.exec(this.appHelper.getActiveFile());
    this.addListeners();
  }
  onunload() {
    this.removeListeners();
  }
  addListeners() {
    this.fileOpenHandler = this.app.workspace.on("file-open", (file) => {
      this.exec(file);
    });
    if (this.settings.triggerToUpdate === "On open or save file") {
      this.fileSaveHandler = this.app.vault.on("modify", (file) => {
        this.exec(file);
      });
    }
  }
  removeListeners() {
    this.app.workspace.offref(this.fileOpenHandler);
    this.app.vault.offref(this.fileSaveHandler);
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.removeListeners();
    this.addListeners();
    await this.exec(this.appHelper.getActiveFile());
  }
  async exec(file) {
    const markdownView = this.appHelper.getMarkdownViewInActiveLeaf();
    if (!markdownView || !file) {
      return;
    }
    if (markdownView.file.path !== file.path) {
      return;
    }
    this.removeAdmonitor(markdownView);
    if (this.settings.excludePrefixPathPatterns.some((p) => file.path.startsWith(p))) {
      return;
    }
    const lastUpdated = await this.findDate(file);
    if (!lastUpdated) {
      if (this.settings.showWarningIfDataIsNotFound) {
        this.insertAdmonitor(markdownView, "The date was not found", "error");
      }
      return;
    }
    const numberOfDays = (0, import_dayjs.default)().diff(lastUpdated, "day");
    if (numberOfDays >= this.settings.minNumberOfDaysToShowWarning) {
      const text = this.settings.messageTemplate.replace("${numberOfDays}", String(numberOfDays)).replace("${date}", lastUpdated.format("YYYY-MM-DD"));
      this.insertAdmonitor(markdownView, text, "warning");
    }
  }
  removeAdmonitor(markdownView) {
    var _a;
    (_a = markdownView.containerEl.find(`.${ADMONITOR_CLS}`)) == null ? void 0 : _a.remove();
  }
  insertAdmonitor(markdownView, text, type) {
    const cls = [ADMONITOR_CLS];
    switch (type) {
      case "warning":
        cls.push(ADMONITOR_WARNING_CLS);
        break;
      case "error":
        cls.push(ADMONITOR_ERR_CLS);
        break;
      default:
        throw new ExhaustiveError(type);
    }
    const el = createDiv({
      text,
      cls
    });
    markdownView.containerEl.find(".view-header").insertAdjacentElement("beforebegin", el);
  }
  async findDate(file) {
    switch (this.settings.dateToBeReferred) {
      case "Modified time":
        return (0, import_dayjs.default)(file.stat.mtime);
      case "Front matter":
        const fm = this.appHelper.getNoCacheFrontMatter(await app.vault.cachedRead(file));
        const df = fm == null ? void 0 : fm[this.settings.frontMatterKey];
        return df ? (0, import_dayjs.default)(df) : void 0;
      case "Capture group":
        const content = await app.vault.cachedRead(file);
        const pattern = new RegExp(this.settings.captureGroupPattern, "g");
        const dc = content.split("\n").map((line) => {
          var _a, _b;
          return (_b = (_a = Array.from(line.matchAll(pattern)).first()) == null ? void 0 : _a.groups) == null ? void 0 : _b.date;
        }).filter((x) => x).first();
        return dc ? (0, import_dayjs.default)(dc) : void 0;
      default:
        throw new ExhaustiveError(this.settings.dateToBeReferred);
    }
  }
};
