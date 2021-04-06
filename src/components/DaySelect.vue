<template>
    <div class="main-day-select">
        <div class="day">
            <input
                type="button"
                :value="dayDate"
                @click="selectDay"
            />
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
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import { addDays } from 'date-fns'

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
            for (let i = `${this.choseI}`; i <= `${this.choseLimit}`; i++) {
                let a = `${this.listValues[i]}`
                let b = `${this.listTimes[i]}`
                this.chosenDayValues.push(a)
                this.chosenDayTimes.push(b)
            }
            //console.log(this.chosenDayValues)
            //console.log(this.chosenDayTimes)
            this.selectedValues = String(this.chosenDayValues)
            this.selcetedTimes = String(this.chosenDayTimes)
            this.$emit('selected-values', this.chosenDayValues, this.chosenDayTimes)
            this.chosenDayValues = []
            this.chosenDayTimes = []
        },
    },
}
</script>

