export const projectDir = `
├── README.md
├── babel.config.js
├── commitlint.config.js
├── package-lock.json
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.less
│   │   │   ├── icon
│   │   │   │   ├── iconfont.css
│   │   │   │   ├── iconfont.ttf
│   │   │   │   ├── iconfont.woff
│   │   │   │   └── iconfont.woff2
│   │   │   └── index.less
│   │   └── img
│   │       ├── dog.jpeg
│   │       ├── logo.png
│   │       └── mainlogo.png
│   ├── base-component
│   │   ├── card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── card.vue
│   │   ├── code
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── code.vue
│   │   ├── count-up
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── countup.vue
│   │   ├── descriptions
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── descriptions.vue
│   │   │   └── types
│   │   │       └── types.ts
│   │   ├── echart
│   │   │   ├── data
│   │   │   │   └── china.json
│   │   │   ├── hooks
│   │   │   │   └── useEchart.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── base-echart.vue
│   │   ├── editor
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── index.vue
│   │   ├── form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── form.vue
│   │   │   └── type
│   │   │       └── index.ts
│   │   ├── table
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── table.vue
│   │   │   └── type
│   │   │       └── index.ts
│   │   └── text-link
│   │       ├── index.ts
│   │       └── src
│   │           └── textlink.vue
│   ├── components
│   │   ├── breadcrumb
│   │   │   ├── breadcrumb.vue
│   │   │   └── type
│   │   │       └── breadcrumb.ts
│   │   ├── page-content
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-content.vue
│   │   ├── page-dialog
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-dialog.vue
│   │   ├── page-search
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-search.vue
│   │   ├── sidebar
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── itemChild.vue
│   │   │       ├── sidebar.vue
│   │   │       ├── siderItem.vue
│   │   │       └── util
│   │   │           └── sider.ts
│   │   ├── topbar
│   │   │   └── topbar.vue
│   │   └── use-echarts
│   │       ├── index.ts
│   │       ├── src
│   │       │   ├── bar-echart.vue
│   │       │   ├── line-echart.vue
│   │       │   ├── map-echart.vue
│   │       │   ├── pie-echart.vue
│   │       │   └── rose-echart.vue
│   │       ├── type
│   │       │   └── index.ts
│   │       └── util
│   │           ├── convert-data.ts
│   │           └── coordinate-data.ts
│   ├── global
│   │   ├── directive
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── regist-properties.ts
│   │   └── register-element.ts
│   ├── hook
│   │   ├── use-dialog.ts
│   │   └── use-permission.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   └── main
│   │       ├── analysis
│   │       │   ├── dashboard
│   │       │   │   └── dashboard.ts
│   │       │   └── overview
│   │       │       └── overview.ts
│   │       ├── product
│   │       │   ├── category
│   │       │   │   └── category.ts
│   │       │   └── worker
│   │       │       └── worker.ts
│   │       └── system
│   │           ├── department
│   │           │   └── department.ts
│   │           ├── menu
│   │           │   └── menu.ts
│   │           ├── role
│   │           │   └── role.ts
│   │           └── user
│   │               └── user.ts
│   ├── service
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── type.ts
│   │   ├── main
│   │   │   ├── dashboard
│   │   │   │   └── dashboard.ts
│   │   │   └── system
│   │   │       └── system.ts
│   │   ├── request
│   │   │   ├── config.ts
│   │   │   ├── index.ts
│   │   │   └── type.ts
│   │   └── type.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── type.ts
│   │   ├── main
│   │   │   ├── overview
│   │   │   │   ├── dashboard.ts
│   │   │   │   └── type.ts
│   │   │   └── system
│   │   │       ├── system.ts
│   │   │       └── type.ts
│   │   └── type.ts
│   ├── utils
│   │   ├── map-menu.ts
│   │   ├── mitt.ts
│   │   ├── storage.ts
│   │   ├── time-format.ts
│   │   └── vuexUtil.ts
│   └── views
│       ├── error
│       │   └── 404.vue
│       ├── login
│       │   └── login.vue
│       └── main
│           ├── analysis
│           │   ├── dashboard
│           │   │   └── dashboard.vue
│           │   └── overview
│           │       ├── config
│           │       │   ├── dependencies.ts
│           │       │   ├── dev-dependencies.ts
│           │       │   ├── index.ts
│           │       │   ├── project-dir.ts
│           │       │   └── technology-stacks.ts
│           │       └── overview.vue
│           ├── main.vue
│           ├── product
│           │   ├── category
│           │   │   ├── category.vue
│           │   │   └── config
│           │   │       ├── content-config.ts
│           │   │       ├── dialog-config.ts
│           │   │       └── search-config.ts
│           │   └── worker
│           │       ├── config
│           │       │   ├── content-config.ts
│           │       │   ├── dialog-config.ts
│           │       │   └── search-config.ts
│           │       └── worker.vue
│           └── system
│               ├── department
│               │   ├── config
│               │   │   ├── content-config.ts
│               │   │   └── search-config.ts
│               │   └── department.vue
│               ├── menu
│               │   ├── config
│               │   │   ├── content-config.ts
│               │   │   └── search-config.ts
│               │   └── menu.vue
│               ├── role
│               │   ├── config
│               │   │   ├── content-config.ts
│               │   │   ├── dialog-config.ts
│               │   │   └── search-config.ts
│               │   └── role.vue
│               └── user
│                   ├── config
│                   │   ├── content-config.ts
│                   │   ├── dialog-config.ts
│                   │   └── search-config.ts
│                   └── user.vue
├── tsconfig.json
└── vue.config.js
`
