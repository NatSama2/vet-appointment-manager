<template>
  <div class="sidebar-container column justify-between full-height">
    <!-- Parte superior -->
    <div>
      <!-- Logo -->
      <div class="row items-center q-pa-md">
        <!-- Icono -->
        <div class="logo-icon q-mr-sm">
          <q-icon name="pets" size="42px" color="teal" />
        </div>

        <!-- Texto -->
        <div>
          <div class="text-weight-bold text-dark" style="font-size: 32px; line-height: 1">
            VetCitas
          </div>

          <div class="text-grey-7" style="font-size: 16px">Agenda Veterinaria</div>
        </div>
      </div>

      <!-- Menú lateral -->
      <q-list padding>
        <q-item clickable v-ripple active class="rounded-borders bg-teal text-white q-mb-sm">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section> Dashboard </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-mb-sm rounded-borders">
          <q-item-section avatar>
            <q-icon name="event" />
          </q-item-section>

          <q-item-section> Citas </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-mb-sm rounded-borders">
          <q-item-section avatar>
            <q-icon name="add_circle_outline" />
          </q-item-section>

          <q-item-section> Nueva Cita </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="rounded-borders">
          <q-item-section avatar>
            <q-icon name="pets" />
          </q-item-section>

          <q-item-section> Mascotas </q-item-section>
        </q-item>
      </q-list>
    </div>

    <!-- Footer -->
    <div class="q-pa-lg">
      <div class="row items-center">
        <q-icon name="person_outline" size="32px" class="q-mr-md" />

        <div>
          <div class="text-subtitle1 text-weight-medium">Veterinario</div>

          <div class="text-grey-7">Cerrar sesión</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../css/sidebar.scss"></style>
