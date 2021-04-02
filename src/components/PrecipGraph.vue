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
<style scoped>
</style>

<script>
export default {
    name: 'PrecipGraph',

    data() {
        return {
            precipListValues: [],
            precipListTimes: [],

            series: [],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 400,
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '100%',
                        endingShape: 'rounded',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent'],
                },

                xaxis: {
                    categories: [],
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
                let precip = Number(timeSeries.parameters[16].values)
                
                let time = timeSeries.validTime
                
                this.precipListValues.push(precip)
                this.precipListTimes.push(time)
            }
            this.series = [{
                name: 'Nederbörd',
                data: this.precipListValues,
            }]
            this.chartOptions.xaxis = {
                categories: []
            }
            console.log(this.precipListValues)
        },
    },
    created() {
        this.fetchPrecipListValue()
    },
}
</script>

