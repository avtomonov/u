<template>
  <div id="events" class="container mx-auto">

    <div class="flex items-center px-5 py-2">
      <span class="w-1/2">
          <span class="text-xs uppercase text-gray-600 font-bold">Contact Info</span>
      </span>
      <span class="w-1/4">
        <span class="text-xs uppercase text-gray-600 font-bold">Gender</span>
      </span>
      <span class="w-1/4">
        <span class="text-xs uppercase text-gray-600 font-bold">City</span>
      </span>
      <span class="w-1/4">
        <span class="text-xs uppercase text-gray-600 font-bold">Phone</span>
      </span>
      <span class="w-1/4">
        <span class="text-xs uppercase text-gray-600 font-bold">Created At</span>
      </span>
    </div>

    <div v-for="(contact, key) in contacts" :key="key" class="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg">
      <div class="w-1/2">
        <div class="flex items-center">
          <img :src="contact.picture.thumbnail" class="rounded-full">
          <div class="ml-4">
            <span class="capitalize block text-gray-800">{{ contact.name.first }}</span>
            <span class="text-sm block text-gray-600">{{ contact.email }}</span>
          </div>
        </div>
      </div>
      <div class="w-1/4">
        <span class="capitalize text-gray-600 text-sm">{{ contact.gender }}</span>
      </div>
      <div class="w-1/4">
        <span class="capitalize text-gray-600 text-sm">{{ contact.location.city }}</span>
      </div>
      <div class="w-1/4">
        <span class="text-gray-600 text-sm">{{ contact.phone }}</span>
      </div>
      <div class="w-1/4">
        <span class="text-gray-600 text-sm">{{ contact.registered.date.split('T')[0] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default ({
    data() {
        return {
            contacts: [],
        };
    },
    created: function () {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
            this.contacts = res.data.results.map(each => {
                each.selected = false
                return each
            })
        })
    }
})
</script>

<style>
  #events {
    position: absolute;
    z-index: 2;
    top: 80px;
    left: 20px;
    width: 50vw;
    height: calc(100vh - 100px);
    background: #fff;
    overflow-y: scroll;
  }
</style>