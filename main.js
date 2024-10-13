import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

document.addEventListener("DOMContentLoaded", function () {
  // Kezdő képek
  let carColorsGrey = [
    "szurke/auto oldalak/szurke.png",
    "szurke/auto oldalak/szurke_front.png",
    "szurke/auto oldalak/szurke_side.png",
    "szurke/auto oldalak/szurke_bside.png",
    "szurke/auto oldalak/szurke_back.png"
  ];

  let carColorsRed = [
    "piros/auto oldalak/piros.png",
    "piros/auto oldalak/piros_front.png",
    "piros/auto oldalak/piros_side.png",
    "piros/auto oldalak/piros_bside.png",
    "piros/auto oldalak/piros_back.png"
  ];

  let carColorsBlack = [
    "fekete/auto oldalak/fekete.png",
    "fekete/auto oldalak/fekete_front.png",
    "fekete/auto oldalak/fekete_side.png",
    "fekete/auto oldalak/fekete_bside.png",
    "fekete/auto oldalak/fekete_back.png"
  ];

  let carColorsBlue = [
    "kek/auto oldalak/kek.png",
    "kek/auto oldalak/kek_front.png",
    "kek/auto oldalak/kek_side.png",
    "kek/auto oldalak/kek_bside.png",
    "kek/auto oldalak/kek_back.png"
  ];

  let carColors = [carColorsGrey, carColorsBlack, carColorsBlue, carColorsRed];

  let tiresGrey = [
    ["szurke/kerekek/szurke_21_side.png", "szurke/kerekek/szurke_21_front.png"],
    ["szurke/kerekek/szurke_22_1_side.png", "szurke/kerekek/szurke_22_1_front.png"],
    ["szurke/kerekek/szurke_22_2_side.png", "szurke/kerekek/szurke_22_2_front.png"],
    ["szurke/kerekek/szurke_22_3_side.png", "szurke/kerekek/szurke_22_3_front.png"]
  ];

  let tiresRed = [
    ["piros/kerekek/piros_21_side.png", "piros/kerekek/piros_21_front.png"],
    ["piros/kerekek/piros_22_1_side.png", "piros/kerekek/piros_22_1_front.png"],
    ["piros/kerekek/piros_22_2_side.png", "piros/kerekek/piros_22_2_front.png"],
    ["piros/kerekek/piros_22_3_side.png", "piros/kerekek/piros_22_3_front.png"]
  ];

  let tiresBlack = [
    ["fekete/kerekek/fekete_21_side.png", "fekete/kerekek/fekete_21_front.png"],
    ["fekete/kerekek/fekete22_1_side.png", "fekete/kerekek/fekete_22_1_front.png"],
    ["fekete/kerekek/fekete_22_2_side.png", "fekete/kerekek/fekete_22_2_front.png"],
    ["fekete/kerekek/fekete_22_3_side.png", "fekete/kerekek/fekete_22_3_front.png"]
  ];

  let tiresBlue = [
    ["kek/kerekek/kek_21_side.png", "kek/kerekek/kek_21_front.png"],
    ["kek/kerekek/kek_22_1_side.png", "kek/kerekek/kek_22_1_front.png"],
    ["kek/kerekek/kek_22_2_side.png", "kek/kerekek/kek_22_2_front.png"],
    ["kek/kerekek/kek_22_3_side.png", "kek/kerekek/kek_22_3_front.png"]
  ];

  let tires = [tiresGrey, tiresBlack, tiresBlue, tiresRed];

  let currentCarColorIndex = 0;
  let currentCarImageIndex = 0;
  let currentTireIndex = 0;
  let currentTireImageIndex = 0;

  let totalPrice = 0;

  const carImage = document.querySelector(".card-img-top");
  const tireImage = document.querySelector(".tire-img");

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
  document.getElementById("tire21").addEventListener("click", function () {
    changeTire(0);
  });
  document.getElementById("tire22_1").addEventListener("click", function () {
    changeTire(1);
  });
  document.getElementById("tire22_2").addEventListener("click", function () {
    changeTire(2);
  });
  document.getElementById("tire22_3").addEventListener("click", function () {
    changeTire(3);
  });

  document.getElementById("changeCarLeftButton").addEventListener("click", function () {
    changeCarImage(-1);
  });
  document.getElementById("changeCarRightButton").addEventListener("click", function () {
    changeCarImage(1);
  });

  document.getElementById("changeTireImageLeftButton").addEventListener("click", function () {
    changeTireImage(-1);
  });
  document.getElementById("changeTireImageRightButton").addEventListener("click", function () {
    changeTireImage(1);
  });

  // Funkciók a képek változtatásához
  function changeCarColor(index) {
    currentCarColorIndex = index;
    currentCarImageIndex = 0;
    carImage.src = carColors[currentCarColorIndex][currentCarImageIndex]; // Az első kép megjelenítése az adott színhez
    tireImage.src = tires[currentCarColorIndex][currentTireIndex][currentTireImageIndex]; // Az első kerék kép megjelenítése az adott színhez
    updateActiveColorButton();
    updateActiveTireButton();
  }

  function changeCarImage(direction) {
    currentCarImageIndex += direction;
    if (currentCarImageIndex < 0) {
      currentCarImageIndex = carColors[currentCarColorIndex].length - 1;
    } else if (currentCarImageIndex >= carColors[currentCarColorIndex].length) {
      currentCarImageIndex = 0;
    }
    carImage.src = carColors[currentCarColorIndex][currentCarImageIndex];
  }

  function changeTire(index) {
    currentTireIndex = index;
    currentTireImageIndex = 0;
    tireImage.src = tires[currentCarColorIndex][currentTireIndex][currentTireImageIndex];
    updateActiveTireButton();
  }

  function changeTireImage(direction) {
    currentTireImageIndex += direction;
    if (currentTireImageIndex < 0) {
      currentTireImageIndex = tires[currentCarColorIndex][currentTireIndex].length - 1;
    } else if (currentTireImageIndex >= tires[currentCarColorIndex][currentTireIndex].length) {
      currentTireImageIndex = 0;
    }
    tireImage.src = tires[currentCarColorIndex][currentTireIndex][currentTireImageIndex];
  }

  function updateActiveColorButton() {
    const colorButtons = document.querySelectorAll(".color-btn");
    colorButtons.forEach((button, index) => {
      if (index === currentCarColorIndex) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  function updateActiveTireButton() {
    const tireButtons = document.querySelectorAll(".tire-btn");
    tireButtons.forEach((button, index) => {
      if (index === currentTireIndex) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
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

  // Kezdő kép beállítása
  changeCarColor(0); // Szürke autóval kezdődik
});