import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";
import {
	Container,
	Card,
	UserInfo,
	UserImg,
	UserName,
	UserInfoText,
	PostTime,
	PostText,
	PostImg,
	InteractionWrapper,
	Interaction,
	InteractionText,
	Divider,
} from "../styles/FeedsStyle";

import ProgressiveImage from "./ProgressiveImage";

const PostCard = ({ item, onDelete, onPress }) => {
	const [userData, setUserData] = useState(null);

	const likeIcon = item.liked ? "heart" : "heart-outline";
	const likeIconColor = item.liked ? "#2e64e5" : "#333";
	let likeText;
	let commentText;

	if (item.likes == 1) {
		likeText = "1 Like";
	} else if (item.likes > 1) {
		likeText = item.likes + " Likes";
	} else {
		likeText = "Like";
	}

	if (item.comments == 1) {
		commentText = "1 Comment";
	} else if (item.comments > 1) {
		commentText = item.comments + " Comments";
	} else {
		commentText = "Comment";
	}

	return (
		<Card key={item.id}>
			<UserInfo>
				<UserImg
					source={{
						uri: userData
							? userData.userImg ||
							  "https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg"
							: "https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg",
					}}
				/>
				<UserInfoText>
					<TouchableOpacity onPress={onPress}>
						<UserName>
							{userData ? userData.fname || "Test" : "Test"}{" "}
							{userData ? userData.lname || "User" : "User"}
						</UserName>
					</TouchableOpacity>
					<PostTime>{moment([2020, 0, 29]).fromNow()}</PostTime>
				</UserInfoText>
			</UserInfo>

			{item.postImg != null ? (
				<ProgressiveImage
					defaultImageSource={require("../assets/images/default-img.jpg")}
					source={{ uri: item.postImg }}
					style={{ width: "100%", height: 250 }}
					resizeMode="cover"
				/>
			) : (
				<Divider />
			)}

			{/* <PostText>{item.post}</PostText> */}

			<InteractionWrapper>
				<Interaction active={item.liked}>
					<Ionicons name={likeIcon} size={25} color={likeIconColor} />
					<InteractionText active={item.liked}>{likeText}</InteractionText>
				</Interaction>
				<Interaction>
					<Ionicons name="md-chatbubble-outline" size={25} />
					<InteractionText>{commentText}</InteractionText>
				</Interaction>
				{/* {user ? (
					user.uid == item.userId ? (
						<Interaction onPress={() => onDelete(item.id)}>
							<Ionicons name="md-trash-bin" size={25} />
						</Interaction>
					) : null
				) : null} */}
			</InteractionWrapper>
		</Card>
	);
};

export default PostCard;
