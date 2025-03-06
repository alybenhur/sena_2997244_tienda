<template>
  
            <v-app-bar extended
             color="deep-purple-lighten-1"
             height="100"
             >
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
        
              <v-app-bar-title>
                <h1>
                  TIENDA LA BUENISIMA :
                </h1></v-app-bar-title>
        
              <v-spacer></v-spacer>
              <CarritoCompra></CarritoCompra>
              <v-btn icon="mdi-dots-vertical">
              </v-btn>
            </v-app-bar>

</template>
<script>
 import CarritoCompra from '@/components/CarritoCompra.vue';
export default {
   components :{
    CarritoCompra
   } 
}
</script>