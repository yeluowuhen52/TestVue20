<template>
    <div>
        <h3>Home</h3>
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img :src="immgurl0" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                  <img :src="immgurl1" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                  <img :src="immgurl2" alt="">
            </mt-swipe-item>
        </mt-swipe>

           <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/home/newsList">
		                    <img src="../../imgs/menu1.png" alt="">
		                    <div class="mui-media-body">新闻</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                     <img src="../../imgs/menu2.png" alt="">
		                    <div class="mui-media-body">图片</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                     <img src="../../imgs/menu3.png" alt="">
		                    <div class="mui-media-body">商品</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                     <img src="../../imgs/menu4.png" alt="">
		                    <div class="mui-media-body">留言</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                     <img src="../../imgs/menu5.png" alt="">
		                    <div class="mui-media-body">视频</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                     <img src="../../imgs/menu6.png" alt="">
		                    <div class="mui-media-body">联系</div></a></li>
		            
		        </ul> 
                
    </div>
</template>

<script>
export default {
    data(){
        return{
            immgurl0 : 'http://img4.duitang.com/uploads/blog/201501/05/20150105161151_XBcKi.jpeg',
            immgurl1 : 'http://i2.hdslb.com/bfs/archive/c18d801b31df3feb68f1c5822fa2415637f16f0b.jpg',
            immgurl2 : 'http://img5q.duitang.com/uploads/item/201505/01/20150501110902_3d8BM.png',
        }
    }
}
</script>

<style lang="scss" scopef>

.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
         &:nth-child(2){
            background-color: blue;
        }
         &:nth-child(3){
            background-color: gray;
        }
        img{
            width: 100%;
            height: 100%
        }
    }
 
}

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: null;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-medis-body{
        font-size: 13px;
    }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}

</style>
