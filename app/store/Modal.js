Ext.define('FinalTask2.store.Modal', {
    extend: 'Ext.data.Store',

    alias: 'store.modal',
    storeId: 'modalList',
    model: 'FinalTask2.model.Modal',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});