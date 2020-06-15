Ext.define('FinalTask2.view.main.techs.TechsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.techs',

    afterGridReady: function () {
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:8080/tech/load',
            method: 'GET',
            scope: me,

            success: function (response, opts) {
                console.log('Load tech!');
                var tech = Ext.decode(response.responseText);
                var store = this.getViewModel().get('techs');;

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
                console.log('Failed loading tech');
            }
        })
    },


    onAddClicked: function () {
        var vm = this.getViewModel();
        var expAdd = Ext.create('FinalTask2.model.Tech', {
            techName: vm.get('techField'),
            needDelete: false
        });

        this.saveTech(expAdd);
        var s = this.getViewModel().get('techs');;
        s.add(expAdd);

        vm.set('techField', null);
    },


    saveTech: function (t) {
        var tech = {
            techName: t.get('techName'),
        };
        Ext.Ajax.request({
            url: 'http://localhost:8080/tech/save',
            method: 'POST',
            jsonData: JSON.stringify(tech),

            success: function (response, opts) {
                console.log('Tech saved');
                var id = Ext.decode(response.responseText);
                t.set('id', id);
            },
            failure: function (response, opts) {
                console.log('Failed saving tech');
            }
        })
    },

    onRemoveClicked: function () {
        var delArr = new Array();
        var s = this.getViewModel().get('techs');;
        s.each(function (record) {
            if (record.get('needDelete')) {
                delArr.push(record.get('id'))
                s.remove(record);
            }
        });

        if (delArr.length > 0) {
            Ext.Ajax.request({
                url: 'http://localhost:8080/tech/delete',
                method: 'POST',
                jsonData: JSON.stringify(delArr),

                success: function (response, opts) {
                    console.log('Deleted tech');
                },
                failure: function (response, opts) {
                    console.log('Failed deleting tech');
                }
            });
        }
    },
});


