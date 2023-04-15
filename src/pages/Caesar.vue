<template>
  <q-page padding>
    <h4 class="text-h4 q-mt-none q-mb-md">
      Caesar Cipher
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
    <q-btn-group spread class="q-my-md">
      <q-btn label="Encrypt" color="primary" @click="encrypt" />
      <q-btn label="Decrypt" color="primary" @click="decrypt" />
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
  methods: {
    encrypt() {
      this.output = '';
      if (!this.input) {
        return;
      }
      const alfa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const beta = 'DEFGHIJKLMNOPQRSTUVWXYZABCdefghijklmnopqrstuvwxyzabc3456789012';
      let output = '';
      for (let i = 0; i < this.input.length; ++i) {
        const c = this.input.charAt(i);
        const ord = alfa.indexOf(c);
        output += ord >= 0 ? beta.charAt(ord) : c;
      }
      this.output = output;
    },
    decrypt() {
      this.output = '';
      if (!this.input) {
        return;
      }
      const alfa = 'DEFGHIJKLMNOPQRSTUVWXYZABCdefghijklmnopqrstuvwxyzabc3456789012';
      const beta = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let output = '';
      for (let i = 0; i < this.input.length; ++i) {
        const c = this.input.charAt(i);
        const ord = alfa.indexOf(c);
        output += ord >= 0 ? beta.charAt(ord) : c;
      }
      this.output = output;
    }
  }
}
</script>
