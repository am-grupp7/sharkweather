<template>
    <div class="desktop">
        <div class="heading">
            <div class="heading-logo">
                <div v-if="heading === 'Temperatur'">
                    <img :src="require('../assets//icons/Sol.svg')" />
                </div>
                <div v-else-if="heading === 'Nederbörd'">
                    <img :src="require('../assets//icons/Regn.svg')" />
                </div>
                <div v-else-if="heading === 'Vindstyrka'">
                    <img :src="require('../assets//icons/Vind.svg')" />
                </div>
            </div>
            <div class="heading-title">
                {{ heading }}
            </div>
            <div class="unit-heading">
                {{ unit }}
            </div>
        </div>

        <ol>
            <li v-for="contender in topList" :key="contender.key">
                <span>{{ contender.counter }}. {{ contender.name }} </span>
                <span>{{ plus }} {{ contender.value }} {{ unit }}</span>
            </li>
        </ol>
    </div>

    <div class="mobile">
        <ol>
            <li v-for="contender in topList" :key="contender.key">
                <span>{{ contender.counter }}. {{ contender.name }} </span>
                <span>{{ plus }} {{ contender.value }} {{ unit }}</span>
            </li>
        </ol>
    </div>
</template>
<style scoped>
@media only screen and (min-width: 601px) {
    .desktop {
        display: block;
    }

    .mobile {
        display: none;
    }
}

.heading {
    display: flex;
    flex-direction: row;
    height: 4em;
    background-color: #f0f7fe;
    margin-top: 30px;
    justify-content: center;
}

.heading-logo {
    width: 30%;
    padding-left: 20%;
}

.heading-logo img {
    height: 25px;
    margin-top: 15px;
    margin-right: 5px;
}

.heading-title {
    font-size: 24px;
    font-weight: normal;
    align-self: center;
    width: 40%;
}

.unit-heading {
    font-size: 18px;
    font-weight: bold;
    width: 30%;
    margin-left: 20%;
    margin-top: 7%;
}

li {
    display: flex;
    justify-content: space-between;
    padding-right: 3em;
}

@media only screen and (max-width: 650px) {
    .desktop {
        display: none;
    }

    .mobile {
        background-color: #daeafb;
        display: block;
    }

    ol {
        padding-left: 0px;
        margin-bottom: 0px;
    }

    li {
        border-bottom: 2px solid #a2ccf3;
        padding-right: 2em;
        font-weight: bold;
        padding: 10px;
    }
}
</style>

<script>
export default {
    name: 'TopTenBoard',
    props: {
        apiCall: {
            type: String,
        },
        heading: {
            type: String,
        },
        count: {
            type: Number,
        },
        plus: {
            type: String,
        },
        unit: {
            type: String,
        },
        length: {
            type: Number,
        },
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
                        counter: 0,
                    }
                    this.topList.push(topListContender)
                }
                this.topList.sort(this.sortValue)
                this.topList.length = `${this.length}`
            }

            let i = 0
            for (const topItem of this.topList) {
                i++
                topItem.counter = i
            }
        },
        sortValue(a, b) {
            return a.value > b.value ? -1 : b.value > a.value ? 1 : 0
        },
    },
    created() {
        this.fetchTopListValue()
    },
}
</script>
