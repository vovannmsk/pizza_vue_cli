<template>
    <div class="pizza-login container text-dark">
        <div class="row justify-content-md-center">
            <div class="col-md-4 p-3 login justify-content-md-center">
                <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                <p v-if="isIncorrectAuth">Некорректные логин или пароль. Пожалуйста попробуйте снова</p>
                <form v-on:submit.prevent="login">
                    <div class="form-label">
                        <input type="text" name="username" id="user" v-model="username" class="form-control" placeholder="Username">
                    </div>
                    <div class="form-label">
                        <input type="password" name="password" id="pass" v-model="password" class="form-control" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-lg btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'pizza-login',
        components: {
            
        },
        props: {},
        data() {
            return {
                username: '',
                password: '',
                isIncorrectAuth: false,
            }
        },
        computed: {
            ...mapGetters([
                'ACCESS_TOKEN',
                'TO_ROUTER',
            ]),
        },
        methods: {
            ...mapActions([
                'USER_LOGIN',
                'CHANGE_USERNAME',
                'RESET_ALL_FILTERS',
                'GET_PRODUCTS_FROM_API',
            ]),

            login () { 
                this.$store.dispatch('USER_LOGIN', {
                    username: this.username,
                    password: this.password
                })
                .then(() => {
                    this.CHANGE_USERNAME(this.username),
                    this.RESET_ALL_FILTERS(),
                    this.GET_PRODUCTS_FROM_API(),  // читаем данные из API снова
                    this.$router.push({ name: this.TO_ROUTER})  //после логирования переходим туда, 
                                                                // куда и собирались
                })
                .catch(err => {
                    console.log(err)
                    this.isIncorrectAuth = true
                    })
            },
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    // .pizza-login {

    // } 
    .form-label{
        margin-bottom: 20px;
    }
    .login{
        background-color:#fff;
        margin-top:10%;
    }
    input {
        padding: 25px 10px;
    }
</style>