<template>
  <div class="d-flex justify-content-center signin">
    <div class="logo">
      <div class="d-flex justify-content-center">
        <img src="https://i.postimg.cc/LsddLPp9/Logo.png" alt />
      </div>
      <div class="bold Alphitter">登入 Alphitter</div>
    </div>
    <div class="form1">
      <form @submit.stop.prevent="handleSubmit">
        <div class="mb-3 label-parents">
          <input
            v-model="email"
            type="email"
            class="form-control input1 input-space rounded-0"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="帳號"
            style="width: 540px; height: 50px"
            required
          />
          <!-- v-model="email" -->
          <label for="exampleInputEmail1" class="form-label">帳號</label>
          <div id="emailHelp" class="form-text"></div>
        </div>

        <div class="mb-3 label-parents">
          <input
            v-model="password"
            type="password"
            class="form-control input1 rounded-0"
            id="exampleInputPassword1"
            placeholder="密碼"
            style="width: 540px; height: 50px"
            required
          />
          <!-- v-model="password" -->

          <label for="exampleInputPassword1" class="form-label">密碼</label>
        </div>

        <button
          style="width: 540px; height: 50px"
          type="submit"
          class="btn bold mt-3"
          :disabled="isProcessing"
        >
          {{ isProcessing ? "處理中，請稍後" : "登入" }}
        </button>
      </form>

      <div class="signup-alphitter d-flex justify-content-end">
        <router-link
          to="/signup"
          class="bold mr-1 a1"
          href="#"
          style="color: #0099ff; font-size: 18px"
          >註冊 Alphitter</router-link
        ><span class="bold mr-1" style="color: #0099ff; font-size: 18px"
          >·</span
        >

        <router-link
          to="/admin"
          class="bold"
          href="#"
          style="color: #0099ff; font-size: 18px"
          >後台登入</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization.js";
import { Toast } from "../utils/helpers.js";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit(e) {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入 email 和 password",
          });
          return;
        }

        this.isProcessing = true;
        const response = await authorizationAPI.authorization.signIn({
          email: this.email,
          password: this.password,
        });

        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.token);
        this.$router.push("/tweets");
      } catch (error) {
        console.log("error", error);
        this.password = "";
        this.isProcessing = false;
        Toast.fire({
          icon: "warning",
          title: "請確認您輸入了正確的帳號密碼",
        });
      }
    },
  },
};
</script>

<style scoped>
.signin {
  margin-top: 100px;
  position: relative;
}
.logo {
  margin-top: -60px;
  position: absolute;
}
.form1 {
  margin-top: 65px;
}
button {
  background-color: #ff6600;
  color: white;
  border-radius: 35px;
  font-size: 18px;
}
button:hover {
  color: white;
}
button:focus {
  /* outline: 0; */
  border-color: #ccc;
  outline: none;
  box-shadow: none;
}
.bold {
  font-weight: bold;
}
.Alphitter {
  font-size: 25px;
  margin-top: 30px;
}
.form-control {
  margin-top: -20px;
}

input {
  /* position: relative; */
  background-color: #f5f8fa;
  border-top: none;
  border-right: none;
  border-left: none;
  border-color: #657786;
  border-width: 2px;
}
input.form-control:focus {
  border-color: #ccc;
  outline: none;
  box-shadow: none;
  background-color: #f5f8fa;
  border-color: #657786;
}
.input1:placeholder-shown::placeholder {
  color: transparent;
}
.label-parents {
  position: relative;
  margin-top: 30px;
}
.input1:placeholder-shown ~ label {
  display: block;
}
.input1:not(:placeholder-shown) ~ label {
  display: none;
}

label {
  position: absolute;
  top: 2px;
  left: 12px;
  font-size: 15px;
  font-weight: bold;
  color: #657786;
}
.input-space {
  margin-bottom: 39px;
}

.signup-alphitter {
  margin-top: 40px;
  /* border-bottom: 1px solid #0099ff;
  width: 70px; */
  text-decoration: none;
}
a {
  text-decoration: none;
  position: relative;
}
a::after {
  content: "";
  position: absolute;
  background-color: #0099ff;
  width: 72px;
  height: 1px;
  bottom: 3px;
  left: 0px;
}
.a1 {
  text-decoration: none;
  position: relative;
}
.a1::after {
  content: "";
  position: absolute;
  background-color: #0099ff;
  width: 118px;
  height: 1px;
  bottom: 2px;
  left: 0px;
}
</style>


