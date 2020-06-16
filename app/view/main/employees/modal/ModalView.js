Ext.define('FinalTask2.view.main.employees.modal.ModalView', {
    extend: 'Ext.window.Window',

    title: 'Add employee...',
    height: 500,
    width: 400,

    requires: [
        'FinalTask2.view.main.employees.modal.ViewModel',
        'FinalTask2.view.main.employees.EmployeesController',
    ],
    controller: 'employees',
    viewModel: 'modal',


    layout: {
        type: 'anchor'
    },
    defaults: {anchor: '100%'},
    padding: 30,

    items: [{
        xtype: 'combobox',
        fieldLabel: 'Surname Name:',
        displayField: 'surname_name',
        valueField: 'id',
        queryMode: 'local',
        // store: {
        //     type: 'person'
        // },
        bind: {
            value: '{personIdField}',
            store: '{persons}'
        },
        editable: false
    }, {
        xtype: 'combobox',
        fieldLabel: 'City:',
        displayField: 'displayCity',
        valueField: 'id',
        queryMode: 'local',
        // store: {
        //     type: 'cities'
        // },
        bind: {
            value: '{cityIdField}',
            store: '{cities}'
        },
        editable: false
    }, {
        xtype: 'combobox',
        fieldLabel: 'Technology:',
        displayField: 'techName',
        valueField: 'id',
        queryMode: 'local',
        // store: {
        //     type: 'techs'
        // },
        bind: {
            value: '{techIdField}',
            store: '{techs}'
        },
        editable: false
    }, {
        xtype: 'combobox',
        fieldLabel: 'Experience:',
        displayField: 'displayExp',
        valueField: 'id',
        queryMode: 'local',
        // store: {
        //     type: 'exps'
        // },
        bind: {
            value: '{expIdField}',
            store: '{exps}'
        },
        editable: false
    }],

    buttons: [{
        text: 'Cancel',
        handler: function () {
            this.up('window').close();
        }
    }, {
        text: 'Save',
        handler: 'onSaveClicked',
        bind: {
            disabled: '{isFull}'
        },
    }]

})