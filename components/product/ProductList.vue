<template>
		<div :class="$style.ProductList">
        <ProductFilter
            :active-view="activeView"
            :class="$style.filters"
            :is-loading="isLoading"
            :products-count="cards.length"
            @change-input="$emit('change-input', $event)"
            @on-input="$emit('on-input', $event)"
            @change-view="$emit('change-view', $event)"
        />
        <transition name="fade" mode="out-in">
            <div v-if="!itemsList.length"
                 :key="'empty'"
                 :class="$style.emptyText"
            >
                <p>По заданным параментрам ничего не найдено.</p>
                <p>Измените параметры и попробуйте снова.</p>
            </div>

            <div v-else-if="activeView === 'grid' && itemsList.length"
                 :key="'grid'"
                 :class="$style.grid"
            >
                <div v-for="card in itemsList"
                     :key="`${card.id}-${card.name}`"
                     :class="$style.gridCard">
                    <ProductListCard
                        :card="card"
                        @card-click="$emit('card-click', $event)"
                    />
                </div>
            </div>

            <div v-else-if="activeView === 'row' && itemsList.length"
                 :key="'row'"
                 :class="$style.row"
            >
                <div v-for="card in itemsList"
                     :key="`${card.id}-${card.name}`"
                     :class="$style.rowCard">
                    <ProductListRow
                        :card="card"
                        @card-click="$emit('card-click', $event)"
                    />
                </div>
            </div>
        </transition>

        <transition name="fade-content">
            <VButtonSquare
                v-if="hasNext && pagiCount > 0"
                color="white"
                :class="$style.btn"
                size="custom"
                @click="loadMore"
            >
                <span>+ {{ pagiCount }} {{ pagiCount | plural(['продукт', 'продукта', 'продуктов']) }}</span>
            </VButtonSquare>
        </transition>
		</div>
</template>

<script>
import ProductFilter from '~/components/product/ProductFilter';
import ProductListCard from '~/components/product/ProductListCard';
import ProductListRow from '~/components/product/ProductListRow';
import VButtonSquare from '~/components/ui/buttons/VButtonSquare';


		export default {
				name: 'ProductList',

        components: {
            VButtonSquare,
				    ProductFilter,
            ProductListCard,
            ProductListRow,
        },

        props: {
            activeView: {
                type: String,
                default: 'grid',
            },

            cards: {
                type: Array,
                default: () => [],
            },

            isLoading: {
                type: Boolean,
                default: false,
            }
        },

        data() {
            return {
                lastIndex: 6,
                step: 6,
            };
        },

        computed: {
            itemsList() {
                return this.cards.slice(0, this.lastIndex);
            },

            hasNext() {
                return this.lastIndex < this.cards.length;
            },

            pagiCount() {
                return this.cards.length - this.lastIndex;
            }
        },

        methods: {
            loadMore() {
                if (this.lastIndex < this.cards.length) {
                    this.lastIndex += this.step;
                    this.pagiCount = this.cards.length - this.lastIndex;
                }
            },
        },
		}
</script>

<style lang="scss" module>
		.ProductList {
				padding-bottom: 5rem;
		}

    .filters {
        margin-bottom: 2rem;

    }

    .grid {
        display: flex;
        flex-wrap: wrap;
        margin: -.8rem;
    }

    .gridCard {
        width: 33.333333333%;
        padding: .8rem;

        @include respond-to(sm) {
            width: 50%;
        }

        @include respond-to(xs) {
            width: 100%;
        }
    }

    .rowCard {
        width: 100%;

        &:not(:last-child) {
            margin-bottom: .8rem;
        }
    }

    .btn {
        width: 100%;
        height: 5rem;
        margin-top: 3rem;
        border-radius: .8rem;

        @include respond-to(sm) {
            margin-top: 2rem;
        }

        @include respond-to(xs) {
            margin-top: 1rem;
        }
    }

    .emptyText {
        padding: 15% 0;
        text-align: center;
        font-size: 2rem;
        line-height: 3rem;
        color: $base-500;

        @include respond-to(sm) {
            padding: 20% 0;
        }

        @include respond-to(xs) {
            font-size: 1.2rem;
            line-height: 1.6rem;
            padding: 30% 0;
        }
    }
</style>
