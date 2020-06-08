Ext.define('FinalTask2.view.main.person.ViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.person',

    data: {
        nameField: null,
        surnameField: null,
        emailField: null,
        birthField: null
    },

    formulas: {
        isFull: function (get) {
            var name = get('nameField');
            var surname = get('surnameField');
            var email = get('emailField');
            var birth = get('birthField');
            if (name && surname && email && birth) {
                return false;
            } else {
                return true;
            }
        }
    }
});