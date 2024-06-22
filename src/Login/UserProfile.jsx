import { Modal,StyleSheet, Text, View,Image,TouchableOpacity,TextInput, ScrollView, Alert,TouchableWithoutFeedback} from 'react-native'

import arrow from '../PlpScreen/images/back.png';
import profile1 from './images/profile1.png';
import profile2 from './images/profile2.png';
import profile3 from './images/profile3.png';
import React,{useState,useEffect} from 'react';
import LoginTop2 from './LoginTop2';
import { useLoginContext } from './LoginCartProvider';
import { useCartContext } from '../Context/WomenContext';
import correct from './images/correct.png';
import arrow1 from './images/arrow2.png';
import user from './images/user.png';
import mobile from './images/smartphone.png';
import email from './images/email.png';
import calendar from './images/calendar.png';
import { RadioButton } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';
import Footer from '../Footer';
import lock from '../lock.png';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import kpmg from '../PlpScreen/images/kpmg.png';
import CalendarImage from '../PlpScreen/images/calendar.png';
import edit from '../PlpScreen/images/draw.png';




const UserProfile = ({navigation}) => {
  

  const [editMobilePen,setEditMobilePen]=useState(false);
  const [editAlternativeMobilePen,setEditAlternativeMobilePen]=useState(false);

  useEffect(()=>{
    if(!mobileNumber){
     setEditMobilePen(true);
    }
    if(!editAlternativeMobilePen){
     setEditAlternativeMobilePen(true)
    }
  },[editMobilePen,editAlternativeMobilePen]);
  const {mobileNumber, 
    emailId,gender,userName,setUserName,
    loginUserId} = useLoginContext();[{
      "imageUrl": "https://imagescdn.peterengland.com/img/app/product/7/760683-8701203.jpg?q=75&auto=format&w=342",
       "brand": "Ethnic Elegance",
       "title": "Embroidered Cotton Kurta",
       "color": "maroon",
       "discountedPrice": 1199,
       "price": 2399 ,
       "discountPercent": 58,
           "size": [
               { "name": "S", "quantity": 15 },
               { "name": "M", "quantity": 30 },
               { "name": "L", "quantity": 25 }
           ],
       "quantity": 70,
       "topLavelCategory": "Men",
       "secondLavelCategory": "Clothes",
       "thirdLavelCategory": "Men Kurtas",
       "description": "Enhance your traditional wardrobe with this embroidered cotton kurta set, featuring intricate detailing for a festive look.",
       "country":"india",
       "wearType":"casual",
       "fabric":"Semi Denim & Clean Look",
       "sleeves":"Stretchable",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268936",
       "seller":"Olly",
       "pincode": "700032"
       },
   {
      "imageUrl": "https://imagescdn.peterengland.com/img/app/product/6/666165-6843880.jpg?q=75&auto=format&w=342",
       "brand": "Pathani Heritage",
       "title": "Classic Pathani Kurta",
       "color": "green",
       "discountedPrice": 999,
       "price": 2099,
       "discountPercent": 52,
           "size": [
               { "name": "S", "quantity": 18 },
               { "name": "M", "quantity": 30 },
               { "name": "L", "quantity": 17 }
           ],
       "quantity": 65,
       "topLavelCategory": "Men",
       "secondLavelCategory": "Clothes",
       "thirdLavelCategory": "Men Kurtas",
       "description": "Enhance your traditional wardrobe with this embroidered cotton kurta set, featuring intricate detailing for a festive look.",
       "country":"india",
       "wearType":"Ethnic",
       "fabric":"Ethnic & Clean Look",
       "sleeves":"Full Sleeves",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268937",
       "seller":"TAREIL",
       "pincode":"251001"
   },
   {
      "imageUrl": "https://imagescdn.peterengland.com/img/app/product/6/658615-6706445.jpg?q=75&auto=format&w=342",
       "brand": "Nehru Elegance",
       "title": "Printed Nehru Jacket Kurta",
       "color": "blue",
        "discountedPrice": 1399,
        "price": 2599,
       "discountPercent": 61,
       "size": [
               { "name": "S", "quantity": 20 },
               { "name": "M", "quantity": 30 },
               { "name": "L", "quantity": 10 }
           ],
     "quantity": 60,
       "topLavelCategory": "Men",
       "secondLavelCategory": "Clothes",
       "thirdLavelCategory": "Men Kurtas",
      "description": "Add a touch of sophistication with this printed silk Nehru jacket kurta, perfect for formal events and celebrations.",
       "country":"india",
       "wearType":"casual",
       "fabric":"Fabric Sleek & Clean Look",
       "sleeves":"Stretchable",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268938",
       "seller":"Rlick",
        "pincode": "110071"
   },
   {
               "title": "Kalamkari Print Kurta",
           "description": "Make a style statement with this Kalamkari block print kurta, showcasing traditional craftsmanship with a contemporary twist.",
           "price": 2299,
           "discountedPrice": 1099,
           "discountPercent": 52,
           "quantity": 70,
           "brand": "Artisan Craft",
           "color": "yellow",
           "size": [
               { "name": "S", "quantity": 15 },
               { "name": "M", "quantity": 30 },
               { "name": "L", "quantity": 25 }
           ],
           "imageUrl": "https://imagescdn.peterengland.com/img/app/product/7/773926-8908250.jpg?q=75&auto=format&w=342",
           "topLavelCategory": "Men",
       "secondLavelCategory": "Clothes",
       "thirdLavelCategory": "Men Kurtas",
       "country":"india",
       "wearType":"casual",
       "fabric":"PCotton & mottled white yarn",
       "sleeves":"Stretchable",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268939",
       "seller":"Qlalk",
        "pincode": "110078"
   },
   {
           "title": "Linen Contrast Piping",
           "description": "Stay cool and stylish in this linen kurta with contrast piping, a perfect choice for casual occasions and relaxed gatherings.",
           "price": 1999,
           "discountedPrice": 899,
           "discountPercent": 55,
           "quantity": 75,
           "brand": "Linen Comfort",
           "color": "blue",
           "size": [
               { "name": "S", "quantity": 20 },
               { "name": "M", "quantity": 35 },
               { "name": "L", "quantity": 20 }
           ],
           "imageUrl": "https://imagescdn.peterengland.com/img/app/product/7/706346-7667409.jpg?q=75&auto=format&w=342",
           "topLavelCategory": "Men",
           "secondLavelCategory": "Clothes",
       "thirdLavelCategory": "Men Kurtas",
       "country":"india",
       "wearType":"casual",
       "fabric":"Denim Fabric & Clean Look",
       "sleeves":"Stretchable",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268940",
       "seller":"ABBIBAS",
       "pincode": "600045"
   }
   ,
   {
             "title": "Embroidered Raw Silk Kurta",
           "description": "Elevate your festive look with this embroidered raw silk kurta, featuring intricate detailing for a touch of opulence.",
           "price": 2799,
           "discountedPrice": 1299,
           "discountPercent": 54,
           "quantity": 65,
           "brand": "Royal Threads",
           "color": "brown",
           "size": [
               { "name": "S", "quantity": 18 },
               { "name": "M", "quantity": 30 },
               { "name": "L", "quantity": 17 }
           ],
           "imageUrl": "https://imagescdn.peterengland.com/img/app/product/7/779713-9027526.jpg?q=75&auto=format&w=342",
           "topLavelCategory": "Men",
           "secondLavelCategory": "Clothes",
       "thirdLavelCategory": "Men Kurtas",
       "country":"india",
       "wearType":"casual",
       "fabric":"Pure Cotton",
       "sleeves":"Full Sleeves",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268941",
       "seller":"PLIGHT",
       "pincode": "400070"
   },
   {
             "title": "Embroidered Raw Silk Kurta",
           "description": "Elevate your festive look with this embroidered raw silk kurta, featuring intricate detailing for a touch of opulence.",
           "price": 2799,
           "discountedPrice": 1299,
           "discountPercent": 54,
           "quantity": 65,
           "brand": "Royal Threads",
           "color": "brown",
           "size": [
               { "name": "S", "quantity": 18 },
               { "name": "M", "quantity": 30 },
               { "name": "L", "quantity": 17 }
           ],
           "imageUrl": "https://imagescdn.peterengland.com/img/app/product/7/779713-9027526.jpg?q=75&auto=format&w=342",
           "topLavelCategory": "Men",
           "secondLavelCategory": "Clothes",
       "thirdLavelCategory": "Men Kurtas",
       "country":"india",
       "wearType":"casual",
       "fabric":"Pure Cotton",
       "sleeves":"Full Sleeves",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268942",
       "seller":"KEVI",
       "pincode": "251001"
   },
   {
              "title": "Silk Blend Asymmetric Kurta",
           "description": "Make a fashion statement with this silk blend asymmetric kurta, featuring a modern design for a contemporary look.",
           "price": 2399,
           "discountedPrice": 1199,
           "discountPercent": 50,
           "quantity": 60,
           "brand": "Modern Silk",
           "color": "black",
           "size": [
               { "name": "S", "quantity": 12 },
               { "name": "M", "quantity": 28 },
               { "name": "L", "quantity": 20 }
           ],
           "imageUrl": "https://imagescdn.peterengland.com/img/app/product/6/678676-7126516.jpg?q=75&auto=format&w=342",
           "topLavelCategory": "Men",
           "secondLavelCategory": "Clothes",
       "thirdLavelCategory": "Men Kurtas",
       "country":"india",
       "wearType":"casual",
       "fabric":"Pure Cotton",
       "sleeves":"Full Sleeves",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268943",
       "seller":"PLIGHT",
       "pincode": "251781"
   }
   ,
   {
              "title": "Silk Blend Asymmetric Kurta",
           "description": "Make a fashion statement with this silk blend asymmetric kurta, featuring a modern design for a contemporary look.",
           "price": 2399,
           "discountedPrice": 1199,
           "discountPercent": 50,
           "quantity": 60,
           "brand": "Modern Silk",
           "color": "black",
           "size": [
               { "name": "S", "quantity": 12 },
               { "name": "M", "quantity": 28 },
               { "name": "L", "quantity": 20 }
           ],
           "imageUrl": "https://imagescdn.peterengland.com/img/app/product/6/678676-7126516.jpg?q=75&auto=format&w=342",
           "topLavelCategory": "Men",
           "secondLavelCategory": "Clothes",
       "thirdLavelCategory": "Men Kurtas",
       "country":"india",
       "wearType":"casual",
       "fabric":"Pure Cotton",
       "sleeves":"Full Sleeves",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268944",
       "seller":"MIKE",
       "pincode": "221001"
   }
   ,
   {
         "title": "Casual Striped Cotton Kurta",
           "description": "Stay effortlessly stylish with this casual striped cotton kurta, perfect for a laid-back yet refined look.",
           "price": 2199,
           "discountedPrice": 999,
           "discountPercent": 54,
           "quantity": 55,
           "brand": "Striped Elegance",
           "color": "navy blue",
           "size": [
               { "name": "S", "quantity": 12 },
               { "name": "M", "quantity": 28 },
               { "name": "L", "quantity": 15 }
           ],
           "imageUrl": "https://imagescdn.peterengland.com/img/app/product/6/658617-6706499.jpg?q=75&auto=format&w=342",
           "topLavelCategory": "Men",
           "secondLavelCategory": "Clothes",
       "thirdLavelCategory": "Men Kurtas",
       "country":"india",
       "wearType":"casual",
       "fabric":"Pure Cotton",
       "sleeves":"Full Sleeves",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268945",
       "seller":"GUCHIT",
       "pincode": "110011"
   },
   {
           "title": "Traditional Silk Embroidered Kurta",
           "description": "Step into elegance with this traditional silk embroidered kurta, perfect for festive occasions and cultural celebrations.",
           "price": 2899,
           "discountedPrice": 1499,
           "discountPercent": 48,
           "quantity": 80,
           "brand": "Cultural Threads",
           "color": "grey",
           "size": [
               { "name": "S", "quantity": 20 },
               { "name": "M", "quantity": 35 },
               { "name": "L", "quantity": 25 }
           ],
           "imageUrl": "https://imagescdn.peterengland.com/img/app/product/6/658619-6706553.jpg?q=75&auto=format&w=342",
           "topLavelCategory": "Men",
           "secondLavelCategory": "Clothes",
       "thirdLavelCategory": "Men Kurtas",
       "country":"india",
       "wearType":"casual",
       "fabric":"Pure Cotton",
       "sleeves":"Full Sleeves",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268945",
       "seller":"ZARAL",
        "pincode": "560078"
   }
   ,
   {
            "title": "Casual Linen Printed Kurta",
           "description": "Stay comfortable and stylish with this casual linen printed kurta, perfect for everyday wear with a touch of flair.",
           "price": 1999,
           "discountedPrice": 899,
           "discountPercent": 55,
           "quantity": 67,
           "brand": "Easy Breezy",
           "color": "white",
           "size": [
               { "name": "S", "quantity": 15 },
               { "name": "M", "quantity": 25 },
               { "name": "L", "quantity": 27 }
           ],
           "imageUrl": "https://imagescdn.peterengland.com/img/app/product/6/676132-7066697.jpg?q=75&auto=format&w=342",
           "topLavelCategory": "Men",
           "secondLavelCategory": "Clothes",
   
       "thirdLavelCategory": "Men Kurtas",
       "country":"india",
       "wearType":"casual",
       "fabric":"Pure Cotton",
       "sleeves":"Full Sleeves",
       "fit":"Regular fit",
       "materialCare":"Dry clean only",
       "productCode":"74268945",
       "seller":"Plank",
        "pincode": "500032"
   }
   ]
    const {ip,token,popFromStack,pushToStack,
      currentPage, setCurrentPage,
      currentPageIndex,setCurrentPageIndex,
      currentPageIndexCategory,setCurrentPageIndexCategory,
      updateUserName,setUpdateUserName,
updateMobileName,setUpdateMobileName,
AlternativeMobileNumber,setAlternativeMobileNumber,
DOB,setDOB,
updateEmail,setUpdateEmail,updateGender,setUpdateGender,
updatePassword,setUpdatePassword,
profileData,setProfileData}=useLoginContext();        
 

          const forNavigate=(page)=>{
            if(page==='mainHome'){
             setCurrentPage('mainHome');
             navigation.navigate('mainHome');
            }else{
              console.log(page+" "+currentPage[currentPage.length-1]);
              if(currentPage && currentPage[currentPage.length-1]!==page){
                pushToStack(page);
                navigation.navigate(page)
              }else{
                popFromStack(navigation);
              }  
            }
          }

  const [isLoading, setIsLoading] = useState(false); 
  const [password,setPassword]=useState("");    
  const [selected, setSelected] = useState('');

 
        useEffect(() => {
      
          fetchData(); // Call the function when the component mounts
        }, []); // Empty dependency array ensures it only runs once on mount
      
        
        const fetchData = async () => {
          const header = {
            'Authorization': `Bearer ${token}`,
          };
    
          try {
            const response = await axios.get(`http://${ip}:5454/api/users/profile`, { headers: header });
    
            setProfileData(response.data);
             console.log(JSON.stringify(profileData));
             console.log(JSON.stringify(response.data));
            // Set the state with the fetched profile data
            setUpdateUserName(response.data.firstName + (response.data.lastName ? ` ${response.data.lastName}` : ''));
            setUpdateMobileName(response.data.mobile);
            setUpdateEmail(response.data.email);
            setUpdateGender(response.data.gender);
            setPassword(response.data.password);
            setAlternativeMobileNumber(response.data.alternativeMobileNumber);
            setDOB(response.data.dateOfBirth);
            setUserName(response.data.firstName);

            // setUpdatePassword(profileData.password);
            // You might want to fetch and set other fields as needed
          } catch (error) {
            console.log('Error fetching profile:', error);
            // Handle the error as needed
          }
        };


// //update userName
// const [updateUserName,setUpdateUserName]=useState(userName);
// //update mobileNumber
// const [updateMobileName,setUpdateMobileName]=useState(mobileNumber);
// //update emailId
// const [updateEmail,setUpdateEmail]=useState(emailId);
// //update gender
// const [updateGender,setUpdateGender]=useState(gender);
// //update Password
// const [updatePassword,setUpdatePassword]=useState("");
const [emailError,setEmailError]=useState(false);


const [error,setError]=useState(false);

const isEmailValid = (email) => {





  // Regular expression for a basic email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the pattern
  return emailPattern.test(email);
};
const [updateData1,setUpdateData1]=useState(true);
const [updateData2,setUpdateData2]=useState(true);
const [updateData3,setUpdateData3]=useState(false);


const nameArray = updateUserName.split(" ");
const handleSave=async ()=>{

  const isValid = isEmailValid(updateEmail);
 
  if (!isValid) {
   setEmailError(true);
   setUpdateData2(false)
   return; // Stop further execution if email is not valid
  }
  if(updateUserName.length<=0||updateMobileName.length<=0||
      updateEmail.length<=0||updateGender.length<=0||updateMobileName.length<10){
        if(updateMobileName.length<=0){
          setError(true);
        }
        if(updateUserName.length<=0){
         setUpdateData3(false);
      }
     
   }else{
     
    const dataAdd={
       firstName: nameArray[0],
      lastName:nameArray[1]||"",
      gender:updateGender,
      mobile:updateMobileName,
      email:updateEmail,
      alternativeMobileNumber:AlternativeMobileNumber,
      dateOfBirth:DOB
    }
    const header = {
      'Authorization': `Bearer ${token}`,         
    }
    try{
      const response = await axios.put(`http://${ip}:5454/api/users/update/${loginUserId}`, dataAdd, { headers: header });
      console.log("Profile updated successfully: UserProfile.jsx", response.data);
      setIsLoading(true);
      fetchData();
      setTimeout(()=>{
        setIsLoading(false);
        navigation.navigate('Home');
      },2000)
    }catch(error){
     console.log("Error in updating Profile: UserProfile.jsx",error);
    }

   }
}

useEffect(()=>{
  if(!updateEmail){
    setUpdateData2(false);
  }
  if(!updateMobileName){
   setUpdateData1(false);
   setError(true);
  }
  else if(!updateMobileName && updateMobileName.length>=10){
   setUpdateData1(true);
   setError(false);
  }
if(updateMobileName && updateUserName.length>0){
   setUpdateData3(false);
  }
},[updateData1,updateData2,updateEmail,updateMobileName,updateUserName,AlternativeMobileNumber])


// function getOtp(){
//   if(updateMobileName && updateMobileName?.length>=9){
     
//    }else{
//     setError(true);
//    } 
//  }

const changeImage=()=>{
   const options={
    quality:0.7,allowsEditing:true,mediaType:'photo',noData:true,
    storageOptions:{
      skipBackup:true,waitUntilSaved:true,path:'images',cameraRoll:true
    }
   }
}

const [calendarVisible, setCalendarVisible] = useState(false);

const handleDateChange = (date) => {
  // Format the date as desired (e.g., 'DD/MM/YYYY')
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Ensure proper formatting with leading zeros if needed
  const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

  setDOB(formattedDate);
  setCalendarVisible(false);
};

 return (
  <>
 <View style={{flex:1,backgroundColor:'white'}}> 
  <ScrollView>
    {/* <Text>{JSON.stringify(profileData)}</Text> */}
    <View style={styles.container}>
     {/* <Text>{JSON.stringify(profileData)}</Text> */}
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <View>
        {/* <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    /> */}
        <TouchableOpacity onPress={() => forNavigate('mainHome')}>
            <Image source={kpmg} style={{ width: 160, height: 90, marginTop:'-20%'}} />
          </TouchableOpacity>

        <TouchableOpacity  onPress={()=>{forNavigate('mainHome')}}>
             <Image source={arrow}  
                   style={{marginLeft:12}}/>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{marginTop:'2%'}}>
        <Text style={{textAlign:'center',fontSize:25,fontWeight:'500',color:'#00338D'}}>Edit Your Profile</Text>
      </View>
      <View style={{ height: 0.6, backgroundColor: '#00338D',marginTop:'2%' }} />
      <View style={{ height: 6, backgroundColor: '#ebebeb',}} />

      <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',marginTop:'4%'}}>
        <Image source={
          gender==="Male"?profile1:
          gender==="Female"?profile1:profile1
        } style={styles.profile}/>
      </TouchableOpacity>
      
      <View style={styles.row}>
          <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
            <Image source={user} style={{width:'5%',height:18}}/>
            <TextInput 
                placeholder='Full Name'
                style={ {      
                  borderBottomWidth:0.5,
                  width:'92%',
                  marginTop:'2%',
                  marginLeft:'3%',
                  color: updateUserName ? '#00338D' : 'grey', 
                  borderColor:updateData3?'red':'grey'
                }}
                value={updateUserName=='null'?"":updateUserName}  
                placeholderTextColor='grey'
                onChangeText={(text)=>setUpdateUserName(text)}
                />

          </View>
          {/* <Text>{updateUserName}</Text> */}
          
          <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
            <Image source={mobile} style={{width:'5%',height:22}}/>
            <TextInput
                style={ {      
                  borderBottomWidth:0.5,
                  width:'92%',
                  marginTop:'2%',
                  marginLeft:'3%',
                  color: updateMobileName ? '#00338D' : 'grey',
                  borderColor:'grey'
                }}

                placeholder='Mobile Number'
                placeholderTextColor='grey'
                keyboardType='numeric'
                maxLength={10}
                value={updateMobileName}
                onChangeText={(text)=>setUpdateMobileName(text)}
                editable={editMobilePen}
                />
               {/* {
                updateData1 && 
                <Image source={correct} style={{width:18,height:18,marginLeft:'-6%'}}/>
               }  */}
                {
                  profileData.mobile && updateMobileName===profileData.mobile?
                  <>
                  <TouchableOpacity style={{marginLeft:'-5%',}} onPress={()=>{setEditMobilePen(!editMobilePen)}}>
                    <Image source={edit} style={{width:15,height:15,padding:'2.5%',marginBottom:'1%'}}/>
                  </TouchableOpacity>
                    <Image source={correct} style={{width:17,height:17,marginLeft:'-14%',padding:'3%',marginBottom:'1%'}}/>
                  </>
                :
                  <TouchableOpacity style={{marginLeft:'-6%'}}
                    onPress={() => { navigation.navigate('Login2', { mob:mobile }) }}
                    >
                    <Text style={{color:'#00338D',textDecorationLine:'underline'}}>Verify</Text>
                  </TouchableOpacity>
                }
                {
                  !profileData.mobile && 
                  <TouchableOpacity style={{marginLeft:'38%'}}
                    onPress={() => { navigation.navigate('Login2', { mob:mobile }) }}
                  >
                    <Text style={{color:'#00338D',textDecorationLine:'underline',marginLeft:'-6%'}}>Verify</Text>
                  </TouchableOpacity>
                }

          </View>
          

          <View style={{flexDirection:'row',alignItems:'center',padding:10,}}>
            <Image source={email} style={{width:'6%',height:21}}/>
            <TextInput 
                style={ {      
                  borderBottomWidth:0.5,
                  width:'92%',
                  marginTop:'2%',
                  marginLeft:'3%',
                  color: updateEmail ? '#00338D' : 'grey' ,
                  borderColor: emailError ? 'red' : 'grey',
                  backgroundColor:'#f5f5f5'
                }}
                editable={false}
                placeholder='Email Id'
                placeholderTextColor='grey'
                value={updateEmail}
                onChangeText={(text)=>setUpdateEmail(text)}
                />
            {
              profileData.email && 
              <Image source={correct} style={{width:18,height:18,marginLeft:'-15%',padding:'3%'}}/>
            }
          </View>

          {/* <View style={{flexDirection:'row',alignItems:'center',padding:1}}>
            <Image source={calendar} style={{width:'6%',height:21}}/>
            <TextInput
                style={ {      
                  borderBottomWidth:0.5,
                  width:'92%',
                  marginTop:'2%',
                  marginLeft:'3%',
                  color: updateEmail ? '#00338D' : 'grey',
                 
                }}
                value='20/08/2001'
                editable={false} 

  placeholder='DOB'
  placeholderTextColor='grey'
  
/>

          </View> */}
          <View style={{flexDirection:'row',alignItems:'center',padding:1}}>
          {/* <Image source={lock} style={{width:'6%',height:21}}/>
            <TextInput
                style={ {      
                  borderBottomWidth:0.5,
                  width:'92%',
                  marginTop:'2%',
                  marginLeft:'3%',
                  color: updatePassword ? '#00338D' : 'grey',
                  borderColor: !error?'grey':'red'
                 
                }}
                value={updatePassword}
                onChangeText={(text)=>setUpdatePassword(text)}

                

  placeholder='password'
  placeholderTextColor='grey'
  
/> */}

          </View>
          <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
            <Image source={mobile} style={{width:'5%',height:22}}/>
            <TextInput
                style={ {      
                  borderBottomWidth:0.5,
                  width:'92%',
                  marginTop:'2%',
                  marginLeft:'3%',
                  color: AlternativeMobileNumber ? '#00338D' : 'grey',
                  borderColor:'grey'
                }}
                value={AlternativeMobileNumber}
                placeholder='Alternative Mobile Number'
                placeholderTextColor='grey'
                keyboardType='numeric'
                maxLength={10}
                onChangeText={(text)=>setAlternativeMobileNumber(text)}
                editable={editAlternativeMobilePen}
                />

                
                {
                  profileData.alternativeMobileNumber && AlternativeMobileNumber===profileData.alternativeMobileNumber?
                   <>
                    <TouchableOpacity style={{marginLeft:'-5%'}} onPress={()=>{setEditAlternativeMobilePen(!editAlternativeMobilePen)}}>
                     <Image source={edit} style={{width:15,height:15,padding:'2.5%',marginBottom:'1%'}}/>
                    </TouchableOpacity> 
                     <Image source={correct} style={{width:17,height:17,marginLeft:'-14%',padding:'3%',marginBottom:'1%'}}/>
                   </>
                   :
                  <TouchableOpacity style={{marginLeft:'-6%'}}
                   onPress={() => { navigation.navigate('Login2', { mob: AlternativeMobileNumber }) }}
      
                    >
                    <Text style={{color:'#00338D',textDecorationLine:'underline'}}>Verify</Text>
                  </TouchableOpacity>
                }
                {
                  !profileData.alternativeMobileNumber && 
                  <TouchableOpacity style={{marginLeft:'38%'}}
                     onPress={() => { navigation.navigate('Login2', { mob: AlternativeMobileNumber }) }}
                    >
                    <Text style={{color:'#00338D',textDecorationLine:'underline',marginLeft:'-6%'}}>Verify</Text>
                  </TouchableOpacity>
                }
          </View> 
  
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <TouchableOpacity onPress={() => setCalendarVisible(true)}>
        <Image source={CalendarImage} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>

      <TextInput
        style={{
          borderBottomWidth: 0.5,
          width: '92%',
          marginTop: '2%',
          marginLeft: '3%',
          color: DOB ? '#00338D' : 'grey',
          borderColor: 'grey',
        }}
        placeholder="DD/MM/Year"
        placeholderTextColor="grey"
        keyboardType="numeric"
        maxLength={10}
        value={DOB}
        editable={false} // Disable direct editing of the date
      />

      <Modal
        visible={calendarVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setCalendarVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setCalendarVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => setCalendarVisible(false)} />
          <View style={{ backgroundColor: 'white', width: '95%', borderRadius: 10}}>
          <CalendarPicker
              onDateChange={handleDateChange}
              textStyle={{ color: '#00338D' }} // Customize text color
              selectedDayStyle={{ backgroundColor: '#00338D' }} // Customize selected day background color
            />
          </View>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => setCalendarVisible(false)} />
        </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>

          <Text style={{marginTop:'6%',marginLeft:'10%',color:'#474746',fontSize:15}}>Gender</Text>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <RadioButton
                    value="Male"
                    status={updateGender === 'Male' ? 'checked' : 'unchecked'}
                    onPress={() => setUpdateGender('Male')}
              />
              <Text style={{color:'#00338D'}}>Male</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <RadioButton
                    value="Female"
                    status={updateGender === 'Female' ? 'checked' : 'unchecked'}
                    onPress={() => setUpdateGender('Female')}
              />
              <Text style={{color:'#00338D'}}>Female</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <RadioButton
                    value="Prefer not to say"
                    status={updateGender === 'Prefer not to say' ? 'checked' : 'unchecked'}
                    onPress={() => setUpdateGender('Prefer not to say')}
              />
              <Text style={{color:'#00338D'}}> Prefer not{'\n'} to say</Text>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor:'#00338D',marginTop:'14%',padding:'2%'}}
            onPress={handleSave}
          >
              <Text style={{color:'white',textAlign:'center',fontWeight:'800',fontSize:16}}>SAVE</Text>
          </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    <Spinner
          visible={isLoading}
          textContent={'Updating...'}
          textStyle={styles.spinnerTextStyle}
          animation="fade"  // Set the animation type (fade, slide, none)
          overlayColor="rgba(0, 51, 141, 0.6)"  // Set the overlay color
          color="#00338D"
          size="large"
          speed={2}  // Set the speed of the animation
        />
      </View>
    </>
)
}

export default UserProfile

const styles = StyleSheet.create({
    container:{
        marginTop:'7%'
    },
    profile:{
        width:'15.5%',
        height:63,
    },
    row:{
      padding:'7%',
      marginTop:'3%'
    },
    txtInpt:{
      borderBottomWidth:0.5,
      width:'92%',
      marginTop:'2%',
      marginLeft:'3%'
    },

})