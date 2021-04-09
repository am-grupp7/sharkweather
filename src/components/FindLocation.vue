<template>
    <div class="your-location">
        <input
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
            console.log('Hey Bosse')
            if (!('geolocation' in navigator)) {
                console.log('Geolocation is not available')
                return
            }

            this.gettingLocation = true
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    this.gettingLocation = false
                    this.location = pos
                    let latitude = this.location.coords.latitude.toFixed(6)
                    let longitude = this.location.coords.longitude.toFixed(6)
                    console.log(latitude)
                    console.log(longitude)

                    this.$emit('geo', latitude, longitude)
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
