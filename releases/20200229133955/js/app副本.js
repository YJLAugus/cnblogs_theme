webpackJsonp([1], {
    "0Ixs": function(t, e) {},
    "2fYz": function(t, e) {},
    "4+Uy": function(t, e) {},
    "7xIN": function(t, e) {},
    "90eC": function(t, e) {},
    "991W": function(t, e) {},
    "9YwF": function(t, e) {},
    "9pPZ": function(t, e) {},
    BRL4: function(t, e) {},
    Bs7H: function(t, e) {},
    HFWz: function(t, e) {},
    ILeb: function(t, e) {},
    M7OF: function(t, e) {},
    NHnr: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("7+uW"),
            a = {
                render: function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [e("router-view")], 1)
                },
                staticRenderFns: []
            };
        var o = n("VU/8")({
                name: "App"
            }, a, !1, function(t) {
                n("eLY3")
            }, null, null).exports,
            s = n("/ocq"),
            c = n("woOf"),
            r = n.n(c),
            l = "https://cjunn.gitee.io/c_cnblog_vue",
            u = {
                openDev: !1,
                blogAcc: "cjunn",
                blogId: "571504",
                blogPostId: "12237892",
                blogName: "YJLAugus",
                blogUserGuid: "2476b4f3-9f13-4c75-389e-08d789d7fa8d",
                blogIndexPath: "https://www.cnblogs.com/yjlaugus",
                myGithub: "https://github.com/cjunn",
                manPage: "https://i.cnblogs.com/",
                sendPage: "https://msg.cnblogs.com/send/cjunn",
                subPage: "https://www.cnblogs.com/cjunn/rss",
                pageItemImgs: 35,
                pageBarImgs: 21,
                commentLength: 10,
                blogSign: "自惭多情污梵行，入山又恐误倾城。世间安得双全法，不负如来不负卿。",
                extendStylePath: l,
                ingTitle: "一念花开，一念花落。这山长水远的人世，终究是要自己走下去。",
                blogFriendList: [],
                musicIds: ["26568025", "26329928", "1340002509", "551337407", "28160369", "27548281", "34923851", "31421442", "29829683", "446247397", "32317208"],
                musicApiUrl: "https://api.i-meto.com/meting/api?server=netease&type=:type&id=:id&r=:r",
                qq: "592571519",
                email: "592571519@qq.com",
                github: "cjunn",
                blogUsedLinks: [],
                mainExtNav: [{
                    title: "音乐收藏",
                    url: "https://www.cjunn.xyz/musicplayer/index.html",
                    icon: "ic_addmusic"
                }, {
                    title: "在线壁纸",
                    url: "https://www.cjunn.xyz/wallpaper/",
                    icon: "paper"
                }, {
                    title: "博客动态",
                    url: "https://www.cnblogs.com/cjunn/",
                    icon: "comment1"
                }, {
                    title: "音乐律动",
                    url: "https://cjunn.gitee.io/mikutap/",
                    icon: "gift"
                }, {
                    title: "博主简历",
                    url: "https://www.cnblogs.com/cjunn/",
                    icon: "face2"
                }],
                avatarSign: " ↗↗点击头像关注我。",
                headBackImg: "https://cjunn.gitee.io/c_cnblog_vue/img/ing/autorbimg.jpg",
                bigBackImg: "https://cjunn.gitee.io/c_cnblog_vue/img/body/background.jpg",
                aboutmeHtml: " <img src='https://cjunn.gitee.io/c_cnblog_vue/img/ing/aboutme.jpg'/>",
                blogUrlPre: "https://www.cnblogs.com/"
            };
        let m = "";
        m += "AByz0r4wxs";
        m += "KLMCDEtuTUVWX12NOPQk";
        m += "lmnopqYZabcdef";
        m += "35RSJFGHIvgh";
        let d = function(t) {
            var e, n, i, a = "",
                o = 0;
            for (e = n = 0; o < t.length;)(e = t.charCodeAt(o)) < 128 ? (a += String.fromCharCode(e), o++) : e > 191 && e < 224 ? (n = t.charCodeAt(o + 1), a += String.fromCharCode((31 & e) << 6 | 63 & n), o += 2) : (n = t.charCodeAt(o + 1), i = t.charCodeAt(o + 2), a += String.fromCharCode((15 & e) << 12 | (63 & n) << 6 | 63 & i), o += 3);
            return a
        };
        m += "ij6789+/=";
        var p = t => (function(t) {
                var e, n, i, a, o, s, c = "",
                    r = 0;
                for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); r < t.length;) e = m.indexOf(t.charAt(r++)) << 2 | (a = m.indexOf(t.charAt(r++))) >> 4, n = (15 & a) << 4 | (o = m.indexOf(t.charAt(r++))) >> 2, i = (3 & o) << 6 | (s = m.indexOf(t.charAt(r++))), c += String.fromCharCode(e), 64 != o && (c += String.fromCharCode(n)), 64 != s && (c += String.fromCharCode(i));
                return c = d(c)
            })(t),
            f = window.__BLOG_CONFIG__ || {},
            h = {
                isForward: !1,
                baiduCount: p("OwuIQwM6LG9cPTjp2XZYkTjqPgISO4IRObM/2XViM4CqCq2GMUAj2UMI2HngD4soCaCpNUMIMHrqD4t="),
                extendApiPath: f.extendApiPath || "https://www.cjunn.xyz/cnblog-api"
            };
        window.__BLOG_CONFIG__ = window.__BLOG_CONFIG__ || {};
        var g = u;
        g = r()(u, h);
        var v = g = r()(g, window.__BLOG_CONFIG__),
            _ = function(t) {
                return v.extendStylePath + t
            },
            b = {
                name: "BlogName",
                created: function() {
                    this.$on("asideMenuPop", function(t) {})
                },
                methods: {
                    switchAsideMenuPop: function() {
                        this.$bus.emit("asideMenuPop", !0)
                    }
                },
                data: function() {
                    return {
                        blogName: v.blogName + ""
                    }
                }
            },
            w = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_name"
                        }
                    }, [n("span", {
                        staticClass: "author-icon icon iconfont menu",
                        on: {
                            click: function(e) {
                                return t.switchAsideMenuPop()
                            }
                        }
                    }), t._v(" "), t._m(0), t._v(" "), n("router-link", {
                        staticClass: "blog-name",
                        attrs: {
                            to: t.VUE_CTX + "/author",
                            tag: "span"
                        }
                    }, [t._v(t._s(t.blogName))])], 1)
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "home-icon"
                    }, [e("span", {
                        staticClass: "icon iconfont iconhome"
                    })])
                }]
            };
        var C = n("VU/8")(b, w, !1, function(t) {
                n("sZhR")
            }, null, null).exports,
            y = n("aFK5"),
            I = n.n(y),
            x = n("mvHQ"),
            A = n.n(x),
            k = n("//Fk"),
            T = n.n(k),
            L = n("7t+N"),
            B = n.n(L),
            N = n("c/Tr"),
            P = n.n(N),
            j = n("9GLr");
        var E = {},
            S = {
                getTextWidth: function(t, e) {
                    var n, i = document.createElement("span");
                    return i.innerText = t, i.className = "getTextWidth", i.style.fontSize = e + "px", document.querySelector("body").appendChild(i), n = document.querySelector(".getTextWidth").offsetWidth, document.querySelector(".getTextWidth").remove(), n
                },
                getNowTime: function() {
                    var t = new Date,
                        e = t.getFullYear(),
                        n = t.getMonth() + 1;
                    n = n < 10 ? "0" + n : n;
                    var i = t.getDate();
                    i = i < 10 ? "0" + i : i;
                    var a = t.getHours();
                    a = a < 10 ? "0" + a : a;
                    var o = t.getMinutes();
                    return e + "-" + n + "-" + i + " " + a + ":" + (o = o < 10 ? "0" + o : o)
                },
                showInfoMsg: function(t) {
                    j.a.toast({
                        text: t,
                        icon: "info",
                        hideAfter: 2e3,
                        position: "top-center",
                        loader: !1
                    })
                },
                showErrMsg: function(t) {
                    j.a.toast({
                        text: t,
                        icon: "error",
                        hideAfter: 2e3,
                        position: "top-center",
                        loader: !1
                    })
                },
                focusById: function(t) {},
                registerUnClick: function(t, e) {
                    E[t] && (Object(j.a)(document).unbind("click", E[t]), delete E[t]);
                    var n = function(n) {
                        0 == Object(j.a)(n.target).closest(t).length && e()
                    };
                    E[t] = n, Object(j.a)(document).bind("click", n)
                },
                domIsVisible: function(t) {
                    return Object(j.a)(t).is(":visible")
                },
                registerAnchorFunc: function(t) {
                    t.find("a[href]").each(function(t, e) {
                        var n, i;
                        n = Object(j.a)(e), i = n.attr("href"), n.click(function() {
                            var t = document.querySelector(i);
                            t && t.scrollIntoView({
                                behavior: "smooth"
                            })
                        }), n.attr("href", "javascript:void(0);")
                    })
                },
                fetchByIdFromObjArr: function(t, e, n) {
                    for (var i = 0, a = n.length; i < a; i++)
                        if (n[i][t] === e) return n[i]
                },
                arrayAppend: function(t, e) {
                    for (var n = 0, i = e.length; n < i; n++) t.push(e[n])
                },
                initBaiduCount: function() {
                    setTimeout(function() {
                        window._hmt = [],
                            function() {
                                var t = document.createElement("script");
                                t.src = v.baiduCount;
                                var e = document.getElementsByTagName("script")[0];
                                e.parentNode.insertBefore(t, e)
                            }()
                    }, 0)
                },
                pushBaiduCount: function(t) {
                    t && setTimeout(function() {
                        window._hmt.push(["_trackPageview", "/" + v.blogAcc + "/#" + t])
                    }, 0)
                },
                computePageList: function(t, e, n) {
                    if (t <= n) return P()(Array(t), function(t, e) {
                        return e + 1
                    });
                    if (e <= n / 2 + 1) {
                        var i = P()(Array(n), function(t, e) {
                            return e + 1
                        });
                        return i.push("..."), i.push(t), i
                    }
                    if (t - e <= n / 2 + 1) {
                        var a = P()(Array(n), function(e, i) {
                            return t - n + i + 1
                        });
                        return a.unshift("..."), a.unshift(1), a
                    }
                    var o = P()(Array(n), function(t, i) {
                        return e - n / 2 + i + 1
                    });
                    return o.unshift("..."), o.unshift(1), o.push("..."), o.push(t), o
                },
                groupBy: function(t, e) {
                    for (var n = {}, i = 0; i < t.length; i++) {
                        var a = t[i],
                            o = a[e] + "";
                        n[o] = n[o] || [], n[o].push(a)
                    }
                    return n
                },
                initPreCodeCopyBtn: function(t) {
                    var e = Object(j.a)(t);
                    if (!e.hasClass("initedCopyBtn")) {
                        e.addClass("initedCopyBtn");
                        var n = Object(j.a)("<span class='copyBtn icon iconfont copy'></span>");
                        n.click(function(t) {
                            ! function(t) {
                                var e = document.createElement("textarea");
                                document.body.appendChild(e), e.value = t, e.focus(), e.setSelectionRange ? e.setSelectionRange(0, e.value.length) : e.select();
                                document.execCommand("copy");
                                document.body.removeChild(e)
                            }(Object(j.a)(t.target).closest("pre").find("code").text()), S.showInfoMsg("复制成功!")
                        }), e.prepend(n)
                    }
                },
                insertUbbUrl: function(t) {
                    var e = "",
                        n = prompt("显示链接的文本.\n如果为空，那么将只显示超级链接地址", ""),
                        i = void 0;
                    return null != n && "" != (i = prompt("http:// 超级链接", "http://")) && "http://" != i && (e = "" != n ? "[url=" + i + "]" + n + "[/url]" : "[url]" + i + "[/url]"), e
                },
                insertUbbCode: function(t) {
                    try {
                        var e = (screen.width - 450) / 2,
                            n = (screen.height - 400) / 2,
                            i = void 0;
                        document.domain = "cnblogs." + location.hostname.substring(location.hostname.lastIndexOf(".") + 1, location.hostname.length), (i = window.open("/SyntaxHighlighter.htm", "_blank", "width=450,height=400,toolbars=0,resizable=1,left=" + e + ",top=" + n)).focus(), window.InsertCodeToEditor = function(e) {
                            t && t(e), i.close && i.close()
                        }
                    } catch (t) {
                        console.log(t), S.showErrMsg("启动代码上传失败")
                    }
                },
                OpenImageUploadWindow: function(t) {
                    try {
                        var e = Object(j.a)("#imgTmp");
                        0 == e.length && ((e = Object(j.a)("<textarea id='imgTmp'></textarea>")).focus(function() {
                            if ("" != e.val()) {
                                var n = e.val();
                                e.val(""), t && t(n.replace("[img]", "![](").replace("[/img]", ")"))
                            }
                        }), Object(j.a)("body").append(e)), e.val("");
                        var n = location.protocol + "//upload.cnblogs" + location.hostname.substring(location.hostname.lastIndexOf(".")) + "/imageuploader/upload?host=www.cnblogs.com&editor=0#imgTmp";
                        document.domain = "cnblogs." + location.hostname.substring(location.hostname.lastIndexOf(".") + 1, location.hostname.length),
                            function(t, e, n, i) {
                                var a = (screen.width - e) / 2 - i,
                                    o = (screen.height - n) / 2 - i;
                                window.open(t, "_blank", "width=" + e + ",height=" + n + ",toolbars=0,resizable=1,left=" + a + ",top=" + o).focus()
                            }(n, 450, 120, 200)
                    } catch (t) {
                        console.log(t), S.showErrMsg("启动图片上传失败")
                    }
                }
            },
            $ = S,
            U = v.isForward,
            M = {},
            F = function(t, e) {
                M[t] = {
                    data: e,
                    time: Date.parse(new Date)
                }
            },
            R = function(t, e) {
                return new T.a(function(n, i) {
                    B.a.ajax({
                        url: t,
                        dataType: "jsonp",
                        data: e,
                        complete: function(a, o) {
                            if ("success" != o) console.log("转发URL[" + t + "]失败状态为:" + o), i();
                            else {
                                var s = a.responseJSON;
                                s && void 0 !== s.data ? n(s.data) : (console.log("转发URL[" + t + "]失败"), console.log(t), console.log(e), i())
                            }
                        }
                    })
                })
            },
            O = function(t) {
                return R(v.extendApiPath + "/forwardGet.php", {
                    url: t
                })
            },
            V = function(t) {
                return e = t, new T.a(function(t, n) {
                    B.a.ajax({
                        url: e,
                        complete: function(e, i) {
                            "success" != i && "parsererror" != i ? n() : t(e.responseJSON || e.responseText)
                        }
                    })
                });
                var e
            },
            q = function(t, e) {
                return function(t, e) {
                    return new T.a(function(n, i) {
                        B.a.ajax({
                            url: t,
                            type: "post",
                            data: A()(e),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            timeout: 1e4,
                            success: function(t) {
                                n(t)
                            },
                            error: function(t) {
                                n(t.responseText)
                            }
                        })
                    })
                }(t, e)
            },
            D = function(t) {
                return U ? O(t) : V(t)
            },
            H = function(t, e) {
                return U ? function(t, e) {
                    var n = {};
                    for (var i in n.url = t, e) {
                        var a = e[i];
                        if ("number" == typeof a) i = "i_" + i;
                        else {
                            if ("string" != typeof a) continue;
                            i = "s_" + i
                        }
                        n[i] = a
                    }
                    return R(v.extendApiPath + "/forwardPost.php", n)
                }(t, e) : q(t, e)
            },
            W = function(t) {
                return "<div>" + (t = (t = (t = (t = (t = (t = t.replace(/<link.*?(\/)*?>/gi, "")).replace(/<style[\s\S]*?<\/style>/gi, "")).replace(/<head[\s\S]*?<\/head>/gi, "")).replace(/<script/gi, "<cjunscript")).replace(/<\/script>/gi, "</cjunscript>")).replace(/src=/g, "_src=")) + "</div>"
            },
            z = function(t, e, n) {
                return new T.a(function(i, a) {
                    var o, s = M[o = e] && Date.parse(new Date) - M[o].time < 3e3 ? M[o].data : null;
                    s ? i(n(s)) : t(e).then(function(t) {
                        if (n) try {
                            var o = W(t);
                            F(e, o), i(n(o))
                        } catch (t) {
                            console.log(t), a()
                        } else {
                            var s = W(t);
                            F(e, s), i(s)
                        }
                    }).catch(function() {
                        a()
                    })
                })
            },
            G = function(t, e) {
                return new z(D, t, e)
            },
            X = function(t, e, n) {
                return new function(t, e, n, i) {
                    return new T.a(function(a, o) {
                        t(e, n).then(function(t) {
                            if (i) try {
                                a(i(t))
                            } catch (t) {
                                console.log(t), o()
                            } else a(t)
                        }).catch(function() {
                            o()
                        })
                    })
                }(H, t, e, n)
            },
            Q = function(t, e) {
                return new z(O, t, e)
            },
            J = function(t) {
                var e = t.split("/");
                return e[e.length - 1].replace(".html", "")
            },
            Y = function(t) {
                var e = t.split("/");
                return e[e.length - 2]
            },
            Z = function(t) {
                var e = [];
                (t = B()(t)).find("#searchResult .searchItem").each(function(t, n) {
                    var i = B()(n).find(".searchItemTitle"),
                        a = i.find("a").attr("href");
                    i.find("a").attr("href", "javascript:void(0)"), e.push({
                        title: i.html().trim(),
                        content: B()(n).find(".searchCon").html().trim(),
                        sign: B()(n).find(".searchItemInfo").eq(0).html().trim(),
                        url: a,
                        pageId: J(a)
                    })
                });
                var n = t.find(".pager a"),
                    i = 0;
                if (n.length > 0) {
                    var a = n[n.length - 2];
                    i = parseInt(B()(a).html().trim())
                }
                return t.empty(), t.remove(), {
                    cnList: e,
                    cnTotal: i
                }
            },
            K = function(t) {
                var e = [];
                return (t = B()(t)).find("#sidebar_postcategory a").each(function(t, n) {
                    var i = B()(n).attr("href").trim(),
                        a = J(i),
                        o = B()(n).html().trim().split("("),
                        s = o[0].trim(),
                        c = o[1] ? parseInt(o[1].trim()) : 0;
                    e.push({
                        name: s,
                        num: c,
                        id: a
                    })
                }), t.empty(), t.remove(), e
            },
            tt = function(t) {
                return function(t, e) {
                    var n = [];
                    return (t = B()(t)).find("#" + e).find("li a").each(function(t, e) {
                        var i = J((B()(e).attr("href") || "").trim()),
                            a = B()(e).html().trim().replace(/\d+\.?/, "").trim(),
                            o = a.split("(");
                        a = o[0].trim();
                        var s = parseInt(o[1].replace(")", "").trim());
                        n.push({
                            name: a,
                            pageId: i,
                            num: s
                        })
                    }), t.empty(), t.remove(), n
                }(t, "TopViewPostsBlock")
            },
            et = function(t) {
                var e = B()(t),
                    n = [];
                return e.find("#sidebar_postarchive").find("a").each(function(t, e) {
                    var i = B()(e).attr("href").split("/");
                    n.push({
                        id: i[i.length - 2] + "-" + i[i.length - 1].replace(".html", ""),
                        name: B()(e).html().trim()
                    })
                }), e.empty(), e.remove(), n
            },
            nt = function(t) {
                var e = [],
                    n = (t = B()(t)).find("#sidebar_recentcomments"),
                    i = n.find(".recent_comment_title"),
                    a = n.find(".recent_comment_body"),
                    o = n.find(".recent_comment_author");
                return i.each(function(t, n) {
                    var s = B()(i[t]),
                        c = B()(a[t]),
                        r = B()(o[t]),
                        l = s.find("a"),
                        u = l.attr("href").split("#"),
                        m = J((u[0] || "").trim()),
                        d = u[1].trim();
                    e.push({
                        title: l.html().replace(/^\d+./, "").trim(),
                        body: c.html().trim(),
                        owner: r.html().trim(),
                        pageId: m,
                        anchor: d
                    })
                }), t.empty(), t.remove(), e
            },
            it = function(t) {
                if (t) {
                    var e = {};
                    t = (t = t.replace("\x3c!--done--\x3e", "")).replace('<h3 class="catListTitle">公告</h3>', "");
                    var n = B()(t),
                        i = n.find("#profile_block");
                    return i.length > 0 && (e.username = i.find("a:eq(0)").html().trim(), e.age = i.find("a:eq(1)").html().trim(), e.follow = i.find("a:eq(2)").html().trim(), e.focus = i.find("a:eq(3)").html().trim()), n.empty(), n.remove(), e
                }
            },
            at = function(t) {
                var e = B()(t),
                    n = {};
                return n.list = [], n.pageList = [], n.categoryName = (e.find(".PostListTitle").html() || "").replace("当前", "随笔").replace("：", " - ").trim(), e.find("#myposts .PostList").each(function(t, e) {
                    var i = {},
                        a = B()(e).find(".postTitl2"),
                        o = B()(e).find(".postDesc2");
                    i.title = a.find("a").html().trim(), i.pageId = J(a.find("a").attr("href"));
                    var s = o.html().trim().split(/[\s\n]/);
                    i.author = s[0], i.time = s[1] + " " + s[2], i.readNum = s[3].replace("阅读:", ""), i.commentNum = s[4].replace("评论:", ""), n.list.push(i)
                }), e.empty(), e.remove(), n
            },
            ot = function(t) {
                t = t.replace(/···/g, "<a href='/···'>···</a>");
                var e = [],
                    n = -1,
                    i = [],
                    a = B()(t);
                return a.find(".feed_block .ing-item .feed_body").each(function(t, n) {
                    e.push({
                        content: B()(n).find(".ing_body").html().trim(),
                        time: B()(n).find(".ing_time").html().trim(),
                        count: 999,
                        from: "博客园",
                        author: v.blogName
                    })
                }), a.find(".block_arrow .pager").find(">*").each(function(t, e) {
                    if ((e = B()(e)).hasClass("current")) n = e.html().trim(), i.push({
                        id: n,
                        text: n
                    });
                    else {
                        var a = e.attr("href").split("/").reverse(),
                            o = (e.html() || "").trim().replace(" &gt;", "").replace("&lt; ", "");
                        "Next" != o && "Prev" != o && i.push({
                            id: a[0],
                            text: o
                        })
                    }
                }), a.empty(), a.remove(), {
                    cnList: e,
                    current: n,
                    pageList: i
                }
            },
            st = function(t) {
                var e = B()(t),
                    n = e.find("#stats_post_count").html().replace("-", "").replace("随笔", "").replace("&nbsp;", "").trim(),
                    i = e.find("#stats-comment_count").html().replace("-", "").replace("评论", "").trim();
                return e.empty(), e.remove(), {
                    pageNum: n,
                    commentNum: i
                }
            },
            ct = function(t) {
                var e = B()(t.replace(/[\r\n]/g, "")),
                    n = e.find("#main .forFlow"),
                    i = n.find(".postTitle"),
                    a = n.find(".postCon"),
                    o = n.find(".postDesc"),
                    s = {},
                    c = [],
                    r = [];
                s.list = c, s.pageList = r, i.each(function(t, e) {
                    var n = {},
                        s = i[t],
                        r = a[t],
                        l = o[t];
                    n.title = B()(s).find("a").html().trim(), n.pageId = J(B()(s).find("a").attr("href"));
                    var u = B()(r).find("div");
                    u.find("a").remove(), n.content = u.text(), n.img = u.find("img").attr("_src");
                    var m = B()(l).html().split("阅读"),
                        d = m[0],
                        p = m[1];
                    n.time = d.match(/\d+-\d+-\d+ \d+:\d+/)[0];
                    var f = p.match(/(\(\d+?\))/g);
                    n.readNum = f[0].replace("(", "").replace(")", ""), n.commentNum = f[1].replace("(", "").replace(")", ""), c.push(n)
                });
                var l = n.find("#nav_next_page a"),
                    u = n.find("#homepage_bottom_pager .pager");
                if (l.length > 0) r.push({
                    text: l.html().trim(),
                    num: l.attr("href").match(/(\d+)[^0-9]*$/)[1],
                    current: !1
                });
                else if (u.length > 0) {
                    var m = function(t, e) {
                        var n = {
                            text: e.html().trim(),
                            num: e.attr("href").match(/(\d+)[^0-9]*$/)[1],
                            current: !1
                        };
                        n.text && t.push(n)
                    };
                    u.html().replace(/ /g, "").split("</a>").forEach(function(t, e) {
                        if (t)
                            if (t.startsWith("<ahref")) {
                                var n = B()(t.replace("<ahref", "<a href") + "</a>");
                                m(r, n), n.remove()
                            } else {
                                var i = t.split("<ahref");
                                if (r.push({
                                        text: i[0],
                                        num: i[0],
                                        current: !isNaN(i[0])
                                    }), i[1]) {
                                    var a = B()("<a href" + i[1] + "</a>");
                                    m(r, a), a.remove()
                                }
                            }
                    })
                }
                return r.length > 1 && r.forEach(function(t, e) {
                    "上一页" == t.text ? t.text = "<" : "下一页" == t.text && (t.text = ">")
                }), e.empty(), e.remove(), s
            },
            rt = function(t) {
                var e = {},
                    n = B()(t),
                    i = n.find(".forFlow .entrylist"),
                    a = i.find(".entrylistTitle").html().trim();
                return e.categoryName = a, e.list = [], e.pageList = [], i.find(".entrylistItem").each(function(t, n) {
                    var i = B()(n).find(".entrylistItemTitle"),
                        a = J(i.attr("href")),
                        o = i.html().trim(),
                        s = B()(n).find(".entrylistPostSummary");
                    s.find("a").remove();
                    var c = s.children().html().trim(),
                        r = B()(n).find(".entrylistItemPostDesc").text().replace(/  /g, ""),
                        l = r.match(/\d+-\d+-\d+ \d+:\d+/)[0],
                        u = (r = r.replace(l, "").replace("编辑", "")).split(" ");
                    e.list.push({
                        pageId: a,
                        title: o,
                        content: c,
                        time: l,
                        author: u[2].trim(),
                        readNum: u[4].trim(),
                        commentNum: u[7].trim()
                    })
                }), n.empty(), n.remove(), e
            },
            lt = function(t) {
                var e = [],
                    n = B()(t);
                e.title = n.find("#cb_post_title_url").html().trim(), e.body = n.find(".postBody").prop("outerHTML").trim().replace(new RegExp("_src", "g"), "src"), e.fontNum = n.find(".postBody").text().length;
                var i = n.find(".postDesc");
                return e.time = i.find("#post-date").html().trim(), e.mdUrl = i.find("a:contains('MD')").attr("href"), e.editUrl = i.find("a:contains('编辑')").attr("href"), e.addToWzId = i.find("a:contains('收藏')").attr("onclick").replace("AddToWz(", "").replace(")", ""), n.empty(), n.remove(), e
            },
            ut = function(t) {
                var e = B()(t),
                    n = {};
                return n.fucus = "关注我" == (e.find("#green_channel_follow").html() || "").trim(), n.digg = "好文要顶" == (e.find("#green_channel_digg").html() || "").trim(), e.empty(), e.remove(), n
            },
            mt = function(t) {
                return t.replace("<div>", "").replace("</div>", "").trim()
            },
            dt = function(t) {
                var e = {},
                    n = [],
                    i = B()(t);
                return e.current = (i.find(".current").html() || "").trim(), e.list = n, i.find(".feedbackItem").each(function(t, e) {
                    var i, a = B()(e),
                        o = a.find("[onclick^='return Reply']").length > 0,
                        s = a.find("[onclick^='return Quote']").length > 0,
                        c = a.find("[onclick^='return Del']").length > 0,
                        r = a.find("[onclick^='return Get']").length > 0,
                        l = (a.find("[id$='_avatar']").html() || "").trim(),
                        u = a.find(".layer").prop("outerHTML"),
                        m = a.find("[id^='comment_anchor']").prop("outerHTML"),
                        d = a.find(".comment_date").html().trim(),
                        p = a.find("[id^=a_comment_author_]").html(),
                        f = a.find("[id^=a_comment_author_]").attr("href"),
                        h = f.split("/").reverse()[1],
                        g = a.find(".blog_comment_body").html().trim(),
                        v = a.find(".comment_vote"),
                        b = v.find("a").attr("onclick"),
                        w = void 0,
                        C = /voteComment\((\d*),/.exec(b);
                    C && (w = C[1].trim());
                    var y = B()(m);
                    i = (y.attr("name") || "").trim(), y.remove();
                    var I = u + m + "<input id='__anchor" + w + "' style='width:0px'/>",
                        x = v.find("a").eq(0).html().trim().replace("(", "").replace(")", "").replace("支持", ""),
                        A = v.find("a").eq(1).html().trim().replace("(", "").replace(")", "").replace("反对", "");
                    l || (l = _("/img/body/defAvatar.jpg")), n.push({
                        isReply: o,
                        isQuote: s,
                        isDel: c,
                        isUpdate: r,
                        layerAnchor: I,
                        time: d,
                        commenter: p,
                        commenterUrl: f,
                        commentBody: g,
                        commentId: w,
                        support: x,
                        oppose: A,
                        commenterId: h,
                        avatar: l,
                        commenterAnchor: i
                    })
                }), i.empty(), i.remove(), e
            },
            pt = function(t) {
                var e = {},
                    n = B()(t),
                    i = n.find(".user_avatar img").attr("_src");
                return e.headUrl = i, n.empty(), n.remove(), e
            },
            ft = function(t) {
                var e = {},
                    n = void 0;
                n = "string" == typeof t ? JSON.parse(t) : t, e.isSuccess = n.isSuccess, e.duration = n.duration;
                var i = B()(W(n.message));
                return e.commentBody = i.find(".bq_post_comment").prop("outerHTML").trim(), e.layerAnchor = i.find("a").prop("outerHTML").trim(), e.commenterId = i.find("a").attr("href").split("/").reverse()[1], e.commenter = i.find("a b").html().trim(), e.support = 0, e.oppose = 0, i.empty(), i.remove(), e
            },
            ht = function(t) {
                return "string" == typeof t ? JSON.parse(t) : t
            },
            gt = function(t) {
                return "string" == typeof t ? JSON.parse(t) : t
            },
            vt = function(t) {
                return t
            },
            _t = function(t) {
                return t
            },
            bt = function(t) {
                return "string" == typeof t ? JSON.parse(t) : t
            },
            wt = function(t) {
                return rt(t)
            },
            Ct = function(t) {
                var e = {},
                    n = B()(t),
                    i = n.find("a:contains(«)");
                i.length > 0 && (e.prePageId = J(i.attr("href")), e.preTitle = (i.next().html() || "").trim());
                var a = n.find("a:contains(»)");
                return a.length > 0 && (e.posPageId = J(a.attr("href")), e.posTitle = (a.next().html() || "").trim()), n.empty(), n.remove(), e
            },
            yt = function(t) {
                var e = B()(t),
                    n = "",
                    i = e.find(".author_avatar");
                return n = i.length > 0 ? i.attr("_src").trim() : "", e.empty(), e.remove(), n.replace("face", "avatar")
            },
            It = function(t) {
                var e = [],
                    n = B()(t);
                return n.find("#taglist td").each(function(t, n) {
                    var i = B()(n).find("a"),
                        a = B()(n).find("span");
                    i.length > 0 && a.length > 0 && e.push({
                        name: i.html().trim(),
                        id: Y(i.attr("href")),
                        num: a.html().trim().replace(")", "").replace("(", "")
                    })
                }), n.empty(), n.remove(), e
            },
            xt = function(t) {
                var e = B()(t),
                    n = [],
                    i = [],
                    a = {
                        current: -1
                    };
                return a.pageList = i, e.find(".avatar_list li a[title]").each(function(t, e) {
                    var i = B()(e),
                        a = (i.attr("href") || "").split("/").reverse()[0],
                        o = (i.find(".avatar_name").html() || "").trim(),
                        s = i.find(".avatar_pic img").attr("_src");
                    n.push({
                        account: a,
                        username: o,
                        avatar: s
                    })
                }), e.find(".pager >*").each(function(t, e) {
                    var n = B()(e),
                        o = (n.html() || "").trim(); - 1 == o.indexOf("&gt") && -1 == o.indexOf("&lt") && (i.push(o), n.hasClass("current") && (a.current = o))
                }), e.empty(), e.remove(), {
                    followList: n,
                    pageInfo: a
                }
            },
            At = function(t) {
                var e = [],
                    n = B()(t);
                return n.find("#BlogPostCategory a").each(function(t, n) {
                    var i = B()(n);
                    e.push({
                        id: J(i.attr("href")),
                        text: i.html()
                    })
                }), n.empty(), n.remove(), e
            },
            kt = {
                loadMusicSongExt: function() {
                    return new T.a(function(t, e) {
                        var n = [];
                        v.musicIds.forEach(function(t) {
                            n.push(new T.a(function(e, n) {
                                kt.loadMusicSong(t).then(function(t) {
                                    e(t)
                                })
                            }))
                        }), T.a.all(n).then(function(e) {
                            t(e)
                        })
                    })
                },
                loadMusicPlayListExt: function() {
                    return new T.a(function(t, e) {
                        kt.loadMusicPlayList(v.musicIds).then(function(e) {
                            t(e)
                        })
                    })
                },
                loadMusicSong: function(t) {
                    return new T.a(function(e, n) {
                        B.a.get(v.musicApiUrl.replace(":type", "song").replace(":id", t).replace(":r", Math.random()), function(t) {
                            e(JSON.parse(t))
                        })
                    })
                },
                loadMusicPlayList: function(t) {
                    return new T.a(function(e, n) {
                        B.a.get(v.musicApiUrl.replace(":type", "playlist").replace(":id", t).replace(":r", Math.random()), function(t) {
                            e(JSON.parse(t))
                        })
                    })
                },
                loadMusicList: function() {
                    var t = void 0;
                    return t = Array.isArray(v.musicIds) ? kt.loadMusicSongExt() : kt.loadMusicPlayListExt(), new T.a(function(e, n) {
                        t.then(function(t) {
                            e(function(t) {
                                var e = [];
                                return t.forEach(function(t) {
                                    t = t[0] || t, e.push({
                                        cover: t.cover,
                                        author: t.artist,
                                        name: t.name,
                                        url: t.url,
                                        lrc: t.lrc
                                    })
                                }), e
                            }(t))
                        })
                    })
                },
                loadBlogSearch: function(t) {
                    return Q("https://zzk.cnblogs.com/s/blogpost?w=" + encodeURI("blog:" + v.blogAcc + " " + t), Z)
                },
                loadArticleClassify: function() {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/ajax/sidecolumn.aspx", K)
                },
                loadHotArticle: function() {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/ajax/TopLists.aspx", tt)
                },
                loadArticleArchives: function() {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/ajax/sidecolumn.aspx", et)
                },
                loadLastComment: function() {
                    return new T.a(function(t, e) {
                        G("https://www.cnblogs.com/" + v.blogAcc + "/ajax/sidecolumn.aspx", nt).then(function(e) {
                            0 == e.length && t([]);
                            var n = $.groupBy(e, "owner"),
                                i = [];
                            I()(n).forEach(function(t) {
                                var e = n[t][0];
                                i.push(new T.a(function(t, n) {
                                    kt.loadArticleComment(e.pageId, 0, e.anchor).then(function(n) {
                                        t({
                                            avatar: function(t, e) {
                                                for (var n = 0; n < t.length; n++)
                                                    if (t[n].commenterAnchor == e) return t[n].avatar
                                            }(n.list, e.anchor),
                                            owner: e.owner
                                        })
                                    })
                                }))
                            }), T.a.all(i).then(function(n) {
                                n.forEach(function(t) {
                                    e.forEach(function(e) {
                                        t.owner == e.owner && (e.avatar = t.avatar)
                                    })
                                }), t(e)
                            })
                        })
                    })
                },
                loadAuthorBlogInfo: function() {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/ajax/news.aspx", it)
                },
                loadAuthorHeadImg: function() {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/ajax/BlogPostInfo.aspx?blogId=" + v.blogId + "&postId=" + v.blogPostId + "&blogUserGuid=" + v.blogUserGuid, yt)
                },
                loadCloudLabel: function() {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/tag/", It)
                },
                loadBlogTalk: function(t) {
                    return Q("https://ing.cnblogs.com/u/" + v.blogAcc + "/" + t, ot)
                },
                loadArticleNum: function() {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/tag/", st)
                },
                loadAllArticle: function(t) {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/default.html?page=" + t, ct)
                },
                loadTagArticle: function(t, e) {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/tag/" + t + "/?page=" + e, at)
                },
                loadCategoryArticle: function(t, e) {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/category/" + t + ".html?page=" + e, rt)
                },
                loadArchivesArticle: function(t, e) {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/archive/" + t + ".html?page=" + e, wt)
                },
                loadArticle: function(t) {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/p/" + t + ".html", lt)
                },
                loadBlogPostInfo: function(t) {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/ajax/BlogPostInfo.aspx?blogId=" + v.blogId + "&postId=" + t + "&blogUserGuid=" + v.blogUserGuid, ut)
                },
                loadCommentCount: function(t) {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/ajax/GetCommentCount.aspx?postId=" + t, mt)
                },
                loadViewCount: function(t) {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/ajax/GetViewCount.aspx?postId=" + t, mt)
                },
                loadArticleComment: function(t, e, n) {
                    var i = "https://www.cnblogs.com/" + v.blogAcc + "/ajax/GetComments.aspx?postId=" + t + "&pageIndex=" + e;
                    return n && (i = i + "&anchorCommentId=" + n), G(i, dt)
                },
                loadArticleCommentInfoByAnchor: function(t, e) {
                    var n = 50 / v.commentLength;
                    return new T.a(function(i, a) {
                        T.a.all([kt.loadCommentCount(t), kt.loadArticleComment(t, 0, e)]).then(function(t) {
                            var a = t[0],
                                o = t[1];
                            if (a > v.commentLength) {
                                var s = function(t, e) {
                                        for (var n = 0; n < t.length; n++)
                                            if (t[n].commenterAnchor == e) return n
                                    }(o.list, e),
                                    c = (o.current - 1) * n + Math.ceil(s / (v.commentLength - 1)),
                                    r = (c - 1) % n * v.commentLength,
                                    l = r + v.commentLength,
                                    u = o.list.slice(r, l),
                                    m = Math.ceil(a / v.commentLength);
                                i({
                                    size: m,
                                    current: c,
                                    list: u
                                })
                            } else i({
                                size: 1,
                                current: 1,
                                list: o.list
                            })
                        })
                    })
                },
                loadArticelCommentInfo: function(t, e) {
                    return new T.a(function(n, i) {
                        kt.loadCommentCount(t).then(function(i) {
                            var a = Math.ceil(i / v.commentLength);
                            e = -1 == e ? a : e;
                            var o = 50 / v.commentLength,
                                s = Math.ceil(e / o),
                                c = (e - 1) % o * v.commentLength,
                                r = c + v.commentLength;
                            kt.loadArticleComment(t, s).then(function(t) {
                                if (i > v.commentLength) {
                                    var o = a,
                                        s = e,
                                        l = t.list.slice(c, r).reverse();
                                    n({
                                        size: o,
                                        current: s,
                                        list: l
                                    })
                                } else n({
                                    size: 1,
                                    current: 1,
                                    list: t.list.reverse()
                                })
                            })
                        })
                    })
                },
                loadUserInfo: function(t) {
                    return G("https://home.cnblogs.com/u/" + t + "/", pt)
                },
                addComment: function(t, e, n) {
                    return e = e || 0, X("https://www.cnblogs.com/" + v.blogAcc + "/ajax/PostComment/Add.aspx", {
                        postId: parseInt(t),
                        body: n,
                        parentCommentId: parseInt(e)
                    }, ft)
                },
                commentOperator: function(t, e, n) {
                    return X("https://www.cnblogs.com/" + v.blogAcc + "/ajax/vote/comment", {
                        commentId: parseInt(t),
                        isAbandoned: !1,
                        voteType: e
                    }, n)
                },
                commentDigg: function(t) {
                    return kt.commentOperator(t, "Digg", ht)
                },
                commentBury: function(t) {
                    return kt.commentOperator(t, "Bury", ht)
                },
                blogpost: function(t) {
                    return X("https://www.cnblogs.com/" + v.blogAcc + "/ajax/vote/blogpost", {
                        postId: parseInt(t),
                        isAbandoned: !1,
                        voteType: "Digg"
                    }, gt)
                },
                blogFollow: function() {
                    return X("https://www.cnblogs.com/" + v.blogAcc + "/ajax/Follow/FollowBlogger.aspx", {
                        blogUserGuid: v.blogUserGuid
                    }, vt)
                },
                loadCommentBody: function(t) {
                    return X("https://www.cnblogs.com/" + v.blogAcc + "/ajax/comment/GetCommentBody.aspx", {
                        commentId: parseInt(t)
                    }, _t)
                },
                updateComment: function(t, e) {
                    return X("https://www.cnblogs.com/" + v.blogAcc + "/ajax/PostComment/Update.aspx", {
                        commentId: parseInt(t),
                        body: e
                    }, bt)
                },
                addToWz: function(t) {
                    return window.AddToWz(t)
                },
                shareToTsina: function() {
                    return window.ShareToTsina ? window.ShareToTsina() : ""
                },
                shareOnWechat: function() {
                    return window.shareOnWechat ? window.shareOnWechat() : ""
                },
                loadPrevnext: function(t) {
                    return G("https://www.cnblogs.com/" + v.blogAcc + "/ajax/post/prevnext?postId=" + t, Ct)
                },
                loadUserName: function() {
                    return new T.a(function(t, e) {
                        t({
                            username: ""
                        })
                    })
                },
                loadFollowers: function(t) {
                    var e = "https://home.cnblogs.com/u/" + v.blogAcc + "/relation/followers/";
                    return t && t > 1 && (e += "?page=" + t), Q(e, xt)
                },
                loadCategoriesTags: function(t) {
                    var e = "https://www.cnblogs.com/" + v.blogAcc + "/ajax/CategoriesTags.aspx?blogId=" + v.blogId + "&postId=" + t;
                    return G(e, At)
                }
            },
            Tt = kt,
            Lt = {
                name: "BlogSearch",
                created: function() {
                    var t = this;
                    $.registerUnClick("#blog_search", function() {
                        t.isDialog = !1
                    })
                },
                methods: {
                    inputKeyword: function(t) {
                        var e = this;
                        this.isLoading = !0, Tt.loadBlogSearch(this.keyword).then(function(t) {
                            e.isLoading = !1, t.cnList.length > 0 ? e.list = t.cnList : e.list = e.defList, e.isDialog = !0
                        })
                    }
                },
                data: function() {
                    return {
                        isLoading: !1,
                        keyword: "",
                        isDialog: !1,
                        defList: [{
                            url: "",
                            title: "",
                            content: "查无数据"
                        }],
                        list: [{
                            url: "",
                            title: "",
                            content: "查无数据"
                        }]
                    }
                }
            },
            Bt = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_search"
                        }
                    }, [n("div", {
                        staticClass: "search-input-wrap"
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.keyword,
                            expression: "keyword"
                        }],
                        staticClass: "input-wrap",
                        attrs: {
                            type: "text",
                            placeholder: "输入关键字查询..."
                        },
                        domProps: {
                            value: t.keyword
                        },
                        on: {
                            input: [function(e) {
                                e.target.composing || (t.keyword = e.target.value)
                            }, t.inputKeyword],
                            propertychange: t.inputKeyword,
                            click: function(e) {
                                t.isDialog = !0
                            }
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "input-icon"
                    }, [n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isLoading,
                            expression: "!isLoading"
                        }],
                        staticClass: "icon iconfont -search"
                    }), t._v(" "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isLoading,
                            expression: "isLoading"
                        }],
                        staticClass: "loading-clz"
                    }, [t._m(0)])])]), t._v(" "), n("div", {
                        staticClass: "search-dialog-wrap small-base-scroll ",
                        class: {
                            "search-dialog-show": t.isDialog, "search-dialog-hide": !t.isDialog
                        }
                    }, t._l(t.list, function(e) {
                        return n("div", {
                            staticClass: "search-item"
                        }, [e.pageId ? n("router-link", {
                            attrs: {
                                to: t.VUE_CTX + "/works/article/" + e.pageId,
                                tag: "div"
                            }
                        }, [n("div", {
                            staticClass: "search-title ellipsis-title",
                            domProps: {
                                innerHTML: t._s(e.title)
                            }
                        }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                            staticClass: "search-content ellipsis-content",
                            domProps: {
                                innerHTML: t._s(e.content)
                            }
                        }, [t._v(t._s(e.content))])]) : t._e(), t._v(" "), e.pageId ? t._e() : n("div", [n("div", {
                            staticClass: "search-title ellipsis-title",
                            domProps: {
                                innerHTML: t._s(e.title)
                            }
                        }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                            staticClass: "search-content ellipsis-content",
                            domProps: {
                                innerHTML: t._s(e.content)
                            }
                        }, [t._v(t._s(e.content))])])], 1)
                    }), 0)])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "load5"
                    }, [e("div", {
                        staticClass: "loader"
                    }, [this._v("Loading...")])])
                }]
            };
        var Nt = n("VU/8")(Lt, Bt, !1, function(t) {
                n("iAH+")
            }, null, null).exports,
            Pt = {
                name: "BlogMusic",
                created: function() {
                    var t = this,
                        e = this;
                    this.audio.ontimeupdate = this.musicUpdate, this.audio.onerror = this.musicError, this.audio.oncanplay = this.musicCanplay, this.audio.onended = this.musicEnded, Tt.loadMusicList().then(function(e) {
                        t.musicList = e, e.length > 0 && t.musicSetInfo(e[0], -1)
                    }), Tt.loadBlogTalk(1).then(function(t) {
                        t && (e.feelList = t.cnList.slice(0, 3))
                    }), Tt.loadUserName().then(function(t) {
                        e.username = t.username
                    }), $.registerUnClick("#blog_music", function() {
                        e.musicDialog = !1, e.feelDialog = !1
                    })
                },
                methods: {
                    openUser: function() {
                        window.open(v.manPage)
                    },
                    musicEnded: function(t) {
                        $.showInfoMsg("播放结束,自动切换下一首"), this.musicPlayPos()
                    },
                    musicUpdate: function(t) {
                        this.barWidth = (this.audio.currentTime / this.audio.duration * this.barMaxWidth).toFixed(0)
                    },
                    musicError: function(t) {
                        $.showInfoMsg("播放失败,自动切换下一首"), this.musicPlayPos()
                    },
                    musicCanplay: function(t) {},
                    musicSetInfo: function(t, e) {
                        this.playing.index = e, this.playing.img = t.cover, this.playing.name = t.name + "[" + t.author + "]";
                        var n = $.getTextWidth(this.playing.name, this.fontSize);
                        n > this.maxTitleWidth ? this.titleWidth = n : this.titleWidth = this.maxTitleWidth
                    },
                    musicPlay: function(t, e) {
                        this.audio.src = t.url, this.audio.play(), this.playing.url = t.url, this.musicSetInfo(t, e), this.isPlay = !0
                    },
                    musicState: function() {
                        this.playing.url ? (this.isPlay = !this.isPlay, this.isPlay ? this.audio.play() : this.audio.pause()) : this.musicPlayPos()
                    },
                    musicPlayPre: function() {
                        var t = void 0,
                            e = void 0;
                        0 == this.playing.index ? (e = this.musicList - 1, t = this.musicList[e]) : (e = this.playing.index - 1, t = this.musicList[e]), this.musicPlay(t, e)
                    },
                    musicPlayPos: function() {
                        var t = void 0,
                            e = void 0;
                        this.playing.index == this.musicList.length - 1 ? (e = 0, t = this.musicList[e]) : (e = this.playing.index + 1, t = this.musicList[e]), this.musicPlay(t, e)
                    }
                },
                watch: {
                    musicDialog: function(t, e) {
                        t && (this.feelDialog = !1)
                    },
                    feelDialog: function(t, e) {
                        t && (this.musicDialog = !1)
                    }
                },
                data: function() {
                    return {
                        audio: new Audio,
                        musicDialog: !1,
                        feelDialog: !1,
                        isPlay: !1,
                        maxTitleWidth: 144,
                        titleWidth: 144,
                        barMaxWidth: 145,
                        barWidth: 0,
                        fontSize: "9",
                        playing: {
                            index: -1,
                            name: "音乐播放器",
                            url: "",
                            img: _("/img/body/music_play.png")
                        },
                        musicList: [],
                        feelList: [],
                        username: ""
                    }
                }
            },
            jt = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_music"
                        }
                    }, [n("div", {
                        staticClass: "music-top-view"
                    }, [n("div", {
                        staticClass: "music-view"
                    }, [n("div", {
                        staticClass: "music-img-wrap",
                        class: {
                            Rotation: t.isPlay
                        }
                    }, [n("img", {
                        attrs: {
                            src: t.playing.img
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "music-ope-wrap"
                    }, [n("div", {
                        staticClass: "music-head"
                    }, [n("div", {
                        staticClass: "music-head-wrap",
                        style: {
                            width: t.titleWidth + "px"
                        }
                    }, [n("div", {
                        staticClass: " music-display-info",
                        class: {
                            marquee: t.isPlay
                        }
                    }, [t._v(t._s(t.playing.name))]), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isPlay,
                            expression: "isPlay"
                        }],
                        staticClass: " music-display-info",
                        class: {
                            marqueeT: t.isPlay
                        }
                    }, [t._v(t._s(t.playing.name))])])]), t._v(" "), n("div", {
                        staticClass: "music-ope-btn"
                    }, [n("div", {
                        staticClass: "music-left"
                    }, [n("span", {
                        staticClass: "music-pre",
                        on: {
                            click: t.musicPlayPre
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont iconskip-previous"
                    })]), t._v(" "), n("span", {
                        staticClass: "music-play",
                        on: {
                            click: t.musicState
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont ",
                        class: {
                            timeout: !t.isPlay, play1: t.isPlay
                        }
                    })]), t._v(" "), n("span", {
                        staticClass: "music-pos",
                        on: {
                            click: t.musicPlayPos
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont iconskip-next"
                    })])]), t._v(" "), t._m(0)]), t._v(" "), n("div", {
                        staticClass: "music-bottom-bar",
                        style: {
                            width: t.barWidth + "px"
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "music-list-btn",
                        on: {
                            click: function(e) {
                                t.musicDialog = !t.musicDialog
                            }
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont headphones"
                    })]), t._v(" "), n("div", {
                        staticClass: "music-beer-btn",
                        on: {
                            click: function(e) {
                                t.feelDialog = !t.feelDialog
                            }
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont iconmessage-alt"
                    }), t._v(" "), n("span", {
                        staticClass: "bell-font"
                    }, [t._v("闲言碎语")])]), t._v(" "), n("div", {
                        staticClass: "music-login-btn",
                        on: {
                            click: t.openUser
                        }
                    }, [n("span", {
                        staticClass: "music-login-name-wrap",
                        attrs: {
                            title: t.username ? t.username : "设置"
                        }
                    }, [n("span", {
                        staticClass: "music-login-name sing-ellipsis"
                    }, [t._v(t._s(t.username ? t.username : "设置"))]), t._v(" "), n("span", {
                        staticClass: "icon iconfont angeldown1"
                    })])])]), t._v(" "), n("div", {
                        staticClass: "block-list-dialog music-list-dialog small-base-scroll",
                        class: {
                            "list-dialog-show": t.musicDialog, "list-dialog-hide": !t.musicDialog
                        }
                    }, t._l(t.musicList, function(e, i) {
                        return n("div", {
                            staticClass: "music-item",
                            on: {
                                click: function(n) {
                                    return t.musicPlay(e, i)
                                }
                            }
                        }, [n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: i == t.playing.index,
                                expression: "index==playing.index"
                            }],
                            staticClass: "music-playing"
                        }), t._v(" "), n("div", {
                            staticClass: "music-index"
                        }, [t._v(t._s(i))]), t._v(" "), n("div", {
                            staticClass: "music-name sing-ellipsis"
                        }, [t._v(t._s(e.name))]), t._v(" "), n("div", {
                            staticClass: "music-author "
                        }, [t._v(t._s(e.author))])])
                    }), 0), t._v(" "), n("div", {
                        staticClass: "block-list-dialog feel-list-dialog small-base-scroll",
                        class: {
                            "list-dialog-show": t.feelDialog, "list-dialog-hide": !t.feelDialog
                        }
                    }, [t._m(1), t._v(" "), t._l(t.feelList, function(e, i) {
                        return n("div", {
                            staticClass: "list-group-item"
                        }, [n("div", [n("div", {
                            staticClass: "feel-content",
                            domProps: {
                                innerHTML: t._s(e.content)
                            }
                        }, [t._v(t._s(e.content))]), t._v(" "), n("div", {
                            staticClass: "feel-time"
                        }, [t._v(t._s(e.time))])])])
                    })], 2)])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "music-right"
                    }, [e("span", {
                        staticClass: "icon iconfont volume-"
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "feel-list-title"
                    }, [e("strong", [this._v("闲言碎语")])])
                }]
            };
        var Et = {
                name: "BlogHead",
                components: {
                    BlogMusic: n("VU/8")(Pt, jt, !1, function(t) {
                        n("p416")
                    }, null, null).exports,
                    BlogSearch: Nt,
                    BlogName: C
                },
                data: function() {
                    return {
                        isPop: !1,
                        isHidden: !0,
                        blogName: v.blogName + ""
                    }
                },
                methods: {
                    setEvent: function() {
                        this.isPop = !this.isPop, !this.isPop && (this.isHidden = !0)
                    }
                },
                mounted: function() {
                    var t = this;
                    setTimeout(function() {
                        var e = function(e) {
                            e.srcElement.className.indexOf("headSetNotPop") > 0 ? t.isHidden = !0 : t.isHidden = !1
                        };
                        t.$refs.blogHead.addEventListener("transitionend", e), t.$refs.blogHead.addEventListener("webkitTransitionEnd", e)
                    }, 2e3)
                }
            },
            St = {
                render: function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        attrs: {
                            id: "blog_head"
                        }
                    }, [e("div", {
                        ref: "blogHead",
                        staticClass: "blog-head-wrap",
                        class: {
                            headSetPop: this.isPop, headSetNotPop: !this.isPop, "blog-hidden": this.isHidden
                        }
                    }, [e("blog-name"), this._v(" "), e("blog-search"), this._v(" "), e("blog-music", {
                        staticClass: "blog-music"
                    }), this._v(" "), e("div", {
                        staticClass: "blog-head-set-wrap",
                        on: {
                            click: this.setEvent
                        }
                    }, [e("span", {
                        staticClass: "icon iconfont shezhi"
                    })])], 1)])
                },
                staticRenderFns: []
            };
        var $t = n("VU/8")(Et, St, !1, function(t) {
                n("0Ixs")
            }, null, null).exports,
            Ut = {
                props: {
                    funcMenus: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                name: "BlogMenuItem",
                methods: {
                    openPage: function(t) {
                        window.open(t)
                    }
                }
            },
            Mt = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_menu_items"
                        }
                    }, [n("div", {
                        staticClass: "blog-menu-items"
                    }, [n("form", t._l(t.funcMenus, function(e, i) {
                        return n("div", {
                            staticClass: "func-menu-item-wrap"
                        }, [n("input", {
                            staticClass: "func-radio",
                            staticStyle: {
                                display: "none"
                            },
                            attrs: {
                                name: "func-radio-item",
                                type: "radio",
                                id: "func-radio-item_" + i,
                                onclick: "let wrap=this.closest('form');if(this.id==wrap.lastMenuId){this.checked=false;wrap.lastMenuId='undefined';return;};wrap.lastMenuId=this.id"
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "func-menu-item"
                        }, [n("label", {
                            attrs: {
                                for: "func-radio-item_" + i
                            }
                        }, [n("div", {
                            staticClass: "func-menu-title"
                        }, [n("span", {
                            staticClass: "title-name"
                        }, [n("span", {
                            staticClass: "icon iconfont",
                            class: [e.icon]
                        }), t._v(" "), n("span", [t._v(t._s(e.titleName))])]), t._v(" "), t._m(0, !0)])]), t._v(" "), n("div", {
                            staticClass: "func-menu-list",
                            style: {
                                height: 35 * e.list.length + "px"
                            }
                        }, t._l(e.list, function(e) {
                            return e.name ? n("div", [n("router-link", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.to,
                                    expression: "inbItem.to"
                                }],
                                staticClass: "func-menu-list-item",
                                attrs: {
                                    to: e.to || "",
                                    tag: "div"
                                }
                            }, [n("span", {
                                staticClass: "list-item-name"
                            }, [t._v("\n                      " + t._s(e.name) + "\n                      ")]), t._v(" "), e.num ? n("span", {
                                staticClass: "list-item-num"
                            }, [t._v("\n                      " + t._s(e.num) + "\n                      ")]) : t._e()]), t._v(" "), n("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: !e.to,
                                    expression: "!inbItem.to"
                                }],
                                staticClass: "func-menu-list-item",
                                on: {
                                    click: function(n) {
                                        return t.openPage(e.url)
                                    }
                                }
                            }, [n("span", {
                                staticClass: "list-item-name"
                            }, [t._v("\n                      " + t._s(e.name) + "\n                      ")]), t._v(" "), e.num ? n("span", {
                                staticClass: "list-item-num"
                            }, [t._v("\n                      " + t._s(e.num) + "\n                      ")]) : t._e()])], 1) : t._e()
                        }), 0)])])
                    }), 0)])])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "title-arrow"
                    }, [e("span", {
                        staticClass: "icon iconfont bottom show-bottom-icon"
                    })])
                }]
            };
        var Ft = n("VU/8")(Ut, Mt, !1, function(t) {
                n("blGy")
            }, null, null).exports,
            Rt = r()([], v.blogFriendList),
            Ot = {};
        //Ot[p("Par5Nt==")] = p("t+Xta+lOoDXCaRXRcn=="), Ot[p("k1s3")] = p("OwuIQwM6LG9hkhQR2gjpP49bQGjqPgIS2gdvPaiS"), Rt.unshift(Ot);
        var Vt = {
                name: "BlogAside",
                components: {
                    BlogMenuItem: Ft
                },
                methods: {
                    avatarName: function() {
                        return v.blogName
                    },
                    foucsMe: function() {
                        Tt.blogFollow().then(function(t) {
                            $.showInfoMsg(t)
                        })
                    },
                    openManage: function() {
                        window.open(v.manPage)
                    },
                    openRss: function() {
                        window.open(v.subPage)
                    },
                    openMail: function() {
                        window.open(v.sendPage)
                    },
                    openWindow: function(t) {
                        window.open(t)
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.on("asideMenuPop", function() {
                        t.asideIsShow = !t.asideIsShow
                    }), Tt.loadAuthorHeadImg().then(function(e) {
                        t.avatar = e
                    }), Tt.loadArticleClassify().then(function(e) {
                        e.forEach(function(e) {
                            e.to = t.VUE_CTX + "/works/category/category/" + e.id + "/1"
                        }), t.funcMenus[0].list = e
                    }), Tt.loadArticleArchives().then(function(e) {
                        e.forEach(function(e) {
                            e.to = t.VUE_CTX + "/works/category/archives/" + e.id + "/1"
                        }), t.funcMenus[1].list = e
                    }), Tt.loadCloudLabel().then(function(e) {
                        e.forEach(function(e) {
                            e.to = t.VUE_CTX + "/works/category/tag/" + e.id + "/1"
                        }), t.funcMenus[2].list = e
                    })
                },
                data: function() {
                    return {
                        avatarSign: v.avatarSign,
                        asideIsShow: !1,
                        avatar: "",
                        mainExtNav: v.mainExtNav,
                        funcMenus: [{
                            titleName: "分类",
                            icon: "menu",
                            list: []
                        }, {
                            titleName: "档案",
                            icon: "paper",
                            list: []
                        }, {
                            titleName: "标签",
                            icon: "label",
                            list: []
                        }, {
                            titleName: "链接",
                            icon: "links",
                            list: v.blogUsedLinks
                        }, {
                            titleName: "友链",
                            icon: "iconheart",
                            list: Rt
                        }]
                    }
                }
            },
            qt = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_aside"
                        }
                    }, [n("div", {
                        staticClass: "blog-aside-oub-wrap",
                        class: {
                            "blog-aside-show": t.asideIsShow, "blog-aside-hide": !t.asideIsShow
                        }
                    }, [n("div", {
                        staticClass: "blog-aside-wrap"
                    }, [n("div", {
                        staticClass: "blog-menu-content-wrap"
                    }, [n("div", {
                        staticClass: "blog-menu-content"
                    }, [n("div", {
                        staticClass: "blog-head-wrap",
                        on: {
                            click: t.foucsMe
                        }
                    }, [n("router-link", {
                        attrs: {
                            to: t.VUE_CTX + "/author",
                            tag: "div"
                        }
                    }, [n("img", {
                        staticClass: "avatar-img",
                        attrs: {
                            src: t.avatar
                        }
                    })]), t._v(" "), n("div", [n("span", {
                        staticClass: "avatar-name"
                    }, [t._v("\n          " + t._s(t.avatarName()) + "\n          "), n("span", {
                        staticClass: "icon iconfont angeldown1"
                    })])]), t._v(" "), n("div", {
                        staticClass: "avatar-sign "
                    }, [t._v("\n              " + t._s(t.avatarSign) + "\n            ")])], 1), t._v(" "), n("div", {
                        staticClass: "blog-menu-title"
                    }, [t._v("\n            导航\n          ")]), t._v(" "), n("div", {
                        staticClass: "aside-display-content"
                    }, [n("router-link", {
                        staticClass: "aside-display-content-item text-dark",
                        attrs: {
                            to: t.VUE_CTX + "/works/category/all/1/1",
                            tag: "div"
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont iconhome"
                    }), n("span", [t._v("首页")])]), t._v(" "), t._l(t.mainExtNav, function(e) {
                        return n("div", {
                            staticClass: "aside-display-content-item",
                            on: {
                                click: function(n) {
                                    return t.openWindow(e.url)
                                }
                            }
                        }, [n("span", {
                            staticClass: "icon iconfont",
                            class: e.icon
                        }), n("span", [t._v(t._s(e.title))])])
                    })], 2), t._v(" "), n("div", {
                        staticClass: "blog-menu-title blog-menu-title-board"
                    }, [t._v("\n            组成\n          ")]), t._v(" "), n("blog-menu-item", {
                        attrs: {
                            "func-menus": t.funcMenus
                        }
                    })], 1)]), t._v(" "), n("div", {
                        staticClass: "blog-menu-bar"
                    }, [n("div", {
                        on: {
                            click: t.openManage
                        }
                    }, [n("div", {
                        staticClass: "icon iconfont cogs"
                    }), t._v(" "), n("div", [t._v("管理")])]), t._v(" "), n("div", {
                        on: {
                            click: t.openRss
                        }
                    }, [n("div", {
                        staticClass: "icon iconfont rss"
                    }), t._v(" "), n("div", [t._v("文章")])]), t._v(" "), n("div", {
                        on: {
                            click: t.openMail
                        }
                    }, [n("div", {
                        staticClass: "icon iconfont talk"
                    }), t._v(" "), n("div", [t._v("联系")])])])])]), t._v(" "), n("div", {
                        staticClass: "blod-aside-shape",
                        on: {
                            click: function(e) {
                                t.asideIsShow = !1
                            }
                        }
                    })])
                },
                staticRenderFns: []
            };
        var Dt = n("VU/8")(Vt, qt, !1, function(t) {
            n("cbI5")
        }, null, null).exports;
        console.log(p("sXMn2v9pP49bxw2FLqAnVwsSxyWqx4sjx0EZYs3nmyBckwuJQHcSLhkhkGjqPas3PgkHLaCSPT9qObWRPp8="), p("2g93Phx6xHtICz5p2XCfNhsSkXjYDpCZNXV7Q4rYN4ZRNHcvQwnnMz3="), p("2g93Phx6xgWZNU5p2XCfNhsSkXjYDpMICzt7Q4rYN4ZRNHcvQwnnMz3="));
        var Ht = p("OwuIQwM6LG9hkhQR2gjpP49bQGjqPgIS2gdvPaiS"),
            Wt = p("k4oZPXVn2v9pP49bx4sjx4CekXjR"),
            zt = {
                name: "BlogBottom",
                methods: {
                    page: function() {
                        window.open(Ht)
                    },
                    detail: function() {
                        return Wt
                    }
                },
                data: function() {
                    return {
                        copyright: "Copyright © " + (new Date).getFullYear() + " " + v.blogName,
                        plugName: "c_blog",
                        author: "cjunn",
                        technology: "Powered by vue on cnblogs"
                    }
                }
            },
            Gt = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_bottom"
                        }
                    }, [n("div", {
                        staticClass: "copyright"
                    }, [t._v(t._s(t.copyright) + "\n    "), n("span", {
                        staticClass: "author-clz",
                        on: {
                            click: t.page
                        }
                    }, [n("span", [t._v(t._s(t.detail()))])])]), t._v(" "), n("div", {
                        staticClass: "technology"
                    }, [t._v(t._s(t.technology))])])
                },
                staticRenderFns: []
            };
        var Xt = n("VU/8")(zt, Gt, !1, function(t) {
                n("mL6P")
            }, null, null).exports,
            Qt = (n("UJDJ"), n("sCtt")),
            Jt = n.n(Qt),
            Yt = {
                name: "BlogFullPage",
                methods: {
                    closeFullScreenEven: function() {
                        this.$bus.emit("closeFullScreenEven", !0)
                    }
                },
                data: function() {
                    return {
                        isOpenFullScreen: !1,
                        article: {
                            title: "",
                            body: ""
                        }
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.on("openFullScreenEven", function(e) {
                        var n = B()(e.body);
                        n.find("h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]").each(function(t, e) {
                            var n = B()(e);
                            n.attr("id", n.attr("id") + "__fullscreen")
                        }), t.article.body = n.prop("outerHTML"), t.article.title = e.title, n.remove(), setTimeout(function() {
                            t.$nextTick(function() {
                                B()("#post_body_fiex_menu_anchor").empty(), B()("#post_body_content_fullscreen").attr("data-toc", "#post_body_fiex_menu_anchor"), new Jt.a({
                                    dom: "#post_body_content_fullscreen",
                                    offsetBody: document.querySelector(".post-body-content-fiex-wrap")
                                }).reset(), t.isOpenFullScreen = !0, $.registerAnchorFunc(B()("#post_body_fiex_menu_anchor"));
                                var e = B()("<span class='icon iconfont top topBtn topBtnDown'></span>");
                                B()("#post_body_fiex_menu_anchor .toc-brand").append(e), e.click(function() {
                                    e.hasClass("topBtnDown") ? document.getElementById("full_body_bottom_target").scrollIntoView({
                                        behavior: "smooth"
                                    }) : document.getElementById("full_body_top_target").scrollIntoView({
                                        behavior: "smooth"
                                    })
                                }), B()(".post-body-content-fiex-wrap").scroll(function(t) {
                                    B()("#full_body_top_target").offset().top < -80 ? e.removeClass("topBtnDown") : e.addClass("topBtnDown")
                                })
                            })
                        })
                    }), this.$bus.on("closeFullScreenEven", function(e) {
                        t.isOpenFullScreen = !1
                    })
                }
            },
            Zt = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_article_full_screen"
                        }
                    }, [n("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpenFullScreen,
                            expression: "isOpenFullScreen"
                        }],
                        staticClass: "blog-article-full-screen-warp"
                    }, [n("div", {
                        staticClass: "post-body-content-fiex-wrap"
                    }, [n("div", {
                        attrs: {
                            id: "full_body_top_target"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "post-body-content-fiex-inner-wrap"
                    }, [n("div", {
                        staticClass: "post-body-title-fullscreen"
                    }, [t._v(t._s(t.article.title))]), t._v(" "), n("div", {
                        directives: [{
                            name: "highlight",
                            rawName: "v-highlight"
                        }],
                        attrs: {
                            id: "post_body_content_fullscreen"
                        },
                        domProps: {
                            innerHTML: t._s(t.article.body)
                        }
                    }, [t._v(t._s(t.article.body))])]), t._v(" "), n("div", {
                        staticClass: "post-body-fiex-close"
                    }, [n("span", {
                        staticClass: "icon iconfont LogonClosed",
                        on: {
                            click: t.closeFullScreenEven
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "post-body-fiex-menu"
                    }, [n("div", {
                        attrs: {
                            id: "post_body_fiex_menu_anchor"
                        }
                    })]), t._v(" "), n("div", {
                        attrs: {
                            id: "full_body_bottom_target"
                        }
                    })])])])], 1)
                },
                staticRenderFns: []
            };
        var Kt = {
                name: "BlogPanel",
                components: {
                    BlogFullPage: n("VU/8")(Yt, Zt, !1, function(t) {
                        n("QeqI")
                    }, null, null).exports,
                    BlogBottom: Xt,
                    BlogAside: Dt,
                    BlogHead: $t
                },
                mounted: function() {
                    var t = this,
                        e = function(e) {
                            "opacity" == e.propertyName && (t.$refs.panel.scrollTop = 0)
                        };
                    this.$refs.panel.addEventListener("transitionend", e), this.$refs.panel.addEventListener("webkitTransitionEnd", e)
                },
                created: function() {
                    var t = this;
                    this.$bus.on("panelToTop", function() {
                        document.getElementById("panel_top_target").scrollIntoView({
                            behavior: "smooth"
                        })
                    }), this.$bus.on("panelToBottom", function() {
                        document.getElementById("panel_bottom_target").scrollIntoView({
                            behavior: "smooth"
                        })
                    }), this.$bus.on("openLoadingBar", function(e) {
                        t.isShowLoadingBar = !0
                    }), this.$bus.on("closeLoadingBar", function(e) {
                        t.isShowLoadingBar = !1
                    }), this.$bus.on("beforeRoute", function(e) {
                        t.isShowLoading = !0, setTimeout(function() {
                            e.next()
                        }, 300)
                    }), this.$bus.on("afterRoute", function(t) {}), this.$bus.on("dataedRoute", function(e) {
                        t.isShowLoading = !1
                    }), this.$bus.on("anchorScroll", function(e) {
                        var n = t.$route.query;
                        if (n && n.anchor) {
                            var i = document.querySelector("#app [href='#" + e + "']");
                            i && i.scrollIntoView({
                                behavior: "auto"
                            }), delete t.$route.query.anchor
                        }
                    })
                },
                methods: {
                    panelScrollEvent: function(t) {
                        this.$bus.emit("panelScrollEven", t)
                    },
                    transitionEvent: function(t) {}
                },
                data: function() {
                    return {
                        isShowLoading: !1,
                        isShowLoadingBar: !1,
                        include: "BlogWorksBody,BlogAuthorBody"
                    }
                }
            },
            te = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_panel"
                        }
                    }, [n("blog-full-page"), t._v(" "), n("blog-head", {
                        staticClass: "blog-head-oub-wrap"
                    }), t._v(" "), n("div", {
                        staticClass: "blog-head-oub-body"
                    }, [n("blog-aside"), t._v(" "), n("div", {
                        staticClass: "loading-bar"
                    }, [n("div", {
                        staticClass: "preloaderbar show active",
                        class: {
                            preloaderbarShow: t.isShowLoadingBar
                        }
                    }, [n("span", {
                        staticClass: "bar"
                    })])]), t._v(" "), n("div", {
                        ref: "panel",
                        staticClass: "body-wrap none-base-scroll",
                        class: {
                            "stop-scroll": t.isShowLoading
                        },
                        on: {
                            scroll: t.panelScrollEvent,
                            transitionEvent: t.transitionEvent
                        }
                    }, [n("div", {
                        attrs: {
                            id: "panel_top_target"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "loading-screen-lump",
                        class: {
                            "loading-screen-lump-show": t.isShowLoading
                        }
                    }, [t._m(0)]), t._v(" "), n("div", {
                        staticClass: "route-view-screen",
                        class: {
                            "route-view-screen-hide": t.isShowLoading
                        }
                    }, [n("router-view", {
                        staticClass: "router-view-warp"
                    }), t._v(" "), n("blog-bottom", {
                        staticClass: "router-bottom-wrap"
                    })], 1), t._v(" "), n("div", {
                        attrs: {
                            id: "panel_bottom_target"
                        }
                    })])], 1)], 1)
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "loading-screen-wrap"
                    }, [e("div", {
                        staticClass: "loading-screen-in"
                    }, [e("div", {
                        staticClass: "k-ball-holder3"
                    }, [e("div", {
                        staticClass: "k-ball7a"
                    }), this._v(" "), e("div", {
                        staticClass: "k-ball7b"
                    }), this._v(" "), e("div", {
                        staticClass: "k-ball7c"
                    }), this._v(" "), e("div", {
                        staticClass: "k-ball7d"
                    })])])])
                }]
            };
        var ee = {
                created: function() {},
                name: "BlogMain",
                components: {
                    BlogPanel: n("VU/8")(Kt, te, !1, function(t) {
                        n("M7OF")
                    }, null, null).exports
                },
                data: function() {
                    return {
                        imgStyle: {
                            background: "url(" + v.bigBackImg + ") rgb(248, 248, 255)"
                        }
                    }
                }
            },
            ne = {
                render: function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "blog-main",
                        style: this.imgStyle
                    }, [e("blog-panel", {
                        staticClass: "blog-panel-wrap"
                    })], 1)
                },
                staticRenderFns: []
            };
        var ie = n("VU/8")(ee, ne, !1, function(t) {
                n("90eC")
            }, null, null).exports,
            ae = {
                name: "BlogAuthorIng",
                created: function() {
                    var t = this;
                    T.a.all([this.askIngList(), this.askInfo(), this.askImg()]).then(function() {
                        setTimeout(function() {
                            t.$nextTick(function() {
                                setTimeout(function() {
                                    t.$bus.emit("dataedRoute", !0)
                                }, 150)
                            })
                        }, 150)
                    })
                },
                computed: {
                    talkNum: function() {
                        return 0 == this.ingObj.pageList.length ? this.ingObj.cnList.length : 30 * (parseInt(this.ingObj.pageList[this.ingObj.pageList.length - 1].id) - 1) + "+"
                    }
                },
                methods: {
                    askImg: function() {
                        var t = this;
                        return new T.a(function(e, n) {
                            Tt.loadAuthorHeadImg().then(function(n) {
                                t.headImg = n, e()
                            })
                        })
                    },
                    askInfo: function() {
                        var t = this;
                        return new T.a(function(e, n) {
                            Tt.loadArticleNum().then(function(n) {
                                t.info = n, e()
                            }).catch(function() {
                                e()
                            })
                        })
                    },
                    askIngList: function(t) {
                        var e = this,
                            n = this;
                        return t && this.$bus.emit("openLoadingBar", {}), new T.a(function(i, a) {
                            Tt.loadBlogTalk(e.current).then(function(a) {
                                n.ingObj = a, t && e.$bus.emit("closeLoadingBar", {}), i()
                            }).catch(function() {
                                i()
                            })
                        })
                    },
                    ingTitle: function() {
                        return v.ingTitle
                    },
                    ingName: function() {
                        return v.blogName
                    }
                },
                data: function() {
                    return {
                        headBackImg: v.headBackImg,
                        headImg: "",
                        ingObj: {
                            cnList: [],
                            current: -1,
                            pageList: []
                        },
                        current: 1,
                        info: {}
                    }
                },
                watch: {
                    current: function() {
                        this.askIngList(!0)
                    }
                }
            },
            oe = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_author_ing"
                        }
                    }, [n("div", {
                        staticClass: "author-head-img-wrap"
                    }, [n("img", {
                        staticClass: "author-head-img",
                        attrs: {
                            src: t.headBackImg
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "author-head-content"
                    }, [n("div", {
                        staticClass: "author-head-content-wrap"
                    }, [n("div", [n("div", {
                        staticClass: "head-author-name"
                    }, [t._v(t._s(t.ingName()))]), t._v(" "), n("div", {
                        staticClass: "head-author-sign"
                    }, [t._v(t._s(t.ingTitle()))]), t._v(" "), n("div", {
                        staticClass: "head-author-info"
                    }, [n("div", {
                        staticClass: "head-author-info-item"
                    }, [n("div", {
                        staticClass: "head-info-num"
                    }, [t._v(t._s(t.info.commentNum))]), t._v(" "), n("div", {
                        staticClass: "head-info-title"
                    }, [t._v("评论")])]), t._v(" "), n("div", {
                        staticClass: "head-author-info-item"
                    }, [n("div", {
                        staticClass: "head-info-num"
                    }, [t._v(t._s(t.info.pageNum))]), t._v(" "), n("div", {
                        staticClass: "head-info-title"
                    }, [t._v("文章")])]), t._v(" "), n("div", {
                        staticClass: "head-author-info-item"
                    }, [n("div", {
                        staticClass: "head-info-num"
                    }, [t._v(t._s(t.talkNum))]), t._v(" "), n("div", {
                        staticClass: "head-info-title"
                    }, [t._v("新鲜事")])])])]), t._v(" "), t._m(0)])])]), t._v(" "), t.ingObj.current > 0 ? n("div", {
                        staticClass: "page-num"
                    }, [n("ul", {
                        staticClass: "pagination"
                    }, t._l(t.ingObj.pageList, function(e) {
                        return n("li", {
                            on: {
                                click: function(n) {
                                    !isNaN(e.id) && (t.current = e.id)
                                }
                            }
                        }, [n("a", {
                            class: {
                                active: e.text == t.ingObj.current
                            }
                        }, [t._v(t._s(e.text))])])
                    }), 0)]) : t._e(), t._v(" "), n("div", {
                        staticClass: "author-body-wrap"
                    }, t._l(t.ingObj.cnList, function(e) {
                        return n("div", {
                            staticClass: "author-content-item"
                        }, [n("div", {
                            staticClass: "author-content-img-wrap"
                        }, [n("img", {
                            attrs: {
                                src: t.headImg
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "author-content-body-wrap"
                        }, [n("div", {
                            staticClass: "author-content-arrow-back"
                        }), t._v(" "), n("div", {
                            staticClass: "boadr-top-wrap"
                        }, [n("span", {
                            staticClass: "board-top-author"
                        }, [t._v(t._s(e.author))]), t._v(" "), n("span", {
                            staticClass: "board-top-time"
                        }, [t._v(t._s(e.time))])]), t._v(" "), n("div", {
                            staticClass: "board-middle-wrap",
                            domProps: {
                                innerHTML: t._s(e.content)
                            }
                        }, [t._v("\n          " + t._s(e.content) + "\n        ")]), t._v(" "), n("div", {
                            staticClass: "board-bottom-wrap"
                        }, [n("span", {
                            staticClass: "heart-wrap"
                        }, [n("span", {
                            staticClass: "icon iconfont heart"
                        }), n("span", [t._v(t._s(e.count))])]), t._v(" "), n("span", [n("span", {
                            staticClass: "icon iconfont Icon-Fixedposition- position"
                        }), n("span", [t._v(t._s(e.from))])])])])])
                    }), 0)])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "head-bottom-wrap"
                    }, [e("div", {
                        staticClass: "head-bottom"
                    }, [e("div", {
                        staticClass: "head-bottom-icon"
                    }, [e("span", {
                        staticClass: "icon iconfont git"
                    })]), this._v(" "), e("div", {
                        staticClass: "head-bottom-icon"
                    }, [e("span", {
                        staticClass: "icon iconfont wechat"
                    })]), this._v(" "), e("div", {
                        staticClass: "head-bottom-icon"
                    }, [e("span", {
                        staticClass: "icon iconfont qq2"
                    })])])])
                }]
            };
        var se = n("VU/8")(ae, oe, !1, function(t) {
                n("4+Uy")
            }, null, null).exports,
            ce = {
                name: "BlogAuthorAside",
                methods: {
                    qq: function() {
                        return v.qq
                    },
                    email: function() {
                        return v.email
                    },
                    github: function() {
                        return v.github
                    }
                },
                data: function() {
                    return {
                        emailImg: _("/img/ing/email.png"),
                        qqImg: _("/img/ing/qq.png"),
                        githubImg: _("/img/ing/github.png"),
                        aboutmeHtml: v.aboutmeHtml
                    }
                }
            },
            re = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_author_aside"
                        }
                    }, [n("div", {
                        staticClass: "blog-author-aside-wrap"
                    }, [n("div", {
                        staticClass: "contact-title"
                    }, [t._v("联系方式")]), t._v(" "), n("div", {
                        staticClass: "contact-item"
                    }, [n("span", {
                        staticClass: "contact-png"
                    }, [n("img", {
                        attrs: {
                            id: "author-email-img",
                            src: t.emailImg
                        }
                    })]), t._v(" "), n("span", {
                        staticClass: "contact-content"
                    }, [n("div", {
                        staticClass: "contact-content-top"
                    }, [t._v("email")]), t._v(" "), n("div", {
                        staticClass: "contact-content-bottom"
                    }, [t._v(t._s(t.email()))])])]), t._v(" "), n("div", {
                        staticClass: "contact-item"
                    }, [n("span", {
                        staticClass: "contact-png"
                    }, [n("img", {
                        attrs: {
                            id: "author-qq-img",
                            src: t.qqImg
                        }
                    })]), t._v(" "), n("span", {
                        staticClass: "contact-content"
                    }, [n("div", {
                        staticClass: "contact-content-top"
                    }, [t._v("QQ")]), t._v(" "), n("div", {
                        staticClass: "contact-content-bottom"
                    }, [t._v(t._s(t.qq()))])])]), t._v(" "), n("div", {
                        staticClass: "contact-item"
                    }, [n("span", {
                        staticClass: "contact-png"
                    }, [n("img", {
                        attrs: {
                            id: "author-github-img",
                            src: t.githubImg
                        }
                    })]), t._v(" "), n("span", {
                        staticClass: "contact-content"
                    }, [n("div", {
                        staticClass: "contact-content-top"
                    }, [t._v("github")]), t._v(" "), n("div", {
                        staticClass: "contact-content-bottom"
                    }, [t._v(t._s(t.github()))])])]), t._v(" "), n("div", {
                        staticClass: "about-me-wrap"
                    }, [n("div", {
                        staticClass: "about-me-head"
                    }, [t._v("关于我")]), t._v(" "), n("div", {
                        staticClass: "about-me-body",
                        domProps: {
                            innerHTML: t._s(t.aboutmeHtml)
                        }
                    }, [t._v("\n        " + t._s(t.aboutmeHtml) + "\n      ")])])])])
                },
                staticRenderFns: []
            };
        var le = {
                name: "BlogAuthorBody",
                components: {
                    BlogAuthorAside: n("VU/8")(ce, re, !1, function(t) {
                        n("9YwF")
                    }, null, null).exports,
                    BlogAuthorIng: se
                }
            },
            ue = {
                render: function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("BlogAuthorIng"), this._v(" "), e("BlogAuthorAside")], 1)
                },
                staticRenderFns: []
            };
        var me = n("VU/8")(le, ue, !1, function(t) {
                n("z12H")
            }, "data-v-01673cd3", null).exports,
            de = {
                name: "BlogHotPage",
                created: function() {
                    var t = this;
                    Tt.loadHotArticle().then(function(e) {
                        t.hotArticles = e
                    })
                },
                methods: {
                    picIcon: function(t) {
                        return _("/img/menuIcon/menuicon-" + t + ".png")
                    }
                },
                data: function() {
                    return {
                        hotArticles: []
                    }
                }
            },
            pe = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_hot_page"
                        }
                    }, [n("div", {
                        staticClass: "menu-body-item"
                    }, [t._m(0), t._v(" "), t._l(t.hotArticles, function(e, i) {
                        return n("div", {
                            staticClass: "menu-body-item-content"
                        }, [n("router-link", {
                            staticClass: "item-icon icon-unify-style",
                            style: {
                                background: "url(" + t.picIcon(i) + ")"
                            },
                            attrs: {
                                to: t.VUE_CTX + "/works/article/" + e.pageId,
                                tag: "div"
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "item-content"
                        }, [n("router-link", {
                            staticClass: "item-cont-wrap double-ellipsis",
                            attrs: {
                                to: t.VUE_CTX + "/works/article/" + e.pageId,
                                tag: "div"
                            }
                        }, [t._v("\n          " + t._s(e.name) + "\n        ")]), t._v(" "), n("div", {
                            staticClass: "item-see"
                        }, [n("span", {
                            staticClass: "icon iconfont see"
                        }), t._v(" "), n("span", [t._v(t._s(e.num))])])], 1)], 1)
                    })], 2)])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "menu-body-item-title"
                    }, [e("div", [this._v("热门文章")])])
                }]
            };
        var fe = n("VU/8")(de, pe, !1, function(t) {
                n("Wmd0")
            }, null, null).exports,
            he = {
                name: "BlogInfoPage",
                created: function() {
                    var t = this;
                    Tt.loadAuthorBlogInfo().then(function(e) {
                        t.info = e
                    })
                },
                data: function() {
                    return {
                        info: {}
                    }
                }
            },
            ge = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_info_page"
                        }
                    }, [n("div", {
                        staticClass: "menu-body-item"
                    }, [t._m(0), t._v(" "), n("div", {
                        staticClass: "menu_blog_info_wrap_clz"
                    }, [n("div", {
                        staticClass: "menu-body-info"
                    }, [n("div", {
                        staticClass: "info-item"
                    }, [t._m(1), t._v(" "), n("span", {
                        staticClass: "info-item-right"
                    }, [n("span", {
                        staticClass: "info-item-bg"
                    }, [n("span", [t._v(t._s(t.info.username))])])])]), t._v(" "), n("div", {
                        staticClass: "info-item"
                    }, [t._m(2), t._v(" "), n("span", {
                        staticClass: "info-item-right"
                    }, [n("span", {
                        staticClass: "info-item-bg"
                    }, [n("span", [t._v(t._s(t.info.age))])])])]), t._v(" "), n("div", {
                        staticClass: "info-item"
                    }, [t._m(3), t._v(" "), n("span", {
                        staticClass: "info-item-right"
                    }, [n("span", {
                        staticClass: "info-item-bg"
                    }, [n("span", [t._v(t._s(t.info.follow))])])])]), t._v(" "), n("div", {
                        staticClass: "info-item"
                    }, [t._m(4), t._v(" "), n("span", {
                        staticClass: "info-item-right"
                    }, [n("span", {
                        staticClass: "info-item-bg"
                    }, [n("span", [t._v(t._s(t.info.focus))])])])])])])])])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "menu-body-item-title"
                    }, [e("div", [this._v("博客信息")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "info-item-left"
                    }, [e("span", {
                        staticClass: "icon iconfont iconaward"
                    }), this._v(" "), e("span", [this._v("昵称")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "info-item-left"
                    }, [e("span", {
                        staticClass: "icon iconfont ios-shijian"
                    }), this._v(" "), e("span", [this._v("博龄")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "info-item-left"
                    }, [e("span", {
                        staticClass: "icon iconfont equalizer"
                    }), this._v(" "), e("span", [this._v("粉丝")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "info-item-left"
                    }, [e("span", {
                        staticClass: "icon iconfont refresh"
                    }), this._v(" "), e("span", [this._v("关注")])])
                }]
            };
        var ve = n("VU/8")(he, ge, !1, function(t) {
                n("pVUV")
            }, null, null).exports,
            _e = {
                name: "BlogCloudPage",
                created: function() {
                    var t = this;
                    Tt.loadCloudLabel().then(function(e) {
                        t.labels = e
                    })
                },
                data: function() {
                    return {
                        labels: []
                    }
                }
            },
            be = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_cloud_page"
                        }
                    }, [n("div", {
                        staticClass: "menu-body-item"
                    }, [t._m(0), t._v(" "), n("div", {
                        staticClass: "cloud-content cloud_label_content_clz"
                    }, t._l(t.labels, function(e) {
                        return n("span", [n("router-link", {
                            attrs: {
                                to: t.VUE_CTX + "/works/category/tag/" + e.id + "/1"
                            }
                        }, [n("span", {
                            staticClass: "info-item-bg"
                        }, [n("span", [t._v(t._s(e.name))])])])], 1)
                    }), 0)])])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "menu-body-item-title"
                    }, [e("div", [this._v("标签云")])])
                }]
            };
        var we = n("VU/8")(_e, be, !1, function(t) {
                n("ILeb")
            }, null, null).exports,
            Ce = n("pFYg"),
            ye = n.n(Ce);
        n("nukP");
        ! function(t, e, n) {
            Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
                var e = this.length >>> 0,
                    n = Number(arguments[1]) || 0;
                for ((n = n < 0 ? Math.ceil(n) : Math.floor(n)) < 0 && (n += e); n < e; n++)
                    if (n in this && this[n] === t) return n;
                return -1
            });
            var i = "emoji",
                a = {
                    showTab: !0,
                    animation: "fade",
                    icons: []
                };

            function o(e, n) {
                switch (this.$content = t(e), this.options = n, this.index = emoji_index, n.animation) {
                    case "none":
                        this.showFunc = "show", this.hideFunc = "hide", this.toggleFunc = "toggle";
                        break;
                    case "slide":
                        this.showFunc = "slideDown", this.hideFunc = "slideUp", this.toggleFunc = "slideToggle";
                        break;
                    case "fade":
                    default:
                        this.showFunc = "fadeIn", this.hideFunc = "fadeOut", this.toggleFunc = "fadeToggle"
                }
                this._init()
            }
            e.emoji_index = 0, o.prototype = {
                _init: function() {
                    var i, a, o, s = this,
                        c = this.options.button,
                        r = this.options.inpCall,
                        l = s.index;
                    c || (i = '<input type="image" class="emoji_btn" id="emoji_btn_' + l + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUxpcfTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAOfx6yUAAAALdFJOUwAzbVQOoYrzwdwkAoU+0gAAAM1JREFUGNN9kK0PQWEUxl8fM24iCYopwi0muuVuzGyKwATFZpJIU01RUG/RBMnHxfz+Oef9uNM84d1+23nO+zxHKVG2WWupRJkdcAwtpCK0lpbqWE01pB0QayonREMoIp7AawQrWSgGGb4pn6dSeSh68FAVXqHqy3wKrkJiDGDTg3dnp//w+WnwlwIOJauF+C7sXRVfdha4O4oIJfTbtdSxs2uqhs585A0ko8iLTMEcDE1n65A+29pYAlr72nz9dKu7GuNTcsL2fDQzB/wCPVJ69nZGb3gAAAAASUVORK5CYII="/>', a = this.$content.offset().top + this.$content.outerHeight() + 10, o = this.$content.offset().left + 2, t(i).appendTo(t("body")), t("#emoji_btn_" + l).css({
                        top: a + "px",
                        left: o + "px"
                    }), c = "#emoji_btn_" + l);
                    var u = this.options.showTab,
                        m = this.options.icons,
                        d = m.length;
                    if (0 === d) return alert("Missing icons config!"), !1;
                    for (var p, f, h, g, v, _, b, w, C, y, I, x = '<div class="emoji_container " id="emoji_container_' + l + '">', A = '<div class="emoji_content none-base-scroll">', k = '<div class="emoji_tab" style="' + (1 !== d || u ? "" : "display:none;") + '"><div class="emoji_tab_prev"></div><div class="emoji_tab_list"><ul>', T = 0; T < d; T++)
                        if (f = m[T].name || "group" + (T + 1), h = m[T].path, g = m[T].maxNum, v = m[T].excludeNums, _ = m[T].file || ".jpg", b = m[T].placeholder || "#em" + (T + 1) + "_{alias}#", w = m[T].alias, C = m[T].title, y = 0, h && g) {
                            p = '<div id="emoji' + T + '" class="emoji_icons" style="' + (0 === T ? "" : "display:none;") + '"><ul>';
                            for (var L = 1; L <= g; L++)
                                if (!(v && v.indexOf(L) >= 0)) {
                                    if (w) {
                                        if ("object" !== (void 0 === w ? "undefined" : ye()(w))) {
                                            alert("Error config about alias!");
                                            break
                                        }
                                        I = b.replace(new RegExp("{alias}", "gi"), w[L].toString())
                                    } else I = b.replace(new RegExp("{alias}", "gi"), L.toString());
                                    p += '<li><a data-emoji_code="' + I + '" data-index="' + y + '" title="' + (C && C[L] ? C[L] : "") + '"><img src="' + h + L + _ + '"/></a></li>', y++
                                } A += p += "</ul></div>", k += '<li data-emoji_tab="emoji' + T + '" class="' + (0 === T ? "selected" : "") + '" title="' + f + '">' + f + "</li>"
                        } else alert("The " + T + " index of icon groups has error config!");
                    x += A += "</div>", x += k += '</ul></div><div class="emoji_tab_next"></div></div>', t(x += '<div class="emoji_preview"><img/></div>').appendTo(c);
                    var B = "544px",
                        N = t(e).width();
                    if (N < 544) switch (this.options.position) {
                        case "topLeft":
                        case "bottomLeft":
                            B = N - 2 * t(c).offset().right + "px";
                            break;
                        default:
                            B = N - 2 * t(c).offset().left + "px"
                    }
                    switch (t("#emoji_container_" + l).css("width", B), t("#emoji_container_" + l + " .emoji_tab_list").css("width", parseInt(B) - 44 + "px"), this.options.position) {
                        case "topLeft":
                            t(c).offset().top - t("#emoji_container_" + l).outerHeight() - 5, t(c).offset().left - t("#emoji_container_" + l).outerWidth() + t(c).outerHeight();
                            break;
                        case "topRight":
                            t(c).offset().top - t("#emoji_container_" + l).outerHeight() - 5, t(c).offset().left;
                            break;
                        case "bottomLeft":
                            t(c).offset().top + t(c).outerHeight() + 5, t(c).offset().left - t("#emoji_container_" + l).outerWidth() + t(c).outerHeight();
                            break;
                        default:
                            t(c).offset().top + t(c).outerHeight() + 5, t(c).offset().left
                    }
                    var P = d % 8 == 0 ? parseInt(d / 8) : parseInt(d / 8) + 1,
                        j = 1;
                    t(n).on({
                        click: function(e) {
                            var n, i, a, o = e.target,
                                u = s.$content[0];
                            o === t(c)[0] ? (t("#emoji_container_" + l)[s.toggleFunc](), s.$content.focus()) : t(o).parents("#emoji_container_" + l).length > 0 ? (n = t(o).data("emoji_code") || t(o).parent().data("emoji_code"), i = t(o).data("emoji_tab"), n ? ("DIV" === u.nodeName ? (a = '<img class="emoji_icon" src="' + t("#emoji_container_" + l + ' a[data-emoji_code="' + n + '"] img').attr("src") + '"/>', s._insertAtCursor(r, u, a, !1)) : s._insertAtCursor(r, u, n), s.hide()) : i ? t(o).hasClass("selected") || (t("#emoji_container_" + l + " .emoji_icons").hide(), t("#emoji_container_" + l + " #" + i).show(), t(o).addClass("selected").siblings().removeClass("selected")) : t(o).hasClass("emoji_tab_prev") ? j > 1 && (t("#emoji_container_" + l + " .emoji_tab_list ul").css("margin-left", "-503" * (j - 2) + "px"), j--) : t(o).hasClass("emoji_tab_next") && j < P && (t("#emoji_container_" + l + " .emoji_tab_list ul").css("margin-left", "-503" * j + "px"), j++), s.$content.focus()) : t("#emoji_container_" + l + ":visible").length > 0 && (s.hide(), s.$content.focus())
                        }
                    }), t("#emoji_container_" + l + " .emoji_icons a").mouseenter(function() {
                        var e = t(this).data("index");
                        parseInt(e / 5) % 2 == 0 ? t("#emoji_container_" + l + " .emoji_preview").css({
                            left: "auto",
                            right: 0
                        }) : t("#emoji_container_" + l + " .emoji_preview").css({
                            left: 0,
                            right: "auto"
                        });
                        var n = t(this).find("img").attr("src");
                        t("#emoji_container_" + l + " .emoji_preview img").attr("src", n).parent().show()
                    }), t("#emoji_container_" + l + " .emoji_icons a").mouseleave(function() {
                        t("#emoji_container_" + l + " .emoji_preview img").removeAttr("src").parent().hide()
                    })
                },
                _insertAtCursor: function(t, i, a, o) {
                    var s, c;
                    if ("DIV" === i.nodeName) {
                        if (i.focus(), e.getSelection) {
                            if ((s = e.getSelection()).getRangeAt && s.rangeCount) {
                                (c = s.getRangeAt(0)).deleteContents();
                                var r = n.createElement("div");
                                r.innerHTML = a;
                                for (var l, u, m = n.createDocumentFragment(); l = r.firstChild;) u = m.appendChild(l);
                                var d = m.firstChild;
                                c.insertNode(m), u && ((c = c.cloneRange()).setStartAfter(u), o ? c.setStartBefore(d) : c.collapse(!0), s.removeAllRanges(), s.addRange(c))
                            }
                        } else if ((s = n.selection) && "Control" !== s.type) {
                            var p = s.createRange();
                            p.collapse(!0), s.createRange().pasteHTML(a), o && ((c = s.createRange()).setEndPoint("StartToStart", p), c.select())
                        }
                    } else if (n.selection) i.focus(), (s = n.selection.createRange()).text = a, s.select();
                    else if (i.selectionStart || 0 === i.selectionStart) {
                        var f = i.selectionStart,
                            h = i.selectionEnd,
                            g = i.scrollTop;
                        i.value = i.value.substring(0, f) + a + i.value.substring(h, i.value.length), g > 0 && (i.scrollTop = g), i.focus(), i.selectionStart = f + a.length, i.selectionEnd = f + a.length
                    } else i.value += a, i.focus();
                    t && t(i.value)
                },
                show: function() {
                    t("#emoji_container_" + this.index)[this.showFunc]()
                },
                hide: function() {
                    t("#emoji_container_" + this.index)[this.hideFunc]()
                },
                toggle: function() {
                    t("#emoji_container_" + this.index)[this.toggleFunc]()
                }
            }, t.fn[i] = function(e) {
                return emoji_index++, this.each(function() {
                    var n = t(this),
                        s = n.data("plugin_" + i + emoji_index),
                        c = t.extend({}, a, n.data(), "object" === (void 0 === e ? "undefined" : ye()(e)) && e);
                    s || n.data("plugin_" + i + emoji_index, s = new o(this, c)), "string" == typeof e && s[e]()
                })
            }, t.fn[i].Constructor = o
        }(B.a, window, document),
        function(t, e, n) {
            var i = "emojiParse",
                a = {
                    icons: []
                };

            function o(e, n) {
                this.$content = t(e), this.options = n, this._init()
            }
            o.prototype = {
                _init: function() {
                    var t, e, n, i, a, o, s = this.options.icons,
                        c = s.length,
                        r = {};
                    if (c > 0)
                        for (var l = 0; l < c; l++)
                            if (t = s[l].path, e = s[l].file || ".jpg", n = s[l].placeholder, i = s[l].alias, t)
                                if (i) {
                                    for (var u in i) i.hasOwnProperty(u) && (r[i[u]] = u);
                                    a = n.replace(new RegExp("{alias}", "gi"), "([\\s\\S]+?)");
                                    try {
                                        o = new RegExp(a, "gm")
                                    } catch (t) {
                                        return this.$content.html()
                                    }
                                    this.$content.html(this.$content.html().replace(o, function(n, i) {
                                        var a = r[i];
                                        return a ? '<img class="emoji_icon" src="' + t + a + e + '"/>' : n
                                    }))
                                } else a = n.replace(new RegExp("{alias}", "gi"), "(\\d+?)"), this.$content.html(this.$content.html().replace(new RegExp(a, "gm"), '<img class="emoji_icon" src="' + t + "$1" + e + '"/>'));
                    else alert("Path not config!")
                }
            }, t.fn[i] = function(e) {
                return this.each(function() {
                    var n = t(this),
                        s = n.data("plugin_" + i),
                        c = t.extend({}, a, n.data(), "object" === (void 0 === e ? "undefined" : ye()(e)) && e);
                    s || n.data("plugin_" + i, s = new o(this, c)), "string" == typeof e && s[e]()
                })
            }, t.fn[i].Constructor = o
        }(B.a, window, document);
        var Ie = B.a,
            xe = function(t, e) {
                return {
                    showTab: !0,
                    animation: "fade",
                    button: t,
                    inpCall: e,
                    icons: [{
                        name: "头条",
                        path: _("/img/face/tieba/"),
                        maxNum: 114,
                        file: ".png",
                        placeholder: "#tieba_{alias}#"
                    }, {
                        name: "QQ",
                        path: _("/img/face/qq/"),
                        maxNum: 149,
                        //excludeNums: [41, 45, 54],
                        file: ".gif",
                        placeholder: "#qq_{alias}#"
                    }, {
                        name: "小黄人",
                        path: _("/img/face/emoji/"),
                        maxNum: 79,
                        file: ".png",
                        placeholder: "#emoji_{alias}#"
                    }]
                }
            },
            Ae = function(t, e, n) {
                Ie("#" + t).emoji(xe(e, n))
            },
            ke = function(t) {
                var e = Ie("<span>" + t + "</span>");
                e.emojiParse(xe());
                var n = e.html();
                return e.remove(), n
            },
            Te = {
                name: "BlogCommentPage",
                created: function() {
                    var t = this;
                    Tt.loadLastComment().then(function(e) {
                        e.forEach(function(t) {
                            t.body = ke(t.body)
                        }), t.comments = e
                    })
                },
                methods: {
                    picIcon: function(t) {
                        return _("/img/menuIcon/menuicon-" + t + ".png")
                    }
                },
                data: function() {
                    return {
                        comments: []
                    }
                }
            },
            Le = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_comment_page"
                        }
                    }, [n("div", {
                        staticClass: "menu-body-item"
                    }, [t._m(0), t._v(" "), n("div", t._l(t.comments, function(e, i) {
                        return n("div", {
                            staticClass: "menu-body-item-content"
                        }, [n("router-link", {
                            staticClass: "item-icon icon-unify-style",
                            style: {
                                background: "url(" + e.avatar + ")"
                            },
                            attrs: {
                                to: t.VUE_CTX + "/works/article/" + e.pageId + "?anchor=" + e.anchor,
                                tag: "div"
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "item-content"
                        }, [n("router-link", {
                            staticClass: "item-cont-wrap sing-ellipsis",
                            attrs: {
                                to: t.VUE_CTX + "/works/article/" + e.pageId + "?anchor=" + e.anchor,
                                tag: "div"
                            }
                        }, [t._v("\n            " + t._s(e.title) + "\n          ")]), t._v(" "), n("router-link", {
                            staticClass: "item-cont-wrap double-ellipsis item-cont-body",
                            attrs: {
                                to: t.VUE_CTX + "/works/article/" + e.pageId + "?anchor=" + e.anchor,
                                tag: "div"
                            }
                        }, [n("span", {
                            staticClass: "item-body-wrap",
                            domProps: {
                                innerHTML: t._s(e.body)
                            }
                        }, [t._v("\n                " + t._s(e.body) + "\n            ")])]), t._v(" "), n("router-link", {
                            staticClass: "item-cont-wrap double-ellipsis item-cont-right",
                            attrs: {
                                to: t.VUE_CTX + "/works/article/" + e.pageId + "?anchor=" + e.anchor,
                                tag: "div"
                            }
                        }, [t._v("\n            " + t._s(e.owner) + "\n          ")])], 1)], 1)
                    }), 0)])])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "menu-body-item-title"
                    }, [e("div", [this._v("最新评论")])])
                }]
            };
        var Be = n("VU/8")(Te, Le, !1, function(t) {
                n("Zq8w")
            }, null, null).exports,
            Ne = {
                name: "BlogNavicatPage",
                data: function() {
                    return {
                        isOpenFullScreen: !1
                    }
                },
                beforeRouterEnter: function() {
                    B()("#toc_page").empty()
                },
                created: function() {
                    var t = this;
                    this.$bus.on("articleDestroy", function(t) {
                        B()("#toc_page").empty()
                    }), this.$bus.on("articleInited", function(e) {
                        if (B()(e).attr("data-toc", "#toc_page"), 0 != B()("#app div[data-toc]").length) {
                            B()("#toc_page").empty(), new Jt.a({
                                dom: "#app div[data-toc]",
                                offsetBody: document.querySelector("#app .body-wrap")
                            }).reset();
                            var n = B()("#toc_page");
                            n.css("max-width", "100%"), n.css("top", "0"), n.css("padding", "0"), n.css("margin", "0"), B()("#toc_page .toc-fixed").css("box-shadow", "0"), $.registerAnchorFunc(n);
                            var i = B()("<span class='icon iconfont top topBtn topBtnDown'></span>");
                            i.click(function() {
                                i.hasClass("topBtnDown") ? t.$bus.emit("panelToBottom", {}) : t.$bus.emit("panelToTop", {})
                            }), B()("#toc_page .toc-brand").append(i), t.$bus.on("panelScrollEven", function(t) {
                                var e = B()(".blog-navicat-page");
                                t.target.scrollTop > 60 ? (i.removeClass("topBtnDown"), e.css("position", "fixed"), e.css("top", "50px")) : (i.addClass("topBtnDown"), e.css("position", ""), e.css("top", ""))
                            })
                        }
                    })
                }
            },
            Pe = {
                render: function() {
                    this.$createElement;
                    this._self._c;
                    return this._m(0)
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        attrs: {
                            id: "blog_navicat_page"
                        }
                    }, [e("div", {
                        staticClass: "blog-navicat-page"
                    }, [e("div", {
                        attrs: {
                            id: "toc_page"
                        }
                    })])])
                }]
            };
        var je = {
                name: "BlogFollowers",
                methods: {
                    openBlogByAcc: function(t) {
                        window.open(v.blogUrlPre + t)
                    }
                },
                created: function() {
                    var t = this;
                    Tt.loadFollowers().then(function(e) {
                        t.followInfo = e
                    })
                },
                data: function() {
                    return {
                        followInfo: {
                            followList: [],
                            pageInfo: {
                                pageList: [],
                                current: -1
                            }
                        },
                        current: 1
                    }
                },
                watch: {
                    current: function() {
                        var t = this;
                        this.$bus.emit("openLoadingBar", {}), Tt.loadFollowers(this.current).then(function(e) {
                            t.followInfo = e, t.$bus.emit("closeLoadingBar", {})
                        })
                    }
                }
            },
            Ee = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_followers"
                        }
                    }, [n("div", {
                        staticClass: "followTitle"
                    }, [t._v("最新粉丝")]), t._v(" "), n("div", {
                        staticClass: "followAreaWrap"
                    }, t._l(t.followInfo.followList, function(e) {
                        return n("span", {
                            staticClass: "followArea"
                        }, [n("div", {
                            staticClass: "followAreaItem"
                        }, [n("div", {
                            staticClass: "follow-avatar",
                            attrs: {
                                title: e.username
                            },
                            on: {
                                click: function(n) {
                                    return t.openBlogByAcc(e.account)
                                }
                            }
                        }, [n("img", {
                            attrs: {
                                src: e.avatar
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "follow-username",
                            attrs: {
                                title: e.username
                            },
                            on: {
                                click: function(n) {
                                    return t.openBlogByAcc(e.account)
                                }
                            }
                        }, [n("span", [t._v(t._s(e.username))])])])])
                    }), 0), t._v(" "), n("div", {
                        staticClass: "pageArea"
                    }, [t.followInfo.pageInfo.pageList.length > 0 ? n("div", {
                        staticClass: "page-num"
                    }, [n("ul", {
                        staticClass: "pagination"
                    }, t._l(t.followInfo.pageInfo.pageList, function(e) {
                        return n("li", {
                            on: {
                                click: function(n) {
                                    !isNaN(e) && (t.current = e)
                                }
                            }
                        }, [n("a", {
                            class: {
                                active: e == t.followInfo.pageInfo.current
                            }
                        }, [t._v(t._s(e))])])
                    }), 0)]) : t._e()])])
                },
                staticRenderFns: []
            };
        var Se = {
                name: "BlogWorksAside",
                components: {
                    BlogNavicatPage: n("VU/8")(Ne, Pe, !1, function(t) {
                        n("2fYz")
                    }, null, null).exports,
                    BlogCommentPage: Be,
                    BlogCloudPage: we,
                    BlogInfoPage: ve,
                    BlogHotPage: fe,
                    BlogFollowers: n("VU/8")(je, Ee, !1, function(t) {
                        n("YJZa")
                    }, null, null).exports
                },
                data: function() {
                    return {
                        clickItem: "hot",
                        isNavicat: !1
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.on("articleInited", function(e) {
                        t.clickItem = "navicat", t.isNavicat = !0
                    }), this.$bus.on("articleDestroy", function(e) {
                        t.clickItem = "hot", t.isNavicat = !1
                    })
                }
            },
            $e = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_body_aside"
                        }
                    }, [n("div", {
                        staticClass: "menu-head"
                    }, [n("span", {
                        staticClass: "article-menu-item",
                        class: {
                            "menu-itm-bottom-bar": "hot" == t.clickItem
                        },
                        on: {
                            click: function(e) {
                                t.clickItem = "hot"
                            }
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont fire"
                    })]), t._v(" "), n("span", {
                        staticClass: "article-menu-item",
                        class: {
                            "menu-itm-bottom-bar": "comment" == t.clickItem
                        },
                        on: {
                            click: function(e) {
                                t.clickItem = "comment"
                            }
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont talk"
                    })]), t._v(" "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isNavicat,
                            expression: "isNavicat"
                        }],
                        staticClass: "article-menu-item",
                        class: {
                            "menu-itm-bottom-bar": "navicat" == t.clickItem
                        },
                        on: {
                            click: function(e) {
                                t.clickItem = "navicat"
                            }
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont menu"
                    })]), t._v(" "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isNavicat,
                            expression: "!isNavicat"
                        }],
                        staticClass: "article-menu-item",
                        class: {
                            "menu-itm-bottom-bar": "follower" == t.clickItem
                        },
                        on: {
                            click: function(e) {
                                t.clickItem = "follower"
                            }
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont groupctrl"
                    })])]), t._v(" "), n("blog-hot-page", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "hot" == t.clickItem,
                            expression: "clickItem=='hot'"
                        }]
                    }), t._v(" "), n("blog-comment-page", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "comment" == t.clickItem,
                            expression: "clickItem=='comment'"
                        }]
                    }), t._v(" "), n("blog-navicat-page", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "navicat" == t.clickItem,
                            expression: "clickItem=='navicat'"
                        }]
                    }), t._v(" "), n("blog-info-page", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "navicat" != t.clickItem && "follower" != t.clickItem,
                            expression: "clickItem!='navicat'&&clickItem!='follower'"
                        }]
                    }), t._v(" "), n("blog-cloud-page", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "navicat" != t.clickItem && "follower" != t.clickItem,
                            expression: "clickItem!='navicat'&&clickItem!='follower'"
                        }]
                    }), t._v(" "), n("blog-followers", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "follower" == t.clickItem,
                            expression: "clickItem=='follower'"
                        }]
                    })], 1)
                },
                staticRenderFns: []
            };
        var Ue = {
                name: "BlogWorksBody",
                components: {
                    BlogWorksAside: n("VU/8")(Se, $e, !1, function(t) {
                        n("O4cg")
                    }, null, null).exports
                }
            },
            Me = {
                render: function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("router-view"), this._v(" "), e("BlogWorksAside")], 1)
                },
                staticRenderFns: []
            };
        var Fe = n("VU/8")(Ue, Me, !1, function(t) {
                n("YTIq")
            }, "data-v-5bb60401", null).exports,
            Re = P()(Array(v.pageItemImgs - 1), function(t, e) {
                return e
            }).sort(function() {
                return Math.random() >= .5 ? 1 : -1
            }).map(function(t) {
                return _("/img/pageItem/page-item-" + (1 + t) + ".jpg")
            }),
            Oe = {
                name: "BlogCategory",
                created: function() {
                    var t = this.$route.params;
                    this.initBlogCategory(t.categoryId, t.page, t.categoryType)
                },
                beforeRouteEnter: function(t, e, n) {
                    n()
                },
                beforeRouteUpdate: function(t, e, n) {
                    var i = t.params;
                    this.initBlogCategory(i.categoryId, i.page, i.categoryType), n()
                },
                beforeRouteLeave: function(t, e, n) {
                    n()
                },
                methods: {
                    articleName: function() {
                        return v.blogName
                    },
                    categoryTitle: function() {
                        return v.blogName + ""
                    },
                    categorySign: function() {
                        return v.blogSign
                    },
                    getRandomImg: function() {
                        var t = Re.shift();
                        return Re.push(t), t
                    },
                    getImg: function(t) {
                        return Re[t]
                    },
                    initBlogCategory: function(t, e, n) {
                        var i = this,
                            a = this;
                        this.categoryId = t, this.page = e, this.categoryType = n, T.a.all([new T.a(function(t, e) {
                            "all" == a.categoryType ? Tt.loadAllArticle(a.page).then(function(e) {
                                a.articleList = e.list, a.pageList = e.pageList, t()
                            }) : "category" == a.categoryType ? Tt.loadCategoryArticle(a.categoryId, a.page).then(function(e) {
                                a.categoryName = e.categoryName, a.articleList = e.list, a.pageList = e.pageList, t()
                            }) : "archives" == a.categoryType && Tt.loadArchivesArticle(a.categoryId.replace("-", "/"), a.page).then(function(e) {
                                a.categoryName = e.categoryName, a.articleList = e.list, a.pageList = e.pageList, t()
                            })
                        })]).then(function() {
                            setTimeout(function() {
                                i.$nextTick(function() {
                                    setTimeout(function() {
                                        i.$bus.emit("dataedRoute", !0)
                                    }, 150)
                                })
                            }, 150)
                        })
                    }
                },
                data: function() {
                    return {
                        categoryId: "",
                        categoryType: "",
                        page: "",
                        pageList: [],
                        articleList: [],
                        categoryName: ""
                    }
                }
            },
            Ve = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "main-center-frame",
                        attrs: {
                            id: "blog_category"
                        }
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "all" == t.categoryType,
                            expression: "categoryType=='all'"
                        }],
                        staticClass: "page-head"
                    }, [n("div", {
                        staticClass: "author-name"
                    }, [t._v(t._s(t.categoryTitle()))]), t._v(" "), n("div", {
                        staticClass: "author-sign"
                    }, [t._v(t._s(t.categorySign()))])]), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "all" != t.categoryType,
                            expression: "categoryType!='all'"
                        }],
                        staticClass: "page-head-article"
                    }, [n("div", [t._v(t._s(t.categoryName) + " 下的文章")])]), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "all" != t.categoryType,
                            expression: "categoryType!='all'"
                        }],
                        staticClass: "post-body-head post-body-title"
                    }, [n("span", {
                        staticClass: "icon iconfont iconhome"
                    }), t._v(" "), n("span", [t._v("首页")]), t._v(" "), n("span", {
                        staticClass: "sep"
                    }, [t._v("/")]), t._v(" "), n("span", [t._v(t._s(t.categoryName.replace("随笔分类 - ", "")))])]), t._v(" "), n("div", {
                        staticClass: "page-list-body"
                    }, [t._l(t.articleList, function(e, i) {
                        return n("div", {
                            staticClass: "page-item"
                        }, [n("router-link", {
                            attrs: {
                                tag: "div",
                                to: t.VUE_CTX + "/works/article/" + e.pageId
                            }
                        }, [n("div", {
                            staticClass: "item-left"
                        }, [e.img ? t._e() : n("img", {
                            attrs: {
                                src: t.getRandomImg(i)
                            }
                        }), t._v(" "), e.img ? n("img", {
                            attrs: {
                                src: e.img
                            }
                        }) : t._e()]), t._v(" "), n("div", {
                            staticClass: "item-right"
                        }, [n("div", {
                            staticClass: "item-title sing-ellipsis"
                        }, [t._v("\n            " + t._s(e.title) + "\n          ")]), t._v(" "), n("div", {
                            staticClass: "item-content three-ellipsis"
                        }, [t._v("\n            " + t._s(e.content) + "\n          ")]), t._v(" "), n("div", {
                            staticClass: "item-sign"
                        }, [n("span", {
                            staticClass: "item-sign-author"
                        }, [n("span", {
                            staticClass: "icon iconfont renyuanguanli"
                        }), t._v(" "), n("span", [t._v(t._s(t.articleName()))])]), t._v(" "), n("span", {
                            staticClass: "item-sign-time"
                        }, [n("span", {
                            staticClass: "icon iconfont ios-shijian"
                        }), t._v(" "), n("span", [t._v(t._s(e.time))])]), t._v(" "), n("span", {
                            staticClass: "item-sign-talk"
                        }, [n("span", {
                            staticClass: "icon iconfont talk"
                        }), t._v(" "), n("span", [t._v(t._s(e.commentNum) + " 条评论")])])])])])], 1)
                    }), t._v(" "), n("div", {
                        staticClass: "page-num"
                    }, [n("ul", {
                        staticClass: "pagination"
                    }, t._l(t.pageList, function(e) {
                        return n("li", [n("router-link", {
                            class: {
                                active: e.current
                            },
                            attrs: {
                                tag: "a",
                                to: t.VUE_CTX + "/works/category/" + t.categoryType + "/" + t.categoryId + "/" + e.num
                            }
                        }, [t._v("\n            " + t._s(e.text) + "\n          ")])], 1)
                    }), 0)])], 2)])
                },
                staticRenderFns: []
            };
        var qe = n("VU/8")(Oe, Ve, !1, function(t) {
                n("o22r")
            }, null, null).exports,
            De = function(t, e) {
                t.focus(), t.setSelectionRange && t.setSelectionRange(e.start, e.end)
            },
            He = function(t) {
                var e = {
                    text: "",
                    start: 0,
                    end: 0
                };
                return t.setSelectionRange && (t.focus(), e.start = t.selectionStart, e.end = t.selectionEnd, e.text = e.start !== e.end ? t.value.substring(e.start, e.end) : ""), e
            },
            We = function(t, e, n) {
                var i = void 0,
                    a = void 0,
                    o = void 0,
                    s = void 0,
                    c = void 0;
                De(t, e), t.setSelectionRange && (a = (i = t.value).substring(0, e.start) + n + i.substring(e.end), o = s = e.start + n.length, c = t.scrollTop, t.value = a, t.scrollTop !== c && (t.scrollTop = c), t.setSelectionRange(o, s))
            },
            ze = {
                name: "BlogArticleCommPos",
                props: {
                    pageId: {
                        type: String
                    }
                },
                mounted: function() {},
                created: function() {
                    var t = this;
                    Tt.loadUserName().then(function(e) {
                        t.username = e.username
                    }), this.$bus.on("commentReply", function(e) {
                        var n = e.commentId,
                            i = e.commenterName;
                        t.parentCommentId = n, t.commitArea = "@" + i + "\n" + t.commitArea, t.$refs.reftextarea.focus()
                    }), this.$bus.on("commentChange", function(e) {
                        var n = e.commentId,
                            i = e.index;
                        Tt.loadCommentBody(n).then(function(e) {
                            t.isAddComment = !1, t.chageCommentId = n, t.chageIndex = i, t.commitArea = e, t.$refs.reftextarea.focus()
                        })
                    })
                },
                methods: {
                    openFaceEven: function() {
                        var t = this;
                        this.$refs.faceBtn.isInit || (this.$refs.faceBtn.isInit = !0, Ae("comment_area_wrap", this.$refs.faceBtn, function(e) {
                            t.commitArea = e
                        }))
                    },
                    createWrap: function(t, e) {
                        var n = He(this.$refs.reftextarea);
                        n.text = t + n.text + e, We(this.$refs.reftextarea, n, n.text)
                    },
                    quote: function() {
                        this.createWrap("> ", "")
                    },
                    block: function() {
                        this.createWrap("**", "**")
                    },
                    links: function() {
                        this.createWrap("[](", ")")
                    },
                    insetCode: function() {
                        this.createWrap("`", "`")
                    },
                    OpenImageUploadWindow: function() {
                        var t = this;
                        $.OpenImageUploadWindow(function(e) {
                            t.commitArea = t.commitArea + e
                        })
                    },
                    cancelChangeComment: function() {
                        this.isAddComment = !0, this.chageCommentId = "", this.$refs.reftextarea.focus()
                    },
                    commitComment: function() {
                        var t = this;
                        this.commitArea ? this.isAddComment ? Tt.addComment(this.pageId, this.parentCommentId, this.commitArea).then(function(e) {
                            e.avatar = _("/img/body/defAvatar.jpg"), t.$bus.emit("commitAdd", {
                                data: e
                            }), t.commitArea = "", t.parentCommentId = 0, $.showInfoMsg("评论提交成功")
                        }) : Tt.updateComment(this.chageCommentId, this.commitArea).then(function(e) {
                            e.isSuccess ? ($.showInfoMsg("评论修改成功"), t.$bus.emit("commitUpdate", {
                                chageIndex: t.chageIndex,
                                data: e
                            }), t.chageIndex = "", t.chageCommentId = "", t.isAddComment = !0, t.commitArea = "") : $.showInfoMsg("评论修改失败")
                        }) : $.showInfoMsg("评论不可为空")
                    }
                },
                data: function() {
                    return {
                        isAddComment: !0,
                        commitArea: "",
                        parentCommentId: "",
                        chageCommentId: "",
                        chageIndex: "",
                        username: ""
                    }
                }
            },
            Ge = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_article_comm_pos"
                        }
                    }, [n("div", {
                        staticClass: "post-comment-area"
                    }, [n("div", {
                        staticClass: "area-title-wrap"
                    }, [n("span", {
                        staticClass: "area-title"
                    }, [t._v("发表评论")]), t._v(" "), t.username ? n("span", {
                        staticClass: "commenter-area-name"
                    }, [t._v(t._s(t.username))]) : t._e(), t._v(" "), n("span", {
                        staticClass: "right-bar-wrap"
                    }, [n("span", {
                        staticClass: "icon iconfont pin",
                        attrs: {
                            title: "引用"
                        },
                        on: {
                            click: function(e) {
                                return t.quote()
                            }
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "icon iconfont bold",
                        attrs: {
                            title: "加粗"
                        },
                        on: {
                            click: function(e) {
                                return t.block()
                            }
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "icon iconfont link",
                        attrs: {
                            title: "链接"
                        },
                        on: {
                            click: function(e) {
                                return t.links()
                            }
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "icon iconfont code",
                        attrs: {
                            title: "代码块"
                        },
                        on: {
                            click: function(e) {
                                return t.insetCode()
                            }
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "icon iconfont image-text",
                        attrs: {
                            title: "图片"
                        },
                        on: {
                            click: function(e) {
                                return t.OpenImageUploadWindow()
                            }
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "area-input-wrap"
                    }, [n("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.commitArea,
                            expression: "commitArea"
                        }],
                        ref: "reftextarea",
                        staticClass: "middle-base-scroll",
                        attrs: {
                            id: "comment_area_wrap"
                        },
                        domProps: {
                            value: t.commitArea
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.commitArea = e.target.value)
                            }
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "area-bar-wrap"
                    }, [n("span", {
                        staticClass: "ext-wrap"
                    }, [n("span", {
                        ref: "faceBtn",
                        on: {
                            click: t.openFaceEven
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont face2"
                    }), t._v("表情")]), t._v(" "), t._m(0)]), t._v(" "), n("div", {
                        staticClass: "area-btn-wrap"
                    }, [n("span", {
                        staticClass: "comment-content-post",
                        on: {
                            click: t.commitComment
                        }
                    }, [n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isAddComment,
                            expression: "isAddComment"
                        }]
                    }, [t._v("发表评论")]), t._v(" "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isAddComment,
                            expression: "!isAddComment"
                        }]
                    }, [t._v("修改评论")])]), t._v(" "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isAddComment,
                            expression: "!isAddComment"
                        }],
                        staticClass: "comment-content-cancel",
                        on: {
                            click: t.cancelChangeComment
                        }
                    }, [t._v("取消修改")])])])])])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("span", {
                        staticClass: "icon iconfont iconpen"
                    })])
                }]
            };
        var Xe = n("VU/8")(ze, Ge, !1, function(t) {
                n("BRL4")
            }, null, null).exports,
            Qe = {
                props: {
                    pageId: {
                        type: String
                    }
                },
                name: "BlogArticleCommList",
                created: function() {
                    var t = this;
                    Tt.loadUserName().then(function(e) {
                        t.isChangeComment = e == v.blogName
                    }), this.$bus.on("commitAdd", function(e) {
                        e.data;
                        t.initCommentList()
                    }), this.$bus.on("commitUpdate", function(e) {
                        e.chageIndex, e.data;
                        t.initCommentList()
                    })
                },
                methods: {
                    openCommenter: function(t) {
                        window.open(t)
                    },
                    sendScrollEven: function(t) {
                        var e = this;
                        this.$nextTick(function() {
                            setTimeout(function() {
                                e.$nextTick(function() {
                                    e.$bus.emit("anchorScroll", t)
                                })
                            }, 150)
                        })
                    },
                    initCommentList: function() {
                        var t = this,
                            e = this.$route.query.anchor;
                        this.$bus.emit("openLoadingBar", {}), e ? Tt.loadArticleCommentInfoByAnchor(this.pageId, e).then(function(n) {
                            n.list.forEach(function(t) {
                                t.commentBody = t.commentBody.replace(new RegExp("_src", "g"), "src"), t.commentBody = ke(t.commentBody)
                            }), t.commentInfo = n, t.$bus.emit("closeLoadingBar", {}), t.sendScrollEven(e)
                        }) : Tt.loadArticelCommentInfo(this.pageId, this.pageCur).then(function(e) {
                            e.list.forEach(function(t) {
                                t.commentBody = t.commentBody.replace(new RegExp("_src", "g"), "src"), t.commentBody = ke(t.commentBody)
                            }), t.commentInfo = e, t.$bus.emit("closeLoadingBar", {})
                        })
                    },
                    commentChange: function(t, e) {
                        isNaN(t) ? $.showInfoMsg("该条评论暂时无法修改!") : this.$bus.emit("commentChange", {
                            commentId: t,
                            index: e
                        })
                    },
                    commentDelete: function(t, e) {
                        $.showInfoMsg("暂未支持删除")
                    },
                    commentSupport: function(t, e) {
                        var n = this;
                        t || $.showInfoMsg("暂时无法提交支持"), Tt.commentDigg(t).then(function(t) {
                            t.isSuccess ? ($.showInfoMsg(t.message), n.initCommentList()) : $.showErrMsg(t.message)
                        })
                    },
                    commentBury: function(t) {
                        var e = this;
                        t || $.showInfoMsg("暂时无法提交反对"), Tt.commentBury(t).then(function(t) {
                            t.isSuccess ? ($.showInfoMsg(t.message), e.initCommentList()) : $.showErrMsg(t.message)
                        })
                    },
                    commentReply: function(t, e) {
                        this.$bus.emit("commentReply", {
                            commentId: t,
                            commenterName: e
                        })
                    }
                },
                data: function() {
                    return {
                        pageCur: -1,
                        commentInfo: {
                            list: [],
                            size: 0,
                            current: 1
                        },
                        isChangeComment: !0
                    }
                },
                computed: {
                    sizeList: function() {
                        return $.computePageList(this.commentInfo.size, this.commentInfo.current, 10)
                    }
                },
                mounted: function() {
                    this.initCommentList()
                },
                watch: {
                    pageId: function(t) {
                        this.initCommentList()
                    },
                    pageCur: function() {
                        this.initCommentList()
                    }
                }
            },
            Je = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_article_comm_list"
                        }
                    }, [0 == t.commentInfo.size ? n("div", {
                        staticClass: "area-title-no-wrap"
                    }, [t._v("\n    暂无评论\n  ")]) : t._e(), t._v(" "), t.commentInfo.size > 0 ? n("div", {
                        staticClass: "area-title-wrap"
                    }, [t._v("\n    评论列表\n  ")]) : t._e(), t._v(" "), t.commentInfo.size > 1 ? n("div", {
                        staticClass: "post-comment-num"
                    }, [n("ul", {
                        staticClass: "pagination"
                    }, t._l(t.sizeList, function(e) {
                        return n("li", {
                            on: {
                                click: function(n) {
                                    !isNaN(e) && (t.pageCur = e)
                                }
                            }
                        }, [n("a", {
                            class: {
                                active: t.commentInfo.current == e
                            }
                        }, [t._v(t._s(e))])])
                    }), 0)]) : t._e(), t._v(" "), n("div", {
                        staticClass: "post-comment-list"
                    }, t._l(t.commentInfo.list, function(e, i) {
                        return n("div", {
                            staticClass: "post-body-comment-wrap"
                        }, [n("img", {
                            staticClass: "commenter-head",
                            attrs: {
                                src: e.avatar
                            },
                            on: {
                                click: function(n) {
                                    return t.openCommenter(e.commenterUrl)
                                }
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "commenter-body"
                        }, [n("div", {
                            staticClass: "comment-top-bar"
                        }, [n("div", {
                            staticClass: "comment-top-bar-left"
                        }, [n("div", {
                            staticClass: "commenter-counter",
                            domProps: {
                                innerHTML: t._s(e.layerAnchor)
                            }
                        }, [t._v("\n              " + t._s(e.layerAnchor) + "\n            ")]), t._v(" "), n("div", {
                            staticClass: "commenter-name"
                        }, [t._v("\n              " + t._s(e.commenter) + "\n            ")])]), t._v(" "), n("div", {
                            staticClass: "comment-top-bar-right"
                        }, [e.isReply ? n("span", {
                            staticClass: "post-body-comment-button comment-reply",
                            on: {
                                click: function(n) {
                                    return t.commentReply(e.commentId, e.commenter)
                                }
                            }
                        }, [t._v("回复")]) : t._e(), t._v(" "), e.isUpdate ? n("span", {
                            staticClass: "post-body-comment-button comment-update",
                            on: {
                                click: function(n) {
                                    return t.commentChange(e.commentId, i)
                                }
                            }
                        }, [t._v("修改")]) : t._e(), t._v(" "), e.isDel ? n("span", {
                            staticClass: "post-body-comment-button comment-delete",
                            on: {
                                click: function(n) {
                                    return t.commentDelete(e.commentId, i)
                                }
                            }
                        }, [t._v("删除")]) : t._e()])]), t._v(" "), n("div", {
                            staticClass: "commenter-time",
                            attrs: {
                                id: "bottom_article_time"
                            }
                        }, [t._v(t._s(e.time))]), t._v(" "), n("div", {
                            directives: [{
                                name: "highlight",
                                rawName: "v-highlight"
                            }],
                            staticClass: "commenter-body-content",
                            domProps: {
                                innerHTML: t._s(e.commentBody)
                            }
                        }, [t._v(t._s(e.commentBody))]), t._v(" "), n("div", {
                            staticClass: "comment-bottom-bar"
                        }, [n("div", {
                            staticClass: "comment-bottom-bar-right"
                        }, [n("span", {
                            staticClass: "post-body-comment-button comment-digg",
                            on: {
                                click: function(n) {
                                    return t.commentSupport(e.commentId, e.index)
                                }
                            }
                        }, [n("span", {
                            staticClass: "icon iconfont zan"
                        }), t._v(" "), n("span", {
                            staticClass: "oppose-num"
                        }, [t._v(t._s(e.support))])]), t._v(" "), n("span", {
                            staticClass: "post-body-comment-button comment-bury",
                            on: {
                                click: function(n) {
                                    return t.commentBury(e.commentId, e.index)
                                }
                            }
                        }, [n("span", {
                            staticClass: "icon iconfont zan nozan"
                        }), t._v(" "), n("span", {
                            staticClass: "oppose-num"
                        }, [t._v(t._s(e.oppose))])])])])])])
                    }), 0)])
                },
                staticRenderFns: []
            };
        var Ye = {
                components: {
                    BlogArticleCommList: n("VU/8")(Qe, Je, !1, function(t) {
                        n("Bs7H")
                    }, null, null).exports,
                    BlogArticleCommPos: Xe
                },
                created: function() {
                    var t = this.$route.params,
                        e = this.$route.query;
                    this.initBlogArticle(t.pageId, e.anchor), window.ttt = this
                },
                beforeRouteUpdate: function(t, e, n) {
                    var i = t.params,
                        a = t.query;
                    this.initBlogArticle(i.pageId, a.anchor), n()
                },
                methods: {
                    articleName: function() {
                        return v.blogName
                    },
                    openFullScreenEven: function() {
                        this.$bus.emit("openFullScreenEven", {
                            title: this.article.title,
                            body: this.article.body
                        })
                    },
                    addToWz: function() {
                        return Tt.addToWz(this.pageId)
                    },
                    shareToTsina: function() {
                        return Tt.shareToTsina()
                    },
                    shareOnWechat: function() {
                        return Tt.shareOnWechat()
                    },
                    diggAction: function() {
                        Tt.blogpost(this.pageId).then(function(t) {
                            $.showInfoMsg(t.message)
                        })
                    },
                    fucusAction: function() {
                        Tt.blogFollow().then(function(t) {
                            $.showInfoMsg(t)
                        })
                    },
                    initBlogArticle: function(t, e) {
                        var n = this,
                            i = this;
                        this.pageId = t, T.a.all([new T.a(function(t, e) {
                            Tt.loadArticle(n.pageId).then(function(e) {
                                i.article = e, t()
                            }).catch(function() {
                                t()
                            })
                        }), new T.a(function(t, e) {
                            Tt.loadBlogPostInfo(n.pageId).then(function(e) {
                                i.isDigg = e.digg, i.isFucus = e.fucus, t()
                            }).catch(function() {
                                t()
                            })
                        }), new T.a(function(t, e) {
                            Tt.loadCommentCount(n.pageId).then(function(e) {
                                i.commentCount = e, t()
                            }).catch(function() {
                                t()
                            })
                        }), new T.a(function(t, e) {
                            Tt.loadViewCount(n.pageId).then(function(e) {
                                i.viewCount = e, t()
                            }).catch(function() {
                                t()
                            })
                        }), new T.a(function(t, e) {
                            Tt.loadCategoriesTags(n.pageId).then(function(e) {
                                i.labelList = e, t()
                            })
                        }), new T.a(function(t, e) {
                            Tt.loadPrevnext(n.pageId).then(function(e) {
                                i.prePageId = e.prePageId, i.posPageId = e.posPageId, t()
                            })
                        })]).then(function() {
                            setTimeout(function() {
                                n.$nextTick(function() {
                                    setTimeout(function() {
                                        n.$bus.emit("articleInited", n.$refs.articleBody), n.$bus.emit("dataedRoute", !0)
                                    }, 150)
                                })
                            }, 150)
                        })
                    }
                },
                beforeDestroy: function() {
                    this.$bus.emit("articleDestroy", !0)
                },
                name: "BlogArticle",
                data: function() {
                    return {
                        isFucus: "",
                        isDigg: "",
                        pageId: "",
                        article: {
                            title: "",
                            body: "",
                            fontNum: 0,
                            time: ""
                        },
                        viewCount: 0,
                        commentCount: 0,
                        prePageId: "",
                        posPageId: "",
                        labelList: []
                    }
                }
            },
            Ze = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "blog_article"
                        }
                    }, [n("div", {
                        staticClass: "page-head"
                    }, [n("div", {
                        staticClass: "author-name"
                    }, [n("span", [t._v("\n          " + t._s(t.article.title) + "\n      ")]), t._v(" "), n("span", {
                        staticClass: "icon iconfont eye",
                        on: {
                            click: t.openFullScreenEven
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "eye-explain"
                    })]), t._v(" "), n("div", {
                        staticClass: "author-sign"
                    }, [n("span", [n("span", {
                        staticClass: "icon iconfont renyuanguanli"
                    }), t._v(" "), n("span", [t._v(t._s(t.articleName()))])]), t._v(" "), n("span", [n("span", {
                        staticClass: "icon iconfont ios-shijian"
                    }), t._v(" "), n("span", [t._v(t._s(t.article.time))])]), t._v(" "), n("span", [n("span", {
                        staticClass: "icon iconfont see"
                    }), t._v(" "), n("span", [t._v(t._s(t.viewCount))]), n("span", [t._v("次浏览")])]), t._v(" "), n("span", [n("span", {
                        staticClass: "icon iconfont talk"
                    }), t._v(" "), n("span", [t._v(t._s(t.commentCount))]), n("span", [t._v("条评论")])]), t._v(" "), n("span", [n("span", {
                        staticClass: "icon iconfont iconpen"
                    }), t._v(" "), n("span", [t._v(t._s(t.article.fontNum))]), t._v(" "), n("span", [t._v("字数")])]), t._v(" "), n("span", [n("span", {
                        staticClass: "icon iconfont iconleimupinleifenleileibie"
                    }), t._v(" "), n("span", t._l(t.labelList, function(e) {
                        return n("span", {
                            staticClass: "label-item"
                        }, [n("router-link", {
                            attrs: {
                                to: t.VUE_CTX + "/works/category/tag/" + e.id + "/1",
                                tag: "span"
                            }
                        }, [t._v(" " + t._s(e.text))])], 1)
                    }), 0)])])]), t._v(" "), n("div", {
                        staticClass: "post-body"
                    }, [n("div", {
                        staticClass: "post-body-head post-body-title"
                    }, [n("span", {
                        staticClass: "icon iconfont iconhome"
                    }), n("span", [t._v("首页")]), t._v(" "), n("span", {
                        staticClass: "sep"
                    }, [t._v("/")]), t._v(" "), n("span", [t._v("正文")]), t._v(" "), n("span", {
                        staticClass: "right-area"
                    }, [n("span", [t._v("分享到 :")]), t._v(" "), n("span", {
                        staticClass: "icon iconfont weibo",
                        on: {
                            click: function(e) {
                                return t.shareToTsina()
                            }
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "icon iconfont wechat",
                        on: {
                            click: function(e) {
                                return t.shareOnWechat()
                            }
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "post-body-content post-body-item"
                    }, [n("div", {
                        directives: [{
                            name: "highlight",
                            rawName: "v-highlight"
                        }],
                        ref: "articleBody",
                        staticClass: "post-body-content-wrap",
                        domProps: {
                            innerHTML: t._s(t.article.body)
                        }
                    }, [t._v("\n        " + t._s(t.article.body) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "post-body-content-info"
                    }, [n("div", {
                        staticClass: "last-time"
                    }, [n("span", {
                        staticClass: "icon iconfont ios-shijian"
                    }), t._v("\n          最后修改："), n("span", [t._v(t._s(t.article.time))])]), t._v(" "), n("div", {
                        staticClass: "post-body-bottom"
                    }, [n("span", {
                        staticClass: "post-bottom-item",
                        on: {
                            click: function(e) {
                                return t.diggAction()
                            }
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont zan"
                    }), t._v(" "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isDigg,
                            expression: "!isDigg"
                        }]
                    }, [t._v("已推荐")]), t._v(" "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isDigg,
                            expression: "isDigg"
                        }]
                    }, [t._v("点击推荐")])]), t._v(" "), n("span", {
                        staticClass: "post-bottom-item",
                        on: {
                            click: function(e) {
                                return t.fucusAction()
                            }
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont heart"
                    }), t._v(" "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isFucus,
                            expression: "!isFucus"
                        }]
                    }, [t._v("已关注")]), t._v(" "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isFucus,
                            expression: "isFucus"
                        }]
                    }, [t._v("点击关注")])]), t._v(" "), n("span", {
                        staticClass: "post-bottom-item",
                        on: {
                            click: function(e) {
                                return t.addToWz()
                            }
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont star"
                    }), t._v("收藏该文\n          ")])]), t._v(" "), n("div", {
                        staticClass: "post-body-bottom"
                    }, [n("span", {
                        staticClass: "post-bottom-item",
                        on: {
                            click: function(e) {
                                return t.shareToTsina()
                            }
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont weibo"
                    }), t._v("微博\n          ")]), t._v(" "), n("span", {
                        staticClass: "post-bottom-item",
                        on: {
                            click: function(e) {
                                return t.shareOnWechat()
                            }
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont wechat"
                    }), t._v("微信\n          ")]), t._v(" "), t._m(0)])])]), t._v(" "), n("div", {
                        staticClass: "post-turning post-body-item"
                    }, [n("router-link", {
                        staticClass: "post-turning-pre",
                        attrs: {
                            if: t.prePageId,
                            to: t.VUE_CTX + "/works/article/" + t.prePageId,
                            tag: "span"
                        }
                    }, [t._v("上一篇\n      ")]), t._v(" "), n("router-link", {
                        staticClass: "post-turning-pos",
                        attrs: {
                            if: t.posPageId,
                            to: t.VUE_CTX + "/works/article/" + t.posPageId,
                            tag: "span"
                        }
                    }, [t._v("下一篇\n      ")])], 1), t._v(" "), n("div", {
                        staticClass: "post-body-comment post-body-item"
                    }, [n("blog-article-comm-pos", {
                        attrs: {
                            pageId: t.pageId
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "post-body-comment post-body-item"
                    }, [n("blog-article-comm-list", {
                        attrs: {
                            pageId: t.pageId
                        }
                    })], 1)])])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "post-bottom-item"
                    }, [e("span", {
                        staticClass: "icon iconfont details_admire_icon"
                    }), this._v("赞赏\n          ")])
                }]
            };
        var Ke = n("VU/8")(Ye, Ze, !1, function(t) {
                n("ux2G")
            }, null, null).exports,
            tn = {
                name: "BlogTag",
                created: function() {
                    var t = this.$route.params;
                    this.initBlogCategory(t.categoryId, t.page)
                },
                data: function() {
                    return {
                        categoryId: "",
                        categoryType: "",
                        page: "",
                        pageList: [],
                        articleList: [],
                        categoryName: ""
                    }
                },
                beforeRouteUpdate: function(t, e, n) {
                    var i = t.params;
                    this.initBlogCategory(i.categoryId, i.page), n()
                },
                methods: {
                    initBlogCategory: function(t, e) {
                        var n = this,
                            i = this;
                        this.categoryId = t, this.page = e, T.a.all([new T.a(function(t, e) {
                            Tt.loadTagArticle(i.categoryId, i.page).then(function(e) {
                                n.pageList = e.pageList, n.articleList = e.list, n.categoryName = e.categoryName, t()
                            })
                        })]).then(function() {
                            setTimeout(function() {
                                n.$nextTick(function() {
                                    setTimeout(function() {
                                        n.$bus.emit("dataedRoute", !0)
                                    }, 150)
                                })
                            }, 150)
                        })
                    }
                }
            },
            en = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "main-center-frame",
                        attrs: {
                            id: "blog_tag"
                        }
                    }, [n("div", {
                        staticClass: "page-head-article"
                    }, [n("div", [t._v(t._s(t.categoryName) + " 下的文章")])]), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "all" != t.categoryType,
                            expression: "categoryType!='all'"
                        }],
                        staticClass: "post-body-head post-body-title"
                    }, [n("span", {
                        staticClass: "icon iconfont iconhome"
                    }), t._v(" "), n("span", [t._v("首页")]), t._v(" "), n("span", {
                        staticClass: "sep"
                    }, [t._v("/")]), t._v(" "), n("span", [t._v(t._s(t.categoryName.replace("随笔分类 - ", "")))])]), t._v(" "), n("div", {
                        staticClass: "page-list-body"
                    }, [t._l(t.articleList, function(e) {
                        return n("div", {
                            staticClass: "page-item"
                        }, [n("router-link", {
                            attrs: {
                                tag: "div",
                                to: t.VUE_CTX + "/works/article/" + e.pageId
                            }
                        }, [n("div", {
                            staticClass: "page-item-title"
                        }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                            staticClass: "page-item-desc"
                        }, [t._v("\n          " + t._s(e.author) + " " + t._s(e.time) + " 阅读:" + t._s(e.readNum) + " 评论:" + t._s(e.commentNum) + "\n        ")])])], 1)
                    }), t._v(" "), n("div", {
                        staticClass: "page-num"
                    }, [n("ul", {
                        staticClass: "pagination"
                    }, t._l(t.pageList, function(e) {
                        return n("li", [n("router-link", {
                            class: {
                                active: e.current
                            },
                            attrs: {
                                tag: "a",
                                to: t.VUE_CTX + "/works/category/" + t.categoryType + "/" + t.categoryId + "/" + e.num
                            }
                        }, [t._v("\n            " + t._s(e.text) + "\n          ")])], 1)
                    }), 0)])], 2)])
                },
                staticRenderFns: []
            };
        var nn = n("VU/8")(tn, en, !1, function(t) {
                n("cdHZ")
            }, null, null).exports,
            an = void 0;
        window.location.hash && !window.location.hash.startsWith("#/cnblog") && (an = (an = (an = window.location.hash).replace("#", "")).replace("/", ""));
        var on = function(t) {
            var e = function(t) {
                var e = void 0;
                return (e = new RegExp("^/" + v.blogAcc + "/p/(.+)?.html")).test(t) ? "/works/article/" + t.match(e)[1] : (e = new RegExp("^/" + v.blogAcc + "/category/(.+)?.html")).test(t) ? "/works/category/category/" + t.match(e)[1] + "/1" : void 0
            }(window.location.pathname);
            return {
                path: "/cnblog" + (e = e || "/works/category/all/1/1"),
                query: {
                    anchor: an
                }
            }
        };
        i.a.use(s.a);
        var sn = new s.a({
                routes: [{
                    path: "/",
                    redirect: function(t) {
                        return on(t)
                    }
                }, {
                    path: "/cnblog",
                    name: "BlogMain",
                    component: ie,
                    children: [{
                        path: "author",
                        component: me
                    }, {
                        path: "works",
                        component: Fe,
                        children: [{
                            path: "category/tag/:categoryId/:page",
                            component: nn,
                            props: !0
                        }, {
                            path: "category/:categoryType/:categoryId/:page",
                            component: qe,
                            props: !0
                        }, {
                            path: "article/:pageId",
                            component: Ke,
                            props: !0
                        }]
                    }]
                }, {
                    path: "*",
                    redirect: "/"
                }]
            }),
            cn = (n("7xIN"), n("991W"), n("fC7K")),
            rn = function() {
                function t() {
                    B()("#page_begin_html").remove()
                }
                0 != B()("#shade_animal_wrap").length && (B()("#shade_animal_wrap")[0].addEventListener("transitionend", t), B()("#shade_animal_wrap")[0].addEventListener("webkitTransitionEnd", t), B()("#shade_animal_wrap").css("opacity", "0"))
            },
            ln = n("V8mf"),
            un = n.n(ln);
        n("9pPZ");
        i.a.use(cn.a), i.a.prototype.VUE_CTX = "/cnblog", i.a.config.productionTip = !1, i.a.directive("highlight", function(t) {
            t.querySelectorAll("pre").forEach(function(t) {
                $.initPreCodeCopyBtn(t)
            }), t.querySelectorAll("pre code").forEach(function(t, e) {
                setTimeout(function() {
                    t.highInit || (t.highInit = !0, un.a.highlightBlock(t))
                }, 250 * e)
            })
        });
        new i.a({
            el: "#app",
            router: sn,
            components: {
                App: o
            },
            template: "<App/>",
            beforeCreate: function() {
                var t = this;
                $.initBaiduCount(), sn.beforeEach(function(e, n, i) {
                    $.pushBaiduCount(e.fullPath), t.$bus.emit("beforeRoute", {
                        to: e,
                        from: n,
                        next: i
                    })
                }), sn.afterEach(function(e, n) {
                    t.$bus.emit("afterRoute", {
                        to: e,
                        from: n
                    })
                })
            },
            mounted: function() {
                rn()
            }
        })
    },
    O4cg: function(t, e) {},
    QeqI: function(t, e) {},
    UJDJ: function(t, e) {},
    Wmd0: function(t, e) {},
    YJZa: function(t, e) {},
    YTIq: function(t, e) {},
    Zq8w: function(t, e) {},
    blGy: function(t, e) {},
    cbI5: function(t, e) {},
    cdHZ: function(t, e) {},
    eLY3: function(t, e) {},
    "iAH+": function(t, e) {},
    mL6P: function(t, e) {},
    nukP: function(t, e) {},
    o22r: function(t, e) {},
    p416: function(t, e) {},
    pVUV: function(t, e) {},
    sZhR: function(t, e) {},
    ux2G: function(t, e) {},
    z12H: function(t, e) {}
}, ["NHnr"]);