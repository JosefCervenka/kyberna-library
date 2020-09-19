<template>
  <div class="about">
    <NavBar/>
    <Adder @data = "getData($event)"/>
  </div>
</template>

<script>
import Adder from "@/components/Add.vue"
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Adder
  },
  methods: {
    getData: function(data){
      console.log(data[0]);
      console.log(data[1]);
      console.log(data[2]);

      this.SubjectName = data[0];
      this.DriveLink = data[1];
      this.Author = data[2];

      if(localStorage.getItem("SubjectName") == null){
        var arrSub = [this.SubjectName];
        var arrDrL = [this.DriveLink];
        var arrAut = [this.Author];

        localStorage.setItem("SubjectName", JSON.stringify(arrSub));
        localStorage.setItem("DriveLink", JSON.stringify(arrDrL));
        localStorage.setItem("Author", JSON.stringify(arrAut));

      }else{
        var arrSub = JSON.parse(localStorage.getItem("SubjectName"));
        var arrDrL = JSON.parse(localStorage.getItem("DriveLink"));
        var arrAut = JSON.parse(localStorage.getItem("Author"));

        arrSub.push(this.SubjectName);
        arrDrL.push(this.DriveLink);
        arrAut.push(this.Author);

        localStorage.setItem("SubjectName", JSON.stringify(arrSub));
        localStorage.setItem("DriveLink", JSON.stringify(arrDrL));
        localStorage.setItem("Author", JSON.stringify(arrAut));
      }
    }
  },
  data(){
    return{
      SubjectName: "",
      DriveLink: "",
      Author: ""
    }
  }
}
</script>
