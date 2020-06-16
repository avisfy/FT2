package finalTask2.controller;

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
