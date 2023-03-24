<template>
    <main class="container">
        <section class="produtos-container">
            <div class="card">
                <div class="produto-image">
                    <img class="produto" src="/img/calsa-1.jpg" alt="calsa-1">
                    <img class="produto" src="/img/calsa-1.jpg" alt="calsa-1">
                    <img class="produto" src="/img/calsa-1.jpg" alt="calsa-1">
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
        name: "SaiaView",
        data() {
            return {
              
            }
        },
        components: {
           
        }
    }
</script>

<style scoped>
    .produto-image {
        display: flex;
        overflow-x: scroll;
        /* padding: 10px; */
        scroll-snap-type: x mandatory;
        /* scroll-padding: 24px; */
        gap: 12px;
        margin: 2rem auto;
    }

    .produto img {
        flex: 0 0 100%;
        /* padding: 24px; */
        scroll-snap-align: start; 
    }
</style>