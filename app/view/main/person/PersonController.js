Ext.define('FinalTask2.view.main.person.PersonController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.person',


    loadPerson: function () {
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:8080/person/load',
            method: 'GET',
            scope: me,

            success: function (response, opts) {
                console.log('Load person!');
                var pers = Ext.decode(response.responseText);
                var store = this.getViewModel().get('persons');
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
        var dateBirth = vm.get('birthField').toISOString();
        var birth = dateBirth.slice(0, dateBirth.indexOf('T'));
        var pers = {
            surnameName: vm.get('surnameField') + ' ' + vm.get('nameField'),
            email: vm.get('emailField'),
            birth: birth
        };
        this.saveUser(pers, this);


        vm.set('nameField', null);
        vm.set('surnameField', null);
        vm.set('emailField', null);
        vm.set('birthField', null);
    },


    saveUser: function (person, me) {
        Ext.Ajax.request({
            url: 'http://localhost:8080/person/save',
            method: 'POST',
            jsonData: JSON.stringify(person),
            scope: me,

            success: function (response, opts) {
                console.log('Person saved');
                this.loadPerson();
            },
            failure: function (response, opts) {
                console.log('Failed saving person');
            }
        })

    },

    onRemoveClicked: function () {
        var delArr = new Array();
        var s = this.getViewModel().get('persons');
        s.each(function (record) {
            if (record.get('needDelete')) {
                delArr.push(record.get('id'))
            }
        });

        if (delArr.length > 0) {
            var me = this;
            Ext.Ajax.request({
                url: 'http://localhost:8080/person/delete',
                method: 'POST',
                jsonData: JSON.stringify(delArr),
                scope: me,
                success: function (response, opts) {
                    console.log('Deleted person');
                    this.loadPerson();
                },
                failure: function (response, opts) {
                    console.log('Failed deleting person');
                }
            });
        }
    },
});


