function generateAdNetworkBlocks(currentSheet, ni, rowOffset){
  let adNetworkData = addNetworkBlockData[ni], offsetCounter=0;

  for(let irow=0; irow < adNetworkData.length ; irow++){
    for(let icol=0; icol < adNetworkData[irow].length; icol++){
      if(adNetworkData[irow][icol] == "checkbox"){
        insertCheckbox(currentSheet.getRange((rowOffset + irow),(icol+1)));
      }else if(irow == 0){
        currentSheet.getRange((rowOffset + irow),(icol+1)).setValue(adNetworkData[irow][icol]).setFontWeight("bold");
      }else if(adNetworkData[irow][icol].indexOf("|") != -1){
        insertHyperlink(currentSheet.getRange((rowOffset + irow),(icol+1)),adNetworkData[irow][icol]);
      }else{
        currentSheet.getRange((rowOffset + irow),(icol+1)).setValue(adNetworkData[irow][icol]).setWrap(true);
      }
    }
    offsetCounter = irow;
  }
  return rowOffset + offsetCounter;
}
