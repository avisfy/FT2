package finalTask2.services;

import finalTask2.model.Person;

import java.util.List;

public interface PersonService {
    List<Person> allPerson();
    int add(Person person);
    void delete(Person person);
    void edit(Person person);
    Person getById(int id);
}
