var finalData ={}
/**
 * Main function triggered by button in the sheet
 */
 function generateIntegrationPlan() {
  let activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  let currentSheet = activeSpreadSheet.getSheetByName("Input");
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Input").getActiveRange().
  //capture all data from input sheet
  finalData = captureInputSheetData(currentSheet);
  console.log(finalData);
  let rowOffsetClientSection = 3, rowOffsetInternalChecklist = 1;
  //create new sheet for client section
  let clientSectionSheet = generateSheets(activeSpreadSheet,targetSheets.clientSection);
  //create Internal checklist sheet
  let internalChecklistSheet = generateSheets(activeSpreadSheet,targetSheets.internalChecklist);
  
  
 
  //add block header
  clientSectionSheet.getRange(1,1).setValue("Ad Networks").setFontWeight("bold");
  //add ad network data
  for(ni in finalData.networkIntegration){
    if(finalData.networkIntegration[ni] == true){
      rowOffsetClientSection = generateAdNetworkBlocks(clientSectionSheet, ni, rowOffsetClientSection);
      rowOffsetClientSection+= 5;
      //insert ad networks table
      
    }else{
      //do nothing. Skip for now
    }
  }
  if(finalData.basicInformation.numberOfCustomTags && finalData.basicInformation.numberOfCustomTags >0)
    rowOffsetClientSection = insertCustomTagsTable(clientSectionSheet,rowOffsetClientSection);
  rowOffsetClientSection+=3;
  if(finalData.basicInformation.numberOfTitles && finalData.basicInformation.numberOfTitles > 0)
    rowOffsetClientSection = insertTitleTable(clientSectionSheet,rowOffsetClientSection)

  
  rowOffsetInternalChecklist = insertInternalCheckListHeadersOne(internalChecklistSheet,rowOffsetInternalChecklist,finalData);
  rowOffsetInternalChecklist = insertAdNetworksTable(internalChecklistSheet, rowOffsetInternalChecklist);
  rowOffsetInternalChecklist = insertMmpTable(internalChecklistSheet, rowOffsetInternalChecklist);
  //internalChecklistMmpTableData

  
  
}

function insertInternalCheckListHeadersOne(clientSheet, rowOffset, finalData){
  insertHyperlink(clientSheet.getRange(rowOffset,1),"Integration|https://replai.atlassian.net/wiki/spaces/RPL/pages/2167242938/Integrations+Overview");
  clientSheet.getRange(rowOffset+1,1).setValue("Owned By").setFontWeight("bold");
  clientSheet.getRange(rowOffset+1,2).setValue("Email Address").setFontWeight("bold");
  clientSheet.getRange(rowOffset+2,1).setValue(finalData.replaisTeam.integrationSpecialist.name);
  clientSheet.getRange(rowOffset+2,2).setValue(finalData.replaisTeam.integrationSpecialist.emailAddress);
  return rowOffset + 4;
}
