<template>
    <div>
        <button @click="incrementar()" class="botones">
            <v-icon>mdi-plus-box-outline</v-icon>
             </button>
               <span class="cantidad">
                {{ cantidad }}
               </span> 
        <button @click="disminuir()" class="botones"> 
            <v-icon>mdi-minus-box-outline</v-icon>
         </button>
    </div>
</template> 
<script>
import { useTiendaStore } from '@/stores/index';
export default {
    props : ['cantidad','codigo'],
    
    computed: {
        TiendaStore() {
          return useTiendaStore();
      },
    },
    methods: {
        incrementar(){
           this.TiendaStore.incrementarcantidad(this.codigo)
          
        },

        disminuir(){
            this.TiendaStore.decrementarcantidad(this.codigo)
        }
    },
}
</script>
<style scoped>
 .botones{
    font-size: 14px;
    font-weight: bold;
  }

  .cantidad{
    font-size: 25px;
    color: rgb(43, 136, 236);
  }
</style>