"use strict";
var OPM = {};
OPM.styleHiddenContainers = function() {
    $("#content form").children(".opm-container:hidden").addClass("opm-reveal")
}, OPM.moveNavItems = function() {
    $(".opm-progress-screens").appendTo(".active-stage"), $(".opm-progress-screens").show()
}, OPM.expandTextAreas = function() {
    var e = 8e3;
    $("textarea").each(function(n, o) {
        var t = $(o);
        t.keyup(function() {
            setTimeout(function() {
                o.style.cssText = "height:auto;", o.style.cssText = "height:" + o.scrollHeight + "px"
            }, 0)
        }), t.keydown(function() {
            return !("maxLength" in o) && o.value.length >= e ? !1 : void 0
        })
    })
}, OPM.moveSubmitButtons = function() {
    var e = $("#back-button");
    e.clone().insertAfter("#submit"), e.remove()
}, OPM.toggleCheckedClass = function(e, n) {
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
}, OPM.buildGDScheckboxes = function() {
    var e = $(".control-checkbox");
    e.each(function(e, n) {
        var o = $(n),
            t = o.find("input:checkbox"),
            s = o.find("label").addClass("block-label").removeClass("question").prepend(t);
        OPM.toggleCheckedClass(t, s)
    })
}, OPM.buildGDSradios = function() {
    var e = $(".radio-group-boolean").wrapInner('<fieldset class="inline"/>'),
        n = e.find("input:radio");
    n.each(function(n, o) {
        var t = $(o),
            s = e.find('label[for="' + o.id + '"]').addClass("block-label").prepend(t);
        OPM.toggleCheckedClass(t, s)
    })
}, OPM.helpPrompt = function() {
    var e = $(".help-title");
    e.each(function(e, n) {
        var o = $(n).wrapInner('<span class="summary"/>'),
            t = o.closest(".control-item").addClass("help-title-container"),
            s = t.next(".control-item").addClass("help-content-container");
        o.on("click", function() {
            s.toggle(), $(n).toggleClass("active")
        })
    })
}, OPM.applyErrorClass = function() {
    var e = $(".error"),
        n = e.closest(".control-item");
    n.addClass("error-container")
}, $(function() {
    $(document.documentElement).addClass("js-enabled laa-ccms"), OPM.moveSubmitButtons(), OPM.expandTextAreas(), OPM.moveNavItems(), OPM.styleHiddenContainers(), $(".control-checkbox").length && OPM.buildGDScheckboxes(), $(".radio-group-boolean").length && OPM.buildGDSradios(), $(".help-title") && OPM.helpPrompt(), $(".messages").children(".error").length && OPM.applyErrorClass()
});
datePickerOpts.dateFormat = "dd/mm/yy";
//# sourceMappingURL=maps/opm.min.js.map

/* Changes .owd-submit buttons (next/complete) to Loading button */

$('.owd-submit').on("click", function() {
        var n = $(this),
            t = n.text(); 
            n.text("Loading").addClass("disabled");
});