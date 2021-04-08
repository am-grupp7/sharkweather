<template>
    <div class="desktop">
        <div class="dayselector">
            <div class="inner">
                <day-select
                    :dayNumber="0"
                    buttonText="Idag"
                    dayFormat="eee d/M"
                    :listValues="precipListValues"
                    :listTimes="precipListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
            <div class="inner">
                <day-select
                    :dayNumber="1"
                    buttonText="Imorgon"
                    dayFormat="eee d/M"
                    :listValues="precipListValues"
                    :listTimes="precipListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
            <div class="inner">
                <day-select
                    :dayNumber="2"
                    buttonText=""
                    dayFormat="eeee d/M"
                    :listValues="precipListValues"
                    :listTimes="precipListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
            <div class="inner">
                <day-select
                    :dayNumber="3"
                    buttonText=""
                    dayFormat="eeee d/M"
                    :listValues="precipListValues"
                    :listTimes="precipListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
            <div class="inner">
                <day-select
                    :dayNumber="4"
                    buttonText=""
                    dayFormat="eeee d/M"
                    :listValues="precipListValues"
                    :listTimes="precipListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
            <div class="inner">
                <day-select
                    :dayNumber="5"
                    buttonText=""
                    dayFormat="eeee d/M"
                    :listValues="precipListValues"
                    :listTimes="precipListTimes"
                    @selected-values="displayGraph"
                ></day-select>
            </div>
            <div class="inner">
                <day-select
                    :dayNumber="6"
                    buttonText=""
                    dayFormat="eeee d/M"
                    :listValues="precipListValues"
                    :listTimes="precipListTimes"
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
            >
            </apexchart>
        </div>
    </div>

    <div class="mobile">
        <div class="days">
            <day-select
                :dayNumber="0"
                buttonText="Idag"
                dayFormat="eee d/M"
                :listValues="precipListValues"
                :listTimes="precipListTimes"
                @selected-values="displayGraph"
            ></day-select>

            <day-select
                :dayNumber="1"
                buttonText="Imorgon"
                dayFormat="eee d/M"
                :listValues="precipListValues"
                :listTimes="precipListTimes"
                @selected-values="displayGraph"
            ></day-select>

            <day-select
                :dayNumber="2"
                buttonText=""
                dayFormat="eeee d/M"
                :listValues="precipListValues"
                :listTimes="precipListTimes"
                @selected-values="displayGraph"
            ></day-select>

            <day-select
                :dayNumber="3"
                buttonText=""
                dayFormat="eeee d/M"
                :listValues="precipListValues"
                :listTimes="precipListTimes"
                @selected-values="displayGraph"
            ></day-select>
        </div>
        <apexchart
            type="bar"
            height="300"
            :options="chartOptions"
            :series="series"
        >
        </apexchart>
    </div>
</template>
<style scoped>
@media only screen and (max-width: 650px) {
    .desktop {
        display: none;
    }
    .days {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
                        text: 'Nederbörd i mm',
                    },
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

            this.displayGraph()
        },
        displayGraph(chosenDayValues = [], chosenDayTimes = []) {
            this.series = [
                {
                    name: 'Nederbörd (mm)',
                    data: chosenDayValues,
                },
            ]
            this.chartOptions.xaxis.categories.length = 0
            for (let val of chosenDayTimes) {
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
