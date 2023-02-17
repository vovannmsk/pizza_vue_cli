<template>
    <div class="pizza-my-feedbacks container-fluid text-center">
        <div class="row">
            <div class = "col-xl-6 col-lg-9 col-md-12 col-sm-12">
                <div class="text-bg-primary p-4">
                    <h2>Ваши отзывы</h2>
                </div>
                <div class="row heading p-2 align-items-center"> 
                    <div class="col-2">Фото товара</div>
                    <div class="col-5">Наименование товара</div>
                    <div class="col-5">Ваш комментарий</div>
                </div>
                <pizza-my-feedback
                    v-for="feedback in MY_FEEDBACKS"
                    :key="feedback.id"
                    :feedback="feedback"
                >
                </pizza-my-feedback>
                <!-- <table class="table">
                    <thead>
                        <tr>
                          <th class="feedbacks-theed" scope="col">Фото товара</th>
                          <th class="feedbacks-theed" scope="col">Наименование товара</th>
                          <th class="feedbacks-theed" scope="col">Ваш комментарий</th>
                        </tr>
                    </thead>
                    <tbody>
                        <pizza-my-feedback
                            v-for="feedback in MY_FEEDBACKS"
                            :key="feedback.id"
                            :feedback="feedback"
                        >
                        </pizza-my-feedback>
                    </tbody>
                </table> -->
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import pizzaMyFeedback from './pizza-my-feedback.vue'

    export default {
        name: 'pizza-my-feedbacks',
        components: {
            pizzaMyFeedback, 
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
    .pizza-my-feedbacks {
        .feedbacks-theed {
            vertical-align: middle;
        }
        .heading {
            margin-top: 10px;
            margin-bottom: 10px;
            font-weight: 800;
        }

    } 

</style>