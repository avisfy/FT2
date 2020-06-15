package finalTask2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "techs", schema = "public")
public class Tech {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "tech_name")
    private String techName;

    @JsonIgnore
    @OneToMany(mappedBy = "tech", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Employee> emps;

    public List<Employee> getEmps() {
        return emps;
    }

    public void setEmps(List<Employee> emps) {
        this.emps = emps;
    }

    public Tech() {
        super();
    }

    public Tech(String techName) {
        this.techName = techName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getTechName() {
        return techName;
    }

    public void setTechName(String techName) {
        this.techName = techName;
    }
}
