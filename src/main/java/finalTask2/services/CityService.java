package finalTask2.services;

import finalTask2.dao.CityDAO;
import finalTask2.model.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import finalTask2.dao.PersonDAO;
import finalTask2.model.Person;

import java.util.List;

@Service
public class CityService {
    private CityDAO cityDAO;

    @Autowired
    public void setCityDAO(CityDAO cityDAO) {
        this.cityDAO = cityDAO;
    }

    public List<City> getAll() {
        return cityDAO.getAll();
    }

    public int add(City city) {
        return cityDAO.add(city);
    }

    public void delete(City city) {
        cityDAO.delete(city);
    }

    public void edit(City city) {
        cityDAO.edit(city);
    }

    public City getById(int id) {
        return cityDAO.getById(id);
    }
}
