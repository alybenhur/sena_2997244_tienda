import { defineStore } from 'pinia'

export const useTiendaStore = defineStore('tienda', {
  // State
  state: () => ({
    compras : [],
    bd : [
        
      {
        "titulo": "Shampoo Heard Shoulder Limpieza Renovadora",
        "descripcion": "Shampoo para cabellos lisos y maltratados, con fórmula renovadora.",
        "imagen": "https://cdn1.totalcommerce.cloud/mercacentro/product-zoom/es/shampoo-h%26s-375-ml-limpieza-renovadora-1.webp",
        "valor": "30000",
        "codigo" : "1"
      },
      {
        "titulo": "Shampoo Dove Hidratación Intensa",
        "descripcion": "Hidratación profunda para cabello seco y quebradizo.",
        "imagen": "https://www.dove.com/content/dam/unilever/dove/global/product_images/hair_care/dove_intense_repair_shampoo_400ml-1169779-png.png",
        "valor": "25000",
        "codigo" : "2"
      },
      {
        "titulo": "Shampoo Garnier Fructis Fuerza y Brillo",
        "descripcion": "Fórmula con vitaminas para fortalecer el cabello opaco.",
        "imagen": "https://www.garnierusa.com/-/media/project/loreal/brand-sites/garnier/usa/products/haircare/fructis/sleek-and-shine/shampoo/fructis_sleek_shampoo_370x500.png",
        "valor": "28000",
        "codigo" : "3"
      },
      {
        "titulo": "Shampoo TRESemmé Reparación Extrema",
        "descripcion": "Repara el cabello dañado por tintes y calor.",
        "imagen": "https://www.tresemme.com/content/dam/unilever/tresemme/united_states/pack_shot/hair_care/shampoo/tresemme_repair_and_protect_7_shampoo_22oz_front-1169776-png.png",
        "valor": "32000",
        "codigo" : "4"
      },
      {
        "titulo": "Shampoo Herbal Essences Bio Renew",
        "descripcion": "Shampoo con ingredientes naturales para cabello suave.",
        "imagen": "https://www.herbalessences.com/content/dam/sites/herbalessences/global/products/bio_renew/hydrate/shampoo/coconut-milk-shampoo-400ml.png",
        "valor": "27000",
        "codigo" : "5"
      },
      {
        "titulo": "Shampoo Pantene Pro-V Miracles",
        "descripcion": "Nutrición intensa para cabello débil y sin vida.",
        "imagen": "https://www.pantene.com/content/dam/sites/pantene/global/products/pro-v-miracles/hydrate/shampoo/pantene-pro-v-miracles-hydrate-shampoo-400ml.png",
        "valor": "31000",
        "codigo" : "6"
      },
      {
        "titulo": "Shampoo L'Oréal Paris Elseve",
        "descripcion": "Fórmula anti-frizz para cabello rebelde.",
        "imagen": "https://www.loreal-paris.com.br/-/media/project/loreal/brand-sites/elseve/americalatina/products/elseve-reparacao-total-5/shampoo-elseve-reparacao-total-5-400ml.png",
        "valor": "29000",
        "codigo" : "7"
      },
      {
        "titulo": "Shampoo Head & Shoulders Anti-Caspa",
        "descripcion": "Controla la caspa y deja el cabello fresco.",
        "imagen": "https://www.headandshoulders.com/content/dam/sites/headandshoulders/global/products/classic_clean/shampoo/head-and-shoulders-classic-clean-shampoo-400ml.png",
        "valor": "33000",
        "codigo" : "8"
      },
      {
        "titulo": "Shampoo OGX Renewing Argan Oil",
        "descripcion": "Aceite de argán para cabello seco y dañado.",
        "imagen": "https://www.ogxbeauty.com/-/media/project/loreal/brand-sites/ogx/americas/us/products/renewing-argan-oil-of-morocco/shampoo/ogx-renewing-argan-oil-of-morocco-shampoo-385ml.png",
        "valor": "35000",
        "codigo" : "9"
      },
      {
        "titulo": "Shampoo Seda Recarga Natural",
        "descripcion": "Fórmula natural para revitalizar el cabello apagado.",
        "imagen": "https://www.seda.com.br/-/media/project/loreal/brand-sites/seda/americalatina/products/recarga-natural/shampoo-seda-recarga-natural-325ml.png",
        "valor": "26000",
        "codigo" : "10"
      }
    
          ]
  }),
  
  // Getters
  getters: {
    GetProductos() {
      return this.bd
    },
    GetProductoId(state) {
      return (id) => state.bd[id];
    },
    GetNoArticulos(){
      return this.compras.length
    },
    GetProductosComprados() {
      return this.compras
    },
    GetExisteProductoId(state) {
      return (codigo) => {
       return  state.compras.find((e) => e.codigo == codigo)
      }
    },
    GetIndexProductoId(state) {
      return (codigo) => {
        state.compras.findIndex((e) => e.codigo == codigo)
      }
    },

   
  },
  actions: {
    // Método para guardar un objeto en el arreglo
    guardarProducto(producto) {
      this.compras.push(producto);
    },
    sobreescribirproducto(pos,producto){
     this.compras[pos] = producto
    }
  }
  // Actions
 
})