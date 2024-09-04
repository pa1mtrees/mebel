<template>
    <div class="admin-panel">
      <h2>Добавить новый товар</h2>
      <form @submit.prevent="addProduct">
        <!-- Поля формы как и раньше -->
        <div class="form-group">
          <label for="name">Название товара:</label>
          <input type="text" v-model="newProduct.name" id="name" required />
        </div>
  
        <div class="form-group">
          <label for="image">Фото товара:</label>
          <input type="file" @change="handleImageUpload" id="image" accept="image/*" required />
          <div v-if="newProduct.image">
            <img :src="newProduct.image" alt="Превью изображения" style="max-width: 200px; margin-top: 10px;" />
          </div>
        </div>
  
        <div class="form-group">
          <label for="price">Цена товара (₸):</label>
          <input type="number" v-model="newProduct.price" id="price" required />
        </div>
  
        <div class="form-group">
          <label for="description">Описание товара:</label>
          <textarea v-model="newProduct.description" id="description" required></textarea>
        </div>
  
        <button type="submit">Добавить товар</button>
      </form>
  
      <!-- Список товаров с возможностью удаления -->
      <div v-if="products.length" class="product-list">
        <h2>Список товаров</h2>
        <ul>
          <li v-for="(product, index) in products" :key="index">
            <img :src="product.image" :alt="product.name" style="max-width: 100px;" />
            <div>
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <span>{{ formattedPrice(product.price) }}</span>
            </div>
            <button @click="removeProduct(index)">Удалить</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          image: '',
          price: '',
          description: '',
        },
        products: JSON.parse(localStorage.getItem('products')) || [],
      };
    },
    methods: {
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.newProduct.image = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      addProduct() {
        if (this.newProduct.name && this.newProduct.image && this.newProduct.price && this.newProduct.description) {
          this.products.push({ ...this.newProduct });
          localStorage.setItem('products', JSON.stringify(this.products));
          this.newProduct = {
            name: '',
            image: '',
            price: '',
            description: '',
          };
        }
      },
      removeProduct(index) {
        this.products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(this.products));
      },
      formattedPrice(price) {
        return new Intl.NumberFormat('ru-RU', {
          style: 'currency',
          currency: 'RUB',
        }).format(price);
      },
    },
  };
  </script>
  
  <style scoped>
  .admin-panel {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 16px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .product-list {
    margin-top: 40px;
  }
  
  .product-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .product-list li {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
  }
  
  .product-list img {
    max-width: 100px;
    margin-right: 20px;
  }
  
  .product-list h3 {
    margin-top: 0;
  }
  
  .product-list span {
    font-weight: bold;
  }
  </style>
  