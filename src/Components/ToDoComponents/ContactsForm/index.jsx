import { ErrorMessage, Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { TODO_VALIDATION_SCHEMA } from '../../../utils/validationSchema'
import { createExective } from '../../store/slices/AppSlices'

function ContactsForm ({ createNewExercise }) {
  const initialValues = {
    fullName: ''
  }
  const submitHandler = (value, { resetForm }) => {
    createNewExercise(value)
    resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          Exercise:
          <Field
            name='fullName'
            type='text'
            placeholder='task for the near future'
            autoFocus
          />
          <ErrorMessage name='fullName' component='div' />
        </label>
        <button type='submit'>add</button>
      </Form>
    </Formik>
  )
}

const mapDispatchToProps = dispatch => ({
  createNewExercise: data => dispatch(createExective(data))
})

export default connect(null, mapDispatchToProps)(ContactsForm)
