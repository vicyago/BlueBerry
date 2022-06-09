const btn = document.querySelector("#btn-toggle");
btn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    if (btn.innerText === "Dark 🌙") {
        btn.innerText = "Light ☀️";
        changeImgIcon("darkYes");
    } else {
        btn.innerText = "Dark 🌙";
        changeImgIcon("lightYes");
    }
});


function changeImgIcon(toDark) {
    let ulImgs = document.querySelector("#imgsArray");
    let imgsArray = ulImgs.querySelectorAll("img");

    let darkImg = [
        "assets/images/camisetadark.png",
        "assets/images/polodark.png",
        "assets/images/hoodiedark.png",
        "assets/images/abadadark.png",
        "assets/images/ecobagdark.png",
        "assets/images/maskdark.png",
        "assets/images/bordadodark.png",
        "assets/images/confeccaodark.png",
        "assets/images/silkscreendark.png",
    ];

    let lightImg = [
        "assets/images/camiseta.png",
        "assets/images/polo.png",
        "assets/images/hoodie.png",
        "assets/images/abada.png",
        "assets/images/ecobag.png",
        "assets/images/mask.png",
        "assets/images/bordado.png",
        "assets/images/confeccao.png",
        "assets/images/silkscreen.png",
    ];

    
    let chossenArray;

    if (toDark === "lightYes") {
        chossenArray = lightImg;
    } else if (toDark === "darkYes") {
        chossenArray = darkImg;
    } 

    imgsArray.forEach(imgToTheme);

    function imgToTheme(imgTag, index) {
        imgTag.src = chossenArray[index];
    }
}
