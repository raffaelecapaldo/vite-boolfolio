<template>
  <div>
    <span v-for="(letter, index) in displayText" :key="index">{{ letter }}</span>
  </div>
</template>

<script>
export default {
  name: 'MatrixDescription',
  props: ['description'],
  data() {
    return {
      displayText: "",
      wait: false
    };
  },
  mounted() {
    this.animateText();
  },
  methods: {
    animateText() {
      if (this.wait) {
        return
      }
      this.displayText = '';
      let currentIndex = 0;
      const typingInterval = 50;
      const maxLenght = 50;

      const typingIntervalId = setInterval(() => {
        this.displayText += this.description[currentIndex];
        currentIndex++;
        this.wait = true;


        if (currentIndex === this.description.length || currentIndex >= maxLenght) {
          if (currentIndex >= maxLenght) {
            this.displayText += '...'

          }
          clearInterval(typingIntervalId);
          setTimeout(() => {
            this.wait = false;

          }, 2000);
        }
      }, typingInterval);
    }
  }
}
</script>

<style lang="scss" scoped></style>