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
          <input type="submit" value="Login" class="button" />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import send from '../../service/index'
export default defineComponent({
  components: {},
  setup() {
    let UserIsActive = ref(false)
    let passworIsActive = ref(false)
    let user = reactive({
      userName: '',
      passWord: ''
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
      interface login {
        token: string
      }
      send
        .post<login>({
          url: 'login',
          data: {
            name: user.userName,
            password: user.passWord
          }
        })
        .then((res) => {
          console.log(res)
        })
    }
    return {
      userActive,
      passActive,
      UserIsActive,
      passworIsActive,
      user,
      toSubmit
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
}

.inputText input {
  font-size: 15px;
  color: #333;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 0 5px;
  height: 40px;
}

.inputText span::before {
  content: attr(data-placeholder);
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  z-index: -1;
  transition: 0.5s;
}

.inputText span::after {
  content: '';
  position: absolute;
  left: 0%;
  top: 100%;
  width: 0%;
  height: 2px;
  background: linear-gradient(120deg, #3498db, #8e44ad);
  transition: 0.5s;
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
  font-size: 20px;
  color: #596275;
  box-shadow: 9px 9px 18px rgba(0, 0, 0, 0.1),
    -9px -9px 18px rgba(255, 255, 255, 1);
  border-radius: 3rem;
  transition: box-shadow 0.2s ease-out;
  background-color: #efeeee;
  position: relative;
  top: 80px;
  margin-top: 20px;
  width: 130px;
  height: 55px;
  outline: none;
  border: none;
  text-align: center;
}

.button:hover {
  font-size: 19px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2),
    -1px -1px 2px rgba(255, 255, 255, 0.8);
  border-radius: 3rem;
  transition: box-shadow 0.2s ease-out;
  transition: font-size 0.2s ease-out;
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
}
.card .front {
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
}
.card .front {
  z-index: 1;
}
</style>
