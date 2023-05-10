<template>
	<q-page padding>
		<h4 class="text-h4 q-mt-none q-mb-md">
			Base64 Encoding
		</h4>
		<div class="row">
			<a href="https://en.wikipedia.org/wiki/Base64" target="_blank">
				<q-chip square color="accent" text-color="white" icon="fa-brands fa-wikipedia-w">Wikipedia</q-chip>
			</a>
			<q-chip square color="primary" text-color="white">Encoding</q-chip>
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
				{ label: 'Encode', value: 'encode' },
				{ label: 'Decode', value: 'decode' }
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
			action: 'encode',
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
			if (this.action === 'encode') {
				this.output = this.encode(this.input);
			} else if (this.action === 'decode') {
				this.output = this.decode(this.input);
			}
		},
		encode(input) {
			const encode = encodeURIComponent(input).replace(/%([a-f0-9]{2})/gi, (m, $1) => String.fromCharCode(parseInt($1, 16)));
			return btoa(encode);
		},
		decode(input) {
			const decode = atob(input).replace(/[\x80-\uffff]/g, (m) => `%${m.charCodeAt(0).toString(16).padStart(2, '0')}`);
			return decodeURIComponent(decode);
		}
	}
}
</script>
