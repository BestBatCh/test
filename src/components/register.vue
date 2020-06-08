<template>
    <div>
        <br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <h1>注册页面{{ $store.state.count}}</h1>
        <button  @click="add">-</button>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
     methods:{
       add(){
           // 不能这样操作数据
           this.$store.state.count--
       }
   }
}
</script>