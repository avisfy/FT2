Ext.define('FinalTask2.view.main.employees.EmployeesSet', {
    extend: 'Ext.form.FieldSet',

    xtype: 'employees-set',
    title: 'Add experience',

    layout: 'anchor',
    defaults: { anchor: '98%'},

    items: [{
        xtype: 'employees-grid'
    }]
})