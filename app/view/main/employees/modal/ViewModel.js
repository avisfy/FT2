Ext.define('FinalTask2.view.main.employees.modal.ViewModel', {
    extend: 'FinalTask2.view.main.ViewModelMain',

    alias: 'viewmodel.modal',

    data: {
        personIdField: null,
        cityIdField: null,
        techIdField: null,
        expIdField: null

    },

    formulas: {
        isFull: function (get) {
            var personId = get('personIdField');
            var cityId = get('cityIdField');
            var techId = get('techIdField');
            var expId = get('expIdField');
            if (personId && cityId && techId && expId) {
                return false;
            } else {
                return true;
            }
        }
    },

    stores: {
        emps: {
            model: 'FinalTask2.model.Employee',
            //autoLoad: true
        }
    }
});