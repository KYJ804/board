
// 목록창

import React from 'react';
import './Board.css';
import { useNavigate } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa'; // 따봉 아이콘

const BoardList = ({ posts, likePost, deletePost, setEditingPost }) => {
    const navigate = useNavigate();

    // 글쓰기 버튼 클릭 시
    const handleWrite = () => {
        setEditingPost(null); // 수정 상태 초기화
        navigate('/write'); // 글쓰기 페이지로 이동
    };

    // 수정 버튼 클릭 시
    const handleEdit = (post) => {
        setEditingPost(post); // 수정할 게시글 설정
        navigate('/write'); // 글쓰기 페이지로 이동
    };

    return (
        <div className="board-container">
            <h1>게시판</h1>
            <button className="write-button" onClick={handleWrite}>
                글쓰기
            </button>
            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.id} className="post-item">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <div className="post-actions">
                            {/* 추천 버튼: 따봉 모양 추가 */}
                            <button className="like-button" onClick={() => likePost(post.id)}>
                                <FaThumbsUp /> {post.likes}
                            </button>
                            <button className="edit-button" onClick={() => handleEdit(post)}>
                                수정
                            </button>
                            <button className="delete-button" onClick={() => deletePost(post.id)}>
                                삭제
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoardList;
