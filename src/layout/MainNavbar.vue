<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <div id="font">
          REMEDIAPERU.COM
        </div>
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <!-- <div class="popover-body">
          Designed by Invision. Coded by Creative Tim
        </div> -->
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link "
          href="#/"
        >
          <!-- <i class="far fa-home fa-2x pr-2 pt-2-"></i> -->
          <p>Inicio</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          href="#nosotros"
        >
          <!-- <i class="now-ui-icons arrows-1_cloud-download-93"></i> -->
          <p>Nosotros</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          href="#servicios"
        >
          <!-- <i class="now-ui-icons arrows-1_cloud-download-93"></i> -->
          <p>Servicios</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"  
          href="#contacto"
        >
          <!-- <i class="now-ui-icons arrows-1_cloud-download-93"></i> -->
          <p>Contacto</p>
        </a>
      </li>
      <li class="nav-item" id="enf">
        <router-link to="/en">
          <!-- <a to="/en"> -->
            <img src="img/fotos/en.png">
          <!-- </a> -->
        </router-link>
      </li>

    </template>
  </navbar>
</template>

<script>
import { Navbar } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
