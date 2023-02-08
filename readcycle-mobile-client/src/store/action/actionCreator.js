import * as types from "./actionType";
import axios from "axios";
// const baseUrl = "http://localhost:3000/";
const baseUrl = "https://429d-103-78-114-23.ap.ngrok.io/";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchGenresSuccess = (payload) => {
	return {
		type: types.FETCH_ALL_GENRES,
		payload,
	};
};

export const fetchGenres = () => {
	return (dispatch) => {
		fetch(baseUrl + "genres")
			.then((response) => response.json())
			.then((data) => {
				const genres = data.map((el) => {
					return el;
				});
				dispatch(fetchGenresSuccess(genres));
			})
			.catch((error) => console.log(error));
	};
};

const fetchAllPostsSuccess = (payload) => {
	return {
		type: types.FETCH_ALL_POSTS,
		payload,
	};
};

export const fetchAllPosts = (input) => {
	// const { search, genre, user, long, lat, isClosed } = input;
	// console.log(input)
	let url;
	// const { search, genre, user, long, lat, isClosed } = input;
	if (input.long && input.lat) {
		console.log("masuk long lat");
		// url = baseUrl + `posts?long=${long}&lat=${lat}`;
		url =
			"http://localhost:3000/posts?long=106.843575845017&lat=-6.23922877158625";
	} else if (input.user) {
		url = baseUrl + `posts?user=${input.user}`;
	} else if (input.search || input.genre) {
		if (input.search === null) input.search = "";
		if (input.genre === null) input.genre = "";
		url = baseUrl + `posts?search=${input.search}&genre=${input.genre}`;
	} else {
		console.log("masuk else");
		// url = baseUrl + "posts";
		url =
			"http://localhost:3000/posts?long=106.843575845017&lat=-6.23922877158625";
	}
	// console.log(url)

	// console.log(url, 'URL')
	// http://localhost:3000/posts?long=106.843575845017&lat=-6.23922877158625
	return (dispatch) => {
		console.log(url);
		return fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				dispatch(fetchAllPostsSuccess(data));
			})
			.catch((error) => console.log(error));
	};
};

const fetchMyPostSuccess = (payload) => {
	return {
		type: types.FETCH_MY_POSTS,
		payload,
	};
};

export const fetchMyPost = (input) => {
	return async (dispatch) => {
		try {
			const response = await fetch(baseUrl + `posts?user=${input}`);
			if (!response.ok) throw response.json();
			const data = await response.json();
			dispatch(fetchMyPostSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const registerUser = (input) => {
	// const {
	// 	email,
	// 	password,
	// 	fullName,
	// 	location,
	// 	city,
	// 	favoriteGenre,
	// 	favoriteBook,
	// 	phoneNumber,
	// } = input;
	// console.log(input, "dispatch input");
	return (dispatch) => {
		return fetch(baseUrl + "users/register", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "multipart/form-data",
			},
			body: input,
		})
			.then((response) => {
				if (!response.ok) {
					return response.json().then((text) => {
						throw new Error(text.message);
					});
				} else {
					return response.json().then((data) => {
						return data;
					});
				}
			})
			.catch((err) => console.log(err));
	};
};

export const loginUser = (input) => {
	return (dispatch) => {
		return fetch(baseUrl + "users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(input),
		}).then((response) => {
			if (!response.ok) {
				return response.json().then((text) => {
					throw new Error(text.message);
				});
			} else {
				return response.json().then((data) => {
					console.log(data);
					AsyncStorage.setItem("access_token", data.access_token);
					AsyncStorage.setItem("id", String(data.id));
					AsyncStorage.setItem("fullname", data.fullname);
					// console.log(data.coordinates[0], data.coordinates[1], "<<< STRING??" )
					AsyncStorage.setItem("long", String(data.coordinates[0]));
					AsyncStorage.setItem("lat", String(data.coordinates[1]));
					return data;
				});
			}
		});
	};
};

const fetchUserDetailSuccess = (payload) => {
	return {
		type: types.FETCH_USER_DETAIL,
		payload,
	};
};

export const fetchUserDetail = (input) => {
	return (dispatch) => {
		return fetch(baseUrl + `users/${input}`)
			.then((response) => response.json())
			.then((data) => {
				dispatch(fetchUserDetailSuccess(data));
			})
			.catch((error) => console.log(error));
	};
};

const fetchPostDetailSuccess = (payload) => {
	return {
		type: types.FETCH_JOB_DETAIL,
		payload,
	};
};

export const fetchPostDetail = (input) => {
	return (dispatch) => {
		fetch(baseUrl + `posts/${input}`, {
			headers: {
				access_token: localStorage.access_token,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch(fetchJobDetailSuccess(data));
			})
			.catch((error) => console.log(error));
	};
};

export const addPost = (input) => {
	return async (dispatch) => {
		try {
			const access_token = await AsyncStorage.getItem("access_token");
			const response = await fetch(baseUrl + "posts", {
				method: "POST",
				headers: {
					access_token,
					Accept: "application/json",
					"Content-Type": "multipart/form-data",
				},
				body: input,
			});
			const data = response.json();
		} catch (error) {
			console.log(error);
		}
	};
};

export const addBid = (input) => {
	console.log(input, "<<<<<");
	return async (dispatch) => {
		try {
			const access_token = await AsyncStorage.getItem("access_token");
			const response = await fetch(baseUrl + "bids", {
				method: "POST",
				headers: {
					access_token,
					Accept: "application/json",
					"Content-Type": "multipart/form-data",
				},
				body: input,
			});
			const data = response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const addReport = (input, reportedId) => {
	console.log(input, reportedId);
	return async (dispatch) => {
		try {
			const access_token = await AsyncStorage.getItem("access_token");
			const response = await fetch(baseUrl + "reports/" + reportedId, {
				method: "POST",
				headers: {
					access_token,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(input),
			});
			const data = response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const editProfile = (id, input) => {
	// console.log(input, "di action creator");
	return (dispatch) => {
		return fetch(baseUrl + "users", {
			method: "PUT",
			headers: {
				access_token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(input),
		}).then((response) => {
			if (!response.ok) {
				return response.json().then((text) => {
					throw new Error(text.message);
				});
			} else {
				return response.json().then((data) => {
					return data;
				});
			}
		});
	};
};

const fetchBidsByIdSuccess = (payload) => {
	return {
		type: types.FETCH_ALL_BIDS_BY_ID,
		payload,
	};
};

export const fetchBidsById = (id) => {
	return (dispatch) => {
		fetch(baseUrl + `bids?user=${id}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				dispatch(fetchBidsByIdSuccess(data));
			})
			.catch((error) => console.log(error));
	};
};

const fetchAllBidsSuccess = (payload) => {
	return {
		type: types.FETCH_ALL_BIDS,
		payload,
	};
};

export const fetchAllBids = (postId) => {
	let url = baseUrl + `bids`;
	if (postId) url += `?post=${postId}`;
	// console.log(url, "<<<<<")
	return (dispatch) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data, "<<data")
				dispatch(fetchAllBidsSuccess(data));
			})
			.catch((error) => console.log(error));
	};
};

const fetchAllBidsByPostSuccess = (payload) => {
	return {
		type: types.FETCH_ALL_BIDS_BY_POST,
		payload,
	};
};

export const fetchAllBidsByPost = (postId) => {
	let url = baseUrl + `bids`;
	url += `?post=${postId}`;
	// console.log(url, "<<<<<")
	return (dispatch) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data, "<<data")
				dispatch(fetchAllBidsByPostSuccess(data));
			})
			.catch((error) => console.log(error));
	};
};

export const patchPost = (postId) => {
	return (dispatch) => {
		return fetch(baseUrl + "posts/" + postId, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			if (!response.ok) {
				return response.json().then((text) => {
					throw new Error(text.message);
				});
			} else {
				return response.json().then((data) => {
					return data;
				});
			}
		});
	};
};

import {
	FETCH_CHAT,
	CREATE_CHAT,
	FETCH_CHAT_BY_ID,
	FETCH_MESSAGE,
	CREATE_MESSAGE,
	FETCH_MESSAGE_BY_ID,
} from "../action/actionType";
const url = "https://0afa-180-252-39-206.ap.ngrok.io";

//Return Object
export const fetchChatSuccess = (payload) => {
	return {
		type: FETCH_CHAT,
		payload,
	};
};

export const createChatSuccess = (payload) => {
	return {
		type: CREATE_CHAT,
		payload,
	};
};

export const fetchChatByIdSuccess = (payload) => {
	return {
		type: FETCH_CHAT_BY_ID,
		payload,
	};
};
export const fetchMessageSuccess = (payload) => {
	return {
		type: FETCH_MESSAGE,
		payload,
	};
};

export const createMessageSuccess = (payload) => {
	return {
		type: CREATE_MESSAGE,
		payload,
	};
};

export const fetchMessageByIdSuccess = (payload) => {
	return {
		type: FETCH_MESSAGE_BY_ID,
		payload,
	};
};

//Function

//chat
export function fetchChat(id) {
	console.log(id, "<<<<< cek from action");
	return (dispatch) => {
		return fetch(`${url}/chats?id=${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "<<<< from store");
				dispatch(fetchChatSuccess(data));
			});
	};
}

export function createChat(payload) {
	return (dispatch) => {
		return fetch(`${url}/chats`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "<<< from store");
				dispatch(createChatSuccess(data));
			});
	};
}

export function fetchChatById(id) {
	return (dispatch) => {
		return fetch(`${url}/chats/${id}`, {
			method: "get",
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data, '<<<< from action');
				dispatch(fetchChatByIdSuccess(data));
			});
	};
}

//message
export function fetchMessage(id) {
	console.log(id, "<<<<< cek from action message");
	return (dispatch) => {
		return fetch(`${url}/messages?id=${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "<<<< from store");
				dispatch(fetchMessageSuccess(data));
			});
	};
}

export function createMessage(payload) {
	console.log(payload, "<<<< from action message");
	return (dispatch) => {
		return fetch(`${url}/messages`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "<<< from store");
				dispatch(createMessageSuccess(data));
			});
	};
}

export function fetchMessageById(id) {
	return (dispatch) => {
		return fetch(`${url}/messages/${id}`, {
			method: "get",
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data, '<<<< from action');
				dispatch(fetchMessageByIdSuccess(data));
			});
	};
}
