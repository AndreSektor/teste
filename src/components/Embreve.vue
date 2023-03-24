<template>
    <div class="txt">
        <h6 class="novidades">Chegando novidades!</h6>
    </div>
</template>

<script>
    export default {
        name: "EmbreveTxt"
    }

</script>

<style scoped>

    .novidades {
        font-size: 44px;
        font-weight: bold;
        color: transparent;
        text-align: center;
        background: linear-gradient(to right, #FF69B4, #FF69B4);
        background-size: 200% auto;
        -webkit-background-clip: text;
        animation: expand 1s ease-in-out infinite;
    }

    @keyframes expand {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

</style>