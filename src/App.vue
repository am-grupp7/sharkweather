<template>
    <div>
        <div id="nav">
            <router-link to="/">Start</router-link>
            <router-link to="/TopTen">Topp 10-lista</router-link>
            <router-link to="/">UV-prognos</router-link>
            <router-link to="/PrecipForecast">Nederbördsprognos</router-link>
            <router-link to="/About">Om oss</router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
@media screen and (max-width: 767px) {
    #nav {
        display: none;
    }
}
@media screen and (min-width: 768px) {
    body {
        margin: 0%;
    }
    #app {
        font-family: Tahoma, Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 1.5em;
        background-color: #a2ccf3;
    }

    #nav a {
        font-weight: bold;
        color: rgb(0, 0, 0);
        margin: 2%;
    }

    #nav a.router-link-exact-active {
        color: #fdfdfd;
    }
}
</style>
