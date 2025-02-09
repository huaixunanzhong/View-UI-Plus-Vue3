<script lang="ts" setup>
import { useLink } from './useLink'

defineOptions({ name: 'ILink' })

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  linkColor: false,
  target: '_self'
})

interface Props {
  to: object | string
  disabled?: boolean
  linkColor?: boolean
  target?: string
}

const { linkUrl, target, handleCheckClick } = useLink(toRefs(props))

const handleClickItem = (event, new_window = false) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }

  handleCheckClick(event, new_window)
}
</script>

<template>
  <a
    :class="{ 'i-link-color': !props.linkColor }"
    :href="linkUrl"
    :target="target"
    class="i-link"
    @click.exact="handleClickItem($event, false)"
    @click.ctrl="handleClickItem($event, true)"
    @click.meta="handleClickItem($event, true)"
  >
    <slot></slot>
  </a>
</template>

<style lang="less" scoped>
.i-link {
  cursor: pointer;

  &-color {
    &,
    &:hover,
    &:active {
      color: inherit;
    }
  }
}
</style>
