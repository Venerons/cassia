<template>
  <q-page padding>
    <h4 class="text-h4 q-mt-none q-mb-md">
      Fibonacci Sequence Generator
    </h4>
    <div class="row">
      <a href="https://en.wikipedia.org/wiki/Fibonacci_sequence" target="_blank">
        <q-chip square color="accent" text-color="white" icon="fa-brands fa-wikipedia-w">Wikipedia</q-chip>
      </a>
      <q-chip square color="primary" text-color="white">Key Generator</q-chip>
    </div>
    <q-input
      v-model.number="input"
      type="number"
      min="1"
      max="91"
      step="1"
      label="Level"
      stack-label
      filled
      class="q-my-md"
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
      input: 7,
      output: ''
    }
  },
  watch: {
    input(newValue, oldValue) {
      this.generate();
    }
  },
  methods: {
    generate() {
      this.output = '';
      if (!(this.input >= 1 && this.input <= 91)) {
        return;
      }
      const output = [0, 1];
      for (let i = 0; i < this.input; ++i) {
        output.push(output[output.length - 1] + output[output.length - 2]);
      }
      this.output = output.join(' ');
    }
  },
  mounted() {
    this.generate();
  }
}
</script>
