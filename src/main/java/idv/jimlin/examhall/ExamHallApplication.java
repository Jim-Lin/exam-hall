package idv.jimlin.examhall;

import idv.jimlin.examhall.handler.ExamHallHandler;
import idv.jimlin.examhall.handler.ExamHandler;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@SpringBootApplication
public class ExamHallApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamHallApplication.class, args);
	}

	@Bean
	public RouterFunction<ServerResponse> routes(ExamHallHandler examHallHandler, ExamHandler examHandler) {

		return route(GET("/"), examHallHandler::listExamHalls)
				.andNest(path("/examHall/{id}"),
						route(POST("/"), examHandler::hold)
								.andRoute(GET("/questionStream"), examHandler::listQuestions));
	}
}
