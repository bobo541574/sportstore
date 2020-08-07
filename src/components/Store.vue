<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand">SPORT STORE</a>
                <CartSummary />
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-info p-2">
                <h4 class="text-white m-2">
                    Categories
                </h4>
                <CategoryControls />
            </div>
            <div class="col-9 bg-success p-2">
                <h4 class="text-white text-center m-2">
                    Products
                </h4>
            <ProductList />
            </div>
        </div>
    </div>
</template>

<script>
    import ProductList from '@/components/ProductList.vue';
    import CategoryControls from '@/components/CategoryControls.vue';
    import CartSummary from '@/components/CartSummary.vue';
    export default {
        name: "Store",
        components: {
            ProductList,
            CategoryControls,
            CartSummary
        },
    }
</script>

<style lang="scss" scoped>

</style>