<template>
    <div class="your-location">
        <input
            class="button"
            type="button"
            value="Använd din nuvarande plats"
            @click="findGeoLocation"
        />
    </div>
</template>
<script>
export default {
    name: 'FindLocation',

    data() {
        return {
            location: null,
            gettingLocation: false,
            errorStr: null,
        }
    },
    emits: ['geo'],

    methods: {
        findGeoLocation() {
            if (!('geolocation' in navigator)) {
                console.log('Geolocation is not available')
                this.$store.commit('noLocationFound')
                return
            }

            this.gettingLocation = true
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    this.gettingLocation = false
                    this.$store.commit('updateLocation', pos)
                },
                () => {
                    this.gettingLocation = false
                    console.log('Error getting your location')
                }
            )
        },
    },
}
</script>
<style scoped>
.button {
    background-color: white;
    border: 1px solid darkblue;
    color: darkblue;
    background-color: white;
    padding: 12px;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    width: 70%;
    border-radius: 4px;
}
</style>
