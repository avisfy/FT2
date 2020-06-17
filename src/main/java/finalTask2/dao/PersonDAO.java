package finalTask2.dao;

import finalTask2.model.Person;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Transactional
@Repository
public class PersonDAO {

    private static final AtomicInteger AUTO_ID = new AtomicInteger(0);

    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<Person> getAll() {
        Session session = sessionFactory.getCurrentSession();
        return (List<Person>) session.createQuery("from Person").list();
    }


    public void add(Person person) {
        Session session = sessionFactory.getCurrentSession();
        session.persist(person);
    }


    public void delete(Person person) {
        Session session = sessionFactory.getCurrentSession();
        session.delete(person);
    }


    public void edit(Person person) {
        Session session = sessionFactory.getCurrentSession();
        session.update(person);
    }

    public Person getById(int id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Person.class, id);
    }
}
