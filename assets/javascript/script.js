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

    const x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

});




