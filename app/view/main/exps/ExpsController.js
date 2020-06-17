Ext.define('FinalTask2.view.main.exps.ExpsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.exps',

    loadExp: function () {
        var me = this;

        Ext.Ajax.request({
            url: 'http://localhost:8080/exp/load',
            method: 'GET',
            scope: me,

            success: function (response, opts) {
                console.log('Load exp!');
                var exp = Ext.decode(response.responseText);
                var store = this.getViewModel().get('exps');
                store.removeAll();

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
        var exp = {
            period: vm.get('periodField'),
            unit: vm.get('unitField'),
        };
        this.saveExp(exp, this);

        vm.set('periodField', null);
        vm.set('unitField', null);
    },


    saveExp: function (exp, me) {
        Ext.Ajax.request({
            url: 'http://localhost:8080/exp/save',
            method: 'POST',
            jsonData: JSON.stringify(exp),
            scope: me,

            success: function (response, opts) {
                console.log('Exp saved');
                this.loadExp();
            },
            failure: function (response, opts) {
                console.log('Failed saving exp');
            }
        })
    },

    onRemoveClicked: function () {
        var delArr = new Array();
        var s = this.getViewModel().get('exps');
        s.each(function (record) {
            if (record.get('needDelete')) {
                delArr.push(record.get('id'))
            }
        });

        if (delArr.length > 0) {
            var me = this;
            Ext.Ajax.request({
                url: 'http://localhost:8080/exp/delete',
                method: 'POST',
                jsonData: JSON.stringify(delArr),
                scope: me,

                success: function (response, opts) {
                    console.log('Deleted exps');
                    this.loadExp();
                },
                failure: function (response, opts) {
                    console.log('Failed deleting exps');
                }
            });
        }
    },
});


