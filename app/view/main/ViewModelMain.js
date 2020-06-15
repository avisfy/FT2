Ext.define('FinalTask2.view.main.ViewModelMain', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    stores: {
        persons: {
            model: 'FinalTask2.model.Person',
            //autoLoad: true
        },
        cities: {
            model: 'FinalTask2.model.City',
            //autoLoad: true
        },
        techs: {
            model: 'FinalTask2.model.Tech',
            //autoLoad: true
        },
        exps: {
            model: 'FinalTask2.model.Exp',
            //autoLoad: true
        },
        employees: {
            model: 'FinalTask2.model.Employee',
            //autoLoad: true
        },
        modal: {
            model: 'FinalTask2.model.Modal',
            //autoLoad: true
        }
    }
});