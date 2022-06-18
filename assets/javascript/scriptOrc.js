displayDetail();
imgListen();
colorInput();
function displayDetail() {
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
            hideDivForm();
        });
    });
}
function hideDivForm() {
    let grabDivForm = document.querySelector(".formularioHolder");
    let showHideDivForm = document.querySelector("#imgsArray");
    let checkLenght = showHideDivForm.querySelectorAll(
        "input[type=checkbox]:checked"
    ).length;
    if (checkLenght > 0) {
        grabDivForm.style.display = "block";
    } else {
        grabDivForm.style.display = "none";
    }
}
function imgListen() {
    let imgProductHolder = document.querySelector(".divProducts");
    let imgsArray = imgProductHolder.querySelectorAll("img");
    imgsArray.forEach(function (imgObj) {
        imgObj.addEventListener("click", function () {
            imgConfirm(imgObj);
        });
    });
    function imgConfirm(imgObj) {
        let checkLi = imgObj.closest("li");
        let nextInput = checkLi.querySelector("input");
        nextInput.click();
    }
}
function colorInput() {
    let textColorInputs = document.querySelectorAll("input[name=colorNome]");
    let selectColorInput = document.querySelectorAll(".corPeca");

    function checkColorInput(currentInput, inputChoose) {
        let colorSelector =
            currentInput.parentElement.querySelector(".corPeca");
        let colorTextInput = currentInput.parentElement.querySelector(
            "input[name=colorNome]"
        );
        let disabledInput;
        let chooserArray = [
            [true, "not-allowed", 0.5],
            [false, "pointer", 1],
        ];
        if (inputChoose === "text") {
            disabledInput = colorSelector;
        } else {
            disabledInput = colorTextInput;
        }

        if (currentInput.value !== "") {
            disableInput(0);
        } else {
            disableInput(1);
        }
        function disableInput(arrayInx) {
            disabledInput.disabled = chooserArray[arrayInx][0];
            disabledInput.style.cursor = chooserArray[arrayInx][1];
            disabledInput.style.opacity = chooserArray[arrayInx][2];
        }
    }
    function addListeners() {
        textColorInputs.forEach(function (currentInput) {
            currentInput.oninput = function () {
                checkColorInput(currentInput, "text");
            };
        });
        selectColorInput.forEach(function (currentInput) {
            currentInput.onchange = function () {
                checkColorInput(currentInput, "select");
            };
        });
    }
    addListeners();
}

