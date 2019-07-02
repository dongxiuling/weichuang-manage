<template>
    <div>
        <search-form :options1="this.$store.state.user.options1"
         :options2="this.$store.state.user.options2" />
        <search-table :tableData="this.$store.state.user.tableData2"
        :num="2"/>
    </div>
</template>

<script>
  import SearchTable from "@/components/SearchTable.vue";
  import SearchForm from "@/components/SearchForm.vue";

export default {
    components:{SearchTable,SearchForm},
    methods: {
        handleEdit(row) {
            this.$store.commit('user/handleEdit',row);
        },
        handleDelete(row) {
            this.$store.commit('user/handleDelete2', row);
        },
        getAdmissions(value){
            this.$store.commit('user/getAdmissions',value);
        },
        getFull(value){
            this.$store.commit('user/getFull',value);
        }
    }
}
</script>