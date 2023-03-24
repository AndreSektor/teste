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
                <BotoesPA @ant="anterior" @pro="proximo"/>
                <!-- <a href="#" class="btn">Comprar</a> -->
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/blusa-4.jpg" alt="blusa4" />
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
                <BotoesPA />
                <!-- <a href="#" class="btn">Comprar</a> -->
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/blusa-5.jpg" alt="blusa5" />
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
                <BotoesPA />
                <!-- <a href="#" class="btn">Comprar</a> -->
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/blusa-6.jpg" alt="blusa6" />
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
                <BotoesPA />
                <!-- <a href="#" class="btn">Comprar</a> -->
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/blusa-7.jpeg" alt="blusa7" />
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
                <BotoesPA />
                <!-- <a href="#" class="btn">Comprar</a> -->
            </div>
        </section>
    </main>
</template>

<script>
    import BotoesPA from '../components/Botoes.vue'
    export default {
        name: "BlusaView",
        data() {
            return {
                blusa: 0
            }
        },
        components: {
            BotoesPA
        },
        methods: {
            ant() {
                this.$emit('ant')
            },
            pro() {
                this.$emit('pro')
            },
            async mudaImagen(proxima) {
                let proximaImagen = this.blusa + proxima;
                if (proximaImagen >= this.img.length) {
                    proximaImagen = 0;   
                }else if (proximaImagen < 0){
                    proximaImagen = this.img.length - 1;
                }
                this.blusa = proximaImagen;
            }
        }
      
        // data() {
        //     return {
        //         imagens: [
        //             { src: require('img/blusa1.jpg') }
        //         ],
        //     }
            
        // }
     
    }
</script>
<!-- "/img/blusa1.jpg",
"/img/blusa-2.jpg",
"/img/blusa-3.jpg",
"/img/blusa-4.jpg",
"/img/blusa-5.jpg",
"/img/blusa-6.jpg",
"/img/blusa-7.jpg",
"/img/calsa-1.jpg",
"/img/conj-1.jpg",
"/img/conj-2.jpg",
"/img/conj-3.jpg",
"/img/conj-4.jpg",
"/img/conj-5.jpg",
"/img/conj-6.jpg",
"/img/conj-7.jpg",
"/img/conj-8.jpg",
"/img/conj-9.jpg",
"/img/conj-10.jpg",
"/img/conj-11.jpg" -->

<style>
    /* #img-1 {
        background-image: url('../../public/img/Imagem1.html1.jpg');
    } */

    /* #img-2 {
        background-image: url('../../public/img/Imagem2.html.jpg');
    }

    #img-3 {
        background-image: url('../../public/img/Img03Tshirt.html.jpg');
    }

    #img-4 {
        background-image: url('../../public/img/imgblusa05.html.jpg');
    }

    #img-5 {
        background-image: url('../../public/img/imgblusa06.html.jpg');  
    }

    #img-6 {
        background-image: url('../../public/img/imgblusa07.html.jpg');
    } */

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

    .btn {
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
    }

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

