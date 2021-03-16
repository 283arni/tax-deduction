
const Tag = ({tag}) => {
  return (
    <>
      <input type="radio" name="tag" id={tag.id}/>
      <label htmlFor={tag.id} tabIndex={0}>{tag.text}</label>
    </>
  )
}

export default Tag;
