<template>
    <header>
            <nav>
                <router-link to="/">Конвертер валюты</router-link>
                <router-link to="/exchange-rates">Курсы валют</router-link>
            </nav>
        <router-view/>
    </header>
</template>

<script>
export default {

}
</script>

<style>
    nav {
    padding: 30px;
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    }

    nav a.router-link-exact-active {
    color: #42b983;
    }
</style>