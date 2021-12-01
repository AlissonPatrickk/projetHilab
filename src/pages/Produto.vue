<template>
    <main>
        <Table class="tables"/>
    </main>
</template>

<script>
import Table from './Table.vue'

export default{
    name:'Produto',
    components: {
        Table
  }
}

</script>

<style scoped>
main{
  background-color: var(--color-background-home) ;
  width: 100%;
}
.tables{
    background-color: rgb(207, 204, 204);    
}
</style>
