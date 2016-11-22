<template>
  <a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
  var routes = {
    '/': 'Home',
    '/index.html': 'Home',
    '/about': 'About'
  }
  export default {
    props: {
      href: String,
      required: true
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute || this.href === '/' && this.$root.currentRoute == '/index.html'    
      }
    },
    methods: {
      go (event) {
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          routes[this.href],
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