<template>
    <div class="btn-pro-ant">
        <button @click="ant" class="ant">Anterior</button>
        <button @click="pro" class="pro">Próxima</button>
    </div>
</template>

<script>
    export default {
        name: "BotoesPA",
        methods: {
            // ant() {
            //     this.$emit('ant')
            // },
            // pro() {
            //     this.$emit('pro')
            // },
            // mudaImagen(proxima) {
            //     let proximaImagen = this.blusa + proxima;
            //     if (proximaImagen >= this.img.length) {
            //         proximaImagen = 0;   
            //     }else if (proximaImagen < 0){
            //         proximaImagen = this.img.length - 1;
            //     }
            //     this.imagemAtual = proximaImagen;
            // }
        }
    }
</script>

<style>
    .btn-pro-ant {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    button {
        background-color: rgb(203, 174, 174);
        color: #b80878;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 5px;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover {
        background-color: rgb(200, 181, 181);
    }

    @media (max-width: 768px) {
        .button-container {
            flex-direction: column;
            align-items: center;
        }
    }    


</style>