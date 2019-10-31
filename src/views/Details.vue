<template>
  <main>
    <h1>查看{{lid}}号商品得详细信息</h1>  
    <router-link to="/">返回首页</router-link>
  </main>
</template>
<script>
export default {
  props:["lid"]
}
</script>
<style  scoped>

</style>