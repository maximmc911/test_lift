    <script setup>

</script>
<template>
    <div>
        <div class="button">
            <div class="btn">
                <div class="dot">

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 45px;
  
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgb(188, 182, 229);
    border: 2px solid black;
    cursor: pointer;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    background: greenyellow;
    border-radius: 50%;
    border: 2px solid black;
}

.dot {
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 50%;
}
</style>