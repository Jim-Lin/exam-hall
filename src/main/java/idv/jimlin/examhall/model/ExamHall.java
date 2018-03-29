package idv.jimlin.examhall.model;

/**
 * Created by Jim-Lin on 2018/3/23.
 */
public class ExamHall {

    private String id;
    private String name;
    private int number;
    private int time;

    public ExamHall(String id, String name, int number, int time) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.time = time;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumber() {
        return this.number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getTime() {
        return this.time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "ExamHall{" +
                "id=" + this.id +
                ", name=" + this.name +
                ", number=" + this.number +
                ", time=" + this.time +
                "}";
    }
}
