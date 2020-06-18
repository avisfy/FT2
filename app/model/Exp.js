Ext.define('FinalTask2.model.Exp', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int', convert: null},
        {name: 'period', type: 'float'},
        {name: 'unit', type: 'string'},
        {name: 'needDelete', type: 'boolean'},
        {
            name: 'displayExp', convert: function (v, rec) {
                return rec.get('period').toString() + ' ' + rec.get('unit');
            }
        }
    ]
});