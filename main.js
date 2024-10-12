import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
document.addEventListener("DOMContentLoaded", function () {
  // Kezdő képek
  let carColors = ["szurke/auto oldalak/szurke.png", "szurke/auto oldalak/fekete.png", "szurke/auto oldalak/kek.png", "szurke/auto oldalak/piros.png"];
  let tires = ["szurke/kerekek/szurke_21_side.png", "szurke/kerekek/szurke_22_1_side.png", "szurke/kerekek/szurke_22_2_side.png", "szurke/kerekek/szurke_22_3_side.png"];
  
  let currentCarColorIndex = 0;
  let currentTireIndex = 0;

  let totalPrice = 0;

  const carImage = document.querySelector(".card-img-top");
  const tireImage = document.querySelector(".card-img");

  // Színváltoztatás gombok
  document.getElementById("exteriorGrey").addEventListener("click", function () {
    changeCarColor(0);
  });
  document.getElementById("exteriorBlack").addEventListener("click", function () {
    changeCarColor(1);
  });
  document.getElementById("exteriorBlue").addEventListener("click", function () {
    changeCarColor(2);
  });
  document.getElementById("exteriorRed").addEventListener("click", function () {
    changeCarColor(3);
  });

  // Kerék változtatás
  document.getElementById("changeTireLeftButton").addEventListener("click", function () {
    changeTire(-1);
  });
  document.getElementById("changeTireRightButton").addEventListener("click", function () {
    changeTire(1);
  });

  // Funkciók a képek változtatásához
  function changeCarColor(index) {
    currentCarColorIndex = index;
    carImage.src = carColors[currentCarColorIndex];
  }

  function changeTire(direction) {
    currentTireIndex += direction;
    if (currentTireIndex < 0) {
      currentTireIndex = tires.length - 1;
    } else if (currentTireIndex >= tires.length) {
      currentTireIndex = 0;
    }
    tireImage.src = tires[currentTireIndex];
  }

  // Motor opciók kezelése
  const v8Checkbox = document.getElementById("cbtest-19_1");
  const v12Checkbox = document.getElementById("cbtest-19_2");

  v8Checkbox.addEventListener("change", function () {
    if (v8Checkbox.checked) {
      totalPrice += 3200;
      v12Checkbox.checked = false;
    } else {
      totalPrice -= 3200;
    }
    updateTotalPrice();
  });

  v12Checkbox.addEventListener("change", function () {
    if (v12Checkbox.checked) {
      totalPrice += 4000;
      v8Checkbox.checked = false;
    } else {
      totalPrice -= 4000;
    }
    updateTotalPrice();
  });

  // Sebességváltó opciók kezelése
  const automaticCheckbox = document.getElementById("cbtest-19_3");
  const manualCheckbox = document.getElementById("cbtest-19_4");

  manualCheckbox.addEventListener("change", function () {
    if (manualCheckbox.checked) {
      totalPrice += 1000;
      automaticCheckbox.checked = false;
    } else {
      totalPrice -= 1000;
    }
    updateTotalPrice();
  });

  automaticCheckbox.addEventListener("change", function () {
    if (automaticCheckbox.checked) {
      manualCheckbox.checked = false;
    }
    updateTotalPrice();
  });

  // Sötétített ablak opció
  const tintedWindowsCheckbox = document.getElementById("cbtest-19_5");
  tintedWindowsCheckbox.addEventListener("change", function () {
    if (tintedWindowsCheckbox.checked) {
      totalPrice += 600;
    } else {
      totalPrice -= 600;
    }
    updateTotalPrice();
  });

  // Ár frissítése
  function updateTotalPrice() {
    document.getElementById("totalPrice").innerText = "Total: $" + totalPrice;
  }
});