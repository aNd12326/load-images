<template>
  <figure v-lazyload class="image__wrapper">
      <img
        class="image__item"
        :data-url="source"
        alt="img"
      >
  </figure>
</template>

<script>
import LazyLoadDirective from '@/directives/LazyLoadDirective'
export default {
  name: "ImageItem",
  props: {
    source: {
      type: String,
      required: true
    }
  },
  components: {
    LazyLoadDirective
  }
}
