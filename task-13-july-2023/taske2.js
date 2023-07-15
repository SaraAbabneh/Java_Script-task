

const text = document.getElementById("box");
let isTextChanged = false;

function changeText() {
  if (isTextChanged) {
    text.innerHTML = "Can I help you ?";
    isTextChanged = false;
  } else {
    text.innerHTML = "Hello World!";
    isTextChanged = true;
  }
}

text.addEventListener("mouseenter", changeText);
text.addEventListener("mouseleave", changeText);

text.style.cssText = "width: 30%; min-height: 5rem; background-color: yellow; margin: auto; text-align: center; margin-top: 3rem";




function changeFlag(selectElement) {
    const flags = {
        Jordan: "Jordan.jpg",
        Palestine: "Palestine.png",
        Kuwait: "Kuwait.png",
        Qatar: "Qatar.jpg"
    };

    const selectedCountry = selectElement.value;
    const selectedFlag = flags[selectedCountry];
    const flagImage = document.getElementById("flagImage");
    flagImage.src = selectedFlag;
}



var changeFontFamily = function (font) {
    document.getElementById(
        "output-text").style.fontFamily
                = font.value;
}
var changeFontsize = function (size) {
    document.getElementById(
        "output-text").style.fontSize
                = size.value;
}
var changeFontWeight = function (Weight) {
    document.getElementById(
        "output-text").style.fontWeight
                = Weight.value;
}
var changeTextDecoration = function (textDecoration) {
    document.getElementById(
        "output-text").style.textDecoration
                = textDecoration.value;
}
var changeFontStyle = function (FontStyle) {
    document.getElementById(
        "output-text").style.fontStyle
                = FontStyle.value;
}



