<template>
  <main>
    <Table class="tables"/>
  </main>
</template>
<script>
import Table from "./Table.vue";
export default {
  name: "Produto",
  components: {
    Table,
  },
};
</script>

<style scoped>
main {
  width: 100%;
}
.tables {
  background-color: white;
  color: aqua;
}
</style>
