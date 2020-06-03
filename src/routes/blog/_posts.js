import { promises as fs } from 'fs';
import { transform } from 'mdsvex';

async function findPosts() {
	const files = await fs.readdir('src/routes/blog');
	const posts = [];

	for (const fileName of files) {
		const stats = await fs.lstat(`src/routes/blog/${fileName}`);
		const isDirectory = stats.isDirectory();
		if (isDirectory) {
			posts.push(fileName);
		}
	}

	const formatted = [];

	for (const post of posts) {
		const contents = await fs.readFile(
			`src/routes/blog/${post}/index.svx`,
			'utf-8'
		);

		const parser = transform({ layout: false });

		const { data } = await parser.process({ contents, filename: post });

		const { fm } = data;

		formatted.push({
			slug: post,
			title: fm.title,
		});
	}

	return formatted;
}

export default findPosts;
