<template>
    <div :class="classes"
         class="v-tag">
        <span v-html="label"></span>
        <slot v-if="$slots.default"></slot>
    </div>
</template>

<script>
    export default {
        name: 'VTag',

        props: {
            /**
             * Определяет классы, которые будут модифицировать цвет
             */
            color: {
                type: String,
                default: 'primary',
                validator(value) {
                    return ['primary', 'white', 'light', 'transparent'].indexOf(value) !== -1;
                },
            },

            label: {
                type: String,
                default: '',
            },

            size: {
                type: String,
                default: 'medium',
                validator(value) {
                    return ['medium', 'small'].indexOf(value) !== -1;
                },
            },
        },

        computed: {
            classes() {
                return [
                    `v-tag--${this.color}`,
                    `v-tag--${this.size}`,
                ];
            },
        },
    };
</script>

<style lang="scss">
    .v-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;

        /* Colors */

        &--medium {
            padding: .5rem .8rem;
            border-radius: .4rem;
            font-size: 1.1rem;
            font-weight: 500;
            line-height: 1.6rem;
        }

        &--small {
            padding: .3rem .5rem;
            border-radius: .2rem;
            font-size: .8rem;
            font-weight: 500;
            line-height: .8rem;
        }

        /* End Colors */

        /* Colors */
        &--primary {
            background-color: $accent;
            color: $base-0;
        }

        &--white {
            background-color: $base-0;
            color: $base-800;
        }

        &--light {
            background-color: $base-50;
            color: $base-800;
        }

        &--transparent {
            background: linear-gradient(0deg, rgba(255, 255, 255, .24), rgba(255, 255, 255, .24)), rgba(255, 255, 255, .16);
            color: $base-0;
        }
        /* End colors */
    }
</style>
