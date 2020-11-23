<template>
  <v-app>

    <SideBar :drawer="drawer" />
    <Header @switch="switchSideBar" />

    <v-main>
      <Main />
    </v-main>
  </v-app>
</template>

<script>
  import Header from './components/Header'
  import SideBar from './components/SideBar'
  import Main from './components/Main'

  export default {
    components: {
      Header,
      SideBar,
      Main
    },

    data: function() {
      return {
        drawer: false
      }
    },

    methods: {
      switchSideBar() {
        this.drawer = !this.drawer;
      }
    }
  }
</script>