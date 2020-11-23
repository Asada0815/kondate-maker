<template>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="onClickedNavIcon"></v-app-bar-nav-icon>

      <v-toolbar-title>こんだてめーかー</v-toolbar-title>
    </v-app-bar>
</template>

<script>
  export default {
      methods: {
          onClickedNavIcon: function() {
              this.$emit('switch')
          }
      }
  }
</script>
