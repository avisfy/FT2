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
    }
});