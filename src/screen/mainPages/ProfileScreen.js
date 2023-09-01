import { View, Text, TouchableOpacity } from 'react-native'
import React ,{useEffect,useState}from 'react'
import axios from 'axios';


const ProfileScreen = () => {
  const [data,setData] = useState("asdasdasdsdasdADSASDASDSasd")
  const [loading,setloading] = useState(false)
  const getfetch = async ()=>{
    try{
      setloading(true)
      const res = await axios.get("https://e84f-178-135-3-21.ngrok-free.app/items/13")
      // const res = await fetch("https://31bc-178-135-3-21.ngrok-free.app/get")
      // console.log(res)
      // .then((e)=>{
      //   console.log(e.data);
      // })
      console.log(res.data)
    }catch(e){ 
      console.log(e) 
    }finally{
      setloading(true)
    }
  }
  useEffect(()=>{
  },[])
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity onPress={getfetch}><Text>{data}</Text></TouchableOpacity>
    </View>
  )
}

export default ProfileScreen