<template>
  <div>
    <main>
    <h1>Vanilla JavaScript App</h1>
    <p>Loading content from the API: {{ message }}</p>
  </main>

  </div>
</template>

<script setup>
const { data: message } = await useFetch('/api/message')
</script>