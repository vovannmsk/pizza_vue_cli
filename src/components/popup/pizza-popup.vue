<template>
    <div class="popup_wrapper" ref="popup_wrapper">
        <div class="pizza-popup">
            <div class="pizza-popup__header">
                <span>{{popupTitle}}</span>
                <span>
                    <span 
                        class="material-icons btn"
                        @click="closeModal"
                    >close
                    </span>
                </span>
            </div>
            <div class="pizza-popup__content">
                <slot></slot>
            </div>
            <div class="pizza-popup__footer">
                <button 
                    class="btn close_modal"
                    @click="closeModal"
                >Close
                </button>
            </div>
        </div>
    </div>

</template>
<script>
    // import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'pizza-popup',
        components: {

        },
        props: {
            popupTitle: {
                type: String,
                default: 'Имя всплывающего окна'
            }
        },
        data() {
            return {
                
            }
        },
        computed: {
            // ...mapGetters([
            // ]),
        },
        methods: {
            // ...mapActions([
            // ]),
            closeModal() {
                this.$emit('closePopup')
            }
        },
        mounted() {
            // если нажимаем на экран вне всплывающего окна, то закрываем окно
            let vm = this;
            document.addEventListener('click', function(item) {
                if (item.target === vm.$refs['popup_wrapper']) {
                    vm.closeModal()
                }
            })
        },

    }
</script>


<style lang="scss">
    .popup_wrapper {
        background: rgba(64,64,64, $alpha: 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
    }
    .pizza-popup {
        padding:18px;
        position: fixed;
        top: 50px;
        width: 1300px;
        background-color: white;
        box-shadow: 0 14px 30px -15px rgba(0,0,0,0.75);
        z-index: 10;
        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__content {
            display: flex;
            justify-content: space-between;
            align-items: center;   
        }
        &__footer {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .close_modal {
            margin: 20px;
            padding: 10px;
            color:white;
            background-color: red;
        }
    } 

</style>

