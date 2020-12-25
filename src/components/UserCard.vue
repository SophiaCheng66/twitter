<template>
  <div class="test2 col-9">
    <ul class="list-group rounded-0" style="width: 1063px; height: 1320px">
      <li class="list-group-item bold">使用者列表</li>
      <div class="d-flex flex-row flex-wrap">
        <div v-for="adminUser in adminUsers" :key="adminUser.id">
          <div>
            <div class="card" style="width: 245px; height: 314px">
              <div class="icon-relative">
                <img :src="adminUser.cover" class="card-img-top" alt="" />
                <p class="circle3"></p>
                <img :src="adminUser.avatar" alt="" class="thumbnail3" />
              </div>
              <div class="card-body">
                <div class="card-text">
                  <p class="bold">
                    {{ adminUser.name }}
                  </p>

                  <p class="account color3">@{{ adminUser.account }}</p>
                </div>

                <div class="icon">
                  <div class="d-flex flex-row vector">
                    <div class="d-flex flex-row">
                      <div class="mr-1">
                        <img
                          src="https://i.postimg.cc/65Z7T5qC/Vector-3.png"
                          alt=""
                        />
                      </div>
                      <div class="mr-3">
                        <p>{{ adminUser.Tweets.length }}</p>
                      </div>
                    </div>

                    <div class="d-flex flex-row">
                      <div class="mr-1">
                        <img
                          src="https://i.postimg.cc/Jhp0SsYC/Vector-2.png"
                          alt=""
                        />
                      </div>
                      <p>{{ adminUser.likeCount }}</p>
                    </div>
                  </div>
                  <!-- 1 -->

                  <div class="d-flex flex-row follow test">
                    <div class="mr-2">
                      {{ adminUser.Followings.length }}個<span class="color3"
                        >跟隨中</span
                      >
                    </div>
                    <div>
                      {{ adminUser.Followers.length }}位<span class="color3"
                        >跟隨者</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- card-body -->
            </div>
            <!-- card -->
          </div>
          <!-- 1 -->
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    adminUsers: {
      type: Array,
      required: true,
    },
  },
};
</script>





<style scoped>
.bold {
  font-weight: bold;
}
.list-group {
  border: 1px solid #e6ecf0;
  border-top: none;
  border-right: none;
}
.list-group-item {
  font-weight: bold;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 1100px;
  font-size: 18px;
}
.card {
  border-radius: 10px;
  margin: 15px 0px 0px 18px;
}
.card-img-top {
  width: 245px;
  height: 140px;
}
.icon-relative {
  position: relative;
}
.icon {
  margin-top: -10px;
  margin-left: 8px;
}
.circle3 {
  /* border: 1px solid red; */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 70px;
  left: 70px;
  background-color: white;
}
.test {
  margin-top: -15px;
}
.thumbnail3 {
  position: absolute;
  top: 74px;
  left: 74px;
  width: 92px;
  height: 92px;
  border-radius: 50%;
}
.card-text {
  margin-top: 15px;
  margin-left: 65px;
}
.account {
  margin-top: -15px;
}
.vector {
  margin-left: 40px;
  margin-right: 20px;
  font-size: 15px;
}
.follow {
  margin-left: 30px;
  font-size: 14px;
}
.color3 {
  color: #657786;
}
</style>