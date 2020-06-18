Ext.define('FinalTask2.view.main.cities.CitiesController', {
    extend: 'FinalTask2.view.main.employees.EmployeesController',

    alias: 'controller.cities',


    loadCity: function () {
        //var me = Ext.ComponentQuery.query('#cityv')[0];
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:8080/city/load',
            method: 'GET',
            scope: me,

            success: function (response, opts) {
                console.log('Load city!');
                var city = Ext.decode(response.responseText);
                var store = this.getViewModel().get('cities');
                store.removeAll();

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
                console.log('Failed loading city');
            }
        })
    },


    onAddClicked: function () {
        var vm = this.getViewModel();
        var city = {
            city: vm.get('cityField'),
            region: vm.get('regionField')
        };
        this.saveCity(city, this);

        vm.set('cityField', null);
        vm.set('regionField', null);
    },


    saveCity: function (city, me) {
        Ext.Ajax.request({
            url: 'http://localhost:8080/city/save',
            method: 'POST',
            jsonData: JSON.stringify(city),
            scope: me,

            success: function (response, opts) {
                console.log('City saved');
                this.loadCity();
            },
            failure: function (response, opts) {
                console.log('Failed saving city');
            }
        })
    },

    onRemoveClicked: function () {
        var delArr = new Array();
        var s = this.getViewModel().get('cities');
        s.each(function (record) {
            if (record.get('needDelete')) {
                delArr.push(record.get('id'))
            }
        });

        if (delArr.length > 0) {
            var me = this;
            Ext.Ajax.request({
                url: 'http://localhost:8080/city/delete',
                method: 'POST',
                jsonData: JSON.stringify(delArr),
                scope: me,

                success: function (response, opts) {
                    console.log('Deleted cities');
                    this.loadCity();
                    this.loadEmployee();
                },
                failure: function (response, opts) {
                    console.log('Failed deleting cities');
                }
            });
        }
    }
});


