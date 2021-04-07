<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png" />-->
        <div class="wilkommen">
            <h1>Välkommen!</h1>
            <p>
                För att snabbare komma igång ber vi dig att välja din <br />
                plats, den kommer vara default för informationen som <br />
                visas, men du kan även ändra den senare.
            </p>
        </div>
        <div class="lower-row">
            <div class="inner">
                <h3>Dagens topp 3</h3>
                <div class="top-tre">
                    <div class="top-inner">
                        <top-ten-board
                            api-call="1"
                            heading="Temperatur"
                            plus="+"
                            unit="°c"
                            :length="3"
                        ></top-ten-board>
                    </div>
                    <div class="top-inner">
                        <top-ten-board
                            api-call="7"
                            heading="Nederbörd"
                            unit="mm"
                            :length="3"
                        ></top-ten-board>
                    </div>
                    <div class="top-inner">
                        <top-ten-board
                            api-call="4"
                            heading="Vindstyrka"
                            unit="m/s"
                            :length="3"
                        ></top-ten-board>
                    </div>
                </div>
            </div>
            <div class="inner">
                <div class="find-location">
                    <div class="serchbar">
                        <input
                            id="serch"
                            type="text"
                            name="serch-location"
                            placeholder="     Sök efter en plats"
                        />
                    </div>
                    <p>eller...</p>
                    <div class="your-location">
                        <input
                            type="button"
                            value="Använd din nuvarande plats"
                        />
                    </div>
                </div>
            </div>
            <div class="inner">
                <div class="umbrella">
                    <img
                        id="umbrella"
                        alt="Umbrella"
                        src="../assets/icons/Regn.svg"
                        width="50"
                        height="50"
                    />
                    <h2>Paraply?</h2>
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
                    id="menuimage"
                />
            </label>
        </div>

        <input type="checkbox" id="show-menu" role="button" />
        <ul id="menu">
            <li><router-link to="/">Start</router-link></li>
            <li><router-link to="/TopTen">Topp 10-lista</router-link></li>
            <li>
                <router-link to="/TempForecast">Temperaturprognos</router-link>
            </li>
            <li>
                <router-link to="/PrecipForecast"
                    >Nederbördsprognos</router-link
                >
            </li>
            <li><router-link to="/About">Om oss</router-link></li>
        </ul>

        <div class="logo">
            <img :src="require('../assets//icons/Sol.svg')" class="images" />
        </div>
        <h1 class="h1-mobile">Välkommen!</h1>

        <div class="find-location">
            <div class="search-box">
                <input
                    id="serch"
                    type="text"
                    name="serch-location"
                    placeholder="&nbsp; &nbsp; &nbsp; Sök efter en plats"
                />
            </div>
            <div class="eller">
                <h5>eller...</h5>
            </div>
            <div class="search-button">
                <input
                    type="button"
                    value="Använd din nuvarande plats"
                    class="button"
                />
            </div>
        </div>

        <div class="main-buttons">
            <div class="regn">
                <img
                    :src="require('../assets//icons/Regn.svg')"
                    class="images"
                />
                <br />
                <h5>Nederbörds prognos</h5>
            </div>
            <div class="sol">
                <img
                    :src="require('../assets//icons/Sol.svg')"
                    class="images"
                />
                <br />
                <h5>Soltimmar</h5>
            </div>
            <div class="lista">
                <img
                    :src="require('../assets//icons/Lista.svg')"
                    class="images"
                />
                <br />
                <h5>Topp 10-lista</h5>
            </div>
            <div class="uv">
                <img class="images" :src="require('../assets//icons/UV.svg')" />
                <br />
                <h5>UV Index prognos</h5>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import TopTenBoard from '../components/TopTenBoard.vue'

export default {
    name: 'Home',
    components: {
        TopTenBoard,
    },
}
</script>

<style scoped>
@media only screen and (min-width: 601px) {
    .home {
        display: block;
    }

    .mobile {
        display: none;
    }

    .home {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 50% 50%;
    }

    .wilkommen {
        background-color: #daeafb;
    }

    .find-location {
        background-color: #daeafb;
        padding: 1em;
    }

    .lower-row {
        display: flex;
        flex-direction: row;
        width: auto;
    }

    #serch {
        background: url(../assets/icons/Sök.svg) no-repeat scroll 1px 1px;
        background-size: 9%;
        background-color: white;
        display: block;
    }

    .umbrella {
        display: flex;
        padding: 1em;
    }

    #umbrella {
        margin-right: 1em;
    }

    .top-tre {
        display: flex;
        flex-direction: row;
    }

    .top-inner {
        size: 50%;
    }
}

@media only screen and (max-width: 600px) {
    .home {
        display: none;
    }

    .images {
        width: 20%;
    }

    .mobile {
        display: block;
        background-color: #daeafb;
    }

    .logo {
        padding-top: 5em;
        margin-left: 10em;
    }

    #serch {
        background: url(../assets/icons/Sök.svg) no-repeat scroll 1px 1px;
        background-size: 9%;
        background-color: white;
    }

    .find-location {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .eller {
        text-align: center;
    }

    .w-50 {
        width: 50%;
        display: inline-block;
    }

    .row {
        padding: 10px;
    }

    .menuimage {
        display: inline-block;
        width: 15%;
    }

    .menu {
        position: absolute;
        width: 300px;
        margin: -100px 0 0 -50px;
        padding: 50px;
        padding-top: 105px;
        list-style-type: none;
    }

    .main-buttons {
        display: flex;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .button {
        background-color: #white;
        border: none;
        color: blue;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 15px;
        margin-bottom: 4em;
        width: 100%;
    }

    .h1-mobile {
        text-align: center;
        font-family: Tahoma, sans-serif;
        font-size: 3em;
        font-weight: 100;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        position: absolute;
    }

    li {
        padding: 10px 0;
    }

    li a {
        display: block;
        min-width: 140px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #fff;
        background-color: #4cb8e4;
        text-decoration: none;
    }

    li:hover a {
        background: #19c589;
    }

    li:hover ul a {
        background: #2da3d4;
        color: #2f3036;
        height: 40px;
        line-height: 40px;
    }

    li:hover ul a:hover {
        background: #2da3d4;
        color: #fff;
    }

    li ul {
        display: none;
    }

    li ul li {
        display: block;
        float: none;
    }

    li ul li a {
        width: auto;
        min-width: 100px;
        padding: 0 20px;
    }

    ul li a:hover + .hidden,
    .hidden:hover {
        display: block;
    }

    .show-menu {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        text-decoration: none;
        color: #fff;
        padding: 10px 0;
        display: none;
    }
    input[type='text'] {
        width: 100%;
        padding: 15px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }

    input[type='checkbox'] {
        display: none;
    }

    input[type='checkbox']:checked ~ #menu {
        display: block;
    }
    /*Responsive Styles*/
    @media screen and (max-width: 760px) {
        /*Make dropdown links appear inline*/
        ul {
            position: static;
            display: none;
        }
        /*Create vertical spacing*/
        li {
            margin-bottom: 1px;
        }
        /*Make all menu links full width*/
        ul li,
        li a {
            width: 100%;
        }
        /*Display 'show menu' link*/
        .show-menu {
            display: block;
        }
    }
}
</style>
