<template>
    <div class="main-tempforecast">
        <div class="innertop">
            <nav class="topbar">This is the topbar</nav>

            <div class="findlocation">Här kan man söka efter städer!</div>
        </div>
        <div class="innerbottom">
            <div class="infobox">
                <div class="headline">
                    <h2>Temperatur</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Placeat quae quo reiciendis quas aspernatur at,
                        eligendi ipsum, delectus fugit, odit earum? Vero nulla
                        tenetur vitae praesentium expedita odit recusandae
                        quasi.
                    </p>
                </div>

                <div class="breadText">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate quae praesentium consequatur ipsa dolor
                        laboriosam! Deleniti iure quisquam soluta ut fugit eaque
                        facere mollitia illum inventore, cum dolorem maxime
                        necessitatibus.
                    </p>
                </div>
            </div>

            <div class="graphcontent">
                <temp-graph></temp-graph>
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
        <div class="header">
            <h3>Temperatur - fyradagarsprognos</h3>
            <p>
                Prognosen visar förväntad temperatur i grader <br />
                för kommande fyra dagar.
            </p>
        </div>
        <div class="button-div">
            <input class="button" type="button" value="Göteborg" />
        </div>
        <div class="graph-today">
            <temp-graph></temp-graph>
        </div>
        <div class="graph-tomorow"></div>
    </div>
</template>

<script>
import TempGraph from '../components/TempGraph.vue'
export default {
    name: 'TempForecast',
    components: {
        TempGraph,
    },
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
    .main-tempforecast {
        display: none;
    }

    .mobile {
        display: flex;
        flex-direction: column;
        background-color: #b0d2ee;
        font-family: Tahoma;
    }

    .header {
        padding-top: 3em;
    }
    .header h3 {
        text-align: center;
        font-weight: 600;
    }
    .header p {
        text-align: left;
        font-size: 18px;
        margin-left: 4em;
    }

    .button-div {
        align-self: center;
        margin: 1em;
    }
    .button {
        background-color: #e7f1fa;
        padding: 12px 50px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 7px;
        border: 1px solid grey;
    }

    .graph-today {
        background-color: white;
        padding-top: 1em;
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

@media screen and (min-width: 768px) {
    .mobile {
        display: none;
    }

    .main-tempforecast {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 7fr;
    }

    .innertop {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .topbar {
        margin-right: 57%;
        margin-top: 1.5em;
    }

    .infobox,
    .topbar,
    .graphcontent {
        border: 2px solid black;
    }

    .innerbottom {
        display: flex;
        flex-direction: row;
        padding: 1em;
    }

    .findlocation {
        padding-top: 1.5em;
    }

    .infobox {
        width: 30%;
        margin-right: 1em;
        background-color: #daeafb;
    }

    .graphcontent {
        width: 70%;
    }
}
</style>
