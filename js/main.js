const inputs = document.getElementsByTagName("input");

let inputsArray = Array.from(inputs);

const preferences = {
  name: "",
  name2: "",
  name3: "",
  name4: "",
  name5: "",
  mode: "",
  search_engine: "",
  common: "a ver si no lo habíamos rellenado",
};

inputsArray.map((cadaUno) => {
  cadaUno.addEventListener("input", (e) => {
    preferences[e.target.name] = e.target.value;
  });
});

function save() {
  //Al no admitir objetos, tenemos que transformar a string
  localStorage.setItem("preferences", JSON.stringify(preferences));
}
