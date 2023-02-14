<template>
    <div class="pizza-my-feedbacks container-fluid">
        <div class="row">
            <div class = "col-xl-6 col-lg-9 col-md-12 col-sm-12">
                <div class="text-bg-primary p-4">
                    <h2>Ваши отзывы</h2>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                          <th scope="col">Фото товара</th>
                          <th scope="col">Наименование товара</th>
                          <th scope="col">Ваш комментарий</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                            v-for="feedback in MY_FEEDBACKS"
                            :key="feedback.id"
                        >
                            <td> 
                                <img :src="feedback.product.photo" :alt="feedback.product.shortName" width="100" height="100">
                            </td>
                            <td> {{ feedback.product.name }} </td>
                            <td> {{ feedback.comment }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'pizza-my-feedbacks',
        components: {
            
        },
        props: {},
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'MY_FEEDBACKS',
            ]),
        },
        methods: {
            ...mapActions([
                'GET_MY_FEEDBACKS_FROM_API',
            ]),
        },
        mounted() {
            // подгружаем список всех отзывов текущего пользователя
            this.GET_MY_FEEDBACKS_FROM_API()
        }
    }
</script>

<style lang="scss">
    // .pizza-my-feedbacks {

    // } 

</style>