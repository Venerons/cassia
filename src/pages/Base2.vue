<template>
  <q-page padding>
    <h4 class="text-h4 q-mt-none q-mb-md">
      Base2 Encoding
    </h4>
    <div class="row">
      <a href="https://en.wikipedia.org/wiki/Binary_code" target="_blank">
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
    <q-btn-group spread class="q-my-md">
      <q-btn label="Encode" color="primary" @click="encrypt" />
      <q-btn label="Decode" color="primary" @click="decrypt" />
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
      let output = [];
      for (let i = 0; i < this.input.length; ++i) {
        output.push(this.input.codePointAt(i).toString(2).padStart(8, '0'));
      }
      this.output = output.join('');
    },
    decrypt() {
      this.output = '';
      if (!this.input) {
        return;
      }
      let output = [];
      for (let i = 0; i < this.input.length / 8; ++i) {
        output.push(String.fromCodePoint(parseInt(this.input.substring(i * 8, i * 8 + 8), 2)));
      }
      this.output = output.join('');
    }
  }
}
</script>
