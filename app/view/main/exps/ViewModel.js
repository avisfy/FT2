Ext.define('FinalTask2.view.main.exps.ViewModel', {
    extend: 'FinalTask2.view.main.ViewModelMain',

    alias: 'viewmodel.exps',

    data: {
        periodField: null,
        unitField: null,
    },

    formulas: {
        isFull: function (get) {
            var period = get('periodField');
            var unit = get('unitField');
            if (period && unit) {
                return false;
            } else {
                return true;
            }
        }
    }
});