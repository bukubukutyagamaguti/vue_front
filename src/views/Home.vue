<script setup>
import { watchEffect, ref, } from "vue";
import axios from "axios";
let posts = ref([])

const getPosts = async () => {
    await axios.get('api/home', {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then((response) => {
      posts.value = response.data
    })
    .catch((error) => {
        console.log(error);
    })
  }
watchEffect(()=>{
  console.log(posts.value);
})
</script>

<template>
  <button @click="getPosts">タイムラインを更新</button>
  <div v-for="post in posts">
    <div class="card">
      <div class="card-body">
        <p>{{post.message}}</p>
        <p>{{post.User.name}}</p>
        <p>{{post.created_at}}</p>
        <a href="#" class="btn btn-primary">詳細</a>
      </div>
    </div>
  </div>
</template>
