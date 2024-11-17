const input = document.querySelector("input");
const output = document.querySelector("output");
const span = document.querySelector("span");

const sanat = ["saippuakauppias", "ohjelmointi", "tietokanta", "nörtti", "bootstrap"];

let arvottuSana = "";
let piilotettuSana = "";
let arvauksia = 0;

const uusiPeli = () => {
  const satunnaisLuku = Math.floor(Math.random() * 5) + 1;
  arvottuSana = sanat[satunnaisLuku];
  piilotettuSana = "*".repeat(arvottuSana.length);
  console.log(arvottuSana);
  output.innerHTML = piilotettuSana;
};

uusiPeli();

function korvaaLoydettyKirjain(arvaus) {
  for (let i = 0; i < arvottuSana.length; i++) {
    const kirjain = arvottuSana.substring(i, i + 1);
    if (kirjain === arvaus) {
      let uusiMjono = piilotettuSana.split("");
      uusiMjono.splice(i, 1, arvaus);
      uusiMjono = uusiMjono.join("");
      piilotettuSana = uusiMjono;
    }
  }
  output.innerHTML = piilotettuSana;
}

const voitto = () => {
  alert(`Arvasit sanan, sana on ${arvottuSana} `);
  arvauksia = 0;
  span.innerHTML = arvauksia;
  uusiPeli();
};

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    arvauksia++;
    span.innerHTML = arvauksia;

    const arvaus = input.value;
    if (arvaus.toLowerCase() === arvottuSana.toLowerCase()) {
      voitto();
    } else if (arvaus.length === 1) {
      korvaaLoydettyKirjain(arvaus);
      if (piilotettuSana.toLowerCase() === arvottuSana.toLowerCase()) {
        voitto();
      }
    } else {
      alert("Arvasit väärin!");
    }
    input.value = "";
  }
});
