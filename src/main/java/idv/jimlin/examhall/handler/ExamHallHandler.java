package idv.jimlin.examhall.handler;

import idv.jimlin.examhall.model.ExamHall;
import idv.jimlin.examhall.service.ExamHallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Jim-Lin on 2018/3/26.
 */
@Component
public class ExamHallHandler {

    @Autowired
    private ExamHallService examHallService;

    public Mono<ServerResponse> listExamHalls(ServerRequest request) {
        final Flux<ExamHall> examHallStream = this.examHallService.findExamHalls();

        Map<String, Object> model = new HashMap<>();
        model.put("examHalls", examHallStream);

        return ServerResponse.ok().contentType(MediaType.TEXT_HTML).render("index", model);
    }
}
