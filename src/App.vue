<template>
  <div id="app">
    <header>
      <img
        class="avatar"
        alt="Avatar"
        src="@/assets/raccoon.png"
      />
      <h1>Welcome to Sniffer</h1>
      <p>Stinky winky smelly pinky...</p>
    </header>
  </div>
</template>

<script>
export default {
  mounted() {

    // Get the user's location
    let location = {};

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
        location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    // Make a POST request for the serverless Vercel "API" passing location
    fetch('/api/logRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    })
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
