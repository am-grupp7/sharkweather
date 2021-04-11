<template>
    <div class="desktop">
        <div class="main-topten">
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
                        :length="10"
                    ></top-ten-board>
                </div>
                <div class="inner">
                    <top-ten-board
                        api-call="7"
                        heading="Nederbörd"
                        count="1"
                        unit="mm"
                        :length="10"
                    ></top-ten-board>
                </div>
                <div class="inner">
                    <top-ten-board
                        api-call="4"
                        heading="Vindstyrka"
                        count="1"
                        unit="m/s"
                        :length="10"
                    ></top-ten-board>
                </div>
            </div>
        </div>
    </div>

    <div class="mobile">
        <div class="menu">
            <label for="show-menu" class="show-menu">
                <img
                    :src="require('../assets//icons/Hamburgemeny.svg')"
                    class="menuimage"
                />
            </label>
        </div>
        <div>
            <input type="checkbox" id="show-menu" role="button" />
            <ul id="menu">
                <li><router-link to="/">Start</router-link></li>
                <li><router-link to="/TopTen">Topp 10-lista</router-link></li>
                <li>
                    <router-link to="/TempForecast"
                        >Temperaturprognos</router-link
                    >
                </li>
                <li>
                    <router-link to="/PrecipForecast"
                        >Nederbördsprognos</router-link
                    >
                </li>
                <li><router-link to="/About">Om oss</router-link></li>
            </ul>
        </div>
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
                        :length="10"
                    ></top-ten-board>
                </div>
                <div class="panel" id="regn-panel">
                    <top-ten-board
                        api-call="7"
                        heading="Nederbörd"
                        count="1"
                        unit="mm"
                        :length="10"
                    ></top-ten-board>
                </div>
                <div class="panel" id="vind-panel">
                    <top-ten-board
                        api-call="4"
                        heading="Vindstyrka"
                        count="1"
                        unit="m/s"
                        :length="10"
                    ></top-ten-board>
                </div>
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
        background-color: #b0d2ee;
        font-family: 'Tahoma', Geneva, Verdana, sans-serif;
    }

    h4 {
        font-size: 23px;
    }

    .images {
        width: 25%;
    }

    .main-topten {
        text-align: center;
        margin-left: 8%;
        margin-right: 8%;
        padding-top: 4em;
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

    .menuimage {
        display: inline-block;
        width: 15%;
        margin-left: 1em;
    }

    .menu {
        position: absolute;
        width: 300px;
        margin: -100px 0 0 -50px;
        padding: 50px;
        padding-top: 105px;
        list-style-type: none;
    }

    ul {
        list-style-type: none;
        margin-top: 70px;
        padding: 0;
        display: none;
        position: absolute;
        z-index: 1;
    }

    li a {
        padding-top: 2em;
        display: block;
        min-width: 280px;
        height: 100px;
        text-align: center;
        font-family: Tahoma;
        color: black;
        background-color: #3191eb;
        text-decoration: none;
        text-align: left;
        padding-left: 1em;
    }

    li:hover a {
        color: white;
        font-weight: bold;
    }

    .show-menu {
        font-family: Tahoma;
        text-decoration: none;
        color: #fff;
        padding: 10px 0;
        display: block;
    }
    input[type='text'] {
        width: 100%;
        padding: 15px 40px;
        font-size: 16px;
        box-sizing: border-box;
        border: 2px solid lightgray;
        border-radius: 3px;
    }

    input[type='checkbox'] {
        display: none;
    }

    input[type='checkbox']:checked ~ #menu {
        display: block;
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
