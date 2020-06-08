Ext.define('FinalTask2.view.main.cities.AddCitySet', {
    extend: 'Ext.form.FieldSet',

    xtype: 'add-city-set',
    title: 'Add city',

    layout: 'anchor',
    defaults: { anchor: '95%'},

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Region:',
        bind: '{regionField}'
    }, {
        xtype: 'textfield',
        fieldLabel: 'City:',
        bind: '{cityField}'
    }, {
        xtype: 'button',
        text: 'Add new city!',
        bind: {
            disabled: '{isFull}'
        },
        //listeners: {
        //click: 'onAddClicked'
        //}
    } ]
})