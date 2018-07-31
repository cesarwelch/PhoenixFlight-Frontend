<template>
  <div id="maps">
    <GmapMap
    :center="{lat:15.489157, lng:-88.045571}"
    :zoom="17"
    map-type-id="terrain"
    style="width: 100%; height: 300px"
    >
      <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
      />
      </GmapMap>
  </div>
</template>

<script>
let markers = [{
  position: {lat: 15.489157, lng: -88.045571}
}]
export default {

  name: 'maps',

  data () {
    return {
      markers: markers
    }
  }
}
</script>
