Ext.define('FinalTask2.view.main.person.PersonView', {
    extend: 'Ext.panel.Panel',

    xtype: 'person-view',
    requires: [
        'FinalTask2.view.main.person.ViewModel',
        'FinalTask2.view.main.person.PersonController'
    ],

    controller: 'person',

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
        xtype: 'add-person-set',
        flex: 1,
        margin: '0 5 0 0'
    }, {
        xtype: 'person-grid-set',
        flex: 2,
        margin: '0 0 0 5'
    }]
});