<template>
  <div>
    <h1>HelloWorldStore</h1>
    <h2>String:{{this.$store.state.helloWorld.string1 }}</h2>
    <h2>Counter:{{this.$store.state.helloWorld.counter }}</h2>
    <input type="text" v-model="leaveType" @change="onChange()" class="form-control" />
    <button @click="add_one">Add 1</button>
  </div>

  
</template>

<script>
 import {mapState} from "vuex"
 import Vue from  'vue'
 import Vuex from 'vuex'
 Vue.use(Vuex)

export default {
    
  name: "hwlloworldStore.vue",
  data() {
    return {
            leaveType: this.$store.state.helloWorld.string1,
        }
  },

  methods: {
    onChange() {
            console.log('The new value is: ', this.leaveType)
            this.$store.commit("helloWorld/SET_VAR_1", this.leaveType)
            // this.$store.state.helloWorld.string1 = this.leaveType            
        },
    add_one() {
        // this.$store.state.helloWorld.string1 = this.name
      // name:document.getElementById('ServiceCase').value
    //   console.log("iput text:", name);
    
      this.$store.commit("helloWorld/increment");
    //   window.location.href="/"
    }
  }
};
</script>

<style scoped>
</style>