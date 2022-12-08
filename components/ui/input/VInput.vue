<template>
		<div class="v-input">
        <input ref="input"
               v-model="value"
               class="v-input__native"
               :type="type"
               :name="name"
               :maxlength="maxLength"
               @keydown.enter="$emit('enter', value)"
               @input="$emit('input', value)"
               @blur="$emit('blur', value)">
		</div>
</template>

<script>
		export default {
				name: 'VInput',

        props: {
            type: {
                type: String,
                default: 'text',
            },

            name: {
                type: String,
                default: '',
            },

            maxLength: {
                type: Number,
                default: null,
            },
        },

        data() {
				    return {
				        value: '',
            };
        },
		}
</script>

<style lang="scss">
		.v-input {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 4.4rem;
        padding: 0 2.4rem;
        border-radius: .4rem;
        border: 1px solid $base-300;
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: $base-700;
        transition: border-color $default-color-transition, background-color $default-color-transition, color $default-color-transition;

        &__native {
            position: relative;
            z-index: 2;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: none;
            background-color: transparent;
            outline: none;
            font-size: inherit;
            color: currentColor;
            box-shadow: none;
            -webkit-appearance: none;
            -webkit-text-size-adjust: 100%;
        }
		}
</style>
