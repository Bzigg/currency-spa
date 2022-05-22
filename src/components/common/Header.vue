<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <NavVue />
                <SelectVue />
            </div>
        </div>
    </header>
</template>

<script>
import SelectVue from './helpers/Select.vue';
import NavVue from './Nav.vue';

export default {
    components: {
        NavVue,
        SelectVue
    }
}
</script>

<style>
    .container {
        max-width: 1024px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .header__content {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
</style>