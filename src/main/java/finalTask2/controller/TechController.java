package finalTask2.controller;


import finalTask2.model.Tech;
import finalTask2.services.TechService;
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
public class TechController {
    @Autowired
    private TechService techService;


    @PostMapping(value = "/tech/save")
    public ResponseEntity<Integer> saveTech(@RequestBody Tech tech) {
        Integer newId =  techService.add(tech);
        return new ResponseEntity<>(newId, HttpStatus.OK);
    }

    @GetMapping(value = "/tech/load")
    @ResponseBody
    public List<Tech> loadTech() {
        return techService.getAll();
    }


    @PostMapping(value = "/tech/delete")
    public ResponseEntity deleteTech(@RequestBody List <Integer> deleteIds) {
        Tech tech;
        for(Integer id: deleteIds) {
            tech = (Tech) techService.getById(id);
            techService.delete(tech);
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @PostMapping(value = "/tech/edit")
    public ResponseEntity editExp(@RequestBody Tech techEdit) {
        techService.edit(techEdit);
        return new ResponseEntity(HttpStatus.OK);
    }
}
