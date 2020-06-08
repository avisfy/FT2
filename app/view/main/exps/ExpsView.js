Ext.define('FinalTask2.view.main.exps.ExpsView', {
    extend: 'Ext.panel.Panel',

    xtype: 'exps-view',
    requires: [
        'FinalTask2.view.main.exps.ViewModel',
    ],

    viewModel: 'exps',
    //controller: 'main',

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
        xtype: 'add-exp-set',
        flex: 1,
        margin: '0 5 0 0'
    }, {
        xtype: 'exps-grid-set',
        flex: 2,
        margin: '0 0 0 5'
    } ]
});