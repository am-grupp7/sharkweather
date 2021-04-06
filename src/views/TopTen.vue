<template>
    <div class="main-topten">
        <nav>Start > Topp 10-lista</nav>
        <h1>Topp 10-lista</h1>
        <p>
            Se var i landet det är varmast, regnar mest eller är blåsigast just
            nu.
        </p>
        <h2>{{ date }}</h2>
        <div class="boards">
            <div class="inner">
                <top-ten-board
                    api-call="1"
                    heading="Temperatur °c"
                    unit="°c"
                ></top-ten-board>
            </div>
            <div class="inner">
                <top-ten-board
                    api-call="7"
                    heading="Nederbörd mm"
                    unit="mm"
                ></top-ten-board>
            </div>
            <div class="inner">
                <top-ten-board
                    api-call="4"
                    heading="Vindstyrka m/s"
                    unit="m/s"
                ></top-ten-board>
            </div>
        </div>
    </div>
</template>

<script>
import TopTenBoard from '../components/TopTenBoard.vue'
import { sv } from 'date-fns/locale'
import { format } from 'date-fns'
export default {
    name: 'TopTen',
    components: {
        TopTenBoard,
    },
    data() {
        return {
            date: format(new Date(), "'Idag, 'd MMMM", { locale: sv }),
        }
    },
}
</script>

<style scoped>
.main-topten {
    text-align: left;
    margin-left: 8%;
    margin-right: 8%;
}

.boards {
    display: flex;
    flex-direction: row;
}

@media (max-width: 800px) {
    .boards {
        flex-direction: column;
    }
}

.inner {
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 15px;
    padding-top: 15px;

    font-weight: bold;
    font-size: 18px;
    line-height: 3em;
    background-color: #daeafb;
    margin: 15px;
}
</style>
