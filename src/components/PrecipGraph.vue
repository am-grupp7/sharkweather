<template>
    <div>
        <div class="dayselector">
            <day-select></day-select>
        </div>
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
import { format } from 'date-fns'
import DaySelect from '../components/DaySelect.vue'
export default {
    name: 'PrecipGraph',
    components: {
        DaySelect,
    },

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
                `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.97/lat/57.7/data.json`,
                { headers: { Accept: 'application/json' } }
            )
            const json = await resp.json()

            for (const hourlyData of json.timeSeries) {
                const precip = this.findPrecip(hourlyData.parameters)

                this.precipListValues.push(precip)
                this.precipListTimes.push(hourlyData.validTime)
            }

            this.precipListValues.length = 24
            this.precipListTimes.length = 24
            this.displayGraph()
        },
        displayGraph() {
            this.series = [
                {
                    name: 'Nederbörd (mm)',
                    data: this.precipListValues,
                },
            ]
            this.chartOptions.xaxis.categories.length = 0
            for (let val of this.precipListTimes) {
                let formattedDate = format(new Date(val), 'HH')
                this.chartOptions.xaxis.categories.push(formattedDate)
            }
        },
        findPrecip(parameters) {
            for (const param of parameters) {
                if (param.name === 'pmean') {
                    return param.values[0]
                }
            }
        },
    },
    created() {
        this.fetchPrecipListValue()
    },
}
</script>

