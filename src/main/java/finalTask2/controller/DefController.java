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
public class DefController {

    @GetMapping(value = "/")
    public String r() {
        String str = "started";
        return str;
    }
}
