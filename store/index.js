export const state = () => ({
    items: [],
});

export const getters = {

};

export const mutations = {
    SET_ITEMS(state, payload) {
        state.items = payload;
    },
};

export const actions = {
    async fetchItems({commit}) {
        try {
            const res = await this.$axios.$get('api/v1/products.json?price_less_than=6&price_greater_than=1');
            commit('SET_ITEMS', res);
        } catch (err) {
            console.warn('[VUEX/fetchItems] request failed: ', err);
        }
    },
};
