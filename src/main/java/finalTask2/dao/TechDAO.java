package finalTask2.dao;


import finalTask2.model.Tech;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Transactional
@Repository
public class TechDAO {

    private static final AtomicInteger AUTO_ID = new AtomicInteger(0);

    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<Tech> getAll() {
        Session session = sessionFactory.getCurrentSession();
        return (List<Tech>) session.createQuery("from Tech ").list();
    }


    public void add(Tech tech) {
        Session session = sessionFactory.getCurrentSession();
        session.persist(tech);
    }


    public void delete(Tech tech) {
        Session session = sessionFactory.getCurrentSession();
        session.delete(tech);
    }


    public void edit(Tech tech) {
        Session session = sessionFactory.getCurrentSession();
        session.update(tech);
    }

    public Tech getById(int id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Tech.class, id);
    }
}
