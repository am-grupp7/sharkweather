<template>
    <div>
        <div class="dayselector">
            <div class="inner">
                <day-select
                    :dayNumber="0"
                    buttonText="Idag"
                    dayFormat="eee d/M"
                    :choseI="0"
                    :choseLimit="23"
                    :listValues="tempListValues"
                    :listTimes="tempListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
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

<style scoped></style>

<script>
//import ApexCharts from "apexcharts";

import { format } from 'date-fns'
import DaySelect from '../components/DaySelect.vue'
export default {
    name: 'TempGraph',
    components: {
      DaySelect,
    },
    props: {},
    data() {
        return {
            tempListValues: [],
            tempListTimes: [],

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
        async fetchTempsFromCoordinates() {
            const response = await fetch(
                `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.97/lat/57.7/data.json`,
                { headers: { Accept: 'application/json' } }
            )
            const json = await response.json()

            for (const hourlyData of json.timeSeries) {
                const temp = this.findTemperature(hourlyData.parameters)
                this.tempListValues.push(temp)
                this.tempListTimes.push(hourlyData.validTime)
            }
            
            this.displayGraph()
        },
        displayGraph(chosenDayValues = [], chosenDayTimes = []) {
            this.series = [
                {
                    name: 'Temperaturer (°c)',
                    data: chosenDayValues,
                },
            ]
            this.chartOptions.xaxis.categories.length = 0
            for (let val of chosenDayTimes) {
                let formattedDate = format(new Date(val), 'HH')
                this.chartOptions.xaxis.categories.push(formattedDate)
            }
        },
        findTemperature(parameters) {
            for (const param of parameters) {
                if (param.name === 't') {
                    return param.values[0]
                }
            }
        },
    },

    created() {
        this.fetchTempsFromCoordinates()
    },
}
</script>
