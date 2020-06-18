package finalTask2.controller;


import finalTask2.model.Tech;
import finalTask2.services.TechService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/tech")
public class TechController {
    @Autowired
    private TechService techService;


    @PostMapping(value = "/save")
    public ResponseEntity saveTech(@RequestBody Tech tech) {
        techService.add(tech);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping(value = "/load")
    public List<Tech> loadTech() {
        return techService.getAll();
    }


    @PostMapping(value = "/delete")
    public ResponseEntity deleteTech(@RequestBody List<Integer> deleteIds) {
        Tech tech;
        for (Integer id : deleteIds) {
            tech = (Tech) techService.getById(id);
            techService.delete(tech);
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @PostMapping(value = "/edit")
    public ResponseEntity editExp(@RequestBody Tech techEdit) {
        techService.edit(techEdit);
        return new ResponseEntity(HttpStatus.OK);
    }
}
