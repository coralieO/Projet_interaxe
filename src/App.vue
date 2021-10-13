<template>
<div>
  <div id="nav">
    <div>
    <router-link to="/"><img src="./assets/UNIVERSEL@2x.png" id="logo" alt=""></router-link> 
    </div>
    <div id="menu">
        <ul>
          <li><router-link to="/EdSheeran">Ed sheeran </router-link></li>
          <li><router-link to="/Tayc">Tayc </router-link></li>
           <li><router-link to="/LilNasX">Lil Nas X</router-link></li>
          <li><router-link to="/LadyGaga">Lady Gaga </router-link></li>
          <li><router-link to="/Maroon5">Maroon 5</router-link></li>
          <li id="hidden"><router-link to="/NotesDeMusique">Notes de musique</router-link></li>
        </ul>
    </div>
    <!-- <footer>
      
    </footer> -->
  </div>
</div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d7e3fb;
  
}
body{
   background-color: #e8c025; 
   margin: 0;
}
#nav {
  padding: 30px;
  display: flex;
  height: 20vh;
 
}

#nav a {
  font-weight: bold;
  color: aquamarine;
}
#menu{
  width: 100%;
}
#menu ul{
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 50%;
  float: right;
}
#menu ul a {
  text-decoration: none;
}
#hidden{
  opacity: 0;
}
#hidden a:hover{
  opacity: 1;
  color: #053b75;
}
#logo{
  width: 30%;
}

</style>
