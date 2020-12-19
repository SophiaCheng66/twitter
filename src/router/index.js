import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound'
import Tweets from '../views/Tweets'
<<<<<<< HEAD
=======
import UserProfile from '../views/UserProfile'
import UserFollower from '../views/UserFollower'
import UserFollowing from '../views/UserFollowing'
import UserProfileReplied from '../views/UserProfileReplied'
import UserProfileLiked from '../views/UserProfileLiked'
import UserOtherProfile from '../views/UserOtherProfile'
import UserOtherReplied from '../views/UserOtherReplied'
import UserOtherLiked from '../views/UserOtherLiked'
>>>>>>> 49f4ad3... update UserFollowing & UserFollower


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/tweets'
    },
    {
      path: '/tweets',
      name: 'tweets',
      component: Tweets
    },
    {
<<<<<<< HEAD
=======
      path: '/tweet/:id',
      name: 'tweet',
      component: () => import('../views/Tweet.vue')

    },
    {
<<<<<<< HEAD
      path: '/users/:id/edit',
      name: 'users-edit',
      //動態載入
      component: () => import('../views/UserProfileEdit.vue')
=======
      path: '/users/follower',
      name: 'user-follower',
      component: UserFollower
>>>>>>> 49f4ad3... update UserFollowing & UserFollower
    },
    {
<<<<<<< HEAD
      path: '/admin',
      name: 'admin-signIn',
      component: () => import('../views/AdminSignIn.vue')
=======
      path: '/users/following',
      name: 'user-following',
      component: UserFollowing
>>>>>>> 49f4ad3... update UserFollowing & UserFollower
    },

    {
>>>>>>> f920617... create UserProfileEdit
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
