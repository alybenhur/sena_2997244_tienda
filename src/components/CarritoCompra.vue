<template>
    <div>
        <v-btn class="text-none" stacked>
            <v-badge  color="error" :content="NoArticulos">
              <v-icon class="mt-2">mdi-cart-outline</v-icon>
            </v-badge>
          </v-btn>
    </div>
</template>
<script>
import { useTiendaStore } from '@/stores/index';
export default {
  
  computed: {
    // Definimos el store como una propiedad computada para acceder a él
    NoArticulos(){
      return this.TiendaStore.GetNoArticulos
    },
    TiendaStore() {
      return useTiendaStore();
    },
  },
}
</script>