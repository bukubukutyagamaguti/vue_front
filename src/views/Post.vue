<script setup>
import { ref, watch, watchEffect } from "vue";
import axios from "axios";
const message = ref('')
const post = async () => {
    await axios.create({headers:{
        'Authorization': `Bearer ${localStorage.token}`,
    }})
    .post('api/post',{message: message.value})
    .then((response) => {console.log(response.data);})
    .catch((error) => {console.log(error);})
}
</script>
<template>
  <main class="form-login">
    <form @submit.prevent="post">
      <h1 class="h3 mb-3 fw-normal">投稿</h1>
      <input
        v-model="message"
        type="text"
        class="form-control"
        placeholder="投稿内容を記入してください。"
        required>
 
      <button
        class="w-100 btn btn-lg btn-primary"
        type="submit">投稿する</button>
    </form>
  </main>
</template>
   
<style>
.form-login {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
 
.form-login .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-login .form-control:focus {
  z-index: 2;
}
.form-login input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-login input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
 
</style>