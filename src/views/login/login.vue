<template>
  <div class="login">
    <div class="card">
      <div class="front">
        <form @submit="toSubmit($event)">
          <img src="../../assets/img/logo.png" id="logo" /><br />
          <div class="inputText" id="id">
            <input
              type="text"
              required
              maxlength="15"
              minlength="2"
              v-model="user.userName"
              @focus="userActive"
              @blur="userActive"
              :class="{ focus: UserIsActive }"
            />
            <span data-placeholder="Username"></span>
          </div>

          <div class="inputText" id="password">
            <input
              type="password"
              required
              maxlength="16"
              v-model="user.passWord"
              @focus="passActive"
              @blur="passActive"
              :class="{ focus: passworIsActive }"
            />
            <span data-placeholder="Password"></span>
          </div>
          <input type="submit" value="登录" class="button" />
        </form>
        <p class="remeber">
          <input type="checkbox" id="check" ref="check" />
          <label for="check">
            <span>记住密码</span>
          </label>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import storage from '@/utils/storage'
// import send from '../../service/index'
export default defineComponent({
  components: {},
  setup() {
    let store = useStore()
    let UserIsActive = ref(false)
    let passworIsActive = ref(false)
    let check = ref<any>()
    let user = reactive({
      userName: storage.getItem('info', false)
        ? storage.getItem('info', false).account
        : '',
      passWord: storage.getItem('info', false)
        ? storage.getItem('info', false).password
        : '',
      check: storage.getItem('info', false)
        ? storage.getItem('info', false).check
        : false
    })

    const userActive = () => {
      UserIsActive.value = !UserIsActive.value
      if (user.userName !== '') {
        UserIsActive.value = true
      }
    }
    const passActive = () => {
      passworIsActive.value = !passworIsActive.value
      if (user.passWord !== '') {
        passworIsActive.value = true
      }
    }
    const toSubmit = (e: any) => {
      e.preventDefault()
      if (check.value.checked) {
        let info = {
          account: user.userName,
          password: user.passWord,
          check: true
        }
        storage.setItem('info', info, false)
      } else {
        storage.clear()
      }
      store.dispatch('login/accountLogin', {
        name: user.userName,
        password: user.passWord
      })
    }
    onMounted(() => {
      if (user.userName !== '') {
        UserIsActive.value = true
      }
      if (user.passWord !== '') {
        passworIsActive.value = true
      }
      if (user.check) {
        check.value.checked = true
      }
    })
    return {
      userActive,
      passActive,
      UserIsActive,
      passworIsActive,
      user,
      toSubmit,
      check
    }
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #efeeee;
  align-items: center;
  justify-content: center;
}
#logo {
  position: relative;
  bottom: -20px;
  width: 120px;
  height: 100px;
}
.inputText {
  border-bottom: 2px solid #adadad;
  position: relative;
  margin: 30px 0;
  input {
    font-size: 15px;
    color: #333;
    border: none;
    width: 100%;
    outline: none;
    background: none;
    padding: 0 5px;
    height: 40px;
  }
  span::before {
    content: attr(data-placeholder);
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    z-index: -1;
    transition: 0.5s;
  }
  span::after {
    content: '';
    position: absolute;
    left: 0%;
    top: 100%;
    width: 0%;
    height: 2px;
    background: linear-gradient(120deg, #3498db, #8e44ad);
    transition: 0.5s;
  }
}
.focus + span::before {
  top: -5px;
}
.focus + span::after {
  width: 100%;
}
#id {
  position: relative;
  left: 50px;
  bottom: -30px;
  width: 70%;
}

#password {
  position: relative;
  left: 50px;
  top: 50px;
  width: 70%;
}

.button {
  font-size: 18px;
  color: #596275;
  box-shadow: 9px 9px 18px rgba(0, 0, 0, 0.1),
    -9px -9px 18px rgba(255, 255, 255, 1);
  border-radius: 3rem;
  transition: box-shadow 0.2s ease-out;
  background-color: #efeeee;
  position: relative;
  top: 100px;
  margin-top: 20px;
  width: 130px;
  height: 55px;
  outline: none;
  border: none;
  text-align: center;
}

.button:hover {
  font-size: 16px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2),
    -1px -1px 2px rgba(255, 255, 255, 0.8);
  border-radius: 3rem;
  transition: box-shadow 0.2s ease-out;
  transition: font-size 0.2s ease-out;
  cursor: pointer;
}

.card {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 525px;
  width: 340px;
  z-index: 1;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  .front {
    position: absolute;
    text-align: center;
    box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.1),
      -12px -12px 24px rgba(255, 255, 255, 1);
    border-radius: 3rem;
    background-color: #efeeee;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 1;
  }
}
.remeber {
  position: relative;
  bottom: 20px;
  left: 50px;
  height: 16px;
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 14px;
  color: skyblue;
  cursor: pointer;
  label {
    cursor: pointer;
    span {
      cursor: pointer;
    }
  }
}
#check {
  height: 14px;
  width: 14px;
  margin-right: 5px;
  cursor: pointer;
}
</style>
