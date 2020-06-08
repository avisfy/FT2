package finalTask2.controller;

import finalTask2.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import finalTask2.services.PersonService;

import java.util.List;

@Controller
public class TaskController {
    private PersonService personService;

    @Autowired
    public void setPersonService(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping(value = "/")
    @ResponseBody
    public String r() {
        String str = "started";
        return str;
    }


    @RequestMapping(value = "/save_person", method = RequestMethod.POST)
    public ResponseEntity<Integer> saveUser(@RequestBody Person pers) {
        Integer newId = personService.add(pers);
        System.out.println(pers);
        return new ResponseEntity<>(newId, HttpStatus.OK);
    }

    @RequestMapping(value = "/load_person", method = RequestMethod.GET)
    @ResponseBody
    public List<Person> loadPerson() {
        return personService.allPerson();
    }


    @RequestMapping(value = "/delete_person", method = RequestMethod.POST)
    public ResponseEntity deletePerson(@RequestBody List <Integer> deleteIds) {
        Person person;
        for(Integer id: deleteIds) {
            person = personService.getById(id);
            personService.delete(person);
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(value = "/edit_person", method = RequestMethod.POST)
    public ResponseEntity editUser(@RequestBody Person editPerson) {
        personService.edit(editPerson);
        return new ResponseEntity(HttpStatus.OK);
    }
}
