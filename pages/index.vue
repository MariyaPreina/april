<template>
		<div :class="$style.HomePage">
        <div class="container">
            <ProductList
                :active-view="activeView"
                @change-view="handleChangeView"
                :cards="items"
            />
        </div>
		</div>
</template>

<script>
import TheHeader from '~/components/layout/TheHeader';
import ProductList from '~/components/product/ProductList';
import {mapState, mapActions} from 'vuex';

		export default {
				name: 'HomePage',

        components: {
            TheHeader,
            ProductList,
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
            };
        },

        computed: {
            ...mapState(['items']),
        },

        mounted() {
            console.log(this.items);
        },

        methods: {
            ...mapActions([
                'fetchItems',
            ]),

            handleChangeView(val) {
                this.activeView = val;
            }
        }

		}
</script>

<style lang="scss" module>
		.HomePage {
				margin-top: 3rem;
		}
</style>
