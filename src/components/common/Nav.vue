<template>
    <nav class="nav">
        <router-link to="/" class="nav__link">Конвертер валюты</router-link>
        <router-link to="/exchange-rates" class="nav__link">Курсы валют</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .nav {
        padding: 30px;
        display: flex;

        &__link {
            margin-right: 8px;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    .nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    .nav a.router-link-exact-active {
        color: #42b983;
    }
</style>