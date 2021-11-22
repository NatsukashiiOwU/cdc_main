package News;

import org.springframework.data.jpa.repository.JpaRepository;

interface NewsRepository extends JpaRepository<News, Long> {

}
