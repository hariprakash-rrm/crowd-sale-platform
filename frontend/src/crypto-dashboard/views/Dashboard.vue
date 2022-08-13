<template>
<div class="cryptoCard-new">
    <div class="content-box">
        <div class="menu-bar">
            <button class="add-btn" @click="addCoinPair"><i class="fa fa-plus fa-lg" aria-hidden="true"></i></button>
        </div>
        <CryptoBoard></CryptoBoard>
        <!-- <button class="clear-btn" @click="clear">Clear All</button> -->
    </div>
    </div>
</template>


<script>
    // import vSelect from 'vue-select'
    import coins from '../assets/group.json'
    import CryptoBoard from './CryptoBoard.vue'
    import {isEmpty} from '../util/Utility'
    import {subscribeSymbol} from '../services/binance'
    import {useCryptoStore} from '@/stores/v1-crypto'
    import {mapState} from 'pinia'
    export default {
        name: 'dashboard',
        data() {
            return {
                currencyList: coins,
                quote: 'BNB',
                baseCurrency: {}
            }
        },
        mounted() {
            if (this.currencies) {
                this.currencies.forEach(currency => {
                    subscribeSymbol(currency.symbol);
                });
            }
        },
        computed: {
            ...mapState(useCryptoStore,['currencies']),
            quoteOptions() {
                return Object.keys(coins)
            }
        },
        components: {
            // vSelect,
            CryptoBoard
        },
        methods: {
            resetBase() {
                this.baseCurrency = {}
            },
            clear() {
                localStorage.clear();
                location.reload();
            },
            addCoinPair() {
                if (!isEmpty(this.baseCurrency)) {
                    const symbol = `${this.baseCurrency.value}${this.quote}`;
                    subscribeSymbol(symbol);
                    this.$store.commit('ADD_COIN_PAIR', {
                        "symbol": symbol,
                        "base": this.baseCurrency.value,
                        "quote": this.quote,
                        "name": this.baseCurrency.name,
                        "cid": this.baseCurrency.cid
                    })
                }
            }
        }
    }
</script>

