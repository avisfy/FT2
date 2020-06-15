Ext.define('FinalTask2.view.main.employees.modal.ModalController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.modal',

    beforeViewReady: function () {
        this.loadPerson();
        this.loadCity();
        this.loadExp();
        this.loadTech();
    },


    loadCity: function() {
        Ext.Ajax.request({
            url: 'http://localhost:8080/city/load',
            method: 'GET',

            success: function (response, opts) {
                console.log('Load modal city!');
                var city= Ext.decode(response.responseText);
                var store = Ext.getStore('citiesList');

                city.map(function (c) {
                    var cityAdd = Ext.create('FinalTask2.model.City', {
                        id: c.id,
                        city: c.city,
                        region: c.region,
                        needDelete: false
                    });
                    store.add(cityAdd);
                })
            },
            failure: function (response, opts) {
                console.log('Failed loading modal city');
            }
        })
    },

    loadPerson: function () {
        Ext.Ajax.request({
            url: 'http://localhost:8080/person/load',
            method: 'GET',

            success: function (response, opts) {
                console.log('Load modal person!');
                var pers = Ext.decode(response.responseText);
                var store = Ext.getStore('personList');

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
                console.log(store);
            },
            failure: function (response, opts) {
                console.log('Failed loading modal person');
            }
        })
    },

    loadExp: function () {
        Ext.Ajax.request({
            url: 'http://localhost:8080/exp/load',
            method: 'GET',

            success: function (response, opts) {
                console.log('Load modal exp!');
                var exp= Ext.decode(response.responseText);
                var store = Ext.getStore('expsList');

                exp.map(function (e) {
                    var expAdd = Ext.create('FinalTask2.model.Exp', {
                        id: e.id,
                        period: e.period,
                        unit: e.unit,
                        needDelete: false
                    });
                    store.add(expAdd);
                })
            },
            failure: function (response, opts) {
                console.log('Failed loading modal exp');
            }
        })
    },

    loadTech: function () {
        Ext.Ajax.request({
            url: 'http://localhost:8080/tech/load',
            method: 'GET',

            success: function (response, opts) {
                console.log('Load modal tech!');
                var tech = Ext.decode(response.responseText);
                var store = Ext.getStore('techsList');

                tech.map(function (t) {
                    var techAdd = Ext.create('FinalTask2.model.Tech', {
                        id: t.id,
                        techName: t.techName,
                        needDelete: false
                    });
                    store.add(techAdd);
                })
            },
            failure: function (response, opts) {
                console.log('Failed loading modal tech');
            }
        })
    },


    onSaveClicked: function () {
        var vm = this.getViewModel();
        var personId = vm.get('personIdField');
        var cityId = vm.get('cityIdField');
        var techId = vm.get('techIdField');
        var expId = vm.get('expIdField');
        this.saveEmployee(personId, cityId,
            techId, expId);
    },

    saveEmployee: function (pId, cId, tId, eId) {
        var empIds = [pId, cId, tId, eId];
        console.log(empIds);
        Ext.Ajax.request({
            url: 'http://localhost:8080/employee/save',
            method: 'POST',
            jsonData: JSON.stringify(empIds),

            success: function (response, opts) {
                console.log('Employee saved');
                var emp = Ext.decode(response.responseText);
                var store = Ext.getStore('employeesList');
                var emp = Ext.create('FinalTask2.model.Employee', {
                    id: emp.id,
                    surname_name: emp.person.surnameName,
                    techName: emp.tech.techName,
                    period: emp.exp.period,
                    unit: emp.exp.unit,
                    region: emp.city.region,
                    city: emp.city.city,
                    email: emp.person.email,
                    birth: emp.person.birth,
                    needDelete: false
                });
                console.log(emp);
                store.add(emp);
            },
            failure: function (response, opts) {
                console.log('Failed saving employee');
            }
        })
        this.getView().close();
    }

   /* onAddClicked: function () {
        var vm = this.getViewModel();
        var cityAdd = Ext.create('FinalTask2.model.City', {
            city: vm.get('cityField'),
            region: vm.get('regionField'),
            needDelete: false
        });

        this.saveCity(cityAdd);
        var s = Ext.getStore('citiesList');
        s.add(cityAdd);

        vm.set('cityField', null);
        vm.set('regionField', null);
    },


    saveCity: function (c) {
        var city = {
            city: c.get('city'),
            region: c.get('region'),
        };
        Ext.Ajax.request({
            url: 'http://localhost:8080/city/save',
            method: 'POST',
            jsonData: JSON.stringify(city),

            success: function (response, opts) {
                console.log('City saved');
                var id = Ext.decode(response.responseText);
                c.set('id', id);
            },
            failure: function (response, opts) {
                console.log('Failed saving city');
            }
        })
    },

    onRemoveClicked: function () {
        var delArr = new Array();
        var s = Ext.getStore('citiesList');
        s.each(function (record) {
            if (record.get('needDelete')) {
                delArr.push(record.get('id'))
                s.remove(record);
            }
        });

        if (delArr.length > 0) {
            Ext.Ajax.request({
                url: 'http://localhost:8080/city/delete',
                method: 'POST',
                jsonData: JSON.stringify(delArr),

                success: function (response, opts) {
                    console.log('Deleted cities');
                },
                failure: function (response, opts) {
                    console.log('Failed deleting cities');
                }
            });
        }
    },*/
});


