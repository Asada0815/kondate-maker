<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" class="pa-0 ma-0">
        <FoodCardList :foods="foods" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <RegisterFood @submit="getFoodData"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import FoodCardList from './FoodCardList'
  import RegisterFood from './RegisterFood'
  import axios from 'axios'
  axios.defaults.baseURL = 'http://localhost:3500';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  export default {
    components: {
      FoodCardList,
      RegisterFood
    },

    data: function() {
      return {
        foods: []
      }
    },

    methods: {
      getFoodData: function() {
        axios.get('/get')
          .then(res => {
            this.foods = res.data;
          });
      }
    },

    mounted: function() {
      this.getFoodData();
    }
  }
</script>
