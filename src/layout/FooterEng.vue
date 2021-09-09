<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container" id="contact">
      <div class="section section-team text-center" id="chcolor">
        <div class="container">
          <h3 class="title pb-2">Contact us by</h3>
            <div class="row pt-4">
              <div class="col-md-2">
                  <div>
                  <i class="fal fa-clock fa-2x"></i>
                  <p class="pt-3">Monday - Friday <br> 7:20 am - 5:30 pm</p>
                  </div>
              </div>
              <div class="col-md-2">
                <div>
                  <i class="far fa-phone-alt fa-2x"></i>
                  <p class="pt-3">+51 994207995</p>
                </div>
              </div>
              <div class="col-md-2">
                  <div>
                  <a
                    class="nav-link"
                    rel="tooltip"
                    title="Follow us on Twitter"
                    data-placement="bottom"
                    href="https://twitter.com/REMEDIAPERU1"
                    target="_blank"
                  >
                    <i class="fab fa-twitter fa-2x" id="mediasocials"></i>
                    <p class="pt-3">Twitter</p>
                  </a>
                  </div>
              </div>
              <div class="col-md-2">
                  <a
                    class="nav-link"
                    rel="tooltip"
                    title="Like us on Facebook"
                    data-placement="bottom"
                    href="https://www.facebook.com/Remediaperu-211979740810886"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-square fa-2x" id="mediasocials"></i>
                    <p class="pt-3">Facebook</p>
                  </a>
              </div>
              <div class="col-md-2">
                <div>
                  <i class="fal fa-map-marker-alt fa-2x"></i>
                  <p class="pt-3">Calle 932 N° 15 - 23 of 401 <br> Lima - Perú</p>
                </div>
              </div>
              
              <div class="col-md-2">
                <div>
                  <i class="far fa-envelope fa-2x"></i>
                  <p class="pt-3">informes@remediaperu.com</p>
                </div>
              </div>
            </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4 col-sm-10 ">
        <div class="text-center">
          <img src="img/fotos/ari2.png" alt="Thumbnail Image" />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-2 text-center">
        &copy; {{ year }}
      </div>
    </div>
      
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>