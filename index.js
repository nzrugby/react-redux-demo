import React,{Component} from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'
import {combineReducers} from 'redux'

class Comp extends Component{
    render(){
        const {clickToChange,clickToChange1,text,text1,changeText} = this.props
        return(
            <div>
                <input id='in' onChange={changeText}/>
                <button onClick={clickToChange}>change txt</button>
                <div>1:{text}</div>

                <button onClick={clickToChange1}>change txt1</button>
                <div>2:{text1}</div>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {text:state.text,text1:state.text1}
}

function mapDispatchToProps(dispatch){
    return{
        clickToChange:()=>{
            dispatch(btnClick())
        },
        changeText:()=>{
            dispatch(inputChange())
        },
        clickToChange1:()=>{
            dispatch(btnClick1())
        }
    }
}


//action
function btnClick(){
    return{
        type:'BTN_CLICK'
    }
}

function btnClick1(){
    return{
        type:'BTN_CLICK1'
    }
}

function inputChange(){
    return{
        type:'INPUT_CHANGE'
    }
}

//reducer

function reducer1(state={text:'Howick'},action){
    switch(action.type){
        case 'BTN_CLICK':
            return {text:'hello,world'}//{text:"hello"}
        case 'INPUT_CHANGE':
            return {text:document.getElementById('in').value}    
        default:
            return state
    }
}

function reducer2(state={text1:'Auckland'},action){
    switch(action.type){
        case 'BTN_CLICK1':
            return {text1:"Now I was changed!"}
        default:
            return state
    }
}
  
const reducer = combineReducers({reducer1,reducer2})

//connect
const Comp1 = connect(mapStateToProps,mapDispatchToProps)(Comp)

//store
let store = createStore(reducer);

render(
    <Provider store={store}>
        <Comp1/>
    </Provider>,
    document.getElementById('root')
)

