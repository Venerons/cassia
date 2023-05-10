<template>
	<q-page padding>
		<h4 class="text-h4 q-mt-none q-mb-md">
			Base16 Encoding
		</h4>
		<div class="row">
			<a href="https://en.wikipedia.org/wiki/Hexadecimal" target="_blank">
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
			const buffer = new TextEncoder().encode(input).buffer;
			const array = new Uint8Array(buffer);
			const output = [];
			array.forEach((byte) => {
				output.push(byte.toString(16).padStart(2, '0'));
			});
			return output.join('');
		},
		decode(input) {
			const output = new Uint8Array(input.length / 2);
			for (let i = 0; i < output.byteLength; ++i) {
				output[i] = parseInt(input.substring(i * 2, i * 2 + 2), 16);
			}
			return new TextDecoder('utf-8').decode(output.buffer);
		}
	}
}
</script>
