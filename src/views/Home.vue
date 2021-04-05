<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png" />-->
        <div class="wilkommen">
            <h1>Välkommen!</h1>
            <p>
                För att snabbare komma igång ber vi dig att välja din <br />
                plats, den kommer vara default för informationen som <br />
                visas, men du kan även ändra den senare.
            </p>
        </div>
        <div class="lower-row">
            <div class="inner">
                <h3>Dagens topp 3</h3>
                <div class="top-tre"></div>
            </div>
            <div class="inner">
                <div class="find-location">
                    <div class="serchbar">
                        <input
                            type="text"
                            name="serch-location"
                            placeholder="Sök efter en plats"
                        />
                    </div>
                    <p>eller...</p>
                    <div class="your-location">
                        <input
                            type="button"
                            value="Använd din nuvarande plats"
                        />
                    </div>
                </div>
            </div>
            <div class="inner">
                <div class="umbrella">
                    <img alt="Vue logo" src="../assets/icons/Regn.svg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
}
</script>

<style scoped>
.home {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30% 40% 30%;
}
.wilkommen {
    background-color: #daeafb;
}
.find-location {
    background-color: #daeafb;
}
.lower-row {
    display: flex;
    flex-direction: row;
}
</style>
