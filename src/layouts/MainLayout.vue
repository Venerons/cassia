<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          cassia
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(item, index) in menu_items" :key="index">
            <q-item-label header v-if="item.type === 'header'">{{ item.label }}</q-item-label>
            <q-item v-if="item.type === 'item'" clickable v-ripple :to="item.to">
              <q-item-section>
                {{ item.label }}
              </q-item-section>
            </q-item>
            <q-separator v-if="item.type === 'separator'"/>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

export default {
  data() {
    return {
      menu_items: [
        // https://en.wikipedia.org/wiki/Substitution_cipher
        { type: 'header', label: 'Monoalphabetic Ciphers' },
        { type: 'item', label: 'Albam', to: '/albam' },
        { type: 'item', label: 'Atbash', to: '/atbash' },
        { type: 'item', label: 'Caesar', to: '/caesar' },
        { type: 'item', label: 'Carbonaro', to: '/carbonaro' },
        { type: 'item', label: 'Pigpen', to: '/pigpen' }, // TODO
        { type: 'item', label: 'ROT13', to: '/rot13' },
        // https://en.wikipedia.org/wiki/Theban_script
        // custom substitution cipher
        // custom shift cipher

        // https://en.wikipedia.org/wiki/Polyalphabetic_cipher
        //{ type: 'separator' },
        //{ type: 'header', label: 'Polyalphabetic Ciphers' },
        // https://en.wikipedia.org/wiki/Alberti_cipher
        // https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher
        // https://en.wikipedia.org/wiki/Tabula_recta#Trithemius_cipher
        // https://en.wikipedia.org/wiki/Enigma_machine
        // Gronsfeld cipher
        // https://en.wikipedia.org/wiki/Beaufort_cipher
        // https://en.wikipedia.org/wiki/Autokey_cipher
        // https://en.wikipedia.org/wiki/Running_key_cipher

        // https://en.wikipedia.org/wiki/Transposition_cipher
        // ADFGVX

        // Polygraphic Ciphers
        // https://en.wikipedia.org/wiki/Playfair_cipher
        // https://en.wikipedia.org/wiki/Bifid_cipher
        // https://en.wikipedia.org/wiki/Four-square_cipher
        // https://en.wikipedia.org/wiki/Trifid_cipher
        // https://en.wikipedia.org/wiki/Hill_cipher
        
        /*
        { type: 'item', label: 'XOR', to: '/' },
        { type: 'item', label: 'Vernam One-Time Pad', to: '/' },
        { type: 'item', label: 'Pizzini', to: '/' },
        { type: 'item', label: 'Polibio', to: '/' },
        { type: 'item', label: 'Pollux', to: '/' },
        { type: 'item', label: 'VIC', to: '/' },
        { type: 'item', label: 'Random Break', to: '/' },
        { type: 'item', label: 'Transposition', to: '/' },
        */

        // Encodings
        { type: 'separator' },
        { type: 'header', label: 'Encodings' },
        { type: 'item', label: 'Base64', to: '/base64' },
        { type: 'item', label: 'Binary', to: '/binary' },
        { type: 'item', label: 'Leet', to: '/leet' },
        { type: 'item', label: 'Morse', to: '/morse' },
        { type: 'item', label: 'URL Encoding', to: '/urlencoding' },

        // Key Generators
        { type: 'separator' },
        { type: 'header', label: 'Key Generators' },
        { type: 'item', label: 'Reading Key', to: '/readingkey' },
        { type: 'item', label: 'Fibonacci Sequence', to: '/fibonacci' },
        { type: 'item', label: 'Collatz Conjecture', to: '/collatz' },
        { type: 'item', label: 'Random Key', to: '/randomkey' },
      ]
    }
  },
  setup () {
    const $q = useQuasar();
		$q.dark.set(true);
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
