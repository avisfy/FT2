package finalTask2.dao;

import finalTask2.model.City;
import finalTask2.model.Employee;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Transactional
@Repository
public class EmployeeDAO {

    private static final AtomicInteger AUTO_ID = new AtomicInteger(0);

    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<Employee> getAll() {
        Session session = sessionFactory.getCurrentSession();
        return (List<Employee>) session.createQuery("from Employee").list();
    }

    public int add(Employee emp) {
        Session session = sessionFactory.getCurrentSession();
        session.saveOrUpdate(emp);
        return emp.getId();

    }

    public void delete(Employee emp) {
        Session session = sessionFactory.getCurrentSession();
        session.delete(emp);
    }

    public void edit(Employee emp) {
        Session session = sessionFactory.getCurrentSession();
        session.update(emp);
    }

    public Employee getById(int id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Employee.class, id);
    }
}