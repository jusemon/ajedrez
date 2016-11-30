<template>
  <a v-bind:href="href" v-bind:class="{ active: isActive }" v-on:click="go">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: {
      href: String,
      required: true
    },
    computed: {
      isActive: function () {
        return this.href === this.$root.currentRoute || this.href === '/' && this.$root.currentRoute == '/index.html'    
      }
    },
    methods: {
      go: function (event) {
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          this.$root.routes[this.href],
          this.href
        )
      }
    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>