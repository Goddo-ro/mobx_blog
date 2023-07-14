import {makeAutoObservable} from "mobx";

class PostsStore {
    posts = [
        {id: 1, title: "test1", content: "test content1"},
        {id: 2, title: "test2", content: "test content2"},
        {id: 3, title: "test3", content: "test content3"},
    ]

    constructor() {
        makeAutoObservable(this);
    }

    addPost(post) {
        this.posts.push(post);
    }

    deletePost(id) {
        this.posts = this.posts.filter(post => post.id !== id);
    }

    updatePost(id, title, content) {
        const post = this.posts.find(post => post.id === id);
        post.title = title;
        post.content = content;
    }

    getPost(id) {
        return this.posts.find(post => post.id === id);
    }
}