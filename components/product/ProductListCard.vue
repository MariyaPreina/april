<template>
		<div :class="$style.ProductListCard"
         @click="$emit('card-click', card)"
    >
        <div :class="$style.border"></div>

        <div v-if="card.tag_list && card.tag_list.length" :class="$style.tags">
            <VTag
                v-for="(tag, i) in card.tag_list"
                :key="`${i}-${tag}`"
                :label="tag"
            />
        </div>

        <div :class="$style.imgWrapper">
            <img
                :src="card.api_featured_image"
                alt="product image"
                :class="$style.image"
            >
        </div>

        <div :class="$style.info">
            <h2 v-if="card.brand" :class="$style.brand">
                {{ card.brand }}
            </h2>
            <ul>
                <li v-if="card.name" :class="$style.infoItem">
                    <p :class="[$style.text, $style.label]">Название</p>
                    <p :class="$style.text">{{ card.name }}</p>
                </li>
                <li v-if="card.category" :class="$style.infoItem">
                    <p :class="[$style.text, $style.label]">Категория</p>
                    <p :class="$style.text">{{ card.category }}</p>
                </li>
                <li v-if="card.product_type" :class="$style.infoItem">
                    <p :class="[$style.text, $style.label]">Тип продукта</p>
                    <p :class="$style.text">{{ card.product_type }}</p>
                </li>
            </ul>
            <p v-if="card.price" :class="$style.price">{{ card.price }} {{ card.price_sign || '$' }}</p>
        </div>
		</div>
</template>

<script>
import VTag from '~/components/ui/tag/VTag';

		export default {
				name: 'ProductListCard',

        components: {
            VTag,
        },

        props: {
				    card: {
				        type: Object,
                default: () =>({}),
            },
        },
		}
</script>

<style lang="scss" module>
		.ProductListCard {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
				padding: 3.5rem 2rem 3rem;
        background-color: $base-0;
        border-radius: 2.4rem;
        transition: transform $default-color-transition;
        cursor: pointer;

        @include hover {
            border-color: $accent;
            transform: scale(.98);

            .border {
                opacity: 1;
            }
        }

        @include respond-to(xs) {
            padding: 2.5rem 2rem 2rem;
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

    .tags {
        position: absolute;
        top: 2rem;
        left: 2rem;
        display: flex;
        flex-wrap: wrap;
        gap: .8rem;
        width: calc(100% - 3rem);
    }

    .imgWrapper {
        width: 25rem;
        height: 22rem;
        margin-right: auto;
        margin-bottom: 3rem;
        margin-left: auto;

        @include respond-to(xs) {
            width: 22rem;
            height: 19rem;
            margin-right: auto;
            margin-bottom: 2rem;
        }
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        margin: 0 auto;
    }

    .info {
        margin-top: auto;
    }

    .brand {
        margin-bottom: 3.2rem;
        text-transform: uppercase;
        font-size: 2.8rem;
        font-weight: 500;
        line-height: 2.8rem;
        color: $base-800;

        @include respond-to(xs) {
            margin-bottom: 1.5rem;
            font-size: 2rem;
            line-height: 2rem;
        }
    }

    .infoItem {
        display: flex;
        justify-content: space-between;
        padding-top: 1.2rem;

        &:not(:last-child) {
            padding-bottom: 1.2rem;
            border-bottom: 1px solid $base-100;
        }

        @include respond-to(xs) {
            padding-top: .8rem;

            &:not(:last-child) {
                padding-bottom: .8rem;
            }
        }
    }

    .text {
        font-size: 1.6rem;
        color: $base-800;
        text-align: right;

        &.label {
            margin-right: 1.5rem;
            color: $base-400;
            text-align: left;
        }

        @include respond-to(xs) {
            font-size: 1.4rem;
        }
    }

    .price {
        margin-top: 2rem;
        font-size: 3.2rem;
        font-weight: 600;

        @include respond-to(xs) {
            font-size: 2rem;
        }
    }
</style>
