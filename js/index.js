jQuery(function() {
  "use strict";
  $(window);
  $(".jq-tab-box").hide(), $(".jq-tab-box:first-child").show(), $("ul.jq-tabs li:first").addClass("active").show(), $("ul.jq-tabs li").click(function() {
    var a = $("ul.jq-tabs li").index(this);
    $("#tss-tabs").removeClass(), $("#tss-tabs").addClass("tss-active-" + a), $("ul.jq-tabs li").removeClass("active"), $(this).addClass("active"), $(".jq-tab-box").hide();
    var b = $(this).find("a").attr("href");
    return $(b).fadeIn(), !1
  })
});