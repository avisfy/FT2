Ext.define('FinalTask2.view.main.cities.CitiesView', {
    extend: 'Ext.panel.Panel',

    xtype: 'cities-view',
    requires: [
        'FinalTask2.view.main.cities.ViewModel',
        'FinalTask2.view.main.cities.CitiesController'
    ],

    controller: 'cities',

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
        xtype: 'add-city-set',
        flex: 1,
        margin: '0 5 0 0'
    }, {
        xtype: 'cities-grid-set',
        flex: 2,
        margin: '0 0 0 5'
    }]
});