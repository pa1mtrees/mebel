<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
  formattedPrice() {
    return new Intl.NumberFormat('kz-KZ', {
      style: 'currency',
      currency: 'KZT',
    }).format(this.product.price);
  },
},
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    },
  },
};
</script>

<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <div class="product-details">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-meta">
        <span class="product-price">{{ formattedPrice }}</span>
      </div>
      <button @click="addToCart" class="add-to-cart">Добавить в корзину</button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.product-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
}

.product-details {
  text-align: center;
}

.product-name {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.product-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 16px;
}

.product-meta {
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.product-price {
  font-weight: bold;
  color: #000;
}

.product-rating {
  display: block;
  color: #f39c12;
  margin-top: 4px;
}

.add-to-cart {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;
}

.add-to-cart:hover {
  background-color: #e55a5a;
}
</style>
