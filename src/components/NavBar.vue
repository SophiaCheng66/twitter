<template>
  <!-- <div class="container mt-3"> -->
  <nav class="nav d-flex flex-column align-items-center">
    <div class="nav-list">
      <div class="nav-top">
        <img
          src="https://i.imgur.com/FwTYXrW.png"
          style="width: 30px"
          alt="logo"
        />
      </div>
      <div class="nav-item d-flex align-items-center">
        <div>
          <img
            src="https://i.imgur.com/OxLE5Bf.png"
            style="width: 20.25px"
            alt
          />
        </div>
        <div>
          <a href="/#/tweets" class="nav-link">首頁</a>
        </div>
      </div>

      <div class="nav-item d-flex align-items-center">
        <img src="https://i.imgur.com/MBiFHBl.png" style="width: 16.7px" alt />
        <router-link
          :to="{ name: 'user', params: { id: currentUser.id } }"
          class="nav-link"
          >個人資料</router-link
        >
      </div>

      <div class="nav-item d-flex align-items-center">
        <img src="https://i.imgur.com/Ce7aQj4.png" style="width: 20.75px" alt />
        <router-link
          :to="{ name: 'set-account', params: { id: currentUser.id } }"
          class="nav-link"
          >設定</router-link
        >
      </div>

      <div>
        <button class="btn-tweet">推文</button>
      </div>
    </div>

    <div class="p-2 nav-bottom">
      <div class="d-flex align-items-center">
        <img src="https://i.imgur.com/4v9ZADO.png" style="width: 16px" alt />
        <button @click="logout">
          <a class="nav-link" href="#">登出</a>
        </button>
      </div>
    </div>
  </nav>
  <!-- </div> -->
</template>


<script>
import { mapState } from "vuex";

export default {
  //vuex `mapState` 方法
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/signin");
    },
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  background: #ffffff;
  width: 25%;
}

.nav-list {
  height: 650px;
  width: 100%;
  margin-top: 14px;
  margin-left: 40px;
}

.nav-top {
  margin-bottom: 40px;
}
.nav-item {
  margin-top: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #1c1c1c;
  vertical-align: middle;
}

.nav-link {
  color: #1c1c1c;
}

.nav-link :hover,
:focus {
  color: #ff6600;
}

.btn-tweet {
  width: 210px;
  height: 45px;
  margin-top: 15px;
  background: #ff6600;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
}

.nav-bottom {
  width: 100%;
  margin-left: 55px;
}
</style>

