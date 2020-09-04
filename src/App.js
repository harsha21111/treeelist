import React, { useState } from "react";
import { TreeList, ColumnChooser, Selection } from "devextreme-react/tree-list";
import { parsedData } from "./data3.js";

import { defaultHiddenColumnNames } from "./columnHiding.js";
import { SelectBox } from "devextreme-react/select-box";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.dropDownValues = ["data3", "data4"];

    this.state = {
      lineItemDescription: "",
      rowSeq: "",
      selectedRowKeys: [],
      selectedDropDownValue: this.dropDownValues[0],
      parsedDataNew: parsedData,
      apiResponse: "",
    };

    this.onFocusedRowChanged = this.onFocusedRowChanged.bind(this);
    this.onSelectionChanged = this.onSelectionChanged.bind(this);

    this.dropDownChanged = this.dropDownChanged.bind(this);
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  async dropDownChanged(e) {
    if (e.value === "data3") {
      this.setState({
        parsedDataNew: await (await import("./data3")).parsedData,
      });
    } else if (e.value === "data4") {
      this.setState({
        parsedDataNew: await (await import("./data4")).parsedData,
      });
    }
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
        <div className="searchbox">
          SearchBox
          <SelectBox
            width={300}
            items={this.dropDownValues}
            onValueChanged={this.dropDownChanged}
          />
        </div>
        <TreeList
          id="treeListParsedData"
          dataSource={this.state.parsedDataNew}
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
          <div className="checkbox-info">
            <div id="rowSeq">{this.state.selectedRowKeys}</div>
          </div>
        </div>
        <div>
          <p className="App-intro">{this.state.apiResponse}</p>
        </div>
      </div>
    );
  }
}

export default App;
