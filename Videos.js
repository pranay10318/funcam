import { View, Text, SafeAreaView, Button } from "react-native";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { Video } from "expo-av";
import { StyleSheet } from "react-native";
const [video, setVideo] = useState();
var arr = new Array(
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcSrNLghYoDJ3daxdLlZCRG066unak_R3WBodQ"
);
var i = 0;
// const render = ({ url }) => {
//   <SafeAreaView style={styles.container}>
//     <Video
//       style={styles.video}
//       source={{ uri: url }}
//       useNativeControls
//       resizeMode="contain"
//       isLooping
//     >
//       <Button title="next" onPress={render(arr[(i + 1) % 2])} />
//     </Video>
//   </SafeAreaView>;
// };
var url = arr[0];

const Videos = () => {
  if (video) {
    let shareVideo = () => {
      shareAsync(video.uri).then(() => {
        setVideo(undefined);
      });
    };

    let saveVideo = () => {
      MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
        setVideo(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Video
          style={styles.video}
          source={{ uri: video.uri }}
          useNativeControls
          resizeMode="contain"
        />
        <Button
          title="next"
          onPress={() => {
            setVideo(undefined);
          }}
        />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Video
        style={styles.video}
        source={{ uri: url }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  video: {
    flex: 2,
    alignSelf: "stretch",
  },
});

export default Videos;
