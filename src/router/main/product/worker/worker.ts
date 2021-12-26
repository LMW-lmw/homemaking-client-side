const worker = () => import('@/views/main/product/worker/worker.vue')
export default {
  path: '/main/product/worker',
  name: 'worker',
  component: worker,
  children: []
}
