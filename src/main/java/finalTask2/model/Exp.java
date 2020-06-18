package finalTask2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "exps", schema = "public")
public class Exp {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "period")
    private float period;

    @Column(name = "unit")
    private String unit;

    @JsonIgnore
    @OneToMany(mappedBy = "exp", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Employee> emps;

    public List<Employee> getEmps() {
        return emps;
    }

    public void setEmps(List<Employee> emps) {
        this.emps = emps;
    }


    public Exp() {
        super();
    }

    public Exp(float period, String unit) {
        this.period = period;
        this.unit = unit;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getPeriod() {
        return period;
    }

    public void setPeriod(float period) {
        this.period = period;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }
}

