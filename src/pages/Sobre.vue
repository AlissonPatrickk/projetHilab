<template>
  <main>
    <div>
      <h1>Sobre a Hilab</h1>
    <img src="../assets/sobre.png" id="sobreImg" alt="sobre">
      <h2>Democratizar o acesso à saúde: esse é o nosso propósito</h2>
      <h3>   A Hilab acredita que todas as pessoas devem ter acesso a serviços de saúde de qualidade. 
        Conheça a nossa história e saiba como estamos transformando o mercado de saúde levando nossos 
        Testes Laboratoriais Remotos e outras soluções a todos os cantos do Brasil e do mundo.</h3>
    </div>
    
    
  </main>
</template>
<script>
export default {
  name: "Sobre",
};
</script>
<style scoped>
main {
  background-color: var(--color-background);
  max-width: 100%;
}
h1{
  margin-left: 40%;
  color: black;
}
h2{
  margin-left: 20%;
}
h3{
  margin-left: 10px;
  font-size: 1.5rem;
}
#sobreImg{
  
  max-width: 100%
}
</style>
