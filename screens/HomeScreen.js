import { ScrollView, Text } from "react-native";
import React from "react";
import PostCard from "../components/common/cards/postCard";
import MyButton from '../components/common/buttons/myButton';
import UserPosts from "../components/home/posts";
export default function HomeScreen() {
  return (
    <ScrollView>
      <UserPosts />
    </ScrollView>
  );
}
