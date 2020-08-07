<template>
    <div>
        <div class="contailer-fluid">
            <div class="row">
                <div class="col bg-dark text-white">
                    <a cl
                    navbar-brand>SPORTS STORE</a>
                </div>
            </div>
        </div>
        <div class="m-2">
            <div class="form-group m-2">
                <label>Name</label>
                <input v-model="$v.name.$model" class="form-control" />
                <ValidationError :validation="$v.name" /> 
            </div>
        </div>
        <div class="text-center">
            <router-link to="cart" class="btn btn-secondary m-1">Back</router-link>
            <button class="btn btn-primary m-1" @click="submitOrder">
                Place Order
            </button>
        </div>
    </div>
</template>

<script>
    import { required } from "vuelidate/lib/validators";
    import ValidationError from "@/components/ValidationError";
    export default {
        components: { ValidationError },
        data() {
            return {
                name: null
            }
        },
        validations: {
            name: {
                required
            }
        },
        methods: {
            submitOrder() {
                this.$v.$touch();
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>