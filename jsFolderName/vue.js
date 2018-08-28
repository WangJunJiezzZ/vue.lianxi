var data = {
	"topTen":{
	    "caseCount": 24578,
	    "pathCount": 1872,
	    "averageDuration": 751641.3,
	    "list": [
	        {
	            "rank": 1,
	            "count": 2638,
	            "percentage": 0.1073,
	            "averageDuration": 730402.5,
	            "connections": [
	                {
	                    "sourceLabel": "Start Process",
	                    "targetLabel": "Created - Workflow Start"
	                },
	                {
	                    "sourceLabel": "Created - Workflow Start",
	                    "targetLabel": "Created - Apply Business Rules"
	                },
	                {
	                    "sourceLabel": "Created - Apply Business Rules",
	                    "targetLabel": "Indexed - Business Rules Check in BG"
	                },
	                {
	                    "sourceLabel": "Indexed - Business Rules Check in BG",
	                    "targetLabel": "Blocked - BG Doc. Created"
	                },
	                {
	                    "sourceLabel": "Blocked - BG Doc. Created",
	                    "targetLabel": "Posted - SAP Document Check"
	                },
	                {
	                    "sourceLabel": "Posted - SAP Document Check",
	                    "targetLabel": "End Process"
	                }
	            ]
	        },
	        {
	            "rank": 2,
	            "count": 2095,
	            "percentage": 0.0852,
	            "averageDuration": 353078.96,
	            "connections": [
	                {
	                    "sourceLabel": "Start Process",
	                    "targetLabel": "Indexed - Workflow Start"
	                },
	                {
	                    "sourceLabel": "Indexed - Workflow Start",
	                    "targetLabel": "Indexed - Apply Business Rules"
	                },
	                {
	                    "sourceLabel": "Indexed - Apply Business Rules",
	                    "targetLabel": "Indexed - Business Rules Check in BG"
	                },
	                {
	                    "sourceLabel": "Indexed - Business Rules Check in BG",
	                    "targetLabel": "Blocked - BG Doc. Created"
	                },
	                {
	                    "sourceLabel": "Blocked - BG Doc. Created",
	                    "targetLabel": "Posted - SAP Document Check"
	                },
	                {
	                    "sourceLabel": "Posted - SAP Document Check",
	                    "targetLabel": "End Process"
	                }
	            ]
	        },
	        {
	            "rank": 3,
	            "count": 1291,
	            "percentage": 0.0525,
	            "averageDuration": 724854.42,
	            "connections": [
	                {
	                    "sourceLabel": "Start Process",
	                    "targetLabel": "Indexed - Workflow Start"
	                },
	                {
	                    "sourceLabel": "Indexed - Workflow Start",
	                    "targetLabel": "Indexed - Apply Business Rules"
	                },
	                {
	                    "sourceLabel": "Indexed - Apply Business Rules",
	                    "targetLabel": "Indexed - Business Rules Check in BG"
	                },
	                {
	                    "sourceLabel": "Indexed - Business Rules Check in BG",
	                    "targetLabel": "Blocked - BG Doc. Created"
	                },
	                {
	                    "sourceLabel": "Blocked - BG Doc. Created",
	                    "targetLabel": "Approval Complete - Start Approval Workflow"
	                },
	                {
	                    "sourceLabel": "Approval Complete - Start Approval Workflow",
	                    "targetLabel": "Posted - SAP Document Check"
	                },
	                {
	                    "sourceLabel": "Posted - SAP Document Check",
	                    "targetLabel": "End Process"
	                }
	            ]
	        },
	        {
	            "rank": 4,
	            "count": 1265,
	            "percentage": 0.0515,
	            "averageDuration": 305256.35,
	            "connections": [
	                {
	                    "sourceLabel": "Start Process",
	                    "targetLabel": "Indexed - Workflow Start"
	                },
	                {
	                    "sourceLabel": "Indexed - Workflow Start",
	                    "targetLabel": "Indexed - Bypassed Rule -Special Handling Instruct"
	                },
	                {
	                    "sourceLabel": "Indexed - Bypassed Rule -Special Handling Instruct",
	                    "targetLabel": "Indexed - Apply Business Rules"
	                },
	                {
	                    "sourceLabel": "Indexed - Apply Business Rules",
	                    "targetLabel": "Indexed - Business Rules Check in BG"
	                },
	                {
	                    "sourceLabel": "Indexed - Business Rules Check in BG",
	                    "targetLabel": "Blocked - BG Doc. Created"
	                },
	                {
	                    "sourceLabel": "Blocked - BG Doc. Created",
	                    "targetLabel": "Posted - SAP Document Check"
	                },
	                {
	                    "sourceLabel": "Posted - SAP Document Check",
	                    "targetLabel": "End Process"
	                }
	            ]
	        },
	        {
	            "rank": 5,
	            "count": 1226,
	            "percentage": 0.0499,
	            "averageDuration": 504094.18,
	            "connections": [
	                {
	                    "sourceLabel": "Start Process",
	                    "targetLabel": "Scanned - Early Archiving"
	                },
	                {
	                    "sourceLabel": "Scanned - Early Archiving",
	                    "targetLabel": "Sent to OCR - OCR Extraction"
	                },
	                {
	                    "sourceLabel": "Sent to OCR - OCR Extraction",
	                    "targetLabel": "Extraction Completed - Update status"
	                },
	                {
	                    "sourceLabel": "Extraction Completed - Update status",
	                    "targetLabel": "Created - Workflow Start"
	                },
	                {
	                    "sourceLabel": "Created - Workflow Start",
	                    "targetLabel": "Obsolete - Set To Obsolete"
	                },
	                {
	                    "sourceLabel": "Obsolete - Set To Obsolete",
	                    "targetLabel": "End Process"
	                }
	            ]
	        },
	        {
	            "rank": 6,
	            "count": 964,
	            "percentage": 0.0392,
	            "averageDuration": 282142.53,
	            "connections": [
	                {
	                    "sourceLabel": "Start Process",
	                    "targetLabel": "Scanned - Early Archiving"
	                },
	                {
	                    "sourceLabel": "Scanned - Early Archiving",
	                    "targetLabel": "Sent to OCR - OCR Extraction"
	                },
	                {
	                    "sourceLabel": "Sent to OCR - OCR Extraction",
	                    "targetLabel": "Extraction Completed - Update status"
	                },
	                {
	                    "sourceLabel": "Extraction Completed - Update status",
	                    "targetLabel": "Created - Workflow Start"
	                },
	                {
	                    "sourceLabel": "Created - Workflow Start",
	                    "targetLabel": "Created - Apply Business Rules"
	                },
	                {
	                    "sourceLabel": "Created - Apply Business Rules",
	                    "targetLabel": "Indexed - Business Rules Check in BG"
	                },
	                {
	                    "sourceLabel": "Indexed - Business Rules Check in BG",
	                    "targetLabel": "Blocked - BG Doc. Created"
	                },
	                {
	                    "sourceLabel": "Blocked - BG Doc. Created",
	                    "targetLabel": "Posted - SAP Document Check"
	                },
	                {
	                    "sourceLabel": "Posted - SAP Document Check",
	                    "targetLabel": "End Process"
	                }
	            ]
	        },
	        {
	            "rank": 7,
	            "count": 897,
	            "percentage": 0.0365,
	            "averageDuration": 1212469.39,
	            "connections": [
	                {
	                    "sourceLabel": "Start Process",
	                    "targetLabel": "Created - Workflow Start"
	                },
	                {
	                    "sourceLabel": "Created - Workflow Start",
	                    "targetLabel": "Created - Apply Business Rules"
	                },
	                {
	                    "sourceLabel": "Created - Apply Business Rules",
	                    "targetLabel": "Indexed - Business Rules Check in BG"
	                },
	                {
	                    "sourceLabel": "Indexed - Business Rules Check in BG",
	                    "targetLabel": "Blocked - BG Doc. Created"
	                },
	                {
	                    "sourceLabel": "Blocked - BG Doc. Created",
	                    "targetLabel": "Approval Complete - Start Approval Workflow"
	                },
	                {
	                    "sourceLabel": "Approval Complete - Start Approval Workflow",
	                    "targetLabel": "Posted - SAP Document Check"
	                },
	                {
	                    "sourceLabel": "Posted - SAP Document Check",
	                    "targetLabel": "End Process"
	                }
	            ]
	        },
	        {
	            "rank": 8,
	            "count": 807,
	            "percentage": 0.0328,
	            "averageDuration": 551025.01,
	            "connections": [
	                {
	                    "sourceLabel": "Start Process",
	                    "targetLabel": "Created - Workflow Start"
	                },
	                {
	                    "sourceLabel": "Created - Workflow Start",
	                    "targetLabel": "Document Created - Post PO Invoice"
	                },
	                {
	                    "sourceLabel": "Document Created - Post PO Invoice",
	                    "targetLabel": "Posted - SAP Document Check"
	                },
	                {
	                    "sourceLabel": "Posted - SAP Document Check",
	                    "targetLabel": "End Process"
	                }
	            ]
	        },
	        {
	            "rank": 9,
	            "count": 805,
	            "percentage": 0.0328,
	            "averageDuration": 606117.76,
	            "connections": [
	                {
	                    "sourceLabel": "Start Process",
	                    "targetLabel": "Indexed - Workflow Start"
	                },
	                {
	                    "sourceLabel": "Indexed - Workflow Start",
	                    "targetLabel": "Indexed - Bypassed Rule -Special Handling Instruct"
	                },
	                {
	                    "sourceLabel": "Indexed - Bypassed Rule -Special Handling Instruct",
	                    "targetLabel": "Indexed - Apply Business Rules"
	                },
	                {
	                    "sourceLabel": "Indexed - Apply Business Rules",
	                    "targetLabel": "Indexed - Business Rules Check in BG"
	                },
	                {
	                    "sourceLabel": "Indexed - Business Rules Check in BG",
	                    "targetLabel": "Blocked - BG Doc. Created"
	                },
	                {
	                    "sourceLabel": "Blocked - BG Doc. Created",
	                    "targetLabel": "Approval Complete - Start Approval Workflow"
	                },
	                {
	                    "sourceLabel": "Approval Complete - Start Approval Workflow",
	                    "targetLabel": "Posted - SAP Document Check"
	                },
	                {
	                    "sourceLabel": "Posted - SAP Document Check",
	                    "targetLabel": "End Process"
	                }
	            ]
	        }
	    ]
	},
	"case":[
		{
		    "total": 2638,
		    "pageIndex": 1,
		    "pageSize": 35,
		    "orderBy": "Id",
		    "list": [
		        {
		            "id": "2253405",
		            "start": 1481787427000,
		            "end": 1482160487000,
		            "duration": 373060
		        },
		        {
		            "id": "2253277",
		            "start": 1481787168000,
		            "end": 1485780571000,
		            "duration": 3993403
		        },
		        {
		            "id": "2253433",
		            "start": 1481787465000,
		            "end": 1482410878000,
		            "duration": 623413
		        },
		        {
		            "id": "2253439",
		            "start": 1481787476000,
		            "end": 1481826610000,
		            "duration": 39134
		        },
		        {
		            "id": "2253479",
		            "start": 1481787586000,
		            "end": 1481825546000,
		            "duration": 37960
		        },
		        {
		            "id": "2253482",
		            "start": 1481787593000,
		            "end": 1481825443000,
		            "duration": 37850
		        },
		        {
		            "id": "2253567",
		            "start": 1481787737000,
		            "end": 1481824912000,
		            "duration": 37175
		        },
		        {
		            "id": "2253595",
		            "start": 1481787801000,
		            "end": 1482221785000,
		            "duration": 433984
		        },
		        {
		            "id": "2253624",
		            "start": 1481787876000,
		            "end": 1481814375000,
		            "duration": 26499
		        },
		        {
		            "id": "2255156",
		            "start": 1481791625000,
		            "end": 1481912877000,
		            "duration": 121252
		        },
		        {
		            "id": "2256368",
		            "start": 1481794253000,
		            "end": 1481817226000,
		            "duration": 22973
		        },
		        {
		            "id": "2256441",
		            "start": 1481794485000,
		            "end": 1482220971000,
		            "duration": 426486
		        },
		        {
		            "id": "2256885",
		            "start": 1481795561000,
		            "end": 1482147871000,
		            "duration": 352310
		        },
		        {
		            "id": "2257846",
		            "start": 1481798756000,
		            "end": 1482152734000,
		            "duration": 353978
		        },
		        {
		            "id": "2257954",
		            "start": 1481799041000,
		            "end": 1481826507000,
		            "duration": 27466
		        },
		        {
		            "id": "2258512",
		            "start": 1481800695000,
		            "end": 1482220589000,
		            "duration": 419894
		        },
		        {
		            "id": "2259611",
		            "start": 1481804400000,
		            "end": 1482148114000,
		            "duration": 343714
		        },
		        {
		            "id": "2259683",
		            "start": 1481804605000,
		            "end": 1482265362000,
		            "duration": 460757
		        },
		        {
		            "id": "2259950",
		            "start": 1481805379000,
		            "end": 1482422995000,
		            "duration": 617616
		        },
		        {
		            "id": "2261166",
		            "start": 1481809604000,
		            "end": 1482400678000,
		            "duration": 591074
		        },
		        {
		            "id": "2261168",
		            "start": 1481809614000,
		            "end": 1482400604000,
		            "duration": 590990
		        },
		        {
		            "id": "2261169",
		            "start": 1481809618000,
		            "end": 1482400536000,
		            "duration": 590918
		        },
		        {
		            "id": "2261174",
		            "start": 1481809642000,
		            "end": 1482142490000,
		            "duration": 332848
		        },
		        {
		            "id": "2261176",
		            "start": 1481809652000,
		            "end": 1483711780000,
		            "duration": 1902128
		        },
		        {
		            "id": "2261177",
		            "start": 1481809657000,
		            "end": 1483711652000,
		            "duration": 1901995
		        },
		        {
		            "id": "2264051",
		            "start": 1481820289000,
		            "end": 1482220397000,
		            "duration": 400108
		        },
		        {
		            "id": "2265043",
		            "start": 1481823699000,
		            "end": 1482173879000,
		            "duration": 350180
		        },
		        {
		            "id": "2266052",
		            "start": 1481827699000,
		            "end": 1482256403000,
		            "duration": 428704
		        },
		        {
		            "id": "2266055",
		            "start": 1481827710000,
		            "end": 1482256272000,
		            "duration": 428562
		        },
		        {
		            "id": "2266057",
		            "start": 1481827714000,
		            "end": 1482255952000,
		            "duration": 428238
		        },
		        {
		            "id": "2266058",
		            "start": 1481827716000,
		            "end": 1482255814000,
		            "duration": 428098
		        },
		        {
		            "id": "2266060",
		            "start": 1481827722000,
		            "end": 1482255613000,
		            "duration": 427891
		        },
		        {
		            "id": "2266251",
		            "start": 1481828328000,
		            "end": 1482841839000,
		            "duration": 1013511
		        },
		        {
		            "id": "2266268",
		            "start": 1481828371000,
		            "end": 1482152710000,
		            "duration": 324339
		        },
		        {
		            "id": "2266475",
		            "start": 1481828762000,
		            "end": 1481887048000,
		            "duration": 58286
		        }
	    	]
		},
		{
		    "total": 2638,
		    "pageIndex":2,
		    "pageSize": 24,
		    "orderBy": "Id",
		    "list": [
		        {
		            "id": "2250630",
		            "start": 1481781817000,
		            "end": 1496701180000,
		            "duration": 14919363
		        },
		        {
		            "id": "2250673",
		            "start": 1481781830000,
		            "end": 1496700644000,
		            "duration": 14918814
		        },
		        {
		            "id": "2251918",
		            "start": 1481784544000,
		            "end": 1481891064000,
		            "duration": 106520
		        },
		        {
		            "id": "2251961",
		            "start": 1481784664000,
		            "end": 1481890938000,
		            "duration": 106274
		        },
		        {
		            "id": "2252919",
		            "start": 1481786437000,
		            "end": 1485780904000,
		            "duration": 3994467
		        },
		        {
		            "id": "2253010",
		            "start": 1481786666000,
		            "end": 1481889944000,
		            "duration": 103278
		        },
		        {
		            "id": "2253028",
		            "start": 1481786725000,
		            "end": 1485780823000,
		            "duration": 3994098
		        },
		        {
		            "id": "2253045",
		            "start": 1481786739000,
		            "end": 1485780444000,
		            "duration": 3993705
		        },
		        {
		            "id": "2253048",
		            "start": 1481786744000,
		            "end": 1485780225000,
		            "duration": 3993481
		        },
		        {
		            "id": "2253049",
		            "start": 1481786745000,
		            "end": 1485780112000,
		            "duration": 3993367
		        },
		        
		        {
		            "id": "2261169",
		            "start": 1481809618000,
		            "end": 1482400536000,
		            "duration": 590918
		        },
		        {
		            "id": "2261174",
		            "start": 1481809642000,
		            "end": 1482142490000,
		            "duration": 332848
		        },
		        {
		            "id": "2261176",
		            "start": 1481809652000,
		            "end": 1483711780000,
		            "duration": 1902128
		        },
		        {
		            "id": "2261177",
		            "start": 1481809657000,
		            "end": 1483711652000,
		            "duration": 1901995
		        },
		        {
		            "id": "2264051",
		            "start": 1481820289000,
		            "end": 1482220397000,
		            "duration": 400108
		        },
		        {
		            "id": "2265043",
		            "start": 1481823699000,
		            "end": 1482173879000,
		            "duration": 350180
		        },
		        {
		            "id": "2266052",
		            "start": 1481827699000,
		            "end": 1482256403000,
		            "duration": 428704
		        },
		        {
		            "id": "2266055",
		            "start": 1481827710000,
		            "end": 1482256272000,
		            "duration": 428562
		        },
		        {
		            "id": "2266057",
		            "start": 1481827714000,
		            "end": 1482255952000,
		            "duration": 428238
		        },
		        {
		            "id": "2266058",
		            "start": 1481827716000,
		            "end": 1482255814000,
		            "duration": 428098
		        },
		        {
		            "id": "2266060",
		            "start": 1481827722000,
		            "end": 1482255613000,
		            "duration": 427891
		        },
		        {
		            "id": "2266251",
		            "start": 1481828328000,
		            "end": 1482841839000,
		            "duration": 1013511
		        },
		        {
		            "id": "2266268",
		            "start": 1481828371000,
		            "end": 1482152710000,
		            "duration": 324339
		        },
		        {
		            "id": "2266475",
		            "start": 1481828762000,
		            "end": 1481887048000,
		            "duration": 58286
		        }
		    ]	
		},
		{
		    "total": 2638,
		    "pageIndex": 3,
		    "pageSize": 16,
		    "orderBy": "Id",
		    "list": [
		        {
		            "id": "2250630",
		            "start": 1481781817000,
		            "end": 1496701180000,
		            "duration": 14919363
		        },
		        {
		            "id": "2250673",
		            "start": 1481781830000,
		            "end": 1496700644000,
		            "duration": 14918814
		        },
		        {
		            "id": "2251918",
		            "start": 1481784544000,
		            "end": 1481891064000,
		            "duration": 106520
		        },
		        {
		            "id": "2251961",
		            "start": 1481784664000,
		            "end": 1481890938000,
		            "duration": 106274
		        },
		        {
		            "id": "2252919",
		            "start": 1481786437000,
		            "end": 1485780904000,
		            "duration": 3994467
		        },
		        {
		            "id": "2253010",
		            "start": 1481786666000,
		            "end": 1481889944000,
		            "duration": 103278
		        },
		        {
		            "id": "2253028",
		            "start": 1481786725000,
		            "end": 1485780823000,
		            "duration": 3994098
		        },
		        {
		            "id": "2253045",
		            "start": 1481786739000,
		            "end": 1485780444000,
		            "duration": 3993705
		        },
		        {
		            "id": "2253048",
		            "start": 1481786744000,
		            "end": 1485780225000,
		            "duration": 3993481
		        },
		        {
		            "id": "2253049",
		            "start": 1481786745000,
		            "end": 1485780112000,
		            "duration": 3993367
		        },
		        {
		            "id": "2253071",
		            "start": 1481786751000,
		            "end": 1485781200000,
		            "duration": 3994449
		        },
		        {
		            "id": "2253072",
		            "start": 1481786753000,
		            "end": 1485781130000,
		            "duration": 3994377
		        },
		        {
		            "id": "2253076",
		            "start": 1481786761000,
		            "end": 1485780714000,
		            "duration": 3993953
		        },
		        {
		            "id": "2253078",
		            "start": 1481786764000,
		            "end": 1485779945000,
		            "duration": 3993181
		        },
		        {
		            "id": "2253088",
		            "start": 1481786786000,
		            "end": 1481827884000,
		            "duration": 41098
		        },
		        {
		            "id": "2253277",
		            "start": 1481787168000,
		            "end": 1485780571000,
		            "duration": 3993403
		        },
		    ]
		},
		{
			"total": 2638,
		    "pageIndex": 4,
		    "pageSize": 26,
		    "orderBy": "Id",
		    "list": [
		    	{
		            "id": "2253071",
		            "start": 1481786751000,
		            "end": 1485781200000,
		            "duration": 3994449
		        },
		        {
		            "id": "2253072",
		            "start": 1481786753000,
		            "end": 1485781130000,
		            "duration": 3994377
		        },
		        {
		            "id": "2253076",
		            "start": 1481786761000,
		            "end": 1485780714000,
		            "duration": 3993953
		        },
		        {
		            "id": "2253078",
		            "start": 1481786764000,
		            "end": 1485779945000,
		            "duration": 3993181
		        },
		        {
		            "id": "2253088",
		            "start": 1481786786000,
		            "end": 1481827884000,
		            "duration": 41098
		        },
		        {
		            "id": "2253277",
		            "start": 1481787168000,
		            "end": 1485780571000,
		            "duration": 3993403
		        },
		        {
		            "id": "2253405",
		            "start": 1481787427000,
		            "end": 1482160487000,
		            "duration": 373060
		        },
		        {
		            "id": "2253433",
		            "start": 1481787465000,
		            "end": 1482410878000,
		            "duration": 623413
		        },
		        {
		            "id": "2253439",
		            "start": 1481787476000,
		            "end": 1481826610000,
		            "duration": 39134
		        },
		        {
		            "id": "2253479",
		            "start": 1481787586000,
		            "end": 1481825546000,
		            "duration": 37960
		        },
		        {
		            "id": "2253482",
		            "start": 1481787593000,
		            "end": 1481825443000,
		            "duration": 37850
		        },
		        {
		            "id": "2253567",
		            "start": 1481787737000,
		            "end": 1481824912000,
		            "duration": 37175
		        },
		        {
		            "id": "2253595",
		            "start": 1481787801000,
		            "end": 1482221785000,
		            "duration": 433984
		        },
		        {
		            "id": "2253624",
		            "start": 1481787876000,
		            "end": 1481814375000,
		            "duration": 26499
		        },
		        {
		            "id": "2255156",
		            "start": 1481791625000,
		            "end": 1481912877000,
		            "duration": 121252
		        },
		        {
		            "id": "2256368",
		            "start": 1481794253000,
		            "end": 1481817226000,
		            "duration": 22973
		        },
		        {
		            "id": "2256441",
		            "start": 1481794485000,
		            "end": 1482220971000,
		            "duration": 426486
		        },
		        {
		            "id": "2256885",
		            "start": 1481795561000,
		            "end": 1482147871000,
		            "duration": 352310
		        },
		        {
		            "id": "2257846",
		            "start": 1481798756000,
		            "end": 1482152734000,
		            "duration": 353978
		        },
		        {
		            "id": "2257954",
		            "start": 1481799041000,
		            "end": 1481826507000,
		            "duration": 27466
		        },
		        {
		            "id": "2258512",
		            "start": 1481800695000,
		            "end": 1482220589000,
		            "duration": 419894
		        },
		        {
		            "id": "2259611",
		            "start": 1481804400000,
		            "end": 1482148114000,
		            "duration": 343714
		        },
		        {
		            "id": "2259683",
		            "start": 1481804605000,
		            "end": 1482265362000,
		            "duration": 460757
		        },
		        {
		            "id": "2259950",
		            "start": 1481805379000,
		            "end": 1482422995000,
		            "duration": 617616
		        },
		        {
		            "id": "2261166",
		            "start": 1481809604000,
		            "end": 1482400678000,
		            "duration": 591074
		        },
		        {
		            "id": "2261168",
		            "start": 1481809614000,
		            "end": 1482400604000,
		            "duration": 590990
		        }
		    ]
		},
		{
			"total": 2638,
		    "pageIndex": 5,
		    "pageSize": 34,
		    "orderBy": "Id",
		    "list": [
		    	{
		            "id": "2253405",
		            "start": 1481787427000,
		            "end": 1482160487000,
		            "duration": 373060
		        },
		        {
		            "id": "2253433",
		            "start": 1481787465000,
		            "end": 1482410878000,
		            "duration": 623413
		        },
		        {
		            "id": "2253439",
		            "start": 1481787476000,
		            "end": 1481826610000,
		            "duration": 39134
		        },
		        {
		            "id": "2253479",
		            "start": 1481787586000,
		            "end": 1481825546000,
		            "duration": 37960
		        },
		        {
		            "id": "2253482",
		            "start": 1481787593000,
		            "end": 1481825443000,
		            "duration": 37850
		        },
		        {
		            "id": "2253567",
		            "start": 1481787737000,
		            "end": 1481824912000,
		            "duration": 37175
		        },
		        {
		            "id": "2253595",
		            "start": 1481787801000,
		            "end": 1482221785000,
		            "duration": 433984
		        },
		        {
		            "id": "2253624",
		            "start": 1481787876000,
		            "end": 1481814375000,
		            "duration": 26499
		        },
		        {
		            "id": "2255156",
		            "start": 1481791625000,
		            "end": 1481912877000,
		            "duration": 121252
		        },
		        {
		            "id": "2256368",
		            "start": 1481794253000,
		            "end": 1481817226000,
		            "duration": 22973
		        },
		        {
		            "id": "2256441",
		            "start": 1481794485000,
		            "end": 1482220971000,
		            "duration": 426486
		        },
		        {
		            "id": "2256885",
		            "start": 1481795561000,
		            "end": 1482147871000,
		            "duration": 352310
		        },
		        {
		            "id": "2257846",
		            "start": 1481798756000,
		            "end": 1482152734000,
		            "duration": 353978
		        },
		        {
		            "id": "2257954",
		            "start": 1481799041000,
		            "end": 1481826507000,
		            "duration": 27466
		        },
		        {
		            "id": "2258512",
		            "start": 1481800695000,
		            "end": 1482220589000,
		            "duration": 419894
		        },
		        {
		            "id": "2259611",
		            "start": 1481804400000,
		            "end": 1482148114000,
		            "duration": 343714
		        },
		        {
		            "id": "2259683",
		            "start": 1481804605000,
		            "end": 1482265362000,
		            "duration": 460757
		        },
		        {
		            "id": "2259950",
		            "start": 1481805379000,
		            "end": 1482422995000,
		            "duration": 617616
		        },
		        {
		            "id": "2261166",
		            "start": 1481809604000,
		            "end": 1482400678000,
		            "duration": 591074
		        },
		        {
		            "id": "2261168",
		            "start": 1481809614000,
		            "end": 1482400604000,
		            "duration": 590990
		        },
		        {
		            "id": "2261169",
		            "start": 1481809618000,
		            "end": 1482400536000,
		            "duration": 590918
		        },
		        {
		            "id": "2261174",
		            "start": 1481809642000,
		            "end": 1482142490000,
		            "duration": 332848
		        },
		        {
		            "id": "2261176",
		            "start": 1481809652000,
		            "end": 1483711780000,
		            "duration": 1902128
		        },
		        {
		            "id": "2261177",
		            "start": 1481809657000,
		            "end": 1483711652000,
		            "duration": 1901995
		        },
		        {
		            "id": "2264051",
		            "start": 1481820289000,
		            "end": 1482220397000,
		            "duration": 400108
		        },
		        {
		            "id": "2265043",
		            "start": 1481823699000,
		            "end": 1482173879000,
		            "duration": 350180
		        },
		        {
		            "id": "2266052",
		            "start": 1481827699000,
		            "end": 1482256403000,
		            "duration": 428704
		        },
		        {
		            "id": "2266055",
		            "start": 1481827710000,
		            "end": 1482256272000,
		            "duration": 428562
		        },
		        {
		            "id": "2266057",
		            "start": 1481827714000,
		            "end": 1482255952000,
		            "duration": 428238
		        },
		        {
		            "id": "2266058",
		            "start": 1481827716000,
		            "end": 1482255814000,
		            "duration": 428098
		        },
		        {
		            "id": "2266060",
		            "start": 1481827722000,
		            "end": 1482255613000,
		            "duration": 427891
		        },
		        {
		            "id": "2266251",
		            "start": 1481828328000,
		            "end": 1482841839000,
		            "duration": 1013511
		        },
		        {
		            "id": "2266268",
		            "start": 1481828371000,
		            "end": 1482152710000,
		            "duration": 324339
		        },
		        {
		            "id": "2266475",
		            "start": 1481828762000,
		            "end": 1481887048000,
		            "duration": 58286
		        }
		    ]
		},
		{
			"total": 2638,
		    "pageIndex": 6,
		    "pageSize": 15,
		    "orderBy": "Id",
		    "list": [
				{
		            "id": "2250630",
		            "start": 1481781817000,
		            "end": 1496701180000,
		            "duration": 14919363
		        },
		        {
		            "id": "2250673",
		            "start": 1481781830000,
		            "end": 1496700644000,
		            "duration": 14918814
		        },
		        {
		            "id": "2251918",
		            "start": 1481784544000,
		            "end": 1481891064000,
		            "duration": 106520
		        },
		        {
		            "id": "2251961",
		            "start": 1481784664000,
		            "end": 1481890938000,
		            "duration": 106274
		        },
		        {
		            "id": "2252919",
		            "start": 1481786437000,
		            "end": 1485780904000,
		            "duration": 3994467
		        },
		        {
		            "id": "2253010",
		            "start": 1481786666000,
		            "end": 1481889944000,
		            "duration": 103278
		        },
		        {
		            "id": "2253028",
		            "start": 1481786725000,
		            "end": 1485780823000,
		            "duration": 3994098
		        },
		        {
		            "id": "2253045",
		            "start": 1481786739000,
		            "end": 1485780444000,
		            "duration": 3993705
		        },
		        {
		            "id": "2253048",
		            "start": 1481786744000,
		            "end": 1485780225000,
		            "duration": 3993481
		        },
		        {
		            "id": "2253049",
		            "start": 1481786745000,
		            "end": 1485780112000,
		            "duration": 3993367
		        },
		        {
		            "id": "2253071",
		            "start": 1481786751000,
		            "end": 1485781200000,
		            "duration": 3994449
		        },
		        {
		            "id": "2253072",
		            "start": 1481786753000,
		            "end": 1485781130000,
		            "duration": 3994377
		        },
		        {
		            "id": "2253076",
		            "start": 1481786761000,
		            "end": 1485780714000,
		            "duration": 3993953
		        },
		        {
		            "id": "2253078",
		            "start": 1481786764000,
		            "end": 1485779945000,
		            "duration": 3993181
		        },
		        {
		            "id": "2253088",
		            "start": 1481786786000,
		            "end": 1481827884000,
		            "duration": 41098
		        }
		    ]
		},
		{
			"total": 2638,
		    "pageIndex": 6,
		    "pageSize": 15,
		    "orderBy": "Id",
		    "list": [
				{
		            "id": "2250630",
		            "start": 1481781817000,
		            "end": 1496701180000,
		            "duration": 14919363
		        },
		        {
		            "id": "2250673",
		            "start": 1481781830000,
		            "end": 1496700644000,
		            "duration": 14918814
		        },
		        {
		            "id": "2251918",
		            "start": 1481784544000,
		            "end": 1481891064000,
		            "duration": 106520
		        },
		        {
		            "id": "2251961",
		            "start": 1481784664000,
		            "end": 1481890938000,
		            "duration": 106274
		        },
		        {
		            "id": "2252919",
		            "start": 1481786437000,
		            "end": 1485780904000,
		            "duration": 3994467
		        },
		        {
		            "id": "2253010",
		            "start": 1481786666000,
		            "end": 1481889944000,
		            "duration": 103278
		        },
		        {
		            "id": "2253028",
		            "start": 1481786725000,
		            "end": 1485780823000,
		            "duration": 3994098
		        },
		        {
		            "id": "2253045",
		            "start": 1481786739000,
		            "end": 1485780444000,
		            "duration": 3993705
		        },
		        {
		            "id": "2253048",
		            "start": 1481786744000,
		            "end": 1485780225000,
		            "duration": 3993481
		        },
		        {
		            "id": "2253049",
		            "start": 1481786745000,
		            "end": 1485780112000,
		            "duration": 3993367
		        },
		        {
		            "id": "2253071",
		            "start": 1481786751000,
		            "end": 1485781200000,
		            "duration": 3994449
		        },
		        {
		            "id": "2253072",
		            "start": 1481786753000,
		            "end": 1485781130000,
		            "duration": 3994377
		        },
		        {
		            "id": "2253076",
		            "start": 1481786761000,
		            "end": 1485780714000,
		            "duration": 3993953
		        },
		        {
		            "id": "2253078",
		            "start": 1481786764000,
		            "end": 1485779945000,
		            "duration": 3993181
		        },
		        {
		            "id": "2253088",
		            "start": 1481786786000,
		            "end": 1481827884000,
		            "duration": 41098
		        }
		    ]
		},
		{
			"total": 2638,
		    "pageIndex": 6,
		    "pageSize": 15,
		    "orderBy": "Id",
		    "list": [
				{
		            "id": "2250630",
		            "start": 1481781817000,
		            "end": 1496701180000,
		            "duration": 14919363
		        },
		        {
		            "id": "2250673",
		            "start": 1481781830000,
		            "end": 1496700644000,
		            "duration": 14918814
		        },
		        {
		            "id": "2251918",
		            "start": 1481784544000,
		            "end": 1481891064000,
		            "duration": 106520
		        },
		        {
		            "id": "2251961",
		            "start": 1481784664000,
		            "end": 1481890938000,
		            "duration": 106274
		        },
		        {
		            "id": "2252919",
		            "start": 1481786437000,
		            "end": 1485780904000,
		            "duration": 3994467
		        },
		        {
		            "id": "2253010",
		            "start": 1481786666000,
		            "end": 1481889944000,
		            "duration": 103278
		        },
		        {
		            "id": "2253028",
		            "start": 1481786725000,
		            "end": 1485780823000,
		            "duration": 3994098
		        },
		        {
		            "id": "2253045",
		            "start": 1481786739000,
		            "end": 1485780444000,
		            "duration": 3993705
		        },
		        {
		            "id": "2253048",
		            "start": 1481786744000,
		            "end": 1485780225000,
		            "duration": 3993481
		        },
		        {
		            "id": "2253049",
		            "start": 1481786745000,
		            "end": 1485780112000,
		            "duration": 3993367
		        },
		        {
		            "id": "2253071",
		            "start": 1481786751000,
		            "end": 1485781200000,
		            "duration": 3994449
		        },
		        {
		            "id": "2253072",
		            "start": 1481786753000,
		            "end": 1485781130000,
		            "duration": 3994377
		        },
		        {
		            "id": "2253076",
		            "start": 1481786761000,
		            "end": 1485780714000,
		            "duration": 3993953
		        },
		        {
		            "id": "2253078",
		            "start": 1481786764000,
		            "end": 1485779945000,
		            "duration": 3993181
		        },
		        {
		            "id": "2253088",
		            "start": 1481786786000,
		            "end": 1481827884000,
		            "duration": 41098
		        }
		    ]
		},
		{
			"total": 2638,
		    "pageIndex": 6,
		    "pageSize": 15,
		    "orderBy": "Id",
		    "list": [
		        {
		            "id": "2250673",
		            "start": 1481781830000,
		            "end": 1496700644000,
		            "duration": 14918814
		        },
				{
		            "id": "2250630",
		            "start": 1481781817000,
		            "end": 1496701180000,
		            "duration": 14919363
		        },
		        {
		            "id": "2251918",
		            "start": 1481784544000,
		            "end": 1481891064000,
		            "duration": 106520
		        },
		        {
		            "id": "2251961",
		            "start": 1481784664000,
		            "end": 1481890938000,
		            "duration": 106274
		        },
		        {
		            "id": "2252919",
		            "start": 1481786437000,
		            "end": 1485780904000,
		            "duration": 3994467
		        },
		        {
		            "id": "2253010",
		            "start": 1481786666000,
		            "end": 1481889944000,
		            "duration": 103278
		        },
		        {
		            "id": "2253028",
		            "start": 1481786725000,
		            "end": 1485780823000,
		            "duration": 3994098
		        },
		        {
		            "id": "2253045",
		            "start": 1481786739000,
		            "end": 1485780444000,
		            "duration": 3993705
		        },
		        {
		            "id": "2253048",
		            "start": 1481786744000,
		            "end": 1485780225000,
		            "duration": 3993481
		        },
		        {
		            "id": "2253049",
		            "start": 1481786745000,
		            "end": 1485780112000,
		            "duration": 3993367
		        },
		        {
		            "id": "2253071",
		            "start": 1481786751000,
		            "end": 1485781200000,
		            "duration": 3994449
		        },
		        {
		            "id": "2253072",
		            "start": 1481786753000,
		            "end": 1485781130000,
		            "duration": 3994377
		        },
		        {
		            "id": "2253076",
		            "start": 1481786761000,
		            "end": 1485780714000,
		            "duration": 3993953
		        },
		        {
		            "id": "2253078",
		            "start": 1481786764000,
		            "end": 1485779945000,
		            "duration": 3993181
		        },
		        {
		            "id": "2253088",
		            "start": 1481786786000,
		            "end": 1481827884000,
		            "duration": 41098
		        }
		    ]
		}
	],
	"caseDetail":[
	    {
	        "name": "Created - Workflow Start",
	        "start": 1481781817000,
	        "end": 1496637980000,
	        "duration": 14856163,
	        "waitingTime": 0,
	        "userName": "LH1_RFC"
	    },
	    {
	        "name": "Created - Apply Business Rules",
	        "start": 1496637980000,
	        "end": 1496637985000,
	        "duration": 192837,
	        "waitingTime": 0,
	        "userName": "23111646"
	    },
	    {
	        "name": "Indexed - Business Rules Check in BG",
	        "start": 1496637985000,
	        "end": 1496637988000,
	        "duration": 3,
	        "waitingTime": 0,
	        "userName": "WF-BATCH"
	    },
	    {
	        "name": "Blocked - BG Doc. Created",
	        "start": 1496637988000,
	        "end": 1496701180000,
	        "duration": 63192,
	        "waitingTime": 0,
	        "userName": "WF-BATCH"
	    },
	    {
	        "name": "Posted - SAP Document Check",
	        "start": 1496701180000,
	        "end": 1496701180000,
	        "duration": 181827,
	        "waitingTime": 0,
	        "userName": "WF-BATCH"
	    }
	]
};

var oSeclect = document.getElementById('select');
var conup=document.getElementById('content-up');
var contle=document.getElementById('content-title');
var ospan=contle.getElementsByTagName('span');
var content=document.getElementById('content');






Vue.component('todo-item',{
	props:['content','index'],
	template:'<ul class="left-con-xz"><span  class="icon-i"></span><a @click="handleclick" id="xblock1" href="javascript:;">'
	+'<li class="con-xz-border"><p>{{content.rank}}</p><ul><li id="con-xz-border-border" class="con-xz-border-border">'
	+'{{(content.percentage*100).toFixed(2)}}%</li></ul></li></a></ul> ',
	methods:{
		handleclick:function(){
			this.$emit('add',this.index)
		}
	}
});



new Vue({
	el:'#wrap',
	data:{
		toptens:[],
		cases:[],
		caseDetails:[],
		value:'',
		oSeclect: '',
		msg:'',
		toduration:'',
		toactivies:'',
		toStart:'',
		toEnd:'',
		isShow:false
	},

	mounted:function(){
	    this.aa();
	    this.value = 'id'
	},

	methods:{
		aa:function(){
		var _this=this;
		_this.toptens=data.topTen.list;
		},

       handleadd:function(index){
       	    this.oSeclect = index;
       	    this.cases=data.case[index].list;
	       	Vue.component('todo-item2',{
				props:['content2','index'],
				template:'<a @click="handleclick3" @click="show"  id="block" href="javascript:;"><div class="ml-one"><div class="ml-one-left"><span>Case{{content2.id}}'
				+'</span><p>{{formatSeconds(content2.duration)}}</p></div><div class="ml-one-right">></div></div></a>',
				methods:{
				    handleclick3:function(){
					this.$emit('add2',this.index)
				},
				    show:function(){
				    this.$emit('show',this.index)
				    }
	}

			})
       },
        show:function(){
        	this.isShow = true;
        },

	    handleclick2:function(value){
	       	var casess = data.case[this.oSeclect].list;
	        if(value=="id"){
	        	casess.sort(function(a,b){
		    		if(a.id<b.id){
		    			return -1;
		    		}else if(a.id>b.id){
		    			return 1;
		    		}
		    	});
	        		Vue.component('todo-item2',{
					props:['content2','index'],
					template:'<a  id="block" href="javascript:;"><div class="ml-one"><div class="ml-one-left"><span>Case{{content2.id}}'
					+'</span><p>{{formatSeconds(content2.duration)}}</p></div><div class="ml-one-right">></div></div></a>'
				})
	       }

	        if(value=="start"){
	    		casess.sort(function(a,b){
		    		if(a.end<b.end){
		    			return -1;
		    		}else if(a.end>b.end){
		    			return 1;
		    		 }
	    	    });
	    		Vue.component('todo-item2',{
				props:['content2','index'],
				template:'<a id="block" href="javascript:;"><div class="ml-one"><div class="ml-one-left"><span>Case{{content2.id}}'
				+'</span><p>{{formatDateTime(content2.start)}}</p></div><div class="ml-one-right">></div></div></a>'
			    })
		    }

		    if(value=="end"){
		        casess.sort(function(a,b){
		    		if(a.end<b.end){
		    			return 1;
		    		}else if(a.end>b.end){
		    			return -1;
		    		}
		        });
		    	Vue.component('todo-item2',{
				props:['content2','index'],
				template:'<a id="block" href="javascript:;"><div class="ml-one"><div class="ml-one-left"><span>Case{{content2.id}}'
				+'</span><p>{{formatDateTime(content2.end)}}</p></div><div class="ml-one-right">></div></div></a>'
			    })
	        }
 
	        if(value=="duration"){
	       	    casess.sort(function(a,b){
		    		if(a.duration<b.duration){
		    			return -1;
		    		}else if(a.duration>b.duration){
		    			return 1;
		    		}
	    	    });
	       	    Vue.component('todo-item2',{
				props:['content2','index'],
				template:'<a id="block" href="javascript:;"><div class="ml-one"><div class="ml-one-left"><span>Case{{content2.id}}'
				+'</span><p>{{formatSeconds(content2.duration)}}</p></div><div class="ml-one-right">></div></div></a>'
			    })
	       	}
	     },

	    handleclick3:function(index){
	    	this.msg = data.case[this.oSeclect].list[index].id;
	    	this.toduration=data.case[this.oSeclect].list[index].duration;
	    	this.toactivies=data.caseDetail.length;
	    	this.toStart=data.caseDetail[0].start;
	    	this.toEnd=data.caseDetail[4].end;

	    	this.caseDetails=data.caseDetail
            
	    },

	    exit:function(){
	    	this.isShow=false;
	    }
}
})









  /*duraiton换算*/
  function formatSeconds(value) {
        var secondTime = parseInt(value/1000);// 秒
        var minuteTime = 0;// 分
        var hourTime = 0;// 小时
        if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
            //获取分钟，除以60取整数，得到整数分钟
            minuteTime = parseInt(secondTime / 60);
            //获取秒数，秒数取佘，得到整数秒数
            secondTime = parseInt(secondTime % 60);
            //如果分钟大于60，将分钟转换成小时
            if(minuteTime > 60) {
                //获取小时，获取分钟除以60，得到整数小时
                hourTime = parseInt(minuteTime / 60);
                //获取小时后取佘的分，获取分钟除以60取佘的分
                minuteTime = parseInt(minuteTime % 60);
            }
        }
        var result = "" + parseInt(secondTime) + "s";
 
        if(minuteTime > 0) {
            result = "" + parseInt(minuteTime) + "min," + result;
        }
        if(hourTime > 0) {
            result = "" + parseInt(hourTime) + "hour," + result;
        }
        return result;
    }

     /*时间转换*/
	   function formatDateTime(inputTime) {  
		    var date = new Date(inputTime);
		    var y = date.getFullYear();  
		    var m = date.getMonth() + 1;  
		    m = m < 10 ? ('0' + m) : m;  
		    var d = date.getDate();  
		    d = d < 10 ? ('0' + d) : d;  
		    var h = date.getHours();
		    h = h < 10 ? ('0' + h) : h;
		    var minute = date.getMinutes();
		    var second = date.getSeconds();
		    minute = minute < 10 ? ('0' + minute) : minute;  
		    second = second < 10 ? ('0' + second) : second; 
		    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;  
		};

    /* 不调用组件 
    new Vue({
    	el:'#wrap',
    	data:{
    		toptens:[],
    		cases:[],
    		index1:''
    	},
    	mounted:function(){
    		this.handleClick();
    	},
    	methods:{
    		handleClick:function(index){
    			
    			this.index1=index;
    			this.toptens=data.topTen.list;
    			this.cases=data.case[index].list;
    		}
    	}
    })
 */
         