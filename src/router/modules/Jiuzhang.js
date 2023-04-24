/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const jiuzhangRouter = {
  path: '/jiuzhang',
  component: Layout,
  redirect: '/jiuzhang/validation-result',
  name: 'Validation Result',
  meta: {
    title: 'Jiuzhang',
    icon: 'table'
  },
  children: [
    // {
    //   path: 'dynamic-table',
    //   component: () => import('@/views/table/dynamic-table/index'),
    //   name: 'DynamicTable',
    //   meta: { title: 'Dynamic Table' }
    // },
    // {
    //   path: 'drag-table',
    //   component: () => import('@/views/table/drag-table'),
    //   name: 'DragTable',
    //   meta: { title: 'Drag Table' }
    // },
    // {
    //   path: 'inline-edit-table',
    //   component: () => import('@/views/table/inline-edit-table'),
    //   name: 'InlineEditTable',
    //   meta: { title: 'Inline Edit' }
    // },
    {
      path: 'vdu-deployment',
      component: () => import('@/views/jiuzhang/vdu-deployment'),
      name: 'VduDeployment',
      meta: { title: 'Vdu Deployment' }
    },
    {
      path: 'validation-result',
      component: () => import('@/views/jiuzhang/validation-result'),
      name: 'ValidationResult',
      meta: { title: 'Validation Result' }
    }
  ]
}
export default jiuzhangRouter
