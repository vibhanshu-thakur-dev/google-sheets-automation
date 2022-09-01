const targetSheets = {
  clientSection: "Client Section",
  internalChecklist: "Internal Checklist"
  };



const internalChecklistMmpTableData = {
  header: [
    [
      "Name",
      "Metrics notes",
      "Extraction method",
      "Auth method",
      "Networks",
      "Documentation",
      "Status"
    ]
  ],
  body:{
  Appsflyer:{
    body: [
      [
       "Appsflyer",
       "",
       "",
       "",
       "Facebook, Google, Unity, AppLovin, TikTok, Vungle",
       "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/mmps/fetchAppsFlyerMetrics/",
       "checkbox"
     ]
    ]
  },
  ADJust:{
    body: [
      [
        "ADJust",
        "",
        "",
        "",
        "Facebook, Google, Unity, AppLovin, TikTok, Snapchat, Mintegral",
        "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/mmps/fetchAdjustMetrics/",
        "checkbox"
      ]
    ]
  },
  MWM:{
    body: [
      [
        "MWM",
        "",
        "Uploaded via Replai API",
        "",
        "",
        "Documentation|https://replai.postman.co/workspace/Network-Integrations~23c4619b-5704-462f-a644-a92a254b51cd/documentation/18521041-09723a10-58e9-4fa9-b029-1426ed1ce7b9",
        "checkbox"
      ]
    ]
  },
  Yoke: {
    body: [
      [
        "Yoke",
        "",
        "",
        "",
        "",
        "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/mmps/fetchYokeMetrics/",
        "checkbox"
      ]
    ]
  }
}
}

const internalChecklistAdnetworksTableData = {
  header: [
    [
      "Name",
      "Metrics notes",
      "Extraction method",
      "Auth method",
      "Documentation",
      "Status"
    ]
  ],
  body:{
  facebook:{
    body: [
      [
       "Facebook",
       "Includes: page likes",
       "",
       "",
       "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/adNetworks/fetchFacebookMetrics/",
       "checkbox"
     ]
    ]
  },
  google:{
    body: [
      [
        "Google",
        "",
        "",
        "",
        "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/adNetworks/fetchGoogleMetrics/",
        "checkbox"
      ]
    ]
  },
  mintegral:{
    body: [
      [
        "Mintegral",
        "Excludes: CPP D7, ROAS D7, Earning, Earnings D7, Purchases, Purchases D7",
        "",
        "",
        "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/adNetworks/fetchMintegralMetrics/",
        "checkbox"
      ]
    ]
  },
  vungle: {
    body: [
      [
        "Vungle",
        "Excludes: CPP D7, ROAS D7, Earning, Earnings D7, Purchases, Purchases D7",
        "",
        "",
        "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/adNetworks/fetchVungleMetrics/",
        "checkbox"
      ]
    ]
  },
  applovin:{
      body: [
      [
        "AppLovin",
        "Excludes: ROAS D7, Earning, Earnings D7",
        "",
        "",
        "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/adNetworks/fetchAppLovinMetrics/",
        "checkbox"
      ]
    ]
  },
  ironSource:{
    body:[
      [
          "IronSource",
          "Excludes: CPP D7, Earning, Purchases, Purchases D7",
          "",
          "",
          "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/adNetworks/fetchIronSourceMetrics/",
          "checkbox"
        ]
      ]
  },
  unity:{
    body:[
      [
        "Unity",
        "Excludes: CPP D7, ROAS D7, Earning, Earnings D7, Purchases, Purchases D7",
        "",
        "",
        "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/adNetworks/fetchUnityMetrics/",
        "checkbox"
      ]
    ]
  },
  snapchat:{
    body:[
      [
        "Snapchat",
        "",
        "",
        "",
        "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/adNetworks/fetchSnapChatMetrics/",
        "checkbox"
      ]
    ]
  },
  tiktok:{
    body: [
      [
        "TikTok",
        "",
        "",
        "",
        "Code|https://bitbucket.org/replai/replai-core-integrations/src/master/stacks/connectors/src/adNetworks/fetchTikTokMetrics/",
        "checkbox"
      ]
    ]
  }
}
}

const addNetworkBlockData = {
  facebook:[
      ["Facebook"],
      [
       "Steps Guide|https://drive.google.com/file/d/1tt6pH4LpUMpcbq0VIsKtjNJ7eJcNoaEu/view",
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
  ],
  google:[
    ["Google"],
    [
      "Steps Guide|https://drive.google.com/file/d/16_fFSQvcCIT6p9kIIQDiUpqF1Ifl64y5/view",
      "Name",
      "Email Address",
      "Google Account IDs",
      "Format for Submitting Google Account IDs \n Title: \n Account ID 1 \nAccount ID 2"
    ]
  ],
  mintegral:[
    ["Mintegral"],
    [
      "Steps Guide|https://drive.google.com/file/d/1_cRw7jROuPIhcalATnTLEBhBAAH-_tW-/view",
      "Name",
      "Email Address",
      "Access Key",
      "API Key"
    ]
  ],
  vungle:[
    ["Vungle"],
    [
      "Steps Guide|https://drive.google.com/file/d/1Vi9TqcwnBJl-ovTFH6tvnelU4XMkm7kn/view",
      "Name",
      "Email Address",
      "Reporting API Key",
      "Email Used for Vungle (vungle+[yourcompany]@replai.io)"
    ]
  ],
  applovin:[
    ["Applovin"],
    [
      "Steps Guide|https://docs.google.com/forms/d/e/1FAIpQLSea5zbpNDXxitLCnAq9COck5N_XroHgXWlC8lZECdVldQHHdg/viewform",
      "Name",
      "Email Address",
      "Reporting Key",
      "Client ID",
      "Client Secret"
    ]
  ],
  ironSource:[
    ["Iron Source"],
    [
      "Steps Guide",
      "Name",
      "Email Address"
    ]
  ],
  unity:[
    ["Unity"],
    [
      "Steps Guide|https://drive.google.com/file/d/12uT_xMNZ5Rsfdp6carpfZYTMEgovENP0/view",
      "Name",
      "Email Address",
      "Have you followed the steps in the guide ?"
    ],
    [
      "",
      "",
      "",
      "checkbox"
    ]
  ],
  snapchat:[
    ["Snapchat"],
    [
      "Steps Guide|https://drive.google.com/file/d/1gj6Et-skaxvk-zxxFxVxjKpjhtb9SAOg/view",
      "Name",
      "Email Address",
      "Have you invited Replai as a member?",
      "Have you shared the ad accounts for the titles to be integrated?",
      "Have you added Replai as Campaign Manager?"
    ],
    [
      "",
      "",
      "",
      "checkbox",
      "checkbox",
      "checkbox"
    ]
  ],
  tiktok:[
    ["Tiktok"],
    [
      "Book a meeting",
      "Name",
      "Email Address",
    ]
  ]
};

const customTagsTableData = {
  header: [
    [
      "Confirmed?",	
      "Unique/Multi Entry",
      "Tag Category",
      "Category Description",
      "Tags",
      "Value Description",
      "Visual Reference"
    ]
  ],
  body:[
    [
      "checkbox",
      "dropdown",
      "",
      "",
      "",
      "",
      ""
    ],
    ["","","","","","","" ],
    ["","","","","","","" ],
    ["","","","","","","" ]
  ]
}


const titleTableData = {
  header: [
    [
      "Name of the title",	
      "AdNetworks",
      "Comments"
    ]
  ],
  body:[
    ["","",""]
  ]
}
