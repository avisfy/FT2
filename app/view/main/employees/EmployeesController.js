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
        window.show();
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
});


