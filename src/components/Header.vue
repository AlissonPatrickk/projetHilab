<template>
  <header class="container">
    <nav>

      <a href="/"><img src="../assets/logo.png" alt="hiLogo" id="logo"></a>
      
      <img v-on:click="openMenu" src="../assets/menu.png" alt="Abrir menu" id="menu-button">

      <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>
      <div id="menu-items" :class="{active:menuActive}">
        <img src="../assets/Vector.png" alt="Abrir menu" id="menu-logo">

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/produto">Produto</a></li>
          <li><a href="/sobre">Sobre</a></li>
        </ul>

      </div>
    </nav>
  </header>
</template>

<script>
export default{
  name:'Header',
  data(){
    return{
      menuActive: false
    }
  },
  methods:{
    openMenu:function(){
      this.menuActive = true;
    },
    closeMenu:function(){
      this.menuActive = false;
    }
  }
}
</script>
<style scoped>
header{
  width: 100%;
  height: 60px;
  
}

nav{
  display: flex;
  justify-content: space-between;
}

#logo{
  width: 130px;
  margin-top: 10px;
  margin-left: 10px;
 
}
#menu-button{
  
  width: 35px;
  margin-right: 10px;
  margin-top: 10px;

}
#menu-overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.7;
}
#menu-logo{
  
  margin-top: 30px;
  margin-bottom: 10px;
}
#menu-items{
  position: fixed;
  top: 0;
  right: 0%;
  background-color: var(--color-background);
  width: 40%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
#menu-items.active{
  display: flex;
}
ul{
  list-style: none;
  text-align:center
}
ul li{
  margin: 20px 0;
}
ul li a{
  color: var(--color-text-dark);
}

@media (min-width:700px){

#menu-overlay{
position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.7;
  }
  #menu-items{
    width: 25%;
  height: 100vh;
  }
}

</style>
