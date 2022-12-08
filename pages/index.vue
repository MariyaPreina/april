<template>
		<div :class="$style.HomePage">
        <div class="container">
            <ProductList
                :active-view="activeView"
                :cards="filteredItems"
                :is-loading="isLoading"
                @on-input="onInput"
                @change-input="handleChangeInput"
                @change-view="handleChangeView"
                @card-click="handleOpenModal"
            />
        </div>

        <transition name="fade">
            <ProductListModal
                v-if="isModalOpened"
                :item="activeCard"
                @close="handleCloseModal"
            />
        </transition>
		</div>
</template>

<script>
import TheHeader from '~/components/layout/TheHeader';
import ProductList from '~/components/product/ProductList';
import ProductListModal from '~/components/product/ProductListModal';
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {lockBody, unlockBody} from '~/assets/js/commonUtils';

export default {
    name: 'HomePage',

    components: {
        TheHeader,
        ProductList,
        ProductListModal,
    },

    async asyncData({app}) {
        try {
            await app.store.dispatch('fetchItems');
        } catch (err) {
            console.warn('[Home page/asyncData] request failed: ', err);
        }
    },

    data() {
        return {
            activeView: 'grid',
            isModalOpened: false,
            activeCard: {},
            debounce: null,
            isLoading: false,
        };
    },

    computed: {
        ...mapGetters({
            filteredItems: 'getFilteredItems'
        })
    },

    methods: {
        ...mapActions([
            'fetchItems',
        ]),

        ...mapMutations([
            'SET_VALUE',
        ]),

        handleChangeView(val) {
            this.activeView = val;
        },

        handleOpenModal(val) {
            this.activeCard = val;
            lockBody();
            this.isModalOpened = true;
        },

        handleCloseModal() {
            this.isModalOpened = false;
            unlockBody();
        },

        handleChangeInput(val) {
            this.isLoading = true;
            this.SET_VALUE(val);
            setTimeout(() => {
                this.isLoading = false;
            }, 200)

        },

        onInput(val) {
            this.isLoading = true;
            clearTimeout(this.debounce)
            this.debounce = setTimeout(() => {
                this.SET_VALUE(val);
                this.isLoading = false;
            }, 400)
        }
    }
}
</script>

<style lang="scss" module>
		.HomePage {
				margin-top: 3rem;
		}
</style>
