Ext.define('FinalTask2.store.Cities', {
    extend: 'Ext.data.Store',

    alias: 'store.cities',
    storeId: 'citiesList',
    model: 'FinalTask2.model.City',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

    updateCities: function (e, rec, operation, modifiedFieldNames) {
        if(!((modifiedFieldNames[0] === 'needDelete') || (modifiedFieldNames[0] === 'id'))){
            var city = {
                id: rec.get('id'),
                city: rec.get('city'),
                region: rec.get('region'),
            };

            Ext.Ajax.request({
                url: 'http://localhost:8080/city/edit',
                method: 'POST',
                jsonData: JSON.stringify(city),

                success: function (response, opts) {
                    console.log('Update person');
                },
                failure: function (response, opts) {
                    console.log('Failed update person');
                }
            });
        }
    }
});