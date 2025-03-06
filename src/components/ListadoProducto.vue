<template>
    <v-container>
       
            <v-row>
              <v-col
                v-for="(data,index) in TiendaStore.GetProductos" :key="data"
                cols="3"
              >
              <tarjeta 
               :datos="data"
               :alto="altotarjeta"
               :pos="index"
               ></tarjeta>
              </v-col>
            </v-row>
      
    </v-container>
</template>
<script>
import { useTiendaStore } from '@/stores/index';
import tarjeta from '@/components/TerjetaOnline.vue'
export default {
    components:{
        tarjeta,
    },
    data() {
      return {
        altotarjeta : 270,
      }
    },
    computed: {
    // Definimos el store como una propiedad computada para acceder a él
    TiendaStore() {
      return useTiendaStore();
    },
  },
}
</script>