Ext.define('FinalTask2.view.main.techs.TechsView', {
    extend: 'Ext.panel.Panel',

    xtype: 'techs-view',
    requires: [
        'FinalTask2.view.main.techs.ViewModel',
        'FinalTask2.view.main.techs.TechsController'
    ],

    viewModel: 'techs',
    controller: 'techs',

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
        xtype: 'add-tech-set',
        flex: 1,
        margin: '0 5 0 0'
    }, {
        xtype: 'techs-grid-set',
        flex: 2,
        margin: '0 0 0 5'
    }]
});