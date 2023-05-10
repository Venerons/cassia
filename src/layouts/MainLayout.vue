<template>
	<q-layout view="hHh lpR fFf">

		<q-header bordered class="bg-primary text-white">
			<q-toolbar>
				<q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
				<q-toolbar-title>
					Project Cassia
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
								<q-item-label>{{ item.label }}</q-item-label>
								<q-item-label v-if="item.caption" caption>{{ item.caption }}</q-item-label>
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
				// Cryptography
				{ type: 'header', label: 'Cryptography' },
				{ type: 'item', label: 'Albam', to: '/albam' },
				{ type: 'item', label: 'Atbash', to: '/atbash' },
				{ type: 'item', label: 'Augustus', to: '/augustus' },
				{ type: 'item', label: 'Caesar', to: '/caesar' },
				{ type: 'item', label: 'Carbonaro', to: '/carbonaro' },
				{ type: 'item', label: 'ROT13', to: '/rot13' },
				{ type: 'item', label: 'Theban', to: '/theban' },

				// https://en.wikipedia.org/wiki/Substitution_cipher
				// https://en.wikipedia.org/wiki/Polyalphabetic_cipher
				// https://en.wikipedia.org/wiki/Transposition_cipher

				//{ type: 'item', label: 'Pigpen', to: '/pigpen' },
				//{ type: 'item', label: 'Custom Substitution', to: '/customsubstitution' },
				//{ type: 'item', label: 'Custom Shift', to: '/customshift' },
				//{ type: 'item', label: 'Alberti', to: '/alberti' }, https://en.wikipedia.org/wiki/Alberti_cipher
				//{ type: 'item', label: 'Vigenère', to: '/vegenere' }, https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher
				//{ type: 'item', label: 'Trithemius', to: '/trithemius' }, https://en.wikipedia.org/wiki/Tabula_recta#Trithemius_cipher
				//{ type: 'item', label: 'Enigma', to: '/enigma' }, https://en.wikipedia.org/wiki/Enigma_machine
				//{ type: 'item', label: 'Gronsfeld', to: '/gronsfeld' },
				//{ type: 'item', label: 'Beaufort', to: '/beaufort' }, https://en.wikipedia.org/wiki/Beaufort_cipher
				//{ type: 'item', label: 'Autokey', to: '/autokey' }, https://en.wikipedia.org/wiki/Autokey_cipher
				//{ type: 'item', label: 'Running Key', to: '/runningkey' }, https://en.wikipedia.org/wiki/Running_key_cipher
				//{ type: 'item', label: 'ADFGVX', to: '/adfgvx' },
				//{ type: 'item', label: 'XOR', to: '/xor' },
				//{ type: 'item', label: 'Vernam One-Time Pad', to: '/vernam' },
				//{ type: 'item', label: 'Pizzini', to: '/pizzini' }, https://en.wikipedia.org/wiki/Pizzino
				//{ type: 'item', label: 'Polibio', to: '/polibio' },
				//{ type: 'item', label: 'Pollux', to: '/pollux' },
				//{ type: 'item', label: 'VIC', to: '/vic' },
				//{ type: 'item', label: 'Playfair', to: '/playfair' }, https://en.wikipedia.org/wiki/Playfair_cipher
				//{ type: 'item', label: 'Bifid', to: '/bifid' }, https://en.wikipedia.org/wiki/Bifid_cipher
				//{ type: 'item', label: 'Four-Square', to: '/foursquare' }, https://en.wikipedia.org/wiki/Four-square_cipher
				//{ type: 'item', label: 'Trifid', to: '/trifid' }, https://en.wikipedia.org/wiki/Trifid_cipher
				//{ type: 'item', label: 'Hill', to: '/hill' }, https://en.wikipedia.org/wiki/Hill_cipher

				// Steganography
				{ type: 'header', label: 'Steganography' },
				//{ type: 'item', label: 'Random Break', to: '/randombreak' },
				//{ type: 'item', label: 'Transposition', to: '/transposition' },

				// Encodings
				{ type: 'separator' },
				{ type: 'header', label: 'Encodings' },
				{ type: 'item', label: 'Base2', caption: 'Binary', to: '/base2' },
				{ type: 'item', label: 'Base8', caption: 'Octal', to: '/base8' },
				{ type: 'item', label: 'Base10', caption: 'Decimal', to: '/base10' },
				{ type: 'item', label: 'Base16', caption: 'Hexadecimal', to: '/base16' },
				{ type: 'item', label: 'Base64', to: '/base64' },
				//{ type: 'item', label: 'Morse', to: '/morse' },
				{ type: 'item', label: 'URL Encoding', to: '/urlencoding' },

				// Key Generators
				{ type: 'separator' },
				{ type: 'header', label: 'Key Generators' },
				{ type: 'item', label: 'Reading Key', to: '/readingkey' },
				{ type: 'item', label: 'Fibonacci Sequence', to: '/fibonacci' },
				{ type: 'item', label: 'Collatz Conjecture', to: '/collatz' },
				{ type: 'item', label: 'Random Key', to: '/randomkey' },
				//{ type: 'item', label: 'Gödel Numbering', to: '/godel' }, https://en.wikipedia.org/wiki/G%C3%B6del_numbering
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
