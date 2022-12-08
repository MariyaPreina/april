<template>
		<header :class="$style.TheHeader">
        <div :class="[$style.inner, 'container']">
            <h1 :class="$style.title">Listing Products</h1>
        </div>
		</header>
</template>

<script>
		export default {
				name: 'TheHeader',
		}
</script>

<style lang="scss" module>
		.TheHeader {
        display: flex;
        align-items: center;
				height: $header-h;
        border-bottom: 1px solid $base-100;

        @include respond-to(xs) {
            height: $header-mobile-h;
        }
		}

    .inner {
        width: 100%;
    }

    .title {
        font-size: 4rem;
        font-weight: 600;
        color: $accent;

        @include respond-to(xs) {
            font-size: 3rem;
        }
    }
</style>
