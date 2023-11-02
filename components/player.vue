<template>
  <AudioPlayer
      :option="option">
    <slot>Название трека</slot>
  </AudioPlayer>
  <audio_track percentage=""/>
</template>
<script setup>
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
import {defineProps} from "vue";

const props = defineProps({
  options: {
    type: Object
  }
})
let option = ref({})
watch(() => props.options, () => {
  option.value = {
    src: props.options.src,
    title: props.options.title
  }
})
</script>
