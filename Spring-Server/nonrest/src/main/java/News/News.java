package News;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
class News {

	private @Id @GeneratedValue Long id;
	private String clc_rel;
	private Long user_count;
	private String state;
	private String date;
	private String title;
	private String content;

	News() {}

	News(String clc_rel, Long user_count, String state, String date,	String title, String content) {
		this.clc_rel = clc_rel;
		this.user_count = user_count;
		this.state = state;
		this.date = date;
		this.title = title;
		this.content = content;
	}

	public Long getId() {
		return this.id;
	}

	public String getClc_rel() {
		return this.clc_rel;
	}

	public Long getUser_count() {
		return this.user_count;
	}

	public String getState() {
		return this.state;
	}

	public String getDate() {
		return this.date;
	}

	public String getTitle() {
		return this.title;
	}

	public String getContent() {
		return this.content;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setClc_rel(String clc_rel) { this.clc_rel = clc_rel; }

	public void setUser_count(Long user_count) { this.user_count = user_count; }

	public void setState(String state) { this.state = state; }

	public void setDate(String date) {
		this.date = date;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public boolean equals(Object o) {

		if (this == o)
			return true;
		if (!(o instanceof News))
			return false;
		News news = (News) o;
		return Objects.equals(this.id, news.id) && Objects.equals(this.title, news.title);
	}

	@Override
	public int hashCode() {
		return Objects.hash(this.id, this.title, this.content);
	}

	@Override
	public String toString() {
		return "{News:" + "id=" + this.id + ", state='" + this.state + '\'' + ", date='" + this.date + '\'' + ", title='" + this.title + '\'' + ", content='" + this.content + '\'' + '}';
	}
}
