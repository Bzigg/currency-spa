<template>
    <layoutDefault />
</template>
<script>
import layoutDefault from './layouts/default.vue';
export default {
        components: {
        layoutDefault
        }
}
</script>
  
<style>
    * {
        margin: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: none;
    }

    body,
    html {
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 130%;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
