import { store } from "./store.js";

export const component = () => `
<div>
    <h2>CSR Rendering</h2>
    <form>
        <input class='id' placeholder='아이디' />
        <input class='name' placeholder='이름'/>

        <button type='button'>등록</button>
    </form>

    <div>
        <ul>
        ${store
          .getState()
          .map((obj) => {
            const { id, name } = obj;
            return `<li>
            ${id} (${name})
            </li>`;
          })
          .join("")}
        </ul>
    </div>
</div>
`;
