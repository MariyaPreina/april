<template>
		<div :class="$style.HomePage">
        <div class="container">
            <ProductList
                :active-view="activeView"
                @change-view="handleChangeView"
                :cards="items"
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
import {mapState, mapActions} from 'vuex';
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
            };
        },

        computed: {
            ...mapState(['items']),
        },

        methods: {
            ...mapActions([
                'fetchItems',
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
            }
        }

		}
</script>

<style lang="scss" module>
		.HomePage {
				margin-top: 3rem;
		}
</style>
