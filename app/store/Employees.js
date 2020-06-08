Ext.define('FinalTask2.store.Employees', {
    extend: 'Ext.data.Store',

    alias: 'store.employees',
    storeId: 'employeesList',
    model: 'FinalTask2.model.Employee',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});