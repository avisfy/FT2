Ext.define('FinalTask2.view.main.person.PersonGridSet', {
    extend: 'Ext.form.FieldSet',

    xtype: 'person-grid-set',

    title: 'Person',
    layout: 'anchor',

    defaults: {anchor: '95%'},
    items: [{
        xtype: 'person-grid'
    }]
})