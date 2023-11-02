import {instance} from "~/server/instance.js";

export const Catalog = defineStore('music_catalog.vue', {
    state: () => ({
        catalog: ref([]),
        albums: ref([])
    }),
    getters: {
        SET_CATALOG(state) {
            return computed(() => state.catalog)
        },

        SET_ALBUMS(state) {
            return computed(() => state.albums)
        },

    },
    actions: {
        async GET_CATALOG(folder) {
            let res = await instance.get('/')
            if (folder === "All music") {
                this.catalog = res.data.media
            } else {
                this.catalog = res.data.media.filter((item) => item.folder === folder)
            }

            res.data.media.forEach((item) => {
                let count = Math.floor(Math.random() * (4 - 1) + 1);
                let urlImage = `${count}.jpg`
                if (item.folder !== undefined) {
                    this.albums.push({ albumsName: item.folder, image: urlImage})
                }
            })
            this.albums = this.albums.filter((value, index, self) =>
                    index === self.findIndex((t) => (
                        t.albumsName === value.albumsName
                    ))
            )

        },
    },
    persist: true,

})
