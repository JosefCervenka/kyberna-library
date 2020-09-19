<template>
  <section >
      <h2><a v-bind:href="DriveLink">{{SubjectName}}</a></h2>
      <h4>{{Author}}</h4>
      {{ID__}}
      <button v-on:click="remove">Remove</button>
  </section>
</template>

<script>
export default {
  props: {
    SubjectName: {type: String },
    DriveLink: {type: String },
    Author: {type: String },
    ID: {type: String},
  },
  data(){
    return{
      ID__: this.ID,
    }
  },
  methods:{
    remove(){
        var arrSub = JSON.parse(localStorage.getItem("SubjectName"));
        var arrDrL = JSON.parse(localStorage.getItem("DriveLink"));
        var arrAut = JSON.parse(localStorage.getItem("Author"));
      
        if (this.ID__ >= 0)
        g
        console.log(a);
        //localStorage.setItem("SubjectName", JSON.stringify(arrSub.splice(this.ID__, 0)));
        //localStorage.setItem("DriveLink", JSON.stringify(arrDrL.splice(this.ID__, 0)));
        //localStorage.setItem("Author", JSON.stringify(arrAut.splice(this.ID__, 0))); 


        //CO TO KURVA
        location.href='/';
    }
  }
}
</script>

<style lang="scss" scoped>
    section{
      button{
          margin-top: 30px;
                    color:white;
                    background-color: #e9671e;
                    padding: 5px;
                    
                    border-radius: 5px;

                    border-color: white;
                    opacity: none;
                    text-decoration:none;

                    outline: inherit;
                    border: white 2px solid;
                    &:hover{
                        cursor: pointer;
                    }
      }

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        width: 240px;
        height: 240px;

        background-color: #e9671e;
        border-radius: 20px;
        margin: 40px;
        border: orangered 2px solid;
        h4{
            padding-top: 40px;
            color: lightgrey;
        }
        h2 a{
            color: white;
        }
    }
</style>