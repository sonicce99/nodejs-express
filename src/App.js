import { TodoList } from "./components.js";

// path에 따라 Rendering할 Component를 핸들링합니다.
const Router = (path) => {
  if (path === "/todo-list") {
    return TodoList();
  }

  // `/todo-list` 외의 path는 전부 Hello World를 렌더링하도록 구성합니다.
  return `Hello World`;
};

// header와 footer를 추가했습니다.
export const App = ({ path }) => {
  return `
      <header>
        <a href="/">SSR Tutorial</a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/todo-list">Todo List</a></li>
          </ul>
        </nav>
      </header>
      ${Router(path)}
    `;
};
