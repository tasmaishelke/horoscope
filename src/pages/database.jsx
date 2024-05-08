import {  useState } from 'react';
import { database } from './firebaseConfig'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';


function Database() {
    const [data, setData] = useState(
    {
        name: '',
        gender : ''
    })
    const handleInputs = (event) => 
    {
        let inputs = { [event.target.name]: event.target.value }
        setData({ ...data, ...inputs })
    }
    const collectionRef = collection(database, "users")

    const handleSubmit = () =>
    {
        addDoc(collectionRef, 
            {
                city : data.name,  
                nationality : data.gender        
            })           
    }

    const getData = () => {
        getDocs(collectionRef)
        .then((res) => {
            console.log(res.docs.map((item) => 
            {
                return {...item.data(), id : item.id};
            }));
        })
    }

    const updateData = () => 
    {
        const docToUpdate = doc(database, "users", 'S685W2XTJuHs8AtnsUbt')
        updateDoc(docToUpdate,
            {
                city : 'london',
                nationality : 'UK'
            })
        .then(()=>
        {
            console.log('data updated')
        })
        .catch((err)=>
        {
            console.log(err.message)
        })
    }

    const deleteData = () => 
    {
        const docToDelete = doc(database, "users", 'lMavWeaj61ckSmk0BYpU')
        deleteDoc(docToDelete,
            {
                city : 'london',
                nationality : 'UK'
            })
        .then(()=>
        {
            console.log(' deleteData')
        })
        .catch((err)=>
        {
            console.log(err.message)
        })
    }

  return (
    <div className="App-header">
      <input
        placeholder="City"
        name="city"
        type="text"
        className="input-fields"
        onChange={event => handleInputs(event)}
      />

      <input
        placeholder="nationality"
        name="nationality"
        type="text"
        className="input-fields"
        onChange={event => handleInputs(event)}
      />
     

      <button onClick={handleSubmit}>Enter data</button>
      <button onClick={getData}>get data</button>
      <button onClick={updateData}>update data</button>
      <button onClick={deleteData}>delete data</button>



    </div>
  );
}

export default Database;