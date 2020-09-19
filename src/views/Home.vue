<template>
  <div class="home">
    <NavBar/>
    <div class="links">
    <Link v-for="item in id" :key="item" :SubjectName="SubjectNames[item]" :DriveLink="DriveLinks[item]" :Author="Authors[item]" :ID="item+''" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Link from '@/components/Link.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Link,
  },
  beforeUpdate(){

  },
  data(){
    var SubjectNames = JSON.parse(localStorage.getItem("SubjectName"));
    var DriveLinks = JSON.parse(localStorage.getItem("DriveLink"));
    var Authors = JSON.parse(localStorage.getItem("Author"));

    var arr = [];
    for(let i = 0; i < SubjectNames.length; i++){
      arr.push(i);
    }

    return{
      SubjectNames: SubjectNames,
      DriveLinks: DriveLinks,
      Authors: Authors,
      id: arr,
    }
  }
}
</script>

<style lang="scss" scoped>
  .links{
    padding-top: 70Px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>