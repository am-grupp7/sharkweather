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

        <div class="top-tre">
            <div class="top-tre-heading">
                <h3>Dagens topp 3</h3>
            </div>
            <div class="top-inner1">
                <top-ten-board
                    api-call="1"
                    heading="Temperatur"
                    plus="+"
                    unit="°c"
                    :length="3"
                ></top-ten-board>
            </div>
            <div class="top-inner2">
                <top-ten-board
                    api-call="7"
                    heading="Nederbörd"
                    unit="mm"
                    :length="3"
                ></top-ten-board>
            </div>
            <div class="top-inner3">
                <top-ten-board
                    api-call="4"
                    heading="Vindstyrka"
                    unit="m/s"
                    :length="3"
                ></top-ten-board>
            </div>
        </div>

        <div class="find-location">
            <div class="serchbar">
                <input
                    class="search"
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
                    class="button"
                />
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
                <router-link to="/PrecipForecast">
                    <img
                        :src="require('../assets//icons/Regn.svg')"
                        class="images"
                /></router-link>

                <p>Nederbördsprognos</p>
            </div>
            <div class="sol">
                <router-link to="/TempForecast">
                    <img
                        :src="require('../assets//icons/Sol.svg')"
                        class="images"
                /></router-link>

                <p>Temperatur</p>
            </div>
            <div class="lista">
                <router-link to="/TopTen">
                    <img
                        :src="require('../assets//icons/Lista.svg')"
                        class="images"
                /></router-link>

                <p>Topp 10-lista</p>
            </div>
            <div class="uv">
                <router-link to="/About">
                    <img
                        class="images"
                        :src="require('../assets//icons/About.svg')"
                /></router-link>

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
@media only screen and (min-width: 760px) {
    .home {
        display: block;
    }

    .mobile {
        display: none;
    }

    .home {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;
        grid-template-rows: auto;
        grid-template-areas:
            'header header header'
            'main main main'
            '. sidebar .';
    }

    .wilkommen {
        grid-area: header;
        background-image: url(../assets/clouds.png);
        height: 100%;
        margin-bottom: 5em;
        background-color: #daeafb;
    }
    .wilkommen h1 {
        margin-top: 3em;
    }

    .top-tre {
        grid-area: main;
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-template-rows: auto;
        grid-template-areas:
            'head head head'
            'left center right';
        margin-left: 0em;
    }

    .top-tre-heading {
        grid-area: head;
    }

    .top-tre-heading h3 {
        font-size: 24px;
        margin-bottom: 0px;
    }

    .top-inner1 {
        grid-area: left;
        background-color: #daeafb;
        font-size: 16px;
    }
    .top-inner2 {
        grid-area: center;
        background-color: #daeafb;
        font-size: 16px;
    }
    .top-inner3 {
        grid-area: right;
        background-color: #daeafb;
        font-size: 16px;
    }

    .find-location {
        grid-area: sidebar;
        background-color: #daeafb;
        padding: 2em;
        margin: 1em 0em 0em 0em;
    }

    .find-location p {
        margin: 12px;
    }

    .search {
        background: url(../assets/icons/Sök.svg) no-repeat 5px 10px;
        background-size: 10%;
        background-color: white;
        width: 100%;
        padding: 10px 8px;
        font-size: 16px;
        box-sizing: border-box;
        border: 2px solid lightgray;
        border-radius: 4px;
    }

    .button {
        background-color: white;
        border: 1px solid darkblue;
        color: darkblue;
        background-color: white;
        padding: 12px;
        text-align: center;
        display: inline-block;
        font-size: 14px;
        width: 100%;
        border-radius: 4px;
    }
}

@media only screen and (min-width: 1000px) {
    .home {
        display: block;
    }

    .mobile {
        display: none;
    }

    .home {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;
        grid-template-rows: auto;
        grid-template-areas:
            'header header header'
            'main main sidebar';
    }

    .wilkommen {
        grid-area: header;
        background-image: url(../assets/clouds.png);
        height: 100%;
        margin-bottom: 5em;
        background-color: #daeafb;
    }
    .wilkommen h1 {
        margin-top: 3em;
    }

    .top-tre {
        grid-area: main;
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-template-rows: auto;
        grid-template-areas:
            'head head head'
            'left center right';
        margin-left: 0.6em;
    }

    .top-tre-heading {
        grid-area: head;
    }

    .top-tre-heading h3 {
        font-size: 24px;
        margin-bottom: 0px;
    }

    .top-inner1 {
        grid-area: left;
        background-color: #daeafb;
        font-size: 16px;
    }
    .top-inner2 {
        grid-area: center;
        background-color: #daeafb;
        font-size: 16px;
    }
    .top-inner3 {
        grid-area: right;
        background-color: #daeafb;
        font-size: 16px;
    }

    .find-location {
        grid-area: sidebar;
        background-color: #daeafb;
        padding: 3em;
        margin: 3em 1em 0em 1em;
    }

    .find-location p {
        margin: 12px;
    }

    .search {
        background: url(../assets/icons/Sök.svg) no-repeat 5px 10px;
        background-size: 10%;
        background-color: white;
        width: 100%;
        padding: 10px 8px;
        font-size: 16px;
        box-sizing: border-box;
        border: 2px solid lightgray;
        border-radius: 4px;
    }

    .button {
        background-color: white;
        border: 1px solid darkblue;
        color: darkblue;
        background-color: white;
        padding: 12px;
        text-align: center;
        display: inline-block;
        font-size: 14px;
        width: 100%;
        border-radius: 4px;
    }
}

@media only screen and (min-width: 1560px) {
    .home {
        display: block;
    }

    .mobile {
        display: none;
    }

    .home {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;
        grid-template-rows: auto;
        grid-template-areas:
            'header header header'
            'main main sidebar';
    }

    .wilkommen {
        grid-area: header;
        background-image: url(../assets/clouds.png);
        height: 100%;
        margin-bottom: 5em;
        background-color: #daeafb;
    }
    .wilkommen h1 {
        margin-top: 3em;
    }

    .top-tre {
        grid-area: main;
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-template-rows: auto;
        grid-template-areas:
            'head head head'
            'left center right';
        margin-left: 1em;
    }

    .top-tre-heading {
        grid-area: head;
    }

    .top-tre-heading h3 {
        font-size: 24px;
        margin-bottom: 0px;
    }

    .top-inner1 {
        grid-area: left;
        background-color: #daeafb;
        font-size: 18px;
    }
    .top-inner2 {
        grid-area: center;
        background-color: #daeafb;
        font-size: 18px;
    }
    .top-inner3 {
        grid-area: right;
        background-color: #daeafb;
        font-size: 18px;
    }

    .find-location {
        grid-area: sidebar;
        background-color: #daeafb;
        padding: 3em;
        margin: 3em 3em 0em 3em;
    }

    .find-location p {
        margin: 12px;
    }

    .search {
        background: url(../assets/icons/Sök.svg) no-repeat 5px 10px;
        background-size: 8%;
        background-color: white;
        width: 70%;
        padding: 12px 15px;
        font-size: 16px;
        box-sizing: border-box;
        border: 2px solid lightgray;
        border-radius: 4px;
    }

    .button {
        background-color: white;
        border: 1px solid darkblue;
        color: darkblue;
        background-color: white;
        padding: 12px;
        text-align: center;
        display: inline-block;
        font-size: 14px;
        width: 70%;
        border-radius: 4px;
    }
}

@media only screen and (max-width: 759px) {
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
        padding-bottom: 5em;
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
        background-color: white;
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
