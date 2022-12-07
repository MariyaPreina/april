<template>
		<div :class="$style.ProductListRow">
        <div :class="$style.border"></div>

        <div :class="$style.imgWrapper">
            <img
                :src="card.api_featured_image"
                alt="product image"
                :class="$style.image"
            >
        </div>

        <div :class="$style.content">
            <div :class="$style.info">
                <h2 v-if="card.brand" :class="$style.brand">
                    {{ card.brand }}
                </h2>
                <div>
                    <span v-if="card.name" :class="$style.text">{{ card.name }}</span>
                    <span v-if="card.category" :class="$style.text">{{ card.category }}</span>
                    <span v-if="card.product_type" :class="$style.text">{{ card.product_type }}</span>
                </div>
            </div>
            <p v-if="card.price" :class="$style.price">
                {{ card.price }} {{ card.price_sign || '$' }}
            </p>
        </div>

        <div v-if="card.tag_list && card.tag_list.length" :class="$style.tags">
            <VTag
                v-for="(tag, i) in card.tag_list"
                :key="`${i}-${tag}`"
                :label="tag"
            />
        </div>
		</div>
</template>

<script>
import VTag from '~/components/ui/tag/VTag';

		export default {
				name: 'ProductListRow',

        components: { VTag },

        props: {
            card: {
                type: Object,
                default: () =>({}),
            },
        },
		}
</script>

<style lang="scss" module>
		.ProductListRow {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 3.5rem 2rem 3rem;
        background-color: $base-0;
        border-radius: 2.4rem;
        transition: transform $default-color-transition;
        cursor: pointer;

        @include hover {
            transform: scale(.99);

            .border {
                opacity: 1;
            }
        }
		}

    .border {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        border-radius: 2.4rem;
        border: 1px solid $accent;
        opacity: 0;
        transition: opacity .4s;
        pointer-events: none;
    }

    .imgWrapper {
        width: 14rem;
        height: 12rem;
        margin-right: 3rem;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .content {
        display: flex;
        justify-content: space-between;
        flex: 1;
    }

    .tags {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: .8rem;
        width: calc(100% - 20rem);
    }

    .brand {
        margin-bottom: 2rem;
        text-transform: uppercase;
        font-size: 2.8rem;
        font-weight: 500;
        line-height: 2.8rem;
        color: $base-800;
    }

    .text {
        position: relative;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1;

        &:not(:last-child) {
            margin-right: 2rem;

            &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: calc(100% + .8rem);
                display: block;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: $base-400;
                transform: translateY(-50%);
            }
        }
    }

    .price {
        font-size: 3.2rem;
        font-weight: 600;
    }
</style>
