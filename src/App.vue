<script>
import HelloWorld from './components/HelloWorld.vue'
import UIButton from './components/UIButton.vue'

import { jsPDF } from "jspdf";

export default {
  name: 'App',
  components: {
    HelloWorld,
    UIButton
  },
  methods: {
    download () {
      let pdfName = 'test'; 
      var doc = new jsPDF();
      doc.text('Urban Tools', 10, 10);
      doc.save(pdfName + '.pdf');
    }
  }
}
</script>

<template>
  <HelloWorld msg="Welcome"/>
  <UIButton :label="'Generate PDF'" @click="download" />
</template>

<style>
  body {
    background-color: lemonchiffon;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 100px;
  }
</style>
