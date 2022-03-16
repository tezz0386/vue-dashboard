<template>
  <div class="admin-side-menu">
    <div class="side-menu-heading p-3">
      <label for="logo">
        <img
          :src="require('../../../../assets/logo.png')"
          alt="image not found"
          class="logo"
        />
        <span class="text-danger">Tejendra Dangaura</span>
      </label>
    </div>
    <div class="admin-side-menu-body mt-3">
      <div>
        <ul class="list-unstyled side-menu">
          <li class="pt-1 pb-1">
            <router-link to="/dashboard" :class="{active: activePage=='dashboard'}">
            <a href="#" class="p-2"
              >
              <span><i class="fa-solid fa-gauge pe-2"></i></span>Dashboard
              </a
            >
            </router-link>
          </li>
          <li class="pt-1 pb-1">
            <router-link to="/admin/setting" :class="{active: activePage=='setting'}">
            <a href="#" class="p-2">
              <span><i class="fa-solid fa-gear pe-2"></i></span>
              Setting
            </a>
            </router-link>
          </li>
          <li class="pt-1 pb-1">
            <a href="#" class="p-2"
              ><span><i class="fa-solid fa-images pe-2"></i></span>Gallery</a
            >
          </li>
          <li class="pt-1 pb-1">
            <a
              class="p-2"
              @click="this.form.show = !this.form.show"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <span><i class="fa-solid fa-border-none pe-2"></i></span>
              Form
              <span class="float-end pe-2">
                <i class="fa-solid fa-angle-right" v-if="this.form.show"></i>
                <i class="fa-solid fa-angle-down" v-if="!this.form.show"></i>
              </span>
            </a>
            <div class="collapse" id="collapseExample">
              <div class="card card-body p-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      ><span class="pe-2"
                        ><i class="fa-solid fa-circle-right"></i></span
                      >Basic Form</a
                    >
                  </li>
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      ><span class="pe-2"
                        ><i class="fa-solid fa-circle-right"></i
                      ></span>
                      Advance Form</a
                    >
                  </li>
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      ><span class="pe-2"
                        ><i class="fa-solid fa-circle-right"></i></span
                      >Others Element</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li class="pt-1 pb-1">
            <a
              class="p-2"
              @click="this.page.show = !this.page.show"
              data-bs-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample1"
            >
              <span><i class="fa-brands fa-pagelines pe-2"></i></span>
              Page
              <span class="float-end pe-2">
                <i class="fa-solid fa-angle-right" v-if="this.page.show"></i>
                <i class="fa-solid fa-angle-down" v-if="!this.page.show"></i>
              </span>
            </a>
            <div class="collapse" id="collapseExample1">
              <div class="card card-body p-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      ><span class="pe-2"
                        ><i class="fa-solid fa-circle-right"></i></span
                      >Login Page</a
                    >
                  </li>
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      ><span class="pe-2"
                        ><i class="fa-solid fa-circle-right"></i
                      ></span>
                      Register</a
                    >
                  </li>
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      ><span class="pe-2"
                        ><i class="fa-solid fa-circle-right"></i></span
                      >Welcome</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminSideMenu",
  props:{
    activePage:null,
  },
  data() {
    return {
      form: {
        show: true,
      },
      page: {
        show: true,
      },
    };
  },
  methods: {
   
  },
};
</script>
<style scoped>
.admin-side-menu {
  background-color: rgb(121, 159, 196);
  height: 100vh;
  width: 300px;
  position: fixed;
  top: 0;
}
.side-menu-heading {
  background-color: rgb(13, 202, 240);
}
.admin-side-menu-body {
  border-right: 1px slateblue solid;
  height: 100%;
  overflow-x: scroll;
}
.side-menu li {
  display: block;
}
.side-menu li a {
  text-decoration: none;
  display: block;
  color: rgb(27, 26, 26);
  font-weight: 600;
}
.side-menu li a:hover {
  background-color: blue;
  color: aqua;
}
.logo {
  height: 23px;
  width: auto;
}
.active{
   background-color: blue;
}
</style>