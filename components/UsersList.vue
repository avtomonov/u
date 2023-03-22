<template>
  <div id="users" class="container mx-auto">
    <h1 class="mb-8">Друзья</h1>

    <div v-for="(user, key) in users" :key="key" class="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg">
      <div class="w-1/2">
        <div class="flex items-center">
          <div class="ml-4">
            <span class="capitalize block text-gray-800">{{ user.email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default ({
    data() {
        return {
            users: [],
        };
    },
    created: function () {
        axios.post('https://picayune-brawny-nut.glitch.me/users')
            .then(res => {
            this.users = res.data.results.map(each => {
                each.selected = false
                return each
            })
        })
    }
})


</script>

<style>
  #users {
    position: absolute;
    z-index: 2;
    top: 80px;
    left: 20px;
    width: 50vw;
    background: #fff;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    padding: 40px;
  }
</style>