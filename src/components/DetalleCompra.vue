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
           :items-per-page="itemsPerPage"
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
              <td>
                <v-chip
                 color="red"
                 >
                 {{ item.valor * item.cantidad }}
                </v-chip>
                
              </td>
            </tr>
          </template>
          <template v-slot:bottom>
            <v-row justify="end">
              <v-col cols="1">
                 TOTAL
              </v-col>
              <v-col cols="2">
                 hola
              </v-col>
             </v-row>
            
            <div class="custom-pagination d-flex align-center justify-space-between pa-4">
              <!-- Controles de paginación originales -->
              <v-pagination
                v-model="page"
                :length="pageCount"
                :total-visible="7"
                color="primary"
                circle
              ></v-pagination>
              </div>
              <div class="extra-controls d-flex align-center">
                <v-select
                  v-model="itemsPerPage"
                  :items="itemsPerPageOptions"
                  label="Elementos por página"
                  dense
                  outlined
                  class="mr-4"
                  style="max-width: 150px"
                ></v-select>

                </div>
                
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
            { title: 'Cantidad', value: 'cantidad' },
            { title: 'Total' }
             ],
             items : [],
             page: 1,
      itemsPerPage: 3,
      itemsPerPageOptions: [3,5, 10, 15, -1],
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