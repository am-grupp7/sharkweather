<template>
    <div class="main-precipforecast">
        <div class="innertop">
            <nav>Start > Nederbördsprognos</nav>
            <div class="find-location">här kan man söka efter städer</div>
        </div>
        <div class="innerbottom">
            <div class="info">
                <div class="header">
                    <h3>Nederbörd</h3>
                    <p>
                        Här finns prognoser för nederbörd. <br />
                        Välj en plats och dag som du vill se prognosen för.
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
</template>
<script>
import PrecipGraph from '../components/PrecipGraph.vue'

export default {
    name: 'PrecipForecast',
    components: {
        PrecipGraph,
    },
}
</script>

<style scoped>
div {
    border: 1px solid black;
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
}
nav {
    margin-right: 57%;
    margin-top: 1.5em;
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
    background-color: #daeafb;
}
.graphcontent {
    width: 70%;
}
p {
    padding: 0.25em;
}
</style>
