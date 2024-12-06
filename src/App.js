import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardList from './board/BoardList';
import WritePost from './board/WritePost';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: '첫 번째 글', content: '첫 번째 글의 내용입니다.', likes: 0 },
        { id: 2, title: '두 번째 글', content: '두 번째 글의 내용입니다.', likes: 0 },
    ]);

    const [editingPost, setEditingPost] = useState(null);

    // 게시글 추가
    const addPost = (newPost) => {
        setPosts([...posts, { ...newPost, id: posts.length + 1, likes: 0 }]);
    };

    // 게시글 수정
    const updatePost = (updatedPost) => {
        setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
    };

    // 게시글 삭제
    const deletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    // 게시글 추천
    const likePost = (id) => {
        setPosts(posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post)));
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <BoardList
                            posts={posts}
                            likePost={likePost}
                            deletePost={deletePost}
                            setEditingPost={setEditingPost}
                        />
                    }
                />
                <Route
                    path="/write"
                    element={
                        <WritePost
                            addPost={addPost}
                            updatePost={updatePost}
                            editingPost={editingPost}
                            setEditingPost={setEditingPost} // 추가
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
