const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'citas', component: () => import('pages/CitasPage.vue') },
      { path: 'nueva-cita', component: () => import('pages/NuevaCitaPage.vue') },
      { path: 'mascotas', component: () => import('pages/MascotasPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
