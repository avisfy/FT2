package finalTask2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import finalTask2.dao.PersonDAO;
import finalTask2.model.Person;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService {
    private PersonDAO personDAO;

    @Autowired
    public void setPersonDAO(PersonDAO personDAO) {
        this.personDAO = personDAO;
    }

    @Override
    public List<Person> allPerson() {
        return personDAO.allPerson();
    }

    @Override
    public int add(Person person) {
        return personDAO.add(person);
    }

    @Override
    public void delete(Person person) {
        personDAO.delete(person);
    }

    @Override
    public void edit(Person person) {
        personDAO.edit(person);
    }

    @Override
    public Person getById(int id) {
        return personDAO.getById(id);
    }
}
