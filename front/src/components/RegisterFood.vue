<template>
    <v-dialog
        v-model="show"
        max-width="800px"
    >
    <!-- アクティベータースロット -->
    <template v-slot:activator="{ on }">
        <v-btn 
            v-on="on" 
            block
            outlined
            color="primary"
            height="75"
        >
        <v-icon left medium>
            mdi-plus
        </v-icon>
        <h3>追加</h3>
        </v-btn>
    </template>
    <!-- ダイアログコンテンツ -->
    <v-card>
        <v-container>
            <v-row justify="center">
                <v-col cols="10">
                    <v-card-title>
                        <h2>新しい料理を追加</h2>
                    </v-card-title>
                </v-col>
                <v-col cols="10">
                    <RegisterFoodForm @submit="postFood"/>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
    </v-dialog>
</template>

<script>
    import RegisterFoodForm from './RegisterFoodForm';
    import axios from 'axios'
    axios.defaults.baseURL = 'http://localhost:3500';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    export default {
        components: {
            RegisterFoodForm
        },

        data: function() {
            return {
                show: false
            }
        },

        methods: {
            postFood: function(foodObj) {
                axios.post('/post', foodObj)
                    .then(res => {
                        console.log(res);
                        this.show = false;
                        this.$emit('submit');
                    });
            }
        }
        
    }
</script>