<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name : 'ProjectView'}">Projects</router-link> |
    <router-link :to="{ name : 'BlogView' }"> Blog</router-link> |
    <router-link :to="{ name : 'ContactView' }"> Contact Me</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
