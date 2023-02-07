<template>
    <div class="pizza-product-feedbacks">
        <h3>Отзывы:</h3>
        <div 
            class="card card-feedback"
            v-for="feedback in FEEDBACKS"
            :key="feedback.pk"
        >
            <div class="card-header">
                {{feedback.buyer}}
            </div>
            <div class="card-body">
                <p class="card-text">{{feedback.comment}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'pizza-product-feedbacks',
        components: {

        },
        props: {},
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters([
                'FEEDBACKS',
            ]),
        },
        methods: {
            ...mapActions([
                'GET_FEEDBACKS_FROM_API',
            ]),
        },
        mounted() {
            this.GET_FEEDBACKS_FROM_API();
        }
    }
</script>


<style lang="scss">
    // .pizza-product-feedbacks {
       

    // } 
    .card-feedback {
        margin-top: 7px;
        margin-bottom: 7px;
    }

</style>