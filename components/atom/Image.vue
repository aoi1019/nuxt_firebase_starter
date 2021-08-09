<template>
  <img
    :class="className"
    :src="ConvertImagePath(src, isMovile && spSize ? spSize : size)"
    :alt="alt"
    :width="width ? width : null"
    :height="height ? height : null"
    :area-label="areaLabel ? areaLabel : null"
  >
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { ConvertImagePath } from "~/utils/functions/img"

export default defineComponent({
  props: {
    className: {
      type: String,
      default: "",
      required: false,
    },
    src: {
      type: String,
      default: "",
      required: true,
    },
    alt: {
      type: String,
      default: "",
      required: true,
    },
    width: {
      type: Number,
      default: 0,
      required: false,
    },
    height: {
      type: Number,
      default: 0,
      required: false,
    },
    size: {
      type: Number,
      default: 1,
      required: false,
    },
    spSize: {
      type: Number,
      default: 1,
      required: false,
    },
    ariaLabel: {
      type: String,
      default: "",
      required: false,
    },
  },
  setup(props, context: any) {
    const isMobile = ref<boolean>(false)
    isMobile.value = context.root.$device.isMobile

    return {
      isMobile,
      ConvertImagePath,
    }
  },
})
</script>

