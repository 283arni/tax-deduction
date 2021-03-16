import classes from "./Tags.module.scss";
import Tag from "../Tag/Tag";
import {tags} from "../../data";


const Tags = () => {
  return (
    <div className={classes.Tags}>
      <span>Что уменьшаем?</span>
      {tags.map((item) => <Tag key={item.id} tag={item}/>)}
    </div>
  )
}

export default Tags;
