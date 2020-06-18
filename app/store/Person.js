Ext.define('FinalTask2.store.Person', {
    extend: 'Ext.data.Store',

    alias: 'store.person',
    storeId: 'personList',
    model: 'FinalTask2.model.Person',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

    updatePerson: function (e, rec, operation, modifiedFieldNames) {
        if (!((modifiedFieldNames[0] === 'needDelete') || (modifiedFieldNames[0] === 'id'))) {
            var dateBirth = rec.get('birth').toISOString();
            var birth = dateBirth.slice(0, dateBirth.indexOf('T'));
            var person = {
                id: rec.get('id'),
                surnameName: rec.get('surname_name'),
                email: rec.get('email'),
                birth: birth
            };

            Ext.Ajax.request({
                url: 'http://localhost:8080/person/edit',
                method: 'POST',
                jsonData: JSON.stringify(person),

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