Ext.define('FinalTask2.view.main.techs.TechsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.techs',

    loadTech: function () {
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:8080/tech/load',
            method: 'GET',
            scope: me,

            success: function (response, opts) {
                console.log('Load tech!');
                var tech = Ext.decode(response.responseText);
                var store = this.getViewModel().get('techs');
                store.removeAll();

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
        var tech = {
            techName: vm.get('techField')
        };
        this.saveTech(tech, this);

        vm.set('techField', null);
    },


    saveTech: function (tech, me) {
        Ext.Ajax.request({
            url: 'http://localhost:8080/tech/save',
            method: 'POST',
            jsonData: JSON.stringify(tech),
            scope: me,

            success: function (response, opts) {
                console.log('Tech saved');
                this.loadTech();
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
            }
        });

        if (delArr.length > 0) {
            var me = this;
            Ext.Ajax.request({
                url: 'http://localhost:8080/tech/delete',
                method: 'POST',
                jsonData: JSON.stringify(delArr),
                scope: me,

                success: function (response, opts) {
                    console.log('Deleted tech');
                    this.loadTech();
                },
                failure: function (response, opts) {
                    console.log('Failed deleting tech');
                }
            });
        }
    },
});


