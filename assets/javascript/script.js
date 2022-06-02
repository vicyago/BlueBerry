const delay = async (ms = 1000) =>
    new Promise((resolve) => setTimeout(resolve, ms));
async function imageLoop() {
    let image = document.getElementById("image");
    let images = [
        "assets/images/item-01.jpg",
        "assets/images/item-02.jpg",
        "assets/images/item-03.jpg",
        "assets/images/item-04.jpg",
        "assets/images/item-05.jpg",
        "assets/images/item-06.jpg",
        "assets/images/item-07.jpg",
        "assets/images/item-08.jpg",
        "assets/images/item-09.jpg",
    ];
    for (let i = 0; i < images.length; i++) {
        await delay(5000);
        image.src = images[i];
    }
    imageLoop();
}
imageLoop();

const btn = document.querySelector("#btn-toggle");
btn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    if (btn.innerText === "Dark 🌙") {
        btn.innerText = "Light ☀️";
    } else {
        btn.innerText = "Dark 🌙";
    }
});

let imgUl = document.querySelector("#ulLight")

let ligthImgs = imgUl.querySelectorAll("img")

let imgDark = [
    "assets/images/polodark.png",
    "assets/images/abadadark.png",
    "assets/images/ecobagdark.png",
    "assets/images/bordadodark.png",
    "assets/images/maskdark.png",
    "assets/images/confeccaodark.png",
    "assets/images/camisetadark.png",
    "assets/images/hoodiedark.png",
    "assets/images/silkscreendark.png"
];

function imgToTheme(imgToDarkTheme, index) { imgToDarkTheme.src = imgDark[index] }

ligthImgs.forEach(imgToTheme)










