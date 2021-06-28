/*!
JW Player version 8.20.1
Copyright (c) 2021, JW Player, All Rights Reserved
This source code and its use and distribution is subject to the terms
and conditions of the applicable license agreement.
https://www.jwplayer.com/tos/
This product includes portions of other software. For the full text of licenses, see
https://ssl.p.jwpcdn.com/player/v/8.20.1/notice.txt
*/
(window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || []).push([
	[6, 2, 4, 5, 15], Array(69).concat([function(t, e, i) {
		"use strict";
		i.r(e);
		var n = {};
		i.r(n), i.d(n, "facebook", (function() {
			return rt
		})), i.d(n, "twitter", (function() {
			return st
		})), i.d(n, "linkedin", (function() {
			return lt
		})), i.d(n, "pinterest", (function() {
			return ct
		})), i.d(n, "reddit", (function() {
			return ut
		})), i.d(n, "tumblr", (function() {
			return dt
		})), i.d(n, "email", (function() {
			return ht
		})), i.d(n, "link", (function() {
			return pt
		})), i.d(n, "embed", (function() {
			return wt
		}));
		var a = i(4),
			o = i(3),
			r = i(9),
			s = i(52),
			l = i(7),
			c = i(18),
			u = i(74),
			d = i(125),
			h = i(123),
			p = i(126),
			w = function(t, e) {
				var i = t.featured,
					n = t.showLogo,
					a = t.type;
				return t.logo = n ? '<span class="jw-rightclick-logo jw-reset"></span>' : "", '<li class="jw-reset jw-rightclick-item ' + (i ? "jw-featured" : "") + '">' + f[a](t, e) + "</li>"
			},
			f = {
				link: function(t) {
					var e = t.link,
						i = t.title;
					return '<a href="' + (e || "") + '" class="jw-rightclick-link jw-reset-text" target="_blank" rel="noreferrer" dir="auto">' + t.logo + (i || "") + "</a>"
				},
				info: function(t, e) {
					return '<button type="button" class="jw-reset-text jw-rightclick-link jw-info-overlay-item" dir="auto">' + e.videoInfo + "</button>"
				},
				share: function(t, e) {
					return '<button type="button" class="jw-reset-text jw-rightclick-link jw-share-item" dir="auto">' + e.sharing.heading + "</button>"
				},
				keyboardShortcuts: function(t, e) {
					return '<button type="button" class="jw-reset-text jw-rightclick-link jw-shortcuts-item" dir="auto">' + e.shortcuts.keyboardShortcuts + "</button>"
				}
			},
			g = i(73),
			j = i(29),
			m = i(34),
			b = i(13),
			v = {
				free: 0,
				pro: 1,
				premium: 2,
				ads: 3,
				invalid: 4,
				enterprise: 6,
				trial: 7,
				platinum: 8,
				starter: 9,
				business: 10,
				developer: 11
			};

		function y(t) {
			var e = Object(l.e)(t),
				i = e.querySelector(".jw-rightclick-logo");
			return i && i.appendChild(Object(g.a)("jwplayer-logo")), e
		}
		var k = function(t) {
				var e, i;

				function n() {
					return t.apply(this, arguments) || this
				}
				i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
				var a = n.prototype;
				return a.buildArray = function() {
					var e = this.model,
						i = t.prototype.buildArray.call(this),
						n = e.get("localization").abouttext,
						a = i.items;
					if (n) {
						for (var o, r, s = 0; s < a.length; s++)
							if (a[s].featured) {
								r = a[s], o = s;
								break
							} if (r) {
							r.showLogo = !1;
							var l = {
								title: n,
								type: "link",
								link: e.get("aboutlink") || r.link
							};
							a[o] = l
						}
					}
					return this.shareHandler && a.unshift({
						type: "share"
					}), i
				}, a.enableSharing = function(t) {
					var e = this;
					this.shareHandler = function() {
						e.mouseOverContext = !1, e.hideMenu(), t()
					}
				}, a.addHideMenuHandlers = function() {
					t.prototype.addHideMenuHandlers.call(this);
					var e = this.el.querySelector(".jw-share-item");
					e && e.addEventListener("click", this.shareHandler)
				}, a.removeHideMenuHandlers = function() {
					if (t.prototype.removeHideMenuHandlers.call(this), this.el) {
						var e = this.el.querySelector(".jw-share-item");
						e && e.removeEventListener("click", this.shareHandler)
					}
				}, n
			}(function() {
				function t(t, e) {
					this.infoOverlay = t, this.shortcutsTooltip = e
				}
				var e = t.prototype;
				return e.buildArray = function() {
					var t = j.a.split("+")[0],
						e = this.model,
						i = e.get("edition"),
						n = e.get("localization").poweredBy,
						a = '<span class="jw-reset">JW Player ' + t + "</span>",
						o = {
							items: [{
								type: "info"
							}, {
								title: Object(b.g)(n) ? a + " " + n : n + " " + a,
								type: "link",
								featured: !0,
								showLogo: !0,
								link: "https://jwplayer.com/learn-more?e=" + v[i]
							}]
						},
						r = o.items;
					return this.shortcutsTooltip && r.splice(r.length - 1, 0, {
						type: "keyboardShortcuts"
					}), o
				}, e.rightClick = function(t) {
					if (this.lazySetup(), this.mouseOverContext) return !1;
					this.hideMenu(), this.showMenu(t), this.addHideMenuHandlers()
				}, e.getOffset = function(t) {
					var e = Object(l.c)(this.wrapperElement),
						i = t.pageX - e.left,
						n = t.pageY - e.top;
					return this.model.get("touchMode") && (n -= 100), {
						x: i,
						y: n
					}
				}, e.showMenu = function(t) {
					var e = this,
						i = this.getOffset(t);
					return this.el.style.left = i.x + "px", this.el.style.top = i.y + "px", this.outCount = 0, Object(l.a)(this.playerContainer, "jw-flag-rightclick-open"), Object(l.a)(this.el, "jw-open"), clearTimeout(this._menuTimeout), this._menuTimeout = setTimeout((function() {
						return e.hideMenu()
					}), 3e3), !1
				}, e.hideMenu = function(t) {
					t && this.el && this.el.contains(t.target) || (Object(l.o)(this.playerContainer, "jw-flag-rightclick-open"), Object(l.o)(this.el, "jw-open"))
				}, e.lazySetup = function() {
					var t, e, i, n = this,
						a = (t = this.buildArray(), e = this.model.get("localization"), '<div class="jw-rightclick jw-reset"><ul class="jw-rightclick-list jw-reset">' + (void 0 === (i = t.items) ? [] : i).map((function(t) {
							return w(t, e)
						})).join("") + "</ul></div>");
					if (this.el) {
						if (this.html !== a) {
							this.html = a;
							var o = y(a);
							Object(l.h)(this.el);
							for (var r = o.childNodes.length; r--;) this.el.appendChild(o.firstChild)
						}
					} else this.html = a, this.el = y(this.html), this.wrapperElement.appendChild(this.el), this.hideMenuHandler = function(t) {
						return n.hideMenu(t)
					}, this.overHandler = function() {
						n.mouseOverContext = !0
					}, this.outHandler = function(t) {
						n.mouseOverContext = !1, t.relatedTarget && !n.el.contains(t.relatedTarget) && ++n.outCount > 1 && n.hideMenu()
					}, this.infoOverlayHandler = function() {
						n.mouseOverContext = !1, n.hideMenu(), n.infoOverlay.open()
					}, this.shortcutsTooltipHandler = function() {
						n.mouseOverContext = !1, n.hideMenu(), n.shortcutsTooltip.open()
					}
				}, e.setup = function(t, e, i) {
					this.wrapperElement = i, this.model = t, this.mouseOverContext = !1, this.playerContainer = e, this.ui = new m.a(i).on("longPress", this.rightClick, this)
				}, e.addHideMenuHandlers = function() {
					this.removeHideMenuHandlers(), this.wrapperElement.addEventListener("touchstart", this.hideMenuHandler), document.addEventListener("touchstart", this.hideMenuHandler), a.OS.mobile || (this.wrapperElement.addEventListener("click", this.hideMenuHandler), document.addEventListener("click", this.hideMenuHandler), this.el.addEventListener("mouseover", this.overHandler), this.el.addEventListener("mouseout", this.outHandler)), this.el.querySelector(".jw-info-overlay-item").addEventListener("click", this.infoOverlayHandler), this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").addEventListener("click", this.shortcutsTooltipHandler)
				}, e.removeHideMenuHandlers = function() {
					this.wrapperElement && (this.wrapperElement.removeEventListener("click", this.hideMenuHandler), this.wrapperElement.removeEventListener("touchstart", this.hideMenuHandler)), this.el && (this.el.querySelector(".jw-info-overlay-item").removeEventListener("click", this.infoOverlayHandler), this.el.removeEventListener("mouseover", this.overHandler), this.el.removeEventListener("mouseout", this.outHandler), this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").removeEventListener("click", this.shortcutsTooltipHandler)), document.removeEventListener("click", this.hideMenuHandler), document.removeEventListener("touchstart", this.hideMenuHandler)
				}, e.destroy = function() {
					clearTimeout(this._menuTimeout), this.removeHideMenuHandlers(), this.el && (this.hideMenu(), this.hideMenuHandler = null, this.el = null), this.wrapperElement && (this.wrapperElement.oncontextmenu = null, this.wrapperElement = null), this.model && (this.model = null), this.ui && (this.ui.destroy(), this.ui = null)
				}, t
			}()),
			x = i(0),
			T = i(90),
			O = i(81),
			C = i(92),
			M = i(91),
			_ = i(79);

		function S(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function E(t, e, i, n) {
			if (t && "Auto" === t[0].label && i && i.items.length) {
				var a = i.items[0].el.querySelector(".jw-auto-label"),
					o = t[e.index] || {
						label: ""
					};
				a.textContent = n ? "" : o.label
			}
		}
		var A = function(t) {
				var e, i;

				function n(e, i, n, a) {
					var o, r, s, c;
					return (o = t.call(this, "settings", a.settings, null, a) || this).api = e, o.model = i, o.localization = a, o.controlbar = n, o.closeButton = function(t, e, i) {
						var n = Object(u.a)("jw-settings-close", e, i.close, [Object(g.a)("close")]);
						return n.show(), n.ui.on("keydown", (function(t) {
							var i = t.sourceEvent,
								n = Object(_.c)(i.key);
							("Enter" === n || "Right" === n || "Tab" === n && !i.shiftKey) && e(t)
						}), this), t.appendChild(n.element()), n
					}(o.el.querySelector(".jw-" + o.name + "-topbar-buttons"), o.close, a), o.backButtonTarget = null, o.defaultChild = null, o.topbar = (r = S(o), s = r.closeButton, c = r.el.querySelector(".jw-settings-topbar"), new m.a(c).on("keydown", (function(t) {
						var e, i, n = t.sourceEvent,
							a = t.target,
							o = Object(l.k)(a),
							c = Object(l.n)(a),
							u = function(e) {
								c ? e || c.focus() : r.close(t)
							};
						switch (Object(_.c)(n.key)) {
							case "Esc":
								r.close(t);
								break;
							case "Left":
								u();
								break;
							case "Right":
								o && s.element() && a !== s.element() && o.focus();
								break;
							case "Tab":
								n.shiftKey && u(!0);
								break;
							case "Up":
							case "Down":
							case "Enter":
								e = a.getAttribute("name"), !(i = r.children[e]) && e && r.backButtonTarget && (i = r.backButtonTarget.children[e]), i && i.open && i.open(t)
						}
						if (n.stopPropagation(), /13|32|37|38|39|40/.test(n.keyCode)) return n.preventDefault(), !1
					}))), o.onDocumentClick = o.onDocumentClick.bind(S(o)), o.addEventListeners(), o
				}
				i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
				var a = n.prototype;
				return a.setupMenu = function(t, e, i, n, a, o) {
					if (!i || i.length <= 1) this.removeMenu(t);
					else {
						var r = this.children[t];
						r || (r = new T.a(t, e, this, this.localization)), r.setMenuItems(r.createItems(i, n, o), a);
						var s = r.categoryButton && r.categoryButton.element();
						this.buttonContainer.firstChild === s && (this.defaultChild = r)
					}
				}, a.onLevels = function(t, e) {
					var i = this,
						n = {
							defaultText: this.localization.auto
						};
					this.setupMenu("quality", this.localization.hd, e, (function(t) {
						return i.api.setCurrentQuality(t)
					}), t.get("currentLevel") || 0, n)
				}, a.onCurrentLevel = function(t, e) {
					var i = this.children.quality,
						n = t.get("visualQuality");
					n && i && E(t.get("levels"), n.level, i, e), i.items[e].active || Object(_.d)(i, e)
				}, a.onVisualQuality = function(t, e) {
					var i = this.children.quality;
					e && i && E(t.get("levels"), e.level, i, t.get("currentLevel"))
				}, a.onAudioTracks = function(t, e) {
					var i = this;
					this.setupMenu("audioTracks", this.localization.audioTracks, e, (function(t) {
						return i.api.setCurrentAudioTrack(t)
					}), t.get("currentAudioTrack"))
				}, a.onAudioTrackIndex = function(t, e) {
					this.children.audioTracks && Object(_.d)(this.children.audioTracks, e)
				}, a.onCaptionsList = function(t, e) {
					var i = this,
						n = {
							defaultText: this.localization.off
						},
						a = t.get("captionsIndex");
					this.setupMenu("captions", this.localization.cc, e, (function(t) {
						return i.api.setCurrentCaptions(t)
					}), a, n);
					var o = this.children.captions;
					if (o && !o.children.captionsSettings) {
						o.topbar = o.topbar || o.createTopbar(), Object(l.h)(o.topbar);
						var r = this.localization.captionsStyles,
							s = new T.a("captionsSettings", r.subtitleSettings, o, this.localization),
							c = s.open;
						s.open = function(t) {
							var e = s.visible;
							c.call(s, t), e || i.trigger("captionStylesOpened")
						};
						var u = s.destroy;
						s.destroy = function(t) {
							o.topbar.parentNode.removeChild(o.topbar), o.topbar = null, o.topbarUI.destroy(), u.call(s, t)
						};
						var d = new O.a(this.localization.settings, s.open);
						o.topbar.appendChild(d.el);
						var h = t.get("captions");
						! function e(n) {
							var a = new O.a(i.localization.reset, (function() {
								i.model.set("captions", Object(x.j)({}, M.a)), e(!0)
							}));
							a.el.classList.add("jw-settings-reset");
							var o = [];
							Object(_.a)(r).forEach((function(e) {
								!n && h && h[e.name] ? e.val = h[e.name] : e.val = e.defaultVal;
								var a = e.values.indexOf(e.val);
								e.currentSelection = e.options[a];
								var r = new T.a(e.name, e.label, s, i.localization),
									l = new O.a(e, r.open, C.a),
									c = r.createItems(e.options, (function(n) {
										var a = l.el.querySelector(".jw-settings-content-item-value");
										! function(e, n) {
											var a = t.get("captions"),
												o = e.name,
												r = e.values[n],
												s = Object(x.j)({}, a);
											s[o] = r, i.model.set("captions", s)
										}(e, n), a.innerText = e.options[n]
									}), null);
								r.setMenuItems(c, e.values.indexOf(e.val) || 0), o.push(l)
							})), o.push(a), s.setMenuItems(o)
						}()
					}
				}, a.onPlaylistItem = function() {
					this.removeMenu("captions"), this.removeMenu("audioTracks"), this.removeMenu("quality"), this.controlbar.elements.captionsButton.hide(), this.visible && this.close()
				}, a.onCaptionsIndex = function(t, e) {
					var i = this.children.captions;
					i && Object(_.d)(i, e), this.controlbar.toggleCaptionsButtonState(!!e)
				}, a.onPlaybackRates = function(t, e) {
					var i = this;
					!e && t && (e = t.get("playbackRates"));
					var n = this.localization,
						a = this.children;
					if (t.get("supportsPlaybackRate") && "LIVE" !== t.get("streamType") && t.get("playbackRateControls")) {
						var o = e.indexOf(t.get("playbackRate")),
							r = {
								tooltipText: n.playbackRates
							};
						this.setupMenu("playbackRates", this.localization.playbackRates, e, (function(t) {
							return i.api.setPlaybackRate(t)
						}), o, r)
					} else a.playbackRates && this.removeMenu("playbackRates")
				}, a.onPlaybackRate = function(t, e) {
					var i = t.get("playbackRates"),
						n = -1;
					i && (n = i.indexOf(e)), Object(_.d)(this.children.playbackRates, n)
				}, a.onPlaybackRateControls = function(t) {
					this.onPlaybackRates(t)
				}, a.onCastActive = function(t, e, i) {
					e !== i && (e ? (this.removeMenu("audioTracks"), this.removeMenu("quality"), this.removeMenu("playbackRates"), this.children.captions && this.children.captions.removeMenu("captionsSettings")) : (this.onAudioTracks(t, t.get("audioTracks")), this.onLevels(t, t.get("levels")), this.onPlaybackRates(t, t.get("playbackRates")), this.onCaptionsList(t, t.get("captionsList"))))
				}, a.onChangeStreamType = function() {
					this.onPlaybackRates(this.model)
				}, a.onDocumentClick = function(t) {
					/jw-(settings|video|nextup-close|sharing-link|share-item)/.test(t.target.className) || this.close()
				}, a.addEventListeners = function() {
					var t = this.updateControlbarButtons,
						e = this.model;
					this.on("menuAppended menuRemoved", t, this), e.change("levels", this.onLevels, this), e.on("change:currentLevel", this.onCurrentLevel, this), e.on("change:visualQuality", this.onVisualQuality, this), e.change("audioTracks", this.onAudioTracks, this), e.on("change:currentAudioTrack", this.onAudioTrackIndex, this), e.change("captionsList", this.onCaptionsList, this), e.on("change:playlistItem", this.onPlaylistItem, this), e.change("captionsIndex", this.onCaptionsIndex, this), e.change("playbackRates", this.onPlaybackRates, this), e.change("playbackRate", this.onPlaybackRate, this), e.on("change:playbackRateControls", this.onPlaybackRateControls, this), e.on("change:castActive", this.onCastActive, this), e.on("change:streamType", this.onChangeStreamType, this)
				}, a.open = function(t) {
					this.visible || (this.el.parentNode.classList.add("jw-settings-open"), this.trigger("visibility", {
						visible: !0,
						evt: t
					}), document.addEventListener("click", this.onDocumentClick), this.el.setAttribute("aria-expanded", "true"), this.visible = !0)
				}, a.close = function(t) {
					this.el.parentNode.classList.remove("jw-settings-open"), this.trigger("visibility", {
						visible: !1,
						evt: t
					}), document.removeEventListener("click", this.onDocumentClick), this.visible = !1, this.openMenus.length && this.closeChildren();
					var e, i = Object(_.c)(t && t.sourceEvent && t.sourceEvent.key),
						n = this.controlbar.elements.settingsButton.element();
					switch (i) {
						case "Right":
							e = Object(l.k)(n);
							break;
						case "Left":
							e = Object(l.n)(n);
							break;
						case "Tab":
							if (t.shiftKey) {
								e = Object(l.n)(n);
								break
							}
							e = n
					}
					e && e.focus({
						preventScroll: !event
					})
				}, a.updateControlbarButtons = function(t) {
					var e = this.children,
						i = this.controlbar,
						n = this.model,
						a = !!e.quality || !!e.playbackRates || !!e.audioTracks || Object.keys(e).length > 1;
					i.elements.settingsButton.toggle(a), e.captions && i.toggleCaptionsButtonState(!!n.get("captionsIndex"));
					var o = i.elements[t + "Button"];
					if (o) {
						var r = !!e[t];
						o.toggle(r)
					}
				}, a.destroy = function() {
					_.b.call(this), document.removeEventListener("click", this.onDocumentClick)
				}, n
			}(T.a),
			L = i(85),
			I = i(43),
			z = i(14),
			P = i(12),
			B = function(t, e, i, n) {
				var a = Object(l.e)('<div class="jw-reset jw-info-overlay jw-modal"><div class="jw-reset jw-info-container"><div class="jw-reset-text jw-info-title" dir="auto"></div><div class="jw-reset-text jw-info-duration" dir="auto"></div><div class="jw-reset-text jw-info-description" dir="auto"></div></div><div class="jw-reset jw-info-clientid"></div></div>'),
					r = !1,
					s = null,
					c = !1,
					d = function(t) {
						/jw-info/.test(t.target.className) || p.close()
					},
					h = function() {
						var n, o, s, c, d, h = Object(u.a)("jw-info-close", (function() {
							p.close()
						}), e.get("localization").close, [Object(g.a)("close")]);
						h.show(), Object(l.m)(a, h.element()), o = a.querySelector(".jw-info-title"), s = a.querySelector(".jw-info-duration"), c = a.querySelector(".jw-info-description"), d = a.querySelector(".jw-info-clientid"), e.change("playlistItem", (function(t, e) {
							var i = e.description,
								n = e.title;
							Object(l.q)(c, i || ""), Object(l.q)(o, n || "Unknown Title")
						})), e.change("duration", (function(t, i) {
							var n = "";
							switch (e.get("streamType")) {
								case "LIVE":
									n = "Live";
									break;
								case "DVR":
									n = "DVR";
									break;
								default:
									i && (n = Object(P.timeFormat)(i))
							}
							s.textContent = n
						}), p), d.textContent = (n = i.getPlugin("jwpsrv")) && "function" == typeof n.doNotTrackUser && n.doNotTrackUser() ? "" : "Client ID: " + function() {
							try {
								return window.localStorage.jwplayerLocalId
							} catch (t) {
								return "none"
							}
						}(), t.appendChild(a), r = !0
					};
				var p = {
					open: function() {
						r || h(), document.addEventListener("click", d), c = !0;
						var t = e.get("state");
						t === o.qb && i.pause("infoOverlayInteraction"), s = t, n(!0)
					},
					close: function() {
						document.removeEventListener("click", d), c = !1, e.get("state") === o.pb && s === o.qb && i.play("infoOverlayInteraction"), s = null, n(!1)
					},
					destroy: function() {
						this.close(), e.off(null, null, this)
					}
				};
				return Object.defineProperties(p, {
					visible: {
						enumerable: !0,
						get: function() {
							return c
						}
					}
				}), p
			};
		var R = function(t, e, i, n) {
			var a, r = !1,
				s = null,
				c = i.get("localization").shortcuts,
				d = Object(l.e)(function(t, e) {
					return '<div class="jw-shortcuts-tooltip jw-modal jw-reset" title="' + e + '"><span class="jw-hidden" id="jw-shortcuts-tooltip-explanation">Press shift question mark to access a list of keyboard shortcuts</span><div class="jw-reset jw-shortcuts-container"><div class="jw-reset jw-shortcuts-header"><span class="jw-reset jw-shortcuts-title">' + e + '</span><button role="switch" aria-label="' + e + '" class="jw-reset jw-switch"><span class="jw-reset jw-switch-knob"></span><span class="jw-reset-text jw-switch-enabled">Enabled</span><span class="jw-reset-text jw-switch-disabled">Disabled</span></button></div><div class="jw-reset jw-shortcuts-tooltip-list"><div class="jw-shortcuts-tooltip-descriptions jw-reset">' + t.map((function(t) {
						return '<div class="jw-shortcuts-row jw-reset"><span class="jw-shortcuts-description jw-reset">' + t.description + '</span><span class="jw-shortcuts-key jw-reset">' + t.key + "</span></div>"
					})).join("") + "</div></div></div></div>"
				}(function(t) {
					var e = t.playPause,
						i = t.volumeToggle,
						n = t.fullscreenToggle,
						a = t.seekPercent,
						o = t.increaseVolume,
						r = t.decreaseVolume,
						s = t.seekForward,
						l = t.seekBackward;
					return [{
						key: t.spacebar,
						description: e
					}, {
						key: "â†‘",
						description: o
					}, {
						key: "â†“",
						description: r
					}, {
						key: "â†’",
						description: s
					}, {
						key: "â†",
						description: l
					}, {
						key: "c",
						description: t.captionsToggle
					}, {
						key: "f",
						description: n
					}, {
						key: "m",
						description: i
					}, {
						key: "0-9",
						description: a
					}]
				}(c), c.keyboardShortcuts)),
				h = {
					reason: "settingsInteraction"
				},
				p = new m.a(d.querySelector(".jw-switch")),
				w = function() {
					p.el.setAttribute("aria-checked", i.get("enableShortcuts")), Object(l.a)(d, "jw-open"), s = i.get("state"), d.querySelector(".jw-shortcuts-close").focus(), document.addEventListener("click", j), r = !0, e.pause(h), n(!0)
				},
				f = function() {
					Object(l.o)(d, "jw-open"), document.removeEventListener("click", j), r = !1, s === o.qb && e.play(h), n(!1)
				},
				j = function(t) {
					var e = t.target;
					/jw-shortcuts|jw-switch/.test(e.className) || f()
				},
				b = function(t) {
					var e = t.currentTarget,
						n = "true" !== e.getAttribute("aria-checked");
					e.setAttribute("aria-checked", n.toString()), i.set("enableShortcuts", n)
				};
			return a = Object(u.a)("jw-shortcuts-close", f, i.get("localization").close, [Object(g.a)("close")]), Object(l.m)(d, a.element()), a.show(), t.appendChild(d), p.on("click tap enter", b), {
				el: d,
				open: w,
				close: f,
				destroy: function() {
					f(), p.destroy()
				},
				toggleVisibility: function() {
					r ? f() : w()
				}
			}
		};
		var F = function(t) {
			var e, i;

			function n(e, i) {
				var n;
				return (n = t.call(this) || this).element = Object(l.e)(function(t) {
					return '<div class="jw-float-icon jw-icon jw-button-color jw-reset" aria-label=' + t + ' tabindex="0"></div>'
				}(i)), n.element.appendChild(Object(g.a)("close")), n.ui = new m.a(n.element, {
					directSelect: !0
				}).on("click tap enter", (function() {
					n.trigger(o.vb)
				})), e.appendChild(n.element), n
			}
			return i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i, n.prototype.destroy = function() {
				this.element && (this.ui.destroy(), this.element.parentNode.removeChild(this.element), this.element = null)
			}, n
		}(r.a);
		i(128), i(130);
		var V = a.OS.mobile ? 4e3 : 2e3,
			H = [27];
		I.a.cloneIcon = g.a, z.a.forEach((function(t) {
			if (t.getState() === o.mb) {
				var e = t.getContainer().querySelector(".jw-error-msg .jw-icon");
				e && !e.hasChildNodes() && e.appendChild(I.a.cloneIcon("error"))
			}
		}));
		var N = function(t) {
				var e, i;

				function n(e, i) {
					var n;
					return (n = t.call(this) || this).activeTimeout = -1, n.inactiveTime = 0, n.context = e, n.controlbar = null, n.displayContainer = null, n.backdrop = null, n.enabled = !0, n.instreamState = null, n.keydownCallback = null, n.keyupCallback = null, n.blurCallback = null, n.mute = null, n.nextUpToolTip = null, n.playerContainer = i, n.wrapperElement = i.querySelector(".jw-wrapper"), n.rightClickMenu = null, n.settingsMenu = null, n.shortcutsTooltip = null, n.showing = !1, n.muteChangeCallback = null, n.unmuteCallback = null, n.logo = null, n.div = null, n.dimensions = {}, n.infoOverlay = null, n.userInactiveTimeout = function() {
						var t = n.inactiveTime - Object(c.a)();
						n.inactiveTime && t > 16 ? n.activeTimeout = setTimeout(n.userInactiveTimeout, t) : n.playerContainer.querySelector(".jw-tab-focus") ? n.resetActiveTimeout() : n.userInactive()
					}, n
				}
				i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
				var r = n.prototype;
				return r.resetActiveTimeout = function() {
					clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.inactiveTime = 0
				}, r.enable = function(t, e) {
					var i = this,
						n = this.context.createElement("div");
					n.className = "jw-controls jw-reset", this.div = n;
					var r = this.context.createElement("div");
					r.className = "jw-controls-backdrop jw-reset", this.backdrop = r, this.logo = this.playerContainer.querySelector(".jw-logo");
					var c = e.get("touchMode");
					if (this.focusPlayerElement = function() {
							e.get("isFloating") ? i.wrapperElement.querySelector("video").focus({
								preventScroll: !0
							}) : i.playerContainer.focus({
								preventScroll: !0
							})
						}, !this.displayContainer) {
						var w = new h.a(e, t);
						w.buttons.display.on("click tap enter", (function() {
							i.trigger(o.q), i.userActive(1e3), t.playToggle({
								reason: "interaction"
							}), i.focusPlayerElement()
						})), this.div.appendChild(w.element()), this.displayContainer = w
					}
					this.infoOverlay = new B(n, e, t, (function(t) {
						Object(l.v)(i.div, "jw-info-open", t), t ? i.div.querySelector(".jw-info-close").focus() : i.focusPlayerElement()
					})), a.OS.mobile || (this.shortcutsTooltip = new R(this.wrapperElement, t, e, (function(t) {
						t || i.focusPlayerElement()
					}))), this.rightClickMenu = new k(this.infoOverlay, this.shortcutsTooltip), c && Object(l.a)(this.playerContainer, "jw-flag-touch"), this.rightClickMenu.setup(e, this.playerContainer, this.wrapperElement);
					var f = e.get("floating");
					if (f) {
						var j = new F(n, e.get("localization").close);
						j.on(o.vb, (function() {
							return i.trigger("dismissFloating", {
								doNotForward: !0
							})
						})), !1 !== f.dismissible && Object(l.a)(this.playerContainer, "jw-floating-dismissible")
					}
					var m = this.controlbar = new d.a(t, e, this.playerContainer.querySelector(".jw-hidden-accessibility"));
					if (m.on(o.vb, (function() {
							i.off("userInactive", i.focusPlayerElement, i), i.once("userInactive", i.focusPlayerElement, i), i.userActive()
						})), m.on("nextShown", (function(t) {
							this.trigger("nextShown", t)
						}), this), m.on("adjustVolume", C, this), e.get("nextUpDisplay") && !m.nextUpToolTip) {
						var b = new p.a(e, t, this.playerContainer);
						b.on("all", this.trigger, this), b.setup(this.context), m.nextUpToolTip = b, this.div.appendChild(b.element())
					}
					this.div.appendChild(m.element());
					var v = e.get("localization"),
						y = this.settingsMenu = new A(t, e.player, this.controlbar, v),
						x = null;
					y.on("menuVisibility", (function(n) {
						var a = n.visible,
							r = n.evt,
							s = e.get("state"),
							l = {
								reason: "settingsInteraction"
							},
							c = i.controlbar.elements.settingsButton,
							u = "keydown" === (r && r.sourceEvent || r || {}).type,
							d = a || u ? 0 : V;
						i.userActive(d), Object(L.a)(e.get("containerWidth")) < 2 && (a && s === o.qb ? t.pause(l) : a || s !== o.pb || x !== o.qb || t.play(l)), x = s, !a && u && c ? c.element().focus() : r && i.focusPlayerElement()
					})), y.on("captionStylesOpened", (function() {
						return i.trigger("captionStylesOpened")
					})), m.on("settingsInteraction", (function(t, e, i) {
						if (e) return y.defaultChild.toggle(i, !0);
						y.children[t].toggle(i)
					})), a.OS.mobile ? this.div.appendChild(y.el) : (this.playerContainer.setAttribute("aria-describedby", "jw-shortcuts-tooltip-explanation"), this.div.insertBefore(y.el, m.element()));
					var T = function(e) {
						if (e.get("autostartMuted")) {
							var n = function() {
									return i.unmuteAutoplay(t, e)
								},
								o = function(t, e) {
									e || n()
								};
							a.OS.mobile && (i.mute = Object(u.a)("jw-autostart-mute jw-off", n, e.get("localization").unmute, [Object(g.a)("volume-0")]), i.mute.show(), i.div.appendChild(i.mute.element())), m.renderVolume(!0, e.get("volume")), Object(l.a)(i.playerContainer, "jw-flag-autostart"), e.on("change:autostartFailed", n, i), e.on("change:autostartMuted change:mute", o, i), i.muteChangeCallback = o, i.unmuteCallback = n
						}
					};

					function O(i) {
						var n = 0,
							a = e.get("duration"),
							o = e.get("position");
						if ("DVR" === e.get("streamType")) {
							var r = e.get("dvrSeekLimit");
							n = a, a = Math.max(o, -r)
						}
						var l = Object(s.a)(o + i, n, a);
						t.seek(l, {
							reason: "interaction"
						})
					}

					function C(i) {
						var n = Object(s.a)(e.get("volume") + i, 0, 100);
						t.setVolume(n)
					}
					e.once("change:autostartMuted", T), T(e);
					var M = function(n) {
						if (n.ctrlKey || n.metaKey) return !0;
						var a = !i.settingsMenu || !i.settingsMenu.visible,
							o = !0 === e.get("enableShortcuts"),
							r = i.instreamState;
						if (o || -1 !== H.indexOf(n.keyCode)) {
							switch (n.keyCode) {
								case 27:
									if (e.get("fullscreen")) t.setFullscreen(!1), i.playerContainer.blur(), i.userInactive();
									else {
										var s = t.getPlugin("related");
										s && s.close({
											type: "escape"
										})
									}
									i.rightClickMenu.el && i.rightClickMenu.hideMenuHandler(), i.infoOverlay.visible && i.infoOverlay.close(), i.shortcutsTooltip && i.shortcutsTooltip.close();
									break;
								case 13:
								case 32:
									if (document.activeElement.classList.contains("jw-switch") && 13 === n.keyCode) return !0;
									t.playToggle({
										reason: "interaction"
									});
									break;
								case 37:
									!r && a && O(-5);
									break;
								case 39:
									!r && a && O(5);
									break;
								case 38:
									a && C(10);
									break;
								case 40:
									a && C(-10);
									break;
								case 67:
									var l = t.getCaptionsList().length;
									if (l) {
										var c = (t.getCurrentCaptions() + 1) % l;
										t.setCurrentCaptions(c)
									}
									break;
								case 77:
									t.setMute();
									break;
								case 70:
									t.setFullscreen();
									break;
								case 191:
									i.shortcutsTooltip && i.shortcutsTooltip.toggleVisibility();
									break;
								default:
									if (n.keyCode >= 48 && n.keyCode <= 59) {
										var u = (n.keyCode - 48) / 10 * e.get("duration");
										t.seek(u, {
											reason: "interaction"
										})
									}
							}
							return /13|32|37|38|39|40/.test(n.keyCode) ? (n.preventDefault(), !1) : void 0
						}
					};
					this.playerContainer.addEventListener("keydown", M), this.keydownCallback = M;
					var _ = function(t) {
						switch (t.keyCode) {
							case 9:
								var e = i.playerContainer.contains(t.target) ? 0 : V;
								i.userActive(e);
								break;
							case 32:
								t.preventDefault()
						}
					};
					this.playerContainer.addEventListener("keyup", _), this.keyupCallback = _;
					var S = function(t) {
						i.off("userInactive", i.focusPlayerElement, i);
						var e = t.relatedTarget || document.querySelector(":focus");
						e && (i.playerContainer.contains(e) || i.userInactive())
					};
					this.playerContainer.addEventListener("blur", S, !0), this.blurCallback = S;
					var E = function t() {
						"jw-shortcuts-tooltip-explanation" === i.playerContainer.getAttribute("aria-describedby") && i.playerContainer.removeAttribute("aria-describedby"), i.playerContainer.removeEventListener("blur", t, !0)
					};
					this.shortcutsTooltip && (this.playerContainer.addEventListener("blur", E, !0), this.onRemoveShortcutsDescription = E), this.userActive(), this.addControls(), this.addBackdrop(), e.set("controlsEnabled", !0)
				}, r.addControls = function() {
					this.wrapperElement.appendChild(this.div)
				}, r.disable = function(t) {
					var e = this.nextUpToolTip,
						i = this.settingsMenu,
						n = this.infoOverlay,
						a = this.controlbar,
						o = this.rightClickMenu,
						r = this.shortcutsTooltip,
						s = this.playerContainer,
						c = this.div;
					clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.off(), t.off(null, null, this), t.set("controlsEnabled", !1), c.parentNode && (Object(l.o)(s, "jw-flag-touch"), c.parentNode.removeChild(c)), a && a.destroy(), o && o.destroy(), this.keydownCallback && s.removeEventListener("keydown", this.keydownCallback), this.keyupCallback && s.removeEventListener("keyup", this.keyupCallback), this.blurCallback && s.removeEventListener("blur", this.blurCallback), this.onRemoveShortcutsDescription && s.removeEventListener("blur", this.onRemoveShortcutsDescription), this.displayContainer && this.displayContainer.destroy(), e && e.destroy(), i && i.destroy(), n && n.destroy(), r && r.destroy(), this.removeBackdrop()
				}, r.controlbarHeight = function() {
					return this.dimensions.cbHeight || (this.dimensions.cbHeight = this.controlbar.element().clientHeight), this.dimensions.cbHeight
				}, r.element = function() {
					return this.div
				}, r.resize = function() {
					this.dimensions = {}
				}, r.unmuteAutoplay = function(t, e) {
					var i = !e.get("autostartFailed"),
						n = e.get("mute");
					i ? n = !1 : e.set("playOnViewable", !1), this.muteChangeCallback && (e.off("change:autostartMuted change:mute", this.muteChangeCallback), this.muteChangeCallback = null), this.unmuteCallback && (e.off("change:autostartFailed", this.unmuteCallback), this.unmuteCallback = null), e.set("autostartFailed", void 0), e.set("autostartMuted", void 0), t.setMute(n), this.controlbar.renderVolume(n, e.get("volume")), this.mute && this.mute.hide(), Object(l.o)(this.playerContainer, "jw-flag-autostart"), this.userActive()
				}, r.mouseMove = function(t) {
					var e = this.controlbar.element().contains(t.target),
						i = this.controlbar.nextUpToolTip && this.controlbar.nextUpToolTip.element().contains(t.target),
						n = this.logo && this.logo.contains(t.target),
						a = e || i || n ? 0 : V;
					this.userActive(a)
				}, r.userActive = function(t) {
					void 0 === t && (t = V), t > 0 ? (this.inactiveTime = Object(c.a)() + t, -1 === this.activeTimeout && (this.activeTimeout = setTimeout(this.userInactiveTimeout, t))) : this.resetActiveTimeout(), this.showing || (Object(l.o)(this.playerContainer, "jw-flag-user-inactive"), this.showing = !0, this.trigger("userActive"))
				}, r.userInactive = function() {
					clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.settingsMenu.visible || (this.inactiveTime = 0, this.showing = !1, Object(l.a)(this.playerContainer, "jw-flag-user-inactive"), this.trigger("userInactive"))
				}, r.addBackdrop = function() {
					var t = this.instreamState ? this.div : this.wrapperElement.querySelector(".jw-captions");
					this.wrapperElement.insertBefore(this.backdrop, t)
				}, r.removeBackdrop = function() {
					var t = this.backdrop.parentNode;
					t && t.removeChild(this.backdrop)
				}, r.setupInstream = function() {
					this.instreamState = !0, this.userActive(), this.addBackdrop(), this.settingsMenu && this.settingsMenu.close(), Object(l.o)(this.playerContainer, "jw-flag-autostart"), this.controlbar.elements.time.element().setAttribute("tabindex", "-1")
				}, r.destroyInstream = function(t) {
					this.instreamState = null, this.addBackdrop(), t.get("autostartMuted") && Object(l.a)(this.playerContainer, "jw-flag-autostart"), this.controlbar.elements.time.element().setAttribute("tabindex", "0")
				}, n
			}(r.a),
			D = i(131),
			q = i.n(D),
			U = i(132),
			W = i.n(U),
			X = i(133),
			Y = i.n(X),
			Z = i(134),
			Q = i.n(Z),
			K = i(135),
			G = i.n(K),
			J = i(136),
			$ = i.n(J),
			tt = i(137),
			et = i.n(tt),
			it = i(138),
			nt = i.n(it),
			at = i(139),
			ot = i.n(at),
			rt = {
				label: "facebook",
				src: "http://www.facebook.com/sharer/sharer.php?u=[URL]",
				svg: q.a,
				jwsource: "fb"
			},
			st = {
				label: "twitter",
				src: "http://twitter.com/intent/tweet?url=[URL]",
				svg: $.a,
				jwsource: "twi"
			},
			lt = {
				label: "linkedin",
				src: "https://www.linkedin.com/cws/share?url=[URL]",
				svg: W.a,
				jwsource: "lkn"
			},
			ct = {
				label: "pinterest",
				src: "http://pinterest.com/pin/create/button/?url=[URL]",
				svg: Y.a,
				jwsource: "pin"
			},
			ut = {
				label: "reddit",
				src: "http://www.reddit.com/submit?url=[URL]",
				svg: Q.a,
				jwsource: "rdt"
			},
			dt = {
				label: "tumblr",
				src: "http://tumblr.com/widgets/share/tool?canonicalUrl=[URL]",
				svg: G.a,
				jwsource: "tbr"
			},
			ht = {
				label: "email",
				src: "mailto:?body=[URL]",
				svg: et.a,
				jwsource: "em"
			},
			pt = {
				label: "link",
				svg: nt.a,
				jwsource: "cl"
			},
			wt = {
				label: "embed",
				svg: ot.a,
				jwsource: "ceb"
			},
			ft = i(93),
			gt = i.n(ft),
			jt = !1,
			mt = function(t, e, a, o) {
				Object(x.j)(this, r.a);
				var s, c, u = this,
					d = [rt, st, ht];

				function h(t, e) {
					var i = t.indexOf("MEDIAID");
					return i > 0 && e ? t.replace("MEDIAID", e) : -1 === i ? t : void 0
				}

				function p(t) {
					a.trigger("settingsInteraction", "sharing", !1, t)
				}

				function w() {
					var i = t.getPlaylistItem(),
						n = d.filter((function(t) {
							return "link" === t.label
						}))[0];
					s = function(t) {
						var i = window.location.toString();
						if (window.top !== window && (i = document.referrer), e.link) {
							var n = h(e.link, t);
							i = n || i
						}
						return i
					}(i.mediaid), n ? -1 === n.src.indexOf(s) && (n.src = s) : d.push(Object(x.j)({
						src: f(s, pt.jwsource)
					}, pt));
					var a = d.filter((function(t) {
						return "embed" === t.label
					}));
					c = function(t) {
						var i = null;
						if (e.code) {
							var n = h(e.code, t);
							i = n || i
						}
						return i
					}(i.mediaid) || e.code, a[0] ? a[0].src = decodeURIComponent(c) : e.code && d.push(Object(x.j)({
						src: decodeURIComponent(c)
					}, wt))
				}

				function f(t, e) {
					var i = /([?&]jwsource)=?[^&]*/;
					if (i.test(t)) return t.replace(i, "$1=" + e);
					var n = -1 === t.indexOf("?") ? "?" : "&";
					return "" + t + n + "jwsource=" + e
				}

				function g(t) {
					u.trigger("click", {
						method: t
					})
				}
				return function() {
					if (Array.isArray(e.sites)) {
						var i = [];
						Object(x.i)(e.sites, (function(t) {
							Object(x.x)(t) && n[t] ? i.push(n[t]) : Object(x.w)(t) && i.push(t)
						})), d = i
					}
					t.addButton(gt.a, o, p, "share", "jw-settings-sharing");
					var r = a.el.querySelector(".jw-settings-sharing");
					r.setAttribute("aria-haspopup", "true"), r.setAttribute("aria-controls", "jw-settings-submenu-sharing")
				}(), this.getShareMethods = function() {
					return w(), d
				}, this.getHeading = function() {
					return o
				}, this.onSubmenuToggle = function(t, e) {
					void 0 === e && (e = "interaction"), t && !jt && (jt = !0, i(140)), u.trigger(t ? "open" : "close", {
						visible: t,
						method: e
					})
				}, this.action = function(e) {
					var i = d[e].label;
					"embed" !== i && "link" !== i ? function(e) {
						var i = e.src;
						if (Object(x.t)(i)) i(s);
						else if (null != i) {
							var n = encodeURIComponent(f(s, e.jwsource || "share")),
								a = i.replace(/\[URL\]/gi, n);
							i === a && (a = i + n), t.pause({
								reason: "sharing"
							}), Object(l.l)(a, "_blank", {
								rel: "noreferrer"
							}), window.focus()
						}
						g(e.label)
					}(d[e]) : g(i)
				}, this.open = function() {
					a.trigger("sharingApi", !0)
				}, this.close = function() {
					a.trigger("sharingApi", !1)
				}, this
			},
			bt = i(2),
			vt = function(t, e) {
				var i = Object(l.e)('<div class="jw-skip jw-reset" tabindex="0" role="button"><span class="jw-text jw-skiptext jw-reset"></span><span class="jw-icon jw-icon-inline jw-skip-icon jw-reset"></span></div>');
				i.querySelector(".jw-icon").appendChild(Object(g.a)("next")), this.el = i, this.skiptext = this.el.querySelector(".jw-skiptext"), this.skipUI = new m.a(this.el).on("click tap enter", this.skipAd, this), this.model = t, this.skipMessage = t.get("skipText") || "", this.skipMessageCountdown = t.get("skipMessage") || "", this.waitTime = Object(bt.d)(t.get("skipOffset")), t.change("duration", (function(i, n) {
					n && (this.waitTime || (this.waitTime = Object(bt.d)(i.get("skipOffset"), n)), this.el.parentNode !== e && this.waitTime + 2 < n && (t.change("position", (function(t, e) {
						var i = this.waitTime - (e || 0);
						i > 0 ? this.updateMessage(this.skipMessageCountdown.replace(/(\b)xx(s?\b)/gi, "$1" + Math.ceil(i) + "$2")) : null !== this.waitTime && (this.updateMessage(this.skipMessage), this.skippable = !0, Object(l.a)(this.el, "jw-skippable"))
					}), this), e.appendChild(this.el)))
				}), this)
			};
		Object(x.j)(vt.prototype, r.a, {
			updateMessage: function(t) {
				Object(l.q)(this.skiptext, t), this.el.setAttribute("aria-label", t)
			},
			skipAd: function() {
				this.skippable && (this.skipUI.off(), this.trigger(o.e))
			},
			destroy: function() {
				this.model.off(null, null, this), this.skipUI && this.skipUI.destroy(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
			}
		});
		var yt = vt,
			kt = function(t, e, i) {
				this.api = t, this.playerElement = e, this.wrapperElement = i
			};
		Object(x.j)(kt.prototype, {
			setup: function(t) {
				var e = this;
				this.element = Object(l.e)(function(t) {
					return '<div class="jw-dismiss-icon jw-icon jw-reset" aria-label=' + t + ' tabindex="0"></div>'
				}(t)), this.element.appendChild(Object(g.a)("close")), this.ui = new m.a(this.element).on("click tap enter", (function() {
					e.api.remove()
				}), this), this.wrapperElement.insertBefore(this.element, this.wrapperElement.firstChild), Object(l.a)(this.playerElement, "jw-flag-top")
			},
			destroy: function() {
				this.element && (this.ui.destroy(), this.wrapperElement.removeChild(this.element), this.element = null)
			}
		});
		var xt = kt,
			Tt = function(t) {
				var e = t.label,
					i = t.src,
					n = t.options,
					a = t.displayText,
					o = t.svg,
					r = void 0 === o ? "" : o,
					s = t.icon,
					l = void 0 === s ? "" : s,
					c = l ? '<img src="' + l + '" class="jw-svg-icon"/>' : r;
				return "link" === e || "embed" === e ? '<div class="jw-reset jw-settings-content-item jw-sharing-copy"><button class="jw-reset jw-sharing-link" aria-checked="false" type="button" role="button">' + c + " " + (a || e) + '</button><textarea readonly="true" class="jw-reset jw-sharing-textarea">' + i + '</textarea><div class="jw-reset jw-tooltip jw-tooltip-sharing-' + (a || e) + '"><div class="jw-text">' + n.copyText + "</div></div></div>" : '<button class="jw-reset jw-settings-content-item jw-sharing-link" aria-checked="false" type="button" role="button">' + c + " " + (a || e) + "</button>"
			};
		var Ot = function(t) {
			var e, i;

			function n(e, i, n) {
				var a;
				return void 0 === n && (n = Tt), (a = t.call(this, e, i, n) || this).content = e, a.el && e.label ? (a.el.setAttribute("aria-label", e.label), a.el.setAttribute("role", "button"), a.el.setAttribute("tabindex", "0"), a) : function(t) {
					if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t
				}(a)
			}
			i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
			var a = n.prototype;
			return a.activate = function() {
				if ("embed" === this.content.label || "link" === this.content.label) {
					var t = this.el.querySelector(".jw-sharing-textarea");
					if (t.select(), document.execCommand("copy")) {
						var e = t.nextSibling;
						Object(l.a)(e, "jw-open"), setTimeout((function() {
							Object(l.o)(e, "jw-open")
						}), 1e3)
					} else window.prompt("Copy the text below", this.content.src);
					t.blur()
				}
			}, a.destroy = function() {
				this.ui.destroy()
			}, n
		}(O.a);
		var Ct = function(t) {
			var e, i;

			function n() {
				return t.apply(this, arguments) || this
			}
			i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
			var a = n.prototype;
			return a.createCategoryButton = function() {
				return "sharing" === this.name && (this.icon = gt.a), t.prototype.createCategoryButton.call(this, this.title)
			}, a.createItems = function(e, i, n, a) {
				return "sharing" === this.name && (a = Ot), t.prototype.createItems.apply(this, [e, i, n, a])
			}, n
		}(T.a);
		var Mt = function(t) {
			var e, i;

			function n(e, i) {
				var n;
				return (n = t.call(this, e, i) || this).playerContainer = i, n.sharing = null, n.sharingApi = !1, n.dismissButton = null, n.skipButton = null, n
			}
			i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
			var a = n.prototype;
			return a.disable = function(e) {
				t.prototype.disable.call(this, e), this.dismissButton && (this.dismissButton.destroy(), this.dismissButton = null)
			}, a.enable = function(e, i) {
				var n = this;
				t.prototype.enable.call(this, e, i), i.change("instream", (function() {
					n._destroySkipButton()
				})), i.change("skipButton", (function(t, i) {
					n._destroySkipButton(), i && (n.skipButton = new yt(t, n.div), n.skipButton.on(o.e, (function() {
						t.set("skipButton", !1), e.skipAd()
					})), n.controlbar.adSkipButton = n.skipButton)
				}));
				var a = i.get("localization"),
					r = i.get("advertising");
				r && r.outstream && r.dismissible && (this.dismissButton = new xt(e, this.playerContainer, this.playerContainer.querySelector(".jw-top")), this.dismissButton.setup(a.close));
				var s = i.get("sharing");
				if (!this.sharing && s) {
					var l = this.controlbar,
						c = this.settingsMenu,
						u = a.sharing;
					this.sharing = new mt(e, s, l, u.heading), e.addPlugin("sharing", this.sharing), i.change("playlistItem", (function() {
						var t = n.sharing.getShareMethods().map((function(t) {
							var e = u[t.label];
							return e && (t.displayText = e), t
						}));
						c.removeMenu("sharing");
						var e = new Ct("sharing", a.sharing.heading, c, a),
							i = e.open,
							o = e.close,
							r = a.sharing.copied;
						e.open = function(t) {
							e.visible || n._onSharingActive(!0), i(t)
						}, e.close = function(t) {
							e.visible && n._onSharingActive(!1), o(t)
						}, e.setMenuItems(e.createItems(t, n.sharing.action, {
							copyText: r
						})), e.el.classList.add("jw-sharing-menu")
					})), this._addSharingApiEvent(l, c), this.rightClickMenu.enableSharing(this.sharing.open)
				}
			}, a._destroySkipButton = function() {
				this.skipButton && (this.skipButton.destroy(), this.skipButton = null, this.controlbar.adSkipButton = null)
			}, a._addSharingApiEvent = function(t, e) {
				var i = this;
				t.on("sharingApi", (function(t) {
					var n = e.children.sharing;
					n && (i.sharingApi = !0, t && !n.visible ? (e.children.sharing.open(), i.sharing.onSubmenuToggle(!0, "api")) : !t && n.visible && (e.close(), i.sharing.onSubmenuToggle(!1, "api")))
				}))
			}, a._onSharingActive = function(t) {
				this.sharingApi ? this.sharingApi = !1 : this.sharing.onSubmenuToggle(t)
			}, n
		}(N);
		e.default = Mt
	}, , function(t, e, i) {
		"use strict";
		i.r(e);
		var n = i(37),
			a = i(3),
			o = i(0),
			r = i(14),
			s = i(64),
			l = i(44),
			c = ["notVisible", "always", "never"];
		var u = i(55),
			d = i(59),
			h = i(23),
			p = i(56),
			w = i(2),
			f = i(9),
			g = i(42);

		function j(t) {
			var e = !1;
			return {
				async: function() {
					for (var i = this, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
					return Promise.resolve().then((function() {
						if (!e) return t.apply(i, a)
					}))
				},
				cancel: function() {
					e = !0
				},
				cancelled: function() {
					return e
				}
			}
		}
		var m = i(1);

		function b(t) {
			return function(e, i) {
				var n = t.mediaModel,
					r = Object(o.j)({}, i, {
						type: e
					});
				switch (e) {
					case a.U:
						if (n.get(a.U) === r.mediaType) return;
						n.set(a.U, r.mediaType);
						break;
					case a.V:
						return void n.set(a.V, Object(o.j)({}, i));
					case a.N:
						if (i[a.N] === t.model.getMute()) return;
						break;
					case a.cb:
						var s = i.newstate;
						s === a.nb && (t.thenPlayPromise.cancel(), n.srcReset());
						var l = n.attributes.mediaState;
						n.attributes.mediaState = s, n.trigger("change:mediaState", n, s, l);
						break;
					case a.G:
						return t.beforeComplete = !0, t.trigger(a.C, r), void(t.attached && !t.background && t._playbackComplete());
					case a.H:
						n.get("setup") ? (t.thenPlayPromise.cancel(), n.srcReset()) : (e = a.wb, r.code += 1e5);
						break;
					case a.L:
						var c = i,
							u = c.duration,
							d = c.metadataType,
							h = c.seekRange;
						d || (r.metadataType = "unknown"), Object(o.z)(u) && (n.set("seekRange", h), n.set("duration", u));
						break;
					case a.E:
						n.set("buffer", i.bufferPercent);
					case a.T:
						var p = i;
						n.set("seekRange", p.seekRange), n.set("position", p.position), n.set("currentTime", p.currentTime);
						var w = p.duration;
						Object(o.z)(w) && n.set("duration", w), e === a.T && "starttime" in t.item && delete t.item.starttime;
						break;
					case a.S:
						var f = t.mediaElement;
						f && f.paused && n.set("mediaState", "paused");
						break;
					case a.J:
						n.set(a.J, i.levels);
					case a.K:
						var g = i,
							j = g.currentQuality,
							m = g.levels;
						j > -1 && m.length > 1 && n.set("currentLevel", parseInt(j));
						break;
					case a.g:
						n.set(a.g, i.tracks);
					case a.h:
						var b = i,
							v = b.currentTrack,
							y = b.tracks;
						v > -1 && y.length > 0 && v < y.length && n.set("currentAudioTrack", parseInt(v))
				}
				t.trigger(e, r)
			}
		}
		var v = i(4),
			y = i(54),
			k = i(35);

		function x(t, e) {
			t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
		}
		var T = function(t) {
				function e() {
					var e;
					return (e = t.call(this) || this).providerController = null, e._provider = null, e.addAttributes({
						mediaModel: new C,
						minDvrWindow: k.b,
						dvrSeekLimit: k.a
					}), e
				}
				x(e, t);
				var i = e.prototype;
				return i.setup = function(t) {
					return t = t || {}, this._normalizeConfig(t), Object(o.j)(this.attributes, t, k.d), this.providerController = new g.a(this.getConfiguration()), this.setAutoStart(), this
				}, i.getConfiguration = function() {
					var t = this.clone(),
						e = t.mediaModel.attributes;
					return Object.keys(k.c).forEach((function(i) {
						t[i] = e[i]
					})), t.instreamMode = !!t.instream, delete t.instream, delete t.mediaModel, t
				}, i.persistQualityLevel = function(t, e) {
					var i = e[t] || {},
						n = i.label,
						a = Object(o.z)(i.bitrate) ? i.bitrate : null;
					this.set("bitrateSelection", a), this.set("qualityLabel", n)
				}, i.setActiveItem = function(t) {
					var e = this.get("playlist")[t];
					this.resetItem(e), this.attributes.playlistItem = null, this.set("item", t), this.set("minDvrWindow", e.minDvrWindow), this.set("dvrSeekLimit", e.dvrSeekLimit || k.a), this.set("playlistItem", e)
				}, i.setMediaModel = function(t) {
					this.mediaModel && this.mediaModel !== t && this.mediaModel.off(), t = t || new C, this.mediaModel = t,
						function(t) {
							var e = t.get("mediaState");
							t.trigger("change:mediaState", t, e, e)
						}(t)
				}, i.destroy = function() {
					this.attributes._destroyed = !0, this.off(), this._provider && (this._provider.off(null, null, this), this._provider.destroy())
				}, i.getVideo = function() {
					return this._provider
				}, i.setFullscreen = function(t) {
					(t = !!t) !== this.get("fullscreen") && this.set("fullscreen", t)
				}, i.getProviders = function() {
					return this.providerController
				}, i.setVolume = function(t) {
					if (Object(o.z)(t)) {
						var e = Math.min(Math.max(0, t), 100);
						this.set("volume", e);
						var i = 0 === e;
						i !== this.getMute() && this.setMute(i)
					}
				}, i.getMute = function() {
					return this.get("autostartMuted") || this.get("mute")
				}, i.setMute = function(t) {
					if (void 0 === t && (t = !this.getMute()), this.set("mute", !!t), !t) {
						var e = Math.max(10, this.get("volume"));
						this.set("autostartMuted", !1), this.setVolume(e)
					}
				}, i.setStreamType = function(t) {
					this.set("streamType", t), "LIVE" === t && this.setPlaybackRate(1)
				}, i.setProvider = function(t) {
					this._provider = t, O(this, t)
				}, i.resetProvider = function() {
					this._provider = null, this.set("provider", void 0)
				}, i.setPlaybackRate = function(t) {
					Object(o.v)(t) && (t = Math.max(Math.min(t, 4), .25), "LIVE" === this.get("streamType") && (t = 1), this.set("defaultPlaybackRate", t), this._provider && this._provider.setPlaybackRate && this._provider.setPlaybackRate(t))
				}, i.persistCaptionsTrack = function() {
					var t = this.get("captionsTrack");
					t ? this.set("captionLabel", t.name) : this.set("captionLabel", "Off")
				}, i.setVideoSubtitleTrack = function(t, e) {
					this.set("captionsIndex", t), t && e && t <= e.length && e[t - 1].data && this.set("captionsTrack", e[t - 1])
				}, i.persistVideoSubtitleTrack = function(t, e) {
					this.setVideoSubtitleTrack(t, e), this.persistCaptionsTrack()
				}, i.setAutoStart = function(t) {
					void 0 !== t && this.set("autostart", t);
					var e = !(!v.OS.mobile || !this.get("autostart"));
					this.set("playOnViewable", e || "viewable" === this.get("autostart"))
				}, i.resetItem = function(t) {
					var e = t ? Object(w.g)(t.starttime) : 0,
						i = t ? Object(w.g)(t.duration) : 0,
						n = this.mediaModel;
					this.set("playRejected", !1), this.attributes.itemMeta = {}, n.set("position", e), n.set("currentTime", 0), n.set("duration", i)
				}, i.persistBandwidthEstimate = function(t) {
					Object(o.z)(t) && this.set("bandwidthEstimate", t)
				}, i._normalizeConfig = function(t) {
					var e = t.floating;
					e && e.disabled && delete t.floating
				}, e
			}(y.a),
			O = function(t, e) {
				t.set("provider", e.getName()), !0 === t.get("instreamMode") && (e.instreamMode = !0), t.setPlaybackRate(t.get("defaultPlaybackRate")), t.set("supportsPlaybackRate", e.supportsPlaybackRate), t.set("playbackRate", e.getPlaybackRate()), t.set("renderCaptionsNatively", e.renderNatively)
			};
		var C = function(t) {
				function e() {
					var e;
					return (e = t.call(this) || this).addAttributes({
						mediaState: a.nb
					}), e
				}
				return x(e, t), e.prototype.srcReset = function() {
					Object(o.j)(this.attributes, {
						setup: !1,
						started: !1,
						preloaded: !1,
						visualQuality: null,
						buffer: 0,
						currentTime: 0
					})
				}, e
			}(y.a),
			M = T;

		function _(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
		}

		function S(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}
		var E = function(t) {
			var e, i;

			function n(e, i) {
				var n;
				return (n = t.call(this) || this).attached = !0, n.beforeComplete = !1, n.item = null, n.mediaModel = new C, n.model = i, n.provider = e, n.providerListener = new b(S(n)), n.thenPlayPromise = j((function() {})), e.off(), e.on("all", n.providerListener, S(n)), n.eventQueue = new u.a(S(n), ["trigger"], (function() {
					return !n.attached || n.background
				})), n
			}
			i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
			var r, s, l, c = n.prototype;
			return c.play = function(t) {
				var e = this.item,
					i = this.model,
					n = this.mediaModel,
					a = this.provider;
				if (t || (t = i.get("playReason")), i.set("playRejected", !1), n.get("setup")) return a.play() || Promise.resolve();
				n.set("setup", !0);
				var o = this._loadAndPlay(e, a);
				return n.get("started") ? o : this._playAttempt(o, t)
			}, c.stop = function() {
				var t = this.provider;
				this.beforeComplete = !1, t.stop()
			}, c.pause = function() {
				this.provider.pause()
			}, c.preload = function() {
				var t = this.item,
					e = this.mediaModel,
					i = this.provider;
				!t || t && "none" === t.preload || !this.attached || this.setup || this.preloaded || (e.set("preloaded", !0), i.preload(t))
			}, c.destroy = function() {
				var t = this.provider,
					e = this.mediaModel;
				this.off(), e.off(), t.off(), this.eventQueue.destroy(), this.detach(), t.getContainer() && t.remove(), delete t.instreamMode, this.provider = null, this.item = null
			}, c.attach = function() {
				var t = this.model,
					e = this.provider;
				t.setPlaybackRate(t.get("defaultPlaybackRate")), e.attachMedia(), this.attached = !0, this.eventQueue.flush(), this.beforeComplete && this._playbackComplete()
			}, c.detach = function() {
				var t = this.provider;
				this.thenPlayPromise.cancel();
				var e = t.detachMedia();
				return this.attached = !1, e
			}, c._playAttempt = function(t, e) {
				var i = this,
					n = this.item,
					r = this.mediaModel,
					s = this.model,
					l = this.provider,
					c = l ? l.video : null;
				return this.trigger(a.O, {
					item: n,
					playReason: e
				}), (c ? c.paused : s.get(a.cb) !== a.qb) || s.set(a.cb, a.kb), t.then((function() {
					r.get("setup") && (r.set("started", !0), r === s.mediaModel && function(t) {
						var e = t.get("mediaState");
						t.trigger("change:mediaState", t, e, e)
					}(r))
				})).catch((function(t) {
					if (i.item && r === s.mediaModel) {
						if (s.set("playRejected", !0), c && c.paused) {
							if (c.src === location.href) return i._loadAndPlay(n, l);
							r.set("mediaState", a.pb)
						}
						var u = Object(o.j)(new m.q(null, Object(m.A)(t), t), {
							error: t,
							item: n,
							playReason: e
						});
						throw delete u.key, i.trigger(a.P, u), t
					}
				}))
			}, c._playbackComplete = function() {
				var t = this.item,
					e = this.provider;
				t && delete t.starttime, this.beforeComplete = !1, e.setState(a.lb), this.trigger(a.G, {})
			}, c._loadAndPlay = function() {
				var t = this.item,
					e = this.provider,
					i = e.load(t);
				if (i) {
					var n = j((function() {
						return e.play() || Promise.resolve()
					}));
					return this.thenPlayPromise = n, i.then(n.async)
				}
				return e.play() || Promise.resolve()
			}, r = n, (s = [{
				key: "audioTrack",
				get: function() {
					return this.provider.getCurrentAudioTrack()
				},
				set: function(t) {
					this.provider.setCurrentAudioTrack(t)
				}
			}, {
				key: "quality",
				get: function() {
					return this.provider.getCurrentQuality()
				},
				set: function(t) {
					this.provider.setCurrentQuality(t)
				}
			}, {
				key: "audioTracks",
				get: function() {
					return this.provider.getAudioTracks()
				}
			}, {
				key: "background",
				get: function() {
					if (!this.attached) return !1;
					var t = this.provider;
					if (!t.video) return !1;
					var e = t.getContainer();
					return !e || e && !e.contains(t.video)
				},
				set: function(t) {
					var e = this.provider;
					if (e.video) {
						var i = e.getContainer();
						i && (t ? this.background || (this.thenPlayPromise.cancel(), this.pause(), e.removeFromContainer ? e.removeFromContainer() : i.removeChild(e.video), this.container = null) : (this.eventQueue.flush(), this.beforeComplete && this._playbackComplete()))
					} else t ? this.detach() : this.attach()
				}
			}, {
				key: "container",
				get: function() {
					return this.provider.getContainer()
				},
				set: function(t) {
					this.provider.setContainer(t)
				}
			}, {
				key: "mediaElement",
				get: function() {
					return this.provider.video
				}
			}, {
				key: "preloaded",
				get: function() {
					return this.mediaModel.get("preloaded")
				}
			}, {
				key: "qualities",
				get: function() {
					return this.provider.getQualityLevels()
				}
			}, {
				key: "setup",
				get: function() {
					return this.mediaModel.get("setup")
				}
			}, {
				key: "started",
				get: function() {
					return this.mediaModel.get("started")
				}
			}, {
				key: "activeItem",
				set: function(t) {
					var e = this.mediaModel = new C,
						i = t ? Object(w.g)(t.starttime) : 0,
						n = t ? Object(w.g)(t.duration) : 0,
						a = e.attributes;
					e.srcReset(), a.position = i, a.duration = n, this.item = t, this.provider.init(t)
				}
			}, {
				key: "controls",
				set: function(t) {
					this.provider.setControls(t)
				}
			}, {
				key: "mute",
				set: function(t) {
					this.provider.mute(t)
				}
			}, {
				key: "position",
				set: function(t) {
					var e = this.provider;
					this.model.get("scrubbing") && e.fastSeek ? e.fastSeek(t) : e.seek(t)
				}
			}, {
				key: "subtitles",
				set: function(t) {
					this.provider.setSubtitlesTrack && this.provider.setSubtitlesTrack(t)
				}
			}, {
				key: "volume",
				set: function(t) {
					this.provider.volume(t)
				}
			}]) && _(r.prototype, s), l && _(r, l), n
		}(f.a);
		var A = i(28);

		function L(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
		}

		function I(t) {
			var e = "function" == typeof Map ? new Map : void 0;
			return (I = function(t) {
				if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
				var i;
				if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
				if (void 0 !== e) {
					if (e.has(t)) return e.get(t);
					e.set(t, n)
				}

				function n() {
					return z(t, arguments, R(this).constructor)
				}
				return n.prototype = Object.create(t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), B(n, t)
			})(t)
		}

		function z(t, e, i) {
			return (z = P() ? Reflect.construct : function(t, e, i) {
				var n = [null];
				n.push.apply(n, e);
				var a = new(Function.bind.apply(t, n));
				return i && B(a, i.prototype), a
			}).apply(null, arguments)
		}

		function P() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}

		function B(t, e) {
			return (B = Object.setPrototypeOf || function(t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function R(t) {
			return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}
		var F = function(t) {
				var e, i;

				function n(e) {
					var i;
					return (i = t.call(this, e) || this).code = m.a, i
				}
				return i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i, n
			}(I(Error)),
			V = function() {
				function t(t, e, i) {
					var n = this;
					this.index = t, this.model = e, this.api = i, this.promise = new Promise((function(t, e) {
						n.resolve = t, n.reject = e
					})), this.async = null, this.asyncPromise = null, this.rejected = !1
				}
				var e, i, n, a = t.prototype;
				return a.run = function() {
					var t = this,
						e = this.api,
						i = this.async,
						n = this.index,
						a = this.model,
						o = this.resolve,
						r = this.reject,
						s = this.promise,
						l = a.get("playlist"),
						c = this.getItem(n);
					if (!c) {
						var u = -1 === n ? "No recs item" : "No playlist item at index " + n;
						this.rejected = !0, r(new Error(u))
					}
					if (i) {
						this.clear();
						var d = this.asyncPromise = i.call(e, c, n);
						d && d.then ? d.then((function(e) {
							if (e && e !== c && l === a.get("playlist")) {
								var i = t.replace(e);
								if (i) return void o(i)
							}
							o(c)
						})).catch((function(e) {
							var i = new F("Item skipped by playlist item callback");
							i.sourceError = e, t.rejected = !0, r(i)
						})) : this.asyncPromise = null
					}
					return this.asyncPromise || o(c), s
				}, a.getItem = function(t) {
					var e = this.model;
					return -1 === t ? e.get("nextUp") : e.get("playlist")[t]
				}, a.replace = function(t) {
					var e = this.index,
						i = this.model,
						n = Object(h.d)(i, new A.a(t), t.feedData || {});
					if (n) {
						if (-1 === e) i.set("nextUp", n);
						else i.get("playlist")[e] = n;
						return n
					}
				}, a.clear = function() {
					this.async = null
				}, e = t, (i = [{
					key: "callback",
					set: function(t) {
						this.async = t
					}
				}, {
					key: "skipped",
					get: function() {
						return this.rejected
					}
				}]) && L(e.prototype, i), n && L(e, n), t
			}();

		function H(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
		}

		function N(t, e) {
			var i = e.mediaControllerListener;
			t.off().on("all", i, e)
		}

		function D(t) {
			return t && t.sources && t.sources[0]
		}
		var q = function(t) {
			var e, i;

			function n(e, i, n) {
				var r, s, l;
				return (r = t.call(this) || this).adPlaying = !1, r.apiContext = n, r.background = (s = null, l = null, Object.defineProperties({
					setNext: function(t, e) {
						l = {
							item: t,
							loadPromise: e
						}
					},
					isNext: function(t) {
						return !(!l || JSON.stringify(l.item.sources[0]) !== JSON.stringify(t.sources[0]))
					},
					updateNext: function(t) {
						l && (l.item = t)
					},
					clearNext: function() {
						l = null
					}
				}, {
					nextLoadPromise: {
						get: function() {
							return l ? l.loadPromise : null
						}
					},
					currentMedia: {
						get: function() {
							return s
						},
						set: function(t) {
							s = t
						}
					}
				})), r.mediaPool = i, r.mediaController = null, r.mediaControllerListener = function(t) {
					return function(e, i) {
						switch (e) {
							case a.cb:
								return;
							case a.W:
								return void t.set(a.W, i[a.W]);
							case a.N:
								return void t.set(a.N, i[a.N]);
							case a.Q:
								return void t.set("playbackRate", i.playbackRate);
							case a.L:
								Object(o.j)(t.get("itemMeta"), i.metadata);
								break;
							case a.K:
								t.persistQualityLevel(i.currentQuality, i.levels);
								break;
							case a.tb:
								t.persistVideoSubtitleTrack(i.currentTrack, i.tracks);
								break;
							case a.T:
								i.targetLatency && t.set("dvrSeekLimit", i.targetLatency);
							case a.R:
							case a.S:
							case a.Y:
							case a.sb:
							case "subtitlesTracksData":
								t.trigger(e, i);
								break;
							case a.j:
								return void t.persistBandwidthEstimate(i.bandwidthEstimate)
						}
						this.trigger(e, i)
					}
				}(e), r.model = e, r.providers = new g.a(e.getConfiguration()), r.loadPromise = null, r.backgroundLoading = e.get("backgroundLoading"), r.asyncItems = [], r.itemSetContext = 0, r.backgroundLoading || e.set("mediaElement", r.mediaPool.getPrimedElement()), r
			}
			i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
			var r, s, l, c = n.prototype;
			return c.asyncActiveItem = function(t) {
				var e = this,
					i = this.model,
					n = setTimeout((function() {
						i.set(a.cb, a.kb)
					}), 50);
				return this.getAsyncItem(t).run().then((function(t) {
					return clearTimeout(n), t
				})).catch((function(a) {
					if (clearTimeout(n), t < i.get("playlist").length - 1) return e.setActiveItem(t + 1).then((function() {
						return null
					}));
					throw a
				}))
			}, c.setActiveItem = function(t) {
				var e = this,
					i = this.background,
					n = this.mediaController,
					a = this.model,
					o = a.get("playlist")[t];
				a.attributes.itemReady = !1, n && (n.mediaModel.off(), a.attributes.mediaModel = new C, a.mediaModel.attributes = n.mediaModel.clone()), i.isNext(o) || this._destroyBackgroundMedia();
				var r = this.itemSetContext = Math.random();
				return this.loadPromise = this.asyncActiveItem(t).then((function(o) {
					if (null === o || r !== e.itemSetContext) return null;
					a.setActiveItem(t);
					var s = D(o);
					if (!s) return Promise.reject(new m.q(m.m, m.i));
					if (i.isNext(o)) return e._destroyActiveMedia(), e._activateBackgroundMedia();
					if (n) {
						if (a.get("castActive") || e._providerCanPlay(n.provider, s)) return n.activeItem = o, e._setActiveMedia(n), n;
						e._destroyActiveMedia()
					}
					return e._setupMediaController(s).then((function(t) {
						if (r === e.itemSetContext) return t.activeItem = o, e._setActiveMedia(t), t
					})).catch((function(t) {
						throw e._destroyActiveMedia(), t
					}))
				}))
			}, c.setAttached = function(t) {
				var e = this.mediaController;
				if (this.attached = t, e) {
					if (!t) {
						var i = e.detach(),
							n = e.item,
							a = e.mediaModel.get("position");
						return a && (n.starttime = a), i
					}
					e.attach()
				}
			}, c.playVideo = function(t) {
				var e, i = this,
					n = this.mediaController,
					o = this.model;
				if (!o.get("playlistItem")) return Promise.reject(new Error("No media"));
				if (t || (t = o.get("playReason")), n) e = n.play(t);
				else {
					o.set(a.cb, a.kb);
					var r = j((function(e) {
						if (i.mediaController && i.mediaController.mediaModel === e.mediaModel) return e.play(t);
						throw new Error("Playback cancelled.")
					}));
					e = (this.loadPromise || Promise.resolve()).catch((function(t) {
						throw r.cancel(), t
					})).then(r.async)
				}
				return e
			}, c.stopVideo = function() {
				var t = this.mediaController,
					e = this.model,
					i = e.get("playlist")[e.get("item")];
				e.attributes.playlistItem = i, e.resetItem(i), t && t.stop()
			}, c.preloadVideo = function() {
				var t = this.background,
					e = this.mediaController || t.currentMedia;
				e && e.preload()
			}, c.pause = function() {
				var t = this.mediaController;
				t && t.pause()
			}, c.castVideo = function(t, e) {
				var i = this.model;
				i.attributes.itemReady = !1;
				var n = Object(o.j)({}, e),
					a = n.starttime = i.mediaModel.get("currentTime");
				this._destroyActiveMedia();
				var r = new E(t, i);
				r.activeItem = n, this._setActiveMedia(r), i.mediaModel.set("currentTime", a)
			}, c.stopCast = function() {
				var t = this.model,
					e = t.get("item");
				t.get("playlist")[e].starttime = t.mediaModel.get("currentTime"), this.stopVideo(), this.setActiveItem(e).catch((function() {}))
			}, c.backgroundActiveMedia = function() {
				this.adPlaying = !0;
				var t = this.background,
					e = this.mediaController;
				e && (t.currentMedia && this._destroyMediaController(t.currentMedia), e.background = !0, t.currentMedia = e, this.mediaController = null)
			}, c.restoreBackgroundMedia = function() {
				this.adPlaying = !1;
				var t = this.background,
					e = this.mediaController,
					i = t.currentMedia;
				if (i) {
					if (e && e !== i) return this._destroyMediaController(i), void(t.currentMedia = null);
					var n = i.mediaModel.attributes;
					n.mediaState === a.nb ? n.mediaState = a.pb : n.mediaState !== a.pb && (n.mediaState = a.kb), this._setActiveMedia(i), i.background = !1, t.currentMedia = null
				}
			}, c.backgroundLoad = function(t, e) {
				var i = this,
					n = this.background,
					a = this.getAsyncItem(e).run().then((function(t) {
						n.updateNext(t);
						var e = D(t);
						return i._setupMediaController(e).then((function(e) {
							return e.activeItem = t, e.preload(), e
						}))
					})).catch((function() {
						n.clearNext()
					}));
				n.setNext(t, a)
			}, c.forwardEvents = function() {
				var t = this.mediaController;
				t && N(t, this)
			}, c.routeEvents = function(t) {
				var e = this.mediaController;
				e && (e.off(), t && N(e, t))
			}, c.destroy = function() {
				this.off(), this._destroyBackgroundMedia(), this._destroyActiveMedia(), this.apiContext = null
			}, c._setActiveMedia = function(t) {
				var e = this.model,
					i = t.mediaModel,
					n = t.provider;
				! function(t, e) {
					var i = t.get("mediaContainer");
					i ? e.container = i : t.once("change:mediaContainer", (function(t, i) {
						e.container = i
					}))
				}(e, t), this.mediaController = t, e.set("mediaElement", t.mediaElement), e.setMediaModel(i), e.setProvider(n), N(t, this), e.set("itemReady", !0)
			}, c._destroyActiveMedia = function() {
				var t = this.mediaController,
					e = this.model;
				t && t.provider && (t.detach(), this._destroyMediaController(t), e.resetProvider(), this.mediaController = null)
			}, c._destroyBackgroundMedia = function() {
				var t = this.background;
				this._destroyMediaController(t.currentMedia), t.currentMedia = null, this._destroyBackgroundLoadingMedia()
			}, c._destroyMediaController = function(t) {
				var e = this.mediaPool;
				t && t.provider && (e.recycle(t.mediaElement), t.destroy())
			}, c._setupMediaController = function(t) {
				var e = this,
					i = this.model,
					n = this.providers,
					a = function(t) {
						return new E(new t(i.get("id"), i.getConfiguration(), e.primedElement), i)
					},
					o = n.choose(t),
					r = o.provider,
					s = o.name;
				return r ? Promise.resolve(a(r)) : n.load(s).then((function(t) {
					return a(t)
				}))
			}, c._activateBackgroundMedia = function() {
				var t = this,
					e = this.background,
					i = this.background.nextLoadPromise,
					n = this.model;
				return this._destroyMediaController(e.currentMedia), e.currentMedia = null, i.then((function(i) {
					if (i) return e.clearNext(), t.adPlaying ? (n.attributes.itemReady = !0, e.currentMedia = i) : (t._setActiveMedia(i), i.background = !1), i
				}))
			}, c._destroyBackgroundLoadingMedia = function() {
				var t = this,
					e = this.background,
					i = this.background.nextLoadPromise;
				i && i.then((function(i) {
					t._destroyMediaController(i), e.clearNext()
				}))
			}, c._providerCanPlay = function(t, e) {
				var i = this.providers.choose(e).provider;
				return i && t && t instanceof i
			}, c.setMute = function(t) {
				var e = this.background,
					i = this.mediaController,
					n = this.mediaPool;
				i && (i.mute = t), e.currentMedia && (e.currentMedia.mute = t), n.syncMute(t)
			}, c.setVolume = function(t) {
				var e = this.background,
					i = this.mediaController,
					n = this.mediaPool;
				i && (i.volume = t), e.currentMedia && (e.currentMedia.volume = t), n.syncVolume(t)
			}, c.getAsyncItem = function(t) {
				var e = this.asyncItems[t];
				return e || ((e = this.asyncItems[t] = new V(t, this.model, this.apiContext)).callback = this.model.get("playlistItemCallback")), e
			}, c.clearItemPromises = function() {
				this.asyncItems.forEach((function(t) {
					t && t.reject(new Error("Item playback aborted"))
				})), this.asyncItems.length = 0
			}, r = n, (s = [{
				key: "audioTrack",
				get: function() {
					var t = this.mediaController;
					return t ? t.audioTrack : -1
				},
				set: function(t) {
					var e = this.mediaController;
					e && (e.audioTrack = parseInt(t, 10) || 0)
				}
			}, {
				key: "audioTracks",
				get: function() {
					var t = this.mediaController;
					if (t) return t.audioTracks
				}
			}, {
				key: "beforeComplete",
				get: function() {
					var t = this.mediaController,
						e = this.background.currentMedia;
					return !(!t && !e) && (t ? t.beforeComplete : e.beforeComplete)
				}
			}, {
				key: "primedElement",
				get: function() {
					return this.backgroundLoading ? this.mediaPool.getPrimedElement() : this.model.get("mediaElement")
				}
			}, {
				key: "quality",
				get: function() {
					return this.mediaController ? this.mediaController.quality : -1
				},
				set: function(t) {
					var e = this.mediaController;
					e && (e.quality = parseInt(t, 10) || 0)
				}
			}, {
				key: "qualities",
				get: function() {
					var t = this.mediaController;
					return t ? t.qualities : null
				}
			}, {
				key: "position",
				set: function(t) {
					var e = this.mediaController;
					e && (e.item.starttime = t, e.attached && (e.position = t))
				}
			}, {
				key: "subtitles",
				set: function(t) {
					var e = this.mediaController;
					e && (e.subtitles = t)
				}
			}, {
				key: "itemCallback",
				set: function(t) {
					this.model.set("playlistItemCallback", t), this.asyncItems.forEach((function(e) {
						e && (e.callback = t)
					}))
				}
			}]) && H(r.prototype, s), l && H(r, l), n
		}(f.a);

		function U(t) {
			return t === a.lb || t === a.mb ? a.nb : t
		}

		function W(t, e, i) {
			if ((e = U(e)) !== (i = U(i))) {
				var n = e.replace(/(?:ing|d)$/, ""),
					o = {
						type: n,
						newstate: e,
						oldstate: i,
						reason: function(t, e) {
							return t === a.kb ? e === a.rb ? e : a.ob : e
						}(e, t.mediaModel.get("mediaState"))
					};
				"play" === n ? o.playReason = t.get("playReason") : "pause" === n && (o.pauseReason = t.get("pauseReason")), this.trigger(n, o)
			}
		}
		var X = i(61);

		function Y(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
		}
		var Z = function(t) {
				var e, i;

				function n(e, i) {
					var n, a, o = (n = t.call(this, e, i) || this).model = new M;
					if (n.playerModel = e, n.provider = null, n.backgroundLoading = e.get("backgroundLoading"), o.mediaModel.attributes.mediaType = "video", n.backgroundLoading) a = i.getAdElement();
					else {
						a = e.get("mediaElement"), o.attributes.mediaElement = a, o.attributes.mediaSrc = a.src;
						var r = n.srcResetListener = function() {
							n.srcReset()
						};
						a.addEventListener("emptied", r), a.playbackRate = a.defaultPlaybackRate = 1
					}
					return n.mediaPool = Object(X.a)(a, i), n
				}
				i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
				var r, s, l, c = n.prototype;
				return c.setup = function() {
					var t = this.model,
						e = this.playerModel,
						i = this.primedElement,
						n = e.attributes,
						o = e.mediaModel;
					t.setup({
						id: n.id,
						volume: n.volume,
						instreamMode: !0,
						edition: n.edition,
						mediaContext: o,
						mute: n.mute,
						streamType: "VOD",
						autostartMuted: n.autostartMuted,
						autostart: n.autostart,
						advertising: n.advertising,
						sdkplatform: n.sdkplatform,
						skipButton: !1
					}), t.on("change:state", W, this), t.on(a.x, (function(t) {
						this.trigger(a.x, t)
					}), this), i.paused || i.pause()
				}, c.setActiveItem = function(e) {
					var i = this;
					return this.stopVideo(), this.provider = null, t.prototype.setActiveItem.call(this, e).then((function(t) {
						return i.trigger(a.b), i._setProvider(t.provider), i.playVideo()
					}))
				}, c.usePsuedoProvider = function(t) {
					t && (this._setProvider(t), t.off(a.x), t.on(a.x, (function(t) {
						this.trigger(a.x, t)
					}), this))
				}, c._setProvider = function(t) {
					var e = this;
					if (t && this.mediaPool) {
						this.provider = t;
						var i = this.model,
							n = this.playerModel,
							r = "vpaid" === t.type;
						t.off(), t.on("all", (function(t, e) {
							r && t === a.G || this.trigger(t, Object(o.j)({}, e, {
								type: t
							}))
						}), this);
						var s = i.mediaModel;
						t.on(a.cb, (function(t) {
							t.oldstate = t.oldstate || i.get(a.cb), s.set("mediaState", t.newstate)
						})), t.on(a.Y, this._nativeFullscreenHandler, this), s.on("change:mediaState", (function(t, i) {
							e._stateHandler(i)
						})), t.attachMedia(), t.volume(n.get("volume")), t.mute(n.getMute()), t.setPlaybackRate && t.setPlaybackRate(1), n.on("change:volume", (function(t, e) {
							this.volume = e
						}), this), n.on("change:mute", (function(t, e) {
							this.mute = e, e || (this.volume = n.get("volume"))
						}), this), n.on("change:autostartMuted", (function(t, e) {
							e || (i.set("autostartMuted", e), this.mute = n.get("mute"))
						}), this)
					}
				}, c.destroy = function() {
					this.mediaController;
					var t = this.model,
						e = this.mediaPool,
						i = this.playerModel;
					t.off(), this.provider = null;
					var n = e.getPrimedElement();
					if (this.backgroundLoading) {
						e.clean();
						var a = i.get("mediaContainer");
						n.parentNode === a && a.removeChild(n)
					} else n && (n.removeEventListener("emptied", this.srcResetListener), n.src !== t.get("mediaSrc") && this.srcReset())
				}, c.srcReset = function() {
					var t = this.playerModel,
						e = t.get("mediaModel"),
						i = t.getVideo();
					e.srcReset(), i && (i.src = null)
				}, c._nativeFullscreenHandler = function(t) {
					this.model.trigger(a.Y, t), this.trigger(a.z, {
						fullscreen: t.jwstate
					})
				}, c._stateHandler = function(t) {
					var e = this.model;
					switch (t) {
						case a.qb:
						case a.pb:
							e.set(a.cb, t)
					}
				}, r = n, (s = [{
					key: "mute",
					set: function(e) {
						var i = this.mediaController,
							n = this.model,
							a = this.provider;
						n.set("mute", e), t.prototype.setMute.call(this, e), i || a.mute(e)
					}
				}, {
					key: "volume",
					set: function(e) {
						var i = this.mediaController,
							n = this.model,
							a = this.provider;
						n.set("volume", e), t.prototype.setVolume.call(this, e), i || a.volume(e)
					}
				}]) && Y(r.prototype, s), l && Y(r, l), n
			}(q),
			Q = {
				skipoffset: null,
				tag: null
			},
			K = function(t, e, i, n) {
				var r, s, l, c, u = this,
					d = this,
					h = new Z(e, n),
					f = 0,
					g = {},
					j = null,
					m = {},
					b = I,
					v = !1,
					y = !1,
					k = !1,
					x = !1,
					T = function(t) {
						y || ((t = t || {}).hasControls = !!e.get("controls"), u.trigger(a.A, t), h.model.get("state") === a.pb ? t.hasControls && h.playVideo().catch((function() {})) : h.pause())
					},
					O = function() {
						y || h.model.get("state") === a.pb && e.get("controls") && (t.setFullscreen(), t.play())
					};

				function C() {
					h.model.set("playRejected", !0)
				}

				function M() {
					f++, d.loadItem(r).catch((function() {}))
				}

				function _(t, e) {
					"complete" !== t && (e = e || {}, m.tag && !e.tag && (e.tag = m.tag), this.trigger(t, e), "mediaError" !== t && "error" !== t || this.loadNextItemOnError())
				}

				function S(t) {
					var e = t.newstate,
						i = t.oldstate || h.model.get("state");
					i !== e && E(Object(o.j)({
						oldstate: i
					}, g, t))
				}

				function E(e) {
					var i = e.newstate;
					i === a.qb ? t.trigger(a.d, e) : i === a.pb && t.trigger(a.c, e)
				}

				function A(e) {
					var i = e.duration,
						n = e.position,
						a = h.model.mediaModel || h.model;
					a.set("duration", i), a.set("position", n), c || (c = (Object(w.d)(l, i) || i) - p.b), !v && n >= Math.max(c, p.a) && (t.preloadNextItem(), v = !0)
				}

				function L(t) {
					var e = {};
					m.tag && (e.tag = m.tag), this.trigger(a.G, e), I.call(this, t)
				}

				function I(t) {
					g = {}, r && f + 1 < r.length ? M() : (t.type === a.G && this.trigger(a.db, {}), this.destroy())
				}

				function z() {
					!y && i && i.clickHandler() && i.clickHandler().setAlternateClickHandlers(T, O)
				}

				function P(t) {
					t.width && t.height && i && i.resizeMedia()
				}
				this.init = function() {
					if (!k && !y) {
						k = !0, g = {}, h.setup(), h.on("all", _, this), h.on(a.P, C, this), h.on(a.T, A, this), h.on(a.G, L, this), h.on(a.L, P, this), h.on(a.cb, S, this), j = t.detachMedia();
						var n = h.primedElement;
						if (e.get("mediaContainer").appendChild(n), e.set("instream", h), h.model.set("state", a.kb), i) {
							var o = i.clickHandler();
							o && o.setAlternateClickHandlers((function() {}), null)
						}
						return this.setText(e.get("localization").loadingAd), x = t.isBeforeComplete() || e.get("state") === a.lb, this
					}
				}, this.enableAdsMode = function(n) {
					var o = this;
					if (!k && !y) return t.routeEvents({
							mediaControllerListener: function(t, e) {
								o.trigger(t, e)
							}
						}), e.set("instream", h), h.model.set("state", a.qb),
						function(n) {
							if (!i) return;
							var o = i.clickHandler();
							o && o.setAlternateClickHandlers((function(i) {
								y || ((i = i || {}).hasControls = !!e.get("controls"), d.trigger(a.A, i), n && (e.get("state") === a.pb ? t.playVideo() : (t.pause(), n && (t.trigger(a.a, {
									clickThroughUrl: n
								}), window.open(n)))))
							}), null)
						}(n), this
				}, this.setEventData = function(t) {
					g = t
				}, this.setState = function(t) {
					var e = t.newstate,
						i = h.model;
					t.oldstate = i.get("state"), i.set("state", e), E(t)
				}, this.setTime = function(e) {
					A(e), t.trigger(a.f, e)
				}, this.loadNextItemOnError = function() {
					r && f + 1 < r.length && M()
				}, this.loadItem = function(t, i) {
					if (y || !k) return Promise.reject(new Error("Instream not setup"));
					g = {};
					var n = t;
					Array.isArray(t) ? (s = i || s, t = (r = t)[f], s && (i = s[f])) : n = [t];
					var c = h.model;
					c.set("playlist", n), e.set("hideAdsControls", !1), t.starttime = 0, d.trigger(a.eb, {
						index: f,
						item: t
					}), m = Object(o.j)({}, Q, i), z(), c.set("skipButton", !1);
					var u = !e.get("backgroundLoading") && j ? j.then((function() {
						return h.setActiveItem(f)
					})) : h.setActiveItem(f);
					return v = !1, void 0 !== (l = t.skipoffset || m.skipoffset) && d.setupSkipButton(l, m), u
				}, this.setupSkipButton = function(t, e, i) {
					var n = h.model;
					b = i || I, n.set("skipMessage", e.skipMessage), n.set("skipText", e.skipText), n.set("skipOffset", t), n.attributes.skipButton = !1, n.set("skipButton", !0)
				}, this.applyProviderListeners = function(t) {
					h.usePsuedoProvider(t), z()
				}, this.play = function() {
					g = {}, h.playVideo()
				}, this.pause = function() {
					g = {}, h.pause()
				}, this.skipAd = function(t) {
					var i = e.get("autoPause").pauseAds,
						n = "autostart" === e.get("playReason"),
						o = e.get("viewable");
					!i || n || o || (this.noResume = !0);
					var r = a.e;
					this.trigger(r, t), b.call(this, {
						type: r
					})
				}, this.replacePlaylistItem = function(t) {
					y || (e.set("playlistItem", t), h.srcReset())
				}, this.destroy = function() {
					y || (y = !0, this.trigger("destroyed"), this.off(), i && i.clickHandler() && i.clickHandler().revertAlternateClickHandlers(), e.off(null, null, h), h.off(null, null, d), h.destroy(), k && h.model && (e.attributes.state = a.pb), t.forwardEvents(), e.set("instream", null), h = null, g = {}, j = null, k && !e.attributes._destroyed && (t.attachMedia(), this.noResume || (x ? t.stopVideo() : t.playVideo())))
				}, this.getState = function() {
					return !y && h.model.get("state")
				}, this.setText = function(t) {
					return y || !i || i.setAltText(t || ""), this
				}, this.hide = function() {
					y || e.set("hideAdsControls", !0)
				}, this.getMediaElement = function() {
					return y ? null : h.primedElement
				}, this.setSkipOffset = function(t) {
					l = t > 0 ? t : null, h && h.model.set("skipOffset", l)
				}
			};
		Object(o.j)(K.prototype, f.a);
		var G = K,
			J = i(84),
			$ = i(83),
			tt = function(t) {
				var e = this,
					i = [],
					n = {},
					o = 0,
					r = 0;

				function s(t) {
					t.data = t.data || [], t.name = t.label || t.name || t.language;
					var e = Object($.a)(t, i.length);
					if (!t.name) {
						var a = Object($.b)(t, o);
						t.name = a.label, o = a.unknownCount
					}
					t._id = e, n[e] = t, (i = i.filter((function(t) {
						return t._id !== e
					}))).push(t)
				}

				function l() {
					for (var t = [{
							id: "off",
							label: "Off"
						}], e = 0; e < i.length; e++) t.push({
						id: i[e]._id,
						label: i[e].name || "Unknown CC",
						language: i[e].language
					});
					return t
				}

				function c(e) {
					var n = r = e,
						a = t.get("captionLabel");
					if ("Off" !== a) {
						for (var o = 0; o < i.length; o++) {
							var s = i[o];
							if (a && a === s.name) {
								n = o + 1;
								break
							}
							s.default || s.defaulttrack || "default" === s._id ? n = o + 1 : s.autoselect
						}
						var l;
						l = n, i.length ? t.setVideoSubtitleTrack(l, i) : t.set("captionsIndex", l)
					} else t.set("captionsIndex", 0)
				}

				function u() {
					var e = l();
					d(e) !== d(t.get("captionsList")) && (t.set("captionsList", e), c(r))
				}

				function d(t) {
					return t.map((function(t) {
						return t.id + "-" + t.label
					})).join(",")
				}
				t.on("change:playlistItem", (function(t) {
					i = [], n = {}, o = 0;
					var e = t.attributes;
					e.captionsIndex = 0, e.captionsList = l(), t.set("captionsTrack", null)
				}), this), t.on("change:itemReady", (function() {
					var i = t.get("playlistItem").tracks,
						o = i && i.length;
					if (o && !t.get("renderCaptionsNatively"))
						for (var r = function(t) {
								var o, r = i[t];
								r.includedInManifest || "subtitles" !== (o = r.kind) && "captions" !== o || n[r._id] || (r.sideloaded = !0, s(r), Object(J.b)(r, (function(t) {
									! function(t, e) {
										t.data = e
									}(r, t)
								}), (function(t) {
									e.trigger(a.wb, t)
								})))
							}, l = 0; l < o; l++) r(l);
					u()
				}), this), t.on("change:captionsIndex", (function(t, e) {
					var n = null;
					0 !== e && (n = i[e - 1]), t.set("captionsTrack", n)
				}), this), this.setSubtitlesTracks = function(t) {
					Array.isArray(t) && (t.length ? (t.forEach((function(t) {
						return s(t)
					})), i.sort((function(e, i) {
						var n = t.indexOf(e);
						if (-1 === n) return 1;
						var a = t.indexOf(i);
						return -1 === a ? -1 : n - a
					}))) : (i = [], n = {}, o = 0), u())
				}, this.selectDefaultIndex = c, this.getCurrentIndex = function() {
					return t.get("captionsIndex")
				}, this.getCaptionsList = function() {
					return t.get("captionsList")
				}, this.destroy = function() {
					this.off(null, null, this)
				}
			};
		Object(o.j)(tt.prototype, f.a);
		var et = tt,
			it = i(43),
			nt = i(68);

		function at(t, e) {
			if (t.get("fullscreen")) return 1;
			if (!t.get("activeTab")) return 0;
			if (t.get("isFloating")) return 1;
			var i = t.get("intersectionRatio");
			return void 0 === i && (i = function(t) {
				var e = document.documentElement,
					i = document.body,
					n = {
						top: 0,
						left: 0,
						right: e.clientWidth || i.clientWidth,
						width: e.clientWidth || i.clientWidth,
						bottom: e.clientHeight || i.clientHeight,
						height: e.clientHeight || i.clientHeight
					};
				if (!i.contains(t)) return 0;
				if ("none" === window.getComputedStyle(t).display) return 0;
				var a = ot(t);
				if (!a) return 0;
				var o = a,
					r = t.parentNode,
					s = !1;
				for (; !s;) {
					var l = null;
					if (r === i || r === e || 1 !== r.nodeType ? (s = !0, l = n) : "visible" !== window.getComputedStyle(r).overflow && (l = ot(r)), l && (c = l, u = o, d = void 0, h = void 0, p = void 0, w = void 0, f = void 0, g = void 0, d = Math.max(c.top, u.top), h = Math.min(c.bottom, u.bottom), p = Math.max(c.left, u.left), w = Math.min(c.right, u.right), g = h - d, !(o = (f = w - p) >= 0 && g >= 0 && {
							top: d,
							bottom: h,
							left: p,
							right: w,
							width: f,
							height: g
						}))) return 0;
					r = r.parentNode
				}
				var c, u, d, h, p, w, f, g;
				var j = a.width * a.height,
					m = o.width * o.height;
				return j ? m / j : 0
			}(e), window.top !== window.self && i) ? 0 : i
		}

		function ot(t) {
			try {
				return t.getBoundingClientRect()
			} catch (t) {}
		}
		var rt = i(62),
			st = i(49),
			lt = i(85),
			ct = i(11);
		var ut = i(39),
			dt = i(7),
			ht = i(6),
			pt = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
			wt = function(t, e, i) {
				for (var n = t.requestFullscreen || t.webkitRequestFullscreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullscreen, a = e.exitFullscreen || e.webkitExitFullscreen || e.webkitCancelFullScreen || e.mozCancelFullScreen || e.msExitFullscreen, o = !(!n || !a), r = pt.length; r--;) e.addEventListener(pt[r], i);
				return {
					events: pt,
					supportsDomFullscreen: function() {
						return o
					},
					requestFullscreen: function() {
						n.call(t, {
							navigationUI: "hide"
						})
					},
					exitFullscreen: function() {
						null !== this.fullscreenElement() && a.apply(e)
					},
					fullscreenElement: function() {
						var t = e.fullscreenElement,
							i = e.webkitCurrentFullScreenElement,
							n = e.mozFullScreenElement,
							a = e.msFullscreenElement;
						return null === t ? t : t || i || n || a
					},
					destroy: function() {
						for (var t = pt.length; t--;) e.removeEventListener(pt[t], i)
					}
				}
			},
			ft = wt.requestFullscreen,
			gt = wt.requestFullscreen,
			jt = i(34);

		function mt(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}
		var bt = function(t) {
				var e, i;

				function n(e, i) {
					var n;
					return (n = t.call(this) || this).revertAlternateClickHandlers(), n.domElement = i, n.model = e, n.ui = new jt.a(i).on("click tap", n.clickHandler, mt(n)).on("doubleClick doubleTap", (function() {
						this.alternateDoubleClickHandler ? this.alternateDoubleClickHandler() : this.trigger("doubleClick")
					}), mt(n)), n
				}
				i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
				var o = n.prototype;
				return o.destroy = function() {
					this.ui && (this.ui.destroy(), this.ui = null, this.domElement = null, this.model = null, this.revertAlternateClickHandlers())
				}, o.clickHandler = function(t) {
					this.model && (this.alternateClickHandler ? this.alternateClickHandler(t) : this.trigger(t.type === a.o ? "click" : "tap"))
				}, o.element = function() {
					return this.domElement
				}, o.setAlternateClickHandlers = function(t, e) {
					this.alternateClickHandler = t, this.alternateDoubleClickHandler = e || null
				}, o.revertAlternateClickHandlers = function() {
					this.alternateClickHandler = null, this.alternateDoubleClickHandler = null
				}, n
			}(f.a),
			vt = i(91),
			yt = {
				linktarget: "_blank",
				margin: 8,
				hide: !1,
				position: "top-right"
			};

		function kt(t) {
			var e, i;
			Object(o.j)(this, f.a);
			var n = new Image;
			this.setup = function() {
				var r, s;
				((i = Object(o.j)({}, yt, t.get("logo"))).position = i.position || yt.position, i.hide = "true" === i.hide.toString(), i.file && "control-bar" !== i.position) && (e || (e = Object(dt.e)((r = i.position, s = i.hide, '<div class="jw-logo jw-logo-' + r + (s ? " jw-hide" : "") + ' jw-reset"></div>'))), t.set("logo", i), n.onload = function() {
					var n = this.height,
						a = this.width,
						o = {
							backgroundImage: 'url("' + this.src + '")'
						};
					if (i.margin !== yt.margin) {
						var r = /(\w+)-(\w+)/.exec(i.position);
						3 === r.length && (o["margin-" + r[1]] = i.margin, o["margin-" + r[2]] = i.margin)
					}
					var s = .15 * t.get("containerHeight"),
						l = .15 * t.get("containerWidth");
					if (n > s || a > l) {
						var c = a / n;
						l / s > c ? (n = s, a = s * c) : (a = l, n = l / c)
					}
					o.width = Math.round(a), o.height = Math.round(n), Object(ct.d)(e, o), t.set("logoWidth", o.width)
				}, n.src = i.file, i.link && (e.setAttribute("tabindex", "0"), e.setAttribute("aria-label", t.get("localization").logo)), this.ui = new jt.a(e).on("click tap enter", (function(t) {
					t && t.stopPropagation && t.stopPropagation(), this.trigger(a.B, {
						link: i.link,
						linktarget: i.linktarget
					})
				}), this))
			}, this.setContainer = function(t) {
				e && t.appendChild(e)
			}, this.element = function() {
				return e
			}, this.position = function() {
				return i.position
			}, this.destroy = function() {
				n.onload = null, this.ui && this.ui.destroy()
			}
		}
		var xt = function() {
				function t(t) {
					this.model = t, this.image = null
				}
				var e = t.prototype;
				return e.setup = function(t) {
					this.el = t, this.hasZoomThumbnail = this.model.get("_abZoomThumbnail"), this.hasZoomThumbnail && (this.zoomOriginX = Math.ceil(100 * Math.random()) + "%", this.zoomOriginY = Math.ceil(100 * Math.random()) + "%", this.model.on("change:viewable", this.pauseZoomThumbnail, this), this.model.on("change:isFloating", this.enableZoomThumbnail, this))
				}, e.setImage = function(t) {
					var e = this.image;
					e && (e.onload = null), this.image = null;
					var i = "";
					"string" == typeof t && (i = 'url("' + t + '")', (e = this.image = new Image).src = t), this.hasZoomThumbnail ? (this.imageEl = document.createElement("div"), Object(ct.d)(this.imageEl, {
						backgroundImage: i
					}), this.el && this.el.appendChild(this.imageEl), this.enableZoomThumbnail()) : Object(ct.d)(this.el, {
						backgroundImage: i
					})
				}, e.enableZoomThumbnail = function() {
					var t = this;
					this.hasZoomThumbnail && !this.model.get("isFloating") && (clearTimeout(this.zoomThumbnailTimeout), this.zoomThumbnailTimeout = setTimeout((function() {
						t.imageEl && (t.imageEl.classList.add("jw-ab-zoom-thumbnail"), t.imageEl.style.transformOrigin = t.zoomOriginX + " " + t.zoomOriginY)
					}), 2e3))
				}, e.pauseZoomThumbnail = function() {
					clearTimeout(this.zoomThumbnailTimeout), this.imageEl && (this.imageEl.style.animationPlayState = this.model.get("viewable") ? "running" : "paused")
				}, e.removeZoomThumbnail = function() {
					clearTimeout(this.zoomThumbnailTimeout), this.imageEl && this.imageEl.classList.remove("jw-ab-zoom-thumbnail")
				}, e.resize = function(t, e, i) {
					var n, a = this;
					if ("uniform" === i) {
						if (t && (this.playerAspectRatio = t / e), !this.playerAspectRatio || !this.image || "complete" !== (n = this.model.get("state")) && "idle" !== n && "error" !== n && "buffering" !== n) return;
						var o = this.image,
							r = null;
						if (o) {
							if (0 === o.width) return void(o.onload = function() {
								a.resize(t, e, i)
							});
							var s = o.width / o.height;
							Math.abs(this.playerAspectRatio - s) < .09 && (r = "cover")
						}
						Object(ct.d)(this.el, {
							backgroundSize: r
						})
					}
				}, e.element = function() {
					return this.el
				}, e.destroy = function() {
					this.hasZoomThumbnail && (this.removeZoomThumbnail(), this.model.off(null, null, this))
				}, t
			}(),
			Tt = i(147),
			Ot = function(t) {
				var e = new xt(t),
					i = e.setImage.bind(e);
				return (e = Object(o.j)(e, f.a)).setImage = function(t, n, a, o) {
					if (i(t), n) {
						var r = o._model;
						new Tt.a("posterItem", e.el, a, o, (function() {
							e.trigger("videoThumbnailFirstFrame", {
								feedData: a.feedData,
								target: a,
								ui: "poster",
								viewable: r.get("viewable")
							})
						})).init()
					}
				}, e
			},
			Ct = i(127),
			Mt = function() {
				function t(t) {
					this.container = t, this.input = t.querySelector(".jw-media")
				}
				var e = t.prototype;
				return e.disable = function() {
					var t = this.container;
					t && (Object(dt.o)(t, "jw-floating-dragged"), Object(dt.o)(t, "jw-floating-dragging"), Et(t, "auto")), this.ui && (this.ui.destroy(), this.ui = null)
				}, e.enable = function() {
					var t, e, i, n, a, o, r, s, l = this.container,
						c = this.input,
						u = 0,
						d = 0;
					this.ui = new jt.a(c, {
						preventScrolling: !0
					}).on("dragStart", (function(i) {
						var n = i.pageX,
							c = i.pageY,
							u = window,
							d = u.innerWidth,
							h = u.innerHeight,
							p = l.offsetLeft,
							w = l.offsetTop,
							f = l.offsetWidth,
							g = l.offsetHeight;
						t = n, e = c, a = -p, o = -w, r = _t(d, p, f), s = _t(h, w, g), Object(dt.a)(l, "jw-floating-dragged"), Object(dt.a)(l, "jw-floating-dragging"), Et(l, "transform")
					})).on("drag", (function(c) {
						var h = c.pageX,
							p = c.pageY;
						i = St(u, h, t, r, a), n = St(d, p, e, s, o), Object(ct.e)(l, "translate(" + i + "px, " + n + "px)")
					})).on("dragEnd", (function() {
						Object(dt.o)(l, "jw-floating-dragging"), Et(l, "auto"), u = i, d = n
					}))
				}, t
			}(),
			_t = function(t, e, i) {
				return t - e - i
			},
			St = function(t, e, i, n, a) {
				return Math.max(Math.min(t + e - i, n), a)
			},
			Et = function(t, e) {
				return Object(ct.d)(t, {
					willChange: e
				})
			};

		function At(t, e, i, n) {
			var a = {
				width: e
			};
			if (n && void 0 !== i && t.set("aspectratio", null), !t.get("aspectratio")) {
				var r = i;
				Object(o.v)(r) && 0 !== r && (r = Math.max(r, 44)), a.height = r
			}
			return a
		}
		var Lt = null,
			It = {
				floatingPlayer: Lt
			};
		Object.defineProperty(It, "floatingPlayer", {
			get: function() {
				return Lt
			},
			set: function(t) {
				if (t !== Lt) {
					Lt = t;
					var e = Pt.slice();
					Pt.length = 0, e.forEach((function(t) {
						t.startFloating()
					}))
				}
			}
		});
		var zt, Pt = [],
			Bt = function(t) {
				var e = Pt.indexOf(t); - 1 !== e && Pt.splice(e, 1)
			},
			Rt = function() {
				function t(t, e, i, n) {
					void 0 === n && (n = v.OS.mobile), this._playerEl = i.player, this._wrapperEl = i.wrapper, this._preview = i.preview, this._model = t, this._floatingUI = new Mt(this._wrapperEl), this._floatingStoppedForever = !1, this._lastIntRatio = 0, this._playerBounds = e, this._isMobile = n, this._mobileCheckCanFire = !0, this._boundThrottledMobileFloatScrollHandler = this.throttledMobileFloatScrollHandler.bind(this), this._boundInitFloatingBehavior = this.initFloatingBehavior.bind(this)
				}
				var e = t.prototype;
				return e.setup = function() {
					this._model.change("floating", this._boundInitFloatingBehavior)
				}, e.initFloatingBehavior = function() {
					if (!this._floatingStoppedForever && (nt.a.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler), Bt(this), this.getFloatingConfig())) {
						var t = this.getFloatMode();
						"notVisible" === t ? this._isMobile ? (nt.a.addScrollHandler(this._boundThrottledMobileFloatScrollHandler), this._boundThrottledMobileFloatScrollHandler()) : this.checkFloatIntersection() : "always" === t ? this.startFloating() : "never" === t && this.stopFloating()
					}
				}, e.updatePlayerBounds = function(t) {
					this._playerBounds = t
				}, e.getFloatingConfig = function() {
					return this._model.get("floating")
				}, e.getFloatMode = function() {
					var t = this.getFloatingConfig();
					return t && t.mode || "notVisible"
				}, e.resize = function() {
					this._model.get("isFloating") && this.updateFloatingSize()
				}, e.fosMobileBehavior = function() {
					return this._isMobile && !Object(dt.f)() && !this._model.get("fullscreen")
				}, e.shouldFloatOnViewable = function() {
					var t = this._model.get("state");
					return t !== a.nb && t !== a.mb && t !== a.lb
				}, e.startFloating = function(t) {
					var e, i = this,
						n = this._playerBounds;
					if (null === this.getFloatingPlayer()) {
						this.setFloatingPlayer(this._playerEl), this._model.set("isFloating", !0), this.transitionFloating(!0), Object(dt.a)(this._playerEl, "jw-flag-floating"), t && (Object(ct.d)(this._wrapperEl, {
							transform: "translateY(-" + (62 - n.top) + "px)"
						}), setTimeout((function() {
							Object(ct.d)(i._wrapperEl, {
								transform: "translateY(0)",
								transition: "transform 150ms cubic-bezier(0, 0.25, 0.25, 1)"
							})
						})));
						var a = this._preview.el;
						Object(ct.d)(this._playerEl, {
							backgroundImage: a.style.backgroundImage
						}), this.updateFloatingSize(), this._model.get("instreamMode") || this._floatingUI.enable(), this._model.trigger("forceResponsiveListener", {})
					} else this.getFloatingPlayer() !== this._playerEl && "always" === this.getFloatMode() && (e = this, -1 === Pt.indexOf(e) && Pt.push(e))
				}, e.stopFloating = function(t, e) {
					var i = this;
					if (t && (this._floatingStoppedForever = !0, nt.a.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler)), this.getFloatingPlayer() === this._playerEl) {
						this.transitionFloating(!0), this.setFloatingPlayer(null), this._model.set("isFloating", !1);
						var n = this._playerBounds,
							a = function() {
								Object(dt.o)(i._playerEl, "jw-flag-floating"), i._model.trigger("forceAspectRatioChange", {}), Object(ct.d)(i._playerEl, {
									backgroundImage: null
								}), Object(ct.d)(i._wrapperEl, {
									maxWidth: null,
									width: null,
									height: null,
									transform: null,
									transition: null,
									"transition-timing-function": null
								})
							};
						e ? (Object(ct.d)(this._wrapperEl, {
							transform: "translateY(-" + (62 - n.top) + "px)",
							"transition-timing-function": "ease-out"
						}), setTimeout(a, 150)) : a(), this.disableFloatingUI(), this._model.trigger("forceResponsiveListener", {})
					}
				}, e.transitionFloating = function(t) {
					Object(dt.v)(this._wrapperEl, "jw-float-transition", t)
				}, e.updateFloatingSize = function() {
					var t = this._playerBounds,
						e = this._model.get("width"),
						i = this._model.get("height"),
						n = At(this._model, e);
					if (n.maxWidth = Math.min(400, t.width), !this._model.get("aspectratio")) {
						var a = t.width,
							r = t.height / a || .5625;
						Object(o.v)(e) && Object(o.v)(i) && (r = i / e), this._model.trigger("forceAspectRatioChange", {
							ratio: 100 * r + "%"
						})
					}
					Object(ct.d)(this._wrapperEl, n)
				}, e.enableFloatingUI = function() {
					this._floatingUI.enable()
				}, e.disableFloatingUI = function() {
					this._floatingUI.disable()
				}, e.setFloatingPlayer = function(t) {
					It.floatingPlayer = t
				}, e.getFloatingPlayer = function() {
					return It.floatingPlayer
				}, e.destroy = function() {
					this.getFloatingPlayer() === this._playerEl && this.setFloatingPlayer(null), this.getFloatingConfig() && this._isMobile && nt.a.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler), Bt(this), this._model.off("change:floating", this._boundInitFloatingBehavior)
				}, e.updateFloating = function(t, e) {
					t < .5 && !Object(ht.m)() && this.shouldFloatOnViewable() ? this.startFloating(e) : this.stopFloating(!1, e)
				}, e.checkFloatOnScroll = function() {
					if ("notVisible" === this.getFloatMode()) {
						var t = this._model.get("isFloating"),
							e = this._playerBounds,
							i = e.top < 62,
							n = window.scrollY || window.pageYOffset,
							a = i ? e.top <= n : e.top <= n + 62;
						!t && a ? this.updateFloating(0, i) : t && !a && this.updateFloating(1, i)
					}
				}, e.throttledMobileFloatScrollHandler = function() {
					var t = this;
					this.fosMobileBehavior() && this._model.get("inDom") && (clearTimeout(this._mobileDebounceTimeout), this._mobileDebounceTimeout = setTimeout(this.checkFloatOnScroll.bind(this), 150), this._mobileCheckCanFire && (this._mobileCheckCanFire = !1, this.checkFloatOnScroll(), setTimeout((function() {
						t._mobileCheckCanFire = !0
					}), 50)))
				}, e.checkFloatIntersection = function(t) {
					var e = "number" == typeof t,
						i = e ? t : this._lastIntRatio;
					this._canFloat = this._canFloat || i >= .5, !this.getFloatingConfig() || "notVisible" !== this.getFloatMode() || this.fosMobileBehavior() || this._floatingStoppedForever || this._canFloat && this.updateFloating(i), e && (this._lastIntRatio = t)
				}, e.updateStyles = function() {
					!this._floatingStoppedForever && this.getFloatingConfig() && "notVisible" === this.getFloatMode() && this._boundThrottledMobileFloatScrollHandler(), this.transitionFloating(!1)
				}, t
			}(),
			Ft = i(70);
		i(150);
		var Vt = v.OS.mobile,
			Ht = v.Browser.ie;
		var Nt = function(t, e) {
				var i, n, r, s, l, c, u = this,
					d = Object(o.j)(this, f.a, {
						isSetup: !1,
						api: t,
						model: e
					}),
					h = e.get("localization"),
					p = Object(dt.e)((i = e.get("id"), n = h.player, '<div id="' + i + '" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="' + (n || "") + '" role="application"><div class="jw-aspect jw-reset"></div><div class="jw-wrapper jw-reset"><div class="jw-top jw-reset"></div><div class="jw-aspect jw-reset"></div><div class="jw-media jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jw-reset-text" dir="auto"><div class="jw-title-primary jw-reset-text"></div><div class="jw-title-secondary jw-reset-text"></div></div><div class="jw-overlays jw-reset"></div><div class="jw-hidden-accessibility"><span class="jw-time-update" aria-live="assertive"></span><span class="jw-volume-update" aria-live="assertive"></span></div></div></div>')),
					g = p.querySelector(".jw-wrapper"),
					j = p.querySelector(".jw-media"),
					m = new Ot(e, t),
					b = new Ct.a(e),
					y = new vt.b(e);
				y.on("all", d.trigger, d);
				var k = -1,
					x = -1,
					T = -1,
					O = e.get("floating");
				this.dismissible = O && O.dismissible;
				var C, M, _, S = {},
					E = new Rt(e, S, {
						player: p,
						wrapper: g,
						preview: m
					}),
					A = null,
					L = null;

				function I() {
					Object(st.a)(x), x = Object(st.b)(z)
				}

				function z() {
					d.isSetup && (d.updateBounds(), d.updateStyles(), d.checkResized())
				}

				function P(t, i) {
					if (Object(o.v)(t) && Object(o.v)(i)) {
						var n = Object(lt.a)(t);
						Object(lt.b)(p, n);
						var a = n < 2;
						Object(dt.v)(p, "jw-flag-small-player", a), Object(dt.v)(p, "jw-orientation-portrait", i > t)
					}
					if (e.get("controls")) {
						var r = function(t) {
							var e = t.get("height");
							if (t.get("aspectratio")) return !1;
							if ("string" == typeof e && e.indexOf("%") > -1) return !1;
							var i = 1 * e || NaN;
							return !!(i = isNaN(i) ? t.get("containerHeight") : i) && !!(i && i <= 44)
						}(e);
						Object(dt.v)(p, "jw-flag-audio-player", r), e.set("audioMode", r)
					}
				}

				function B() {
					e.set("visibility", at(e, p))
				}

				function R(t, e) {
					var i = {
						controls: e
					};
					e ? (zt = ut.a.controls) ? F() : (i.loadPromise = Object(ut.b)().then((function(e) {
						zt = e;
						var i = t.get("controls");
						return i && F(), i
					})), i.loadPromise.catch((function(t) {
						d.trigger(a.wb, t)
					}))) : d.removeControls(), s && l && d.trigger(a.p, i)
				}

				function F() {
					var t = new zt(document, d.element());
					d.addControls(t)
				}

				function V(t, e, i) {
					e && !i && (tt(t, t.get("state")), d.updateStyles())
				}

				function H(t) {
					L && L.mouseMove(t)
				}

				function N(t) {
					L && !L.showing && "IFRAME" === t.target.nodeName && L.userActive()
				}

				function D(t) {
					L && L.showing && (t.relatedTarget && !p.contains(t.relatedTarget) || !t.relatedTarget && v.Features.iframe) && L.userActive()
				}

				function q(t, e) {
					Object(dt.p)(p, /jw-stretch-\S+/, "jw-stretch-" + e)
				}

				function U(t, e) {
					Object(dt.v)(p, "jw-flag-aspect-mode", !!e);
					var i = p.querySelectorAll(".jw-aspect");
					Object(ct.d)(i, {
						paddingTop: e || null
					}), d.isSetup && e && !t.get("isFloating") && (Object(ct.d)(p, At(t, t.get("width"))), z())
				}

				function W(i) {
					i.link ? (t.pause({
						reason: "interaction"
					}), t.setFullscreen(!1), Object(dt.l)(i.link, i.linktarget, {
						rel: "noreferrer"
					})) : e.get("controls") && t.playToggle({
						reason: "interaction"
					})
				}
				this.updateBounds = function() {
					Object(st.a)(x);
					var t = Tt(),
						i = document.body.contains(t),
						n = Object(dt.c)(t),
						a = Math.round(n.width),
						o = Math.round(n.height);
					if (S = Object(dt.c)(p), E.updatePlayerBounds(S), a === s && o === l) return s && l || I(), void e.set("inDom", i);
					a && o || s && l || I(), (a || o || i) && (e.set("containerWidth", a), e.set("containerHeight", o)), e.set("inDom", i), i && nt.a.observe(p)
				}, this.updateStyles = function() {
					var t = e.get("containerWidth"),
						i = e.get("containerHeight");
					P(t, i), L && L.resize(t, i), Y(t, i), y.resize(), E.updateStyles()
				}, this.checkResized = function() {
					var t = e.get("containerWidth"),
						i = e.get("containerHeight"),
						n = e.get("isFloating");
					if (t !== s || i !== l) {
						this.resizeListener || (this.resizeListener = new Ft.a(g, this, e)), s = t, l = i, d.trigger(a.ib, {
							width: t,
							height: i
						});
						var o = Object(lt.a)(t);
						A !== o && (A = o, d.trigger(a.k, {
							breakpoint: A
						}))
					}
					n !== c && (c = n, d.trigger(a.y, {
						floating: n
					}), B())
				}, this.responsiveListener = I, this.setup = function() {
					m.setup(p.querySelector(".jw-preview")), b.setup(p.querySelector(".jw-title")), (r = new kt(e)).setup(), r.setContainer(g), r.on(a.B, W), y.setup(p.id, e.get("captions")), b.element().parentNode.insertBefore(y.element(), b.element()), C = function(t, e, i) {
						var n = new bt(e, i),
							o = e.get("controls");
						n.on({
							click: function() {
								d.trigger(a.q), Tt().focus(), L && (pt() ? L.settingsMenu.close() : mt() ? L.infoOverlay.close() : t.playToggle({
									reason: "interaction"
								}))
							},
							tap: function() {
								d.trigger(a.q), pt() && L.settingsMenu.close(), mt() && L.infoOverlay.close();
								var i = e.get("state");
								if (o && (i === a.nb || i === a.lb || e.get("instream") && i === a.pb) && t.playToggle({
										reason: "interaction"
									}), o && i === a.pb) {
									if (e.get("instream") || e.get("castActive") || "audio" === e.get("mediaType")) return;
									Object(dt.v)(p, "jw-flag-controls-hidden"), d.dismissible && Object(dt.v)(p, "jw-floating-dismissible", Object(dt.i)(p, "jw-flag-controls-hidden")), y.renderCues(!0)
								} else L && (L.showing ? L.userInactive() : L.userActive())
							},
							doubleClick: function() {
								return L && t.setFullscreen()
							}
						}), Vt || (p.addEventListener("mousemove", H), p.addEventListener("mouseover", N), p.addEventListener("mouseout", D));
						return n
					}(t, e, j), _ = new jt.a(p).on("click", (function() {})), M = function(t, e, i, n) {
						var a = function() {
							return n.get("ampController") && !v.OS.iOS && !v.Browser.safari
						};
						return wt.requestFullscreen = function() {
							if (!a()) return ft.call(wt)
						}, wt.exitFullscreen = function() {
							if (!a()) return gt.call(wt)
						}, wt(t, e, i)
					}(p, document, Q, e), e.on("change:hideAdsControls", (function(t, e) {
						Object(dt.v)(p, "jw-flag-ads-hide-controls", e)
					})), e.on("change:scrubbing", (function(t, e) {
						Object(dt.v)(p, "jw-flag-dragging", e)
					})), e.on("change:playRejected", (function(t, e) {
						Object(dt.v)(p, "jw-flag-play-rejected", e)
					})), e.on(a.Y, Z), e.on("change:" + a.V, (function() {
						Y(), y.resize()
					})), e.player.on("change:errorEvent", $), e.change("stretching", q);
					var i = e.get("width"),
						n = e.get("height"),
						o = At(e, i, n);
					Object(ct.d)(p, o), e.change("aspectratio", U), P(i, n), e.get("controls") || (Object(dt.a)(p, "jw-flag-controls-hidden"), Object(dt.o)(p, "jw-floating-dismissible")), Ht && Object(dt.a)(p, "jw-ie");
					var s = e.get("skin") || {};
					s.name && Object(dt.p)(p, /jw-skin-\S+/, "jw-skin-" + s.name);
					var l = function(t) {
						t || (t = {});
						var e = t.active,
							i = t.inactive,
							n = t.background,
							a = {};
						return a.controlbar = function(t) {
							if (t || e || i || n) {
								var a = {};
								return t = t || {}, a.iconsActive = t.iconsActive || e, a.icons = t.icons || i, a.text = t.text || i, a.background = t.background || n, a
							}
						}(t.controlbar), a.timeslider = function(t) {
							if (t || e) {
								var i = {};
								return t = t || {}, i.progress = t.progress || e, i.rail = t.rail, i
							}
						}(t.timeslider), a.menus = function(t) {
							if (t || e || i || n) {
								var a = {};
								return t = t || {}, a.text = t.text || i, a.textActive = t.textActive || e, a.background = t.background || n, a
							}
						}(t.menus), a.tooltips = function(t) {
							if (t || i || n) {
								var e = {};
								return t = t || {}, e.text = t.text || i, e.background = t.background || n, e
							}
						}(t.tooltips), a
					}(s);
					! function(t, e) {
						var i;

						function n(e, i, n, a) {
							if (n) {
								e = Object(w.f)(e, "#" + t + (a ? "" : " "));
								var o = {};
								o[i] = n, Object(ct.b)(e.join(", "), o, t)
							}
						}
						e && (e.controlbar && function(e) {
							n([".jw-controlbar .jw-icon-inline.jw-text", ".jw-title-primary", ".jw-title-secondary"], "color", e.text), e.icons && (n([".jw-button-color:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:not(.jw-icon-cast)"], "color", e.icons), n([".jw-display-icon-container .jw-button-color"], "color", e.icons), Object(ct.b)("#" + t + " .jw-icon-cast google-cast-launcher.jw-off", "{--disconnected-color: " + e.icons + "}", t));
							e.iconsActive && (n([".jw-display-icon-container .jw-button-color:hover", ".jw-display-icon-container .jw-button-color:focus"], "color", e.iconsActive), n([".jw-button-color.jw-toggle:not(.jw-icon-cast)", ".jw-button-color:hover:not(.jw-icon-cast)", ".jw-button-color:focus:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:hover:not(.jw-icon-cast)"], "color", e.iconsActive), n([".jw-svg-icon-buffer"], "fill", e.icons), Object(ct.b)("#" + t + " .jw-icon-cast:hover google-cast-launcher.jw-off", "{--disconnected-color: " + e.iconsActive + "}", t), Object(ct.b)("#" + t + " .jw-icon-cast:focus google-cast-launcher.jw-off", "{--disconnected-color: " + e.iconsActive + "}", t), Object(ct.b)("#" + t + " .jw-icon-cast google-cast-launcher.jw-off:focus", "{--disconnected-color: " + e.iconsActive + "}", t), Object(ct.b)("#" + t + " .jw-icon-cast google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t), Object(ct.b)("#" + t + " .jw-icon-cast google-cast-launcher:focus", "{--connected-color: " + e.iconsActive + "}", t), Object(ct.b)("#" + t + " .jw-icon-cast:hover google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t), Object(ct.b)("#" + t + " .jw-icon-cast:focus google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t));
							n([" .jw-settings-topbar", ":not(.jw-state-idle) .jw-controlbar", ".jw-flag-audio-player .jw-controlbar"], "background", e.background, !0)
						}(e.controlbar), e.timeslider && function(t) {
							var e = t.progress;
							"none" !== e && (n([".jw-progress", ".jw-knob"], "background-color", e), n([".jw-buffer"], "background-color", Object(ct.c)(e, 50)));
							n([".jw-rail"], "background-color", t.rail), n([".jw-background-color.jw-slider-time", ".jw-slider-time .jw-cue"], "background-color", t.background)
						}(e.timeslider), e.menus && (n([".jw-option", ".jw-toggle.jw-off", ".jw-skip .jw-skip-icon", ".jw-nextup-tooltip", ".jw-nextup-close", ".jw-settings-content-item", ".jw-related-title"], "color", (i = e.menus).text), n([".jw-option.jw-active-option", ".jw-option:not(.jw-active-option):hover", ".jw-option:not(.jw-active-option):focus", ".jw-settings-content-item:hover", ".jw-nextup-tooltip:hover", ".jw-nextup-tooltip:focus", ".jw-nextup-close:hover"], "color", i.textActive), n([".jw-nextup", ".jw-settings-menu"], "background", i.background)), e.tooltips && function(t) {
							n([".jw-skip", ".jw-tooltip .jw-text", ".jw-time-tip .jw-text"], "background-color", t.background), n([".jw-time-tip", ".jw-tooltip"], "color", t.background), n([".jw-skip"], "border", "none"), n([".jw-skip .jw-text", ".jw-skip .jw-icon", ".jw-time-tip .jw-text", ".jw-tooltip .jw-text"], "color", t.text)
						}(e.tooltips), e.menus && function(e) {
							if (e.textActive) {
								var i = {
									color: e.textActive,
									borderColor: e.textActive,
									stroke: e.textActive
								};
								Object(ct.b)("#" + t + " .jw-color-active", i, t), Object(ct.b)("#" + t + " .jw-color-active-hover:hover", i, t)
							}
							if (e.text) {
								var n = {
									color: e.text,
									borderColor: e.text,
									stroke: e.text
								};
								Object(ct.b)("#" + t + " .jw-color-inactive", n, t), Object(ct.b)("#" + t + " .jw-color-inactive-hover:hover", n, t)
							}
						}(e.menus))
					}(e.get("id"), l), e.set("mediaContainer", j), e.set("iFrame", v.Features.iframe), e.set("activeTab", Object(rt.a)()), e.set("touchMode", Vt && ("string" == typeof n || n >= 44)), nt.a.add(this), e.get("enableGradient") && !Ht && Object(dt.a)(p, "jw-ab-drop-shadow"), this.isSetup = !0, e.trigger("viewSetup", p);
					var c = document.body.contains(p);
					c && nt.a.observe(p), e.set("inDom", c), e.on("forceAspectRatioChange", (function(t) {
						var i = t.ratio || e.get("aspectratio");
						U(e, i)
					})), e.on("forceResponsiveListener", I), E.setup()
				}, this.init = function() {
					this.updateBounds(), e.on("change:fullscreen", X), e.on("change:activeTab", B), e.on("change:fullscreen", B), e.on("change:intersectionRatio", B), e.on("change:visibility", V), e.on("instreamMode", (function(t) {
						t ? yt() : xt()
					})), B(), 1 !== nt.a.size() || e.get("visibility") || V(e, 1, 0);
					var t = e.player;
					e.change("state", tt), t.change("controls", R), e.change("streamType", G), e.change("mediaType", J), t.change("playlistItem", (function(t, e) {
						ot(t, e)
					})), s = l = null, this.initFloatingBehavior(), this.checkResized()
				}, this.initFloatingBehavior = function() {
					E.initFloatingBehavior()
				}, this.addControls = function(i) {
					var n = this;
					L = i, Object(dt.o)(p, "jw-flag-controls-hidden"), Object(dt.v)(p, "jw-floating-dismissible", this.dismissible), i.enable(t, e), l && (P(s, l), i.resize(s, l), y.renderCues(!0)), i.on("userActive userInactive", (function() {
						var t = e.get("state");
						t !== a.qb && t !== a.kb || y.renderCues(!0)
					})), i.on("dismissFloating", (function() {
						n.stopFloating(!0), t.pause({
							reason: "interaction"
						})
					})), i.on("all", d.trigger, d), e.get("instream") && L.setupInstream()
				}, this.removeControls = function() {
					L && (L.disable(e), L = null), Object(dt.a)(p, "jw-flag-controls-hidden"), Object(dt.o)(p, "jw-floating-dismissible")
				};
				var X = function(e, i) {
					if (i && L && e.get("autostartMuted") && L.unmuteAutoplay(t, e), M.supportsDomFullscreen()) i ? M.requestFullscreen() : M.exitFullscreen(), K(p, i);
					else if (Ht) K(p, i);
					else {
						var n = e.get("instream"),
							a = n ? n.provider : null,
							o = e.getVideo() || a;
						o && o.setFullscreen && o.setFullscreen(i)
					}
				};

				function Y(t, i) {
					if ((t && !isNaN(1 * t) || (t = e.get("containerWidth"))) && (i && !isNaN(1 * i) || (i = e.get("containerHeight")))) {
						m && m.resize(t, i, e.get("stretching"));
						var n = e.getVideo();
						n && n.resize(t, i, e.get("stretching"))
					}
				}

				function Z(t) {
					Object(dt.v)(p, "jw-flag-ios-fullscreen", t.jwstate), Q(t)
				}

				function Q(t) {
					var i = e.get("fullscreen"),
						n = void 0 !== t.jwstate ? t.jwstate : function() {
							if (M.supportsDomFullscreen()) {
								var t = M.fullscreenElement();
								return !(!t || t !== p)
							}
							return e.getVideo().getFullScreen()
						}();
					i !== n && e.set("fullscreen", n), I(), clearTimeout(k), k = setTimeout(Y, 200)
				}

				function K(t, e) {
					Object(dt.v)(t, "jw-flag-fullscreen", e), Object(ct.d)(document.body, {
						overflowY: e ? "hidden" : ""
					}), e && L && L.userActive(), Y(), I()
				}

				function G(t, e) {
					var i = "LIVE" === e;
					Object(dt.v)(p, "jw-flag-live", i)
				}

				function J(t, e) {
					var i = "audio" === e;
					Object(dt.v)(p, "jw-flag-media-audio", i);
					var n = i ? j : j.nextSibling;
					m.el.parentNode.insertBefore(m.el, n)
				}

				function $(t, e) {
					if (e) {
						var i = Object(it.a)(t, e);
						it.a.cloneIcon && i.querySelector(".jw-icon").appendChild(it.a.cloneIcon("error")), b.hide(), p.appendChild(i.firstChild), Object(dt.v)(p, "jw-flag-audio-player", !!t.get("audioMode"))
					} else b.playlistItem(t, t.get("playlistItem"))
				}

				function tt(t, e, i) {
					if (d.isSetup) {
						if (i === a.mb) {
							var n = p.querySelector(".jw-error-msg");
							n && n.parentNode.removeChild(n)
						}
						Object(st.a)(T), e === a.qb ? et(e) : T = Object(st.b)((function() {
							return et(e)
						}))
					}
				}

				function et(t) {
					switch (e.get("controls") && t !== a.pb && Object(dt.i)(p, "jw-flag-controls-hidden") && (Object(dt.o)(p, "jw-flag-controls-hidden"), Object(dt.v)(p, "jw-floating-dismissible", d.dismissible)), Object(dt.p)(p, /jw-state-\S+/, "jw-state-" + t), t) {
						case a.mb:
							d.stopFloating();
						case a.nb:
						case a.lb:
							y && y.hide(), m && m.enableZoomThumbnail();
							break;
						default:
							y && (y.show(), t === a.pb && L && !L.showing && y.renderCues(!0)), m && m.removeZoomThumbnail()
					}
				}
				this.resize = function(t, i) {
					var n = At(e, t, i, !0);
					void 0 !== t && void 0 !== i && (e.set("width", t), e.set("height", i)), Object(ct.d)(p, n), E.resize(), z()
				}, this.resizeMedia = Y, this.setPosterImage = function(t, e) {
					e.setImage(t && t.image)
				};
				var ot = function(t, e) {
						u.setPosterImage(e, m), Vt && function(t, e) {
							var i = t.get("mediaElement");
							if (i) {
								var n = Object(dt.j)(e.title || "");
								i.setAttribute("title", n.textContent)
							}
						}(t, e)
					},
					pt = function() {
						var t = L && L.settingsMenu;
						return !(!t || !t.visible)
					},
					mt = function() {
						var t = L && L.infoOverlay;
						return !(!t || !t.visible)
					},
					yt = function() {
						Object(dt.a)(p, "jw-flag-ads"), L && L.setupInstream(), E.disableFloatingUI()
					},
					xt = function() {
						if (C) {
							L && L.destroyInstream(e), E.getFloatingPlayer() !== p || Object(ht.m)() || E.enableFloatingUI(), d.setAltText(""), Object(dt.o)(p, ["jw-flag-ads", "jw-flag-ads-hide-controls"]), e.set("hideAdsControls", !1);
							var t = e.getVideo();
							t && t.setContainer(j), C.revertAlternateClickHandlers()
						}
					};

				function Tt() {
					return e.get("isFloating") ? g : p
				}
				this.setAltText = function(t) {
					e.set("altText", t)
				}, this.clickHandler = function() {
					return C
				}, this.getContainer = this.element = function() {
					return p
				}, this.getWrapper = function() {
					return g
				}, this.controlsContainer = function() {
					return L ? L.element() : null
				}, this.getSafeRegion = function(t) {
					void 0 === t && (t = !0);
					var e = {
						x: 0,
						y: 0,
						width: s || 0,
						height: l || 0
					};
					return L && t && (e.height -= L.controlbarHeight()), e
				}, this.setCaptions = function(t) {
					y.clear(), y.setup(e.get("id"), t), y.resize()
				}, this.setIntersection = function(t) {
					var i = Math.round(100 * t.intersectionRatio) / 100;
					e.set("intersectionRatio", i), this.checkFloatIntersection(i)
				}, this.checkFloatIntersection = function(t) {
					E.checkFloatIntersection(t)
				}, this.stopFloating = function(t, e) {
					E.stopFloating(t, e)
				}, this.destroy = function() {
					e.destroy(), m.destroy(), nt.a.unobserve(p), nt.a.remove(this), this.isSetup = !1, this.off(), Object(st.a)(x), clearTimeout(k), _ && (_.destroy(), _ = null), M && (M.destroy(), M = null), L && L.disable(e), C && (C.destroy(), p.removeEventListener("mousemove", H), p.removeEventListener("mouseout", D), p.removeEventListener("mouseover", N), C = null), y.destroy(), r && (r.destroy(), r = null), Object(ct.a)(e.get("id")), this.resizeListener && (this.resizeListener.destroy(), delete this.resizeListener), E.destroy()
				}
			},
			Dt = !1,
			qt = window.$sf,
			Ut = function(t, e) {
				this.playerElement = t, this.wrapperElement = e
			};
		Object(o.j)(Ut.prototype, {
			setup: function(t) {
				var e = Object(dt.e)(function(t) {
					return '<span class="jw-text jw-reset">' + t + "</span>"
				}(t));
				this.wrapperElement.appendChild(e), Object(dt.a)(this.playerElement, "jw-flag-top")
			}
		});
		var Wt, Xt = Ut,
			Yt = i(87),
			Zt = i.n(Yt),
			Qt = i(88),
			Kt = i(148),
			Gt = function(t, e) {
				var n = "free" === e.get("edition");
				n && !Wt && (i(154), Wt = !0);
				var o = new Nt(t, e),
					r = o.setup;
				if (o.setPosterImage = function(i, n) {
						var a = Object(Kt.a)(i.images);
						a ? (v.OS.mobile || a.reverse(), i.videoThumbnail = a[0].src, n.on("videoThumbnailFirstFrame", (function(e) {
							t.trigger("videoThumbFirstFrame", e)
						})), n.setImage(i && i.image, !0, i, e)) : n.setImage(i && i.image)
					}, o.setup = function() {
						var t = this;
						(r.call(this), e.get("displayHeading")) && new Xt(o.getContainer(), o.getContainer().querySelector(".jw-top")).setup(e.get("localization").advertising.displayHeading);
						e.change("castAvailable", (function(e, i) {
							var n = e.get("cast");
							Object(n) === n && Object(dt.v)(t.getContainer(), "jw-flag-cast-available", i)
						}), this), e.change("castActive", (function(e, i) {
							var n = e.get("airplayActive");
							Object(dt.v)(t.getContainer(), "jw-flag-casting", i || !1), Object(dt.v)(t.getContainer(), "jw-flag-airplay-casting", n || !1)
						}), this)
					}, n) {
					var s = o.addControls;
					o.addControls = function(t) {
						s.call(this, t);
						var e = document.querySelector(".jw-logo-button");
						if (e) {
							var i = Object(Qt.b)(Zt.a);
							e.appendChild(i)
						}
					}
				}
				var l = e.get("advertising");
				return l && l.outstream && function(t, e) {
					Dt || (Dt = !0, i(152));
					var n = e.model,
						o = e.getSafeRegion;
					e.getSafeRegion = function(t) {
						var e = o.call(this, t);
						return e.height = this.api.getHeight(), e
					}, n.on("change:mediaState", (function(i, r) {
						if (r === a.ob || r === a.qb) {
							if (n.off("change:mediaState", null, e), qt && qt.ext && qt.ext.supports()["exp-push"]) {
								var s = qt.ext.geom(),
									l = s.exp,
									c = s.self,
									u = Math.min(t.getHeight() - c.h, l.yx ? 1 / 0 : l.b),
									d = Math.min(t.getWidth() - c.w, l.xs ? 1 / 0 : l.r);
								(u > 0 || d > 0) && qt.ext.expand({
									b: Math.max(0, u),
									r: Math.max(0, d),
									push: !0
								})
							}
							Object(dt.o)(e.getContainer(), "jw-flag-outstream-pending"), e.getSafeRegion = o, e.responsiveListener()
						}
					}), e);
					var r = e.setup;
					e.setup = function() {
						r.call(this), Object(dt.a)(this.getContainer(), "jw-flag-outstream jw-flag-outstream-pending")
					};
					var s = n.get("advertising");
					s.dismissible && (e.dismissible = !0, e.on("dismissFloating", (function() {
						t.remove()
					}))), qt && qt.ext && t.once(a.hb, (function() {
						qt.ext.register(t.getWidth(), t.getHeight())
					})), t.once(a.db, (function() {
						e.stopFloating(!0), "close" === s.endstate && (Object(dt.a)(e.getContainer(), "jw-flag-outstream-close"), qt && qt.ext && qt.ext.collapse())
					}))
				}(t, o), o
			};

		function Jt(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
		}

		function $t(t, e, i) {
			return e && Jt(t.prototype, e), i && Jt(t, i), t
		}

		function te(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function ee(t, e) {
			t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
		}
		var ie = /^change:(.+)$/;

		function ne(t, e, i) {
			Object.keys(e).forEach((function(n) {
				n in e && e[n] !== i[n] && t.trigger("change:" + n, t, e[n], i[n])
			}))
		}

		function ae(t, e) {
			t && t.off(null, null, e)
		}
		var oe = function(t) {
				function e(e, i) {
					var n;
					return (n = t.call(this) || this)._model = e, n._mediaModel = null, Object(o.j)(e.attributes, {
						altText: "",
						fullscreen: !1,
						logoWidth: 0,
						scrubbing: !1
					}), e.on("all", (function(t, a, o, r) {
						a === e && (a = te(n)), i && !i(t, a, o, r) || n.trigger(t, a, o, r)
					}), te(n)), e.on("change:mediaModel", (function(t, e) {
						n.mediaModel = e
					}), te(n)), n
				}
				ee(e, t);
				var i = e.prototype;
				return i.get = function(t) {
					var e = this._mediaModel;
					return e && t in e.attributes ? e.get(t) : this._model.get(t)
				}, i.set = function(t, e) {
					return this._model.set(t, e)
				}, i.getVideo = function() {
					return this._model.getVideo()
				}, i.destroy = function() {
					ae(this._model, this), ae(this._mediaModel, this), this.off()
				}, $t(e, [{
					key: "mediaModel",
					set: function(t) {
						var e = this,
							i = this._mediaModel;
						ae(i, this), this._mediaModel = t, t.on("all", (function(i, n, a, o) {
							n === t && (n = e), e.trigger(i, n, a, o)
						}), this), i && ne(this, t.attributes, i.attributes)
					}
				}]), e
			}(y.a),
			re = function(t) {
				function e(e) {
					var i;
					return (i = t.call(this, e, (function(t) {
						var e = i._instreamModel;
						if (e) {
							var n = ie.exec(t);
							if (n)
								if (n[1] in e.attributes) return !1
						}
						return !0
					})) || this)._instreamModel = null, i._playerViewModel = new oe(i._model), e.on("change:instream", (function(t, e) {
						i.instreamModel = e ? e.model : null
					}), te(i)), i
				}
				ee(e, t);
				var i = e.prototype;
				return i.get = function(t) {
					var e = this._mediaModel;
					if (e && t in e.attributes) return e.get(t);
					var i = this._instreamModel;
					return i && t in i.attributes ? i.get(t) : this._model.get(t)
				}, i.getVideo = function() {
					var e = this._instreamModel;
					return e && e.getVideo() ? e.getVideo() : t.prototype.getVideo.call(this)
				}, i.destroy = function() {
					t.prototype.destroy.call(this), ae(this._instreamModel, this)
				}, $t(e, [{
					key: "player",
					get: function() {
						return this._playerViewModel
					}
				}, {
					key: "instreamModel",
					set: function(t) {
						var e = this,
							i = this._instreamModel;
						if (ae(i, this), this._model.off("change:mediaModel", null, this), this._instreamModel = t, this.trigger("instreamMode", !!t), t) t.on("all", (function(i, n, a, o) {
							n === t && (n = e), e.trigger(i, n, a, o)
						}), this), t.change("mediaModel", (function(t, i) {
							e.mediaModel = i
						}), this), ne(this, t.attributes, this._model.attributes);
						else if (i) {
							this._model.change("mediaModel", (function(t, i) {
								e.mediaModel = i
							}), this);
							var n = Object(o.j)({}, this._model.attributes, i.attributes);
							ne(this, this._model.attributes, n)
						}
					}
				}]), e
			}(oe);
		var se, le, ce = i(78),
			ue = (se = window).URL && se.URL.createObjectURL ? se.URL : se.webkitURL || se.mozURL,
			de = window.Blob;

		function he(t, e) {
			var i = e.muted;
			if (!le) try {
				le = new de([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], {
					type: "video/mp4"
				})
			} catch (t) {
				return Promise.resolve()
			}
			return v.OS.tizen ? Promise.resolve() : (t.muted = i, t.src = ue.createObjectURL(le), t.play() || Object(ce.a)(t))
		}
		var pe = {};

		function we(t, e) {
			var i = e.cancelable,
				n = e.muted,
				a = void 0 !== n && n,
				o = e.allowMuted,
				r = void 0 !== o && o,
				s = e.timeout,
				l = void 0 === s ? 1e4 : s,
				c = t.getTestElement(),
				u = a ? "muted" : "" + r;
			pe[u] || (pe[u] = he(c, {
				muted: a
			}).catch((function(t) {
				if (!i.cancelled() && !1 === a && r) return he(c, {
					muted: a = !0
				});
				throw t
			})).then((function() {
				return a ? (pe[u] = null, "autoplayMuted") : "autoplayEnabled"
			})).catch((function(t) {
				throw clearTimeout(d), pe[u] = null, t.reason = "autoplayDisabled", t
			})));
			var d, h = pe[u].then((function(t) {
					if (clearTimeout(d), i.cancelled()) {
						var e = new Error("Autoplay test was cancelled");
						throw e.reason = "cancelled", e
					}
					return t
				})),
				p = new Promise((function(t, e) {
					d = setTimeout((function() {
						pe[u] = null;
						var t = new Error("Autoplay test timed out");
						t.reason = "timeout", e(t)
					}), l)
				}));
			return Promise.race([h, p])
		}
		var fe = i(82),
			ge = i(63),
			je = i(30);
		var me = function(t) {
			var e, i;

			function n() {
				return t.apply(this, arguments) || this
			}
			return i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i, n.prototype.getFirstFrame = function() {
				var t = this.between(a.O, a.I),
					e = this.between("tabVisible", a.I);
				return e && t && e > 0 && e < t ? e : t
			}, n
		}(je.a);

		function be(t, e) {
			e.off(a.O, t._onPlayAttempt), e.off(a.gb, t._triggerFirstFrame), e.off(a.T, t._onTime), t.off("change:activeTab", t._onTabVisible)
		}
		var ve = function(t, e) {
			t.change("mediaModel", (function(t, i, n) {
				t._qoeItem && n && t._qoeItem.end(n.get("mediaState")), t._qoeItem = new me, t._qoeItem.tick(a.eb), t._qoeItem.start(i.get("mediaState")),
					function(t, e) {
						t._onTabVisible && be(t, e);
						var i, n, o = !1;
						t._triggerFirstFrame = function(i) {
							if (!o && e.mediaController) {
								var n = e.mediaController.mediaModel,
									r = n.attributes.mediaState;
								if (r === a.qb || r === a.pb || i.type === a.gb) {
									o = !0;
									var s = t._qoeItem;
									s.tick(a.I);
									var l = s.getFirstFrame();
									e.trigger(a.I, {
										loadTime: l
									}), n.off("change:" + a.V, null, n), n.change(a.V, (function(t, i) {
										i && e.trigger(a.V, i)
									}), n), be(t, e)
								}
							}
						}, t._onTime = (i = t._triggerFirstFrame, n = 0, function(t) {
							var e = t.position;
							e > n && i(t), n = e
						}), t._onPlayAttempt = function() {
							t._qoeItem.tick(a.O)
						}, t._onTabVisible = function(e, i) {
							i ? t._qoeItem.tick("tabVisible") : t._qoeItem.tick("tabHidden")
						}, t.on("change:activeTab", t._onTabVisible), e.on(a.O, t._onPlayAttempt), e.once(a.gb, t._triggerFirstFrame), e.on(a.T, t._onTime)
					}(t, e), i.on("change:mediaState", (function(e, i, n) {
						i !== n && (t._qoeItem.end(n), t._qoeItem.start(i))
					}))
			}))
		};
		var ye = function() {},
			ke = function() {};
		Object(o.j)(ye.prototype, {
			setup: function(t, e, i, n, w, g) {
				var b, y, k, x, T = this,
					O = this,
					C = O._model = new M,
					_ = !1,
					S = !1,
					E = null,
					A = j(H),
					L = j(ke);
				O.originalContainer = O.currentContainer = i, O._events = n, O.trigger = function(t, e) {
					var i = function(t, e, i) {
						var n = i;
						switch (e) {
							case "time":
							case "beforePlay":
							case "pause":
							case "play":
							case "ready":
								var a = t.get("viewable");
								void 0 !== a && (n = Object(o.j)({}, i, {
									viewable: a
								}))
						}
						return n
					}(C, t, e);
					return f.a.trigger.call(this, t, i)
				};
				var I = new u.a(O, ["trigger"], (function() {
						return !0
					})),
					z = function(t, e) {
						O.trigger(t, e)
					};
				C.setup(t);
				var P = C.get("backgroundLoading"),
					B = new re(C);
				(b = this._view = new Gt(e, B)).on("all", (function(t, e) {
					e && e.doNotForward || z(t, e)
				}), O), B.on("viewSetup", (function(t) {
					Object(s.b)(T, t)
				}));
				var R = this._programController = new q(C, g, e._publicApi);
				ht(), R.on("all", z, O).on("subtitlesTracks", (function(t) {
					if (y) {
						y.setSubtitlesTracks(t.tracks);
						var e = y.getCurrentIndex();
						e > 0 && ct(e, t.tracks)
					}
				}), O).on(a.G, (function() {
					Promise.resolve().then(lt)
				}), O).on(a.H, O.triggerError, O), ve(C, R), C.on(a.x, O.triggerError, O), C.on("change:state", (function(t, e, i) {
					Q() || W.call(T, t, e, i)
				}), this), C.on("change:castState", (function(t, e) {
					O.trigger(a.n, e)
				})), C.on("change:fullscreen", (function(t, e) {
					O.trigger(a.z, {
						fullscreen: e
					}), e && t.set("playOnViewable", !1)
				})), C.on("change:volume", (function(t, e) {
					O.trigger(a.W, {
						volume: e
					})
				})), C.on("change:mute", (function(t) {
					O.trigger(a.N, {
						mute: t.getMute()
					})
				})), C.on("change:playbackRate", (function(t, e) {
					O.trigger(a.bb, {
						playbackRate: e,
						position: t.get("position")
					})
				}));
				var F = function t(e, i) {
					"clickthrough" !== i && "interaction" !== i && "external" !== i || (C.set("playOnViewable", !1), C.off("change:playReason change:pauseReason", t))
				};

				function V(t, e) {
					Object(o.y)(e) || C.set("viewable", Math.round(e))
				}

				function H() {
					pt && (!0 !== C.get("autostart") || C.get("playOnViewable") || it("autostart"), pt.flush())
				}

				function N(t, e) {
					O.trigger("viewable", {
						viewable: e
					}), D()
				}

				function D() {
					if ((r.a[0] === e || 1 === C.get("viewable")) && "idle" === C.get("state") && !1 === C.get("autostart"))
						if (!g.primed() && v.OS.android) {
							var t = g.getTestElement(),
								i = O.getMute();
							Promise.resolve().then((function() {
								return he(t, {
									muted: i
								})
							})).then((function() {
								"idle" === C.get("state") && R.preloadVideo()
							})).catch(ke)
						} else R.preloadVideo()
				}

				function U(t) {
					O._instreamAdapter.noResume = !t, t || at({
						reason: "viewable"
					})
				}

				function X(t) {
					t || (O.pause({
						reason: "viewable"
					}), C.set("playOnViewable", !t))
				}

				function Y(t, e) {
					var i = Q();
					if (t.get("playOnViewable")) {
						if (e) {
							var n = t.get("autoPause").pauseAds,
								o = t.get("pauseReason");
							K() === a.nb ? it("viewable") : i && !n || "interaction" === o || J({
								reason: "viewable"
							})
						} else v.OS.mobile && !i && (O.pause({
							reason: "autostart"
						}), C.set("playOnViewable", !0));
						v.OS.mobile && i && U(e)
					}
				}

				function Z(t, e) {
					var i = t.get("state"),
						n = Q(),
						o = t.get("playReason");
					n ? t.get("autoPause").pauseAds ? X(e) : U(e) : i === a.qb || i === a.kb ? X(e) : i === a.nb && "playlist" === o && t.once("change:state", (function() {
						X(e)
					}))
				}

				function Q() {
					var t = O._instreamAdapter;
					return !!t && t.getState()
				}

				function K() {
					var t = Q();
					return t || C.get("state")
				}

				function J(t) {
					if (A.cancel(), S = !1, C.get("state") === a.mb) return Promise.resolve();
					var i = tt(t);
					return C.set("playReason", i), Q() ? (e.pauseAd(!1, t), Promise.resolve()) : C.get("state") === a.lb ? (nt(!0), O.setItemIndex(0).then((function() {
						return $(t, i)
					}))) : $(t, i)
				}

				function $(t, e) {
					if (!_ && (_ = !0, O.trigger(a.D, {
							playReason: e,
							startTime: t && t.startTime ? t.startTime : C.get("playlistItem").starttime
						}), _ = !1, Object(ge.a)() && !g.primed() && g.prime(), "playlist" === e && C.get("autoPause").viewability && Z(C, C.get("viewable")), x)) {
						if (Object(ge.a)() && !P) {
							var i = C.get("mediaElement");
							O._instreamAdapter && (i.src = ""), i.load()
						}
						return x = !1, k = null, Promise.resolve()
					}
					return R.playVideo(e).then(g.played)
				}

				function tt(t) {
					return t && t.reason ? t.reason : "unknown"
				}

				function it(t) {
					if (K() === a.nb) {
						A = j(H);
						var e = C.get("advertising");
						we(g, {
							cancelable: A,
							muted: O.getMute(),
							allowMuted: !e || e.autoplayadsmuted
						}).then((function(e) {
							return C.set("canAutoplay", e), "autoplayMuted" !== e || O.getMute() || (C.set("autostartMuted", !0), ht(), C.once("change:autostartMuted", (function(t) {
								t.off("change:viewable", Y), O.trigger(a.N, {
									mute: C.getMute()
								})
							}))), y && O.getMute() && C.get("enableDefaultCaptions") && y.selectDefaultIndex(1), J({
								reason: t
							}).catch((function() {
								O._instreamAdapter || C.set("autostartFailed", !0), k = null
							}))
						})).catch((function(t) {
							if (C.set("canAutoplay", "autoplayDisabled"), C.set("autostart", !1), !A.cancelled()) {
								var e = Object(m.A)(t);
								O.trigger(a.i, {
									reason: t.reason,
									code: e,
									error: t
								})
							}
						}))
					}
				}

				function nt(t) {
					if (A.cancel(), pt.empty(), Q()) {
						var e = O._instreamAdapter;
						return e && (e.noResume = !0), void(k = function() {
							return R.stopVideo()
						})
					}
					k = null, !t && (S = !0), _ && (x = !0), C.set("errorEvent", void 0), R.stopVideo()
				}

				function at(t) {
					var e = tt(t);
					C.set("pauseReason", e), C.set("playOnViewable", "viewable" === e)
				}

				function ot(t) {
					k = null, A.cancel();
					var i = Q();
					if (i && i !== a.pb) return at(t), void e.pauseAd(!0, t);
					switch (C.get("state")) {
						case a.mb:
							return;
						case a.qb:
						case a.kb:
							at(t), R.pause();
							break;
						default:
							_ && (x = !0)
					}
				}

				function rt(t, e) {
					O.instreamDestroy(), nt(!0), O.setItemIndex(t), O.play(e)
				}

				function st(t) {
					rt(C.get("item") + 1, t)
				}

				function lt() {
					O.completeCancelled() || (k = O.completeHandler, O.shouldAutoAdvance() ? O.nextItem() : C.get("repeat") ? st({
						reason: "repeat"
					}) : (v.OS.iOS && dt(!1), C.set("playOnViewable", !1), C.set("state", a.lb), O.trigger(a.db, {})))
				}

				function ct(t, e) {
					t = parseInt(t, 10) || 0, C.persistVideoSubtitleTrack(t, e), R.subtitles = t, O.trigger(a.l, {
						tracks: ut(),
						track: t
					})
				}

				function ut() {
					return y ? y.getCaptionsList() : []
				}

				function dt(t) {
					Object(o.r)(t) || (t = !C.get("fullscreen")), C.set("fullscreen", t), O._instreamAdapter && O._instreamAdapter._adModel && O._instreamAdapter._adModel.set("fullscreen", t)
				}

				function ht() {
					R.setMute(C.getMute()), R.setVolume(C.get("volume"))
				}
				C.on("change:playReason change:pauseReason", F), O.on(a.d, (function(t) {
					return F(0, t.playReason)
				})), O.on(a.c, (function(t) {
					return F(0, t.pauseReason)
				})), C.on("change:scrubbing", (function(t, e) {
					e ? (E = C.get("state") !== a.pb, ot()) : E && J({
						reason: "interaction"
					})
				})), C.on("change:captionsList", (function(t, e) {
					O.trigger(a.m, {
						tracks: e,
						track: C.get("captionsIndex") || 0
					})
				})), C.on("change:mediaModel", (function(t, e) {
					var i = this;
					t.set("errorEvent", void 0), e.change("mediaState", (function(e, i) {
						var n;
						t.get("errorEvent") || t.set(a.cb, (n = i) === a.ob || n === a.rb ? a.kb : n)
					}), this), e.change("duration", (function(e, i) {
						if (0 !== i) {
							var n = t.get("minDvrWindow"),
								a = Object(fe.b)(i, n);
							t.setStreamType(a)
						}
					}), this);
					var n = "autoplay" === (t.get("related") || {}).oncomplete,
						o = t.get("item") + 1,
						r = t.get("playlist")[o];
					if (r || n) {
						e.on("change:position", (function t(a, s) {
							if (n && !r && (o = -1, r = C.get("nextUp")), r && !r.daiSetting) {
								var l = e.get("duration");
								s && l > 0 && s >= l - p.b && (e.off("change:position", t, i), P ? R.backgroundLoad(r, o) : R.getAsyncItem(o).run())
							}
						}), this)
					}
				})), (y = new et(C)).on("all", z, O), this.playerReady = function() {
					b.once(a.ib, (function() {
						try {
							! function() {
								C.change("visibility", V), I.off(), O.trigger(a.hb, {
									setupTime: 0
								}), C.change("playlist", (function(t, e) {
									if (e.length) {
										var i = {
												playlist: e
											},
											n = C.get("feedData");
										n && (i.feedData = Object(o.j)({}, n)), O.trigger(a.fb, i)
									}
								})), C.change("playlistItem", (function(t, e) {
									if (e) {
										var i = e.title,
											n = e.image;
										if ("mediaSession" in navigator && window.MediaMetadata && (i || n)) try {
											navigator.mediaSession.metadata = new window.MediaMetadata({
												title: i,
												artist: window.location.hostname,
												artwork: [{
													src: n || ""
												}]
											})
										} catch (t) {}
										t.set("cues", []), O.trigger(a.eb, {
											index: C.get("item"),
											item: e
										})
									}
								})), I.flush(), I.destroy(), I = null, C.change("viewable", N), C.change("viewable", Y), C.get("autoPause").viewability ? C.change("viewable", Z) : C.once("change:autostartFailed change:mute", (function(t) {
									t.off("change:viewable", Y)
								}));
								H(), C.on("change:itemReady", (function(t, e) {
									e && pt.flush()
								}))
							}()
						} catch (t) {
							O.triggerError(Object(m.z)(m.p, m.b, t))
						}
					})), b.init()
				}, this.preload = D, this.load = function(t, e) {
					var i, n = O._instreamAdapter;
					switch (n && (n.noResume = !0), O.trigger("destroyPlugin", {}), nt(!0), R.clearItemPromises(), A.cancel(), A = j(H), L.cancel(), Object(ge.a)() && g.prime(), typeof t) {
						case "string":
							C.attributes.item = 0, C.attributes.itemReady = !1, L = j((function(t) {
								if (t) return O.updatePlaylist(Object(h.a)(t.playlist), t)
							})), i = function(t) {
								var e = this;
								return new Promise((function(i, n) {
									var o = new d.a;
									o.on(a.fb, (function(t) {
										i(t)
									})), o.on(a.x, n, e), o.load(t)
								}))
							}(t).then(L.async);
							break;
						case "object":
							C.attributes.item = 0, i = O.updatePlaylist(Object(h.a)(t), e || {});
							break;
						case "number":
							i = O.setItemIndex(t);
							break;
						default:
							return
					}
					i.catch((function(t) {
						O.triggerError(Object(m.y)(t, m.d))
					})), i.then(A.async).catch(ke)
				}, this.play = function(t) {
					return J(t).catch(ke)
				}, this.pause = ot, this.seek = function(t, e) {
					var i = C.get("state");
					if (i !== a.mb) {
						R.position = t;
						var n = i === a.nb;
						C.get("scrubbing") || !n && i !== a.lb || (n && ((e = e || {}).startTime = t), this.play(e))
					}
				}, this.stop = nt, this.playlistItem = rt, this.playlistNext = st, this.playlistPrev = function(t) {
					rt(C.get("item") - 1, t)
				}, this.setCurrentCaptions = ct, this.setCurrentQuality = function(t) {
					R.quality = t
				}, this.setFullscreen = dt, this.getCurrentQuality = function() {
					return R.quality
				}, this.getQualityLevels = function() {
					return R.qualities
				}, this.setCurrentAudioTrack = function(t) {
					R.audioTrack = t
				}, this.getCurrentAudioTrack = function() {
					return R.audioTrack
				}, this.getAudioTracks = function() {
					return R.audioTracks
				}, this.getCurrentCaptions = function() {
					return y ? y.getCurrentIndex() : -1
				}, this.getCaptionsList = ut, this.getVisualQuality = function() {
					var t = this._model.get("mediaModel");
					return t ? t.get(a.V) : null
				}, this.getConfig = function() {
					return this._model ? this._model.getConfiguration() : void 0
				}, this.getState = K, this.next = ke, this.completeHandler = lt, this.completeCancelled = function() {
					return (t = C.get("state")) !== a.nb && t !== a.lb && t !== a.mb || !!S && (S = !1, !0);
					var t
				}, this.shouldAutoAdvance = function() {
					return C.get("item") !== C.get("playlist").length - 1
				}, this.nextItem = function() {
					st({
						reason: "playlist"
					})
				}, this.setConfig = function(t) {
					! function(t, e) {
						var i = t._model,
							n = i.attributes;
						if (e.height && (e.height = Object(l.b)(e.height), e.width = e.width || n.width), e.width && (e.width = Object(l.b)(e.width), e.aspectratio ? (n.width = e.width, delete e.width) : e.height = n.height), e.width && e.height && !e.aspectratio && t._view.resize(e.width, e.height), e.floating) {
							var a = i.get("floating") || {},
								r = Object(o.j)({}, a, e.floating); - 1 === c.indexOf(r.mode) ? delete e.floating : e.floating = r
						}
						Object.keys(e).forEach((function(a) {
							var o = e[a];
							if (void 0 !== o) switch (a) {
								case "aspectratio":
									i.set(a, Object(l.a)(o, n.width));
									break;
								case "autostart":
									! function(t, e, i) {
										t.setAutoStart(i), "idle" === t.get("state") && !0 === i && e.play({
											reason: "autostart"
										})
									}(i, t, o);
									break;
								case "mute":
									t.setMute(o);
									break;
								case "volume":
									t.setVolume(o);
									break;
								case "playbackRateControls":
								case "playbackRates":
								case "repeat":
								case "stretching":
								case "floating":
									i.set(a, o)
							}
						}))
					}(O, t)
				}, this.setItemIndex = function(t) {
					R.stopVideo();
					var e = C.get("playlist").length,
						i = Object(h.f)(t, e);
					return R.setActiveItem(i).catch((function(t) {
						if (t.code === m.a) {
							if (R.asyncItems.reduce((function(t, e) {
									return t && e.skipped
								}), !0)) throw t;
							var e = T.shouldAutoAdvance;
							return T.shouldAutoAdvance = function() {
								return !1
							}, lt(), C.attributes.itemReady = !0, void(T.shouldAutoAdvance = e)
						}
						t.code >= 151 && t.code <= 162 && (t = Object(m.y)(t, m.f)), T.triggerError(Object(m.z)(m.m, m.e, t))
					}))
				}, this.detachMedia = function() {
					if (_ && (x = !0), C.get("autoPause").viewability && Z(C, C.get("viewable")), !P) return R.setAttached(!1);
					R.backgroundActiveMedia()
				}, this.attachMedia = function() {
					P ? R.restoreBackgroundMedia() : R.setAttached(!0), "function" == typeof k && k()
				}, this.routeEvents = function(t) {
					return R.routeEvents(t)
				}, this.forwardEvents = function() {
					return R.forwardEvents()
				}, this.playVideo = function(t) {
					return R.playVideo(t)
				}, this.stopVideo = function() {
					return R.stopVideo()
				}, this.castVideo = function(t, e) {
					return R.castVideo(t, e)
				}, this.stopCast = function() {
					return R.stopCast()
				}, this.backgroundActiveMedia = function() {
					return R.backgroundActiveMedia()
				}, this.restoreBackgroundMedia = function() {
					return R.restoreBackgroundMedia()
				}, this.preloadNextItem = function() {
					R.background.currentMedia && R.preloadVideo()
				}, this.isBeforeComplete = function() {
					return R.beforeComplete
				}, this.setVolume = function(t) {
					C.setVolume(t), ht()
				}, this.setMute = function(t) {
					C.setMute(t), ht()
				}, this.setPlaybackRate = function(t) {
					C.setPlaybackRate(t)
				}, this.getProvider = function() {
					return C.get("provider")
				}, this.getWidth = function() {
					return C.get("containerWidth")
				}, this.getHeight = function() {
					return C.get("containerHeight")
				}, this.getItemQoe = function() {
					return C._qoeItem
				}, this.setItemCallback = function(t) {
					R.itemCallback = t
				}, this.getItemPromise = function(t) {
					var e = C.get("playlist");
					if (t < -1 || t > e.length - 1 || isNaN(t)) return null;
					var i = R.getAsyncItem(t);
					return i ? i.promise : null
				}, this.addButton = function(t, e, i, n, a) {
					var o = C.get("customButtons") || [],
						r = !1,
						s = {
							img: t,
							tooltip: e,
							callback: i,
							id: n,
							btnClass: a
						};
					o = o.reduce((function(t, e) {
						return e.id === n ? (r = !0, t.push(s)) : t.push(e), t
					}), []), r || o.unshift(s), C.set("customButtons", o)
				}, this.removeButton = function(t) {
					var e = C.get("customButtons") || [];
					e = e.filter((function(e) {
						return e.id !== t
					})), C.set("customButtons", e)
				}, this.resize = b.resize, this.getSafeRegion = b.getSafeRegion, this.setCaptions = b.setCaptions, this.checkBeforePlay = function() {
					return _
				}, this.setControls = function(t) {
					Object(o.r)(t) || (t = !C.get("controls")), C.set("controls", t), R.controls = t
				}, this.addCues = function(t) {
					this.setCues(C.get("cues").concat(t))
				}, this.setCues = function(t) {
					C.set("cues", t)
				}, this.updatePlaylist = function(t, e) {
					try {
						var i = Object(h.b)(t, C, e);
						Object(h.e)(i);
						var n = Object(o.j)({}, e);
						delete n.playlist, C.set("feedData", n), C.set("playlist", i)
					} catch (t) {
						return Promise.reject(t)
					}
					return this.setItemIndex(C.get("item"))
				}, this.setPlaylistItem = function(t, e) {
					var i = C.get("playlist"),
						n = Object(h.f)(t, i.length),
						a = R.getAsyncItem(n);
					if (a.replace(e)) {
						var o = i[n];
						e && e !== o && (R.asyncItems[n] = null, a.reject(new Error("Item replaced"))), n === C.get("item") && "idle" === C.get("state") && this.setItemIndex(n)
					}
				}, this.playerDestroy = function() {
					this.off(), this.stop(), Object(s.b)(this, this.originalContainer), b && b.destroy(), C && C.destroy(), pt && pt.destroy(), y && y.destroy(), R && R.destroy(), this.instreamDestroy()
				}, this.isBeforePlay = this.checkBeforePlay, this.createInstream = function() {
					return this.instreamDestroy(), this._instreamAdapter = new G(this, C, b, g), this._instreamAdapter
				}, this.instreamDestroy = function() {
					O._instreamAdapter && (O._instreamAdapter.destroy(), O._instreamAdapter = null)
				};
				var pt = new u.a(this, ["play", "pause", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen"], (function() {
					return !T._model.get("itemReady") || I
				}));
				pt.queue.push.apply(pt.queue, w), b && b.setup()
			},
			get: function(t) {
				if (t in k.c) {
					var e = this._model.get("mediaModel");
					return e ? e.get(t) : k.c[t]
				}
				return this._model.get(t)
			},
			getContainer: function() {
				return this.currentContainer || this.originalContainer
			},
			getMute: function() {
				return this._model.getMute()
			},
			triggerError: function(t) {
				var e = this._model;
				t.message = e.get("localization").errors[t.key], delete t.key, e.set("errorEvent", t), e.set("state", a.mb), e.once("change:state", (function() {
					this.set("errorEvent", void 0)
				}), e), this.trigger(a.x, t)
			}
		});
		var xe = ye,
			Te = function(t, e) {
				var i = t._model,
					n = t._view,
					r = !1,
					s = e.height,
					l = e.width,
					c = t.getHeight;
				t.getHeight = function() {
					var t = i.get("aspectratio");
					return t ? Math.round(i.get("containerWidth") * parseFloat(t) / 100) : s
				};
				var u, d = t.getWidth;
				t.getWidth = function() {
					return Object(o.v)(l) ? l : d.call(this)
				}, t.getSafeRegion = function(t) {
					return n.getSafeRegion(t)
				}, t.resize = function(t, e) {
					return n.resize(t, e)
				}, u = n.resize, n.resize = function(t, e) {
					return s = e, l = t, u.call(n, t, e)
				}, i.setAutoStart("viewable"), t.setMute(!0), t.setItemIndex = function() {
					return i.setActiveItem(0), Promise.resolve()
				}, t.updatePlaylist = function() {
					return i.set("playlist", [{
						sources: [{}]
					}]), i.attributes.itemReady = !0, this.setItemIndex(0)
				};
				var h = t.createInstream;
				t.createInstream = function() {
					var e = h.call(this);
					return e.noResume = !0, r = !1, e.on("state", (function(e) {
						var i = e.newstate;
						i !== a.ob && i !== a.qb || (t.attachMedia = w, t.getHeight = c, t.getWidth = d, n && (n.resize = u), r = !0)
					})), e
				};
				var p = t.attachMedia;
				t.attachMedia = t.playerDestroy;
				var w = function() {
					return r || i.set("repeat", !1), i.get("backgroundLoading") || this._programController.mediaPool.clean(), i.set("state", a.lb), this._programController.trigger(a.G, {}), p.call(this)
				};
				t._programController.playVideo = function() {
					return Promise.resolve()
				}
			};
		var Oe = function(t) {
			var e, i, n = !1;
			return t && ((i = document.createElement("div")).className = "afs_ads", i.innerHTML = "&nbsp;", i.style.width = "1px", i.style.height = "1px", i.style.position = "absolute", i.style.background = "transparent", e = i, t.element().appendChild(e)), {
				onReady: function() {
					if (n) return !0;
					(function() {
						t && document.body.contains(t.element()) && (null !== e.offsetParent && "afs_ads" === e.className && "" !== e.innerHTML && 0 !== e.clientHeight || (n = !0));
						return n
					})() && this.trigger("adBlock")
				},
				getAdBlock: function() {
					return n
				}
			}
		};

		function Ce(t) {
			return window.WebGLRenderingContext && t.some((function(t) {
				return t.stereomode && t.stereomode.length > 0
			}))
		}
		var Me, _e = i(31),
			Se = i(149),
			Ee = i(8),
			Ae = i(58),
			Le = i(38);

		function Ie(t, e, n, o) {
			if (function(t, e, i) {
					var n = t.get("related"),
						a = e.getPlaylist(),
						o = !(!n || !n.file) || !!i.recommendations;
					return (a.length > 1 || o) && (!1 !== t.get("controls") || !n.disableRelated)
				}(t, e, o)) return function(t, e) {
				return i.e(17).then(function(n) {
					if (!t.attributes._destroyed && !e.getPlugin("related")) {
						var a = new Ae.a;
						return a.name = "related", a.js = i(179).default, a
					}
				}.bind(null, i)).catch(Object(Ee.b)(301129))
			}(t, e).then((function(i) {
				var a = e.getPlugin("related");
				if (!a) {
					var o = t.get("related");
					(a = Object(Le.a)(i, o, e)).on("nextUp", (function(e) {
						var i = null;
						e === Object(e) && ((i = Object(A.a)(e)).sources = Object(h.c)(i, t), i.feedType = e.feedType), t.set("nextUp", i)
					})), a.on("warning", (function(t) {
						n.trigger("warning", t)
					})), a.setup(t), a.addToPlayer()
				}
			})).catch((function(e) {
				return e.message = e.message || t.get("localization").errors[e.key], delete e.key, n.trigger(a.wb, e), e
			}))
		}

		function ze(t, e, n) {
			i.e(12).then(function(n) {
				var a = new(0, i(181).default)(t, e);
				return t.castToggle = a.castToggle.bind(t._castController), t._castController = a, t.stopCasting = a.stopCasting, a.init()
			}.bind(null, i)).catch(Object(Ee.c)(301161)).catch(n)
		}

		function Pe(t, e, n) {
			return i.e(11).then(function(n) {
				var a = i(178).default;
				t._airplayController = new a(t, e), t.castToggle = t._airplayController.airplayToggle.bind(t._airplayController)
			}.bind(null, i)).catch(Object(Ee.c)(301162)).catch(n)
		}
		var Be = [],
			Re = !1;

		function Fe(t, e) {
			Re || (setTimeout((function() {
				Be.push(function(t, e) {
					var i = Object(o.l)(t.sources, (function(t) {
						return "video/mp4" === t.type
					}));
					i || (i = t.sources[0]);
					var n, a = t.pubdate ? new Date(1e3 * t.pubdate) : null,
						r = e.getConfig(),
						s = t.mediaid && r.pid ? "https://cdn.jwplayer.com/players/" + t.mediaid + "-" + r.pid + ".html" : null,
						l = e.get("duration");
					l && (n = "PT" + Math.floor(l / 60) + "M" + Math.round(l) % 60 + "S");
					return {
						"@context": "https://schema.org",
						"@type": "VideoObject",
						name: t.title,
						description: t.description,
						thumbnailUrl: t.image,
						uploadDate: a ? a.toISOString() : void 0,
						duration: n,
						contentUrl: i.file,
						embedUrl: s ? '<iframe src="' + s + '" frameborder="0" scrolling="auto" allowfullscreen></iframe>' : void 0
					}
				}(t, e))
			}), 750), clearTimeout(Me), Me = setTimeout((function() {
				var t = document.createElement("script");
				t.setAttribute("type", "application/ld+json"), t.setAttribute("id", "__jw-ld-json"), Be.length > 1 ? t.innerText = JSON.stringify(Be) : t.innerText = JSON.stringify(Be[0]), document.head.appendChild(t), Re = !0
			}), 1e3))
		}
		var Ve = xe.prototype.setup;
		xe.prototype.setup = function(t, e) {
			var i = this,
				o = Ve.apply(this, arguments),
				r = this.shouldAutoAdvance,
				s = this._model,
				l = this._view,
				c = this.modelShim,
				u = Oe(l),
				d = s.get("advertising");
			if (c && c.attributes.ampController) {
				var h = c.attributes.ampController,
					p = this.playerReady;
				this.ampController = h, delete c.attributes.ampController, this.playerReady = function() {
					p.apply(this, arguments), h.setup(s)
				}
			}
			t.analytics && (t.sdkplatform = t.sdkplatform || t.analytics.sdkplatform), s.once("change:visibility", (function() {
				u.onReady.call(i)
			})), this.next = function(t) {
				t = t || {};
				var i = e.getPlugin("related");
				f.call(this, i, "nextClick", t.feedShownId, (function() {
					return i.next(t)
				}))
			};
			var w = this.nextItem;
			this.nextItem = function() {
				var t = e.getPlugin("related");
				f.call(this, t, "nextAutoAdvance"), w.call(this)
			};
			var f = function(t, e, i, n) {
					if (t) {
						var a = s.get("nextUp");
						a && this.trigger(e, {
							mode: a.mode,
							ui: "nextup",
							feedShownId: i,
							target: a,
							itemsShown: [a],
							feedData: a.feedData
						}), "function" == typeof n && n()
					}
				},
				g = this.updatePlaylist;

			function j() {
				return s.get("cast")
			}

			function m(t) {
				s.on("change:playlistItem", b, this), !(d && d.outstream) && j() ? (!(s.get("cast") || {}).customAppId && Object(n.b)(s.get("playlist")) || k.apply(this), x.apply(this)) : T(), Ie(s, e, this, t.item), s.get("generateSEOMetadata") && Fe(t.item, this)
			}

			function b(t, i) {
				u.onReady(), Ie(s, e, this, i)
			}
			this.updatePlaylist = function(t, i) {
				var a = this,
					o = [];
				return s.get("mobileSdk") || !Ce(t) || e.getPlugin("vr") || console.warn("Playlist contains 360Â° or VR media. JW Player 360Â°/VR support is now deprecated"), Object(n.b)(t) && o.push(Object(n.d)(s.get("edition"))), Object(Se.a)(t, "images", "image"), o.length ? (s.attributes.itemReady = !1, Promise.all(o).then((function() {
					return g.call(a, t, i)
				}))) : g.call(this, t, i)
			}, this.shouldAutoAdvance = function() {
				var t = s.get("related"),
					e = s.get("nextUp");
				return e && "playlist" === e.mode ? !!t.shouldAutoAdvance : r.call(this)
			}, e.getAdBlock = u.getAdBlock, this.once(a.eb, m, this);
			var y = function(t) {
				i.trigger(a.wb, t)
			};

			function k() {
				if (window.chrome && v.Browser.chrome) return ze(this, s, y)
			}

			function x() {
				if (window.WebKitPlaybackTargetAvailabilityEvent && !s.get("playlist").some((function(t) {
						return !Object(_e.b)(t.sources[0])
					}))) return Pe(this, s, y);
				T()
			}

			function T() {
				var t = s.getVideo();
				t && t.video && (t.video.webkitWirelessVideoPlaybackDisabled = !0)
			}
			return d && d.outstream && Te(this, t), o
		};
		e.default = xe
	}, , function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return et
		})), i.d(e, "b", (function() {
			return it
		}));
		var n = i(98),
			a = i.n(n),
			o = i(99),
			r = i.n(o),
			s = i(100),
			l = i.n(s),
			c = i(101),
			u = i.n(c),
			d = i(102),
			h = i.n(d),
			p = i(103),
			w = i.n(p),
			f = i(104),
			g = i.n(f),
			j = i(105),
			m = i.n(j),
			b = i(106),
			v = i.n(b),
			y = i(107),
			k = i.n(y),
			x = i(108),
			T = i.n(x),
			O = i(109),
			C = i.n(O),
			M = i(110),
			_ = i.n(M),
			S = i(111),
			E = i.n(S),
			A = i(112),
			L = i.n(A),
			I = i(113),
			z = i.n(I),
			P = i(86),
			B = i.n(P),
			R = i(114),
			F = i.n(R),
			V = i(115),
			H = i.n(V),
			N = i(116),
			D = i.n(N),
			q = i(117),
			U = i.n(q),
			W = i(118),
			X = i.n(W),
			Y = i(119),
			Z = i.n(Y),
			Q = i(120),
			K = i.n(Q),
			G = i(87),
			J = i.n(G),
			$ = i(76),
			tt = null;

		function et(t) {
			var e = ot().querySelector(nt(t));
			return e ? at(e) : null
		}

		function it(t) {
			var e = ot().querySelectorAll(t.split(",").map(nt).join(","));
			return Array.prototype.map.call(e, (function(t) {
				return at(t)
			}))
		}

		function nt(t) {
			return ".jw-svg-icon-" + t
		}

		function at(t) {
			return t.cloneNode(!0)
		}

		function ot() {
			return tt || (tt = Object($.a)("<xml>" + a.a + r.a + l.a + u.a + h.a + w.a + g.a + m.a + v.a + k.a + T.a + C.a + _.a + E.a + L.a + z.a + B.a + F.a + H.a + D.a + U.a + X.a + Z.a + K.a + J.a + "</xml>")), tt
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(34),
			a = i(76),
			o = i(36);
		e.a = function(t, e, i, r) {
			var s = document.createElement("div");
			s.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + t, s.setAttribute("role", "button"), s.setAttribute("tabindex", "0"), i && s.setAttribute("aria-label", i), s.style.display = "none";
			var l = new n.a(s).on("click tap enter", e || o.a.noop);
			return r && Array.prototype.forEach.call(r, (function(t) {
				"string" == typeof t ? s.appendChild(Object(a.a)(t)) : s.appendChild(t)
			})), {
				ui: l,
				element: function() {
					return s
				},
				toggle: function(t) {
					t ? this.show() : this.hide()
				},
				show: function() {
					s.style.display = ""
				},
				hide: function() {
					s.style.display = "none"
				}
			}
		}
	}, function(t, e, i) {
		"use strict";
		t.exports = function(t) {
			var e = [];
			return e.toString = function() {
				return this.map((function(e) {
					var i = function(t, e) {
						var i = t[1] || "",
							n = t[3];
						if (!n) return i;
						if (e && "function" == typeof btoa) {
							var a = (r = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"),
								o = n.sources.map((function(t) {
									return "/*# sourceURL=" + n.sourceRoot + t + " */"
								}));
							return [i].concat(o).concat([a]).join("\n")
						}
						var r;
						return [i].join("\n")
					}(e, t);
					return e[2] ? "@media " + e[2] + "{" + i + "}" : i
				})).join("")
			}, e.i = function(t, i) {
				"string" == typeof t && (t = [
					[null, t, ""]
				]);
				for (var n = {}, a = 0; a < this.length; a++) {
					var o = this[a][0];
					null != o && (n[o] = !0)
				}
				for (a = 0; a < t.length; a++) {
					var r = t[a];
					null != r[0] && n[r[0]] || (i && !r[2] ? r[2] = i : i && (r[2] = "(" + r[2] + ") and (" + i + ")"), e.push(r))
				}
			}, e
		}
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return o
		}));
		var n, a = i(7);

		function o(t) {
			return n || (n = new DOMParser), Object(a.r)(Object(a.s)(n.parseFromString(t, "image/svg+xml").documentElement))
		}
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return a
		}));
		var n = i(2);

		function a(t) {
			var e = [],
				i = (t = Object(n.i)(t)).split("\r\n\r\n");
			1 === i.length && (i = t.split("\n\n"));
			for (var a = 0; a < i.length; a++)
				if ("WEBVTT" !== i[a]) {
					var r = o(i[a]);
					r.text && e.push(r)
				} return e
		}

		function o(t) {
			var e = {},
				i = t.split("\r\n");
			1 === i.length && (i = t.split("\n"));
			var a = 1;
			if (i[0].indexOf(" --\x3e ") > 0 && (a = 0), i.length > a + 1 && i[a + 1]) {
				var o = i[a],
					r = o.indexOf(" --\x3e ");
				r > 0 && (e.begin = Object(n.g)(o.substr(0, r)), e.end = Object(n.g)(o.substr(r + 5)), e.text = i.slice(a + 1).join("\r\n"))
			}
			return e
		}
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return new Promise((function(e, i) {
				if (t.paused) return i(a("NotAllowedError", 0, "play() failed."));
				var n = function() {
						t.removeEventListener("play", o), t.removeEventListener("playing", r), t.removeEventListener("pause", r), t.removeEventListener("abort", r), t.removeEventListener("error", r)
					},
					o = function() {
						t.addEventListener("playing", r), t.addEventListener("abort", r), t.addEventListener("error", r), t.addEventListener("pause", r)
					},
					r = function(t) {
						if (n(), "playing" !== t.type) {
							var o = 'The play() request was interrupted by a "' + t.type + '" event.';
							return "error" === t.type ? i(a("NotSupportedError", 9, o)) : i(a("AbortError", 20, o))
						}
						e()
					};
				t.addEventListener("play", o)
			}))
		}

		function a(t, e, i) {
			var n = new Error(i);
			return n.name = t, n.code = e, n
		}
		i.d(e, "a", (function() {
			return n
		}))
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return c
		})), i.d(e, "c", (function() {
			return u
		})), i.d(e, "b", (function() {
			return p
		})), i.d(e, "d", (function() {
			return w
		}));
		var n, a, o = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "ff00ff", "#00ffff"],
			r = ["Arial", "Courier", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"],
			s = ["100%", "75%", "50%", "25%", "0%"],
			l = [100, 75, 50, 25, 0],
			c = function(t) {
				return [{
					name: "color",
					label: t.color,
					options: n || d(t),
					values: o,
					defaultVal: "#ffffff"
				}, {
					name: "fontOpacity",
					label: t.fontOpacity,
					options: ["100%", "75%", "25%"],
					values: [100, 75, 25],
					defaultVal: 100
				}, {
					name: "userFontScale",
					label: t.userFontScale,
					options: ["200%", "175%", "150%", "125%", "100%", "75%", "50%"],
					values: [2, 1.75, 1.5, 1.25, 1, .75, .5],
					defaultVal: 1
				}, {
					name: "fontFamily",
					label: t.fontFamily,
					options: r,
					values: r,
					defaultVal: "Arial"
				}, {
					name: "edgeStyle",
					label: t.edgeStyle,
					options: a || h(t),
					values: ["none", "raised", "depressed", "uniform", "dropShadow"],
					defaultVal: "none"
				}, {
					name: "backgroundColor",
					label: t.backgroundColor,
					options: n || d(t),
					values: o,
					defaultVal: "#000000"
				}, {
					name: "backgroundOpacity",
					label: t.backgroundOpacity,
					options: s,
					values: l,
					defaultVal: 50
				}, {
					name: "windowColor",
					label: t.windowColor,
					options: n || d(t),
					values: o,
					defaultVal: "#000000"
				}, {
					name: "windowOpacity",
					label: t.windowOpacity,
					options: ["100%", "75%", "50%", "25%", "0%"],
					values: l,
					defaultVal: 0
				}]
			},
			u = function(t) {
				return t && t.replace(/(Arrow|ape)/, "")
			},
			d = function(t) {
				var e = t.white,
					i = t.black,
					a = t.red,
					o = t.green,
					r = t.blue,
					s = t.yellow,
					l = t.magenta,
					c = t.cyan;
				return n = [e, i, a, o, r, s, l, c]
			},
			h = function(t) {
				var e = t.none,
					i = t.raised,
					n = t.depressed,
					o = t.uniform,
					r = t.dropShadow;
				return a = [e, i, n, o, r]
			};

		function p() {
			var t = this;
			Object.keys(this.children).map((function(e) {
				t.children[e].destroy()
			})), this.model && (this.model.off(null, null, this), delete this.model), this.off()
		}

		function w(t, e) {
			t && e > -1 && (t.items.forEach((function(t) {
				t.deactivate()
			})), t.items[e].activate())
		}
	}, function(t, e, i) {
		"use strict";
		var n = window.VTTCue;

		function a(t) {
			if ("string" != typeof t) return !1;
			return !!{
				start: !0,
				middle: !0,
				end: !0,
				left: !0,
				right: !0
			} [t.toLowerCase()] && t.toLowerCase()
		}
		if (!n) {
			(n = function(t, e, i) {
				var n = this;
				n.hasBeenReset = !1;
				var o = "",
					r = !1,
					s = t,
					l = e,
					c = i,
					u = null,
					d = "",
					h = !0,
					p = "auto",
					w = "start",
					f = "auto",
					g = 100,
					j = "middle";
				Object.defineProperty(n, "id", {
					enumerable: !0,
					get: function() {
						return o
					},
					set: function(t) {
						o = "" + t
					}
				}), Object.defineProperty(n, "pauseOnExit", {
					enumerable: !0,
					get: function() {
						return r
					},
					set: function(t) {
						r = !!t
					}
				}), Object.defineProperty(n, "startTime", {
					enumerable: !0,
					get: function() {
						return s
					},
					set: function(t) {
						if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
						s = t, this.hasBeenReset = !0
					}
				}), Object.defineProperty(n, "endTime", {
					enumerable: !0,
					get: function() {
						return l
					},
					set: function(t) {
						if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
						l = t, this.hasBeenReset = !0
					}
				}), Object.defineProperty(n, "text", {
					enumerable: !0,
					get: function() {
						return c
					},
					set: function(t) {
						c = "" + t, this.hasBeenReset = !0
					}
				}), Object.defineProperty(n, "region", {
					enumerable: !0,
					get: function() {
						return u
					},
					set: function(t) {
						u = t, this.hasBeenReset = !0
					}
				}), Object.defineProperty(n, "vertical", {
					enumerable: !0,
					get: function() {
						return d
					},
					set: function(t) {
						var e = function(t) {
							return "string" == typeof t && (!!{
								"": !0,
								lr: !0,
								rl: !0
							} [t.toLowerCase()] && t.toLowerCase())
						}(t);
						if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
						d = e, this.hasBeenReset = !0
					}
				}), Object.defineProperty(n, "snapToLines", {
					enumerable: !0,
					get: function() {
						return h
					},
					set: function(t) {
						h = !!t, this.hasBeenReset = !0
					}
				}), Object.defineProperty(n, "line", {
					enumerable: !0,
					get: function() {
						return p
					},
					set: function(t) {
						if ("number" != typeof t && "auto" !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
						p = t, this.hasBeenReset = !0
					}
				}), Object.defineProperty(n, "lineAlign", {
					enumerable: !0,
					get: function() {
						return w
					},
					set: function(t) {
						var e = a(t);
						if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
						w = e, this.hasBeenReset = !0
					}
				}), Object.defineProperty(n, "position", {
					enumerable: !0,
					get: function() {
						return f
					},
					set: function(t) {
						if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
						f = t, this.hasBeenReset = !0
					}
				}), Object.defineProperty(n, "size", {
					enumerable: !0,
					get: function() {
						return g
					},
					set: function(t) {
						if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
						g = t, this.hasBeenReset = !0
					}
				}), Object.defineProperty(n, "align", {
					enumerable: !0,
					get: function() {
						return j
					},
					set: function(t) {
						var e = a(t);
						if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
						j = e, this.hasBeenReset = !0
					}
				}), n.displayState = void 0
			}).prototype.getCueAsHTML = function() {
				return window.WebVTT.convertCueToDOMTree(window, this.text)
			}
		}
		e.a = n
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return r
		})), i.d(e, "b", (function() {
			return s
		}));
		var n = i(34),
			a = i(7),
			o = i(92);
		var r = function() {
				function t(t, e, i) {
					void 0 === i && (i = o.c), this.el = Object(a.e)(i(t)), this.ui = new n.a(this.el).on("click tap enter", e, this)
				}
				return t.prototype.destroy = function() {
					this.el.parentNode && this.el.parentNode.removeChild(this.el), this.ui.destroy()
				}, t
			}(),
			s = function(t) {
				var e, i;

				function n(e, i, n) {
					return void 0 === n && (n = o.b), t.call(this, e, i, n) || this
				}
				i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
				var r = n.prototype;
				return r.activate = function() {
					this.active || (Object(a.v)(this.el, "jw-settings-item-active", !0), this.el.setAttribute("aria-checked", "true"), this.active = !0)
				}, r.deactivate = function() {
					this.active && (Object(a.v)(this.el, "jw-settings-item-active", !1), this.el.setAttribute("aria-checked", "false"), this.active = !1)
				}, n
			}(r)
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			return t !== 1 / 0 && Math.abs(t) >= Math.max(o(e), 0)
		}

		function a(t, e) {
			var i = "VOD";
			return t === 1 / 0 ? i = "LIVE" : t < 0 && (i = n(t, o(e)) ? "DVR" : "LIVE"), i
		}

		function o(t) {
			return void 0 === t ? 120 : Math.max(t, 0)
		}
		i.d(e, "a", (function() {
			return n
		})), i.d(e, "b", (function() {
			return a
		}))
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			var i = t.kind || "cc";
			return t.default || t.defaulttrack ? "default" : t._id || t.file || i + e
		}

		function a(t, e) {
			var i = t.label || t.name || t.language;
			return i || (i = "Unknown CC", (e += 1) > 1 && (i += " [" + e + "]")), {
				label: i,
				unknownCount: e
			}
		}
		i.d(e, "a", (function() {
			return n
		})), i.d(e, "b", (function() {
			return a
		}))
	}, function(t, e, i) {
		"use strict";
		var n = i(80),
			a = i(8),
			o = i(27),
			r = i(5),
			s = i(77),
			l = i(2),
			c = i(1);

		function u(t) {
			throw new c.q(null, t)
		}

		function d(t, e, n) {
			t.xhr = Object(o.b)(t.file, (function(o) {
				! function(t, e, n, o) {
					var d, h, w = t.responseXML ? t.responseXML.firstChild : null;
					if (w)
						for ("xml" === Object(r.b)(w) && (w = w.nextSibling); w && w.nodeType === w.COMMENT_NODE;) w = w.nextSibling;
					try {
						if (w && "tt" === Object(r.b)(w)) {
							if (!t.responseXML) throw new Error("Empty XML response");
							d = function(t) {
								t || u(306007);
								var e = [],
									i = t.getElementsByTagName("p"),
									n = 30,
									a = t.getElementsByTagName("tt");
								if (a && a[0]) {
									var o = parseFloat(a[0].getAttribute("ttp:frameRate") || "");
									isNaN(o) || (n = o)
								}
								i || u(306005), i.length || (i = t.getElementsByTagName("tt:p")).length || (i = t.getElementsByTagName("tts:p"));
								for (var r = 0; r < i.length; r++) {
									for (var s = i[r], c = s.getElementsByTagName("br"), d = 0; d < c.length; d++) {
										var h = c[d];
										h && h.parentNode && h.parentNode.replaceChild(t.createTextNode("\r\n"), h)
									}
									var p = s.innerHTML || s.textContent || s.text || "",
										w = Object(l.i)(p).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
									if (w) {
										var f = s.getAttribute("begin") || "",
											g = s.getAttribute("dur") || "",
											j = s.getAttribute("end") || "",
											m = {
												begin: Object(l.g)(f, n),
												text: w
											};
										j ? m.end = Object(l.g)(j, n) : g && (m.end = (m.begin || 0) + Object(l.g)(g, n)), e.push(m)
									}
								}
								return e.length || u(306005), e
							}(t.responseXML), h = p(d), delete e.xhr, n(h)
						} else {
							var f = t.responseText;
							f.indexOf("WEBVTT") >= 0 ? i.e(18).then(function(t) {
								return i(163).default
							}.bind(null, i)).catch(Object(a.c)(301131)).then((function(t) {
								var i = new t(window);
								h = [], i.oncue = function(t) {
									h.push(t)
								}, i.onflush = function() {
									delete e.xhr, n(h)
								}, i.parse(f)
							})).catch((function(t) {
								delete e.xhr, o(Object(c.z)(null, c.c, t))
							})) : (d = Object(s.a)(f), h = p(d), delete e.xhr, n(h))
						}
					} catch (t) {
						delete e.xhr, o(Object(c.z)(null, c.c, t))
					}
				}(o, t, e, n)
			}), (function(t, e, i, a) {
				n(Object(c.y)(a, c.c))
			}))
		}

		function h(t) {
			t && t.forEach((function(t) {
				var e = t.xhr;
				e && (e.onload = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()), delete t.xhr
			}))
		}

		function p(t) {
			return t.map((function(t) {
				return new n.a(t.begin, t.end, t.text)
			}))
		}
		i.d(e, "b", (function() {
			return d
		})), i.d(e, "a", (function() {
			return h
		}))
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return a
		})), i.d(e, "b", (function() {
			return o
		}));
		var n = i(7);

		function a(t) {
			var e = -1;
			return t >= 1280 ? e = 7 : t >= 960 ? e = 6 : t >= 800 ? e = 5 : t >= 640 ? e = 4 : t >= 540 ? e = 3 : t >= 420 ? e = 2 : t >= 320 ? e = 1 : t >= 250 && (e = 0), e
		}

		function o(t, e) {
			var i = "jw-breakpoint-" + e;
			Object(n.p)(t, /jw-breakpoint--?\d+/, i)
		}
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-right" viewBox="0 0 240 240" focusable="false"><path d="M183.6,104.4L81.8,0L45.4,36.3l84.9,84.9l-84.9,84.9L79.3,240l101.9-101.7c9.9-6.9,12.4-20.4,5.5-30.4C185.8,106.7,184.8,105.4,183.6,104.4L183.6,104.4z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-jwplayer-logo" viewBox="0 0 992 1024" focusable="false"><path d="M144 518.4c0 6.4-6.4 6.4-6.4 0l-3.2-12.8c0 0-6.4-19.2-12.8-38.4 0-6.4-6.4-12.8-9.6-22.4-6.4-6.4-16-9.6-28.8-6.4-9.6 3.2-16 12.8-16 22.4s0 16 0 25.6c3.2 25.6 22.4 121.6 32 140.8 9.6 22.4 35.2 32 54.4 22.4 22.4-9.6 28.8-35.2 38.4-54.4 9.6-25.6 60.8-166.4 60.8-166.4 6.4-12.8 9.6-12.8 9.6 0 0 0 0 140.8-3.2 204.8 0 25.6 0 67.2 9.6 89.6 6.4 16 12.8 28.8 25.6 38.4s28.8 12.8 44.8 12.8c6.4 0 16-3.2 22.4-6.4 9.6-6.4 16-12.8 25.6-22.4 16-19.2 28.8-44.8 38.4-64 25.6-51.2 89.6-201.6 89.6-201.6 6.4-12.8 9.6-12.8 9.6 0 0 0-9.6 256-9.6 355.2 0 25.6 6.4 48 12.8 70.4 9.6 22.4 22.4 38.4 44.8 48s48 9.6 70.4-3.2c16-9.6 28.8-25.6 38.4-38.4 12.8-22.4 25.6-48 32-70.4 19.2-51.2 35.2-102.4 51.2-153.6s153.6-540.8 163.2-582.4c0-6.4 0-9.6 0-12.8 0-9.6-6.4-19.2-16-22.4-16-6.4-32 0-38.4 12.8-6.4 16-195.2 470.4-195.2 470.4-6.4 12.8-9.6 12.8-9.6 0 0 0 0-156.8 0-288 0-70.4-35.2-108.8-83.2-118.4-22.4-3.2-44.8 0-67.2 12.8s-35.2 32-48 54.4c-16 28.8-105.6 297.6-105.6 297.6-6.4 12.8-9.6 12.8-9.6 0 0 0-3.2-115.2-6.4-144-3.2-41.6-12.8-108.8-67.2-115.2-51.2-3.2-73.6 57.6-86.4 99.2-9.6 25.6-51.2 163.2-51.2 163.2v3.2z"></path></svg>'
	}, function(t, e, i) {
		"use strict";
		i.d(e, "b", (function() {
			return s
		}));
		var n = i(11),
			a = i(34),
			o = i(76),
			r = {};

		function s(t) {
			if (!r[t]) {
				var e = Object.keys(r);
				e.length > 10 && delete r[e[0]];
				var i = Object(o.a)(t);
				r[t] = i
			}
			return r[t].cloneNode(!0)
		}
		var l = function() {
			function t(t, e, i, o, r) {
				var l, c = document.createElement("div");
				c.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + (r || ""), c.setAttribute("button", o), c.setAttribute("role", "button"), c.setAttribute("tabindex", "0"), e && c.setAttribute("aria-label", e), t && "<svg" === t.substring(0, 4) ? l = s(t) : ((l = document.createElement("div")).className = "jw-icon jw-button-image jw-button-color jw-reset", t && Object(n.d)(l, {
					backgroundImage: "url(" + t + ")"
				})), c.appendChild(l), new a.a(c).on("click tap enter", i, this), c.addEventListener("mousedown", (function(t) {
					t.preventDefault()
				})), this.id = o, this.buttonElement = c
			}
			var e = t.prototype;
			return e.element = function() {
				return this.buttonElement
			}, e.toggle = function(t) {
				t ? this.show() : this.hide()
			}, e.show = function() {
				this.buttonElement.style.display = ""
			}, e.hide = function() {
				this.buttonElement.style.display = "none"
			}, t
		}();
		e.a = l
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return a
		}));
		var n = i(7);

		function a(t, e, i, a, o) {
			var r = document.createElement("div");
			r.className = "jw-reset-text jw-tooltip jw-tooltip-" + e, r.setAttribute("dir", "auto");
			var s = document.createElement("div");
			s.className = "jw-text", r.appendChild(s), t.appendChild(r);
			var l = {
					dirty: !!i,
					opened: !1,
					text: i,
					touchEvent: !1,
					suppress: !1,
					open: function() {
						l.touchEvent || (l.suppress ? l.suppress = !1 : (c(!0), a && a()))
					},
					close: function() {
						l.touchEvent || (c(!1), o && o())
					},
					setText: function(t) {
						t !== l.text && (l.text = t, l.dirty = !0), l.opened && c(!0)
					}
				},
				c = function(t) {
					t && l.dirty && (Object(n.q)(s, l.text), l.dirty = !1), l.opened = t, Object(n.v)(r, "jw-open", t)
				};
			return t.addEventListener("mouseover", l.open), t.addEventListener("focus", l.open), t.addEventListener("blur", l.close), t.addEventListener("mouseout", l.close), t.addEventListener("touchstart", (function() {
				l.touchEvent = !0
			}), {
				passive: !0
			}), l
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(34),
			a = i(9),
			o = i(7),
			r = i(74),
			s = i(73),
			l = i(81),
			c = i(122),
			u = i(79),
			d = i(89),
			h = function(t) {
				var e = t.name,
					i = t.title,
					n = {
						captions: "cc-off",
						audioTracks: "audio-tracks",
						quality: "quality-100",
						playbackRates: "playback-rate"
					} [e];
				if (n || t.icon) {
					var a = Object(r.a)("jw-settings-" + e + " jw-submenu-" + e, (function(e) {
							t.open(e)
						}), i, [t.icon && Object(o.e)(t.icon) || Object(s.a)(n)]),
						l = a.element();
					return l.setAttribute("name", e), l.setAttribute("role", "menuitemradio"), l.setAttribute("aria-expanded", "false"), l.setAttribute("aria-haspopup", "true"), l.setAttribute("aria-controls", t.el.id), "ontouchstart" in window || (a.tooltip = Object(d.a)(l, e, i)), a.ui.directSelect = !0, a
				}
			},
			p = i(13);

		function w(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}
		i.d(e, "a", (function() {
			return f
		}));
		var f = function(t) {
			var e, i;

			function a(e, i, n, a, r) {
				var s;
				return void 0 === r && (r = c.a), (s = t.call(this) || this).open = s.open.bind(w(s)), s.close = s.close.bind(w(s)), s.toggle = s.toggle.bind(w(s)), s.name = e, s.title = i || e, s.localizedPrevious = a.prev, s.isSubmenu = !!n, s.el = Object(o.e)(r(s.isSubmenu, e, s.title)), s.buttonContainer = s.el.querySelector(".jw-" + s.name + "-topbar-buttons"), s.children = {}, s.openMenus = [], s.items = [], s.visible = !1, s.parentMenu = n, s.mainMenu = s.parentMenu ? s.parentMenu.mainMenu : w(s), s.categoryButton = null, s.closeButton = s.mainMenu.closeButton, s.isSubmenu && (s.parentMenu.name === s.mainMenu.name && (s.categoryButton = s.createCategoryButton()), s.parentMenu.parentMenu && !s.mainMenu.backButton && (s.mainMenu.backButton = s.createBackButton(s.localizedPrevious)), s.itemsContainer = s.createItemsContainer(), s.parentMenu.appendMenu(w(s))), s
			}
			i = t, (e = a).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
			var d = a.prototype;
			return d.createItemsContainer = function() {
				var t = this,
					e = this.el.querySelector(".jw-settings-submenu-items"),
					i = this.mainMenu.closeButton && this.mainMenu.closeButton.element(),
					a = this.mainMenu.backButton && this.mainMenu.backButton.element(),
					r = this.categoryButton && this.categoryButton.element(),
					s = new n.a(e);
				return s.on("keydown", (function(n) {
					if (event.target.parentNode === e) {
						var s, l = n.sourceEvent,
							c = n.target,
							d = t.topbar && t.topbar.firstChild,
							h = document.getElementsByClassName("jw-icon-settings")[0],
							p = r ? Object(o.k)(r) : i,
							w = r ? Object(o.n)(r) : a,
							f = Object(o.k)(c) || d || e.firstChild,
							g = Object(o.n)(c) || d || e.lastChild,
							j = l && Object(u.c)(l.key);
						switch (j) {
							case "Tab":
								s = l.shiftKey ? w : p;
								break;
							case "Left":
								s = w || t.close(n) && h;
								break;
							case "Up":
								s = g;
								break;
							case "Right":
								s = p;
								break;
							case "Down":
								s = f;
								break;
							case "Esc":
								s = h, t.mainMenu.close(event)
						}
						s && s.focus(), l.preventDefault(), "Esc" !== j && l.stopPropagation()
					}
				})), s
			}, d.createCategoryButton = function() {
				return h(this)
			}, d.createBackButton = function(t) {
				var e = this,
					i = Object(r.a)("jw-settings-back", (function(t) {
						var i = e.mainMenu.backButtonTarget;
						i && i.open(t)
					}), t, [Object(s.a)("arrow-left")]);
				return Object(o.m)(this.mainMenu.topbar.el, i.element()), i
			}, d.setBackButtonAriaLabel = function(t) {
				var e = this.mainMenu.backButton.element(),
					i = t ? this.localizedPrevious + " - " + t : this.localizedPrevious;
				e.setAttribute("aria-label", i)
			}, d.createTopbar = function() {
				var t = Object(o.e)('<div class="jw-reset jw-submenu-topbar"></div>'),
					e = this.itemsContainer.el,
					i = this.mainMenu,
					a = this.categoryButton;
				return this.topbarUI = new n.a(t).on("keydown", (function(t) {
					var n = t.sourceEvent,
						r = function() {
							a ? (Object(o.n)(a.element()).focus(), n.preventDefault()) : i.backButton.element().focus()
						},
						s = function() {
							a ? (Object(o.k)(a.element()).focus(), n.preventDefault()) : i.closeButton.element().focus()
						};
					switch (Object(u.c)(n.key)) {
						case "Up":
							e.lastChild.focus();
							break;
						case "Down":
							e.firstChild.focus();
							break;
						case "Left":
							r();
							break;
						case "Right":
							s();
							break;
						case "Tab":
							n.shiftKey ? r() : s()
					}
				})), Object(o.m)(this.el, t), t
			}, d.createItems = function(t, e, i, n) {
				var a = this;
				void 0 === i && (i = {}), void 0 === n && (n = l.b);
				var r = this.name;
				return t.map((function(t, s) {
					var l, c, u;
					switch (r) {
						case "quality":
							"Auto" === t.label && 0 === s ? (l = "" + i.defaultText, u = ' <span class="jw-reset jw-auto-label"></span>') : l = t.label;
							break;
						case "captions":
							l = "Off" !== t.label && "off" !== t.id || 0 !== s ? t.label : i.defaultText;
							break;
						case "playbackRates":
							c = t, l = Object(p.g)(i.tooltipText) ? "x" + t : t + "x";
							break;
						case "audioTracks":
							l = t.name
					}
					l || (l = t, "object" == typeof t && (l.options = i));
					var d = new n(l, function(t) {
						if (!d.active) {
							if (d.deactivate) {
								a.items.filter((function(t) {
									return !0 === t.active
								})).forEach((function(t) {
									t.deactivate()
								}));
								var i = a.mainMenu.backButtonTarget;
								i ? i.open(t) : a.mainMenu.close(t)
							}
							d.activate && d.activate(), e(c || s)
						}
					}.bind(a));
					return u && d.el.appendChild(Object(o.e)(u)), d
				}))
			}, d.setMenuItems = function(t, e) {
				var i = this;
				t ? (this.destroyItems(), t.forEach((function(t) {
					i.items.push(t), i.itemsContainer.el.appendChild(t.el)
				})), e > -1 && this.items[e].activate(), this.categoryButton && this.categoryButton.show()) : this.removeMenu()
			}, d.appendMenu = function(t) {
				if (t) {
					var e = t.el,
						i = t.name,
						n = t.categoryButton;
					if (this.children[i] = t, n) {
						var a = this.mainMenu.buttonContainer,
							o = a.querySelector(".jw-settings-sharing"),
							r = "quality" === i ? a.firstChild : o || this.closeButton.element();
						a.insertBefore(n.element(), r)
					}
					this.mainMenu.el.appendChild(e), this.mainMenu.trigger("menuAppended", i)
				}
			}, d.removeMenu = function(t) {
				if (!t) return this.parentMenu.removeMenu(this.name);
				var e = this.children[t];
				e && (delete this.children[t], e.destroy(), this.mainMenu.trigger("menuRemoved", t))
			}, d.open = function(t) {
				var e, i = this.mainMenu.visible;
				if (this.items.length) {
					var n = t && t.sourceEvent,
						a = this.topbar ? this.topbar.firstChild : this.items[0].el,
						o = this.items[this.items.length - 1].el,
						r = n && "keydown" === n.type,
						s = "Up" === (r && Object(u.c)(n.key)) ? o : a;
					if (!this.visible || this.openMenus.length) {
						var l = this.mainMenu,
							c = this.parentMenu,
							d = this.categoryButton;
						if (c.openMenus.push(this.name), c.openMenus.length > 1 && c.closeChildren(this.name), d && d.element().setAttribute("aria-expanded", "true"), c.isSubmenu) {
							c.el.classList.remove("jw-settings-submenu-active"), l.topbar.el.classList.add("jw-nested-menu-open");
							var h = l.topbar.el.querySelector(".jw-settings-topbar-text");
							h.setAttribute("name", this.title), h.innerText = this.title;
							var p = c.title;
							this.setBackButtonAriaLabel(p), l.backButton.show(), this.mainMenu.backButtonTarget = this.parentMenu, e = h
						} else l.topbar.el.classList.remove("jw-nested-menu-open"), l.backButton && l.backButton.hide();
						this.el.classList.add("jw-settings-submenu-active"), i && r ? e = s : i || (l.open(t), e = d.element(), d && d.tooltip && !r && (d.tooltip.suppress = !0)), this.openMenus.length && this.closeChildren(), this.el.scrollTop = 0, this.visible = !0, this.el.setAttribute("aria-expanded", "true"), e && e.focus()
					} else this.items.length && r && s.focus()
				}
			}, d.close = function(t) {
				var e = this;
				this.visible && (this.visible = !1, this.el.setAttribute("aria-expanded", "false"), this.el.classList.remove("jw-settings-submenu-active"), this.categoryButton && this.categoryButton.element().setAttribute("aria-expanded", "false"), this.parentMenu.openMenus = this.parentMenu.openMenus.filter((function(t) {
					return t !== e.name
				})), !this.mainMenu.openMenus.length && this.mainMenu.visible && this.mainMenu.close(t), this.openMenus.length && this.closeChildren())
			}, d.closeChildren = function(t) {
				var e = this;
				this.openMenus.forEach((function(i) {
					if (i !== t) {
						var n = e.children[i];
						n && n.close()
					}
				}))
			}, d.toggle = function(t, e) {
				if (e && this.mainMenu.visible) return this.mainMenu.close(t);
				this.visible ? this.close(t) : this.open(t)
			}, d.destroyItems = function() {
				this.items.forEach((function(t) {
					t.destroy()
				})), this.items = []
			}, d.destroy = function() {
				var t = this;
				Object.keys(this.children).map((function(e) {
					t.children[e].destroy()
				})), this.categoryButton && (this.parentMenu.buttonContainer.removeChild(this.categoryButton.element()), this.categoryButton.ui.destroy()), this.topbarUI && this.topbarUI.destroy(), this.destroyItems(), this.itemsContainer.destroy();
				var e = this.parentMenu.openMenus,
					i = e.indexOf(this.name);
				e.length && i > -1 && this.openMenus.splice(i, 1), delete this.parentMenu, this.visible = !1, this.el.parentNode && this.el.parentNode.removeChild(this.el), this.off()
			}, a
		}(a.a)
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return d
		}));
		var n, a = i(0),
			o = i(4),
			r = i(8),
			s = i(9),
			l = i(3),
			c = i(11),
			u = i(7),
			d = {
				back: !0,
				backgroundOpacity: 50,
				edgeStyle: null,
				fontSize: 14,
				fontOpacity: 100,
				fontScale: .05,
				preprocessor: a.o,
				windowOpacity: 0
			},
			h = function(t) {
				var e, s, h, p, w, f, g, j, m, b = this,
					v = t.player;

				function y() {
					Object(a.s)(e.fontSize) && (v.get("containerHeight") ? j = d.fontScale * (e.userFontScale || 1) * e.fontSize / d.fontSize : v.once("change:containerHeight", y, this))
				}

				function k() {
					var t = v.get("containerHeight");
					if (t) {
						var e;
						if (v.get("fullscreen") && o.OS.iOS) e = null;
						else {
							var i = t * j;
							e = Math.round(10 * function(t) {
								var e = v.get("mediaElement");
								if (e && e.videoHeight) {
									var i = e.videoWidth,
										n = e.videoHeight,
										a = i / n,
										r = v.get("containerHeight"),
										s = v.get("containerWidth");
									if (v.get("fullscreen") && o.OS.mobile) {
										var l = window.screen;
										l.orientation && (r = l.availHeight, s = l.availWidth)
									}
									if (s && r && i && n) return (s / r > a ? r : n * s / i) * j
								}
								return t
							}(i)) / 10
						}
						v.get("renderCaptionsNatively") ? function(t, e) {
							var i = "#" + t + " .jw-video::-webkit-media-text-track-display";
							e && (e += "px", o.OS.iOS && Object(c.b)(i, {
								fontSize: "inherit"
							}, t, !0));
							m.fontSize = e, Object(c.b)(i, m, t, !0)
						}(v.get("id"), e) : Object(c.d)(w, {
							fontSize: e
						})
					}
				}

				function x(t, e, i) {
					var n = Object(c.c)("#000000", i);
					"dropShadow" === t ? e.textShadow = "0 2px 1px " + n : "raised" === t ? e.textShadow = "0 0 5px " + n + ", 0 1px 5px " + n + ", 0 2px 5px " + n : "depressed" === t ? e.textShadow = "0 -2px 1px " + n : "uniform" === t && (e.textShadow = "-2px 0 1px " + n + ",2px 0 1px " + n + ",0 -2px 1px " + n + ",0 2px 1px " + n + ",-1px 1px 1px " + n + ",1px 1px 1px " + n + ",1px -1px 1px " + n + ",1px 1px 1px " + n)
				}(w = document.createElement("div")).className = "jw-captions jw-reset", this.show = function() {
					Object(u.a)(w, "jw-captions-enabled")
				}, this.hide = function() {
					Object(u.o)(w, "jw-captions-enabled")
				}, this.populate = function(t) {
					v.get("renderCaptionsNatively") || (h = [], s = t, t ? this.selectCues(t, p) : this.renderCues())
				}, this.resize = function() {
					k(), this.renderCues(!0)
				}, this.renderCues = function(t) {
					t = !!t, n && n.processCues(window, h, w, t)
				}, this.selectCues = function(t, e) {
					if (t && t.data && e && !v.get("renderCaptionsNatively")) {
						var i = this.getAlignmentPosition(t, e);
						!1 !== i && (h = this.getCurrentCues(t.data, i), this.renderCues(!0))
					}
				}, this.getCurrentCues = function(t, e) {
					return Object(a.k)(t, (function(t) {
						return e >= t.startTime && (!t.endTime || e <= t.endTime)
					}))
				}, this.getAlignmentPosition = function(t, e) {
					var i = t.source,
						n = e.metadata,
						o = e.currentTime;
					return i && n && Object(a.v)(n[i]) && (o = n[i]), o
				}, this.clear = function() {
					Object(u.g)(w)
				}, this.setup = function(t, i) {
					f = document.createElement("div"), g = document.createElement("span"), f.className = "jw-captions-window jw-reset", g.className = "jw-captions-text jw-reset", e = Object(a.j)({}, d, i), j = d.fontScale;
					var n = function() {
						y(e.fontSize);
						var i = e.windowColor,
							n = e.windowOpacity,
							a = e.edgeStyle;
						m = {};
						var r = {};
						! function(t, e) {
							var i = e.color,
								n = e.fontOpacity;
							(i || n !== d.fontOpacity) && (t.color = Object(c.c)(i || "#ffffff", n));
							if (e.back) {
								var a = e.backgroundColor,
									o = e.backgroundOpacity;
								a === d.backgroundColor && o === d.backgroundOpacity || (t.backgroundColor = Object(c.c)(a, o))
							} else t.background = "transparent";
							e.fontFamily && (t.fontFamily = e.fontFamily);
							e.fontStyle && (t.fontStyle = e.fontStyle);
							e.fontWeight && (t.fontWeight = e.fontWeight);
							e.textDecoration && (t.textDecoration = e.textDecoration)
						}(r, e), (i || n !== d.windowOpacity) && (m.backgroundColor = Object(c.c)(i || "#000000", n)), x(a, r, e.fontOpacity), e.back || null !== a || x("uniform", r), Object(c.d)(f, m), Object(c.d)(g, r),
							function(t, e) {
								k(),
									function(t, e) {
										o.Browser.safari && Object(c.b)("#" + t + " .jw-video::-webkit-media-text-track-display-backdrop", {
											backgroundColor: e.backgroundColor
										}, t, !0);
										Object(c.b)("#" + t + " .jw-video::-webkit-media-text-track-display", m, t, !0), Object(c.b)("#" + t + " .jw-video::cue", e, t, !0)
									}(t, e),
									function(t, e) {
										Object(c.b)("#" + t + " .jw-text-track-display", m, t), Object(c.b)("#" + t + " .jw-text-track-cue", e, t)
									}(t, e)
							}(t, r)
					};
					n(), f.appendChild(g), w.appendChild(f), v.change("captionsTrack", (function(t, e) {
						this.populate(e)
					}), this), v.set("captions", e), v.on("change:captions", (function(t, i) {
						e = i, n()
					}))
				}, this.element = function() {
					return w
				}, this.destroy = function() {
					v.off(null, null, this), this.off()
				};
				var T = function(t) {
					p = t, b.selectCues(s, p)
				};
				v.on("change:playlistItem", (function() {
					p = null, h = []
				}), this), v.on(l.R, (function(t) {
					h = [], T(t)
				}), this), v.on(l.T, T, this), v.on("subtitlesTrackData", (function() {
					this.selectCues(s, p)
				}), this), v.on("change:captionsList", (function t(e, a) {
					var o = this;
					1 !== a.length && (e.get("renderCaptionsNatively") || n || (i.e(10).then(function(t) {
						n = i(97).default
					}.bind(null, i)).catch(Object(r.c)(301121)).catch((function(t) {
						o.trigger(l.wb, t)
					})), e.off("change:captionsList", t, this)))
				}), this)
			};
		Object(a.j)(h.prototype, s.a), e.b = h
	}, function(t, e, i) {
		"use strict";
		i.d(e, "c", (function() {
			return o
		})), i.d(e, "a", (function() {
			return r
		})), i.d(e, "b", (function() {
			return s
		}));
		var n = i(86),
			a = i.n(n),
			o = function(t) {
				return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + t + '" dir="auto">' + t + "</button>"
			},
			r = function(t) {
				var e = t.label;
				return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + e + '" aria-controls="jw-settings-submenu-' + t.name + '" dir="auto" aria-haspopup="true">' + e + "<div class='jw-reset jw-settings-value-wrapper'><div class=\"jw-reset-text jw-settings-content-item-value\">" + t.currentSelection + '</div><div class="jw-reset-text jw-settings-content-item-arrow">' + a.a + "</div></div></button>"
			},
			s = function(t) {
				return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + t + '" role="menuitemradio" aria-checked="false" dir="auto">' + t + "</button>"
			}
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-sharing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M175,160c-6.9,0.2-13.6,2.6-19,7l-62-39c0.8-2.6,1.2-5.3,1-8c0.2-2.7-0.2-5.4-1-8l62-39c5.4,4.4,12.1,6.8,19,7c16.3,0.3,29.7-12.6,30-28.9c0-0.4,0-0.7,0-1.1c0-16.5-13.5-30-30-30s-30,13.5-30,30c-0.2,2.7,0.2,5.4,1,8L84,97c-5.4-4.4-12.1-6.8-19-7c-16.5,0-30,13.5-30,30s13.5,30,30,30c6.9-0.2,13.6-2.6,19-7l62,39c-0.8,2.6-1.2,5.3-1,8c0,16.5,13.5,30,30,30s30-13.5,30-30S191.6,160,175,160z"></path></svg>'
	}, function(t, e, i) {
		"use strict";
		var n = i(4),
			a = i(9),
			o = i(34),
			r = i(52),
			s = i(7);
		var l = function(t) {
				var e = Object(s.c)(t),
					i = window.pageXOffset;
				return i && n.OS.android && document.body.parentElement && document.body.parentElement.getBoundingClientRect().left >= 0 && (e.left -= i, e.right -= i), e
			},
			c = function(t) {
				var e, i;

				function n(e, i) {
					var n;
					return (n = t.call(this) || this).className = e + " jw-background-color jw-reset", n.orientation = i, n
				}
				i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
				var a = n.prototype;
				return a.setup = function() {
					var t, e;
					this.el = Object(s.e)((t = this.className, e = "jw-slider-" + this.orientation, void 0 === t && (t = ""), void 0 === e && (e = ""), '<div class="' + t + " " + e + ' jw-reset" aria-hidden="true"><div class="jw-slider-container jw-reset"><div class="jw-rail jw-reset"></div><div class="jw-buffer jw-reset"></div><div class="jw-progress jw-reset"></div><div class="jw-knob jw-reset"></div></div></div>')), this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0], this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0], this.elementProgress = this.el.getElementsByClassName("jw-progress")[0], this.elementThumb = this.el.getElementsByClassName("jw-knob")[0], this.ui = new o.a(this.element(), {
						preventScrolling: !0
					}).on("dragStart", this.dragStart, this).on("drag", this.dragMove, this).on("dragEnd", this.dragEnd, this).on("click tap", this.tap, this)
				}, a.dragStart = function() {
					this.trigger("dragStart"), this.railBounds = l(this.elementRail)
				}, a.dragEnd = function(t) {
					this.dragMove(t), this.trigger("dragEnd")
				}, a.dragMove = function(t) {
					var e, i, n = this.railBounds = this.railBounds ? this.railBounds : l(this.elementRail);
					return i = "horizontal" === this.orientation ? (e = t.pageX) < n.left ? 0 : e > n.right ? 100 : 100 * Object(r.a)((e - n.left) / n.width, 0, 1) : (e = t.pageY) >= n.bottom ? 0 : e <= n.top ? 100 : 100 * Object(r.a)((n.height - (e - n.top)) / n.height, 0, 1), this.render(i), this.update(i), !1
				}, a.tap = function(t) {
					this.railBounds = l(this.elementRail), this.dragMove(t)
				}, a.limit = function(t) {
					return t
				}, a.update = function(t) {
					this.trigger("update", {
						percentage: t
					})
				}, a.render = function(t) {
					t = Math.max(0, Math.min(t, 100));
					var e = this.elementThumb,
						i = this.elementProgress;
					"horizontal" === this.orientation ? (e.style.left = t + "%", i.style.width = t + "%") : (e.style.bottom = t + "%", i.style.height = t + "%")
				}, a.updateBuffer = function(t) {
					this.elementBuffer.style.width = t + "%"
				}, a.element = function() {
					return this.el
				}, n
			}(a.a);
		e.a = c
	}, function(t, e, i) {
		"use strict";
		var n = i(9),
			a = i(7),
			o = i(76);
		i.d(e, "a", (function() {
			return r
		}));
		var r = function(t) {
			var e, i;

			function n(e, i, n, a) {
				var r;
				(r = t.call(this) || this).el = document.createElement("div");
				var s, l, c = "jw-icon jw-icon-tooltip " + e + " jw-button-color jw-reset";
				return n || (c += " jw-hidden"), i && (s = r.el, l = i, s && l && (s.setAttribute("aria-label", l), s.setAttribute("role", "button"), s.setAttribute("tabindex", "0"))), r.el.className = c, r.tooltip = document.createElement("div"), r.tooltip.className = "jw-overlay jw-reset", r.openClass = "jw-open", r.componentType = "tooltip", r.el.appendChild(r.tooltip), a && a.length > 0 && Array.prototype.forEach.call(a, (function(t) {
					"string" == typeof t ? r.el.appendChild(Object(o.a)(t)) : r.el.appendChild(t)
				})), r
			}
			i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
			var r = n.prototype;
			return r.addContent = function(t) {
				this.content && this.removeContent(), this.content = t, this.tooltip.appendChild(t)
			}, r.removeContent = function() {
				this.content && (this.tooltip.removeChild(this.content), this.content = null)
			}, r.hasContent = function() {
				return !!this.content
			}, r.element = function() {
				return this.el
			}, r.openTooltip = function(t) {
				this.isOpen || (this.trigger("open-" + this.componentType, t, {
					isOpen: !0
				}), this.isOpen = !0, Object(a.v)(this.el, this.openClass, this.isOpen))
			}, r.closeTooltip = function(t) {
				this.isOpen && (this.trigger("close-" + this.componentType, t, {
					isOpen: !1
				}), this.isOpen = !1, Object(a.v)(this.el, this.openClass, this.isOpen))
			}, r.toggleOpenState = function(t) {
				this.isOpen ? this.closeTooltip(t) : this.openTooltip(t)
			}, n
		}(n.a)
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return t && t.length ? t.end(t.length - 1) : 0
		}
		i.d(e, "a", (function() {
			return n
		}))
	}, , function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-buffer" viewBox="0 0 240 240" focusable="false"><path d="M120,186.667a66.667,66.667,0,0,1,0-133.333V40a80,80,0,1,0,80,80H186.667A66.846,66.846,0,0,1,120,186.667Z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-replay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M120,41.9v-20c0-5-4-8-8-4l-44,28a5.865,5.865,0,0,0-3.3,7.6A5.943,5.943,0,0,0,68,56.8l43,29c5,4,9,1,9-4v-20a60,60,0,1,1-60,60H40a80,80,0,1,0,80-79.9Z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-error" viewBox="0 0 36 36" style="width:100%;height:100%;" focusable="false"><path d="M34.6 20.2L10 33.2 27.6 16l7 3.7a.4.4 0 0 1 .2.5.4.4 0 0 1-.2.2zM33.3 0L21 12.2 9 6c-.2-.3-.6 0-.6.5V25L0 33.6 2.5 36 36 2.7z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-play" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-pause" viewBox="0 0 240 240" focusable="false"><path d="M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-rewind" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-next" viewBox="0 0 240 240" focusable="false"><path d="M165,60v53.3L59.2,42.8C56.9,41.3,55,42.3,55,45v150c0,2.7,1.9,3.8,4.2,2.2L165,126.6v53.3h20v-120L165,60L165,60z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M190,185c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H55c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V55c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h130c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V185z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.7,39.1,116.4,39.9,116.4,42.8z M178.2,120c0-22.7-18.5-41.2-41.2-41.2v20.6c11.4,0,20.6,9.2,20.6,20.6c0,11.4-9.2,20.6-20.6,20.6v20.6C159.8,161.2,178.2,142.7,178.2,120z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z"></path><path d="M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z"></path><path d="M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-on" viewBox="0 0 240 240" focusable="false"><path d="M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z M108.1,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C90.4,141.7,102,143.5,108.1,137.7z M152.9,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C135.2,141.7,146.8,143.5,152.9,137.7z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-off" viewBox="0 0 240 240" focusable="false"><path d="M99.4,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C107.9,100,103.8,97.8,99.4,97.8z M144.1,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C152.6,100,148.5,97.8,144.1,97.8L144.1,97.8z M200,60v120H40V60H200 M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-on" viewBox="0 0 240 240" focusable="false"><path d="M229.9,40v130c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0h-44l-17-20h46V55H30v100h47l-17,20h-45c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V40c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h209.8c2.6-0.2,4.8,1.8,5,4.4C229.9,39.7,229.9,39.9,229.9,40z M104.9,122l15-18l15,18l11,13h44V75H50v60h44L104.9,122z M179.9,205l-60-70l-60,70H179.9z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-off" viewBox="0 0 240 240" focusable="false"><path d="M210,55v100h-50l20,20h45c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V40c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0H15c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v130c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h45l20-20H30V55H210 M60,205l60-70l60,70H60L60,205z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-left" viewBox="0 0 240 240" focusable="false"><path d="M55.4,104.4c-1.1,1.1-2.2,2.3-3.1,3.6c-6.9,9.9-4.4,23.5,5.5,30.4L159.7,240l33.9-33.9l-84.9-84.9l84.9-84.9L157.3,0L55.4,104.4L55.4,104.4z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-playback-rate" viewBox="0 0 240 240" focusable="false"><path d="M158.83,48.83A71.17,71.17,0,1,0,230,120,71.163,71.163,0,0,0,158.83,48.83Zm45.293,77.632H152.34V74.708h12.952v38.83h38.83ZM35.878,74.708h38.83V87.66H35.878ZM10,113.538H61.755V126.49H10Zm25.878,38.83h38.83V165.32H35.878Z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M204,145l-25-14c0.8-3.6,1.2-7.3,1-11c0.2-3.7-0.2-7.4-1-11l25-14c2.2-1.6,3.1-4.5,2-7l-16-26c-1.2-2.1-3.8-2.9-6-2l-25,14c-6-4.2-12.3-7.9-19-11V35c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v28c-6.7,3.1-13,6.7-19,11L56,60c-2.2-0.9-4.8-0.1-6,2L35,88c-1.6,2.2-1.3,5.3,0.9,6.9c0,0,0.1,0,0.1,0.1l25,14c-0.8,3.6-1.2,7.3-1,11c-0.2,3.7,0.2,7.4,1,11l-25,14c-2.2,1.6-3.1,4.5-2,7l16,26c1.2,2.1,3.8,2.9,6,2l25-14c5.7,4.6,12.2,8.3,19,11v28c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6v-28c7-2.3,13.5-6,19-11l25,14c2.5,1.3,5.6,0.4,7-2l15-26C206.7,149.4,206,146.7,204,145z M120,149.9c-16.5,0-30-13.4-30-30s13.4-30,30-30s30,13.4,30,30c0.3,16.3-12.6,29.7-28.9,30C120.7,149.9,120.4,149.9,120,149.9z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-audio-tracks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M35,34h160v20H35V34z M35,94h160V74H35V94z M35,134h60v-20H35V134z M160,114c-23.4-1.3-43.6,16.5-45,40v50h20c5.2,0.3,9.7-3.6,10-8.9c0-0.4,0-0.7,0-1.1v-20c0.3-5.2-3.6-9.7-8.9-10c-0.4,0-0.7,0-1.1,0h-10v-10c1.5-17.9,17.1-31.3,35-30c17.9-1.3,33.6,12.1,35,30v10H185c-5.2-0.3-9.7,3.6-10,8.9c0,0.4,0,0.7,0,1.1v20c-0.3,5.2,3.6,9.7,8.9,10c0.4,0,0.7,0,1.1,0h20v-50C203.5,130.6,183.4,112.7,160,114z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-quality-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M55,200H35c-3,0-5-2-5-4c0,0,0,0,0-1v-30c0-3,2-5,4-5c0,0,0,0,1,0h20c3,0,5,2,5,4c0,0,0,0,0,1v30C60,198,58,200,55,200L55,200z M110,195v-70c0-3-2-5-4-5c0,0,0,0-1,0H85c-3,0-5,2-5,4c0,0,0,0,0,1v70c0,3,2,5,4,5c0,0,0,0,1,0h20C108,200,110,198,110,195L110,195z M160,195V85c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v110c0,3,2,5,4,5c0,0,0,0,1,0h20C158,200,160,198,160,195L160,195z M210,195V45c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v150c0,3,2,5,4,5c0,0,0,0,1,0h20C208,200,210,198,210,195L210,195z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-off" viewBox="0 0 240 240" focusable="false"><path d="M109.2,134.9l-8.4,50.1c-0.4,2.7-2.4,3.3-4.4,1.4L82,172l-27.9,27.9l-14.2-14.2l27.9-27.9l-14.4-14.4c-1.9-1.9-1.3-3.9,1.4-4.4l50.1-8.4c1.8-0.5,3.6,0.6,4.1,2.4C109.4,133.7,109.4,134.3,109.2,134.9L109.2,134.9z M172.1,82.1L200,54.2L185.8,40l-27.9,27.9l-14.4-14.4c-1.9-1.9-3.9-1.3-4.4,1.4l-8.4,50.1c-0.5,1.8,0.6,3.6,2.4,4.1c0.5,0.2,1.2,0.2,1.7,0l50.1-8.4c2.7-0.4,3.3-2.4,1.4-4.4L172.1,82.1z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-on" viewBox="0 0 240 240" focusable="false"><path d="M96.3,186.1c1.9,1.9,1.3,4-1.4,4.4l-50.6,8.4c-1.8,0.5-3.7-0.6-4.2-2.4c-0.2-0.6-0.2-1.2,0-1.7l8.4-50.6c0.4-2.7,2.4-3.4,4.4-1.4l14.5,14.5l28.2-28.2l14.3,14.3l-28.2,28.2L96.3,186.1z M195.8,39.1l-50.6,8.4c-2.7,0.4-3.4,2.4-1.4,4.4l14.5,14.5l-28.2,28.2l14.3,14.3l28.2-28.2l14.5,14.5c1.9,1.9,4,1.3,4.4-1.4l8.4-50.6c0.5-1.8-0.6-3.6-2.4-4.2C197,39,196.4,39,195.8,39.1L195.8,39.1z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-close" viewBox="0 0 240 240" focusable="false"><path d="M134.8,120l48.6-48.6c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2l-7.4-7.4c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L120,105.2L71.4,56.6c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L56.6,64c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l48.6,48.7l-48.6,48.6c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l7.4,7.4c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l48.7-48.6l48.6,48.6c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l7.4-7.4c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2L134.8,120z"></path></svg>'
	}, function(t, e, i) {
		"use strict";
		var n = i(84),
			a = i(83),
			o = {
				TIT2: "title",
				TT2: "title",
				WXXX: "url",
				TPE1: "artist",
				TP1: "artist",
				TALB: "album",
				TAL: "album"
			};

		function r(t, e) {
			for (var i, n, a, o = t.length, r = "", s = e || 0; s < o;)
				if (0 !== (i = t[s++]) && 3 !== i) switch (i >> 4) {
					case 0:
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
						r += String.fromCharCode(i);
						break;
					case 12:
					case 13:
						n = t[s++], r += String.fromCharCode((31 & i) << 6 | 63 & n);
						break;
					case 14:
						n = t[s++], a = t[s++], r += String.fromCharCode((15 & i) << 12 | (63 & n) << 6 | (63 & a) << 0)
				}
			return r
		}

		function s(t) {
			var e = function(t) {
				for (var e = "0x", i = 0; i < t.length; i++) t[i] < 16 && (e += "0"), e += t[i].toString(16);
				return parseInt(e)
			}(t);
			return 127 & e | (32512 & e) >> 1 | (8323072 & e) >> 2 | (2130706432 & e) >> 3
		}

		function l(t) {
			return void 0 === t && (t = []), t.reduce((function(t, e) {
				if (!("value" in e) && "data" in e && e.data instanceof ArrayBuffer) {
					var i = new Uint8Array(e.data),
						n = i.length;
					e = {
						value: {
							key: "",
							data: ""
						}
					};
					for (var a = 10; a < 14 && a < i.length && 0 !== i[a];) e.value.key += String.fromCharCode(i[a]), a++;
					var l = 19,
						c = i[l];
					3 !== c && 0 !== c || (c = i[++l], n--);
					var u = 0;
					if (1 !== c && 2 !== c)
						for (var d = l + 1; d < n; d++)
							if (0 === i[d]) {
								u = d - l;
								break
							} if (u > 0) {
						var h = r(i.subarray(l, l += u), 0);
						if ("PRIV" === e.value.key) {
							if ("com.apple.streaming.transportStreamTimestamp" === h) {
								var p = 1 & s(i.subarray(l, l += 4)),
									w = s(i.subarray(l, l += 4)) + (p ? 4294967296 : 0);
								e.value.data = w
							} else e.value.data = r(i, l + 1);
							e.value.info = h
						} else e.value.info = h, e.value.data = r(i, l + 1)
					} else {
						var f = i[l];
						e.value.data = 1 === f || 2 === f ? function(t, e) {
							for (var i = t.length - 1, n = "", a = e || 0; a < i;) 254 === t[a] && 255 === t[a + 1] || (n += String.fromCharCode((t[a] << 8) + t[a + 1])), a += 2;
							return n
						}(i, l + 1) : r(i, l + 1)
					}
				}
				if (o.hasOwnProperty(e.value.key) && (t[o[e.value.key]] = e.value.data), e.value.info) {
					var g = t[e.value.key];
					g !== Object(g) && (g = {}, t[e.value.key] = g), g[e.value.info] = e.value.data
				} else t[e.value.key] = e.value.data;
				return t
			}), {})
		}
		var c = i(4),
			u = i(3),
			d = i(0),
			h = {
				_itemTracks: null,
				_textTracks: null,
				_currentTextTrackIndex: -1,
				_tracksById: null,
				_cuesByTrackId: null,
				_cachedVTTCues: null,
				_metaCuesByTextTime: null,
				_unknownCount: 0,
				_activeCues: null,
				_cues: null,
				textTrackChangeHandler: null,
				addTrackHandler: null,
				cueChangeHandler: null,
				renderNatively: !1,
				_initTextTracks: function() {
					this._textTracks = [], this._tracksById = {}, this._metaCuesByTextTime = {}, this._cuesByTrackId = {}, this._cachedVTTCues = {}, this._cues = {}, this._activeCues = {}, this._unknownCount = 0
				},
				addTracksListener: function(t, e, i) {
					t && (this.removeTracksListener(t, e, i), this.instreamMode || (t.addEventListener ? t.addEventListener(e, i) : t["on" + e] = i))
				},
				removeTracksListener: function(t, e, i) {
					t && (t.removeEventListener && i ? t.removeEventListener(e, i) : t["on" + e] = null)
				},
				clearTracks: function() {
					var t = this;
					Object(n.a)(this._itemTracks);
					var e = this._tracksById;
					if (e && Object.keys(e).forEach((function(i) {
							if (0 === i.indexOf("nativemetadata")) {
								var n = e[i];
								t.cueChangeHandler && n.removeEventListener("cuechange", t.cueChangeHandler), m(t.renderNatively, [n], !0)
							}
						})), this._itemTracks = null, this._textTracks = null, this._tracksById = null, this._cuesByTrackId = null, this._metaCuesByTextTime = null, this._unknownCount = 0, this._currentTextTrackIndex = -1, this._activeCues = {}, this._cues = {}, this.renderNatively) {
						var i = this.video.textTracks;
						this.textTrackChangeHandler && this.removeTracksListener(i, "change", this.textTrackChangeHandler), m(this.renderNatively, i, !0)
					}
				},
				clearMetaCues: function() {
					var t = this,
						e = this._tracksById,
						i = this._cachedVTTCues;
					e && i && Object.keys(e).forEach((function(n) {
						if (0 === n.indexOf("nativemetadata")) {
							var a = e[n];
							m(t.renderNatively, [a], !1), a.mode = "hidden", a.inuse = !0, a._id && (i[a._id] = {})
						}
					}))
				},
				clearCueData: function(t) {
					var e = this._cachedVTTCues;
					e && e[t] && (e[t] = {}, this._tracksById && (this._tracksById[t].data = []))
				},
				disableTextTrack: function() {
					var t = this.getCurrentTextTrack();
					if (t) {
						t.mode = "disabled";
						var e = t._id;
						(e && v(e) || this.renderNatively && c.OS.iOS) && (t.mode = "hidden")
					}
				},
				enableTextTrack: function() {
					var t = this.getCurrentTextTrack();
					t && (t.mode = "showing")
				},
				getCurrentTextTrack: function() {
					if (this._textTracks) return this._textTracks[this._currentTextTrackIndex]
				},
				getSubtitlesTrack: function() {
					return this._currentTextTrackIndex
				},
				addTextTracks: function(t) {
					var e = this,
						i = [];
					return t ? (this._textTracks || this._initTextTracks(), t.forEach((function(t) {
						if (!(t.includedInManifest || t.kind && !b(t.kind))) {
							var a = e._createTrack(t);
							e._addTrackToList(a), i.push(a), t.file && (t.data = [], Object(n.b)(t, (function(t) {
								a.sideloaded = !0, e.addVTTCuesToTrack(a, t)
							}), (function(t) {
								e.trigger(u.wb, t)
							})))
						}
					})), this._textTracks && this._textTracks.length && this.trigger(u.sb, {
						tracks: this._textTracks
					}), i) : i
				},
				setTextTracks: function(t) {
					var e = this;
					if (this._currentTextTrackIndex = -1, t) {
						if (this._textTracks) {
							var i = this._tracksById;
							this._activeCues = {}, this._cues = {}, this._unknownCount = 0, this._textTracks = this._textTracks.filter((function(t) {
								var n = t._id;
								return e.renderNatively && n && v(n) ? (delete i[n], !1) : (t.name && 0 === t.name.indexOf("Unknown") && e._unknownCount++, 0 === n.indexOf("nativemetadata") && "com.apple.streaming" === t.inBandMetadataTrackDispatchType && delete i[n], !0)
							}), this)
						} else this._initTextTracks();
						if (t.length)
							for (var n = 0, o = t.length, r = this._tracksById, s = this._cuesByTrackId; n < o; n++) {
								var l = t[n],
									c = l._id || "";
								if (!c) {
									if (!1 === l.inuse && b(l.kind) && this.renderNatively) {
										l._id = "native" + l.kind + n;
										continue
									}
									if (b(l.kind) || "metadata" === l.kind) {
										if (c = l._id = "native" + l.kind + n, !l.label && "captions" === l.kind) {
											var d = Object(a.b)(l, this._unknownCount);
											l.name = d.label, this._unknownCount = d.unknownCount
										}
									} else c = l._id = Object(a.a)(l, this._textTracks ? this._textTracks.length : 0);
									if (r[c]) continue;
									l.inuse = !0
								}
								if (l.inuse && !r[c])
									if ("metadata" === l.kind) {
										l.mode = "hidden";
										var h = this.cueChangeHandler = this.cueChangeHandler || g.bind(this);
										l.removeEventListener("cuechange", h), l.addEventListener("cuechange", h), r[c] = l
									} else if (b(l.kind)) {
									var p = l.mode,
										w = void 0;
									if (l.mode = "hidden", (!l.cues || !l.cues.length) && l.embedded) continue;
									if (("disabled" !== p || v(c)) && (l.mode = p), s[c] && !s[c].loaded) {
										for (var f = s[c].cues; w = f.shift();) j(this.renderNatively, l, w);
										l.mode = p, s[c].loaded = !0
									}
									this._addTrackToList(l)
								}
							}
						this.renderNatively && this.addTrackListeners(t), this._textTracks && this._textTracks.length && this.trigger(u.sb, {
							tracks: this._textTracks
						})
					}
				},
				addTrackListeners: function(t) {
					var e = this.textTrackChangeHandler = this.textTrackChangeHandler || p.bind(this);
					this.removeTracksListener(t, "change", e), this.addTracksListener(t, "change", e), (c.Browser.edge || c.Browser.firefox) && (e = this.addTrackHandler = this.addTrackHandler || f.bind(this), this.removeTracksListener(t, "addtrack", e), this.addTracksListener(t, "addtrack", e))
				},
				setupSideloadedTracks: function(t) {
					if (this.renderNatively) {
						var e = (t = t || null) === this._itemTracks;
						e || Object(n.a)(this._itemTracks), this._itemTracks = t, t && (e || (this.disableTextTrack(), this._clearSideloadedTextTracks(), this.addTextTracks(t)))
					}
				},
				setSubtitlesTrack: function(t) {
					if (this.renderNatively) {
						if (this._textTracks && (0 === t && this._textTracks.forEach((function(t) {
								t.mode = t.embedded ? "hidden" : "disabled"
							})), this._currentTextTrackIndex !== t - 1)) {
							this.disableTextTrack(), this._currentTextTrackIndex = t - 1;
							var e = this.getCurrentTextTrack();
							e && (e.mode = "showing"), this.trigger(u.tb, {
								currentTrack: this._currentTextTrackIndex + 1,
								tracks: this._textTracks
							})
						}
					} else this.setCurrentSubtitleTrack && this.setCurrentSubtitleTrack(t - 1)
				},
				createCue: function(t, e, i) {
					return new(window.VTTCue || window.TextTrackCue)(t, Math.max(e || 0, t + .25), i)
				},
				addVTTCue: function(t, e) {
					this._tracksById || this._initTextTracks();
					var i = t.track ? t.track : "native" + t.type,
						n = this._tracksById[i],
						a = "captions" === t.type ? "Unknown CC" : "ID3 Metadata",
						o = t.cue;
					if (!n) {
						var r = {
							kind: t.type,
							_id: i,
							label: a,
							default: !1
						};
						this.renderNatively || "metadata" === r.kind ? ((n = this._createTrack(r)).embedded = !0, this.setTextTracks(this.video.textTracks)) : n = this.addTextTracks([r])[0]
					}
					if (this._cacheVTTCue(n, o, e)) {
						var s = this.renderNatively || "metadata" === n.kind;
						return s ? j(s, n, o) : n.data.push(o), o
					}
					return null
				},
				addVTTCuesToTrack: function(t, e) {
					if (this.renderNatively) {
						var i, n = t._id,
							a = this._tracksById,
							o = this._cuesByTrackId,
							r = a[n];
						if (!r) return o || (o = this._cuesByTrackId = {}), void(o[n] = {
							cues: e,
							loaded: !1
						});
						if (!o[n] || !o[n].loaded)
							for (o[n] = {
									cues: e,
									loaded: !0
								}; i = e.shift();) j(this.renderNatively, r, i)
					}
				},
				parseNativeID3Cues: function(t, e) {
					var i = t[t.length - 1];
					if (!e || e.length !== t.length || !i._parsed && !k(e[e.length - 1], i)) {
						for (var n = [], a = [], o = -1, r = -1, s = -1, l = 0; l < t.length; l++) {
							var c = t[l];
							if (!c._extended && (c.data || c.value)) {
								if (c.startTime !== r || null === c.endTime) {
									s = r, r = c.startTime;
									var d = n[o];
									if (n[++o] = [], a[o] = [], d && r - s > 0)
										for (var h = 0; h < d.length; h++) {
											var p = d[h];
											p.endTime = r, p._extended = !0
										}
								}
								n[o].push(c), c._parsed || (a[o].push(c), c.endTime - r < .25 && (c.endTime = r + .25), c._parsed = !0)
							}
						}
						for (var w = 0; w < a.length; w++)
							if (a[w].length) {
								var f = y(a[w]);
								this.trigger(u.M, f)
							}
					}
				},
				triggerActiveCues: function(t, e) {
					var i = this,
						n = t.filter((function(t) {
							if (e && e.some((function(e) {
									return k(t, e)
								}))) return !1;
							if (t.data) return !0;
							var n = t.text ? function(t) {
								var e;
								try {
									e = JSON.parse(t.text)
								} catch (t) {
									return null
								}
								var i = {
									metadataType: e.metadataType,
									metadataTime: t.startTime,
									metadata: e
								};
								e.programDateTime && (i.programDateTime = e.programDateTime);
								return i
							}(t) : null;
							if (n) "emsg" === n.metadataType && (n.metadata = n.metadata || {}, n.metadata.messageData = t.value), i.trigger(u.L, n);
							else if (t.value) return !0;
							return !1
						}));
					if (n.length) {
						var a = y(n);
						this.trigger(u.L, a)
					}
				},
				ensureMetaTracksActive: function() {
					for (var t = this.video.textTracks, e = t.length, i = 0; i < e; i++) {
						var n = t[i];
						"metadata" === n.kind && "disabled" === n.mode && (n.mode = "hidden")
					}
				},
				_cacheVTTCue: function(t, e, i) {
					var n = t.kind,
						a = t._id,
						o = this._cachedVTTCues;
					o[a] || (o[a] = {});
					var r, s = o[a];
					switch (n) {
						case "captions":
						case "subtitles":
							r = i || Math.floor(20 * e.startTime);
							var l = "_" + (e.line || "auto"),
								c = Math.floor(20 * e.endTime),
								u = s[r + l] || s[r + 1 + l] || s[r - 1 + l];
							return !(u && Math.abs(u - c) <= 1) && (s[r + l] = c, !0);
						case "metadata":
							var d = e.data ? new Uint8Array(e.data).join("") : e.text;
							return !s[r = i || e.startTime + d] && (s[r] = e.endTime, !0);
						default:
							return !1
					}
				},
				_addTrackToList: function(t) {
					this._textTracks.push(t), this._tracksById[t._id] = t
				},
				_createTrack: function(t) {
					var e, i = Object(a.b)(t, this._unknownCount),
						n = i.label;
					if (this._unknownCount = i.unknownCount, this.renderNatively || "metadata" === t.kind) {
						var o = this.video.textTracks;
						(e = Object(d.m)(o, {
							label: n
						})) || (e = this.video.addTextTrack(t.kind, n, t.language || "")), e.default = t.default, e.mode = "disabled", e.inuse = !0
					} else(e = t).data = e.data || [];
					return e._id || (e._id = Object(a.a)(t, this._textTracks ? this._textTracks.length : 0)), e
				},
				_clearSideloadedTextTracks: function() {
					if (this._textTracks) {
						var t = this._textTracks.filter((function(t) {
							return t.embedded || "subs" === t.groupid
						}));
						this._initTextTracks();
						var e = this._tracksById;
						t.forEach((function(t) {
							e[t._id] = t
						})), this._textTracks = t
					}
				}
			};

		function p() {
			var t = this.video.textTracks,
				e = Object(d.k)(t, (function(t) {
					return (t.inuse || !t._id) && b(t.kind)
				}));
			if (this._textTracks && !w.call(this, e)) {
				for (var i = -1, n = 0; n < this._textTracks.length; n++)
					if ("showing" === this._textTracks[n].mode) {
						i = n;
						break
					} i !== this._currentTextTrackIndex && this.setSubtitlesTrack(i + 1)
			} else this.setTextTracks(t)
		}

		function w(t) {
			var e = this._textTracks,
				i = this._tracksById;
			if (t.length > e.length) return !0;
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				if (!a._id || !i[a._id]) return !0
			}
			return !1
		}

		function f(t) {
			var e = t.track;
			e && e._id || this.setTextTracks(this.video.textTracks)
		}

		function g(t) {
			var e = t.target,
				i = e.activeCues,
				n = e.cues,
				a = e._id,
				o = this._cues,
				r = this._activeCues;
			if (n && n.length) {
				var s = o[a];
				o[a] = Array.prototype.slice.call(n), this.parseNativeID3Cues(n, s)
			} else delete o[a];
			if (i && i.length) {
				var l = r[a],
					c = r[a] = Array.prototype.slice.call(i);
				this.triggerActiveCues(c, l)
			} else delete r[a]
		}

		function j(t, e, i) {
			if (c.Browser.ie) {
				var n = i;
				(t || "metadata" === e.kind) && (n = new window.TextTrackCue(i.startTime, i.endTime, i.text), i.value && (n.value = i.value)),
				function(t, e) {
					var i = [],
						n = t.mode;
					t.mode = "hidden";
					var a = t.cues;
					if (a)
						for (var o = a.length - 1; o >= 0 && a[o].startTime > e.startTime; o--) i.unshift(a[o]), t.removeCue(a[o]);
					try {
						t.addCue(e), i.forEach((function(e) {
							return t.addCue(e)
						}))
					} catch (t) {
						console.error(t)
					}
					t.mode = n
				}(e, n)
			} else try {
				e.addCue(i)
			} catch (t) {
				console.error(t)
			}
		}

		function m(t, e, i) {
			e && e.length && Object(d.i)(e, (function(e) {
				var n = e._id || "";
				if (i && (e._id = void 0), !c.Browser.ie && !c.Browser.safari || !t || !/^(native|subtitle|cc)/.test(n)) {
					if (c.Browser.ie && "disabled" === e.mode || (e.mode = "disabled", e.mode = "hidden"), e.cues)
						for (var a = e.cues.length; a--;) e.removeCue(e.cues[a]);
					e.embedded || (e.mode = "disabled"), e.inuse = !1
				}
			}))
		}

		function b(t) {
			return "captions" === t || "subtitles" === t
		}

		function v(t) {
			return /^native(?:captions|subtitles)/.test(t)
		}

		function y(t) {
			var e = l(t);
			return {
				metadataType: "id3",
				metadataTime: t[0].startTime,
				metadata: e
			}
		}

		function k(t, e) {
			return t.startTime === e.startTime && t.endTime === e.endTime && t.text === e.text && t.data === e.data && JSON.stringify(t.value) === JSON.stringify(e.value)
		}
		e.a = h
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return n
		})), i.d(e, "b", (function() {
			return a
		})), i.d(e, "c", (function() {
			return o
		}));
		var n = function(t, e) {
				return t ? '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu jw-settings-submenu-' + e + '" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>' : '<div id="jw-settings-menu" class="jw-reset jw-settings-menu" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-topbar" role="menubar"><div class="jw-reset jw-settings-topbar-text" tabindex="0"></div><div class="jw-reset jw-settings-topbar-buttons"></div></div></div>'
			},
			a = function(t, e) {
				return t ? '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu jw-settings-submenu-' + e + '" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>' : '<div id="jw-settings-menu-tizen" class="jw-reset jw-settings-menu-tizen" role="menu" aria-expanded="false"></div>'
			},
			o = function(t, e, i) {
				return '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu-tizen jw-settings-submenu-' + e + '"><div class="jw-reset jw-reset-text jw-settings-topbar-text">' + i + '</div><div class="jw-reset jw-settings-submenu-items"></div></div>'
			}
	}, function(t, e, i) {
		"use strict";
		var n = function(t, e) {
				return void 0 === t && (t = ""), void 0 === e && (e = ""), '<div class="jw-display-icon-container jw-display-icon-' + t + ' jw-reset"><div class="jw-icon jw-icon-' + t + ' jw-button-color jw-reset" role="button" tabindex="0" aria-label="' + e + '"></div></div>'
			},
			a = i(34),
			o = function() {
				function t(t, e, i) {
					var n = i.querySelector(".jw-icon");
					this.el = i, this.ui = new a.a(n).on("click tap enter", (function() {
						var i = t.get("position"),
							n = t.get("duration"),
							a = i - 10,
							o = 0;
						"DVR" === t.get("streamType") && (o = n), e.seek(Math.max(a, o))
					}))
				}
				return t.prototype.element = function() {
					return this.el
				}, t
			}(),
			r = i(9),
			s = i(7);
		var l = function(t) {
				var e, i;

				function n(e, i, n) {
					var o;
					o = t.call(this) || this;
					var r = e.get("localization"),
						l = n.querySelector(".jw-icon");
					if (o.icon = l, o.el = n, o.ui = new a.a(l).on("click tap enter", (function(t) {
							o.trigger(t.type)
						})), e.on("change:state", (function(t, e) {
							var i;
							switch (e) {
								case "buffering":
									i = r.buffer;
									break;
								case "playing":
									i = r.pause;
									break;
								case "idle":
								case "paused":
									i = r.playback;
									break;
								case "complete":
									i = r.replay;
									break;
								default:
									i = ""
							}
							"" !== i ? l.setAttribute("aria-label", i) : l.removeAttribute("aria-label")
						})), e.get("displayPlaybackLabel")) {
						var c = o.icon.getElementsByClassName("jw-idle-icon-text")[0];
						c || (c = Object(s.e)('<div class="jw-idle-icon-text">' + r.playback + "</div>"), Object(s.a)(o.icon, "jw-idle-label"), o.icon.appendChild(c))
					}
					return o
				}
				return i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i, n.prototype.element = function() {
					return this.el
				}, n
			}(r.a),
			c = function() {
				function t(t, e, i) {
					var n = i.querySelector(".jw-icon");
					this.ui = new a.a(n).on("click tap enter", (function() {
						e.next({
							reason: "interaction"
						})
					})), t.change("nextUp", (function(t, e) {
						i.style.visibility = e ? "" : "hidden"
					})), this.el = i
				}
				return t.prototype.element = function() {
					return this.el
				}, t
			}(),
			u = i(73);
		i.d(e, "a", (function() {
			return d
		}));
		var d = function() {
			function t(t, e) {
				var i;
				this.el = Object(s.e)((i = t.get("localization"), '<div class="jw-display jw-reset"><div class="jw-display-container jw-reset"><div class="jw-display-controls jw-reset">' + n("rewind", i.rewind) + n("display", i.playback) + n("next", i.next) + "</div></div></div>"));
				var a = this.el.querySelector(".jw-display-controls"),
					r = {};
				h("rewind", Object(u.b)("rewind"), o, a, r, t, e), h("display", Object(u.b)("play,pause,buffer,replay"), l, a, r, t, e), h("next", Object(u.b)("next"), c, a, r, t, e), this.container = a, this.buttons = r
			}
			var e = t.prototype;
			return e.element = function() {
				return this.el
			}, e.destroy = function() {
				var t = this.buttons;
				Object.keys(t).forEach((function(e) {
					t[e].ui && t[e].ui.destroy()
				}))
			}, t
		}();

		function h(t, e, i, n, a, o, r) {
			var s = n.querySelector(".jw-display-icon-" + t),
				l = n.querySelector(".jw-icon-" + t);
			e.forEach((function(t) {
				l.appendChild(t)
			})), a[t] = new i(o, r, s)
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(0),
			a = i(52),
			o = i(11),
			r = i(12),
			s = i(7),
			l = i(34),
			c = i(94),
			u = i(95),
			d = i(27),
			h = i(77),
			p = function() {
				function t(t, e, i) {
					this.time = t, this.text = e, this.el = document.createElement("div");
					var n = "jw-cue jw-reset";
					i && "string" == typeof i && (n += " jw-cue-type-" + i), this.el.className = n
				}
				return t.prototype.align = function(t) {
					if ("%" === this.time.toString().slice(-1)) this.pct = this.time;
					else {
						var e = this.time / t * 100;
						this.pct = e + "%"
					}
					this.el.style.left = this.pct
				}, t
			}(),
			w = {
				loadChapters: function(t) {
					Object(d.b)(t, this.chaptersLoaded.bind(this), this.chaptersFailed, {
						plainText: !0
					})
				},
				chaptersLoaded: function(t) {
					var e = Object(h.a)(t.responseText);
					if (Array.isArray(e)) {
						var i = this._model.get("cues").concat(e);
						this._model.set("cues", i)
					}
				},
				chaptersFailed: function() {},
				addCue: function(t) {
					this.cues.push(new p(t.begin, t.text, t.cueType))
				},
				drawCues: function() {
					var t = this,
						e = this._model.get("duration");
					!e || e <= 0 || this.cues.forEach((function(i) {
						i.align(e), i.el.addEventListener("mouseover", (function() {
							t.activeCue = i
						})), i.el.addEventListener("mouseout", (function() {
							t.activeCue = null
						})), t.elementRail.appendChild(i.el)
					}))
				},
				resetCues: function() {
					this.cues.forEach((function(t) {
						t.el.parentNode && t.el.parentNode.removeChild(t.el)
					})), this.cues = []
				}
			};

		function f(t) {
			this.begin = t.begin, this.end = t.end, this.img = t.text
		}
		var g = {
			loadThumbnails: function(t) {
				t && (this.vttPath = t.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, Object(d.b)(t, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
					plainText: !0
				}))
			},
			thumbnailsLoaded: function(t) {
				var e = Object(h.a)(t.responseText);
				Array.isArray(e) && (e.forEach((function(t) {
					this.thumbnails.push(new f(t))
				}), this), this.drawCues(), this.showThumbnail(0))
			},
			thumbnailsFailed: function() {},
			chooseThumbnail: function(t) {
				var e = this.thumbnails,
					i = Object(n.H)(e, {
						end: t
					}, Object(n.E)("end"));
				i >= e.length && (i = e.length - 1);
				var a = e[i].img;
				return a.indexOf("://") < 0 && (a = this.vttPath ? this.vttPath + "/" + a : a), a
			},
			loadThumbnail: function(t) {
				var e = this.chooseThumbnail(t),
					i = {
						margin: "0 auto",
						backgroundPosition: "0 0"
					};
				if (e.indexOf("#xywh") > 0) try {
					var a = /(.+)#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(e);
					if (!a) throw new Error("No match for expected thumbnail pattern");
					e = a[1];
					var o = parseInt(a[2]),
						r = parseInt(a[3]);
					i.backgroundPosition = -1 * o + "px " + -1 * r + "px", i.width = a[4], this.timeTip.setWidth(+i.width), i.height = a[5]
				} catch (t) {
					return
				} else if (!this.individualImage) {
					var s = this.individualImage = new Image;
					s.onload = Object(n.c)((function() {
						s.onload = null, this.timeTip.image({
							width: s.width,
							height: s.height
						}), this.timeTip.setWidth(s.width)
					}), this), s.src = e
				} return i.backgroundImage = 'url("' + e + '")', i
			},
			showThumbnail: function(t) {
				this._model.get("containerWidth") <= 420 || !this.thumbnails || this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(t))
			},
			resetThumbnails: function() {
				this.timeTip.image({
					backgroundImage: "",
					width: 0,
					height: 0
				}), this.thumbnails = []
			}
		};

		function j(t, e) {
			t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
		}
		var m = function(t) {
			function e() {
				return t.apply(this, arguments) || this
			}
			j(e, t);
			var i = e.prototype;
			return i.setup = function() {
				this.text = document.createElement("span"), this.text.className = "jw-text jw-reset", this.img = document.createElement("div"), this.img.className = "jw-time-thumb jw-reset", this.containerWidth = 0, this.textLength = 0, this.dragJustReleased = !1;
				var t = document.createElement("div");
				t.className = "jw-time-tip jw-reset", t.appendChild(this.img), t.appendChild(this.text), this.addContent(t)
			}, i.image = function(t) {
				Object(o.d)(this.img, t)
			}, i.update = function(t) {
				this.text && (this.text.textContent = t)
			}, i.getWidth = function() {
				return this.containerWidth || this.setWidth(), this.containerWidth
			}, i.setWidth = function(t) {
				t ? this.containerWidth = t + 16 : this.tooltip && (this.containerWidth = Object(s.c)(this.container).width + 16)
			}, i.resetWidth = function() {
				this.containerWidth = 0
			}, e
		}(u.a);
		var b = function(t) {
			function e(e, i, a) {
				var o;
				return (o = t.call(this, "jw-slider-time", "horizontal") || this)._model = e, o._api = i, o.timeUpdateKeeper = a, o.timeTip = new m("jw-tooltip-time", null, !0), o.timeTip.setup(), o.cues = [], o.seekThrottled = Object(n.I)(o.performSeek, 400), o.mobileHoverDistance = 5, o.setup(), o
			}
			j(e, t);
			var i = e.prototype;
			return i.setup = function() {
				var e = this;
				t.prototype.setup.call(this), this._model.on("change:duration", this.onDuration, this).on("change:cues", this.updateCues, this).on("seeked", (function() {
					e._model.get("scrubbing") || e.updateAriaText()
				})), this._model.change("position", this.onPosition, this).change("buffer", this.onBuffer, this).change("streamType", this.onStreamType, this), this._model.player.change("playlistItem", this.onPlaylistItem, this);
				var i = this.el;
				Object(s.t)(i, "tabindex", "0"), Object(s.t)(i, "role", "slider"), Object(s.t)(i, "aria-label", this._model.get("localization").slider), i.removeAttribute("aria-hidden"), this.elementRail.appendChild(this.timeTip.element()), this.ui = (this.ui || new l.a(i)).on("move drag", this.showTimeTooltip, this).on("dragEnd out", this.hideTimeTooltip, this).on("click", (function() {
					return i.focus()
				})).on("focus", this.updateAriaText, this)
			}, i.update = function(e) {
				this.seekTo = e, this.seekThrottled(), t.prototype.update.apply(this, [e])
			}, i.dragStart = function() {
				this._model.set("scrubbing", !0), t.prototype.dragStart.call(this)
			}, i.dragEnd = function(e) {
				t.prototype.dragEnd.apply(this, [e]), this._model.set("scrubbing", !1)
			}, i.onBuffer = function(t, e) {
				this.updateBuffer(e)
			}, i.onPosition = function(t, e) {
				this.updateTime(e, t.get("duration"))
			}, i.onDuration = function(t, e) {
				this.updateTime(t.get("position"), e), Object(s.t)(this.el, "aria-valuemin", 0), Object(s.t)(this.el, "aria-valuemax", e), this.drawCues()
			}, i.onStreamType = function(t, e) {
				this.streamType = e
			}, i.updateTime = function(t, e) {
				var i = 0;
				if (e)
					if ("DVR" === this.streamType) {
						var n = this._model.get("dvrSeekLimit"),
							a = e + n;
						i = (a - (t + n)) / a * 100
					} else "VOD" !== this.streamType && this.streamType || (i = t / e * 100);
				this.render(i)
			}, i.onPlaylistItem = function(t, e) {
				this.reset();
				var i = t.get("cues");
				!this.cues.length && i.length && this.updateCues(null, i);
				var a = e.tracks;
				Object(n.i)(a, (function(t) {
					t && t.kind && "thumbnails" === t.kind.toLowerCase() ? this.loadThumbnails(t.file) : t && t.kind && "chapters" === t.kind.toLowerCase() && this.loadChapters(t.file)
				}), this)
			}, i.performSeek = function() {
				var t, e = this.seekTo,
					i = this._model.get("duration");
				if (0 === i) this._api.play({
					reason: "interaction"
				});
				else if ("DVR" === this.streamType) {
					var n = this._model.get("seekRange") || {
							start: 0
						},
						a = this._model.get("dvrSeekLimit");
					t = n.start + (-i - a) * e / 100, this._api.seek(t, {
						reason: "interaction"
					})
				} else t = e / 100 * i, this._api.seek(Math.min(t, i - .25), {
					reason: "interaction"
				})
			}, i.showTimeTooltip = function(t) {
				var e = this,
					i = this._model.get("duration");
				if (0 !== i) {
					var n, l = this._model.get("containerWidth"),
						c = Object(s.c)(this.elementRail),
						u = t.pageX ? t.pageX - c.left : t.x,
						d = (u = Object(a.a)(u, 0, c.width)) / c.width,
						h = i * d;
					if (i < 0) h = (i += this._model.get("dvrSeekLimit")) - (h = i * d);
					if ("touch" === t.pointerType && (this.activeCue = this.cues.reduce((function(t, i) {
							return Math.abs(u - parseInt(i.pct) / 100 * c.width) < e.mobileHoverDistance ? i : t
						}), void 0)), this.activeCue) n = this.activeCue.text;
					else {
						n = Object(r.timeFormat)(h, !0), i < 0 && h > -1 && (n = "Live")
					}
					var p = this.timeTip;
					p.update(n), this.textLength !== n.length && (this.textLength = n.length, p.resetWidth()), this.showThumbnail(h), Object(s.a)(p.el, "jw-open");
					var w = p.getWidth(),
						f = l - c.width,
						g = 0;
					w > f && (g = (w - f) / 2);
					var j = Math.round(4 * Math.min(c.width - g, Math.max(g, u))) / 4;
					Object(o.e)(p.el, "translateX(" + j + "px)")
				}
			}, i.hideTimeTooltip = function() {
				Object(s.o)(this.timeTip.el, "jw-open")
			}, i.updateCues = function(t, e) {
				var i = this;
				this.resetCues(), e && e.length && (e.forEach((function(t) {
					i.addCue(t)
				})), this.drawCues())
			}, i.updateAriaText = function() {
				var t = this._model,
					e = t.get("position"),
					i = t.get("duration"),
					n = Object(r.timeFormat)(e);
				"DVR" !== this.streamType && (n += " of " + Object(r.timeFormat)(i));
				var a = this.el;
				document.activeElement !== a && (this.timeUpdateKeeper.textContent = n), Object(s.t)(a, "aria-valuenow", e), Object(s.t)(a, "aria-valuetext", n)
			}, i.reset = function() {
				this.resetThumbnails(), this.timeTip.resetWidth(), this.textLength = 0
			}, e
		}(c.a);
		Object(n.j)(b.prototype, w, g);
		e.a = b
	}, function(t, e, i) {
		"use strict";
		var n = i(0),
			a = i(4),
			o = i(3),
			r = i(73),
			s = i(88),
			l = i(124),
			c = i(95),
			u = i(94),
			d = i(34),
			h = i(7);

		function p(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function w(t, e) {
			t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
		}
		var f = function(t) {
				function e(e, i, n) {
					var a, o = "jw-slider-volume";
					return "vertical" === e && (o += " jw-volume-tip"), (a = t.call(this, o, e) || this).setup(), a.element().classList.remove("jw-background-color"), Object(h.t)(n, "tabindex", "0"), Object(h.t)(n, "aria-label", i), Object(h.t)(n, "aria-orientation", e), Object(h.t)(n, "aria-valuemin", 0), Object(h.t)(n, "aria-valuemax", 100), Object(h.t)(n, "role", "slider"), a.uiOver = new d.a(n).on("click", (function() {})), a
				}
				return w(e, t), e
			}(u.a),
			g = function(t) {
				function e(e, i, n, a, o) {
					var r;
					(r = t.call(this, i, n, !0, a) || this)._model = e, r.horizontalContainer = o;
					var s = e.get("localization").volumeSlider;
					return r.horizontalSlider = new f("horizontal", s, o), r.verticalSlider = new f("vertical", s, r.tooltip), o.appendChild(r.horizontalSlider.element()), r.addContent(r.verticalSlider.element()), r.verticalSlider.on("update", (function(t) {
						this.trigger("update", t)
					}), p(r)), r.horizontalSlider.on("update", (function(t) {
						this.trigger("update", t)
					}), p(r)), r.horizontalSlider.uiOver.on("keydown", (function(t) {
						var e = t.sourceEvent;
						switch (e.keyCode) {
							case 37:
								e.stopPropagation(), r.trigger("adjustVolume", -10);
								break;
							case 39:
								e.stopPropagation(), r.trigger("adjustVolume", 10)
						}
					})), r.ui = new d.a(r.el, {
						directSelect: !0
					}).on("click enter", r.toggleValue, p(r)).on("tap", r.toggleOpenState, p(r)), r.addSliderHandlers(r.ui), r.addSliderHandlers(r.horizontalSlider.uiOver), r.addSliderHandlers(r.verticalSlider.uiOver), r._model.change("audioMode", r.updateSlider, p(r)), r
				}
				w(e, t);
				var i = e.prototype;
				return i.updateSlider = function(t, e) {
					var i = t.get("horizontalVolumeSlider") || e;
					Object(h.v)(this.element(), "jw-flag-horizontal-slider", !!i)
				}, i.addSliderHandlers = function(t) {
					var e = this.openSlider,
						i = this.closeSlider;
					t.on("over", e, this).on("out", i, this).on("focus", e, this).on("blur", i, this)
				}, i.openSlider = function(e) {
					t.prototype.openTooltip.call(this, e), Object(h.v)(this.horizontalContainer, this.openClass, !0)
				}, i.closeSlider = function(e) {
					t.prototype.closeTooltip.call(this, e), Object(h.v)(this.horizontalContainer, this.openClass, !1), this.horizontalContainer.blur()
				}, i.toggleValue = function() {
					this.trigger("toggleValue")
				}, i.destroy = function() {
					this.horizontalSlider.uiOver.destroy(), this.verticalSlider.uiOver.destroy(), this.ui.destroy()
				}, e
			}(c.a),
			j = i(74),
			m = i(89),
			b = i(9),
			v = i(12),
			y = i(53);

		function k(t, e) {
			var i = document.createElement("div");
			return i.className = "jw-icon jw-icon-inline jw-text jw-reset " + t, e && Object(h.t)(i, "role", e), i
		}

		function x(t) {
			var e = document.createElement("div");
			return e.className = "jw-reset " + t, e
		}

		function T(t, e) {
			if ("WebKitPlaybackTargetAvailabilityEvent" in window) {
				var i = Object(j.a)("jw-icon-airplay jw-off", t, e.airplay, Object(r.b)("airplay-off,airplay-on"));
				return Object(m.a)(i.element(), "airplay", e.airplay), i
			}
			if (a.Browser.chrome && window.chrome) {
				var n = document.createElement("google-cast-launcher");
				Object(h.t)(n, "tabindex", "-1"), n.className += " jw-reset";
				var o = Object(j.a)("jw-icon-cast", null, e.cast);
				o.ui.off();
				var s = o.element();
				return s.style.cursor = "pointer", s.appendChild(n), o.button = n, Object(m.a)(s, "chromecast", e.cast), o
			}
		}

		function O(t, e) {
			return t.filter((function(t) {
				return !e.some((function(e) {
					return e.id + e.btnClass === t.id + t.btnClass && t.callback === e.callback
				}))
			}))
		}
		i.d(e, "a", (function() {
			return M
		}));
		var C = function(t, e) {
				e.forEach((function(e) {
					e.element && (e = e.element()), t.appendChild(e)
				}))
			},
			M = function() {
				function t(t, e, i) {
					var s = this;
					Object(n.j)(this, b.a), this._api = t, this._model = e, this._isMobile = a.OS.mobile, this._volumeAnnouncer = i.querySelector(".jw-volume-update");
					var c, u, p, w = e.get("localization"),
						f = new l.a(e, t, i.querySelector(".jw-time-update")),
						v = this.menus = [];
					this.ui = [];
					var O = "",
						M = w.volume;
					if (this._isMobile) {
						if (!(e.get("sdkplatform") || a.OS.iOS && a.OS.version.major < 10)) {
							var _ = Object(r.b)("volume-0,volume-100");
							p = Object(j.a)("jw-icon-volume", (function() {
								t.setMute()
							}), M, _)
						}
					} else {
						(u = document.createElement("div")).className = "jw-horizontal-volume-container";
						var S = (c = new g(e, "jw-icon-volume", M, Object(r.b)("volume-0,volume-50,volume-100"), u)).element();
						v.push(c), Object(h.t)(S, "role", "group"), e.change("mute", (function(t, e) {
							var i = e ? w.unmute : w.mute;
							Object(h.t)(S, "aria-label", i + " button")
						}), this)
					}
					var E = Object(j.a)("jw-icon-next", (function() {
							t.next({
								feedShownId: O,
								reason: "interaction"
							})
						}), w.next, Object(r.b)("next")),
						A = Object(j.a)("jw-icon-settings jw-settings-submenu-button", (function(t) {
							s.trigger("settingsInteraction", "quality", !0, t)
						}), w.settings, Object(r.b)("settings"));
					Object(h.t)(A.element(), "aria-haspopup", "true"), Object(h.t)(A.element(), "aria-controls", "jw-settings-menu");
					var L = Object(j.a)("jw-icon-cc jw-settings-submenu-button", (function(t) {
						s.trigger("settingsInteraction", "captions", !1, t)
					}), w.cc, Object(r.b)("cc-off,cc-on"));
					Object(h.t)(L.element(), "aria-haspopup", "true"), Object(h.t)(L.element(), "aria-controls", "jw-settings-submenu-captions");
					var I = Object(j.a)("jw-text-live", (function() {
						s.goToLiveEdge()
					}), w.liveBroadcast);
					I.element().textContent = w.liveBroadcast;
					var z, P, B, R = this.elements = {
							alt: (z = "jw-text-alt", P = "status", B = document.createElement("span"), B.className = "jw-text jw-reset-text " + z, P && Object(h.t)(B, "role", P), Object(h.t)(B, "dir", "auto"), B),
							play: Object(j.a)("jw-icon-playback", (function() {
								t.playToggle({
									reason: "interaction"
								})
							}), w.play, Object(r.b)("play,pause,stop")),
							rewind: Object(j.a)("jw-icon-rewind", (function() {
								s.rewind()
							}), w.rewind, Object(r.b)("rewind")),
							live: I,
							next: E,
							elapsed: k("jw-text-elapsed", "timer"),
							countdown: k("jw-text-countdown", "timer"),
							time: f,
							duration: k("jw-text-duration", "timer"),
							mute: p,
							volumetooltip: c,
							horizontalVolumeContainer: u,
							cast: T((function() {
								t.castToggle()
							}), w),
							imaFullscreen: Object(j.a)("jw-icon-fullscreen", (function() {
								t.setFullscreen()
							}), w.fullscreen, Object(r.b)("fullscreen-off,fullscreen-on")),
							fullscreen: Object(j.a)("jw-icon-fullscreen", (function() {
								t.setFullscreen()
							}), w.fullscreen, Object(r.b)("fullscreen-off,fullscreen-on")),
							spacer: x("jw-spacer"),
							buttonContainer: x("jw-button-container"),
							settingsButton: A,
							captionsButton: L
						},
						F = Object(m.a)(L.element(), "captions", w.cc),
						V = function(t) {
							var e = t.get("captionsList")[t.get("captionsIndex")],
								i = w.cc;
							e && "Off" !== e.label && (i = e.label), F.setText(i)
						},
						H = Object(m.a)(R.play.element(), "play", w.play);
					this.setPlayText = function(t) {
						H.setText(t)
					};
					var N = R.next.element(),
						D = Object(m.a)(N, "next", w.nextUp, (function() {
							var t = e.get("nextUp");
							t && (O = Object(y.b)(y.a), s.trigger("nextShown", {
								mode: t.mode,
								ui: "nextup",
								itemsShown: [t],
								feedData: t.feedData,
								reason: "hover",
								feedShownId: O
							}))
						}), (function() {
							O = ""
						}));
					Object(h.t)(N, "dir", "auto"), Object(m.a)(R.rewind.element(), "rewind", w.rewind), Object(m.a)(R.settingsButton.element(), "settings", w.settings);
					var q = [Object(m.a)(R.fullscreen.element(), "fullscreen", w.fullscreen), Object(m.a)(R.imaFullscreen.element())];
					Object(h.a)(R.imaFullscreen.element(), "jw-fullscreen-ima");
					var U = [R.play, R.rewind, R.next, R.volumetooltip, R.imaFullscreen, R.mute, R.horizontalVolumeContainer, R.alt, R.live, R.elapsed, R.countdown, R.duration, R.spacer, R.cast, R.captionsButton, R.settingsButton, R.fullscreen].filter((function(t) {
							return t
						})),
						W = [R.time, R.buttonContainer].filter((function(t) {
							return t
						}));
					this.el = document.createElement("div"), this.el.className = "jw-controlbar jw-reset", C(R.buttonContainer, U), C(this.el, W);
					var X = e.get("logo");
					if (X && "control-bar" === X.position && this.addLogo(X), R.play.show(), R.fullscreen.show(), R.mute && R.mute.show(), e.change("volume", this.onVolume, this), e.change("mute", (function(t, e) {
							s.renderVolume(e, t.get("volume"))
						}), this), e.change("state", this.onState, this), e.change("duration", this.onDuration, this), e.change("position", this.onElapsed, this), e.change("fullscreen", (function(t, e) {
							for (var i = [s.elements.fullscreen.element(), s.elements.imaFullscreen.element()], n = 0; n < i.length; n++) {
								var a = i[n];
								Object(h.v)(i[n], "jw-off", e);
								var o = t.get("fullscreen") ? w.exitFullscreen : w.fullscreen;
								q[n].setText(o), Object(h.t)(a, "aria-label", o)
							}
						}), this), e.change("streamType", this.onStreamTypeChange, this), e.change("dvrLive", (function(t, e) {
							var i = w.liveBroadcast,
								n = w.notLive,
								a = s.elements.live.element(),
								o = !1 === e;
							Object(h.v)(a, "jw-dvr-live", o), Object(h.t)(a, "aria-label", o ? n : i), a.textContent = o ? n : i
						}), this), e.change("altText", this.setAltText, this), e.change("customButtons", this.updateButtons, this), e.on("change:captionsIndex", V, this), e.on("change:captionsList", V, this), e.change("nextUp", (function(t, e) {
							O = Object(y.b)(y.a);
							var i = w.nextUp;
							e && e.title && (i += ": " + e.title), D.setText(i), R.next.toggle(!!e)
						}), this), e.change("audioMode", this.onAudioMode, this), R.cast && (e.change("castAvailable", this.onCastAvailable, this), e.change("castActive", this.onCastActive, this)), R.volumetooltip && (R.volumetooltip.on("update", (function(t) {
							var e = t.percentage;
							this._api.setVolume(e)
						}), this), R.volumetooltip.on("toggleValue", (function() {
							this._api.setMute()
						}), this), R.volumetooltip.on("adjustVolume", (function(t) {
							this.trigger("adjustVolume", t)
						}), this)), R.cast && R.cast.button) {
						var Y = R.cast.ui.on("click tap enter", (function(t) {
							"click" !== t.type && R.cast.button.click(), this._model.set("castClicked", !0)
						}), this);
						this.ui.push(Y)
					}
					var Z = new d.a(R.duration).on("click tap enter", (function() {
						if ("DVR" === this._model.get("streamType")) {
							var t = this._model.get("position"),
								e = this._model.get("dvrSeekLimit");
							this._api.seek(Math.max(-e, t), {
								reason: "interaction"
							})
						}
					}), this);
					this.ui.push(Z);
					var Q = new d.a(this.el).on("click tap drag", (function() {
						this.trigger(o.vb)
					}), this);
					this.ui.push(Q), v.forEach((function(t) {
						t.on("open-tooltip", s.closeMenus, s)
					}))
				}
				var e = t.prototype;
				return e.onVolume = function(t, e) {
					this.renderVolume(t.get("mute"), e)
				}, e.renderVolume = function(t, e) {
					var i = this.elements.mute,
						n = this.elements.volumetooltip;
					if (i && (Object(h.v)(i.element(), "jw-off", t), Object(h.v)(i.element(), "jw-full", !t)), n) {
						var a = t ? 0 : e,
							o = n.element();
						n.verticalSlider.render(a), n.horizontalSlider.render(a);
						var r = n.tooltip,
							s = n.horizontalContainer;
						Object(h.v)(o, "jw-off", t), Object(h.v)(o, "jw-full", e >= 75 && !t), Object(h.t)(r, "aria-valuenow", a), Object(h.t)(s, "aria-valuenow", a);
						var l = "Volume " + a + "%";
						Object(h.t)(r, "aria-valuetext", l), Object(h.t)(s, "aria-valuetext", l), document.activeElement !== r && document.activeElement !== s && (this._volumeAnnouncer.textContent = l)
					}
				}, e.onCastAvailable = function(t, e) {
					this.elements.cast.toggle(e)
				}, e.onCastActive = function(t, e) {
					this.elements.fullscreen.toggle(!e), this.elements.imaFullscreen.toggle(!e), this.elements.cast.button && Object(h.v)(this.elements.cast.button, "jw-off", !e)
				}, e.onElapsed = function(t, e) {
					var i, n, a = t.get("duration");
					if ("DVR" === t.get("streamType")) {
						var o = Math.ceil(e),
							r = this._model.get("dvrSeekLimit");
						i = n = o >= -r ? "" : "-" + Object(v.timeFormat)(-(e + r)), t.set("dvrLive", o >= -r)
					} else i = Object(v.timeFormat)(e), n = Object(v.timeFormat)(a - e);
					this.elements.elapsed.textContent = i, this.elements.countdown.textContent = n
				}, e.onDuration = function(t, e) {
					this.elements.duration.textContent = Object(v.timeFormat)(Math.abs(e))
				}, e.onAudioMode = function(t, e) {
					var i = this.elements.time.element();
					e ? this.elements.buttonContainer.insertBefore(i, this.elements.elapsed) : Object(h.m)(this.el, i)
				}, e.element = function() {
					return this.el
				}, e.setAltText = function(t, e) {
					this.elements.alt.textContent = e
				}, e.closeMenus = function(t) {
					this.menus.forEach((function(e) {
						t && t.target === e.el || e.closeTooltip(t)
					}))
				}, e.rewind = function() {
					var t, e = 0,
						i = this._model.get("currentTime");
					i ? t = i - 10 : (t = this._model.get("position") - 10, "DVR" === this._model.get("streamType") && (e = this._model.get("duration"))), this._api.seek(Math.max(t, e), {
						reason: "interaction"
					})
				}, e.onState = function(t, e) {
					var i = t.get("localization"),
						n = i.play;
					this.setPlayText(n), e === o.qb && ("LIVE" !== t.get("streamType") ? (n = i.pause, this.setPlayText(n)) : (n = i.stop, this.setPlayText(n))), Object(h.t)(this.elements.play.element(), "aria-label", n)
				}, e.onStreamTypeChange = function(t, e) {
					var i = "LIVE" === e,
						n = "DVR" === e;
					this.elements.rewind && this.elements.rewind.toggle(!i), this.elements.live.toggle(i || n), Object(h.t)(this.elements.live.element(), "tabindex", i ? "-1" : "0"), this.elements.duration.style.display = n ? "none" : "", this.onDuration(t, t.get("duration")), this.onState(t, t.get("state"))
				}, e.addLogo = function(t) {
					var e = this.elements.buttonContainer,
						i = new s.a(t.file, this._model.get("localization").logo, (function() {
							t.link && Object(h.l)(t.link, "_blank", {
								rel: "noreferrer"
							})
						}), "logo", "jw-logo-button");
					t.link || Object(h.t)(i.element(), "tabindex", "-1"), e.insertBefore(i.element(), e.querySelector(".jw-spacer").nextSibling)
				}, e.goToLiveEdge = function() {
					if ("DVR" === this._model.get("streamType")) {
						var t = Math.min(this._model.get("position"), -1),
							e = this._model.get("dvrSeekLimit");
						this._api.seek(Math.max(-e, t), {
							reason: "interaction"
						}), this._api.play({
							reason: "interaction"
						})
					}
				}, e.updateButtons = function(t, e, i) {
					if (e) {
						var n, a, o = this.elements.buttonContainer;
						e !== i && i ? (n = O(e, i), a = O(i, e), this.removeButtons(o, a)) : n = e;
						for (var r = n.length - 1; r >= 0; r--) {
							var l = n[r],
								c = new s.a(l.img, l.tooltip, l.callback, l.id, l.btnClass);
							l.tooltip && Object(m.a)(c.element(), l.id, l.tooltip);
							var u = void 0;
							"related" === c.id ? u = this.elements.settingsButton.element() : "share" === c.id ? u = o.querySelector('[button="related"]') || this.elements.settingsButton.element() : (u = this.elements.spacer.nextSibling) && "logo" === u.getAttribute("button") && (u = u.nextSibling), o.insertBefore(c.element(), u)
						}
					}
				}, e.removeButtons = function(t, e) {
					for (var i = e.length; i--;) {
						var n = t.querySelector('[button="' + e[i].id + '"]');
						n && t.removeChild(n)
					}
				}, e.toggleCaptionsButtonState = function(t) {
					var e = this.elements.captionsButton;
					e && Object(h.v)(e.element(), "jw-off", !t)
				}, e.destroy = function() {
					var t = this;
					this._model.off(null, null, this), Object.keys(this.elements).forEach((function(e) {
						var i = t.elements[e];
						i && "function" == typeof i.destroy && t.elements[e].destroy()
					})), this.ui.forEach((function(t) {
						t.destroy()
					})), this.ui = []
				}, t
			}()
	}, function(t, e, i) {
		"use strict";
		var n = i(0),
			a = i(11),
			o = i(7),
			r = i(34),
			s = i(9),
			l = i(73),
			c = i(2),
			u = i(53),
			d = i(12);
		i.d(e, "a", (function() {
			return h
		}));
		var h = function() {
			function t(t, e, i) {
				Object(n.j)(this, s.a), this._model = t, this._api = e, this._playerElement = i, this.localization = t.get("localization"), this.state = "tooltip", this.enabled = !1, this.shown = !1, this.feedShownId = "", this.closeUi = null, this.tooltipUi = null, this.reset()
			}
			var e = t.prototype;
			return e.setup = function(t) {
				this.container = t.createElement("div"), this.container.className = "jw-nextup-container jw-reset";
				var e, i, n, a, s = Object(o.e)((void 0 === e && (e = ""), void 0 === i && (i = ""), void 0 === n && (n = ""), void 0 === a && (a = ""), '<div class="jw-nextup jw-background-color jw-reset"><div class="jw-nextup-tooltip jw-reset"><div class="jw-nextup-thumbnail jw-reset"></div><div class="jw-nextup-body jw-reset"><div class="jw-nextup-header jw-reset">' + e + '</div><div class="jw-nextup-title jw-reset-text" dir="auto">' + i + '</div><div class="jw-nextup-duration jw-reset">' + n + '</div></div></div><button type="button" class="jw-icon jw-nextup-close jw-reset" aria-label="' + a + '"></button></div>'));
				s.querySelector(".jw-nextup-close").appendChild(Object(l.a)("close")), this.addContent(s), this.closeButton = this.content.querySelector(".jw-nextup-close"), this.closeButton.setAttribute("aria-label", this.localization.close), this.tooltip = this.content.querySelector(".jw-nextup-tooltip");
				var c = this._model,
					u = c.player;
				this.enabled = !1, c.on("change:nextUp", this.onNextUp, this), u.change("duration", this.onDuration, this), u.change("position", this.onElapsed, this), u.change("streamType", this.onStreamType, this), u.change("state", (function(t, e) {
					"complete" === e && this.toggle(!1)
				}), this), this.closeUi = new r.a(this.closeButton, {
					directSelect: !0
				}).on("click tap enter", (function() {
					this.nextUpSticky = !1, this.toggle(!1)
				}), this), this.tooltipUi = new r.a(this.tooltip).on("click tap", this.click, this)
			}, e.loadThumbnail = function(t) {
				return this.nextUpImage = new Image, this.nextUpImage.onload = function() {
					this.nextUpImage.onload = null
				}.bind(this), this.nextUpImage.src = t, {
					backgroundImage: 'url("' + t + '")'
				}
			}, e.click = function() {
				var t = this.feedShownId;
				this.reset(), this._api.next({
					feedShownId: t,
					reason: "interaction"
				})
			}, e.toggle = function(t, e) {
				if (this.enabled && (Object(o.v)(this.container, "jw-nextup-sticky", !!this.nextUpSticky), this.shown !== t)) {
					this.shown = t, Object(o.v)(this.container, "jw-nextup-container-visible", t), Object(o.v)(this._playerElement, "jw-flag-nextup", t);
					var i = this._model.get("nextUp");
					t && i ? (this.feedShownId = Object(u.b)(u.a), this.trigger("nextShown", {
						mode: i.mode,
						ui: "nextup",
						itemsShown: [i],
						feedData: i.feedData,
						reason: e,
						feedShownId: this.feedShownId
					})) : this.feedShownId = ""
				}
			}, e.setNextUpItem = function(t) {
				var e = this;
				setTimeout((function() {
					if (e.thumbnail = e.content.querySelector(".jw-nextup-thumbnail"), Object(o.v)(e.content, "jw-nextup-thumbnail-visible", !!t.image), t.image) {
						var i = e.loadThumbnail(t.image);
						Object(a.d)(e.thumbnail, i)
					}
					e.header = e.content.querySelector(".jw-nextup-header"), e.header.textContent = Object(o.e)(e.localization.nextUp).textContent, e.title = e.content.querySelector(".jw-nextup-title");
					var n = t.title;
					e.title.textContent = n ? Object(o.e)(n).textContent : "";
					var r = t.duration;
					r && (e.duration = e.content.querySelector(".jw-nextup-duration"), e.duration.textContent = "number" == typeof r ? Object(d.timeFormat)(r) : r)
				}), 500)
			}, e.onNextUp = function(t, e) {
				this.reset(), e || (e = {
					showNextUp: !1
				}), this.enabled = !(!e.title && !e.image), this.enabled && (e.showNextUp || (this.nextUpSticky = !1, this.toggle(!1)), this.setNextUpItem(e))
			}, e.onDuration = function(t, e) {
				if (e) {
					var i = t.get("nextupoffset"),
						n = -10;
					i && (n = Object(c.d)(i, e)), n < 0 && (n += e), Object(c.c)(i) && e - 5 < n && (n = e - 5), this.offset = n
				}
			}, e.onElapsed = function(t, e) {
				var i = this.nextUpSticky;
				if (this.enabled && !1 !== i) {
					var n = e >= this.offset;
					n && void 0 === i ? (this.nextUpSticky = n, this.toggle(n, "time")) : !n && i && this.reset()
				}
			}, e.onStreamType = function(t, e) {
				"VOD" !== e && (this.nextUpSticky = !1, this.toggle(!1))
			}, e.element = function() {
				return this.container
			}, e.addContent = function(t) {
				this.content && this.removeContent(), this.content = t, this.container.appendChild(t)
			}, e.removeContent = function() {
				this.content && (this.container.removeChild(this.content), this.content = null)
			}, e.reset = function() {
				this.nextUpSticky = void 0, this.toggle(!1)
			}, e.destroy = function() {
				this.off(), this._model.off(null, null, this), this.closeUi && this.closeUi.destroy(), this.tooltipUi && this.tooltipUi.destroy()
			}, t
		}()
	}, function(t, e, i) {
		"use strict";
		var n = i(11),
			a = i(7),
			o = i(4),
			r = function() {
				function t(t) {
					this.model = t.player, this.truncated = t.get("__ab_truncated") && !o.Browser.ie
				}
				var e = t.prototype;
				return e.hide = function() {
					Object(n.d)(this.el, {
						display: "none"
					})
				}, e.show = function() {
					Object(n.d)(this.el, {
						display: ""
					})
				}, e.setup = function(t) {
					if (this.el = t, this.el) {
						var e = this.el.getElementsByTagName("div");
						this.title = e[0], this.description = e[1], this.truncated && this.el.classList.add("jw-ab-truncated"), this.model.on("change:logoWidth", this.update, this), this.model.change("playlistItem", this.playlistItem, this)
					}
				}, e.update = function(t) {
					var e = {},
						i = t.get("logo");
					if (i) {
						var a = 1 * parseInt(("" + i.margin).replace("px", "")),
							o = t.get("logoWidth") + (isNaN(a) ? 0 : a + 10);
						"top-left" === i.position ? e.paddingLeft = o : "top-right" === i.position && (e.paddingRight = o)
					}
					Object(n.d)(this.el, e)
				}, e.playlistItem = function(t, e) {
					if (e)
						if (t.get("displaytitle") || t.get("displaydescription")) {
							var i = "",
								n = "";
							e.title && t.get("displaytitle") && (i = e.title), e.description && t.get("displaydescription") && (n = e.description), this.updateText(i, n)
						} else this.hide()
				}, e.updateText = function(t, e) {
					this.title && this.description && (Object(a.q)(this.title, t), Object(a.q)(this.description, e), this.title.firstChild || this.description.firstChild ? this.show() : this.hide())
				}, e.element = function() {
					return this.el
				}, t
			}();
		e.a = r
	}, function(t, e, i) {
		var n = i(129);
		"string" == typeof n && (n = [
			["all-players", n, ""]
		]), i(41).style(n, "all-players"), n.locals && (t.exports = n.locals)
	}, function(t, e, i) {
		(t.exports = i(75)(!1)).push([t.i, '.jw-overlays,.jw-controls,.jw-controls-backdrop,.jw-flag-small-player .jw-settings-menu,.jw-settings-submenu{height:100%;width:100%}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after{position:absolute;right:0}.jw-overlays,.jw-controls,.jw-controls-backdrop,.jw-settings-item-active::before{top:0;position:absolute;left:0}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after{position:absolute;bottom:0;left:0}.jw-nextup-close{position:absolute;top:0;right:0}.jw-overlays,.jw-controls,.jw-flag-small-player .jw-settings-menu{position:absolute;bottom:0;right:0}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-time-tip::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-text-live::before,.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after{content:"";display:block}.jw-svg-icon{height:24px;width:24px;fill:currentColor;pointer-events:none}.jw-icon{height:44px;width:44px;background-color:transparent;outline:none}.jw-icon.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-icon-airplay .jw-svg-icon-airplay-off{display:none}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-off{display:block}.jw-icon-airplay .jw-svg-icon-airplay-on{display:block}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-on{display:none}.jw-icon-cc .jw-svg-icon-cc-off{display:none}.jw-off.jw-icon-cc .jw-svg-icon-cc-off{display:block}.jw-icon-cc .jw-svg-icon-cc-on{display:block}.jw-off.jw-icon-cc .jw-svg-icon-cc-on{display:none}.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:none}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:block}.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:block}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:none}.jw-icon-volume .jw-svg-icon-volume-0{display:none}.jw-off.jw-icon-volume .jw-svg-icon-volume-0{display:block}.jw-icon-volume .jw-svg-icon-volume-100{display:none}.jw-full.jw-icon-volume .jw-svg-icon-volume-100{display:block}.jw-icon-volume .jw-svg-icon-volume-50{display:block}.jw-off.jw-icon-volume .jw-svg-icon-volume-50,.jw-full.jw-icon-volume .jw-svg-icon-volume-50{display:none}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0, .25, .25, 1)}.jw-settings-menu .jw-icon[aria-checked="true"]::after,.jw-settings-open .jw-icon-settings::after,.jw-icon-volume.jw-open::after{opacity:1}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-cc,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-settings,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-audio-tracks,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-hd,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-settings-sharing,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-cast{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-text-live{bottom:6px}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume::after{display:none}.jw-overlays,.jw-controls{pointer-events:none}.jw-controls-backdrop{display:block;background:linear-gradient(to bottom, transparent, rgba(0,0,0,0.4) 77%, rgba(0,0,0,0.4) 100%) 100% 100% / 100% 240px no-repeat transparent;transition:opacity 250ms cubic-bezier(0, .25, .25, 1),background-size 250ms cubic-bezier(0, .25, .25, 1);pointer-events:none}.jw-overlays{cursor:auto}.jw-controls{overflow:hidden}.jw-flag-small-player .jw-controls{text-align:center}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:normal;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-controlbar,.jw-skip,.jw-display-icon-container .jw-icon,.jw-nextup-container,.jw-autostart-mute,.jw-overlays .jw-plugin{pointer-events:all}.jwplayer .jw-display-icon-container,.jw-error .jw-display-icon-container{width:auto;height:auto;box-sizing:content-box}.jw-display{display:flex;flex-direction:column;justify-content:center;height:100%;padding:57px 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-display-container{text-align:center}.jw-display-controls{display:inline-block}.jwplayer .jw-display-icon-container{float:left}.jw-display-icon-container{display:inline-block;padding:5.5px;margin:0 22px}.jw-display-icon-container .jw-icon{height:75px;width:75px;cursor:pointer;display:flex;justify-content:center;align-items:center}.jw-display-icon-container .jw-icon .jw-svg-icon{height:33px;width:33px;padding:0;position:relative}.jw-display-icon-container .jw-icon .jw-svg-icon-rewind{padding:.2em .05em}.jw-breakpoint--1 .jw-nextup-container{display:none}.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint--1 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind,.jw-breakpoint--1 .jw-display-icon-rewind{display:none}.jw-breakpoint-0.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint--1.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-svg-icon,.jw-breakpoint--1.jw-flag-touch .jw-display .jw-svg-icon{z-index:100;position:relative}.jw-breakpoint-0 .jw-display .jw-icon,.jw-breakpoint--1 .jw-display .jw-icon,.jw-breakpoint-0 .jw-display .jw-svg-icon,.jw-breakpoint--1 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-0 .jw-display .jw-icon:before,.jw-breakpoint--1 .jw-display .jw-icon:before,.jw-breakpoint-0 .jw-display .jw-svg-icon:before,.jw-breakpoint--1 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon,.jw-breakpoint-1 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-1 .jw-display .jw-icon:before,.jw-breakpoint-1 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon.jw-icon-rewind:before{width:33px;height:33px}.jw-breakpoint-2 .jw-display .jw-icon,.jw-breakpoint-3 .jw-display .jw-icon,.jw-breakpoint-2 .jw-display .jw-svg-icon,.jw-breakpoint-3 .jw-display .jw-svg-icon{width:77px;height:77px;line-height:77px}.jw-breakpoint-2 .jw-display .jw-icon:before,.jw-breakpoint-3 .jw-display .jw-icon:before,.jw-breakpoint-2 .jw-display .jw-svg-icon:before,.jw-breakpoint-3 .jw-display .jw-svg-icon:before{width:38.5px;height:38.5px}.jw-breakpoint-4 .jw-display .jw-icon,.jw-breakpoint-5 .jw-display .jw-icon,.jw-breakpoint-6 .jw-display .jw-icon,.jw-breakpoint-7 .jw-display .jw-icon,.jw-breakpoint-4 .jw-display .jw-svg-icon,.jw-breakpoint-5 .jw-display .jw-svg-icon,.jw-breakpoint-6 .jw-display .jw-svg-icon,.jw-breakpoint-7 .jw-display .jw-svg-icon{width:88px;height:88px;line-height:88px}.jw-breakpoint-4 .jw-display .jw-icon:before,.jw-breakpoint-5 .jw-display .jw-icon:before,.jw-breakpoint-6 .jw-display .jw-icon:before,.jw-breakpoint-7 .jw-display .jw-icon:before,.jw-breakpoint-4 .jw-display .jw-svg-icon:before,.jw-breakpoint-5 .jw-display .jw-svg-icon:before,.jw-breakpoint-6 .jw-display .jw-svg-icon:before,.jw-breakpoint-7 .jw-display .jw-svg-icon:before{width:44px;height:44px}.jw-controlbar{display:flex;flex-flow:row wrap;align-items:center;justify-content:center;position:absolute;left:0;bottom:0;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;max-height:72px;transition:250ms cubic-bezier(0, .25, .25, 1);transition-property:opacity, visibility;transition-delay:0s}.jw-flag-touch.jw-breakpoint-0 .jw-controlbar .jw-icon-inline{height:40px}.jw-breakpoint-7 .jw-controlbar{max-height:140px}.jw-breakpoint-7 .jw-controlbar .jw-button-container{padding:0 48px 20px}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-tooltip{margin-bottom:-7px}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-volume .jw-overlay{padding-bottom:40%}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-text{font-size:1em}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-text.jw-text-elapsed{justify-content:flex-end}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live),.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-volume{height:60px;width:60px}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live) .jw-svg-icon,.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-volume .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7 .jw-controlbar .jw-slider-time{padding:0 60px;height:34px}.jw-breakpoint-7 .jw-controlbar .jw-slider-time .jw-slider-container{height:10px}.jw-controlbar .jw-button-image{background:no-repeat 50% 50%;background-size:contain;max-height:24px}.jw-controlbar .jw-spacer{margin:0 auto}.jw-controlbar .jw-icon.jw-button-color:hover{color:#fff}.jw-button-container{display:flex;flex-flow:row nowrap;flex:1 1 auto;align-items:center;justify-content:flex-start;width:100%;padding:0 12px}.jw-slider-horizontal{background-color:transparent}.jw-icon-inline{position:relative}.jw-icon-inline,.jw-icon-tooltip{height:44px;width:44px;align-items:center;display:flex;justify-content:center}.jw-icon-inline:not(.jw-text),.jw-icon-tooltip,.jw-slider-horizontal{cursor:pointer}.jw-text-elapsed,.jw-text-duration{justify-content:flex-start;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.jw-icon-tooltip{position:relative}.jw-knob:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-icon-display:hover,.jw-option:before:hover{color:#fff}.jw-time-tip,.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0}.jw-icon-cast google-cast-launcher{background-color:transparent;border:none;padding:0;width:24px;height:24px;cursor:pointer}.jw-fullscreen-ima{display:none}.jw-icon-inline.jw-icon-volume{display:none}.jwplayer .jw-text-countdown{display:none}.jw-flag-small-player .jw-display{padding-top:0;padding-bottom:0}.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-rewind,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-next,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-playback{display:none}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s, 250ms}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop{opacity:0}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-countdown{display:flex}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-elapsed,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-elapsed,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-duration{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-text-countdown,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-related-btn,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-slider-volume{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-button-container{height:30px}.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-volume,.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-fullscreen{display:none}.jwplayer:not(.jw-breakpoint-0) .jw-text-duration:before,.jwplayer:not(.jw-breakpoint--1) .jw-text-duration:before{content:"/";padding-right:1ch;padding-left:1ch}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar{will-change:transform}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar .jw-text{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.jw-slider-container{display:flex;align-items:center;position:relative;touch-action:none}.jw-rail,.jw-buffer,.jw-progress{position:absolute;cursor:pointer}.jw-progress{background-color:#f2f2f2}.jw-rail{background-color:rgba(255,255,255,0.3)}.jw-buffer{background-color:rgba(255,255,255,0.3)}.jw-knob{height:13px;width:13px;background-color:#fff;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,0.4);opacity:1;pointer-events:none;position:absolute;-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);transition:150ms cubic-bezier(0, .25, .25, 1);transition-property:opacity, -webkit-transform;transition-property:opacity, transform;transition-property:opacity, transform, -webkit-transform}.jw-flag-dragging .jw-slider-time .jw-knob,.jw-icon-volume:active .jw-slider-volume .jw-knob{box-shadow:0 0 26px rgba(0,0,0,0.2),0 0 10px rgba(0,0,0,0.4),0 0 0 6px rgba(255,255,255,0.2)}.jw-slider-horizontal,.jw-slider-vertical{display:flex}.jw-slider-horizontal .jw-slider-container{height:5px;width:100%}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-knob{top:50%}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-cue{-webkit-transform:translate(0, -50%);transform:translate(0, -50%)}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{height:5px}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-vertical{align-items:center;flex-direction:column}.jw-slider-vertical .jw-slider-container{height:88px;width:5px}.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-knob{left:50%}.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{height:100%;width:5px;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;bottom:0}.jw-slider-vertical .jw-knob{-webkit-transform:translate(-50%, 50%);transform:translate(-50%, 50%)}.jw-slider-time.jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-slider-time,.jw-horizontal-volume-container .jw-slider-volume{height:17px;width:100%;align-items:center;background:transparent none;padding:0 12px}.jw-slider-time .jw-cue{background-color:rgba(33,33,33,0.8);cursor:pointer;position:absolute;width:6px}.jw-slider-time,.jw-horizontal-volume-container{z-index:1;outline:none}.jw-slider-time .jw-rail,.jw-horizontal-volume-container .jw-rail,.jw-slider-time .jw-buffer,.jw-horizontal-volume-container .jw-buffer,.jw-slider-time .jw-progress,.jw-horizontal-volume-container .jw-progress,.jw-slider-time .jw-cue,.jw-horizontal-volume-container .jw-cue{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;-webkit-transform:translate(0, -50%) scale(1, .6);transform:translate(0, -50%) scale(1, .6);transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}.jw-slider-time:hover .jw-rail,.jw-horizontal-volume-container:hover .jw-rail,.jw-slider-time:focus .jw-rail,.jw-horizontal-volume-container:focus .jw-rail,.jw-flag-dragging .jw-slider-time .jw-rail,.jw-flag-dragging .jw-horizontal-volume-container .jw-rail,.jw-flag-touch .jw-slider-time .jw-rail,.jw-flag-touch .jw-horizontal-volume-container .jw-rail,.jw-slider-time:hover .jw-buffer,.jw-horizontal-volume-container:hover .jw-buffer,.jw-slider-time:focus .jw-buffer,.jw-horizontal-volume-container:focus .jw-buffer,.jw-flag-dragging .jw-slider-time .jw-buffer,.jw-flag-dragging .jw-horizontal-volume-container .jw-buffer,.jw-flag-touch .jw-slider-time .jw-buffer,.jw-flag-touch .jw-horizontal-volume-container .jw-buffer,.jw-slider-time:hover .jw-progress,.jw-horizontal-volume-container:hover .jw-progress,.jw-slider-time:focus .jw-progress,.jw-horizontal-volume-container:focus .jw-progress,.jw-flag-dragging .jw-slider-time .jw-progress,.jw-flag-dragging .jw-horizontal-volume-container .jw-progress,.jw-flag-touch .jw-slider-time .jw-progress,.jw-flag-touch .jw-horizontal-volume-container .jw-progress,.jw-slider-time:hover .jw-cue,.jw-horizontal-volume-container:hover .jw-cue,.jw-slider-time:focus .jw-cue,.jw-horizontal-volume-container:focus .jw-cue,.jw-flag-dragging .jw-slider-time .jw-cue,.jw-flag-dragging .jw-horizontal-volume-container .jw-cue,.jw-flag-touch .jw-slider-time .jw-cue,.jw-flag-touch .jw-horizontal-volume-container .jw-cue{-webkit-transform:translate(0, -50%) scale(1, 1);transform:translate(0, -50%) scale(1, 1)}.jw-slider-time:hover .jw-knob,.jw-horizontal-volume-container:hover .jw-knob,.jw-slider-time:focus .jw-knob,.jw-horizontal-volume-container:focus .jw-knob{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}.jw-slider-time .jw-rail,.jw-horizontal-volume-container .jw-rail{background-color:rgba(255,255,255,0.2)}.jw-slider-time .jw-buffer,.jw-horizontal-volume-container .jw-buffer{background-color:rgba(255,255,255,0.4)}.jw-flag-touch .jw-slider-time::before,.jw-flag-touch .jw-horizontal-volume-container::before{height:44px;width:100%;content:"";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jw-breakpoint-0.jw-flag-touch .jw-slider-time::before,.jw-breakpoint-0.jw-flag-touch .jw-horizontal-volume-container::before{height:34px}.jw-slider-time.jw-tab-focus:focus .jw-rail,.jw-horizontal-volume-container.jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-flag-horizontal-slider .jw-overlay{display:none}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container{display:flex;transition:width 300ms cubic-bezier(0, .25, .25, 1);width:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open{width:140px}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume{padding-right:24px;opacity:1}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume{transition:opacity 300ms;opacity:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob{-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.jw-flag-audio-player .jw-button-container .jw-icon,.jwplayer:not(.jw-flag-small-player) .jw-button-container .jw-icon{flex:0 0 auto}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time{height:17px;padding:0}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-slider-container{height:10px}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-knob{border-radius:0;border:1px solid rgba(0,0,0,0.75);height:12px;width:10px}.jw-breakpoint-0 .jw-slider-time{height:11px}.jw-horizontal-volume-container{display:none}.jw-modal{width:284px}.jw-breakpoint-7 .jw-modal,.jw-breakpoint-6 .jw-modal,.jw-breakpoint-5 .jw-modal{height:232px}.jw-breakpoint-4 .jw-modal,.jw-breakpoint-3 .jw-modal{height:192px}.jw-breakpoint-2 .jw-modal,.jw-flag-small-player .jw-modal{bottom:0;right:0;height:100%;width:100%;max-height:none;max-width:none;z-index:2}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick .jw-rightclick-list{border-radius:1px;list-style:none;margin:0;padding:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item{background-color:rgba(0,0,0,0.8);border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo{color:#fff;display:inline-flex;padding:0 10px 0 0;vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo .jw-svg-icon{height:20px;width:20px}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-link{border:none;color:#fff;display:block;font-size:11px;font-weight:400;line-height:1em;padding:15px 23px;text-align:start;text-decoration:none;width:100%}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:last-child{border-bottom:none}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:hover{cursor:pointer}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured{vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link{color:#fff}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link span{color:#fff;font-size:12px}.jwplayer .jw-rightclick .jw-info-overlay-item,.jwplayer .jw-rightclick .jw-share-item,.jwplayer .jw-rightclick .jw-shortcuts-item{border:none;background-color:transparent;outline:none;cursor:pointer}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;pointer-events:auto;transition-delay:0s}.jw-icon-tooltip.jw-open .jw-overlay:focus{outline:none}.jw-icon-tooltip.jw-open .jw-overlay:focus.jw-tab-focus{outline:solid 2px #4d90fe}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-slider-time .jw-icon-tooltip.jw-open .jw-overlay{pointer-events:none}.jw-volume-tip{padding:13px 0 26px}.jw-time-tip,.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{height:auto;width:100%;box-shadow:0 0 10px rgba(0,0,0,0.4);color:#fff;display:block;margin:0 0 14px;pointer-events:none;position:relative;z-index:0}.jw-time-tip::after,.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after{top:100%;position:absolute;left:50%;height:14px;width:14px;border-radius:1px;background-color:currentColor;-webkit-transform-origin:75% 50%;transform-origin:75% 50%;-webkit-transform:translate(-50%, -50%) rotate(45deg);transform:translate(-50%, -50%) rotate(45deg);z-index:-1}.jw-time-tip .jw-text,.jw-controlbar .jw-tooltip .jw-text,.jw-settings-menu .jw-tooltip .jw-text{background-color:#fff;border-radius:1px;color:#000;font-size:10px;height:auto;line-height:1;padding:7px 10px;display:inline-block;min-width:100%;vertical-align:middle;min-height:2.4em}.jw-controlbar .jw-overlay{position:absolute;bottom:100%;left:50%;margin:0;min-height:44px;min-width:44px;opacity:0;pointer-events:none;transition:150ms cubic-bezier(0, .25, .25, 1);transition-property:opacity, visibility;transition-delay:0s, 150ms;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);width:100%;z-index:1}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 .5em;font-size:.8em;margin:0}.jw-controlbar .jw-option::before{padding-right:.125em}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{position:absolute;bottom:100%;left:50%;opacity:0;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);transition:100ms 0s cubic-bezier(0, .25, .25, 1);transition-property:opacity, visibility, -webkit-transform;transition-property:opacity, transform, visibility;transition-property:opacity, transform, visibility, -webkit-transform;visibility:hidden;white-space:nowrap;width:auto;z-index:1}.jw-controlbar .jw-tooltip.jw-open,.jw-settings-menu .jw-tooltip.jw-open{opacity:1;-webkit-transform:translate(-50%, -10px);transform:translate(-50%, -10px);transition-duration:150ms;transition-delay:500ms,0s,500ms;visibility:visible}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen{left:auto;right:0;-webkit-transform:translate(0, 0);transform:translate(0, 0)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen.jw-open,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen.jw-open{-webkit-transform:translate(0, -10px);transform:translate(0, -10px)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen::after,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen::after{left:auto;right:9px}.jw-tooltip-time{height:auto;width:0;bottom:100%;line-height:normal;padding:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jw-tooltip-time .jw-overlay{bottom:0;min-height:0;width:auto}.jw-tooltip{bottom:57px;display:none;position:absolute}.jw-tooltip .jw-text{height:100%;white-space:nowrap;text-overflow:ellipsis;direction:unset;max-width:246px;overflow:hidden}.jw-flag-audio-player .jw-tooltip{display:none}.jw-flag-small-player .jw-time-thumb{display:none}.jwplayer .jw-shortcuts-tooltip{top:50%;position:absolute;left:50%;background:#333;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);display:none;color:#fff;pointer-events:all;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;overflow:hidden;flex-direction:column;z-index:1}.jwplayer .jw-shortcuts-tooltip.jw-open{display:flex}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-close{flex:0 0 auto;margin:5px 5px 5px auto}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container{display:flex;flex:1 1 auto;flex-flow:column;font-size:12px;margin:0 20px 20px;overflow-y:auto;padding:5px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar{background-color:transparent;width:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #333;border-radius:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-title{font-weight:bold}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-header{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list{display:flex;max-width:340px;margin:0 10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-tooltip-descriptions{width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row{display:flex;align-items:center;justify-content:space-between;margin:10px 0;width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-description{margin-right:10px;max-width:70%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-key{background:#fefefe;color:#333;overflow:hidden;padding:7px 10px;text-overflow:ellipsis;white-space:nowrap}.jw-skip{color:rgba(255,255,255,0.8);cursor:default;position:absolute;display:flex;right:.75em;bottom:56px;padding:.5em;border:1px solid #333;background-color:#000;align-items:center;height:2em}.jw-skip.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-skip.jw-skippable{cursor:pointer;padding:.25em .75em}.jw-skip.jw-skippable:hover{cursor:pointer;color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;height:24px;width:24px;margin:0}.jw-breakpoint-7 .jw-skip{padding:1.35em 1em;bottom:130px}.jw-breakpoint-7 .jw-skip .jw-text{font-size:1em;font-weight:normal}.jw-breakpoint-7 .jw-skip .jw-icon-inline{height:30px;width:30px}.jw-breakpoint-7 .jw-skip .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-skip .jw-skip-icon{display:none;margin-left:-0.75em;padding:0 .5em;pointer-events:none}.jw-skip .jw-skip-icon .jw-svg-icon-next{display:block;padding:0}.jw-skip .jw-text,.jw-skip .jw-skip-icon{vertical-align:middle;font-size:.7em}.jw-skip .jw-text{font-weight:bold}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:linear-gradient(180deg, rgba(25,25,25,0.75), rgba(25,25,25,0.25), rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint--1 .jw-cast-text,.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{position:absolute;bottom:66px;left:0;background-color:transparent;cursor:pointer;margin:0 auto;padding:12px;pointer-events:none;right:0;text-align:right;visibility:hidden;width:100%}.jw-settings-open .jw-nextup-container,.jw-info-open .jw-nextup-container{display:none}.jw-breakpoint-7 .jw-nextup-container{padding:60px}.jw-flag-small-player .jw-nextup-container{padding:0 12px 0 0}.jw-flag-small-player .jw-nextup-container .jw-nextup-title,.jw-flag-small-player .jw-nextup-container .jw-nextup-duration,.jw-flag-small-player .jw-nextup-container .jw-nextup-close{display:none}.jw-flag-small-player .jw-nextup-container .jw-nextup-tooltip{height:30px}.jw-flag-small-player .jw-nextup-container .jw-nextup-header{font-size:12px}.jw-flag-small-player .jw-nextup-container .jw-nextup-body{justify-content:center;align-items:center;padding:.75em .3em}.jw-flag-small-player .jw-nextup-container .jw-nextup-thumbnail{width:50%}.jw-flag-small-player .jw-nextup-container .jw-nextup{max-width:65px}.jw-flag-small-player .jw-nextup-container .jw-nextup.jw-nextup-thumbnail-visible{max-width:120px}.jw-nextup{background:#333;border-radius:0;box-shadow:0 0 10px rgba(0,0,0,0.5);color:rgba(255,255,255,0.8);display:inline-block;max-width:280px;overflow:hidden;opacity:0;position:relative;width:64%;pointer-events:all;-webkit-transform:translate(0, -5px);transform:translate(0, -5px);transition:150ms cubic-bezier(0, .25, .25, 1);transition-property:opacity, -webkit-transform;transition-property:opacity, transform;transition-property:opacity, transform, -webkit-transform;transition-delay:0s}.jw-nextup:hover .jw-nextup-tooltip{color:#fff}.jw-nextup.jw-nextup-thumbnail-visible{max-width:400px}.jw-nextup.jw-nextup-thumbnail-visible .jw-nextup-thumbnail{display:block}.jw-nextup-container-visible{visibility:visible}.jw-nextup-container-visible .jw-nextup{opacity:1;-webkit-transform:translate(0, 0);transform:translate(0, 0);transition-delay:0s, 0s, 150ms}.jw-nextup-tooltip{display:flex;height:80px}.jw-nextup-thumbnail{width:120px;background-position:center;background-size:cover;flex:0 0 auto;display:none}.jw-nextup-body{flex:1 1 auto;overflow:hidden;padding:.75em .875em;display:flex;flex-flow:column wrap;justify-content:space-between}.jw-nextup-header,.jw-nextup-title{font-size:14px;line-height:1.35}.jw-nextup-header{font-weight:bold}.jw-nextup-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-duration{align-self:flex-end;text-align:right;font-size:12px}.jw-nextup-close{height:24px;width:24px;border:none;color:rgba(255,255,255,0.8);cursor:pointer;margin:6px;visibility:hidden}.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{visibility:visible}.jw-autostart-mute{position:absolute;bottom:0;right:12px;height:44px;width:44px;background-color:rgba(33,33,33,0.4);padding:5px 4px 5px 6px;display:none}.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio) .jw-nextup{display:none}.jw-settings-menu{position:absolute;bottom:57px;right:12px;align-items:flex-start;background-color:#333;display:none;flex-flow:column nowrap;max-width:284px;pointer-events:auto}.jw-settings-open .jw-settings-menu{display:flex}.jw-breakpoint-7 .jw-settings-menu{bottom:130px;right:60px;max-height:none;max-width:none;height:35%;width:25%}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline{height:60px;width:60px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-tooltip .jw-text{font-size:1em}.jw-breakpoint-7 .jw-settings-menu .jw-settings-back{min-width:60px}.jw-breakpoint-6 .jw-settings-menu,.jw-breakpoint-5 .jw-settings-menu{height:232px;width:284px;max-height:232px}.jw-breakpoint-4 .jw-settings-menu,.jw-breakpoint-3 .jw-settings-menu{height:192px;width:284px;max-height:192px}.jw-breakpoint-2 .jw-settings-menu{height:179px;width:284px;max-height:179px}.jw-flag-small-player .jw-settings-menu{max-width:none}.jw-settings-menu .jw-icon.jw-button-color::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0, .25, .25, 1)}.jw-settings-menu .jw-icon.jw-button-color[aria-expanded="true"]::after{opacity:1}.jw-settings-menu .jw-settings-reset{text-decoration:underline}.jw-settings-topbar{align-items:center;background-color:rgba(0,0,0,0.4);display:flex;flex:0 0 auto;padding:3px 5px 0;width:100%}.jw-settings-topbar.jw-nested-menu-open{padding:0}.jw-settings-topbar.jw-nested-menu-open .jw-icon:not(.jw-settings-close):not(.jw-settings-back){display:none}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-close{width:20px}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-arrow-left{height:12px}.jw-settings-topbar.jw-nested-menu-open .jw-settings-topbar-text{display:block;outline:none}.jw-settings-topbar .jw-settings-back{min-width:44px}.jw-settings-topbar .jw-settings-topbar-buttons{display:inherit;width:100%;height:100%}.jw-settings-topbar .jw-settings-topbar-text{display:none;color:#fff;font-size:13px;width:100%}.jw-settings-topbar .jw-settings-close{margin-left:auto}.jw-settings-submenu{display:none;flex:1 1 auto;overflow-y:auto;padding:8px 20px 0 5px}.jw-settings-submenu::-webkit-scrollbar{background-color:transparent;width:6px}.jw-settings-submenu::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #333;border-radius:6px}.jw-settings-submenu.jw-settings-submenu-active{display:block}.jw-settings-submenu .jw-submenu-topbar{box-shadow:0 2px 9px 0 #1d1d1d;background-color:#2f2d2d;margin:-8px -20px 0 -5px}.jw-settings-submenu .jw-submenu-topbar .jw-settings-content-item{cursor:pointer;text-align:right;padding-right:15px;text-decoration:underline}.jw-settings-submenu .jw-settings-value-wrapper{float:right;display:flex;align-items:center}.jw-settings-submenu .jw-settings-value-wrapper .jw-settings-content-item-arrow{display:flex}.jw-settings-submenu .jw-settings-value-wrapper .jw-svg-icon-arrow-right{width:8px;margin-left:5px;height:12px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item{font-size:1em;padding:11px 15px 11px 30px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-settings-item-active::before{justify-content:flex-end}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-auto-label{font-size:.85em;padding-left:10px}.jw-flag-touch .jw-settings-submenu{overflow-y:scroll;-webkit-overflow-scrolling:touch}.jw-auto-label{font-size:10px;font-weight:initial;opacity:.75;padding-left:5px}.jw-settings-content-item{position:relative;color:rgba(255,255,255,0.8);cursor:pointer;font-size:12px;line-height:1;padding:7px 0 7px 15px;width:100%;text-align:left;outline:none}.jw-settings-content-item:hover{color:#fff}.jw-settings-content-item:focus{font-weight:bold}.jw-flag-small-player .jw-settings-content-item{line-height:1.75}.jw-settings-content-item.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-settings-item-active{font-weight:bold;position:relative}.jw-settings-item-active::before{height:100%;width:1em;align-items:center;content:"\\2022";display:inline-flex;justify-content:center}.jw-breakpoint-2 .jw-settings-open .jw-display-container,.jw-flag-small-player .jw-settings-open .jw-display-container,.jw-flag-touch .jw-settings-open .jw-display-container{display:none}.jw-breakpoint-2 .jw-settings-open.jw-controls,.jw-flag-small-player .jw-settings-open.jw-controls,.jw-flag-touch .jw-settings-open.jw-controls{z-index:1}.jw-flag-small-player .jw-settings-open .jw-controlbar{display:none}.jw-settings-open .jw-icon-settings::after{opacity:1}.jw-settings-open .jw-tooltip-settings{display:none}.jw-sharing-link{cursor:pointer}.jw-shortcuts-container .jw-switch{position:relative;display:flex;align-items:center;transition:ease-out .15s;transition-property:opacity, background;border-radius:18px;width:80px;height:20px;padding:10px;background:rgba(80,80,80,0.8);cursor:pointer;font-size:inherit;vertical-align:middle;outline:none}.jw-shortcuts-container .jw-switch.jw-tab-focus{border:solid 2px #4d90fe}.jw-shortcuts-container .jw-switch .jw-switch-knob{position:absolute;left:1px;transition:ease-out .15s;box-shadow:0 0 10px rgba(0,0,0,0.4);border-radius:13px;width:15px;height:15px;background:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled,.jw-shortcuts-container .jw-switch .jw-switch-enabled{position:absolute;transition:inherit;color:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled{right:8px}.jw-shortcuts-container .jw-switch .jw-switch-enabled{left:8px;opacity:0}.jw-shortcuts-container .jw-switch[aria-checked="true"]{background:#475470}.jw-shortcuts-container .jw-switch[aria-checked="true"] .jw-switch-disabled{opacity:0}.jw-shortcuts-container .jw-switch[aria-checked="true"] .jw-switch-enabled{opacity:1}.jw-shortcuts-container .jw-switch[aria-checked="true"] .jw-switch-knob{left:60px}.jw-idle-icon-text{display:none;line-height:1;position:absolute;text-align:center;text-indent:.35em;top:100%;white-space:nowrap;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.jw-idle-label{border-radius:50%;color:#fff;-webkit-filter:drop-shadow(1px 1px 5px rgba(12,26,71,0.25));filter:drop-shadow(1px 1px 5px rgba(12,26,71,0.25));font:normal 16px/1 Arial,Helvetica,sans-serif;position:relative;transition:background-color 150ms cubic-bezier(0, .25, .25, 1);transition-property:background-color,-webkit-filter;transition-property:background-color,filter;transition-property:background-color,filter,-webkit-filter;-webkit-font-smoothing:antialiased}.jw-state-idle .jw-icon-display.jw-idle-label .jw-idle-icon-text{display:block}.jw-state-idle .jw-icon-display.jw-idle-label .jw-svg-icon-play{-webkit-transform:scale(.7, .7);transform:scale(.7, .7)}.jw-breakpoint-0.jw-state-idle .jw-icon-display.jw-idle-label,.jw-breakpoint--1.jw-state-idle .jw-icon-display.jw-idle-label{font-size:12px}.jw-info-overlay{top:50%;position:absolute;left:50%;background:#333;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);display:none;color:#fff;pointer-events:all;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;overflow:hidden;flex-direction:column}.jw-info-overlay .jw-info-close{flex:0 0 auto;margin:5px 5px 5px auto}.jw-info-open .jw-info-overlay{display:flex}.jw-info-container{display:flex;flex:1 1 auto;flex-flow:column;margin:0 20px 20px;overflow-y:auto;padding:5px}.jw-info-container [class*="jw-info"]:not(:first-of-type){color:rgba(255,255,255,0.8);padding-top:10px;font-size:12px}.jw-info-container .jw-info-description{margin-bottom:30px;text-align:start}.jw-info-container .jw-info-description:empty{display:none}.jw-info-container .jw-info-duration{text-align:start}.jw-info-container .jw-info-title{text-align:start;font-size:12px;font-weight:bold}.jw-info-container::-webkit-scrollbar{background-color:transparent;width:6px}.jw-info-container::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #333;border-radius:6px}.jw-info-clientid{align-self:flex-end;font-size:12px;color:rgba(255,255,255,0.8);margin:0 20px 20px 44px;text-align:right}.jw-flag-touch .jw-info-open .jw-display-container{display:none}@supports ((-webkit-filter: drop-shadow(0 0 3px #000)) or (filter: drop-shadow(0 0 3px #000))){.jwplayer.jw-ab-drop-shadow .jw-controls .jw-svg-icon,.jwplayer.jw-ab-drop-shadow .jw-controls .jw-icon.jw-text,.jwplayer.jw-ab-drop-shadow .jw-slider-container .jw-rail,.jwplayer.jw-ab-drop-shadow .jw-title{text-shadow:none;box-shadow:none;-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,0.3));filter:drop-shadow(0 2px 3px rgba(0,0,0,0.3))}.jwplayer.jw-ab-drop-shadow .jw-button-color{opacity:.8;transition-property:color, opacity}.jwplayer.jw-ab-drop-shadow .jw-button-color:not(:hover){color:#fff;opacity:.8}.jwplayer.jw-ab-drop-shadow .jw-button-color:hover{opacity:1}.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.00787) 10.79%, hsla(0, 0%, 0%, 0.02963) 21.99%, hsla(0, 0%, 0%, 0.0625) 33.34%, hsla(0, 0%, 0%, 0.1037) 44.59%, hsla(0, 0%, 0%, 0.15046) 55.48%, hsla(0, 0%, 0%, 0.2) 65.75%, hsla(0, 0%, 0%, 0.24954) 75.14%, hsla(0, 0%, 0%, 0.2963) 83.41%, hsla(0, 0%, 0%, 0.3375) 90.28%, hsla(0, 0%, 0%, 0.37037) 95.51%, hsla(0, 0%, 0%, 0.39213) 98.83%, hsla(0, 0%, 0%, 0.4));mix-blend-mode:multiply;transition-property:opacity}.jw-state-idle.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0.2), hsla(0, 0%, 0%, 0.19606) 1.17%, hsla(0, 0%, 0%, 0.18519) 4.49%, hsla(0, 0%, 0%, 0.16875) 9.72%, hsla(0, 0%, 0%, 0.14815) 16.59%, hsla(0, 0%, 0%, 0.12477) 24.86%, hsla(0, 0%, 0%, 0.1) 34.25%, hsla(0, 0%, 0%, 0.07523) 44.52%, hsla(0, 0%, 0%, 0.05185) 55.41%, hsla(0, 0%, 0%, 0.03125) 66.66%, hsla(0, 0%, 0%, 0.01481) 78.01%, hsla(0, 0%, 0%, 0.00394) 89.21%, hsla(0, 0%, 0%, 0));background-size:100% 7rem;background-position:50% 0}.jwplayer.jw-ab-drop-shadow.jw-state-idle .jw-controls{background-color:transparent}}.jw-video-thumbnail-container{position:relative;overflow:hidden}.jw-video-thumbnail-container:not(.jw-related-shelf-item-image){height:100%;width:100%}.jw-video-thumbnail-container.jw-video-thumbnail-generated{position:absolute;top:0;left:0}.jw-video-thumbnail-container:hover,.jw-related-item-content:hover .jw-video-thumbnail-container,.jw-related-shelf-item:hover .jw-video-thumbnail-container{cursor:pointer}.jw-video-thumbnail-container:hover .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-related-item-content:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-related-shelf-item:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail{position:absolute;top:50%;left:50%;bottom:unset;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:100%;height:auto;min-width:100%;min-height:100%;opacity:0;transition:opacity .3s ease;object-fit:cover;background:#000}.jw-related-item-next-up .jw-video-thumbnail-container .jw-video-thumbnail{height:100%;width:auto}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-visible:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-completed{opacity:0}.jw-video-thumbnail-container .jw-video-thumbnail~.jw-svg-icon-play{display:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-shelf-item-aspect{pointer-events:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-item-poster-content{pointer-events:none}.jw-preview{overflow:hidden}.jw-preview .jw-ab-zoom-thumbnail{all:inherit;-webkit-animation:jw-ab-zoom-thumbnail-animation 10s infinite;animation:jw-ab-zoom-thumbnail-animation 10s infinite}@-webkit-keyframes jw-ab-zoom-thumbnail-animation{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}50%{-webkit-transform:scale(1.25, 1.25);transform:scale(1.25, 1.25)}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}@keyframes jw-ab-zoom-thumbnail-animation{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}50%{-webkit-transform:scale(1.25, 1.25);transform:scale(1.25, 1.25)}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-state-idle .jw-controls{background:rgba(0,0,0,0.4)}.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay){display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon:focus{border:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer{-webkit-animation:jw-spin 2s linear infinite;animation:jw-spin 2s linear infinite;display:block}@-webkit-keyframes jw-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes jw-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-pause{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:block}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-controls-backdrop{opacity:0}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-logo-bottom-left,.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio):not(.jw-flag-autostart) .jw-logo-bottom-right{bottom:0}.jwplayer .jw-icon-playback .jw-svg-icon-stop{display:none}.jwplayer.jw-state-paused .jw-svg-icon-pause,.jwplayer.jw-state-idle .jw-svg-icon-pause,.jwplayer.jw-state-error .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-svg-icon-pause{display:none}.jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-complete .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-play{display:none}.jwplayer:not(.jw-state-buffering) .jw-svg-icon-buffer{display:none}.jwplayer:not(.jw-state-complete) .jw-svg-icon-replay{display:none}.jwplayer:not(.jw-state-error) .jw-svg-icon-error{display:none}.jwplayer.jw-state-complete .jw-display .jw-icon-display .jw-svg-icon-replay{display:block}.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-controls{background:rgba(0,0,0,0.4);height:100%}.jw-state-idle .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-state-idle .jw-display-icon-rewind,.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display-icon-rewind,body .jw-error .jw-display-icon-rewind,body .jwplayer.jw-state-error .jw-display-icon-rewind,.jw-state-idle .jw-display-icon-next,.jwplayer.jw-state-buffering .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display-icon-next,body .jw-error .jw-display-icon-next,body .jwplayer.jw-state-error .jw-display-icon-next{display:none}body .jw-error .jw-icon-display,body .jwplayer.jw-state-error .jw-icon-display{cursor:default}body .jw-error .jw-icon-display .jw-svg-icon-error,body .jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-error{display:block}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-preview{display:none}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title{padding-top:4px}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-primary{width:auto;display:inline-block;padding-right:.5ch}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-secondary{width:auto;display:inline-block;padding-left:0}body .jwplayer.jw-state-error .jw-controlbar,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-controlbar{display:none}body .jwplayer.jw-state-error .jw-settings-menu,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-settings-menu{height:100%;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}body .jwplayer.jw-state-error .jw-display,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-display{padding:0}body .jwplayer.jw-state-error .jw-logo-bottom-left,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-left,body .jwplayer.jw-state-error .jw-logo-bottom-right,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-right{bottom:0}.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display,.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting):not(.jw-flag-play-rejected) .jw-display{display:none}.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-rewind,.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-next{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-flag-casting:not(.jw-flag-audio-player) .jw-cast{display:block}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-display-icon-container{display:none}.jwplayer.jw-flag-casting .jw-icon-hd,.jwplayer.jw-flag-casting .jw-captions,.jwplayer.jw-flag-casting .jw-icon-fullscreen,.jwplayer.jw-flag-casting .jw-icon-audio-tracks{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-volume{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jw-state-playing.jw-flag-casting:not(.jw-flag-audio-player) .jw-display,.jw-state-paused.jw-flag-casting:not(.jw-flag-audio-player) .jw-display{display:flex}.jwplayer.jw-flag-cast-available .jw-icon-cast,.jwplayer.jw-flag-cast-available .jw-icon-airplay{display:flex}.jwplayer.jw-flag-cardboard-available .jw-icon-cardboard{display:flex}.jwplayer.jw-flag-live .jw-display-icon-rewind{visibility:hidden}.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-live .jw-controlbar .jw-overlay:after{display:none}.jwplayer.jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-live .jw-text-elapsed,.jwplayer.jw-flag-live .jw-text-duration{display:none}.jwplayer.jw-flag-live .jw-text-live{cursor:default}.jwplayer.jw-flag-live .jw-text-live:hover{color:rgba(255,255,255,0.8)}.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-stop,.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-stop{display:block}.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-text-live{height:24px;width:auto;align-items:center;border-radius:1px;color:rgba(255,255,255,0.8);display:flex;font-size:12px;font-weight:bold;margin-right:10px;padding:0 1ch;text-rendering:geometricPrecision;text-transform:uppercase;transition:150ms cubic-bezier(0, .25, .25, 1);transition-property:box-shadow,color}.jw-text-live::before{height:8px;width:8px;background-color:currentColor;border-radius:50%;margin-right:6px;opacity:1;transition:opacity 150ms cubic-bezier(0, .25, .25, 1)}.jw-text-live.jw-dvr-live{box-shadow:inset 0 0 0 2px currentColor}.jw-text-live.jw-dvr-live::before{opacity:.5}.jw-text-live.jw-dvr-live:hover{color:#fff}.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-controls-hidden .jw-plugin{bottom:.5em}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{-webkit-transform:translateY(66px);transform:translateY(66px)}.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container{-webkit-transform:translateY(4.25em);transform:translateY(4.25em)}.jw-flag-controls-hidden .jw-controlbar,.jw-flag-controls-hidden .jw-display{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s, 250ms}.jw-flag-controls-hidden .jw-controls-backdrop{opacity:0}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{-webkit-transform:translateY(66px);transform:translateY(66px)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container{-webkit-transform:translateY(4.25em);transform:translateY(4.25em)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-controls-hidden) .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-display{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-ads) .jw-autostart-mute{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-state-idle .jw-nextup-container{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-text-duration,.jwplayer.jw-flag-ads .jw-text-elapsed{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-rewind,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-display{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player.jw-state-buffering .jw-display-icon-display{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time{height:auto;padding:0;pointer-events:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-slider-container{height:5px}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-rail,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-knob,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-buffer,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-cue,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-icon-settings{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-progress{-webkit-transform:none;transform:none;top:auto}.jwplayer.jw-flag-ads .jw-controlbar .jw-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip:not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline:not(.jw-icon-playback):not(.jw-icon-fullscreen):not(.jw-icon-volume){display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-volume-tip{padding:13px 0}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-ads .jw-fullscreen-ima{display:none}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart .jw-controls .jw-controlbar{display:flex;pointer-events:all;visibility:visible;opacity:1}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-user-inactive .jw-controls-backdrop,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart.jw-flag-user-inactive .jw-controls-backdrop{opacity:1;background-size:100% 60px}.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls{background:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls::after{content:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls-backdrop,.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none !important}.jw-flag-overlay-open-related .jw-controls,.jw-flag-overlay-open-related .jw-title,.jw-flag-overlay-open-related .jw-logo{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container{bottom:4.25em}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:flex}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display{display:none}.jw-flag-audio-player{background-color:#000}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:none}.jw-flag-audio-player:not(.jw-flag-live) .jw-spacer{display:none}.jw-flag-audio-player .jw-preview,.jw-flag-audio-player .jw-display,.jw-flag-audio-player .jw-title,.jw-flag-audio-player .jw-nextup-container{display:none}.jw-flag-audio-player .jw-controlbar{position:relative}.jw-flag-audio-player .jw-controlbar .jw-button-container{padding-right:3px;padding-left:0;justify-content:flex-start}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip,.jw-flag-audio-player .jw-controlbar .jw-icon-inline{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-volume,.jw-flag-audio-player .jw-controlbar .jw-icon-playback,.jw-flag-audio-player .jw-controlbar .jw-icon-next,.jw-flag-audio-player .jw-controlbar .jw-icon-rewind,.jw-flag-audio-player .jw-controlbar .jw-icon-cast,.jw-flag-audio-player .jw-controlbar .jw-text-live,.jw-flag-audio-player .jw-controlbar .jw-icon-airplay,.jw-flag-audio-player .jw-controlbar .jw-logo-button,.jw-flag-audio-player .jw-controlbar .jw-text-elapsed,.jw-flag-audio-player .jw-controlbar .jw-text-duration{display:flex;flex:0 0 auto}.jw-flag-audio-player .jw-controlbar .jw-text-duration,.jw-flag-audio-player .jw-controlbar .jw-text-countdown{padding-right:10px}.jw-flag-audio-player .jw-controlbar .jw-slider-time{flex:0 1 auto;align-items:center;display:flex;order:1}.jw-flag-audio-player .jw-controlbar .jw-icon-volume{margin-right:0;transition:margin-right 150ms cubic-bezier(0, .25, .25, 1)}.jw-flag-audio-player .jw-controlbar .jw-icon-volume .jw-overlay{display:none}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container~.jw-slider-time{transition:opacity 300ms,width 300ms}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container.jw-open~.jw-slider-time{flex:1 1 auto;width:auto}.jw-flag-audio-player .jw-controlbar .jw-slider-volume~.jw-icon-volume{margin-right:140px}.jw-flag-audio-player.jw-breakpoint-1 .jw-horizontal-volume-container.jw-open~.jw-slider-time,.jw-flag-audio-player.jw-breakpoint-2 .jw-horizontal-volume-container.jw-open~.jw-slider-time{opacity:0}.jw-flag-audio-player.jw-flag-small-player .jw-text-elapsed,.jw-flag-audio-player.jw-flag-small-player .jw-text-duration{display:none}.jw-flag-audio-player.jw-flag-ads .jw-slider-time{display:none}.jw-hidden{display:none}', ""])
	}, function(t, e) {
		! function() {
			if ("undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof HTMLElement) {
				var t = !1;
				try {
					var e = document.createElement("div");
					e.addEventListener("focus", (function(t) {
						t.preventDefault(), t.stopPropagation()
					}), !0), e.focus(Object.defineProperty({}, "preventScroll", {
						get: function() {
							t = !0
						}
					}))
				} catch (t) {}
				if (void 0 === HTMLElement.prototype.nativeFocus && !t) {
					HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
					var i = function(t) {
						for (var e = 0; e < t.length; e++) t[e][0].scrollTop = t[e][1], t[e][0].scrollLeft = t[e][2];
						t = []
					};
					HTMLElement.prototype.focus = function(t) {
						if (t && t.preventScroll) {
							var e = function(t) {
								for (var e = t.parentNode, i = [], n = document.scrollingElement || document.documentElement; e && e !== n;)(e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && i.push([e, e.scrollTop, e.scrollLeft]), e = e.parentNode;
								return e = n, i.push([e, e.scrollTop, e.scrollLeft]), i
							}(this);
							this.nativeFocus(), "function" == typeof setTimeout ? setTimeout((function() {
								i(e)
							}), 0) : i(e)
						} else this.nativeFocus()
					}
				}
			}
		}()
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M137.8,15H22.1A7.127,7.127,0,0,0,15,22.1V137.8a7.28,7.28,0,0,0,7.1,7.2H84.5V95H67.6V75.5H84.5v-15a23.637,23.637,0,0,1,21.3-25.9,28.08,28.08,0,0,1,4.1-.1c7.2,0,13.7.6,14.9.6V52.7H114.4c-8.5,0-9.7,3.9-9.7,9.7V74.7h19.5l-2.6,19.5H104.7v50.7h33.1a7.3,7.3,0,0,0,7.2-7.2V22A7.13,7.13,0,0,0,137.8,15Z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M135.237,15.006H24.739A9.427,9.427,0,0,0,15,24.107V135.256a9.553,9.553,0,0,0,9.365,9.737h110.9a9.427,9.427,0,0,0,9.737-9.1V24.081A9.461,9.461,0,0,0,135.237,15.006Zm-81.9,110.512H34.476V63.774h19.5v61.744ZM43.576,55.31A10.994,10.994,0,0,1,32.513,44.45v-.2a11.05,11.05,0,0,1,22.1,0A10.537,10.537,0,0,1,44.6,55.283l-.051,0A4.07,4.07,0,0,1,43.576,55.31Zm81.9,70.208h-19.5v-29.9c0-7.164,0-16.265-9.737-16.265s-11.7,7.8-11.7,16.265v29.9h-19.5V63.774h18.2v8.464h0a19.766,19.766,0,0,1,18.2-9.738c19.5,0,23.4,13,23.4,29.266v33.8h.637Z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-pinterest" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M80,15A65.127,65.127,0,0,0,15,80a66.121,66.121,0,0,0,39,59.8,62.151,62.151,0,0,1,1.3-14.9c1.3-5.2,8.5-35.1,8.5-35.1a26.386,26.386,0,0,1-2-10.4c0-9.7,5.9-16.9,12.4-16.9,5.9,0,8.5,4.5,8.5,9.7a128.456,128.456,0,0,1-5.9,22.7,9.646,9.646,0,0,0,6.6,12,8.105,8.105,0,0,0,3.8.3c12.4,0,20.8-15.6,20.8-34.4,0-14.3-9.7-24.7-27.3-24.7a30.869,30.869,0,0,0-31.8,30v1.2a19.8,19.8,0,0,0,4.5,13,2.586,2.586,0,0,1,.6,3.3c0,1.3-1.3,3.9-1.3,5.2-.6,2-2,2-3.3,2-9.1-3.9-13-13.6-13-24.7,0-18.2,15.6-40.3,46.1-40.3a38.763,38.763,0,0,1,40.9,36.7v.4c0,25.4-14.3,44.9-35.1,44.9A18.163,18.163,0,0,1,72.7,112s-3.9,14.9-4.5,17.6a46.615,46.615,0,0,1-6.5,13.7,79.828,79.828,0,0,0,18.2,1.9A65.1,65.1,0,0,0,80,15Z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M136.7,60.7a18.265,18.265,0,0,0-11.6,4.1,83.108,83.108,0,0,0-40-11.5l8.1-25.1,21.1,4.7a14.927,14.927,0,1,0,14.9-16.2,15.418,15.418,0,0,0-13.6,8.1L90.5,18.7a3.75,3.75,0,0,0-4.7,2.7h0L77,52.6A93.15,93.15,0,0,0,34.2,64.1,19.471,19.471,0,0,0,23.3,60,19.137,19.137,0,0,0,5,78.3a19.777,19.777,0,0,0,7.5,14.9v4.1a38.88,38.88,0,0,0,20.4,31.9,85.678,85.678,0,0,0,46.8,12.2,93.7,93.7,0,0,0,46.8-12.2,38.741,38.741,0,0,0,20.4-31.9V93.2A18.324,18.324,0,0,0,155,78.3,18.952,18.952,0,0,0,136.7,60.7Zm-7.5-35.3a6.459,6.459,0,0,1,6.8,6v.8a6.744,6.744,0,0,1-6.8,6.8,6.459,6.459,0,0,1-6.8-6v-.8A7.312,7.312,0,0,1,129.2,25.4ZM47.1,89.2A10.2,10.2,0,1,1,57.3,99.4,10.514,10.514,0,0,1,47.1,89.2Zm57,29.8a31.975,31.975,0,0,1-24.4,7.5h0A34.711,34.711,0,0,1,55.3,119a3.821,3.821,0,1,1,5.2-5.6l.2.2a26.476,26.476,0,0,0,19,5.4h0a28.644,28.644,0,0,0,19-5.4,4,4,0,0,1,5.4,0c2,1.3,2,3.4,0,5.4Zm-2-19.7a10.2,10.2,0,1,1,10.2-10.2,10.514,10.514,0,0,1-10.2,10.2Z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-tumblr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M115.3,131.6a30.935,30.935,0,0,1-22,7.3h-.7c-28,0-34.6-20.6-34.6-32.7v-34H46.7A2.9,2.9,0,0,1,44,69.5h0V54.2a6.2,6.2,0,0,1,2.7-4,30.359,30.359,0,0,0,20-27.3,3.574,3.574,0,0,1,3-4,1.7,1.7,0,0,1,1,0H87.4a2.9,2.9,0,0,1,2.7,2.7V48.3h19.3a3.18,3.18,0,0,1,2.7,2V69.6a2.9,2.9,0,0,1-2.7,2.7H90v31.3a8.709,8.709,0,0,0,7.4,9.9,5.7,5.7,0,0,0,1.3.1,58.63,58.63,0,0,0,7.3-1.3,4.953,4.953,0,0,1,2.7-.7c.7,0,1.3.7,2,2l5.3,15.3C115.3,129.6,116,130.3,115.3,131.6Z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg class="jw-svg-icon jw-svg-icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M56.8,132.5a75.177,75.177,0,0,0,75.3-75.1V54A53.405,53.405,0,0,0,145,40.5a58.075,58.075,0,0,1-15.4,3.9,27.138,27.138,0,0,0,11.6-14.8A53.038,53.038,0,0,1,124.5,36a25.736,25.736,0,0,0-19.3-8.4A26.12,26.12,0,0,0,78.8,53.4V54a16.5,16.5,0,0,0,.7,5.8,71.966,71.966,0,0,1-54.1-27,23.9,23.9,0,0,0-3.9,13.5A26.043,26.043,0,0,0,33.1,68.2,27.018,27.018,0,0,1,20.9,65v.7A26.15,26.15,0,0,0,42.1,91.4a24.149,24.149,0,0,1-7.1.7,12.625,12.625,0,0,1-5.1-.7,25.657,25.657,0,0,0,24.5,18A53.519,53.519,0,0,1,21.6,121a19.683,19.683,0,0,1-6.4-.7,80.388,80.388,0,0,0,41.6,12.2"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-email" viewBox="0 0 160 160" focusable="false"><path d="M147.3,27.9H11.9L10,29.8v97a3.02,3.02,0,0,0,2.8,3.2H146.6a3.02,3.02,0,0,0,3.2-2.8V31C150.5,29.2,149.2,27.9,147.3,27.9ZM125.6,40.7,80.3,77.1,35,40.7Zm12.1,76.6H22.8V47.7l57.5,46,57.5-46-.1,69.6Z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-link" viewBox="0 0 160 160" focusable="false"><path d="M79.4,99.6H92.5v2a33.6,33.6,0,0,1-9.8,24.2l-9.8,9.8a34.716,34.716,0,0,1-48.4,0,34.716,34.716,0,0,1,0-48.4l9.2-10.5a33.6,33.6,0,0,1,24.2-9.8h1.9V80H58.5a19.359,19.359,0,0,0-15.1,6.5l-9.8,9.8a20.976,20.976,0,0,0-.5,29.6l.5.5a20.976,20.976,0,0,0,29.6.5l.5-.5,9.8-9.8a20.905,20.905,0,0,0,6.5-15h0v-2ZM135,24.4h0a34.716,34.716,0,0,0-48.4,0L76.1,34.2a33.6,33.6,0,0,0-9.8,24.2v2H79.4v-2a19.359,19.359,0,0,1,6.5-15.1l9.8-9.8a20.976,20.976,0,0,1,29.6-.5l.5.5a20.976,20.976,0,0,1,.5,29.6l-.5.5-10.5,9.8a20.905,20.905,0,0,1-15,6.5H99V93h1.3a33.6,33.6,0,0,0,24.2-9.8l9.8-9.8A34.89,34.89,0,0,0,135,24.4ZM63,106.2l42.5-42.5-9.8-9.8L53.2,96.4Z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-embed" viewBox="0 0 160 160" focusable="false"><path d="M153.224,81.594,126.971,54.685,117.6,64.061l21.846,21.846L117.6,107.752l8.719,8.719L152.567,90.22a5.583,5.583,0,0,0,1.406-7.782,6.067,6.067,0,0,0-.75-.844ZM33.12,54.685,6.868,80.938A5.973,5.973,0,0,0,6.68,89.47l.188.188L33.12,117.128l9.376-9.376-22.5-21.846L42.5,64.061ZM53.747,134.1,94.437,21.5,106.345,25.9,65.654,138.5Z"></path></svg>'
	}, function(t, e, i) {
		var n = i(141);
		"string" == typeof n && (n = [
			["all-players", n, ""]
		]), i(41).style(n, "all-players"), n.locals && (t.exports = n.locals)
	}, function(t, e, i) {
		(t.exports = i(75)(!1)).push([t.i, '.jw-settings-content-item .jw-svg-icon{margin-right:1em;height:16px;width:16px;padding:0}.jw-settings-content-item .jw-tooltip{bottom:12px;left:50px;width:60px}.jw-settings-content-item .jw-tooltip.jw-open{transition:none}.jw-sharing-link{display:flex;align-items:center;line-height:16px;text-transform:capitalize}.jw-sharing-link:hover,.jw-sharing-link:focus{text-decoration:none}.jw-sharing-copy:after{background-color:#fff;border-radius:50px;bottom:20px;color:#000;content:"Copied";display:block;font-size:13px;font-weight:bold;opacity:0;margin-left:-25px;left:50%;position:absolute;text-align:center;-webkit-transform:translateY(10px);transform:translateY(10px);transition:all 200ms ease-in-out;visibility:hidden;width:60px}.jw-sharing-copy-textarea-copied:after{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);visibility:visible}.jw-sharing-copy .jw-sharing-link{padding:0}.jw-sharing-copy .jw-sharing-link:hover,.jw-sharing-copy .jw-sharing-link:focus{color:#fff}.jw-sharing-link:focus,.jw-sharing-copy:focus{outline:none}.jw-sharing-link:active,.jw-sharing-copy:active{color:#fff;font-weight:bold}.jw-sharing-textarea{display:flex;opacity:0;height:1px;cursor:pointer}', ""])
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return {
				bitrate: t.bitrate,
				label: t.label,
				width: t.width,
				height: t.height
			}
		}
		i.d(e, "a", (function() {
			return n
		}))
	}, function(t, e, i) {
		"use strict";
		var n = i(3),
			a = i(52),
			o = {
				canplay: function() {
					this.renderNatively && this.setTextTracks(this.video.textTracks), this.trigger(n.F)
				},
				play: function() {
					this.stallTime = -1, this.video.paused || this.state === n.qb || this.setState(n.ob)
				},
				loadedmetadata: function() {
					var t = {
							metadataType: "media",
							duration: this.getDuration(),
							height: this.video.videoHeight,
							width: this.video.videoWidth,
							seekRange: this.getSeekRange()
						},
						e = this.drmUsed;
					e && (t.drm = e), this.trigger(n.L, t)
				},
				timeupdate: function() {
					var t = this.video.currentTime,
						e = this.getCurrentTime(),
						i = this.getDuration();
					if (!isNaN(i)) {
						this.seeking || this.video.paused || this.state !== n.rb && this.state !== n.ob || this.stallTime === t || (this.stallTime = -1, this.setState(n.qb), this.trigger(n.gb));
						var a = {
								position: e,
								duration: i,
								currentTime: t,
								seekRange: this.getSeekRange(),
								metadata: {
									currentTime: t
								}
							},
							o = this.getLiveLatency();
						if (null !== o && (a.latency = o, this.getTargetLatency)) {
							var r = this.getTargetLatency();
							null !== r && (a.targetLatency = r)
						}(this.state === n.qb || this.seeking && this.state !== n.nb) && this.trigger(n.T, a)
					}
				},
				click: function(t) {
					this.trigger(n.o, t)
				},
				volumechange: function() {
					var t = this.video;
					this.trigger(n.W, {
						volume: Math.round(100 * t.volume)
					}), this.trigger(n.N, {
						mute: t.muted
					})
				},
				seeking: function() {
					if (this.state === n.ob) {
						var t = this.video.buffered.length ? this.video.buffered.start(0) : -1;
						if (this.video.currentTime === t) return
					} else if (this.state === n.nb) return;
					this.seeking = !0
				},
				seeked: function() {
					this.seeking && (this.seeking = !1, this.trigger(n.S))
				},
				playing: function() {
					-1 === this.stallTime && this.setState(n.qb), this.trigger(n.gb)
				},
				pause: function() {
					this.state !== n.lb && (this.video.ended || this.video.error || this.video.currentTime !== this.video.duration && this.setState(n.pb))
				},
				progress: function() {
					var t = this.getDuration();
					if (!(t <= 0 || t === 1 / 0)) {
						var e = this.video.buffered;
						if (e && 0 !== e.length) {
							var i = Object(a.a)(e.end(e.length - 1) / t, 0, 1);
							this.trigger(n.E, {
								bufferPercent: 100 * i,
								position: this.getCurrentTime(),
								duration: t,
								currentTime: this.video.currentTime,
								seekRange: this.getSeekRange()
							})
						}
					}
				},
				ratechange: function() {
					this.trigger(n.Q, {
						playbackRate: this.video.playbackRate
					})
				},
				ended: function() {
					this.state !== n.nb && this.state !== n.lb && this.trigger(n.G)
				}
			};
		e.a = o
	}, function(t, e, i) {
		"use strict";
		var n = i(4),
			a = i(11),
			o = i(96),
			r = {
				container: null,
				volume: function(t) {
					this.video.volume = Math.min(Math.max(0, t / 100), 1)
				},
				mute: function(t) {
					this.video.muted = !!t, this.video.muted || this.video.removeAttribute("muted")
				},
				resize: function(t, e, i) {
					var o = this.video,
						r = o.videoWidth,
						s = o.videoHeight;
					if (t && e && r && s) {
						var l = {
							objectFit: "",
							width: "",
							height: ""
						};
						if ("uniform" === i) {
							var c = t / e,
								u = r / s,
								d = Math.abs(c - u);
							d < .09 && d > .0025 && (l.objectFit = "fill", i = "exactfit")
						}
						if (n.Browser.ie || n.OS.iOS && n.OS.version.major < 9 || n.Browser.androidNative)
							if ("uniform" !== i) {
								l.objectFit = "contain";
								var h = t / e,
									p = r / s,
									w = 1,
									f = 1;
								"none" === i ? w = f = h > p ? Math.ceil(100 * s / e) / 100 : Math.ceil(100 * r / t) / 100 : "fill" === i ? w = f = h > p ? h / p : p / h : "exactfit" === i && (h > p ? (w = h / p, f = 1) : (w = 1, f = p / h)), Object(a.e)(o, "matrix(" + w.toFixed(2) + ", 0, 0, " + f.toFixed(2) + ", 0, 0)")
							} else l.top = l.left = l.margin = "", Object(a.e)(o, "");
						Object(a.d)(o, l)
					}
				},
				getContainer: function() {
					return this.container
				},
				setContainer: function(t) {
					this.container = t, this.video.parentNode !== t && t.appendChild(this.video)
				},
				removeFromContainer: function() {
					var t = this.container,
						e = this.video;
					this.container = null, t && t === e.parentNode && t.removeChild(e)
				},
				remove: function() {
					this.stop(), this.destroy(), this.removeFromContainer()
				},
				atEdgeOfLiveStream: function() {
					if (!this.isLive()) return !1;
					return Object(o.a)(this.video.buffered) - this.video.currentTime <= 2
				}
			};
		e.a = r
	}, function(t, e, i) {
		"use strict";
		e.a = {
			eventsOn_: function() {},
			eventsOff_: function() {},
			attachMedia: function() {
				this.eventsOn_()
			},
			detachMedia: function() {
				return this.eventsOff_()
			}
		}
	}, function(t, e, i) {
		"use strict";
		i.d(e, "b", (function() {
			return a
		})), i.d(e, "a", (function() {
			return o
		}));
		var n = i(1);

		function a(t, e, i) {
			var a = t + 1e3,
				r = n.m;
			return e > 0 ? (403 === e && (r = n.o), a += o(e)) : "http:" === ("" + i).substring(0, 5) && "https:" === document.location.protocol ? a += 12 : 0 === e && (a += 11), {
				code: a,
				key: r
			}
		}
		var o = function(t) {
			return t >= 400 && t < 600 ? t : 6
		}
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return l
		}));
		var n = i(7),
			a = i(4),
			o = i(49),
			r = i(60),
			s = i(78),
			l = function() {
				function t(t, e, i, n, a) {
					this.hoverElement = e, this.item = i, this.model = n, this.onView = a, this.type = t, this.container = null, this.played = !1, this.seeking = !1, this.completed = !1, this.src = i.videoThumbnail, this.video = Object(r.a)({
						class: "jw-reset jw-video-thumbnail"
					}), this.video.muted = !0, this.onPlay = this.onPlay.bind(this), this.onPause = this.onPause.bind(this), this.onEnded = this.onEnded.bind(this), this.onError = this.onError.bind(this)
				}
				var e = t.prototype;
				return e.adapt = function() {
					var t = this.video;
					switch (this.type) {
						case "overlayItem":
							this.container = this.hoverElement.querySelector(".jw-related-item-poster"), this.container && this.container.parentElement && !this.hoverElement.className.match(/jw-related-item-next-up/) && (this.hoverElement = this.container.parentElement);
							break;
						case "widgetItem":
							this.container = this.hoverElement.querySelector(".jw-related-shelf-item-image");
							break;
						case "shelfItem":
							break;
						case "posterItem":
							t.setAttribute("loop", "")
					}
					this.container || (this.container = Object(n.e)('<div class="jw-video-thumbnail-generated"></div>'))
				}, e.onPlay = function() {
					var t = this.video;
					return this.src ? (Object(n.a)(this.video, "jw-video-thumbnail-visible"), t && !t.src && (t.src = this.src, t.load()), this.completed && (t.currentTime = 0, Object(n.o)(t, "jw-video-thumbnail-completed"), this.completed = !1), a.OS.iOS ? Promise.resolve(this.seekPlay()) : this.asyncPlay()) : this.destroy()
				}, e.onPause = function() {
					Object(n.o)(this.video, "jw-video-thumbnail-visible"), this.seeking = !1, this.video.pause()
				}, e.onEnded = function() {
					"posterItem" !== this.type && Object(n.a)(this.video, "jw-video-thumbnail-completed"), this.completed = !0, this.seeking = !1
				}, e.onFirstFrame = function() {
					this.played = !0, "function" == typeof this.onView && this.onView(this.item)
				}, e.onError = function() {
					this.destroy()
				}, e.onViewPoster = function(t, e) {
					if (e) return this.onPlay();
					this.onPause()
				}, e.asyncPlay = function() {
					var t = this,
						e = this.video;
					return (e.play() || Object(s.a)(e)).then((function() {
						t.played || t.onFirstFrame()
					})).catch((function(e) {
						if (20 !== e.code) return 9 !== e.code && "Failed to load because no supported source was found." !== e.message ? t.seekPlay() : void t.destroy()
					}))
				}, e.seekPlay = function() {
					var t = this,
						e = this.video,
						i = e.hasAttribute("loop"),
						n = this.seek = function(a) {
							if (t.seeking) {
								if (!e.duration) return Object(o.b)(n);
								r || (r = a);
								var s = (a - r) / 1e3;
								i ? s %= e.duration : s = Math.min(s, e.duration), e.currentTime = s, e.duration > s || i ? Object(o.b)(n) : t.onEnded()
							}
						},
						a = this.handleSeek = function() {
							t.onFirstFrame(), t.video.removeEventListener("seeked", a)
						},
						r = 0;
					this.played || this.video.addEventListener("seeked", a), this.seeking = !0, Object(o.b)(n)
				}, e.addEventListeners = function() {
					"posterItem" === this.type ? (this.model.once("change:state", this.destroy, this), this.model.on("change:viewable", this.onViewPoster, this), this.model.get("viewable") && this.onViewPoster()) : (a.OS.mobile || (this.hoverElement.addEventListener("mouseenter", this.onPlay), this.hoverElement.addEventListener("mouseleave", this.onPause)), this.video.addEventListener("ended", this.onEnded)), this.video.addEventListener("error", this.onError)
				}, e.removeEventListeners = function() {
					"posterItem" === this.type ? (this.model.off("change: state", this.destroy, this), this.model.off("change:viewable", this.onViewPoster, this)) : (a.OS.mobile || (this.hoverElement.removeEventListener("mouseenter", this.onPlay), this.hoverElement.removeEventListener("mouseleave", this.onPause)), this.video.removeEventListener("ended", this.onEnded)), this.video.removeEventListener("error", this.onError), this.handleSeek && this.video.removeEventListener("seeked", this.handleSeek)
				}, e.init = function() {
					this.adapt(this.hoverElement.className), this.addEventListeners(), Object(n.a)(this.container, "jw-video-thumbnail-container"), "widgetItem" === this.type ? Object(n.m)(this.container, this.video) : this.container.appendChild(this.video), this.container.parentElement && "posterItem" !== this.type ? "shelfItem" === this.type && Object(n.m)(this.hoverElement, this.container) : this.hoverElement.appendChild(this.container)
				}, e.isDestroyed = function() {
					return !this.video
				}, e.destroy = function() {
					this.isDestroyed() || (this.removeEventListeners(), this.seeking = !1, this.seek && Object(o.a)(this.seek), this.onPause(), this.video.removeAttribute("src"), this.video.load(), this.container.removeChild(this.video), this.video = null, this.container.className.match(/jw-video-thumbnail-generated/) ? this.container.parentNode.removeChild(this.container) : Object(n.o)(this.container, "jw-video-thumbnail-container"), this.container = null)
				}, t
			}()
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return n
		}));
		var n = function(t) {
			if (t && t.length) {
				var e = t.filter((function(t) {
					return t.type && t.type.match(/video/)
				}));
				if (e && e.length) return e
			}
			return !1
		}
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return o
		}));
		var n, a = i(53);

		function o(t, e, i) {
			var o = function() {
				try {
					n = window.localStorage.jwplayerLocalId
				} catch (t) {}
				return n = n || Object(a.b)(12)
			}();
			t.forEach((function(t) {
				var n = t.variations;
				if (n && n[e]) {
					n.selected = n.selected || {};
					var a = function(t, e) {
							for (var i = function(t) {
									for (var e = 1794770992, i = 0, n = t.length; i < n; i++) e ^= t.charCodeAt(i), e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
									return e >>> 0
								}(t) % 2520, n = e.reduce((function(t, e) {
									return t + e.weight
								}), 0), a = 0, o = 0; o < e.length; o++) {
								var r = e[o];
								if ((a += 2520 * r.weight / n) > i) return r
							}
						}(o, n[e]),
						r = a[i];
					r && (t[i] = r, n.selected[e] = a)
				}
			}))
		}
	}, function(t, e, i) {
		var n = i(151);
		"string" == typeof n && (n = [
			["all-players", n, ""]
		]), i(41).style(n, "all-players"), n.locals && (t.exports = n.locals)
	}, function(t, e, i) {
		(t.exports = i(75)(!1)).push([t.i, '.jw-reset{text-align:left;direction:ltr}.jw-reset-text,.jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-transform:none;vertical-align:baseline;border:0;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}body .jw-error,body .jwplayer.jw-state-error{height:100%;width:100%}.jw-title{position:absolute;top:0}.jw-background-color{background:rgba(0,0,0,0.4)}.jw-text{color:rgba(255,255,255,0.8)}.jw-knob{color:rgba(255,255,255,0.8);background-color:#fff}.jw-button-color{color:rgba(255,255,255,0.8)}:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):focus,:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):hover{color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:rgba(255,255,255,0.8)}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:none}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-rail{background:rgba(255,255,255,0.3)}.jw-buffer{background:rgba(255,255,255,0.3)}.jw-progress{background:#f2f2f2}.jw-time-tip,.jw-volume-tip{border:0}.jw-slider-volume.jw-volume-tip.jw-background-color.jw-slider-vertical{background:none}.jw-skip{padding:.5em;outline:none}.jw-skip .jw-skiptext,.jw-skip .jw-skip-icon{color:rgba(255,255,255,0.8)}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:focus .jw-skip-icon{color:#fff}.jw-icon-cast google-cast-launcher{--connected-color:#fff;--disconnected-color:rgba(255,255,255,0.8)}.jw-icon-cast google-cast-launcher:focus{outline:none}.jw-icon-cast google-cast-launcher.jw-off{--connected-color:rgba(255,255,255,0.8)}.jw-icon-cast:focus google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast:hover google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-color-active{color:#fff;stroke:#fff;border-color:#fff}:not(.jw-flag-touch) .jw-color-active-hover:hover,:not(.jw-flag-touch) .jw-color-active-hover:focus{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive{color:rgba(255,255,255,0.8);stroke:rgba(255,255,255,0.8);border-color:rgba(255,255,255,0.8)}:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:rgba(255,255,255,0.8);stroke:rgba(255,255,255,0.8);border-color:rgba(255,255,255,0.8)}.jw-option{color:rgba(255,255,255,0.8)}.jw-option.jw-active-option{color:#fff;background-color:rgba(255,255,255,0.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jwplayer.jw-flag-aspect-mode{height:auto !important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:66px}.jw-breakpoint-7 .jw-plugin{bottom:132px}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-preview,.jw-captions,.jw-title{pointer-events:none}.jw-media,.jw-logo{pointer-events:all}.jw-wrapper{background-color:#000;position:absolute;top:0;left:0;right:0;bottom:0}.jw-hidden-accessibility{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.jw-contract-trigger::before{content:"";overflow:hidden;width:200%;height:200%;display:block;position:absolute;top:0;left:0}.jwplayer .jw-media video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-focus-ring-color:rgba(0,0,0,0);outline:none}.jwplayer .jw-media video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform .jw-media video{object-fit:contain}.jwplayer.jw-stretch-none .jw-media video{object-fit:none}.jwplayer.jw-stretch-fill .jw-media video{object-fit:cover}.jwplayer.jw-stretch-exactfit .jw-media video{object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jwplayer .jw-preview,.jw-error .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;padding-top:20px;width:100%;z-index:1}.jw-title-primary,.jw-title-secondary{color:#fff;padding-left:20px;padding-right:20px;padding-bottom:.5em;overflow:hidden;text-overflow:ellipsis;direction:unset;white-space:nowrap;width:100%}.jw-title-primary{font-size:1.625em}.jw-breakpoint-2 .jw-title-primary,.jw-breakpoint-3 .jw-title-primary{font-size:1.5em}.jw-flag-small-player .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-primary{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;padding-bottom:0;margin-bottom:.5em;white-space:pre-wrap;line-height:1.2}.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary{font-size:1em}.jw-flag-small-player .jw-title-secondary,.jw-breakpoint-0 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-secondary,.jw-title-secondary:empty{display:none}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:normal;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5}.jw-text-track-cue{background-color:rgba(0,0,0,0.5);color:#fff;padding:.1em .3em}.jwplayer video::-webkit-media-controls{display:none;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,0.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing) .jw-captions,.jwplayer.jw-flag-media-audio.jw-state-playing .jw-captions,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden) .jw-captions{max-height:calc(100% - 60px)}.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer.jw-flag-media-audio.jw-state-playing:not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container{max-height:calc(100% - 60px)}.jw-logo{position:absolute;margin:20px;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto;outline:none}.jw-logo.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{left:0}.jw-logo-bottom-right{right:0}.jw-logo-bottom-left,.jw-logo-bottom-right{bottom:44px;transition:bottom 150ms cubic-bezier(0, .25, .25, 1)}.jw-state-idle .jw-logo{z-index:1}.jw-state-setup .jw-wrapper{background-color:inherit}.jw-state-setup .jw-logo,.jw-state-setup .jw-controls,.jw-state-setup .jw-controls-backdrop{visibility:hidden}span.jw-break{display:block}body .jw-error,body .jwplayer.jw-state-error{background-color:#333;color:#fff;font-size:16px;display:table;opacity:1;position:relative}body .jw-error .jw-display,body .jwplayer.jw-state-error .jw-display{display:none}body .jw-error .jw-media,body .jwplayer.jw-state-error .jw-media{cursor:default}body .jw-error .jw-preview,body .jwplayer.jw-state-error .jw-preview{background-color:#333}body .jw-error .jw-error-msg,body .jwplayer.jw-state-error .jw-error-msg{background-color:#000;border-radius:2px;display:flex;flex-direction:row;align-items:stretch;padding:20px}body .jw-error .jw-error-msg .jw-icon,body .jwplayer.jw-state-error .jw-error-msg .jw-icon{height:30px;width:30px;margin-right:20px;flex:0 0 auto;align-self:center}body .jw-error .jw-error-msg .jw-icon:empty,body .jwplayer.jw-state-error .jw-error-msg .jw-icon:empty{display:none}body .jw-error .jw-error-msg .jw-info-container,body .jwplayer.jw-state-error .jw-error-msg .jw-info-container{margin:0;padding:0}body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg,body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg{flex-direction:column}body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text,body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text{text-align:center}body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon,body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon{flex:.5 0 auto;margin-right:0;margin-bottom:20px}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break{display:inline}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break:before{content:" "}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg{height:100%;width:100%;top:0;position:absolute;left:0;background:#000;-webkit-transform:none;transform:none;padding:4px 16px;z-index:1}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg.jw-info-overlay{max-width:none;max-height:none}body .jwplayer.jw-state-error .jw-title,.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-title{display:block}body .jwplayer.jw-state-error .jw-preview,.jw-state-idle .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-preview{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-fullscreen{width:100% !important;height:100% !important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:none}.jw-wrapper.jw-float-transition{display:none!important}.jw-flag-floating{background-size:cover;background-color:#000}.jw-flag-floating .jw-wrapper{position:fixed;z-index:2147483647;top:auto;bottom:1rem;left:auto;right:1rem;max-width:400px;max-height:400px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating .jw-wrapper:not(.jw-floating-dragged){-webkit-animation:jw-float-to-bottom 150ms cubic-bezier(0, .25, .25, 1) forwards 1;animation:jw-float-to-bottom 150ms cubic-bezier(0, .25, .25, 1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating .jw-wrapper{width:100%;left:0;right:0}}.jw-flag-floating .jw-wrapper.jw-floating-dragging{transition:none!important}.jw-flag-floating .jw-wrapper .jw-media{touch-action:none}@media screen and (max-device-width:480px) and (orientation:portrait){.jw-flag-touch.jw-flag-floating .jw-wrapper{-webkit-animation:none;animation:none;top:0;margin-top:62px;bottom:auto;max-width:none;max-height:none}}.jw-flag-floating .jw-float-icon{pointer-events:all;cursor:pointer;display:none}.jw-flag-floating .jw-float-icon .jw-svg-icon{-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px #000)}.jw-flag-floating.jw-floating-dismissible .jw-dismiss-icon{display:none}.jw-flag-floating.jw-floating-dismissible.jw-flag-ads .jw-float-icon{display:flex}.jw-flag-floating.jw-floating-dismissible.jw-state-paused .jw-logo,.jw-flag-floating.jw-floating-dismissible:not(.jw-flag-user-inactive) .jw-logo{display:none}.jw-flag-floating.jw-floating-dismissible.jw-state-paused .jw-float-icon,.jw-flag-floating.jw-floating-dismissible:not(.jw-flag-user-inactive) .jw-float-icon{display:flex}.jw-float-icon{display:none;position:absolute;top:3px;right:5px;align-items:center;justify-content:center}@-webkit-keyframes jw-float-to-bottom{from{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes jw-float-to-bottom{from{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.jw-flag-top{margin-top:2em;overflow:visible}.jw-top{height:2em;line-height:2;pointer-events:none;text-align:center;opacity:.8;position:absolute;top:-2em;width:100%}.jw-top .jw-icon{cursor:pointer;pointer-events:all;height:auto;width:auto}.jw-top .jw-text{color:#555}', ""])
	}, function(t, e, i) {
		var n = i(153);
		"string" == typeof n && (n = [
			["all-players", n, ""]
		]), i(41).style(n, "all-players"), n.locals && (t.exports = n.locals)
	}, function(t, e, i) {
		(t.exports = i(75)(!1)).push([t.i, ".jw-flag-outstream.jw-state-complete .jw-controls,.jw-flag-outstream.jw-state-complete .jw-controls-backdrop{display:none}.jw-flag-outstream.jw-state-complete .jw-media{pointer-events:none}.jw-flag-outstream.jw-state-complete .jw-preview{background-color:#f2f2f2}.jw-flag-outstream .jw-wrapper{transition:-webkit-transform 250ms cubic-bezier(0, .25, .25, 1);transition:transform 250ms cubic-bezier(0, .25, .25, 1);transition:transform 250ms cubic-bezier(0, .25, .25, 1), -webkit-transform 250ms cubic-bezier(0, .25, .25, 1)}.jw-flag-outstream .jw-dismiss-icon{position:absolute;right:0;bottom:0}.jw-flag-outstream-close{max-height:1px;-webkit-animation:250ms jw-outstream-collapse 1 step-end;animation:250ms jw-outstream-collapse 1 step-end}@-webkit-keyframes jw-outstream-collapse{0%{max-height:initial}100%{max-height:1px}}@keyframes jw-outstream-collapse{0%{max-height:initial}100%{max-height:1px}}.jw-flag-outstream-close .jw-wrapper{-webkit-transform:scaleY(0);transform:scaleY(0)}.jw-flag-outstream-pending{max-height:1px;max-width:100%}.jw-flag-outstream-pending.jw-flag-top{margin-top:0;overflow:hidden}.jw-flag-outstream-pending .jw-wrapper{-webkit-transform:scaleY(0);transform:scaleY(0)}", ""])
	}, function(t, e, i) {
		var n = i(155);
		"string" == typeof n && (n = [
			["all-players", n, ""]
		]), i(41).style(n, "all-players"), n.locals && (t.exports = n.locals)
	}, function(t, e, i) {
		(t.exports = i(75)(!1)).push([t.i, ".jw-logo-button{pointer-events:none;width:132px}.jw-svg-icon-watermark{color:#ff0046;width:96px}.jw-controlbar .jw-svg-icon-jwplayer-logo{display:none;color:#ff0046}.jw-flag-small-player .jw-logo-button{width:44px}.jw-flag-small-player .jw-svg-icon-watermark{display:none}.jw-flag-small-player .jw-controlbar .jw-svg-icon-jwplayer-logo{display:block}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-logo-button{bottom:6px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline.jw-logo-button{width:186px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-svg-icon-watermark{width:150px}", ""])
	}, function(t, e, i) {
		"use strict";
		i.d(e, "a", (function() {
			return r
		}));
		var n = i(0),
			a = i(3);

		function o(t, e) {
			var i = t[e];
			return Object(n.s)(i) && i >= 0 ? i : null
		}

		function r(t, e, i) {
			var r = function(t, e, i) {
				var a;
				a = Object(n.s)(i.startPTS) ? o(i, "startPTS") : o(i, "start");
				if (null === a) return null;
				switch (t) {
					case "PROGRAM-DATE-TIME":
						var r = o(i, "duration");
						return {
							metadataType: "program-date-time", programDateTime: e, start: a, end: a + r
						};
					case "EXT-X-DATERANGE":
						var s = {},
							l = e.split(",").map((function(t) {
								var e = t.split("="),
									i = e[0],
									n = (e[1] || "").replace(/^"|"$/g, "");
								return s[i] = n, {
									name: i,
									value: n
								}
							})),
							c = s["START-DATE"];
						if (!c) return null;
						var u = s["END-DATE"],
							d = a;
						if (Object(n.s)(i.programDateTime) && (d += (new Date(c).getTime() - new Date(i.programDateTime).getTime()) / 1e3), isNaN(d)) return null;
						var h = parseFloat(s["PLANNED-DURATION"] || s.DURATION) || 0;
						return !h && u && (h = (new Date(u).getTime() - new Date(c).getTime()) / 1e3), "date-range", {
							metadataType: "date-range",
							tag: t,
							content: e,
							attributes: l,
							start: d,
							end: d + h,
							startDate: c,
							endDate: u,
							duration: h
						};
					case "EXT-X-CUE-IN":
					case "EXT-X-CUE-OUT":
						var p = parseFloat(e) || 0;
						return {
							metadataType: "scte-35", tag: t, content: e, start: a, end: a + p
						};
					case "DISCONTINUITY":
						var w, f = o(i, "duration"),
							g = a + f;
						return "cc" in i && (w = i.cc), {
							metadataType: "discontinuity",
							tag: t,
							discontinuitySequence: w,
							PTS: e,
							start: a,
							end: g
						};
					default:
						return null
				}
			}(t, e, i);
			if (r) {
				if (!Object(n.s)(r.start)) return;
				var s = this.createCue(r.start, r.end, JSON.stringify(r)),
					l = i.sn + "_" + t + "_" + e;
				if (this.addVTTCue({
						type: "metadata",
						cue: s
					}, l)) {
					var c = r.metadataType;
					delete r.metadataType, this.trigger(a.M, {
						metadataType: c,
						metadata: r
					})
				}
			}
		}
	}, , , , , , , , , , function(t, e, i) {
		"use strict";
		i.r(e);
		var n = i(0),
			a = i(45),
			o = i(3),
			r = i(142),
			s = i(4),
			l = i(65),
			c = i(143),
			u = i(144),
			d = i(145),
			h = i(82),
			p = i(11),
			w = i(7),
			f = i(57),
			g = i(9),
			j = i(121),
			m = i(96),
			b = i(78),
			v = i(18),
			y = i(1),
			k = window.clearTimeout,
			x = function() {};

		function T(t, e) {
			Object.keys(t).forEach((function(i) {
				e.removeEventListener(i, t[i])
			}))
		}

		function O(t, e, i) {
			var a = this;
			a.state = o.nb, a.seeking = !1, a.currentTime = -1, a.retries = 0, a.maxRetries = 3;
			var f = e.loadAndParseHlsMetadata,
				O = e.minDvrWindow;
			a.loadAndParseHlsMetadata = void 0 === f || !!f;
			var C, _ = {
				progress: function() {
					c.a.progress.call(a), pt()
				},
				timeupdate: function() {
					a.currentTime >= 0 && (a.retries = 0), a.currentTime = E.currentTime, F && B !== E.currentTime && K(E.currentTime), c.a.timeupdate.call(a), pt(), s.Browser.ie && Q()
				},
				resize: Q,
				ended: function() {
					R = -1, wt(), c.a.ended.call(a)
				},
				loadedmetadata: function() {
					var t = a.getDuration();
					W && t === 1 / 0 && (t = 0);
					var e = {
						metadataType: "media",
						duration: t,
						height: E.videoHeight,
						width: E.videoWidth,
						seekRange: a.getSeekRange()
					};
					a.fairplay && (e.drm = "fairplay"), a.trigger(o.L, e), Q()
				},
				durationchange: function() {
					W || c.a.progress.call(a)
				},
				loadeddata: function() {
					var t;
					! function() {
						var t = E;
						if (t.getStartDate) {
							var e = t.getStartDate(),
								i = e.getTime ? e.getTime() : NaN;
							i === a.startDateTime || isNaN(i) || a.setStartDateTime(i)
						}
					}(),
					function(t) {
						if (H = null, !t) return;
						if (t.length) {
							for (var e = 0; e < t.length; e++)
								if (t[e].enabled) {
									N = e;
									break
								} - 1 === N && (t[N = 0].enabled = !0), H = Object(n.A)(t, (function(t) {
								return {
									name: t.label || t.language,
									language: t.language
								}
							}))
						}
						a.addTracksListener(t, "change", lt), H && a.trigger(o.g, {
							currentTrack: N,
							tracks: H
						})
					}(E.audioTracks), t = a.getDuration(), z && -1 !== z && t && t !== 1 / 0 && a.seek(z)
				},
				canplay: function() {
					I || (I = !0, W || ht(), Q(), c.a.canplay.call(a))
				},
				seeking: function() {
					var t = B,
						e = null !== P ? G(P) : a.getCurrentTime(),
						i = G(t);
					B = P, P = null, z = 0, a.seeking = !0, a.trigger(o.R, {
						position: i,
						offset: e,
						duration: a.getDuration(),
						currentTime: t,
						seekRange: a.getSeekRange(),
						metadata: {
							currentTime: t
						}
					})
				},
				seeked: function() {
					c.a.seeked.call(a), a.ensureMetaTracksActive()
				},
				waiting: function() {
					a.seeking || a.video.seeking ? a.setState(o.ob) : a.state === o.qb && (a.atEdgeOfLiveStream() && a.setPlaybackRate(1), a.stallTime = a.video.currentTime, a.setState(o.rb))
				},
				webkitbeginfullscreen: function(t) {
					F = !0, ct(t)
				},
				webkitendfullscreen: function(t) {
					F = !1, ct(t)
				},
				error: function() {
					var t = a.video,
						e = t.error,
						i = e && e.code || -1;
					if ((3 === i || 4 === i) && a.retries < a.maxRetries) return a.trigger(o.wb, new y.q(null, 324e3 + i - 1, e)), a.retries++, E.load(), void(-1 !== a.currentTime && (I = !1, a.seek(a.currentTime), a.currentTime = -1));
					var n = 224e3,
						r = y.m;
					1 === i ? n += i : 2 === i ? (r = y.j, n = 221e3) : 3 === i || 4 === i ? (n += i - 1, 4 === i && t.src === location.href && (n = 224005)) : r = y.p, ot(), a.trigger(o.H, new y.q(r, n, e))
				}
			};
			Object.keys(c.a).forEach((function(t) {
				if (!_[t]) {
					var e = c.a[t];
					_[t] = function(t) {
						e.call(a, t)
					}
				}
			})), Object(n.j)(this, g.a, u.a, d.a, j.a, {
				renderNatively: (C = e.renderCaptionsNatively, !(!s.OS.iOS && !s.Browser.safari) || C && s.Browser.chrome),
				eventsOn_: function() {
					var t, e;
					t = _, e = E, Object.keys(t).forEach((function(i) {
						e.removeEventListener(i, t[i]), e.addEventListener(i, t[i])
					}))
				},
				eventsOff_: function() {
					T(_, E)
				},
				detachMedia: function() {
					d.a.detachMedia.call(a), wt(), this.removeTracksListener(E.textTracks, "change", this.textTrackChangeHandler), this.removeTracksListener(E.textTracks, "addtrack", this.addTrackHandler), this.videoLoad && (E.load = this.videoLoad), nt() && this.disableTextTrack()
				},
				attachMedia: function() {
					if (d.a.attachMedia.call(a), I = !1, this.seeking = !1, E.loop = !1, s.OS.iOS && !this.videoLoad) {
						var t = this.videoLoad = E.load;
						E.load = function() {
							return E.src === location.href ? (-1 === R && (R = tt(S)), at(S[R]), a.state === o.qb && E.play(), void a.trigger(o.wb, new y.q(null, 324005, new Error("video.load() was called after setting video.src to empty while playing video")))) : t.call(E)
						}
					}
					nt() && this.enableTextTrack(), this.renderNatively && this.setTextTracks(this.video.textTracks), this.addTracksListener(E.textTracks, "change", this.textTrackChangeHandler)
				},
				isLive: function() {
					return E.duration === 1 / 0
				}
			});
			var S, E = i,
				A = {
					level: {}
				},
				L = null !== e.liveTimeout ? e.liveTimeout : 3e4,
				I = !1,
				z = 0,
				P = null,
				B = null,
				R = -1,
				F = !1,
				V = x,
				H = null,
				N = -1,
				D = -1,
				q = !1,
				U = null,
				W = !1,
				X = null,
				Y = null,
				Z = 0;

			function Q() {
				var t = A.level;
				if (t.width !== E.videoWidth || t.height !== E.videoHeight) {
					if (!E.videoWidth && !dt() || -1 === R) return;
					a.ensureMetaTracksActive(), t.width = E.videoWidth, t.height = E.videoHeight, ht(), A.reason = A.reason || "auto";
					var e = "hls" === S[R].type ? "auto" : "manual";
					t.index = R, t.label = S[R].label, a.trigger(o.V, {
						reason: A.reason,
						mode: e,
						bitrate: 0,
						level: {
							width: t.width,
							height: t.height,
							index: t.index,
							label: t.label
						}
					}), A.reason = ""
				}
			}

			function K(t) {
				B = t
			}

			function G(t) {
				var e = a.getSeekRange();
				return a.isLive() && Object(h.a)(e.end - e.start, O) ? Math.min(0, t - e.end) : t
			}

			function J(t) {
				var e;
				return Array.isArray(t) && t.length > 0 && (e = t.map((function(t, e) {
					return {
						label: t.label || e
					}
				}))), e
			}

			function $(t) {
				a.currentTime = -1, O = t.minDvrWindow, S = t.sources, R = tt(S)
			}

			function tt(t) {
				var i = Math.max(0, R),
					n = e.qualityLabel;
				if (t)
					for (var a = 0; a < t.length; a++)
						if (t[a].default && (i = a), n && t[a].label === n) return a;
				return A.reason = "initial choice", A.level.width && A.level.height || (A.level = {}), i
			}

			function et() {
				return E.paused && E.played && E.played.length && a.isLive() && !Object(h.a)(st() - rt(), O) && (a.clearTracks(), E.load()), E.play() || Object(b.a)(E)
			}

			function it(t) {
				a.currentTime = -1, z = 0, wt();
				var e = E.src,
					i = document.createElement("source");
				i.src = S[R].file, i.src !== e ? (at(S[R]), e && E.load()) : 0 === t && E.currentTime > 0 && (z = -1, a.seek(t)), t > 0 && E.currentTime !== t && a.seek(t);
				var n = J(S);
				n && a.trigger(o.J, {
					levels: n,
					currentQuality: R
				}), S.length && "hls" !== S[0].type && ht()
			}

			function nt() {
				if (!s.Browser.safari) return !0;
				var t = a.getCurrentTextTrack();
				return t && t.sideloaded
			}

			function at(t) {
				H = null, N = -1, A.reason || (A.reason = "initial choice", A.level = {}), I = !1;
				var e = document.createElement("source");
				e.src = t.file, E.src !== e.src && (E.src = t.file)
			}

			function ot() {
				E && (a.disableTextTrack(), E.removeAttribute("preload"), E.removeAttribute("src"), Object(w.h)(E), Object(p.d)(E, {
					objectFit: ""
				}), R = -1, !s.Browser.msie && "load" in E && E.load())
			}

			function rt() {
				var t = 1 / 0;
				return ["buffered", "seekable"].forEach((function(e) {
					for (var i = E[e], a = i ? i.length : 0; a--;) {
						var o = Math.min(t, i.start(a));
						Object(n.s)(o) && (t = o)
					}
				})), t
			}

			function st() {
				var t = 0;
				return ["buffered", "seekable"].forEach((function(e) {
					for (var i = E[e], a = i ? i.length : 0; a--;) {
						var o = Math.max(t, i.end(a));
						Object(n.s)(o) && (t = o)
					}
				})), t
			}

			function lt() {
				for (var t = -1, e = E.audioTracks, i = 0; i < e.length; i++)
					if (e[i].enabled) {
						t = i;
						break
					} ut(t)
			}

			function ct(t) {
				a.trigger(o.Y, {
					target: t.target,
					jwstate: F
				})
			}

			function ut(t) {
				E && E.audioTracks && H && t > -1 && t < E.audioTracks.length && t !== N && (E.audioTracks[N].enabled = !1, N = t, E.audioTracks[N].enabled = !0, a.trigger(o.h, {
					currentTrack: N,
					tracks: H
				}))
			}

			function dt() {
				if (!(E.readyState < 2)) return 0 === E.videoHeight
			}

			function ht() {
				var t = dt();
				if (void 0 !== t) {
					var e = t ? "audio" : "video";
					a.trigger(o.U, {
						mediaType: e
					})
				}
			}

			function pt() {
				if (0 !== L) {
					var t = Object(m.a)(E.buffered);
					a.isLive() && t && U === t ? -1 === D && (D = setTimeout((function() {
						q = !0,
							function() {
								if (q && a.atEdgeOfLiveStream()) return a.trigger(o.H, new y.q(y.n, M)), !0
							}()
					}), L)) : (wt(), q = !1), U = t
				}
			}

			function wt() {
				k(D), D = -1
			}
			this.video = E, this.supportsPlaybackRate = !0, this.startDateTime = 0, a.setStartDateTime = function(t) {
				a.startDateTime = t;
				var e = new Date(t).toISOString(),
					i = a.getSeekRange(),
					n = i.start,
					o = i.end,
					r = {
						metadataType: "program-date-time",
						programDateTime: e,
						start: n = Math.max(0, n),
						end: o = Math.max(n, o + 10)
					},
					s = a.createCue(n, o, JSON.stringify(r));
				a.addVTTCue({
					type: "metadata",
					cue: s
				})
			}, a.getCurrentTime = function() {
				return function(t) {
					var e = a.getSeekRange();
					if (a.isLive()) {
						if ((!Y || Math.abs(X - e.end) > 1) && (! function(t) {
								X = t.end, Y = Math.min(0, E.currentTime - X), Z = Object(v.a)()
							}(e), a.ensureMetaTracksActive()), Object(h.a)(e.end - e.start, O)) return Y
					}
					return t
				}(E.currentTime)
			}, a.getDuration = function() {
				var t = E.duration;
				if (W && t === 1 / 0 && 0 === E.currentTime || isNaN(t)) return 0;
				var e = st();
				if (a.isLive() && e) {
					var i = e - rt();
					Object(h.a)(i, O) && (t = -i)
				}
				return t
			}, a.getSeekRange = function() {
				var t = {
					start: 0,
					end: 0
				};
				return E.seekable.length ? (t.end = st(), t.start = rt()) : Object(n.s)(E.duration) && (t.end = E.duration), t
			}, a.getLiveLatency = function() {
				var t = null,
					e = st();
				return a.isLive() && e && (t = e + (Object(v.a)() - Z) / 1e3 - E.currentTime), t
			}, this.stop = function() {
				wt(), ot(), this.clearTracks(), s.Browser.ie && E.pause(), this.setState(o.nb)
			}, this.destroy = function() {
				var t = a.addTrackHandler,
					e = a.cueChangeHandler,
					i = a.textTrackChangeHandler,
					n = E.textTracks;
				if (a.off(), a.videoLoad && (E.load = a.videoLoad), V = x, T(_, E), a.removeTracksListener(E.audioTracks, "change", lt), a.removeTracksListener(n, "change", i), a.removeTracksListener(n, "addtrack", t), e)
					for (var o = 0, r = n.length; o < r; o++) n[o].removeEventListener("cuechange", e)
			}, this.init = function(t) {
				a.retries = 0, a.maxRetries = t.adType ? 0 : 3, $(t);
				var e = S[R];
				(W = Object(l.a)(e)) && (a.supportsPlaybackRate = !1, _.waiting = x), a.eventsOn_(), S.length && "hls" !== S[0].type && this.sendMediaType(S), A.reason = ""
			}, this.preload = function(t) {
				$(t);
				var e = S[R],
					i = e.preload || "metadata";
				"none" !== i && (E.setAttribute("preload", i), at(e))
			}, this.load = function(t) {
				$(t), it(t.starttime), this.setupSideloadedTracks(t.tracks)
			}, this.play = function() {
				return V(), et()
			}, this.pause = function() {
				wt(), V = function() {
					if (E.paused && E.currentTime && a.isLive()) {
						var t = st(),
							e = t - rt(),
							i = !Object(h.a)(e, O),
							o = t - E.currentTime;
						if (i && t && (o > 15 || o < 0)) {
							if (P = Math.max(t - 10, t - e), !Object(n.s)(P)) return;
							K(E.currentTime), E.currentTime = P
						}
					}
				}, E.pause()
			}, this.seek = function(t) {
				var e = a.getSeekRange(),
					i = t;
				if (t < 0 && (i += e.end), I || (I = !!st()), I) {
					z = 0;
					try {
						if (a.seeking = !0, a.isLive() && Object(h.a)(e.end - e.start, O))
							if (Y = Math.min(0, i - X), t < 0) i += Math.min(12, (Object(v.a)() - Z) / 1e3);
						P = i, K(E.currentTime), E.currentTime = i
					} catch (t) {
						a.seeking = !1, z = i
					}
				} else z = i, s.Browser.firefox && E.paused && et()
			}, this.setVisibility = function(t) {
				(t = !!t) || s.OS.android ? Object(p.d)(a.container, {
					visibility: "visible",
					opacity: 1
				}) : Object(p.d)(a.container, {
					visibility: "",
					opacity: 0
				})
			}, this.setFullscreen = function(t) {
				if (t = !!t) {
					try {
						var e = E.webkitEnterFullscreen || E.webkitEnterFullScreen;
						e && e.apply(E)
					} catch (t) {
						return !1
					}
					return a.getFullscreen()
				}
				var i = E.webkitExitFullscreen || E.webkitExitFullScreen;
				return i && i.apply(E), t
			}, a.getFullscreen = function() {
				return F || !!E.webkitDisplayingFullscreen
			}, this.setCurrentQuality = function(t) {
				R !== t && t >= 0 && S && S.length > t && (R = t, A.reason = "api", A.level = {}, this.trigger(o.K, {
					currentQuality: t,
					levels: J(S)
				}), e.qualityLabel = S[t].label, it(E.currentTime || 0), et())
			}, this.setPlaybackRate = function(t) {
				E.playbackRate = E.defaultPlaybackRate = t
			}, this.getPlaybackRate = function() {
				return E.playbackRate
			}, this.getCurrentQuality = function() {
				return R
			}, this.getQualityLevels = function() {
				return Array.isArray(S) ? S.map((function(t) {
					return Object(r.a)(t)
				})) : []
			}, this.getName = function() {
				return {
					name: "html5"
				}
			}, this.setCurrentAudioTrack = ut, this.getAudioTracks = function() {
				return H || []
			}, this.getCurrentAudioTrack = function() {
				return N
			}
		}
		Object(n.j)(O.prototype, f.a), O.getName = function() {
			return {
				name: "html5"
			}
		};
		var C = O,
			M = 220001,
			_ = i(27),
			S = i(146),
			E = i(2);

		function A(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
		}
		var L = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
			I = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
			z = function() {
				function t(t) {
					this.fragments = [], this.url = t, this.live = !0, this.startSN = this.endSN = this.startCC = this.endCC = this.targetduration = this.totalduration = 0
				}
				var e, i, n;
				return e = t, (i = [{
					key: "startProgramDateTime",
					get: function() {
						return this.fragments[0] ? this.fragments[0].programDateTime : null
					}
				}]) && A(e.prototype, i), n && A(e, n), t
			}(),
			P = function() {
				this.relurl = null, this.tagList = [], this.cc = this.sn = this.start = 0, this.title = null, this.programDateTime = this.rawProgramDateTime = null
			};

		function B(t, e) {
			var i, a, o = new z(e),
				r = 0,
				s = 0,
				l = 0,
				c = null,
				u = new P,
				d = null;
			for (L.lastIndex = 0; null !== (i = L.exec(t));) {
				var h = i[1];
				if (h) {
					u.duration = parseFloat(h);
					var p = (" " + i[2]).slice(1);
					u.title = p || null, u.tagList.push(p ? ["INF", h, p] : ["INF", h])
				} else if (i[3]) {
					if (Object(n.s)(u.duration)) {
						var w = r++;
						u.start = s, u.sn = w, u.cc = l, u.relurl = (" " + i[3]).slice(1), R(u, c), o.fragments.push(u), c = u, s += u.duration, u = new P
					}
				} else if (i[4]) u.rawProgramDateTime = (" " + i[4]).slice(1), u.tagList.push(["PROGRAM-DATE-TIME", u.rawProgramDateTime]), null === d && (d = o.fragments.length);
				else {
					for (i = i[0].match(I), a = 1; a < i.length && void 0 === i[a]; a++);
					var f = (" " + i[a + 1]).slice(1),
						g = (" " + i[a + 2]).slice(1);
					switch (i[a]) {
						case "#":
							u.tagList.push(g ? [f, g] : [f]);
							break;
						case "MEDIA-SEQUENCE":
							r = o.startSN = parseInt(f);
							break;
						case "TARGETDURATION":
							o.targetduration = parseFloat(f);
							break;
						case "ENDLIST":
							o.live = !1;
							break;
						case "DIS":
							l++, u.tagList.push(["DIS"]);
							break;
						case "DISCONTINUITY-SEQ":
							l = parseInt(f);
							break;
						case "MAP":
							var j = u.rawProgramDateTime;
							(u = new P).rawProgramDateTime = j
					}
				}
			}
			if (!s) throw new Error("Invalid playlist");
			return c && !c.relurl && (o.fragments.pop(), s -= c.duration), o.totalduration = s, o.endSN = r - 1, o.startCC = o.fragments[0] ? o.fragments[0].cc : 0, o.endCC = l, d && function(t, e) {
				for (var i = t[e], n = e - 1; n >= 0; n--) {
					var a = t[n];
					a.programDateTime = i.programDateTime - 1e3 * a.duration, i = a
				}
			}(o.fragments, d), o
		}

		function R(t, e) {
			t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : e && e.programDateTime && (t.programDateTime = e.endProgramDateTime), Object(n.s)(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
		}
		var F = window.performance,
			V = window.URL;
		var H = function() {
			function t(t, e) {
				var i = this;
				this.video = t, this.endTime = 0, this.fetchTime = 0, this.parsedTime = 0, this.matches = {}, this.parent = {
					src: "",
					url: null,
					topDomain: "",
					origin: "",
					pathname: ""
				}, this.xhr = null, this.onLevelLoaded = e, this.onResourceBufferFull = function(t) {
					i.run(i.endTime), F.clearResourceTimings()
				}, F.addEventListener("resourcetimingbufferfull", this.onResourceBufferFull)
			}
			var e = t.prototype;
			return e.run = function(t) {
				var e = this,
					i = this.fetchTime,
					n = this.parent,
					a = this.video,
					o = a.src;
				if (o && o.startsWith("http") && document.body.contains(a)) {
					if (n.src !== o) {
						this.matches = {}, n.src = o;
						var r = n.url = new V(o);
						n.topDomain = r.hostname.replace(/.*?([^.]+\.[^.]+)$/, "$1"), n.origin = r.origin, n.pathname = r.pathname
					}
					for (var s = F.getEntriesByType("resource"), l = s.length; l--;) {
						var c = s[l];
						if (c.responseEnd <= i) break;
						if ("video" === c.initiatorType) {
							var u = function() {
								var i = c.name;
								if (i === o) return e.fetchTime = Math.max(c.fetchStart, e.fetchTime), "break";
								var a = Object(E.a)(i);
								if ("ts" === a || "aac" === a || "vtt" === a || "key" === a || "mp4" === a || "m4s" === a || "m4v" === a || "m4a" === a) return "continue";
								var r = e.matches[i];
								if (!r) {
									var s = "m3u8" === a,
										l = i.includes(n.topDomain),
										u = l && i.startsWith(n.origin),
										d = u && i.startsWith(n.origin + n.pathname);
									r = e.matches[i] = {
										count: 0,
										ignore: !1,
										errors: 0,
										onlyVideo: !1,
										matches: {
											m3u8: s,
											topLevelDomain: l,
											origin: u,
											path: d
										}
									}
								}
								if (r.count++, r.onlyVideo = document.body.querySelectorAll("video audio").length < 2, r.onlyVideo || r.matches.path || r.matches.m3u8 && r.matches.topLevelDomain) {
									e.xhr && Object(_.a)(e.xhr);
									var h = e;
									e.xhr = Object(_.b)({
										url: i,
										responseType: "text",
										oncomplete: function(e) {
											var n = e.responseText;
											if (n) {
												var a;
												try {
													a = B(n, i)
												} catch (t) {
													N(r, 1)
												}
												if (a && a.fragments && a.fragments.length) {
													var o = h.onLevelLoaded,
														s = h.parsedTime;
													h.parsedTime = t, o(a, s, t)
												}
											} else N(r, 3)
										},
										onerror: function() {
											N(r, 3)
										}
									})
								}
								e.fetchTime = c.responseEnd
							}();
							if ("break" === u) break;
							if ("continue" === u) continue
						}
					}
					s.length > 50 && (0 === this.fetchTime || F.now() - this.fetchTime > 5e3) && F.clearResourceTimings(), this.endTime = t
				}
			}, e.destroy = function() {
				this.video = null, this.matches = null, this.onLevelLoaded = null, F.removeEventListener("resourcetimingbufferfull", this.onResourceBufferFull), this.onResourceBufferFull = null, this.xhr && (Object(_.a)(this.xhr), this.xhr = null)
			}, t
		}();

		function N(t, e) {
			void 0 === e && (e = 0), t.errors++, e && t.errors >= e && (t.ignore = !0)
		}
		var D = i(156),
			q = function(t, e, i) {
				C.call(this, t, e, i);
				var r = this,
					s = r.init,
					l = r.load,
					c = r.destroy,
					u = r.setStartDateTime,
					d = r.getSeekRange;

				function h(t) {
					var e = t.sources[0];
					if (!r.fairplay || !Object.is(r.fairplay.source, e)) {
						var i = e.drm;
						i && i.fairplay ? (r.fairplay = Object(n.j)({}, {
							certificateUrl: "",
							processSpcUrl: "",
							licenseResponseType: "arraybuffer",
							licenseRequestHeaders: [],
							licenseRequestMessage: function(t) {
								return t
							},
							licenseRequestFilter: function() {},
							licenseResponseFilter: function() {},
							extractContentId: function(t) {
								return t.split("skd://")[1]
							},
							extractKey: function(t) {
								return new Uint8Array(t)
							}
						}, i.fairplay), r.fairplay.source = e, r.fairplay.destroy = function() {
							W(r.video, "webkitneedkey", p);
							var t = this.session;
							t && (W(t, "webkitkeymessage", w), W(t, "webkitkeyerror", v))
						}, U(r.video, "webkitneedkey", p)) : r.fairplay && (r.fairplay.destroy(), r.fairplay = null)
					}
				}

				function p(t) {
					var e = t.target,
						i = t.initData;
					if (e.webkitKeys || e.webkitSetMediaKeys(new window.WebKitMediaKeys("com.apple.fps.1_0")), !e.webkitKeys) throw new Error("Could not create MediaKeys");
					var n = r.fairplay;
					n.initData = i, Object(_.b)(n.certificateUrl, (function(t) {
						var a = new Uint8Array(t.response),
							o = n.extractContentId(X(i));
						"string" == typeof o && (o = function(t) {
							for (var e = new ArrayBuffer(2 * t.length), i = new Uint16Array(e), n = 0, a = t.length; n < a; n++) i[n] = t.charCodeAt(n);
							return i
						}(o));
						var r = function(t, e, i) {
								var n = 0,
									a = new ArrayBuffer(t.byteLength + 4 + e.byteLength + 4 + i.byteLength),
									o = new DataView(a);
								new Uint8Array(a, n, t.byteLength).set(t), n += t.byteLength, o.setUint32(n, e.byteLength, !0), n += 4;
								var r = new Uint16Array(a, n, e.length);
								return r.set(e), n += r.byteLength, o.setUint32(n, i.byteLength, !0), n += 4, new Uint8Array(a, n, i.byteLength).set(i), new Uint8Array(a, 0, a.byteLength)
							}(i, o, a),
							s = e.webkitKeys.createSession("video/mp4", r);
						if (!s) throw new Error("Could not create key session");
						U(s, "webkitkeymessage", w), U(s, "webkitkeyerror", v), n.session = s
					}), b, {
						responseType: "arraybuffer"
					})
				}

				function w(t) {
					var e = r.fairplay,
						i = t.target,
						n = t.message,
						a = new XMLHttpRequest;
					a.responseType = e.licenseResponseType, a.addEventListener("load", g, !1), a.addEventListener("error", k, !1);
					var o = "";
					o = "function" == typeof e.processSpcUrl ? e.processSpcUrl(X(e.initData)) : e.processSpcUrl, a.open("POST", o, !0), a.body = e.licenseRequestMessage(n, i), a.headers = {}, [].concat(e.licenseRequestHeaders || []).forEach((function(t) {
						a.setRequestHeader(t.name, t.value)
					}));
					var s = e.licenseRequestFilter.call(t.target, a, e);
					s && "function" == typeof s.then ? s.then((function() {
						f(a)
					})) : f(a)
				}

				function f(t) {
					Object.keys(t.headers).forEach((function(e) {
						t.setRequestHeader(e, t.headers[e])
					})), t.send(t.body)
				}

				function g(t) {
					var e = r.fairplay,
						i = t.target,
						n = {};
					(i.getAllResponseHeaders() || "").trim().split(/[\r\n]+/).forEach((function(t) {
						var e = t.split(": "),
							i = e.shift();
						n[i] = e.join(": ")
					}));
					var a = {
							data: i.response,
							headers: n
						},
						o = e.licenseResponseFilter.call(t.target, a, e);
					o && "function" == typeof o.then ? o.then((function() {
						j(a.data)
					})) : j(a.data)
				}

				function j(t) {
					var e = r.fairplay.extractKey(t);
					"function" == typeof e.then ? e.then(m) : m(e)
				}

				function m(t) {
					var e = r.fairplay.session,
						i = t;
					"string" == typeof i && (i = function(t) {
						for (var e = Object(a.a)(t), i = e.length, n = new Uint8Array(new ArrayBuffer(i)), o = 0; o < i; o++) n[o] = e.charCodeAt(o);
						return n
					}(i)), e.update(i)
				}

				function b(t, e, i, n) {
					n.code += Y, n.key = y.o, r.trigger(o.H, n)
				}

				function v(t) {
					r.trigger(o.H, new y.q(y.o, Y + 650, t))
				}

				function k(t) {
					r.trigger(o.H, new y.q(y.o, Z + Object(S.a)(t.currentTarget.status), t))
				}
				this.processPlaylistMetadata = D.a, this.init = function(t) {
					h(t), s.call(this, t)
				}, this.load = function(t) {
					h(t), l.call(this, t)
				}, this.destroy = function(t) {
					this.fairplay && (this.fairplay.destroy(), this.fairplay = null), this.metaLoader && (this.metaLoader.destroy(), this.metaLoader = null), c.call(this, t)
				}, this.setStartDateTime = function(t) {
					var e = this,
						i = this.video;
					this.loadAndParseHlsMetadata && function(t) {
						if (!!!(V && t && t.getStartDate && F && F.getEntriesByType && F.clearResourceTimings && F.addEventListener)) return !1;
						var e = t.getStartDate(),
							i = e.getTime ? e.getTime() : NaN;
						return !isNaN(i)
					}(i) && (this.startDateTime = t, (this.metaLoader = new H(i, (function(n, a, o) {
						var r = n.fragments,
							s = (n.startProgramDateTime - t) / 1e3;
						r.forEach((function(t) {
							var n = t.start = t.startPTS = t.start + s;
							if (n >= a && n < o && t.tagList && (t.tagList.forEach((function(i) {
									var n = i[0],
										a = i[1];
									return e.processPlaylistMetadata(n, a, t)
								})), i.duration === 1 / 0 && i.buffered && i.buffered.start(0))) {
								var r = i.buffered.start(0),
									l = e._tracksById.nativemetadata;
								if (l && l.cues)
									for (var c = l.cues, u = 0; u < c.length && c[u].endTime < r; u++) l.removeCue(c[u])
							}
						}))
					}))).run(0));
					u.call(this, t)
				}, this.getSeekRange = function() {
					var t = this.metaLoader,
						e = d.call(this);
					return t && t.endTime !== e.end && t.run(e.end), e
				}
			};

		function U(t, e, i) {
			W(t, e, i), t.addEventListener(e, i, !1)
		}

		function W(t, e, i) {
			t && t.removeEventListener(e, i, !1)
		}

		function X(t) {
			var e = new Uint16Array(t.buffer);
			return String.fromCharCode.apply(null, e)
		}
		Object(n.j)(q.prototype, C.prototype), q.getName = C.getName;
		e.default = q;
		var Y = 225e3,
			Z = 226e3
	}])
]);