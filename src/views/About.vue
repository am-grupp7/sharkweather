<template>
    <div class="desktop">
        <div class="work-here">
            <h4>Vi som arbetar här:</h4>
            <div class="work-here-content">
                <div>
                    <img
                        class="insta-img"
                        src="../assets//sharks/rebecca.jpg"
                        alt="rebecca"
                    />
                    <p>Rebecca Hajkovic</p>
                </div>
                <div>
                    <img
                        class="insta-img"
                        src="../assets//sharks/alicia.jpg"
                        alt="alicia"
                    />
                    <p>Alicia Sharkpe</p>
                </div>
                <div>
                    <img
                        class="insta-img"
                        src="../assets//sharks/sara.jpg"
                        alt="sara"
                    />
                    <p>Sara Hajner</p>
                </div>
                <div>
                    <img
                        class="insta-img"
                        src="../assets//sharks/simon.jpg"
                        alt="simon"
                    />
                    <p>Simon</p>
                </div>
                <div>
                    <img
                        class="insta-img"
                        src="../assets//sharks/uzair.jpg"
                        alt="uzair"
                    />
                    <p>Uzair</p>
                </div>
                <div>
                    <img
                        class="insta-img"
                        src="../assets//sharks/fredrik.jpg"
                        alt="fredrik"
                    />
                    <p>Fredrik</p>
                </div>
                <div>
                    <img
                        class="insta-img"
                        src="../assets//sharks/erik.jpg"
                        alt="erik"
                    />
                    <p>Erik</p>
                </div>
                <div></div>
            </div>
        </div>
        <div class="about">
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
            <p class="reply">Hör av dig!</p>
        </div>
        <div class="ceo">
            <div class="ceo-inner">
                <img class="ceo-img" src="../assets//ceo.png" alt="CEO" />
                <p class="vd">Haj Sharksson VD</p>
            </div>
            <div class="footer">
                <div class="envelope">
                    <img
                        class="envelope-img"
                        src="../assets//icons/envelope.svg"
                        alt="email"
                    />
                    <p>hajarna@gmail.com</p>
                </div>
                <div class="insta">
                    <img
                        class="insta-img"
                        src="../assets//icons/insta.svg"
                        alt="instagram"
                    />
                    <p>@hajarnasliv</p>
                </div>
                <div class="phone">
                    <img
                        class="phone-img"
                        src="../assets//icons/phone.svg"
                        alt="phone"
                    />
                    <p>0711 11 11 11</p>
                </div>
            </div>
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

        <div class="image">
            <img
                class="ceo-img"
                src="../assets//ceo.png"
                alt="CEO"
                width="220"
            />
            <p class="vd">Haj Sharksson VD</p>
        </div>

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
        <div class="footer-mobile">
            <p>Hör av dig!</p>
        </div>
        <div class="footer-icons">
            <div class="envelope-m">
                <img
                    class="envelope-img"
                    src="../assets//icons/envelope.svg"
                    alt="email"
                />
            </div>
            <div class="insta-m">
                <img
                    class="insta-img"
                    src="../assets//icons/insta.svg"
                    alt="instagram"
                />
            </div>
            <div class="phone-m">
                <img
                    class="phone-img"
                    src="../assets//icons/phone.svg"
                    alt="phone"
                />
            </div>
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
    .desktop {
        display: none;
    }
    .top {
        height: 160px;
        background-color: #b0d2ee;
    }
    .image {
        margin-top: -4em;
        text-align: center;
    }
    .image img {
        border: 10px solid white;
    }
    .image p {
        font-size: 12px;
        margin: 0;
    }

    .text {
        padding: 2em;
    }
    .footer-mobile {
        text-align: center;
    }
    .footer-icons {
        display: flex;
        margin-bottom: 2em;
    }

    .footer-icons div {
        width: 100%;
    }

    .footer-icons img {
        width: 30%;
    }
    .envelope-m {
        text-align: right;
    }
    .insta-m {
        text-align: center;
    }
    .phone-m {
        text-align: left;
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
        z-index: 1;
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
    .desktop {
        display: flex;
        flex-wrap: wrap;
        margin: 0.5em;
    }
    p {
        font-size: 18px;
        line-height: 1.5em;
    }
    .reply {
        text-align: center;
    }
    .work-here {
        margin: 0.5em;
        height: 100%;
        width: 345px;
        flex-grow: 1;
        background-color: #d0e8fb;
        margin: 2em;
        margin-bottom: 3em;
    }
    .work-here h4 {
        text-align: left;
        padding-left: 1em;
    }
    .work-here-content {
        display: flex;
        flex-wrap: wrap;
    }
    .work-here-content p {
        font-size: 16px;
    }
    .work-here-content img {
        width: 80%;
    }
    .about {
        margin: 0.5em;
        padding: 1.5em;
        text-align: left;
        height: 100%;
        width: 350px;
        flex-grow: 3;
    }
    .ceo {
        margin: 0.5em;
        height: 500px;
        width: 350px;
        flex-grow: 1;
        padding: 1em;
    }
    .ceo-inner {
        max-width: 450px;
    }
    .ceo-img {
        width: 100%;
    }
    .vd {
        text-align: right;
        padding-right: 1em;
        font-size: 16px;
    }
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .footer p {
        font-size: 14px;
    }
    .envelope-img {
        width: 30%;
    }
    .insta-img {
        width: 30%;
    }
    .phone-img {
        width: 30%;
    }
}
</style>
