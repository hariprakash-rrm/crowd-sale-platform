<template>
    <div class="container-fluid">
        <div class="row flex-xl-nowrap">
            <div class="col">
                <div class="row">
                    <div class="col-md-8 mb-3">
                        <div class="info-card">
                            <div class="row">
                                <div class="col">
                                    <span class="coin-img" :style="{ backgroundImage : `url('https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.cid}.png')` }"></span>
                                    <div class="coin-name">{{currency.name}} ({{currency.base}}) / <span class="small">{{currency.quote}}</span></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <span class="price" :style="{'color': (ticker.pchg && ticker.pchg > 0) ? 'green':'red'}">{{ticker.price}}<span class="x-small"> {{currency.quote}}</span></span>
                                </div>
                                <div class="col-md-6 chg-block" :class="[(ticker.percent < 0)?'down':'up']">
                                    <div class="text-dark small text-right">24h Chg</div>
                                    <div class="text-right d-flex justify-content-end">
                                        <span class="indicator"></span><span>{{ ticker.percent }}%</span>
                                    </div>
                                    <div class="icon-chg text-right">
                                        {{parseFloat(ticker.chg).toFixed((currency.quote === 'USDT') ? 3 : 8)}} <span class="x-small">{{currency.quote}}</span>
                                    </div>
                                </div>
                                <div class="col-12 x-small">{{ticker.time | timeformat}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="info-card justify-content-center">
                            <div><span class="info-label">24H OPEN  </span>{{ ticker.open | priceformat }}<span class="small"> {{currency.quote}}</span></div>
                            <div><span class="info-label">24H HIGH  </span>{{ ticker.high | priceformat }}<span class="small"> {{currency.quote}}</span></div>
                            <div><span class="info-label">24H LOW  </span>{{ ticker.low | priceformat }}<span class="small"> {{currency.quote}}</span></div>
                            <div><span class="info-label">24H VOL  </span>{{ ticker.vol }}<span class="small"> {{currency.base}}</span></div>
                        </div>
                    </div>
                    <div class="col-12 mb-3">
                        <coin-charts :symbol="symbol"></coin-charts>
                    </div>
                </div>
            </div>
            <div class="col news-section">
                <crypto-news></crypto-news>
            </div>
        </div>
    </div>
</template>
<script>
  import CryptoNews from '../components/CryptoNews.vue'
  import CoinCharts from '../components/CoinCharts.vue'
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  export default {
    props:['symbol'],
    name: 'info-view',
    data() {
      return {

      };
    },
    filters: {
      priceformat: function(value) {
        if(!value) return "";
        return parseFloat(value).toLocaleString()
      },
      timeformat: function(value) {
        if(!value) return "";
        const dt = new Date(value);
        return `${dt.getDate()} ${months[dt.getMonth()]} ${dt.toTimeString().split(' ')[0]}`
      }
    },
    components: {
      CryptoNews,
      CoinCharts
    },
    computed: {
      currency() {
        // return [{"cid":1,"symbol":"BTCUSDT","base":"BTC","quote":"USDT","name":"Bitcoin"},{"cid":74,"symbol":"DOGEBTC","base":"DOGE","quote":"BTC","name":"Dogecoin"},{"cid":1027,"symbol":"ETHUSDT","base":"ETH","quote":"USDT","name":"Ethereum"},{"cid":52,"symbol":"XRPUSDT","base":"XRP","quote":"USDT","name":"XRP"},{"cid":1027,"symbol":"ETHBTC","base":"ETH","quote":"BTC","name":"Ethereum"},{"cid":5161,"symbol":"WRXBTC","base":"WRX","quote":"BTC","name":"WazirX"},{"cid":2416,"symbol":"TFUELBTC","base":"TFUEL","quote":"BTC","name":"Theta Fuel"},{"cid":6636,"symbol":"DOTBNB","base":"DOT","quote":"BNB","name":"Polkadot"},{"cid":10188,"symbol":"ATABNB","base":"ATA","quote":"BNB","name":"Automata Network"},{"cid":3890,"symbol":"MATICBNB","base":"MATIC","quote":"BNB","name":"Polygon"},{"cid":1839,"symbol":"BTCGBP","base":"BTC","quote":"GBP","name":"Binance Coin"},{"cid":5994,"symbol":"SHIBEUR","base":"SHIB","quote":"EUR","name":"SHIBA INU"},{"symbol":"CAKEBNB","base":"CAKE","quote":"BNB","name":"PancakeSwap","cid":7186}]
        return this.$store.getters.getSymbolById(this.symbol) || {}
      },
      ticker() {
        return this.$store.getters.getTickerById(this.symbol) || {}
      }
    }
  }
</script>
