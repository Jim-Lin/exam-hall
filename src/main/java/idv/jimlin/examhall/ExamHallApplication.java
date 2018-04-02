package idv.jimlin.examhall;

import idv.jimlin.examhall.handler.ExamHallApiHandler;
import idv.jimlin.examhall.handler.ExamHallHandler;
import idv.jimlin.examhall.handler.ExamHandler;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.util.pattern.PathPatternParser;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.nest;
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

	@Bean
	public RouterFunction<ServerResponse> apiRoutes(ExamHallApiHandler examHallApiHandler) {

		return nest(path("/api/examHalls"),
				route(GET("/"), examHallApiHandler::listExamHalls)
						.andNest(path("/{id}"),
								route(GET("/questionStream"), examHallApiHandler::listQuestions)));
	}

	@Bean
	CorsWebFilter corsFilter() {
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.addAllowedOrigin("http://localhost:8080");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource(new PathPatternParser());
		source.registerCorsConfiguration("/api/**", config);

		return new CorsWebFilter(source);
	}
}
