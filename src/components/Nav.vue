<script setup>
const token = localStorage.token
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <ul class="navbar-nav my-2 my-lg-0">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/user/login" class="nav-link">Loout</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user/home" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user/post" class="nav-link">post</router-link>
        </li>
      </ul>
  </nav>
</template>