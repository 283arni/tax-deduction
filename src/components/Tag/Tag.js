
const Tag = ({tag}) => {
  return (
    <>
      <input type="radio" name="tag" id={tag.id}/>
      <label htmlFor={tag.id}>{tag.text}</label>
    </>
  )
}

export default Tag;
