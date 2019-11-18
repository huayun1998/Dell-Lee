<template>
  <div class="list">
      <ul 
      v-for="item of letters" 
      :key="item"
      :ref="item"
      @click="handleClick"
      @touchstart =  "handleLetterClick"
      @touchmove = "handleLetterMove"
      @touchend = 'handleLetterEnd'
      >
        <li class="item">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    data() {
        return {
            touchStatus: false
        }
    },
    computed: {
        letters(){
            const letters = []
            for (let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    methods: {
        handleClick(e){
            this.$emit('change',e.target.innerText)
        },
        handleLetterClick(){
            this.touchStatus = true
        },
        handleLetterMove(e){
            if(this.touchStatus){
                const startY = this.$refs['A'][0].offsetTop
                const stuchY = e.touches[0].clientY -79
                const index = Math.floor((stuchY- startY)/22)
                if(index>=0 &&index<this.letters.length){
                    this.$emit('change', this.letters[index])
                }
            }
        },
        handleLetterEnd(){
            this.touchStatus = false
        }
    },
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
            line-height .44rem
            text-align center
            color $bgColor
</style>