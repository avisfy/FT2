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
    }
});