<template>
  <div id="carousel">
    <div class="container">
      <!-- <div class="title">
        <h4>Carousel</h4>
      </div> -->
      <div class="row justify-content-center">
        <div class="col-md-12 col-sm-12">
          <el-carousel height="500px">
            <el-carousel-item>
              <img class="d-block" src="img/bg1.jpg" alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Security</h5>
                <p>The safety of our work team and safety in the performance of our activities is considered our main priority.</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/fotos/ma.jpg" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Respect for the Environment</h5>
                <p>The conservation of the environment is one of our pillars and we are an ally of the environmental policies that are proposed worldwide.</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/bg3.jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Integrity</h5>
                <p>Be upright in all the actions in which the company undertakes to comply.</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/fotos/Responsabilidad(1).jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Responsibility</h5>
                <p>We responsibly assume all the activities we carry out and at all levels.</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/fotos/Cliente(1).jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Customer service</h5>
                <p>We make every effort to exceed our clients' expectations.</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';
export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>
<style></style>