<template>
    <div :class="$style.ProductListModal">
        <div :class="$style.modalWrap" @click.self="$emit('close')">
            <div :class="$style.closeBtn">
                <VButtonSquare color="white"
                               @click="$emit('close')">
                    <IconPlus :class="$style.closeBtnIcon" />
                </VButtonSquare>
            </div>

            <div :class="$style.content">
                <div :class="$style.closeBtnMobile">
                    <VButtonSquare color="grey"
                                   size="xsmall"
                                   @click="$emit('close')">
                        <IconPlus :class="$style.closeBtnIcon" />
                    </VButtonSquare>
                </div>
                <div :class="$style.imgWrapper">
                    <img
                        :src="item.api_featured_image"
                        alt="product image"
                        :class="$style.image"
                    >
                </div>

                <div :class="$style.info">
                    <h2 v-if="item.brand" :class="$style.brand">
                        {{ item.brand }}
                    </h2>
                    <div v-if="item.tag_list && item.tag_list.length" :class="$style.tags">
                        <VTag
                            v-for="(tag, i) in item.tag_list"
                            :key="`${i}-${tag}`"
                            :label="tag"
                        />
                    </div>
                    <ul :class="$style.infoList">
                        <li v-if="item.price" :class="$style.infoItem">
                            <span :class="[$style.text, $style.label]">Цена: </span>
                            <span :class="$style.text">{{ item.price }} {{ item.price_sign || '$' }}</span>
                        </li>
                        <li v-if="item.name" :class="$style.infoItem">
                            <span :class="[$style.text, $style.label]">Название: </span>
                            <span :class="$style.text">{{ item.name }}</span>
                        </li>
                        <li v-if="item.category" :class="$style.infoItem">
                            <span :class="[$style.text, $style.label]">Категория: </span>
                            <span :class="$style.text">{{ item.category }}</span>
                        </li>
                        <li v-if="item.product_type" :class="$style.infoItem">
                            <span :class="[$style.text, $style.label]">Тип продукта: </span>
                            <span :class="$style.text">{{ item.product_type }}</span>
                        </li>
                        <li v-if="item.description" :class="$style.infoItem">
                            <span :class="[$style.text, $style.label]">Описание: </span>
                            <span :class="$style.text">{{ item.description }}</span>
                        </li>
                    </ul>
                    <ul :class="$style.colorList">
                        <li
                            v-for="(color, i) in item.product_colors"
                            :key="`${color.colour_name}-${i}`"
                            :class="$style.colorItem"
                        >
                            <div :class="$style.colorIcon" :style="{backgroundColor: color.hex_value}"></div>
                            <p :class="$style.colorLabel">{{ color.colour_name }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VButtonSquare from '~/components/ui/buttons/VButtonSquare';
import IconPlus from '~/components/icons/IconPlus';
import VTag from '~/components/ui/tag/VTag';

		export default {
				name: 'ProductListModal',

        components: {
            VButtonSquare,
            IconPlus,
            VTag,
        },

        props: {
				    item: {
				        type: Object,
                default: () => ({}),
            },
        },
		}
</script>

<style lang="scss" module>
		.ProductListModal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        overflow: hidden;
        overflow-y: auto;
        width: 100%;
        height: 100%;
        pointer-events: none;
        -webkit-overflow-scrolling: touch;
		}

    .modalWrap {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 1px;
        min-height: 100%;
        pointer-events: all;
        background-color: rgba($base-800, .4);
    }

    .closeBtn {
        position: absolute;
        top: 2.4rem;
        right: 2.4rem;

        @include respond-to(sm) {
            top: 1rem;
            right: 1rem;
        }

        @include respond-to(xs) {
            display: none;
        }
    }

    .closeBtnMobile {
        display: none;
        position: absolute;
        top: 1rem;
        right: 1rem;

        @include respond-to(xs) {
            display: block;
        }
    }

    .closeBtnIcon {
        width: 2rem;
        height: 2rem;
        transform: rotate(45deg);
    }

    .content {
        display: flex;
        width: 80%;
        min-height: 50%;
        max-height: 90%;
        padding: 4rem 2rem;
        border-radius: .8rem;
        background-color: $base-0;

        @include respond-to(sm) {
            flex-direction: column;
            width: 80%;
            margin-top: auto;
            border-radius: 1.6rem 1.6rem 0 0;
        }

        @include respond-to(xs) {
            position: relative;
            width: 100%;
            min-height: 100%;
            margin-top: unset;
            border-radius: unset;
            overflow-y: scroll;
        }
    }

    .imgWrapper {
        width: 50rem;
        margin-right: 3rem;

        @include respond-to(sm) {
            width: 25rem;
            height: 22rem;
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 2rem;
        }

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
        flex: 1;
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: $base-300 $base-100;

        &::-webkit-scrollbar {
            width: .4rem;
        }

        &::-webkit-scrollbar-track {
            border-radius: .4rem;
            background-color: $base-100;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: .4rem;
            background-color: $base-300;
        }

        @include respond-to(xs) {
            overflow-y: unset;
        }
    }

    .brand {
        margin-bottom: 2rem;
        text-transform: uppercase;
        font-size: 2.8rem;
        font-weight: 500;
        line-height: 2.8rem;
        color: $base-800;

        @include respond-to(xs) {
            margin-bottom: 1rem;
            font-size: 2rem;
        }
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: .8rem;
        margin-bottom: .8rem;
    }

    .infoList {
        margin-top: 2rem;
        padding-right: 1rem;
    }

    .infoItem {
        &:not(:last-child) {
            margin-bottom: .8rem;
        }
    }

    .text {
        font-size: 1.6rem;
        color: $base-900;

        &.label {
            color: $base-500;
        }

        @include respond-to(xs) {
            font-size: 1.2rem;
        }
    }

    .colorList {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        margin-top: 3rem;
        padding-bottom: 2rem;
    }

    .colorItem {
        display: flex;
        align-items: center;

        &:not(:last-child) {
            margin-right: 1rem;
        }
    }

    .colorIcon {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
    }

    .colorLabel {
        margin-left: .5rem;
        font-size: 1rem;
        color: $base-600;
    }
</style>
