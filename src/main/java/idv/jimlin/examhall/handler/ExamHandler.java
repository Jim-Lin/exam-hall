package idv.jimlin.examhall.handler;

import idv.jimlin.examhall.model.ExamHall;
import idv.jimlin.examhall.model.Question;
import idv.jimlin.examhall.service.ExamHallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyExtractors;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.thymeleaf.spring5.context.webflux.IReactiveSSEDataDriverContextVariable;
import org.thymeleaf.spring5.context.webflux.ReactiveDataDriverContextVariable;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Jim-Lin on 2018/3/26.
 */
@Component
public class ExamHandler {

    @Autowired
    private ExamHallService examHallService;

    public Mono<ServerResponse> hold(ServerRequest request) {
        String id = request.pathVariable("id");
        MultiValueMap<String, String> map = request.body(BodyExtractors.toFormData()).block();
        ExamHall examHall = new ExamHall(
                id,
                map.get("name").get(0),
                Integer.valueOf(map.get("number").get(0)),
                Integer.valueOf(map.get("time").get(0))
        );

        Map<String, Object> model = new HashMap<>();
        model.put("examHall", examHall);

        return ServerResponse.ok().contentType(MediaType.TEXT_HTML).render("exam", model);
    }

    public Mono<ServerResponse> listQuestions(ServerRequest request) {
        String id = request.pathVariable("id");

        return ServerResponse.ok().contentType(MediaType.TEXT_EVENT_STREAM)
                .body(this.examHallService.findQuestionsByExamHallId(id), Question.class);
    }
}
