Ext.define('FinalTask2.view.main.person.PersonController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.person',

    afterGridReady: function () {
        Ext.Ajax.request({
            url: 'http://localhost:8080/person/load',
            method: 'GET',

            success: function (response, opts) {
                console.log('Load person!');
                var pers = Ext.decode(response.responseText);
                var store = Ext.getStore('personList');
                store.removeAll();

                pers.map(function (p) {
                    var persModel = Ext.create('FinalTask2.model.Person', {
                        id: p.id,
                        surname_name: p.surnameName,
                        email: p.email,
                        //dateOfBirth: new Date(Date.parse(user.birth)),
                        birth: p.birth,
                        needDelete: false
                    });
                    store.add(persModel);
                })
            },
            failure: function (response, opts) {
                console.log('Failed loading person');
            }
        })
    },


    onAddClicked: function () {
        var vm = this.getViewModel();
        var pers = Ext.create('FinalTask2.model.Person', {
            surname_name: vm.get('surnameField') + ' ' + vm.get('nameField'),
            email: vm.get('emailField'),
            birth: vm.get('birthField'),
            needDelete: false
        });
        this.saveUser(pers);
        var s = Ext.getStore('personList');
        s.add(pers);

        vm.set('nameField', null);
        vm.set('surnameField', null);
        vm.set('emailField', null);
        vm.set('birthField', null);
    },


    saveUser: function (pers) {
        var dateBirth = pers.get('birth').toISOString();
        var birth = dateBirth.slice(0, dateBirth.indexOf('T'));
        var person = {
            surnameName: pers.get('surname_name'),
            email: pers.get('email'),
            birth: birth
        };
        Ext.Ajax.request({
            url: 'http://localhost:8080/person/save',
            method: 'POST',
            jsonData: JSON.stringify(person),

            success: function (response, opts) {
                console.log('Person saved');
                var id = Ext.decode(response.responseText);
                pers.set('id', id);
            },
            failure: function (response, opts) {
                console.log('Failed saving person');
            }
        })
    },

    onRemoveClicked: function () {
        var delArr = new Array();
        var s = Ext.getStore('personList');
        console.dir(s);
        s.each(function (record) {
            if (record.get('needDelete')) {
                delArr.push(record.get('id'))
                s.remove(record);
            }
        });

        if (delArr.length > 0) {
            Ext.Ajax.request({
                url: 'http://localhost:8080/person/delete',
                method: 'POST',
                jsonData: JSON.stringify(delArr),

                success: function (response, opts) {
                    console.log('Deleted person');
                },
                failure: function (response, opts) {
                    console.log('Failed deleting person');
                }
            });
        }
    },
});


