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


@RestController
@RequestMapping(value = "/city")
public class CityController {
    @Autowired
    private CityService cityService;


    @PostMapping(value = "/save")
    public ResponseEntity saveCity(@RequestBody City city) {
        cityService.add(city);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping(value = "/load")
    public List<City> loadCity() {
        return cityService.getAll();
    }


    @PostMapping(value = "/delete")
    public ResponseEntity deleteCity(@RequestBody List<Integer> deleteIds) {
        City city;
        for (Integer id : deleteIds) {
            city = (City) cityService.getById(id);
            cityService.delete(city);
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @PostMapping(value = "/edit")
    public ResponseEntity editCity(@RequestBody City editCity) {
        cityService.edit(editCity);
        return new ResponseEntity(HttpStatus.OK);
    }
}
