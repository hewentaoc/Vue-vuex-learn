<template>
    <div>
        <button @click="handleClick">登录</button>
    </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
        //点击事件 把验证登陆的值存在cookiee中
            var odate = new Date();
            odate.setDate(odate.getDate() + 2);
            document.cookie = "login=true;expires="+odate+"";
            alert('登录成功!');
        }
    }
}
</script>