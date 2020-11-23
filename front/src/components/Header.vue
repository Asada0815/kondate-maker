<template>
    <v-app-bar 
        app 
        color="primary"
        dark
        shrink-on-scroll
        prominent
        src="../assets/header.jpeg"
        fade-img-on-scroll
      >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="onClickedNavIcon"></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-10 pb-0">
        <h2>
          こんだてめーかー
        </h2>
      </v-toolbar-title>
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
