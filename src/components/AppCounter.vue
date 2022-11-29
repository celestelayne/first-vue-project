<template>
  <div class="hello">
    <h1 class="counter-result">Count: {{ counter }}</h1>
    <div class="button-group">
      <button @click="decrement" class="flat counter-minus">-</button>
      <button @click="increment" class="flat counter-plus">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCounter',
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement(){
      if (this.counter == 1) return;
      this.counter--;
    }
  }
}
</script>

<style>
  .counter-result {
    font-size: 5em;
  }

  button {
    width: 15%;
    height: 60px;
  }

  .flat {
    margin: 0 10px;
    border-radius: 30px;
    font-size: 25px;
    border: 0;
    background: rgb(208, 65, 57);
    color: #fff;
  }
</style>