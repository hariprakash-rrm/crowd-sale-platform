import defaultPair from '../crypto-dashboard/assets/defaultpair.json'
import { defineStore } from "pinia";

export const useCryptoStore = defineStore("cryptoStore", {
  state: () => ({
    currencies: localStorage.getItem('vue-crypto-currencies-new')? JSON.parse(localStorage.getItem('vue-crypto-currencies-new')) : defaultPair,
    tickers: {},
    test: {},
    chartData: []
  }),
  getters: {
    getSymbolById: state => (symbol) => {
      return state.currencies.find(s => s.symbol === symbol);
    },
    getTickerById: state => (symbol) => {
      return state.tickers[symbol]
    }
  },
  actions: {
    setData (){
    this.test = {me: 'always happy'}
    },
    updateTicker(payload){
      // this.tickers = {name :"working"}
      // console.log("payload",payload)
       const tick = this.tickers[payload.symbol]
        payload.pchg = tick ? (payload.price > tick.price? 1 : -1 ) : 1
       this.tickers[payload.symbol] = payload;
      //  console.log("this.tickers",JSON.stringify(this.tickers))
    },
    SET_DEFAULT(){
      this.currencies = defaultPair
    },
    ADD_COIN_PAIR: (payload) => {
      if(!this.tickers[payload.symbol]) {
        this.currencies.push(payload);
        localStorage.setItem('vue-crypto-currencies-new', JSON.stringify(this.currencies))
      }
      Vue.set(this.tickers, payload.symbol, { pchg: 1 })
    },
    REMOVE_COIN_PAIR: ( symbol) => {
      Vue.delete(this.tickers, symbol)
      this.currencies.splice(this.currencies.findIndex(s => s.symbol === symbol), 1);
      localStorage.setItem('vue-crypto-currencies-new', JSON.stringify(this.currencies))
    }
  }
  })