<template>
  <div id="app">
    <header>
      <img
        class="avatar"
        alt="Avatar"
        src="@/assets/raccoon.png"
      />
      <h1>Welcome to Sniffer</h1>
      <p>Stinky winky...</p>
    </header>
  </div>
</template>

<script>
export default {
  mounted() {
    // Faz uma requisição para a função serverless no Vercel
    fetch('/api/logRequest', {
      method: 'GET',
    });
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 20px;
}

header {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 50%; /* Reduz o tamanho para 50% do tamanho original */
  max-width: 150px; /* Limita a largura máxima, se necessário */
  height: auto; /* Mantém a proporção da imagem */
  border-radius: 25%; /* Faz a imagem parecer um avatar redondo */
}
</style>
