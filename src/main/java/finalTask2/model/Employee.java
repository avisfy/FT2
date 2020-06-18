package finalTask2.model;

import javax.persistence.*;

@Entity
@Table(name = "employees", schema = "public")
public class Employee {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "person_id", referencedColumnName = "id")
    private Person person;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "city_id", referencedColumnName = "id")
    private City city;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tech_id", referencedColumnName = "id")
    private Tech tech;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "exp_id", referencedColumnName = "id")
    private Exp exp;

    public Employee() {
        super();
    }

    public Employee(Person person, City city, Tech tech, Exp exp) {
        super();
        setPerson(person);
        setCity(city);
        setTech(tech);
        setExp(exp);
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Tech getTech() {
        return tech;
    }

    public void setTech(Tech tech) {
        this.tech = tech;
    }

    public Exp getExp() {
        return exp;
    }

    public void setExp(Exp exp) {
        this.exp = exp;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


}
