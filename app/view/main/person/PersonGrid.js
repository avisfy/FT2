Ext.define('FinalTask2.view.main.person.PersonGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'person-grid',

    requires: [
        'FinalTask2.store.Person'
    ],

    id: 'PersonGridPanel',

    // store: {
    //     type: 'person',
    //     listeners: [{
    //         update: 'updatePerson'
    //
    //     }]
    // },
    bind: {
        store: '{persons}'
    },

    plugins: {
        ptype: 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel: false
    },

    tbar: [
        {
            text: 'Remove selected rows',
            listeners: {
                click: 'onRemoveClicked'
            }
        }],

    columns: [
        {
            text: 'Surname Name',
            dataIndex: 'surname_name',
            flex: 3,
            editor: {
                allowBlank: false
            }
        }, {
            text: 'Email',
            dataIndex: 'email',
            flex: 2,
            editor: {
                allowBlank: false
            }
        }, {
            text: 'Date of birth',
            xtype: 'datecolumn',
            dataIndex: 'birth',
            formatter: 'date("d/m/Y")',
            width: 115,
            editor: {
                xtype: 'datefield',
                maxValue: new Date(),
                allowBlank: false,
                formatter: 'date("d/m/Y")',
                width: 115
            }
        }, {
            xtype: 'checkcolumn',
            header: 'Delete',
            dataIndex: 'needDelete',
            width: 60
        }]

});