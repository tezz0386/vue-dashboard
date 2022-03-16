<template>
  <!-- <nav>
     <template v-if="authenticated">
      <ul>
        <li>Your name: {{user.name}}</li>
      </ul>
      <router-link to="/dashboard">Dashboard </router-link>|
      <a href="#" v-on:click="signOut">Signout </a>|
    </template>
    <template v-else>
      <router-link to="/login">Login </router-link> |
    </template>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div>
       <router-view/>
       <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed:{
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      }),
  },
  methods:{
    ...mapActions({
      signOutAction: 'auth/signOutAction',
    }),
    signOut(){
      this.signOutAction().then(()=>{
          this.$router.replace({
            name:'home'
          });
      });
    },
  }

}
</script>
<style>
.admin-header {
  margin-left: 300px;
}
.bars {
  font-size: 25px;
  color: black;
}
</style>
