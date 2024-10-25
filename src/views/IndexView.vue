<template>
    <v-container class="text-center">
      <!-- Carrusel -->
      <v-carousel
        height="400"
        progress="primary"
        hide-delimiters
        class="carousel-container"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          class="carousel-item"
        >
          <v-sheet height="100%" class="d-flex justify-center align-center">
            <!-- Condicional para mostrar video o imagen -->
            <template v-if="slide.isVideo">
              <video controls height="100%" class="carousel-video">
                <source :src="slide.source" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            </template>
            <template v-else>
              <v-img
                :src="slide.source"
                alt="Slide Image"
                height="100%"
                contain
                class="carousel-image"
              />
            </template>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
  
      <!-- Título y Párrafo -->
      <h1 class="innova-title">Innova Code</h1>
      <p class="innova-description">
        Transformamos tu visión en realidad
      </p>
  
      <!-- Pie de Página -->
      <footer class="footer">
        <p class="footer-text">
          &copy; {{ new Date().getFullYear() }} Innovacode. Todos los derechos reservados.
        </p>
        <div class="social-icons">
          <v-btn icon :href="'https://www.facebook.com/'" target="_blank">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon :href="'https://www.twitter.com/'" target="_blank">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon :href="'https://www.instagram.com/'" target="_blank">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </div>
      </footer>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slides: [
          { source: require('../assets/konan.png'), isVideo: false },
          { source: require('../assets/1.png'), isVideo: false },
          { source: require('../assets/video.mp4'), isVideo: true },
          { source: require('../assets/INNOVACODE.png'), isVideo: false },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos del carrusel */
  .carousel-container {
    margin: 0 auto;
    max-width: 80%;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease;
  }
  
  .carousel-item:hover {
    transform: scale(1.02);
  }
  
  .carousel-image,
  .carousel-video {
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  .v-carousel__progress {
    background-color: #673ab7 !important;
  }
  
  /* Estilos del título y descripción */
  .innova-title {
    margin-top: 20px;
    font-size: 36px;
    font-weight: bold;
    color: #673ab7;
    transition: color 0.5s ease-in-out;
  }
  
  .innova-title:hover {
    animation: colorChange 2s infinite alternate;
  }
  
  @keyframes colorChange {
    0% {
      color: #1e88e5;
    }
    50% {
      color: #673ab7;
    }
    100% {
      color: #e91e63;
    }
  }
  
  .innova-description {
    font-size: 18px;
    color: #555;
    margin-top: 10px;
    font-weight: 500;
  }
  
  /* Estilos del pie de página */
  .footer {
    margin-top: 20px;
    padding: 10px 0;
    background-color: #ffffff;
    color: #000000;
    border-top: 1px solid #ccc;
    position: relative;
    font-size: 12px;
  }
  
  .footer-text {
    margin: 0;
    animation: colorChange 2s infinite alternate;
  }
  
  .social-icons {
    margin-top: 5px;
  }
  </style>
  