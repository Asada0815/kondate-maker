<template>
  <v-conatiner>
    <v-row justify="center">
      <v-col cols="6" class="pa-0 ma-0">
        <FoodCard />
      </v-col>
    </v-row>
  </v-conatiner>
</template>

<script>
  import FoodCard from './FoodCard'
  export default {
    components: {
      FoodCard
    }
  }
</script>
