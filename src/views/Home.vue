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
                <div class="top-tre">
                    <div class="top-inner">
                        <top-ten-board
                            api-call="1"
                            heading="Temperatur °c"
                            unit="°c"
                            :length="3"
                        ></top-ten-board>
                    </div>
                    <div class="top-inner">
                        <top-ten-board
                            api-call="7"
                            heading="Nederbörd mm"
                            unit="mm"
                            :length="3"
                        ></top-ten-board>
                    </div>
                    <div class="top-inner">
                        <top-ten-board
                            api-call="4"
                            heading="Vindstyrka m/s"
                            unit="m/s"
                            :length="3"
                        ></top-ten-board>
                    </div>
                </div>
            </div>
            <div class="inner">
                <div class="find-location">
                    <div class="serchbar">
                        <input
                            id="serch"
                            type="text"
                            name="serch-location"
                            placeholder="     Sök efter en plats"
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
                    <img
                        id="umbrella"
                        alt="Umbrella"
                        src="../assets/icons/Regn.svg"
                        width="50"
                        height="50"
                    />
                    <h2>Paraply?</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import TopTenBoard from '../components/TopTenBoard.vue'

export default {
    name: 'Home',
    components: {
        TopTenBoard,
    },
}
</script>

<style scoped>
.home {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
}
.wilkommen {
    background-color: #daeafb;
}
.find-location {
    background-color: #daeafb;
    padding: 4em;
}
.lower-row {
    display: flex;
    flex-direction: row;
    width: auto;
}
#serch {
    background: url(../assets/icons/Sök.svg) no-repeat scroll 1px 1px;
    background-size: 9%;
    background-color: white;
}
.umbrella {
    display: flex;
    padding: 1em;
}
#umbrella {
    margin-right: 1em;
}

.top-tre {
    display: flex;
    flex-direction: row;
}
.top-inner {
    size: 50%;
}
</style>
