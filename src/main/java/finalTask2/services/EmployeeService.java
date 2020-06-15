package finalTask2.services;


import finalTask2.dao.*;
import finalTask2.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    private EmployeeDAO empDAO;
    private PersonDAO personDAO;
    private CityDAO cityDAO;
    private TechDAO techDAO;
    private ExpDAO expDAO;

    @Autowired
    public void setEmpDAO(EmployeeDAO empDAO) {
        this.empDAO = empDAO;
    }

    @Autowired
    public void setPersonDAO(PersonDAO personDAO) {
        this.personDAO = personDAO;
    }

    @Autowired
    public void setCityDAO(CityDAO cityDAO) {
        this.cityDAO = cityDAO;
    }

    @Autowired
    public void setTechDAO(TechDAO techDAO) {
        this.techDAO = techDAO;
    }

    @Autowired
    public void setExpDAO(ExpDAO expDAO) {
        this.expDAO = expDAO;
    }

    @Autowired
    public void setCityDAO(EmployeeDAO empDAO) {
        this.empDAO = empDAO;
    }

    public List<Employee> getAll() {
        return empDAO.getAll();
    }

    public int add(Employee emp) {
        return empDAO.add(emp);
    }

    public int add(int personId, int cityId, int techId, int expId) {
        Person pers = personDAO.getById(personId);
        City city = cityDAO.getById(cityId);
        Tech tech = techDAO.getById(techId);
        Exp exp = expDAO.getById(expId);
        Employee emp = new Employee(pers, city, tech, exp);
        return empDAO.add(emp);
    }

    public void delete(Employee emp) {
        empDAO.delete(emp);
    }

    public void edit(Employee emp) {
        empDAO.edit(emp);
    }

    public Employee getById(int id) {
        return empDAO.getById(id);
    }
}

