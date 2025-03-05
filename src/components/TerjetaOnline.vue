   <template>
            <v-card
              :disabled="loading"
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              :height="alto"
            >
            
          
              <v-img
                height="100"
                :src="datos.imagen"
                contain
              ></v-img>
          
              <v-card-item>

                <v-card-title>{{datos.titulo}}</v-card-title>
          
                

              </v-card-item>
          
              <v-card-text>
               {{datos.descripcion}}
              </v-card-text>
          
              <v-divider class="mx-4 mb-1"></v-divider>
          
            
          
             
          
              <v-card-actions>
                <v-btn
                append-icon="mdi-cart-outline"
                size="large"
                block
              >
                <template v-slot:prepend>
                  <v-icon color="success"></v-icon>
                </template>
          
                <v-chip color="secondary" variant="flat">
                    $COP {{datos.valor}}
                  </v-chip>
          
                <template v-slot:append>
                  <v-icon color="warning"
                  
                  ></v-icon>
                </template>
              </v-btn>
              </v-card-actions>
            </v-card>
      
</template>
<script>
export default {
    props : ['datos','alto']
}
</script>