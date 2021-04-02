<template>
  <div><p>Hejhej</p></div>
</template>

<style scoped></style>

<script>
//import ApexCharts from "apexcharts";

export default {
  name: "TempGraph",
  props: {},
  data() {
    return {
      tempForcastDataList: [],
    };
  },
  methods: {
    async fetchTempsFromCoordinates() {
      const response = await fetch(
        `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16/lat/58/data.json`,
        { headers: { Accept: "application/json" } }
      );
      const json = await response.json();

      for (const timeSeries of json.timeSeries) {
        let tempForecastData = {
          validTime: timeSeries.validTime,
          temperature: timeSeries.parameters[0].values,
        };
        this.tempForcastDataList.push(tempForecastData);
      }
      console.log("Here is the list:", this.tempForcastDataList);
    },
  },

  created() {
    this.fetchTempsFromCoordinates();
  },
};
</script>
