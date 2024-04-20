import { View, Text, ScrollView } from "react-native";
import React from "react";
import PostCard from "../common/cards/postCard";
import useFetch from "../../hook/useFetch";
import { ActivityIndicator } from "react-native-paper";
import styles from "./post.style.js";
import { COLORS } from "../../constants/theme.js";

const UserPosts = () => {
  const { data, isLoading, error } = useFetch("posts");

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          color={COLORS.primary}
          animating={true}
          size="large"
        />
      ) : error ? (
        <Text style={{ color: "red" }}>Something went wrong</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.postCardContainer}>
          {data.map((post) => (
            <View key={post.id} style={styles.postCardWrapper}>
              <PostCard post={post} />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default UserPosts;
