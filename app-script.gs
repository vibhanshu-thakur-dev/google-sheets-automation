const targetSheets = {
  clientSection: "Client Section",
  onboarding: "Onboarding"
  };

const fbData = [
      [
       "Steps Guide",
       "Name",
       "Email Address",
       "Ad Account Access",
       "Access to Associated Pages",
       "Access to Business Creative Folder(If Using)"
     ],
     [
       "",
       "",
       "",
       "checkbox",
       "checkbox",
       "checkbox",
     ]
  ]

var finalData = {}

function generateIntegrationPlan() {
  let activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  let currentSheet = activeSpreadSheet.getSheetByName("Input");
  finalData = captureInputSheetData(currentSheet);
  console.log(finalData);

  
 
  let clientSectionSheet = generateSheets(activeSpreadSheet,targetSheets.clientSection);

  generateFacebookAdnetwork(clientSectionSheet);

  //clientSectionSheet.
  
 // activeSpreadSheet.getActiveSheet()
  //activeSpreadSheet.insertSheet("destination");
  // let newSheet = createNewSheet(activeSpreadSheet,'destination');

  //console.log(captureInputSheetData(activeSpreadSheet));


/*
    let rangeList = activeSpreadSheet.getActiveSheet().getRangeList(['A2:A4']);
    
    let rangeListValues = rangeList.getRanges()[0].getValues(); 
    for(item of rangeListValues){
      activeSpreadSheet.insertSheet(item.toString());
      console.log(typeof(item.toString()));
    }

/*    var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
    var value = cell.getValue();
    var currentSheet = SpreadsheetApp.getActiveSheet()    
    console.log(value);
    //let newSheet = SpreadsheetApp.create("Integration Final Plan");
    cell.setValue(SpreadsheetApp.getActiveSheet().getName());
*/
}

/**
 * Function to capture all data from input sheet
 * 
 * @activeSpreadSheet : current spread sheet
 * 
 * @returns: JSON object with all input data
 */
function captureInputSheetData(currentSheet){
  //let currentSheet = activeSpreadSheet.getSheetByName("Input");
  //finalData.clientsTeam.keyDescisionMaker.name = currentSheet.getRange(3, 2).getValue()
  //console.log(currentSheet.getRange(3, 2).getValue())
  return finalData = {
    clientsTeam: {
      keyDescisionMaker:{
        name: currentSheet.getRange(3, 2).getValue(),
        emailAddress: currentSheet.getRange(3, 3).getValue(),
        behaviour:currentSheet.getRange(3, 4).getValue()
      },
      uaTeam:{
        name: currentSheet.getRange(4, 2).getValue(),
        emailAddress: currentSheet.getRange(4, 3).getValue(),
        behaviour:currentSheet.getRange(4, 4).getValue()
      },
      creativeTeam:{
        name: currentSheet.getRange(5, 2).getValue(),
        emailAddress: currentSheet.getRange(5, 3).getValue(),
        behaviour:currentSheet.getRange(5, 4).getValue()
      },
      champian:{
        name: currentSheet.getRange(6, 2).getValue(),
        emailAddress: currentSheet.getRange(6, 3).getValue(),
        behaviour:currentSheet.getRange(6, 4).getValue()
      },
      integrationContact:{
        name: currentSheet.getRange(7, 2).getValue(),
        emailAddress: currentSheet.getRange(7, 3).getValue(),
        behaviour:currentSheet.getRange(7, 4).getValue()
      },
      signatory:{
        name: currentSheet.getRange(8, 2).getValue(),
        emailAddress: currentSheet.getRange(8, 3).getValue(),
        behaviour:currentSheet.getRange(8, 4).getValue()
      },
      influencers:{
        name: currentSheet.getRange(9, 2).getValue(),
        emailAddress: currentSheet.getRange(9, 3).getValue(),
        behaviour:currentSheet.getRange(9, 4).getValue()
      },
      legal:{
        name: currentSheet.getRange(10, 2).getValue(),
        emailAddress: currentSheet.getRange(10, 3).getValue(),
        behaviour:currentSheet.getRange(10, 4).getValue()
      }
    },
    replaisTeam:{
      accountManager:{
        name: currentSheet.getRange(15, 2).getValue(),
        emailAddress: currentSheet.getRange(15, 3).getValue()
      },
      customerSuccessManager:{
        name: currentSheet.getRange(16, 2).getValue(),
        emailAddress: currentSheet.getRange(16, 3).getValue()
      },
      integrationSpecialist:{
        name: currentSheet.getRange(17, 2).getValue(),
        emailAddress: currentSheet.getRange(17, 3).getValue()
      }
    },
    basicInformation:{
      industry:currentSheet.getRange(22, 2).getValue(),
      numberOfNetworks:currentSheet.getRange(23, 2).getValue(),
      importantKPIs:currentSheet.getRange(24, 2).getValue(),
      numberOfCustomTags:currentSheet.getRange(25, 2).getValue(),
      numberOfTitles:currentSheet.getRange(26, 2).getValue()
    },
    networkIntegration:{
      facebook: currentSheet.getRange(33, 4).getValue(),
      google:currentSheet.getRange(34, 4).getValue(),
      mintegral:currentSheet.getRange(35, 4).getValue(),
      applovin:currentSheet.getRange(36, 4).getValue(),
      ironSource:currentSheet.getRange(37, 4).getValue(),
      unity:currentSheet.getRange(38, 4).getValue(),
      snapchat:currentSheet.getRange(39, 4).getValue(),
      vungle:currentSheet.getRange(40, 4).getValue()
    },
    mmp:currentSheet.getRange(43, 4).getValue(),
    commercials:{
      priceAndDiscounts:currentSheet.getRange(50,4).getValue(),
      contractLengthAndBreakClauseDetails:currentSheet.getRange(51,4).getValue(),
      timelines:currentSheet.getRange(52,4).getValue(),
      numberAndNameOfTitles:currentSheet.getRange(53,4).getValue(),
      numberOfNetworks:currentSheet.getRange(54,4).getValue(),
      mmpUsed:currentSheet.getRange(55,4).getValue(),
      numberOfTags:currentSheet.getRange(56,4).getValue(),
      addonsIncluded:currentSheet.getRange(57,4).getValue(),
      customWorkIncluded:currentSheet.getRange(58,4).getValue(),
      paymentTerms:currentSheet.getRange(59,4).getValue()
    },
    currentCreativeProcess:{
      breakdownOfTeamsAndCollaborations:[
        {
          name:currentSheet.getRange(66, 3).getValue(),
          title:currentSheet.getRange(66, 4).getValue(),
          email:currentSheet.getRange(66, 5).getValue(),
          focusArea:currentSheet.getRange(66, 6).getValue()
        },
        {
          name:currentSheet.getRange(67, 3).getValue(),
          title:currentSheet.getRange(67, 4).getValue(),
          email:currentSheet.getRange(67, 5).getValue(),
          focusArea:currentSheet.getRange(67, 6).getValue()
        },
        {
          name:currentSheet.getRange(68, 3).getValue(),
          title:currentSheet.getRange(68, 4).getValue(),
          email:currentSheet.getRange(68, 5).getValue(),
          focusArea:currentSheet.getRange(68, 6).getValue()
        }
      ],
      areAgneciesInvolved:currentSheet.getRange(69, 4).getValue(),
      currentCreativeAnalysisProcess:currentSheet.getRange(70, 4).getValue(),
      toolsUsed:currentSheet.getRange(71, 4).getValue(),
      doTheyCurrentlyTagCreatives:currentSheet.getRange(72, 4).getValue(),
      frequencyOfProductionCycle:currentSheet.getRange(73, 4).getValue(),
      networksForTesting:currentSheet.getRange(74, 4).getValue(),
      currentChallengesAndImprovementAreas:currentSheet.getRange(75, 4).getValue()
    },
    importantKPIs:{
      ipm: currentSheet.getRange(81, 4).getValue(),
      ctr:currentSheet.getRange(82, 4).getValue(),
      cpi:currentSheet.getRange(83, 4).getValue(),
      cti:currentSheet.getRange(84, 4).getValue(),
      roas:currentSheet.getRange(85, 4).getValue(),
      other:currentSheet.getRange(86, 4).getValue(),
      othersDetails:currentSheet.getRange(88, 4).getValue()
    }
  };
 
}


function generateSheets(currentSpreadSheet,sheetName){
  return currentSpreadSheet.insertSheet(sheetName);
}

function generateFacebookAdnetwork(currentSheet){
  //currentSheet.getRange(4,4).setValue(fbData.row1[0]);

  let parentRow = 3;
  for(let irow=0; i < fbData.length ; irow++){
    for(let icol=0; icol < fbData[irow].length; icol++){
      currentSheet.getRange((parentRow + irow),icol).setValue(fbData[irow][icol]);
    }
  }
}
