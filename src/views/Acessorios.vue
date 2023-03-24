
<template>
    <main class="container">
        <section class="produtos-container">
            <div class="card">
                <div class="produto-image">
                    <EmbreveTxt />
                </div>
          
       
            </div>
        </section>
    </main>
</template>

<script>
    import EmbreveTxt from '../components/Embreve.vue'
    export default {
        name: "AcessoriosView",
        data() {
            return {
             
            }
        },
        components: {
            EmbreveTxt
        }
    }
</script>