import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [likes, setLikes] = useState(24);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        {/* Company Logo */}
        <View style={styles.avatarRing}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.avatarImage}
            resizeMode="contain"
          />
        </View>

        {/* Company Name */}
        <Text style={styles.title}>Technik Nest</Text>

        {/* Company Category */}
        <Text style={styles.subtitle}>Software Company</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>

          {/* Like Button */}
          <TouchableOpacity
            style={styles.likeButton}
            onPress={() => setLikes(likes + 1)}
          >
            <FontAwesome5
              name="heart"
              size={20}
              color="#fff"
              solid
            />
            <Text style={styles.likeText}>{likes}</Text>
          </TouchableOpacity>

          {/* Follow Button */}
          <TouchableOpacity
            style={[
              styles.followButton,
              isFollowing && styles.followingButton,
            ]}
            onPress={() => setIsFollowing(!isFollowing)}
          >
            <FontAwesome5
              name={isFollowing ? "user-check" : "user-plus"}
              size={16}
              color={isFollowing ? "#ff6600" : "#fff"}
            />

            <Text
              style={[
                styles.followText,
                isFollowing && styles.followingText,
              ]}
            >
              {isFollowing ? "Following" : "Follow"}
            </Text>
          </TouchableOpacity>

        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          SECP Registered Private Limited Company.
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "90%",
    maxWidth: 320,
    backgroundColor: "#262626",
    borderRadius: 22,
    paddingVertical: 35,
    paddingHorizontal: 25,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },

  avatarRing: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: "#ff6a00",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 20,
  },

  avatarImage: {
    width: 100,
    height: 100,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    color: "#b0b0b0",
    fontSize: 18,
    marginTop: 8,
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 25,
  },

  likeButton: {
    backgroundColor: "#ff6a00",
    width: 105,
    height: 55,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  likeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },

  followButton: {
    backgroundColor: "#3b3b3b",
    width: 125,
    height: 55,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  followingButton: {
    backgroundColor: "#ffffff",
  },

  followText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },

  followingText: {
    color: "#ff6600",
  },

  footer: {
    color: "#999",
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    fontStyle: "italic",
  },
});