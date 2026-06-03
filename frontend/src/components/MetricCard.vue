<template>
      <q-card class="q-pa-md">
      <div class="row items-center no-wrap">

        <q-icon :name="icono" size="40px" class="q-mr-md text-primary" />

        <div class="column">
          <div class="text-subtitle1 text-grey-10">{{ titulo }}</div>
          <div class="text-h5 text-weight-bold">{{ valor }}</div>
          <div class="text-caption text-grey-8">{{ info }}</div>
        </div>
      </div>
    </q-card>
</template>

<script setup>
defineProps({
  titulo: String,
  valor: [String, Number],
  info: String,
  icono: String
})
</script>
