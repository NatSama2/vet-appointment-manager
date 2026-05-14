<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Sidebar -->
    <q-drawer show-if-above bordered :width="260" class="bg-white">
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
</script>
