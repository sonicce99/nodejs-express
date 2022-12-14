export const store = {
  state: globalThis.state || {
    todoItems: [
      { id: 1, content: "CSR을 만들어보자", activation: true },
      { id: 2, content: "CSR 코드 분할", activation: false },
      { id: 3, content: "SSR을 만들어보자", activation: false },
    ],
  },
  setState(newState) {
    this.state = { ...this.state, ...newState };
    fetch("/api/state", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state),
    });
  },
  toggleActivation(index) {
    const todoItems = [...this.state.todoItems];
    todoItems[index].activation = !todoItems[index].activation;
    this.setState({ todoItems });
  },

  // 이 메소드는 server side에서 사용됩니다.
  hydration(state) {
    this.state = state;
  },
};
