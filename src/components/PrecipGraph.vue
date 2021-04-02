<template>
    <div>
        <div class="dayselector">Måndag Tisdag Onsdag...</div>
        <div class="city">Göteborg</div>
        <div class="chart">
            <apexchart type="bar" height="400" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>
<style scoped>
</style>

<script>
//import VueApexCharts from 'vue3-apexcharts';

export default {
    name: 'PrecipGraph',

    data() {
        return {
            precipListValues: [],
            precipListTimes: [],
            series: [{
                name: 'Nederbörd',
                data: this.precipListValues,
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 400
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '100%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },

                xaxis: {
                    categories: [1, 2, 3, 4, 5],
                },

            },
        }

    },
    methods: {
        async fetchPrecipListValue() {
            const resp = await fetch(
                `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16/lat/58/data.json`,
                { headers: { Accept: 'application/json' } }
            )
            const json = await resp.json()
            //console.log(json)
            
            for (const timeSeries of json.timeSeries) {
                let precipListValue = {
                    
                    precip: Number(timeSeries.parameters[16].values),
                }
                let precipListTime = {
                    time: timeSeries.validTime,
                }
                this.precipListValues.push(precipListValue)
                this.precipListTimes.push(precipListTime)
                //this.precipList.length = 24
            }
                console.log(this.precipList)
        },
    },
    created() {
        this.fetchPrecipListValue()
    },
}
</script>

