<template>
  <div class="svg-container">
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SvgIcon extends Vue {
  @Prop(String) private iconClass!: string
  @Prop(String) private className!: string

  private get iconName() {
    return `#icon-${this.iconClass}`
  }
  private get svgClass() {
    if (this.className) {
      return 'svg-icon ' + this.className
    } else {
      return 'svg-icon'
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>