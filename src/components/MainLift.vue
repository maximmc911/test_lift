    <script setup lang='ts'>
import Button from './button/Button.vue';
import Lift from './lift/Lift.vue';

        
    </script>
<template>
      <div class="container">
<div class="liftShaft">
    <div class="lift">

        <Lift/>
    </div>
</div>
<div class=""style="display: flex; flex-direction: column;">
    <div class="" v-for="(index) in 5" >
        
        <div class="hall" :key="index" >
            <Button/>
        </div>
    </div>
</div>

      </div>  
</template>
    
    
<style scoped>
.container{
    display: flex;
    justify-content: center;
    height: 100vh;
}
    .liftShaft{
        position: relative;
        width: 150px;
        height: 100%;
        border: 3px solid gray;
    }
    .hall{

        width: 150px;
        height: 20vh;
        border-bottom: 1px solid grey ;
        border-top: 1px solid grey ;
    }
    .lift{
        position: absolute;
        bottom: 0%;
    }
</style>