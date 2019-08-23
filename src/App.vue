<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  //初始化数据的钩子
  mounted(){
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    saveState(){
      sessionStorage.setItem('userState', JSON.stringify(this.$store.state.user));
    }
  }

}
</script>
