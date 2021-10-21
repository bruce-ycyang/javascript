//title
//body
//author
//views
//comments
//  (author, body)
//isLive

//simple 
let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'a', body: 'b'},
    ],
    isLive: true
};

console.log(post)

//constructor
function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let blog_post = new BlogPost(
    'Hello World', 
    'This is nice day', 
    'Bruce', 
);
console.log(blog_post)