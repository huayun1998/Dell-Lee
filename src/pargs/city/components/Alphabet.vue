<template>
  <div class="list">
      <ul v-for="(item,key) of cities" :key="key">
          <li class="item">{{key}}</li>

      </ul>
  </div>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .list 
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        display flex //设置其属性为flex flex可以进行弹性布局
        flex-direction column //使list以竖状排列
        justify-content center //使列表处于竖状排列居中
        .item
            line-height .45rem
            text-align center
            color $bgColor
</style>