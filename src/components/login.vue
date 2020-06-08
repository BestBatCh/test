<template>
    <div>
        <h1>登录页面{{ $store.getters.getCount}}</h1>
        <button  @click="add">+</button>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>

export default {
   methods:{
       add(){
           //  vuex 中不能这样修改状态  让数据落地
           this.$store.state.count++
           // 通过调用vuex中提供得统一方法来修改数据

           this.$store.dispatch('aa2',{name:"login",time:'2020-5-26',comm:"让数据自增1"})
       }
   }
}
</script>