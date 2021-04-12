<template>
    <div class="main-tempforecast">
        <div class="innertop">
            <div class="findlocation">
                <find-location @geo="findGeoLocation"></find-location>
            </div>
        </div>
        <div class="innerbottom">
            <div class="infobox">
                <div class="header">
                    <h3>Temperaturer</h3>
                    <p>
                        Här finns prognoser för temperaturer. <br />
                        Välj en dag som du vill se prognosen för.
                        Prognoserna kommer från SHMIs öppna api.
                    </p>
                </div>

                <div class="breadText">
                    <p>
                        Lufttemperatur är ett mått på luftmolekylernas
                        genomsnittliga rörelseenergi. Denna energi härstammar
                        primärt från solstrålningen. Nära ekvatorn träffar
                        solstrålarna markytan nästan vinkelrätt mitt på dagen,
                        medan de träffar markytan med sned vinkel närmare polen.
                        Varje ytenhet vid polerna får därför ta emot mindre
                        solenergi jämfört med närmare ekvatorn
                    </p>
                    <p>
                        Områden med mycket låga temperaturer är därför jordens
                        poler. Sydpolen är kallare än Nordpolen. Det beror på
                        att Sydpolen är belägen på drygt 2 800 meters höjd över
                        havet i det inre av en kontinent, medan Nordpolen är
                        belägen på ett istäckt hav. Medeltemperaturen för den
                        kallaste månaden är cirka -33 grader vid Nordpolen och
                        -60 vid Sydpolen. Medeltemperaturen för den varmaste
                        månaden är nära noll vid Nordpolen och -28 vid Sydpolen.
                    </p>
                    <p>
                        Medeltemperaturen för sydligaste Sverige är omkring 0°C
                        för den kallaste månaden och 16-17°C för den varmaste. I
                        norra Norrlands inland är det cirka -15°C under den
                        kallaste månaden och 12-13°C under den varmaste.
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
            <h3>Temperatur - tredagarsprognos</h3>
            <p>
                Prognosen visar förväntad temperatur i grader <br />
                för kommande tre dagar.
            </p>
        </div>
        
        <div class="graph-today">
            <temp-graph></temp-graph>
        </div>
    </div>
</template>

<script>
import TempGraph from '../components/TempGraph.vue'
import FindLocation from '../components/FindLocation.vue'
export default {
    name: 'TempForecast',
    components: {
        TempGraph,
        FindLocation,
    },
}
</script>

<style scoped>
@media screen and (max-width: 1200px) {
    .infobox {
        display: none;
    }
}
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
        margin: 1em;
    }

    p {
        font-size: 18px;
    }

    .topbar {
        margin-right: 57%;
        margin-top: 1.5em;
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
        background-color: #d0e8fb;
        padding: 1.5em;
        text-align: left;
    }

    p {
        font-size: 18px;
    }

    .graphcontent {
        width: 70%;
        padding: 1em;
    }
}
</style>
