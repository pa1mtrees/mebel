<template>
<div class="relative overflow-visible bg-custom-gray">
    <div class="relative overflow-visible bg-white">
    <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Хотите обновить мебель?</h1>
          <p class="mt-4 text-xl text-gray-500">Значит вы по адресу. Лучшие стулья, столы, диваны и прочее для вашего интерьера вы сможете найти только у нас. Наша компания гарантирует качество мебели!</p>
        </div>
        <div>
          <div class="mt-10">
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img src="http://surl.li/wikrsv" alt="" class="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="http://surl.li/sictpq" alt="" class="h-full w-full object-cover object-center" />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="http://surl.li/pidevq" alt="" class="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="http://surl.li/gkpywj" alt="" class="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Каталог</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CategoryCard />
</div>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue';
  import CategoryCard from '../components/CategoryCard.vue';

  export default {
    name: 'HomePage',
    components: {
      ProductCard, CategoryCard
    },
    data() {
      return {
        products: [],
      };
    },
    mounted() {
      this.products = JSON.parse(localStorage.getItem('products')) || [];
    },
  };
  </script>
  
  <style scoped>

  </style>