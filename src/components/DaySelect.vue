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
import { parse } from 'date-fns/esm'

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
        listValues: {
            type: Array,
        },
        listTimes: {
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
            this.fillListWithCurrentDay(`${this.dayNumber}`)
            this.$emit(
                'selected-values',
                this.chosenDayValues,
                this.chosenDayTimes
            )
            this.chosenDayValues = []
            this.chosenDayTimes = []
        },
        fillListWithCurrentDay() {
            for (let i = 0; i < this.listTimes.length; i++) {
                const date = parse(
                    `${this.listTimes[i]}`,
                    "yyyy-MM-dd'T'HH:mm:ssX",
                    new Date()
                )
                const showDataForThisDate = addDays(
                    new Date(),
                    `${this.dayNumber}`
                )
                if (isSameDay(date, showDataForThisDate)) {
                    this.chosenDayValues.push(this.listValues[i])
                    this.chosenDayTimes.push(date)
                }
            }

            console.log('ChosenDayValues,', this.chosenDayValues)
            console.log('ChosenDayTimes, ', this.chosenDayTimes)
        },
    },
}
</script>
