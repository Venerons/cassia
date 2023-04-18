<template>
  <q-page padding>
    <h4 class="text-h4 q-mt-none q-mb-md">
      Random Key Generator
    </h4>
    <div class="row">
      <q-chip square color="primary" text-color="white">Key Generator</q-chip>
    </div>
    <q-input
      v-model.number="input_length"
      type="number"
      min="1"
      step="1"
      label="Length"
      stack-label
      filled
      class="q-my-md"
    />
    <q-input
      v-model="input_charset"
      label="Charset"
      stack-label
      filled
      class="q-my-md"
    />
    <q-btn-group spread class="q-my-md">
      <q-btn label="Generate" color="primary" @click="generate" />
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
      input_length: 32,
      input_charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      output: ''
    }
  },
  methods: {
    generate() {
      this.output = '';
      if (!(this.input_length >= 1)) {
        return;
      }
      const output = [];
      for (let i = 0; i < this.input_length; ++i) {
        output.push(this.input_charset.charAt(Math.floor(Math.random() * this.input_charset.length)));
      }
      this.output = output.join('');
    }
  }
}
</script>
