<template>
    <section class="adder">
        <div class="adder_">
            <div class="form">
                <label for="fname"><p>Subject name:</p></label>
                <input type="text" v-model="SubjectName"> <!-- jmeno predmetu -->
                
                <label for="fname"><p>Drive link:</p></label>
                <input type="text" v-model="DriveLink"> <!-- link na doc -->

                <label for="fname"><p>Main author name:</p></label>
                <input type="text" v-model="Author"> <!-- jmeno hl spravce -->
                <br>
                <button v-on:click="onSubmit">Add</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
       onSubmit() {
           this.$emit("data", [this.SubjectName, this.DriveLink, this.Author]);

           this.SubjectName = "";
           this.DriveLink = "";
           this.Author = "";
       }
   },
   data(){
    return {
      SubjectName: '',
      DriveLink: '',
      Author: '',
    }
  }
}
</script>

<style scoped lang="scss">
    .adder{
        width: 100%;
        height: 100vh;
        background-color: rgb(100%, 100%, 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        .adder_{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #e9671e;
            color: white;
            padding: 30px;
            border: solid 2px orangered;
            border-radius: 20px;
            .form{
                input{
                     outline: inherit;
                     text-align: center;
                     width: 200px;
                     font-size: 20px;
                     margin-bottom: 20px;
                     border: solid 2px orangered;
                     border-radius: 5px;
                     font-family: 'Poppins', sans-serif;
                }

                button, input[type="submit"], input[type="reset"] {
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
            }
        }
    }
</style>