
type tableProps = {
    rounded? : boolean,
    titles : string[],
    data : React.ReactNode[][],
    borderR? : boolean
}

const Table = ({rounded,titles,data,borderR}:tableProps) => {
  return (
        <table style={{borderRight:borderR?"1px solid #D9D9D9" : ""}}>
        <thead className={rounded ?'rounded' : ""}>
            <tr>
                {
                    titles.map(title => <th key={title}>{title}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                data.map((row,index)=>{

                    return (
                        <tr key={index}>
                            {
                                row.map((d,i)=><td key={i}>{d}</td>)
                            }
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
  );
};

export default Table;
