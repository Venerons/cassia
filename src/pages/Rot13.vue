<template>
	<q-page padding>
		<h4 class="text-h4 q-mt-none q-mb-md">
			ROT13 Cipher
		</h4>
		<div class="row">
			<a href="https://en.wikipedia.org/wiki/ROT13" target="_blank">
				<q-chip square color="accent" text-color="white" icon="fa-brands fa-wikipedia-w">Wikipedia</q-chip>
			</a>
			<q-chip square color="primary" text-color="white">Simple Substitution Cipher</q-chip>
			<q-chip square color="primary" text-color="white">Monoalphabetic Cipher</q-chip>
			<q-chip square color="primary" text-color="white">Shift Cipher</q-chip>
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
		<q-btn-group spread class="q-my-md">
			<q-btn label="Encrypt / Decrypt" color="primary" />
		</q-btn-group>
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
			output: ''
		}
	},
	watch: {
		input(newValue, oldValue) {
			this.update_output();
		}
	},
	methods: {
		update_output() {
			this.output = '';
			if (!this.input) {
				return;
			}
			this.output = this.encrypt(this.input);
		},
		encrypt(input) {
			const dec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
			const enc = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
			let output = '';
			for (let i = 0; i < input.length; ++i) {
				const char = input.charAt(i);
				const index = dec.indexOf(char);
				output += index !== -1 ? enc.charAt(index) : char;
			}
			return output;
		}
	}
}
</script>
