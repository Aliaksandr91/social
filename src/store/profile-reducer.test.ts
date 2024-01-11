import {addPostAC, deletePostAC, profileReducer} from "./profile-reducer";
import { v1 } from 'uuid';
import {ProfilePageType} from "./store";

const postId1= v1()
const postId2= v1()

const initialState: ProfilePageType = {
    posts: [
        {id: postId1, message: 'first post', likesCount: 12},
        {id: postId2, message: 'second post', likesCount: 11}
    ],
    profile: null,
    status: ''
}

test('New post should be added', () => {
    // 1. test data
    const action = addPostAC('Hello')
    // 2. action
    const newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe('Hello')
    expect(newState.posts[2].likesCount).toBe(0)
})

test('New post should be deleted', () => {
    // 1. test data
    const action = deletePostAC(postId1)
    // 2. action
    const newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.posts.length).toBe(1)

})