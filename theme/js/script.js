var counter = 0;

var minus = document.querySelector(".subtract");
var add = document.querySelector(".add");
var quantity = document.querySelector(".item-quantity");

const minimum = 0;

minus.addEventListener("click", function () {
    if (quantity.value <= minimum) {
        minus.disabled = true;
        return;
    } else {
        minus.disabled = false;
    }
    quantity.value--;
});

add.addEventListener("click", function () {
    if (quantity.value > minimum) {
        minus.disabled = false;
    }
    quantity.value++;
});

$(".header-categories").click(function () {
    showCategories();
});

function showCategories() {
    $(".categories").toggle();
}

$(".nav-categories").click(function () {
    showDropdown();
});

function showDropdown() {
    $(".nav-categories-dropdown").toggle();
}

$(".selection").on("click", function () {
    $(".selection").removeClass("selected");
    $(this).addClass("selected");
});

$(".variation").on("click", function () {
    $(".variation").removeClass("selected");
    $(this).addClass("selected");
});

$(".info-title h3").on("click", function () {
    $(".info-title h3").removeClass("selected");
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
        $(".mobile-nav").prependTo(".navigation");
        $(".product-img-container").prependTo(".product-content");
        $("#wrapper").attr("src", "theme/img/footer-banner-2.png");
        $(".nav-links").prependTo(".navigation");
        $(".menu-link, .page-footer-container").addClass("mobile");
    } else {
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
        console.log(obj);
        $(obj).siblings("button").prop("disabled", false);
    } else {
        $(obj).siblings("button").prop("disabled", true);
    }
}

$(".selection").click(function () {
    let selectedSrc = $(this).children("img").prop("src");
    $(".product-img img").prop("src", selectedSrc);
});

setMobile();
