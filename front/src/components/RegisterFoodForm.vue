<template>
    <v-form ref="form">
        <v-text-field
            prepend-icon="mdi-rename-box"
            v-model="name"
            label="名前"
            :rules="nameRules"
        ></v-text-field>
        <v-text-field
            prepend-icon="mdi-currency-usd-circle"
            v-model="price_str"
            label="金額"
            :rules="numberRules"
        ></v-text-field>
        <v-text-field
            prepend-icon="mdi-fire"
            v-model="calorie_str"
            label="カロリー"
            :rules="numberRules"
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
            calorie_str: "",

            nameRules: [
                v => !!v || "必須項目です。",
                v => (v && v.length <= 30) || "30文字以内で入力してください。",
            ],
            numberRules: [
                v => !!v || "必須項目です。",
                v => (v && v.length <= 10) || "10桁以内で入力してください。",
                v => /^([1-9]{1}[0-9]{0,10})$/.test(v) || "整数値を入力してください。"
            ]

        }
    },

    methods: {
        submitFoodObject: function() {
            if(!this.$refs.form.validate()) return;
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