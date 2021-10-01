(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    class CheckList {
        constructor(selector) {
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$element = $(selector);
            if (this.$element.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }

        addRow(coffeeOrder) {
            var rowElement = new Row(coffeeOrder);
            this.$element
        }
    }

    class CheckList {
        constructor(coffeeOrder) {
            console.log('In Row constructor...');

            var $div = $('<div></div>', {
                'data-coffee-order': 'checkbox',
                'class': 'checkbox'
                });
            var $label = $('<label></label>');

            var $checkbox = $('<input></input>', {
                type: 'checkbox',
                value: coffeeOrder.emailAddress
            });

            var description = coffeeOrder.size + ' ';
            if (coffeeOrder.flavor) {
                description += coffeeOrder.flavor + ' ';
            }

            description += coffeeOrder.coffee + ', ';
            description += ' (' + coffeeOrder.emailAddress + ')';
            description += ' [' + coffeeOrder.strength + 'x]';

            $label.append($checkbox);
            $label.append(description);
            $div.append($label);

            this.$element = $div;
        //     if (!selector) {
        //         throw new Error('No selector provided');
        //     }
        //     this.$element = $(selector);
        //     if (this.$element.length === 0) {
        //         throw new Error('Could not find element with selector: ' + selector);
        //     }
        }
    }


    App.CheckList = CheckList;
    window.App = App;
    })(window);