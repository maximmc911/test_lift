    <script setup>
    import { ref, reactive } from 'vue';
    import Button from './button/Button.vue';
    import Lift from './lift/Lift.vue';

    const floor = reactive([
        {
            position: `absolute`,
            bottom: `0%`,
            transition: `1s`,
            transform: `translate(0, 0)`,
        },
        {
            floor: 1,
        }
    ]);
    const handleClickBtn = (el) => {
        let transformY =0;
        transformY = -el*20 + 20;
        floor[0].transform = `translate(0,` + transformY + `vh)`;
        if (floor[1].floor <= el) {
            floor[0].transition = (el - floor[1].floor) + `s`;
            floor[1].floor = el;


        } else {
            floor[0].transition = (floor[1].floor - el) + `s`;
            floor[1].floor = el;

        }
     
    }
</script>
<template>
    <div class="container">

        <div class="liftShaft">
            <div  :style=floor[0]>

                <Lift />
            </div>
        </div>
        <div style="display: flex; flex-direction: column-reverse;">
            <div class="" v-for="(index) in 5">

                <div class="hall" :key="index" @click="handleClickBtn(index)">
                    <Button />
                </div>
            </div>
        </div>

    </div>
</template>


<style scoped>
.container {
    display: flex;
    justify-content: center;
    height: 100vh;
}

.liftShaft {
    position: relative;
    width: 150px;
    height: 100%;
    border: 3px solid gray;
}

.hall {

    width: 150px;
    height: 20vh;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
}


</style>