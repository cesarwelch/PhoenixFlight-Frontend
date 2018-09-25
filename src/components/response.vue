<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
import axios from 'axios'
const items = [

]

export default {
  name: 'response',
  mounted () {
    axios
      .get('https://phoenixdawn.herokuapp.com/api/filteredlist')
      .then(response => {
        this.items = response.data
      })
  },
  data () {
    return {
      items: items
    }
  }
}
</script>

<style lang="css" scoped>
</style>