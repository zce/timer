<template>
  <section class="content">
    <router-view></router-view>
  </section>
</template>

<script>
  export default {
    name: 'content'
  }
</script>

<style lang="less">
  .content {
    flex: 1;
    color: #373a3c;
    margin: 0 .5rem;
    padding: 1rem;
    overflow-y: auto;
    background-color: #fff;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
  }
</style>
