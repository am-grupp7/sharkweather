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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            quae quo reiciendis quas aspernatur at, eligendi ipsum, delectus
            fugit, odit earum? Vero nulla tenetur vitae praesentium expedita
            odit recusandae quasi.
          </p>
        </div>

        <div class="breadText">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quae praesentium consequatur ipsa dolor laboriosam! Deleniti iure
            quisquam soluta ut fugit eaque facere mollitia illum inventore, cum
            dolorem maxime necessitatibus.
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
import TempGraph from "../components/TempGraph.vue";
export default {
  name: "TempForecast",
  components: {
    TempGraph,
  },
};
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
