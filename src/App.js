import React, {useState} from 'react';
import { TreeList,ColumnChooser,Selection,ColumnVisibility } from 'devextreme-react/tree-list';
import { parsedData } from './data3.js';

class App extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    lineItemDescription: '',
    rowSeq: ''
  };
  this.onFocusedRowChanged = this.onFocusedRowChanged.bind(this);
  //this.onTaskIdChanged = this.onTaskIdChanged.bind(this);
}
// onTaskIdChanged(e) {
//   if(e.event && e.value > 0) {
//     this.setState({ focusedRowKey: e.value });
//   }
// }
onFocusedRowChanged(e) {
  var rowData = e.row && e.row.data;

  if(rowData) {
    this.setState({
      lineItemDescription: rowData.lineItemDescription,
      rowSeq: e.row.data.rowSeq
    });
  }
  
}


  render() {
    // const [defaultHiddenColumnNames] = useState(['tag', 'cTag']);
    return (
      <div id="tree-list-parsed-data">
        <TreeList
          id="treeListParsedData"
          dataSource={parsedData}
          showRowLines={true}
          showBorders={true}
          columnAutoWidth={true}          
          keyExpr="rowSeq"
          parentIdExpr="parentRowId" 
          focusedRowEnabled={true}
          onFocusedRowChanged={this.onFocusedRowChanged}
        >    
        {/* <ColumnVisibility
          defaultHiddenColumnNames={defaultHiddenColumnNames}
        /> */}
         <ColumnChooser enabled={true} mode="select" /> 
         <Selection  mode="multiple" />     
        </TreeList>

        <div className="tree-list-info">

          <div className="info">
            <div id="lineItemDescription">{this.state.lineItemDescription}</div>
            <div id="rowSeq">{this.state.rowSeq}</div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
