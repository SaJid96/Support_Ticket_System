import { useState } from 'react';
import { useSelector } from 'react-redux';

const NewTicket = () => {
  const { user } = useSelector((state) => state.auth);

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState('iPhone');
  const [description, setDescription] = useState('');

  const onSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input type="text" value={name} disabled className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Customer Email</label>
          <input type="text" value={email} disabled className="form-control" />
        </div>
       
      </section>
    </>
  );
};

export default NewTicket;
