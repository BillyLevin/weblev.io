import findPosts from './_posts.js';

export async function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json',
	});

	const posts = await findPosts();
	const contents = JSON.stringify(
		posts.map((post) => {
			return {
				title: post.title,
				slug: post.slug,
				published: post.published,
				desc: post.desc,
			};
		})
	);

	res.end(contents);
}
