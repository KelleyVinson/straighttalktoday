import React, { Component } from 'react';
import { Table } from 'reactstrap';

//components

//styles
import styles from './Events.module.scss';





class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: []
    };
      
      this.createTable = this.createTable.bind(this);
         
    
      }
     

   componentWillMount() {
     this.getEvents()
   }

   componentDidMount() {
  setTimeout(() => {
    console.log(this.state.event[0][0].name);
  }, 4000);
  
  }


getEvents() {
          fetch("https://sttapi.herokuapp.com/events/?format=json")
          .then((res) => res.json())
            .then((myjson) => {this.setState({
              event: [myjson]
            });
            
          } )
}

        

  



  


  
  
// After component mounts we build our values of events table  
// componentDidMount = () => {
//   this.createTable()
// }

createTable = () => {
  let table = []
  // Outer loop to create parent
  for (let i = 0; i < 2; i++) {
    let children = [];
    let children2 = [];
    let children3 = []
    //Inner loop to create children
      children.push(<td>{`${this.state.event[0][i].name}`}</td>);
      children2.push(<td>{`${this.state.event[0][i].logdate}`}</td>);
      children3.push(<td>{`${this.state.event[0][i].address}`}</td>);
      table.push(<tr>{children}{children2}{children3}</tr>)
    }
    
  
  return table
}











  render() {
    return (
        <div className={styles.eMain}>
        <h4 className={styles.eHead}>Upcoming Events</h4>
        
        <Table hover>
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Date / Time</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>Youth Summit</td>
            <td>October 6th 8:30AM-12:30PM</td>
            <td>Chestnut Ridge Middle School,<br></br> NY-45, Chestnut Ridge, NY</td>
          </tr>

        </tbody>
      </Table>
        </div>
    );
  }
}





export default Events;