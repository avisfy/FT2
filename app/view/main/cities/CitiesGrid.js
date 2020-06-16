Ext.define('FinalTask2.view.main.cities.CitiesGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'cities-grid',

    requires: [
        'FinalTask2.store.Cities'
    ],

    id: 'CitiesGridPanel',

    /*store: {
        //type: 'cities',
        listeners: [{
            update: 'updateCities'
        }]
    },*/
    bind: {
        store: '{cities}'
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
            text: 'Region',
            dataIndex: 'region',
            flex: 1,
            editor: {
                allowBlank: false,
            }
        }, {
            text: 'City',
            dataIndex: 'city',
            flex: 1,
            editor: {
                allowBlank: false,
            }
        }, {
            xtype: 'checkcolumn',
            header: 'Delete',
            dataIndex: 'needDelete',
            width: 60
        }]

});