<template>
    <div>
        <div class="redes">
            <a href="https://www.instagram.com/jessikamoreiraoficial"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100089881599311"><i class="fab fa-facebook"></i></a>
            <a href="https://api.whatsapp.com/send?phone=5581991341788&text=Ol%C3%A1!%20Para%20melhor%20atend%C3%AA-lo,%20basta%20p%C3%B4r%20a%20refer%C3%AAncia%20da%20imagem%20ou,%20enviar-me%20um%20print%20do%20produto.%20Frete%20a%20combinar!"><i class="fab fa-whatsapp"></i></a>
        </div>
    </div>
</template>

<script>

    export default {
        name: "RedesComp"
    }
    
</script>

<style scoped>
  
    .redes a {
        background-color: rgb(203, 174, 174);
        justify-content: flex-end;
        align-items: end;  
        margin: auto;
        margin-right: 0;
        color: #b80878;
        text-decoration: none;
        margin: 10px;
        transition: .5s;
    }

    .redes a:hover {
        color: #FFF;
    }

    @media only screen and (max-width: 768px) {
        .redes a {
            background-color: rgb(203, 174, 174);
            justify-content: flex-end;
            align-items: end;  
            margin: auto;
            margin-right: 0;
            color: #b80878;
            text-decoration: none;
            margin: 10px;
            transition: .5s;
        }

        .redes a:hover {
            color: #FFF;
        }      
    }


</style>