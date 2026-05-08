<script setup>
import { onMounted } from 'vue'
import api from 'src/services/api'

onMounted(async () => {
  const res = await api.get('/citas')
  console.log(res.data)
})
</script>

<template>
  <q-page class="flex flex-center">
    <h4>VetCitas 🐾</h4>
  </q-page>
</template>
