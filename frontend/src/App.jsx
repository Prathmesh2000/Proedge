import React, {useState} from 'react'

export default function App() {
    const [value , setValue] = useState({data:[{rollno:'', result:''}]})
    const [rollNum, setRollNum] = useState("")
    const [inputValue, setInputValue] = useState("")
    
    function handleChange(event){
        setRollNum(event.target.value)
    }
    function change(){
        setInputValue(rollNum)
        if(inputValue!==""){
            fetch("https://ancient-tor-34194.herokuapp.com/https://proedge-api.herokuapp.com/"+inputValue)
			.then(response => response.json())
			.then(data => {
                setValue(data)
			});
        }else{

        }
    }
    const TableList = ({rollno, result}) => {
        return (
          <tr>
            <td>{rollno}</td>
            <td>{result}</td>
           </tr>
        )
     }
    return (
        <div id="main">
            <input className="input" onChange={handleChange} type="text" placeholder="Enter any number"/>
            <br/>
            <br/>
            <button onClick={change} className="btn">Submit</button>
            <br/>
            <br/>
            <table>
        <tbody>
        <tr id="header">
        <th>Roll No.</th>
        <th>Result</th>
      </tr>
      {value.data.map((item , index) => (<TableList rollno={item.rollno} key={index.toString()} result={item.result} />))}
        </tbody>
      </table>
    </div>
    );
}