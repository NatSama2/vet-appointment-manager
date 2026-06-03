<template>
<q-page class="q-pa-md">

  <div class="row q-col-gutter-md">
    <metric-card
      class="col-6 col-md-3"
      titulo="Citas hoy"
      :valor="6"
      info="24 de abril, 2026"
      icono="event"
    />
    <metric-card
      class="col-6 col-md-3"
      titulo="Pendientes"
      :valor="4"
      info="Por atender"
      icono="schedule"
    />
    <metric-card
      class="col-6 col-md-3"
      titulo="Atendidas"
      :valor="2"
      info="Hoy"
      icono="check_circle"
    />
    <metric-card
      class="col-6 col-md-3"
      titulo="Total citas"
      :valor="32"
      info="Este mes"
      icono="people"
    />
  </div>

  <q-form @‌submit="crearCita">
    <q-input v-model="form.mascota" label="Mascota" />
    <q-input v-model="form.dueno" label="Dueño" />
    <q-input v-model="form.fecha" type="date" />
    <q-input v-model="form.hora" type="time" />

    <q-btn label="Crear cita" type="submit" color="primary" />
  </q-form>

  <q-separator class="q-my-md" />

  <q-input v-model="filtroFecha" type="date" label="Filtrar por fecha" @‌update:model-value="getCitas" />

  <q-table :rows="citas" :columns="columns" row-key="id">
    <template v-slot:body-cell-estado="props">
      <q-td>
        <q-badge :color="props.row.estado === 'pendiente' ? 'orange' : 'green'">
        {{ props.row.estado }}
        </q-badge>
      </q-td>
    </template>

    <template v-slot:body-cell-acciones="props">
      <q-btn
      icon="check"
      color="green"
      @‌click="marcarAtendida(props.row.id)"
      />
    </template>
  </q-table>

</q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from 'src/services/api';
import MetricCard from 'src/components/MetricCard.vue';

const citas = ref([]);
const filtroFecha = ref('');

const form = ref({
mascota: '',
dueno: '',
fecha: '',
hora: ''
});

const columns = [
{ name: 'mascota', label: 'Mascota', field: 'mascota' },
{ name: 'dueno', label: 'Dueño', field: 'dueno' },
{ name: 'fecha', label: 'Fecha', field: 'fecha' },
{ name: 'hora', label: 'Hora', field: 'hora' },
{ name: 'estado', label: 'Estado', field: 'estado' },
{ name: 'acciones', label: 'Acciones', field: 'acciones' }
];

const getCitas = async () => {
let url = '/citas';
if (filtroFecha.value) {
url += `?fecha=${filtroFecha.value}`;
}

const res = await api.get(url);
citas.value = res.data;
};

const crearCita = async () => {
try {
await api.post('/citas', form.value);
getCitas();
} catch (e) {
alert(e.response.data.msg);
}
};

const marcarAtendida = async (id) => {
await api.put(`/citas/${id}`);
getCitas();
};

onMounted(getCitas);
</script>
