<template>
  <div class="music_section ">
    <div class="album">
      <div class="album_image">
        <p class="album_title">{{ album_item.name }}</p>
        <img class="album_image" :src="album_item.image" alt="logo">
      </div>
      <div class="audio_player">
        <Player :options="options"/>
      </div>
    </div>
    <div class="albums_music">
      <h2>PlayList</h2>
      <div class="albums_music_item" v-for="item of catalog">
        <h2 class="albums_music_item_title" @click="startMusic(item)">{{ item.original_name }}</h2>
      </div>
    </div>

  </div>


</template>
<script setup>
import {Catalog} from "../stores/myStore.js";
import {defineProps} from 'vue'
import Player from "~/components/player.vue";

const store = Catalog()
store.GET_CATALOG('All music')

const catalog = ref(store.SET_CATALOG)
const album_item = ref({name: '', image: ''})
const props = defineProps({
  album_item: {
    type: Object
  }
})

let options = ref(
    {
      src: String,
      title: String,
      coverImage: String,

    }
)


if (props.album_item.name === undefined) {
  album_item.value = {
    name: 'All Music',
    image: '_nuxt/assets/3.jpg'
  }
} else {
  album_item.value = {
    name: props.album_item.name,
    image: props.album_item.image
  }
}

watch(() => props.album_item, () => {
  album_item.value = {
    name: props.album_item.name,
    image: props.album_item.image
  }
  store.GET_CATALOG(props.album_item.name)
})
let startMusic = (item) => {

  console.log(item)
  options.value = {
    src: item.url,
    title: item.original_name,
  }

}

</script>
<style scoped>
.album_title {
  font-size: 30px;
  text-transform: uppercase;
}

.music_section {
  color: black;
  display: flex;
  justify-content: space-around;
}

.album_image {
  border-radius: 10%;
}

.albums_music_item {
  font-size: 13px;
  max-width: 400px;
}

.albums_music_item_title {
  padding-bottom: 10px;
  cursor: pointer;
}

.albums_music_item_title:hover {
  color: blue;
}

.audio_player_title {
  color: white;
}

/*player*/

</style>
