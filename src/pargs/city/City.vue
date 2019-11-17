<template>
    <div>
        <city-header></city-header>
        <City-Search></City-Search>
    </div>
  
</template>

<script>
import CityHeader from './components/Cityheader'
import CitySearch from './components/Search'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch
    }
}
</script>

<style lang='stylus' scoped>

</style>