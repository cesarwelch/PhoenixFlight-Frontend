<template>
    <b-table :fields="fields" :items="items" hover="" striped="">
      <template slot="reset" slot-scope="row">
        <b-button size="sm" @click.stop="reset(row)" variant="danger">
          Reset
        </b-button>
      </template>
      <template slot="sendemail" slot-scope="row">
        <b-button size="sm" @click.stop="send(row)" class="mr-2">
          Send Email
        </b-button>
      </template>
    </b-table>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
let items = [

]
export default {
  name: 'response',
  data () {
    return {
      items: items,
      fields: [{
        key: 'id',
        sortable: true
      }, {
        key: 'name',
        label: 'nombre',
        sortable: true
      }, {
        key: 'response',
        label: 'respuesta',
        sortable: true
      }, {
        key: 'plusonelist',
        sortable: true,
        label: 'lista de invitados'
      }, {
        key: 'invitationsent',
        label: 'invitacion enviada?',
        sortable: true
      }, {
        key: 'reset',
        label: 'reset'
      }, {
        key: 'sendemail',
        label: 'send email'
      }]
    }
  },
  mounted () {
    axios.get('https://phoenixdawn.herokuapp.com/api/filteredlist').then(response => {
      this.items = response.data
    })
  },
  methods: {
    reset: function (event) {
      Swal({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reset it!'
      }).then((result) => {
        axios
          .put('https://phoenixdawn.herokuapp.com/api/guest/resetGuest', {
            id: event.item.id
          }).then(response => {
            if (result.value) {
              Swal(
                'reseted!',
                'Your guest has been reseted.',
                'success'
              )
            }
            let rowItem = this.search(event.item.id, this.items)
            rowItem.invitationsent = true
          })
      })
    },
    send: function (event) {
      Swal({
        title: 'Are you sure?',
        text: 'You are about to send an email!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, send it!'
      }).then((result) => {
        axios
          .post('http://phoenixdawn.herokuapp.com/api/sendemail', {
            index: event.item.id,
            offset: event.item.id
          }).then(response => {
            if (result.value) {
              Swal(
                'sended!',
                'Your guest received an email.',
                'success'
              )
            }
            let rowItem = this.search(event.item.id, this.items)
            rowItem.response = null
            rowItem.plusonelist = '{}'
          })
      })
    },
    search: function (nameKey, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
          return myArray[i]
        }
      }
    }
  }
}
</script>
