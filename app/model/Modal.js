Ext.define('FinalTask2.model.Modal', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'person_id', type: 'int', convert: null},
        {name: 'surname_name', type: 'string'},

        {name: 'city_id', type: 'int', convert: null},
        {name: 'city', type: 'string'},
        {name: 'region', type: 'string'},
        {
            name: 'displayCity', convert: function (v, rec) {
                return rec.get('region') + ' ' + rec.get('city');
            }
        },

        {name: 'tech_id', type: 'int', convert: null},
        {name: 'techName', type: 'string'},

        {name: 'exp_id', type: 'int', convert: null},
        {name: 'period', type: 'float'},
        {name: 'unit', type: 'string'},
        {
            name: 'displayExp', convert: function (v, rec) {
                return rec.get('period').toString() + ' ' + rec.get('unit');
            }
        }
    ]
});