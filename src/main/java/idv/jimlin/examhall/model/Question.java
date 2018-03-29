package idv.jimlin.examhall.model;

import java.util.List;

/**
 * Created by Jim-Lin on 2018/3/28.
 */
public class Question {

    private Integer id;
    private String name;
    private Short type;
    private List<Item> items;

    public Question(Integer id, String name, Short type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Short getType() {
        return this.type;
    }

    public void setType(Short type) {
        this.type = type;
    }

    public List<Item> getItems() {
        return this.items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Question{" +
                "id=" + this.id +
                ", name=" + this.name +
                ", type=" + this.type +
                ", items=" + this.items +
                "}";
    }

    public class Item {

        private Integer id;
        private String name;

        public Item(Integer id, String name) {
            this.id = id;
            this.name = name;
        }

        public Integer getId() {
            return this.id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getName() {
            return this.name;
        }

        public void setName(String name) {
            this.name = name;
        }

        @Override
        public String toString() {
            return "Item{" +
                    "id=" + this.id +
                    ", name=" + this.name +
                    "}";
        }
    }
}
