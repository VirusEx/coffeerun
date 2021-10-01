(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    class FormHandler {
        constructor() {
            console.log('in FormHandler construtor');

            if (!selector) { throw new Error('No selector provided'); }

            this.$formElement = $(selector);

            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with seletor: ' + selector);
            }

            FormHandler.prototype.addSubmitHandler = function () {
                console.log('Setting submit handler for form');
                // TODO:
                this.$formElement.on('submit', function (event) {
                    event.preventDefault();

                    var data = $(this).serializeArray();
                    console.log(data);
                });
            };

        }
    }



    App.FormHandler = FormHandler;
    window.App = App;
})(window);