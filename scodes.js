$(function($) {
  $["fn"].lazyimg = function() {
    return this.each(function() {
      function delayStateChange() {
        var siteName = $(window).height();
        var currentw = $(window).scrollTop();
        var maxwidth = src_item["offset"]().top;
        if (currentw + siteName > maxwidth) {
          var img = new Image;
          img.onload = function() {
            src_item.addClass("lazy-img");
          };
          img.src = normalSrc;
        }
      }
      var src_item = $(this);
      var part01 = src_item.attr("src");
      var height = Math["round"](src_item.height());
      var normalSrc = "";
      if (part01["match"]("s72-c")) {
        normalSrc = part01.replace("/s72-c", height);
      } else { 
          normalSrc = part01;
      }
      $(window)["on"]("load resize scroll", delayStateChange);
      delayStateChange();
    });
  };
});

!function(fn) {
  fn.fn.menupiki = function() {
    return this.each(function() {
      var $ = fn(this);
      var d = $.find(".LinkList ul > li").children("a");
      var g = d.length;
      var n = 0;
      for (; n < g; n++) {
        var b = d.eq(n);
        var c = b.text();
        if ("_" !== c.charAt(0) && "_" === d.eq(n + 1).text().charAt(0)) {
          var children = b.parent();
          children.append('<ul class="sub-menu m-sub"/>');
        }
        if ("_" === c.charAt(0)) {
          b.text(c.replace("_", ""));
          b.parent().appendTo(children.children(".sub-menu"));
        }
      }
      n = 0;
      for (; n < g; n++) {
        b = d.eq(n);
        c = b.text();
        if ("_" !== c.charAt(0) && "_" === d.eq(n + 1).text().charAt(0)) {
          var pro = b.parent();
          pro.append('<ul class="sub-menu2 m-sub"/>');
        }
        if ("_" === c.charAt(0)) {
          b.text(c.replace("_", ""));
          b.parent().appendTo(pro.children(".sub-menu2"));
        }
      }
      $.find(".LinkList ul li ul").parent("li").addClass("has-sub");
    });
  };
}(jQuery);
$("#hamburgerMenu").menupiki();
$("#hamburgerMenu .widget").addClass("show-menu");
$(".hamburgerMenu li ").each(function() {
  var a = $(this).find("a").text();
  if (a.substr(0, 5).match("mega/")) {
    a = a.replace("mega/", "");
    $(this).find("a").text(a);
    $(this).addClass("mega-menu");
    $(this).append('<div class="mega-container"><div class="wait"><div class="loading-icon"></div></div></div>');
    var w = $(this).find("a").attr("href");
    a = w.replace("/search/label/", "");
    var l = $(this).find("a").attr("href");
    null != w && w.match("/search/label/") ? $.ajax({url:"/feeds/posts/default/-/" + a + "?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", success:function(n) {
      for (var r = "", e = '<div class="mega-posts">', b = 0; b < n.feed.entry.length; b++) {
        for (var d = 0; d < n.feed.entry[b].link.length; d++) {
          if ("alternate" == n.feed.entry[b].link[d].rel) {
            r = n.feed.entry[b].link[d].href;
            break;
          }
        }
        d = n.feed.entry[b].title.$t;
        var f = " ", g = n.feed.entry[b].content.$t, t = $("<div>").html(g);
        "media$thumbnail" in n.feed.entry[b] ? (t = n.feed.entry[b].media$thumbnail.url.replace("/s72-c", "/w680"), g.match("youtube.com/embed") && (g = g.replace("/default.", "/hqdefault.")), g = t) : g = -1 < g.indexOf("<img") ? t.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        try {
          f = n.feed.entry[b].category[0].term;
        } catch (v) {
          f = "Featured";
        }
        e += '<div class="mega-post"><div class="mega-menu-thumb"><div class="post-filter-link"><a class="snip-thumbnail lazy-img background-layer" href="' + r + '"><img class="snip-thumbnail lazy-img" alt="' + d +'" src="' + g + '"/></a></div></div><span class="post-tag">' + f + '</span><div class="featured-meta"><h2 class="post-title"><a href="' + r + '">' + d + '</a></h2></div><div class="clear"/></div>';
      }
      e += "</div>";
      $(".menu li").each(function() {
        $(this).find("a").attr("href") == w && ($(this).find(".wait").remove(), $(this).find(".mega-container").html(e), $(this).find(".mega-menu-thumb a").each(function() {
          $(this).attr("src", function(v) {
          });
        }));
      });
    }}) : null != l && l.match("/search/") && $.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", success:function(n) {
      for (var r = "", e = '<div class="mega-posts">', b = 0; b < n.feed.entry.length; b++) {
        for (var d = 0; d < n.feed.entry[b].link.length; d++) {
          if ("alternate" == n.feed.entry[b].link[d].rel) {
            r = n.feed.entry[b].link[d].href;
            break;
          }
        }
        d = n.feed.entry[b].title.$t;
        var f = " ", g = n.feed.entry[b].content.$t, t = $("<div>").html(g);
        "media$thumbnail" in n.feed.entry[b] ? (t = n.feed.entry[b].media$thumbnail.url.replace("/s72-c", "/w680"), g.match("youtube.com/embed") && (g = g.replace("/default.", "/hqdefault.")), g = t) : g = -1 < g.indexOf("<img") ? t.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        try {
          f = n.feed.entry[b].category[0].term;
        } catch (v) {
          f = "Featured";
        }
        e += '<div class="mega-post"><div class="mega-menu-thumb"><div class="post-filter-link"><a class="snip-thumbnail lazy-img background-layer" href="' + r + '"><img class="snip-thumbnail lazy-img" alt="' + d +'" src="' + g + '"/></a></div></div><span class="post-tag">' + f + '</span><div class="featured-meta"><h2 class="post-title"><a href="' + r + '">' + d + '</a></h2></div><div class="clear"/></div>';
      }
      e += "</div>";
      $(".menu li").each(function() {
        $(this).find("a").attr("href") == w && ($(this).find(".wait").remove(), $(this).find(".mega-container").html(e), $(this).find(".mega-menu-thumb a").each(function() {
          $(this).attr("src", function(v) {
          });
        }));
      });
    }});
  }
});
$(".menu li").each(function() {
  (0 < $(this).find("ul").length || 0 < $(this).find(".mega-container").length) && $(this).addClass("drop-down");
  0 < $(this).find("ul").length && $(this).addClass("drop-down");
});
$(".share-buttons .window-piki,.entry-share .window-piki").on("click", function() {
  var a = $(this), w = a.data("url"), l = a.data("width");
  a = a.data("height");
  window.open(w, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + l + ",height=" + a + ",left=" + Math.round(window.screen.width / 2 - l / 2) + ",top=" + Math.round(window.screen.height / 2 - a / 2)).focus();
});
$(".share-buttons").each(function() {
  var a = $(this);
  a.find(".show-hid a").on("click", function() {
    a.toggleClass("show-hidden");
  });
});
$(function() {
  $(".PopularPosts .post-filter-link .snip-thumbnail,.post-filter .post-filter-link .snip-thumbnail,.avatar-container .snip-thumbnail").lazyimg();
  $(".hamburgerMoile-logo").each(function() {
    var a = $(this), w = $("#hamburgerLogo .header-widget a").clone();
    w.find("#title-header").remove();
    w.appendTo(a);
  });
  $("#hamburgerMoile").each(function() {
    var a = $(this);
    $("#hamburger-list").clone().appendTo(a);
    $(".show-hamburger-container, .hide-hamburgerMoile, .overlay").on("click", function() {
      $("body").toggleClass("hamburger-open");
    });
  });
  $(".hamburgerMoile ul li a").on("click", function() {
    $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170);
  });
  $(".social-mobile").each(function() {
    var a = $(this), w = $("#footer-nos ul.social-footer").clone();
    w.removeClass("social-bg");
    w.appendTo(a);
  });
  $(".search-button, .search-container-close").on("click", function() {
    $(".search-container-overlay").toggleClass("search-container-overlay-show");
    $("body").toggleClass("active");
  });
  $("#hamburger-sticky .headerHero").each(function() {
    var a = $(this);
    if (1 == fixedMenu && 0 < a.length) {
      var w = $(document).scrollTop(), l = a.offset().top, n = a.height(), r = l + n;
      $(window).scroll(function() {
        var e = $(document).scrollTop(), b = $("#footer-wrapper").offset().top - n;
        e < b && (e > r ? a.addClass("fixed-nos") : 0 >= e && a.removeClass("fixed-nos"), e > w ? a.removeClass("show") : a.addClass("show"), w = $(document).scrollTop());
      });
    }
  });
  $("#breaking-bsd-news").each(function() {
  $(this);
  var a = $(this).find("get").attr("label"), w = $(this).find("get").attr("type");
  null != a && a.match("recent") && null != w && w.match("slider") ? $.ajax({url:"/feeds/posts/default?orderby=published&alt=json-in-script&max-results=6", type:"get", dataType:"jsonp", success:function(l) {
    var n, r = "";
    l = l.feed.entry;
    if (void 0 !== l) {
      r = "<ul>";
      for (var e = 0; e < l.length; e++) {
        for (n = 0; n < l[e].link.length; n++) {
          if ("alternate" == l[e].link[n].rel) {
            var b = l[e].link[n].href;
            break;
          }
        }
        n = l[e].title.$t;
        r += '<div class="post-title"><a href="' + b + '" target="_blank">' + n + "</a></div>";
      }
      $("#bd-breakingnews").append('<div class="slider-nav"><span class="prev"></span><span class="next"></span></div>');
      r += "</ul>";
      $("#breaking-bsd-news").html(r);
      setInterval(function() {
        $("#breaking-bsd-news div:first").slideUp(function() {
          $(this).appendTo($("#breaking-bsd-news ul")).slideDown();
        });
      }, 5e3);
      $("span.prev").click(function() {
        $("#breaking-bsd-news div:last").slideUp(function() {
          $(this).prependTo($("#breaking-bsd-news ul")).slideDown();
        });
      });
      $("span.next").click(function() {
        $("#breaking-bsd-news div:first").slideUp(function() {
          $(this).appendTo($("#breaking-bsd-news ul")).slideDown();
        });
      });
    } else {
      $("#breaking-bsd-news").html("<span>No result!</span>");
    }
  }, error:function() {
    $("#breaking-bsd-news").html("<strong>Error Loading Feed!</strong>");
  }}) : null != w && w.match("slider") && $.ajax({url:"/feeds/posts/default/-/" + a + "?alt=json-in-script&max-results=6", type:"get", dataType:"jsonp", success:function(l) {
    var n, r = "";
    l = l.feed.entry;
    if (void 0 !== l) {
      r = "<ul>";
      for (var e = 0; e < l.length; e++) {
        for (n = 0; n < l[e].link.length; n++) {
          if ("alternate" == l[e].link[n].rel) {
            var b = l[e].link[n].href;
            break;
          }
        }
        n = l[e].title.$t;
        r += '<div class="post-title"><a href="' + b + '" target="_blank">' + n + "</a></div>";
      }
      $("#bd-breakingnews").append('<div class="slider-nav"><span class="prev"></span><span class="next"></span></div>');
      r += "</ul>";
      $("#breaking-bsd-news").html(r);
      setInterval(function() {
        $("#breaking-bsd-news div:first").slideUp(function() {
          $(this).appendTo($("#breaking-bsd-news ul")).slideDown();
        });
      }, 5e3);
      $("span.prev").click(function() {
        $("#breaking-bsd-news div:last").slideUp(function() {
          $(this).prependTo($("#breaking-bsd-news ul")).slideDown();
        });
      });
      $("span.next").click(function() {
        $("#breaking-bsd-news div:first").slideUp(function() {
          $(this).appendTo($("#breaking-bsd-news ul")).slideDown();
        });
      });
    } else {
      $("#breaking-bsd-news").html("<span>No result!</span>");
    }
  }, error:function() {
    $("#breaking-bsd-news").html("<strong>Error Loading Feed!</strong>");
  }});
});
  $("#load-more-link").each(function() {
    var a = $(this).data("load");
    a && $("#load-more-link").show();
    $("#load-more-link").on("click", function(w) {
      $("#load-more-link").hide();
      $.ajax({url:a, success:function(l) {
        var n = $(l).find(".grid-posts");
        n.find(".post-filter").addClass("loading-frame load-time");
        $(".grid-posts").append(n.html());
        (a = $(l).find("#load-more-link").data("load")) ? $("#load-more-link").show() : ($("#load-more-link").hide(), $("#blog-pager .no-more").addClass("show"));
        $("img.snip-thumbnail").addClass("lazy-img");
      }, beforeSend:function() {
        $("#blog-pager .loading").show();
      }, complete:function() {
        $("#blog-pager .loading").hide();
      }});
      w.preventDefault();
    });
  });
  $(".post-body strike").each(function() {
    var a = $(this), w = a.text().trim();
    "get=(ads1)" == w && a.replaceWith('<div id="new-bottom-ad-placeholder"/>');
    "get=(ads2)" == w && a.replaceWith('<div id="new-top-ad-placeholder"/>');
  });
  $("#new-bottom-ad-placeholder").each(function() {
    var a = $(this);
    a.length && $("#bottom-ad-placeholder").appendTo(a);
  });
  $("#new-top-ad-placeholder").each(function() {
    var a = $(this);
    a.length && $("#top-ad-placeholder").appendTo(a);
  });
  $("#upper-ad .widget").each(function() {
    var a = $(this);
    a.length && a.appendTo($("#bottom-ad-placeholder"));
  });
  $("#lower-ad .widget").each(function() {
    var a = $(this);
    a.length && a.appendTo($("#top-ad-placeholder"));
  });
  $(".author-description a").each(function() {
    $(this).attr("target", "_blank");
  });
  $(".about-author .author-description span a").each(function() {
    var a = $(this), w = a.text().trim(), l = a.attr("href");
    a.replaceWith('<li class="' + w + '"><a href="' + l + '" title="' + w + '" target="_blank"/></li>');
    $(".description-links").append($(".author-description span li"));
    $(".description-links").addClass("show");
  });
  $(".block-inner").each(function() {
    var a = $("a.prev-post-link").attr("href"), w = $("a.next-post-link").attr("href");
    $.ajax({url:a, type:"get", success:function(l) {
      l = $(l).find(".blog-post h1.post-title").text();
      $(".post-prev a .block-inner-inner p").text(l);
    }});
    $.ajax({url:w, type:"get", success:function(l) {
      l = $(l).find(".blog-post h1.post-title").text();
      $(".post-next a .block-inner-inner p").text(l);
    }});
  });
  $("#feed-view, #sidebar-container").each(function() {
    1 == fixedSidebar && $(this).theiaStickySidebar({additionalMarginTop:30, additionalMarginBottom:30});
  });
  $(".backTop").each(function() {
    var a = $(this);
    $(window).on("scroll", function() {
      100 <= $(this).scrollTop() ? a.fadeIn(250) : a.fadeOut(250);
    });
    a.click(function() {
      $("html, body").animate({scrollTop:0}, 500);
    });
  });
  $(".blog-post-comments").each(function() {
    var a = commentsSystem, w = '<div class="fb-comments" data-width="100%" data-href="' + $(location).attr("href") + '" data-numposts="5"></div>', l = "comments-system-" + a;
    "blogger" == a ? $(this).addClass(l).show() : "disqus" == a ? (a = document.createElement("script"), a.type = "text/javascript", a.async = !0, a.src = "//" + disqusShortname + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a), $("#comments").remove(), $(this).append('<div id="disqus_thread"/>').addClass(l).show()) : "facebook" == a ? ($("#comments").remove(), $(this).append(w).addClass(l).show()) : "hide" == a ? $(this).hide() : 
    $(this).addClass("comments-system-default").show();
  });
});
$(".featured-post .HTML .widget-content").each(function() {
  var a = $(this), w = $(this).find("get").attr("label"), l = $(this).find("get").attr("type"), n = '<a class="simple-viewmore" href="/search/label/' + l + '">View All</a>';
  null != w && w.match("recent") && null != l && l.match("featureditem") ? $.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", beforeSend:function() {
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(r) {
    if (a.find(".wait").remove(), a.append('<div class="ty-feat"/>'), r.feed.entry) {
      for (var e = 0; e < r.feed.entry.length; e++) {
        for (var b = r.feed.entry[e], d = 0; d < r.feed.entry[e].link.length; d++) {
          if ("alternate" == r.feed.entry[e].link[d].rel) {
            var f = r.feed.entry[e].link[d].href;
            break;
          }
        }
        d = b.title.$t;
        var t = b.author[0].name.$t, v = b.published.$t, p = v.substring(0, 4), x = v.substring(5, 7), y = v.substring(8, 10), z = b.content.$t;
        v = $("<div>").html(z);
        o = void 0 != b.category ? "<span>" + b.category[0].term + "</span>" : "Featured Post";
        "media$thumbnail" in b ? (v = b.media$thumbnail.url.replace("/s72-c", "/w680"), z.match("youtube.com/embed") && z.replace("/default.", "/hqdefault."), b = v) : b = -1 < z.indexOf("<img") ? v.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        m = '<div class="megaHero item' + e + '"><span class="post-tag">' + o + '</span><div class="featured-image-load"><div class="featured-image-load-thumb"><a class="post-filter-link background-layer" href="' + f + '"><img class="snip-thumbnail" alt="' + d +'" src="' + b + '"/></a><div class="featured-meta"><div class="limbu-feat-box"><h2 class="post-title"><a href="' + f + '">' + d + '</a></h2><div class="post-snip"><span class="post-author  ">' + t + '</span><span class="post-date">' + (monthFormat[parseInt(x, 
        9)] + " " + y + ", " + p) + '</span></div></div></div></div></div></div><div class="clear"/>';
        a.find(".ty-feat").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
    a.closest(".HTML").find(".widget-title").append(n);
  a.children(".ty-feat").find(".megaHero").not(":first-child").wrapAll('<div class="feat-child"/>');
  }}) : null != l && l.match("featureditem") && $.ajax({url:"/feeds/posts/default/-/" + w + "?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", beforeSend:function() {
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(r) {
    if (a.find(".wait").remove(), a.append('<div class="ty-feat"/>'), r.feed.entry) {
      for (var e = 0; e < r.feed.entry.length; e++) {
        for (var b = r.feed.entry[e], d = 0; d < r.feed.entry[e].link.length; d++) {
          if ("alternate" == r.feed.entry[e].link[d].rel) {
            var f = r.feed.entry[e].link[d].href;
            break;
          }
        }
        d = b.title.$t;
        var t = b.author[0].name.$t, v = b.published.$t, p = v.substring(0, 4), x = v.substring(5, 7), y = v.substring(8, 10), z = b.content.$t;
              g = void 0 != b.category ? "<span>" + b.category[0].term + "</span>" : "Featured Post";
        v = $("<div>").html(z);
        "media$thumbnail" in b ? (v = b.media$thumbnail.url.replace("/s72-c", "/w680"), z.match("youtube.com/embed") && z.replace("/default.", "/hqdefault."), b = v) : b = -1 < z.indexOf("<img") ? v.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        m = '<div class="megaHero item' + e + '"><span class="post-tag">' + g + '</span><div class="featured-image-load"><div class="featured-image-load-thumb"><a class="post-filter-link background-layer" href="' + f + '"><img class="snip-thumbnail" alt="' + d +'" src="' + b + '"/></a><div class="featured-meta"><div class="limbu-feat-box"><h2 class="post-title"><a href="' + f + '">' + d + '</a></h2><div class="post-snip"><span class="post-author  ">' + t + '</span><span class="post-date">' + (monthFormat[parseInt(x, 
        9)] + " " + y + ", " + p) + '</span></div></div></div></div></div></div><div class="clear"/>';
        a.find(".ty-feat").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
    a.closest(".HTML").find(".widget-title").append(n);
    a.children(".ty-feat").find(".megaHero").not(":first-child").wrapAll('<div class="feat-child"/>');
  }});
});

$(".dialog-box .HTML .widget-content").each(function() {
  var a = $(this), w = $(this).find("get").attr("no"), l = $(this).find("get").attr("label"), n = $(this).find("get").attr("type"), r = '<a class="simple-viewmore" href="/search/label/' + l + '">View All</a>', rr = '<a class="simple-viewmore" href="/search">View All</a>';
  null != l && l.match("recent") && null != n && n.match("onegrid") ? $.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", beforeSend:function() {
    a.parent(".widget").addClass("onegrid ok-column megagrid");
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(e) {
    if (a.find(".wait").remove(), a.append('<div class="mega-hero"/>'), e.feed.entry) {
      for (var b = 0; b < e.feed.entry.length; b++) {
        for (var d = e.feed.entry[b], f = 0; f < e.feed.entry[b].link.length; f++) {
          if ("alternate" == e.feed.entry[b].link[f].rel) {
            var g = e.feed.entry[b].link[f].href;
            m = "<ul>";
            break;
          }
        }
        f = d.title.$t;
        var t = d.author[0].name.$t, v = void 0 != d.category ? "<span>" + d.category[0].term + "</span>" : "Featured Post", p = d.published.$t, x = p.substring(0, 4), y = p.substring(5, 7), z = p.substring(8, 10), A = d.content.$t;
        p = $("<div>").html(A);
        "media$thumbnail" in d ? (p = d.media$thumbnail.url.replace("/s72-c", "/w680"), A.match("youtube.com/embed") && A.replace("/default.", "/hqdefault."), k = p) : k = -1 < A.indexOf("<img") ? q = p.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        m = 0 == b ? m + ('<div class="manu1-list item' + b + '"><div class="mega-hero-img"><a class="post-filter-link background-layer" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + k + '"/></a><span class="post-tag">' + v + '</span><div class="featured-meta"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class="post-author  ">' + t + '</span><span class="post-date">' + (monthFormat[parseInt(y, 9)] + " " + z + ", " + x) + "</span></div></div></div>") : 
        m + ('<div class="manu1-lists item' + b + '"><div class="manu1-list1"><div class="col-main-thumb"><a class="post-filter-link" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + k + '"/></a></div><div class="piki-hero-box"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + (monthFormat[parseInt(y, 9)] + " " + z + ", " + x) + '</span></div></div></div><div class="clear"/>');
        a.find(".mega-hero").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
            a.closest(".HTML").find(".widget-title").append(rr);
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
    m += "</ul>";
  }}) : null != n && n.match("onegrid") && $.ajax({url:"/feeds/posts/default/-/" + l + "?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", beforeSend:function() {
    a.parent(".widget").addClass("onegrid ok-column megagrid");
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  },  success:function(e) {
    if (a.find(".wait").remove(), a.append('<div class="mega-hero"/>'), e.feed.entry) {
      for (var b = 0; b < e.feed.entry.length; b++) {
        for (var d = e.feed.entry[b], f = 0; f < e.feed.entry[b].link.length; f++) {
          if ("alternate" == e.feed.entry[b].link[f].rel) {
            var g = e.feed.entry[b].link[f].href;
            m = "<ul>";
            break;
          }
        }
        f = d.title.$t;
        var t = d.author[0].name.$t, v = void 0 != d.category ? "<span>" + d.category[0].term + "</span>" : "Featured Post", p = d.published.$t, x = p.substring(0, 4), y = p.substring(5, 7), z = p.substring(8, 10), A = d.content.$t;
        p = $("<div>").html(A);
        "media$thumbnail" in d ? (p = d.media$thumbnail.url.replace("/s72-c", "/w680"), A.match("youtube.com/embed") && A.replace("/default.", "/hqdefault."), k = p) : k = -1 < A.indexOf("<img") ? q = p.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        m = 0 == b ? m + ('<div class="manu1-list item' + b + '"><div class="mega-hero-img"><a class="post-filter-link background-layer" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + k + '"/></a><span class="post-tag">' + v + '</span><div class="featured-meta"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class="post-author  ">' + t + '</span><span class="post-date">' + (monthFormat[parseInt(y, 9)] + " " + z + ", " + x) + "</span></div></div></div>") : 
        m + ('<div class="manu1-lists item' + b + '"><div class="manu1-list1"><div class="col-main-thumb"><a class="post-filter-link" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + k + '"/></a></div><div class="piki-hero-box"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + (monthFormat[parseInt(y, 9)] + " " + z + ", " + x) + '</span></div></div></div><div class="clear"/>');
        a.find(".mega-hero").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
            a.closest(".HTML").find(".widget-title").append(r);
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
    u += "</ul>";
  }});
  null != l && l.match("recent") && null != n && n.match("col-left") ? $.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", beforeSend:function() {
  a.parent(".widget").addClass("column-left lr-column megagrid");
  a.append('<div class="wait"><div class="loading-icon"></div></div>');
}, success:function(g) {
  if (a.find(".wait").remove(), a.append('<div class="dialog-main-wrapper"/>'), g.feed.entry) {
    for (var c = 0; c < g.feed.entry.length; c++) {
      for (var d = g.feed.entry[c], f = 0; f < g.feed.entry[c].link.length; f++) {
        if ("alternate" == g.feed.entry[c].link[f].rel) {
          var l = g.feed.entry[c].link[f].href;
          m = "<ul>";
          break;
        }
      }
      f = d.title.$t;
      var w = void 0 != d.category ? "<span>" + d.category[0].term + "</span>" : "Featured Post", n = d.published.$t, h = n.substring(0, 4), p = n.substring(5, 7), j = n.substring(8, 10), t = d.content.$t;
      n = $("<div>").html(t);
      "media$thumbnail" in d ? (n = d.media$thumbnail.url.replace("/s72-c", "/w680"), t.match("youtube.com/embed") && t.replace("/default.", "/hqdefault."), k = n) : k = -1 < t.indexOf("<img") ? q = n.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
      m = 0 == c ? m + ('<div class="col-top-post item' + c + '"><div class="col-img"><a class="post-filter-link background-layer" href="' + l + '"><img class="snip-thumbnail" alt="' + f +'" src="' + k + '"/></a><span class="post-tag">' + w + '</span><div class="featured-meta"><h2 class="post-title"><a href="' + l + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + (monthFormat[parseInt(p, 9)] + " " + j + ", " + h) + "</span></div></div></div>") : m + ('<div class="col-posts item' + c + '"><div class="col-main-thumb"><a class="post-filter-link" href="' + 
      l + '"><img class="snip-thumbnail" alt="' + f +'" src="' + k + '"/></a></div><div class="piki-hero-box"><h2 class="post-title"><a href="' + l + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + (monthFormat[parseInt(p, 9)] + " " + r + ", " + h) + '</span></div></div><div class="clear"/>');
      a.find(".dialog-main-wrapper").append(m);
      a.find("img.snip-thumbnail").lazyimg();
    }
  } else {
    a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
  }
  m += "</ul>";
}}) : null != n && n.match("col-left") && $.ajax({url:"/feeds/posts/default/-/" + l + "?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", beforeSend:function() {
  a.parent(".widget").addClass("column-left lr-column megagrid");
  a.append('<div class="wait"><div class="loading-icon"></div></div>');
}, success:function(g) {
  if (a.find(".wait").remove(), a.append('<div class="dialog-main-wrapper"/>'), g.feed.entry) {
    for (var c = 0; c < g.feed.entry.length; c++) {
      for (var d = g.feed.entry[c], f = 0; f < g.feed.entry[c].link.length; f++) {
        if ("alternate" == g.feed.entry[c].link[f].rel) {
          var l = g.feed.entry[c].link[f].href;
          u = "<ul>";
          break;
        }
      }
      f = d.title.$t;
      var w = d.author[0].name.$t, n = d.category[0].term, h = d.published.$t, p = h.substring(0, 4), rr = h.substring(5, 7);
      h = h.substring(8, 10);
      j = monthFormat[parseInt(rr, 9)] + " " + h + ", " + p;
      h = d.content.$t;
      p = $("<div>").html(h);
      "media$thumbnail" in d ? (p = d.media$thumbnail.url.replace("/s72-c", "/w680"), h.match("youtube.com/embed") && h.replace("/default.", "/hqdefault."), d = p) : d = -1 < h.indexOf("<img") ? p.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
      u = 0 == c ? u + ('<div class="col-top-post item' + c + '"><div class="col-img"><a class="post-filter-link background-layer" href="' + l + '"><img class="snip-thumbnail" alt="' + f +'" src="' + d + '"/></a><span class="post-tag">' + n + '</span><div class="featured-meta"><h2 class="post-title"><a href="' + l + '">' + f + '</a></h2><div class="post-snip"><span class=" post-author  ">' + w + '</span><span class="post-date">' + r + "</span></div></div></div></div>") : u + ('<div class="col-posts item' + c + 
      '"><div class="col-main-thumb"><a class="post-filter-link" href="' + l + '"><img class="snip-thumbnail" alt="' + f +'" src="' + d + '"/></a></div><div class="piki-hero-box"><h2 class="post-title"><a href="' + l + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + j + '</span></div></div><div class="clear"/>');
      a.find(".dialog-main-wrapper").append(u);
      a.find("img.snip-thumbnail").lazyimg();
    }
    a.closest(".HTML").find(".widget-title").append(r);
  } else {
    a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
  }
  u += "</ul>";
}});
 null != l && l.match("recent") && null != n && n.match("col-right") ? $.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", beforeSend:function() {
  a.parent(".widget").addClass("column-right lr-column megagrid");
  a.append('<div class="wait"><div class="loading-icon"></div></div>');
}, success:function(g) {
  if (a.find(".wait").remove(), a.append('<div class="dialog-main-wrapper"/>'), g.feed.entry) {
    for (var c = 0; c < g.feed.entry.length; c++) {
      for (var d = g.feed.entry[c], f = 0; f < g.feed.entry[c].link.length; f++) {
        if ("alternate" == g.feed.entry[c].link[f].rel) {
          var l = g.feed.entry[c].link[f].href;
          m = "<ul>";
          break;
        }
      }
      f = d.title.$t;
      var w = void 0 != d.category ? "<span>" + d.category[0].term + "</span>" : "Featured Post", n = d.published.$t, h = n.substring(0, 4), p = n.substring(5, 7), j = n.substring(8, 10), t = d.content.$t;
      n = $("<div>").html(t);
      "media$thumbnail" in d ? (n = d.media$thumbnail.url.replace("/s72-c", "/w680"), t.match("youtube.com/embed") && t.replace("/default.", "/hqdefault."), k = n) : k = -1 < t.indexOf("<img") ? q = n.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
      m = 0 == c ? m + ('<div class="col-top-post item' + c + '"><div class="col-img"><a class="post-filter-link background-layer" href="' + l + '"><img class="snip-thumbnail" alt="' + f +'" src="' + k + '"/></a><span class="post-tag">' + w + '</span><div class="featured-meta"><h2 class="post-title"><a href="' + l + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + (monthFormat[parseInt(p, 9)] + " " + j + ", " + h) + "</span></div></div></div>") : m + ('<div class="col-posts item' + c + '"><div class="col-main-thumb"><a class="post-filter-link" href="' + 
      l + '"><img class="snip-thumbnail" alt="' + f +'" src="' + k + '"/></a></div><div class="piki-hero-box"><h2 class="post-title"><a href="' + l + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + (monthFormat[parseInt(p, 9)] + " " + r + ", " + h) + '</span></div></div><div class="clear"/>');
      a.find(".dialog-main-wrapper").append(m);
      a.find("img.snip-thumbnail").lazyimg();
    }
      a.closest(".HTML").find(".widget-title").append(rr);
  } else {
    a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
  }
  a.closest(".HTML").find(".widget-title").append(rr);
  m += "</ul>";
}}) : null != n && n.match("col-right") && $.ajax({url:"/feeds/posts/default/-/" + l + "?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", beforeSend:function() {
    a.parent(".widget").addClass("column-right lr-column megagrid");
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(e) {
    if (a.find(".wait").remove(), a.append('<div class="dialog-main-wrapper"/>'), e.feed.entry) {
      for (var b = 0; b < e.feed.entry.length; b++) {
        for (var d = e.feed.entry[b], f = 0; f < e.feed.entry[b].link.length; f++) {
          if ("alternate" == e.feed.entry[b].link[f].rel) {
            var g = e.feed.entry[b].link[f].href;
            u = "<ul>";
            break;
          }
        }
        f = d.title.$t;
        var t = d.author[0].name.$t, v = d.category[0].term, p = d.published.$t, x = p.substring(0, 4), y = p.substring(5, 7);
        p = p.substring(8, 10);
        y = monthFormat[parseInt(y, 9)] + " " + p + ", " + x;
        p = d.content.$t;
        x = $("<div>").html(p);
        "media$thumbnail" in d ? (x = d.media$thumbnail.url.replace("/s72-c", "/w680"), p.match("youtube.com/embed") && p.replace("/default.", "/hqdefault."), d = x) : d = -1 < p.indexOf("<img") ? x.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        u = 0 == b ? u + ('<div class="col-top-post item' + b + '"><div class="col-img"><a class="post-filter-link background-layer" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + d + '"/></a><span class="post-tag">' + v + '</span><div class="featured-meta"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class=" post-author  ">' + t + '</span><span class="post-date">' + y + "</span></div></div></div></div>") : u + ('<div class="col-posts item' + b + 
        '"><div class="col-main-thumb"><a class="post-filter-link" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + d + '"/></a></div><div class="piki-hero-box"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + y + '</span></div></div><div class="clear"/>');
        a.find(".dialog-main-wrapper").append(u);
        a.find("img.snip-thumbnail").lazyimg();
      }
      a.closest(".HTML").find(".widget-title").append(r);
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
    u += "</ul>";
  }});
  null != l && l.match("recent") && null != n && n.match("sgrid") ? $.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=" + w, type:"get", dataType:"jsonp", beforeSend:function() {
    a.parent(".widget").addClass("megagrid");
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(e) {
    if (a.find(".wait").remove(), a.append('<div class="piki-main-hero"/>'), e.feed.entry) {
      for (var b = 0; b < e.feed.entry.length; b++) {
        for (var d = e.feed.entry[b], f = 0; f < e.feed.entry[b].link.length; f++) {
          if ("alternate" == e.feed.entry[b].link[f].rel) {
            var g = e.feed.entry[b].link[f].href;
            break;
          }
        }
        f = d.title.$t;
        var t = d.published.$t, v = t.substring(0, 4), p = t.substring(5, 7);
        t = t.substring(8, 10);
        h = monthFormat[parseInt(p, 9)] + " " + v + ", " + t;
        c = d.content.$t;
        $c = $("<div>").html(c);
        "media$thumbnail" in d ? (t = d.media$thumbnail.url.replace("/s72-c", "/w680"), c.match("youtube.com/embed") && (c = c.replace("/default.", "/hqdefault.")), v = t) : v = -1 < c.indexOf("<img") ? $c.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        m = '<div class="piki-hero-flow"><div class="piki-hero-thumb"><a class="post-filter-link" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + v + '"/></a></div><div class="piki-hero-box"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + h + "</span></div></div></div>";
        a.find(".piki-main-hero").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
        a.closest(".HTML").find(".widget-title").append(rr);
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
    a.closest(".HTML").find(".widget-title").append('<a class="simple-viewmore" href="/search">View All</a>');
  }}) : null != n && n.match("sgrid") && $.ajax({url:"/feeds/posts/default/-/" + l + "?alt=json-in-script&max-results=" + w, type:"get", dataType:"jsonp", beforeSend:function() {
    a.parent(".widget").addClass("megagrid");
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(e) {
    if (a.find(".wait").remove(), a.append('<div class="piki-main-hero"/>'), e.feed.entry) {
      for (var b = 0; b < e.feed.entry.length; b++) {
        for (var d = e.feed.entry[b], f = 0; f < e.feed.entry[b].link.length; f++) {
          if ("alternate" == e.feed.entry[b].link[f].rel) {
            var g = e.feed.entry[b].link[f].href;
            break;
          }
        }
        f = d.title.$t;
        var t = d.published.$t, v = t.substring(0, 4), p = t.substring(5, 7);
        t = t.substring(8, 10);
        h = monthFormat[parseInt(p, 9)] + " " + v + ", " + t;
        c = d.content.$t;
        $c = $("<div>").html(c);
        "media$thumbnail" in d ? (t = d.media$thumbnail.url.replace("/s72-c", "/w680"), c.match("youtube.com/embed") && (c = c.replace("/default.", "/hqdefault.")), v = t) : v = -1 < c.indexOf("<img") ? $c.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        m = '<div class="piki-hero-flow"><div class="piki-hero-thumb"><a class="post-filter-link" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + v + '"/></a></div><div class="piki-hero-box"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + h + "</span></div></div></div>";
        a.find(".piki-main-hero").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
              a.closest(".HTML").find(".widget-title").append(r);
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
  }});
  null != l && l.match("recent") && null != n && n.match("vgrid") ? $.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=3", type:"get", dataType:"jsonp", beforeSend:function() {
    a.parent(".widget").addClass("megagrid");
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(e) {
    if (a.find(".wait").remove(), a.append('<div class="piki-main-hero"/>'), e.feed.entry) {
      for (var b = 0; b < e.feed.entry.length; b++) {
        for (var d = e.feed.entry[b], f = 0; f < e.feed.entry[b].link.length; f++) {
          if ("alternate" == e.feed.entry[b].link[f].rel) {
            var g = e.feed.entry[b].link[f].href;
            break;
          }
        }
        f = d.title.$t;
        var t = d.published.$t, v = t.substring(0, 4), p = t.substring(5, 7);
        t = t.substring(8, 10);
        h = monthFormat[parseInt(p, 9)] + " " + v + ", " + t;
        c = d.content.$t;
        $c = $("<div>").html(c);
        "media$thumbnail" in d ? (t = d.media$thumbnail.url.replace("/s72-c", "/w680"), c.match("youtube.com/embed") && (c = c.replace("/default.", "/hqdefault.")), d = t) : d = -1 < c.indexOf("<img") ? $c.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        m = '<div class="video-hero"><div class="video-hero-thumb"><a class="post-filter-link background-layer" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + d + '"/><span class="video-ic"></span></a></div><div class="featured-meta"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + h + "</span></div></div></div>";
        a.find(".piki-main-hero").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
        a.closest(".HTML").find(".widget-title").append(rr);
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
  }}) : null != n && n.match("vgrid") && $.ajax({url:"/feeds/posts/default/-/" + l + "?alt=json-in-script&max-results=3", type:"get", dataType:"jsonp", beforeSend:function() {
    a.parent(".widget").addClass("megagrid");
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(e) {
    if (a.find(".wait").remove(), a.append('<div class="piki-main-hero"/>'), e.feed.entry) {
      for (var b = 0; b < e.feed.entry.length; b++) {
        for (var d = e.feed.entry[b], f = 0; f < e.feed.entry[b].link.length; f++) {
          if ("alternate" == e.feed.entry[b].link[f].rel) {
            var g = e.feed.entry[b].link[f].href;
            break;
          }
        }
        f = d.title.$t;
        var t = d.published.$t, v = t.substring(0, 4), p = t.substring(5, 7);
        t = t.substring(8, 10);
        h = monthFormat[parseInt(p, 9)] + " " + v + ", " + t;
        c = d.content.$t;
        $c = $("<div>").html(c);
        "media$thumbnail" in d ? (t = d.media$thumbnail.url.replace("/s72-c", "/w680"), c.match("youtube.com/embed") && (c = c.replace("/default.", "/hqdefault.")), d = t) : d = -1 < c.indexOf("<img") ? $c.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        m = '<div class="video-hero"><div class="video-hero-thumb"><a class="post-filter-link background-layer" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + d + '"/><span class="video-ic"></span></a></div><div class="featured-meta"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + h + "</span></div></div></div>";
        a.find(".piki-main-hero").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
        a.closest(".HTML").find(".widget-title").append(r);
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
  }});
  null != l && l.match("recent") && null != n && n.match("featurepost") ? $.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", beforeSend:function() {
    a.parent(".widget").addClass("megagrid");
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(e) {
    if (a.find(".wait").remove(), a.append('<div class="box-flow-hero"/>'), e.feed.entry) {
      for (var b = 0; b < e.feed.entry.length; b++) {
        for (var d = e.feed.entry[b], f = 0; f < e.feed.entry[b].link.length; f++) {
          if ("alternate" == e.feed.entry[b].link[f].rel) {
            var g = e.feed.entry[b].link[f].href;
            break;
          }
        }
        f = d.title.$t;
        var t = d.published.$t, v = t.substring(0, 4), p = t.substring(5, 7), x = t.substring(8, 10), y = d.content.$t;
        t = $("<div>").html(y);
        "media$thumbnail" in d ? (t = d.media$thumbnail.url.replace("/s72-c", "/w680"), y.match("youtube.com/embed") && y.replace("/default.", "/hqdefault."), y = t) : y = -1 < y.indexOf("<img") ? t.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        o = void 0 != d.category ? "<span>" + d.category[0].term + "</span>" : "Featured Post";
        m = '<div class="box-flow"><div class="box-flow-thumb"><a class="post-filter-link" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + y + '"/></a></div><span class="post-tag">' + o + '</span><div class="piki-hero-box"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + (monthFormat[parseInt(p, 9)] + " " + x + ", " + v) + "</span></div></div></div>";
        a.find(".box-flow-hero").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
        a.closest(".HTML").find(".widget-title").append(rr);
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
  }}) : null != n && n.match("featurepost") && $.ajax({url:"/feeds/posts/default/-/" + l + "?alt=json-in-script&max-results=4", type:"get", dataType:"jsonp", beforeSend:function() {
    a.parent(".widget").addClass("megagrid");
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(e) {
    if (a.find(".wait").remove(), a.append('<div class="box-flow-hero"/>'), e.feed.entry) {
      for (var b = 0; b < e.feed.entry.length; b++) {
        for (var d = e.feed.entry[b], f = 0; f < e.feed.entry[b].link.length; f++) {
          if ("alternate" == e.feed.entry[b].link[f].rel) {
            var g = e.feed.entry[b].link[f].href;
            break;
          }
        }
        f = d.title.$t;
        var t = d.published.$t, v = t.substring(0, 4), p = t.substring(5, 7), x = t.substring(8, 10), y = d.content.$t;
        t = $("<div>").html(y);
        "media$thumbnail" in d ? (t = d.media$thumbnail.url.replace("/s72-c", "/w680"), y.match("youtube.com/embed") && y.replace("/default.", "/hqdefault."), y = t) : y = -1 < y.indexOf("<img") ? t.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        o = void 0 != d.category ? "<span>" + d.category[0].term + "</span>" : "Featured Post";
        m = '<div class="box-flow"><div class="box-flow-thumb"><a class="post-filter-link" href="' + g + '"><img class="snip-thumbnail" alt="' + f +'" src="' + y + '"/></a></div><span class="post-tag">' + o + '</span><div class="piki-hero-box"><h2 class="post-title"><a href="' + g + '">' + f + '</a></h2><div class="post-snip"><span class="post-date">' + (monthFormat[parseInt(p, 9)] + " " + x + ", " + v) + "</span></div></div></div>";
        a.find(".box-flow-hero").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
        a.closest(".HTML").find(".widget-title").append(rr);
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
  }});
});
$(".related-post .related-wrap").each(function() {
  var a = $(this), w = $(this).find("get").attr("label"), l = $(this).find("get").attr("type");
  null != w && w.match("recent") ? $.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=3", type:"get", dataType:"jsonp", beforeSend:function() {
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(r) {
    if (a.find(".wait").remove(), a.append('<div class="piki-main-hero"/>'), r.feed.entry) {
      for (var e = 0; e < r.feed.entry.length; e++) {
        for (var b = r.feed.entry[e], d = 0; d < r.feed.entry[e].link.length; d++) {
          if ("alternate" == r.feed.entry[e].link[d].rel) {
            var f = r.feed.entry[e].link[d].href;
            break;
          }
        }
        d = b.title.$t;
        var g = b.published.$t, t = g.substring(0, 4), v = g.substring(5, 7);
        g = g.substring(8, 10);
        h = monthFormat[parseInt(v, 9)] + " " + t + ", " + g;
        c = b.content.$t;
        $c = $("<div>").html(c);
        "media$thumbnail" in b ? (g = b.media$thumbnail.url.replace("/s72-c", "/w680"), c.match("youtube.com/embed") && (c = c.replace("/default.", "/hqdefault.")), t = g) : t = -1 < c.indexOf("<img") ? $c.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        o = void 0 != b.category ? "<span>" + b.category[0].term + "</span>" : "Featured Post";
        m = '<div class="piki-hero"><div class="piki-hero-thumb"><a class="post-filter-link" href="' + f + '"><img class="snip-thumbnail" alt="' + d +'" src="' + t + '"/></a></div><span class="post-tag">' + o + '</span><div class="piki-hero-box"><h2 class="post-title"><a href="' + f + '">' + d + '</a></h2><div class="post-snip"><span class="post-date">' + h + "</span></div></div></div>";
        a.find(".piki-main-hero").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
    a.closest(".related-post").find(".widget-title").append('<a class="simple-viewmore" href="/search">View All</a>');
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
  }}) : null != l && l.match("related") && $.ajax({url:"/feeds/posts/default/-/" + w + "?alt=json-in-script&max-results=3", type:"get", dataType:"jsonp", beforeSend:function() {
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(r) {
    if (a.find(".wait").remove(), a.append('<div class="piki-main-hero"/>'), r.feed.entry) {
      for (var e = 0; e < r.feed.entry.length; e++) {
        for (var b = r.feed.entry[e], d = 0; d < r.feed.entry[e].link.length; d++) {
          if ("alternate" == r.feed.entry[e].link[d].rel) {
            var f = r.feed.entry[e].link[d].href;
            break;
          }
        }
        d = b.title.$t;
        var g = b.category[0].term, t = b.published.$t, v = t.substring(0, 4), p = t.substring(5, 7);
        t = t.substring(8, 10);
        v = monthFormat[parseInt(p, 9)] + " " + t + ", " + v;
        p = b.content.$t;
        t = $("<div>").html(p);
        "media$thumbnail" in b ? (b = b.media$thumbnail.url.replace("/s72-c", "/w680"), p.match("youtube.com/embed") && p.replace("/default.", "/hqdefault.")) : b = -1 < p.indexOf("<img") ? t.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        u = '<div class="piki-hero"><div class="piki-hero-thumb"><a class="post-filter-link" href="' + f + '"><img class="snip-thumbnail" alt="' + d +'" src="' + b + '"/></a></div><span class="post-tag">' + g + '</span><div class="piki-hero-box"><h2 class="post-title"><a href="' + f + '">' + d + '</a></h2><div class="post-snip"><span class="post-date">' + v + "</span></div></div></div>";
        a.find(".piki-main-hero").append(u);
        a.find("img.snip-thumbnail").lazyimg();
      }
    a.closest(".related-post").find(".widget-title").append('<a class="simple-viewmore" href="/search/label/' + w + '">View All</a>');
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
  }});
});
$(".footer-post .HTML .widget-content").each(function() {
  var a = $(this), w = $(this).find("get").attr("label"), l = $(this).find("get").attr("no"), n = $(this).find("get").attr("type");
  null != w && w.match("recent") && null != n && n.match("footerpost") ? $.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=" + l, type:"get", dataType:"jsonp", beforeSend:function() {
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(r) {
    if (a.find(".wait").remove(), a.append('<div class="footer-hero"/>'), r.feed.entry) {
      for (var e = 0; e < r.feed.entry.length; e++) {
        for (var b = r.feed.entry[e], d = 0; d < r.feed.entry[e].link.length; d++) {
          if ("alternate" == r.feed.entry[e].link[d].rel) {
            var f = r.feed.entry[e].link[d].href;
            break;
          }
        }
        d = b.title.$t;
        var g = b.published.$t, t = g.substring(0, 4), v = g.substring(5, 7), p = g.substring(8, 10), x = b.content.$t;
        g = $("<div>").html(x);
        "media$thumbnail" in b ? (g = b.media$thumbnail.url.replace("/s72-c", "/w680"), x.match("youtube.com/embed") && x.replace("/default.", "/hqdefault."), b = g) : b = -1 < x.indexOf("<img") ? g.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        m = '<div class="footer-list"><div class="f-thumb-img"><a class="post-filter-link" href="' + f + '"><img class="snip-thumbnail" alt="' + f +'" alt="' + d +'" src="' + b + '"/></a></div><div class="piki-hero-box"><h2 class="post-title"><a href="' + f + '">' + d + '</a></h2><div class="post-snip"><span class="post-date">' + (monthFormat[parseInt(v, 9)] + " " + p + ", " + t) + "</span></div></div>";
        a.find(".footer-hero").append(m);
        a.find("img.snip-thumbnail").lazyimg();
      }
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
  }}) : null != n && n.match("footerpost") && $.ajax({url:"/feeds/posts/default/-/" + w + "?alt=json-in-script&max-results=" + l, type:"get", dataType:"jsonp", beforeSend:function() {
    a.append('<div class="wait"><div class="loading-icon"></div></div>');
  }, success:function(r) {
    if (a.find(".wait").remove(), a.append('<div class="footer-piki-wrapper"/>'), r.feed.entry) {
      for (var e = 0; e < r.feed.entry.length; e++) {
        for (var b = r.feed.entry[e], d = 0; d < r.feed.entry[e].link.length; d++) {
          if ("alternate" == r.feed.entry[e].link[d].rel) {
            var f = r.feed.entry[e].link[d].href;
            break;
          }
        }
        d = b.title.$t;
        var g = b.published.$t, t = g.substring(0, 4), v = g.substring(5, 7);
        g = g.substring(8, 10);
        v = monthFormat[parseInt(v, 9)] + " " + g + ", " + t;
        g = b.content.$t;
        t = $("<div>").html(g);
        "media$thumbnail" in b ? (t = b.media$thumbnail.url.replace("/s72-c", "/w680"), g.match("youtube.com/embed") && g.replace("/default.", "/hqdefault."), b = t) : b = -1 < g.indexOf("<img") ? t.find("img:first").attr("src") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
        u = '<div class="footer-list"><div class="f-thumb-img"><a class="post-filter-link" href="' + f + '"><img class="snip-thumbnail" alt="' + f +'" src="' + b + '"/></a></div><div class="piki-hero-box"><h2 class="post-title"><a href="' + f + '">' + d + '</a></h2><div class="post-snip"><span class="post-date">' + v + "</span></div></div>";
        a.find(".footer-piki-wrapper").append(u);
        a.find("img.snip-thumbnail").lazyimg();
      }
    } else {
      a.append(' <div class="error-post"><i class="fa fa-exclamation-triangle" /> <span>Error ! No Posts Available to Show [Please Check Your Shortcut Code] </span></div> ');
    }
  }});
});
