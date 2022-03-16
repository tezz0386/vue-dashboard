<template>
  <nav>
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
  </nav>
  <router-view/>
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
    }
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
