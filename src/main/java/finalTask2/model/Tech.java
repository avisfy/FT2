package finalTask2.model;

import javax.persistence.*;

@Entity
@Table(name = "techs", schema = "public")
public class Tech {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "tech_name")
    private String techName;


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
