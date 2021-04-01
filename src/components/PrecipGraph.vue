<template>
    <div>
        <div class="heading">{{heading}}</div>
            <div>
                
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
            topList: [],
        }
    },
    methods: {
        async fetchTopListValue() {
            const resp = await fetch(
                ``,
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

