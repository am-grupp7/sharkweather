<template>
    <div class="desktop">
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
            <div class="inner">
                <day-select
                    :dayNumber="1"
                    buttonText="Imorgon"
                    dayFormat="eee d/M"
                    :choseI="24"
                    :choseLimit="44"
                    :listValues="tempListValues"
                    :listTimes="tempListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
            <div class="inner">
                <day-select
                    :dayNumber="2"
                    buttonText=""
                    dayFormat="eeee d/M"
                    :choseI="45"
                    :choseLimit="49"
                    :listValues="tempListValues"
                    :listTimes="tempListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
            <div class="inner">
                <day-select
                    :dayNumber="3"
                    buttonText=""
                    dayFormat="eeee d/M"
                    :choseI="50"
                    :choseLimit="54"
                    :listValues="tempListValues"
                    :listTimes="tempListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
            <div class="inner">
                <day-select
                    :dayNumber="4"
                    buttonText=""
                    dayFormat="eeee d/M"
                    :choseI="55"
                    :choseLimit="59"
                    :listValues="tempListValues"
                    :listTimes="tempListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
            <div class="inner">
                <day-select
                    :dayNumber="5"
                    buttonText=""
                    dayFormat="eeee d/M"
                    :choseI="60"
                    :choseLimit="62"
                    :listValues="tempListValues"
                    :listTimes="tempListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
            <div class="inner">
                <day-select
                    :dayNumber="6"
                    buttonText=""
                    dayFormat="eeee d/M"
                    :choseI="63"
                    :choseLimit="65"
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
    <div class="mobile">
        <div class="dayselector">
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

            <day-select
                :dayNumber="1"
                buttonText="Imorgon"
                dayFormat="eee d/M"
                :choseI="24"
                :choseLimit="44"
                :listValues="tempListValues"
                :listTimes="tempListTimes"
                @selected-values="displayGraph"
            ></day-select>

            <day-select
                :dayNumber="2"
                buttonText=""
                dayFormat="eeee d/M"
                :choseI="45"
                :choseLimit="49"
                :listValues="tempListValues"
                :listTimes="tempListTimes"
                @selected-values="displayGraph"
            ></day-select>

            <day-select
                :dayNumber="3"
                buttonText=""
                dayFormat="eeee d/M"
                :choseI="50"
                :choseLimit="54"
                :listValues="tempListValues"
                :listTimes="tempListTimes"
                @selected-values="displayGraph"
            ></day-select>

            <day-select
                :dayNumber="4"
                buttonText=""
                dayFormat="eeee d/M"
                :choseI="55"
                :choseLimit="59"
                :listValues="tempListValues"
                :listTimes="tempListTimes"
                @selected-values="displayGraph"
            ></day-select>
        </div>

        <apexchart
            type="bar"
            height="400"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </div>
</template>

<style scoped>
@media only screen and (max-width: 650px) {
    .desktop {
        display: none;
    }
    .dayselector {
        display: flex;
        flex-direction: row;
        padding: 1%;
    }
}

@media only screen and (min-width: 601px) {
    .mobile {
        display: none;
    }
    .dayselector {
        display: flex;
        flex-direction: row;
        padding: 1%;
    }
    .inner {
        margin: 5px;
    }
}
</style>

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
                        columnWidth: '50%',
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
                    title: {
                        text: 'Tid i timmar',
                    },
                },

                yaxis: {
                    title: {
                        text: 'Temperatur i °c',
                    },
                },
                fill: {
                    colors: ['#FF8500'],
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
