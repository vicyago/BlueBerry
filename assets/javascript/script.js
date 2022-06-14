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

let checkInput = document.querySelectorAll(".checkBox");

checkInput.forEach(function (btnChk) {
    btnChk.addEventListener("change", function () {
        let checkLi = btnChk.closest("li");
        let checkDiv = checkLi.querySelector(".sectionDetalhes");
        if (btnChk.checked) {
            checkDiv.style.display = "grid";
        } else {
            checkDiv.style.display = "none";
        }
    });
});
