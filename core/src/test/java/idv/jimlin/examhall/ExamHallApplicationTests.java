package idv.jimlin.examhall;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ExamHallApplicationTests {

	@Autowired
	private WebTestClient webClient;

	@Test
	public void contextLoads() {
	}

	@Test
	public void testExamHallsList() {
		this.webClient.get().uri("/")
				.exchange()
				.expectStatus().isOk();
	}
}
