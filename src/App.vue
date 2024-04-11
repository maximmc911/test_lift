<script setup>
import MainLift from './components/MainLift.vue';
import Button from './components/button/Button.vue';
import Lift from './components/lift/Lift.vue';
import { floor } from './components/data/data';
import { handleClickBtn } from './components/functions/functions';

if (!(localStorage.key(0) == "user-info")) {
  localStorage.setItem("user-info", JSON.stringify(floor));
}else{
floor.length = 0;
floor.push(...JSON.parse(localStorage.getItem('user-info')))

handleClickBtn(JSON.parse(localStorage.getItem('user-info'))[1].queue[0])
}

</script>
<template>
  <div>
   
    <MainLift/>
  </div>
</template>

<style>

</style>
