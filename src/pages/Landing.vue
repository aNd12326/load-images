<template>
  <div>
    <div id="/" class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/fotos/oka1.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <img src="img/fotos/logo.png" alt="Thumbnail Image" />
          </div>
          <div class="col-md-6 col-sm-12">
            <!-- <h4 class="title">Remediación de suelos con técnicas y tecnologías de vanguardia en Perú,bajo un enfoque innovador, eficientey muy respetuoso del medioambiente.  </h4> -->
            <div class="banner pt-4">
              <p>
                Remediación de
                <span class="typed-text">{{ typeValue }}</span>
                <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
              </p>
            </div>
          </div>
        </div>
        <div class="row align-items-end">
          <div class="col-12">
            <div class="text-center">
              <a href="https://www.facebook.com/Remediaperu-211979740810886" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="https://twitter.com/REMEDIAPERU1" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div id="nosotros" class="section section-about-us">
      <div class="container pb-1">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Nosotros</h2>
            <!-- <h5 class="description"></h5> -->
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview pt-3">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/fotos/oka41.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "Produce una inmensa tristeza pensar que la naturaleza habla mientras el género humano no la escucha"
                  <br />
                  <br />
                  <small>-Victor Hugo</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/fotos/vision.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/fotos/oka3.jpg')"
              ></div>
              <h3 class="pt-3">Nuestra Misión</h3>
              <p>
                Proveer soluciones responsables e innovadoras con calidad, de acuerdo con los más altos estándares, que permitan un crecimiento sostenido, impactando en forma positiva sobre el medio ambiente.
              </p>
              <h3 class="pt-3">Nuestra Visión</h3>
              <p>
                De acuerdo con la proyección de nuestra empresa, nuestra visión es la siguiente: “Ser una empresa líder en el sector, reconocida por su alto nivel de tecnología, innovación y su compromiso en propiciar un medio ambiente mejor”.
              </p>
            </div>

            <div class="col-md-12">
              <h3 class="pt-5">Nuestros Valores</h3>
              <p>
                Los valores son una referencia que deben guiar la conducta
                básica de todas las personas que forman parte de la empresa
                REMEDIA PERU para cumplir las responsabilidades desde cada uno
                de sus puestos de trabajo. Estos valores son: <br />
              </p>
              <div>
                <carousel-section></carousel-section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <div id="servicios" class="section section-team text-center">
      <div class="container">
        <h2 class="title pb-3">Nuestros Servicios</h2>
        <div class="team">
          <div class="row pb-5">
              <div class="col-md-8">
                <h4 class="title sinmargintop">
                  SOLIDIFICACIÓN / ESTABILIZACIÓN (IN SITU/EX SITU)
                </h4>
                <p class="description text-justify">
                  Tecnologías que reducen la solubilidad, reactividad o
                  movilidad de los elementos contaminantes mediante modificación
                  de su estado químico o inmovilización física por agentes
                  estabilizantes (estabilización); o bien convierten el residuo
                  con el contaminante en un sólido de manipulación sencilla y
                  segura, evitando riesgos de volatilización, lixiviación o
                  fugas (solidificación).
                </p>
              </div>
              <div class="col-md-4">
                <img src="img/fotos/solidificacion.png" alt="Thumbnail Image" />
              </div>
          </div>
          <div class="row pb-5">
            
              <div class="col-md-8">
                <h4 class="title sinmargintop">TRATAMIENTOS TERMICOS</h4>
                <p class="description text-justify">
                  <ol>
                    <li class="pb-2">
                      <span class="font-weight-bold">Desorción Térmica Mejorada.</span> El suelo contaminado es excavado y colocado en un desorbedor, aplicándose calor para volatilizar los contaminantes orgánicos y separarlos del suelo tratado. Mediante un gas de transporte o un sistema de vacío se extrae el agua y los contaminantes volatilizados hacia el sistema de tratamiento de gas. Es un proceso de separación física en donde el tiempo de residencia y la temperatura del sistema están diseñados para volatilizar los contaminantes y no para oxidarlos o destruirlos.
                    </li>
                    <li><span class="font-weight-bold">Incineración.</span> Es un tratamiento Ex Situ en el que el suelo excavado se somete a elevadas temperaturas.Los equipos incineradores son dispositivos que operan con temperaturas que van desde los 760 a los 1.200 °C para volatilizar y quemar compuestos halogenados y otros orgánicos refractarios. Los gases residuales de la combustión requieren de tratamiento posterior</li>
                  </ol>
                </p>
              </div>
              <div class="col-md-4">
                <img src="img/fotos/ttermico.jpg" alt="Thumbnail Image" />
              </div>
            
          </div>

          <div class="row pb-5">
           
              <div class="col-md-8">
                <h4 class="title sinmargintop">TRATAMIENTO FÍSICO QUÍMICO</h4>
                <p class="description text-justify">
                  El lavado de suelos implica una reducción de volumen del suelo
                  contaminado que requiere de tratamiento posterior. Se
                  considera una tecnología de transferencia de contaminación, en
                  la que la fracción contaminada procedente de los procesos de
                  limpieza del suelo debe ser posteriormente tratada mediante
                  técnicas adecuadas, según los contaminantes que presente. El
                  proceso de separación de contaminantes presentes se puede
                  alcanzar a través de las siguientes vías:
                </p>
                <p class="description text-justify">
                  <ol>
                    <li class="pb-2">
                      Por concentración de contaminantes en un menor volumen de suelo, mediante separación por tamaño de partículas y/o separación por gravedad. 
                    </li>
                    <li>
                      Por disolución o suspensión de los contaminantes en una solución de lavado (por ejemplo, mediante la adición de surfactantes, agentes quelantes, ajustes de pH, etc.).
                    </li>
                  </ol>
                </p>
              </div>
              <div class="col-md-4">
                <img src="img/fotos/tratamientofq.jpg" alt="Thumbnail Image" />
              </div>
            
          </div>

          <div class="row pb-5">
           
              <div class="col-md-8">
                <h4 class="title sinmargintop">
                  BIOREMEDIACIÓN EN FASE DE LODOS
                </h4>
                <p class="description text-justify">
                  Es una metodología Ex Situ y consiste en el tratamiento
                  controlado de suelo contaminado en biorreactores en los cuales
                  se producen una serie de reacciones biológicas llevadas a cabo
                  por los microorganismos o enzimas. Previa separación física de
                  material grueso y escombros, el suelo se mezcla con agua hasta
                  una concentración predeterminada dependiendo de la
                  concentración de los contaminantes, la velocidad de
                  biodegradación y la naturaleza física de los suelos. Los
                  sólidos se mantienen en suspensión y se mezclan con nutrientes
                  y oxígeno. Puede ser necesaria la incorporación de aditivos
                  para controlar el pH. Cuando la biodegradación se ha
                  completado, la suspensión del suelo es secada en equipos
                  clarificadores, filtros de presión, filtros de vacío, secado o
                  centrífugas.
                </p>
              </div>
              <div class="col-md-4">
                <img src="img/fotos/bioremediacion.jpg" alt="Thumbnail Image" />
              </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
import CarouselSection from "./components/CarouselSection";
export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    // [CarouselSection.name]: CarouselSection,
  },
  components: {
    CarouselSection,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "suelos con técnicas y tecnologías de vanguardia en Perú, bajo un enfoque innovador,  eficiente y muy respetuoso del medioambiente.",
      ],
      typingSpeed: 75,
      // erasingSpeed: 100,
      // newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>
<style></style>
