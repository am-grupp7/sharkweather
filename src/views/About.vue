<template>
    <div class="about">
        <div class="work-here">
            <div>
                <img
                    src="https://cdn.estore.nu/64983-thickbox_default/baby-shark-stort-gosedjur-med-musik---daddy-shark.jpg"
                    alt=""
                    width="50"
                    height="50"
                />
                <p class="name">Simon Riemertzon</p>
            </div>
            <div>
                <img
                    src="https://cdn.estore.nu/64983-thickbox_default/baby-shark-stort-gosedjur-med-musik---daddy-shark.jpg"
                    alt=""
                    width="50"
                    height="50"
                />
                <p class="name">Simon Riemertzon</p>
            </div>
            <div>
                <img
                    src="https://cdn.estore.nu/64983-thickbox_default/baby-shark-stort-gosedjur-med-musik---daddy-shark.jpg"
                    alt=""
                    width="50"
                    height="50"
                />
                <p class="name">Simon Riemertzon</p>
            </div>
            <div>
                <img
                    src="https://cdn.estore.nu/64983-thickbox_default/baby-shark-stort-gosedjur-med-musik---daddy-shark.jpg"
                    alt=""
                    width="50"
                    height="50"
                />
                <p class="name">Simon Riemertzon</p>
            </div>
            <div>
                <img
                    src="https://cdn.estore.nu/64983-thickbox_default/baby-shark-stort-gosedjur-med-musik---daddy-shark.jpg"
                    alt=""
                    width="50"
                    height="50"
                />
                <p class="name">Simon Riemertzon</p>
            </div>
            <div>
                <img
                    src="https://cdn.estore.nu/64983-thickbox_default/baby-shark-stort-gosedjur-med-musik---daddy-shark.jpg"
                    alt=""
                    width="50"
                    height="50"
                />
                <p class="name">Simon Riemertzon</p>
            </div>
            <div>
                <img
                    src="https://cdn.estore.nu/64983-thickbox_default/baby-shark-stort-gosedjur-med-musik---daddy-shark.jpg"
                    alt=""
                    width="50"
                    height="50"
                />
                <p class="name">Simon Riemertzon</p>
            </div>
        </div>
        <div class="about-us">
            <h1>Om oss</h1>
            <p>
                Hajar har ett oförtjänt rykte om att vara hänsynslösa rovdjur
                som attackerar människor. I själva verket är det mycket
                troligare att en haj blir dödad av en människa än tvärtom.
                Endast fyra av världens 400 hajarter har varit inblandade i
                attacker mot människor. Varje år dödas över 100 miljoner hajar i
                hajfensfiske. Detta anser vi är helt oacceptabelt.
            </p>
            <p>
                I februari 2009 offentliggjorde den europeiska kommissionen en
                ny åtgärdsplan för att skydda hajar i europeiska vatten. Planen
                innehåller bland annat krav att det ska finnas fler observatörer
                ombord på trålare, förbud mot utkast av de flesta hajarter som
                bifångst, och fångst-begränsningar i linje med råd från
                fiskevårdande organisationer.
            </p>
        </div>

        <div class="ceo-photo">
            <img
                width="400"
                src="https://thenationpress.net/imgs/2020/10/1602315522blobid0.jpg"
                alt=""
            />
        </div>
        <div class="contact">
            <img
                src="https://cdn.estore.nu/64983-thickbox_default/baby-shark-stort-gosedjur-med-musik---daddy-shark.jpg"
                alt=""
                width="50"
                height="50"
            />
            <img
                src="https://cdn.estore.nu/64983-thickbox_default/baby-shark-stort-gosedjur-med-musik---daddy-shark.jpg"
                alt=""
                width="50"
                height="50"
            />
            <img
                src="https://cdn.estore.nu/64983-thickbox_default/baby-shark-stort-gosedjur-med-musik---daddy-shark.jpg"
                alt=""
                width="50"
                height="50"
            />
        </div>
    </div>

    <div class="mobile">
        <div class="menu">
            <label for="show-menu" class="show-menu">
                <img
                    :src="require('../assets//icons/Hamburgemeny.svg')"
                    class="menuimage"
                />
            </label>
        </div>
        <div>
            <input type="checkbox" id="show-menu" role="button" />
            <ul id="menu">
                <li><router-link to="/">Start</router-link></li>
                <li><router-link to="/TopTen">Topp 10-lista</router-link></li>
                <li>
                    <router-link to="/TempForecast"
                        >Temperaturprognos</router-link
                    >
                </li>
                <li>
                    <router-link to="/PrecipForecast"
                        >Nederbördsprognos</router-link
                    >
                </li>
                <li><router-link to="/About">Om oss</router-link></li>
            </ul>
        </div>
        <div class="top"></div>
        <div class="image"></div>
        <div class="text">
            <h3>Om oss</h3>
            <p>
                Hajar har ett oförtjänt rykte om att vara hänsynslösa rovdjur
                som attackerar människor. I själva verket är det mycket
                troligare att en haj blir dödad av en människa än tvärtom.
                Endast fyra av världens 400 hajarter har varit inblandade i
                attacker mot människor. Varje år dödas över 100 miljoner hajar i
                hajfensfiske. Detta anser vi är helt oacceptabelt.
            </p>
            <p>
                I februari 2009 offentliggjorde den europeiska kommissionen en
                ny åtgärdsplan för att skydda hajar i europeiska vatten. Planen
                innehåller bland annat krav att det ska finnas fler observatörer
                ombord på trålare, förbud mot utkast av de flesta hajarter som
                bifångst, och fångst-begränsningar i linje med råd från
                fiskevårdande organisationer.
            </p>
        </div>
        <div class="footer">
            <p>Hör av dig!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    components: {},
    data() {
        return {}
    },
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
    .mobile {
        font-size: 18px;
        font-family: Tahoma, sans-serif;
    }
    .about {
        display: none;
    }
    .top {
        height: 160px;
        background-color: #b0d2ee;
    }
    .text {
        padding: 2em;
    }
    .footer {
        text-align: center;
    }
    .menuimage {
        display: inline-block;
        width: 15%;
        margin-left: 1em;
    }

    .menu {
        position: absolute;
        width: 300px;
        margin: -100px 0 0 -50px;
        padding: 50px;
        padding-top: 105px;
        list-style-type: none;
    }

    ul {
        list-style-type: none;
        margin-top: 70px;
        padding: 0;
        display: none;
        position: absolute;
    }

    li a {
        padding-top: 2em;
        display: block;
        min-width: 280px;
        height: 100px;
        text-align: center;
        font-family: Tahoma;
        color: black;
        background-color: #3191eb;
        text-decoration: none;
        text-align: left;
        padding-left: 1em;
    }

    li:hover a {
        color: white;
        font-weight: bold;
    }

    .show-menu {
        font-family: Tahoma;
        text-decoration: none;
        color: #fff;
        padding: 10px 0;
        display: block;
    }
    input[type='text'] {
        width: 100%;
        padding: 15px 40px;
        font-size: 16px;
        box-sizing: border-box;
        border: 2px solid lightgray;
        border-radius: 3px;
    }

    input[type='checkbox'] {
        display: none;
    }

    input[type='checkbox']:checked ~ #menu {
        display: block;
    }
}

@media screen and (min-width: 768px) {
    .mobile {
        display: none;
    }
    .about {
        display: grid;
        grid-template-columns: 1fr 3fr 2fr;
        justify-content: space-between;
    }

    .work-here {
        display: grid;
        grid-template-columns: 50% 50%;
    }
}
</style>
