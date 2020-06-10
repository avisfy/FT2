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
    },

    updateTechs: function (e, rec, operation, modifiedFieldNames) {
        if (!((modifiedFieldNames[0] === 'needDelete') || (modifiedFieldNames[0] === 'id'))) {
            var tech = {
                id: rec.get('id'),
                techName: rec.get('techName')
            };

            Ext.Ajax.request({
                url: 'http://localhost:8080/tech/edit',
                method: 'POST',
                jsonData: JSON.stringify(tech),

                success: function (response, opts) {
                    console.log('Update tech');
                },
                failure: function (response, opts) {
                    console.log('Failed update tech');
                }
            });
        }
    }
});