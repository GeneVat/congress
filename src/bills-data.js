const steps = ['Introduced', 'Passed One House', 'Passed Both', 'To President', 'Signed into Law'];
let bills = [
   {
       bill_id:"H.R. 1361",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1361",   
       title:"To clarify certain regulations to allow for the installation of pulsating light systems for high-mounted stop lamps,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1360",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1360",   
       title:"To require benefit eligibility determinations to be made within a certain period of time.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1359",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1359",   
       title:"To direct the Director of the National Museum of African American History and Culture to conduct a study on Black history education efforts in public elementary and secondary schools,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1358",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1358",   
       title:"To amend title XVIII of the Social Security Act to codify patients rights to hospital visitation,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1357",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1357",   
       title:"To increase the benefits guaranteed in connection with certain pension plans,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1356",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1356",   
       title:"To direct the Secretary of the Interior and the Secretary of Homeland Security,acting through the Administrator of the Federal Emergency Management Agency,to establish a pilot grant program to address damage from mudslides that occur after a wildland fire,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1355",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1355",   
       title:"To amend the Energy Conservation and Production Act to reauthorize the Weatherization Assistance Program,direct the Secretary of Energy to establish a weatherization readiness program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1354",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1354",   
       title:"To amend the Civil Rights Act of 1964 to clarify that disparate impacts on certain populations constitute a sufficient basis for rights of action under such Act,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1353",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1353",   
       title:"To ensure that homicides can be prosecuted under Federal law without regard to the time elapsed between the act or omission that caused the death of the victim and the death itself.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1352",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1352",   
       title:"To designate the General George C. Marshall House,in the Commonwealth of Virginia,as an affiliated area of the National Park System,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1351",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1351",   
       title:"To amend the Elementary and Secondary Education Act of 1965 to require the recitation of the Pledge of Allegiance and the display of the American Flag in certain federally funded elementary and secondary schools,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1350",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1350",   
       title:"To provide for Department of Energy and National Science Foundation research and development coordination,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1349",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1349",   
       title:"To amend title XI of the Social Security Act to exclude providers of certain abortion services from participation in the Medicare program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1348",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1348",   
       title:"To authorize the Secretary of Homeland Security to adjust the status of certain aliens who are nationals of Venezuela to that of aliens lawfully admitted for permanent residence,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1347",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1347",   
       title:"To amend the Internal Revenue Code of 1986 to permanently extend the allowance for depreciation,amortization,or depletion for purposes of determining the income limitation on the deduction for business interest.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1346",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1346",   
       title:"To amend the Clean Air Act with respect to the ethanol waiver for Reid Vapor Pressure under that Act,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1345",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1345",   
       title:"To repeal the Portable Fuel Container Safety Act of 2020 and the Children's Gasoline Burn Prevention Act,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1344",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1344",   
       title:"To amend title 38,United States Code,to expand eligibility for headstones,markers,and burial receptacles under the laws administered by the Secretary of Veterans Affairs to certain individuals who died before November 11,1998.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1343",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1343",   
       title:"To require the Assistant Secretary of Commerce for Communications and Information to submit to Congress a plan for the Assistant Secretary to track the acceptance,processing,and disposal of certain Form 299s,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1342",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1342",   
       title:"To prohibit discrimination based on political affiliation in granting disaster assistance.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1341",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1341",   
       title:"To amend the Water Resources Development Act of 2007 with respect to certain regulatory actions related to hydraulic fracturing within the Susquehanna,Delaware,and Potomac River basins,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1340",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1340",   
       title:"To amend the Internal Revenue Code of 1986 to increase the exclusion of gain from the sale of a principal residence,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1339",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1339",   
       title:"To direct the Comptroller General of the United States to carry out a study relating to the resiliency of Social Security and Medicare.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1338",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1338",   
       title:"To amend the Disaster Recovery Reform Act of 2018 to require the President to automatically waive certain critical document fees for individuals and households affected by major disasters for which assistance is provided under the Individuals and Households Program.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1337",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1337",   
       title:"To add Ireland to the E3 nonimmigrant visa program.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1336",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1336",   
       title:"To direct the Secretary of Veterans Affairs to establish a pilot program to furnish hyperbaric oxygen therapy to a veteran who has a traumatic brain injury or post-traumatic stress disorder.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1335",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1335",   
       title:"To enhance the safety of elementary and secondary schools by requiring emergency response and parental notification procedures and improving the security of interior and exterior doors,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1334",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1334",   
       title:"To permit a single application to be submitted to the COPS Director or BJA Director for the matching grant program for school security.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1333",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1333",   
       title:"To amend the Intermodal Surface Transportation Efficiency Act of 1991 to designate a portion of United States Route 74 in North Carolina as a future interstate,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1332",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1332",   
       title:"To direct the Secretary of Commerce to establish and carry out a program to sequence the genomes of aquatic species.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1331",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1331",   
       title:"To amend the Higher Education Act of 1965 to enhance teacher and school leader quality partnership grants.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1330",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1330",   
       title:"To permit the Smithsonian National Museum of the American Latino to be located within the Reserve of the National Mall,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1329",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1329",   
       title:"To permit the Smithsonian American Women's History Museum to be located within the Reserve of the National Mall,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1328",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1328",   
       title:"To amend the Internal Revenue Code of 1986 to establish the critical supply chains reshoring investment tax credit.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1327",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1327",   
       title:"To direct the Secretary of Homeland Security to conduct a threat assessment of terrorist threats to the United States posed by individuals in Syria with an affiliation with a Foreign Terrorist Organization or a Specially Designated Global Terrorist Organization,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1326",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1326",   
       title:"To provide for Department of Energy and Department of Agriculture joint research and development activities,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1325",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1325",   
       title:"To provide for transparent licensing of commercial remote sensing systems,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1324",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1324",   
       title:"To approve the settlement of water rights claims of the Navajo Nation in the Rio San José Stream System in the State of New Mexico,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1323",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1323",   
       title:"To approve the settlement of water rights claims of Ohkay Owingeh in the Rio Chama Stream System,to restore the Bosque on Pueblo Land in the State of New Mexico,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1322",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1322",   
       title:"To approve the settlement of water rights claims of the Pueblos of Acoma and Laguna in the Rio San José Stream System and the Pueblos of Jemez and Zia in the Rio Jemez Stream System in the State of New Mexico,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1321",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1321",   
       title:"To extend the financial disclosure requirements of subchapter I of chapter 131 of title 5,United States Code,to certain special Government employees,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1320",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1320",   
       title:"To ensure that the provision of portable benefits to an individual is not considered in determining whether such individual is an employee of a person.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1319",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1319",   
       title:"To amend the Fair Labor Standards Act of 1938 and the National Labor Relations Act to clarify the standard for determining whether an individual is an employee,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1318",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1318",   
       title:"To amend the Research and Development,Competition,and Innovation Act to clarify the definition of foreign country for purposes of malign foreign talent recruitment restriction,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1317",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1317",   
       title:"To amend titles XVIII and XIX of the Social Security Act to increase access to services provided by advanced practice registered nurses under the Medicare and Medicaid programs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1316",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1316",   
       title:"To amend the Export Control Reform Act of 2018 relating to licensing transparency.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1315",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1315",   
       title:"To authorize compensation to individuals,organizations,and companies impacted by the Gold King Mine wastewater spill of 2015,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1314",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1314",   
       title:"To amend the Fair Labor Standards Act of 1938 to eliminate the separate minimum wage for tipped employees,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1313",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1313",   
       title:"To prohibit the flying,draping,or other display of any flag other than the flag of the United States at public buildings,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1312",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1312",   
       title:"To amend the Immigration and Nationality Act to provide that an alien who has been convicted of a crime is ineligible for asylum,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1311",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1311",   
       title:"To prohibit the Corps of Engineers from issuing a permit for the Delta Conveyance Project.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1310",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1310",   
       title:"To limit the closure or consolidation of any United States Postal Service processing and distribution center in States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1309",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1309",   
       title:"To amend the Securities Exchange Act of 1934 to prohibit exchanges from effecting transactions in securities issued by natural asset companies,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1308",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1308",   
       title:"To provide monthly payments for eligible pregnant women and parents to improve the ability of families to provide for their children and other family members,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1307",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1307",   
       title:"To establish the Office of Gun Violence Prevention,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1306",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1306",   
       title:"To amend the Internal Revenue Code of 1986 to exclude from gross income any judgments,awards,and settlements with respect to sexual assault or sexual harassment claims,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1305",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1305",   
       title:"To direct the Secretary of Health and Human Services to establish a working group to formulate recommendations for standardizing the measurements of loneliness and isolation,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1304",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1304",   
       title:"To amend the Water Infrastructure Improvements for the Nation Act to reauthorize Delaware River Basin conservation programs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1303",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1303",   
       title:"To prohibit the Secretary of Health and Human Services from implementing,administering,or enforcing provisions relating to minimum staffing standards for long-term care facilities and Medicaid institutional payment transparency reporting.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1302",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1302",   
       title:"To amend the Food,Conservation,and Energy Act of 2008 to clarify propane storage as an eligible use for funds provided under the storage facility loan program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1301",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1301",   
       title:"To amend the Internal Revenue Code of 1986 to repeal the estate and generation-skipping transfer taxes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1300",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1300",   
       title:"To amend title XXVII of the Public Health Service Act to require group health plans and health insurance issuers offering group or individual health insurance coverage to provide coverage for prostate cancer screenings without the imposition of cost-sharing requirements,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1299",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1299",   
       title:"To amend title 18,United States Code,to reauthorize and expand the National Threat Assessment Center of the Department of Homeland Security.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1298",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1298",   
       title:"To amend the Internal Revenue Code of 1986 to establish a small business start-up tax credit for veterans creating businesses in underserved communities.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1297",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1297",   
       title:"To establish the Land Port of Entry Modernization Trust Fund,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1296",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1296",   
       title:"To amend the Internal Revenue Code of 1986 to establish a refundable credit for qualified child care startup expenses.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1295",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1295",   
       title:"To amend chapter 9 of title 5,United States Code,to reauthorize the executive reorganization authority of the President and to ensure efficient executive reorganization,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1294",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1294",   
       title:"To pilot the use of image technician positions in the U.S. Customs and Border Protection Office of Field Operations.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1293",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1293",   
       title:"To amend the Internal Revenue Code of 1986 to provide tax incentives and fees for increasing motor vehicle fuel economy,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1292",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1292",   
       title:"To amend title 18,United States Code,to increase the maximum penalty for mail theft.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1291",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1291",   
       title:"To amend the Public Health Service Act to ensure that nonanimal methods are prioritized,where applicable and feasible,in proposals for all research to be conducted or supported by the National Institutes of Health,to provide for the establishment of the National Center for Alternatives to Animals in Research and Testing,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1290",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1290",   
       title:"To direct the Secretary of Veterans Affairs to carry out a pilot program under which the Department of Veterans Affairs refers veterans experiencing mental health crises to approved non-Department mental health care providers,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1289",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1289",   
       title:"To direct the Secretary of Veterans Affairs to establish and carry out a pilot program to administer to eligible veterans medically-tailored meals and groceries,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1288",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1288",   
       title:"To amend title 38,United States Code,to increase the mileage rate offered by the Department of Veterans Affairs through their Beneficiary Travel program for health related travel,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1287",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1287",   
       title:"To amend title 5,United States Code,to provide that dependent children under the age of 26 are eligible for coverage under the Federal Employees Dental and Vision Insurance Program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1286",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1286",   
       title:"To direct the Secretary of Veterans Affairs to seek to enter into an agreement with a federally funded research and development center for an assessment of forms that the Secretary sends to claimants for benefits under laws administered by the Secretary,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1285",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1285",   
       title:"To amend the Water Infrastructure Finance and Innovation Act of 2014 to establish payment and performance security requirements for projects,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1284",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1284",   
       title:"To amend the Tariff Act of 1930 to increase civil penalties for,and improve enforcement with respect to,customs fraud,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1283",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1283",   
       title:"To amend title 18,United States Code,to prohibit child pornography produced using artificial intelligence.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1282",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1282",   
       title:"To prohibit Federal funding for institutions of higher education that carry out diversity,equity,and inclusion initiatives,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1281",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1281",   
       title:"To amend the Energy Policy and Conservation Act to modify standards for water heaters,furnaces,boilers,and kitchen cooktops,ranges,and ovens,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1280",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1280",   
       title:"To require the head of each Executive agency to relocate 30 percent of the employees assigned to the headquarters of the Executive agency to duty stations outside the Washington metropolitan area,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1279",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1279",   
       title:"To amend title XIX of the Social Security Act to establish a community engagement requirement for certain individuals under the Medicaid program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1278",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1278",   
       title:"To amend title 31,United States Code,to save Federal funds by authorizing changes to the composition of circulating coins,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1277",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1277",   
       title:"To award a Congressional Gold Medal,collectively,to the First Rhode Island Regiment,in recognition of their dedicated service during the Revolutionary War.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1276",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1276",   
       title:"To remove restrictions from a parcel of land in Paducah,Kentucky.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.Res. 134",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-resolution/134",   
       title:"Providing for consideration of the bill (H.R. 185) to advance responsible policies.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 604",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/604",   
       title:"A bill to amend the adoption opportunities program to define unregulated custody transfers of children and to improve awareness and prevention of such transfers,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 603",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/603",   
       title:"A bill to designate the General George C. Marshall House in the Commonwealth of Virginia,as an affiliated area of the National Park System,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 602",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/602",   
       title:"A bill to amend the Food,Agriculture,Conservation,and Trade Act of 1990 to support research and development of ungulate grazing land management techniques for purposes of wildfire mitigation,fuel reduction,and post-fire recovery.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 601",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/601",   
       title:"A bill to remove restrictions from a parcel of land in Paducah,Kentucky.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 600",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/600",   
       title:"A bill to enhance pre- and post-adoption support services,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 599",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/599",   
       title:"A bill to amend title 38,United States Code,to increase the mileage rate offered by the Department of Veterans Affairs through their Beneficiary Travel program for health related travel,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 598",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/598",   
       title:"A bill to establish a mineral and mining innovation program within the Department of Energy to advance domestic mineral resources,economic growth,and national security,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 597",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/597",   
       title:"A bill to amend title 18,United States Code,to prohibit the purchase of certain firearms by individuals under 21 years of age,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 596",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/596",   
       title:"A bill to establish a pilot program to support domestic critical material processing,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 595",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/595",   
       title:"A bill to establish the Office of Gun Violence Prevention,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 594",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/594",   
       title:"A bill to amend the Post-Katrina Management Reform Act of 2006 to repeal certain obsolete requirements,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 593",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/593",   
       title:"A bill to amend the Clean Air Act to modify Reid Vapor Pressure requirements and to provide for the return of certain retired credits,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 592",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/592",   
       title:"A bill to amend the Small Business Act to require that plain writing statements regarding the solicitation of subcontractors be included in certain subcontracting plans,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 591",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/591",   
       title:"A bill to reform the Federal hiring process,to restore merit to Government service,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 590",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/590",   
       title:"A bill to require the Under Secretary of Commerce for Oceans and Atmosphere to maintain the National Mesonet Program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 589",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/589",   
       title:"A bill to prohibit disinformation in the advertising of abortion services,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 588",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/588",   
       title:"A bill to amend the Internal Revenue Code of 1986 to provide for examination and disclosure with respect to Presidential income tax returns,to amend the chapter 131 of title 5,United States Code,to require the disclosure of certain tax returns by Presidents and certain candidates for the office of the President,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 587",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/587",   
       title:"A bill to amend the Internal Revenue Code of 1986 to repeal the estate and generation-skipping transfer taxes,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 586",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/586",   
       title:"A bill to amend the Internal Revenue Code of 1986 to provide an advance refundable credit to offset certain flood insurance premiums,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 585",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/585",   
       title:"A bill to amend title 38,United States Code,to establish a pre-transition health care registration process to facilitate enrollment in the patient enrollment system of the Department of Veterans Affairs by members of the Armed Forces who are separating from the Armed Forces,and for other purposes.",
       partySupport:"Independent",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 584",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/584",   
       title:"A bill to amend the Internal Revenue Code of 1986 to exclude from gross income any judgements,awards,and settlements with respect to sexual assault or sexual harassment claims,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 583",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/583",   
       title:"A bill to amend chapter 9 of title 5,United States Code,to reauthorize the executive reorganization authority of the President and to ensure efficient executive reorganization,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 582",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/582",   
       title:"A bill to provide for the authorized use of Federal vehicle transportation by certain astronauts.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 581",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/581",   
       title:"A bill to amend the Agricultural Marketing Act of 1946 with respect to mandatory reporting of dairy products processing costs.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 580",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/580",   
       title:"A bill to require the Secretary of Commerce to provide training and guidance relating to human rights abuses,including such abuses perpetrated against the Uyghur population by the Government of the People's Republic of China,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 579",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/579",   
       title:"A bill to amend the National Quantum Initiative Act to provide for a research,development,and demonstration program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 578",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/578",   
       title:"A bill to pilot the use of image technician positions in the U.S. Customs and Border Protection Office of Field Operations.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 577",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/577",   
       title:"A bill to amend the Securities Exchange Act of 1934 to expand access to capital for rural-area small businesses,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 576",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/576",   
       title:"A bill to prohibit the flying,draping,or other display of any flag other than the flag of the United States at covered public buildings,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 575",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/575",   
       title:"A bill to amend titles XVIII and XIX of the Social Security Act to increase access to services provided by advanced practice registered nurses under the Medicare and Medicaid programs,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 574",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/574",   
       title:"A bill to amend the Animal Health Protection Act to provide compensation for poultry growers and layers in control areas,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 573",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/573",   
       title:"A bill to designate a mountain in the State of Alaska as Denali.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 572",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/572",   
       title:"A bill to enhance the effectiveness of the Shadow Wolves Program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 571",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/571",   
       title:"A bill to require benefit eligibility determination to be made within a certain period of time.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 570",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/570",   
       title:"A bill to amend the Water Infrastructure Finance and Innovation Act of 2014 to establish payment and performance security requirements for projects,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 569",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/569",   
       title:"A bill to limit the closure or consolidation of any United States Postal Service processing and distribution center in States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 568",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/568",   
       title:"A bill to authorize compensation to individuals,organizations,and companies impacted by the Gold King Mine wastewater spill of 2015,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 567",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/567",   
       title:"A bill to award a Congressional Gold Medal,collectively,to the First Rhode Island Regiment,in recognition of their dedicated service during the Revolutionary War.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 566",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/566",   
       title:"A bill to amend the Disaster Recovery Reform Act of 2018 to require the President to automatically waive certain critical document fees for individuals and households affected by major disasters for which assistance is provided under the Individuals and Households program.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 565",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/565",   
       title:"A bill to approve the settlement of water rights claims of the Navajo Nation in the Rio San Jose Stream System in the State of New Mexico,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 564",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/564",   
       title:"A bill to approve the settlement of water rights claims of the Zuni Indian Tribe in the Zuni River Stream System in the State of New Mexico,to protect the Zuni Salt Lake,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 563",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/563",   
       title:"A bill to approve the settlement of water rights claims of Ohkay Owingeh in the Rio Chama Stream System,to restore the Bosque on Pueblo Land in the State of New Mexico,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 562",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/562",   
       title:"A bill to approve the settlement of water rights claims of the Pueblos of Acoma and Laguna in the Rio San Jose Stream System and the Pueblos of Jemez and Zia in the Rio Jemez Stream System in the State of New Mexico,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 561",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/561",   
       title:"A bill to amend the Food and Nutrition Act of 2008 to require the Secretary to designate food and food products to be made available under the supplemental nutrition assistance program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 560",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/560",   
       title:"A bill to amend title 18,United States Code,to reauthorize and expand the National Threat Assessment Center of the Department of Homeland Security.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 559",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/559",   
       title:"A bill to amend the Internal Revenue Code of 1986 to permanently extend the allowance for depreciation,amortization,or depletion for purposes of determining the income limitation on the deduction for business interest.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 558",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/558",   
       title:"A bill to provide for the consideration of a definition of antisemitism set forth by the International Holocaust Rembrance Alliance for the enforcement of Federal antidiscrimination laws concerning education programs or activities,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1275",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1275",   
       title:"To direct the Surgeon General to conduct a study regarding the use of mobile devices in elementary and secondary schools,and to establish a pilot program of awarding grants to enable certain schools to create a school environment free of mobile devices.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1274",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1274",   
       title:"To reauthorize the PROTECT Our Children Act of 2008,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1273",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1273",   
       title:"To direct the Secretary of State to establish a national registry of Korean American divided families,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1272",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1272",   
       title:"To amend title 18,United States Code,to require a Federal firearms licensee to provide secure firearms storage information to a prospective firearm transferee,and to amend the Internal Revenue Code of 1986 to provide a gun safe credit,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1271",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1271",   
       title:"To provide additional funding for scholarships for students at 1890 institutions,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1270",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1270",   
       title:"To suspend the production of the penny and nickel,to require the Comptroller General of the United States to carry out a study on pennies and nickels,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1269",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1269",   
       title:"To amend the Omnibus Crime Control and Safe Streets Act of 1968 to provide public safety officer benefits for exposure-related cancers,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1268",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1268",   
       title:"To extend the customs waters of the United States from 12 nautical miles to 24 nautical miles from the baselines of the United States,consistent with Presidential Proclamation 7219.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1267",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1267",   
       title:"To exempt certain entities from liability under the Comprehensive Environmental Response,Compensation,and Liability Act of 1980 with respect to releases of perfluoroalkyl and polyfluoroalkyl substances,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1266",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1266",   
       title:"To prohibit certain uses of xylazine,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1265",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1265",   
       title:"To amend the Save Our Seas 2.0 Act to expand eligibility for certain wastewater infrastructure grants,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1264",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1264",   
       title:"To amend the Internal Revenue Code of 1986 to eliminate lead oxide,antimony,and sulfuric acid as taxable chemicals under the Superfund excise taxes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1263",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1263",   
       title:"To require a strategy for bolstering engagement and cooperation between the United States,Australia,India,and Japan and to seek to establish a Quad Inter-Parliamentary Working Group to facilitate closer cooperation on shared interests and values.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1262",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1262",   
       title:"To amend the Federal Food,Drug,and Cosmetic Act with respect to molecularly targeted pediatric cancer investigations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1261",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1261",   
       title:"To amend title 54,United States Code,to authorize the Secretary of the Interior to make financial assistance to States under the Land and Water Conservation Fund available for water quality projects,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1260",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1260",   
       title:"To reduce the number of,and shorten the time between,pay grade steps for officers and members of the United States Park Police,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1259",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1259",   
       title:"To require the resumption of demining activities,the clearance of unexploded ordnance,the destruction of small arms,and related activities by the Department of State,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1258",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1258",   
       title:"To amend title 41,United States Code,to require information technology contractors to maintain a vulnerability disclosure policy and program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1257",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1257",   
       title:"To permit the Attorney General to award grants for accurate data on opioid-related overdoses,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1256",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1256",   
       title:"To amend the Older Americans Act of 1965 to require reports to Congress on State Long-Term Care Ombudsman Programs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1255",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1255",   
       title:"To amend the Internal Revenue Code of 1986 to reinstate advance refunding bonds.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1254",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1254",   
       title:"To improve obstetric emergency care.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1253",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1253",   
       title:"To amend the Internal Revenue Code of 1986 to establish a tax on the sale of electric vehicles and batteries.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1252",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1252",   
       title:"To direct the Secretary of State to submit to Congress a report on funding provided by the United States to the United Nations Relief and Works Agency for Palestine Refugees in the Near East (UNRWA),and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1251",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1251",   
       title:"To provide Members of Congress access to Federal buildings,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1250",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1250",   
       title:"To require the imposition of sanctions with respect to Ansarallah and its officials,agents,or affiliates for acts of international terrorism.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1249",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1249",   
       title:"To require the United States Postal Service to post notices of changes that will affect nationwide postal services,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1248",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1248",   
       title:"To amend title 38,United States Code,to require the consideration of continuity of health care in determining best medical interest under the Veterans Community Care Program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1247",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1247",   
       title:"To secure Federal access to scientific literature and other subscription services by requiring Federal agencies and legislative branch research arms to make recommendations on increasing agency library access to serials,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1246",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1246",   
       title:"To amend the Farm Credit Act of 1971 to provide support for facilities providing healthcare,education,child care,public safety,and other vital services in rural areas.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1245",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1245",   
       title:"To improve individual assistance provided by the Federal Emergency Management Agency,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1244",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1244",   
       title:"To amend title XVIII of the Social Security Act to require that coinsurance for drugs under Medicare part D be based on the drug's actual acquisition cost and not the drug's wholesale acquisition cost.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1243",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1243",   
       title:"To prohibit United States assistance to foreign countries that oppose the position of the United States in the United Nations.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1242",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1242",   
       title:"To require the Director of the Office of Personnel Management to establish a pilot program to identify and refer veterans for potential employment with Federal land management agencies,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1241",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1241",   
       title:"To amend the Immigration and Nationality Act to eliminate the diversity immigrant program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1240",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1240",   
       title:"To require the Attorney General to issue rules pertaining to the collection and compilation of data on the use of deadly force by law enforcement officers.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1239",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1239",   
       title:"To direct the Administrator of the Environmental Protection Agency to establish a voluntary sustainable apparel labeling program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1238",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1238",   
       title:"To authorize the President of the United States to issue letters of marque and reprisal with respect to acts of aggression against the United States by a member of a cartel,or a member of a cartel-linked organization,or any conspirator associated with a cartel,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1237",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1237",   
       title:"To amend the Internal Revenue Code of 1986 to deny the energy credit to property located on prime or unique farmland,as defined by the Secretary of Agriculture in part 657 of title 7,Code of Federal Regulations,if such property is used for generating solar energy.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1236",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1236",   
       title:"To amend the Omnibus Crime Control and Safe Streets Act of 1968 to include certain retired law enforcement officers in the public safety officers' death benefits program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1235",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1235",   
       title:"To establish the Federal Infrastructure Bank to facilitate investment in,and the long-term financing of,economically viable United States infrastructure projects that provide a public benefit,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1234",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1234",   
       title:"To direct the Librarian of Congress to promote the more cost-effective,efficient,and expanded availability of the Annotated Constitution and pocket-part supplements by replacing the hardbound versions with digital versions.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1233",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1233",   
       title:"To prohibit the obligation or expenditure of Federal funds for disinformation research grants,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1232",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1232",   
       title:"To preserve and protect the free choice of individual employees to form,join,or assist labor organizations,or to refrain from such activities.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1231",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1231",   
       title:"To reauthorize and expand the pilot program to help individuals in recovery from a substance use disorder become stably housed,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1230",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1230",   
       title:"To amend the Agricultural Research,Extension,and Education Reform Act of 1998 to direct the Secretary of Agriculture to establish a program under which the Secretary will award competitive grants to eligible entities for the purpose of establishing and enhancing farming and ranching opportunities for veterans.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1229",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1229",   
       title:"To enhance bilateral defense cooperation between the United States and Israel,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1228",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1228",   
       title:"To amend title 38,United States Code,to clarify the organization of the Office of Survivors Assistance of the Department of Veterans Affairs.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1227",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1227",   
       title:"To amend title XVIII of the Social Security Act to ensure appropriate access to non-opioid pain management drugs under part D of the Medicare program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1226",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1226",   
       title:"To sunset new Federal regulatory rules after 5 years,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1225",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1225",   
       title:"To direct the United States Postal Service to designate a single,unique ZIP Code for Eastvale,California.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1224",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1224",   
       title:"To prohibit the use of a merchant category code that separately identifies firearms merchants or ammunition merchants,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1223",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1223",   
       title:"To require a plan to improve the cybersecurity and telecommunications of the U.S. Academic Research Fleet,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 557",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/557",   
       title:"A bill to repeal the small business loan data collection requirements under the Equal Credit Opportunity Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 556",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/556",   
       title:"A bill to impose sanctions with respect to persons engaged in logistical transactions and sanctions evasion relating to oil,gas,liquefied natural gas,and related petrochemical products from the Islamic Republic of Iran,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 555",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/555",   
       title:"A bill to direct the Secretary of State to establish a national registry of Korean American divided families,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 554",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/554",   
       title:"A bill to enhance bilateral defense cooperation between the United States and Israel,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 553",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/553",   
       title:"A bill to amend title XVIII of the Social Security Act to establish a floor on payments to sole community hospitals located in Alaska and Hawaii under the hospital outpatient prospective payment system.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 552",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/552",   
       title:"A bill to amend title XVIII of the Social Security Act to provide for the treatment of critical access hospital services furnished by a critical access hospital located in a noncontiguous State.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 551",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/551",   
       title:"A bill to amend title XVIII of the Social Security Act to provide for the application of a cost-of-living adjustment to the non-labor related portion for hospital outpatient department services furnished in Alaska and Hawaii.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 550",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/550",   
       title:"A bill to provide for the equitable settlement of certain Indian land disputes regarding land in Illinois,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 549",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/549",   
       title:"A bill to amend the Internal Revenue Code of 1986 to extend the exemption from the excise tax on alternative motorboat fuels sold as supplies for vessels or aircraft to include certain vessels serving only one coast.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 548",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/548",   
       title:"A bill to amend the Office of National Drug Control Policy Reauthorization Act of 1998 to require a Caribbean border counternarcotics strategy,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 547",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/547",   
       title:"A bill to require the Secretary of Health and Human Services and the Secretary of Labor to conduct a study and issue a report on grant programs to support the nursing workforce.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 546",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/546",   
       title:"A bill to amend the Omnibus Public Land Management Act of 2009 to make a technical correction to the water rights settlement for the Shoshone-Paiute Tribes of the Duck Valley Reservation,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 545",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/545",   
       title:"A bill to prohibit certain uses of xylazine,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 544",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/544",   
       title:"A bill to provide for the location of multiple hardrock mining mill sites,to establish the Abandoned Hardrock Mine Fund,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 543",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/543",   
       title:"A bill to prohibit certain discrimination against athletes on the basis of sex by State athletic associations,intercollegiate athletic associations,and covered institutions of higher education,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 542",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/542",   
       title:"A bill to declare English as the official language of the United States,to establish a uniform English language rule for naturalization,and to avoid misconstructions of the English language texts of the laws of the United States,pursuant to Congress' powers to provide for the general welfare of the United States and to establish a uniform rule of naturalization under article I,section 8,of the Constitution.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 541",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/541",   
       title:"A bill to amend the Internal Revenue Code of 1986 to repeal the credit for new clean vehicles,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 540",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/540",   
       title:"A bill to amend title 38,United States Code,to require the consideration of continuity of health care in determining best medical interest under the Veterans Community Care Program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 539",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/539",   
       title:"A bill to reauthorize the PROTECT Our Children Act of 2008,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 538",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/538",   
       title:"A bill to reduce Federal spending and the deficit by terminating taxpayer financing of Presidential election campaigns.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 537",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/537",   
       title:"A bill to prohibit the Secretary of the Interior and the Secretary of Agriculture from prohibiting the use of lead ammunition or tackle on certain Federal land or water under the jurisdiction of the Secretary of the Interior and the Secretary of Agriculture,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 536",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/536",   
       title:"A bill to amend the Internal Revenue Code of 1986 to establish a tax on the sale of electric vehicles and batteries.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 535",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/535",   
       title:"A bill to reauthorize the Child Care and Development Block Grant Act of 1990,to improve access to relative caregivers,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 534",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/534",   
       title:"A bill to amend the Act of August 25,1958,commonly known as the \"Former Presidents Act of 1958\",with respect to the monetary allowance payable to a former President,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 533",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/533",   
       title:"A bill to preserve and protect the free choice of individual employees to form,join,or assist labor organizations,or to refrain from such activities.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 532",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/532",   
       title:"A bill to authorize the Secretary of Health and Human Services to collect registration fees from members of the Organ Procurement and Transplantation Network,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1222",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1222",   
       title:"To reimburse the State of Texas for expenses incurred for activities conducted relating to securing the southern international border of the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1221",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1221",   
       title:"To amend titles II and XVIII of the Social Security Act to establish a Social Security Surplus Protection Account in the Federal Old-Age and Survivors Insurance Trust Fund to hold the Social Security surplus and a Medicare Surplus Protection Account in the Federal Hospital Insurance Trust Fund to hold the Medicare surplus,to provide for suspension of investment of amounts held in such Accounts until enactment of legislation providing for investment of the Trust Funds in investment vehicles other than obligations of the United States,and to establish a Social Security and Medicare Part A Investment Commission to make recommendations for alternative forms of investment of the Social Security and Medicare surpluses.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1220",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1220",   
       title:"To amend the Immigration and Nationality Act to direct the Secretary of State to increase the fee imposed on aliens filing an application abroad for a visa authorizing admission to the United States as a nonimmigrant described in section 101(a)(15)(B) who are nationals of certain countries,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1219",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1219",   
       title:"To amend the Internal Revenue Code of 1986 to include over-the-counter oral healthcare products as qualified medical expenses which can be purchased with HSA and FSA funds.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1218",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1218",   
       title:"To provide that it is unlawful to knowingly distribute private intimate visual depictions with reckless disregard for the individual's lack of consent to the distribution,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1217",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1217",   
       title:"To amend the Energy Policy Act of 2005 to address measuring methane emissions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1216",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1216",   
       title:"To prohibit Federal funding for the Public Broadcasting Service and National Public Radio and to provide for the transfer of certain Federal funds that would have been made available to those organizations to reduce the public debt,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1215",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1215",   
       title:"To support efforts of the governments of Western Hemisphere countries to increase the diversity of their upstream supply chains and downstream supply chains.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1214",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1214",   
       title:"To require the name of military installation under jurisdiction of Secretary of the Army located in Fayetteville,North Carolina,to be known and designated as Fort Bragg,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1213",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1213",   
       title:"To amend the Forest and Rangeland Renewable Resources Research Act of 1978 to modify the forest inventory and analysis program.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1212",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1212",   
       title:"To require the Secretary of Homeland Security to conduct annual assessments on terrorism threats to the United States posed by terrorist organizations utilizing foreign cloud-based mobile or desktop messaging applications,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1211",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1211",   
       title:"To amend the Communications Act of 1934 to prohibit Federal funding for the Corporation for Public Broadcasting,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1210",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1210",   
       title:"To amend chapter 71 of title 5,United States Code,to charge labor organizations for the agency resources and employee time used by such labor organizations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1209",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1209",   
       title:"To require the Secretary of the Treasury to submit to the Congress completed proposals for the termination of the conservatorships of Fannie Mae and Freddie Mac,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1208",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1208",   
       title:"To amend the Internal Revenue Code of 1986 to deny the trade or business expense deduction for the reimbursement of employee costs of child gender transition procedure or travel to obtain an abortion.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1207",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1207",   
       title:"To transfer the functions,duties,responsibilities,assets,liabilities,orders,determinations,rules,regulations,permits,grants,loans,contracts,agreements,certificates,licenses,and privileges of the United States Agency for International Development relating to implementing and administering the Food for Peace Act to the Department of Agriculture.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1206",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1206",   
       title:"To require the Director of the Bureau of Land Management to withdraw a rule of the Bureau of Land Management relating to conservation and landscape health.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1205",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1205",   
       title:"To prohibit certain sex offenders from entering or using the services of certain emergency shelters,to authorize the Administrator of the Federal Emergency Management Agency to designate emergency shelters for such sex offenders,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1204",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1204",   
       title:"To authorize a civil right of action for individuals affected by video voyeurism,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1203",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1203",   
       title:"To amend title 18,United States Code,to expand the scope of the prohibition against video voyeurism.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1202",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1202",   
       title:"To establish vetting standards for the placement of unaccompanied alien children with sponsors,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1201",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1201",   
       title:"To amend the Immigration and Nationality Act to increase the number of physicians who may be provided Conrad 30 waivers.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1200",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1200",   
       title:"To amend the Internal Revenue Code of 1986 to provide a tax credit to encourage the replacement or modernization of inefficient,outdated freight railcars,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1199",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1199",   
       title:"To amend the Internal Revenue Code of 1986 to modify the exclusion for gain from qualified small business stock.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1198",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1198",   
       title:"To amend the Food and Nutrition Act of 2008 to modify work requirements under the supplemental nutrition assistance program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1197",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1197",   
       title:"To reauthorize the Prematurity Research Expansion and Education for Mothers who deliver Infants Early Act.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1196",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1196",   
       title:"To prohibit the use of Federal funds to eliminate the United States Agency for International Development.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1195",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1195",   
       title:"To amend title XIX of the Social Security Act to prohibit Federal Medicaid funding for the administrative costs of providing health benefits to individuals who are unauthorized immigrants.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1194",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1194",   
       title:"To amend the Outer Continental Shelf Lands Act and the Mineral Leasing Act to require reports on rejected bids,to clarify timelines for the issuance of leases,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1193",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1193",   
       title:"To amend the Fair Labor Standards Act of 1938 to exempt certain 16- and 17-year-old individuals employed in timber harvesting entities or mechanized timber harvesting entities from child labor laws,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1192",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1192",   
       title:"To ensure that Big Cypress National Preserve may not be designated as wilderness or as a component of the National Wilderness Preservation System,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1191",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1191",   
       title:"To amend title XVIII of the Social Security Act to waive certain distance requirements for certain hospitals electing to be designated as critical access hospitals.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1190",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1190",   
       title:"To amend the Securities Exchange Act of 1934 to expand access to capital for rural-area small businesses,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1189",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1189",   
       title:"To establish a national plan to coordinate research on epilepsy,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1188",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1188",   
       title:"To amend the Omnibus Crime Control and Safe Streets Act of 1968 to authorize a grant program to assist State and local law enforcement agencies in purchasing body-worn cameras and securely storing and maintaining recorded data for law enforcement officers.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1187",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1187",   
       title:"To require the release to the public of all documents,reports,and other records relating to unidentified anomalous phenomena,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1186",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1186",   
       title:"To amend title 18,United States Code,to prohibit the importation or transportation of child sex dolls,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1185",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1185",   
       title:"To amend the Public Health Service Act to provide for the implementation of curricula for training students,teachers,and school personnel to understand,recognize,prevent,and respond to signs of human trafficking and exploitation in children and youth,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1184",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1184",   
       title:"To require that a State be ineligible to receive funds under certain Federal programs unless the State has in effect a State law restricting the purchase of agricultural land by certain foreign persons,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1183",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1183",   
       title:"To prohibit certain discrimination against athletes on the basis of sex by State athletic associations,intercollegiate athletic associations,and covered institutions of higher education,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1182",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1182",   
       title:"Compressed Gas Cylinder Safety and Oversight Improvements Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1181",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1181",   
       title:"To prohibit payment card networks and covered entities from requiring the use of or assigning merchant category codes that distinguish a firearms retailer from general-merchandise retailer or sporting-goods retailer,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1180",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1180",   
       title:"To repeal the Impoundment Control Act of 1974.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 531",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/531",   
       title:"A bill to assist States in,and pay for the Federal share of the cost of,defraying the cost of pre-apprenticeships or related instruction associated with qualified apprenticeship programs,and for other programs.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 530",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/530",   
       title:"A bill to repeal a rule of the Bureau of Land Management relating to conservation and landscape health.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 529",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/529",   
       title:"A bill to limit cost-sharing for prescription drugs,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 528",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/528",   
       title:"A bill to reauthorize the Great Lakes Restoration Initiative,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 527",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/527",   
       title:"A bill to require the Federal Trade Commission to study the role of intermediaries in the pharmaceutical supply chain and provide Congress with appropriate policy recommendations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 526",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/526",   
       title:"A bill to prevent unfair and deceptive acts or practices and the dissemination of false information related to pharmacy benefit management services for prescription drugs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 525",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/525",   
       title:"A bill to transfer the functions,duties,responsibilities,assets,liabilities,orders,determinations,rules,regulations,permits,grants,loans,contracts,agreements,certificates,licenses,and privileges of the United States Agency for International Development relating to implementing and administering the Food for Peace Act to the Department of Agriculture.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 524",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/524",   
       title:"A bill to authorize appropriations for the Coast Guard,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 523",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/523",   
       title:"A bill to amend title XIX of the Social Security Act to prohibit Federal Medicaid funding for the administrative costs of providing health benefits to individuals who are unauthorized immigrants.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 522",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/522",   
       title:"A bill to amend the Federal Credit Union Act to modify the frequency of board of directors meetings,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 521",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/521",   
       title:"A bill to amend title XVIII of the Social Security Act to waive certain distance requirements for certain hospitals electing to be designated as critical access hospitals.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 520",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/520",   
       title:"A bill to amend the Omnibus Crime Control and Safe Streets Act of 1968 to increase grants to combat domestic violence for States that implement domestic violence prevention training for cosmetologists and barbers,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 519",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/519",   
       title:"A bill to amend the Communications Act of 1934 to prohibit Federal funding for the Corporation for Public Broadcasting,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 518",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/518",   
       title:"A bill to prohibit Federal funding for the Public Broadcasting Service and National Public Radio and to provide for the transfer of certain Federal funds that would have been made available to those organizations to reduce the public debt,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 517",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/517",   
       title:"A bill to amend the Forest and Rangeland Renewable Resources Research Act of 1978 to modify the forest inventory and analysis program.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 516",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/516",   
       title:"A bill to provide that it is unlawful to knowingly distribute private intimate visual depictions with reckless disregard for the individual's lack of consent to the distribution,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 515",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/515",   
       title:"A bill to repeal the Impoundment Control Act of 1974.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 514",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/514",   
       title:"A bill to amend the Clean Air Act to modify the Methane Emissions Reduction Program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 513",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/513",   
       title:"A bill to require the Secretary of Commerce to establish and carry out a grant program to conserve,restore,and manage kelp forest ecosystems,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 512",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/512",   
       title:"A bill to impose criminal and immigration penalties for intentionally fleeing a pursuing Federal officer while operating a motor vehicle.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 511",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/511",   
       title:"A bill to amend chapter 71 of title 5,United States Code,to charge labor organizations for the agency resources and employee time used by such labor organizations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 510",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/510",   
       title:"A bill to amend the Internal Revenue Code of 1986 to extend the publicly traded partnership ownership structure to energy power generation projects and transportation fuels,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 509",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/509",   
       title:"A bill to exempt certain 16- and 17-year-old individuals employed in logging operations from child labor laws.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 508",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/508",   
       title:"A bill to amend the Federal Water Pollution Control Act relating to grants for beach monitoring,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 507",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/507",   
       title:"A bill to enhance the participation of precision agriculture in the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 506",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/506",   
       title:"A bill to require the Secretary of Veterans Affairs to carry out a pilot program to coordinate,navigate,and manage care and benefits for veterans enrolled in both the Medicare program and the system of annual patient enrollment of the Department of Veterans Affairs.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 505",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/505",   
       title:"A bill to amend title 31,United States Code,to modify the deadline for filing beneficial ownership information reports for reporting companies formed or registered before January 1,2024.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1179",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1179",   
       title:"To exclude from gross income certain relief payments to the victims of the Chiquita Canyon elevated temperature landfill event.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1178",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1178",   
       title:"To amend the Federal Food,Drug,and Cosmetic Act to add alpha-gal to the definition of \"major food allergen\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1177",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1177",   
       title:"To amend the Internal Revenue Code of 1986 to improve and enhance the work opportunity tax credit,to encourage longer-service employment,and to modernize the credit to make it more effective as a hiring incentive for targeted workers,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1176",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1176",   
       title:"To amend the Higher Education Act of 1965 to clarify the clock hour requirements for certain eligible programs under title IV of such Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1175",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1175",   
       title:"To amend title II of the Social Security Act to require the Commissioner of Social Security to carry out a demonstration project relating to disability benefits of blind individuals.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1174",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1174",   
       title:"To amend the Higher Education Act of 1965 to provide that non-Federal revenue generated through certain distance education programs may be counted purposes of the non-Federal revenue requirements applicable to proprietary institutions of higher education (commonly known as the \"90/10 rule\").",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1173",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1173",   
       title:"To amend title 1,United States Code,to provide that,for the purpose of determining eligibility for Federal funds,the District of Columbia shall be treated as a State and any political subdivision of a State or unit of local government,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1172",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1172",   
       title:"To amend title II of the Social Security Act to exclude from creditable wages and self-employment income wages earned for services by aliens illegally performed in the United States and self-employment income derived from a trade or business illegally conducted in the United States.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1171",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1171",   
       title:"To amend title XVIII of the Social Security Act to include physical therapists and occupational therapists as health professionals for purposes of the annual wellness visit under the Medicare program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1170",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1170",   
       title:"To amend title 10,United States Code,to provide for expedited access to certain military installations of the Department of Defense for Members of Congress and certain Congressional employees.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1169",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1169",   
       title:"To exclude certain amounts relating to compensating victims of the Texas Panhandle fires,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1168",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1168",   
       title:"To direct the Director of the Office of Management and Budget to require the disclosure of violations of Federal law with respect to human trafficking or alien smuggling,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1167",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1167",   
       title:"To prohibit the procurement of solar panels manufactured or assembled in the People's Republic of China.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1166",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1166",   
       title:"To prohibit the Secretary of Homeland Security from procuring certain foreign-made batteries,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1165",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1165",   
       title:"To require the inspection of certain foreign cranes before use at a United States port,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1164",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1164",   
       title:"To direct the Administrator of the Federal Emergency Management Agency to ensure that certain applicants for assistance after a declared major disaster do not receive a notice of denial while the applicant has a pending insurance claim for disaster-related losses,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1163",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1163",   
       title:"To amend title 5,United States Code,to require greater transparency for Federal regulatory decisions that impact small businesses,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1162",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1162",   
       title:"To facilitate direct primary care arrangements under Medicaid.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1161",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1161",   
       title:"Red,White,and Blueland Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1160",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1160",   
       title:"To amend the Internal Revenue Code of 1986 to clarify the treatment of locum tenens physicians and advanced care practitioners as independent contractors to help alleviate physician shortages,including in underserved areas.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1159",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1159",   
       title:"To amend the Omnibus Crime Control and Safe Streets Act of 1968 to provide for the eligibility of Transportation Security Administration employees to receive public safety officers death benefits,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1158",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1158",   
       title:"To provide enhanced authority for the President to enter into agreements with the Government of Ukraine to lend or lease defense articles to that Government to protect civilian populations in Ukraine from Russian military invasion,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1157",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1157",   
       title:"To allow individuals to elect to receive contributions to a health savings account in lieu of reduced cost-sharing under health insurance obtained through a health insurance Exchange.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1156",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1156",   
       title:"Pandemic Unemployment Fraud Enforcement Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1155",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1155",   
       title:"Recovery of Stolen Checks Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1154",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1154",   
       title:"To direct the Secretary of Homeland Security to issue guidance with respect to space systems,services,and technology as critical infrastructure,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1153",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1153",   
       title:"To amend title XVIII of the Social Security Act to support rural residency training funding that is equitable for all States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1152",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1152",   
       title:"Electronic Filing and Payment Fairness Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 504",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/504",   
       title:"A bill to amend the Internal Revenue Code of 1986 to classify certain automatic fire sprinkler system retrofits as 15-year property for purposes of depreciation.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 503",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/503",   
       title:"A bill to direct the Federal Communications Commission to evaluate and consider the impact of the telecommunications network equipment supply chain on the deployment of universal service,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 502",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/502",   
       title:"A bill to amend title XVIII of the Social Security Act to restore State authority to waive for certain facilities the 35-mile rule for designating critical access hospitals under the Medicare program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 501",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/501",   
       title:"A bill to require the Secretary of Health and Human Services to develop a strategy for public health preparedness and response to artificial intelligence threats,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 500",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/500",   
       title:"A bill to reauthorize certain programs under the SUPPORT for Patients and Communities Act,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 499",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/499",   
       title:"A bill to amend title 31,United States Code,to provide for automatic continuing resolutions.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 498",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/498",   
       title:"A bill to posthumously award a Congressional Gold Medal,collectively,to the African Americans who served with Union forces during the Civil War,in recognition of their bravery and outstanding service.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 497",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/497",   
       title:"A bill to amend the Internal Revenue Code of 1986 to modify eligibility for 501(c)(3) status.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 496",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/496",   
       title:"A bill to exclude certain amounts relating to compensating victims of the Texas Panhandle fires,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 495",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/495",   
       title:"A bill to amend title 5,United States Code,to require greater transparency for Federal regulatory decisions that impact small businesses,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 494",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/494",   
       title:"A bill to establish a national plan to coordinate research on epilepsy,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 493",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/493",   
       title:"A bill to prohibit United States cooperation with the International Criminal Court,the use of the Economic Support Fund to support the Palestinian Authority,and any Federal funding for the ICC.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 492",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/492",   
       title:"A bill to amend the Internal Revenue Code of 1986 to improve and enhance the work opportunity tax credit,to encourage longer-service employment,and to modernize the credit to make it more effective as a hiring incentive for targeted workers,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1151",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1151",   
       title:"To amend the Internal Revenue Code of 1986 to treat certain postsecondary credentialing expenses as qualified higher education expenses for purposes of 529 accounts.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1150",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1150",   
       title:"To amend the Endangered Species Act of 1973 to exclude certain populations of the lake sturgeon from the authority of such Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1149",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1149",   
       title:"To require retail electric utilities to notify electric consumers of rate increases,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1148",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1148",   
       title:"To amend the Public Utility Regulatory Policies Act of 1978 to require States to consider prohibiting cost recovery related to smart grid projects,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1147",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1147",   
       title:"To amend title 38,United States Code,to establish the Veterans Advisory Committee on Equal Access,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1146",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1146",   
       title:"To prohibit Federal funding for National Public Radio,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1145",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1145",   
       title:"To provide that the special Government employee managing the Department of Government Efficiency shall be liable for any claims against the Federal Government related to Department activities,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1144",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1144",   
       title:"To reauthorize the Trafficking Victims Protection Act of 2000,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1143",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1143",   
       title:"To amend title XVIII of the Social Security Act to expand coverage of the in-home administration of intravenous immune globulin under the Medicare program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1142",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1142",   
       title:"To amend the Public Health Service Act to direct the Secretary of Health and Human Services to establish drug adherence guidelines,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1141",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1141",   
       title:"To authorize the Assistant Secretary for Mental Health and Substance Use to award formula grants to the States to address gambling addiction,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1140",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1140",   
       title:"To amend the Internal Revenue Code of 1986 to allow individuals with direct medical care service arrangement to remain eligible individuals for purposes of health savings accounts,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1139",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1139",   
       title:"To prohibit the Secretary of State from issuing a passport,passport card,or Consular Report of Birth Abroad that includes the unspecified (X) gender designation,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced','Transgender', 'LGBTQ','Pinned'] 
  },
   {
       bill_id:"H.R. 1138",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1138",   
       title:"To ensure that United States currency is treated as legal tender to be accepted as payment for purchases of goods and services at brick-and-mortar businesses throughout the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1137",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1137",   
       title:"To repeal a requirement for the Secretary of Transportation to issue certain regulations with respect to advanced impaired driving technology,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1136",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1136",   
       title:"To impose sanctions on foreign persons failing to cooperate with the United States.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1135",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1135",   
       title:"To impose an assessment related to fossil fuel emissions,to establish the Polluters Pay Climate Fund,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1134",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1134",   
       title:"To direct the Secretary of State to avoid or minimize the acquisition or lease of a consular or diplomatic post built or owned by an entity owned or controlled by the Government of the People's Republic of China,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1133",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1133",   
       title:"To amend the Housing and Community Development Act of 1974 to abolish certain grants for community development,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1132",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1132",   
       title:"To amend the Workforce Innovation and Opportunity Act to direct the Secretary of Labor to award grants to community colleges for high-quality workforce development programs.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1131",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1131",   
       title:"To restore the exemption of family farms and small businesses from the definition of assets under title IV of the Higher Education Act of 1965.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1130",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1130",   
       title:"To amend the Internal Revenue Code of 1986 to increase the additional standard deduction for seniors.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1129",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1129",   
       title:"To amend the Internal Revenue Code of 1986 to increase the exclusion from gross income of social security benefits.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1128",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1128",   
       title:"To amend the Internal Revenue Code of 1986 to increase the rate of the excise tax based on investment income of private colleges and universities and to broaden the definition of applicable educational institution by lowering the threshold with respect to aggregate fair market value per student,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1127",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1127",   
       title:"To establish a demonstration program to provide payments on eligible loans for individuals who are eligible for the National Health Service Corps Loan Repayment Program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1126",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1126",   
       title:"To require a study on public health impacts as a consequence of the February 3,2023,train derailment in East Palestine,Ohio.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1125",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1125",   
       title:"To provide for improved management of Federal lands and increased efficiencies within public land agencies while strengthening tourism,conservation,outdoor recreation,grazing,responsible energy production,and other multiple uses.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1124",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1124",   
       title:"To require the Secretary of Commerce to establish and carry out a grant program to conserve,restore,and manage kelp forest ecosystems,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1123",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1123",   
       title:"To abolish the United States Agency for International Development,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1122",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1122",   
       title:"To control the export to the People's Republic of China of certain technology and intellectual property important to the national interest of the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1121",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1121",   
       title:"To prohibit the use of DeepSeek by the executive agencies,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1120",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1120",   
       title:"To abolish the John E. Fogarty International Center for Advanced Study in the Health Sciences.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1119",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1119",   
       title:"To amend titles III and IX of the Social Security Act to require individuals receiving unemployment compensation to fulfill certain requirements in relation to suitable work,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1118",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1118",   
       title:"To amend title 41,United States Code,and title 10,United States Code,to provide best value through the multiple award schedule program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1117",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1117",   
       title:"To amend the Federal Food,Drug,and Cosmetic Act to restrict direct-to-consumer drug advertising.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1116",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1116",   
       title:"To prohibit the use of Federal funds to support cell-cultured meat,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1115",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1115",   
       title:"To develop the next generation of weather radar,authorize supplemental gap radar coverage,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1114",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1114",   
       title:"To authorize the establishment of a Haitian American Enterprise Fund for Haiti,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1113",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1113",   
       title:"To amend the Internal Revenue Code of 1986 to allow a 3-year recovery period for all race horses.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1112",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1112",   
       title:"To amend the Internal Revenue Code of 1986 to reduce the holding period used to determine whether horses are section 1231 assets to 12 months.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1111",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1111",   
       title:"To establish a Department of Peacebuilding,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1110",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1110",   
       title:"To require the Secretary of Agriculture to develop and implement a strategy to increase opportunities to utilize livestock grazing as a means of wildfire risk reduction.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1109",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1109",   
       title:"To amend title 28,United States Code,to provide for transparency and oversight of third-party beneficiaries in civil actions.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1108",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1108",   
       title:"To amend the Public Health Service Act to direct the Secretary of Health and Human Services to develop a plan to improve the development and distribution of diagnostic tests during a public health emergency,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1107",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1107",   
       title:"To amend title 38,United States Code,to authorize certain heath care professionals employed by the Department of Veterans Affairs to deliver,distribute,or dispense to veterans certain controlled medications via telemedicine under certain conditions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1106",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1106",   
       title:"To amend the America COMPETES Act to establish certain scientific integrity policies for Federal agencies that fund,conduct,or oversee scientific research,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1105",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1105",   
       title:"To amend the Robert T. Stafford Disaster Relief and Emergency Assistance Act to require the President to establish an individual household disaster mitigation program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1104",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1104",   
       title:"To amend part D of title IV of the Social Security Act to ensure that child support for unborn children is collected and distributed under the child support enforcement program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1103",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1103",   
       title:"To amend the Internal Revenue Code of 1986 to permanently extend the new markets tax credit,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1102",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1102",   
       title:"To establish the Commission to Study the Potential Creation of a National Museum of Italian American History and Culture,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1101",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1101",   
       title:"To prohibit unlawful access to the payment system of the Bureau of the Fiscal Service within the Department of the Treasury,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1100",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1100",   
       title:"To amend the Controlled Substances Act to provide for the regulation of critical parts of tableting machines and encapsulating machines,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1099",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1099",   
       title:"To clarify the applicability of the Freedom of Information Act to certain federally established entities,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1098",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1098",   
       title:"To reauthorize the Junior Duck Stamp Conservation and Design Program Act of 1994.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1097",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1097",   
       title:"To amend title 18,United States Code,to require federally licensed firearms importers,manufacturers,and dealers to meet certain requirements with respect to securing their firearms inventory,business records,and business premises.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1096",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1096",   
       title:"To amend title XVIII of the Social Security Act to require coverage of 3 primary care visits without cost sharing each year under the Medicare program.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1095",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1095",   
       title:"To eliminate the position of the Chief Diversity Officer of the Department of Defense,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1094",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1094",   
       title:"To amend the Communications Act of 1934 to prohibit the application of certain private land use restrictions to amateur station antennas,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1093",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1093",   
       title:"To amend the Internal Revenue Code of 1986 to increase the dollar threshold applicable to information reporting with respect to payments for qualified natural disaster expenses.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1092",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1092",   
       title:"To amend title 31 of the United States Code and the Congressional Budget Act of 1974 to automatically increase the debt limit for the fiscal year of a budget resolution,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1091",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1091",   
       title:"To amend the Internal Revenue Code of 1986 to provide for the proper tax treatment of personal service income earned in pass-thru entities.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1090",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1090",   
       title:"To amend the Higher Education Act of 1965 to require certain institutions of higher education to provide notice of tuition levels for students.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1089",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1089",   
       title:"To repeal the District of Columbia Home Rule Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1088",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1088",   
       title:"To provide for the use of funds for deportation purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1087",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1087",   
       title:"To posthumously award a Congressional Gold Medal,collectively,to the African Americans who served with Union forces during the Civil War,in recognition of their bravery and outstanding service.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1086",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1086",   
       title:"To amend the Agricultural Trade Act of 1978 to extend and expand the Market Access Program and the Foreign Market Development Cooperator Program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1085",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1085",   
       title:"To amend the Public Health Service Act to prohibit the National Institutes of Health from awarding any support for an activity or program that uses live animals in research unless the research occurs in the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1084",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1084",   
       title:"To amend the Omnibus Parks and Public Lands Management Act of 1996 to provide for the establishment of a Ski Area Fee Retention Account,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1083",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1083",   
       title:"To amend the Internal Revenue Code of 1986 to exclude from gross income gain from the sale of qualified real property interests acquired under the authority of the Readiness and Environmental Protection Integration (REPI) program administered by the Department of Defense pursuant to section 2684a of title 10,United States Code,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1082",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1082",   
       title:"To require the Secretary of Health and Human Services to conduct a national,evidence-based education campaign to increase public and health care provider awareness regarding the potential risks and benefits of human cell and tissue products transplants,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1081",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1081",   
       title:"To prohibit certain business concerns from receiving assistance from the Small Business Administration,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1080",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1080",   
       title:"To amend the Internal Revenue Code of 1986 to exclude property and facilities located on prime farmland from certain credits relating to renewable energy production and investment.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1079",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1079",   
       title:"To publicize U.S. Customs and Border Protection operational statistics and report on foreign terrorist organizations.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1078",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1078",   
       title:"To amend the CARES Act to remove a requirement on lessors to provide notice to vacate,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1077",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1077",   
       title:"To amend the Energy Policy Act of 2005 to expedite geothermal exploration and development in previously studied or developed areas.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1076",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1076",   
       title:"To direct the Comptroller General of the United States to conduct a study on the effectiveness of emergency alerting systems,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1075",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1075",   
       title:"To amend the Internal Revenue Code of 1986 to make improvements related to tax administration.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1074",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1074",   
       title:"To establish a process by which the appointment of Supreme Court Justices can occur at regular time intervals,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1073",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1073",   
       title:"To direct the Secretary of the Interior to provide technical and financial assistance to identify,conserve,restore,and interpret natural,recreational,historical,and cultural resources within the Great Lakes Watershed,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1072",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1072",   
       title:"To amend title 10,United States Code,to direct the Secretary of the Air Force to operate a Technical Training Center of Excellence,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1071",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1071",   
       title:"To provide that any foreign government official who engages in censorship of American speech is inadmissible and deportable.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1070",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1070",   
       title:"To amend the Internal Revenue Code of 1986 to exclude from gross income certain income from providing real property insurance following certain federally declared disasters.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1069",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1069",   
       title:"PROTECT Our Kids Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1068",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1068",   
       title:"To amend the Protection of Lawful Commerce in Arms Act to provide for the removal and dismissal of qualified civil liability actions.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1067",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1067",   
       title:"To amend the Internal Revenue Code of 1986 to establish the childcare provider startup credit,to increase the amount of and make refundable the expenses for household and dependent care credit,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1066",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1066",   
       title:"To repeal section 138 of the Clean Air Act,relating to environmental and climate justice block grants.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1065",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1065",   
       title:"To facilitate the implementation of security measures undertaken by the United States Postal Service,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1064",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1064",   
       title:"To amend the Controlled Substances Act to list fentanyl-related substances as schedule I controlled substances.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1063",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1063",   
       title:"To affirm that the Farm Credit Administration is the sole and independent regulator of the Farm Credit System.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1062",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1062",   
       title:"To amend the Internal Revenue Code of 1986 to repeal the scheduled reduction in the deduction for foreign-derived intangible income.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1061",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1061",   
       title:"To amend section 287 of the Immigration and Nationality Act to limit immigration enforcement actions at sensitive locations,to clarify the powers of immigration officers at sensitive locations,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1060",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1060",   
       title:"To amend the Federal Food,Drug,and Cosmetic Act to modernize the methods of authenticating controlled substances in the pharmaceutical distribution supply chain,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1059",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1059",   
       title:"To amend title XIX of the Social Security Act to implement a minimum work requirement for able-bodied adults enrolled in State Medicaid programs.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1058",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1058",   
       title:"To authorize the use of certain Department of Justice grants to purchase and operate unmanned aircraft systems to benefit public safety.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1057",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1057",   
       title:"To criminalize the intentional obstruction of roadways on the Interstate System.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1056",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1056",   
       title:"To include the Czech Republic in the list of foreign states whose nationals are eligible for admission into the United States as E1 nonimmigrants if United States nationals are treated similarly by the Government of the Czech Republic.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1055",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1055",   
       title:"To amend the Workforce Innovation and Opportunity Act to expand the capacity of junior or community colleges and area career and technical education schools to conduct training services,education,and outreach activities for careers in the residential construction industry.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1054",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1054",   
       title:"To amend the Internal Revenue Code of 1986 to increase the deduction for certain expenses of elementary and secondary school teachers.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1053",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1053",   
       title:"To exempt children of certain Filipino World War II veterans from the numerical limitations on immigrant visas,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1052",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1052",   
       title:"To rescind certain unobligated balances relating to charging and fueling grants and national electric vehicle grants.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1051",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1051",   
       title:"To amend the Federal Food,Drug,and Cosmetic Act to allow for the approval of an abbreviated new drug application submitted by a subsequent applicant in the case of a failure by a first applicant to commence commercial marketing within a certain period,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1050",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1050",   
       title:"To amend the Immigration and Nationality Act with respect to aliens associated with criminal gangs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1049",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1049",   
       title:"Transparency in Reporting of Adversarial Contributions to Education Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1048",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1048",   
       title:"DETERRENT Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1047",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1047",   
       title:"To require the Federal Energy Regulatory Commission to reform the interconnection queue process for the prioritization and approval of certain projects,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1046",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1046",   
       title:"To require the Director of the Bureau of Prisons to develop and implement a strategy to interdict fentanyl and other synthetic drugs in the mail at Federal correctional facilities.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1045",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1045",   
       title:"To amend the Southwest Forest Health and Wildfire Prevention Act of 2004 to require the establishment of an additional Institute under that Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1044",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1044",   
       title:"To amend Public Law 99-338 with respect to Kaweah Project permits.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1043",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1043",   
       title:"To direct the Secretary of the Interior to convey certain Federal land in Arizona to La Paz County,Arizona,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1042",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1042",   
       title:"To amend the HOME Investment Partnerships Act to establish a Project Turnkey Program to leverage vacant hotels and motels for housing and enhance shelter capacity nationally,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1041",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1041",   
       title:"To amend title 38,United States Code,to prohibit the Secretary of Veterans Affairs from transmitting certain information to the Department of Justice for use by the national instant criminal background check system.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1040",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1040",   
       title:"To amend the Internal Revenue Code of 1986 to repeal the inclusion in gross income of Social Security benefits.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1039",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1039",   
       title:"To direct the Secretary of Veterans Affairs to seek to enter into an agreement with a federally funded research and development center for an assessment of notice letters that the Secretary sends to claimants for benefits under laws administered by the Secretary,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 491",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/491",   
       title:"A bill to establish the position of Director of Foreign Assistance in the Department of State,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 490",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/490",   
       title:"A bill to provide that unauthorized access to the central payment systems of the Bureau of the Fiscal Service is unlawful.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 489",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/489",   
       title:"A bill to require the Secretary of the Air Force to establish a permanent program to provide tuition assistance to members of the Air National Guard.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 488",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/488",   
       title:"A bill to impose sanctions with respect to foreign persons that engage in certain transactions relating to Cuba and to impose sanctions with respect to human rights abuse and corruption in Cuba,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 487",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/487",   
       title:"A bill to expand opportunity through greater choice in education,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 486",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/486",   
       title:"A bill to require the Secretary of Homeland Security to immediately initiate removal proceedings for aliens whose visas are revoked on security or related grounds.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 485",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/485",   
       title:"A bill to amend chapter 8 of title 5,United States Code,to provide that major rules of the executive branch shall have no force or effect unless a joint resolution of approval is enacted into law.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 484",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/484",   
       title:"A bill to amend the Protection of Lawful Commerce in Arms Act to provide for the removal and dismissal of qualified civil liability actions.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 483",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/483",   
       title:"A bill to amend the Federal Food,Drug,and Cosmetic Act to restrict direct-to-consumer drug advertising.",
       partySupport:"Independent",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 482",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/482",   
       title:"A bill to include Czechia in the list of foreign states whose nationals are eligible for admission into the United States as E-1 nonimmigrants if United States nationals are treated similarly by the Government of Czechia.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 481",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/481",   
       title:"A bill to reprogram all remaining unobligated funds from the IRS enforcement account.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 480",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/480",   
       title:"A bill to require certain forest supervisors of units of the National Forest System to submit to the Chief of the Forest Service a harvesting improvement report,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 479",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/479",   
       title:"A bill to amend the Internal Revenue Code of 1986 to permanently extend the new markets tax credit,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 478",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/478",   
       title:"A bill to amend title 38,United States Code,to prohibit the Secretary of Veterans Affairs from transmitting certain information to the Department of Justice for use by the national instant criminal background check system.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 477",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/477",   
       title:"A bill to amend the Controlled Substances Act and the Controlled Substances Import and Export Act to modify the offenses relating to fentanyl,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 476",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/476",   
       title:"A bill to direct the Secretary of Agriculture and the Secretary of the Interior to carry out activities to provide for white oak restoration,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 475",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/475",   
       title:"A bill to amend title XVIII of the Social Security Act to ensure appropriate access to non-opioid pain management drugs under part D of the Medicare program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 474",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/474",   
       title:"A bill to amend title XIX of the Social Security Act to establish a minimum Medicaid disproportionate share hospital allotment for States.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 473",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/473",   
       title:"A bill to amend the Older Americans Act of 1965 to include screening for loneliness and coordination of supportive services and health care to address the negative health effects of loneliness,to require a report on loneliness,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 472",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/472",   
       title:"A bill to amend the Omnibus Parks and Public Lands Management Act of 1996 to provide for the establishment of a Ski Area Fee Retention Account,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 471",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/471",   
       title:"A bill to amend the Internal Revenue Code of 1986 to maintain the prohibition on allowing any deduction or credit associated with a trade or business involved in trafficking marijuana.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 470",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/470",   
       title:"A bill to amend the CARES Act to remove a requirement on lessors to provide notice to vacate,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 469",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/469",   
       title:"A bill to restore the exemption of family farms and small businesses from the definition of assets under title IV of the Higher Education Act of 1965.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 468",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/468",   
       title:"A bill to amend title 18,United States Code,to require federally licensed firearms importers,manufacturers,and dealers to meet certain requirements with respect to securing their firearms inventory,business records,and business premises.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 467",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/467",   
       title:"A bill to amend the Internal Revenue Code of 1986 to allow an above-the-line deduction for attorney fees and costs in connection with consumer claim awards.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 466",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/466",   
       title:"A bill to amend title II of the Social Security Act to increase the age threshold for eligibility for child's insurance benefits on the basis of disability.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 465",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/465",   
       title:"A bill to require the Federal Energy Regulatory Commission to reform the interconnection queue process for the prioritization and approval of certain projects,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 464",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/464",   
       title:"A bill to amend the Federal Reserve Act to limit the ability of Federal Reserve banks to issue central bank digital currency.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 463",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/463",   
       title:"A bill to facilitate the implementation of security measures undertaken by the United States Postal Service,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 462",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/462",   
       title:"A bill to provide for economic development and conservation in Washoe County,Nevada,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 461",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/461",   
       title:"A bill to exempt children of certain Filipino World War II veterans from the numerical limitations on immigrant visas,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 460",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/460",   
       title:"A bill to promote domestic energy production,to require onshore and offshore oil and natural gas lease sales,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 459",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/459",   
       title:"A bill to amend the Communications Act of 1934 to prohibit the application of certain private land use restrictions to amateur station antennas,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 458",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/458",   
       title:"A bill to amend the Internal Revenue Code of 1986 to repeal the inclusion in gross income of Social Security benefits.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 457",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/457",   
       title:"A bill to amend the Southwest Forest Health and Wildfire Prevention Act of 2004 to require the establishment of an additional Institute under that Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 456",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/456",   
       title:"A bill to amend the Energy Policy Act of 2005 to expedite geothermal exploration and development in previously studied or developed areas.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 455",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/455",   
       title:"A bill to amend section 287 of the Immigration and Nationality Act to limit immigration enforcement actions at sensitive locations,to clarify the powers of immigration officers at sensitive locations,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 454",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/454",   
       title:"A bill to authorize the Assistant Secretary for Mental Health and Substance Use to award formula grants to the States to address gambling addiction,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 453",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/453",   
       title:"A bill to establish a Wildfire Intelligence Center,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 452",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/452",   
       title:"A bill to require electronically prepared tax returns to include scannable code when submitted on paper,and to require the use of optical character recognition technology for paper documents received by the Internal Revenue Service.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 451",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/451",   
       title:"A bill to amend the Mineral Leasing Act to eliminate an administrative fee,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 450",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/450",   
       title:"A bill to prohibit the Secretary of Homeland Security from procuring certain foreign-made batteries,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 449",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/449",   
       title:"A bill to amend the Healthy Forests Restoration Act of 2003 to require the Secretary of Agriculture to expedite hazardous fuel or insect and disease risk reduction projects on certain National Forest System land,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 448",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/448",   
       title:"A bill to amend the Internal Revenue Code of 1986 to expand the advanced manufacturing production credit to include distribution transformers.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 447",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/447",   
       title:"A bill to amend title XIX of the Social Security Act to implement a minimum work requirement for able-bodied adults enrolled in State Medicaid programs.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 446",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/446",   
       title:"A bill to prohibit Big Cypress National Preserve from being designated as wilderness or as a component of the National Wilderness Preservation System,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 445",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/445",   
       title:"A bill to amend the Internal Revenue Code of 1986 to provide for the proper tax treatment of personal service income earned in pass-thru entities.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 444",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/444",   
       title:"A bill to require the development of a workforce plan for the Federal Emergency Management Agency.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 443",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/443",   
       title:"A bill to amend the Robert T. Stafford Disaster Relief and Emergency Assistance Act to allow Indian tribal governments to directly request fire management assistance declarations and grants,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 442",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/442",   
       title:"A bill to amend title 10,United States Code,to direct the Secretary of the Air Force to operate a Technical Training Center of Excellence,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 441",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/441",   
       title:"A bill to direct the Secretary of Agriculture and the Secretary of the Interior to develop a plan to reorganize Federal wildland fire response,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 440",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/440",   
       title:"A bill to repeal the District of Columbia Home Rule Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 439",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/439",   
       title:"A bill to amend the Internal Revenue Code of 1986 to exclude from gross income gain from the sale of qualified real property interests acquired under the authority of the Readiness and Environmental Protection Integration (REPI) program administered by the Department of Defense pursuant to section 2684a of title 10,United States Code,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1038",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1038",   
       title:"To direct the Bureau of Labor Statistics to prepare and publish a Consumer Price Index for Rural Consumers,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1037",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1037",   
       title:"To require the Secretary of Homeland Security to promptly comply with State requests for information regarding the citizenship status of an individual.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1036",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1036",   
       title:"To provide for modifications to ending trafficking in government contracting,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1035",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1035",   
       title:"To amend the Family and Medical Leave Act to expand employees eligible for leave and employers subject to leave requirements,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1034",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1034",   
       title:"To amend the Homeland Security Act of 2002 to establish a DHS Cybersecurity On-the-Job Training Program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1033",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1033",   
       title:"To require the Secretary of Education to establish a program to provide for antisemitism monitors at institutions of higher education.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1032",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1032",   
       title:"To prohibit Federal spending on funding research in China,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1031",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1031",   
       title:"To establish the Fort Ontario National Monument in the State of New York as a unit of the National Park System,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1030",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1030",   
       title:"To develop a database of members of the Armed Forces who died in non-combat military plane crashes and to provide support to the families of such members,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1029",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1029",   
       title:"To abolish the United States Agency for International Development.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1028",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1028",   
       title:"To modify eligibility requirements for amateur sports governing organizations.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced','Transgender', 'LGBTQ','Pinned'] 
  },
   {
       bill_id:"H.R. 1027",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1027",   
       title:"To amend the Communications Act of 1934 to require disclosures with respect to robocalls using artificial intelligence and to provide for enhanced penalties for certain violations involving artificial intelligence voice or text message impersonation,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1026",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1026",   
       title:"To amend the Internal Revenue Code of 1986 to allow individuals with direct primary care service arrangements to remain eligible individuals for purposes of health savings accounts,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1025",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1025",   
       title:"To designate the facility of the United States Postal Service located at 2600 Wesley Street in Greenville,Texas,as the \"Cooper Dawson Post Office Building\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1024",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1024",   
       title:"To authorize the extension of nondiscriminatory treatment (normal trade relations treatment) to the products of Kazakhstan.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1023",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1023",   
       title:"To amend the Higher Education Act of 1965 to require disclosure of certain foreign investments within endowments,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1022",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1022",   
       title:"To amend title 11,District of Columbia Official Code,to revise references in such title to individuals with intellectual disabilities.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1021",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1021",   
       title:"To amend the Small Business Act to increase the minimum disaster loan amount for which the Small Business Administration may require collateral,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1020",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1020",   
       title:"To amend the Internal Revenue Code of 1986 to allow a refundable credit against tax for the purchase of communications signal boosters in areas with inadequate broadband internet access service,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1019",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1019",   
       title:"To amend title XIX of the Social Security Act to ensure the reliability of address information provided under the Medicaid program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1018",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1018",   
       title:"To amend the Higher Education Act of 1965 to require additional information in disclosures of foreign gifts and contracts from foreign sources.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1017",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1017",   
       title:"To prohibit an entity from receiving Federal funds if such entity permits an individual to access or use a single-sex facility on the property of such entity that does not correspond to the biological sex of such person,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced','Transgender', 'LGBTQ','Pinned'] 
  },
   {
       bill_id:"H.R. 1016",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1016",   
       title:"To prohibit individuals from accessing or using single-sex facilities on Federal property other than those corresponding to their biological sex,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced','Transgender', 'LGBTQ','Pinned'] 
  },
   {
       bill_id:"H.R. 1015",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1015",   
       title:"To amend title 18,United States Code,to provide for certain rules for housing or transportation based on gender and to provide for a limitation on gender-related medical treatment.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced','Transgender', 'LGBTQ','Pinned'] 
  },
   {
       bill_id:"H.R. 1014",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1014",   
       title:"To amend title 10,United States Code,to direct the Secretary of Defense to include certain tests as part of the periodic health assessments provided to members of the Armed Forces.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1013",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1013",   
       title:"To amend the Federal securities laws to enhance 403(b) plans,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1012",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1012",   
       title:"To amend the Nuclear Waste Policy Act of 1982 to prioritize the acceptance of high-level radioactive waste or spent nuclear fuel from certain civilian nuclear power reactors,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1011",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1011",   
       title:"To amend the Agricultural Credit Act of 1978 to remove barriers to agricultural producers in accessing funds to carry out emergency measures under the emergency conservation program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1010",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1010",   
       title:"To require Federal law enforcement agencies to report on cases of missing or murdered Indians,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1009",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1009",   
       title:"To designate the facility of the United States Postal Service located at 86 Main Street in Haverstraw,New York,as the \"Paul Piperato Post Office Building\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1008",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1008",   
       title:"To designate the facility of the United States Postal Service located at 298 Route 292 in Holmes,New York,as the \"Sheriff Adrian 'Butch' Anderson Post Office Building\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1007",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1007",   
       title:"To provide for the consideration of a definition of antisemitism set forth by the International Holocaust Remembrance Alliance for the enforcement of Federal antidiscrimination laws concerning education programs or activities,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1006",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1006",   
       title:"To amend the Internal Revenue Code of 1986 to modify the excise tax on investment income of private colleges and universities.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1005",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1005",   
       title:"Combating the Lies of Authoritarians in School Systems Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1004",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1004",   
       title:"To amend titles 10 and 38,United States Code,to improve benefits and services for surviving spouses,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1003",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1003",   
       title:"To amend the Internal Revenue Code of 1986 to modify the carbon oxide sequestration credit to ensure parity for different uses and utilizations of qualified carbon oxide.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1002",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1002",   
       title:"To amend the Family and Medical Leave Act of 1993 and title 5,United States Code,to permit leave to care for a domestic partner,parent-in-law,or adult child,or another related individual,who has a serious health condition,and to allow employees to take,as additional leave,parental involvement and family wellness leave to participate in or attend their children's and grandchildren's educational and extracurricular activities or meet family care needs.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1001",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1001",   
       title:"To provide for a memorandum of understanding to address the impacts of a certain record of decision on the Upper Colorado River Basin Fund.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 1000",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/1000",   
       title:"To amend the Homeland Security Act of 2002 to provide for education and training programs and resources of the Cybersecurity and Infrastructure Security Agency of the Department of Homeland Security,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 999",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/999",   
       title:"To protect an individuals ability to access contraceptives and to engage in contraception and to protect a health care providers ability to provide contraceptives,contraception,and information related to contraception.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 998",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/998",   
       title:"Internal Revenue Service Math and Taxpayer Help Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 997",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/997",   
       title:"National Taxpayer Advocate Enhancement Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 996",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/996",   
       title:"To amend the Internal Revenue Code of 1986 to enhance the paid family and medical leave credit,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 995",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/995",   
       title:"To amend the Internal Revenue Code of 1986 to provide for current year inclusion of net CFC tested income,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 994",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/994",   
       title:"To prohibit retaliation against any Federal employee who stops,or attempts to stop,unlawful or unconstitutional actions by Elon Musk against Federal agencies,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 993",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/993",   
       title:"To require the Secretary of Homeland Security to develop a plan to identify,integrate,and deploy new,innovative,disruptive,or other emerging or advanced technologies to enhance,or address capability gaps in,border security operations,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 992",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/992",   
       title:"To prohibit the Department of Justice from bringing a civil action against a State under section 9 or 10 of the Act of March 3,1899,for certain border security measures,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 991",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/991",   
       title:"To amend the Congressional Budget Act of 1974 to provide that any estimate prepared by the Congressional Budget Office or the Joint Committee on Taxation shall include costs relating to servicing the public debt,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 990",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/990",   
       title:"To amend the Internal Revenue Code of 1986 to allow individuals to avoid a penalty for failure to pay income tax by timely paying 125 percent of the income tax liability for the prior year.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 989",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/989",   
       title:"To codify Executive Order 11246 titled \"Equal Employment Opportunity\".",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 988",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/988",   
       title:"To amend title 36,United States Code,to move the place of incorporation and domicile of the National Woman's Relief Corps to Illinois,to move the principal office of such Corps to Murphysboro,Illinois,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 987",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/987",   
       title:"To amend certain banking laws to prohibit certain financial service providers who deny fair access to financial services from using taxpayer funded discount window lending programs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 986",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/986",   
       title:"To amend the Marsh-Billings-Rockefeller National Historical Park Establishment Act to expand the boundary of the Marsh-Billings-Rockefeller National Historical Park in the State of Vermont,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 985",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/985",   
       title:"To amend the Agriculture Improvement Act of 2018 to reauthorize the dairy business innovation initiatives.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 984",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/984",   
       title:"To amend title 38,United States Code,to direct the Secretary of Veterans Affairs to provide timely equitable relief to an individual who suffers a loss based on an administrative error by the Secretary,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 983",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/983",   
       title:"To Amend title 38,United States Code,to direct the Secretary of Veterans Affairs to disapprove courses of education offered by a public institution of higher learning that does not charge the in-State tuition rate to a veteran using certain educational assistance under title 10 of such Code,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 982",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/982",   
       title:"To amend title 38,United States Code,to increase the amount of educational assistance paid by the Secretary of Veterans Affairs to an eligible individual during the first year of a full-time program of apprenticeship or other on-job training.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 981",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/981",   
       title:"To amend title 38,United States Code,to improve the processes to approve programs of education for purposes of the educational assistance programs of the Department of Veterans Affairs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 980",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/980",   
       title:"To amend title 38,United States Code,to make certain improvements to the provision of on-campus educational and vocational counseling by the Department of Veterans Affairs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 979",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/979",   
       title:"To require the Secretary of Transportation to issue a rule requiring access to AM broadcast stations in motor vehicles,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 978",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/978",   
       title:"To rescind Public Land Order 7917,to reinstate mineral leases and permits in the Superior National Forest,to ensure timely review of Mine Plans of Operations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 977",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/977",   
       title:"To permit Federal employees who are spouses of members of the armed forces to engage in telework and remote work,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 438",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/438",   
       title:"A bill to amend the Homeland Security Act of 2002 to provide for education and training programs and resources of the Cybersecurity and Infrastructure Security Agency of the Department of Homeland Security,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 437",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/437",   
       title:"A bill to amend the Family and Medical Leave Act of 1993 and title 5,United States Code,to permit leave to care for a domestic partner,parent-in-law,or adult child,or another related individual,who has a serious health condition,and to allow employees to take,as additional leave,parental involvement and family wellness leave to participate in or attend their children's and grand children's educational and extracurricular activities or meet family care needs.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 436",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/436",   
       title:"A bill to amend title 10,United States Code,to modify the organization and authorities of the Assistant Secretaries of Defense with duties relating to industrial base policy and homeland defense.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 435",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/435",   
       title:"A bill to improve the missile defense capabilities of the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 434",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/434",   
       title:"A bill to establish the Commercial Space Activity Advisory Committee,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 433",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/433",   
       title:"A bill to require the Secretary of Commerce to establish the National Manufacturing Advisory Council within the Department of Commerce,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 432",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/432",   
       title:"A bill to establish the Fort Ontario Holocaust Refugee Shelter National Historical Park in the State of New York as a unit of the National Park System,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 431",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/431",   
       title:"A bill to amend section 1030 of title 18,United States Code,to include conspiracy in the offenses and penalties relating to computer fraud.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 430",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/430",   
       title:"A bill to require sellers of event tickets to disclose comprehensive information to consumers about ticket prices and related fees.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 429",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/429",   
       title:"A bill to enhance the economic and national security of the United States by securing a reliable supply of critical minerals and rare earth elements through trade agreements and strategic partnerships.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 428",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/428",   
       title:"A bill to promote space situational awareness and space traffic coordination and to modify the functions and leadership of the Office of Space Commerce,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 427",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/427",   
       title:"A bill to require the Federal financial institutions regulatory agencies to take risk profiles and business models of institutions into account when taking regulatory actions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 426",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/426",   
       title:"A bill to provide for modifications to ending trafficking in government contracting,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 425",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/425",   
       title:"A bill to amend the Internal Revenue Code of 1986 to modify the carbon oxide sequestration credit to ensure parity for different uses and utilizations of qualified carbon oxide.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 424",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/424",   
       title:"A bill to amend the Federal securities laws to enhance 403(b) plans,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 423",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/423",   
       title:"A bill to protect regular order for budgeting for the Department of Veterans Affairs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 422",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/422",   
       title:"A bill to protect an individual's ability to access contraceptives and to engage in contraception and to protect a health care provider's ability to provide contraceptives,contraception,and information related to contraception.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 421",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/421",   
       title:"A bill to amend the Agricultural Marketing Act of 1946 to establish country of origin labeling requirements for beef,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 420",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/420",   
       title:"A bill to amend the Agriculture Improvement Act of 2018 to reauthorize the dairy business innovation initiatives.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 419",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/419",   
       title:"A bill to amend the Omnibus Crime Control and Safe Streets Act of 1968 to reauthorize grants to support law enforcement officers and families,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 418",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/418",   
       title:"A bill to prohibit contracts between certain foreign entities and institutions of higher education conducting Department of Defense-funded research and to impose post-employment restrictions for participants in certain research funded by the Department,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 417",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/417",   
       title:"A bill to develop a strategy for increasing access to independent information for Chinese citizens,to establish an interagency task force to carry out such strategy,and for other purposes",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 416",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/416",   
       title:"A bill to amend the Marsh-Billings-Rockefeller National Historical Park Establishment Act to expand the boundary of the Marsh-Billings-Rockefeller National Historical Park in the State of Vermont,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 415",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/415",   
       title:"A bill to establish the position of National Roadway Safety Advocate within the Department of Transportation.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 414",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/414",   
       title:"A bill to require covered digital advertising platforms to report their public service advertisements.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 413",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/413",   
       title:"A bill to require the Secretary of the Interior to conduct a study of Plum Island.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 412",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/412",   
       title:"A bill to prescribe requirements relating to the management of the consolidated Federal asset commonly known as Plum Island,New York,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 411",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/411",   
       title:"A bill to develop a database of members of the Armed Forces who died in non-combat military plane crashes and to provide support to the families of such members,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 410",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/410",   
       title:"A bill to amend titles 10 and 38,United States Code,to improve benefits and services for surviving spouses,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 409",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/409",   
       title:"A bill to amend the Internal Revenue Code of 1986 to provide for current year inclusion of net CFC tested income,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 408",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/408",   
       title:"A bill to expand employees eligible for leave and employers subject to leave requirements,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 407",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/407",   
       title:"A bill to authorize an exception to the prohibition on the construction of Coast Guard vessels in foreign shipyards,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 406",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/406",   
       title:"A bill to authorize an exception to the prohibition on the construction of naval vessels in foreign shipyards,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 405",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/405",   
       title:"A bill to modify eligibility requirements for amateur sports governing organizations.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 404",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/404",   
       title:"A bill to direct the Surgeon General to conduct a study regarding the use of mobile devices in elementary and secondary schools,and to establish a pilot program of awarding grants to enable certain schools to create a school environment free of mobile devices.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 403",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/403",   
       title:"A bill to direct the Secretary of Health and Human Services to establish an Office of Rural Health,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 402",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/402",   
       title:"A bill to amend title 11,District of Columbia Official Code,to revise references in such title to individuals with intellectual disabilities.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 976",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/976",   
       title:"To repeal the small business loan data collection requirements under the Equal Credit Opportunity Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 974",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/974",   
       title:"To require the Administrator of the Small Business Administration to ensure that the small business regulatory budget for a small business concern in a fiscal year is not greater than 0,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 973",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/973",   
       title:"To establish consumer standards for lithium-ion batteries.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 972",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/972",   
       title:"To amend the Sloan Canyon National Conservation Area Act to adjust the boundary of the Sloan Canyon National Conservation Area,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 971",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/971",   
       title:"To enhance safety requirements for trains transporting hazardous materials,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 970",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/970",   
       title:"To amend title 38,United States Code,to require the Secretary of Veterans Affairs to periodically review the automatic maximum coverage under the Servicemembers' Group Life Insurance program and the Veterans' Group Life Insurance program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 969",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/969",   
       title:"To impose sanctions on persons engaging in transactions in Afghanistan rare earth minerals.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 968",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/968",   
       title:"To amend title 38,United States Code,to eliminate the time limitation for the use of entitlement by certain veterans under the Post-9/11 Educational Assistance Program of the Department of Veterans Affairs.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 967",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/967",   
       title:"To amend title 38,United States Code,to allow individuals who are entitled to Post-9/11 educational assistance to use such assistance to repay Federal student loans.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 966",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/966",   
       title:"To prohibit the Secretary of Veterans Affairs from denying a veteran benefits administered by the Secretary by reason of the veteran participating in a State-approved marijuana program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 964",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/964",   
       title:"To amend section 6103 of title 5,United States Code,to establish Rosa Parks Day as a Federal holiday,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 963",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/963",   
       title:"To require expedited consideration of a bill that addresses the insolvency of the Federal Old-Age and Survivors Insurance Trust Fund or the Federal Disability Insurance Trust Fund in the case that either trust fund becomes insolvent.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 962",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/962",   
       title:"To prohibit the Secretary of Veterans Affairs from transmitting certain information to the Department of Justice for use by the national instant criminal background check system.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 961",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/961",   
       title:"To direct the Secretary of Veterans Affairs to establish a pilot program to provide veteran health savings accounts to allow veterans to receive primary care furnished under non-Department direct primary care service arrangements,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 960",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/960",   
       title:"To amend chapter 62 of the Harmonized Tariff Schedule of the United States to modify the requirements for a garment to be considered water resistant.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 959",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/959",   
       title:"To establish in the Department of State the Office to Monitor and Combat Islamophobia,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 958",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/958",   
       title:"To amend the Public Health Service Act to reauthorize funding for grants and contracts for primary care training and enhancement,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 957",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/957",   
       title:"To provide for civil monetary penalties for violations of mental health parity requirements.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 956",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/956",   
       title:"To amend the Wildfire Suppression Aircraft Transfer Act of 1996 to reauthorize the sale by the Department of Defense of aircraft and parts for wildfire suppression purposes,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 955",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/955",   
       title:"To amend the Internal Revenue Code of 1986 to reform health provisions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 954",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/954",   
       title:"To amend the Scholarships for Opportunity and Results Act with respect to certain funding,testing,and evaluation requirements and to permanently authorize an appropriation for such Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 953",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/953",   
       title:"To advance United States long-term trade competitiveness and economic leadership in the Indo-Pacific region.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 952",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/952",   
       title:"To convey the reversionary interest of the United States in certain land in Sacramento,California.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 951",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/951",   
       title:"To require the Secretary of the Treasury to mint coins in commemoration of the continual recognition of the Nation's semiquincentennial by honoring over 250 years of Americans' service and sacrifice.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 950",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/950",   
       title:"To amend title XVIII of the Social Security Act to establish pharmacy benefit manager reporting requirements with respect to prescription drug plans and MA-PD plans under Medicare part D.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 949",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/949",   
       title:"To amend the Wild and Scenic Rivers Act to designate a segment of the Hatchie River in the State of Tennessee for study for potential addition to the National Wild and Scenic Rivers System.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 948",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/948",   
       title:"To amend the Internal Revenue Code of 1986 to provide a refundable credit against tax for wildfire mitigation expenditures.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 947",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/947",   
       title:"To prohibit the United States Government from recognizing the Russian Federations claim of sovereignty over any portion of the sovereign territory of Ukraine,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 946",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/946",   
       title:"To amend title XI of the Social Security Act to expand and clarify the exclusion for orphan drugs under the Drug Price Negotiation Program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 945",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/945",   
       title:"To award a Congressional Gold Medal to the Freedom Riders,collectively,in recognition of their unique contribution to Civil Rights,which inspired a revolutionary movement for equality in interstate travel.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 944",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/944",   
       title:"To clarify the rights of certain persons who are held or detained at a port of entry or at any facility overseen by U.S. Customs and Border Protection.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 943",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/943",   
       title:"To ban the imposition of any State or local liability insurance,tax,or user fee requirement for firearm or ammunition ownership or commerce.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 942",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/942",   
       title:"To amend the Energy Policy and Conservation Act to prohibit the export or sale of petroleum products from the Strategic Petroleum Reserve to certain entities,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 941",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/941",   
       title:"To amend the Equal Credit Opportunity Act to provide for an effective date and a temporary safe harbor for compliance with certain small business lending data collection rules,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 940",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/940",   
       title:"To amend the Federal Financial Institutions Examination Council Act of 1978 to improve the examination of depository institutions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 939",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/939",   
       title:"To amend the Internal Revenue Code of 1986 to permit kindergarten through grade 12 educational expenses to be paid from a 529 account.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 938",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/938",   
       title:"To amend the Higher Education Act of 1965 to restrict contracts with foreign countries of concern and foreign entities of concern.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 937",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/937",   
       title:"To limit the authority of the Secretary of Education to propose or issue regulations and executive actions.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 936",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/936",   
       title:"To amend title XI of the Social Security Act to provide for State approval and implementation of specified waivers under the Medicaid program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 935",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/935",   
       title:"To amend the Public Health Service Act to provide for a health care workforce innovation program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 934",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/934",   
       title:"To direct the Secretary of Defense to submit a report about the effects on national security of the surveillance conducted by the People's Republic of China via the high-altitude surveillance balloon shot down in the airspace of the United States in February 2023,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 933",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/933",   
       title:"To modify the minimum required weight of orange juice soluble solids.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 932",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/932",   
       title:"To amend titles 38 and 5,United States Code,to ensure that certain employees of the Department of Veterans Affairs are subject to the same removal,demotion,and suspension policies as other employees of the Federal Government,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 931",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/931",   
       title:"To allow certain Federal minerals to be mined consistent with the Bull Mountains Mining Plan Modification,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 930",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/930",   
       title:"To amend titles II and XVIII of the Social Security Act to eliminate the disability insurance benefits waiting period for individuals with disabilities,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 929",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/929",   
       title:"To reauthorize the Dr. Lorna Breen Health Care Provider Protection Act,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 928",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/928",   
       title:"To enhance safety requirements for trains transporting hazardous materials,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 927",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/927",   
       title:"To amend the Higher Education Act of 1965 to prohibit institutions of higher education from requiring ideological oaths or similar statements,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 926",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/926",   
       title:"To conduct a special resource study of Fort Pillow Historic State Park in Henning,Tennessee,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 925",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/925",   
       title:"To ensure equal protection of the law,to prevent racism in the Federal Government,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 924",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/924",   
       title:"To transfer and limit Executive Branch authority to suspend or restrict the entry of a class of aliens.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 923",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/923",   
       title:"To prohibit the importation,sale,manufacture,transfer,or possession of .50 caliber rifles,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 922",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/922",   
       title:"To provide targeted funding for States and other eligible entities through the Social Services Block Grant program to increase the availability of menstrual products for individuals with limited access to such products.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 921",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/921",   
       title:"To award a Congressional Gold Medal to Master Sergeant Roderick \"Roddie\" Edmonds in recognition of his heroic actions during World War II.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 920",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/920",   
       title:"To amend the Controlled Substances Act to list fentanyl-related substances as schedule I controlled substances,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 919",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/919",   
       title:"To codify Internal Revenue Service guidance relating to treatment of certain services and items for chronic conditions as meeting the preventive care deductible safe harbor for purposes of high deductible health plans in connection with health savings accounts.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 918",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/918",   
       title:"To amend the Internal Revenue Code of 1986 to make permanent the deduction for mortgage insurance premiums.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 917",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/917",   
       title:"To amend the Internal Revenue Code of 1986 to make permanent the exclusion from gross income of discharge of qualified principal residence indebtedness.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 916",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/916",   
       title:"To require the Secretary of the Treasury to mint commemorative coins in recognition of the life and legacy of Rosa Parks.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 915",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/915",   
       title:"To authorize small business loans to finance access to modern business software,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 914",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/914",   
       title:"To amend the Tariff Act of 1930 to provide that required country-of-origin labeling for any agricultural product packaged in a can shall be on the front label or top of such can,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 913",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/913",   
       title:"To amend title 38,United States Code,to authorize the Secretary of Veterans Affairs to approve a rehabilitation program for a certain veterans with service-connected disabilities that include the pursuit of non-degree flight training programs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 912",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/912",   
       title:"To amend title V of the Public Health Service Act to secure the suicide prevention lifeline from cybersecurity incidents,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 911",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/911",   
       title:"To amend title 5,United States Code,to establish Patriot Day as a Federal holiday.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 910",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/910",   
       title:"To require the Secretary of the Treasury to pursue more equitable treatment of Taiwan at the international financial institutions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 909",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/909",   
       title:"To temporarily provide additional deposits into the Crime Victims Fund.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 908",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/908",   
       title:"To amend section 230 of the Communications Act of 1934 (commonly referred to as the Communications Decency Act) to stop censorship,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 401",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/401",   
       title:"A bill to amend the Federal Reserve Act to prohibit certain financial service providers who deny fair access to financial services from using taxpayer funded discount window lending programs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 400",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/400",   
       title:"A bill to amend the Internal Revenue Code of 1986 to enhance the paid family and medical leave credit,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 399",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/399",   
       title:"A bill to amend section 1507 of title 18,United States Code,to establish appropriate penalties for obstruction of justice by picketing or parading in or near court buildings or residences of judges,jurors,witnesses,or other court officers.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 398",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/398",   
       title:"A bill to transfer and limit Executive Branch authority to suspend or restrict the entry of a class of aliens.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 397",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/397",   
       title:"A bill to amend the Small Business Act to increase the minimum disaster loan amount for which the Small Business Administration may require collateral,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 396",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/396",   
       title:"A bill to amend title 38,United States Code,to impose limitations on the provision of critical skill incentives to employees of the Department of Veterans Affairs in Senior Executive Services positions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 395",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/395",   
       title:"A bill to amend the Healthy Forests Restoration Act of 2003 to expedite wildfire prevention projects to reduce the risk of wildfire on certain high-risk Federal land,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 394",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/394",   
       title:"A bill to provide for the regulation of payment stablecoins,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 393",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/393",   
       title:"A bill to amend the Energy Policy and Conservation Act to prohibit the export or sale of petroleum products from the Strategic Petroleum Reserve to certain entities,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 392",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/392",   
       title:"A bill to amend the Sloan Canyon National Conservation Area Act to adjust the boundary of the Sloan Canyon National Conservation Area,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 391",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/391",   
       title:"A bill to clarify the rights of certain persons who are held or detained at a port of entry or at any facility overseen by U.S. Customs and Border Protection.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 390",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/390",   
       title:"A bill to require Federal law enforcement agencies to report on cases of missing or murdered Indians,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 389",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/389",   
       title:"A bill to establish consumer standards for lithium-ion batteries.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 388",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/388",   
       title:"A bill to amend the Robert T. Stafford Disaster Relief and Emergency Assistance Act with respect to the implementation of building codes,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 387",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/387",   
       title:"A bill to require the Administrator of the Small Business Administration to ensure that the small business regulatory budget for a small business concern in a fiscal year is not great than 0,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 386",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/386",   
       title:"A bill to amend the Endangered Species Act of 1973 to provide exemptions from the consultation requirements required under that Act for agency actions that fulfill critical human water needs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 385",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/385",   
       title:"A bill to amend title 38,United States Code,to require the Secretary of Veterans Affairs to periodically review the automatic maximum coverage under the Servicemembers' Group Life Insurance program and the Veterans' Group Life Insurance program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 384",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/384",   
       title:"A bill to prohibit the use of materials that use the term \"West Bank\",and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 383",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/383",   
       title:"A bill to extend Federal Pell Grant eligibility of certain short-term programs.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 382",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/382",   
       title:"A bill to ensure equal protection of the law,to prevent racism in the Federal Government,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 381",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/381",   
       title:"A bill to amend the Truth in Lending Act to cap credit card interest rates at 10 percent.",
       partySupport:"Independent",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 380",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/380",   
       title:"A bill to improve obstetric emergency care.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 379",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/379",   
       title:"A bill to prohibit the General Services Administration from awarding contracts to certain insured depository institutions that avoid doing business with certain companies that are engaged in lawful commerce based solely on social policy considerations.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 378",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/378",   
       title:"A bill to authorize the Federal Emergency Management Agency to waive certain requirements for property acquisition and structure demolition or relocation projects.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 377",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/377",   
       title:"A bill to amend the Higher Education Act of 1965,to add a work-study program for off-campus community service at selected after-school activities,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 376",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/376",   
       title:"A bill to provide the Food and Drug Administration with authority to conduct microbial sampling on concentrated animal feeding operations as necessary to facilitate a foodborne illness outbreak investigation,determine the root cause of an outbreak of foodborne illness,or address other public health needs.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 375",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/375",   
       title:"A bill to amend the Elementary and Secondary Education Act of 1965 to award grants to eligible entities to establish,expand,or support school-based mentoring programs to assist at-risk middle school students with the transition from middle school to high school.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 374",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/374",   
       title:"A bill to establish a pilot program for property acquisition projects,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 373",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/373",   
       title:"A bill to prohibit discrimination based on political affiliation in granting disaster assistance.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 372",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/372",   
       title:"A bill to amend the Robert T. Stafford Disaster Relief and Emergency Assistance Act to incentivize certain preparedness measures,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 371",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/371",   
       title:"SBA Disaster Transparency Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 370",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/370",   
       title:"A bill to amend the Internal Revenue Code of 1986 to establish tax credits to encourage individual and corporate taxpayers to contribute to scholarships for students through eligible scholarship-granting organizations and eligible workforce training organizations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 369",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/369",   
       title:"A bill to amend the Internal Revenue Code of 1986 to deny certain green energy tax benefits to companies associated with foreign adversaries.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 368",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/368",   
       title:"A bill to require congressional approval for rules that are expected to cost not less than $50,000,000 annually,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 367",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/367",   
       title:"A bill to prohibit the importation,sale,manufacture,transfer,or possession of .50 caliber rifles,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 366",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/366",   
       title:"A bill to posthumously award a Congressional Gold Medal to Muhammad Ali,in recognition of his contributions to the United States.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 365",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/365",   
       title:"A bill to amend the John D. Dingell,Jr. Conservation,Management,and Recreation Act to allow for additional entities to be eligible to complete the maintenance work on Bolts Ditch and the Bolts Ditch Headgate within the Holy Cross Wilderness,Colorado.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 364",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/364",   
       title:"A bill to amend the Internal Revenue Code of 1986 to remove silencers from the definition of firearms,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 363",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/363",   
       title:"A bill to impose sanctions with respect to foreign governments that resist efforts to repatriate their citizens who have unlawfully entered the United States and foreign governments and foreign persons that knowingly facilitate unlawful immigration into the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 362",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/362",   
       title:"A bill to allow certain Federal minerals to be mined consistent with the Bull Mountains Mining Plan Modification,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 361",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/361",   
       title:"A bill to strengthen trafficking victim assistance grant funding.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 360",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/360",   
       title:"A bill to provide for across-the-board rescissions of nonsecurity discretionary spending.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 359",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/359",   
       title:"A bill to implement a 5-year pilot program establishing a performance-based pay structure for certain Federal employees in order to enhance productivity,accountability,and employee satisfaction in public service.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 358",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/358",   
       title:"A bill to amend the Internal Revenue Code of 1986 to increase the threshold amounts for inclusion of Social Security benefits in income.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 357",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/357",   
       title:"A bill to impose restrictions on Federal agencies with respect to appointments,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 356",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/356",   
       title:"A bill to extend the Secure Rural Schools and Community Self-Determination Act of 2000.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 355",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/355",   
       title:"A bill to require the Secretary of Health and Human Services,acting through the Commissioner of Food and Drugs,to publish a final rule relating to nonclinical testing methods.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 354",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/354",   
       title:"A bill to require Executive agencies to submit to Congress a study of the impacts of expanded telework and remote work by agency employees during the COVID-19 pandemic and a plan for the agency's future use of telework and remote work,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 353",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/353",   
       title:"A bill to establish a commission to study the relocation of certain agencies outside of the Washington,D.C. metropolitan area,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 907",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/907",   
       title:"To provide for the settlement of the water rights claims of the Fort Belknap Indian Community,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 906",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/906",   
       title:"To direct the Federal Communications Commission to publish a list of entities that hold authorizations,licenses,or other grants of authority issued by the Commission and that have certain foreign ownership,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 905",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/905",   
       title:"To amend the Internal Revenue Code of 1986 to extend the earned income tax credit to all taxpayers with dependents and to qualifying students,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 904",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/904",   
       title:"To amend the Internal Revenue Code of 1986 to repeal the inclusion in gross income of Social Security benefits.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 903",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/903",   
       title:"To amend the Clean Air Act to establish a grant program for supporting local communities in detecting,preparing for,communicating about,or mitigating the environmental and public health impacts of wildfire smoke and extreme heat,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 902",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/902",   
       title:"To prohibit the use of materials that use the term \"West Bank\",and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 901",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/901",   
       title:"To require the Under Secretary of the Science and Technology Directorate of the Department of Homeland Security to develop a Department-wide policy and process to safeguard research and development from unauthorized access to or disclosure of sensitive information in research and development acquisitions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 900",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/900",   
       title:"To direct the Director of the United States Geological Survey to establish a program to map zones that are at greater risk of sinkhole formation,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 899",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/899",   
       title:"To terminate the Department of Education.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 898",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/898",   
       title:"To develop pilot grant programs through the Environmental Protection Agency to research and collect data on aircraft and airport noise and emissions and to use such information and data to develop a mitigation strategy,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 897",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/897",   
       title:"To require the Federal Aviation Administration to provide funding for noise mitigation,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 896",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/896",   
       title:"To direct the Secretary of Education to award grants to State educational agencies for the purpose of implementing,administering,and evaluating programs that provide tutoring to students in elementary and secondary schools,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 895",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/895",   
       title:"To amend title 18,United States Code,to require the Attorney General to investigate alleged violations of the partial birth abortion ban.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 894",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/894",   
       title:"To authorize grants to implement school-community partnerships for preventing substance use and misuse among youth.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 893",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/893",   
       title:"To amend the Internal Revenue Code of 1986 to provide a credit for working families housing development,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 892",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/892",   
       title:"To require the heads of certain agencies to disclose information about loans insured and guaranteed by such agencies,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 891",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/891",   
       title:"To direct the Secretary of Housing and Urban Development and the Administrator of the General Services Administration to establish programs for the development of affordable housing,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 890",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/890",   
       title:"To amend title 35,United States Code,to prevent double patenting,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 889",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/889",   
       title:"To amend the Omnibus Consolidated Rescissions and Appropriations Act of 1996 to remove the limit on the number of public housing agencies the Secretary of Housing and Urban Development may add to the moving to work demonstration program.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 888",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/888",   
       title:"To amend the Communications Act of 1934 to direct the Federal Communications Commission to promulgate regulations with respect to rebates for certain video programming blackouts,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 887",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/887",   
       title:"To direct the Comptroller General of the United States to conduct a study on grocery costs to United States consumers,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 886",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/886",   
       title:"To prohibit the Administrator of the Small Business Administration from garnishing social security benefits with respect to certain named individuals of covered loans who are victims of identity theft,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 885",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/885",   
       title:"To direct the Secretary of State to submit to Congress a report on the designation of the Gulf Cartel,the Cartel Del Noreste,the Cartel de Sinaloa,and the Cartel de Jalisco Nueva Generacion as foreign terrorist organizations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 884",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/884",   
       title:"To prohibit individuals who are not citizens of the United States from voting in elections in the District of Columbia and to repeal the Local Resident Voting Rights Amendment Act of 2022.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 883",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/883",   
       title:"To require the Secretary of Homeland Security to provide candidates with a justification for candidate protection determinations,to require Senate confirmation of the Director of the United States Secret Service,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 882",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/882",   
       title:"To prohibit the hiring of individuals who are not citizens of the United States to administer an election for Federal office in a State or local jurisdiction,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 881",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/881",   
       title:"To establish Department of Homeland Security funding restrictions on institutions of higher education that have a relationship with Confucius Institutes,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 880",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/880",   
       title:"A bill to amend title 49,United States Code,to clarify the authority of the Administrator of the Federal Motor Carrier Safety Administration relating to the shipping of household goods,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 879",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/879",   
       title:"To amend title XVIII of the Social Security Act to increase support for physicians and other practitioners in adjusting to Medicare payment changes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 878",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/878",   
       title:"To extend the supplemental security income program to Guam,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 877",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/877",   
       title:"To amend title 38,United States Code,to expand the authority of the Secretary of Veterans Affairs to provide or assist in providing a vehicle adapted for operation by a disabled individual to certain eligible persons,by paying expenses associated with the delivery of such vehicle,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 876",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/876",   
       title:"To amend the Defense Base Act to exclude Guam.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 875",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/875",   
       title:"To amend the Immigration and Nationality Act to provide that aliens who have been convicted of or who have committed an offense for driving while intoxicated or impaired are inadmissible and deportable.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 874",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/874",   
       title:"To amend title 38,United States Code,to modify the rate of pay for care or services provided under the Community Care Program of the Department of Veterans Affairs based on the location at which such care or services were provided,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 873",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/873",   
       title:"To amend title 10,United States Code,to modify the rate of pay for care or services provided under the TRICARE program based on the location at which such care or services were provided.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 872",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/872",   
       title:"To require covered contractors implement a vulnerability disclosure policy consistent with NIST guidelines,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 871",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/871",   
       title:"To amend the Immigration and Nationality Act to modify the eligibility requirements for asylum.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 870",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/870",   
       title:"To amend title XVIII of the Social Security Act to make improvements to the redistribution of residency slots under the Medicare program after a hospital closes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 869",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/869",   
       title:"To require full funding of part A of title I of the Elementary and Secondary Education Act of 1965 and the Individuals with Disabilities Education Act.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 868",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/868",   
       title:"To address sexual harassment and sexual assault of Bureau of Prisons staff in prisons,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 867",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/867",   
       title:"To amend the Anti-Boycott Act of 2018 to apply the provisions of that Act to international governmental organizations.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 866",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/866",   
       title:"To direct the Secretary of Commerce,acting through the Assistant Secretary of Commerce for Communications and Information,to conduct a study of the national security risks posed by consumer routers,modems,and devices that combine a modem and router,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 865",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/865",   
       title:"To amend the Small Business Act to require training on increasing contract awards to small business concerns owned and controlled by service-disabled veterans,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 864",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/864",   
       title:"To clarify the Federal Government's jurisdiction over immigration law and policy.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 863",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/863",   
       title:"To establish a national human trafficking database at the Office for Victims of Crime of the Department of Justice,and to incentivize certain State agencies to report data to the database.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 862",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/862",   
       title:"To reduce commuting burdens on Transportation Security Administration employees,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 861",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/861",   
       title:"To amend title 17,United States Code,to provide fair treatment of radio stations and artists for the use of sound recordings,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 860",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/860",   
       title:"To reauthorize the Congressional Award Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 859",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/859",   
       title:"To require the disclosure of a camera or recording capability in certain internet-connected devices.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 858",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/858",   
       title:"To amend the Internal Revenue Code of 1986 to determine global intangible low-taxed income without regard to certain income derived from services performed in the Virgin Islands.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 857",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/857",   
       title:"To designate the facility of the United States Postal Service located at 4400 East Paisano Drive in El Paso,Texas,as the \"Enedina Sanchez Cordero Post Office Building\".",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 856",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/856",   
       title:"To require the Director of the Office of Management and Budget conduct a review to determine the impact of the lowest price technically acceptable source selection process on national security,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 855",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/855",   
       title:"To establish an Office of Housing Innovation in the Department of Housing and Urban Development to assist in exploring and developing new approaches for increasing and diversifying the supply of housing and for meeting the challenges of housing shortages,housing affordability,and traffic congestion,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 854",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/854",   
       title:"To direct the Secretary of Transportation to issue certain regulations to define high-hazard flammable train,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 853",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/853",   
       title:"To authorize the declaration of a hazardous train event,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 852",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/852",   
       title:"To provide the Food and Drug Administration with authority to conduct microbial sampling on concentrated animal feeding operations as necessary to facilitate a foodborne illness outbreak investigation,determine the root cause of an outbreak of foodborne illness,or address other public health needs.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 851",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/851",   
       title:"To establish the position of National Roadway Safety Advocate within the Department of Transportation,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 850",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/850",   
       title:"To provide that silencers be treated the same as firearms accessories.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 849",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/849",   
       title:"To provide limitations for Federal agencies entering into settlement agreements and consent decrees,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 848",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/848",   
       title:"To direct the Administrator of the Environmental Protection Agency to establish a voluntary food climate labeling program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 847",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/847",   
       title:"To repeal certain formula grants under the Elementary and Secondary Education Act of 1965 and use such funds to award block grants to States,except as otherwise appropriated by Congress.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 846",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/846",   
       title:"To prohibit disinformation in the advertising of abortion services,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 845",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/845",   
       title:"To require the Secretary of the Interior to reissue regulations removing the gray wolf from the list of endangered and threatened wildlife under the Endangered Species Act of 1973.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 844",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/844",   
       title:"To authorize the Secretary of Education to award grants to eligible entities to carry out educational programs that include the history of peoples of African descent in the settling and founding of America,the economic and political environments that led to the development,institutionalization,and abolition of slavery and its impact on all Americans,the exploration and expansion of America,impact on and contributions to the development and enhancement of American life,United States history,literature,the economy,politics,body of laws,and culture,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 843",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/843",   
       title:"To amend the Federal Food,Drug,and Cosmetic Act to provide for the prompt approval of drugs when safety information is added to labeling,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 842",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/842",   
       title:"To amend title XVIII of the Social Security Act to provide for Medicare coverage of multi-cancer early detection screening tests.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 841",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/841",   
       title:"To amend title 54,United States Code,to prohibit the acquisition of land,water,or an interest in land or water from a private landowner using amounts made available under the Land and Water Conservation Fund.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 840",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/840",   
       title:"To provide that the final rule of the United States Fish and Wildlife Service titled \"Endangered and Threatened Wildlife and Plants; Endangered Species Status With Critical Habitat for Guadalupe Fatmucket,Texas Fatmucket,Guadalupe Orb,Texas Pimpleback,Balcones Spike,and False Spike,and Threatened Species Status With Section 4(d) Rule and Critical Habitat for Texas Fawnsfoot\" shall have no force or effect.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 839",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/839",   
       title:"To prohibit the implementation of a Land Protection Plan for Muleshoe National Wildlife Refuge.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 838",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/838",   
       title:"To allow a State to submit a declaration of intent to the Secretary of Education to combine certain funds to improve the academic achievement of students.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 834",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/834",   
       title:"To amend the Robert T. Stafford Disaster Relief and Emergency Assistance Act to provide assistance for common interest communities,condominiums,and housing cooperatives damaged by a major disaster,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 833",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/833",   
       title:"To amend the Internal Revenue Code of 1986 to allow a credit against tax for charitable donations to nonprofit organizations providing education scholarships to qualified elementary and secondary students.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 832",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/832",   
       title:"To clarify the primary functions and duties of the Office of Advocacy of the Small Business Administration,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 831",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/831",   
       title:"To establish an interest-bearing account for the non-Federal contributions to the Lower Colorado River Multi-Species Conservation Program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 830",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/830",   
       title:"To amend the Controlled Substances Act with respect to fentanyl-related substances,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 829",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/829",   
       title:"To amend title 31,United States Code,to require the President to consider the Government Accountability Offices annual report on how to improve the efficiency and effectiveness of Government when preparing the Presidents annual budget submission,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 352",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/352",   
       title:"A bill to amend the Robert T. Stafford Disaster Relief and Emergency Assistance Act to provide assistance for common interest communities,condominiums,and housing cooperatives damaged by a major disaster,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 351",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/351",   
       title:"STEWARD Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 350",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/350",   
       title:"A bill to direct the Secretary of Agriculture to select and implement landscape-scale forest restoration projects,to assist communities in increasing their resilience to wildfire,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 349",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/349",   
       title:"A bill to authorize the Secretary of Agriculture to permit removal of trees around electrical lines on National Forest System land without conducting a timber sale,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 348",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/348",   
       title:"A bill to limit the authority of the President to impose new or additional duties with respect to articles imported from countries that are allies or free trade agreement partners of the United States.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 347",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/347",   
       title:"Brownfields Reauthorization Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 346",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/346",   
       title:"A bill to protect the right of law-abiding citizens to transport knives interstate,notwithstanding a patchwork of State and local prohibitions that burden citizens.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 345",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/345",   
       title:"A bill to provide that silencers be treated the same as firearms accessories.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 344",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/344",   
       title:"A bill to require the Commissioner of U.S. Customs and Border Protection to identify and conduct recurrent vetting of evacuees from Afghanistan found not to be properly vetted before entering the United States.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 343",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/343",   
       title:"A bill to require full funding of part A of title I of the Elementary and Secondary Education Act of 1965 and the Individuals with Disabilities Education Act.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 342",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/342",   
       title:"A bill to amend title 38,United States Code,to authorize an individual who is awarded the Purple Heart for service in the Armed Forces to transfer unused Post-9/11 Educational Assistance to a family member,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 341",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/341",   
       title:"A bill to amend the Clean Air Act to establish a grant program for supporting local communities in detecting,preparing for,communicating about,or mitigating the environmental and public health impacts of wildfire smoke and extreme heat,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 340",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/340",   
       title:"A bill to direct the President to designate a month as African Diaspora Heritage Month.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 339",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/339",   
       title:"A bill to amend title XVIII of the Social Security Act to provide for Medicare coverage of multi-cancer early detection screening tests.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 338",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/338",   
       title:"A bill to award posthumously a Congressional Gold Medal to Fred Korematsu,in recognition of his contributions to civil rights,his loyalty and patriotism to the United States,and his dedication to justice and equality.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 337",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/337",   
       title:"A bill to amend title 49,United States Code,to clarify the authority of the Administrator of the Federal Motor Carrier Safety Administration relating to the shipping of household goods,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 336",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/336",   
       title:"A bill to amend the Internal Revenue Code of 1986 to exclude from gross income amounts received from State-based catastrophe loss mitigation programs.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 335",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/335",   
       title:"A bill to amend title XVIII of the Social Security Act to rebase the calculation of payments for sole community hospitals and Medicare-dependent hospitals,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 334",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/334",   
       title:"A bill to permanently enact certain appropriations Act restrictions on the use of funds for abortions and involuntary sterilizations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 333",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/333",   
       title:"A bill to repeal certain provisions relating to taxpayer subsidies for home electrification,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 332",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/332",   
       title:"A bill to require a study on Holocaust education efforts of States,local educational agencies,and public elementary and secondary schools,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 331",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/331",   
       title:"A bill to amend the Controlled Substances Act with respect to the scheduling of fentanyl-related substances,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 330",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/330",   
       title:"A bill to impose sanctions with respect to persons that operate in a sector of the economy of the People's Republic of China in which the person has engaged in a pattern of significant theft of the intellectual property of a United States person,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 329",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/329",   
       title:"A bill to authorize grants to implement school-community partnerships for preventing substance use and misuse among youth.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 328",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/328",   
       title:"A bill to amend the Communications Act of 1934 to direct the Federal Communications Commission to promulgate regulations with respect to rebates for certain video programming blackouts,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 327",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/327",   
       title:"A bill to amend the Internal Revenue Code of 1986 to deny any foreign tax credit or deduction with respect to taxes paid or accrued to the Russian Federation.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 326",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/326",   
       title:"A bill to amend title 17,United States Code,to provide fair treatment of radio stations and artists for the use of sound recordings,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 325",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/325",   
       title:"A bill to reduce health risks of heat by establishing the National Integrated Heat Health Information System within the National Oceanic and Atmospheric Administration and the National Integrated Heat Health Information System Interagency Committee to improve extreme heat preparedness,planning,and response,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 324",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/324",   
       title:"A bill to require the Under Secretary of Commerce for Oceans and Atmosphere to carry out pilot projects relating to improved subseasonal to seasonal forecasting in agriculture and water management,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 323",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/323",   
       title:"A bill to direct the Assistant Secretary of Commerce for Communications and Information to develop a National Strategy to Synchronize Federal Broadband Programs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 322",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/322",   
       title:"A bill to improve the lead time,accuracy,and dissemination of forecasts of atmospheric rivers throughout the United States,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 321",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/321",   
       title:"A bill to amend title 18,United States Code,to prohibit United States persons from advancing artificial intelligence capabilities within the People's Republic of China,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 320",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/320",   
       title:"A bill to authorize the Earthquake Hazards Reduction Act of 1977,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 319",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/319",   
       title:"A bill to direct the Secretary of Agriculture to review the Cattle Fever Tick Eradication Program,and for other programs.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 318",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/318",   
       title:"A bill to require a plan to improve the cybersecurity and telecommunications of the U.S. Academic Research Fleet,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 317",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/317",   
       title:"A bill to amend the Internal Revenue Code of 1986 to modify and extend the deduction for charitable contributions for individuals not itemizing deductions.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 316",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/316",   
       title:"A bill to direct the Secretary of the Interior to reissue a final rule relating to removing the Greater Yellowstone Ecosystem population of grizzly bears from the Federal list of endangered and threatened wildlife,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 315",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/315",   
       title:"AM Radio for Every Vehicle Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 314",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/314",   
       title:"Hotel Fees Transparency Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 313",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/313",   
       title:"A bill to restrict United States voluntary and assessed contributions to the United Nations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 312",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/312",   
       title:"A bill to establish a Federal tort against pediatric gender clinics and other entities pushing gender-transition procedures that cause bodily injury to children or harm the mental health of children.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 311",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/311",   
       title:"A bill to amend the Internal Revenue Code of 1986 to provide incentives for education.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 310",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/310",   
       title:"A bill to establish a grant program to address the crisis in accessing affordable housing and child care through the co-location of housing and child care,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 309",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/309",   
       title:"A bill to allow a State to submit a declaration of intent to the Secretary of Education to combine certain funds to improve the academic achievement of students.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 308",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/308",   
       title:"A bill to modify the annual and aggregate limits of Federal Unsubsidized Stafford Loans for graduate and professional students,and to terminate Federal Direct PLUS Loans for graduate and professional students,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 307",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/307",   
       title:"A bill to address sexual harassment and sexual assault of Bureau of Prisons staff in prisons,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 306",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/306",   
       title:"Fire Ready Nation Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 305",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/305",   
       title:"A bill to authorize small business loans to finance access to modern business software,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 304",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/304",   
       title:"A bill to amend section 301 of the Immigration and Nationality Act to clarify those classes of individuals born in the United States who are nationals and citizens of the United States at birth.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 303",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/303",   
       title:"A bill to amend the Consumer Financial Protection Act of 2010 to limit to $0 the amount that the Director of the Bureau of Consumer Financial Protection may request to fund the activities of the Bureau.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 302",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/302",   
       title:"A bill to amend the Food and Nutrition Act of 2008 to improve the calculation and reduce the taxpayer cost of payment errors under the supplemental nutrition assistance program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 301",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/301",   
       title:"A bill to authorize the appropriation of $10,000,000,000 to the Department of Defense for military support to secure the borders of the United States.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 300",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/300",   
       title:"DLARA",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 299",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/299",   
       title:"A bill to establish a competitive grant program to support the establishment,expansion,or enhancement of youth mentoring programs for eligible youth,and to provide for social and emotional learning,employability skill development,career exploration,work-based learning,and other youth workforce opportunities.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 298",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/298",   
       title:"Returning SBA to Main Street Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 297",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/297",   
       title:"A bill to amend title XXVII of the Public Health Service Act to require group health plans and health insurance issuers offering group or individual health insurance coverage to provide coverage for prostate cancer screenings without the imposition of cost-sharing requirements,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 296",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/296",   
       title:"A bill to make certain modifications to the repayment for the Arkansas Valley Conduit in the State of Colorado.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 295",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/295",   
       title:"A bill to reduce the size of the Federal workforce through attrition,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 294",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/294",   
       title:"A bill to require origin and location disclosure for new products of Foreign origin offered for sale on the internet.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 293",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/293",   
       title:"A bill to appropriate $25,000,000,000 for the construction of a border wall between the United States and Mexico,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 292",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/292",   
       title:"A bill to amend the Internal Revenue Code of 1986 to allow a credit against tax for charitable donations to nonprofit organizations providing education scholarships to qualified elementary and secondary students.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 291",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/291",   
       title:"A bill to establish an interest-bearing account for the non-Federal contributions to the Lower Colorado River Multi-Species Conservation Program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 290",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/290",   
       title:"A bill to direct the Secretary of the Interior to upgrade existing emergency communications centers in units of the National Park System to Next Generation 9-1-1 systems,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 289",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/289",   
       title:"A bill to ban the sale of products with a high concentration of sodium nitrate to individuals,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 288",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/288",   
       title:"A bill to support and promote human rights of Southern Mongolians in the People's Republic of China,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 828",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/828",   
       title:"To require the Administrator of the Small Business Administration to report on the veterans interagency task force,to require the Comptroller General of the United States to report on access to credit for small business concerns owned and controlled by covered individuals,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 827",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/827",   
       title:"To ensure the availability and affordability of homeowners' insurance coverage for catastrophic events.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 826",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/826",   
       title:"To require the Inspector General of the Small Business Administration to submit a quarterly report on fraud relating to certain COVID-19 loans.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 825",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/825",   
       title:"To prohibit individuals convicted of defrauding the Government from receiving any assistance from the Small Business Administration,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 824",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/824",   
       title:"To require the evaluation of Federal agencies and programs for duplicative,wasteful,or outdated functions,and to recommend the elimination or realignment of such functions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 823",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/823",   
       title:"To amend the Internal Revenue Code of 1986 to exempt servicemembers from the income tax.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 822",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/822",   
       title:"To amend the Small Business Act to require the Small Business and Agriculture Regulatory Enforcement Ombudsman to publish guidance documents for certain rules,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 821",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/821",   
       title:"To award posthumously a Congressional Gold Medal to Fred Korematsu,in recognition of his contributions to civil rights,his loyalty and patriotism to the Nation,and his dedication to justice and equality.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 820",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/820",   
       title:"To amend the Bottles and Breastfeeding Equipment Screening Act to require hygienic handling of breast milk and baby formula by security screening personnel of the Transportation Security Administration and personnel of private security companies providing security screening,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 819",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/819",   
       title:"To award posthumously a Congressional Gold Medal to Colonel Young Oak Kim in recognition of his extraordinary heroism,leadership,and humanitarianism.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 818",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/818",   
       title:"To amend the Small Business Act to include requirements relating to new small business entrants in the scorecard program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 817",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/817",   
       title:"To amend the Internal Revenue Code of 1986 to allow a credit against tax for charitable donations to nonprofit organizations providing education scholarships to qualified elementary and secondary students.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 816",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/816",   
       title:"To establish the Southern Border Wall Construction Fund and to transfer unobligated amounts from the Coronavirus State and local fiscal recovery funds to such Fund to construct and maintain physical barriers along the southern border.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 815",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/815",   
       title:"To amend the Internal Revenue Code of 1986 to extend expensing of environmental remediation costs.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 814",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/814",   
       title:"To amend the Consumer Financial Protection Act of 2010 to limit to $0 the amount that the Director of the Bureau of Consumer Financial Protection may request to fund the activities of the Bureau.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 813",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/813",   
       title:"To amend the Food and Nutrition Act of 2008 to prohibit the use of supplemental nutrition assistance program benefits to purchase soda.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 812",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/812",   
       title:"To direct the Director of the National Science Foundation to award grants for,and support research on,the development of makerspaces,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 811",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/811",   
       title:"To establish a competitive grant program to support the establishment,expansion,or enhancement of youth mentoring programs for eligible youth,and to provide for social and emotional learning,employability skill development,career exploration,work-based learning,and other youth workforce opportunities.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 810",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/810",   
       title:"To amend the Internal Revenue Code of 1986 to expand and improve health savings accounts,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 809",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/809",   
       title:"To direct the President to take such actions as may be necessary to prohibit the purchase of public or private real estate located in the United States by members of the Chinese Communist Party and entities that are under the ownership,control,or influence of the Chinese Communist Party.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 808",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/808",   
       title:"To amend the Internal Revenue Code of 1986 to permit qualified business trade expenses to be treated as qualified higher education expenses for purposes of 529 accounts.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 807",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/807",   
       title:"To direct the Secretary of the Treasury to submit a report on coordination in the public and private sectors in responding to ransomware attacks on financial institutions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 806",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/806",   
       title:"To direct the Director of the Bureau of Prisons to provide information on certain persons under the jurisdiction of the Bureau of Prisons to the Mayor of the District of Columbia,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 805",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/805",   
       title:"To amend section 321 of the Tariff Act of 1930 to modify the administrative exemptions under that Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 804",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/804",   
       title:"To require the Administrator of the Small Business Administration to improve access to disaster assistance for individuals located in rural areas,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 803",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/803",   
       title:"To amend title 38,United States Code,to allow a surviving spouse of a Medal of Honor recipient to receive a special pension concurrently with dependency and indemnity compensation,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 802",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/802",   
       title:"To amend the Internal Revenue Code of 1986 to add qualified semiconductor design expenditures to the advanced manufacturing investment credit.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 801",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/801",   
       title:"To amend the Internal Revenue Code of 1986 to modify and extend the deduction for charitable contributions for individuals not itemizing deductions.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 800",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/800",   
       title:"To enact into law the executive order relating to ending diversity,equity,and inclusion programs in the Federal Government,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced','Transgender', 'LGBTQ','Pinned'] 
  },
   {
       bill_id:"H.R. 799",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/799",   
       title:"To provide for parental notification and intervention in the case of an unemancipated minor seeking an abortion.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 798",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/798",   
       title:"To protect the dignity of fetal remains,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 797",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/797",   
       title:"To ensure that women seeking an abortion are notified,before giving informed consent to receive an abortion,of the medical risks associated with the abortion procedure and the major developmental characteristics of the unborn child.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 796",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/796",   
       title:"To amend the Federal Food,Drug,and Cosmetic Act to require a warning label advising that the effects of mifepristone can be counteracted,to amend the Public Health Service Act to establish a hotline to provide information to women seeking to counteract the effects of mifepristone,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 795",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/795",   
       title:"To prohibit the Department of Health and Human Services from treating pregnancy as an illness for purposes of approving abortion drugs.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 794",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/794",   
       title:"To amend title 5,United States Code,to establish Lunar New Year Day as a Federal holiday,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 793",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/793",   
       title:"To amend the Food and Nutrition Act of 2008 to repeal the limitation on the maximum deduction for shelter expenses allowable for determination of benefits under such Act.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 792",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/792",   
       title:"To direct the Secretary of the Interior to arrange for the carving of the figure of President Donald J. Trump on Mount Rushmore National Memorial.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 791",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/791",   
       title:"To amend title 17,United States Code,to provide for blocking orders relating to specifically identified infringing foreign websites or online services,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 790",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/790",   
       title:"To amend title 38,United States Code,to authorize an individual who is awarded the Purple Heart for service in the Armed Forces to transfer unused Post-9/11 Educational Assistance to a family member,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 789",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/789",   
       title:"To require the Administrator of the Small Business Administration to issue rules for cancelled covered solicitations,to amend the Small Business Act to provide assistance to small business concerns relating to certain cancelled solicitations,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 788",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/788",   
       title:"To provide for Department of Energy and Small Business Administration joint research and development activities,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 787",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/787",   
       title:"To require plain language and the inclusion of key words in covered notices that are clear,concise,and accessible to small business concerns,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 786",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/786",   
       title:"To amend title XVIII of the Social Security Act to extend incentive payments for participation in eligible alternative payment models under the Medicare program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 785",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/785",   
       title:"To amend title 38,United States Code,to include a representative of the National Association of State Veterans Homes on the Geriatrics and Gerontology Advisory Committee of the Department of Veterans Affairs.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 784",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/784",   
       title:"To establish the Advisory Council on African Diaspora Engagement in the United States,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 783",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/783",   
       title:"To amend title XVIII of the Social Security Act to permanently extend certain in-home cardiopulmonary rehabilitation flexibilities established in response to COVID-19,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 782",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/782",   
       title:"To amend the Internal Revenue Code of 1986 to establish a credit for hired critical employees and to make permanent certain expiring provisions relating to the child tax credit.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 781",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/781",   
       title:"To prohibit the use of Federal funds to study,propose,establish,implement,or enforce any mileage tax,including through the funding of a mileage tracking program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 780",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/780",   
       title:"To authorize the court to make an advisory statement under certain circumstances,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 779",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/779",   
       title:"To increase protections against sexually dangerous persons,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 778",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/778",   
       title:"To amend the Internal Revenue Code of 1986 to modify the social security number requirements for claiming the child tax credit and earned income tax credit.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 777",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/777",   
       title:"To amend the Higher Education Act of 1965 to require the Secretary of Education to send to certain students who submit a Free Application for Federal Student Aid information regarding potential eligibility for assistance under the supplemental nutrition assistance program under the Food and Nutrition Act of 2008,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 775",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/775",   
       title:"To ensure that there is no net gain in Federal land ownership in any fiscal year,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 774",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/774",   
       title:"To limit the ability of the Secretary of Agriculture and the Secretary of the Interior to penalize an owner of livestock for grazing by such livestock on certain Federal lands on which grazing is permitted on or after the date of enactment of this Act and subsequently prohibited,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 773",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/773",   
       title:"To amend the Food Security Act of 1985 to repeal certain provisions relating to the acceptance and use of contributions for public-private partnerships,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 772",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/772",   
       title:"To direct the Secretary of Health and Human Services to revise regulations to remove the requirement under the Medicare program that an off-campus facility or organization shall be located within a 35-mile radius of a hospital or critical access hospital.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 771",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/771",   
       title:"To amend title XVIII of the Social Security Act to permit States to designate without any mileage limitations facilities that are located in rural areas as critical access hospitals.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 770",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/770",   
       title:"To direct the Secretary of Veterans Affairs to report on certain appeals,resources,and health care systems of the Department of Veterans Affairs.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 769",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/769",   
       title:"To amend title 49,United States Code,to direct the Secretary of Transportation to issue regulations under which Amtrak is responsible for refunding rail passengers the cost of certain rail transportation that was canceled or delayed due to a failure of Amtrak,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 768",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/768",   
       title:"To require a study on Holocaust education efforts of States,local educational agencies,and public elementary and secondary schools,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 767",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/767",   
       title:"To amend the Public Health Service Act to authorize the Biomedical Advanced Research and Development Authority to award follow-on production contracts or transactions,procure supplies for experimental or test purposes,and acquire innovative commercial products and commercial services,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 766",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/766",   
       title:"To amend the Public Health Service Act to require the Secretary to award grants,contracts,or cooperative agreements to eligible entities to establish,maintain,or improve activities related to the detection and monitoring of infectious diseases through wastewater for public health emergency preparedness and response purposes,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 765",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/765",   
       title:"To improve communication between the United States Postal Service and local communities relating to the relocation and establishment of Postal Service retail service facilities,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 764",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/764",   
       title:"To prohibit the application of certain restrictive eligibility requirements to foreign nongovernmental organizations with respect to the provision of assistance under part I of the Foreign Assistance Act of 1961.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 763",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/763",   
       title:"To posthumously award the Congressional Gold Medal,collectively,to James J. Andrews and William H. Campbell in recognition of their extraordinary bravery and steadfast devotion to the Nation during the Civil War as the only civilian members of Andrews' Raiders,who launched a daring military raid that became known as the \"Great Locomotive Chase\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 762",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/762",   
       title:"To amend the Food and Nutrition Act of 2008 to improve the calculation and reduce the taxpayer cost of payment errors under the supplemental nutrition assistance program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 761",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/761",   
       title:"To amend the Internal Revenue Code of 1986 to provide for an election to expense certain qualified sound recording costs otherwise chargeable to capital account.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 760",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/760",   
       title:"To make certain repairs,replacements,and restorations of private roads and bridges eligible for reimbursement under the Robert T. Stafford Disaster Relief and Emergency Assistance Act,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 759",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/759",   
       title:"To amend title 5,United States Code,to provide for pay equality and the more accurate computation of retirement benefits for certain firefighters employed by the Federal Government,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 758",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/758",   
       title:"To direct the United States Postal Service to issue regulations requiring Postal Service employees and contractors to report to the Postal Service traffic crashes involving vehicles carrying mail that result in injury or death,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 757",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/757",   
       title:"To prohibit agencies from using Federal funds for publicity or propaganda purposes,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 756",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/756",   
       title:"To amend section 287(g) of the Immigration and Nationality Act to clarify congressional intent with respect to agreements under such section,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 755",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/755",   
       title:"To amend the Energy Act of 2020 to include critical materials in the definition of critical mineral,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 754",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/754",   
       title:"To amend the Small Business Investment Act of 1958 to increase the amount that may be invested in small business investment companies.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 753",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/753",   
       title:"To direct the Administrator of the National Oceanic and Atmospheric Administration to maintain a program that improves wildfire forecasting and detection,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 752",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/752",   
       title:"To provide for methane emission detection and mitigation,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 751",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/751",   
       title:"To amend the Congressional Budget and Impoundment Control Act of 1974 to codify the Panel of Health Advisors within the Congressional Budget Office,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 750",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/750",   
       title:"To amend the Internal Revenue Code of 1986 to provide incentives for education.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 749",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/749",   
       title:"To amend the Immigration and Nationality Act to increase penalties for individuals who illegally reenter the United States after being removed,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 748",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/748",   
       title:"To amend title 38,United States Code,to make certain improvements relating to the eligibility of veterans to receive reimbursement for emergency treatment furnished through the Veterans Community Care program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 747",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/747",   
       title:"To impose sanctions with respect to Chinese producers of synthetic opioids and opioid precursors,to hold Chinese officials accountable for the spread of illicit fentanyl,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 746",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/746",   
       title:"To limit eligibility for Federal benefits for certain immigrants,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 745",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/745",   
       title:"To direct the Director of the Bureau of Land Management and the Chief of the United States Forest Service to conduct a study of onshore mineral values and the Director of the Bureau of Ocean Energy Management to conduct a study of offshore mineral values.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 744",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/744",   
       title:"To amend section 324 of the Robert T. Stafford Disaster Relief and Emergency Assistance Act to incentivize States,Indian Tribes,and Territories to close disaster recovery projects by authorizing the use of excess funds for management costs for other disaster recovery projects.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 743",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/743",   
       title:"To reform and enhance the pay and benefits of Federal wildland firefighters,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 742",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/742",   
       title:"To prohibit Federal funds from being used to provide certain gender transition procedures to minors.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 741",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/741",   
       title:"To elevate the position of Director of the Indian Health Service within the Department of Health and Human Services to Assistant Secretary for Indian Health,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 740",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/740",   
       title:"To improve the provision of care and services under the Veterans Community Care Program of the Department of Veterans Affairs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.Res. 74",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-resolution/74",   
       title:"Supporting the contributions of Catholic schools in the United States and celebrating the 51st annual \"National Catholic Schools Week\".",
       partySupport:"Republican",
       summary:"This resolution supports the goals of National Catholic Schools Week,an event cosponsored by the National Catholic Educational Association and the U.S. Conference of Catholic Bishops and established to recognize the contributions of Catholic elementary and secondary schools in the United States. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 287",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/287",   
       title:"A bill to designate the Federal building located at 225 South Pierre Street in Pierre,South Dakota,as the \"Marcella LeBeau Federal Building,\" and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 286",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/286",   
       title:"A bill to establish vetting standards for the placement of unaccompanied alien children with sponsors,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 285",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/285",   
       title:"A bill to curtail the use of changes in mandatory programs affecting the Crime Victims Fund to inflate spending.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 284",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/284",   
       title:"A bill to reauthorize the Congressional Award Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 283",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/283",   
       title:"Illegal Red Snapper and Tuna Enforcement Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 282",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/282",   
       title:"A bill to provide greater regional access to the Katahdin Woods and Waters National Monument in the State of Maine,and for other purposes.",
       partySupport:"Independent",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 281",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/281",   
       title:"TICKET Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 280",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/280",   
       title:"A bill to prohibit the application of certain restrictive eligibility requirements to foreign nongovernmental organizations with respect to the provision of assistance under part I of the Foreign Assistance Act of 1961.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 279",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/279",   
       title:"A bill to reform and enhance the pay and benefits of Federal wildland firefighters,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 278",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/278",   
       title:"Kids Off Social Media Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 277",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/277",   
       title:"A bill to release a Federal reversionary interest and convey mineral interests in Chester County,Tennessee,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 276",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/276",   
       title:"A bill to amend the Internal Revenue Code of 1986 to expand and improve health savings accounts,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 275",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/275",   
       title:"A bill to improve the provision of care and services under the Veterans Community Care Program of the Department of Veterans Affairs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 274",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/274",   
       title:"A bill to amend title 38,United States Code,to make certain improvements to laws relating to the payment of certain benefits administered by the Secretary of Veterans Affairs that are affected by death,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 273",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/273",   
       title:"Small Business Child Care Investment Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 272",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/272",   
       title:"A bill to improve the safety of infant formula through testing of infant formula for microorganisms and toxic elements,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 271",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/271",   
       title:"A bill to amend the Immigration and Nationality Act to increase penalties for individuals who illegally reenter the United States after being removed,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 270",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/270",   
       title:"A bill to establish a Commission on Federal Natural Disaster Resilience and Recovery to examine and recommend reforms to improve the efficiency and effectiveness of the Federal Government's approach to natural disaster resilience and recovery,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 269",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/269",   
       title:"A bill to improve coordination between Federal and State agencies and the Do Not Pay working system.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 268",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/268",   
       title:"A bill to amend the Internal Revenue Code of 1986 to require taxpayers claiming the child and earned income tax credits,and their qualifying children,to have a valid social security number for employment purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 267",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/267",   
       title:"A bill to make certain repairs,replacements,and restorations of private roads and bridges eligible for reimbursement under the Robert T. Stafford Disaster Relief and Emergency Assistance Act,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 266",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/266",   
       title:"A bill to reauthorize the Dr. Lorna Breen Health Care Provider Protection Act,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 265",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/265",   
       title:"A bill to provide that participation in the American Community Survey is voluntary.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 264",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/264",   
       title:"A bill to amend title 38,United States Code,to establish the Veterans Experience Office,and for other purposes.",
       partySupport:"Independent",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 263",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/263",   
       title:"A bill to restore the integrity of the Fifth Amendment to the Constitution of the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 262",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/262",   
       title:"A bill to award a Congressional Gold Medal to Master Sergeant Roderick \"Roddie\" Edmonds in recognition of his heroic actions during World War II.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 261",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/261",   
       title:"A bill to immediately halt investment by United States persons in the energy sector of Venezuela until the legitimate results of the July 28,2024,election are respected.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 260",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/260",   
       title:"Bottles and Breastfeeding Equipment Screening Enhancement Act",
       partySupport:"Democratic",
       summary:"Bottles and Breastfeeding Equipment Screening Enhancement Act This bill directs the Transportation Security Administration to issue or update guidance to minimize the risk for contamination of breast milk,baby formula,purified deionized water for infants,juice,and related products that are subject to re-screening or additional screening,including by ensuring adherence to hygienic standards. Related products include ice packs,freezer packs,frozen gel packs,and other accessories required to cool breast milk,baby formula,and juice.In addition,the bill directs the Department of Homeland Security Office of Inspector General to audit compliance with these requirements and submit a report to Congress.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 259",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/259",   
       title:"A bill to direct the Federal Communications Commission to publish a list of entities that hold authorizations,licenses,or other grants of authority issued by the Commission and that have certain foreign ownership,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 258",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/258",   
       title:"TORNADO Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 257",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/257",   
       title:"Promoting Resilient Supply Chains Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 256",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/256",   
       title:"A bill to require the President to publish a statement of reasons for pardons,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 739",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/739",   
       title:"To amend the Richard B. Russell National School Lunch Act to expand the use of salad bars in schools.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 738",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/738",   
       title:"To amend the Help America Vote Act of 2002 to allow all eligible voters to vote by mail in Federal elections.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 737",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/737",   
       title:"To require the Secretary of the Treasury to issue reports with respect to extraordinary measures,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 735",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/735",   
       title:"To authorize the President to take certain actions relating to reciprocal trade,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 734",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/734",   
       title:"To amend the Food and Nutrition Act of 2008 with respect to the issuance of quality control guidance issued by the Secretary of Agriculture.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 733",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/733",   
       title:"To provide for a review of sanctions with respect to Hong Kong.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 732",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/732",   
       title:"To require the Administrator of the Federal Emergency Management Agency and the Secretary of Housing and Urban Development to implement certain recommendations made by the Comptroller General with respect to disaster recovery,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 731",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/731",   
       title:"To exempt hazardous fuel reduction activities from certain environmental requirements for a 10-year period.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 730",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/730",   
       title:"To coordinate Federal research and development efforts focused on modernizing mathematics in STEM education through mathematical and statistical modeling,including data-driven and computational thinking,problem,project,and performance-based learning and assessment,interdisciplinary exploration,and career connections,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 729",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/729",   
       title:"To prohibit chemical abortions performed without the presence of a healthcare provider,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 728",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/728",   
       title:"To amend the Head Start Act to include TANF,SSI,SNAP,WIC,and federal housing assistance as eligible public assistance.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 727",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/727",   
       title:"To amend title IV of the Public Health Service Act to prohibit sale or transactions relating to human fetal tissue.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 726",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/726",   
       title:"To amend the Crow Tribe Water Rights Settlement Act of 2010 to make improvements to that Act,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 725",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/725",   
       title:"To take certain mineral interests into trust for the benefit of the Crow Tribe of Montana,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 724",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/724",   
       title:"To require the Congressional Budget Office to make publicly available the fiscal and mathematical models,data,and other details of computations used in cost analysis and scoring.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 723",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/723",   
       title:"To amend the Help America Vote Act of 2002 to prohibit a State from receiving or using funds or certain donations from private entities for the administration of an election for Federal office,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 722",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/722",   
       title:"To implement equal protection under the 14th article of amendment to the Constitution for the right to life of each born and preborn human person.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 721",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/721",   
       title:"To amend the Internal Revenue Code of 1986 to increase the adjusted gross income limitation for above-the-line deduction of expenses of performing artist employees,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 720",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/720",   
       title:"To amend the Internal Revenue Code of 1986 to prohibit treatment of certain distributions and reimbursements for certain abortions as qualified medical expenses.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 719",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/719",   
       title:"To amend title XI of the Social Security Act to limit demonstration projects related to abortion under Medicaid and CHIP.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 255",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/255",   
       title:"A bill to amend the Migratory Bird Treaty Act to clarify the treatment of authentic Alaska Native articles of handicraft containing nonedible migratory bird parts,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 254",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/254",   
       title:"A bill to amend the Marine Mammal Protection Act of 1972 to protect the cultural practices and livelihoods of producers of Alaska Native handicrafts and marine mammal ivory products,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 253",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/253",   
       title:"A bill to amend the Internal Revenue Code of 1986 to provide that amounts paid for an abortion are not taken into account for purposes of the deduction for medical expenses.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 252",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/252",   
       title:"A bill to increase access to agency guidance documents.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 251",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/251",   
       title:"A bill to amend the Internal Revenue Code of 1986 to prohibit treatment of certain distributions and reimbursements for certain abortions as qualified medical expenses.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 250",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/250",   
       title:"A bill to restrict the availability of Federal funds to organizations associated with the abortion industry.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 249",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/249",   
       title:"A bill to amend title XVIII of the Social Security Act to facilitate patient access to certain pediatric technologies.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 248",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/248",   
       title:"A bill to amend title XVIII of the Social Security Act to permanently extend certain in-home cardiopulmonary rehabilitation flexibilities established in response to COVID-19,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 247",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/247",   
       title:"A bill to amend title XVIII of the Social Security Act to clarify payment rules for manual wheelchairs under part B of the Medicare program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 246",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/246",   
       title:"Interstate Transport Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 245",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/245",   
       title:"Insure Cybersecurity Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 244",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/244",   
       title:"A bill to direct the Secretary of Commerce,acting through the Assistant Secretary of Commerce for Communications and Information,to conduct a study of the national security risks posed by consumer routers,modems,and devices that combine a modem and router,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 243",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/243",   
       title:"A bill to extend the period for filing claims under the Radiation Exposure Compensation Act and to provide for compensation under such Act for claims relating to Manhattan Project waste,and to improve compensation for workers involved in uranium mining.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 242",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/242",   
       title:"A bill to protect the dignity of fetal remains,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 241",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/241",   
       title:"A bill to provide for the settlement of the water rights claims of the Fort Belknap Indian Community,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 240",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/240",   
       title:"A bill to amend the Crow Tribe Water Rights Settlement Act of 2010 to make improvements to that Act,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 239",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/239",   
       title:"A bill to take certain mineral interests into trust for the benefit of the Crow Tribe of Montana,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 718",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/718",   
       title:"To prohibit the Secretary of the Interior and the Secretary of Agriculture from transferring certain Federal land,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 717",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/717",   
       title:"To establish the Wildlife Movement and Movement Area Grant Program and the State and Tribal Migration Research Program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 716",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/716",   
       title:"To direct the Secretary of the Interior to ensure full pool levels of Flathead Lake in Montana in accordance with certain requirements,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 715",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/715",   
       title:"To amend the Internal Revenue Code of 1986 to exclude from gross income the basic needs allowance of members of the Armed Forces.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 714",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/714",   
       title:"To amend the Workforce Innovation and Opportunity Act to create a pilot program to award grants to units of general local government and community-based organizations to create jobs,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 713",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/713",   
       title:"To impose a financial penalty on certain institutions of higher education with high percentages of students who default or make insufficient payments on Federal student loans,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 712",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/712",   
       title:"To amend the Child Abuse Prevention and Treatment Act to direct the Secretary of Health and Human Services to include data on animal abuse in the national clearinghouse for information relating to child abuse and neglect.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 711",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/711",   
       title:"To provide for equal protection of the law and to prohibit discrimination and preferential treatment on the basis of race,color,or national origin in Federal actions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 710",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/710",   
       title:"To require agencies to repeal ten existing regulations before issuing a new regulation,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 709",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/709",   
       title:"To amend the Homeland Security Act of 2002 to require the Attorney General,in coordination with the Secretary of Homeland Security,to establish counter-UAS system training and require the Attorney General and Secretary of Homeland Security,in coordination with the Administrator of the Federal Aviation Administration to establish related standards for initial and recurrent training programs or certifications for individuals seeking to operate counter-UAS detection and mitigation systems,equipment,or technology,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 708",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/708",   
       title:"To establish in the Department of Homeland Security a working group relating to countering terrorist,cybersecurity,border and port security,and transportation security threats posed to the United States by the Chinese Communist Party,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 707",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/707",   
       title:"To amend the Immigration and Nationality Act to make unlawful voting an aggravated felony.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 706",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/706",   
       title:"To improve the biodetection functions of the Department of Homeland Security,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 705",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/705",   
       title:"To direct the Secretary of Defense to establish a compensation fund for military firefighters exposed to PFAS.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 704",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/704",   
       title:"To provide for the issuance of a Manatee Semipostal Stamp.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 703",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/703",   
       title:"To amend the Internal Revenue Code of 1986 to make permanent the deduction for qualified business income.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 702",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/702",   
       title:"To modify the measure and use of the poverty line issued by the Secretary of Health and Human Services to more accurately account for the basic needs of families and regional costs of living.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 701",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/701",   
       title:"To amend the Internal Revenue Code of 1986 to provide tax incentives for the establishment and operation of small food retail businesses in areas with high food retail concentration and low levels of competition.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 700",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/700",   
       title:"To amend the mission statement of the United States Military Academy to include the phrase \"Duty,Honor,Country\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 699",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/699",   
       title:"To prohibit United States contributions to the United Nations Population Fund.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 698",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/698",   
       title:"To amend the Immigration and Nationality Act to permanently bar aliens who are ordered removed after failing to appear at a removal proceeding,absent exceptional circumstances,from becoming permanent residents of the United States.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 697",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/697",   
       title:"To establish Schedule Policy/Career (commonly referred to as \"Schedule F\") in the excepted service,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 696",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/696",   
       title:"To amend the Immigration and Nationality Act to reform temporary protected status,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 695",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/695",   
       title:"To amend title 38,United States Code,to increase the rate of the special pension payable to Medal of Honor recipients,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 694",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/694",   
       title:"To suspend normal trade relations with the People's Republic of China and to increase the rates of duty applicable with respect to articles imported from the People's Republic of China,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 693",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/693",   
       title:"To amend the Office of National Drug Control Policy Reauthorization Act of 2006 to modify the authority of the Office of National Drug Control Policy with respect to the World Anti-Doping Agency,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 691",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/691",   
       title:"To designate the Washington Dulles International Airport in Virginia as the \"Donald J. Trump International Airport\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 690",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/690",   
       title:"To prohibit the use of Federal funds to implement Salmonella framework for raw poultry products.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 689",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/689",   
       title:"To require each agency to evaluate the permitting system of the agency,to consider whether permitting by rule could replace that system,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 688",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/688",   
       title:"To require the Secretary of Health and Human Services to furnish tailored information to expecting mothers,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 687",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/687",   
       title:"To amend title 5,United States Code,to provide for an alternative removal for performance or misconduct for Federal employees.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 686",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/686",   
       title:"To amend title 18,United States Code,to prohibit the unlawful disposal of fetal remains.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 685",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/685",   
       title:"To amend the Federal Food,Drug,and Cosmetic Act to prohibit the approval of new abortion drugs,to prohibit investigational use exemptions for abortion drugs,and to impose additional regulatory requirements with respect to previously approved abortion drugs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 684",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/684",   
       title:"To amend the Internal Revenue Code of 1986 to repeal the excise tax on repurchase of corporate stock.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 683",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/683",   
       title:"To direct the Secretary of Veterans Affairs to establish a pilot program to permit certain members of the Armed Forces to pre-enroll in the system of annual patient enrollment established and operated under section 1705 of title 38,United States Code.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 682",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/682",   
       title:"To amend title 18,United States Code,to prohibit abortion in cases where a fetal heartbeat is detectable.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 681",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/681",   
       title:"To amend the Act of August 9,1955 (commonly known as the \"Long-Term Leasing Act\"),to authorize leases of up to 99 years for land held in trust for the Mashpee Wampanoag Tribe and the Wampanoag Tribe of Gay Head (Aquinnah),and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 680",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/680",   
       title:"To amend title 38,United States Code,to improve and to expand eligibility for dependency and indemnity compensation paid to certain survivors of certain veterans,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 679",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/679",   
       title:"To nullify the modifications made by the Food and Drug Administration in January 2023 to the risk evaluation and mitigation strategy for the abortion pill mifepristone,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 678",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/678",   
       title:"To amend the Mineral Leasing Act to improve the assessment of expression of interest fees,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 677",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/677",   
       title:"To establish a process to expedite the review of appeals of certain decisions by the Department of the Interior.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 676",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/676",   
       title:"To exempt Federal actions related to energy and mineral activities on certain Federal lands from the requirements of the National Environmental Policy Act of 1969.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 675",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/675",   
       title:"To direct the Secretary of Health and Human Services,in collaboration with the Assistant Secretary for Preparedness and Response and the Director of the Centers for Disease Control and Prevention,and in coordination with the Secretary of Defense and the Secretary of Homeland Security,to establish a program of entering into partnerships with eligible domestic manufacturers to ensure the availability of qualified personal protective equipment to prepare for and respond to national health or other emergencies,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 674",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/674",   
       title:"To prohibit commercial offshore wind energy development in Lobster Management Area 1 in the Gulf of Maine,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 673",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/673",   
       title:"To transfer Homeland Security Investigations from U.S. Immigration and Customs Enforcement,redesignate U.S. Immigration and Customs Enforcement as U.S. Immigration Compliance Enforcement,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 672",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/672",   
       title:"To establish new ZIP Codes for certain communities,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 671",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/671",   
       title:"To establish an interagency task force to increase vital documents access for unaccompanied homeless youth.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 670",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/670",   
       title:"To amend the Immigration and Nationality Act to provide for a minimum number of refugees who may be admitted in any fiscal year after fiscal year 2026,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 669",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/669",   
       title:"To restrict the first-use strike of nuclear weapons.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 668",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/668",   
       title:"To require the Secretary of Veterans Affairs to carry out a pilot program to coordinate,navigate,and manage care and benefits for veterans enrolled in both the Medicare program and the system of annual patient enrollment of the Department of Veterans Affairs.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 667",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/667",   
       title:"To amend title 46,United States Code,to allow transportation of merchandise in noncontiguous trade on foreign-flag vessels,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 666",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/666",   
       title:"To provide a definition of reasonable rate for noncontiguous domestic ocean trade,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 665",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/665",   
       title:"To amend title 46,United States Code,to exempt certain noncontiguous trade from the coastwise laws.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 664",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/664",   
       title:"To prohibit certain mining activities on the deep seabed and Outer Continental Shelf,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 663",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/663",   
       title:"To oppose the permitting of deep seabed mining and exploration for deep seabed mining,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 662",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/662",   
       title:"To amend the Internal Revenue Code of 1986 to allow intangible drilling and development costs to be taken into account when computing adjusted financial statement income.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 661",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/661",   
       title:"To require the Secretary of Health and Human Services,in consultation with the Secretary of Commerce,the Council for Technology and Innovation of the Centers for Medicare & Medicaid Services,and the Commissioner of Food and Drugs,to carry out a program to facilitate and coordinate efforts between the United States and Israel to expand and enhance collaboration on the development and delivery of health care products and services.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 660",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/660",   
       title:"To direct the Secretary of Veterans Affairs and the Secretary of Defense to carry out programs to provide to certain veterans who are women a compensation benefit and an upgrade to the discharge status of such veterans,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 659",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/659",   
       title:"To amend title 38,United States Code,to direct the Chairman of the Board of Veterans' Appeals to give priority to individuals with certain professional experience in recommending such individuals to serve as members of the Board of Veterans' Appeals,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 658",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/658",   
       title:"To amend title 38,United States Code,to establish qualifications for the appointment of a person as a marriage and family therapist,qualified to provide clinical supervision,in the Veterans Health Administration.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 657",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/657",   
       title:"To amend title 38,United States Code,to improve the reimbursement of continuing professional education expenses for health care professionals of the Department of Veterans Affairs.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 656",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/656",   
       title:"To improve parental leave for members of the Armed Forces.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 655",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/655",   
       title:"To direct the Secretary of Agriculture to convey certain Federal land to the City of The Dalles,Oregon.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 654",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/654",   
       title:"To change the Bureau of Consumer Financial Protection into an independent agency named the Consumer Financial Empowerment Agency,to transition the Agency to the regular appropriations process,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 653",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/653",   
       title:"To protect children from medical malpractice in the form of gender transition procedures.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced','Transgender', 'LGBTQ','Pinned'] 
  },
   {
       bill_id:"H.R. 652",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/652",   
       title:"To amend the Internal Revenue Code of 1986 to allow the deduction under section 199A to apply to qualified BDC interest dividends in the same manner as qualified REIT dividends.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 651",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/651",   
       title:"To require the Federal Communications Commission to auction spectrum in the band between 1.3 gigahertz and 13.2 gigahertz,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 650",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/650",   
       title:"To protect the right of parents to direct the upbringing of their children as a fundamental right.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 649",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/649",   
       title:"Whole Milk for Healthy Kids Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 648",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/648",   
       title:"To direct the Secretary of Defense to provide fluid or powdered milk to members of the Armed Forces at dining facilities on military installations.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 647",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/647",   
       title:"To amend title 38,United States Code,to authorize the provision of certain additional burial benefits for individuals for whom an urn or plaque is furnished,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 646",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/646",   
       title:"To establish a grant program to address the crises in accessing affordable housing and child care through the co-location of housing and child care,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 645",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/645",   
       title:"To enforce the rights protected by the Second and Fourteenth Amendments against the States.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 644",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/644",   
       title:"To amend the Harmful Algal Bloom and Hypoxia Research and Control Act of 1998 to address harmful algal blooms,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 643",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/643",   
       title:"To eliminate the Federal Insurance Office of the Department of the Treasury,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 642",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/642",   
       title:"To amend the Wild and Scenic Rivers Act to designate the portion of the Myakka River lying within Sarasota County,Florida as a component of the National Wild and Scenic Rivers System,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 641",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/641",   
       title:"To establish an interagency committee on soil carbon sequestration research,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 238",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/238",   
       title:"A bill to require each agency to evaluate the permitting system of the agency,to consider whether permitting by rule could replace that system,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 237",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/237",   
       title:"A bill to amend the Omnibus Crime Control and Safe Streets Act of 1968 to provide public safety officer benefits for exposure-related cancers,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 236",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/236",   
       title:"A bill to amend the Act of August 9,1955 (commonly known as the \"Long-Term Leasing Act\"),to authorize leases of up to 99 years for land in the Mashpee Wampanoag Tribe Reservation and land held in trust for the Wampanoag Tribe of Gay Head (Aquinnah),and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 235",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/235",   
       title:"A bill to direct the Secretary of Labor to enter into contracts with industry intermediaries for purposes of promoting the development of and access to apprenticeships and related pre-apprenticeships for secondary school students.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 234",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/234",   
       title:"A bill to amend the Omnibus Crime Control and Safe Streets Act of 1968 to direct certain prosecutor's offices to annually report to the Attorney General,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 233",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/233",   
       title:"A bill to amend the Office of National Drug Control Policy Reauthorization Act of 2006 to modify the authority of the Office of National Drug Control Policy with respect to the World Anti-Doping Agency,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 232",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/232",   
       title:"A bill to prevent anticompetitive conduct through the use of pricing algorithms by prohibiting the use of pricing algorithms that can facilitate collusion through the use of nonpublic competitor data,creating an antitrust law enforcement tool,increasing transparency,and enforcing violations through the Sherman Act and Federal Trade Commission Act,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 231",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/231",   
       title:"A bill to amend the Federal Crop Insurance Act to authorize the Federal Crop Insurance Corporation to carry out research and development on a single index insurance policy,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 230",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/230",   
       title:"A bill to amend part D of title IV of the Social Security Act to ensure that child support for unborn children is collected and distributed under the child support enforcement program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 229",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/229",   
       title:"A bill to amend title XI of the Social Security Act to require that direct-to-consumer advertisements for prescription drugs and biological products include an appropriate disclosure of pricing information.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 228",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/228",   
       title:"A bill to amend the Federal Agriculture Improvement and Reform Act of 1996 to ensure that producers who rely on acequia systems have access to drought protections,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 227",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/227",   
       title:"A bill to prohibit the use of certain American History and Civics Education program funds for curriculum,or teaching or counseling,that promotes or compels a divisive concept under the priorities noticed in the proposed rule submitted by the Department of Education relating to Proposed Priorities-American History and Civics Education.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 226",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/226",   
       title:"A bill to require a strategy to oppose financial or material support by foreign countries and nongovernmental organizations to the Taliban,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 225",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/225",   
       title:"A bill to amend the Immigration and Nationality Act to reform temporary protected status,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 224",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/224",   
       title:"A bill to amend the Internal Revenue Code of 1986 to allow intangible drilling and development costs to be taken into account when computing adjusted financial statement income.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 223",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/223",   
       title:"A bill to amend title 18,United States Code,to repeal prohibitions relating to freedom of access to clinic entrances,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 222",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/222",   
       title:"A bill to amend the Richard B. Russell National School Lunch Act to allow schools that participate in the school lunch program to serve whole milk,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 221",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/221",   
       title:"A bill to extend the customs waters of the United States from 12 nautical miles to 24 nautical miles from the baselines of the United States,consistent with Presidential Proclamation 7219.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 220",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/220",   
       title:"A bill to reserve to Congress the authority to establish or extend a national monument.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 219",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/219",   
       title:"A bill to direct the Secretary of Veterans Affairs to carry out a pilot program to improve the ability of veterans to access medical care in medical facilities of the Department of Veterans Affairs and in the community by providing veterans the ability to choose health care providers.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 218",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/218",   
       title:"A bill to designate the area between the intersections of 16th Street,Northwest and Fuller Street,Northwest and 16th Street,Northwest and Euclid Street,Northwest in Washington,District of Columbia,as \"Oswaldo Paya Way\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 217",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/217",   
       title:"A bill to amend the Apex Project,Nevada Land Transfer and Authorization Act of 1989 to include the city of North Las Vegas,Nevada,and the Apex Industrial Park Owners Association,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 216",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/216",   
       title:"Save Our Seas 2.0 Amendments Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 215",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/215",   
       title:"A bill to amend the mission statement of the United States Military Academy to include the phrase \"Duty,Honor,Country\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 214",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/214",   
       title:"A bill to amend title 38,United States Code,to increase the rate of the special pension payable to Medal of Honor recipients,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 213",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/213",   
       title:"A bill to amend the Internal Revenue Code of 1986 to make permanent the deduction for qualified business income.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 212",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/212",   
       title:"A bill to make the assault of a law enforcement officer a deportable offense,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 211",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/211",   
       title:"A bill to amend the Federal Land Policy and Management Act of 1976 to improve the management of grazing permits and leases,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 210",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/210",   
       title:"A bill to prohibit agencies from using Federal funds for publicity or propaganda purposes,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 209",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/209",   
       title:"A bill to protect children from medical malpractice in the form of gender-transition procedures.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 208",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/208",   
       title:"A bill to amend the Public Health Service Act to reauthorize the Stop,Observe,Ask,and Respond to Health and Wellness Training Program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 207",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/207",   
       title:"A bill to prohibit the award of Federal funds to an institution of higher education that hosts or is affiliated with a student-based service site that provides abortion drugs or abortions to students of the institution or to employees of the institution or site,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 206",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/206",   
       title:"A bill to suspend normal trade relations with the People's Republic of China and to increase the rates of duty applicable with respect to articles imported from the People's Republic of China,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 205",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/205",   
       title:"A bill to amend title 18,United States Code,to prohibit discrimination by abortion against an unborn child on the basis of Down syndrome.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 204",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/204",   
       title:"A bill to protect the right of parents to direct the upbringing of their children as a fundamental right.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 203",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/203",   
       title:"A bill to prohibit Federal funding of Planned Parenthood Federation of America.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 202",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/202",   
       title:"A bill to require the Administrator of the Small Business Administration to establish a program to allow small business concerns to purchase certain commodities futures,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 201",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/201",   
       title:"A bill to provide for a study by the National Academies of Sciences,Engineering,and Medicine on the prevalence and mortality of cancer among individuals who served as active duty aircrew in the Armed Forces,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 200",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/200",   
       title:"A bill to amend the Immigration and Nationality Act to modify the eligibility requirements for asylum.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 199",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/199",   
       title:"A bill to amend the Internal Revenue Code of 1986 to provide special rules for the taxation of certain residents of Taiwan with income from sources within the United States.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 640",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/640",   
       title:"To amend the Internal Revenue Code of 1986 to repeal the excise taxes on taxable chemicals and taxable substances.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 639",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/639",   
       title:"To prohibit group health plans,health insurance issuers,and Federal health care programs from applying prior authorization requirements,utilization management techniques,and medical necessity reviews.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 638",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/638",   
       title:"To require owners of covered federally assisted rental dwelling units to install temperature sensors in such units,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 637",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/637",   
       title:"To require the Director of the Office of Management and Budget to review and make certain revisions to the Standard Occupational Classification System,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 636",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/636",   
       title:"To amend section 248 of title 18,United States Code,to provide adequate penalties and remedies for attacks on facilities providing counseling about abortion alternatives and attacks on places of religious worship.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 635",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/635",   
       title:"To amend the Omnibus Public Land Management Act of 2009 to increase Tribal access to water conservation and efficiency grants,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 634",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/634",   
       title:"To amend title 28,United States Code,to provide for the appointment of additional Federal circuit judges,to divide the Ninth Judicial Circuit of the United States into two judicial circuits,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 633",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/633",   
       title:"To require covered platforms to remove nonconsensual intimate visual depictions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 632",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/632",   
       title:"To prohibit the award of Federal funds to an institution of higher education that hosts or is affiliated with a student-based service site that provides abortion drugs or abortions to students of the institution or to employees of the institution or site,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 631",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/631",   
       title:"To amend the definitions of firearm silencer and firearm muffler in section 921 of title 18,United States Code,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 630",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/630",   
       title:"To repeal the Alien Enemies Act,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 629",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/629",   
       title:"To amend title 18,United States Code,to prohibit chemical abortions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 628",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/628",   
       title:"To amend the Public Health Service Act to eliminate consideration of the income of organ recipients in providing reimbursement of expenses to donating individuals,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 627",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/627",   
       title:"To amend title XIX of the Social Security Act and Public Health Service Act to improve the reporting of abortion data to the Centers for Disease Control and Prevention,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 626",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/626",   
       title:"To provide for operations of the Federal Columbia River Power System pursuant to a certain operation plan for a specified period of time,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 625",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/625",   
       title:"To clarify where court may be held for certain district courts in Texas and California.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 624",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/624",   
       title:"To reform the Bureau of Alcohol,Tobacco,Firearms,and Explosives.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 623",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/623",   
       title:"To direct the Secretary of Transportation to modify certain regulations relating to the requirements for commercial driver's license testing and commercial learner's permit holders,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 622",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/622",   
       title:"To amend the Food Security Act of 1985 to increase funding for the conservation stewardship program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 621",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/621",   
       title:"To amend the Omnibus Crime Control and Safe Streets Act of 1968 to authorize the use of grant amounts for providing training and resources for first responders on the use of containment devices to prevent secondary exposure to fentanyl and other potentially lethal substances,and purchasing such containment devices for use by first responders.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 620",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/620",   
       title:"To amend the Defense Production Act of 1950 to prevent harm and disruption to the United States agriculture industry by protecting against foreign influence over agriculture production and supply chains,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 619",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/619",   
       title:"To extend Federal recognition to the Nor Rel Muk Wintu Nation,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 618",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/618",   
       title:"To amend the Apex Project,Nevada Land Transfer and Authorization Act of 1989 to include the City of North Las Vegas and the Apex Industrial Park Owners Association,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 617",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/617",   
       title:"To amend the Visit America Act to promote music tourism,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 616",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/616",   
       title:"To amend the Internal Revenue Code of 1986 to double the dollar limitation for the energy efficient home improvement credit with respect to heat pumps,heat pump water heaters,biomass stoves,and boilers.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 615",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/615",   
       title:"To amend the Internal Revenue Code of 1986 to establish a refundable tax credit for individuals for amounts paid for gas and electricity for primary residences.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 614",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/614",   
       title:"To direct the Consumer Product Safety Commission to develop and implement a public awareness campaign with respect to grill safety,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 613",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/613",   
       title:"To amend the Internal Revenue Code of 1986 to require the Bureau of Alcohol,Tobacco,Firearms,and Explosives to establish an administrative relief process for individuals whose applications for transfer and registration of a firearm were denied,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 612",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/612",   
       title:"To amend the Public Health Service Act to authorize grants to health care providers to enhance the physical and cyber security of their facilities,personnel,and patients.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 611",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/611",   
       title:"To provide a civil remedy for individuals harmed by sanctuary jurisdiction policies,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 610",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/610",   
       title:"To amend title XVIII of the Social Security Act to provide for certain reforms with respect to medicare supplemental health insurance policies.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 609",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/609",   
       title:"To amend the Social Security Act and the Internal Revenue Code of 1986 to include net investment income tax imposed in the Federal Hospital Insurance Trust Fund and to modify the net investment income tax.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 608",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/608",   
       title:"To amend title XIX of the Social Security Act to provide for a demonstration project under the Medicaid program for political subdivisions of States to provide medical assistance for the expansion population under such program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 607",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/607",   
       title:"To provide procedures for appealing certain Bureau of Alcohol,Tobacco,Firearms,and Explosives rulings or determinations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 606",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/606",   
       title:"To nullify Public Land Order No. 7923,withdrawing certain land in San Juan County,New Mexico,from mineral entry.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 605",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/605",   
       title:"To amend the Healthy Forests Restoration Act of 2003 to reauthorize and improve the Water Source Protection Program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 604",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/604",   
       title:"To require Transmission Organizations to allow bids from aggregators of certain retail customers,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 603",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/603",   
       title:"To direct the Federal Energy Regulatory Commission to improve interregional electricity transfer capability between immediately adjacent transmission planning regions,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 602",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/602",   
       title:"To direct the Secretary of Veterans Affairs to ensure that sexual assault nurse examiners are employed at certain Department of Veterans Affairs medical facilities,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 601",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/601",   
       title:"To amend the Internal Revenue Code of 1986 to reduce the rate of tax on estates,gifts,and generation-skipping transfers.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 600",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/600",   
       title:"WHO is Accountable Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 599",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/599",   
       title:"Protect Funding for Women’s Health Care Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 7",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/7",   
       title:"No Taxpayer Funding for Abortion and Abortion Insurance Full Disclosure Act of 2025",
       partySupport:"Republican",
       summary:"No Taxpayer Funding for Abortion and Abortion Insurance Full Disclosure Act of 2025 This bill modifies provisions relating to federal funding for,and health insurance coverage of,abortions.Specifically,the bill prohibits the use of federal funds for abortions or for health coverage that includes abortions. Such restrictions extend to the use of funds in the budget of the District of Columbia. Additionally,abortions may not be provided in a federal health care facility or by a federal employee.Historically,language has been included in annual appropriations bills for the Department of Health and Human Services (HHS) that prohibits the use of federal funds for abortions—such language is commonly referred to as the Hyde Amendment. Similar language is also frequently included in appropriations bills for other federal agencies and the District of Columbia. The bill makes these restrictions permanent and extends the restrictions to all federal funds (rather than specific agencies).The bill's restrictions regarding the use of federal funds do not apply in cases of rape,incest,or where a physical disorder,injury,or illness endangers a woman's life unless an abortion is performed. The Hyde Amendment provides the same exceptions.The bill also prohibits qualified health plans from including coverage for abortions. Currently,qualified health plans may cover abortion,but the portion of the premium attributable to abortion coverage is not eligible for subsidies.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 198",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/198",   
       title:"A bill to impose sanctions with respect to the system of compensation of the Palestine Liberation Organization and the Palestinian Authority that supports acts of terrorism.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 197",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/197",   
       title:"A bill to require the Committee on Foreign Investment in the United States to review any purchase or lease of real estate near a military installation or military airspace in the United States by a foreign person connected to or subsidized by the Russian Federation,the People's Republic of China,the Islamic Republic of Iran,or the Democratic People's Republic of Korea,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 196",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/196",   
       title:"A bill to improve online ticket sales and protect consumers,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 195",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/195",   
       title:"American Music Tourism Act of 2025",
       partySupport:"Republican",
       summary:"American Music Tourism Act of 2025 This bill directs the National Travel and Tourism Office (NTTO) of the Department of Commerce to promote tourism to music-related and sports attractions.The bill requires NTTO to promote domestic and international travel and tourism to U.S. music festivals,concert venues,and other music-related attractions and locations. The bill also expands NTTO's current mandate to facilitate sports and recreation events and activities to include the promotion of international travel and tourism to such activities in the United States.NTTO must report its activities and findings to Congress within one year after the bill's enactment and,thereafter,every two years. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 194",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/194",   
       title:"A bill to amend the Internal Revenue Code of 1986 to provide for an election to expense certain qualified sound recording costs otherwise chargeable to capital account.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 193",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/193",   
       title:"A bill to repeal the Alien Enemies Act.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 192",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/192",   
       title:"A bill to restrict the first-use strike of nuclear weapons.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 191",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/191",   
       title:"A bill to require the Secretary of Transportation to modify certain regulations relating to the requirements for commercial driver's license testing and commercial learner's permit holders,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 190",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/190",   
       title:"A bill to enhance the operations of the North Pacific Research Board.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 189",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/189",   
       title:"A bill to amend the Workforce Innovation and Opportunity Act to expand the capacity of junior or community colleges and area career and technical education schools to conduct training services,education,and outreach activities for careers in the residential construction industry.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 188",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/188",   
       title:"A bill to prohibit Federal employees and contractors from directing online platforms to censor any speech that is protected by the First Amendment to the Constitution of the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 187",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/187",   
       title:"A bill to amend the Internal Revenue Code of 1986 to permanently allow a tax deduction at the time an investment in qualified property is made.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 186",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/186",   
       title:"A bill to prohibit taxpayer funded abortions.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 185",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/185",   
       title:"A bill to provide a civil remedy for individuals harmed by sanctuary jurisdiction policies,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 184",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/184",   
       title:"A bill to amend the Federal Food,Drug,and Cosmetic Act to define the term natural cheese.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 183",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/183",   
       title:"A bill to authorize major medical facility projects for the Department of Veterans Affairs for fiscal year 2025,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 182",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/182",   
       title:"A bill to provide for operations of the Federal Columbia River Power System pursuant to a certain operation plan for a specified period of time,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 181",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/181",   
       title:"A bill to require agencies submit zero-based budgets.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 180",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/180",   
       title:"A bill to amend the Omnibus Crime Control and Safe Streets Act of 1968 to authorize the use of grant amounts for providing training and resources for first responders on the use of containment devices to prevent secondary exposure to fentanyl and other potentially lethal substances,and purchasing such containment devices for use by first responders.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 179",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/179",   
       title:"A bill to amend the Defense Production Act of 1950 to prevent harm and disruption to the United States agriculture industry by protecting against foreign influence over agriculture production and supply chains,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 178",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/178",   
       title:"A bill to amend title XIX of the Social Security Act and the Public Health Service Act to improve the reporting of abortion data to the Centers for Disease Control and Prevention,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 177",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/177",   
       title:"A bill to prohibit Federal funding of Planned Parenthood Federation of America.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 176",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/176",   
       title:"A bill to direct the President to take such actions as may be necessary to prohibit the purchase of public or private real estate located in the United States by citizens and entities of the People's Republic of China,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S.Res. 30",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-resolution/30",   
       title:"A resolution honoring Mississippi's Gestational Age Act.",
       partySupport:"Republican",
       summary:"This resolution expresses gratitude to Mississippi State Representative Becky Currie for introducing the state legislation prohibiting abortion after 15 weeks that resulted in the U.S. Supreme Court’s <em>Dobbs v. Jackson Women’s Health Organization</em> decision overturning <em>Roe v. Wade</em> and <em>Planned Parenthood of Southeastern Pennsylvania v. Casey</em>.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 598",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/598",   
       title:"To amend the Forest and Rangeland Renewable Resources Planning Act of 1974 and the Federal Land Policy and Management Act of 1976 to provide that the Secretary of Agriculture and the Secretary of the Interior are not required to reinitiate consultation on a land management plan or land use plan under certain circumstances,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 597",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/597",   
       title:"To amend the Federal Food,Drug,and Cosmetic Act to clarify and update the authority of the Food and Drug Administration to ensure national uniformity in the regulation of the labels,labeling,and advertising of companion animal pet food,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 596",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/596",   
       title:"To require a study relating to the consolidation of certain grant programs currently available to insular areas and the suitability of such consolidation for Puerto Rico,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 595",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/595",   
       title:"To amend the Convention on Cultural Property Implementation Act to make certain technical corrections to facilitate the lawful trade and collecting of numismatic materials.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 594",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/594",   
       title:"To amend the Immigration and Nationality Act to provide for the detention of certain aliens who commit assault against law enforcement officers.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 593",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/593",   
       title:"To amend the Internal Revenue Code of 1986 to exclude certain health professions education scholarship and loan payments from gross income.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 592",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/592",   
       title:"To amend the Richard B. Russell National School Lunch Act with respect to the types of milk offered under the school lunch program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 591",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/591",   
       title:"To provide an enforcement of remedies against the extraterritorial taxes and discriminatory taxes of foreign countries.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 590",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/590",   
       title:"To amend title 32,United States Code,to clarify certain limitations on full-time National Guard duty performed in a State,Territory,or the District of Columbia,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 589",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/589",   
       title:"To amend title 18,United States Code,to repeal prohibitions relating to freedom of access to clinic entrances,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 588",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/588",   
       title:"To provide for the protection of the Boundary Waters Canoe Area Wilderness and interconnected Federal lands and waters,including Voyageurs National Park,within the Rainy River Watershed in the State of Minnesota,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 587",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/587",   
       title:"To remove the lesser prairie-chicken from the lists of threatened species and endangered species published pursuant to the Endangered Species Act of 1973 and to amend that Act to exclude the lesser prairie-chicken from the authority of that Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 586",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/586",   
       title:"To direct the Secretary of Veterans Affairs to study and report on the prevalence of cholangiocarcinoma in veterans who served in the Vietnam theater of operations during the Vietnam era,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 585",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/585",   
       title:"To amend title 38,United States Code,to make permanent the authority of the Secretary of Veterans Affairs to provide financial assistance for supportive services for very low-income veteran families in permanent housing.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 584",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/584",   
       title:"To amend title XIX of the Social Security Act to prohibit States from making medical assistance available to certain individuals under the Medicaid program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 583",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/583",   
       title:"To amend the Federal Water Pollution Control Act relating to grants for beach monitoring,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 582",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/582",   
       title:"To establish a community protection and wildfire resilience grant program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 581",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/581",   
       title:"To assist States in carrying out projects to expand the child care workforce and child care facilities in the States,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 580",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/580",   
       title:"To amend the Unfunded Mandates Reform Act of 1995 to provide for regulatory impact analyses for certain rules,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 579",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/579",   
       title:"To amend parts B and E of title IV of the Social Security Act to improve foster and adoptive parent recruitment and retention,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 578",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/578",   
       title:"To require U.S. Immigration and Customs Enforcement to take into custody certain aliens who have been charged in the United States with a crime that resulted in the death or serious bodily injury of another person,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 577",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/577",   
       title:"To direct the Secretary of Housing and Urban Development to establish a demonstration program to refer qualified participants within the Continuum of Care Program to Certified Community Behavioral Health Clinics for certain treatment,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 576",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/576",   
       title:"To codify Executive Order 14096 relating to revitalizing our Nation's commitment to environmental justice for all.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 575",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/575",   
       title:"To amend the Food Security Act of 1985 to modify the delivery of technical assistance,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 574",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/574",   
       title:"To amend the Internal Revenue Code of 1986 to permanently allow a tax deduction at the time an investment in qualified property is made,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 573",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/573",   
       title:"To require the Council on Environmental Quality to publish an annual report on environmental reviews and causes of action based on alleged non-compliance with the National Environmental Policy Act of 1969,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 572",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/572",   
       title:"To prohibit the use of non-monetized or unqualified factors for regulatory analyses,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 571",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/571",   
       title:"To amend title II of the Social Security Act to means-test certain child's insurance benefits.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 570",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/570",   
       title:"To amend the Internal Revenue Code of 1986 to allow the child tax credit with respect to stillbirths.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 569",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/569",   
       title:"To amend section 301 of the Immigration and Nationality Act to clarify those classes of individuals born in the United States who are nationals and citizens of the United States at birth.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 175",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/175",   
       title:"A bill to rescind the unobligated balances of amounts appropriated for Internal Revenue Service enhancements and use such funding for an External Revenue Service.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 174",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/174",   
       title:"A bill to improve the transparency of Amtrak operations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 173",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/173",   
       title:"A bill to amend the Internal Revenue Code of 1986 to increase excise taxes on fuel used by private jets,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 172",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/172",   
       title:"A bill to clarify the country of origin of certain articles imported into the United States for purposes of certain trade enforcement actions.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 171",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/171",   
       title:"A bill to remove the lesser prairie-chicken from the lists of threatened species and endangered species published pursuant to the Endangered Species Act of 1973,to amend that Act to exclude the lesser prairie-chicken from the authority of that Act,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 170",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/170",   
       title:"A bill to prohibit the appointment of former fossil fuel executive officers and fossil fuel lobbyists as the heads of certain departments,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 169",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/169",   
       title:"A bill to assist States in carrying out projects to expand the child care workforce and child care facilities in the States,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 168",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/168",   
       title:"A bill to establish a debt reduction fund to reduce the national debt of the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 167",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/167",   
       title:"A bill to amend title 18,United States Code,to punish criminal offenses targeting law enforcement officers,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 166",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/166",   
       title:"A bill to amend title 18,United States Code,to create or enhance penalties for murder and assault committed against a law enforcement officer,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 165",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/165",   
       title:"A bill to amend the Controlled Substances Act to list fentanyl-related substances as schedule I controlled substances.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 164",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/164",   
       title:"A bill to amend chapter 8 of title 5,United States Code,to provide for en bloc consideration in resolutions of disapproval for \"midnight rules\",and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 163",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/163",   
       title:"A bill to require institutions of higher education participating in Federal student aid programs to share information about title VI of the Civil Rights Act of 1964,including a link to the webpage of the Office for Civil Rights where an individual can submit a complaint regarding discrimination in violation of such title,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 162",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/162",   
       title:"A bill to amend parts B and E of title IV of the Social Security Act to improve foster and adoptive parent recruitment and retention,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 161",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/161",   
       title:"She DRIVES Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 160",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/160",   
       title:"A bill to amend the Wildfire Suppression Aircraft Transfer Act of 1996 to reauthorize the sale by the Department of Defense of aircraft and parts for wildfire suppression purposes,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 159",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/159",   
       title:"A bill to designate Ansarallah as a foreign terrorist organization and impose certain sanctions on Ansarallah,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 158",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/158",   
       title:"A bill to amend the Immigration and Nationality Act to provide that aliens who have been convicted of,or who have committed,sex offenses or domestic violence are inadmissible and deportable.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 157",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/157",   
       title:"A bill to authorize certain States to take certain actions on certain Federal land to secure an international border of the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 156",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/156",   
       title:"A bill to amend the Food Security Act of 1985 to modify the delivery of technical assistance,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 155",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/155",   
       title:"A bill to improve communication between the United States Postal Service and local communities relating to the relocation and establishment of Postal Service retail service facilities,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 154",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/154",   
       title:"A bill to amend the Energy and Water Development and Related Agencies Appropriations Act,2015,to reauthorize the Colorado River System conservation pilot program.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 568",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/568",   
       title:"To provide funding to State and local law enforcement agencies to combat auto theft and stolen automobile trafficking,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 567",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/567",   
       title:"To expand labor representation on State and local workforce development boards,to provide a definition of labor organization,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 566",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/566",   
       title:"To direct the Administrator of the Environmental Protection Agency to provide grants to air pollution control agencies to implement a cleaner air space program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 565",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/565",   
       title:"To amend title 28,United States Code,to change the residency requirements for certain officials serving in the District of Columbia,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 564",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/564",   
       title:"To repeal the Protecting Americans from Foreign Adversary Controlled Applications Act.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 563",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/563",   
       title:"To amend title 18,United States Code,to discontinue the collection by the Federal Government of firearm transaction records of discontinued firearms businesses,to require the destruction of such already collected records,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 562",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/562",   
       title:"To advance a comprehensive,long-term United States strategy and policy for the Pacific Islands,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 561",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/561",   
       title:"To amend the Internal Revenue Code of 1986 to establish a deduction for certain overtime payments.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 560",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/560",   
       title:"To amend the Internal Revenue Code of 1986 to exclude compensation from secondary employment for certain taxpayers from the income tax and payroll taxes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 559",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/559",   
       title:"To amend the Internal Revenue Code of 1986 to establish an above-the-line tax deduction for seniors.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 558",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/558",   
       title:"To amend the Internal Revenue Code of 1986 to provide that certain tips shall not be subject to income taxes for a period of 5 years.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 557",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/557",   
       title:"To amend the Internal Revenue Code of 1986 to establish a deduction for certain amounts received as a bonus.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 153",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/153",   
       title:"A bill to repeal the Protecting Americans from Foreign Adversary Controlled Applications Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 152",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/152",   
       title:"A bill to amend the Internal Revenue Code of 1986 to permit kindergarten through grade 12 educational expenses to be paid from a 529 account.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 151",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/151",   
       title:"A bill to exclude the authority to impose duties and tariff-rate quotas from the International Emergency Economic Powers Act.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 150",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/150",   
       title:"A bill to require the Secretary of Homeland Security and the Secretary of State to implement a strategy to combat the efforts of transnational criminal organizations to recruit individuals in the United States via social media platforms and other online services and assess their use of such platforms and services for illicit activities.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 149",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/149",   
       title:"A bill to require the Secretary of Homeland Security to take into custody aliens who have been charged in the United States with theft,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 148",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/148",   
       title:"A bill to prohibit the use of non-monetized or unqualified factors for regulatory analyses,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 147",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/147",   
       title:"A bill to direct the Administrator of the Environmental Protection Agency to provide grants to air pollution control agencies to implement a cleaner air space program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 556",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/556",   
       title:"Protecting Access for Hunters and Anglers Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 555",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/555",   
       title:"Veterans Affairs Transfer of Information and Sharing of Disability Examination Procedures With DOD Doctors Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 554",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/554",   
       title:"Veteran’s Choice Accountability Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 553",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/553",   
       title:"BRAVE Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 552",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/552",   
       title:"Veterans Collaboration Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 551",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/551",   
       title:"Make the Migrant Protection Protocols Mandatory Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 550",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/550",   
       title:"Wildfire Insurance Coverage Study Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 549",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/549",   
       title:"To amend the Internal Revenue Code of 1986 to repeal the clean fuel production credit.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 548",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/548",   
       title:"HSA Modernization Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 547",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/547",   
       title:"To amend the Internal Revenue Code of 1986 to require an individual to provide a social security number to claim the child tax credit.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 546",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/546",   
       title:"To direct the Attorney General to establish a grant program for civilian traffic violation enforcement.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 545",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/545",   
       title:"To direct the Attorney General to conduct a study on the efficacy of extreme risk protection orders on reducing gun violence,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 544",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/544",   
       title:"To provide a private right of action against the maker of any component of a ghost gun,and any person who facilitated a sale of the ghost gun,for injury or death resulting from the use of the ghost gun.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 543",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/543",   
       title:"Iron Pipeline Review Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 542",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/542",   
       title:"No Foreign Gifts Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 541",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/541",   
       title:"To require the Department of Defense to share best practices with,and offer training to,State and local first responders regarding how to most effectively aid victims who experience trauma-related injuries.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 540",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/540",   
       title:"911 SAVES Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 539",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/539",   
       title:"Chiropractic Medicare Coverage Modernization Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 538",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/538",   
       title:"Critical Access Hospital Relief Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 537",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/537",   
       title:"To amend the Internal Revenue Code of 1986 to provide tax credits for the conversion of commercial buildings to residential units,to provide support and technical assistance to State and local housing agencies to identify and advance housing conversion opportunities for underutilized commercial buildings,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 536",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/536",   
       title:"Agricultural Environmental Stewardship Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 535",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/535",   
       title:"Inaugural Fund Integrity Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 534",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/534",   
       title:"CONTAINER Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 533",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/533",   
       title:"Bank Privacy Reform Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 532",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/532",   
       title:"Handgun Permit to Purchase Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 531",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/531",   
       title:"To amend the South Pacific Tuna Act of 1988,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 530",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/530",   
       title:"ACES Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 529",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/529",   
       title:"RACE Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 528",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/528",   
       title:"To require the Secretary of the Interior to carry out a program for post-disaster reforestation and restoration Program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 527",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/527",   
       title:"Strengthening Wildfire Resiliency Through Satellites Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 526",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/526",   
       title:"Declaration of Energy Independence Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 525",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/525",   
       title:"HONDURAS Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 524",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/524",   
       title:"To amend the Internal Revenue Code of 1986 to deny certain green energy tax benefits to companies connected to certain countries of concern.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 523",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/523",   
       title:"Permanent Tax Cuts for American Families Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 522",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/522",   
       title:"FAITH in Small Business Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 521",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/521",   
       title:"Ending Presidential Overreach on Public Lands Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 520",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/520",   
       title:"Empowering Law Enforcement To Fight Sex Trafficking Demand Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 519",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/519",   
       title:"Federal Subaward Reporting System Modernization and Expansion Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 518",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/518",   
       title:"Troops Before Politicians Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 517",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/517",   
       title:"Filing Relief for Natural Disasters Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 516",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/516",   
       title:"To amend the Internal Revenue Code of 1986 to modify the railroad track maintenance credit.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 515",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/515",   
       title:"Ensuring Military Readiness Not Discrimination Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 514",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/514",   
       title:"SWAMP Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 513",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/513",   
       title:"Offshore Lands Authorities Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 512",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/512",   
       title:"Imported Seafood Safety Standards Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 511",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/511",   
       title:"To provide remedies to members of the Armed Forces discharged or subject to adverse action under the COVID-19 vaccine mandate.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 510",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/510",   
       title:"Regulatory Cooling Off Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 509",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/509",   
       title:"Western Hemisphere Nearshoring Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 508",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/508",   
       title:"Bring American Companies Home Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 507",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/507",   
       title:"Veterans Member Business Loan Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 506",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/506",   
       title:"Security First Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 505",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/505",   
       title:"To impose additional duties on imports of goods into the United States.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 504",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/504",   
       title:"Miccosukee Reserved Area Amendments Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 503",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/503",   
       title:"Qualified Immunity Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 502",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/502",   
       title:"Protecting Infrastructure Investments for Rural America Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 501",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/501",   
       title:"Promoting Resilient Buildings Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 500",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/500",   
       title:"Medicare Hearing Aid Coverage Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 499",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/499",   
       title:"To rename the medical center of the Department of Veterans Affairs in Dallas,Texas,as the \"Eddie Bernice Johnson VA Medical Center\".",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 498",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/498",   
       title:"To amend title XIX of the Social Security Act to prohibit Federal Medicaid funding for gender transition procedures for minors.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced','Transgender', 'LGBTQ','Pinned'] 
  },
   {
       bill_id:"H.R. 497",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/497",   
       title:"To amend title XIX of the Social Security Act to provide clarification with respect to the liability of third party payers for medical assistance paid under the Medicaid program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 496",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/496",   
       title:"To direct the Secretary of Veterans Affairs to notify the Attorney General that basis for the transmission of certain information to the Department of Justice for use by the national instant criminal background check system was improper,does not apply,or no longer applies,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 495",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/495",   
       title:"To require annual reports on counter illicit cross-border tunnel operations,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 494",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/494",   
       title:"To amend the Cybersecurity Enhancement Act of 2014 to make improvements to the Federal Cyber Scholarship for Service Program,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 493",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/493",   
       title:"To increase the rates of pay under the statutory pay systems and for prevailing rate employees by 4.3 percent,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 492",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/492",   
       title:"To prohibit the establishment of schedule F of the excepted service,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 491",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/491",   
       title:"To amend title 5,United States Code,to achieve parity between the cost-of-living adjustment with respect to an annuity under the Federal Employees Retirement System and an annuity under the Civil Service Retirement System,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 490",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/490",   
       title:"To prohibit Federal funds from being used for any property or entity owned by Donald J. Trump,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 489",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/489",   
       title:"To establish the Federal Agency Sunset Commission.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 488",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/488",   
       title:"Combating Cartels on Social Media Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 487",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/487",   
       title:"Hawaii Invasive Species Protection Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 486",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/486",   
       title:"To establish a grant program in the Bureau of Consumer Financial Protection to fund the establishment of centers of excellence to support research,development and planning,implementation,and evaluation of effective programs in financial literacy education for young people and families ages 8 through 24 years old,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 485",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/485",   
       title:"Muhammad Ali Congressional Gold Medal Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 484",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/484",   
       title:"Food Deserts Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 483",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/483",   
       title:"Health Care Efficiency Through Flexibility Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 482",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/482",   
       title:"No Tax on Tips Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 481",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/481",   
       title:"Protecting Homeowners from Disaster Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 480",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/480",   
       title:"Methane Border Adjustment Mechanism Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 479",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/479",   
       title:"Healthy SNAP Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 478",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/478",   
       title:"Promoting New Bank Formation Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 477",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/477",   
       title:"MACH Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 476",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/476",   
       title:"To require the imposition of sanctions with respect to any foreign person that knowingly participates in the construction,maintenance,or repair of a tunnel or bridge that connects the Russian mainland with the Crimean peninsula.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 475",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/475",   
       title:"Sanction Russian Nuclear Safety Violators Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 474",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/474",   
       title:"Lumbee Fairness Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 473",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/473",   
       title:"SHOW UP Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 472",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/472",   
       title:"Restore VA Accountability Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 470",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/470",   
       title:"Red Snapper Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 145",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/145",   
       title:"A bill to require the redesignation of Ansarallah as a foreign terrorist organization.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 144",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/144",   
       title:"A bill to amend the Farm Security and Rural Investment Act of 2002 with respect to the definition of biofuels and sustainable aviation fuel,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 143",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/143",   
       title:"A bill to amend the Clean Air Act to repeal the natural gas tax.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 142",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/142",   
       title:"A bill to award a Congressional Gold Medal to wildland firefighters in recognition of their strength,resiliency,sacrifice,and service to protect the forests,grasslands,and communities of the United States,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 141",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/141",   
       title:"A bill to identify and address barriers to coverage of remote physiologic devices under State Medicaid programs to improve maternal and child health outcomes for pregnant and postpartum women.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 140",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/140",   
       title:"A bill to address the forest health crisis on the National Forest System and public lands,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 139",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/139",   
       title:"A bill to amend the Public Health Service Act to reauthorize and extend the Fetal Alcohol Spectrum Disorders Prevention and Services program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 138",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/138",   
       title:"A bill to require each enterprise to include on the Uniform Residential Loan Application a disclaimer to increase awareness of the direct and guaranteed home loan programs of the Department of Veterans Affairs,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 137",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/137",   
       title:"A bill to amend title 41,United States Code,to prohibit the Federal Government from entering into contracts with an entity that discriminates against firearm or ammunition industries,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 136",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/136",   
       title:"A bill to lift the trade embargo on Cuba,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 135",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/135",   
       title:"A bill to amend title 5,United States Code,to provide for special base rates of pay for wildland firefighters,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 134",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/134",   
       title:"A bill to place limitations on excepting positions from the competitive service,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 133",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/133",   
       title:"A bill to modify the fire management assistance cost share,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 132",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/132",   
       title:"A bill to amend the Internal Revenue Code of 1986 to modify the rules for postponing certain deadlines by reason of disaster.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 131",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/131",   
       title:"A bill to amend the Internal Revenue Code of 1986 to create a tax credit for nurse preceptors.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 130",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/130",   
       title:"A bill to reform the antitrust laws to better protect competition in the American economy,to amend the Clayton Act to modify the standard for an unlawful acquisition,to deter anticompetitive exclusionary conduct that harms competition and consumers,to enhance the ability of the Department of Justice and the Federal Trade Commission to enforce the antitrust laws,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 129",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/129",   
       title:"A bill to amend the Internal Revenue Code of 1986 to eliminate the application of the income tax on qualified tips through a deduction allowed to all individual taxpayers,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 128",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/128",   
       title:"A bill to amend the National Voter Registration Act of 1993 to require proof of United States citizenship to register an individual to vote in elections for Federal office,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 127",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/127",   
       title:"A bill to establish a whole-home repairs program for eligible homeowners and eligible landlords,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 126",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/126",   
       title:"A bill to increase the rates of pay under the statutory pay systems and for prevailing rate employees by 4.3 percent,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 125",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/125",   
       title:"A bill to end the use of taxpayer funds for entities that perform,provide referrals for,or provide funding for,abortions,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 124",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/124",   
       title:"A bill to amend title 38,United States Code,to provide for disciplinary procedures for supervisors and managers at the Department of Veterans Affairs and to modify the procedures of personnel actions against employees of the Department,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 123",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/123",   
       title:"A bill to authorize for a grant program for handgun licensing programs,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 122",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/122",   
       title:"A bill to amend the Revised Statutes to codify the defense of qualified immunity in the case of any action under section 1979,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 121",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/121",   
       title:"A bill to extend the statute of limitations for violations relating to pandemic-era programs to be 10 years.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 120",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/120",   
       title:"A bill to amend the Robert T. Stafford Disaster Relief and Emergency Assistance Act to establish a pilot program for the construction of temporary disaster assistance housing,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 119",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/119",   
       title:"A bill to amend title 18,United States Code,to discontinue the collection by the Federal Government of firearm transaction records of discontinued firearms businesses,to require the destruction of such already collected records,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 118",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/118",   
       title:"A bill to require additional disclosures relating to donations to the Presidential Inaugural Committee,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 117",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/117",   
       title:"A bill to provide remedies to members of the Armed Forces discharged or subject to adverse action under the COVID-19 vaccine mandate.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 116",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/116",   
       title:"A bill to rename the medical center of the Department of Veterans Affairs in Dallas,Texas,as the \"Eddie Bernice Johnson VA Medical Center\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 115",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/115",   
       title:"A bill to amend title 18,United States Code,to establish a criminal penalty for unauthorized access to Department of Defense facilities.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 114",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/114",   
       title:"A bill to provide for enhanced Federal,State,and local assistance in the enforcement of the immigration laws,to amend the Immigration and Nationality Act,and to authorize appropriations to carry out the State Criminal Alien Assistance Program.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 113",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/113",   
       title:"A bill to require the appropriate Federal banking agencies to establish a 3-year phase-in period for de novo financial institutions to comply with Federal capital standards,to provide relief for de novo rural community banks,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 112",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/112",   
       title:"A bill to amend section 235(b)(2)(C) of the Immigration and Nationality Act to require the implementation of the Migrant Protection Protocols.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 111",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/111",   
       title:"A bill to provide that the Secretary of Commerce shall not issue an interim or final rule or Secretarial Amendment that includes an area or bottom closure in the South Atlantic for species managed under the Fishery Management Plan for the Snapper-Grouper Fishery of the South Atlantic Region until the South Atlantic Great Red Snapper Count study is complete and the data related to that study is integrated into the stock assessment.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 110",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/110",   
       title:"A bill to amend the Federal Credit Union Act to exclude extensions of credit made to veterans from the definition of a member business loan.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 109",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/109",   
       title:"A bill to require the Secretary of the Interior to conduct certain offshore lease sales under the Outer Continental Shelf Lands Act,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 108",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/108",   
       title:"A bill to make members of the Chinese Communist Party and their family members ineligible for F or J visas,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 107",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/107",   
       title:"A bill to amend the Lumbee Act of 1956.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 106",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/106",   
       title:"A bill to amend title XVIII of the Social Security Act to provide Medicare coverage for all physicians' services furnished by doctors of chiropractic within the scope of their license,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 469",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/469",   
       title:"Semiquincentennial Congressional Time Capsule Act",
       partySupport:"Democratic",
       summary:"Semiquincentennial Congressional Time Capsule Act This bill requires the Architect of the Capitol to create a congressional time capsule in honor of the 250<sup>th</sup> anniversary of the Declaration of Independence to be buried on the west lawn of the Capitol on or before July 4,2026. Congressional leadership will determine the contents of the time capsule,and the time capsule shall be sealed until July 4,2276.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 468",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/468",   
       title:"To amend the Higher Education Act of 1965 to require institutions of higher education,as a condition of participation in programs under title IV of such Act,to establish a policy to award posthumous degrees to certain deceased students,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 467",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/467",   
       title:"To amend title 38,United States Code,to eliminate the requirement of a service-connected disability to furnish veterans with medical care outside of a State,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 466",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/466",   
       title:"To require the Secretary of Energy to obtain the consent of affected State and local governments before making an expenditure from the Nuclear Waste Fund for a nuclear waste repository,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 465",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/465",   
       title:"To prohibit the flying of any flag other than the United States flag over United States diplomatic and consular posts,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 464",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/464",   
       title:"To amend the Internal Revenue Code of 1986 to provide for lifelong learning accounts,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 463",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/463",   
       title:"Lower Your Taxes Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 462",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/462",   
       title:"No Support for Terror Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 461",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/461",   
       title:"Eliminate DEI in the Military Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced','LGBTQ','Pinned'] 
  },
   {
       bill_id:"H.R. 460",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/460",   
       title:"To direct the Secretary of Homeland Security and Secretary of State to require aliens applying for certain visas to disclose if they receive funds from the Government of the People's Republic of China or the Chinese Communist Party,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 459",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/459",   
       title:"STAND Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 458",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/458",   
       title:"Protecting our Land Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 457",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/457",   
       title:"Passport Notification Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 456",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/456",   
       title:"Protecting Dogs Subjected to Experiments Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 455",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/455",   
       title:"To amend the Higher Education Act of 1965 to prohibit the award of Federal funds to institutions of higher education that employ instructors funded by the Chinese Communist Party,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 454",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/454",   
       title:"Safe Bases Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 453",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/453",   
       title:"Religious Insignia on Dog Tags Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 452",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/452",   
       title:"Miracle on Ice Congressional Gold Medal Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 451",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/451",   
       title:"FAIR PREP Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 450",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/450",   
       title:"FORCE Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 449",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/449",   
       title:"To amend the Immigration and Nationality Act to waive certain naturalization requirements for United States nationals,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 448",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/448",   
       title:"Silver Cliff Community Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 447",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/447",   
       title:"Reliability for Ratepayers Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 446",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/446",   
       title:"Endowment Tax Fairness Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 445",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/445",   
       title:"Border Security Investment Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 444",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/444",   
       title:"Native American Health Savings Improvement Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 443",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/443",   
       title:"Parris Island Protection Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 442",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/442",   
       title:"Quality Loss Adjustment Improvement for Farmers Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 441",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/441",   
       title:"Drought Assistance Improvement Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 440",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/440",   
       title:"READY Accounts Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 439",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/439",   
       title:"Veterans Foreign Medical Coverage Equality and Modernization Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 438",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/438",   
       title:"PFC Joseph P. Dwyer Peer Support Program Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 437",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/437",   
       title:"SNOW Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 436",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/436",   
       title:"To prohibit the use of Federal funds to support or facilitate the participation of the Russian Federation in the Group of Seven,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 435",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/435",   
       title:"To amend title 5,United States Code,to provide direct hire authority to appoint individuals to Federal wildland firefighting and firefighting support positions in the Forest Service or the Department of the Interior,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 434",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/434",   
       title:"CBP Workload Staffing Model Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 433",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/433",   
       title:"Department of Education Protection Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 432",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/432",   
       title:"Seventh Amendment Restoration Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 431",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/431",   
       title:"Pony Up Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 430",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/430",   
       title:"SALT Deductibility Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 429",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/429",   
       title:"Rosie the Riveter Commemorative Coin Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 428",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/428",   
       title:"Bonuses for Cost-Cutters Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 427",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/427",   
       title:"Interstate Commerce Simplification Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 426",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/426",   
       title:"Housing Survivors of Major Disasters Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 425",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/425",   
       title:"Repealing Big Brother Overreach Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 424",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/424",   
       title:"State Border Security Reimbursement Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 423",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/423",   
       title:"Private Student Loan Bankruptcy Fairness Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 422",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/422",   
       title:"No Subsidies for Wealthy Universities Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 421",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/421",   
       title:"Small Business Regulatory Flexibility Improvements Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 420",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/420",   
       title:"Federal Grant Accountability Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 419",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/419",   
       title:"Protecting America From Spies Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 418",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/418",   
       title:"Ensuring Accountability in Agency Rulemaking Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 417",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/417",   
       title:"End U.N. Censorship Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 416",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/416",   
       title:"No Welfare for the Wealthy Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 415",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/415",   
       title:"Stop Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 414",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/414",   
       title:"Student Visa Security Improvement Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 413",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/413",   
       title:"CHILD Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 412",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/412",   
       title:"To authorize the Bay Mills Indian Community of the State of Michigan to convey land and interests in land owned by the Tribe.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 411",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/411",   
       title:"Keweenaw Bay Indian Community Land Claim Settlement Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 410",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/410",   
       title:"Alaska Native Vietnam Era Veterans Land Allotment Extension Act of 2025",
       partySupport:"Republican",
       summary:"Alaska Native Vietnam Era Veterans Land Allotment Extension Act of 2025 This bill extends for an additional five years the time period during which an eligible Alaska Native veteran may apply for a land allotment under the Alaska Native Vietnam Era Veterans Land Allotment Program. The program makes Alaska Native veterans who served in the Armed Forces in Vietnam between August 5,1964,and December 31,1971,or their heirs eligible to receive up to 160 acres of federal land in Alaska.Under the current program,the Department of the Interior's Bureau of Land Management may accept applications through December 29,2025. This bill extends this time period for an additional five years to December 29,2030.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 409",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/409",   
       title:"Supporting Transit Commutes Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 408",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/408",   
       title:"To nullify the Presidential memoranda on the withdrawal of certain areas of the outer Continental Shelf from oil or natural gas leasing.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 407",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/407",   
       title:"Prevent Tariff Abuse Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 406",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/406",   
       title:"PROTECT Jewish Student and Faculty Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 405",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/405",   
       title:"Keep Every Extra Penny Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 404",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/404",   
       title:"Hearing Protection Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 105",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/105",   
       title:"Wounded Knee Massacre Memorial and Sacred Site Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 104",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/104",   
       title:"Overturn Biden’s Offshore Energy Ban Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 103",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/103",   
       title:"Extend the TikTok Deadline Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 102",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/102",   
       title:"ROOMIE Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 101",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/101",   
       title:"Nuclear Waste Informed Consent Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 100",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/100",   
       title:"Repealing Big Brother Overreach Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 99",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/99",   
       title:"Strengthening Support for American Manufacturing Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 98",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/98",   
       title:"Rural Broadband Protection Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 97",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/97",   
       title:"Securing Semiconductor Supply Chains Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 96",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/96",   
       title:"FAIR PREP Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 95",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/95",   
       title:"Parris Island Protection Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 94",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/94",   
       title:"Miracle on Ice Congressional Gold Medal Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 6",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/6",   
       title:"Born-Alive Abortion Survivors Protection Act",
       partySupport:"Republican",
       summary:"Born-Alive Abortion Survivors Protection Act This bill establishes requirements for the degree of care a health care practitioner must provide in the case of a child born alive following an abortion or attempted abortion.Specifically,a health care practitioner who is present must (1) exercise the same degree of care as would reasonably be provided to any other child born alive at the same gestational age,and (2) ensure the child is immediately admitted to a hospital. Additionally,a health care practitioner or other employee who has knowledge of a failure to comply with the degree-of-care requirements must immediately report such failure to law enforcement.A health care practitioner who fails to provide the required degree of care,or a health care practitioner or other employee who fails to report such failure,is subject to criminal penalties—a fine,up to five years in prison,or both.An individual who intentionally kills or attempts to kill a child born alive is subject to prosecution for murder.The bill bars the criminal prosecution of a mother of a child born alive under this bill and allows her to bring a civil action against a health care practitioner or other employee for violations.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 403",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/403",   
       title:"Preventing Our Next Natural Disaster Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 402",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/402",   
       title:"DEBT Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 401",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/401",   
       title:"No Taxpayer Funding for the World Health Organization Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 400",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/400",   
       title:"No taxpayer funding for United Nations Human Rights Council Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 399",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/399",   
       title:"To permanently extend the American Samoa economic development tax credit.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 398",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/398",   
       title:"Geothermal Cost-Recovery Authority Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 397",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/397",   
       title:"To designate the facility of the United States Postal Service located at 216 Cumberland Street in Rochester,New York,as the \"Minister Franklin Florence Memorial Post Office\".",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 396",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/396",   
       title:"TRUST in Congress Act",
       partySupport:"Democratic",
       summary:"<b>Transparent Representation Upholding Service and Trust in Congress Act or the TRUST in Congress Act</b> This bill requires a Member of Congress,as well as any spouse or dependent child of a Member,to place specified investments into a qualified blind trust (i.e.,an arrangement in which certain financial holdings are placed in someone else's control to avoid a possible conflict of interest) until 180 days after the end of their tenure as a Member of Congress. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 395",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/395",   
       title:"Justice for Rape Survivors Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 394",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/394",   
       title:"Holding Child Predators Accountable Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 393",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/393",   
       title:"No Repeat Child Sex Offenders Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 392",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/392",   
       title:"PRECEPT Nurses Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 391",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/391",   
       title:"Extend the TikTok Deadline Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 390",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/390",   
       title:"ACERO Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 389",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/389",   
       title:"Southern Border Farmers and Ranchers Protection Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 388",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/388",   
       title:"Cattle Fever Tick Eradication Program Enhancement Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 387",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/387",   
       title:"Texas Agricultural Producers Assistance Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 385",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/385",   
       title:"Combating Global Corruption Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 384",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/384",   
       title:"One Agency Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 383",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/383",   
       title:"End Oil and Gas Tax Subsidies Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 382",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/382",   
       title:"Exported Carbon Emissions Report Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 381",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/381",   
       title:"LNG Public Interest Determination Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 380",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/380",   
       title:"Affordable Shipping for All Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 379",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/379",   
       title:"Healthcare Freedom and Choice Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 378",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/378",   
       title:"Thin Blue Line Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 377",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/377",   
       title:"Regulation Reduction Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 376",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/376",   
       title:"Historic Roadways Protection Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 93",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/93",   
       title:"Harmful Algal Bloom and Hypoxia Research and Control Amendments Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 92",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/92",   
       title:"Defending American Sovereignty in Global Pandemics Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 91",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/91",   
       title:"Western Wildfire Support Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 90",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/90",   
       title:"Historic Roadways Protection Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 89",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/89",   
       title:"Sporting Firearms Access Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 88",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/88",   
       title:"No Budget,No Pay Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 87",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/87",   
       title:"Let's Get to Work Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 86",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/86",   
       title:"A bill to repeal the provision of law that provides automatic pay adjustments for Members of Congress.",
       partySupport:"Republican",
       summary:"This bill eliminates automatic increases to pay for Members of Congress,beginning with the 120th Congress. Current law automatically increases Member pay according to a formula. The annual increase is (1) based on the percentage change in private sector wages as measured by the Employment Cost Index (ECI); and (2) capped at the percentage increase to General Schedule (GS) employees' base pay. The annual adjustment automatically goes into effect unless Congress modifies the increase in legislation.  ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 85",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/85",   
       title:"Continued Rapid Ohia Death Response Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 84",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/84",   
       title:"Sarah's Law",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 83",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/83",   
       title:"Thin Blue Line Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 374",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/374",   
       title:"To rescind certain balances made available to the Internal Revenue Service and redirect them to the U.S. Customs and Border Protection.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 373",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/373",   
       title:"SAGA Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 372",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/372",   
       title:"Drug Testing for Welfare Recipients Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 371",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/371",   
       title:"No Hires for the Delinquent IRS Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 370",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/370",   
       title:"Voluntary School Prayer Protection Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 369",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/369",   
       title:"States’ Education Reclamation Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 368",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/368",   
       title:"Territorial Tax Parity and Fairness Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 367",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/367",   
       title:"Territorial Tax Parity and Clarification Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 366",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/366",   
       title:"To amend the Internal Revenue Code of 1986 to cover into the treasury of the Virgin Islands revenue from tax on fuel produced in the Virgin Islands and entered into the United States.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 365",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/365",   
       title:"Territorial Tax Parity Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 364",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/364",   
       title:"Territorial Tax Equity and Economic Growth Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 363",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/363",   
       title:"Territorial Economic Recovery Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 362",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/362",   
       title:"Virgin Islands Visa Waiver Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 361",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/361",   
       title:"Make Greenland Great Again Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 360",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/360",   
       title:"Oyster Reef Recovery Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 359",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/359",   
       title:"Cost-Share Accountability Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 358",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/358",   
       title:"No Corruption in Government Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 357",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/357",   
       title:"Back to Work Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 356",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/356",   
       title:"To assign the responsibility for conducting prosecutions for violations of the laws of the District of Columbia to the head of a local prosecutors office designated under local law of the District of Columbia.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 355",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/355",   
       title:"Justice for Jocelyn Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 354",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/354",   
       title:"Small Business Growth Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 353",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/353",   
       title:"Family First Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 352",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/352",   
       title:"Motorist Tax Abuse Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 351",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/351",   
       title:"To amend the Intermodal Surface Transportation Efficiency Act of 1991 to prohibit congestion or cordon pricing in a value pricing program,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 350",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/350",   
       title:"Prosecutors Need to Prosecute Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 349",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/349",   
       title:"Goldie’s Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 348",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/348",   
       title:"Stop Corrupt Iranian Oligarchs and Entities Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 347",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/347",   
       title:"Sea Turtle Rescue Assistance and Rehabilitation Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 346",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/346",   
       title:"Preserving Choice in Vehicle Purchases Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 345",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/345",   
       title:"Fire Department Repayment Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 344",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/344",   
       title:"Anti-Congestion Tax Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 343",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/343",   
       title:"Title X Abortion Provider Prohibition Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 342",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/342",   
       title:"Honor Inauguration Day Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 341",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/341",   
       title:"Railroad Responsibility Act of 2025",
       partySupport:"Republican",
       summary:"Railroad Responsibility Act of 2025 This bill provides states with the authority to adopt or enact any law,regulation,order,or other requirement limiting the duration that a railroad carrier may block a grade rail crossing. Specifically,this bill states that federal transportation laws do not preempt a state from adopting or enacting these limits. As background,state and federal courts have generally found that state laws regarding obstructed crossings are preempted by one or more federal laws,thereby rendering the state laws unenforceable.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 340",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/340",   
       title:"The HCT/P Modernization Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 339",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/339",   
       title:"Broadband Resiliency and Flexible Investment Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 338",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/338",   
       title:"Every Drop Counts Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 337",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/337",   
       title:"To provide technical and financial assistance for groundwater recharge,aquifer storage,and water source substitution projects.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 336",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/336",   
       title:"HEADWAY Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 335",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/335",   
       title:"Repeal the NFA Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 334",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/334",   
       title:"To amend the Communications Act of 1934 to establish technical and procedural standards for artificial or prerecorded voice systems created through generative artificial intelligence,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 333",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/333",   
       title:"Disabled Veterans Tax Termination Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 332",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/332",   
       title:"Travel Trailer and Camper Tax Parity Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 331",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/331",   
       title:"To amend the Aquifer Recharge Flexibility Act to clarify a provision relating to conveyances for aquifer recharge purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 82",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/82",   
       title:"Telework Reform Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 81",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/81",   
       title:"Guidance Clarity Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 80",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/80",   
       title:"STEP Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 79",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/79",   
       title:"ACCESS Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 78",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/78",   
       title:"TRUE Accountability Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 77",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/77",   
       title:"Early Participation in Regulations Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 76",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/76",   
       title:"SMART Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 75",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/75",   
       title:"Improving Federal Financial Management Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 74",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/74",   
       title:"Fair Play for Girls Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 73",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/73",   
       title:"EMPSA",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 72",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/72",   
       title:"Justice for Jocelyn Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 71",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/71",   
       title:"Baby Changing on Board Act",
       partySupport:"Democratic",
       summary:"Baby Changing on Board Act This bill requires Amtrak passenger rail trains to have a baby changing table in at least one restroom in each car, including in an Americans with Disabilities Act of 1990-compliant restroom. The bill applies to passenger rail trains that are (1) owned and operated by Amtrak,and (2) solicited for purchase after the bill's enactment for use by Amtrak.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 70",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/70",   
       title:"A bill to require the imposition of sanctions with respect to Ansarallah and its officials,agents,or affiliates for acts of international terrorism.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 330",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/330",   
       title:"Organ Donation Referral Improvement Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 329",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/329",   
       title:"Expanding Penalty Free Withdrawal Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 328",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/328",   
       title:"REVOCAR Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 327",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/327",   
       title:"Valor Earned Not Stolen Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 326",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/326",   
       title:"Border Wall Waste Accountability Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 325",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/325",   
       title:"To designate a peak in the State of Nevada as Maude Frazier Mountain,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 324",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/324",   
       title:"PPP Shell Company Discovery Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 323",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/323",   
       title:"To designate the facility of the United States Postal Service located at 80 Prospect Street in Avon,New York,as the \"Officer Anthony Mazurkiewicz Memorial Post Office Building\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 322",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/322",   
       title:"Import Security and Fairness Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 321",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/321",   
       title:"FLY Act",
       partySupport:"Republican",
       summary:"Fast Lane for Youths Act or the FLY Act This bill directs the Federal Aviation Administration (FAA) and the Transportation Security Administration (TSA) to allow caregivers,parents,and guardians who already qualify for the TSA PreCheck program to accompany minors and passengers needing assistance to their flights. The TSA PreCheck program expedites traveler screening through participating TSA security checkpoints. Specifically,the FAA and the TSA must collaborate to establish a system to expedite gate passes and flight access procedures for these individuals. The system must ensure that these caregivers,parents,and guardians are provided up to two gate passes.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 320",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/320",   
       title:"Make Marriage Great Again Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 319",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/319",   
       title:"To authorize an additional district judgeship for the district of Idaho.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 318",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/318",   
       title:"Border Safety and Security Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 317",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/317",   
       title:"Healthcare Freedom Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 316",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/316",   
       title:"Natural Disaster Recovery Program Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 315",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/315",   
       title:"To waive certain provisions in the case of an emergency declaration under the Robert T. Stafford Disaster Relief and Emergency Assistance Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 314",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/314",   
       title:"Empowering Nonprofits Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 313",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/313",   
       title:"Natural Gas Tax Repeal Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 312",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/312",   
       title:"Restoring Vehicle Market Freedom Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 311",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/311",   
       title:"Restoring Fuel Market Freedom Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 310",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/310",   
       title:"Restoring Energy Market Freedom Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 309",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/309",   
       title:"National Law Enforcement Officers Remembrance,Support and Community Outreach Act.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 308",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/308",   
       title:"Low Income Housing for Defense Communities Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 307",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/307",   
       title:"ARC Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 306",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/306",   
       title:"ESCRA Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 305",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/305",   
       title:"One School,One Nurse Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 304",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/304",   
       title:"To designate the facility of the United States Postal Service located at 290 NW Peacock Boulevard in Port St. Lucie,Florida,as the \"Trooper Zachary Fink Post Office Building\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 303",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/303",   
       title:"Retired Pay Restoration Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 302",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/302",   
       title:"Water Rights Protection Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 301",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/301",   
       title:"GEO Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 300",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/300",   
       title:"Daylight Act",
       partySupport:"Republican",
       summary:"Daylight Act This bill allows states to observe daylight saving time year-round. (States may already choose to observe standard time year-round.)",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 299",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/299",   
       title:"Transparency of Migration Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 298",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/298",   
       title:"To eliminate certain limitations and exclusions regarding defense articles and requirements regarding security assistance and sales with respect to the Republic of Cyprus.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 297",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/297",   
       title:"HELP PETS Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 296",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/296",   
       title:"Justice for 9/11 Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 295",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/295",   
       title:"Fair Milk Pricing for Farmers Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 294",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/294",   
       title:"Dairy Farm Resiliency Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 293",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/293",   
       title:"Making Agricultural Products Locally Essential (MAPLE) Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 292",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/292",   
       title:"GRAPE Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 291",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/291",   
       title:"CAREERS Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 290",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/290",   
       title:"Rural Telehealth and Education Enhancement Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 289",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/289",   
       title:"SAP Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 288",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/288",   
       title:"Long Island Sound Restoration and Stewardship Reauthorization Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 287",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/287",   
       title:"Mobile Post Office Relief Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 286",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/286",   
       title:"Preserving Safe Communities by Ending Swatting Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 285",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/285",   
       title:"Advanced Border Coordination Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 284",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/284",   
       title:"GLRI Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 283",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/283",   
       title:"Panama Canal Repurchase Act of 2025",
       partySupport:"Republican",
       summary:"Panama Canal Repurchase Act of 2025 This bill authorizes the President to negotiate with the appropriate Panamanian government officials to reacquire the Panama Canal. The President must submit a report to Congress within 180 days of enactment detailing the progress of such negotiations,potential challenges,and anticipated outcomes. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 282",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/282",   
       title:"To designate the facility of the United States Postal Service located at 107 North Hoyne Avenue in Fritch,Texas,as the \"Chief Zeb Smith Post Office\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 281",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/281",   
       title:"Grizzly Bear State Management Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 280",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/280",   
       title:"COAL Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 279",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/279",   
       title:"To direct the United States Postal Service to designate a single,unique ZIP Code for Fairlawn,Virginia,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 278",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/278",   
       title:"BROADBAND Leadership Act",
       partySupport:"Republican",
       summary:"Barriers and Regulatory Obstacles Avoids Deployment of Broadband Access and Needs Deregulatory Leadership Act or the BROADBAND Leadership Act This bill limits the authority of a state or locality to regulate the placement,construction,or modification of telecommunications service facilities.States and localities may not discriminate in such regulations among providers of telecommunications services,including based on the technology used to provide services. In addition,states and localities may not regulate in a manner that effectively prohibits the provision or improvement of interstate or intrastate telecommunications services.However,states and localities may charge reasonable,cost-based fees (1) to review requests to place,construct,or modify telecommunications service facilities; or (2) for the use of property owned or managed by the state or locality for the placement,construction,or modification of those facilities.States or localities must respond to requests to place,construct,or modify facilities and for other related actions by specified deadlines. Such deadlines may only be tolled by a mutual agreement between the applicant and the state or locality,or in the event that the application is incomplete and requires a supplemental submission. If a decision is not made by the deadline,the request is deemed to be approved. Further,denials of requests must be made in writing,supported by evidence,and promptly released to the public.A person adversely affected by an alleged violation of these provisions may petition the courts for expedited review of the actions of the state or locality. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 277",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/277",   
       title:"To amend title 18,United States Code,to provide protections for nonviolent political protesters,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 276",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/276",   
       title:"Gulf of America Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 275",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/275",   
       title:"Special Interest Alien Reporting Act of 2024",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 274",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/274",   
       title:"Sunset Chevron Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 273",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/273",   
       title:"REMAIN in Mexico Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 272",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/272",   
       title:"Protecting Life and Taxpayers Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 271",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/271",   
       title:"Defund Planned Parenthood Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 270",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/270",   
       title:"To authorize the waiver of costs of activities relating to evacuation of United States citizens when their lives are endangered by war or acts of terrorism.",
       partySupport:"Republican",
       summary:"This bill authorizes the Department of State to waive the requirement for U.S. citizens to repay the costs of evacuation from foreign countries when their lives are endangered by war or acts of terrorism.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 269",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/269",   
       title:"Secretary General Jens Stoltenberg Congressional Gold Medal Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 268",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/268",   
       title:"STOP MADURO Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 267",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/267",   
       title:"Health Care PRICE Transparency Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 266",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/266",   
       title:"Educational Opportunity and Success Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 265",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/265",   
       title:"Train FOOD Act",
       partySupport:"Democratic",
       summary:"Train Furtherance of Outstanding Onboard Dining Act or the Train FOOD Act This bill directs Amtrak to establish an advisory committee to provide internal review for Amtrak's implementation of the Amtrak Food and Beverage Working Group (FBWG) recommendations to improve onboard food and beverage service.The Amtrak advisory committee must submit an annual report to Congress on the status of Amtrak's implementation of each of the FBWG recommendations. The advisory committee's annual reports must be publicly available on an Amtrak website.In addition,the Government Accountability Office must submit a report to Congress describing Amtrak's progress in implementing each FBWG report recommendation.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 264",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/264",   
       title:"Train EATS Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 263",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/263",   
       title:"Transnational Criminal Organization Illicit Spotter Prevention and Elimination Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 262",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/262",   
       title:"Disaster Reforestation Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 261",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/261",   
       title:"Undersea Cable Protection Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 260",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/260",   
       title:"No Tax Dollars for Terrorists Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 259",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/259",   
       title:"No Funding for Illegal Migrant Billboards Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 258",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/258",   
       title:"To cancel certain proposed changes to loan level price adjustments by the Federal National Mortgage Association and credit fees charged by the Federal Home Loan Mortgage Corporation.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 257",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/257",   
       title:"SEC Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 256",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/256",   
       title:"SAVE Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 255",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/255",   
       title:"To name the Department of Veterans Affairs community-based outpatient clinic in Lubbock,Texas,as the \"General Bernie Mittemeyer VA Clinic\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 254",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/254",   
       title:"American Science First Act",
       partySupport:"Republican",
       summary:"American Science First Act  This bill prohibits the National Science Foundation (NSF) from providing grants or other forms of assistance to certain foreign individuals and entities. Specifically,the NSF may not support any individual or entity that is affiliated or otherwise has a relationship,including but not limited to a research partnership,joint venture,or contract,with <ul>  an entity included on the entity list under the Export Administration Regulations,which identifies foreign entities subject to license requirements for the export,reexport,or transfer of certain items;   a Chinese military company operating in the United States or any of its territories or possessions on the list required under the Strom Thurmond National Defense Authorization Act for Fiscal Year 1999,or required under the Mac Thornberry National Defense Authorization Act for Fiscal Year 2021,or any successor list; or   any parent,subsidiary,affiliate of,or entity owned by or controlled by any such entity.  ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 253",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/253",   
       title:"Bipartisan Restoring Faith in Government Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 252",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/252",   
       title:"Secure Our Ports Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 251",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/251",   
       title:"Legal Workforce Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 250",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/250",   
       title:"To direct the Joint Committee on the Library to procure a statue of Benjamin Franklin for placement in the Capitol.",
       partySupport:"Democratic",
       summary:"This bill requires the Joint Committee on the Library to contract for and place a statue of Benjamin Franklin in the Capitol.The committee shall place the statue in a permanent public location where it is accessible during a guided tour provided by the Capitol Visitor Center.The contract must be executed by December 31,2025,and the statue must be placed by December 31,2026. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 249",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/249",   
       title:"To redesignate certain facilities at Paterson Great Falls National Historical Park in honor of Congressman Bill Pascrell,Jr.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 248",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/248",   
       title:"Baby Changing on Board Act",
       partySupport:"Democratic",
       summary:"Baby Changing on Board Act This bill requires Amtrak passenger rail trains to have a baby changing table in at least one restroom in each car, including in an Americans with Disabilities Act of 1990-compliant restroom. The bill applies to passenger rail trains that are (1) owned and operated by Amtrak,and (2) solicited for purchase after the bill's enactment for use by Amtrak.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 247",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/247",   
       title:"Health Care Affordability Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 246",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/246",   
       title:"SALT Fairness for Working Families Act",
       partySupport:"Democratic",
       summary:"SALT Fairness for Working Families Act This bill increases the limitation on the federal tax deduction for state and local taxes (commonly known as the SALT deduction cap) to $15,000 ($30,000 for married individuals filing a joint federal income tax return). Under current law,the SALT deduction cap is $10,000 ($5,000 for a married individuals filing separate federal income tax returns).",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 245",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/245",   
       title:"Grant Integrity and Border Security Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 244",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/244",   
       title:"Veterans’ True Choice Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 243",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/243",   
       title:"Georgian Nightmare Non-Recognition Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 242",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/242",   
       title:"MANAGER Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 241",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/241",   
       title:"Sergeant Ted Grubbs Mental Healthcare for Disabled Veterans Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 69",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/69",   
       title:"COLLUDE Act",
       partySupport:"Republican",
       summary:"<b>Curtailing Online Limitations that Lead Unconstitutionally to Democracy's Erosion Act or the COLLUDE Act</b> This bill limits federal liability protection,sometimes referred to as Section 230 protection,that generally precludes providers and users of an interactive computer service (e.g.,a social media company) from being held legally responsible for content provided by a third party. Specifically,the bill removes the protection if a provider restricts access to or availability of content containing political speech because of a governmental request unless the request serves a legitimate law enforcement or national security purpose. In addition,the bill changes legal procedures for applying the protection. Currently,the protection serves as broad immunity that typically allows the early dismissal of lawsuits,thereby preempting lawsuits and statutes that impose liability for third-party content. This bill makes the protection an affirmative defense,which means the provider or user must prove that the protection applies before the lawsuit may be dismissed.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 68",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/68",   
       title:"Complete COVID Collections Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 67",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/67",   
       title:"Censorship Accountability Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 66",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/66",   
       title:"Transparency in Bureaucratic Communications Act",
       partySupport:"Republican",
       summary:"Transparency in Bureaucratic Communications Act This bill requires federal offices of inspectors general to include in their existing semiannual reports to Congress information about any communications between their department or agency and certain online platforms and services. Specifically,such reports must include details on the contents and circumstances of any communication or attempted communication with an internet platform,information content provider,or access software provider. Covered communications include those addressing specific online content,content moderation practices,and any other topic related to a platform's or service's data inputs,algorithms,modeling and simulation processes,analysis tools,or any related tool. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 65",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/65",   
       title:"Constitutional Concealed Carry Reciprocity Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 64",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/64",   
       title:"A bill to direct the United States Postal Service to designate a single,unique ZIP Code for Fairlawn,Virginia,and for other purposes.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 63",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/63",   
       title:"CBW Fentanyl Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 62",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/62",   
       title:"America First Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 61",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/61",   
       title:"National Human Trafficking Database Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 60",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/60",   
       title:"Write the Laws Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 59",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/59",   
       title:"One Subject at a Time Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 58",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/58",   
       title:"A bill to designate the facility of the United States Postal Service located at 107 North Hoyne Avenue in Fritch,Texas,as the \"Chief Zeb Smith Post Office\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 57",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/57",   
       title:"MAPLE Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 56",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/56",   
       title:"SAP Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 55",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/55",   
       title:"Read the Bills Act",
       partySupport:"Republican",
       summary:"Read the Bills Act This bill establishes requirements for bills and resolutions to be introduced or considered by the Senate or the House of Representatives.First,the bill requires any bill or resolution to cite the specific powers granted to Congress in the Constitution to enact all provisions in the proposed measure. Without this information,the measure may not be accepted by the Clerk of the House or the Secretary of the Senate or submitted for a final vote. Each measure must also set forth the current law such measure is amending and show the proposed modifications to the law (except where a complete section of law is stricken). Further,a vote on final passage of such measure may not occur unless (1) the full text of the measure is published at least seven days before the vote,(2) public notice of the calendar week during which the vote is scheduled to take place is posted at least six days before the Monday of such week,and (3) the full text of the measure is read verbatim to the assembled body in each chamber. Members must affirm in writing that they read the measure in full or were present throughout the reading before voting in favor of passing the measure (i.e.,such requirements do not apply for a member who votes against passage).The bill also authorizes a person aggrieved by a violation of the bill's provisions to sue for appropriate relief (such as an injunction against enacting the measure).",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 54",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/54",   
       title:"A bill to authorize an additional district judgeship for the district of Idaho.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 53",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/53",   
       title:"PRINTS Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 52",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/52",   
       title:"End Child Trafficking Now Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 51",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/51",   
       title:"Washington,D.C. Admission Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 50",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/50",   
       title:"Transnational Criminal Organization Illicit Spotter Prevention and Elimination Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 49",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/49",   
       title:"Expel Illegal Chinese Police Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 48",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/48",   
       title:"SAVE Girls Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 47",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/47",   
       title:"Defense of Conscience in Health Care Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 46",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/46",   
       title:"Health Care Affordability Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 45",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/45",   
       title:"Balanced Budget Accountability Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 44",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/44",   
       title:"A bill to direct the Joint Committee of Congress on the Library to procure a statue of Benjamin Franklin for placement in the United States Capitol.",
       partySupport:"Democratic",
       summary:"This bill requires the Joint Committee on the Library to contract for and place a statue of Benjamin Franklin in the Capitol.The committee shall place the statue in a permanent public location where it is accessible during a guided tour provided by the Capitol Visitor Center.The contract must be executed by December 31,2025,and the statue must be placed by December 31,2026. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 43",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/43",   
       title:"Skinny Labels,Big Savings Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 42",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/42",   
       title:"Build the Wall Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 41",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/41",   
       title:"Advanced Border Coordination Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 40",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/40",   
       title:"Commission to Study and Develop Reparation Proposals for African Americans Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 39",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/39",   
       title:"STOP MADURO Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 38",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/38",   
       title:"Preserving Safe Communities by Ending Swatting Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 37",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/37",   
       title:"VALOR Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 36",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/36",   
       title:"Protect Our Seniors Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 35",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/35",   
       title:"Homeowners Premium Tax Reduction Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 34",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/34",   
       title:"Justice for 9/11 Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 33",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/33",   
       title:"A bill to amend title 5,United States Code,to clarify the nature of judicial review of agency interpretations of statutory and regulatory provisions.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 31",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/31",   
       title:"A bill to designate the mountain at the Devils Tower National Monument,Wyoming,as Devils Tower,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 30",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/30",   
       title:"ERASER Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 240",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/240",   
       title:"Protect Local Farms Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 239",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/239",   
       title:"JFK Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 238",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/238",   
       title:"Healthy Technology Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 237",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/237",   
       title:"Paws Off Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 236",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/236",   
       title:"Federal Employee Return to Work Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 235",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/235",   
       title:"National Museum of Play Recognition Act",
       partySupport:"Democratic",
       summary:"National Museum of Play Recognition Act This bill designates the Margaret Woodbury Strong Museum in Rochester,New York,as the National Museum of Play.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 234",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/234",   
       title:"HOV Lanes for Heroes Act",
       partySupport:"Republican",
       summary:"<b>HOV Lanes for Heroes Act</b> This bill provides authority for a public authority to allow a disabled veteran to use a high occupancy vehicle (HOV) facility if such veteran has a license plate that clearly identifies the vehicle,a registered transponder,or other method of qualifying identification. The public authority may not charge a toll to the veteran for use of the HOV facility.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 233",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/233",   
       title:"HELP PETS Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 232",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/232",   
       title:"SALT Fairness and Marriage Penalty Elimination Act",
       partySupport:"Republican",
       summary:"SALT Fairness and Marriage Penalty Elimination Act This bill increases the limitation on the federal tax deduction for state and local taxes (commonly known as the SALT deduction cap) to $100,000 ($200,000 for married individuals filing a joint federal income tax return). Under current law,the SALT deduction cap is $10,000 ($5,000 for married individuals filing separate federal income tax returns). ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 231",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/231",   
       title:"Colorado River Basin System Conservation Extension Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 230",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/230",   
       title:"To prohibit the implementation of the Approved Resource Management Plan Amendment for the Buffalo,Wyoming Field Office of the Bureau of Land Management.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 229",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/229",   
       title:"To prohibit the implementation of the Rock Springs Field Office Record of Decision and Approved Resource Management Plan.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 228",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/228",   
       title:"To amend the Internal Revenue Code of 1986 to increase and adjust for inflation the above-the-line deduction for teachers.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 227",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/227",   
       title:"Clergy Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 225",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/225",   
       title:"HUD Transparency Act of 2025",
       partySupport:"Republican",
       summary:"HUD Transparency Act of 2025 This bill requires the Office of Inspector General of the Department of Housing and Urban Development (HUD) to annually testify before Congress.Specifically,the office must testify regarding<ul> efforts to detect and prevent fraud,waste,and abuse;  ability to conduct and supervise audits,investigations,and reviews;  actions to identify opportunities for HUD programs to progress and succeed;  recommendations to improve overall efficiency and public accountability;  the extent to which HUD has resources sufficient to carry out its statutory mission; and   ongoing activities regarding any such additional work. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 223",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/223",   
       title:"Preventing Unjust Red Flag Laws Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 222",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/222",   
       title:"Sustainable Budget Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 221",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/221",   
       title:"Abolish the ATF Act",
       partySupport:"Republican",
       summary:"<b>Abolish the ATF Act</b> This bill abolishes the Bureau of Alcohol,Tobacco,Firearms and Explosives. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 220",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/220",   
       title:"Veterans Infertility Treatment Act of 2025",
       partySupport:"Democratic",
       summary:"Veterans Infertility Treatment Act of 2025 This bill requires the Department of Veterans Affairs (VA) to furnish infertility treatments,standard fertility preservation services,or both to a covered veteran or partner of a covered veteran. A covered veteran is a veteran who is enrolled in the VA health care system and has infertility or is at risk of having infertility,as determined by a licensed physician.The VA may furnish up to three completed in vitro fertilization cycles that result in live birth,or 10 attempted cycles,whichever occurs first. Additionally,the VA may furnish in vitro fertilization treatment using donated gametes or embryos.The VA must receive consent to furnish an in vitro fertilization cycle from the covered veteran,the partner of a covered veteran,and the third-party donor (if applicable).For purposes of paying travel expenses for treatment or services to the partner of a covered veteran,the VA must deem the partner to be a veteran receiving treatment or care.The VA must prescribe regulations related to the provision of infertility treatments and standard fertility preservation services as required by this bill.Prior to the enactment of such regulations,the VA must ensure that (1) counseling and treatment furnished under existing authority is available to a veteran and the veteran's partner,regardless of whether they are married; and (2) treatment under existing authority may be furnished using donated gametes or embryos.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 219",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/219",   
       title:"Improving Menopause Care for Veterans Act of 2025",
       partySupport:"Democratic",
       summary:"Improving Menopause Care for Veterans Act of 2025 This bill requires the Government Accountability Office (GAO) to study and report on the medical services furnished by the Department of Veterans Affairs (VA) for veterans experiencing perimenopause,genitourinary syndrome of menopause,and menopause stages. The VA must also report to Congress on a strategic plan to (1) implement any recommendations GAO makes in its report,(2) improve the quality of menopause care,and (3) improve the access of veterans to menopause care.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 218",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/218",   
       title:"State Immigration Enforcement Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 217",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/217",   
       title:"CHIP IN for Veterans Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 216",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/216",   
       title:"SEC Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 29",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/29",   
       title:"Sunshine Protection Act of 2025",
       partySupport:"Republican",
       summary:"Sunshine Protection Act of 2025 This bill makes daylight saving time the new,permanent standard time.States with areas exempt from daylight saving time may choose the standard time for those areas.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 28",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/28",   
       title:"Informing Consumers about Smart Devices Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 27",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/27",   
       title:"Federal Employee Return to Work Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 26",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/26",   
       title:"A bill to exclude locality adjustments from average pay for purposes of computing the amount of retirement annuities of new employees.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 25",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/25",   
       title:"Polluters Pay Climate Fund Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 24",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/24",   
       title:"A bill to designate the facility of the United States Postal Service located at 154 First Avenue East in Jerome,Idaho,as the \"Representative Maxine Bell Post Office\".",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 23",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/23",   
       title:"DRAIN THE SWAMP Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 22",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/22",   
       title:"SWAMP Act",
       partySupport:"Republican",
       summary:"Strategic Withdrawal of Agencies for Meaningful Placement Act or the SWAMP Act This bill prohibits new construction,major renovation,leasing,or renewing a lease of certain executive agency headquarters in the District of Columbia metropolitan area and establishes a competitive bidding process for the relocation of such headquarters.The General Services Administration (GSA) must (1) establish a process to allow an executive agency to request the GSA to issue a solicitation for the relocation of its headquarters or allow the GSA to issue such a solicitation without a request,if necessary; (2) allow any state or political subdivision of a state to respond to a solicitation with a proposal for the relocation of the agency's headquarters; and (3) in consultation with the executive agency,select a state or political subdivision of a state for the relocation of the agency's headquarters using a competitive bidding procedure based on certain considerations.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 21",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/21",   
       title:"REMOTE Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"S. 9",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/9",   
       title:"Protection of Women and Girls in Sports Act of 2025",
       partySupport:"Republican",
       summary:"Protection of Women and Girls in Sports Act of 2025 This bill generally prohibits school athletic programs from allowing individuals whose biological sex at birth was male to participate in programs that are for women or girls.Specifically,the bill provides that it is a violation of Title IX of the Education Amendments of 1972 for federally funded education programs or activities to operate,sponsor,or facilitate athletic programs or activities that allow individuals of the male sex to participate in programs or activities that are designated for women or girls. (Title IX prohibits discrimination on the basis of sex in federally funded education programs or activities,including in public elementary and secondary schools and in colleges and universities.) Under the bill,<em> sex</em> is based on an individual's reproductive biology and genetics at birth.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 215",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/215",   
       title:"Adoption Information Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 214",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/214",   
       title:"District of Columbia Legislative Home Rule Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 213",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/213",   
       title:"To prohibit the use of Federal financial assistance for a certain high-speed rail development project in the State of California,and for other purposes.",
       partySupport:"Republican",
       summary:"This bill prohibits the state of California from receiving federal funds for a high-speed rail corridor development project. Specifically,the prohibition applies to a project in California that is the same or substantially similar to the project that is the subject of an FY2010 cooperative agreement entered into on November 18,2011,between the California High-Speed Rail Authority (CHSRA) and the Federal Railroad Administration (FRA).As background, CHSRA has received various federal grants for the California High-Speed Rail program, a project led by the state of California with the goal of implementing a high-speed rail system capable of speeds exceeding 200 miles per hour between Los Angeles and San Francisco. The FRA terminated the specific FY2010 cooperative agreement on May 16,2019.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 212",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/212",   
       title:"Capitol Remembrance Act",
       partySupport:"Democratic",
       summary:"Capitol Remembrance Act This bill requires the Architect of the Capitol (AOC) to design and install in a prominent location in the U.S. Capitol a permanent exhibit that depicts the January 6,2021,attack on the Capitol.To the extent possible,the AOC must preserve property that was damaged during the attack and include it in the exhibit. The AOC must also include (1) existing photographic records relating to the attack; and (2) a plaque to honor the U.S. Capitol Police and other law enforcement agencies that protected the Capitol,the individuals who died or sustained injuries to protect the Capitol,and the staff who helped restore the Capitol complex after the attack.The exhibit shall be installed within two years after the bill's enactment. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 211",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/211",   
       title:"Equal Access to Contraception for Veterans Act",
       partySupport:"Democratic",
       summary:"<b>Equal Access to Contraception for Veterans Act</b> This bill prohibits the Department of Veterans Affairs from requiring payment from a veteran for any contraceptive item that is required to be covered by health insurance plans without a cost-sharing requirement.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 210",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/210",   
       title:"Dental Care for Veterans Act",
       partySupport:"Democratic",
       summary:"<b>Dental Care for Veterans Act</b> This bill expands eligibility for veterans for dental care provided by the Department of Veterans Affairs (VA). Specifically,the bill makes all veterans who are enrolled in the VA health care system eligible for VA-provided dental services. Currently,only veterans who have a service-connected dental issue or meet other narrow criteria are eligible for certain dental services. The bill phases in eligibility over four years based upon existing eligibility,degree of service-connected disability or other disability,prisoner of war status,award of a Purple Heart,financial need,or VA health care eligibility.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 209",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/209",   
       title:"Inaction Has Consequences Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 208",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/208",   
       title:"No Budget,No Pay Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 206",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/206",   
       title:"Landlord Accountability Act of 2025",
       partySupport:"Democratic",
       summary:"Landlord Accountability Act of 2025 This bill prohibits housing discrimination based on income,provides protections to tenants of certain federally assisted housing,and establishes a low-income housing maintenance tax credit for eligible landlords.Specifically,the bill prohibits discrimination in rental housing and residential real estate transactions based on an individual's source of income and provides for penalties. Protected income sources include<ul> housing vouchers and rental assistance,  rental and homeownership subsidies,  Social Security and disability income assistance,and  spousal and child support. Additionally,landlords are prohibited from taking or failing to take certain actions with the intent to make a unit ineligible to receive Department of Housing and Urban Development (HUD) assistance. Landlords that violate this prohibition are subject to penalties and may be sued by harmed tenants. The bill further prohibits property owners of certain multifamily housing projects from intentionally leaving a unit vacant for more than 60 days. Property owners that violate this prohibition are subject to penalties.The bill also provides protections to tenants of multifamily housing projects,which includes requiring HUD to increase the staffing level for the Multifamily Housing Complaint Line and create a Multifamily Housing Complaint Resolution Program.In addition,HUD may provide grants to develop,expand,and assist tenant harassment prevention programs.Finally,the bill establishes a tax credit for qualifying landlords that is equal to the landlord's annual low-income housing maintenance expenses. To qualify,a landlord must have addressed within 30 days any relevant complaints filed under the complaint resolution program.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 205",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/205",   
       title:"No Congressional Funds for Sanctuary Cities Act",
       partySupport:"Republican",
       summary:"No Congressional Funds for Sanctuary Cities Act This bill prohibits federal funds from being used as congressionally directed spending (i.e.,an earmark) for jurisdictions that withhold information about citizenship or immigration status or do not cooperate with immigration detainers.Specifically,such funds are denied to any jurisdiction that has a law,policy,or practice that prohibits or restricts any government entity from<ul> maintaining,sending,or receiving information regarding the citizenship or immigration status of any individual;  exchanging information regarding an individual's citizenship or immigration status with a federal,state,or local government entity;  complying with a valid immigration detainer from the Department of Homeland Security (DHS); or  notifying DHS about an individual's release from custody. The funding restriction does not apply to a law,policy,or practice that only applies to an individual who comes forward as a victim of or a witness to a criminal offense.This prohibition begins in FY2026.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 203",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/203",   
       title:"Red Light Act",
       partySupport:"Republican",
       summary:"Red Light Act This bill directs the Department of Transportation to withhold all of a state's share of certain federal highway funds (specifically,funds for the National Highway Performance Program,the Highway Safety Improvement Program,and the Congestion Mitigation and Air Quality Improvement Program) in FY2023 and thereafter if such state has enacted a law to provide driver's licenses or other identification cards to aliens who are unlawfully present in the United States.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 202",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/202",   
       title:"Commission to Relocate the Federal Bureaucracy Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 201",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/201",   
       title:"Federal Employee Performance and Accountability Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 200",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/200",   
       title:"Federal Freeze Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 199",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/199",   
       title:"Implementing DOGE Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 198",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/198",   
       title:"SERVE Our Communities Act",
       partySupport:"Republican",
       summary:"Stop Enabling Repeat Violence and Endangering Our Communities Act or the SERVE Our Communities Act  This bill authorizes the Bureau of Justice Assistance to make grants to states and local governments for mentoring,transitional services,and training to help offenders successfully reintegrate back into the community after incarceration. To be eligible for a grant,a state or local government must take steps to prevent repeat offenses by violent offenders and allow a state court or magistrate to consider the danger an individual poses to the community when determining bail or pretrial release conditions. <br/> ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 196",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/196",   
       title:"Family and Small Business Taxpayer Protection Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 195",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/195",   
       title:"CBP Relocation Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 194",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/194",   
       title:"Venue Named Under Exception Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 193",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/193",   
       title:"Maintaining Innovation and Safe Technologies Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 191",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/191",   
       title:"Inflation Reduction Act of 2025",
       partySupport:"Republican",
       summary:"Inflation Reduction Act of 2025 This bill repeals the Inflation Reduction Act of 2022 and rescinds any unobligated funds made available by the act.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 190",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/190",   
       title:"SEND THEM BACK Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 188",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/188",   
       title:"Amtrak Transparency and Accountability for Passengers and Taxpayers Act",
       partySupport:"Republican",
       summary:"Amtrak Transparency and Accountability for Passengers and Taxpayers Act This bill directs Amtrak to comply with federal open meeting requirements under the Government in the Sunshine Act,with exceptions.Under the bill,certain open meeting requirements do not apply to any portion or portions of a meeting that Amtrak properly determines are likely to involve<ul> contract negotiations,including negotiations for contract procurements and agreements,the disclosure of which would imperil or compromise Amtrak’s competitive position;  collective bargaining agreements or any terms and conditions that are proposed for inclusion in an agreement; and  matters involving the employment,appointment, termination,terms and conditions of employment,performance evaluation,promotion,or disciplining of a current or prospective Amtrak officer,employee,or contractor (unless all affected individuals request in writing that the matter or matters be discussed at a public meeting). ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 185",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/185",   
       title:"To advance responsible policies.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 184",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/184",   
       title:"Action Versus No Action Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 183",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/183",   
       title:"Law Enforcement Officer Recreation Pass Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 182",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/182",   
       title:"Default Prevention Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 181",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/181",   
       title:"To amend the Endangered Species Act of 1973 to provide that artificially propagated animals shall be treated the same under that Act as naturally propagated animals,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 180",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/180",   
       title:"Endangered Species Transparency and Reasonableness Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 179",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/179",   
       title:"To direct the Secretary concerned to coordinate with impacted parties when conducting a forest management activity,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 178",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/178",   
       title:"To require the Secretary of Agriculture to carry out activities to suppress wildfires,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 177",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/177",   
       title:"Yosemite National Park Equal Access and Fairness Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 176",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/176",   
       title:"No Immigration Benefits for Hamas Terrorists Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 175",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/175",   
       title:"Deport Alien Gang Members Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 174",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/174",   
       title:"Consequences for Social Security Fraud Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 173",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/173",   
       title:"High Rise Fire Sprinkler Incentive Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 172",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/172",   
       title:"Defund Heroin Injection Centers Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 171",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/171",   
       title:"Make Transportation Authorities Accountable and Transparent Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 170",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/170",   
       title:"USPS Subpoena Authority Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 169",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/169",   
       title:"Prevent Family Fire Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 168",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/168",   
       title:"To improve the ability of the Secretary of Agriculture and the Secretary of the Interior to carry out forest management actives that reduce the risk of catastrophic wildfires,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 167",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/167",   
       title:"Community Reclamation Partnerships Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 166",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/166",   
       title:"Fair Lending for All Act",
       partySupport:"Democratic",
       summary:"Fair Lending for All Act  This bill adds classes of individuals protected under the Equal Credit Opportunity Act.With respect to credit transactions,the bill adds sexual orientation,gender identity,and an applicant's location based on zip code or census tract as classes protected against discrimination. (Currently,discrimination is prohibited on the basis of race,color,religion,national origin,sex,marital status,age,or because an applicant receives public assistance.)The bill establishes criminal penalties for violations of prohibited credit discrimination.The Consumer Financial Protection Bureau is required to review loan applications for compliance with specified consumer laws and to establish an Office of Fair Lending Testing.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 163",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/163",   
       title:"Finish the Wall Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 162",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/162",   
       title:"First Amendment Accountability Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 161",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/161",   
       title:"New Source Review Permitting Improvement Act",
       partySupport:"Republican",
       summary:"<b>New Source Review Permitting Improvement Act</b>  This bill modifies terminology for purposes of the New Source Review (NSR) permitting program of the Environmental Protection Agency (EPA). In order for a change to a stationary source to be a <i>modification</i> (a change to a stationary source that increases the air pollutant emissions or results in new pollutants) for purposes of the NSR permitting program,the maximum hourly emission rate achievable by such source must be higher than the maximum hourly rate achievable by such source during any hour in the 10-year period preceding the change. A change at a stationary source is not considered to be a <i>modification</i> under the bill if it is designed to (1) reduce the amount of any air pollutant emitted; or (2) restore,maintain,or improve the reliability of operations at,or safety of,the source. However,such changes are not excepted if the EPA determines the increase in the maximum achievable hourly emission rate from such change would cause an adverse effect on human health or the environment. <i>Construction</i>,in connection with a major emitting facility (a type of stationary source),does not include a change at such a facility that does not result in a significant emissions increase or a significant net emissions increase. In relation to major emitting facilities in nonattainment areas,the terms <i>modifications </i>and <i>modified</i> do not include changes at such facilities that do not result in a significant emissions increase or a significant net emissions increase.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 160",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/160",   
       title:"Restoring Faith in Elections Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 159",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/159",   
       title:"CLEAN Public Service Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 158",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/158",   
       title:"CLEAN Elections Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 157",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/157",   
       title:"CLEAN Congress Act",
       partySupport:"Republican",
       summary:"<b>Citizen Legislature Anti-Corruption Reform of Congress Act or the CLEAN Congress Act</b> This bill (1) requires bills,orders,resolutions,or votes submitted by Congress to the President to include only one subject that is clearly and descriptively expressed in the measure's title; and (2) makes ineffective any provision of law that excludes its application to a Member of Congress or to an employee in a Member's office.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 156",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/156",   
       title:"Securing our Elections Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 155",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/155",   
       title:"Let America Vote Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 154",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/154",   
       title:"Election Day Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 151",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/151",   
       title:"Equal Representation Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 150",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/150",   
       title:"People CARE Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 149",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/149",   
       title:"Lead by Example Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 148",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/148",   
       title:"Keep Your Coins Act of 2025",
       partySupport:"Republican",
       summary:"Keep Your Coins Act of 2025 This bill prohibits federal agencies from restricting a person's use of convertible virtual currency for their own purposes or to conduct transactions through a self-hosted wallet.  ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 147",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/147",   
       title:"FinCEN Oversight and Accountability Act of 2025",
       partySupport:"Republican",
       summary:"FinCEN Oversight and Accountability Act of 2025 This bill requires the Department of the Treasury to keep specified congressional committees informed of the activity of the Financial Crimes Enforcement Network (FinCEN),particularly regarding unlawful activity and any resulting corrective action.Further,Treasury must disclose to Congress and to the public (with some exclusions) all controlling documents delegating authority to or providing direction to FinCEN. Such disclosure includes any controlling documents in force upon enactment,any controlling documents issued thereafter,and any changes to controlling documents.The bill extends for an additional five years the time period during which Treasury must testify before Congress regarding FinCEN’s anti-money laundering programs.FinCEN must also hold an annual small business working group to provide guidance on beneficial ownership reporting obligations. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 146",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/146",   
       title:"Prohibition on IOER Act of 2025",
       partySupport:"Republican",
       summary:"Prohibition on IOER Act of 2025 This bill prohibits a Federal Reserve bank from paying interest to a depository institution on reserve balances in excess of minimum requirements. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 145",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/145",   
       title:"To amend the Securities Act of 1933 to permit an individual to invest in private issuers upon acknowledging the investment risks,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 143",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/143",   
       title:"Unauthorized Spending Accountability Act",
       partySupport:"Republican",
       summary:"Unauthorized Spending Accountability Act This bill reduces budgetary levels for certain federal programs that are funded through the annual appropriations process and do not have an authorization of appropriations.Under the bill,<em>budgetary levels</em> are spending allocations provided to the congressional appropriations committees by a congressional budget resolution or a deeming resolution. The allocations are provided under the Congressional Budget Act of 1974 and are often referred to as 302(a) allocations.The bill applies to programs included in the Congressional Budget Office's (CBO's) annual report listing programs that are funded through the appropriations process and have an authorization of appropriations that has either expired or will expire during the year. If a program is listed in the CBO report,the bill requires specified reductions to be implemented over a three-year period and terminates the unauthorized programs at the end of the third unauthorized year.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 142",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/142",   
       title:"Regulations from the Executive in Need of Scrutiny Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 141",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/141",   
       title:"Trailer Safety Improvement Act",
       partySupport:"Republican",
       summary:"Trailer Safety Improvement Act This bill requires that state highway safety programs address trailer safety equipment,preventive maintenance,and other aspects of the proper and safe usage of light- and medium-duty trailers.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 140",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/140",   
       title:"Hurricane Helene and Milton Tax Relief Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 139",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/139",   
       title:"Sunshine Protection Act of 2025",
       partySupport:"Republican",
       summary:"Sunshine Protection Act of 2025 This bill makes daylight saving time the new,permanent standard time.States with areas exempt from daylight saving time may choose the standard time for those areas.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 138",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/138",   
       title:"Lowering Costs for Caregivers Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 137",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/137",   
       title:"TCJA Permanency Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 136",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/136",   
       title:"Veteran Overmedication and Suicide Prevention Act of 2025",
       partySupport:"Republican",
       summary:"Veteran Overmedication and Suicide Prevention Act of 2025 This bill requires the Department of Veterans Affairs (VA) to contract with the National Academies of Sciences,Engineering,and Medicine to report on the deaths of covered veterans who died by suicide during the last five years,regardless of whether information relating to such deaths has been reported by the Centers for Disease Control and Prevention. A covered veteran is any veteran who received VA hospital care or medical services during the five-year period preceding the veteran's death.Among other elements,the report shall include the total number of covered veterans who died by suicide,violent death,or accidental death,as well as certain demographic information.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 135",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/135",   
       title:"Manatee Protection Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 134",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/134",   
       title:"Protecting our Communities from Sexual Predators Act",
       partySupport:"Republican",
       summary:"Protecting our Communities from Sexual Predators Act This bill requires the Department of Justice (DOJ) to detain certain non-U.S. nationals (<em>aliens</em> under federal law) who have been arrested for sexual assault. The bill also provides for the inadmissibility and deportability of certain individuals convicted of sexual assault.Under this bill,the DOJ must detain an individual who (1) is unlawfully present in the United States,made certain misrepresentations,or did not possess the necessary documents when applying for admission; and (2) has been charged with,arrested for,convicted of,or admits to having committed acts which constitute the essential elements of,an offense involving sexual assault.The bill also establishes under statute that a conviction for certain crimes related to sexual assault shall be grounds for (1) barring an individual from entering the United States,and (2) deportability. (Under current law,convictions for certain crimes,including crimes involving moral turpitude,are grounds for inadmissibility and deportability.) ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 133",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/133",   
       title:"Protecting American Energy Production Act",
       partySupport:"Republican",
       summary:"Protecting American Energy Production Act This bill prohibits the President from declaring a moratorium on the use of hydraulic fracturing unless Congress authorizes the moratorium. The bill also expresses the sense of Congress that states should maintain primacy (authority) for the regulation of hydraulic fracturing for oil and natural gas production on state and private lands.Hydraulic fracturing,or fracking,is a process to extract underground resources such as oil or gas from a geologic formation by injecting water,a propping agent (e.g.,sand),and chemical additives into a well under enough pressure to fracture the formation.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 132",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/132",   
       title:"Western Water Accelerated Revenue Repayment Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 131",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/131",   
       title:"Finish the Arkansas Valley Conduit Act",
       partySupport:"Republican",
       summary:"Finish the Arkansas Valley Conduit Act This bill reduces payments that communities within the Arkansas River Valley must pay to the Bureau of Reclamation for the construction of the Arkansas Valley Conduit,a pipeline in Colorado for delivering water from the Pueblo Reservoir to such communities. Specifically,it removes interest payments and extends the repayment period to 100 years.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 130",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/130",   
       title:"Trust the Science Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 129",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/129",   
       title:"Abolish the ATF Act",
       partySupport:"Republican",
       summary:"<b>Abolish the ATF Act</b> This bill abolishes the Bureau of Alcohol,Tobacco,Firearms and Explosives. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 128",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/128",   
       title:"Fentanyl is a WMD Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 127",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/127",   
       title:"Protection from Obamacare Mandates and Congressional Equity Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 126",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/126",   
       title:"Original Students Voicing Opinions in Today’s Elections (VOTE) Act",
       partySupport:"Democratic",
       summary:"Original Students Voicing Opinions in Today's Elections (VOTE) Act This bill directs the Election Assistance Commission to carry out a pilot program providing funds,during FY2025,to local educational agencies (LEAs) for initiatives that provide 12th graders with voter registration information.LEAs must consult with their state and local election officials in developing the initiatives.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 125",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/125",   
       title:"Limiting Emergency Powers Act of 2025",
       partySupport:"Republican",
       summary:"Limiting Emergency Powers Act of 2025 This bill terminates any national emergency declared by the President 30 days after the declaration unless a joint resolution affirming the declaration is enacted. All national emergency declarations expire after two years unless the President requests a renewal and a joint resolution affirming the renewal is enacted.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 124",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/124",   
       title:"To amend title XIX of the Social Security Act to provide incentives for education on the risk of renal medullary carcinoma in individuals who are receiving medical assistance under such title and who have sickle cell disease.",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 123",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/123",   
       title:"Improving Science in Chemical Assessments Act",
       partySupport:"Republican",
       summary:"<b>Improving Science in Chemical Assessments Act</b> This bill modifies procedures related to specified chemical assessments performed by the Environmental Protection Agency (EPA). Specifically,chemical hazard identification and dose response assessments must be performed by the appropriate EPA program office (they are currently performed by the Integrated Risk Information System program). Additionally,the bill requires the EPA to establish a steering committee to ensure there is no duplication of effort by relevant program offices in conducting covered assessments.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 122",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/122",   
       title:"Original LAW Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 121",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/121",   
       title:"No Vaccine Passports Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 120",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/120",   
       title:"No Mandates Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 119",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/119",   
       title:"To prohibit any entity that receives Federal funds from the COVID relief packages from mandating employees receive a COVID19 vaccine,and for other purposes.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 118",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/118",   
       title:"No Federal Funds for Political Prosecutions Act",
       partySupport:"Republican",
       summary:"No Federal Funds for Political Prosecutions Act This bill specifies that no funds or property received through equitable sharing by a state or local law enforcement agency with the authority to prosecute a criminal case may be used to investigate or prosecute a current or former President or Vice President,or a candidate for the office of President.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 117",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/117",   
       title:"Fourth Amendment Restoration Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 116",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/116",   
       title:"Stopping Border Surges Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 115",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/115",   
       title:"No Free Rent for Freeloaders Act of 2025",
       partySupport:"Republican",
       summary:"No Free Rent for Freeloaders Act of 2025 This bill directs the Department of Housing and Urban Development (HUD),on an annual basis,to<ul> monitor the extent of noncompliance of public-housing tenants with certain community service and economic self-sufficiency requirements,  determine the aggregate amount provided in federal subsidies for all public-housing dwelling units that were occupied by noncompliant tenants,and  publish this amount in the Federal Register. In each fiscal year,the amount as determined and published for the preceding fiscal year must be rescinded from funds made available for HUD's Management and Administration account.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 114",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/114",   
       title:"Responsible Path to Full Obamacare Repeal Act",
       partySupport:"Republican",
       summary:"Responsible Path to Full Obamacare Repeal Act This bill repeals the Patient Protection and Affordable Care Act and the Health Care and Education Reconciliation Act of 2010,effective at the beginning of FY2026. Provisions of law amended by those acts are restored.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 113",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/113",   
       title:"Budget Process Enhancement Act",
       partySupport:"Republican",
       summary:"Budget Process Enhancement Act  This bill modifies the federal budget process to withhold the salaries of Members of Congress and cancel the salaries of certain employees of the Office of Management and Budget when certain budget process requirements are not met. The bill also changes the assumptions that the Congressional Budget Office uses to calculate its baseline for discretionary spending to eliminate certain adjustments for inflation and other factors. (A baseline is a projection of federal spending and receipts during a fiscal year under current law.) ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 112",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/112",   
       title:"FUEL Reform Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 111",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/111",   
       title:"To amend the Internal Revenue Code of 1986 to allow an above-the-line deduction for health insurance premiums.",
       partySupport:"Republican",
       summary:"This bill provides a tax deduction for health insurance premiums paid to provide medical insurance coverage for an individual,the individual’s spouse,and the individual’s dependents. Under the bill,the tax deduction may be claimed as an adjustment to income (also known as an above-the-line tax deduction),which does not require the individual to itemize deductions. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 110",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/110",   
       title:"Small Business Prosperity Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 109",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/109",   
       title:"TEAM Veteran Caregivers Act",
       partySupport:"Republican",
       summary:"<b>Transparency and Effective Accountability Measures for Veteran Caregivers Act or the TEAM Veteran Caregivers Act</b> The bill revises the administration of Department of Veterans Affairs (VA) caregiver programs. Specifically,the bill requires the VA to formally recognize caregivers of veterans by identifying any caregiver in the health record of the veteran. Such caregivers covered by the bill include those participating in the Program of Comprehensive Assistance for Family Caregivers and those participating in the Program of General Caregiver Support Services. The bill requires the VA to notify veterans and their caregivers regarding any clinical determinations made relating to claims,tier reduction,or termination of assistance under,or eligibility for,the specified caregiver programs. The notifications must be standardized and contain specified details regarding the decisions. The bill also requires the VA to temporarily extend benefits under the Program of Comprehensive Assistance for Family Caregivers for at least 90 days after the receipt of notice that a veteran is no longer clinically eligible for the program. Such an extension shall not apply to the termination of caregiver benefits (1) if the VA determines the caregiver committed fraud or abused or neglected the veteran,(2) if another primary provider or individual caregiver is designated within 90 days after the termination,(3) if the terminated individual moves out or abandons their relationship with the veteran,or (4) upon request of the caregiver or veteran. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 108",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/108",   
       title:"Space Research Innovation Act",
       partySupport:"Republican",
       summary:"Space Research Innovation Act This bill directs the National Aeronautics and Space Administration (NASA) to establish a university-affiliated research center to fund analyses and engineering support related to cislunar and deep space missions and interplanetary research. Entities eligible to participate in the center include institutions of higher education,operators of federally funded research and development centers,and nonprofit research institutions.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 107",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/107",   
       title:"Return to Work Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 106",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/106",   
       title:"LIST Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 105",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/105",   
       title:"Increasing Public Access to Recreation Act",
       partySupport:"Republican",
       summary:"Increasing Public Access to Recreation Act This bill increases the amount made available from the Land and Water Conservation Fund for recreational public access projects on federal land.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 104",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/104",   
       title:"Protecting Arizona from Federal Land Grabs Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 103",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/103",   
       title:"Congressional Border Security Assessment Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 102",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/102",   
       title:"American Sovereignty and Species Protection Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 101",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/101",   
       title:"Judicial Administration and Improvement Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 100",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/100",   
       title:"Protect the Gig Economy Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 99",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/99",   
       title:"Protecting Businesses From Frivolous COVID Lawsuits Act of 2025",
       partySupport:"Republican",
       summary:"Protecting Businesses From Frivolous COVID Lawsuits Act of 2025 This bill requires a specific jury instruction in a federal civil action for damages based on negligence arising from the transmission of COVID-19.Specifically,a court must instruct the jury that negligence may not be found solely on the basis of holding oneself open for business.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 98",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/98",   
       title:"End Endless Criminal Statutes Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 97",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/97",   
       title:"Injunctive Authority Clarification Act of 2025",
       partySupport:"Republican",
       summary:"Injunctive Authority Clarification Act of 2025  This bill prohibits federal courts from issuing injunctive orders that bar enforcement of a federal law or policy against a nonparty,unless the nonparty is represented by a party in a class action lawsuit.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 96",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/96",   
       title:"Buzz Off Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 95",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/95",   
       title:"One Bill,One Subject Transparency Act",
       partySupport:"Republican",
       summary:"One Bill,One Subject Transparency Act This bill prohibits any bill or joint resolution from addressing more than one subject and establishes related enforcement mechanisms.The bill requires bills and joint resolutions to address only one subject,which must be clearly and descriptively expressed in the bill or joint resolution's title. Appropriations bills may only contain provisions that are germane to the subject matter of the underlying bill. However,appropriations bills may limit the expenditure of appropriated funds.The bill voids <br/><ul> any act (i.e.,law) or joint resolution with a title that addresses two or more unrelated subjects;  any provision of an act or joint resolution concerning a subject that is not clearly and descriptively expressed in the title;  any provision of an appropriations act that contains general legislation or change of existing law provision not germane to the subject matter of the underlying bill;  any provision of an appropriations act that addresses a subject outside of the jurisdiction of the relevant subcommittee of the Committees on Appropriations of the House and of the Senate. The bill also authorizes any person aggrieved by the enforcement or threat of enforcement of an act enacted after this bill that does not comply with the requirements of this bill to sue the United States.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 94",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/94",   
       title:"To terminate the designation of the Islamic Republic of Pakistan as a major non-NATO ally,and for other purposes.",
       partySupport:"Republican",
       summary:"This bill removes Pakistan's designation as a major non-NATO ally,a status that allows for various benefits such as access to excess U.S. defense supplies and participation in cooperative defense research and development projects.The President may not redesignate Pakistan as a major non-NATO ally without certifying that the country has taken various actions against the Haqqani Network,including continuing to conduct military actions against the Taliban-affiliated group and prosecuting its leaders.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 93",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/93",   
       title:"Stop Imposing Woke Ideology Abroad Act",
       partySupport:"Republican",
       summary:"Stop Imposing Woke Ideology Abroad Act This bill prohibits using federal funds for the Department of State's Special Representative for Racial Equity and Justice. (The special representative's duties include leading the State Department's efforts to combat systemic racism and discrimination around the world.)The bill also prohibits using federal funds to implement the State Department's Equity Action Plan. (The plan outlines actions and metrics related to addressing issues of equity,including racial equity,in the State Department's foreign affairs mission.)",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 92",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/92",   
       title:"Strategic Production Response and Implementation Act",
       partySupport:"Republican",
       summary:"Strategic Production Response and Implementation Act This bill modifies the Energy Policy and Conservation Act to prohibit the Department of Energy (DOE) from drawing down petroleum products in the Strategic Petroleum Reserve until DOE develops and implements a plan to increase the percentage of federal lands leased for oil and gas production. The increase must be equal to the percentage of petroleum in the Strategic Petroleum Reserve that is to be drawn down. However,the bill does not apply to a  drawdown of petroleum products in the case of a severe energy supply interruption,which is permitted under current law. The plan must not provide for a total increase in the percentage of federal lands leased for oil and gas production in excess of 10%.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 91",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/91",   
       title:"Freedom for Farmers Act of 2025",
       partySupport:"Republican",
       summary:"Freedom for Farmers Act of  2025 This bill abolishes the Agency for Toxic Substances and Disease Registry. Currently,this agency,which is part of the Department of Health and Human Services (HHS),investigates and responds to environmental exposures to hazardous substances in communities. The bill requires HHS to transfer authority regarding certain national disease and toxic exposure registries to another appropriate HHS entity.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 90",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/90",   
       title:"Health Coverage Choice Act",
       partySupport:"Republican",
       summary:"Health Coverage Choice Act This bill extends the maximum duration of short-term,limited-duration health insurance plans. The bill increases the maximum authorized initial term of such plans to a period that is less than 12 months (with a total duration of no more than 36 months,including renewals).Current regulations limit the initial term to no more than three months and the maximum coverage duration to no more than four months,including renewals or extensions.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 89",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/89",   
       title:"Prescription Freedom Act of 2025",
       partySupport:"Republican",
       summary:"Prescription Freedom Act of 2025 This bill generally eliminates the authority of the Food and Drug Administration (FDA) to require that a drug be dispensed only with a prescription. However,the FDA may continue to require a prescription for any drug intended for terminating a pregnancy.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 88",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/88",   
       title:"Medical Innovation Acceleration Act of 2025",
       partySupport:"Republican",
       summary:"Medical Innovation Acceleration Act of 2025 This bill exempts noninvasive diagnostic devices from the regulatory authority of the Food and Drug Administration.The bill defines <em>noninvasive diagnostic device</em> as one that does not penetrate the skin or any other membrane of the body,is not inserted or implanted into the body,causes no more than ephemeral compression or temperature changes to in situ bodily tissues,and does not subject bodily tissues to ionizing radiation.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 87",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/87",   
       title:"Protecting Our Children from the CDC Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 86",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/86",   
       title:"NOSHA Act",
       partySupport:"Republican",
       summary:"Nullify Occupational Safety and Health Administration Act or the NOSHA Act This bill abolishes the Occupational Safety and Health Administration (OSHA) and its functions. OSHA,which is part of the Department of Labor,sets and enforces workplace safety and health standards and provides related training,outreach,education,and assistance.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 85",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/85",   
       title:"Small Business Flexibility Act",
       partySupport:"Republican",
       summary:"Small Business Flexibility Act This bill provides statutory authority for the pooling of tips among two pools of employees. The first pool consists of employees who customarily and regularly receive tips (as is permitted under the current statute). The second pool consists of (1) employees who customarily and regularly receive tips and are paid at least minimum wage,and (2) employees who do not customarily and regularly receive tips.  ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 84",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/84",   
       title:"Native American Education Opportunity Act",
       partySupport:"Republican",
       summary:"Native American Education Opportunity Act  This bill addresses education savings account programs and charter schools for tribal students.  Specifically,the bill requires the Department of Education and the Department of the Interior,at the request of federally recognized Indian tribes,to provide funds to tribes for tribal-based education savings account programs. Tribes must use these funds to award grants to education savings accounts for students who (1) attended or will be eligible to attend a school operated by the Bureau of Indian Education (BIE); or (2) will not be attending a school operated by the BIE,receiving an education savings account from another tribe,or attending public elementary or secondary school while participating in the program. Funds may be used for items and activities such as costs of attendance at private schools,private tutoring and online learning programs,textbooks,educational software,or examination fees.  The Government Accountability Office must review the implementation of these education savings account programs,including any factors impacting increased participation in such programs. Additionally,the bill authorizes the BIE to approve and fund charter schools at any school that it operates or funds.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 83",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/83",   
       title:"Ending Common Core and Expanding School Choice Act",
       partySupport:"Republican",
       summary:"<b>Ending Common Core and Expanding School Choice Act</b> This bill revises requirements related to federal education funding for disadvantaged children. Specifically,the bill (1) eliminates the standards,assessments,and academic accountability requirements for state and local educational agencies that receive federal funds for the education of disadvantaged children; (2) requires such funds to be allocated based on the number of children residing in each state who are living in poverty; and (3) allows educational agencies to distribute per-pupil amounts from such funds to parents for qualified elementary and secondary education expenses. The bill prohibits federal officers or employees from mandating academic standards,assessments,curricula,or accountability systems.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 82",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/82",   
       title:"Defund National Endowment for the Humanities Act of 2025",
       partySupport:"Republican",
       summary:"Defund National Endowment for the Humanities Act of 2025 This bill prohibits the use of any funds that are made available to the National Endowment for the Humanities of the National Foundation on the Arts and the Humanities to carry out the functions,programs,or activities of such endowment.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 81",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/81",   
       title:"Travel Mask Mandate Repeal Act of 2025",
       partySupport:"Republican",
       summary:"Travel Mask Mandate Repeal Act of 2025 This bill prohibits federal agencies from imposing a mandate related to COVID-19 that requires the use of face masks on conveyances (e.g.,planes,trains,and buses)  and at transportation hubs.Further,the bill nullifies (1) the emergency order issued by the Centers for Disease Control and Prevention (CDC) on January 29,2021,that mandates such use of face masks on public and commercial conveyances and at transportation hubs, and (2) orders and directives of the Transportation Security Administration (TSA) that relate to the CDC order.As background,the CDC and TSA ceased enforcement of the emergency order following an April 18,2022,court order. Further,the COVID-19 public health emergency expired on May 11,2023.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 80",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/80",   
       title:"Drain the Intelligence Community Swamp Act of 2025",
       partySupport:"Republican",
       summary:"Drain the Intelligence Community Swamp Act of 2025 This bill revokes the security clearances of 51 individuals who signed a statement titled <em>Public Statement on the Hunter Biden Emails</em> and dated October 19,2020. It also (1) specifies that a security clearance may not be granted or renewed for any of them,and (2) requires the Departments of Defense and Justice to investigate these individuals.    ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 79",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/79",   
       title:"Freedom from Mandates Act",
       partySupport:"Republican",
       summary:"Freedom from Mandates Act This bill nullifies certain executive orders regarding COVID-19 safety and prohibits the Departments of Labor and Health and Human Services (HHS) from taking specified actions with respect to vaccination against COVID-19.Specifically,the bill nullifies Executive Order 14042 (relating to ensuring adequate COVID-19 safety protocols for federal contractors) and Executive Order 14043 (requiring COVID-19 vaccination for federal employees).Labor may not issue any rule requiring employers to mandate vaccination of employees against COVID-19 or requiring testing of employees who are unvaccinated.HHS may not (1) require a health care provider,as a condition of participation in the Medicare or Medicaid program,to mandate vaccination of employees against COVID-19 or require testing of employees who are unvaccinated; or (2) otherwise penalize such a provider for failure to mandate such vaccination or require such testing.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 78",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/78",   
       title:"Pregnant Women Health and Safety Act of 2025",
       partySupport:"Republican",
       summary:"Pregnant Women Health and Safety Act of 2025 This bill establishes requirements for physicians who perform abortions and abortion clinics.Specifically,the bill requires a physician who performs an abortion (1) to have admitting privileges at a nearby hospital; and (2) at the time of the abortion,to notify the patient of the hospital location where the patient can receive follow-up care if complications arise.A physician who fails to comply is subject to criminal penalties—a fine,a prison term of up to two years,or both. A woman who undergoes an abortion may not be prosecuted.The bill also requires an abortion clinic,in order to receive federal funds or assistance,to (1) be licensed by the state in which it is located,and (2) be in compliance with federal standards for ambulatory surgical centers.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 76",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/76",   
       title:"Fund and Complete the Border Wall Act",
       partySupport:"Republican",
       summary:"Fund and Complete the Border Wall Act This bill establishes funding for a U.S.-Mexico border barrier and revises how border patrol agents are compensated for overtime.The Department of the Treasury shall set up an account for funding the design,construction,and maintenance of the barrier. The funds in the account are appropriated only for that purpose and for vehicles and equipment for border patrol agents.For each fiscal year,financial assistance to a country shall be reduced by $2,000 for each citizen or national of that country apprehended for illegally entering the United States through its southern border. The reduced amount shall be transferred to the border barrier account. The Department of State may opt not to reduce amounts appropriated to Mexico for various military and law enforcement-related activities.This bill establishes a 5% fee on foreign remittance transfers and increases the fee for the arrival/departure I-94 form for various aliens entering the United States,with part of the fees going to the border barrier account.By December 31,2025,the Department of Homeland Security shall (1) take all actions necessary,including constructing barriers,to prevent illegal crossings along the U.S.-Mexico barrier; and (2) achieve operational control over all U.S. international borders.The bill changes how border patrol agents receive overtime pay when working up to 100 hours in a two-week period. For hours worked above 80,an agent shall receive at least 150% of the agent's regular hourly rate.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 75",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/75",   
       title:"HOUSE Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 74",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/74",   
       title:"Freedom for Families Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 73",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/73",   
       title:"Abortion Is Not Health Care Act of 2025",
       partySupport:"Republican",
       summary:"Abortion Is Not Health Care Act of 2025 This bill excludes amounts paid for an abortion from the itemized tax deduction for qualified medical and dental expenses. Under current law,individuals who itemize their tax deductions may deduct qualified medical and dental expenses to the extent that such expenses exceed 7.5% of the individual’s adjusted gross income for the tax year. Further,under current law,the calculation of the itemized tax deduction for medical and dental expenses may include amounts paid for a legal abortion. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 72",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/72",   
       title:"TBI and PTSD Treatment Act",
       partySupport:"Republican",
       summary:"<b>TBI and PTSD Treatment Act</b> This bill requires the Department of Veterans Affairs to furnish hyperbaric oxygen therapy through a provider authorized by the Veterans Community Care Program to veterans who have a traumatic brain injury or post-traumatic stress disorder.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 71",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/71",   
       title:"Veterans Health Care Freedom Act",
       partySupport:"Republican",
       summary:"Veterans Health Care Freedom Act  This bill requires the Center for Innovation for Care and Payment within the Department of Veterans Affairs (VA) to implement a three-year pilot program to improve the ability of veterans who are enrolled in the VA health care system to access hospital care,medical services,and extended care services through the covered care system by providing such veterans with the ability to choose health care providers. Under the bill,the<em> covered care system</em> includes VA medical facilities,health care providers participating in the Veterans Community Care Program (VCCP),and eligible entities or providers that have entered into a Veterans Care Agreement. A veteran participating in the program may elect to receive care at any provider in the covered care system. The pilot program removes certain requirements (e.g.,location of the veteran) to access care at VA and non-VA facilities. After four years,the bill permanently phases out the requirements for accessing care under the VCCP and Veterans Care Agreements and requires the VA to provide such care under the same conditions of the pilot program. Additionally,after four years,veterans may receive care at a VA medical facility regardless of whether the facility is in the same Veterans Integrated Service Network as the veteran.<br/> ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 70",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/70",   
       title:"No SmartPay for Anti-2A Companies Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 69",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/69",   
       title:"Freedom to Petition the Government Act",
       partySupport:"Republican",
       summary:"Freedom to Petition the Government Act This bill allows outside nonprofit organizations to meet with federal officials in the District of Columbia (DC) on federal property without having to register as businesses in DC. Currently,entities that are formed outside of DC,including nonprofit organizations,must generally register with DC before doing business in DC. Under the bill,outside nonprofit organizations  may meet with federal government officials at federally leased or owned buildings in DC without having to register. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 68",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/68",   
       title:"Housing Fairness Act of 2025",
       partySupport:"Democratic",
       summary:"Veterans,Women,Families with Children,Race,and Persons with Disabilities Housing Fairness Act of 2025 or the Housing Fairness Act of 2025 This bill expands efforts to detect and address housing discrimination.Specifically,the Department of Housing and Urban Development (HUD) must conduct a nationwide testing program to (1) detect and document differences in the treatment of prospective renters,homebuyers,or mortgage borrowers; (2) measure patterns of adverse treatment because of the race,color,religion,sex,familial status,disability status,or national origin of a renter,homebuyer,or borrower; and (3) measure the prevalence of such discriminatory practices across housing and mortgage lending markets.The bill also reauthorizes through FY2028 the Fair Housing Initiatives Program,which supports organizations that provide direct assistance to individuals who have been victims of housing discrimination.Additionally,HUD must implement a grant program to assist public and private nonprofit organizations in (1) conducting comprehensive studies on the causes or effects of housing discrimination and segregation,and (2) implementing pilot projects that test solutions to help prevent or alleviate housing discrimination and segregation.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 67",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/67",   
       title:"Modernizing Retrospective Regulatory Review",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 66",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/66",   
       title:"Federal Employee Student Debt Transparency Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 65",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/65",   
       title:"Armed Forces Endangered Species Exemption Act",
       partySupport:"Republican",
       summary:"Armed Forces Endangered Species Exemption Act This bill establishes exemptions from the Endangered Species Act of 1973 (ESA) for defense-related operations.First,the bill prohibits the U.S. Fish and Wildlife Service (FWS) and the National Marine Fisheries Service (NMFS) from designating military installations or state-owned National Guard installations as critical habitat under the ESA. It also prohibits FWS and NMFS from designating other lands,waters,or geographical areas as critical habitats if the Department of Defense (DOD) determines that the areas are necessary for military training,weapons testing,or other reasons. While DOD must submit such determinations in writing to the FWS,DOD is not required to consult with the FWS under the ESA about such determinations. Next,the bill exempts military personnel engaged in national defense-related operations (actions or duties that DOD deems necessary to support its mission) from ESA prohibitions on (1) taking (e.g.,harming or killing) of endangered species or threatened species; (2) importing or exporting such species; and (3) damaging,destroying,removing,cutting,or digging up such species. Further,the bill exempts any injury to or mortality of a threatened or endangered species that results from,but is not the purpose of,a national defense-related operation.The term<em> military personnel </em>means a member of the Armed Forces as well as a civilian employee or contractor of (1) DOD; or (2) any other federal agency, or any provisional authority,to the extent such employment relates to supporting the mission of DOD overseas.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 64",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/64",   
       title:"Grant’s Law",
       partySupport:"Republican",
       summary:"Grant's Law This bill requires the Department of Justice to detain a non-U.S. national (<em>alien</em> under federal law) found to be unlawfully present in the United States and arrested for various crimes that would render the individual deportable or inadmissible.The Department of Homeland Security (DHS) may release the individual to an appropriate authority for proceedings related to the arrest,but DHS must resume custody for any period that the individual is not in such authority's custody.If the individual is not convicted of crimes for which the individual was arrested,DHS must continue to detain the individual until removal proceedings are completed. DHS must complete such removal proceedings within 90 days.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 63",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/63",   
       title:"ALVIN Act",
       partySupport:"Republican",
       summary:"Accountability for Lawless Violence In our Neighborhoods Act or the ALVIN Act This bill prohibits federal funds from being awarded or otherwise made available to the Manhattan District Attorney’s Office in New York. The bill also (1) rescinds any unobligated funds that were allocated for or otherwise made available to the office,and (2) directs the Department of Justice to require the office to reimburse the federal government for all funds that were expended for the office after January 1,2022.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 62",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/62",   
       title:"WILLIS Act",
       partySupport:"Republican",
       summary:"Withholding Investments from Lawless Litigators In States Act or the WILLIS Act This bill prohibits federal funds from being awarded or otherwise made available to the Fulton County District Attorney’s Office in Georgia. The bill also (1) rescinds any unobligated funds that were allocated for or otherwise made available to the office,and (2) directs the Department of Justice to require the office to reimburse the federal government for all funds that were expended for the office after January 1,2021.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 61",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/61",   
       title:"Ensuring United Families at the Border Act",
       partySupport:"Republican",
       summary:"Ensuring United Families at the Border Act This bill addresses the treatment of children who are non-U.S. nationals (<em>aliens</em> under federal law),including by statutorily establishing that there is no presumption that such a child (other than an unaccompanied child) should not be detained for immigration purposes.Specifically,the bill states that the detention of such minors shall be governed by specified sections of the Immigration and Nationality Act and not any other provision of law,judicial ruling,or settlement agreement.(A 1997 settlement agreement,commonly known as the <em>Flores</em> agreement,imposes requirements relating to the treatment of detained alien minors,including requiring such minors to be released or placed in a nonsecure facility after a certain amount of time in detention.)If an adult enters the United States unlawfully with their child,the Department of Homeland Security must detain the adult and child together if the only criminal charge against the adult is a misdemeanor for unlawful entry.This bill also prohibits states from imposing licensing requirements on immigration detention facilities used to detain minors or families with minors.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 60",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/60",   
       title:"Knife Owners’ Protection Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 59",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/59",   
       title:"Mens Rea Reform Act of 2025",
       partySupport:"Republican",
       summary:"Mens Rea Reform Act of 2025 This bill establishes a default <em>mens rea</em> standard (i.e.,state of mind requirement) for federal criminal offenses—statutory and regulatory—that lack an explicit standard.The government must generally prove that a defendant acted knowingly with respect to each element of an offense for which the text does not specify a state of mind. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 58",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/58",   
       title:"Voter Integrity Protection Act",
       partySupport:"Republican",
       summary:"<b>Voter Integrity Protection Act</b> This bill imposes additional immigration-related penalties for non-U.S. nationals (<i>aliens</i> under federal law) who vote in an election for federal office.  It shall be an aggravated felony for a non-U.S. national who is unlawfully present to violate an existing prohibition against a non-U.S. national voting in a federal election. (An aggravated felony conviction carries various immigration consequences,such as rendering the non-U.S. national inadmissible,deportable,and barred from establishing good moral character for naturalization.) A non-U.S. national who is unlawfully present and who knowingly violates the prohibition against voting in a federal election shall be deportable.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 57",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/57",   
       title:"Ending Catch and Release Act of 2025",
       partySupport:"Republican",
       summary:"Ending Catch and Release Act of 2025 This bill changes the treatment of certain non-U.S. nationals (<em>aliens</em> under federal law) without lawful immigration status,including by prohibiting the release of asylum seekers into the United States while their cases are pending.The Department of Homeland Security (DHS) may not (with some exceptions) release an individual who is not clearly entitled to admission into the United States while the individual's case is pending,even if the individual is an asylum seeker. DHS may instead detain the individual or return the individual to a neighboring country in certain situations.The bill also expands expedited removal from the United States (i.e.,removal without further hearing or review) to include individuals present in the United States without being admitted,with certain exceptions. Under current law,individuals are subject to expedited removal if they lack proper documentation or obtained an immigration benefit through fraud; such individuals are still subject to expedited removal under the bill.The bill also modifies the standard for establishing a credible fear of persecution to avoid expedited removal. Generally,an asylum seeker may avoid expedited removal if an asylum officer finds such a credible fear. Under this bill,an officer may find credible fear if it is more likely than not the individual can establish their eligibility for asylum,whereas under current law,the officer may find credible fear if there is a <em>significant possibility</em> that the individual can establish their eligibility.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 56",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/56",   
       title:"To transfer certain responsibilities of the United States Secret Service to the Federal Bureau of Investigation.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 55",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/55",   
       title:"To repeal the National Voter Registration Act of 1993.",
       partySupport:"Republican",
       summary:"This bill repeals the National Voter Registration Act of 1993. The act established certain voter registration requirements for federal elections,such as the requirement for states to allow individuals to register to vote when they apply for a driver's license. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 54",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/54",   
       title:"WHO Withdrawal Act",
       partySupport:"Republican",
       summary:"WHO Withdrawal Act This bill requires the President to immediately withdraw the United States from the World Health Organization (WHO) and prohibits using any federal funds to provide for U.S. participation in the WHO.The bill also repeals the 1948 act authorizing the United States to join the WHO.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 53",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/53",   
       title:"Responsible Borrower Protection Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 52",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/52",   
       title:"Stop Woke Investing Act",
       partySupport:"Republican",
       summary:"Stop Woke Investing Act This bill requires the Securities and Exchange Commission (SEC) to amend regulations to limit the inclusion of shareholder proposals in proxy statements. A proxy statement is provided to shareholders prior to a public company holding a shareholder meeting and contains information relevant to a shareholder vote. Under current SEC rules,certain qualifying shareholder proposals must be included on a company's proxy statement,including proposals that raise significant social policy issues.Under the bill,a shareholder proposal must have a material effect on the financial performance of the company to be included in a proxy statement. The bill also establishes a cap on the number of shareholder proposals required to be included in a shareholder meeting,depending on the size and type of the company. In addition,a proposal submitted by a member of the board of directors is prohibited from inclusion as a shareholder proposal.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 51",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/51",   
       title:"Washington,D.C. Admission Act",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 50",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/50",   
       title:"KAMALA Act",
       partySupport:"Republican",
       summary:"Keeping Aid for Municipalities And Localities Accountable Act or the KAMALA Act This bill prohibits the use of Community Development Block Grant (CDBG) funding to assist non-U.S. nationals (<em>aliens</em> under federal law) who are not lawfully admitted permanent residents. The CDBG program is administered by the Department of Housing and Urban Development (HUD) and provides states,local governments,and Indian tribes with funds for economic and community development.The bill also specifically prohibits HUD from making a CDBG grant to any state,local government,or Indian tribe that carries out a housing or community development program that assists such individuals. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 49",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/49",   
       title:"No Pro-Abortion Task Force Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 48",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/48",   
       title:"Ultrasound Informed Consent Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 47",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/47",   
       title:"VOICE Restoration Act",
       partySupport:"Republican",
       summary:"<b>Victims Of Immigration Crime Engagement Restoration Act or the VOICE Restoration Act</b> This bill establishes the Victims of Immigration Crime Engagement Office within U.S. Immigration and Customs Enforcement. The office shall provide assistance to victims of crimes committed by non-U.S. nationals (<i>aliens</i> under federal law) who are present in the United States without lawful immigration status. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 46",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/46",   
       title:"Rural Broadband Window of Opportunity Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 45",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/45",   
       title:"FIND Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 44",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/44",   
       title:"Rural 340B Access Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 41",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/41",   
       title:"Unrecognized Southeast Alaska Native Communities Recognition and Compensation Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 40",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/40",   
       title:"Commission to Study and Develop Reparation Proposals for African Americans Act",
       partySupport:"Democratic",
       summary:"<b>Commission to Study and Develop Reparation Proposals for African Americans Act</b> This bill establishes the Commission to Study and Develop Reparation Proposals for African Americans.  The commission must (1) compile documentary evidence of slavery in the United States; (2) study the role of the federal and state governments in supporting the institution of slavery; (3) analyze discriminatory laws and policies against freed African slaves and their descendants; and (4) recommend ways the United States may recognize and remedy the effects of slavery and discrimination on African Americans,including through a formal apology and  compensation (i.e.,reparations).The commission consists of individuals from civil society and reparations organizations and individuals appointed by the President and congressional leadership; Members of Congress and governmental employees may not serve on the commission. The commission may hold hearings,subpoena witnesses and records,and contract with other entities to conduct its work.  The commission must submit its final report within 18 months of its first meeting.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 39",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/39",   
       title:"Original Honoring Our WWII Merchant Mariners Act of 2025",
       partySupport:"Democratic",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 38",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/38",   
       title:"Constitutional Concealed Carry Reciprocity Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 37",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/37",   
       title:"Proposing a Federal debt limit amendment to the Constitution of the United States.",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 36",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/36",   
       title:"MEGOBARI Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 34",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/34",   
       title:"LASSO Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 32",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/32",   
       title:"No Bailout for Sanctuary Cities Act",
       partySupport:"Republican",
       summary:"No Bailout for Sanctuary Cities Act This bill makes a state or political subdivision of a state ineligible for any federal funds that the jurisdiction intends to use to benefit non-U.S. nationals (i.e.,<em>aliens </em>under federal law) who are unlawfully present if the jurisdiction withholds information about citizenship or immigration status or does not cooperate with immigration detainers.Specifically,such funds are denied to any jurisdiction that has a law,policy,or practice that prohibits or restricts any government entity from<ul> maintaining,sending,or receiving information regarding the citizenship or immigration status of any individual;  exchanging information regarding an individual's citizenship or immigration status with a federal,state,or local government entity;   complying with a valid immigration detainer from the Department of Homeland Security (DHS); or   notifying DHS about an individual's release from custody. The funding restriction does not apply to a law,policy,or practice that only applies to an individual who comes forward as a victim of or a witness to a criminal offense.DHS must annually provide to specified congressional committees a list of jurisdictions that have failed to comply with a DHS detainer or have failed to notify DHS of an individual’s release.The funding restriction begins 60 days after the bill's enactment or on the first day of the fiscal year following the bill's enactment,whichever is earlier.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 31",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/31",   
       title:"POLICE Act of 2025",
       partySupport:"Republican",
       summary:"Protect Our Law enforcement with Immigration Control and Enforcement Act of 2025 or the POLICE Act of 2025 This bill makes assaulting a law enforcement officer,firefighter,or other first responder a deportable offense.Specifically,the bill makes deportable any non-U.S. national (<em>alien</em> under federal law) who has been convicted of (or admits to have committed) any act that constitutes the essential elements of any offense involving assault of a law enforcement officer,firefighter,or other first responder.The Department of Homeland Security must publish annually on its website a report on the number of individuals deported in the previous year pursuant to this bill.",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 25",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/25",   
       title:"FairTax Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 24",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/24",   
       title:"Federal Reserve Transparency Act of 2025",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.R. 22",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/22",   
       title:"SAVE Act",
       partySupport:"Republican",
       summary:"",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
   {
       bill_id:"H.J.Res. 9",
       govtrack_url:"https://www.congress.gov/bill/119th-congress/house-joint-resolution/9",   
       title:"Proposing an amendment to the Constitution of the United States prohibiting the United States Government from increasing its debt except for a specific purpose by law adopted by three-fourths of the membership of each House of Congress.",
       partySupport:"Republican",
       summary:"This joint resolution proposes a constitutional amendment that prohibits the U.S. government from increasing its debt except for a specific purpose by a law adopted by three-fourths of the membership of each chamber of Congress. ",
       currentStep:"Introduced",
       tags: ['Introduced'] 
  },
  {
   bill_id:"H.R. 975",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/975",   
   title:"Credit Union Board Modernization Act",
   partySupport:"Democratic",
   summary:"Credit Union Board Modernization Act  This bill reduces the required frequency of meetings held by the board of directors of certain credit unions. Under the bill,new credit unions and credit unions with a low soundness rating must meet monthly,as required under current law. All other credit unions must hold at least six meetings annually,with at least one meeting held during each fiscal quarter.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 965",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/965",   
   title:"Housing Unhoused Disabled Veterans Act",
   partySupport:"Democratic",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.Res. 93",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-resolution/93",   
   title:"Providing for consideration of the bill (H.R. 27) to amend the Controlled Substances Act with respect to the scheduling of fentanyl-related substances,and for other purposes.",
   partySupport:"Republican",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 837",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/837",   
   title:"To require the Secretary of Agriculture to convey the Pleasant Valley Ranger District Administrative Site to Gila County,Arizona.",
   partySupport:"Republican",
   summary:"This bill directs the Forest Service to convey specified property to Gila County,Arizona,upon the county's submission of a written request for such conveyance. The property,identified as the Gila County Area,consists of approximately 232.9 acres of National Forest System land located in the Tonto National Forest in Arizona.The county must use the land for the purposes of serving and supporting veterans. If any land conveyed under this bill ceases to be used for such purpose,all right,title,and interest in and to the land shall revert to the United States,at the discretion of the Forest Service.The conveyance must be made with a quitclaim deed and without consideration (value,such as payment,provided in exchange for the property).The Forest Service must not be required to provide any covenant or warranty for the land and improvements conveyed to the county under such conveyance.As a condition of the conveyance,the county must pay all the costs associated with the conveyance,including any (1) surveys,(2) environmental analysis or resource survey required under federal law,and (3) analysis required to comply with certain provisions of the National Historic Preservation Act.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 836",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/836",   
   title:"Emergency Wildfire Fighting Technology Act of 2025",
   partySupport:"Republican",
   summary:"Emergency Wildfire Fighting Technology Act of 2025 This bill requires the Forest Service and the Department of the Interior to (1) jointly evaluate the container aerial firefighting system to assess its use to mitigate and suppress wildfires, and (2) report on the results of the evaluation to Congress.The system allows for the use of airdrop-capable disposable containers of water or fire retardant in order to increase the number of airlift assets available for wildfire emergencies.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 835",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/835",   
   title:"9/11 Memorial and Museum Act",
   partySupport:"Republican",
   summary:"9/11 Memorial and Museum Act This bill directs the Department of Homeland Security to award to the nonprofit organization that operates the National September 11 Memorial &amp; Museum in New York,New York, a one-time grant to be used solely for the purposes of the operation,security,and maintenance of the memorial and museum.As a condition of receiving the grant,the organization must<ul> provide for free admission to all facilities and museums associated with the memorial and museum for active and retired members of the Armed Forces,individuals who were registered first responders to the terrorist attacks of September 11,2001,and family members of victims of such attacks;  provide for dedicated free admission hours for the general public at least once a week; and  allow for annual federal audits of its financial statements. ",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 776",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/776",   
   title:"Nutria Eradication and Control Reauthorization Act of 2025",
   partySupport:"Democratic",
   summary:"Nutria Eradication and Control Reauthorization Act of 2025 This bill reauthorizes through FY2030 the Nutria Eradication and Control Act of 2003,which allows the Department of the Interior to provide financial assistance to states for (1) eradicating or controlling nutria,and (2) restoring marshland damaged by nutria. Nutria are invasive,semi-aquatic rodents.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 736",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/736",   
   title:"Protect Small Businesses from Excessive Paperwork Act of 2025",
   partySupport:"Republican",
   summary:"Protect Small Businesses from Excessive Paperwork Act of 2025 This bill extends the deadline for certain companies that are required to file beneficial ownership information with the Financial Crimes Enforcement Network (FinCEN). Specifically,the bill requires companies formed or registered before January 1,2024,to submit this information to FinCEN by January 1,2026,instead of by January 1,2025, as required under current regulations.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 692",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/692",   
   title:"China Exchange Rate Transparency Act of 2025",
   partySupport:"Republican",
   summary:"China Exchange Rate Transparency Act of 2023 This bill requires the U.S. Executive Director at the International Monetary Fund (IMF) to use the voice and vote of the United States to advocate for increased exchange rate transparency from China.Some areas of focus for this advocacy are (1) Chinese exchange rate arrangements,including any indirect foreign exchange market intervention through Chinese financial institutions or state-owned enterprises; (2) enhanced multilateral and bilateral surveillance by the IMF; and (3) stronger consideration of China's performance as a responsible stakeholder in the international monetary system when evaluating quota and voting shares at the IMF.The requirements of the bill expire seven years and 30 days after the date of the bill's enactment or earlier if China meets certain conditions regarding its exchange rate policies.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.Res. 53",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-resolution/53",   
   title:"Providing for consideration of the bill (H.R. 471) to expedite under the National Environmental Policy Act of 1969 and improve forest management activities on National Forest System lands,on public lands under the jurisdiction of the Bureau of Land Management,and on Tribal lands to return resilience to overgrown,fire-prone forested lands,and for other purposes,and providing for consideration of the bill (S. 5) to require the Secretary of Homeland Security to take into custody aliens who have been charged in the United States with theft,and for other purposes.",
   partySupport:"Republican",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 471",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/471",   
   title:"Fix Our Forests Act",
   partySupport:"Republican",
   summary:"Fix Our Forests Act This bill establishes requirements for managing forests on federal land,including requirements concerning reducing wildfire threats,expediting the review of certain forest management projects,and implementing forest management projects and other activities.Specifically,the bill (1) designates certain firesheds at high risk for wildfires as fireshed management areas; (2) directs the U.S. Forest Service and U.S. Geological Survey to jointly establish an interagency Fireshed Center that is responsible for duties related to assessing and predicting fire,including maintaining a fireshed registry on a publicly accessible website that provides interactive geospatial data on individual firesheds; and (3) makes other requirements related to reducing wildfire.Next,the bill expedites the review of certain forest management projects under the National Environmental Policy Act (NEPA) of 1969 and exempts certain activities from NEPA review. It also establishes intra-agency strike teams to accelerate the review and any interagency consultation processes under NEPA,the Endangered Species Act of 1973,and the National Historic Preservation Act. It also limits consultation requirements concerning threatened and endangered species under the Forest and Rangeland Renewable Resources Planning Act of 1974 and the Federal Land Management and Policy Act of 1976. Finally,it limits litigation involving fireshed management projects and limits remedies that courts may provide.Additionally,the bill supports reducing community wildfire risks,carrying out forest restoration and stewardship activities (including watershed protection and restoration),conducting biochar demonstration projects,advancing technologies to address forest wildfires,and assisting wildland firefighters and their families.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"S. 146",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/146",   
   title:"TAKE IT DOWN Act",
   partySupport:"Republican",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 386",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/386",   
   title:"Chinese Currency Accountability Act of 2025",
   partySupport:"Republican",
   summary:"Chinese Currency Accountability Act of 2025 This bill requires the United States to oppose,absent specified conditions,any increase in the weight of Chinese currency (i.e.,the renminbi) in the basket of currencies (currently,a set of five currencies,each with different weightings) used to determine the value of Special Drawing Rights. Special Drawing Rights are international reserve assets created by the International Monetary Fund (IMF) to supplement member countries' official foreign exchange reserves.Specifically,the Department of the Treasury must instruct certain U.S. officials at the IMF to oppose any such increase unless Treasury has certified that China is in compliance with certain standards and international agreements,including that (1) China is in compliance with all general obligations of members of the IMF,(2) China has not been found to have manipulated its currency in the preceding 12 months,and (3) China adheres to the rules and principles of the Paris Club and the Organisation for Economic Co-operation and Development (OECD) Arrangement on Officially Supported Export Credits. ",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 375",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/375",   
   title:"Continued Rapid Ohia Death Response Act of 2025",
   partySupport:"Democratic",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"S. 32",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/32",   
   title:"LACA",
   partySupport:"Republican",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 226",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/226",   
   title:"Eastern Band of Cherokee Historic Lands Reacquisition Act",
   partySupport:"Republican",
   summary:"<b>Eastern Band of Cherokee Historic Lands Reacquisition Act</b> This bill takes specified lands and easements in Monroe County,Tennessee,into trust for the use and benefit of the Eastern Band of Cherokee Indians. These lands include the Sequoyah Museum,the Chota Memorial,the Tanasi Memorial,and land to provide support for these properties and cultural programs. The Tennessee Valley Authority (TVA) maintains its right to carry out river control and development on these lands,including temporarily and intermittently flooding certain lands. The bill specifies the structures that may be constructed with the TVA's written consent on certain lands subject to flooding. Additionally,the TVA must be compensated for lost hydropower capacity from future development of these lands. Further,the bill specifies that the United States is not liable for loss or damage resulting from certain activities,such as the permanent flooding of adjacent lands. In addition,the bill outlines the TVA's continuing responsibilities,including those related to environmental remediation. Finally,the bill prohibits gaming on these lands.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 224",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/224",   
   title:"Disabled Veterans Housing Support Act",
   partySupport:"Republican",
   summary:"Disabled Veterans Housing Support Act This bill excludes compensation received for a military service-connected disability from a veteran's income when determining eligibility for assistance under the Community Development Block Grant (CDBG) program.The CDBG program provides grants to urban communities for development activities focused on revitalizing neighborhoods,economic development,and providing improved community facilities and services.Additionally,the Government Accountability Office must report on how service-connected disability compensation is treated when determining eligibility for all programs administered by the Department of Housing and Urban Development. This includes identifying instances where the treatment of such compensation is inconsistent with the requirement under this bill.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},

{
   bill_id:"H.R. 207",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/207",   
   title:"SHARKED Act of 2025",
   partySupport:"Republican",
   summary:"Supporting the Health of Aquatic systems through Research Knowledge and Enhanced Dialogue Act of 2025 or the SHARKED Act of 2025 This bill requires the Department of Commerce to establish a task force to address and report to Congress about critical needs with respect to shark depredation. (Shark depredation is the partial or complete removal of a hooked fish by a shark directly from a fishing line before the line is retrieved.) The duties of the task force are,among other responsibilities,to (1) develop ways to improve coordination and communication across the fisheries management and shark research communities; (2) identify research priorities and funding opportunities; (3) develop recommended management strategies to address shark depredation; and (4) coordinate the development and distribution of educational materials.The bill specifies that the task force must include representatives of each Regional Fishery Management Council,each Marine Fisheries Commission,the fish and wildlife agencies of coastal states,and the National Marine Fisheries Service. The task force must also include researchers and others with relevant expertise.The task force must report its findings to Congress within two years after the bill's enactment and every two years thereafter until the task force is terminated. The task force sunsets within seven years after the date of its establishment.  ",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 204",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/204",   
   title:"ACRES Act",
   partySupport:"Republican",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 197",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/197",   
   title:"Lake Winnibigoshish Land Exchange Act of 2025",
   partySupport:"Republican",
   summary:"Lake Winnibigoshish Land Exchange Act of 2025 This bill directs the Forest Service to exchange specified land along the shoreline of Lake Winnibigoshish (commonly known as Lake Winnie) in the Chippewa National Forest in Minnesota for specified land owned by Big Winnie Land and Timber,LLC (BWLT),if BWLT offers to make the exchange. The land acquired by the Forest Service must be added to and managed as part of Chippewa National Forest. The bill outlines requirements and conditions for the exchange. For example,the Forest Service must reserve an easement for road access to certain land in the forest. The bill also conditions the exchange on the satisfactory completion of a Phase I Environmental Site Assessment by BWLT before the nonfederal land is accepted in the exchange.In addition,the exchange must be for equal value or the values must be equalized by a cash payment,subject to an exception.Finally,the bill directs BWLT to pay all closing costs associated with the exchange.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 192",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/192",   
   title:"Amtrak Executive Bonus Disclosure Act",
   partySupport:"Republican",
   summary:"Amtrak Executive Bonus Disclosure Act This bill requires Amtrak to publicly disclose the annual base pay and bonus compensation paid to an Amtrak executive in a required annual report to Congress.Specifically, Amtrak must incorporate into the annual report the annual base pay and any bonus compensation paid to a member of the executive leadership team. This must include the criteria and metrics used to determine any bonus compensation.Further,Amtrak must make the annual report available on Amtrak's public website.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 189",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/189",   
   title:"Securities and Exchange Commission Real Estate Leasing Authority Revocation Act",
   partySupport:"Democratic",
   summary:"Securities and Exchange Commission Real Estate Leasing Authority Revocation Act  This bill revokes the authority of the Securities and Exchange Commission (SEC) to lease general purpose office space and instead provides for the General Services Administration to lease such space for the SEC. The bill's provisions do not affect those leases entered into by the SEC before this bill's enactment.The Government Accountability Office must (1) complete a review under which it shall update a 2016 report with respect to independent leasing authorities,and (2) report to Congress on the review.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 187",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/187",   
   title:"MAPWaters Act of 2025",
   partySupport:"Republican",
   summary:"Modernizing Access to our Public Waters Act or the MAPWaters Act of 2025 or the MAPWaters Act of 2025 This bill directs the Forest Service and the Department of the Interior to standardize and publish data relating to public's access to federal waterways for recreational use.Specifically,the Forest Service and Interior must jointly develop and adopt interagency standards for data collection and dissemination of geospatial data relating to public outdoor recreational  access of federal waterways and federal fishing restrictions. The standards must ensure compatibility and interoperability among applicable federal databases with respect to collection and dissemination of such data.Within five years,the Forest Service and Interior must also digitize and make publicly available online certain geographic information system data about (1) federal waterway restrictions,(2) federal waterway access and navigation information,and (3) federal fishing restrictions. They must also update the data about waterway restrictions,waterway access,and navigation information at least twice per year. Data about fishing restrictions must be updated in real time as changes go into effect. Finally,the Forest Service and Interior must develop a process to allow members of the public to submit questions or comments regarding the data regarding waterway restrictions, waterway access,and navigation information.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 186",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/186",   
   title:"Hershel Woody Williams National Medal of Honor Monument Location Act",
   partySupport:"Republican",
   summary:"Hershel \"Woody\" Williams National Medal of Honor Monument Location Act This bill requires the authorized monument honoring Medal of Honor recipients to be located within the Reserve (the great cross-axis of the National Mall,which generally extends from the Capitol to the Lincoln Memorial and from the White House to the Jefferson Memorial).",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 165",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/165",   
   title:"Wounded Knee Massacre Memorial and Sacred Site Act",
   partySupport:"Republican",
   summary:"<b>Wounded Knee Massacre Memorial and Sacred Site Act</b> This bill directs the Department of the Interior to complete all actions necessary to place approximately 40 acres of land in Oglala Lakota County,South Dakota,into restricted fee status for the Oglala Sioux Tribe and the Cheyenne River Sioux Tribe. <i>Restricted fee status</i> refers to land that is owned by a tribe or tribal member but is subject to restrictions by the United States against alienation (i.e.,sale or transfer) or encumbrance (e.g.,liens,leases,or rights-of-way) by operation of law. The bill requires the land to be held and maintained as a memorial and sacred site,as outlined by the document titled<i> Covenant Between the Oglala Sioux Tribe and the Cheyenne River Sioux Tribe</i> and dated October 21,2022. Further,it prohibits commercial development and gaming activity on the land.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 164",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/164",   
   title:"POWER Act of 2025",
   partySupport:"Democratic",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 153",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/153",   
   title:"Post-Disaster Assistance Online Accountability Act",
   partySupport:"Republican",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 152",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/152",   
   title:"Federal Disaster Assistance Coordination Act",
   partySupport:"Republican",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 144",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/144",   
   title:"Tennessee Valley Authority Salary Transparency Act",
   partySupport:"Democratic",
   summary:"Tennessee Valley Authority Salary Transparency Act This bill expands reporting requirements for the Tennessee Valley Authority (TVA). TVA is a government corporation that provides electricity in Tennessee and in portions of several surrounding states. It also provides flood control,navigation,and land management services for the Tennessee River system.The bill reinstates the requirement for TVA to file an annual financial statement and report with Congress in March. (The requirement was terminated by the Federal Reports Elimination and Sunset Act of 1995.)The bill also modifies the requirement that the report include the names,salaries,and duties of employees earning more than $1,500 a year. Under the bill,this information is only required for employees earning more than the maximum rate of basic pay for grade GS-13 of the General Schedule.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 77",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/77",   
   title:"Midnight Rules Relief Act",
   partySupport:"Republican",
   summary:"Midnight Rules Relief Act This bill allows Congress to disapprove multiple regulations under one joint resolution of disapproval if the regulations were submitted for review during a portion  of the final year of a President's term. Under current law,the Congressional Review Act generally provides for a period of additional review during the succeeding Congress for regulations that were submitted during the last 60 legislative days of the prior Congress. However,each joint resolution may disapprove of only one regulation.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 43",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/43",   
   title:"Alaska Native Village Municipal Lands Restoration Act of 2025",
   partySupport:"Republican",
   summary:"Alaska Native Village Municipal Lands Restoration Act of 2025 This bill removes the requirement that Alaska Native village corporations must convey lands to Alaska to be held in trust for future municipal governments. The Alaska Native Claims Settlement Act (ANCSA) requires all Alaska Native village corporations that receive land under the ANCSA to convey certain lands to the existing municipality in the village or,if no municipality exists,to Alaska in trust for any municipality that may be established in the future. This bill removes the requirement for conveyance. Additionally,the bill allows village corporations to regain title to the lands held in trust by dissolving the trust through formal resolution by the village corporation and the residents of the Native village.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 42",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/42",   
   title:"Alaska Native Settlement Trust Eligibility Act",
   partySupport:"Republican",
   summary:"Alaska Native Settlement Trust Eligibility Act This bill excludes certain settlement trust payments to an Alaska Native or descendant of an Alaska Native who is aged,blind,or disabled for purposes of determining the individual's eligibility for certain need-based federal programs (e.g.,the Supplemental Nutrition Assistance Program).",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 35",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/35",   
   title:"Agent Raul Gonzalez Officer Safety Act",
   partySupport:"Republican",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 33",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/33",   
   title:"To amend the Internal Revenue Code of 1986 to provide special rules for the taxation of certain residents of Taiwan with income from sources within the United States.",
   partySupport:"Republican",
   summary:"",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 30",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/30",   
   title:"Preventing Violence Against Women by Illegal Aliens Act",
   partySupport:"Republican",
   summary:"Preventing Violence Against Women by Illegal Aliens Act This bill establishes certain criminal grounds for making non-U.S. nationals (<em>aliens </em>under federal law) inadmissible and expands the crimes for which a non-U.S. national is deportable.First,the bill establishes that a non-U.S. national is inadmissible if the individual has admitted to or is convicted of acts constituting the essential elements of stalking,child abuse,child neglect,child abandonment,a sex offense,conspiracy to commit a sex offense,a violation of certain protection orders,or domestic violence (including physical or sexual abuse or a pattern of coercive behavior when it occurs within certain close relationships).  Next,the bill establishes additional grounds for deportation. Under current law,a non-U.S. national is deportable for certain criminal convictions,including domestic violence,stalking,and child abuse. The bill makes any sex offense (including crimes against minors) or conspiracy to commit a sex offense a basis for deportation. The bill also expands the domestic violence crimes that make a non-U.S. national deportable to include physical or sexual abuse or a pattern of coercive behavior when it occurs within certain close relationships.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 29",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/senate-bill/5?q=%7B%22search%22%3A%22laken%22%7D&s=1&r=4",   
   title:"Laken Riley Act",
   partySupport:"Republican",
   summary:"Laken Riley Act This bill requires the Department of Homeland Security (DHS) to detain certain non-U.S. nationals (<em>aliens</em> under federal law) who have been arrested for burglary,theft,larceny,or shoplifting. The bill also authorizes states to sue the federal government for decisions or alleged failures related to immigration enforcement.Under this bill,DHS must detain an individual who (1) is unlawfully present in the United States or did not possess the necessary documents when applying for admission; and (2) has been charged with,arrested for,convicted of,or admits to having committed acts that constitute the essential elements of burglary,theft,larceny,or shoplifting.The bill also authorizes state governments to sue for injunctive relief over certain immigration-related decisions or alleged failures by the federal government if the decision or failure caused the state or its residents harm,including financial harm of more than $100. Specifically,the state government may sue the federal government over a<ul> decision to release a non-U.S. national from custody;  failure to fulfill requirements relating to inspecting individuals seeking admission into the United States,including requirements related to asylum interviews;  failure to fulfill a requirement to stop issuing visas to nationals of a country that unreasonably denies or delays acceptance of nationals of that country;  violation of limitations on immigration parole,such as the requirement that parole be granted only on a case-by-case basis; or  failure to detain an individual who has been ordered removed from the United States. ",
   currentStep:"Signed into Law",
   tags: ['Signed into Law'] 
},
{
   bill_id:"H.R. 28",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/28",   
   title:"Protection of Women and Girls in Sports Act of 2025",
   partySupport:"Republican",
   summary:"Protection of Women and Girls in Sports Act of 2025 This bill generally prohibits school athletic programs from allowing individuals whose biological sex at birth was male to participate in programs that are for women or girls.Specifically,the bill provides that it is a violation of Title IX of the Education Amendments of 1972 for federally funded education programs or activities to operate,sponsor,or facilitate athletic programs or activities that allow individuals of the male sex to participate in programs or activities that are designated for women or girls. (Title IX prohibits discrimination on the basis of sex in federally funded education programs or activities,including in public elementary and secondary schools and in colleges and universities.) Under the bill,<em> sex</em> is based on an individual's reproductive biology and genetics at birth.The bill does not prohibit male individuals from training or practicing with programs or activities for women or girls as long as such training or practice does not deprive any female of corresponding opportunities or benefits.The Government Accountability Office must report on the benefits for women or girls in single-sex sports that would be lost as a result of male participation. In particular,the report must document the negative psychological,developmental,participatory,and sociological effects of male participation on girls.",
   currentStep:"Passed One House",
   tags: ['Passed One House', 'Transgender', 'LGBTQ','Pinned'] 
},
{
   bill_id:"H.R. 27",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/27",   
   title:"HALT Fentanyl Act",
   partySupport:"Republican",
   summary:"Halt All Lethal Trafficking of Fentanyl Act or the HALT Fentanyl Act This bill permanently places fentanyl-related substances as a class into schedule I of the Controlled Substances Act. A schedule I controlled substance is a drug,substance,or chemical that has a high potential for abuse; has no currently accepted medical value; and is subject to regulatory controls and administrative,civil,and criminal penalties under the Controlled Substances Act.Under the bill,offenses involving fentanyl-related substances are triggered by the same quantity thresholds and subject to the same penalties as offenses involving fentanyl analogues (e.g.,offenses involving 100 grams or more trigger a 10-year mandatory minimum prison term).Additionally,the bill establishes a new,alternative registration process for certain schedule I research.The bill also makes several other changes to registration requirements for conducting research with controlled substances,including<ul> permitting a single registration for related research sites in certain circumstances,  waiving the requirement for a new inspection in certain situations,and  allowing a registered researcher to perform certain manufacturing activities with small quantities of a substance without obtaining a manufacturing registration. Finally,the bill expresses the sense that Congress agrees with the interpretation of Controlled Substances Act in <em>United States v. McCray</em>,a 2018 case decided by the U.S. District Court for the Western District of New York. In that case,the court held that butyryl fentanyl,a controlled substance,can be considered an analogue of fentanyl even though,under the Controlled Substances Act,the term <em>controlled substance analogue</em> specifically excludes a controlled substance.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 26",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/26",   
   title:"Protecting American Energy Production Act",
   partySupport:"Republican",
   summary:"Protecting American Energy Production Act This bill prohibits the President from declaring a moratorium on the use of hydraulic fracturing unless Congress authorizes the moratorium. The bill also expresses the sense of Congress that states should maintain primacy (authority) for the regulation of hydraulic fracturing for oil and natural gas production on state and private lands.Hydraulic fracturing,or fracking,is a process to extract underground resources such as oil or gas from a geologic formation by injecting water,a propping agent (e.g.,sand),and chemical additives into a well under enough pressure to fracture the formation.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 23",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/23",   
   title:"Illegitimate Court Counteraction Act",
   partySupport:"Republican",
   summary:"Illegitimate Court Counteraction Act This bill imposes sanctions against foreign persons (individuals and entities) who assist the International Criminal Court (ICC) in investigating,arresting,detaining,or prosecuting certain individuals.The bill categorizes as protected persons (1) any U.S. individual,U.S. entity,or person in the United States,unless the United States is a state party to the Rome Statute of the ICC and provides formal consent to ICC jurisdiction; and (2) any foreign person that is a citizen or lawful resident of a U.S. ally that is not a state party to the Rome Statute or has not consented to ICC jurisdiction.If the ICC attempts to investigate,arrest,detain or prosecute a protected person,the President must impose visa- and property-blocking sanctions against the foreign persons that engaged in or materially assisted in such actions,as well as against foreign persons owned by,controlled by,or acting on behalf of such foreign persons. The President must also apply visa-blocking sanctions to the immediate family members of those sanctioned.Upon enactment,the bill rescinds all funds appropriated for the ICC and prohibits the subsequent use of appropriated funds for the ICC.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.R. 21",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-bill/21",   
   title:"Born-Alive Abortion Survivors Protection Act",
   partySupport:"Republican",
   summary:"<b>Born-Alive Abortion Survivors Protection Act</b>  This bill establishes requirements for the degree of care a health care practitioner must provide in the case of a child born alive following an abortion or attempted abortion.  Specifically,a health care practitioner who is present must (1) exercise the same degree of care as would reasonably be provided to any other child born alive at the same gestational age,and (2) ensure the child is immediately admitted to a hospital. Additionally,a health care practitioner or other employee who has knowledge of a failure to comply with the degree-of-care requirements must immediately report such failure to law enforcement. A health care practitioner who fails to provide the required degree of care,or a health care practitioner or other employee who fails to report such failure,is subject to criminal penalties—a fine,up to five years in prison,or both.   An individual who intentionally kills or attempts to kill a child born alive is subject to prosecution for murder. The bill bars the criminal prosecution of a mother of a child born alive under this bill and allows her to bring a civil action against a health care practitioner or other employee for violations. ",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
},
{
   bill_id:"H.Res. 5",
   govtrack_url:"https://www.congress.gov/bill/119th-congress/house-resolution/5",   
   title:"Adopting the Rules of the House of Representatives for the One Hundred Nineteenth Congress,and for other purposes.",
   partySupport:"Republican",
   summary:"This resolution establishes rules for the House of Representatives for the 119th Congress.The resolution adopts the rules from the 118th Congress with specified changes,including<ul> providing that a resolution vacating the Office of Speaker is only privileged (takes precedence over all matters other than motions to adjourn) if it is offered by a sponsor of the majority party joined by eight cosponsors from the majority party;   providing that the Speaker may only entertain a motion to suspend the rules on Mondays,Tuesdays,and Wednesdays;   prohibiting waiver (by rule or by order) of the germaneness rule (which requires amendments to be of the same subject matter as the measure under consideration); and   prohibiting consideration of measures that exceed a specified long-term budget impact according to the Congressional Budget Office. Additional changes include<ul> authorizing the use of electronic voting within a committee;  authorizing remote appearances by non-executive branch witnesses and their counsel in committee proceedings;   eliminating the House Office of Diversity and Inclusion;   eliminating certain collective bargaining rights for employees of the House of Representatives;   reauthorizing the House Select Committee on the Strategic Competition Between the United States and the Chinese Communist Party;   reauthorizing the Tom Lantos Human Rights Commission; and   reauthorizing the House Democracy Assistance Commission (an entity that advises democratic parliaments in other countries) and renaming it the House Democracy Partnership.  The resolution provides for the consideration of H.R. 21,H.R. 22,H.R. 23,H.R. 26,H.R. 27,H.R. 28,H.R. 29,H.R. 30,H.R. 31,H.R. 32,H.R. 33,and H.R. 35.",
   currentStep:"Passed One House",
   tags: ['Passed One House'] 
}
]
 ;

export const getBills = () => {
  return bills;
};

export const setBills = (newBills) => {
  bills = newBills;
};

export const getSteps = () => {
  return steps;
};
