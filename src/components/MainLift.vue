    <script setup>
    import Button from './button/Button.vue';
    import Lift from './lift/Lift.vue';
    import { floor } from './data/data'
    import { handleClickBtn } from './functions/functions'
import { onUpdated } from 'vue';

const CheckFloor = (e) =>{
if (floor[1].pointer !== 'waiting') {
if (!floor[1].queue.includes(e)) {
    
    floor[1].queue.push(e);
    
    console.log(floor[1].queue);
    
}

     
  

        
        return
    }

    handleClickBtn(e)
}
console.log(JSON.parse(localStorage.getItem("user-info"))[1].queue[0]);



    onUpdated (  () => {

        if (floor[1].pointer == 'waiting' && floor[1].queue.length !==0) {
            handleClickBtn(floor[1].queue[0])
            floor[1].queue.shift()
        }

})

onUpdated(() => {
  console.log('Я обновился')
  localStorage.removeItem("user-info");
localStorage.setItem("user-info", JSON.stringify(floor));

})

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

                <div class="hall" :key="index" @click="CheckFloor(index)" >
                    <div style="display: flex; align-items: center;">
                        <h3 style="margin: 5px;">{{ index }}</h3>
                        <div v-if="floor[1].queue.includes(index)">
                            <div class="activeBtn" style="background:yellow;"></div>
                        </div>
                        <div v-else>

                            <div class="activeBtn" v-if="floor[1].activeBtn == index"></div>
                            <div class="activeBtn" v-else style="background:rgb(156, 157, 240);"></div>
                        </div>
                    </div>
                     

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
.activeBtn{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid black;
    background: rgb(129, 236, 136);
}
</style>