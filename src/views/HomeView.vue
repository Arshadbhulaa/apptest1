<template>
  <div class="home">
    <h1> ARSHAD BHULA </h1>
    <h2>IT Engineer | Web Developer </h2>
  </div>
  <br>
  <div class="borderr">
  <div class="personal">
    <h3>Personal-Profile</h3>
  </div>
  <div class="para">
    My name is Arshad Bhula. I am a recent I.T Engineer graduate, and I have a passion for many fields in IT such as Web Development , Software Development, Cloud Computing and much more. I enjoy learning programming languages and building complex programs to solve problems.
  </div>
  </div>
  <div class="imgg">
  <img alt="logo" src="../assets/logo.png">
  </div>
  <div class="skills">
    <h3>Skills</h3>
    <ul>
      <li>Web Development (HTML,CSS & JavaScript)</li>
      <li>JavaScript Framework : Vue.js</li>
      <li>Front End & Back End Coding</li>
      <li>Data Analysis (SQL)</li>
      <li>Programming (C#/Python)</li>
      <li>Cloud Computing-Azure</li>
      <li>Project Management</li>
      <li>Graphics & Media</li>
      <li>Technical Support</li>
    </ul>
  </div>

  <div class="projects">
    <h3>Projects</h3>
    <h4>I have only created a few Projects along my journey and i would like to show you guys.</h4>
    <h5>Click the Button below to view</h5>
    <button class="projectsBtn">
    <router-link :to="{ name : 'ProjectView'}">Projects</router-link> 
    </button>
  </div>

</template>

<script>
 
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return{}
  }
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
}
</script>
<style>
.home{
  text-align: left;
  margin: 20px;
}

.borderr{
  border: 2px solid #2c3e50;
  padding: 10px;
  border-radius: 10px;
  background-color: aliceblue;
  font-size: 20px;
  }

.para{
  font-weight:545;
}

.skills{
  text-align: left;
  margin: 20px;
   border-style: double;
   border-color: #42b983;
   max-width: 500px;
  border-width: 5px;
  padding: 30px;
  border-radius: 10px;
  background-color: aliceblue;
  font-size: 20px;
  align-content: center;
}
.imgg{
  text-align: center;
}
.personal{
  text-align: center;
}

.projects{
  margin: 20px;
  border-style: groove;
  border-radius: 20px;
  border-width: 5px;
  max-width: 400px;
  border-color: aqua;
  padding: 30px;
  background-color: aliceblue;
  text-align: center;
  align-content: center;
  

}

.projectsBtn{
  padding: 10px;
  border-width: 5px;
  border-color: aquamarine;
  background-color: #b3ffb3;
  border-radius: 15px;
  font-size: 30px;
  font-weight: 100;
  cursor: pointer;

}
.projectsBtn:hover{
  background: #ddd;
}
.projects h3{
  font-size: 40px;
}

.skills h3{
  font-size: 40px;
}


</style>

