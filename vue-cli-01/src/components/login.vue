<template>
    <div>
        <h1 @click="show">登录页面</h1>

    </div>
</template>
<style lang="scss" scoped>

</style>
<script>

export default {
    data:function(){
        return {}
    },
    methods:{
        show(){

           console.log(this.$http)
            //  原生的ajax方法需要复习
           
           // vue-resource  vue 1.0版本

           // axios  
           this.$http.get('../a.json').then((response1) => {
               console.log(response1.data.name)
           })
        }
    }
}
</script>