import React, { useState } from "react";
import { TreeList, ColumnChooser, Selection } from "devextreme-react/tree-list";
import { parsedData } from "./data3.js";
import { defaultHiddenColumnNames } from "./columnHiding.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lineItemDescription: "",
      rowSeq: "",
      selectedRowKeys: [],
    };
    this.onFocusedRowChanged = this.onFocusedRowChanged.bind(this);
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
  }

  customizeColumns = (columns) => {
    defaultHiddenColumnNames.forEach((colNameToHide) => {
      columns.forEach((col) => {
        if (col.dataField === colNameToHide) {
          col.visible = false;
        }
      });
    });
  };

  onFocusedRowChanged(e) {
    var rowData = e.row && e.row.data;

    if (rowData) {
      this.setState({
        lineItemDescription: rowData.lineItemDescription,
        rowSeq: e.row.data.rowSeq,
      });
    }
  }

  onSelectionChanged(e) {
    this.setState({
      selectedRowKeys: e.selectedRowKeys,
    });
  }

  render() {
    const { selectedRowKeys } = this.state;
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
          customizeColumns={this.customizeColumns}
          selectedRowKeys={selectedRowKeys}
          onSelectionChanged={this.onSelectionChanged}
        >
          <Selection recursive={false} mode="multiple" />
          <ColumnChooser enabled={true} mode="select" />
          <Selection mode="multiple" />
        </TreeList>

        <div className="tree-list-info">
          <div className="info">
            <div id="lineItemDescription">{this.state.lineItemDescription}</div>
            <div id="rowSeq">{this.state.rowSeq}</div>
          </div>
          <div classname="checkbox-info">
            <div id="rowSeq">{this.state.selectedRowKeys}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
