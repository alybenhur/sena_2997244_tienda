<template>
    <div>
     
        <v-btn @click="activar()" class="text-none" stacked>
            <v-badge  color="error" :content="NoArticulos">
              <v-icon class="mt-2">mdi-cart-outline</v-icon>
            </v-badge>
          </v-btn>
          <DetalleCompra
           @cerrarventana="cerrar()"
           :dialog="estado"
          ></DetalleCompra>
          
    </div>
</template>
<script>
import { useTiendaStore } from '@/stores/index';
import DetalleCompra from '@/components/DetalleCompra.vue';

export default {
   components:{
     DetalleCompra
   },
   data() {
    return {
       estado : false
    }
   },
  computed: {
    // Definimos el store como una propiedad computada para acceder a él
    NoArticulos(){
      return this.TiendaStore.GetNoArticulos
    },
    TiendaStore() {
      return useTiendaStore();
    },
  },
  methods: {
    activar(){
      
      this.estado = true
    },
    cerrar(){
      this.estado = false
    }
  },
}
</script>