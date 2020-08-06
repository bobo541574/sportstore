<template>
    <div>
        <div class="col-12">
            <div v-for="p in products" :key="p.id" class="card my-1 p-2 bg-light">
                <h4>
                    {{ p.name }}
                    <span class="badge badge-warning h6">{{ p.category }}</span>
                    <span class="badge badge-pill badge-primary float-right">
                        {{ p.price | currency }}
                    </span>
                </h4>
                <div class="card-text bg-white p-1">{{ p.description }}
                    <button class="btn btn-success btn-sm float-right" @click="handleProductAdd(p)">Add To Cart</button>
                </div>
            </div>
        </div>
        <div class="col-12">
            <PageControls />
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    import PageControls from '@/components/PageControls.vue';

    export default {
        components: {
            PageControls,
        },
        computed: {
            ...mapGetters({products: "processedProducts"})
        },
        // filters: {
        //     currency(value) {
        //         return new Intl.NumberFormat("en-us", { style: "currency", currency: "USD" }).format(value)
        //     }
        // },
        methods: {
            ...mapMutations({ addProduct: "cart/addProduct" }),
            handleProductAdd(product) {
                this.addProduct(product);
                this.$router.push("/cart");
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>