import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

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

const PostCard = ({ item, onDelete, onPress, feed }) => {
	const [userData, setUserData] = useState(null);

	const likeIcon = item.liked ? "heart" : "heart-outline";
	const likeIconColor = item.liked ? "#2e64e5" : "#333";

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
					<PostTime>{item.postTime}</PostTime>
				</UserInfoText>
			</UserInfo>

			{item.postImg != null ? (
				<ProgressiveImage
					defaultImageSource={require("../assets/images/default-img.jpg")}
					source={item.postImg}
					// source={{ uri: item.postImg }}
					style={{ width: "100%", height: 250 }}
					resizeMode="cover"
				/>
			) : (
				<Divider />
			)}

			<InteractionWrapper>
				<Interaction active={item.liked}>
					<Ionicons name={likeIcon} size={25} color={likeIconColor} />
					<InteractionText active={item.liked}>
						{item.likes.length === 1
							? item.likes.length + " Like"
							: item.likes.length + " Likes"}
					</InteractionText>
				</Interaction>
				<Interaction>
					<Ionicons name="md-chatbubble-outline" size={25} />
					<InteractionText>
						{item.comments.length === 1
							? item.comments.length + " Comment"
							: item.comments.length + " Comments"}
					</InteractionText>
				</Interaction>
				{/* {user ? (
					user.uid == item.userId ? (
						<Interaction onPress={() => onDelete(item.id)}>
							<Ionicons name="md-trash-bin" size={25} />
						</Interaction>
					) : null
				) : null} */}
			</InteractionWrapper>
			{feed ? <PostText>{item.post}</PostText> : null}
		</Card>
	);
};

export default PostCard;
