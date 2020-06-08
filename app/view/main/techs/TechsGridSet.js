Ext.define('FinalTask2.view.main.techs.TechsGridSet', {
    extend: 'Ext.form.FieldSet',

    xtype: 'techs-grid-set',

    title: 'Technologies',
    layout:  'anchor',

    defaults: {anchor: '95%'},
    items: [{
        xtype: 'techs-grid'
    } ]
})