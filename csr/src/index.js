import { component } from "./component.js";
import { store } from "./store.js";

const render = () => {
  const $app = document.getElementById("app");
  $app.innerHTML = component();
  $app.querySelector("button").addEventListener("click", () => {
    const $id = document.getElementsByClassName("id")[0].value;
    const $name = document.getElementsByClassName("name")[0].value;

    if ($id && $name) {
      const newData = { id: $id, name: $name };
      store.setState(newData);
      render();
    }
  });
};

render();
