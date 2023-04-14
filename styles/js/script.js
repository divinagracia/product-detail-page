$(".header-categories").click(function () {
    showCategories();
});

function showCategories() {
    $(".categories").toggle();
}

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
        $("#wrapper").attr("src", "styles/img/footer-banner-2.png");
    } else {
        $(".nav-header").css("display", "block");
        $(".site-header").css("display", "flex");
        $(".nav-bar").css("display", "block");
        $(".mobile-nav").css("display", "none");
        $("#wrapper").attr("src", "styles/img/footer-banner.png");
    }
}

setMobile();
