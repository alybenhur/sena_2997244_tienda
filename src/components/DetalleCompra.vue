<template>
    <div class="text-center pa-4">
      <v-dialog
        v-model="estado"
        max-width="800"
        persistent
      >
       
  
        <v-card
          prepend-icon="mdi-shopping"
           title="Detalle de la Compra"
        >
          <v-data-table
           :headers="headers"
           :items="items"
          >
          <template v-slot:item="{ item }">
            <tr>
              <td>
                {{item.titulo}}
              </td>
              <td>
                <v-img
                 height="50"
                 :src="item.imagen"
            ></v-img>
              </td>
              <td>
                {{ item.valor }}
              </td>
              <td>
                <ContadorCompra
                 :cantidad ="item.cantidad"
                 :codigo="item.codigo"></ContadorCompra>
              </td>
            </tr>
          </template>


        </v-data-table>

          <template v-slot:actions>
              <v-spacer></v-spacer>
              <v-btn @click="cerrar()">
              Cerrar
            </v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </template>
  <script>
  
  import { useTiendaStore } from '@/stores/index';
  import ContadorCompra from '@/components/ContadorCompra.vue';
  export default {
    components:{
      ContadorCompra
    },
    props : {
        dialog : {
          type: Boolean,
          default: false
       },
     },
     data() {
        return {
             headers : [
            { title: 'Articulo', value: 'titulo' },
            { title: 'Imagen', value: 'imagen' },
            { title: 'Precio', value: 'valor' },
            { title: 'Cantidad', value: 'cantidad' }
             ],
             items : []
           }
     },
   computed: {
        estado(){
          return this.dialog
        },
      
        TiendaStore() {
         return useTiendaStore();
        },
   },
   methods: {
    cerrar(){
        this.$emit('cerrarventana')
    }
   },
   mounted() {
     this.items = this.TiendaStore.GetProductosComprados
   },
  }
  </script>