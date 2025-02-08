<script lang="ts" setup>
interface Props {
  hideLogo: boolean
  menuCollapse: boolean
  siderTheme: string
}

const props = withDefaults(defineProps<Props>(), {
  hideLogo: false,
  menuCollapse: false,
  siderTheme: 'dark',
})
</script>

<template>
  <i-link v-show="!props.hideLogo" to="/">
    <img v-if="props.menuCollapse" src="@/assets/images/logo-small.png" />
    <img
      v-else-if="props.siderTheme === 'light'"
      src="@/assets/images/logo.png"
    />
    <img v-else src="@/assets/images/logo-dark.png" />
  </i-link>
</template>

<style scoped></style>
