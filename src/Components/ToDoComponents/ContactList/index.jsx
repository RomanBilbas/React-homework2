import { connect } from 'react-redux'
import { deleteExetcive, updateExerciveL } from '../../store/slices/AppSlices'
import styles from '../ContactList/contactList.module.css'

function ContactsList ({ exercise, deleteExerciveById, updateExerciseById }) {
  const changeIsFavorite = (id, checked) => {
    updateExerciseById(id, { isFavorite: checked })
  }
  // Фильтруем только те элементы, у которых есть значение fullName
  const filteredExercises = exercise.filter(e => e.fullName)

  // Создаем новый массив, содержащий только имена
  const names = filteredExercises.map(e => ({ fullName: e.fullName, id: e.id }))

  return (
    <ul className={styles.contactsList}>
      {names.map(({ id, fullName }) => (
        <li key={id} className={styles.contactItem}>
          <label className={styles.contactItem}>
            <input
              type='checkbox'
              checked={
                filteredExercises.find(e => e.id === id)?.isFavorite || false
              }
              onChange={({ target: { checked } }) => {
                changeIsFavorite(id, checked)
              }}
            />
            {fullName}
          </label>
          <button
            className={styles.deleteButton}
            onClick={() => {
              deleteExerciveById(id)
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}
const mapStateToProps = ({ exerciveList }) => exerciveList

const mapDispatchToProps = dispatch => ({
  deleteExerciveById: id => {
    dispatch(deleteExetcive(id))
  },
  updateExerciseById: (id, data) => {
    dispatch(updateExerciveL({ id, data }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)
