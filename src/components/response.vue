<template>
  <div class="response-table">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-1">
          <b-button @click.stop="add" :variant="primary">
            Add
          </b-button>
        </div>
      </div>
    </div>
    <b-table :fields="fields" :items="items" hover="" striped="">
      <template slot="edit" slot-scope="row">
        <b-button size="sm" @click.stop="edit(row)" variant="danger">
          Edit
        </b-button>
      </template>
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
  </div>
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
        key: 'plusone',
        sortable: true,
        label: 'espacios'
      }, {
        key: 'plusonelist',
        sortable: true,
        label: 'lista de invitados'
      }, {
        key: 'email',
        sortable: true,
        label: 'email'
      }, {
        key: 'url',
        label: 'url'
      }, {
        key: 'edit',
        label: 'edit'
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
      console.log(this.items)
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
            rowItem.response = null
            rowItem.plusonelist = '{}'
          })
      })
    },
    add: function (event) {
      Swal({
        title: 'Agregar',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Agregar',
        html:
         '<input id="swal-input1" placeholder="Name" class="swal2-input">' +
         '<input id="swal-input2" placeholder="Spaces" class="swal2-input">' +
         '<input id="swal-input3" placeholder="Email" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          let editValues = {
            name: document.getElementById('swal-input1').value,
            email: document.getElementById('swal-input3').value,
            response: null,
            plusone: document.getElementById('swal-input2').value,
            plusonelist: '{}',
            invitationsent: false
          }
          axios
            .post('https://phoenixdawn.herokuapp.com/api/guest', editValues).then(response => {
              Swal(
                'Done!',
                'Your guest has been added.',
                'success'
              )
              this.items.push(response.data)
            })
        }
      })
    },
    edit: function (event) {
      Swal({
        title: 'Editar',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Editar',
        html:
         '<input id="swal-input1" value="' + event.item.name + '" placeholder="Name" class="swal2-input">' +
         '<input id="swal-input2" value="' + event.item.plusone + '" placeholder="Spaces" class="swal2-input">' +
         '<input id="swal-input3" value="' + event.item.email + '" placeholder="Email" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          let editValues = {
            name: document.getElementById('swal-input1').value,
            plusone: document.getElementById('swal-input2').value,
            email: document.getElementById('swal-input3').value,
            id: event.item.id
          }
          axios
            .put('https://phoenixdawn.herokuapp.com/api/guest/update', editValues).then(response => {
              Swal(
                'Done!',
                'Your guest has been edited.',
                'success'
              )
              let rowItem = this.search(event.item.id, this.items)
              rowItem.name = editValues.name
              rowItem.plusone = editValues.plusone
              rowItem.email = editValues.email
            })
        }
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
            rowItem.invitationsent = true
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
