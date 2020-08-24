import React from 'react';
import { TreeList, Editing, Column, RequiredRule, Lookup, Button,ColumnChooser } from 'devextreme-react/tree-list';
import { parsedData } from './data3.js';


class App extends React.Component {
  render() {
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
        >    
         <ColumnChooser enabled={true} mode="select" />      
        </TreeList>
      </div>
    );
  }
}

export default App;
