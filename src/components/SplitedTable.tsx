import Table from "./Table"
const titles = [
    "Balance",
    'Currency',
]
const data = [
    [   
        0,
        "dinar",
    ],
    [   
        0,
        "dinar",
    ],
    [   
        0,
        "dinar",
    ],
    [   
        0,
        "dinar",
    ],
    [   
        0,
        "dinar",
    ],
   
]
const SplitedTable = () => {
  return (
    <div style={{display:"flex", alignItems:"center"}} className="">
        <Table titles={titles} data={data} borderR />
        <Table titles={titles} data={data} />
    </div>
  )
}

export default SplitedTable