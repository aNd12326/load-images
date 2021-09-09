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
                Remediation of
                <span class="typed-text">{{ typeValue }}</span>
                <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
              </p>
            </div>
          </div>
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
    <div id="about" class="section section-about-us">
      <div class="container pb-1">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">About Us</h2>
            <!-- <h5 class="description"></h5> -->
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview pt-3">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="
                  background-image: url('img/fotos/oka41.jpg');
                "
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "It produces an immense sadness to think that nature speaks while mankind does not listen to it."
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
                style="
                  background-image: url('img/fotos/oka3.jpg');
                "
              ></div>
              <h3 class="pt-3">Our mission</h3>
              <p>
                Provide responsible and innovative solutions with quality, in accordance with the highest standards, that allow sustained growth, positively impacting the environment.
              </p>
              <h3 class="pt-3">Our vision</h3>
              <p>
                In accordance with the projection of our company, our vision is the following: "To be a leading company in the sector, recognized for its high level of technology, innovation and its commitment to promote a better environment".
              </p>
            </div>

           <div class="col-md-12">
              <h3 class="pt-5">Our values</h3>
              <p>
                Values are a reference that should guide behavior
                 basic of all the people who are part of the company
                 REMEDIA PERU to fulfill the responsibilities from each one
                 of their jobs. These values are:<br />
              </p>
              <div class="col-md-12">
                <carousel-section></carousel-section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
<div id="services" class="section section-team text-center">
      <div class="container">
        <h2 class="title pb-3">Our services</h2>
        <div class="team">
          <div class="row p-5">
            <div class="row">
              <div class="col-md-8">
                <h4 class="title sinmargintop">
                  SOLIDIFICATION / STABILIZATION(IN SITU/EX SITU)
                </h4>
                <p class="description text-justify">
                  Technologies that reduce the solubility, reactivity or mobility of polluting elements by modifying their chemical state or physical immobilization by stabilizing agents (stabilization); or they convert the waste with the contaminant into a solid that can be easily and safely handled, avoiding the risk of volatilization, leaching or leaks (solidification).
                </p>
              </div>
              <div class="col-md-4">
                <img src="img/fotos/solidificacion.png" alt="Thumbnail Image" />
              </div>
            </div>
          </div>

          <div class="row p-5">
            <div class="row">
              <div class="col-md-8">
                <h4 class="title sinmargintop">THERMAL TREATMENTS</h4>
                <p class="description text-justify">
                  
                </p>
                <p class="description text-justify">
                  <ol>
                    <li class="pb-2">
                      <span class="font-weight-bold">Enhanced Thermal Conduction.</span> The contaminated soil is excavated and placed in a desorber, applying heat to volatilize the organic contaminants and separate them from the treated soil. Using a transport gas or a vacuum system, the water and volatilized pollutants are drawn into the gas treatment system. It is a process of physical separation where the residence time and the temperature of the system are designed to volatilize the contaminants and not to oxidize or destroy them.
                    </li>
                    <li><span class="font-weight-bold">Incineration..</span> It is an Ex Situ treatment in which the excavated soil is subjected to high temperatures. Incinerator equipment is a device that operates at temperatures ranging from 760 to 1,200 ° C to volatilize and burn halogenated compounds and other refractory organics. Waste gases from combustion require further treatment</li>
                  </ol>
                </p>
              </div>
              <div class="col-md-4">
                <img src="img/fotos/ttermico.jpg" alt="Thumbnail Image" />
              </div>
            </div>
          </div>

          <div class="row p-5">
            <div class="row">
              <div class="col-md-8">
                <h4 class="title sinmargintop">PHYSICAL CHEMICAL TREATMENT</h4>
                <p class="description text-justify">
                  Soil washing implies a reduction in the volume of contaminated soil that requires subsequent treatment. It is considered a pollution transfer technology, in which the contaminated fraction from the soil cleaning processes must be subsequently treated using appropriate techniques, depending on the contaminants present. The process of separation of present pollutants can be achieved through the following ways:
                </p>
                <p class="description text-justify">
                  <ol>
                    <li class="pb-2">
                      By concentration of pollutants in a smaller volume of soil, by separation by particle size and / or separation by gravity.
                    </li>
                    <li>
                      By dissolving or suspending contaminants in a wash solution (eg, by adding surfactants, chelating agents, pH adjustments, etc.).
                    </li>
                  </ol>
                </p>
              </div>
              <div class="col-md-4">
                <img src="img/fotos/tratamientofq.jpg" alt="Thumbnail Image" />
              </div>
            </div>
          </div>

          <div class="row p-5">
            <div class="row">
              <div class="col-md-8">
                <h4 class="title sinmargintop">
                  BIOREMEDIATION IN SLUDGE PHASE
                </h4>
                <p class="description text-justify">
                  It is an Ex Situ methodology and consists of the control treatment of contaminated soil in bioreactors in which a series of biological reactions are carried out by microorganisms or enzymes. After physical separation of coarse material and rubble, the soil is mixed with water to a concentration dependent on the concentration of pollutants, the rate of biodegradation and the physical nature of the soils. The solids are kept in suspension and are mixed with nutrients and oxygen. It may be necessary to add additives to control the pH. When the biodegradation is complete, the soil suspension is dried in clarifying equipment, pressure filters, vacuum filters, drying or centrifuges.
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

  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
import CarouselSection from "./components/CarouselSectionEn";
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
        "floors with cutting-edge techniques and technologies in Peru, under an innovative, efficient and very environmentally friendly approach.",
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
