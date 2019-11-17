<template>
  <div class="search">
      <!-- placeholder 是填写默认文本的选项 -->
      <input class="search-input" type="text" placeholder="输入城市名或拼音"> 

  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .search
        height .72rem
        padding 0.1rem
        background $bgColor
        .search-input
            // box-sizing border-box 配合input加padding使用，使input文本内容超过
            //其文本框时隐藏一部分
            box-sizing border-box
            height .62rem
            width 100%
            line-height  .62rem
            text-align center
            border-radius .1rem
            margin-top .1rem
            padding 0 .2rem
            color #666
</style>