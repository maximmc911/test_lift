    <script setup>
    import Button from './button/Button.vue';
    import Lift from './lift/Lift.vue';
    import { floor } from './data/data'
    import { handleClickBtn } from './functions/functions'
</script>
<template>
    <div class="container">

        <div class="liftShaft">
            <div :style=floor[0]>

                <Lift :pointer="floor[1].pointer" :floor="floor[1].floor" />
            </div>
        </div>
        <div style="display: flex; flex-direction: column-reverse;">
            <div class="" v-for="(index) in 5">

                <div class="hall" :key="index" @click="handleClickBtn(index)" >
                   <h3 style="margin: 5px;">{{ index }}</h3>
                    <Button/>
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
display: flex;
flex-direction: column;
gap: 10px;
    width: 150px;
    height: 20vh;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
}
</style>