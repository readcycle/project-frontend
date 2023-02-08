import * as types from "./actionType";
import axios from "axios";
const baseUrl = "http://localhost:3000/";
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
	const { search, genre, user, long, lat, isClosed } = input;
	// console.log(input)
	let url;
	if (input) {
		if (long && lat) {
			// url = baseUrl + `posts?long=${long}&lat=${lat}`;
			url =
				"http://localhost:3000/posts?long=106.843575845017&lat=-6.23922877158625";
		}
		if (user) url = baseUrl + `posts?user=${user}`;
	} else {
		// url = baseUrl + "posts";
		url =
			"http://localhost:3000/posts?long=106.843575845017&lat=-6.23922877158625";
	}
	// console.log(url)

	// console.log(url, 'URL')
	// http://localhost:3000/posts?long=106.843575845017&lat=-6.23922877158625
	return (dispatch) => {
		return fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				dispatch(fetchAllPostsSuccess(data));
			})
			.catch((error) => console.log(error));
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
	return (dispatch) => {
		return fetch(baseUrl + "posts", {
			method: "POST",
			headers: {
				access_token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(input),
		}).then((response) => {
			console.log(response);
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
