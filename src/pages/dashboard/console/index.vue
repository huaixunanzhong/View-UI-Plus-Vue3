<script lang="ts" setup>
// import BaseInfo from './BaseInfo'
// import links from '../components/link.vue'

const title = ref('')
const date = ref('')
const description = ref('')
const modal1 = ref(false)
const baseInfoData = ref([])
</script>

<template>
  <div>
    <!--    <BaseInfo :baseInfoData="baseInfoData" />-->
    <!--    <links />-->
    <!--    <Modal v-model="modal1" :footer-hide="true" :title="title">-->
    <!--      <p>-->
    <!--        <Icon :size="24" type="ios-calendar" />-->
    <!--        :&nbsp;&nbsp;&nbsp;{{ date }}-->
    <!--      </p>-->
    <!--      <p>{{ description }}</p>-->
    <!--    </Modal>-->
  </div>
</template>

<style lang="less" scoped>
.dashboard-console-visit {
  .ivu-radio-group-button .ivu-radio-wrapper {
    border: none !important;
    box-shadow: none !important;
    padding: 0 12px;
  }

  .ivu-radio-group-button .ivu-radio-wrapper:before,
  .ivu-radio-group-button .ivu-radio-wrapper:after {
    display: none;
  }
}

.news-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.spin-container {
  display: inline-block;
  width: 100%;
  height: 100px;
  position: relative;
}

.calendar_card {
  .ivu-card-body {
    // padding: 0px 0px 12px;
  }
}
</style>
