Ext.define('FinalTask2.model.Tech', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int', convert: null},
        {name: 'techName', type: 'string'},
        {name: 'needDelete', type: 'boolean'}
    ]
});