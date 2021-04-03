<template>
    <div class="main-day-select">
        <div class="day">
            <input type="button" :value="dayDate" @click="selectDay" />
        </div>
    </div>
</template>
<style scoped>
input {
    background-color: white;
    border: 1px solid blue;
    border-radius: 25px;
    height: 2em;
}
</style>

<script>
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import { addDays } from 'date-fns'
export default {
    name: 'DaySelect',
    props: {
        dayNumber: {
            type: Number
        },
        buttonText: {
            type: String
        },
        dayFormat: {
            type: String
        },
    },

    data() {
        return {
            dayDate: format(addDays(new Date(), `${this.dayNumber}`), `'${this.buttonText} '${this.dayFormat}`, {locale: sv,}),
        }
    },
}
</script>

