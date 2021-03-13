import classes from "./Tags.module.scss";
import Tag from "../Tag/Tag";

const tags = [
  {
    id: "pay",
    text: "Платеж"
  },
  {
    id: "time",
    text: "Срок"
  },
]

const Tags = () => {
  return (
    <div className={classes.Tags}>
      <span>Что уменьшаем?</span>
      {tags.map((item) => <Tag key={item.id} tag={item}/>)}
    </div>
  )
}

export default Tags;
