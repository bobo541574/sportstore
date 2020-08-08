<template>
    <div class="col">
        <div v-if="showSearch" class="row my-2">
            <label class="col-2 col-form-label text-right">Search: </label>
            <input class="col form-control" :value="searchTerm" @input="doSearch" placeholder="Enter search term..." />
            <button class="col-2 btn btn-sm btn-secondary mx-4" @click="handleClose">
                Close
            </button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations } from "vuex";
    export default {
        name: "Search",
        computed: {
            ...mapState(["showSearch", "searchTerm"]),
        },
        methods: {
            ...mapMutations(["setShowSearch"]),
            ...mapActions(["clearSearchTerm", "search"]),
            handleClose() {
                this.clearSearchTerm();
                this.setShowSearch(false);
            },
            doSearch($event) {
                this.search($event.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>