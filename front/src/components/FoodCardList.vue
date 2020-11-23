<template>
    <v-container>
        <v-row>
            <v-col 
                v-for="food in foods" :key="food.id"
                cols="12"
            >
                <FoodCard :name="food.name" :price="food.price" :calorie="food.calorie" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  import FoodCard from './FoodCard'
  export default {
    components: {
      FoodCard
    },
    props: {
        foods: null
    }
  }
</script>
