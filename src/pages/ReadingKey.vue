<template>
  <q-page padding>
    <h4 class="text-h4 q-mt-none q-mb-md">
      Reading Key Generator
    </h4>
    <div class="row">
      <q-chip square color="primary" text-color="white">Key Generator</q-chip>
    </div>
    <q-input
      v-model.number="input"
      type="number"
      min="1"
      max="30"
      step="1"
      label="Level"
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
      if (!(this.input >= 1 && this.input <= 30)) {
        return;
      }
      let output = '1';
      for (let i = 0; i < this.input; ++i) {
        let tmp = '';
        for (let j = 0; j < output.length; ++j) {
          const c1 = output.charAt(j);
          const c2 = output.charAt(j + 1);
          const c3 = output.charAt(j + 2);
          if (c1 === c2) {
            if (c2 === c3) {
              tmp += '3' + c1;
              j += 2;
            } else {
              tmp += '2' +c1;
              j++;
            }
          } else {
            tmp += '1' + c1;
          }
        }
        output = tmp;
      }
      this.output = output;
    }
  }
}
</script>
