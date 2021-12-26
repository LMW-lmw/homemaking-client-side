<template>
  <div class="overview">
    <lmw-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </lmw-card>
    <lmw-card title="技术栈">
      <lmw-text-link :text-arrs="technologyStacks" />
      <lmw-descriptions
        title="生产环境依赖"
        :column="2"
        :table-datas="dependencies"
      />
      <lmw-descriptions
        title="开发环境依赖"
        :column="2"
        :table-datas="devDependencies"
      />
    </lmw-card>
    <lmw-card title="项目结构">
      <div class="code-left">
        <lmw-code :code="projectDir" language="bash"></lmw-code>
      </div>
    </lmw-card>
    <lmw-card title="项目规范">
      <lmw-descriptions
        title="文件命名规范"
        :column="1"
        :table-datas="[
          { name: '文件夹', description: '统一小写, 多个单词使用-分割' },
          {
            name: '文件(.ts .vue .json .d.ts)',
            description: '统一小写, 多个单词使用-分割'
          }
        ]"
      />
      <lmw-descriptions
        title="编写组件规范"
        :column="1"
        :table-datas="[
          { name: '组件的文件', description: '统一小写, 多个单词使用-分割' },
          {
            name: '组件的目录结构',
            description:
              '例如 table table/src/index.vue, 统一在table/index.ts导出'
          },
          {
            name: '组件导包顺序',
            description:
              '导vue技术栈的包 , 导第三方的工具函数 , 导本地的组件, 导本地的工具函数'
          },
          { name: '组件的名称', description: '统一小写开头，驼峰命名' },
          {
            name: 'template标签',
            description: '小写加 - ( 例如：<case-panel/> )'
          },
          {
            name: 'template标签属性顺序',
            description: 'v-if , v-for , ref, class, style, ... ,事件'
          },
          {
            name: '组件的props',
            description: '小写开头，驼峰命名，必须编写类型默认值'
          },
          {
            name: '组件的样式',
            description:
              '作用域：scoped, lang = less  ; 类名：统一小写, 多个单词使用-分割'
          }
        ]"
      />
    </lmw-card>
    <lmw-card title="Git提交规范">
      <lmw-descriptions
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add .' },
          { name: 'commit 操作', description: 'npm run commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' },
          {
            name: 'gitHub地址',
            description: 'https://github.com/LMW-lmw/homemaking-client-side'
          }
        ]"
      />
    </lmw-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import lmwCode from '@/base-component/code'
import lmwCard from '@/base-component/card'
import lmwTextLink from '@/base-component/text-link'
import lmwDescriptions from '@/base-component/descriptions'

import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir
} from './config'

export default defineComponent({
  name: 'overview',
  components: {
    lmwCard,
    lmwCode,
    lmwDescriptions,
    lmwTextLink
  },
  setup() {
    return { technologyStacks, dependencies, devDependencies, projectDir }
  }
})
</script>

<style scoped lang="less">
.overview {
  width: 98.5%;
  margin-left: 10px;
  margin-bottom: 30px;
  .code-left {
    text-align: left;
  }
}
</style>
