<template>
  <v-app>

    <SideBar :drawer="drawer" />
    <Header @switch="switchSideBar" />

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  import Header from './components/Header'
  import SideBar from './components/SideBar'

  export default {
    components: {
      Header,
      SideBar
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