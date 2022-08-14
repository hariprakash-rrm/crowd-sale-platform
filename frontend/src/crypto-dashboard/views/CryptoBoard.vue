
<template>
  <div class="board">
    <div class="card-block" v-for="value in currencies" :key="value.symbol"> 
      <div v-if="tickers">
        <CurrencyCard :ticker="tickers?tickers[value.symbol]:{}" :info="value"></CurrencyCard>
        </div>
        
    </div>
  </div>
</template>

<script>
  import CurrencyCard from '../components/CurrencyCard.vue'
 import { mapState,mapActions } from "pinia";
    import {useCryptoStore} from '@/stores/v1-crypto'
  export default {
    name: 'CryptoBoard',
    components: {
      CurrencyCard
    },
    computed: {
      ...mapState(useCryptoStore,['currencies','tickers','test']),
    }
  }
</script>
