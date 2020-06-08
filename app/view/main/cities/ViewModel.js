Ext.define('FinalTask2.view.main.cities.ViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.cities',

    data: {
        cityField: null,
        regionField: null,
    },

    formulas: {
        isFull: function (get) {
            var city = get('cityField');
            var region = get('regionField');
            if (city && region) {
                return false;
            } else {
                return true;
            }
        }
    }
});