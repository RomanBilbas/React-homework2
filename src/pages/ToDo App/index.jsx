import React from 'react'
import ContactsList from '../../Components/ToDoComponents/ContactList'
import ContactsForm from '../../Components/ToDoComponents/ContactsForm'

function ToDoApp () {
  return (
    <>
      <h2>Contacts</h2>
      <ContactsForm />
      <ContactsList />
    </>
  )
}

export default ToDoApp
