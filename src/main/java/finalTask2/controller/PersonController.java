package finalTask2.controller;

import finalTask2.model.Person;
import finalTask2.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class PersonController {
    @Autowired
    private PersonService personService;


    @GetMapping(value = "/")
    @ResponseBody
    public String r() {
        String str = "started";
        return str;
    }

    @RequestMapping(value = "/person/save", method = RequestMethod.POST)
    public ResponseEntity<Integer> savePerson(@RequestBody Person pers) {
        Integer newId =  personService.add(pers);
        System.out.println(pers);
        return new ResponseEntity<>(newId, HttpStatus.OK);
    }

    @RequestMapping(value = "/person/load", method = RequestMethod.GET)
    @ResponseBody
    public List<Person> loadPerson() {
        return personService.getAll();
    }


    @RequestMapping(value = "/person/delete", method = RequestMethod.POST)
    public ResponseEntity deletePerson(@RequestBody List <Integer> deleteIds) {
        Person person;
        for(Integer id: deleteIds) {
            person = (Person) personService.getById(id);
            personService.delete(person);
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(value = "/person/edit", method = RequestMethod.POST)
    public ResponseEntity editPerson(@RequestBody Person editPerson) {
        personService.edit(editPerson);
        return new ResponseEntity(HttpStatus.OK);
    }
}
