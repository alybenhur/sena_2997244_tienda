<template>
  <v-app id="inspire">
    <v-app-bar extended>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-dots-vertical">
      </v-btn>
    </v-app-bar>

    <v-main>
  
      <v-container>
        <v-row>
          <v-col
            v-for="data in bd" :key="data"
            cols="3"
          >
           <tarjeta 
           :datos="data"
           :alto="altotarjeta"></tarjeta>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
 import tarjeta from './components/TerjetaOnline.vue'
export default {
  components : {
     tarjeta
  },
  data() {
    return {
      altotarjeta : 440,
      bd : [
        {
          titulo : 'Shampoo Heard Shoulder',
          descripcion : 'Shampoo para cabellos lisos, maltratados',
          imagen : 'https://cdn1.totalcommerce.cloud/mercacentro/product-zoom/es/shampoo-h%26s-375-ml-limpieza-renovadora-1.webp',
          valor : '30000'
        },
        {
          titulo : 'Clorox Regular 1800 ml',
          descripcion : 'Limpiador multiusos para el hogar y protege tus ojos',
          imagen : 'https://cdn1.totalcommerce.cloud/mercacentro/product-thumb/es/blancox-corriente-megaoferta-3800-cm3-1.webp',
          valor : '30000'
        }
      ]
    }
  },
}
</script>