package finalTask2.controller;

import finalTask2.model.City;
import finalTask2.model.Exp;
import finalTask2.services.CityService;
import finalTask2.services.ExpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/exp")
public class ExpController {
    @Autowired
    private ExpService expService;


    @PostMapping(value = "/save")
    public ResponseEntity saveExp(@RequestBody Exp exp) {
        expService.add(exp);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping(value = "/load")
    public List<Exp> loadExp() {
        return expService.getAll();
    }


    @PostMapping(value = "/delete")
    public ResponseEntity deleteExp(@RequestBody List <Integer> deleteIds) {
        Exp exp;
        for(Integer id: deleteIds) {
            exp = (Exp) expService.getById(id);
            expService.delete(exp);
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @PostMapping(value = "/edit")
    public ResponseEntity editExp(@RequestBody Exp expEdit) {
        expService.edit(expEdit);
        return new ResponseEntity(HttpStatus.OK);
    }
}
