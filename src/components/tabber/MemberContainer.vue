<template>
    <div>
        <h3>Member</h3>
        <van-list
                v-model="loading"
                :finished="finished"
                @load="onLoad"
        >
            <van-cell v-for="item in list" :key="item">
                <van-row type="flex">
                    <van-col span="6">
                        <van-icon name="success"/>
                    </van-col>
                    <van-col type="flex" span="6">
                        <van-row type="flex" justify="space-around">
                            <van-button type="default" :text=item.toString()>
                            </van-button>
                        </van-row>

                        <van-row type="flex" justify="space-around">
                            <van-button type="default" :text=item.toString()>
                            </van-button>
                        </van-row>
                    </van-col>
                </van-row>

            </van-cell>
        </van-list>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                loading: false,
                finished: false
            };
        },

        methods: {
            onLoad() {
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.loading = false;

                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            }, test(item) {
                Toast('我是提示文案，建议不超过十五字~');
            }
        }
    }
</script>

<style>

</style>
