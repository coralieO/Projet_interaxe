<template>
<div>
  <div id="nav">
    <div class="logo">
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
@font-face {
  font-family: NewsGotTDem;
  src: local("NewsGotTDem"),
       url('./assets/police/NewsGotTDem.ttf');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #e8c025; 
  color: #ffff;
}
body{
   margin: 0;
}
#nav {
  margin: 0px 60px 20px 60px;
  display: flex;
  height: 20vh;
 
}
.logo{
  text-align: left;
}
#nav a {
  color: #ffff;
  font-family: NewsGotTDem;
  font-size: 20px;
}
#nav a:hover {
  color: black;
}
#menu{
  width: 100%;
  z-index: 2;
  margin-right: 30px;
}
#menu ul{
  display: flex;
  justify-content: space-around;
  list-style: none;
  float: right;
  padding: 0;
}
#menu ul a {
  text-decoration: none;
}
#menu ul li{
  padding-right: 30px;
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
