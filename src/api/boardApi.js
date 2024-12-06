import axios from 'axios';

// API 기본 설정
const api = axios.create({
    baseURL: 'http://localhost:8080/api', // API 서버 URL
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * 게시글 목록 조회
 * @returns {Promise}
 */
export const getPosts = () => api.get('/posts');

/**
 * 게시글 등록
 * @param {Object} postData - 게시글 데이터 { title, content }
 * @returns {Promise}
 */
export const createPost = (postData) => api.post('/posts', postData);

/**
 * 게시글 수정
 * @param {number} id - 게시글 ID
 * @param {Object} postData - 수정할 데이터 { title, content }
 * @returns {Promise}
 */
export const updatePost = (id, postData) => api.put(`/posts/${id}`, postData);

/**
 * 게시글 삭제
 * @param {number} id - 삭제할 게시글 ID
 * @returns {Promise}
 */
export const deletePost = (id) => api.delete(`/posts/${id}`);

/**
 * 게시글 추천
 * @param {number} id - 추천할 게시글 ID
 * @returns {Promise}
 */
export const likePost = (id) => api.post(`/posts/${id}/like`);
