<script>
import HelloWorld from './components/HelloWorld.vue'
import UIButton from './components/UIButton.vue'

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import download from 'downloadjs';

export default {
  name: 'App',
  components: {
    HelloWorld,
    UIButton
  },
	methods: {
		async generatePdf() {
      // Create a new PDFDocument
      const doc = await PDFDocument.create()

      // Embed the Times Roman font
      const timesRomanFont = await doc.embedFont(StandardFonts.TimesRoman)

      // Add a blank page to the document
      const page = doc.addPage()

      // Get the width and height of the page
      const { height } = page.getSize()

      // Draw a string of text toward the top of the page
      const fontSize = 30
      page.drawText('Urban Tools', {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
      })

      const pdfBytes = await doc.save()

      // Trigger the browser to download the PDF document
      download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
    }
	}
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <UIButton :label="'Generate PDF'" @click="generatePdf" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
