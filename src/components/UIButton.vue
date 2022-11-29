<template>
  <button class='flat'>{{ label }}</button>
</template>

<script>
export default {
name: 'UIButton',
props: {
  label: {
    type: String,
    default: 'Button Text'
  },
},
}
</script>

<style scoped>
button {
  width: 20%;
  height: 50px;
}
.flat{
  margin: 0 10px;
  border-radius: 25px;
  font-size: 25px;
  border: 0;
  background: rgb(208, 65, 57);
  color: #fff;
}
</style>