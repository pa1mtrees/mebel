<template>
    <div class="container mx-auto">
        <p class="mb-4 mt-1 text-3xl font-bold text-gray-900">Диваны</p>
      <div v-if="products.length" class="product-list">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
      <div v-else>
        <p class="mb-4 mt-1 text-red text-xl font-semibold text-gray-900">Товары не добавлены.</p>
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from '../ProductCard.vue';
  
  export default {
    name: 'Divany',
    components: {
      ProductCard,
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
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  </style>