import { useState } from 'react';

function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });


    // Test Driven Development (TDD)
    // If these lines are not added then UFT-4 (UserForm.test.js) will be failed
    setEmail("")
    setName("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input value={name} id="name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
