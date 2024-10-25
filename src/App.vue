<template>
  <v-app>
    <v-app-bar class="bg-deep-purple-darken-4">
      <v-app-bar-title class="white--text">INNOVACODE</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn prepend-icon="mdi-home" color="deep-purple-lighten-4" to="/">
        INICIO
      </v-btn>

      <v-btn prepend-icon="mdi-account-group" color="deep-purple-lighten-4" to="/SobreNosotros">
        Sobre nosotros
      </v-btn>

      <v-btn prepend-icon="mdi-file-document" color="deep-purple-lighten-4" to="/ProyectosView">
        Proyectos
      </v-btn>

      <v-btn prepend-icon="mdi-shopping-cart-outline" color="deep-purple-lighten-4" to="/carrito-compra">
        Servicios
      </v-btn>

      <v-btn prepend-icon="mdi-account-details" color="deep-purple-lighten-4" to="/contactos">
        Contactos
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'App',
};
</script>
