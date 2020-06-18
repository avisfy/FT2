package finalTask2.controller;

import finalTask2.model.Person;
import finalTask2.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/person")
public class PersonController {
    @Autowired
    private PersonService personService;

    @GetMapping(value = "/")
    public String r() {
        String str = "started";
        return str;
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity savePerson(@RequestBody Person pers) {
        personService.add(pers);
        System.out.println(pers);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/load", method = RequestMethod.GET)
    public List<Person> loadPerson() {
        return personService.getAll();
    }


    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity deletePerson(@RequestBody List<Integer> deleteIds) {
        Person person;
        for (Integer id : deleteIds) {
            person = (Person) personService.getById(id);
            personService.delete(person);
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public ResponseEntity editPerson(@RequestBody Person editPerson) {
        personService.edit(editPerson);
        return new ResponseEntity(HttpStatus.OK);
    }
}
