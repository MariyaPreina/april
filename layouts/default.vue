<template>
    <div :class="$style.DefaultLayout">
        <TheHeader />

        <main :class="$style.page">
            <Nuxt />
        </main>
    </div>
</template>

<script>
// Components
import TheHeader from '~/components/layout/TheHeader';

export default {
    name: 'Default',

    components: {
        TheHeader,
    },
};
</script>

<style lang="scss" module>
    .DefaultLayout {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background: $base-50;
    }

    .page {
        width: 100%;
        height: 100%;
    }
</style>
