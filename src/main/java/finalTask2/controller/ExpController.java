package finalTask2.controller;

import finalTask2.model.City;
import finalTask2.model.Exp;
import finalTask2.services.CityService;
import finalTask2.services.ExpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class ExpController {
    @Autowired
    private ExpService expService;


    @PostMapping(value = "/exp/save")
    public ResponseEntity<Integer> saveExp(@RequestBody Exp exp) {
        Integer newId =  expService.add(exp);
        return new ResponseEntity<>(newId, HttpStatus.OK);
    }

    @GetMapping(value = "/exp/load")
    @ResponseBody
    public List<Exp> loadExp() {
        return expService.getAll();
    }


    @PostMapping(value = "/exp/delete")
    public ResponseEntity deleteExp(@RequestBody List <Integer> deleteIds) {
        Exp exp;
        for(Integer id: deleteIds) {
            exp = (Exp) expService.getById(id);
            expService.delete(exp);
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @PostMapping(value = "/exp/edit")
    public ResponseEntity editExp(@RequestBody Exp expEdit) {
        expService.edit(expEdit);
        return new ResponseEntity(HttpStatus.OK);
    }
}
