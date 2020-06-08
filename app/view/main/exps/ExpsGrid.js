Ext.define('FinalTask2.view.main.exps.ExpsGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'exps-grid',

    requires: [
        'FinalTask2.store.Exps'
    ],

    id: 'ExpsGridPanel',

    store: {
        type: 'exps'
    },

    tbar: [
        {
            text: 'Remove selected rows',
            /*listeners: {
                click: 'onRemoveClicked'
            }*/
        }],

    columns: [
        {
            text: 'Period',
            dataIndex: 'period',
            flex: 1
        }, {
            text: 'Unit',
            dataIndex: 'unit',
            flex: 1
        }, {
            xtype: 'checkcolumn',
            header: 'Delete',
            dataIndex: 'needDelete',
            width: 60
        }],

    /*listeners: [{
        itemdblclick: 'onRowDblClicked'
    }, {
        afterrender: 'afterGridReady'
    }]*/

});