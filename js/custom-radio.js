OPM.buildGDSradios = function() {
    var e = $(".radio-group-boolean").wrapInner('<fieldset class="inline"/>'),
        n = e.find("input:radio");
    n.each(function(n, o) {
        var t = $(o),
            s = e.find('label[for="' + o.id + '"]').addClass("block-label").prepend(t);
        OPM.toggleCheckedClass(t, s)
    })
}

$(function() {
    $(".radio-group-boolean").length && OPM.buildGDSradios()
}