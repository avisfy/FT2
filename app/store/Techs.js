Ext.define('FinalTask2.store.Techs', {
    extend: 'Ext.data.Store',

    alias: 'store.techs',
    storeId: 'techsList',
    model: 'FinalTask2.model.Tech',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});