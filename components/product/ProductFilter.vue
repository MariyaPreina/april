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
		}

    .form {
        display: flex;
        flex-direction: column;
        width: 40%;
    }

    .form,
    .viewToggler {
        padding: 2.4rem;
    }

    .viewToggler {
        border-left: 1px solid $base-100;
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
    }

    .buttons {
        display: flex;
        gap: 1rem;
    }
</style>
