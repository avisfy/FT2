Ext.define('FinalTask2.view.main.cities.CitiesController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cities',

    afterGridReady: function () {
        Ext.Ajax.request({
            url: 'http://localhost:8080/city/load',
            method: 'GET',

            success: function (response, opts) {
                console.log('Load city!');
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
                console.log('Failed loading city');
            }
        })
    },


    onAddClicked: function () {
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
    },
});

