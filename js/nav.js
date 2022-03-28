//if scroll top > 163
$(window).scroll(function() {
    if ($('nav.top-navigation.no-sticky').length == 0 ) {
        163 < $(window).scrollTop() ? $('nav.top-navigation').addClass('top') : $('nav.top-navigation').removeClass('top');
    }
});


//mobile nav toggle
$(".nav-btn").click(function () {
$(this).toggleClass("is-active"),
    $(".cover").toggleClass("show"),
    $(".nav-btn.is-active").length
        ? ($(this).attr("aria-expanded", "true"), $(".cover").addClass("show"), $("body").addClass("stop-scrolling"), $(".search-btn").prop("disabled", !0))
        : ($(this).attr("aria-expanded", "false"), $(".cover").removeClass("show"), $("body").removeClass("stop-scrolling"), $(".search-btn").prop("disabled", !1)),
    $("nav.top-navigation").toggleClass("is-active"),
    setTimeout(function () {
        $("nav .nav-container .btn--close").focus();
    }, 100);
}),

$(".cover").click(function () {
    $("nav.top-navigation").hasClass("is-active") &&
        ($(this).removeClass("show"),
        $(".nav-btn").removeClass("is-active"),
        $("nav.top-navigation").removeClass("is-active"),
        $(".nav-btn").attr("aria-expanded", "false"),
        $("body").removeClass("stop-scrolling"),
        $(".search-btn").prop("disabled", !1)),
        $(".nav-search-container.show").length &&
            ($(".cover").removeClass("show"),
            $("body").removeClass("stop-scrolling"),
            $(".header-container .search-container a").attr("tabindex", "0"),
            $(".header-container .search-container input").attr("tabindex", "0"),
            $(".header-container .search-container button").attr("tabindex", "0"),
            $(".nav-btn").attr("tabindex", "0"),
            $(".nav-btn").prop("disabled", !1),
            $(".search-btn").removeClass("open"),
            $(".search-btn i").addClass("fa-search"),
            $(".search-btn i").removeClass("fa-close"),
            $(".nav-search-container").removeClass("show"));
}),

$(".btn--close").click(function () {
    $(".nav-btn").removeClass("is-active"),
        $(".cover").removeClass("show"),
        $("nav.top-navigation").removeClass("is-active"),
        $(".nav-btn").attr("aria-expanded", "false"),
        $(".nav-btn").focus(),
        $("body").removeClass("stop-scrolling"),
        $(".search-btn").prop("disabled", !1);
}),
$("body").on("keydown", "nav .nav-container .btn--close", function (e) {
    $("nav.is-active").length && e.shiftKey && 9 == e.which && (e.preventDefault(), $("nav .nav-container a:last").focus());
}),
$("body").on("keydown", "nav .nav-container a:last", function (e) {
    $("nav.is-active").length && (e.shiftKey || (9 == e.which && (e.preventDefault(), $("nav .nav-container .btn--close").focus())));
});


//Expand the sub navigation on the mobile menu
$(".expand").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    //adding twice due to conflict
    $(this).toggleClass("active");
    $(this).parent().siblings("ul").toggleClass("show");
});
