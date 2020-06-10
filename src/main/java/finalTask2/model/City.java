package finalTask2.model;

import javax.persistence.*;

@Entity
@Table(name = "cities", schema = "public")
public class City {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "region")
    private String region;

    @Column(name = "city")
    private String city;

    public City() {
        super();
    }

    public City(String region, String city) {
        this.region = region;
        this.city = city;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
