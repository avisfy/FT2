Ext.define('FinalTask2.view.main.Main', {
    extend: 'Ext.tab.Panel',

    xtype: 'app-main',
    requires: [
        'FinalTask2.view.main.person.PersonView',
        'FinalTask2.view.main.cities.CitiesView',
        'FinalTask2.view.main.techs.TechsView',
        'FinalTask2.view.main.exps.ExpsView',
        'FinalTask2.view.main.employees.EmployeesView'
    ],

    viewModel: 'main',
    controller: 'main',

    title: 'Task3',
    tabBarHeaderPosition: 2,
    plain: false,
    bodyPadding: 12,

    layout: {
        type: 'hbox',
        pack: 'center'
    },
    defaults: {
        padding: 30,
        scrollable: true,
        border: false
    },

    items: [{
        xtype: 'person-view',
        title: 'Person',
    }, {
        xtype: 'cities-view',
        title: 'Cities'
    }, {
        xtype: 'techs-view',
        title: 'Technologies'
    }, {
        xtype: 'exps-view',
        title: 'Experiences'
    }, {
        xtype: 'employees-view',
        title: 'Employees'
    }],

    listeners: {
        afterrender: 'loadTabs'
    }
});