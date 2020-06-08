Ext.define('FinalTask2.model.Person', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id',  type: 'int', convert: null},
        {name: 'surname_name',  type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'birth', type: 'date'},
        {name: 'needDelete', type: 'boolean'}
    ]
});