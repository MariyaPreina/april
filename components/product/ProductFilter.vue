<template>
		<div :class="$style.ProductFilter">
        <form :class="$style.form">
            <div :class="$style.label">
                Введите параметры поиска
            </div>
            <div :class="$style.inputWrapper">
                <VInput/>
                <VButtonSquare size="small" :class="$style.button">
                    <IconSearch/>
                </VButtonSquare>
            </div>
        </form>

        <div :class="$style.viewToggler">
            <div :class="$style.label">
                Вид
            </div>
            <div :class="$style.buttons">
                <VButtonSquare
                    :color="activeView === 'grid' ? 'primary' : 'grey'"
                    label="Плиткой"
                    @click="$emit('change-view', 'grid')"
                >
                    <IconGrid />
                </VButtonSquare>
                <VButtonSquare
                    :color="activeView === 'row' ? 'primary' : 'grey'"
                    label="Списком"
                    label-position="right"
                    @click="$emit('change-view', 'row')"
                >
                    <IconRow />
                </VButtonSquare>
            </div>
        </div>

        <div :class="$style.mobileViewToggler">
            <VButtonSquare
                :color="activeView === 'grid' ? 'primary' : 'grey'"
                size="custom"
                :class="$style.viewBtn"
                @click="$emit('change-view', 'grid')"
            >
                <template #leftAddon>Плиткой</template>
                <IconGrid />
            </VButtonSquare>
            <VButtonSquare
                :color="activeView === 'row' ? 'primary' : 'grey'"
                size="custom"
                :class="$style.viewBtn"
                @click="$emit('change-view', 'row')"
            >
                <template #leftAddon>Списком</template>
                <IconRow />
            </VButtonSquare>
        </div>

		</div>
</template>

<script>
import VInput from '~/components/ui/input/VInput';
import VButtonSquare from '~/components/ui/buttons/VButtonSquare';
import IconSearch from '~/components/icons/IconSearch';
import IconGrid from '~/components/icons/IconGrid';
import IconRow from '~/components/icons/IconRow';

		export default {
				name: 'ProductFilter',

        components: {
            VInput,
            VButtonSquare,
            IconSearch,
            IconGrid,
            IconRow,
        },

        props: {
				    activeView: {
				        type: String,
                default: 'grid',
            }
        }


		}
</script>

<style lang="scss" module>
		.ProductFilter {
        display: flex;
        justify-content: space-between;
				background-color: $base-0;
        border-radius: 2rem;

        @include respond-to(xs) {
            flex-direction: column-reverse;
        }
		}

    .form {
        display: flex;
        flex-direction: column;
        width: 40%;

        @include respond-to(sm) {
            width: 50%;
        }

        @include respond-to(xs) {
            width: 100%;
        }
    }

    .form,
    .viewToggler {
        padding: 2.4rem;

        @include respond-to(xs) {
            padding: 1.5rem;
        }
    }

    .viewToggler {
        border-left: 1px solid $base-100;

        @include respond-to(xs) {
            display: none;
        }
    }

    .inputWrapper {
        display: flex;
        margin-top: auto;
    }

    .button {
        margin-left: 1rem;
    }

    .label {
        height: 6rem;
        font-size: 1.6rem;
        color: $base-500;

        @include respond-to(xs) {
            height: unset;
            margin-bottom: 1.5rem;
            font-size: 1.4rem;
        }
    }

    .buttons {
        display: flex;
        gap: 1rem;
    }

    .mobileViewToggler {
        display: none;

        @include respond-to(xs) {
            display: flex;
            gap: 1rem;
            padding: 1.5rem 1.5rem 0;
        }
    }

    .viewBtn {
        flex: 1;
        height: 4.4rem;
        padding: 1.1rem;
        border-radius: .4rem;

        &:global(.v-button-square) {
            justify-content: space-between;
        }

        svg {
            width: 1.8rem;
            height: 1.8rem;
            margin-left: 1rem;
        }
    }
</style>
