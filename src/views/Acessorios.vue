<template>
    <main class="container">
        <section class="produtos-container">
            <div class="card">
                <div class="produto-image">

                </div>
                <h3>Nome Produto</h3>
                <p>Conjunto Plauu</p>
                <p>REF: 001</p>
                <p>R$ <span class="bold">29,99</span></p>
                <BotoesPA @ant="anterior" @pro="proximo"/>
            </div>
        </section>
    </main>
</template>

<script>
    import BotoesPA from '../components/Botoes.vue'
    export default {
        name: "AcessoriosView",
        data() {
            return {
                acess: 0
            }
        },
        components: {
            BotoesPA
        }
    }
</script>