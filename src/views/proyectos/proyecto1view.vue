<template>
    <div class="card-container">
      <div class="card">
        <div class="image-container">
          <img :src="image" alt="Descripción de la tarjeta" />
        </div>
        <p class="description">{{ description }}</p>
        <button @click="goToProjects">Ir a Proyectos</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardView',
    data() {
      return {
        image: require('@/assets/ti.png'), // Cambia la ruta a tu imagen
        description: 'Este fue un sistema de pedido a el lloca de Tipicos Margot, fue uno de nuestros primeros trabajos este sistema fue hecho con Laravel.',
      };
    },
    methods: {
      goToProjects() {
        window.close(); // Cierra la pestaña actual
        this.$router.push({ name: 'ProyectosView' }); // Redirige a la vista ProyectosView
      }
    }
  };
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    justify-content: center;
    margin: 20px;
  }
  
  .card {
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px; /* Aumenta el padding para más espacio */
    text-align: center;
    max-width: 400px; /* Aumenta el tamaño máximo de la tarjeta */
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: scale(1.05); /* Efecto de escala al pasar el mouse */
  }
  
  .image-container {
    overflow: hidden;
    border-radius: 10px;
  }
  
  .card img {
    border-radius: 8px;
    width: 100%;
    height: 240px; /* Aumenta la altura de la imagen */
    object-fit: cover;
  }
  
  .card p.description {
    margin: 15px 0; /* Aumenta el margen de la descripción */
    font-size: 18px; /* Aumenta el tamaño de la fuente de la descripción */
  }
  
  .card button {
    background-color: #6200ea;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    margin-top: 15px; /* Aumenta el margen superior */
    padding: 12px; /* Aumenta el padding del botón */
    width: 100%;
    font-size: 18px; /* Aumenta el tamaño de la fuente del botón */
  }
  </style>
  