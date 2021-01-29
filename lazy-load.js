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
            $(window)["on"]("load scroll", delayStateChange);
            delayStateChange();
        });
    };
});
