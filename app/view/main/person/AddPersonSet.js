Ext.define('FinalTask2.view.main.person.AddPersonSet', {
    extend: 'Ext.form.FieldSet',

    xtype: 'add-person-set',

    title: 'Add person',

    layout: 'anchor',
    defaults: {anchor: '95%'},
    defaultType: 'textfield',

    items: [{
        fieldLabel: 'Name:',
        bind: '{nameField}'
    }, {
        fieldLabel: 'Surname:',
        bind: '{surnameField}'
    }, {
        fieldLabel: 'Email:',
        bind: '{emailField}',
        vtype: 'email'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Date of birth:',
        maxValue: new Date(),
        bind: '{birthField}'
    }, {
        xtype: 'button',
        text: 'Add new person!',
        bind: {
            disabled: '{isPerson}'
        },
        listeners: {
            click: 'onAddClicked'
        }
    }]
})