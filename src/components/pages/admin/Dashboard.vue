<template>
  <div>
    <div class="admin-header">
      <nav class="navbar navbar-expand navbar-light bg-info sticky-top">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a href="#" class="me-5 bars"><i class="fa-solid fa-bars"></i></a>
            <a class="navbar-brand" href="#">Home</a>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul class="navbar-nav ms-auto mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="admin-main-content p-3">This is for test</div>
    </div>
    <div class="admin-side-menu">
      <div class="side-menu-heading p-3">
        <label for="logo"
          >logo <span class="text-danger">Tejendra Dangaura</span></label
        >
      </div>
      <div class="admin-side-menu-body mt-3">
        <div>
          <ul class="list-unstyled side-menu">
            <li>
              <a href="#" class="p-2"
                ><span><i class="fa-solid fa-gauge pe-2"></i></span>Dashboard</a
              >
            </li>
            <li>
              <a href="#" class="p-2"
                ><span><i class="fa-solid fa-gear pe-2"></i></span>Setting</a
              >
            </li>
            <li>
              <a href="#" class="p-2"
                ><span><i class="fa-solid fa-images pe-2"></i></span>Gallery</a
              >
            </li>
            <li>
              <a href="#" class="p-2" @click="openMenu()">
                <span><i class="fa-solid fa-border-none pe-2"></i></span>
                Form
                <span class="float-end pe-2">
                  <i class="fa-solid fa-angle-right" v-if="this.form.show"></i>
                  <i class="fa-solid fa-angle-down" v-if="!this.form.show"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminDashboard",
  data(){
      return{
          form:{
              show:true,
          }
      }
  },
  methods:{
      openMenu(){
          this.form.show= !this.form.show
      }
  }
};
</script>
<style scoped>
.admin-header {
  margin-left: 300px;
}
.admin-side-menu {
  background-color: rgb(121, 159, 196);
  height: 100vh;
  width: 300px;
  position: fixed;
  top: 0;
}
.bars {
  font-size: 25px;
  color: black;
}
.side-menu-heading {
  background-color: rgb(13, 202, 240);
}
.admin-side-menu-body {
  border-right: 1px slateblue solid;
  height: 100%;
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
.side-menu-active{
     background-color: blue;
}
</style>