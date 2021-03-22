<template>
    <div class="main-topten">
        <nav>Start > Topp 10-lista</nav>
        <h1>Topp 10-lista</h1>
        <p>Se var i landet det är varmast, regnar mest eller är blåsigast just nu.</p>
        <h2>datum...</h2>
        <temp-board></temp-board>
    </div>
</template>

<script>
    import TempBoard from '../components/TempBoard.vue'
    export default {
        name: 'TopTen',
        components: {
            TempBoard
        }
    }
</script>