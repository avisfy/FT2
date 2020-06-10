Ext.define('FinalTask2.store.Exps', {
    extend: 'Ext.data.Store',

    alias: 'store.exps',
    storeId: 'expsList',
    model: 'FinalTask2.model.Exp',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    updateExps: function (e, rec, operation, modifiedFieldNames) {
        if (!((modifiedFieldNames[0] === 'needDelete') || (modifiedFieldNames[0] === 'id'))) {
            var exp = {
                id: rec.get('id'),
                period: rec.get('period'),
                unit: rec.get('unit')
            };

            Ext.Ajax.request({
                url: 'http://localhost:8080/exp/edit',
                method: 'POST',
                jsonData: JSON.stringify(exp),

                success: function (response, opts) {
                    console.log('Update exp');
                },
                failure: function (response, opts) {
                    console.log('Failed update exp');
                }
            });
        }
    }
});