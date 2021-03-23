<template>
    <div>
        <div class="temp">{{heading}}</div>
        <div>
            <ol>
                <li v-for="contender in topList" :key="contender.key">
                    <span
                        >{{ contender.name }}: {{ contender.temperature }} {{ unit }}</span
                    >
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TempBoard',
    props: {
        apiCall: {
        type:String
        },
        heading:{
            type: String
        },
        unit:{
            type: String
        }
    },
    data() {
        return {
            topList: [],
        }
    },
    methods: {
        async fetchTopListTemp() {
            const resp = await fetch(
                `https://opendata-download-metobs.smhi.se/api/version/latest/parameter/${this.apiCall}/station-set/all/period/latest-hour/data.json`,
                { headers: { Accept: 'application/json' } }
            )
            const json = await resp.json()
            
            for (const station of json.station) {
                if (station.value != null) {
                    let topListContender = {
                        name: station.name,
                        key: station.key,
                        temperature: Number(station.value[0].value),
                    }
                    this.topList.push(topListContender)
                }
                this.topList.sort(this.sortTemp)
                this.topList.length = 10
            }
        },
        sortTemp(a, b) {
            return a.temperature > b.temperature
                ? -1
                : b.temperature > a.temperature
                ? 1
                : 0
        },
    },
    created() {
        this.fetchTopListTemp()
    },
}
</script>
<style scoped>
div {
    border: 1px solid black;
}
</style>
