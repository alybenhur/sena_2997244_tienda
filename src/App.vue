<template>
  <v-app id="inspire">
    <CabezoteTienda></CabezoteTienda>
    <v-main>
      <div>
        <ListadoProducto></ListadoProducto>
      </div>
     
    </v-main>
  </v-app> 
</template>
<script>
import CabezoteTienda from '@/components/CabezoteTienda.vue';
import ListadoProducto from '@/components/ListadoProducto.vue';


export default {
  components : {
      CabezoteTienda,
      ListadoProducto
  },
  data() {
    return {
     
     
    }
  },
  
  
}
</script>