<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto max-w-7xl p-4 flex justify-between ">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Друзья</NuxtLink></li>
        <li><NuxtLink to="events">События</NuxtLink></li>
        <li><NuxtLink to="/event-create">Создать событие</NuxtLink></li>
        <!--
          <li><NuxtLink to="/products/cart" class="">My cart</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        -->
      </ul>
    </nav>
  </header>

  <!-- output page content -->
  <div class="container mx-auto p-4">
    <slot />
  </div>

  <MainMap />
  <AuthForm />
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>