Ext.define('FinalTask2.view.main.cities.ViewModel', {
    extend: 'FinalTask2.view.main.ViewModelMain',

    alias: 'viewmodel.cities',

    data: {
        cityField: null,
        regionField: null,
    },

    formulas: {
        isFullCity: function (get) {
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