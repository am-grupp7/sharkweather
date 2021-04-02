<template>
    <div class="main-precipforecast">
        <div class="innertop">
            <nav>Start > Nederbördsprognos</nav>
            <div class="find-location">här kan man söka efter städer</div>
        </div>
        <div class="innerbottom">
            <div class="info">
                <div class="header">
                    <h2>Nederbörd</h2>
                    <p>bla bla bla</p>
                </div>
                <div class="breadtext">
                    <h3>Om nederbörd</h3>
                    <p>bla bla bla</p>
                    <p>bla bla bla</p>
                    <p>bla bla bla</p>
                    <p>bla bla bla</p>
                    <p>bla bla bla</p>
                    <p>bla bla bla</p>
                    <p>bla bla bla</p>
                    <p>bla bla bla</p>
                    <p>bla bla bla</p>
                    <p>bla bla bla</p>
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
</style>