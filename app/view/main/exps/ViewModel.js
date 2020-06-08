Ext.define('FinalTask2.view.main.exps.ViewModel', {
    extend: 'Ext.app.ViewModel',

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