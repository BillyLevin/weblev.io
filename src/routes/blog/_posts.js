import fs from 'fs';

function findPosts() {
	const posts = fs.readdirSync('src/routes/blog');

	return [];
}

const posts = findPosts();

export default posts;
