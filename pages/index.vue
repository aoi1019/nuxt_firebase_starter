<template>
  <div class="container">
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import { firestore } from "~/plugins/firebase"

export default defineComponent({
  setup() {
    onMounted(async () => {
      const collectionName = "tests"
      const tests = await firestore.collection(collectionName).get()
      tests.docs.forEach(_doc => {
        console.log(_doc.data())
      })
    })
  }
})
</script>
