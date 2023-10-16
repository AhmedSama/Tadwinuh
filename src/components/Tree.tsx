import ListItem from "./ListItem"

export type pagesType = {
    name : string,
    isPage : boolean,
    isActive : boolean,
    subPages : pagesType[] | null,
    icon : React.ReactNode,
}
type setPageType = (text:string) => void
const Tree = ({items, setPage,page}:{items:pagesType[] | null,setPage:setPageType,page:string|null}) => {
  return (
    <ul>
        {
            items?.map(item=>{
                if(item.isPage)
                    return <ListItem key={item.name} onClicked={setPage} active={item.isActive} text={item.name} icon={item.icon} />
                else{
                    return (
                        <ListItem key={item.name} active={item.isActive} text={item.name} icon={item.icon}>
                            <Tree page={page} setPage={setPage} items={item.subPages} />
                        </ListItem>
                    )
                }
            })
        }
    </ul>
  )
}

export default Tree