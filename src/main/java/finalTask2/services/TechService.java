package finalTask2.services;

import finalTask2.dao.TechDAO;
import finalTask2.model.Tech;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechService {
    private TechDAO techDAO;

    @Autowired
    public void setTechDAO(TechDAO  techDAO) {
        this.techDAO = techDAO;
    }

    public List<Tech> getAll() {
        return techDAO.getAll();
    }

    public void add(Tech tech) {
        techDAO.add(tech);
    }

    public void delete(Tech tech) {
        techDAO.delete(tech);
    }

    public void edit(Tech tech) {
        techDAO.edit(tech);
    }

    public Tech getById(int id) {
        return techDAO.getById(id);
    }
}
