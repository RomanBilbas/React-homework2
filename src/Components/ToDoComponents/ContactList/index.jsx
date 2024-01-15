import { connect } from 'react-redux'
import { deleteExetcive, updateExerciveL } from '../../store/slices/AppSlices'

function ContactsList (exercise, deleteExerciveById, updateExerciseById) {
  const changeIsFavorite = (id, checked) => {
    updateExerciseById(id, { isFavorite: checked })
  }
  return (
    <ul>
      {exercise.map(e => (
        <li key={e.id}>
          <label>
            <input
              type='checkbox'
              checked={e.isFavorite}
              onChange={({ target: { checked } }) => {
                changeIsFavorite(e.id, checked)
              }}
            />
            {JSON.stringify(e)}
          </label>
          <button
            onClick={() => {
              deleteExerciveById(e.id)
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}
const mapStateToProps = ({ exerciveList }) => ({
  exercise: Array.isArray(exerciveList.exercise) ? exerciveList.exercise : []
})
const mapDispatchToProps = dispatch => ({
  deleteExerciveById: id => {
    dispatch(deleteExetcive(id))
  },
  updateExerciseById: (id, data) => {
    dispatch(updateExerciveL({ id, data }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)
