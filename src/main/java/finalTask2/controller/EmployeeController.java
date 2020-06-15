package finalTask2.controller;

import finalTask2.model.Employee;
import finalTask2.services.EmployeeService;
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
public class EmployeeController {
    @Autowired
    private EmployeeService empService;

    @PostMapping(value = "/employee/save")
    public ResponseEntity<Employee> saveEmp(@RequestBody List<Integer> empIds) {
        int newId = empService.add(empIds.get(0), empIds.get(1), empIds.get(2), empIds.get(3));
        Employee newEmp = empService.getById(newId);
        return new ResponseEntity<>(newEmp, HttpStatus.OK);
    }

    @GetMapping(value = "/employee/load")
    @ResponseBody
    public List<Employee> loadEmp() {
        return empService.getAll();
    }


    @PostMapping(value = "/employee/delete")
    public ResponseEntity deleteEmps(@RequestBody List<Integer> deleteIds) {
        Employee emp;
        for (Integer id : deleteIds) {
            emp = empService.getById(id);
            empService.delete(emp);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

}
