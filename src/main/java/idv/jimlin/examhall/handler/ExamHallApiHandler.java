package idv.jimlin.examhall.handler;

import idv.jimlin.examhall.model.ExamHall;
import idv.jimlin.examhall.model.Question;
import idv.jimlin.examhall.service.ExamHallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Created by Jim-Lin on 2018/3/26.
 */
@Component
public class ExamHallApiHandler {

    @Autowired
    private ExamHallService examHallService;

    public Mono<ServerResponse> listExamHalls(ServerRequest request) {
        Flux<ExamHall> examHallStream = this.examHallService.findExamHalls();

        return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(examHallStream, ExamHall.class);
    }

    public Mono<ServerResponse> listQuestions(ServerRequest request) {
        String id = request.pathVariable("id");

        return ServerResponse.ok().contentType(MediaType.TEXT_EVENT_STREAM)
                .body(this.examHallService.findQuestionsByExamHallId(id), Question.class);
    }
}
