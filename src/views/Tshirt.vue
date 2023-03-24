<template>
    <main class="container">
        <section class="produtos-container">
            <div class="card">
                <div class="produto-image">
                    <img class="produto" src="/img/conj-1.jpg" alt="conj-1" v-show="conj === 0">
                    <img class="produto" src="/img/conj-2.jpg" alt="conj-2" v-show="conj === 1">
                    <img class="produto" src="/img/conj-3.jpg" alt="conj-3" v-show="conj === 2">
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
                <BotoesPA @ant="anterior" @pro="proximo"/>
            </div>
            <div class="card">
                <div class="produto-image">
                    <img class="produto" src="/img/conj-4.jpg" alt="conj-4" v-show="conj === 0">
                    <img class="produto" src="/img/conj-5.jpg" alt="conj-5" v-show="conj === 1">
                    <img class="produto" src="/img/conj-6.jpg" alt="conj-6" v-show="conj === 2">
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
                <BotoesPA />
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/conj-7.jpg" alt="conj-7" v-show="conj === 0">
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
                <BotoesPA />
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/conj-8.jpg" alt="conj-8" v-show="conj === 0">
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
                <BotoesPA />
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/conj-9.jpg" alt="conj-9" v-show="conj === 0">
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
                <BotoesPA />
            </div>
            <div class="card">
                <div class="produto-image">
                    <img id="img-produto" src="/img/conj-10.jpeg" alt="conj-10" v-show="conj === 0">
                    <img id="img-produto" src="/img/conj-11.jpg" alt="conj-11" v-show="conj === 1">
                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
                <BotoesPA />
            </div>
        </section>
    </main>
</template>

<script>
    import BotoesPA from '../components/Botoes.vue'
    export default {
        name: "TshirtView",
        data() {
            return {
                conj: 0
            }
        },
        components: {
            BotoesPA
        }
    }
</script>