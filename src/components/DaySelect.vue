<template>
    <div class="main-day-select">
        <div class="day">
            <input type="button" value="hejhej" @click="selectDay">
        </div>
        
    </div>
</template>
<style scoped>
</style>

<script>
import { format } from 'date-fns'
export default {
    name: 'DaySelect',

    data() {
        return {}
    },
    methods: {
        let dayDate = format()
    }
}
</script>

