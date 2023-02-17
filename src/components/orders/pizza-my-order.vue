<template>
    <div @click="clickOrder" class="pizza-my-order row order-items align-items-center">
        <div class="col-1">{{ item.pk }}</div>
        <div class="col-2">{{ item.created.slice(0, 10) }}</div>
        <div class="col-4">{{ item.address }}</div>
        <div class="col-2">{{ item.total_amount }}</div>
        <div class="col-1 text-center">
            <input v-if="item.paid" type="checkbox" value="" checked disabled> 
            <input v-else type="checkbox" value="" disabled>
        </div>
        <div class="col-1 text-center">
            <input v-if="item.delivered" type="checkbox" value="" checked disabled>
            <input v-else type="checkbox" value="" disabled>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'pizza-my-order',
        components: {
            // pizzaCartSmall,
        },
        props: {
            item: {
                type: Object,
                default() {
                    return {}
                }
            },

        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters([
                // 'MY_ORDERS',
            ]),
        },
        methods: {
            ...mapActions([
                // 'GET_ORDERS_FROM_API',
            ]),
            clickOrder() {
                this.$emit('selectOrder', this.item.pk)   
            },
        },
        mounted() {
            // this.GET_ORDERS_FROM_API();
        }
    }
</script>

<style lang="scss">
    .pizza-my-order {
        :hover {
            cursor: pointer;
            color: red;
            background-color: white;
        }
        .order-items {
            margin-top: 5px;
            margin-bottom: 5px;
        }
    } 

</style>