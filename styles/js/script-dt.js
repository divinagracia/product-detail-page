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
