package finalTask2.dao;

import finalTask2.model.Person;

import java.util.List;

public interface PersonDAO {
    List<Person> allPerson();
    int add(Person person);
    void delete(Person person);
    void edit(Person person);
    Person getById(int id);
}
