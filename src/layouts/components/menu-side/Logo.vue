<script lang="ts" setup>
import ILink from '@/components/link/index.vue'

interface Props {
  hideLogo: boolean
  menuCollapse: boolean
  siderTheme: string
}

const props = withDefaults(defineProps<Props>(), {
  hideLogo: false,
  menuCollapse: false,
  siderTheme: 'dark'
})
</script>

<template>
  <ILink v-show="!props.hideLogo" :disabled="true" :link-color="false" to="/">
    <img
      v-if="props.menuCollapse"
      alt=""
      src="@/assets/images/logo-small.png"
    />
    <img
      v-else-if="props.siderTheme === 'light'"
      alt=""
      src="@/assets/images/logo.png"
    />
    <img v-else alt="" src="@/assets/images/logo-dark.png" />
  </ILink>
</template>

<style scoped></style>
