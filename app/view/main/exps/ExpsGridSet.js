Ext.define('FinalTask2.view.main.exps.ExpsGridSet', {
    extend: 'Ext.form.FieldSet',

    xtype: 'exps-grid-set',

    title: 'Experiences',
    layout:  'anchor',

    defaults: {anchor: '95%'},
    items: [{
        xtype: 'exps-grid'
    } ]
})