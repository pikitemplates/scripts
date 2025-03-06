<!-- This is code is protected by Instamojo.com, we are the partner of instamojo.com as a payment gateways, instamojo.com help us to accept the payment form our customer. we didn't do such illegal work with their scripts, only for personal use we have hosted this script on Github project. No one have permission to use this script or modify. -->
"use strict";
var IM = function() {
    var b = "id|t|sd|d|sku|s|p|dp|so|b|c|oos|s|c|cats|pc|ai|ail|f|rs|rv|opt1|opt2|opt3|optv1|optv2|optv3|i|i2|i3|i4|i5|i6|i7|i8|i9|i0|di|di2|di3|di4|di5|di6|di7|di8|di9|di10|zi|zi2|zi3|zi4|zi5|zi6|zi7|zi8|zi9|zi10|a|moq|maxoq|g|attrs_v|vk|kgp|n|v|pwyw|prodt",
        c = {},
        d = {},
        e = {},
        f = {},
        g = {},
        h = [],
        i = {
            inventory: {
                production: "https://api.stores.instamojo.com"
            }
        },
        j = [],
        k = {},
        l = {},
        m = [],
        n = [],
        o = [],
        p = {
            quantity: '<div class="bab-quantity-ctrl" id="bab_quantity_ctrl">          <label for="">Qty</label>          <ul class="bab-choose-quantity">            <li class="quant-minus" onClick="IM.decreaseQuantity()">              <svg class="" height="28" viewbox="0 0 24 24" width="28">              <path d="M7,11.5h8v1H7V11.5z"></path></svg>            </li>            <li class="quant-count"><span class="bab-product-quantity-no" id="bab_product_qty">1</span></li>            <li class="quant-plus" onClick="IM.increaseQuantity()">              <svg class="" height="28" viewbox="0 0 24 24" width="28">              <g>                <path d="M11 8h1v9h-1V8z"></path>                <path d="M7 12h9v1H7v-1z"></path>              </g></svg>            </li>          </ul>        </div>'
        },
        q = '<select class="bab-select-box" id="{{key_id}}" name="variant-select-box" onChange="IM.renderOptionsTemplate({{key_id}})">  {{#optionValues}}      {{#selected}}        <option value="{{value}}" selected>{{value}}</option>      {{/selected}}      {{^selected}}        <option value="{{value}}">{{value}}</option>     {{/selected}}  {{/optionValues}}</select><div class="bab-select-arrow"></div>',
        r = '<style>*{box-sizing: border-box;}body{font-family:"Noto Sans", sans-serif;}#bab_pincode_widget{display:none;}.pace-loading{display:block;width:40px;height:40px;border-color:#555 transparent transparent #555;border-style:solid;border-width:2px;border-radius:40px;-webkit-animation:pace-spinner 0.4s linear infinite;animation:pace-spinner 0.4s linear infinite;top:50%;left:50%;margin-left:-20px;position:absolute;margin-top:-20px;z-index:-1;}#gmas_footer{display:none;}@keyframes pace-spinner {0% {-webkit-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:(1turn);transform:rotate(1turn);}}#iframe-bg{position:fixed;left:0;top:0;width:100%;z-index:9999;height:100%;background:rgba(241,244,242,0.94);display:none;transition:all 0.4s ease;transition-delay:2s;}#iframe-bg #myIframe{width:375px;height:600px;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);}span.close{position:absolute;right:20px;top:20px;background:transparent;width:30px;height:30px;border-radius:30px;box-shadow:#555 0 0 0 2px;cursor:pointer;}span.close:before,span.close:after{position:absolute;left:14px;top:7px;content:"";width:2px;height:15px;background:#555;transform:rotate(45deg);}span.close:after{transform:rotate(-45deg);}.product-opt .bab-input.multiple {width: auto;display: inline-block;margin: 5px 5px 5px 0;}.product-opt .bab-input.multiple input {display: inline-block;width: auto;vertical-align: middle;}.product-opt span {font-size: 13px;line-height: 1;}.product-opt .bab-input input {width: 100%;}.product-opt .bab-input {width: 63%;display: inline-block;vertical-align: middle;}.product-opt-text {width: 35%;display: inline-block;vertical-align: middle;}.product-opt p {margin: 0 0 5px;}.product-opt {padding: 10px 0;text-align: left;border-bottom: #ccc solid 1px;}span#show-error {color: #a94442;font-size: 14px;margin: 0 0 10px;display: inline-block;}input#bab_id_paywhatyouwant{width: 100%;padding: 11px 15px;border: 1px solid #e5e5e5;margin: 0;box-sizing: border-box;}.bab-modal-backdrop,.bab-modal-dialog,.bab-modal-overlay{position:fixed;top:0;bottom:0}:root{--button-color:#000}.bab-modal-overlay{right:0;left:0;z-index:1040;background-color:rgba(241,244,242,0.94);display:none;opacity:1}.bab-button,.bab-button:focus,.bab-button:hover{background:var(--button-color);border-radius:var(--button-radius);color:#fff}.bab-buy-btn,.bab-quantity-ctrl label{text-transform:uppercase}.bab-product-item{display:flex;height:200px;overflow:hidden;margin:10px 0}.bab-image-container img{height:auto;width:auto;max-width:100%;max-height:90vh}.bab-item-detail{padding:20px}.bab-button{border:0;text-decoration:none;width:auto;margin:0;padding:6px 12px;cursor:pointer}.bab-modal-backdrop{right:0;left:0;z-index:1040;background-color:#000}.bab-modal-dialog{z-index:2400;right:-400px;margin:0;background-color:#fff;width:385px;-webkit-transition:right .4s ease;-moz-transition:right .4s ease;-ms-transition:right .4s ease;-o-transition:right .4s ease;transition:right .4s ease}.bab-modal-dialog .bab-modal-content{-ms-box-shadow:0;-o-box-shadow:0;box-shadow:0;border-radius:0;background:0;border:0;height:100%}.bab-modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0}.bab-modal-product-popover{position:relative;height:100%;background:#fff}.bab-icon{display:inline-block;vertical-align:middle}.bab-prod-title h3{font-size:1.17em}.bab-short-description{font-size:14px}.bab-price-label{font-size:16px;font-weight:700}.bab-product-content{z-index:1;width:100%;text-align:center;overflow-y:scroll;position:absolute;top:0;padding-bottom:40px;bottom:0}.bab-pincode-form input,.bab-pincode-form select,.bab-product-content>div{padding:10px}.bab-product-price{margin:0 0 2px;font-size:12px;color:#666}.close-button{position:absolute;top:10px;right:25px;z-index:999;cursor:pointer;}.bab-price-cut{text-decoration:line-through;color:#ccc}.bab-pincode-form{display:flex;margin-top:6px}.bab-pincode-form select{background-color:#fff;border:1px solid #000;width:100px}.bab-pincode-widget input{border-width:0 0 1px;border-style:none none solid;border-color:transparent transparent #ccc;padding:10px 0 10 5px;width:69%}.bab-buy-btn,.bab-pincode-btn{background:var(--button-color);border:0;color:#fff;cursor:pointer}.bab-pincode-btn{padding:12px}.bab-pincode-widget{display:flex;flex-flow:wrap;justify-content:space-between;align-items:flex-end}.bab-product-buy-actions-block{z-index:9999;position:absolute;bottom:0;width:100%;left:0;display:flex;align-items:center;justify-content:space-between}.bab-buy-btn{width:100%;margin:0;padding:0;height:40px}.bab-item-detail-block{display:flex;align-items:center;justify-content:space-between;padding:0 12px;margin:10px 0}.bab-buy-btn.bab-add-to-cart{background:0;color:#000;border:1px solid #000}.bab-choose-quantity{padding-left:0;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-ms-align-items:center;align-items:center;justify-content:space-between;width:100px;border:1px solid #ccc;margin:0;height:36px}.bab-choose-quantity li{list-style:none;vertical-align:middle;background-color:#f9f3f3}.bab-choose-quantity li svg{padding-top:5px}.quant-count{background-color:transparent!important}.bab-quantity-ctrl label{font-size:12px;color:#111;margin:0 0 2px;padding:11px 5px}.bab-quantity-ctrl{margin:10px 0;display:flex}.bab-select-wrapper{position:relative;display:inline-block;margin-bottom:18px;width:100%}.bab-pincode-form .bab-select-wrapper{margin-bottom:12px}#option_template .bab-select-wrapper select{margin:5px 0}.bab-select-wrapper select.bab-select-box{font-family:Arial;display:inline-block;width:100%;cursor:pointer;padding:11px 15px;outline:0;border:1px solid #e5e5e5;border-radius:0;background:#fff;color:#070606;appearance:none;-webkit-appearance:none;-moz-appearance:none}.bab-select-wrapper select.bab-select-box::-ms-expand{display:none}.bab-select-wrapper select.bab-select-box:focus,.bab-select-wrapper select.bab-select-box:hover{color:#000;background:#F1F1F7}.bab-select-wrapper select.bab-select-box:disabled{opacity:.5;pointer-events:none}.bab-select-wrapper .bab-select-arrow{position:absolute;top:20px;right:15px;pointer-events:none;border-style:solid;border-width:8px 5px 0;border-color:#7B7B7B transparent transparent}.bab-select-wrapper select:focus~.bab-select-arrow,.bab-select-wrapper select:hover~.bab-select-arrow{border-top-color:#000}.bab-select-wrapper select:disabled~.bab-select-arrow{border-top-color:#CCC}.bab-pincode-form .bab-select-wrapper .bab-select-arrow{top:16px}.bab-modal-dialog .empty-product-state img{width:100%;height:90vh;max-height:300px}.bab-modal-dialog .empty-product-state p{font-size:20px;color:#bcbcbc}.bab-product-buy-actions-block button:disabled{opacity:.6;cursor:not-allowed}@media(min-width:992px){.bab-modal-product-popover .close-button{z-index:999;cursor:pointer;color:#ccc;position:absolute;right:20px;top:10px}}#bab-slider-nav a,.bab-prod-title{text-decoration:none;color:#000}#bab-slider{width:90%;overflow:hidden;margin:auto}#bab-slider-wrapper{width:9999px;transition:left .4s linear;position:relative;display:flex;margin-top:28px}#bab-slider-wrapper .slide{overflow:hidden;display:flex;align-items:center;justify-content:center;width:250px;height:300px;border:1px solid #ccc;margin:10px 28px}.slide img{height:auto;max-width:100%;max-height:100%}#bab-slider-nav{margin:1.2em 0;text-align:center}#bab-slider-nav a{width:.5em;height:.5em;text-align:center;display:inline-block;line-height:2;margin-right:.5em;border-color:#d6d6d6;border-radius:50%;background-color:#d6d6d6}#bab-slider-nav a.current{border-color:#fa5e02;background-color:#fa5e02}.bab-modal-dialog .custom-scroll::-webkit-scrollbar{width:8px;margin-right:20px}.bab-modal-dialog .custom-scroll::-webkit-scrollbar-track{width:2px;background:#ccc;border-radius:0}.bab-modal-dialog .custom-scroll::-webkit-scrollbar-thumb{border-radius:0;width:12px;background:#666}.bab-shipping-detail-list{padding-left:0;list-style:none}.bab-shipping-detail-list>li{display:inline-block;padding-right:5px;padding-left:5px}.bab-shipping-detail-list>li.text-success{color:#66b032}.bab-shipping-detail-list>li.text-danger{color:#a94442}#shipping_option_detail .text-danger{text-align:left;color:#a94442}@media(max-width:767px){.bab-modal-dialog{width:400px}}@media(max-width:380px){.bab-modal-dialog{width:100%;}#bab-slider-wrapper .slide{margin: 10px 5px;}}</style>';
    let s = {
        1: "text",
        2: "radio",
        3: "checkbox",
        4: "date",
        5: "datetime",
        6: "file",
        7: "multifile"
    };

    function t(a) {
        var b = "?format=json";
        if ("POST" == a.method && (b = "?format=json&t=" + Date.now()), ! function(a) {
                for (var b in a)
                    if (a.hasOwnProperty(b)) return !1;
                return !0
            }(a.params))
            for (var c in a.params) b = b ? [b, "&", c, "=", a.params[c]].join("") : [b, c, "=", a.params[c]].join("");
        return fetch([a.url, b].join(""), {
            headers: a.headers,
            method: a.method || "GET",
            body: JSON.stringify(a.data)
        }).then(function(a) {
            return a.json().then(function(b) {
                if (a.ok) return b;
                var c = Object.assign({}, b, {
                    status: a.status,
                    statusText: a.statusText
                });
                return Promise.reject(c)
            })
        }).catch(function(a) {
            return a
        })
    }

    function u(b, c) {
        var a, d = {};
        for (a in b) Object.prototype.hasOwnProperty.call(b, a) && (d[a] = b[a]);
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (d[a] = c[a]);
        return d
    }

    function a(a) {
        t({
            url: [i.inventory[c.env] ? i.inventory[c.env] : c.api, c.store_name, "api/v4/product/"].join("/"),
            params: u({
                offset: 0,
                limit: 500,
                fields: b
            }, a),
            header: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(function(b, r) {
            var q = Mustache.to_html('<div id="iframe-bg"><iframe id="myIframe" name="embedCheckout" style="background: #fff;" height="100%" width="100%"></iframe><span onclick="IM.hideIframe()" class="close"></span><div class="pace-loading"></div></div>'),
                n = Mustache.to_html('<div class="bab-modal-overlay" id="bab_cart_overlay" onclick="IM.hideCart()"></div><div class="bab-modal-dialog" id="bab_cart"> <div class="bab-modal-content">    <div class="bab-modal-product-popover">      <a class="close-button" onclick="IM.hideCart()"><svg class="bab-icon" height="15"       viewbox="0 0 24 24" width="15">        <g>        <path d="M.05 1.04l.99-.99 22.98 22.98-.99.99z"></path>      <path d="M.05 22.96L23.03-.02l.99.99L1.04 23.95z"></path>    </g></svg></a>   <div class="bab-product-content custom-scroll" id="bab_product_content">   </div> <div class="bab-product-buy-actions-block">    <button class="bab-buy-btn bab-buy-now-btn" onclick="IM.onCheckout();">Buy Now</button> </div> </div></div>'),
                o = document.createElement("div");
            if (o.innerHTML = q + n, document.body.appendChild(o), document.getElementById("bab_cart_overlay").style.display = "block", document.getElementById("bab_cart").style.right = "0", b.objects.length)(e = b.objects.filter(function(a) {
                    return a.g == a.id
                })[0]).i || (e.i = "https://gmas-static-assets-1.s3.amazonaws.com/img/brokenimage.png", e.di = "https://gmas-static-assets-1.s3.amazonaws.com/img/brokenimage.png"), b.objects.length > 1 ? (k = b.objects.reduce(function(b, a) {
                    return b[a.optv1] = b[a.optv1] || {}, b[a.optv1][a.optv2] = b[a.optv1][a.optv2] || [], -1 == b[a.optv1][a.optv2].indexOf(a.optv3) && b[a.optv1][a.optv2].push(a.optv3), b
                }, {}), l = b.objects.reduce(function(b, a) {
                    var c = [a.optv1, a.optv2, a.optv3].filter(function(a) {
                        return a
                    }).join("|");
                    return b[c] = v(a, e), a.id == a.g && (f = b[c]), b
                }, {}), j = b.objects, m = Object.keys(k).map(function(a) {
                    return {
                        value: a,
                        selected: a == f.optv1
                    }
                })) : (f = b.objects[0]).quantity = 1, document.querySelectorAll(".bab-product-buy-actions-block button")[0].disabled = !1, y(f), g = u(f, {}),
                function(a) {
                    t({
                        url: [i.inventory[c.env] ? i.inventory[c.env] : c.api, c.store_name, "dapi/inventory/products", a, "custom-fields/"].join("/"),
                        header: {
                            "Content-Type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }).then(function(a, b) {
                        h = a, w({
                            product_options: a
                        })
                    })
                }(a.g);
            else {
                var n = Mustache.to_html('<div class="empty-product-state"><img src="http://gmas-core-media.s3.amazonaws.com/standalone/14/empty-cart.svg"><p>Sorry, the product you are looking for, is not available anymore.</p></div>', d, p);
                document.getElementById("bab_product_content").innerHTML = n, document.querySelectorAll(".bab-product-buy-actions-block button")[0].disabled = !0
            }
        })
    }

    function v(a, b) {
        if ((a = Object.assign({}, a)).quantity = 1, a.t = a.t ? a.t : b.t, a.p = a.p ? parseFloat(a.p) : parseFloat(b.p), a.opt1 = a.opt1 ? a.opt1 : b.opt1, a.opt2 = a.opt2 ? a.opt2 : b.opt2, a.opt3 = a.opt3 ? a.opt3 : b.opt3, a.dp = a.dp ? parseFloat(a.dp) : null, a.vId = a.id, a.sd = a.sd ? a.sd : b.sd, a.moq = a.moq ? a.moq : b.moq, a.c = a.c ? a.c : b.c, a.b = a.b ? a.b : b.b, !a.i) {
            var c = 0;
            for (c = 1; c < 11; c++) {
                var d = 1 == c ? "i" : ["i", c].join(""),
                    e = 1 == c ? "di" : ["di", c].join("");
                a[d] = b[d], a[e] = b[e]
            }
        }
        return a
    }

    function w(b) {
        document.getElementById("bab_productoption_widget") && (document.getElementById("bab_productoption_widget").innerHTML = "");
        var c = b.product_options.map(function(a, b) {
                return u(a, {
                    [s[a.field_type]]: s[a.field_type],
                    title: a.title,
                    customId: a.id
                })
            }),
            d = Mustache.to_html('<form class="bab-pincode-form" id="product_options_main" onsubmit="IM.checkProductOptionsValidation()">    <div class="bab-select-wrapper">    {{#productOptions}}       {{#text}}       <div class="product-opt">         <div class="product-opt-text">           <p>{{title}}</p>           {{#is_chargeable}}           <span>(Extra Charges INR {{charges}})</span>           {{/is_chargeable}}         </div>         <div class="bab-input">           <input id="option_{{customId}}" onKeyUp="IM.onChangeText({{customId}}, \'text\')" type="text" {{#is_mandatory}}required{{/is_mandatory}} >         </div>       </div>      {{/text}}      {{#checkbox}}       <div id="check-req" class="product-opt {{#is_mandatory}}required{{/is_mandatory}}">         <div class="product-opt-text">           <p>{{title}}</p>           {{#is_chargeable}}           <span>(Extra Charges INR {{charges}})</span>           {{/is_chargeable}}         </div>       {{#options}}       <div class="bab-input multiple">         <input id="option_{{customId}}-{{id}}" class="check-new" onClick="IM.onChangeText(\'{{customId}}-{{id}}\',\'checkbox\')" type="checkbox" value="{{text}}">         <span>{{text}} </span>       </div>       {{/options}}       </div>      {{/checkbox}}      {{#radio}}       <div class="product-opt">         <div class="product-opt-text">           <p>{{title}}</p>           {{#is_chargeable}}           <span>(Extra Charges INR {{charges}})</span>           {{/is_chargeable}}         </div>       {{#options}}       <div class="bab-input multiple">         <input id="option_{{customId}}-{{id}}" onClick="IM.onChangeText(\'{{customId}}-{{id}}\',\'radio\')" type="radio" value="{{text}}" name="option-radio" {{#is_mandatory}}required{{/is_mandatory}}>         <span>{{text}}</span>       </div>       {{/options}}       </div>      {{/radio}}      {{#date}}       <div class="product-opt">         <div class="product-opt-text">           <p>{{title}}</p>           {{#is_chargeable}}           <span>(Extra Charges INR {{charges}})</span>           {{/is_chargeable}}         </div>       <div class="bab-input">         <input id="option_{{customId}}" onchange="IM.onChangeText({{customId}},\'date\')" type="date" {{#is_mandatory}}required{{/is_mandatory}}>       </div>       </div>      {{/date}}      {{#datetime}}       <div class="product-opt">         <div class="product-opt-text">           <p>{{title}}</p>           {{#is_chargeable}}           <span>(Extra Charges INR {{charges}})</span>           {{/is_chargeable}}         </div>       <div class="bab-input">         <input id="option_{{customId}}" onchange="IM.onChangeText({{customId}},\'datetime\')" type="datetime-local" {{#is_mandatory}}required{{/is_mandatory}}>       </div>       </div>      {{/datetime}}    {{/productOptions}}     </div>   <button style="display:none;" type="submit" id="product_option_form_submit"></button>', {
                productOptions: c
            }),
            a = document.createElement("div");
        a.innerHTML = d, document.getElementById("bab_productoption_widget") && document.getElementById("bab_productoption_widget").appendChild(a)
    }

    function x(a) {
        document.getElementById("bab-checkout-form") && A("bab-checkout-form");
        var b = {
            title: a.t,
            product_type: a.prodt,
            pay_what_you_want: a.pwyw,
            id: a.id,
            quantity: a.quantity,
            stock: a.s,
            moq: a.moq,
            image: a.i,
            sku: a.sku,
            maxoq: a.maxoq.toString(),
            price: parseInt(a.p),
            final_price: a.dp ? parseInt(a.dp) : parseInt(a.p),
            cod: a.c,
            bank: a.b,
            categories: []
        };
        if (a.dp && (b.discounted_price = parseInt(a.dp)), a.options) {
            for (let d = 0; d < a.options.length; d++) a.options[d].option.chargeable && (b.final_price += parseInt(a.options[d].option.charges));
            b.options = a.options
        }
        if (a.custom_fields) {
            for (let e = 0; e < a.custom_fields.length; e++) a.custom_fields[e].is_chargeable && (b.final_price += parseInt(a.custom_fields[e].charges));
            b.custom_fields = a.custom_fields
        }
        a.vId && (a.opt1 && (b.option1 = a.opt1, b.option1_value = a.optv1), a.opt2 && (b.option2 = a.opt2, b.option2_value = a.optv2), a.opt3 && (b.option3 = a.opt3, b.option3_value = a.optv3));
        var i = {
                total_items: a.quantity,
                total_price: b.final_price * a.quantity,
                item: JSON.stringify(b),
                user_name: c.store_name,
                source: "web",
                user_domain: c.domain
            },
            g = document.getElementById("myIframe"),
            f = g.contentWindow || g.contentDocument;
        f.document && (f = f.document);
        var h = Mustache.to_html('<form id="bab-checkout-form" action="{{user_domain}}/embed/checkout/" method="POST" enctype="application/x-www-form-urlencoded;charset=utf-8"> <input type="hidden" id="bab_cart_form_total_price" name="total_price" value="{{ total_price }}" />  <input type="hidden" id="bab_cart_form_total_items" name="total_items" value="{{ total_items }}" />  <input type="hidden" id="bab_cart_form_username" name="username" value="{{ user_name }}" />  <input type="hidden" id="bab_cart_form_item" name="items" value="{{ item }}" />  <input type="hidden" id="bab_cart_form_source" name="source" value="{{ source }}" /></form>', i);
        document.createElement("div").innerHTML = h, f.write(h)
    }

    function y(a) {
        a.images = [], a.slug = (m = a.t) ? m.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-") : "", a.user_domain = c.domain;
        for (var m, e, f, b = 1; b < 11; b++) {
            var d = 1 == b ? "i" : ["i", b].join(""),
                i = 1 == b ? "di" : ["di", b].join(""),
                k = 1 == b ? "zi" : ["zi", b].join("");
            a[d] ? a.images.push({
                src: a[d],
                index: b
            }) : a[i] ? a.images.push({
                src: a[d],
                index: b
            }) : a[k] && a.images.push({
                src: a[d],
                index: b
            })
        }
        a.currency = "INR", document.getElementById("bab_product_content") && (document.getElementById("bab_product_content").innerHTML = "");
        var l = Mustache.to_html('<div> <div class="bab-popover-image-container">    <div id="bab-slider">    <div id="bab">      <div id="bab-slider-wrapper">        {{#images}}        <div class="slide"><img alt="" src="{{src}}"></div>{{/images}}     </div>     <div id="bab-slider-nav">       {{#images}}<a data-slide="{{index}}" href="#"></a>{{/images}}      </div>   </div> </div><a class="bab-prod-title" href="{{user_domain}}/product/{{id}}/{{slug}}" target="_blank"><h3>{{t}}</h3></a> <div class="bab-short-description">{{{sd}}}</div><div class="bab-item-detail-block"> <div class="bab-price-label">   {{#dp}}    <span class="bab-price-cut">{{currency}} {{p}}</span> {{currency}} {{dp}}   {{/dp}}    {{^dp}}    {{currency}} {{p}}    {{/dp}}  </div> {{>quantity}}</div> <div class="bab-pwyw-widget-wrap" id="bab_pwyw_widget"></div><div class="" id="option_template"></div> <div class="bab-pincode-widget-wrap" id="bab_pincode_widget"></div> <div class="bab-pincode-widget-wrap" id="bab_productoption_widget"></div></div>', a, p),
            g = document.createElement("div");
        g.innerHTML = l, document.getElementById("bab_product_content").appendChild(g), new Slider("#bab-slider"), a.pwyw && (document.getElementById("bab_pwyw_widget") && (document.getElementById("bab_pwyw_widget").innerHTML = ""), e = Mustache.to_html('<form class="bab-paywhatyouwant-form" novalidate>    <div class="bab-input">      <input id="bab_id_paywhatyouwant" name="paywhatyouwant" onKeyUp="IM.checkPWYW()" placeholder="Pay What You Want" type="number">       <span id="show-error"></span>    </div>  </form>'), (f = document.createElement("div")).innerHTML = e, document.getElementById("bab_pwyw_widget").appendChild(f)), j.length > 1 && z(a), w({
            product_options: h
        }), a.s > 0 ? (document.querySelector(".bab-buy-now-btn").disabled = !1, document.querySelector(".bab-buy-now-btn").innerHTML = "Buy Now") : (document.querySelector(".bab-buy-now-btn").disabled = !0, document.querySelector(".bab-buy-now-btn").innerHTML = "Sold Out")
    }

    function z(b) {
        if (b.optv1) {
            m = Object.keys(k).map(function(a) {
                return {
                    value: a,
                    selected: b.optv1 == a
                }
            });
            var c = Mustache.to_html(q, {
                    optionValues: m,
                    key_id: "optv1"
                }),
                a = document.createElement("div");
            a.classList.add("bab-select-wrapper"), a.innerHTML = c, document.getElementById("option_template").appendChild(a)
        }
        if (b.optv2) {
            n = Object.keys(k[b.optv1]).map(function(a) {
                return {
                    value: a,
                    selected: b.optv2 == a
                }
            });
            var c = Mustache.to_html(q, {
                    optionValues: n,
                    key_id: "optv2"
                }),
                a = document.createElement("div");
            a.classList.add("bab-select-wrapper"), a.innerHTML = c, document.getElementById("option_template").appendChild(a)
        }
        if (b.optv3) {
            o = k[b.optv1][b.optv2].map(function(a) {
                return {
                    value: a,
                    selected: b.optv3 == a
                }
            });
            var c = Mustache.to_html(q, {
                    optionValues: o,
                    key_id: "optv3"
                }),
                a = document.createElement("div");
            a.classList.add("bab-select-wrapper"), a.innerHTML = c, document.getElementById("option_template").appendChild(a)
        }
    }

    function A(b) {
        var a = document.getElementById(b);
        a.parentElement.removeChild(a)
    }

    function B(a) {
        return a.replace(/[\u00A0-\u9999<>\&]/gim, a => `&#${a.charCodeAt(0)};`)
    }
    return {
        hideCart: function() {
            document.getElementById("bab_cart").style.right = "-400px", document.getElementById("bab_cart_overlay").style.display = "none"
        },
        hideIframe: function() {
            document.getElementById("myIframe").parentNode.parentNode.remove()
        },
        showCart: function(b) {
            c = b, a({
                g: b.product_id
            })
        },
        increaseQuantity: function() {
            var a = parseInt(document.getElementById("bab_product_qty").innerHTML);
            a < f.s && (a += 1, document.getElementById("bab_product_qty").innerHTML = a), f.quantity = a
        },
        checkPincode: function() {
            var a = [];
            a.push(f.id);
            var b = {
                country: document.getElementById("bab_id_country").value,
                pincode: document.getElementById("bab_id_pincode").value,
                productIds: a
            };
            t({
                url: [i.inventory[c.env] ? i.inventory[c.env] : c.api, c.store_name, "dapi/v1/shipping/check-delivery/"].join("/"),
                params: b,
                header: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then(function(a, i) {
                if (a.status && a.status > 300) {
                    delete a.status, delete a.statusText, document.getElementById("shipping_option_detail") && (document.getElementById("shipping_option_detail").innerHTML = "");
                    var b, c, d, g = "",
                        e = document.createElement("div"),
                        h = a,
                        j = ["country", "pincode"];
                    Object.keys(h).forEach(function(a) {
                        g = j.indexOf(a) > -1 ? g + '<p class="text-danger">' + a + ":" + h[a] + "</p>" : g + '<p class="text-danger">' + h[a] + "</p>"
                    }), e.innerHTML = g, document.getElementById("shipping_option_detail").appendChild(e), document.getElementById("bab_pincode_widget").scrollIntoView(!0)
                } else b = a[f.id], document.getElementById("shipping_option_detail") && (document.getElementById("shipping_option_detail").innerHTML = ""), c = Mustache.to_html('<ul class="bab-shipping-detail-list">  {{#cod}} <li class="text-success">\xe2\u0153" Cash on delivery</li>  {{/cod}}  {{^cod}}  <li class="text-danger">\xe2\x9d\u0152 Cash on delivery</li>  {{/cod}}  {{#replace}} <li class="text-success">\xe2\u0153" Replacement</li>  {{/replace}}  {{^replace}}  <li class="text-danger">\xe2\x9d\u0152 Replacement</li>  {{/replace}}  {{#returns}} <li class="text-success">\xe2\u0153" Return</li>  {{/returns}}  {{^returns}}  <li class="text-danger">\xe2\x9d\u0152 Return</li>  {{/returns}}  {{^prepaid}} <li class="text-danger">\xe2\x9d\u0152 Online payment</li>  {{/prepaid}}  {{#estimated_shipping_charge}} <li>Estimated Shipping Charge: <b>{{ currency }} {{estimated_shipping_charge }}</b></li>  {{/estimated_shipping_charge}}</ul>', b), (d = document.createElement("div")).innerHTML = c, document.getElementById("shipping_option_detail").appendChild(d), document.getElementById("bab_pincode_widget").scrollIntoView(!0)
            })
        },
        renderOptionsTemplate: function(d) {
            var c = d.id,
                a = document.getElementById("optv1").value;
            if ("optv1" == c) b = Object.keys(k[a])[0], e = k[a][b][0];
            else if ("optv2" == c) {
                var b = document.getElementById("optv2").value;
                e = k[a][b][0]
            } else var a = document.getElementById("optv1").value,
                b = document.getElementById("optv2").value,
                e = document.getElementById("optv3").value;
            document.getElementById("bab_product_content").innerHTML = "", f = l[[a, b, e].filter(function(a) {
                return a
            }).join("|")], y(f)
        },
        decreaseQuantity: function() {
            var a = parseInt(document.getElementById("bab_product_qty").innerHTML);
            a > 1 && (a -= 1, document.getElementById("bab_product_qty").innerHTML = a), f.quantity = a
        },
        onCheckout: function() {
            let g = document.getElementById("check-req");
            if (g && g.classList.contains("required")) {
                let b = document.getElementsByClassName("check-new");
                for (let d = 0; d < b.length; d++) {
                    if (b[d].checked) {
                        for (let e = 0; e < b.length; e++) b[e].required = !1;
                        break
                    }
                    b[d].required = !0
                }
            }
            if (document.getElementById("product_options_main")) {
                if (!1 == document.getElementById("product_options_main").checkValidity()) document.getElementById("product_option_form_submit").click();
                else {
                    x(f);
                    var c = document.getElementById("myIframe"),
                        a = c.contentWindow || c.contentDocument;
                    a.document && (a = a.document), a.getElementById("bab-checkout-form").submit(), document.getElementById("iframe-bg").style.display = "block", IM.hideCart()
                }
            } else {
                x(f);
                var c = document.getElementById("myIframe"),
                    a = c.contentWindow || c.contentDocument;
                a.document && (a = a.document), a.getElementById("bab-checkout-form").submit()
            }
        },
        fetchProductDetails: a,
        renderUI: function(a) {
            var d = document.createElement("div");
            d.innerHTML = r, document.body.appendChild(d), document.documentElement.style.setProperty("--button-color", a.button_color), document.documentElement.style.setProperty("--button-radius", a.button_radius), (c = a).env = c.env ? c.env : "production", document.getElementById("") && function(a) {
                t({
                    url: [i.inventory[c.env] ? i.inventory[c.env] : c.api, c.store_name, "api/v4/product/"].join("/"),
                    params: u({
                        offset: 0,
                        limit: 1,
                        fields: b
                    }, a),
                    header: {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }).then(function(e, f) {
                    var b, d, a;
                    (b = e.objects[0]).currency = "INR", d = Mustache.to_html('<div class="bab-product-item-img">  <div class="bab-image-container">    <img alt="" src="{{i}}" class="">  </div></div><div class="bab-item-detail">  <h2 class="bab-item-title">{{t}}</h2>  <p class="bab-item-price">   {{#dp}}    <span class="bab-price-cut">{{currency}} {{p}}</span>    <span class="bab-price-text">{{currency}} {{dp}}</span>    {{/dp}}    {{^dp}}    <span class="bab-price-text">{{currency}} {{p}}</span>    {{/dp}}  </p> <p class="bab-item-price">{{sd}}</p> <a class="bab-button" onClick="IM.showCart({{g}});" href="javascript:void(0);">Buy Now</a></div>', b), (a = document.createElement("div")).classList.add("bab-product-item"), a.innerHTML = d, document.getElementById("").appendChild(a)
                })
            }({
                id: a.product_id
            })
        },
        render: function() {
            function a() {
                Array.prototype.slice.call(document.querySelectorAll('a[rel="im-new-checkout nofollow"]')).forEach(d => {
                    var a, b, e;
                    ! function(l, b) {
                        var f, g, h, a, m;
                        let i, d, c = Math.floor(100 * Math.random() + 1),
                            j = (f = c, (g = b.imageUrl) ? `<div class="img-${f}">
      <img class="checkout-image" src=${g} />
    </div>` : ""),
                            k = function(c, a) {
                                let b = a ? B(a) : a;
                                return b ? `<div class="desc-${c}">
      <p class="checkout-description">${b}</p>
    </div>` : ""
                            }(c, b.description),
                            e = (h = c, i = {
                                product_id: (a = b).product_id,
                                domain: a.domain,
                                store_name: a.store_name,
                                env: a.env,
                                api: a.api
                            }, d = `<a href="javascript:void(0)" class="im-checkout-btn" onClick=IM.showCart(` + JSON.stringify(i) + `);>` 
                            + (a.verb && "" !== a.verb ? B(a.verb) : "Pay") +
                            `<svg height="26px" version="1.1" viewBox="0 0 66 26" width="58px" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <circle fill="#4CAF50" cx="52.5" cy="13" r="12.5"/>
                                    <g>
                                        <path fill="#FFFFFF" d="M58.5,13.14c0-0.42-0.03-0.83-0.11-1.25h-5.77v2.36h3.31c-0.14,0.76-0.58,1.43-1.22,1.86v1.53h1.97C57.83,16.58,58.5,15,58.5,13.14L58.5,13.14z"/>
                                        <path fill="#FFFFFF" d="M52.62,19.12c1.65,0,3.04-0.54,4.06-1.48l-1.97-1.53c-0.55,0.37-1.26,0.59-2.08,0.59c-1.6,0-2.95-1.08-3.44-2.53h-2.03v1.58C48.19,17.82,50.31,19.12,52.62,19.12z"/>
                                    </g>
                                </g>
                            </svg>
                        </a>`;                        
                        l.outerHTML = b.layout ? `
        ${"vertical"===b.layout?`
        ${j}
        ${k}
        ${e}
         `:`
        <div>
          ${j}
        </div>
        <div>
          ${k}
          ${e}
        </div>
          `}
      ` : e,
                            function(a, b) {
                                let c = '';
                            }(c, b)
                    }(d, (c = {
                        product_id: (a = d).getAttribute("data-id"),
                        domain: a.getAttribute("data-domain"),
                        store_name: a.getAttribute("data-store-name"),
                        env: a.hasAttribute("data-env") ? a.getAttribute("data-env") : "production",
                        api: a.hasAttribute("data-api") ? a.getAttribute("data-api") : ""
                    }, {
                        product_id: a.getAttribute("data-id"),
                        domain: a.getAttribute("data-domain"),
                        store_name: a.getAttribute("data-store-name"),
                        env: c.env ? c.env : "staging",
                        api: c.api ? c.api : "",
                        id: a.getAttribute("data-id"),
                        behavior: a.getAttribute("data-behavior") || a.getAttribute("data-behaviour"),
                        link: a.href,
                        style: a.getAttribute("data-style"),
                        tab: a.getAttribute("data-newtab"),
                        verb: a.getAttribute("data-text"),
                        cssStyle: a.getAttribute("data-css-style"),
                        imageUrl: a.getAttribute("data-image"),
                        description: a.getAttribute("data-description"),
                        layout: a.getAttribute("data-layout")
                    })), (b = document.createElement("div")).innerHTML = r, document.body.appendChild(b), (b = document.createElement("div")).innerHTML = '<style>.btn_container{display:inline}.im-new-checkout-btn{outline:none;text-decoration:none;cursor:pointer;text-align:center;display:block;font-family:"Open Sans", "Lucida Grande", "Lucida Sans", Tahoma, sans-serif;transition:0.3s}.im-new-checkout-btn.btn--light{color:#fff;letter-spacing:1px;text-shadow:rgba(0,0,0,0.6) 0 1px 1px;padding:0.6em 0.7em;border:1px solid rgba(59,122,50,0.3);border-bottom:1px solid rgba(0,0,0,0.7);border-radius:4px;background:#75c26a;background-image:-webkit-linear-gradient(top, rgba(255,255,255,0.3), rgba(0,0,0,0.25));background-image:-moz-linear-gradient(top, rgba(255,255,255,0.3), rgba(0,0,0,0.25));background-image:-o-linear-gradient(top, rgba(255,255,255,0.3), rgba(0,0,0,0.25));background-image:linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.25));box-shadow:inset 0 1px rgba(255,255,255,0.4),inset 0 0 0 1px rgba(255,255,255,0.15),inset 0 -1px 3px rgba(0,0,0,0.3),0 1px 3px rgba(0,0,0,0.2);line-height:1.2em;margin:0.3em 0}.im-new-checkout-btn.btn--light:focus,.im-new-checkout-btn.btn--light:hover{color:adjust-lightness(#fff, 5%);background:adjust-lightness(#75c26a, 5%);background-image:-webkit-linear-gradient(top, rgba(255,255,255,0.15), rgba(0,0,0,0.35));box-shadow:inset 0 1px 0px rgba(255,255,255,0.45),inset 0 0 0 1px rgba(255,255,255,0.2),inset 0 -1px 3px rgba(0,0,0,0.3),0 1px 2px 1px rgba(0,0,0,0.25)}.im-new-checkout-btn.btn--light:active,.im-new-checkout-btn.btn--light.active{text-shadow:none;color:#eeeeee;background:adjust-lightness(#75c26a, -4%);background-image:-webkit-linear-gradient(top, rgba(255,255,255,0.07), rgba(0,0,0,0.1));background-image:-moz-linear-gradient(top, rgba(255,255,255,0.07), rgba(0,0,0,0.1));background-image:-o-linear-gradient(top, rgba(255,255,255,0.07), rgba(0,0,0,0.1));background-image:linear-gradient(top, rgba(255,255,255,0.07), rgba(0,0,0,0.1));box-shadow:inset 0 1px 4px rgba(0,0,0,0.3),0 2px 2px rgba(255,255,255,0.3)}.im-new-checkout-btn.btn--light:hover,.im-new-checkout-btn.btn--light:focus,.im-new-checkout-btn.btn--light.active{text-decoration:none}.im-new-checkout-btn.btn--dark{color:#302b2f;letter-spacing:1px;text-shadow:rgba(0,0,0,0.6) 0 1px 1px;padding:0.6em 0.7em;border:1px solid rgba(186,160,19,0.3);border-bottom:1px solid rgba(0,0,0,0.7);border-radius:4px;background:#efd85d;background-image:-webkit-linear-gradient(top, rgba(255,255,255,0.3), rgba(0,0,0,0.25));background-image:-moz-linear-gradient(top, rgba(255,255,255,0.3), rgba(0,0,0,0.25));background-image:-o-linear-gradient(top, rgba(255,255,255,0.3), rgba(0,0,0,0.25));background-image:linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.25));box-shadow:inset 0 1px rgba(255,255,255,0.4),inset 0 0 0 1px rgba(255,255,255,0.15),inset 0 -1px 3px rgba(0,0,0,0.3),0 1px 3px rgba(0,0,0,0.2);line-height:1.2em;margin:0.3em 0;letter-spacing:0px;font-weight:bold;text-shadow:rgba(255,255,255,0.4) 0 1px}.im-new-checkout-btn.btn--dark:focus,.im-new-checkout-btn.btn--dark:hover{color:adjust-lightness(#302b2f, 5%);background:adjust-lightness(#efd85d, 5%);background-image:-webkit-linear-gradient(top, rgba(255,255,255,0.15), rgba(0,0,0,0.35));box-shadow:inset 0 1px 0px rgba(255,255,255,0.45),inset 0 0 0 1px rgba(255,255,255,0.2),inset 0 -1px 3px rgba(0,0,0,0.3),0 1px 2px 1px rgba(0,0,0,0.25)}.im-new-checkout-btn.btn--dark:active,.im-new-checkout-btn.btn--dark.active{text-shadow:none;color:#eeeeee;background:adjust-lightness(#efd85d, -4%);background-image:-webkit-linear-gradient(top, rgba(255,255,255,0.07), rgba(0,0,0,0.1));background-image:-moz-linear-gradient(top, rgba(255,255,255,0.07), rgba(0,0,0,0.1));background-image:-o-linear-gradient(top, rgba(255,255,255,0.07), rgba(0,0,0,0.1));background-image:linear-gradient(top, rgba(255,255,255,0.07), rgba(0,0,0,0.1));box-shadow:inset 0 1px 4px rgba(0,0,0,0.3),0 2px 2px rgba(255,255,255,0.3)}.im-new-checkout-btn.btn--flat{background:#75c26a;box-shadow:none;border:1px solid adjust-lightness(#75c26a, -10%);text-shadow:none;border-radius:1.5em;padding:0.6em 1em;color:#fff}.im-new-checkout-btn.btn--flat:focus,.im-new-checkout-btn.btn--flat:hover{background:#fff;color:#75c26a;text-shadow:none;box-shadow:none}.im-new-checkout-btn.btn--flat-dark{background:#fff;box-shadow:none;border:1px solid adjust-lightness(#fff, -10%);text-shadow:none;border-radius:1.5em;padding:0.6em 1em;color:#75c26a}.im-new-checkout-btn.btn--flat-dark:focus,.im-new-checkout-btn.btn--flat-dark:hover{background:#75c26a;color:#fff;text-shadow:none;box-shadow:none}.im-new-checkout-btn.btn--default{color:#fff;background:#75c26a;letter-spacing:1px;padding:12px 8px;margin:0 auto;opacity:0.9;border-radius:4px}.im-new-checkout-btn.btn--default:focus,.im-new-checkout-btn.btn--default:hover,.im-new-checkout-btn.btn--default:active,.im-new-checkout-btn.btn--default.active{opacity:1}.im-new-checkout-layout{background:transparent;text-align:center;width:300px}.im-new-checkout-layout .layout-vertical{width:300px}.im-new-checkout-layout .layout-horizontal{width:600px;display:flex}.im-new-checkout-layout .layout-horizontal .im-new-checkout,.im-new-checkout-layout .layout-horizontal .checkout-description{margin-left:20px}.im-new-checkout-layout .checkout-image{height:252px;width:300px;border-radius:4px;margin-bottom:20px;max-width:300px}.im-new-checkout-layout .checkout-description{margin:0;overflow:auto;font-family:sans-serif;font-size:16px;color:#4d4d4d;margin-bottom:20px;max-width:300px}.im-modal{overflow-y:auto}.im-modal iframe{height:100%;width:100%}@-webkit-keyframes pace-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes pace-spinner{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes pace-spinner{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@-ms-keyframes pace-spinner{0%{-ms-transform:rotate(0deg);transform:rotate(0deg)}100%{-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes pace-spinner{0%{transform:rotate(0deg);transform:rotate(0deg)}100%{transform:rotate(360deg);transform:rotate(360deg)}}.iframe-container{height:100%}.iframe-container .iframe-loader-wrapper{display:none}.iframe-container .iframe{transition:all 0.2s;visibility:visible;opacity:1;height:100%;position:relative;background:none;display:block;border:0px none transparent;margin:0px;padding:0px}.iframe-container.loader .iframe-loader-wrapper{display:block;position:relative;height:100%}.iframe-container.loader .iframe-loader-wrapper .iframe-loader{display:block;position:fixed;top:50%;left:50%;margin-left:-20px;margin-top:-20px;width:40px;height:40px;border:solid 2px transparent;border-top-color:#46DF89;border-left-color:#46DF89;border-radius:40px;-webkit-animation:pace-spinner 800ms linear infinite;-moz-animation:pace-spinner 800ms linear infinite;-ms-animation:pace-spinner 800ms linear infinite;-o-animation:pace-spinner 800ms linear infinite;animation:pace-spinner 800ms linear infinite}.iframe-container.loader .iframe{visibility:hidden;opacity:0}.im-background-overlay{min-height:100%;transition:0.3s ease-out;position:fixed;top:0px;left:0px;width:100%;height:100%;background:rgba(241,244,242,0.94)}.im-new-checkout{max-width:300px;margin-bottom:20px}iframe{border:none !important}</style>', document.body.appendChild(b), (e = document.createElement("link")).setAttribute("href", "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"), document.head.appendChild(e)
                })
            }
            "complete" === document.readyState || "interactive" === document.readyState ? a() : document.addEventListener("DOMContentLoaded", () => {
                a()
            })
        },
        checkPWYW: function() {
            let a = document.getElementById("bab_id_paywhatyouwant").value,
                b = document.getElementById("show-error"),
                c = document.getElementsByClassName("bab-price-label")[0];
            f.currency = f.currency ? f.currency : "INR", parseInt(a) < parseInt(f.p) ? b.innerHTML = "Minimum amount is Rs. " + f.p : (f.p = parseInt(a), c.innerHTML = f.dp ? '<span class="bab-price-cut">' + f.currency + " " + f.p + "</span>" + f.currency + " " + f.dp : f.currency + " " + f.p, b.innerHTML = ""), "" == a && (f.p = g.p, c.innerHTML = f.dp ? '<span class="bab-price-cut">' + f.currency + " " + f.p + "</span>" + f.currency + " " + f.dp : f.currency + " " + f.p, b.innerHTML = "")
        },
        onChangeText: function(c, g) {
            var b = "";
            switch (g) {
                case "text":
                    b = [document.getElementById("option_" + c).value];
                    break;
                case "date":
                case "datetime":
                    b = document.getElementById("option_" + c).value;
                    break;
                case "radio":
                case "checkbox":
                    b = document.getElementById("option_" + c).value, c.split("-")[1], c = c.split("-")[0]
            }
            void 0 === f.custom_fields && (f.custom_fields = []);
            for (var i = !1, a = 0; a < f.custom_fields.length; a++) {
                let d = f.custom_fields[a].values;
                f.custom_fields[a].id == c && (i = !0, "checkbox" == g ? d.includes(b) ? d.splice(d.indexOf(b), 1) : d.push(b) : (b || "" != b) && (f.custom_fields[a].values = b))
            }
            if (!i)
                for (var a = 0; a < h.length; a++) h[a] && h[a].id == c && f.custom_fields.push({
                    id: h[a].id,
                    charges: h[a].charges,
                    title: h[a].title,
                    field_type: h[a].field_type,
                    charges: h[a].charges,
                    values: [b],
                    is_chargeable: h[a].is_chargeable,
                    is_mandatory: h[a].is_mandatory
                });
            let j = document.getElementsByClassName("check-new");
            for (let e = 0; e < j.length; e++) j[e].required = !1
        },
        checkProductOptionsValidation: function() {
            return event.preventDefault(), !1
        }
    }
}();

function Slider(a) {
    this.el = document.querySelector(a), this.init()
}
IM.render(), Slider.prototype = {
        init: function() {
            this.links = this.el.querySelectorAll("#bab-slider-nav a"), this.wrapper = this.el.querySelector("#bab-slider-wrapper"), this.navigate()
        },
        navigate: function() {
            for (var a = 0; a < this.links.length; ++a) {
                var b = this.links[a];
                this.slide(b)
            }
        },
        animate: function(a) {
            a.parentNode
        },
        slide: function(a) {
            var b = this;
            a.addEventListener("click", function(c) {
                c.preventDefault(), b.setCurrentLink(this);
                var d = parseInt(this.getAttribute("data-slide"), 10),
                    a = b.el.querySelector(".slide:nth-child(" + d + ")");
                b.wrapper.style.left = "-" + (a.offsetLeft - 28) + "px", b.animate(a)
            }, !1)
        },
        setCurrentLink: function(a) {
            var c = a.parentNode.querySelectorAll("a");
            a.className = "current";
            for (var b = 0; b < c.length; ++b) {
                var d = c[b];
                d !== a && (d.className = "")
            }
        }
    },
    /*!
     * mustache.js - Logic-less {{mustache}} templates with JavaScript
     * http://github.com/janl/mustache.js
     */
    function(b, a) {
        "object" == typeof exports && exports && "string" != typeof exports.nodeName ? a(exports) : "function" == typeof define && define.amd ? define(["exports"], a) : (b.Mustache = {}, a(b.Mustache))
    }(this, function(a) {
        var e = Object.prototype.toString,
            f = Array.isArray || function(a) {
                return "[object Array]" === e.call(a)
            };

        function g(a) {
            return "function" == typeof a
        }

        function h(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        function i(a, b) {
            return null != a && "object" == typeof a && b in a
        }
        var j = RegExp.prototype.test,
            k = /\S/;

        function l(c) {
            var a, b;
            return a = k, b = c, !j.call(a, b)
        }
        var m = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            },
            n = /\s*/,
            o = /\s+/,
            p = /\s*=/,
            q = /\s*\}/,
            r = /#|\^|\/|>|\{|&|=|!/;

        function c(a) {
            this.string = a, this.tail = a, this.pos = 0
        }

        function d(a, b) {
            this.view = a, this.cache = {
                ".": this.view
            }, this.parent = b
        }

        function b() {
            this.cache = {}
        }
        c.prototype.eos = function() {
            return "" === this.tail
        }, c.prototype.scan = function(c) {
            var a = this.tail.match(c);
            if (!a || 0 !== a.index) return "";
            var b = a[0];
            return this.tail = this.tail.substring(b.length), this.pos += b.length, b
        }, c.prototype.scanUntil = function(c) {
            var a, b = this.tail.search(c);
            switch (b) {
                case -1:
                    a = this.tail, this.tail = "";
                    break;
                case 0:
                    a = "";
                    break;
                default:
                    a = this.tail.substring(0, b), this.tail = this.tail.substring(b)
            }
            return this.pos += a.length, a
        }, d.prototype.push = function(a) {
            return new d(a, this)
        }, d.prototype.lookup = function(b) {
            var f = this.cache;
            if (f.hasOwnProperty(b)) a = f[b];
            else {
                for (var a, d, e, c = this, h = !1; c;) {
                    if (b.indexOf(".") > 0)
                        for (a = c.view, d = b.split("."), e = 0; null != a && e < d.length;) e === d.length - 1 && (h = i(a, d[e])), a = a[d[e++]];
                    else a = c.view[b], h = i(c.view, b);
                    if (h) break;
                    c = c.parent
                }
                f[b] = a
            }
            return g(a) && (a = a.call(this.view)), a
        }, b.prototype.clearCache = function() {
            this.cache = {}
        }, b.prototype.parse = function(b, g) {
            var e = this.cache,
                d = e[b];
            return null == d && (d = e[b] = function(v, z) {
                if (!v) return [];
                var w, j, A, g, d, e, m, s, i, t = [],
                    k = [],
                    B = [],
                    C = !1,
                    x = !1;

                function D() {
                    if (C && !x)
                        for (; B.length;) delete k[B.pop()];
                    else B = [];
                    C = !1, x = !1
                }

                function y(a) {
                    if ("string" == typeof a && (a = a.split(o, 2)), !f(a) || 2 !== a.length) throw new Error("Invalid tags: " + a);
                    w = new RegExp(h(a[0]) + "\\s*"), j = new RegExp("\\s*" + h(a[1])), A = new RegExp("\\s*" + h("}" + a[1]))
                }
                y(z || a.tags);
                for (var b = new c(v); !b.eos();) {
                    if (g = b.pos, e = b.scanUntil(w))
                        for (var u = 0, E = e.length; u < E; ++u) l(m = e.charAt(u)) ? B.push(k.length) : x = !0, k.push(["text", m, g, g + 1]), g += 1, "\n" === m && D();
                    if (!b.scan(w)) break;
                    if (C = !0, d = b.scan(r) || "name", b.scan(n), "=" === d ? (e = b.scanUntil(p), b.scan(p), b.scanUntil(j)) : "{" === d ? (e = b.scanUntil(A), b.scan(q), b.scanUntil(j), d = "&") : e = b.scanUntil(j), !b.scan(j)) throw new Error("Unclosed tag at " + b.pos);
                    if (s = [d, e, g, b.pos], k.push(s), "#" === d || "^" === d) t.push(s);
                    else if ("/" === d) {
                        if (!(i = t.pop())) throw new Error('Unopened section "' + e + '" at ' + g);
                        if (i[1] !== e) throw new Error('Unclosed section "' + i[1] + '" at ' + g)
                    } else "name" === d || "{" === d || "&" === d ? x = !0 : "=" === d && y(e)
                }
                if (i = t.pop()) throw new Error('Unclosed section "' + i[1] + '" at ' + b.pos);
                return function(f) {
                    for (var a, d = [], c = d, b = [], e = 0, g = f.length; e < g; ++e) switch ((a = f[e])[0]) {
                        case "#":
                        case "^":
                            c.push(a), b.push(a), c = a[4] = [];
                            break;
                        case "/":
                            b.pop()[5] = a[2], c = b.length > 0 ? b[b.length - 1][4] : d;
                            break;
                        default:
                            c.push(a)
                    }
                    return d
                }(function(d) {
                    for (var a, b, e = [], c = 0, f = d.length; c < f; ++c)(a = d[c]) && ("text" === a[0] && b && "text" === b[0] ? (b[1] += a[1], b[3] = a[3]) : (e.push(a), b = a));
                    return e
                }(k))
            }(b, g)), d
        }, b.prototype.render = function(b, a, c) {
            var e = this.parse(b),
                f = a instanceof d ? a : new d(a);
            return this.renderTokens(e, f, c, b)
        }, b.prototype.renderTokens = function(h, d, e, f) {
            for (var b, c, a, i = "", g = 0, j = h.length; g < j; ++g) a = void 0, "#" === (c = (b = h[g])[0]) ? a = this.renderSection(b, d, e, f) : "^" === c ? a = this.renderInverted(b, d, e, f) : ">" === c ? a = this.renderPartial(b, d, e, f) : "&" === c ? a = this.unescapedValue(b, d) : "name" === c ? a = this.escapedValue(b, d) : "text" === c && (a = this.rawValue(b)), void 0 !== a && (i += a);
            return i
        }, b.prototype.renderSection = function(b, c, h, d) {
            var k = this,
                e = "",
                a = c.lookup(b[1]);
            if (a) {
                if (f(a))
                    for (var i = 0, j = a.length; i < j; ++i) e += this.renderTokens(b[4], c.push(a[i]), h, d);
                else if ("object" == typeof a || "string" == typeof a || "number" == typeof a) e += this.renderTokens(b[4], c.push(a), h, d);
                else if (g(a)) {
                    if ("string" != typeof d) throw new Error("Cannot use higher-order sections without the original template");
                    null != (a = a.call(c.view, d.slice(b[3], b[5]), function(a) {
                        return k.render(a, c, h)
                    })) && (e += a)
                } else e += this.renderTokens(b[4], c, h, d);
                return e
            }
        }, b.prototype.renderInverted = function(b, c, d, e) {
            var a = c.lookup(b[1]);
            if (!a || f(a) && 0 === a.length) return this.renderTokens(b[4], c, d, e)
        }, b.prototype.renderPartial = function(c, d, a) {
            if (a) {
                var b = g(a) ? a(c[1]) : a[c[1]];
                if (null != b) return this.renderTokens(this.parse(b), d, a, b)
            }
        }, b.prototype.unescapedValue = function(b, c) {
            var a = c.lookup(b[1]);
            if (null != a) return a
        }, b.prototype.escapedValue = function(c, d) {
            var b = d.lookup(c[1]);
            if (null != b) return a.escape(b)
        }, b.prototype.rawValue = function(a) {
            return a[1]
        }, a.name = "mustache.js", a.version = "2.3.0", a.tags = ["{{", "}}"];
        var s = new b;
        return a.clearCache = function() {
            return s.clearCache()
        }, a.parse = function(a, b) {
            return s.parse(a, b)
        }, a.render = function(a, c, d) {
            if ("string" != typeof a) {
                var b;
                throw new TypeError('Invalid template! Template should be a "string" but "' + (f(b = a) ? "array" : typeof b) + '" was given as the first argument for mustache#render(template, view, partials)')
            }
            return s.render(a, c, d)
        }, a.to_html = function(d, e, f, b) {
            var c = a.render(d, e, f);
            if (!g(b)) return c;
            b(c)
        }, a.escape = function(a) {
            return String(a).replace(/[&<>"'`=\/]/g, function(a) {
                return m[a]
            })
        }, a.Scanner = c, a.Context = d, a.Writer = b, a
    })
