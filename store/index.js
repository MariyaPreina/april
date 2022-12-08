export const state = () => ({
    items: [],
    value: '',
});

export const getters = {
    getFilteredItems(state) {
        return state.items.filter(data =>
            JSON.stringify(data).toLowerCase().indexOf(state.value.toLowerCase()) !== -1);
    }
};

export const mutations = {
    SET_ITEMS(state, payload) {
        state.items = payload;
    },

    SET_VALUE(state, payload) {
        state.value = payload;
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
