<template>
  <div>
    <datali-banner></datali-banner>
    <datali-header></datali-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DataliBanner from './components/banner'
import DataliHeader from './components/header'
export default {
    name:'Datali',
    components:{
      DataliBanner,
      DataliHeader
    }
}
</script>

<style lang="stylus" scoped>
  .content 
    height 50rem
</style>