package finalTask2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import finalTask2.dao.PersonDAO;
import finalTask2.model.Person;

import java.util.List;

@Service
public class PersonService {
    private PersonDAO personDAO;

    @Autowired
    public void setPersonDAO(PersonDAO personDAO) {
        this.personDAO = personDAO;
    }

    public List<Person> getAll() {
        return personDAO.getAll();
    }

    public int add(Person person) {
        return personDAO.add(person);
    }

    public void delete(Person person) {
        personDAO.delete(person);
    }

    public void edit(Person person) {
        personDAO.edit(person);
    }

    public Person getById(int id) {
        return personDAO.getById(id);
    }
}
