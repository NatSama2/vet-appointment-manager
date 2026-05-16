<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black">
      <q-toolbar class="q-px-md">
        <q-btn icon="menu" flat dense color="dark" @click="leftDrawerOpen = !leftDrawerOpen"></q-btn>
        <q-toolbar-title class="text-weight-bold">Dashboard</q-toolbar-title>
        <q-space></q-space>
        <div class="text-grey-7">{{ fechaActual }}</div>
      </q-toolbar>
    </q-header>
    <!-- Sidebar -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="260" class="bg-white">
      <SidebarMenu />
    </q-drawer>

    <!-- Contenido -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
  import SidebarMenu from 'src/components/SidebarMenu.vue'
  import { ref } from 'vue';
  import { useQuasar } from 'quasar';
  import { watch } from 'vue';

  const $q = useQuasar()
  const leftDrawerOpen = ref(!$q.screen.lt.md);
  const fechaActual = new Date().toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });

  watch(() => $q.screen.lt.md, (esMobile) => {
    leftDrawerOpen.value = !esMobile
  })
</script>
