Ext.define('FinalTask2.view.main.employees.EmployeesView', {
    extend: 'Ext.panel.Panel',

    xtype: 'employees-view',

    requires: [
        //'FinalTask2.view.main.cities.ViewModel',
        'FinalTask2.view.main.employees.EmployeesController',
    ],

    //viewModel: 'employee',
    controller: 'employees',

    bodyPadding: 12,

    layout: {
        type: 'hbox',
        pack: 'center'
    },
    defaults: {
        padding: 30,
        collapsible: false
    },
    width: 100,

    items: [{
        xtype: 'employees-set',
        flex: 1,
        margin: '0 5 0 0'
    }]
});