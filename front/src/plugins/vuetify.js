import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#9FCE34',
                secondary: '#404B8A',
                accent: '#FD8303',
                error: '#FD8303',
                warning: '#FD8303',
                info: '#404B8A',
                success: '#404B8A',
                background: '#9FCE34'
            }
        }
    }
});
