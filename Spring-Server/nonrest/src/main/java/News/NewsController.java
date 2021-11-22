package News;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class NewsController {

	private final NewsRepository repository;

	NewsController(NewsRepository repository) {
		this.repository = repository;
	}


	// Aggregate root
	// tag::get-aggregate-root[]
	@GetMapping("/news")
	List<News> all() {
		return repository.findAll();
	}
	// end::get-aggregate-root[]

	@PostMapping("/news")
	News newNews(@RequestBody News newNews) {
		return repository.save(newNews);
	}

	// Single item
	
	@GetMapping("/news/{id}")
	News one(@PathVariable Long id) {
		
		return repository.findById(id)
			.orElseThrow(() -> new NewsNotFoundException(id));
	}

	@PutMapping("/news/{id}")
	News replaceNews(@RequestBody News newNews, @PathVariable Long id) {
		
		return repository.findById(id)
			.map(news -> {
				news.setClc_rel(newNews.getClc_rel());
				news.setUser_count(newNews.getUser_count());
				news.setState(newNews.getState());
				news.setDate(newNews.getDate());
				news.setTitle(newNews.getTitle());
				news.setContent(newNews.getContent());
				return repository.save(news);
			})
			.orElseGet(() -> {
				newNews.setId(id);
				return repository.save(newNews);
			});
	}

	@DeleteMapping("/news/{id}")
	void deleteNews(@PathVariable Long id) {
		repository.deleteById(id);
	}
}
