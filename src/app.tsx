import * as React from 'react';

interface IUser {
    FName:string;
    LName:string;
}

export default class App extends React.Component<IUser>{
   public render(){
        return(
            <h5>My name is: {this.props.FName} {this.props.LName}</h5>
        )
    }
}
