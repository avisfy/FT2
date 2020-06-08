Ext.define('FinalTask2.model.Employee', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id',  type: 'int', convert: null},
        {name: 'surname_name',  type: 'string'},
        {name: 'techName',  type: 'string'},
        {name: 'period',  type: 'float'},
        {name: 'unit', type: 'string'},
        {name: 'region',  type: 'string'},
        {name: 'city',  type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'birth', type: 'date'},
        {name: 'needDelete', type: 'boolean'}
    ]
});