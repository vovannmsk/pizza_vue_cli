<template>
    <div class="pizza-admin">
    </div>
</template>

<script>
    import { mapActions,  } from 'vuex'
    export default {
        name: 'pizza-admin',
        created () {
            this.TO_ADMINKA_API()
                .then(() => {
                    window.location.href = 'http://127.0.0.1:8000/admin' //после логирования переходим в админку
                })
                .catch(err => {
                    console.log(err)
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
                'TO_ADMINKA_API',
            ]),
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    // .pizza-admin {

    // } 

</style>