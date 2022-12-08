<template>
  <div class="projetcs">
  <h1>Projects</h1>
  <img alt="projects" src="../assets/projects.jpg">
  </div>

  <!-- <div class="Pnames" v-for="project in projects" :key="project.id">
      <router-link :to="{ name: 'ProjectDetails', params: { id: project.id}}">
        <h2>{{ project.pName }}</h2>
      
      </router-link>
  </div> -->

 <div class="Pnames">
  <router-link :to="{ name: 'GamingWebsite'}">    
     <h2>Gaming Website</h2>
  </router-link>
  </div>

  <div class="Pnames">
  <router-link :to="{ name: 'CarRental'}">    
     <h2>Car-Rental-Application</h2>
  </router-link>
  </div>

  <div class="Pnames">
  <router-link :to="{ name: 'Personal'}">    
     <h2>Personal-Portifilo</h2>
  </router-link>
  </div>

</template>

<script>
export default {
  data(){
    return{
      projects: [
                {pName: 'Gaming Website' , id: 1 , details: 'lorem ipsum'},
                {pName: 'Car Rental Program' , id: 2 , details: 'lorem ipsum'},
                {pName: 'Personal Portifilo' , id: 3 , details: 'lorem ipsum'},
      
      ]
    }
  }
}
</script>

<style>

.Pnames h2{
  background: #f4f4f4;
  padding: 30px;
  border-radius: 10px;
  margin: 10px auto;
  cursor: pointer;
  max-width: 400px;
  color: #444;
  text-align: center;
  border: 2px solid #2c3e50;
}

.Pnames h2:hover{
  background: #ddd;
}
.Pnames a{
  text-decoration: none;
}

</style>