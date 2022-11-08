const store = {
  state: [{ id: "sonicce99", name: "이동수" }],

  getState: () => {
    return store.state;
  },

  setState: (newState) => {
    store.state.push(newState);
  },
};

module.exports = store;
