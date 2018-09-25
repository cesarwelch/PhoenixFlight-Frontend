<template>
  <b-table striped hover :items="items" :fields="fields"></b-table>
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
      items: items,
      fields: [
        {
          key: 'id',
          sortable: true
        },
        {
          key: 'name',
          label: 'nombre',
          sortable: true
        },
        {
          key: 'response',
          label: 'respuesta',
          sortable: true
        },
        {
          key: 'plusonelist',
          sortable: true,
          label: 'lista de invitados'
        },
        {
          key: 'invitationsent',
          label: 'invitacion enviada?',
          sortable: true
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>