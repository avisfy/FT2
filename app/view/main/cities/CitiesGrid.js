Ext.define('FinalTask2.view.main.cities.CitiesGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'cities-grid',

    requires: [
        'FinalTask2.store.Cities'
    ],

    id: 'CitiesGridPanel',

    store: {
        type: 'cities'
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
            text: 'Region',
            dataIndex: 'region',
            flex: 1
        }, {
            text: 'City',
            dataIndex: 'city',
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