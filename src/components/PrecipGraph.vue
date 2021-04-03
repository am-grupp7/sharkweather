<template>
  <div>
    <div class="dayselector">Måndag Tisdag Onsdag...</div>
    <div class="city">Göteborg</div>
    <div class="chart">
      <apexchart
        type="bar"
        height="400"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>
<style scoped></style>

<script>
import { format } from "date-fns";
export default {
  name: "PrecipGraph",

  data() {
    return {
      precipListValues: [],
      precipListTimes: [],

      series: [],
      chartOptions: {
        chart: {
          type: "bar",
          height: 400,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "100%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },

        xaxis: {
          categories: [],
        },
      },
    };
  },
  methods: {
    async fetchPrecipListValue() {
      const resp = await fetch(
        `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.97/lat/57.7/data.json`,
        { headers: { Accept: "application/json" } }
      );
      const json = await resp.json();

      for (const timeSeries of json.timeSeries) {
        let precip = Number(timeSeries.parameters[16].values);

        let time = timeSeries.validTime;

        this.precipListValues.push(precip);
        this.precipListTimes.push(time);
      }

      this.precipListValues.length = 24;
      this.precipListTimes.length = 24;
      console.log(this.precipListValues);
      console.log(this.precipListTimes);

      this.series = [
        {
          name: "Nederbörd",
          data: this.precipListValues,
        },
      ];
      this.chartOptions.xaxis.categories.length = 0;
      for (let val of this.precipListTimes) {
        let formattedDate = format(new Date(val), "HH");
        this.chartOptions.xaxis.categories.push(formattedDate);
      }
    },
  },
  created() {
    this.fetchPrecipListValue();
  },
};
</script>
