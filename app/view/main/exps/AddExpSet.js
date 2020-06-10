Ext.define('FinalTask2.view.main.exps.AddExpSet', {
    extend: 'Ext.form.FieldSet',

    xtype: 'add-exp-set',
    title: 'Add experience',

    layout: 'anchor',
    defaults: { anchor: '95%'},

    items: [{
        xtype: 'numberfield',
        allowDecimals: true,
        hideTrigger: true,
        fieldLabel: 'Period:',
        bind: '{periodField}'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Unit:',
        bind: '{unitField}'
    }, {
        xtype: 'button',
        text: 'Add new experience!',
        bind: {
            disabled: '{isFull}'
        },
        listeners: {
        click: 'onAddClicked'
        }
    } ]
})