package idv.jimlin.examhall.service;

import idv.jimlin.examhall.model.ExamHall;
import idv.jimlin.examhall.model.Question;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.ArrayList;

/**
 * Created by Jim-Lin on 2018/3/23.
 */
@Service
public class ExamHallService {

    private static Logger logger = LoggerFactory.getLogger(ExamHallService.class);

    private WebClient client = WebClient.create("http://localhost:8081");

    public Flux<ExamHall> findExamHalls() {

        return Flux.just(
                new ExamHall("3", "N3", 20, 30),
                new ExamHall("1", "N1", 20, 10),
                new ExamHall("2", "N2", 20, 20));
    }

//    public List<ExamHall> findAllList() {
//
//        return new ArrayList<ExamHall>(){
//            {
//                add(new ExamHall("3", "N3", 20, 30));
//                add(new ExamHall("1", "N1", 20, 10));
//                add(new ExamHall("2", "N2", 20, 20));
//            }
//        };
//    }

    public Flux<Question> findQuestionsByExamHallId(String id) {
        Question q1 = new Question(0, "保險契約簽訂後，契約雙方應遵守規範下列何者正確？", (short) 0);
        q1.setItems(new ArrayList<Question.Item>() {
            {
                add(q1.new Item(0, "遵守簽訂條件和條款"));
                add(q1.new Item(1, "切實履行各自的義務和責任"));
                add(q1.new Item(2, "明確被保險人利益受到法律保護"));
                add(q1.new Item(3, "以上皆是"));
            }
        });

        Question q2 = new Question(1, "無行為能力或限制行為能力之人申請登錄保險業務員下列處理何者正確？", (short) 0);
        q2.setItems(new ArrayList<Question.Item>() {
            {
                add(q2.new Item(0, "可予登錄"));
                add(q2.new Item(1, "不予登錄"));
                add(q2.new Item(2, "經特准可予登錄"));
                add(q2.new Item(3, "可自由決定登錄"));
            }
        });

        return Flux.interval(Duration.ofSeconds(1)).zipWith(Flux.just(q1, q2), (i, q) -> q);
    }
}
