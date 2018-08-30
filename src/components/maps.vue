<template>
  <div id="maps">
    <GmapMap
    :center="{lat:markers[0].position.lat, lng:markers[0].position.lng}"
    :zoom="17"
    map-type-id="terrain"
    style="width: 100%; height: 300px"
    >

      <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
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
  props: ['lat', 'lng'],
  data () {
    markers = [{
      position: {lat: Number(this.lat), lng: Number(this.lng)}
    }]
    return {
      markers: markers
    }
  }
}
</script>
