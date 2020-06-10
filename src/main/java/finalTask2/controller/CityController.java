package finalTask2.controller;

import finalTask2.model.City;
import finalTask2.model.Person;
import finalTask2.services.CityService;
import finalTask2.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class CityController {
    @Autowired
    private CityService cityService;


    @PostMapping(value = "/city/save")
    public ResponseEntity<Integer> saveCity(@RequestBody City city) {
        Integer newId =  cityService.add(city);
        return new ResponseEntity<>(newId, HttpStatus.OK);
    }

    @GetMapping(value = "/city/load")
    @ResponseBody
    public List<City> loadCity() {
        return cityService.getAll();
    }


    @PostMapping(value = "/city/delete")
    public ResponseEntity deleteCity(@RequestBody List <Integer> deleteIds) {
        City city;
        for(Integer id: deleteIds) {
            city = (City) cityService.getById(id);
            cityService.delete(city);
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @PostMapping(value = "/city/edit")
    public ResponseEntity editCity(@RequestBody City editCity) {
        cityService.edit(editCity);
        return new ResponseEntity(HttpStatus.OK);
    }
}
