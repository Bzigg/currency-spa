<template>
    <Header />
    <main>
        <router-view />
    </main>
    <Footer />
</template>

<script>
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>