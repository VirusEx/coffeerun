(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    class FormHandler {
        constructor(selector) {
            console.log('In payment form constructor...');

            if (!selector) { throw new Error('No selector provided'); }

            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }
        addSubmitHandler(fn) {
            console.log('Setting submit handler for form');
            // TODO: 
            this.$formElement.on('submit', function (event) {
                event.preventDefault();

                // var data = $(this).serializeArray();
                var data = {};
                $(this).serializeArray().forEach(function (item) { 
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                console.log(data);
                window.open('payment-form.html');
                fn(data)    // truck createOrder is currently fn
                .then(function () {
                    this.reset();
                    this.elements[0].focus();
                }.bind(this));         
                
            });
        }

        addInputHandler(fn) {
            console.log('Setting input handler for form');
            this.$formElement.on('input', '[name="emailAddress"]', function (event) {
                // Event handler code will go here
                var emailAddress = event.target.value;
                // console.log(fn(emailAddress));
                var message = '';
                if (fn(emailAddress)) {
                    event.target.setCustomValidity('');
                } else {
                    message = emailAddress + ' is not an authorized email address!'
                    event.target.setCustomValidity(message);
                }
            });
        }
    }
   
    App.Paymentform = FormHandler;
    window.App = App;
  })(window);