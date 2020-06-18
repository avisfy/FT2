Ext.define('FinalTask2.view.main.techs.AddTechSet', {
    extend: 'Ext.form.FieldSet',

    xtype: 'add-tech-set',
    title: 'Add technology',

    layout: 'anchor',
    defaults: {anchor: '95%'},

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Technology:',
        bind: '{techField}'
    }, {
        xtype: 'button',
        text: 'Add new technology!',
        bind: {
            disabled: '{!techField}'
        },
        listeners: {
            click: 'onAddClicked'
        }
    }]
})