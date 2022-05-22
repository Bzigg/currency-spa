<template>
    <section class="convert">
        <form action="convert__form">
            <input
                type="text"
                v-model="money"
            >
        </form>
    </section>
</template>

<script>

export default {
    data: () => ({
        money: 0
    })
}
</script>
