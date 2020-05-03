import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, TouchableHighlight,Dimensions } from 'react-native';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export class Trivia extends Component {
    
    state = {
        info:'flex',
        ques:'none',
        ans:'none',
        ques1:'none',
        message:'',
        image:'',
        gryffindorPoints:0,
        slytherinPoints:0,
        points:0,
        result:null,
        ansBtn:true,
        quesBtn:false,
        color:'red',
        

    }
    
    navigator = (page) => {
        if(page == 'info'){
            this.setState({
                info:'flex',
                ques:'none',
                ans:'none',
                ques1:'none',
                
            })    
        }else if(page == 'ques'){
            this.setState({
                info:'none',
                ques:'flex',
                ans:'none',
                ques1:'none',
            })
        }else if(page == 'ans'){
            this.setState({
                info:'none',
                ques:'none',
                ans:'flex',
                ques1:'none',
            })
        }

        
    }
    selector = (value) =>{
        if(value == 'a' ){
            this.setState({
                result:1,
                info:'none',
                ques:'none',
                ans:'none',
                ansBtn:true,
                quesBtn:true,
                ques1:'flex',

            })
        }else if(value == 'b' || value == 'c' || value == 'd' ){
            this.setState({
                result:0,
                info:'none',
                ques:'none',
                ans:'none',
                ansBtn:true,
                quesBtn:true,
                ques1:'flex',

            })
        }

    }
    selector1 = (value) =>{
        if(value == 'c' ){
            this.setState({
                result:this.state.result + 1,
                info:'none',
                ques:'none',
                ans:'flex',
                ansBtn:false,
                quesBtn:true,
                ques1:'none',
            })
        }else if(value == 'b' || value == 'a' || value == 'd' ){
            this.setState({
                result:this.state.result + 0,
                info:'none',
                ques:'none',
                ans:'flex',
                ansBtn:false,
                quesBtn:true,
                ques1:'none',
            })
        }

    }
    render() {
        return (
            <View style={styles.container}>

                <ImageBackground
                    style={styles.backgroundImage}
                    source={{uri:this.state.image}}
                >
                
                
                <View style={styles.buttonContainer}>
                
                    <TouchableHighlight
                        onPress={() => {this.navigator('info')}}
                    >
                    
                    
                    <View style={{backgroundColor:this.state.color},styles.button}>
                    
                        <Text style={styles.buttontext}>
                            Instr.
                        </Text>
                    </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        disabled = {this.state.quesBtn}
                        onPress={() => {this.navigator('ques')}}
                    >
                    
                    
                    <View style={styles.button}>
                    
                        <Text style={styles.buttontext}>
                            Qns
                        </Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        disabled = {this.state.ansBtn}
                        onPress={() => {this.navigator('ans')}}
                    >
                    
                    
                    <View style={styles.button }>
                    
                        <Text style={styles.buttontext}>
                            Ans
                        </Text>
                    </View>
                    </TouchableHighlight>
                </View>
                
                <View style={{display:this.state.info}}>
                    <View style={styles.messageContainer}>
                
                    <Text style={styles.messageText}>
                    3 choices will be given you have to choose one
                    </Text>
                <Text style={styles.messageText}>
                    You only will get one try
                    
                    </Text>
                    <Text style={styles.messageText}>
                    Once you select ans you cannot go back
                    
                    </Text>
                    
                </View>
                
                </View>
                <View style={{display:this.state.ques}}>
                    <View style={styles.messageContainer}>
                
                    
                    <Text style={styles.messageTitle}>
                    Q.What house at Hogwarts does Harry belong to?
                    </Text>
                <View style={styles.AnsContainer}>
                    <View style={styles.messageAnsContainer}>
                    <TouchableHighlight
                    onPress={()=>{this.selector('a')}}
                    >
                    <Text style={styles.messageText}>
                    A. Gryffindor
                    
                    </Text>
                    </TouchableHighlight>
                    </View>
                    <View style={styles.messageAnsContainer}>
                    <TouchableHighlight
                    onPress={()=>{this.selector('b')}}
                    >
                    <Text style={styles.messageText}>
                    B. Slytherin
                    
                    </Text>
                    </TouchableHighlight>
                    </View>
                    <View style={styles.messageAnsContainer}>
                    <TouchableHighlight
                    onPress={()=>{this.selector('c')}}
                    >
                    <Text style={styles.messageText}>
                    C. HufflePuff
                    
                    </Text>
                    </TouchableHighlight>
                    </View>
                    <View style={styles.messageAnsContainer}>
                    <TouchableHighlight
                    onPress={()=>{this.selector('d')}}
                    >
                    <Text style={styles.messageText}>
                    D. Ravenclaw
                    
                    </Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                    
                    </View>
                    
                    </View>
                    <View style={{display:this.state.ques1}}>
                    <View style={styles.messageContainer}>
                
                    
                    <Text style={styles.messageTitle}>
                    Q.What is Lord Voldemort’s real name?
                    </Text>
                <View style={styles.AnsContainer}>
                    <View style={styles.messageAnsContainer}>
                    <TouchableHighlight
                    onPress={()=>{this.selector1('a')}}
                    >
                    <Text style={styles.messageText}>
                    A. Tom Marvin Riddle
                    
                    </Text>
                    </TouchableHighlight>
                    </View>
                    <View style={styles.messageAnsContainer}>
                    <TouchableHighlight
                    onPress={()=>{this.selector1('b')}}
                    >
                    <Text style={styles.messageText}>
                    B. Tom Marvilo Riddle
                    
                    </Text>
                    </TouchableHighlight>
                    </View>
                    <View style={styles.messageAnsContainer}>
                    <TouchableHighlight
                    onPress={()=>{this.selector1('c')}}
                    >
                    <Text style={styles.messageText}>
                    C. Tom Marvolo Riddle
                    
                    </Text>
                    </TouchableHighlight>
                    </View>
                    <View style={styles.messageAnsContainer}>
                    <TouchableHighlight
                    onPress={()=>{this.selector1('d')}}
                    >
                    <Text style={styles.messageText}>
                    D. Tom Ravolo Riddle
                    
                    </Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                    
                    </View>
                    
                    </View>
                    <View style={{display:this.state.ans}}>
                    <View style={styles.messageContainer}>
                
                <Text style={styles.messageText}>
                Your Score is {this.state.result}
                </Text>
                
            </View> 
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:deviceHeight,
        width:deviceWidth,
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:10,
    },
    button:{
        width:deviceWidth/3,
        height:deviceHeight/15,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
        backgroundColor:'green',
    },
    buttontext:{
        color:'white',
        fontSize:deviceHeight/26,
        
    },
    messageContainer:{
        
        marginTop:50,
        width:(deviceWidth),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        opacity:.8,
        marginHorizontal:10,
        
        },
        messageTitle:{
            fontSize:deviceHeight/17,
        },
    messageText:{
        fontSize:deviceHeight/21,
        opacity:1,
        color:'black',
        
    },
    backgroundImage:{
        height:deviceHeight,
        width:deviceWidth,
    },
    AnsContainer:{
        marginTop:60,
    },
    messageAnsContainer:{
        backgroundColor:'grey',
        marginVertical:10,
    }
});
export default Trivia;