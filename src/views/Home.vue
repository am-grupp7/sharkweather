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
        <div class="logo">
            <p>Logo Here</p>
        </div>
        <h1 class="h1-mobile">Välkommen!</h1>

        <div class="find-location">
            <div class="search-box">
                <input
                    class="search-img"
                    type="text"
                    name="serch-location"
                    placeholder="Sök efter en plats"
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

        <div class="image-nav">
            <div class="regn">
                <img
                    :src="require('../assets//icons/Regn.svg')"
                    class="images"
                />

                <p>Nederbörds prognos</p>
            </div>
            <div class="sol">
                <img
                    :src="require('../assets//icons/Sol.svg')"
                    class="images"
                />

                <p>Soltimmar</p>
            </div>
            <div class="lista">
                <img
                    :src="require('../assets//icons/Lista.svg')"
                    class="images"
                />

                <p>Topp 10-lista</p>
            </div>
            <div class="uv">
                <img
                    class="images"
                    :src="require('../assets//icons/About.svg')"
                />

                <p>Om oss</p>
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
        width: 40%;
    }

    .mobile {
        display: block;
        background-color: #b0d2ee;
        width: 100%;
    }

    .logo {
        padding-top: 8em;
        text-align: center;
    }
    .h1-mobile {
        text-align: center;
        font-family: 'Tahoma', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 3em;
        font-weight: 100;
    }

    .search-img {
        background: url(../assets/icons/Sök.svg) no-repeat scroll 8px 11px;
        background-size: 10%;
        background-color: white;
    }

    h5 {
        margin: 1em;
        text-align: center;
        color: gray;
    }
    .find-location {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-top: 3em;
        margin-bottom: 4em;
        margin-left: auto;
        margin-right: auto;
    }
    .button {
        background-color: #white;
        border: 1px solid darkblue;
        color: darkblue;
        background-color: white;
        padding: 15px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        width: 100%;
        border-radius: 3px;
    }

    .image-nav {
        display: grid;
        grid-template-columns: 250px 250px;
        justify-content: center;
    }
    .regn {
        text-align: center;
        margin: 10px;
    }
    .sol {
        text-align: center;
        margin: 10px;
    }
    .lista {
        text-align: center;
        margin: 1em;
    }
    .uv {
        text-align: center;
        margin: 1em;
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

@media only screen and (max-width: 490px) {
    .home {
        display: none;
    }

    .images {
        width: 30%;
    }

    .mobile {
        display: block;
        background-color: #daeafb;
        width: 100%;
    }

    .logo {
        padding-top: 4em;
    }

    .h1-mobile {
        text-align: center;
        font-family: 'Tahoma', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 2em;
        font-weight: 100;
    }
    .search-img {
        background: url(../assets/icons/Sök.svg) no-repeat scroll 8px 11px;
        background-size: 10%;
        background-color: white;
    }
    .button {
        background-color: #white;
        border: 1px solid darkblue;
        color: darkblue;
        background-color: white;
        padding: 12px;
        text-align: center;
        display: inline-block;
        font-size: 14px;
        width: 100%;
        border-radius: 3px;
    }

    .find-location {
        display: flex;
        flex-direction: column;
        width: 60%;
        margin-top: 3em;
        margin-bottom: 1em;
        margin-left: auto;
        margin-right: auto;
    }

    h5 {
        margin: 10px;
        text-align: center;
        color: gray;
    }

    .image-nav {
        display: grid;
        grid-template-columns: 180px 180px;
        justify-content: center;
        margin-top: 2em;
    }
    .regn {
        text-align: center;
    }
    .sol {
        text-align: center;
    }
    .lista {
        text-align: center;
    }
    .uv {
        text-align: center;
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
        padding: 12px 40px;
        font-size: 14px;
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
</style>
