Ext.define('FinalTask2.view.main.cities.CitiesGridSet', {
    extend: 'Ext.form.FieldSet',

    xtype: 'cities-grid-set',

    title: 'Cities',
    layout: 'anchor',

    defaults: {anchor: '95%'},
    items: [{
        xtype: 'cities-grid'
    }]
})