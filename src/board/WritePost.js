//글쓰기

import React, { useState, useEffect } from 'react';
import './Board.css';
import { useNavigate } from 'react-router-dom';

const WritePost = ({ addPost, updatePost, editingPost, setEditingPost }) => {
    const navigate = useNavigate();
    const [post, setPost] = useState({ title: '', content: '' });

    useEffect(() => {
        if (editingPost) {
            setPost(editingPost); // 수정 모드일 경우 기존 데이터 채우기
        } else {
            setPost({ title: '', content: '' }); // 새 글쓰기 모드 초기화
        }
    }, [editingPost]);

    const handleSubmit = () => {
        if (!post.title || !post.content) {
            alert('제목과 내용을 모두 입력하세요.');
            return;
        }

        if (editingPost) {
            updatePost(post); // 게시글 수정
        } else {
            addPost(post); // 새 게시글 추가
        }

        setEditingPost(null); // 수정 상태 초기화
        navigate('/'); // 목록 페이지로 이동
    };

    return (
        <div className="write-container">
            <h1>{editingPost ? '글 수정' : '글 작성'}</h1>
            <input
                type="text"
                placeholder="제목"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <textarea
                placeholder="내용"
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
            />
            <button className="confirm-button" onClick={handleSubmit}>
                확인
            </button>
            <button
                className="cancel-button"
                onClick={() => {
                    setEditingPost(null); // 수정 상태 초기화
                    navigate('/');
                }}
            >
                취소
            </button>
        </div>
    );
};

export default WritePost;
