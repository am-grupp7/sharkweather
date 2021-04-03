<template>
    <div class="main-day-select">
        <div class="day">
            <input type="button" :value="dayDate" @click="selectDay">
        </div>
        
    </div>
</template>
<style scoped>
</style>

<script>
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import { addDays } from 'date-fns'
export default {
    name: 'DaySelect',

    data() {
        return {
            dayDate: format(addDays(new Date(), 0), "'Idag 'eee d/M ", { locale: sv}),
        }
    },
    
}
</script>

