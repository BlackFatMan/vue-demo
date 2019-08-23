<template>
  <div>
    <!--{{$route.params.id}}-->
    <p>{{id}}</p>

  </div>
</template>

<script>
  export default {
    props: ['id'],
    name: "UserInfo",
    beforeRouteEnter: (to, form, next) => {
      console.info('即将进入个人信息页');
      //在进入页面之前还不存在还不存在this，所有只能在next中调用
      next(vm=>{
        vm.getData();
      });
    },
    methods:{
      getData:function () {
        //模拟请求后台数据
        this.axios({
          method:"get",
          url:"/1"
        }),then(function (data) {
          console.info(data);
        }),each(function (error) {
          console.info(error);
        })
      }
    }
  }
</script>

<style scoped>

</style>
