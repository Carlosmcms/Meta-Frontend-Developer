const ToDo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input type='text' />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
)

export default ToDo
