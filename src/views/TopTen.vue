<template>
<<<<<<< HEAD
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
                    :length="10"
                ></top-ten-board>
            </div>
            <div class="inner">
                <top-ten-board
                    api-call="7"
                    heading="Nederbörd mm"
                    unit="mm"
                    :length="10"
                ></top-ten-board>
            </div>
            <div class="inner">
                <top-ten-board
                    api-call="4"
                    heading="Vindstyrka m/s"
                    unit="m/s"
                    :length="10"
                ></top-ten-board>
=======
    <div class="desktop">
        <div class="main-topten">
            <nav>Start > Topp 10-lista</nav>
            <h1>Topp 10-lista</h1>
            <p>
                Se var i landet det är varmast, regnar mest eller är blåsigast
                just nu.
            </p>
            <h2>{{ date }}</h2>
            <div class="boards">
                <div class="inner">
                    <top-ten-board
                        api-call="1"
                        heading="Temperatur"
                        count="1"
                        plus="+"
                        unit="°c"
                    ></top-ten-board>
                </div>
                <div class="inner">
                    <top-ten-board
                        api-call="7"
                        heading="Nederbörd"
                        count="1"
                        unit="mm"
                    ></top-ten-board>
                </div>
                <div class="inner">
                    <top-ten-board
                        api-call="4"
                        heading="Vindstyrka"
                        count="1"
                        unit="m/s"
                    ></top-ten-board>
                </div>
            </div>
        </div>
    </div>

    <div class="mobile">
        <div class="main-topten">
            <h4>Topp 10-lista</h4>
            <p>
                Se var i landet det är varmast, regnar mest eller är blåsigast
                just nu.
            </p>
            <h5>{{ date }}</h5>
        </div>

        <div class="warpper">
            <input class="radio" id="sol" name="group" type="radio" checked />
            <input class="radio" id="regn" name="group" type="radio" />
            <input class="radio" id="vind" name="group" type="radio" />
            <div class="tabs">
                <label class="tab" id="sol-tab" for="sol">
                    <img
                        :src="require('../assets//icons/Sol.svg')"
                        class="images"
                    />
                    <br />
                    <small>Temperatur</small>
                </label>
                <label class="tab" id="regn-tab" for="regn">
                    <img
                        :src="require('../assets//icons/Regn.svg')"
                        class="images"
                    />
                    <br />
                    <small>Nederbörd</small>
                </label>
                <label class="tab" id="vind-tab" for="vind">
                    <img
                        :src="require('../assets//icons/Vind.svg')"
                        class="images"
                    />
                    <br />
                    <small>Vindstyrka</small>
                </label>
            </div>
            <div class="panels">
                <div class="panel" id="sol-panel">
                    <top-ten-board
                        api-call="1"
                        heading="Temperatur"
                        count="1"
                        plus="+"
                        unit="°c"
                    ></top-ten-board>
                </div>
                <div class="panel" id="regn-panel">
                    <top-ten-board
                        api-call="7"
                        heading="Nederbörd"
                        count="1"
                        unit="mm"
                    ></top-ten-board>
                </div>
                <div class="panel" id="vind-panel">
                    <top-ten-board
                        api-call="4"
                        heading="Vindstyrka"
                        count="1"
                        unit="m/s"
                    ></top-ten-board>
                </div>
>>>>>>> master
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
@media only screen and (max-width: 600px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: block;
    }

    .images {
        width: 25%;
    }

    .main-topten {
        text-align: center;
        margin-left: 8%;
        margin-right: 8%;
    }

    .main-topten h4 {
        text-align: center;
        margin-left: 8%;
        margin-right: 8%;
    }

    .main-topten h5 {
        text-align: center;
        margin-left: 8%;
        margin-right: 8%;
        margin-bottom: 4%;
        color: white;
    }

    .main-topten p {
        text-align: center;
    }

    h2 {
        color: #000;
        text-align: center;
        font-size: 2em;
    }

    .warpper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tab {
        cursor: pointer;
        padding: 10px 20px;
        margin: 0px 2px;
        display: inline-block;
        border-radius: 3px 3px 0px 0px;
        width: 20%;
    }

    .tabs {
        width: 100%;
        background-color: #e9ecef;
    }

    .panels {
        background: #a2ccf3;
        min-height: 200px;
        width: 100%;
        max-width: 500px;
        border-radius: 3px;
        overflow: hidden;
    }

    .panel {
        display: none;
    }

    .panel-title {
        font-size: 1.5em;
        font-weight: bold;
    }

    .radio {
        display: none;
    }

    #sol:checked ~ .panels #sol-panel,
    #regn:checked ~ .panels #regn-panel,
    #vind:checked ~ .panels #vind-panel {
        display: block;
    }

    #sol:checked ~ .tabs #sol-tab,
    #regn:checked ~ .tabs #regn-tab,
    #vind:checked ~ .tabs #vind-tab {
        background: #a2ccf3;
        color: black;
    }
}

@media only screen and (min-width: 601px) {
    .desktop {
        display: block;
    }

    .mobile {
        display: none;
    }
}

.main-topten {
    text-align: left;
    margin-left: 8%;
    margin-right: 8%;
}

.boards {
    display: flex;
    flex-direction: row;
    margin-bottom: 2em;
}

.inner {
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 15px;
    padding-top: 15px;
    width: 33%;
    font-weight: bold;
    font-size: 18px;
    line-height: 3em;
    background-color: #daeafb;
    margin-right: 2em;
}

@media only screen and (max-width: 1200px) {
    .inner {
        width: 60%;
    }
    .boards {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
    }
}

@media only screen and (max-width: 700px) {
    .inner {
        width: 70%;
        margin-right: 0;
    }
    .boards {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
    }
}
</style>
