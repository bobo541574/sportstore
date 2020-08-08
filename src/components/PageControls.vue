<template>
    <div class="row mt-2">
        <div class="col-3 form-group my-1">
            <select class="form-control" @change="changePageSize">
              <option value="4">4 per page</option>
              <option value="8">8 per page</option>
              <option value="12">12 per page</option>
            </select>
        </div>
        <div class="col text-right">
            <div class="btn-group mx-2 my-1">
                <button v-for="i in pageNumbers" :key="i" 
                class="btn" :class="i == currentPage ? 'btn-primary' : 'btn-secondary'" @click="setCurrentPage(i)">
                    {{ i }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters, mapMutations } from "vuex";

    export default {
        name: "PageControls",
        computed: {
            ...mapState(["currentPage"]),
            ...mapGetters(["pageCount"]),
            pageNumbers() {
                return [...Array(this.pageCount + 1).keys()].slice(1);
            },
        },
        methods: {
            ...mapMutations(['setCurrentPage', 'setPageSize']),
            changePageSize($event) {
                this.setPageSize(Number($event.target.value));
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>