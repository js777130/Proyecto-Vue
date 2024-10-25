<template>
    <v-container class="text-center">
      <!-- Sección Sobre Nosotros -->
      <v-row class="mt-5 about-section justify-center">
        <v-col cols="12">
          <h2 class="about-title fade-in">Sobre Nosotros</h2>
          <p class="about-description fade-in">
            Somos una empresa de desarrollo de aplicaciones web, sitios web, páginas web, 
            aplicaciones de escritorio y tiendas web. Nos especializamos en brindar soluciones tecnológicas innovadoras y a la medida, adaptándonos a las necesidades de nuestros clientes para que puedan optimizar sus procesos y alcanzar sus objetivos de negocio. 
            Nuestro equipo está compuesto por expertos en diversas áreas del desarrollo de software, garantizando un servicio de alta calidad y confiabilidad.
            <br><br>
            Ofrecemos una amplia gama de servicios, incluyendo:
            <ul class="services-list">
                <li>Desarrollo de aplicaciones web adaptativas y seguras</li>
                <li>Diseño y desarrollo de tiendas en línea</li>
                <li>Aplicaciones de escritorio personalizadas</li>
                <li>Mantenimiento y soporte continuo</li>
                <li>Consultoría en tecnología y mejoras en procesos empresariales</li>
            </ul>
            Estamos ubicados en Residencial AltaVista Polígono #53, pero nuestro alcance es global gracias a las soluciones digitales que ofrecemos. Nos comprometemos con el éxito de cada proyecto, asegurando un acompañamiento cercano en todas las etapas del desarrollo.
          </p>
        </v-col>
      </v-row>
  
      <!-- Imágenes dispuestas en una sola fila -->
      <v-row class="mt-5 about-section justify-center">
        <h2 class="about-title fade-in">Fundadores</h2>
      </v-row>
  
      <!-- Sección de tarjetas con roles -->
      <v-row class="mt-5 about-section justify-center">
        <v-col cols="4">
          <v-card>
            <v-img src="../assets/2.jpeg" class="image-style"></v-img>
            <v-card-title class="fade-in">Jefe de Marketing: Kevin Mancia</v-card-title>
          </v-card>
        </v-col>
  
        <v-col cols="4">
          <v-card>
            <v-img src="../assets/6.jpeg" class="image-style"></v-img>
            <v-card-title class="fade-in">CEO: Josue Palacios</v-card-title>
          </v-card>
        </v-col>
  
        <v-col cols="4">
          <v-card>
            <v-img src="../assets/3.jpeg" class="image-style"></v-img>
            <v-card-title class="fade-in">Jefe de Desarrollo: Cesar Alas</v-card-title>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Fila de tarjetas adicionales -->
      <v-row class="mt-5 about-section justify-center">
        <v-col cols="4">
          <v-card>
            <v-img src="../assets/4.jpeg" class="image-style"></v-img>
            <v-card-title class="fade-in">Jefe de Contabilidad: Carlos Mismit</v-card-title>
          </v-card>
        </v-col>
  
        <v-col cols="4">
          <v-card>
            <v-img src="../assets/5.jpeg" class="image-style"></v-img>
            <v-card-title class="fade-in">Jefa de RRHH: Gabriela Rosales</v-card-title>
          </v-card>
        </v-col>
      </v-row>
  
      <v-row class="justify-center">
        <p class="about-description fade-in">
          El equipo fundador de la empresa Innovacode. Todo empezó con un sueño y ahora se ha vuelto una realidad.
        </p>
      </v-row>
  
      <!-- Botones de Subir y Bajar en la esquina derecha -->
      <div class="scroll-buttons">
        <v-btn color="primary" @click="scrollToTop">Subir</v-btn>
        <v-btn color="primary" @click="scrollToBottom">Bajar</v-btn>
      </div>
  
      <!-- Pie de Página -->
      <footer class="footer">
        <p class="footer-text fade-in">
          &copy; {{ new Date().getFullYear() }} Innovacode. Todos los derechos reservados.
        </p>
        <div class="social-icons fade-in">
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
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
      scrollToBottom() {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos del título y descripción */
  .about-title {
    font-size: 32px;
    font-weight: bold;
    color: #1e88e5;
    margin-bottom: 10px;
  }
  
  .about-description {
    font-size: 18px;
    color: #555;
    line-height: 1.8;
    margin-bottom: 30px;
  }
  
  /* Estilos para la lista de servicios */
  .services-list {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  /* Estilos para las imágenes */
  .image-style {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    object-fit: cover;
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
  }
  
  .social-icons {
    margin-top: 5px;
  }
  
  /* Animación de desvanecimiento */
  .fade-in {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 0.5s;
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  
  /* Botones de Subir y Bajar en la esquina derecha */
  .scroll-buttons {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .scroll-buttons v-btn {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  