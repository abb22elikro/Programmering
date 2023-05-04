<template>
  <q-page>

  </q-page>
</template>


<script setup>
import { useDatabaseList, useDatabaseObject } from 'vuefire'
import { ref as dbRef } from 'firebase/database'
import { db } from 'src/boot/firebase'
import { set} from 'vue-demi'

const fan = useDatabaseList(dbRef(db, 'Fan'/'Fan'))
function testValue () {
console.log(fan)
}
</script>
