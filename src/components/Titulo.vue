<!-- header cabeçalho LOGO da empresa -->
<template>
    <div class="topo">
        <h3>Bem-vindo ao catálogo on-line!</h3>
    </div>
    <div>
        <div id="nav">
            <router-link to="/">Blusa</router-link>
            <router-link to="/t-shirt">T-shirt</router-link>
            <router-link to="/vestido">Vestido</router-link>
            <router-link to="/saia">Saia</router-link>
            <router-link to="/acessorios">Acessórios</router-link>
            <RedesComp />
        </div>
    </div>
    
    <header id="marca">
        <h1>Jéssika Moreira</h1>
        <p>Vista-se bem! Roupas & acessórios.</p>
        <img id="borboleta" src="../assets/logo.png" alt="">
    </header>


</template>

<script>
    import RedesComp from './Redes.vue'
    export default {
        name: "TituloComp",
        components: {
            RedesComp
        }
    }

</script>

<style scoped>
    header {
        background-color: #0FB1FC;
        color: #fff;
        padding: 15px;
        text-align: left;
        border-bottom: 5px solid blueviolet;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #marca h1, p {
        font-family: pacifico;
        /* font-size: 72px; */
        background: linear-gradient(white, white) padding-box, linear-gradient(to right, #13f78c, #0be6e6, #f700c5) border-box;
        border-radius: 50em;
        border: 3px solid transparent;
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;
        font-weight: bold;
        text-decoration: none;
        color: #10a87d;
        padding: 0.5em 1.5em;
    }

    #nav {
        background-color: rgb(203, 174, 174);
        border-bottom: 4px solid blueviolet;
        padding: 15px 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;  
        margin: auto;
        margin-left: 0;
    }

    #nav a {
        color: #b80878;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    #nav a:hover {
        color: #FFF;

    }

    @media only screen and (max-width: 768px) {
        header {
            flex-direction: column;
            text-align: center;
        }

        #nav {
            flex-direction: column;
            padding: 15px;
            max-width: 1200px;
            margin: 0 auto;
        }

        #nav #logo-url {
            margin: 0;
            margin-bottom: 20px;
            max-width: 200px;
        }

        #nav a {
            margin: 8px 0;
            display: block;
        }


}


</style>



