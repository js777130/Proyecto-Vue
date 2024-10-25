<template>
    <v-container class="text-center">
      <!-- Filas de tarjetas de proyectos -->
      <v-row>
        <v-col v-for="(project, index) in projects" :key="index" cols="12" md="4">
          <v-card @click="openProject(project.url)" class="project-card">
            <v-img :src="project.image" height="200px" class="project-image"></v-img>
            <v-card-title>{{ project.title }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
  
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
  
      <!-- Botón flotante para subir/bajar -->
      <v-btn
        v-if="showScrollButton"
        fab
        class="scroll-button"
        @click="scrollToPosition"
      >
        <v-icon v-if="isBottom">mdi-arrow-up</v-icon>
        <v-icon v-else>mdi-arrow-down</v-icon>
      </v-btn>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            title: "Proyecto 1",
            image: "https://via.placeholder.com/400x200",
            url: "https://example.com/project1",
          },
          {
            title: "Proyecto 2",
            image: "https://via.placeholder.com/400x200",
            url: "https://example.com/project2",
          },
          {
            title: "Proyecto 3",
            image: "https://via.placeholder.com/400x200",
            url: "https://example.com/project3",
          },
          {
            title: "Proyecto 4",
            image: "https://via.placeholder.com/400x200",
            url: "https://example.com/project4",
          },
          {
            title: "Proyecto 5",
            image: "https://via.placeholder.com/400x200",
            url: "https://example.com/project5",
          },
          {
            title: "Proyecto 6",
            image: "https://via.placeholder.com/400x200",
            url: "https://example.com/project6",
          },
          
        ],
        isBottom: false,
        showScrollButton: false,
      };
    },
    methods: {
      openProject(url) {
        window.open(url, "_blank");
      },
      scrollToPosition() {
        const target = this.isBottom ? 0 : document.body.scrollHeight;
        window.scrollTo({ top: target, behavior: "smooth" });
        this.isBottom = !this.isBottom;
      },
      handleScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const bottomOfPage = document.documentElement.scrollHeight - window.innerHeight;
  
        // Mostrar el botón solo cuando el usuario no esté al inicio
        this.showScrollButton = scrollPosition > 100;
  
        // Detectar si el usuario está en la parte inferior
        this.isBottom = scrollPosition >= bottomOfPage - 10;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  .project-card {
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .project-card:hover {
    transform: scale(1.05);
  }
  
  .project-image {
    border-radius: 10px;
  }
  
  /* Estilos del pie de página */
  .footer {
    margin-top: 40px;
    padding: 20px 0;
    background-color: #ffffff;
    color: #000000;
    border-top: 1px solid #ccc;
    position: relative;
    font-size: 14px;
  }
  
  .footer-text {
    margin: 0;
  }
  
  .social-icons {
    margin-top: 10px;
  }
  
  /* Estilos del botón flotante */
  .scroll-button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #673ab7;
    color: white;
  }
  </style>
  