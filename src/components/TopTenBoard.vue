<template>
  <div class="heading">
    <div class="heading-logo"></div>
    <div class="heading-title">{{ heading }}</div>
    <div class="unit-heading">{{ unit }}</div>
  </div>

  <ol>
    <li v-for="contender in topList" :key="contender.key">
      <span>{{ count }} {{ contender.name }} </span>
      <span>{{ plus }} {{ contender.value }} {{ unit }}</span>
    </li>
  </ol>
</template>
<style scoped>
.heading {
  display: flex;
  flex-direction: row;
  height: 4em;
  background-color: #f0f7fe;
  margin-top: 30px;
  justify-content: center;
}

.heading-logo {
}

.heading-title {
  font-size: 24px;
  font-weight: normal;
  align-self: center;
}

.unit-heading {
  font-size: 18px;
  font-weight: bold;
  align-self: flex-end;
}

li {
  display: flex;
  justify-content: space-between;
  padding-right: 3em;
}
</style>

<script>
export default {
  name: "TopTenBoard",
  props: {
    apiCall: {
      type: String,
    },
    heading: {
      type: String,
    },
    count: {
      type: String,
    },
    plus: {
      type: String,
    },
    unit: {
      type: String,
    },
  },
  data() {
    return {
      topList: [],
    };
  },
  methods: {
    async fetchTopListValue() {
      const resp = await fetch(
        `https://opendata-download-metobs.smhi.se/api/version/latest/parameter/${this.apiCall}/station-set/all/period/latest-hour/data.json`,
        { headers: { Accept: "application/json" } }
      );
      const json = await resp.json();

      for (const station of json.station) {
        if (station.value != null) {
          let topListContender = {
            name: station.name,
            key: station.key,
            value: Number(station.value[0].value),
          };
          this.topList.push(topListContender);
        }
        this.topList.sort(this.sortValue);
        this.topList.length = 10;
      }
    },
    sortValue(a, b) {
      return a.value > b.value ? -1 : b.value > a.value ? 1 : 0;
    },
  },
  created() {
    this.fetchTopListValue();
  },
};
</script>
