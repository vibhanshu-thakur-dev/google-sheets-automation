function insertMmpTable(currentSheet, rowOffset){
  currentSheet.getRange(rowOffset,1).setValue("MMP").setBackground("lightgreen").setFontWeight("bold").setWrap(true);
  rowOffset = insertTableHeader(currentSheet,rowOffset +1 ,internalChecklistMmpTableData);
  if(finalData.mmp)
  for(item in internalChecklistMmpTableData.body){
    if(item == finalData.mmp){
      insertTableBody(currentSheet,rowOffset,internalChecklistMmpTableData.body[item])
      rowOffset++;
    }
  }
  return rowOffset;
}

function insertAdNetworksTable(currentSheet, rowOffset){
  //internalChecklistAdnetworksTableData
  currentSheet.getRange(rowOffset,1).setValue("Ad Networks").setBackground("lightgreen").setFontWeight("bold").setWrap(true);
  rowOffset = insertTableHeader(currentSheet,rowOffset +1 ,internalChecklistAdnetworksTableData);
  for(item in finalData.networkIntegration){
    if(finalData.networkIntegration[item] == true){
    insertTableBody(currentSheet,rowOffset,internalChecklistAdnetworksTableData.body[item])
    rowOffset++;
    }
  }
  return rowOffset;
}


function insertTitleTable(currentSheet,rowOffset){
  currentSheet.getRange(rowOffset,1).setValue("Titles").setBackground("lightgreen").setFontWeight("bold").setWrap(true);
  rowOffset = insertTableHeader(currentSheet,rowOffset +1 ,titleTableData);
  for(let i=0; i<finalData.basicInformation.numberOfTitles; i++){
    insertTableBody(currentSheet,rowOffset,titleTableData)
    rowOffset++;
  }
  return rowOffset;
}

function insertCustomTagsTable(currentSheet,rowOffset){
  currentSheet.getRange(rowOffset,1).setValue("Custom Tags").setBackground("lightgreen").setFontWeight("bold").setWrap(true);
  rowOffset = insertTableHeader(currentSheet,rowOffset + 1,customTagsTableData);
  for(let i=0; i<finalData.basicInformation.numberOfCustomTags; i++){
    insertTableBody(currentSheet,rowOffset,customTagsTableData)
    rowOffset+=4;
  }
  return rowOffset;
}

function insertTableHeader(currentSheet,rowOffset,tableData){
    
    for(let irow=0; irow < tableData.header.length ; irow++){
            for(let icol=0; icol < tableData.header[irow].length; icol++){
                currentSheet.getRange((rowOffset + irow),(icol+1)).setValue(tableData.header[irow][icol]).setBackground("grey").setFontWeight("bold").setWrap(true);
            }
            rowOffset++;
        }
      return rowOffset;
}

function insertTableBody(currentSheet, rowOffset,tableData){
  for(let irow=0; irow < tableData.body.length ; irow++){
        for(let icol=0; icol < tableData.body[irow].length; icol++){
          if(tableData.body[irow][icol] == "checkbox"){
            insertCheckbox(currentSheet.getRange((rowOffset + irow),(icol+1)));
          }else{
            currentSheet.getRange((rowOffset + irow),(icol+1)).setValue(tableData.body[irow][icol]).setBackground(irow%2==0?"lightblue":"lightgrey").setWrap(true);
          }
        }
    }
}
