const showNav = () => {
    let navElement = document.getElementsByTagName("nav")[0];
    console.log(navElement.style.display);
    let bannerImg = document.getElementById("bannerimg");
    if (getComputedStyle(navElement).display === "none") {
        navElement.style.display = "block";
        bannerImg.style.marginTop = 0;
    } else {
        navElement.style.display = "none";
        bannerImg.style.marginTop = "25px";
    }
}

//Modal Code
$(".modal").on("show.bs.modal", function (event) {
    let buttonClicked = $(event.relatedTarget);
    let buttonPrice = buttonClicked.attr("data");
    $("#pricevalue").html(buttonPrice);
});