package finalTask2.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "person", schema = "public")
public class Person {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "surname_name")
    private String surnameName;

    @Column(name = "email")
    private String email;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Column(name = "birth")
    private Date birth;

    @JsonIgnore
    @OneToMany(mappedBy = "person", fetch = FetchType.EAGER,  cascade = CascadeType.ALL)
    private List<Employee> emps;

    public List<Employee> getEmps() {
        return emps;
    }

    public void setEmps(List<Employee> emps) {
        this.emps = emps;
    }

    public Person() {
        super();
    }

    public Person(String surnameName, String email, String birth) {
        this.surnameName = surnameName;
        this.email = email;
        this.birth = Date.valueOf(birth);
    }

    public Person(int id, String surnameName, String email, String birth) {
        this.id = id;
        this.surnameName = surnameName;
        this.email = email;
        this.birth = Date.valueOf(birth);
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setSurnameName(String surnameName) {
        this.surnameName = surnameName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setBirth(String birth) {
        this.birth = Date.valueOf(birth);
    }


    public int getId() {
        return id;
    }

    public String getSurnameName() {
        return surnameName;
    }

    public String getEmail() {
        return email;
    }

    public Date getBirth() {
        return birth;
    }


    @Override
    public String toString() {
        return id + " " + surnameName + " " + email + " " + birth;
    }


}