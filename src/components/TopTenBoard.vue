<template>
    <div>
        <div class="heading">{{heading}}</div>
        <div>
            <ol>
                <li v-for="contender in topList" :key="contender.key">
                    <span>{{ contender.name }}: {{ contender.value }} {{ unit }}</span>
                </li>
            </ol>
        </div>
    </div>
</template>
<style scoped>
.heading {
    background-color: #F0F7FE;
}

div {
    background-color: #DAEAFB;
}

span {

}
</style>

<script>
export default {
    name: 'TopTenBoard',
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
        async fetchTopListValue() {
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
                        value: Number(station.value[0].value),
                    }
                    this.topList.push(topListContender)
                }
                this.topList.sort(this.sortValue)
                this.topList.length = 10
            }
                    
        },
        sortValue(a, b) {
            return a.value > b.value
                ? -1
                : b.value > a.value
                ? 1
                : 0
        },
    },
    created() {
        this.fetchTopListValue()
    },
}
</script>

