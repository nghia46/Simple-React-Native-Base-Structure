import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { COLORS } from "../../../constants";
import MyButton from "../buttons/myButton";
const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    color="#ffff"
    icon="post-outline"
    theme={{ colors: { primary: COLORS.primary } }}
  />
);

const PostCard = ({ post }) => (
  <Card>
    <Card.Title title={post.title} subtitle={post.body} left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <MyButton
        icon="location-enter"
        label="OK"
        onPress={() => console.log("Pressed")}
        style={{ marginRight: 10 }}
      />
      <MyButton
        icon="cancel"
        label="Cancel"
        onPress={() => console.log("Pressed")}
      />
    </Card.Actions>
  </Card>
);

export default PostCard;
