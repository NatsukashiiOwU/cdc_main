package News;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.hibernate.dialect.PostgreSQL9Dialect;

@Configuration
class LoadDatabase {

	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

	@Bean
	CommandLineRunner initDatabase(NewsRepository repository) {

		return args -> {
			log.info("Preloading " + repository.save(new News("clc1",Long.parseLong("300"), "approved", "9.11.2021","news1","content1")));

			log.info("Preloading " + repository.save(new News("clc2",Long.parseLong("500"), "pending", "10.11.2021","news2","content2")));
		};
	}
}
