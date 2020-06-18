Ext.define('FinalTask2.model.City', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int', convert: null},
        {name: 'city', type: 'string'},
        {name: 'region', type: 'string'},
        {name: 'needDelete', type: 'boolean'},
        {
            name: 'displayCity', convert: function (v, rec) {
                return rec.get('region') + ' ' + rec.get('city');
            }
        }
    ]
});