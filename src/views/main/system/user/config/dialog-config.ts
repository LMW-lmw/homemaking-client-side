import { IForm } from '@/base-component/form'
export const dialogConfig: IForm = {
  rules: {
    name: [
      {
        required: true,
        message: '请输入名字',
        trigger: 'blur'
      }
    ],
    realname: [
      {
        required: true,
        message: '请输入真实姓名',
        trigger: 'blur'
      }
    ],
    // password: [
    //   {
    //     required: true,
    //     message: '请输入密码',
    //     trigger: 'blur'
    //   }
    // ],
    cellphone: [
      {
        required: true,
        message: '请输入电话号码',
        trigger: 'blur'
      }
    ],
    department: [
      {
        required: true,
        message: '请选择部门信息',
        trigger: 'change'
      }
    ],
    role: [
      {
        required: true,
        message: '请选择角色信息',
        trigger: 'change'
      }
    ]
  },
  formItems: [
    {
      id: 1,
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      id: 2,
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      id: 3,
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码(默认密码为0)',
      isHidden: true
    },
    {
      id: 4,
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      id: 5,
      field: 'department',
      type: 'select',
      label: '部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      id: 6,
      field: 'role',
      type: 'select',
      label: '角色',
      placeholder: '请选择角色',
      options: []
    }
  ],
  collLayout: {
    span: 24
  },
  itemStyle: {
    paddingRight: '10px'
  }
}
