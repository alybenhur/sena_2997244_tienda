<template>
  <v-app id="inspire">
    <v-app-bar extended
     color="deep-purple-lighten-1"
     height="100"
     >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>
        <h1>
          TIENDA LA BUENISIMA :{{ conteo }}
        </h1></v-app-bar-title>

      <v-spacer></v-spacer>
      <CarritoCompra></CarritoCompra>
      <v-btn icon="mdi-dots-vertical">
      </v-btn>
    </v-app-bar>

    <v-main>
   <button @click=" cambiarValor()">incrementar</button>
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
 import CarritoCompra from './components/CarritoCompra.vue';
import tarjeta from './components/TerjetaOnline.vue'
import { useStore } from 'vuex';
export default {
  components : {
     tarjeta,
     CarritoCompra
  },
  data() {
    return {
      altotarjeta : 270,
      bd : [
        
  {
    "titulo": "Shampoo Heard Shoulder Limpieza Renovadora",
    "descripcion": "Shampoo para cabellos lisos y maltratados, con fórmula renovadora.",
    "imagen": "https://cdn1.totalcommerce.cloud/mercacentro/product-zoom/es/shampoo-h%26s-375-ml-limpieza-renovadora-1.webp",
    "valor": "30000"
  },
  {
    "titulo": "Shampoo Dove Hidratación Intensa",
    "descripcion": "Hidratación profunda para cabello seco y quebradizo.",
    "imagen": "https://www.dove.com/content/dam/unilever/dove/global/product_images/hair_care/dove_intense_repair_shampoo_400ml-1169779-png.png",
    "valor": "25000"
  },
  {
    "titulo": "Shampoo Garnier Fructis Fuerza y Brillo",
    "descripcion": "Fórmula con vitaminas para fortalecer el cabello opaco.",
    "imagen": "https://www.garnierusa.com/-/media/project/loreal/brand-sites/garnier/usa/products/haircare/fructis/sleek-and-shine/shampoo/fructis_sleek_shampoo_370x500.png",
    "valor": "28000"
  },
  {
    "titulo": "Shampoo TRESemmé Reparación Extrema",
    "descripcion": "Repara el cabello dañado por tintes y calor.",
    "imagen": "https://www.tresemme.com/content/dam/unilever/tresemme/united_states/pack_shot/hair_care/shampoo/tresemme_repair_and_protect_7_shampoo_22oz_front-1169776-png.png",
    "valor": "32000"
  },
  {
    "titulo": "Shampoo Herbal Essences Bio Renew",
    "descripcion": "Shampoo con ingredientes naturales para cabello suave.",
    "imagen": "https://www.herbalessences.com/content/dam/sites/herbalessences/global/products/bio_renew/hydrate/shampoo/coconut-milk-shampoo-400ml.png",
    "valor": "27000"
  },
  {
    "titulo": "Shampoo Pantene Pro-V Miracles",
    "descripcion": "Nutrición intensa para cabello débil y sin vida.",
    "imagen": "https://www.pantene.com/content/dam/sites/pantene/global/products/pro-v-miracles/hydrate/shampoo/pantene-pro-v-miracles-hydrate-shampoo-400ml.png",
    "valor": "31000"
  },
  {
    "titulo": "Shampoo L'Oréal Paris Elseve",
    "descripcion": "Fórmula anti-frizz para cabello rebelde.",
    "imagen": "https://www.loreal-paris.com.br/-/media/project/loreal/brand-sites/elseve/americalatina/products/elseve-reparacao-total-5/shampoo-elseve-reparacao-total-5-400ml.png",
    "valor": "29000"
  },
  {
    "titulo": "Shampoo Head & Shoulders Anti-Caspa",
    "descripcion": "Controla la caspa y deja el cabello fresco.",
    "imagen": "https://www.headandshoulders.com/content/dam/sites/headandshoulders/global/products/classic_clean/shampoo/head-and-shoulders-classic-clean-shampoo-400ml.png",
    "valor": "33000"
  },
  {
    "titulo": "Shampoo OGX Renewing Argan Oil",
    "descripcion": "Aceite de argán para cabello seco y dañado.",
    "imagen": "https://www.ogxbeauty.com/-/media/project/loreal/brand-sites/ogx/americas/us/products/renewing-argan-oil-of-morocco/shampoo/ogx-renewing-argan-oil-of-morocco-shampoo-385ml.png",
    "valor": "35000"
  },
  {
    "titulo": "Shampoo Seda Recarga Natural",
    "descripcion": "Fórmula natural para revitalizar el cabello apagado.",
    "imagen": "https://www.seda.com.br/-/media/project/loreal/brand-sites/seda/americalatina/products/recarga-natural/shampoo-seda-recarga-natural-325ml.png",
    "valor": "26000"
  }

      ]
    }
  },
  computed: {
    conteo(){
      
      return this.$store.getters.getCount

    }
   
    
  },
  methods: {
    cambiarValor() {
      console.log('hola')
       this.$store.dispatch('increment') // 42 es el nuevo valor, puede ser cualquier dato
    }
  },
}
</script>