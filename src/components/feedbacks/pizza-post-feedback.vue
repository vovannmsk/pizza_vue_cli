<template>
    <div class="pizza-post-feedback container text-dark">
        <div class="row justify-content-md-center">
            <div class="col-md-4 p-3 login justify-content-md-center">
                <h1 class="h3 mb-3 font-weight-normal text-center">Ваш отзыв:</h1>
                <!-- <p v-if="isIncorrectAuth">Некорректные логин или пароль. Пожалуйста попробуйте снова</p> -->
                <form v-on:submit.prevent="postFeedback">
                    <div class="form-label">
                        <input type="text" name="name" id="name" v-model="nameOfUser" class="form-control" placeholder="Ваше имя:">
                    </div>
                    <div id="v-model-select-dynamic" class="form-label">
                        <select v-model="selectedProduct" class="form-select" aria-label="Default select example">
                            <option 
                                    v-for="product in PRODUCTS"
                                    :key="product.id" 
                                    :value="product.id"
                            >
                                {{ product.name }}
                            </option>
                        </select>
                        <!-- <span>Выбрано: {{ selectedProduct }}</span> -->
                    </div>
                    <div class="form-label">
                        <input type="text" name="feedback" id="feedback" v-model="feedback" class="form-control" placeholder="Ваш отзыв о товаре">
                    </div>

                    <button type="submit" class="btn btn-lg btn-primary btn-block">Оставить отзыв</button>
                    <!-- @click = "postFeedback" -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'pizza-post-feedback',
        components: {
            
        },
        props: {},
        data() {
            return {
                nameOfUser: "",
                selectedProduct: 1,
                feedback: "",
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'POST_FEEDBACK_TO_API',
            ]),
            postFeedback() {
                // если не выбрали продукт из списка, то = 1
                if (this.selectedProduct===null) {
                    this.selectedProduct = 1
                }
                let dataForm = {
                     "buyer": this.nameOfUser,
                     "comment": this.feedback,
                     "product": this.selectedProduct,
                }
                this.POST_FEEDBACK_TO_API(dataForm)
                .then(() => {
                    this.$router.push({ name: 'main'})  //после логирования переходим 
                                                        //на главную страницу
                })
                .catch(err => {
                    console.log(err)
                })
            },
        },
        mounted() {
            // подгружаем список всех продуктов, на которые отправляется отзыв
            this.GET_PRODUCTS_FROM_API()
        }
    }
</script>

<style lang="scss">
    // .pizza-post-feedback {

    // } 

</style>