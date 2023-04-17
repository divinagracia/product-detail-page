var counter = 0;

function plus() {
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
}

function minus() {
    if (counter > 0) {
        counter -= 1;
    }
    document.getElementById("counter").innerHTML = counter;
}

$(".header-categories").click(function () {
    showCategories();
});

function showCategories() {
    $(".categories").toggle();
}

$(".selection").on("click", function () {
    $(".selection").removeClass("selected");
    $(this).addClass("selected");
});

$(".variation").on("click", function () {
    $(".variation").removeClass("selected");
    $(this).addClass("selected");
});

$(".info-title ul li").on("click", function () {
    $(".info-title ul li").removeClass("selected");
    $(this).addClass("selected");
    $(".description p").removeClass("show");
    let index = $(this).index();
    let paragraph = $(".description p")[index];
    $(paragraph).addClass("show");
});

$(window).resize(function () {
    console.log(window.innerWidth);
    setMobile();
});

function setMobile() {
    if (window.matchMedia("screen and (max-width: 767px").matches) {
        $(".nav-header").css("display", "none");
        $(".site-header").css("display", "none");
        $(".nav-bar").css("display", "none");
        $(".mobile-nav").prependTo(".navigation");
        $(".mobile-nav").css("display", "flex");
        $(".product-img-container").prependTo(".product-content");
        $("#wrapper").attr("src", "theme/img/footer-banner-2.png");
        $(".nav-links").prependTo(".navigation");
        $(".menu-link, .page-footer-container").addClass("mobile");
    } else {
        $(".nav-header").css("display", "block");
        $(".site-header").css("display", "flex");
        $(".nav-bar").css("display", "block");
        $(".mobile-nav").css("display", "none");
        $(".product-img-container").before($(".selection-container"));
        $("#wrapper").attr("src", "theme/img/footer-banner.png");
        $(".nav-categories").after($(".nav-links"));
        $(".menu-link, .page-footer-container").removeClass("mobile");
        $(
            ".menu-link ul, .page-footer-container li, .page-footer-container > div div, .page-footer-container p"
        ).css("display", "");
    }
}

$(".menu-icon").on("click", function () {
    showMenu();
});

function showMenu() {
    $(".nav-links").toggle();
}

$(".navigation").on("click", ".mobile li", function (e) {
    $(this).children("ul").toggle();
    e.stopPropagation();
});

$(".footer").on("click", ".mobile > div:not(.footer-links)", function () {
    $(this).find("div:not(.contact-info), p").toggle();
});

$(".footer").on("click", ".mobile > div.footer-links > ul", function () {
    $(this).find("li").toggle();
});

function validate(obj) {
    if (obj.value.length > 0) {
        document.getElementById("button").disabled = false;
    } else {
        document.getElementById("button").disabled = true;
    }
}

setMobile();
