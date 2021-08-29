import { IForm } from '@/base-component/form'
export const dialogConfig: IForm = {
  formItems: [
    {
      id: 1,
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      id: 9,
      field: 'status',
      type: 'select',
      label: '是否上架',
      placeholder: '是否上架',
      options: [
        { title: '上架', value: 1 },
        { title: '下架', value: 2 }
      ]
    },
    {
      id: 2,
      field: 'oldPrice',
      type: 'input',
      label: '旧价格',
      placeholder: '请输入旧价格'
    },
    {
      id: 3,
      field: 'newPrice',
      type: 'input',
      label: '新价格',
      placeholder: '请输入新价格'
    },
    {
      id: 4,
      field: 'imgUrl',
      type: 'input',
      label: '图片路径',
      placeholder: '请输入图片路径'
    },
    {
      id: 5,
      field: 'inventoryCount',
      type: 'input',
      label: '库存',
      placeholder: '请输入库存'
    },
    {
      id: 6,
      field: 'saleCount',
      type: 'input',
      label: '销售量',
      placeholder: '请输入销售量'
    },
    {
      id: 7,
      field: 'favorCount',
      type: 'input',
      label: '收藏数量',
      placeholder: '请输入收藏数量'
    },
    {
      id: 8,
      field: 'address',
      type: 'input',
      label: '商品地址',
      placeholder: '请输入商品地址'
    }
  ],
  collLayout: {
    span: 24
  },
  itemStyle: {
    paddingRight: '10px'
  }
}
