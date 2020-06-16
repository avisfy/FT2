Ext.define('FinalTask2.view.main.employees.EmployeesController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.employees',

    afterGridReady: function () {
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:8080/employee/load',
            method: 'GET',
            scope: me,

            success: function (response, opts) {
                console.log('Load employee!');
                var employee= Ext.decode(response.responseText);
                var store = this.getViewModel().get('employees');

                employee.map(function (emp) {
                    var e = Ext.create('FinalTask2.model.Employee', {
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
                    store.add(e);
                })
            },
            failure: function (response, opts) {
                console.log('Failed loading employees');
            }
        })
    },


    onAddClicked: function () {
        var window = Ext.create('FinalTask2.view.main.employees.modal.ModalView');
        var m = window.show();
    },

   onRemoveClicked: function () {
        var delArr = new Array();
        var s = this.getViewModel().get('employees');
        s.each(function (record) {
            if (record.get('needDelete')) {
                delArr.push(record.get('id'))
                s.remove(record);
            }
        });

        if (delArr.length > 0) {
            Ext.Ajax.request({
                url: 'http://localhost:8080/employee/delete',
                method: 'POST',
                jsonData: JSON.stringify(delArr),

                success: function (response, opts) {
                    console.log('Deleted employees');
                },
                failure: function (response, opts) {
                    console.log('Failed deleting employees');
                }
            });
        }
    },




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
        var empview = Ext.ComponentQuery.query('#empv')[0];
        var personId = vm.get('personIdField');
        var cityId = vm.get('cityIdField');
        var techId = vm.get('techIdField');
        var expId = vm.get('expIdField');
        var emp = Ext.create('FinalTask2.model.Employee', {needDelete: false});
        this.saveEmployee(personId, cityId, techId, expId, emp);
        var store = empview.getViewModel().get('employees');
        store.add(emp);
        this.getView().close();
    },

    saveEmployee: function (pId, cId, tId, eId, e) {
        var empIds = [pId, cId, tId, eId];
        Ext.Ajax.request({
            url: 'http://localhost:8080/employee/save',
            method: 'POST',
            jsonData: JSON.stringify(empIds),
            async: false,
            success: function (response, opts) {
                console.log('Employee saved');
                var emp = Ext.decode(response.responseText);
                e.set('id', emp.id);
                e.set('surname_name', emp.person.surnameName);
                e.set('techName', emp.tech.techName);
                e.set('period', emp.exp.period);
                e.set('unit', emp.exp.unit);
                e.set('region', emp.city.region);
                e.set('city', emp.city.city);
                e.set('email', emp.person.email);
                e.set('birth', emp.person.birth);
                console.log(e);
            },
            failure: function (response, opts) {
                console.log('Failed saving employee');
            }
        })
    }

});


