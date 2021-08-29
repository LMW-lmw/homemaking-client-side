<template>
  <div class="lmw-from">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="lableWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.id">
          <el-col v-bind="collLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
              v-show="!item.isHidden"
              class="form-item"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :model-value="data[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :model-value="data[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  class="date"
                  style="width: 100%"
                  :model-value="data[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../type'
export default defineComponent({
  name: 'lmwForm',
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    data: {
      type: Object,
      required: true
    },
    lableWidth: {
      type: String,
      default: '80px'
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: '30px 20px 0px 20px'
      })
    },
    collLayout: {
      type: Object,
      default: () => ({
        xl: 6, //1920 4个
        gl: 8, //1200 3
        md: 8, //992 2
        sm: 12, //768 1
        xs: 24 //<768 1
      })
    }
  },
  emits: ['update:data'],
  setup(props, { emit }) {
    // let formData = ref({ ...props.data })
    // watch(
    //   formData,
    //   (newValue) => {
    //     emit('update:data', newValue)
    //   },
    //   {
    //     deep: true
    //   }
    // )
    const handleValueChange = (value: any, field: string) => {
      emit('update:data', { ...props.data, [field]: value })
    }
    return { handleValueChange }
  }
})
</script>

<style scoped>
.lmw-from {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
