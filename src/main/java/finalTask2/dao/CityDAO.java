package finalTask2.dao;

import finalTask2.model.City;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Transactional
@Repository
public class CityDAO {

    private static final AtomicInteger AUTO_ID = new AtomicInteger(0);

    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<City> getAll() {
        Session session = sessionFactory.getCurrentSession();
        return (List<City>) session.createQuery("from City").list();
    }


    public int add(City city) {
        Session session = sessionFactory.getCurrentSession();
        session.persist(city);
        return city.getId();

    }


    public void delete(City city) {
        Session session = sessionFactory.getCurrentSession();
        session.delete(city);
    }


    public void edit(City city) {
        Session session = sessionFactory.getCurrentSession();
        session.update(city);
    }

    public City getById(int id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(City.class, id);
    }
}
