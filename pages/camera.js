import React, { useState, useEffect, useRef } from 'react'
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import { useHistory } from 'react-router-dom'

export default function OpenCamera() {
  let history = useHistory()

  function toHome() {
    history.push('/home')
  }

  const camera = useRef(null)
  // 相机权限
  const [hasPermission, setHasPermission] = useState(null)
  // 翻转状态
  const [type, setType] = useState(Camera.Constants.Type.front)
  // 闪光灯状态
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off)
  // 闪光灯按钮图标 默认为关闭
  const [flashButton, setFlashButoon] = useState('flash-off')

  const [test, setTest] = useState('ok')

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  // 取消拍照
  function closeCamera() {
    Alert.alert('closeCamera')
  }
  // 更改闪光灯状态
  function changeFlash() {
    setFlashButoon(
      flashButton === 'flash-outline' ? 'flash-off' : 'flash-outline'
    )
    setFlashMode(
      flashMode === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    )
  }
  // 更改翻转状态
  function changeFlip() {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    )
  }
  // 打开相册
  async function pickImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        //aspect: [6, 3], 剪裁图像的框框 只适用于安卓
        quality: 0.5,
        base64: true,
        exif: true,
      })
      if (!result.cancelled) {
        return 'cancelled'
      }
      uploadPhoto(result.uri)
    } catch (E) {
      console.log(E)
    }
  }
  // 拍照并保存
  async function takePhoto() {
    let options = {
      quality: 0.5,
      base64: true,
      exif: true,
      width: 70,
      height: 70,
    }
    let data = await camera.current.takePictureAsync(options)
    MediaLibrary.saveToLibraryAsync(data.uri)
    uploadPhoto(data)
  }
  // 上传照片
  async function uploadPhoto(data) {
    let formData = new FormData()
    let filename = data.uri.split('/').pop()
    let match = /\.(\w+)$/.exec(filename)
    let type = match ? `image/${match[1]}` : `image`
    formData.append('photo', { uri: data.uri, name: filename, type })
    await fetch('http://example.com/upload.php', {
      method: 'POST',
      body: formData,
      header: {
        'content-type': 'multipart/form-data',
      },
    })
    console.log('uploaded!!!!')
  }
  // 打开教程
  async function openCourse() {
    Alert.alert('教程')
  }
  return (
    <>
      <View style={styles.camera_background}>
        <Camera
          style={styles.camera_style}
          type={type}
          flashMode={flashMode}
          ref={camera}
        >
          {/* 头部按钮区域开始 */}
          <View style={styles.heater_button_box}>
            {/* 取消按钮开始 */}
            <TouchableOpacity
              style={styles.close_camera_button}
              onPress={closeCamera}
            >
              <AntDesign name="close" size={35} color="black" />
            </TouchableOpacity>
            {/* 取消按钮结束 */}

            {/* 闪光灯按钮开始 */}
            <TouchableOpacity style={styles.flash_button} onPress={changeFlash}>
              <MaterialCommunityIcons
                name={flashButton}
                size={35}
                color="black"
              />
            </TouchableOpacity>
            {/* 闪光灯按钮结束 */}

            {/* 翻转按钮开始 */}
            <TouchableOpacity style={styles.flip_button} onPress={changeFlip}>
              <MaterialCommunityIcons
                name="camera-retake-outline"
                size={35}
                color="black"
              />
            </TouchableOpacity>
            {/* 翻转按钮结束 */}
          </View>
          {/* 头部按钮区域结束 */}

          {/* 人像模板区域开始 */}
          <View style={styles.people_frame}></View>
          {/* 人像模板区域结束 */}

          {/* 脚部按钮区域开始 */}
          <View style={styles.footer_button_box}>
            {/* 相册选择按钮开始 */}
            <TouchableOpacity
              style={styles.for_photos_button}
              onPress={pickImage}
            >
              <FontAwesome name="photo" size={40} color="black" />
              {/* <Text style={styles.flip_button_text}> 相册 </Text> */}
            </TouchableOpacity>
            {/* 相册选择按钮结束 */}

            {/* 拍照按钮开始 */}
            <TouchableOpacity style={styles.camera_button} onPress={takePhoto}>
              <AntDesign name="camerao" size={40} color="black" />
            </TouchableOpacity>
            {/* 拍照按钮结束 */}

            {/* 使用教程按钮开始 */}
            <TouchableOpacity
              style={styles.camera_course_button}
              onPress={openCourse}
            >
              <Entypo name="book" size={35} color="black" />
              <Text style={styles.camera_button_text}> 教程 </Text>
            </TouchableOpacity>
            {/* 使用教程按钮结束 */}
          </View>
          {/* 脚部按钮区域结束 */}
        </Camera>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  //相机背景
  camera_background: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  //相机样式
  camera_style: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //头部按钮区域
  heater_button_box: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
    top: 0,
    width: '100%',
    height: '12%',
    padding: 15,
    backgroundColor: '#ffffff',
  },
  // 头部 关闭相机按钮
  close_camera_button: {
    alignItems: 'center',
    position: 'relative',
    top: '3%',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: 50,
    height: 50,
    padding: 1,
    margin: 1,
  },
  // 头部 闪光灯按钮
  flash_button: {
    alignItems: 'center',
    position: 'relative',
    left: '140%',
    top: '3%',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: 50,
    height: 50,
    padding: 1,
    margin: 1,
  },
  // 头部 翻转按钮
  flip_button: {
    alignItems: 'center',
    position: 'relative',
    top: '3%',
    justifyContent: 'center',
    width: 50,
    height: 50,
    padding: 1,
    margin: 1,
  },
  //页脚按钮区域
  footer_button_box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '15%',
    padding: 15,
    backgroundColor: '#ffff',
  },
  //拍摄按钮文字
  camera_button_text: {
    fontSize: 20,
    color: '#04060D',
  },
  // 翻转按钮文字
  flip_button_text: {
    fontSize: 20,
    color: '#04060D',
  },
  // 底部 从相册导入按钮
  for_photos_button: {
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: 100,
    height: 100,
    padding: 1,
    margin: 1,
  },
  // 底部 拍摄按钮
  camera_button: {
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: 100,
    height: 100,
    margin: 1,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#04060D',
  },
  // 底部 拍摄指南按钮
  camera_course_button: {
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    //backgroundColor: "#ffffff",
    width: 100,
    height: 100,
    padding: 1,
    margin: 1,
  },
  //人像模板
  people_frame: {
    height: 300,
    width: 300,
    backgroundColor: '#fff',
    opacity: 0.3,
  },
})
