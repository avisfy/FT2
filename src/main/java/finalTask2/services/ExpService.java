package finalTask2.services;


import finalTask2.dao.ExpDAO;
import finalTask2.model.City;
import finalTask2.model.Exp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpService {
    private ExpDAO expDAO;

    @Autowired
    public void setExpDAO(ExpDAO expDAO) {
        this.expDAO = expDAO;
    }

    public List<Exp> getAll() {
        return expDAO.getAll();
    }

    public int add(Exp exp) {
        return expDAO.add(exp);
    }

    public void delete(Exp exp) {
        expDAO.delete(exp);
    }

    public void edit(Exp exp) {
        expDAO.edit(exp);
    }

    public Exp getById(int id) {
        return expDAO.getById(id);
    }
}