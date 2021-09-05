export const state = () => ({
  menu: false,
  menuIsVisible: true
});

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu;
  },
  SET_ERROR(state, error) {
    state.menu = error;
  },
  TOGGLE_MENU(state, value) {
    state.menuIsVisible = value;
  }
};

export const actions = {
  async fetchMenu({ commit }, $prismic) {
    try {
      const menu = await $prismic.api.getSingle("menu");
      commit("SET_MENU", menu.data);
    } catch (e) {
      console.log(e);
      const error = "Please create a menu document";
      commit("SET_ERROR", error);
    }
  }
};
