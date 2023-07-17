let color = document.querySelector("#color");

color.addEventListener("change", () => {
    sessionStorage.setItem("color", color.value);
  document.body.style.backgroundColor = color.value;
});

document.body.style.backgroundColor = sessionStorage.getItem("color");