Ext.define('FinalTask2.view.main.employees.EmployeesController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.employees',


    loadEmployee: function () {
        //debugger;
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:8080/employee/load',
            method: 'GET',
            scope: me,
            async: false,

            success: function (response, opts) {
                console.log('Load employee!');
                var employee= Ext.decode(response.responseText);
                //debugger;
                var store = this.getViewModel().get('employees');
                store.removeAll();

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
        //window.setDefaultListenerScope(true);
        var m = window.show();
    },

   onRemoveClicked: function () {
        var delArr = new Array();
        var s = this.getViewModel().get('employees');
        s.each(function (record) {
            if (record.get('needDelete')) {
                delArr.push(record.get('id'))
            }
        });

        if (delArr.length > 0) {
            var me = this;
            Ext.Ajax.request({
                url: 'http://localhost:8080/employee/delete',
                method: 'POST',
                jsonData: JSON.stringify(delArr),
                scope: me,

                success: function (response, opts) {
                    console.log('Deleted employees');
                    me.loadEmployee();
                },
                failure: function (response, opts) {
                    console.log('Failed deleting employees');
                }
            });
        }
    },


    //------------------------modal-------------------------
    onSaveClicked: function () {
        var vm = this.getViewModel();
        var personId = vm.get('personIdField');
        var cityId = vm.get('cityIdField');
        var techId = vm.get('techIdField');
        var expId = vm.get('expIdField');
        this.saveEmployee(personId, cityId, techId, expId, this);
        this.loadEmployee();
        this.getView().close();
    },

    saveEmployee: function (personId, cityId, techId, expId, me) {
        var empIds = [personId, cityId, techId, expId];

        Ext.Ajax.request({
            url: 'http://localhost:8080/employee/save',
            method: 'POST',
            jsonData: JSON.stringify(empIds),
            async: false,
            scope: me,
            success: function (response, opts) {
                console.log('Employee saved');
            },
            failure: function (response, opts) {
                console.log('Failed saving employee');
            }
        })
    }

});


