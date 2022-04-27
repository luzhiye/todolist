import React, {useState} from 'react'
import './style.css'

// class ButtonEvent extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: '',
//             list: []
//         }
//     }

//     handleChange(e) {
//         this.setState({value: e.target.value})
//     }

//     handleSubmit() {
//         this.setState({
//             list: [...this.state.list, this.state.value],
//             value: ''
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <input value={this.state.value} placeholder="enter the value" onChange={this.handleChange.bind(this)} />
//                 <button onClick={this.handleSubmit.bind(this)}>Add Items</button>
//                 Current Value: {this.state.value}
//                 list: {this.state.list.map((item, index) => (<li key={index}>{item}</li>))} <button>remove</button>
//             </div>
//         )
//     }
// }

// export default ButtonEvent

const ButtonEvent = () => {
    const [value, setValue] = useState('')
    const [list, setList] = useState([])

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    const handleSubmit = () => {
        setList([...list, value])
        setValue('')
    }

    const handleRemove = (e) => {
        var arr = list
        // arr.filter((item) => item !== e.target.value)
        // arr.pop()
        arr.splice(e, 1)
        setList([...arr])
        // 
    }

    const handleTop = (e) => {
        var arr = list
        arr.unshift(arr.splice(e,1)[0])
        setList([...arr])
    }

    return (
        <div className="todo">
            <div className="ipt"><input type="text" value={value} onChange={handleChange}/></div>
            <button onClick={handleSubmit}>Add Items</button>
            <div className="cur-value">Inputing task is: {value}</div>
            <div>
                List of values: {list.map((item, index) => (<ul key={index}>{item} <span className="btn"><button onClick={() => handleTop(index)}>important</button>  <button onClick={() => handleRemove(index)}>x</button></span> </ul>))}
            </div>
        </div>
    )
}

export default ButtonEvent