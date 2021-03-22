<template>
    <div>
        <div class="temp">Temperatur</div>
        <div>
            <ol>
                <li v-for="contender in topList" :key="contender.key">
                    <span>
                        {{ contender.name }}: {{ contender.temperature }}</span
                    >
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TempBoard',
    data() {
        return {
            topList: [],
        }
    },
    methods: {
        async fetchTopListTemp() {
            const resp = await fetch(
                'https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station-set/all/period/latest-hour/data.json',
                { headers: { Accept: 'application/json' } }
            )
            const json = await resp.json()
            /*this.message = json.station[0].name
            this.message.push(json.station[0].value[0].value)*/
            //console.log(json.station[0].name)


            for (const station of json.station) {
                if (station.value != null) {
                    let topListContender = {
                        name: station.name,
                        key: station.key,
                        temperature: station.value[0].value,
                    }
                    if (this.topList.length < 10) {
                        this.topList.push(topListContender)
                    } else {
                        this.topList.sort(this.sortTemp);
                        if (this.topList[9].temperature < topListContender.temperature) {
                            this.topList.pop();
                            this.topList.push(topListContender);
                        }
                        this.topList.sort(this.sortTemp);
                        /*jämför mot sista 
                        om större ta bort sista och lägg till*/
                    }
                }
            }
        },
        sortTemp(a, b) {
            return a.temperature > b.temperature ? -1 : b.temperature > a.temperature ? 1 : 0;
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
