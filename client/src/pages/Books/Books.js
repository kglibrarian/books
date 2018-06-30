import React, { Component } from 'react';
import API from "../../utils/API"; 
import {ListItem} from "./../../../components/List";
import DeleteBtn from "./../../../components/DeleteBtn"


class Books extends Component {
    state = {
        books: [],
    };

    //lifecycles
    componentDidMount(){
        this.loadBooks();
    }

    //my methods
    loadBooks = () => {
        //set books array to some books from mongo
        API.getBooks()
        .then(res =>
        this.setState({books: res.data})
        )
        .catch(err => console.log(err));
    }


    render(){
        return(
            <div>
                <p> This is a list of books </p>
                <ListItem id="{book.id}"> {book.title}</ListItem>
                <DeleteBtn className="badClass" onClick={() => this.deleteBook(book._id)}/>
                {this.state.books.map(book =>(
                    <div>{book.title}</div>
                ))}
                </div>
        )
    }
}

export default Books;