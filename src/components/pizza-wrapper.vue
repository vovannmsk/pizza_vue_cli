<template>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body link="White">
    <div class="pizza-wrapper container">
        <div class="row">
            <div class="col-md-3">    <!--  sidebar  -->
            </div>
            <router-view> </router-view>
        </div>

    </div>
</body>

</template>

<script>

// import { mapGetters} from 'vuex'

    export default {
        name: 'pizza-wrapper',
        props: {},
        data() {
            return {
            }
        },
        computed: {},
        methods: {},
    }
</script>


<style>
    /* .pizza-wrapper {

    } */
    html {
        font-size:16px;
    }
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #ffe0b2;
        font-size:16px;
        font-weight:400;
        color:#000;
    }
</style>