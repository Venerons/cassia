<template>
	<q-page padding>
		<h4 class="text-h4 q-mt-none q-mb-md">
			Theban Script
		</h4>
		<div class="row">
			<a href="https://en.wikipedia.org/wiki/Theban_script" target="_blank">
				<q-chip square color="accent" text-color="white" icon="fa-brands fa-wikipedia-w">Wikipedia</q-chip>
			</a>
			<q-chip square color="primary" text-color="white">Simple Substitution Cipher</q-chip>
			<q-chip square color="primary" text-color="white">Monoalphabetic Cipher</q-chip>
		</div>
		<q-input
			v-model="input"
			label="Input"
			stack-label
			filled
			clearable
			type="textarea"
			class="q-my-md"
		/>
		<q-btn-toggle
			v-model="action"
			spread
			toggle-color="primary"
			class="q-my-md"
			:options="[
				{ label: 'Encrypt', value: 'encrypt' },
				{ label: 'Decrypt', value: 'decrypt' }
			]"
		/>
		<q-input
			v-model="output"
			label="Output"
			stack-label
			filled
			type="textarea"
			readonly
			class="q-my-md"
		/>
	</q-page>
</template>

<script>
export default {
	data() {
		return {
			input: '',
			action: 'encrypt',
			output: ''
		}
	},
	watch: {
		input(newValue, oldValue) {
			this.update_output();
		},
		action(newValue, oldValue) {
			this.update_output();
		}
	},
	methods: {
		update_output() {
			this.output = '';
			if (!this.input) {
				return;
			}
			if (this.action === 'encrypt') {
				this.output = this.encrypt(this.input);
			} else if (this.action === 'decrypt') {
				this.output = this.decrypt(this.input);
			}
		},
		encrypt(input) {
			const dec = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			const enc = ['ሃ', 'ቧ', 'ሣ', 'ካ', 'ኪ', 'ሢ', 'ህ', 'ኑ', 'ሀ', 'ሀ', 'ጣ', 'ኒ', 'ኳ', 'ኡ', 'ጤ', 'ጢ', 'ቈ', 'ጣ', 'ኴ', 'ኲ', 'የ', 'የ', 'የ', 'ሇ', 'ኚ', 'ሗ'];
			let output = '';
			for (let i = 0; i < input.length; ++i) {
				const char = input.charAt(i).toUpperCase();
				const index = dec.indexOf(char);
				output += index !== -1 ? enc[index] : char;
			}
			return output;
		},
		decrypt(input) {
			const dec = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			const enc = ['ሃ', 'ቧ', 'ሣ', 'ካ', 'ኪ', 'ሢ', 'ህ', 'ኑ', 'ሀ', 'ሀ', 'ጣ', 'ኒ', 'ኳ', 'ኡ', 'ጤ', 'ጢ', 'ቈ', 'ጣ', 'ኴ', 'ኲ', 'የ', 'የ', 'የ', 'ሇ', 'ኚ', 'ሗ'];
			let output = '';
			for (let i = 0; i < input.length; ++i) {
				const char = input.charAt(i);
				const index = enc.indexOf(char);
				output += index !== -1 ? dec[index] : char;
			}
			return output;
		}
	}
}
</script>
