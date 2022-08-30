import moment from 'moment';
import Vue from 'vue'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
Vue.use(datePicker);

Vue.filter('date', function (date, format) {
    // console.log(date, moment(date, true));
    console.log(moment(date, true), moment(date, true).format(format))
    return moment(date, true).format(format)
});
Vue.filter('currencyFormat', function (number) {
    number = parseFloat(number);
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
});
