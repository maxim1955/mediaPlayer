<template>
  <section class="music_hall">
    <div class="music_column">
      <h2 class="album_title">Albums</h2>
      <div class="album_block" @click="playAlbums({albumsName: 'All music', image: '1.jpg'},$event)"
      >
        <img src="~assets/1.jpg" alt="logo" class="album_icon">
        <p class="album_subtitle">All music</p>
      </div>
      <div class="album_block" v-for="album of albums"
           @click="playAlbums(album,$event)">
        <img :src="'_nuxt/assets/'+ album.image" alt="logo" class="album_icon">
        <p class="album_subtitle">{{ album.albumsName }}</p>
      </div>
    </div>
    <div class="about_music">
      <music-catalog :album_item="album_item"/>
    </div>
  </section>
</template>

<script setup>
import {Catalog} from "~/stores/myStore";
import {getData} from "~/server/cosmic_instance.js";

getData()
const store = Catalog()
const albums = ref(store.SET_ALBUMS)

let album_item = ref({})
let active_album = ref()
const playAlbums = (album, event) => {
  active_album.value = !active_album.value
  album_item.value = {
    id: album.id,
    name: album.albumsName,
    image: `_nuxt/assets/${album.image}`,
  }
}
</script>
<style scoped>
.album_title {
  color: white;
  font-size: 40px;
  text-align: center;
  padding-bottom: 30%;
  padding-top: 20%;
}

.album_subtitle {
  color: white;
  font-size: 25px;
  max-width: 100px;
  width: 100%;
}

.album_block {
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  padding-bottom: 5%;
}

.album_block:hover {
  border: 1px solid green;
  padding: 3% 1%;
  border-radius: 10px;
  width: 100%;
  color: green;
}

.music_hall {
  display: flex;
  min-height: 100vh;
}

.music_column {
  width: 22%;
  background-image: url("~/assets/istockphoto-1076840920-1024x1024.jpg");
  background-size: cover;
}

.about_music {
  width: 78%;
  background-image: url("~/assets/bg_right.jpg");
  background-size: cover;
}

.album_icon {
  max-width: 100px;
  width: 100%;
  border-radius: 10%;
}

.active_album {
  border: 1px solid green;
  padding: 3% 1%;
  border-radius: 10px;
  width: 100%;
  color: green;
}

@media (max-width: 1000px) {
  .music_hall {
    flex-direction: column;
  }

  .music_column {
    width: 100%;
  }

  .album_title {
    padding-bottom: 10px;
  }

  .about_music {
    width: 100%;
  }
}
</style>
