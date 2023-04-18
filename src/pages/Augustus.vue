<template>
  <q-page padding>
    <h4 class="text-h4 q-mt-none q-mb-md">
      Augustus Cipher
    </h4>
    <div class="row">
      <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank">
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
    <p class="text-body1">The Augustus Cipher is an ancient shift cipher, where each letter is shifted 1 position down the alphabet.</p>
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
      const dec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const enc = 'ZABCDEFGHIJKLMNOPQRSTUVWXYzabcdefghijklmnopqrstuvwxy9012345678';
      let output = '';
      for (let i = 0; i < input.length; ++i) {
        const char = input.charAt(i);
        const index = dec.indexOf(char);
        output += index !== -1 ? enc.charAt(index) : char;
      }
      return output;
    },
    decrypt(input) {
      const dec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const enc = 'ZABCDEFGHIJKLMNOPQRSTUVWXYzabcdefghijklmnopqrstuvwxy9012345678';
      let output = '';
      for (let i = 0; i < input.length; ++i) {
        const char = input.charAt(i);
        const index = enc.indexOf(char);
        output += index !== -1 ? dec.charAt(index) : char;
      }
      return output;
    }
  }
}
</script>
