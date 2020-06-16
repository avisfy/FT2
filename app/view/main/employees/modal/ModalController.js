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
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:8080/city/load',
            method: 'GET',
            scope: me,
            success: function (response, opts) {
                console.log('Load modal city!');
                var city= Ext.decode(response.responseText);
                var store = this.getViewModel().get('cities');

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
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:8080/person/load',
            method: 'GET',
            scope: me,
            success: function (response, opts) {
                console.log('Load modal person!');
                var pers = Ext.decode(response.responseText);
                var store = this.getViewModel().get('persons');

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
        var me =  this;
        Ext.Ajax.request({
            url: 'http://localhost:8080/exp/load',
            method: 'GET',
            scope: me,

            success: function (response, opts) {
                console.log('Load modal exp!');
                var exp= Ext.decode(response.responseText);
                var store = this.getViewModel().get('exps');

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
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:8080/tech/load',
            method: 'GET',
            scope: me,

            success: function (response, opts) {
                console.log('Load modal tech!');
                var tech = Ext.decode(response.responseText);
                var store = this.getViewModel().get('techs');

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
            techId, expId, this);
    },

    saveEmployee: function (pId, cId, tId, eId, mt) {
        debugger
        var me = this;
        var vm = this.getViewModel();
        var empIds = [pId, cId, tId, eId];
        console.log(empIds);
        Ext.Ajax.request({
            url: 'http://localhost:8080/employee/save',
            method: 'POST',
            jsonData: JSON.stringify(empIds),
            scope: me,
            success: function (response, opts) {
                console.log('Employee saved');
                debugger
                var emp = Ext.decode(response.responseText);
                debugger
                var store = this.getViewModel().get('employees');
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

});


