<template>
    <v-card
        elevation="2"
        shaped
    >
        <v-img
            max-height="75"
            src="https://picsum.photos/id/11/500/300"
            gradient="to top right, rgba(0,0,0,.0), rgba(25,32,72,0.5)"
        >
        </v-img>

        <v-container class="py-0">
            <v-row>
                <v-col cols='6' class="py-0 pl-5">
                    <h1> {{name}} </h1>
                </v-col>
                <v-spacer />
                <v-col cols='2' class="text-center font-weight-bold">
                    <v-icon left  color="secondary">mdi-currency-usd-circle</v-icon>
                    {{price}} 円
                </v-col>
                <v-col cols='2' class="text-center font-weight-bold">
                    <v-icon left  color="accent">mdi-fire</v-icon>
                    {{calorie}} kcal
                </v-col>
            </v-row>
        </v-container>

    </v-card>
</template>

<script>
  export default {
      props: {
          name: String,
          price: Number,
          calorie: Number,
      }
  }
</script>
