<template>
    <main class="container">
        <section class="produtos-container">
           <EmbreveTxt />
        </section>
    </main>
</template>

<script>
    import EmbreveTxt from '@/components/Embreve.vue';

    export default {
        name: "VestidoView",
        data() {
            return {
                vest: 0
            }
            
        },
        components: {
            EmbreveTxt
        }
    }
</script>