<template>
    <component :is="component"
               v-bind="linkProperties"
               class="v-button-square"
               :class="classes"
               :disabled="disabled"
               :type="!link && !href ? type : null"
               @click="onClick"
    >
        <span v-if="$slots.leftAddon"
              class="v-button__leftAddon">
            <slot name="leftAddon"></slot>
        </span>
        <div v-if="label"
             class="v-button-square__label"
             :class="labelPosition"
        >
            {{ label }}
        </div>
        <span class="v-button-square__text">
            <slot></slot>
        </span>
    </component>
</template>

<script>

export default {
    name: 'VButtonSquare',

    props: {
        /**
         * Определяет классы, которые будут модифицировать размер
         */
        size: {
            type: String,
            default: 'medium',
            validator(value) {
                return ['medium', 'small', 'xsmall', 'custom'].indexOf(value) !== -1;
            },
        },

        /**
         * Определяет классы, которые будут модифицировать цвет
         */
        color: {
            type: String,
            default: 'primary',
        },

        /**
         * Это свойство задизейблет кнопку
         */
        disabled: {
            type: Boolean,
            default: false,
        },

        /**
         * Меняет тип кнопки
         */
        type: {
            type: String,
            default: 'button',
        },

        /**
         * Устанавливает тег a для кнопки
         */
        href: {
            type: String,
            default: '',
        },

        /**
         * target="_blank" для ссылок
         */
        blank: {
            type: Boolean,
            default: false,
        },

        /**
         * Для внутренних ссылок (тег n-link)
         */
        link: {
            type: [String, Object],
            default: '',
        },

        label: {
            type: String,
            default: '',
        },

        labelPosition: {
            type: String,
            default: '',
        },
    },

    computed: {
        component() {
            if (this.href) {
                return 'a';
            } else if (this.link) {
                return 'nuxt-link';
            }
            return 'button';
        },

        linkProperties() {
            const linkProperties = {};
            if (this.link) {
                linkProperties.to = this.link;
            } else if (this.href) {
                linkProperties.href = this.href;
            }

            if (this.blank) {
                linkProperties.target = '_blank';
            }
            return linkProperties;
        },

        classes() {
            return [
                `v-button-square--${this.color}`,
                `v-button-square--${this.size}`,
                {
                    'is-disabled': this.disabled,
                },
            ];
        },
    },

    methods: {
        onClick(e) {
            if (this.disabled || this.loading) {
                return;
            }
            this.$emit('click', e);
        },
    },
};
</script>

<style lang="scss">
    .v-button-square {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        outline: none;
        white-space: nowrap;
        font-family: inherit;
        line-height: 1;
        transition: all .4s;
        cursor: pointer;
        -webkit-user-select: none;
        user-select: none;

        svg {
            width: 2.4rem;
        }

        &__text {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        $parent: &;

        @include hover() {
            &:hover {
                #{$parent}__label {
                    opacity: 1;
                    transform: rotateY(0);
                }
            }
        }

        /* Colors */
        &--primary {
            border-color: $accent;
            background-color: $accent;
            color: $base-0;

            & .v-button__icon-wrap {
                border-color: $base-0;
                background-color: $base-0;
            }

            @include hover {
                border-color: $accent-light;
                background-color: $accent-light;
                color: $base-0;
            }

            &:active {
                border-color: $accent-dark;
                background-color: $accent-dark;
            }

            &.is-disabled {
                border-color: $base-400;
                background-color: $base-400;
                color: $base-500;
                pointer-events: none;
            }
        }

        &--grey {
            border-color: $base-100;
            background-color: $base-100;
            color: $base-600;

            & .v-button__icon-wrap {
                border-color: $base-0;
                background-color: $base-0;
            }

            @include hover {
                border-color: $base-200;
                background-color: $base-200;
            }

            &:active {
                border-color: $base-300;
                background-color: $base-300;
            }

            &.is-disabled {
                border-color: $base-100;
                background-color: $base-100;
                color: $base-200;
                pointer-events: none;
            }
        }

        &--white {
            border-color: $base-0;
            background-color: $base-0;
            color: $base-600;

            & .v-button__icon-wrap {
                border-color: $base-0;
                background-color: $base-0;
            }

            @include hover {
                border-color: $accent;
            }

            &:active {
                border-color: $accent-dark;
            }

            &.is-disabled {
                border-color: $base-100;
                background-color: $base-100;
                color: $base-200;
                pointer-events: none;
            }
        }

        /* Sizes */

        &--medium {
            width: 6rem;
            height: 6rem;
            padding: 2rem;
            border-radius: .8rem;
            font-size: 1.4rem;
        }

        &--small {
            width: 4.4rem;
            height: 4.4rem;
            padding: 1.1rem;
            border-radius: .4rem;

            svg {
                width: 1.8rem;
                height: 1.8rem;
            }
        }

        &--xsmall {
            width: 3rem;
            height: 3rem;
            padding: 1.1rem;
            border-radius: .4rem;

            svg {
                width: 1.5rem;
                height: 1.5rem;
            }
        }

        &--custom {
            //
        }

        /* End Sizes */

        &__label {
            position: absolute;
            bottom: calc(100% + .4rem);
            left: 0;
            padding: 1rem 2rem;
            border-radius: .8rem;
            background-color: rgba($base-600, .6);
            font-weight: 400;
            color: $base-0;
            opacity: 0;
            transform: rotateY(-90deg);
            transition: .4s;

            &.right {
                right: 0;
                left: initial;
            }

            @include respond-to(md) {
                display: none;
            }
        }
    }
</style>
