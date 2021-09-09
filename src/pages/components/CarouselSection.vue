<template>
  <div id="carousel">
    <div class="containerx">
      <!-- <div class="title">
        <h4>Carousel</h4>
      </div> -->
      <div class="row justify-content-center">
        <div class="col-md-12 col-sm-12">
          <el-carousel height="500px">
            <el-carousel-item>
              <img class="d-block" src="img/bg1.jpg" alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Seguridad</h5>
                <p>Se considera a la seguridad de nuestro equipo de trabajo y seguridad en la realización de nuestras actividades como nuestra principal prioridad.</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/fotos/ma.jpg" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Respeto del Medio Ambiente</h5>
                <p>La conservación del medio ambiente es uno de nuestros pilares y somos un aliado de las políticas medioambientales que se plantean a nivel mundial.</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/bg3.jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Integridad</h5>
                <p>Ser íntegros en todas las acciones en las que se compromete a cumplir la empresa.</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/fotos/Responsabilidad(1).jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Responsabilidad</h5>
                <p>Asumimos de manera responsable todas las actividades que realizamos y a todo nivel.</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/fotos/Cliente(1).jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Servicio al Cliente</h5>
                <p>Realizamos todo el esfuerzo posible para superar las expectativas de nuestros clientes.</p>
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
<style scoped>
.carousel-caption{
text-shadow: 3px -1px 4px black;
font-family: 'Helvetica Neue', Arial, sans-serif;
}
</style>
