Ext.define('FinalTask2.view.main.exps.ExpsGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'exps-grid',

    requires: [
        'FinalTask2.store.Exps'
    ],

    id: 'ExpsGridPanel',

    // store: {
    //     type: 'exps',
    //     listeners: [{
    //         update: 'updateExps'
    //     }]
    // },

    bind: {
        store: '{exps}'
    },

    plugins: [{
        ptype: 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel: false
    }],

    tbar: [
        {
            text: 'Remove selected rows',
            listeners: {
                click: 'onRemoveClicked'
            }
        }],

    columns: [
        {
            text: 'Period',
            dataIndex: 'period',
            flex: 1,
            editor: {
                allowBlank: false,
            }
        }, {
            text: 'Unit',
            dataIndex: 'unit',
            flex: 1,
            editor: {
                allowBlank: false,
            }
        }, {
            xtype: 'checkcolumn',
            header: 'Delete',
            dataIndex: 'needDelete',
            width: 60
        }],

    listeners: [{
        afterrender: 'afterGridReady'
    }]

});