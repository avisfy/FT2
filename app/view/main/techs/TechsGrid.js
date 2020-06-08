Ext.define('FinalTask2.view.main.techs.TechsGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'techs-grid',

    requires: [
        'FinalTask2.store.Techs'
    ],

    id: 'TechsGridPanel',

    store: {
        type: 'techs'
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
            text: 'Technologies',
            dataIndex: 'techName',
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