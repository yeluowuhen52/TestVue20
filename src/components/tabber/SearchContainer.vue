<template>
    <div class="page-loadmore">
        <h1 class="page-title">Pull up</h1>
        <!-- <p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>
        <p class="page-loadmore-desc">translate : {{ translate }}</p> -->
        <!-- <div class="loading-background" :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }">
          translateScale : {{ moveTranslate }}
        </div> -->

        <img src="../../pic/test.png" class="round_icon" alt="">

        <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="100%"
                   height="264"
                   poster="http://vjs.zencdn.net/v/oceans.png">
                <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
            </video>

        </div>
    </div>
</template>

<style>

    .round_icon {
        width: 100px;
        height: 100px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
</style>

<script type="text/babel">
    export default {
        data() {
            return {
                wrapperHeight: 400
            };
        },

        methods: {},
        created() {
        },

        mounted() {
        }
    };
</script>