<template>
    <v-form>
        <v-text-field
            prepend-icon="mdi-rename-box"
            v-model="name"
            label="名前"
            required

        ></v-text-field>
        <v-text-field
            prepend-icon="mdi-currency-usd-circle"
            v-model="price_str"
            label="金額"
            required
        ></v-text-field>
        <v-text-field
            prepend-icon="mdi-fire"
            v-model="calorie_str"
            label="カロリー"
            required
        ></v-text-field>
        <v-btn large color="primary" @click="submitFoodObject">
            <h3>追加</h3>
        </v-btn>
    </v-form>
</template>

<script>
export default {
    data: function() {
        return {
            name: "",
            price_str: "",
            calorie_str: ""
        }
    },

    methods: {
        submitFoodObject() {
            const foodObj = {
                name: this.name,
                price: Number(this.price_str),
                calorie: Number(this.calorie_str)
            };
            this.$emit('submit', foodObj);
        }
    }
    
}
</script>