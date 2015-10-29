"use strict";
var OPM = {};
OPM.toggleCheckedClass = function(e, n) {
    var o = e.is(":radio"),
        t = "selected",
        s = "add-focus";
    e.on("change", function() {
        var s = e.is(":checked");
        s && o && n.siblings("label:visible").removeClass(t), n.toggleClass(t, s)
    }).on("focus", function() {
        n.addClass(s)
    }).on("blur", function() {
        n.removeClass(s)
    }).change()
}, OPM.buildGDSradios = function() {
    var e = $(".input.radio").wrapInner('<fieldset class="inline"/>'),
        n = e.find("input:radio");
    n.each(function(n, o) {
        var t = $(o),
            s = e.find('label[for="' + o.id + '"]').addClass("block-label").prepend(t);
        OPM.toggleCheckedClass(t, s)
    })
}, $(function() {
$(".input.radio").length && OPM.buildGDSradios()
});