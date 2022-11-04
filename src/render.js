import { store } from "./store.js";
import { App } from "./App.js";

const render = () => {
  // 컴포넌트를 렌더링합니다.
  const $app = document.querySelector("#app");
  const { pathname: path } = location;
  $app.innerHTML = App({ path });

  // 이벤트를 등록합니다.
  $app.querySelectorAll("li").forEach((el) => {
    el.addEventListener("click", () => {
      const { id } = el.dataset;
      const targetIndex = store.state.todoItems.findIndex(
        (v) => v.id === Number(id)
      );
      store.toggleActivation(targetIndex);
      render();
    });
  });
};

render();
