<template>
    <div
        :class="['select', { 'active': isActive }]"
        @click="toggleSelector"
    >
        <div class="select__title">RU</div>
        <ul class="select__options">
            <li class="select__item">USD</li>
            <li class="select__item active">RU</li>
            <li class="select__item">EURO</li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        isActive: true
    }),
    methods: {
        toggleSelector () {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style lang="scss" scoped>
    .select {
        display: block;
        position: relative;
        max-width: 100px;
        width: 100%;
        cursor: pointer;

        &.active {

            .select__options {
                display: block;
                margin: 0;
                padding: 0;
                width: 100px;
                border: 1px solid rgba(116, 116, 116, 0.712);
                border-radius: 6px;
            }
        }

        &__title {
            padding: 6px 16px;
            border: 1px solid rgba(116, 116, 116, 0.712);
            border-radius: 6px;

            &:hover {
                border-color: rgba(66, 185, 131, 0.69);
            }
        }

        &__options {
            display: none;
            max-width: 100px;
            width: 100%;
            list-style-type: none;
            position: absolute;
        }

        &__item {
            padding: 6px 16px;
            text-align: right;

            &:hover {
                color: rgb(255, 255, 255);
                background-color: rgba(66, 185, 131, 0.69);
            }
        }
    }
</style>