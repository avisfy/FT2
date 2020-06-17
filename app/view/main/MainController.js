Ext.define('FinalTask2.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    mixins: {
        personController: 'FinalTask2.view.main.person.PersonController',
        citiesController: 'FinalTask2.view.main.cities.CitiesController',
        techsController: 'FinalTask2.view.main.techs.TechsController',
        expsController: 'FinalTask2.view.main.exps.ExpsController',
        employeesController: 'FinalTask2.view.main.employees.EmployeesController'
    },

    alias: 'controller.main',

    loadTabs: function () {
        this.loadPerson();
        this.loadCity();
        this.loadExp();
        this.loadTech();
        this.loadEmployee();
    }
});
