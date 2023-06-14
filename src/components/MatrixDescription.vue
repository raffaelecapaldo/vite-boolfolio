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
      displayText: ""
    };
  },
  mounted() {
    this.animateText();
  },
  methods: {
    animateText() {
      let currentIndex = 0;
      const typingInterval = 50;
      const maxLenght = 50;

      const typingIntervalId = setInterval(() => {
        this.displayText += this.description[currentIndex];
        currentIndex++;

        if (currentIndex === this.description.length || currentIndex >= maxLenght) {
            this.displayText += '...'
          clearInterval(typingIntervalId);
        }
      }, typingInterval);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>