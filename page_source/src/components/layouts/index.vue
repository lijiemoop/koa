<template>
   <a-layout>
     <HeaderComponent></HeaderComponent>
      <router-view/>
   </a-layout>
</template>

<script>
import HeaderComponent from '@/components/layouts/HeaderComponent'

export default {
  name: 'Header',
  components: { HeaderComponent },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
