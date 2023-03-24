<template>
    <main class="container">
        <section class="produtos-container">
            <div class="card">
                <div class="produto-image">
                    <!-- <img id="img-produto" src="/img/blusa-1.jpg" alt="blusa1" /> -->
                    <!-- <img id="img-produto" src="../../public/img/Imagem1.html1.jpg" alt=""> -->
                    <img class="produto" src="/img/blusa1.jpg" alt="blusa-1" v-show="blusa === 0">
                    <img class="produto" src="/img/blusa-2.jpg" alt="blusa-2" v-show="blusa === 1">
                    <img class="produto" src="/img/blusa-3.jpg" alt="blusa-3" v-show="blusa === 2">
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/blusa-4.jpg" alt="blusa4" />
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/blusa-5.jpg" alt="blusa5" />
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/blusa-6.jpg" alt="blusa6" />
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/blusa-7.jpeg" alt="blusa7" />
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
            </div>
        </section>
    </main>
</template>

<script>

    export default {
        name: "BlusaView",
        data() {
            return {
                blusa: 0
            }
        },
        components: {

        },
        methods: {

        }
     
    }
</script>

<style>

    .container {
        background-color: rgb(203, 174, 174);
        min-height: 60vh;
        padding: 50px;
    }

    .produtos-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .card {
        width: calc(33.33% - 20px);
        margin: 10px;
        padding: 15px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 8px;
    }

    .produto-image,
    #img-produto,
    .produto {
        height: 400px;
        width: 100%;
        margin-bottom: 10px;
        background-position: center;
        background-size: cover;
        border-radius: 8px;
        display: flex;
        overflow-x: scroll;
        scroll-snap-type: x mandatory; 
        flex: 0 0 100%;
        scroll-snap-align: start; 
    }

    h3 {
        margin-bottom: 10px;
        color: goldenrod;
        border-left: 5px solid orangered;
        font-size: 24px;
    }

    .card p {
        margin-bottom: 0px;
    }

    .bold {
        font-weight: bold;
    }

    /* .btn {
        display: block;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        background-color: cornflowerblue;
        color: azure;
        padding: 15px;
        border-radius: 5px;
        transition: .5s;
    }

    .btn:hover {
        background-color: aqua;
    } */

    @media (max-width: 992px) {
        .card {
            width: calc(50% - 20px);
        }
    }

    @media (max-width: 576px) {
        .card {
            width: 100%;
        }
    }

</style>

