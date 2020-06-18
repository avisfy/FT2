Ext.define('FinalTask2.view.main.employees.EmployeesGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'employees-grid',

    requires: [
        'FinalTask2.store.Employees'
    ],

    id: 'EmployeesGridPanel',

    // store: {
    //     type: 'employees'
    // },
    bind: {
        store: '{employees}'
    },

    tbar: [
        {
            text: 'Add employee',
            listeners: {
                click: 'onAddClicked'
            }
        }, {
            text: 'Remove selected',
            listeners: {
                click: 'onRemoveClicked'
            }
        }],

    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            flex: 1
        }, {
            text: 'Surname Name',
            dataIndex: 'surname_name',
            flex: 3
        }, {
            text: 'Technology',
            dataIndex: 'techName',
            flex: 2
        }, {
            text: 'Period',
            dataIndex: 'period',
            flex: 1
        }, {
            text: 'Unit',
            dataIndex: 'unit',
            flex: 2
        }, {
            text: 'Region',
            dataIndex: 'region',
            flex: 2
        }, {
            text: 'City',
            dataIndex: 'city',
            flex: 2
        }, {
            text: 'Date of birth',
            xtype: 'datecolumn',
            dataIndex: 'birth',
            formatter: 'date("d.m.Y")',
            width: 115
        }, {
            text: 'Email',
            dataIndex: 'email',
            flex: 2
        }, {
            xtype: 'checkcolumn',
            header: 'Delete',
            dataIndex: 'needDelete',
            width: 55
        }]
});