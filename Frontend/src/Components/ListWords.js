import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Styles.css';

function ListUser(props) {

    const [seartchWord, setseartchWord] = useState('');
    // const [Data, setData] = useState([]);
    const [Word, setWord] = useState('');

    useEffect(() => {
        getUserList()
    }, [])

    const getUserList = () => {
        axios.get('http://localhost:8001/Word/getWords')
            .then((response) => {
                setWord(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const handleSearch = (event) => {
        switch (event.target.name) {
            case 'Search':
                setseartchWord(event.target.value);
                break;
            default:
                break;
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let app_id = "id";
        let app_key = "key";
        let passData = {
            app_id: app_id,
            app_key: app_key
        }
        axios({
            method: "post",
            url: 'http://localhost:8001/Word/addWords',
            data: passData,

            // headers: { "Content-Type": "multipart/form-data" },
        }).then((response) => {
            setWord(response.data)
        })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='container'>
           
            <section>
                <div >
                    <form onSubmit={handleSubmit}>
                    
                        <div className="SearchBar" >
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter Words"
                                name="Search"
                                value={seartchWord}
                                onChange={handleSearch}
                            />
                        </div>
                        <div className='form-group' >
                            <Button block size="lg"
                                className="btn btn-success btn-lg float-left"
                                type='submit' >Submit</Button> </div>
                    </form>
                </div>
                <div className='col-sm-12 center'>
                <h3>List of Words</h3>
            </div>

            </section>

            <div style={{ margin: '10 auto', marginTop: '10%' }}>
                <Table hover bordered striped responsive size="sm">

                    <thead>
                        <tr>
                            <th>#</th>
                            
                            {/* <th></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Word && Word.length > 0 && Word.map((item, i) => {

                                return (
                                    <tr key={i}>
                                        <td>{item.app_id}</td>
                                        <td>{item.app_key}</td>                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                   
                </Table>
            </div>
         
            </div>
    
    )

}
export default ListUser;