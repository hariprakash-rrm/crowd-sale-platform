import Api from './api'
import {useCryptoStore} from '@/stores/v1-crypto'
import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from '../../../src/App.vue'
// const pinia = createPinia()
// const app = createApp(App)
// app.use(pinia)
const wsApi = new Api();

const subscribeSymbol = function(symbol) {
  wsApi.onTicker(symbol,(ticker) => {
    const tick = {
      price: parseFloat(ticker.c),
      vol: parseFloat(ticker.q).toFixed(2),
      percent: parseFloat(ticker.P).toFixed(2),
      chg: ticker.p,
      high: ticker.h,
      low: ticker.l,
      open: ticker.o,
      time:ticker.E,
      symbol: symbol
    };
    const store = useCryptoStore();

    store.updateTicker(tick);
  })
};
const unSubscribeSymbol = function(symbol) {
  wsApi.closeSubscription('ticker',false, symbol)
};

const subscribeChart = function(symbol, interval) {
  wsApi.onKline(symbol, interval, () => {})
};
const unSubscribeChart = function(symbol, interval) {
  wsApi.closeSubscription('kline',false, symbol, interval)
}
export {subscribeSymbol, unSubscribeSymbol, subscribeChart, unSubscribeChart}