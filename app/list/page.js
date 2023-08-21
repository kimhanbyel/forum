import { client } from "/util/database"

export default async function List() {
  const db = await client.db("forum");
  let result = await db.collection('post').find().toArray();

  // console.log(result);
  return(
    <div className="list-bg">
      <h3>글 목록</h3>
      {result.map(post=><ListItem {...post}/>)}
    </div>
  )
}

function ListItem({title, content}){
  return(
    <div className="list-item">
      <h4>{title}</h4>
      {content}
    </div>
  )
}