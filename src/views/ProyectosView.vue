<template>
    <div class="card-container">
      <div v-for="(project, index) in projects" :key="index" class="card">
        <div class="image-container">
          <img :src="project.image" :alt="`Proyecto ${index + 1}`" />
        </div>
        <button @click="navigateToProject(project.link)">Ver Proyecto</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProyectosView',
    data() {
      return {
        projects: [
          { image: require('@/assets/tipicos.png'), title: 'Proyecto 1', link: '/proyecto1view' },
          { image: '', title: 'Proyecto 2', link: '' },  // Mantén vacío si no tienes imagen
          { image: '', title: 'Proyecto 3', link: '' },  // Mantén vacío si no tienes imagen
          { image: '', title: 'Proyecto 4', link: '' },  // Mantén vacío si no tienes imagen
          { image: '', title: 'Proyecto 5', link: '' },  // Mantén vacío si no tienes imagen
          { image: '', title: 'Proyecto 6', link: '' },  // Mantén vacío si no tienes imagen
        ]
      };
    },
    methods: {
      navigateToProject(link) {
        window.open(link, "_blank");
      }
    }
  };
  </script>
  
  <style scoped>
  .card-container {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    margin: 20px;
  }
  
  .card {
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    transition: transform 0.2s;
    max-width: 320px; /* Tamaño aumentado */
  }
  
  .image-container {
    overflow: hidden;
    border-radius: 10px;
  }
  
  .card img {
    border-radius: 8px;
    width: 100%;
    height: 220px; /* Mayor altura para mejor visualización */
    object-fit: cover;
  }
  
  .card button {
    background-color: #6200ea;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    margin-top: 10px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  </style>
  