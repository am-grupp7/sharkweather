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
export default {
    name: 'test',

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
                    height: 350
                },
                dataLabels: {
                    enable: false
                },
                series: [],
                title: {
                    text: 'test',
                },
                noData: {
                    text: 'Loading...'
                }

            },
        }

    },
    methods: {
        let url = 
    }
}
</script>

