package finalTask2.model;

import javax.persistence.*;

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

