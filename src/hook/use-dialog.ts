import { ref } from 'vue'
import pageDialog from '@/components/page-dialog'

type callBack = (item?: any) => void

// 使用对话框
export function useDialog(addCallBack?: callBack, editCallback?: callBack) {
  const dialogRef = ref<InstanceType<typeof pageDialog>>()
  const infoInit = ref({})
  const addClick = () => {
    if (dialogRef.value) {
      dialogRef.value.title = '添加'
      dialogRef.value.dialogVisible = true
      infoInit.value = {}
    }
    addCallBack && addCallBack()
  }
  const editBtnClick = (item: any) => {
    infoInit.value = { ...item }
    if (dialogRef.value) {
      dialogRef.value.title = '编辑'
      dialogRef.value.dialogVisible = true
    }
    editCallback && editCallback(item)
  }
  return [dialogRef, infoInit, addClick, editBtnClick]
}
