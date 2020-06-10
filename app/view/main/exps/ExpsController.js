Ext.define('FinalTask2.view.main.exps.ExpsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.exps',

    afterGridReady: function () {
        Ext.Ajax.request({
            url: 'http://localhost:8080/exp/load',
            method: 'GET',

            success: function (response, opts) {
                console.log('Load exp!');
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
                console.log('Failed loading exp');
            }
        })
    },


    onAddClicked: function () {
        var vm = this.getViewModel();
        var expAdd = Ext.create('FinalTask2.model.Exp', {
            period: vm.get('periodField'),
            unit: vm.get('unitField'),
            needDelete: false
        });

        this.saveExp(expAdd);
        var s = Ext.getStore('expsList');
        s.add(expAdd);

        vm.set('periodField', null);
        vm.set('unitField', null);
    },


    saveExp: function (e) {
        var exp = {
            period: e.get('period'),
            unit: e.get('unit'),
        };
        Ext.Ajax.request({
            url: 'http://localhost:8080/exp/save',
            method: 'POST',
            jsonData: JSON.stringify(exp),

            success: function (response, opts) {
                console.log('Exp saved');
                var id = Ext.decode(response.responseText);
                e.set('id', id);
            },
            failure: function (response, opts) {
                console.log('Failed saving exp');
            }
        })
    },

    onRemoveClicked: function () {
        var delArr = new Array();
        var s = Ext.getStore('expsList');
        s.each(function (record) {
            if (record.get('needDelete')) {
                delArr.push(record.get('id'))
                s.remove(record);
            }
        });

        if (delArr.length > 0) {
            Ext.Ajax.request({
                url: 'http://localhost:8080/exp/delete',
                method: 'POST',
                jsonData: JSON.stringify(delArr),

                success: function (response, opts) {
                    console.log('Deleted exps');
                },
                failure: function (response, opts) {
                    console.log('Failed deleting exps');
                }
            });
        }
    },
});


