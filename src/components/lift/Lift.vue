    
    <script setup>

const ss = `waiting`;


    </script>
<template>
        <div >
<div class="container">
<div class="tabl">

    <v-icon name="ai-acclaim"  animation="flash" sppeed="slow" color="yellow" scale="1.5" v-if="ss == 'top'"/>
    <v-icon name="ai-acclaim"  animation="flash" sppeed="slow" flip="vertical" color="red" scale="1.5" v-else-if="ss == 'bottom'"/>
    <v-icon name="md-stopcircle-sharp"  animation="flash" sppeed="slow" flip="vertical" color="green" scale="1.2" v-else-if="ss == 'pause'"/>
    <v-icon name="fa-arrows-alt-v"  animation="flash" sppeed="slow" flip="horisontal" color="blue" scale="1.2" v-else-if="ss == 'waiting'"/>
    <h2>1</h2>
</div>
</div>
        </div>
</template>
    
<style scoped>
    .container{
        display: flex;
        justify-content: center; 
        margin: 10px;
        margin-left: 20px;
        width: 100px;
        height: 120px;
        background-color: rgb(242, 242, 249);
        border-radius: 5px;
        border: 2px solid black;
    }
    .tabl{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin-top: 5px;
        width: 60px;
        height: 30px;
        padding: 10px;
        border-radius: 5px;
        border: 2px solid black;
        background-color: rgb(199, 199, 228);
    }
</style>