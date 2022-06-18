imgLoopFunc()
function imgLoopFunc() {
const delay = async (ms = 1000) =>
    new Promise((resolve) => setTimeout(resolve, ms));
async function imageLoop() {
    let image = document.getElementById("image");
    let images = [
        "assets/images/item-01.jpg",
        "assets/images/item-02.jpg",
        "assets/images/item-04.jpg",
        "assets/images/item-05.jpg",
        "assets/images/item-06.jpg",
        "assets/images/item-07.jpg",
        "assets/images/item-09.jpg",
    ];
    for (let i = 0; i < images.length; i++) {
        image.src = images[i];
        await delay(5000);
    }
    imageLoop();
}
imageLoop();
}