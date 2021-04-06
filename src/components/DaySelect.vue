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
    border: 1px solid black;
    border-radius: 25px;
    height: 2em;
}
</style>

<script>
import { format, isSameDay } from 'date-fns'
import { sv } from 'date-fns/locale'
import { addDays } from 'date-fns'
import { parseISO } from 'date-fns/esm'

export default {
    name: 'DaySelect',

    props: {
        dayNumber: {
            type: Number,
        },
        buttonText: {
            type: String,
        },
        dayFormat: {
            type: String,
        },
        choseI: {
            type: Number,
        },
        choseLimit: {
            type: Number,
        },
        precipListValues: {
            type: Array,
        },
        precipListTimes: {
            type: Array,
        },
    },

    data() {
        return {
            dayDate: format(
                addDays(new Date(), `${this.dayNumber}`),
                `'${this.buttonText} '${this.dayFormat}`,
                { locale: sv }
            ),
            chosenDayValues: [],
            chosenDayTimes: [],
        }
    },
    methods: {
        selectDay() {
            this.fillListWithCurrentDay()
            console.log('hejhej')
            this.selectedValues = String(this.chosenDayValues)
            this.selcetedTimes = String(this.chosenDayTimes)
            this.$emit(
                'selected-values',
                this.chosenDayValues,
                this.chosenDayTimes
            )
            this.chosenDayValues = []
            this.chosenDayTimes = []
        },
        fillListWithCurrentDay() {
            let index = 0
            let todaysDate = format(
                parseISO(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
                { locale: sv }
            )
            let apiDate = format(
                parseISO(`${this.precipListValues}`, "yyyy-MM-dd'T'HH:mm:ss"),
                { locale: sv }
            )
            while (isSameDay(todaysDate, apiDate)) {
                this.chosenDayValues.push(`${this.precipListValues[index]}`)
                this.chosenDayTimes.push(`${this.precipListTimes[index]}`)
                index++
            }
            console.log('ChosenDayValues, jipiii!', this.chosenDayValues)
        },
    },
}
</script>
