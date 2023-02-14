<template>
    <div class="pizza-logout">
    </div>
</template>

<script>
    import { mapActions,  } from 'vuex'
    export default {
        name: 'pizza-logout',
        created () {
            this.$store.dispatch('USER_LOGOUT')
            .then(() => {
                // this.GET_PRODUCTS_FROM_API()
                this.$router.push({ name: 'login' })
            })
        },
        components: {
        },
        props: {},
        data() {
            return {
            }
        },
        computed: {
        },
        methods: {
            ...mapActions([
                'USER_LOGOUT',
                // 'GET_PRODUCTS_FROM_API',
            ]),
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    // .pizza-logout {

    // } 

</style>