<template>
  <q-page>
    <input type="button" @click="reverseFan" name="test">
    <pre>
      {{ fan.Fan }}
    </pre>
  </q-page>
</template>


<script setup>
import { useDatabaseList, useDatabaseObject } from 'vuefire'
import { ref as dbRef } from 'firebase/database'
import { db } from 'src/boot/firebase'
import { set} from 'vue-demi'
import {set as fSet} from "firebase/database";


function reverseFan () {
const fan = useDatabaseObject(dbRef(db, 'Fan'))
fSet(dbRef(db, 'Fan'),{Fan:!fan.Fan})
}
</script>
