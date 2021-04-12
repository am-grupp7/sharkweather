<template>
    <div class="main-precipforecast">
        <div class="innertop">
            <div class="find-location">
                <find-location @geo="findGeoLocation"></find-location>
            </div>
        </div>
        <div class="innerbottom">
            <div class="info">
                <div class="header">
                    <h3>Nederbörd</h3>
                    <p>
                        Här finns prognoser för nederbörd. <br />
                        Välj en dag som du vill se prognosen för.
                        Prognoserna kommer från SHMIs öppna api.
                    </p>
                </div>
                <div class="breadtext">
                    <h5>Om nederbörd</h5>
                    <p>
                        Vilken form nederbörden har när den når marken beror på
                        vilken temperatur och fuktighet atmosfären har. Om
                        snöflingorna hela tiden faller genom luftlager med
                        minusgrader är det snö som når marken.
                    </p>
                    <p>
                        Om snöflingorna faller genom luftlager med plusgrader
                        kan snöflingorna hinna smälta till regndroppar innan de
                        når marken. Om luften är tillräckligt torr kan dock
                        snöfall förekomma vid flera plusgrader.
                    </p>
                    <p>
                        Om snöflingorna bara delvis hunnit smälta till
                        regndroppar kallas det snöblandat regn.
                    </p>
                    <p>
                        Om snöflingorna hunnit smälta till regndroppar och sedan
                        faller genom ett kallt luftlager närmast marken kan
                        underkylt regn bildas. Alternativt kan regndropparna
                        frysa till iskorn.
                    </p>
                    <p>
                        Nederbördspartiklar som upprepade gånger rör sig upp och
                        ner genom lager med med underkylda molndroppar kan växa
                        till hagelkorn.
                    </p>
                </div>
            </div>
            <div class="graphcontent">
                <precip-graph></precip-graph>
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
            <h3>Nederbörd - tredagarsprognos</h3>
            <p>
                Prognosen visar förväntad nederbörd i mm per <br />
                för kommande tre dagar.
            </p>
        </div>
        
        <div class="graph-today">
            <precip-graph></precip-graph>
        </div>
        <div class="graph-tomorow"></div>
    </div>
</template>
<script>
import PrecipGraph from '../components/PrecipGraph.vue'
import FindLocation from '../components/FindLocation.vue'

export default {
    name: 'PrecipForecast',
    components: {
        PrecipGraph,
        FindLocation,
    },
}
</script>

<style scoped>
@media screen and (max-width: 1200px) {
    .info {
        display: none;
    }
}
@media screen and (max-width: 767px) {
    .main-precipforecast {
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
@media screen and (min-width: 768px) {
    .mobile {
        display: none;
    }

    .main-precipforecast {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 7fr;
    }
    .innertop {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 1em;
    }
    
    .find-location {
        padding-top: 1.5em;
    }

    .innerbottom {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .info {
        width: 30%;
        background-color: #d0e8fb;
        padding: 1.5em;
        text-align: left;
        margin: 1em;
    }
    .graphcontent {
        width: 70%;
        padding: 1em;
    }
    p {
        padding: 0.25em;
    }
    
}
</style>
