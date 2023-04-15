<template>
  <q-page padding>
    <h4 class="text-h4 q-mt-none q-mb-md">
      Collatz Conjecture Generator
    </h4>
    <div class="row">
      <a href="https://en.wikipedia.org/wiki/Collatz_conjecture" target="_blank">
        <q-chip square color="accent" text-color="white" icon="fa-brands fa-wikipedia-w">Wikipedia</q-chip>
      </a>
      <q-chip square color="primary" text-color="white">Key Generator</q-chip>
    </div>
    <q-input
      v-model.number="input"
      type="number"
      min="1"
      step="1"
      label="Input"
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
      input: 7,
      output: ''
    }
  },
  methods: {
    generate() {
      this.output = '';
      if (!(this.input >= 1 && this.input <= 91)) {
        return;
      }
      let num = this.input;
      const output = [num];
      while (num !== 1) {
        if ((num % 2) === 0) {
          num = num / 2;
        } else {
          num = (num * 3) + 1;
        }
        output.push(num);
      }
      this.output = output.join(' ');
    }
  }
}
</script>
