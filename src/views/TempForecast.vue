<template>
    <div class="main-tempforecast">
        <div class="innertop">
            <nav class="topbar">This is the topbar</nav>

            <div class="findlocation">Här kan man söka efter städer!</div>
        </div>
        <div class="innerbottom">
            <div class="infobox">
                <div class="header">
                    <h3>Temperaturer</h3>
                    <p>
                        Här finns prognoser för temperaturer. <br />
                        Välj en plats och dag som du vill se prognosen för.
                        Prognoserna kommer från SHMIs öppna api.
                    </p>
                </div>

                <div class="breadText">
                    <p>
                       Lufttemperatur är ett mått på luftmolekylernas genomsnittliga 
                       rörelseenergi. Denna energi härstammar primärt från solstrålningen. 
                       Nära ekvatorn träffar solstrålarna markytan nästan vinkelrätt mitt 
                       på dagen, medan de träffar markytan med sned vinkel närmare polen. 
                       Varje ytenhet vid polerna får därför ta emot mindre solenergi jämfört 
                       med närmare ekvatorn 
                    </p>
                    <p>
                      Områden med mycket låga temperaturer är därför jordens poler. Sydpolen är 
                      kallare än Nordpolen. Det beror på att Sydpolen är belägen på drygt 2 800 
                      meters höjd över havet i det inre av en kontinent, medan Nordpolen är belägen 
                      på ett istäckt hav. Medeltemperaturen för den kallaste månaden är cirka -33 
                      grader vid Nordpolen och -60 vid Sydpolen. Medeltemperaturen för den varmaste 
                      månaden är nära noll vid Nordpolen och -28 vid Sydpolen.
                    </p>
                    <p>
                      Medeltemperaturen för sydligaste Sverige är omkring 0°C för den kallaste månaden 
                      och 16-17°C för den varmaste. I norra Norrlands inland är det cirka -15°C under 
                      den kallaste månaden och 12-13°C under den varmaste.
                    </p>
                </div>
            </div>

            <div class="graphcontent">
                <temp-graph></temp-graph>
            </div>
        </div>
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
</style>
