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
    <div className="flex align-center">
        <div style={{flex:1}}>
            <h4 className="table-title">Fund balances</h4>
            <Table titles={titles} data={data} borderR />
        </div>
        <div style={{flex:1}}>
            <h4 className="table-title">Treasury balances</h4>
            <Table titles={titles} data={data} />
        </div>
    </div>
  )
}

export default SplitedTable