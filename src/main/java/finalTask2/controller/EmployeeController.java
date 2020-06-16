package finalTask2.controller;

import finalTask2.model.Employee;
import finalTask2.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService empService;

    @PostMapping(value = "/save")
    public ResponseEntity<Employee> saveEmp(@RequestBody List<Integer> empIds) {
        int newId = empService.add(empIds.get(0), empIds.get(1), empIds.get(2), empIds.get(3));
        Employee newEmp = empService.getById(newId);
        return new ResponseEntity<>(newEmp, HttpStatus.OK);
    }

    @GetMapping(value = "/load")
    public List<Employee> loadEmp() {
        return empService.getAll();
    }


    @PostMapping(value = "/delete")
    public ResponseEntity deleteEmps(@RequestBody List<Integer> deleteIds) {
        Employee emp;
        for (Integer id : deleteIds) {
            emp = empService.getById(id);
            empService.delete(emp);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

}
