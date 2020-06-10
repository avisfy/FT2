package finalTask2.dao;

import finalTask2.model.Exp;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Transactional
@Repository
public class ExpDAO {

    private static final AtomicInteger AUTO_ID = new AtomicInteger(0);

    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<Exp> getAll() {
        Session session = sessionFactory.getCurrentSession();
        return (List<Exp>) session.createQuery("from Exp").list();
    }


    public int add(Exp exp) {
        Session session = sessionFactory.getCurrentSession();
        session.persist(exp);
        return exp.getId();

    }


    public void delete(Exp exp) {
        Session session = sessionFactory.getCurrentSession();
        session.delete(exp);
    }


    public void edit(Exp exp) {
        Session session = sessionFactory.getCurrentSession();
        session.update(exp);
    }

    public Exp getById(int id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Exp.class, id);
    }
}
