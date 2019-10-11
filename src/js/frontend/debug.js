(function() {
	const liveReload 			= document.createElement("script");
	liveReload.src 				= "http://localhost:9090/livereload.js";

	document.head.appendChild(liveReload);

	app.isDebug 				= true;
	window.app 					= app;

	const messages 				= [
		// Like
		{
			"MsgType":4,
			"MsgId":{"Buff":"LIVE#SENDCHARM#32583440#2034826560#1556291471"},
			"StudioId":32583440,
			"FromUin":2034826560,
			"MsgContent":{"Buff":"{\n\"SendUin\": 2034826560,\n\"Time\": 1556291471,\n\"RecvUinCharm\": 881916,\n\"Cumulative\": 300,\n\"CharmCount\": 3\n}\n"},
			"EmojiFlag":0,
			"CreateTime":1556291471,
			"Private":0,
			"FromNickName":"Tata","FromUserLv":1,"FromAccess":0,"GlobalIDFlag":0,"StudioIDFlag":0,"FromHeadImg":"https://lh3.googleusercontent.com/-H3p3EO3MDE8/AAAAAAAAAAI/AAAAAAAAAAs/EswiiFutn3g/photo.jpg","MedalId":0,"MeddlShowName":"","UseGoods":"","GoodsMaxUpdateTime":1556140740},
		// Normal message
		{
			"MsgType":1,
			"MsgId":{"Buff":"IGG_TEXT#32583440#2036676680#0#1556291158"},
			"StudioId":32583440,
			"FromUin":2036676680,
			"MsgContent":{"Buff":"test message!"},
			"EmojiFlag":0,
			"CreateTime":1556291651,
			"Private":0,
			"FromNickName":"Meji","FromUserLv":2,"FromAccess":0,"GlobalIDFlag":129,"StudioIDFlag":0,"FromHeadImg":"https://static-sc-us1.akamaized.net/upfile/201904/06680/2036676680/3f7c3498c320c172502cc96b99591922_sm.jpeg","MedalId":0,"MeddlShowName":"","UseGoods":"","GoodsMaxUpdateTime":1556140740},
		// Normal message with tag
		{
			"MsgType":20002,
			"MsgId":{"Buff":"StudioMember#32583440#2036206371#1556292770#20002"},
			"StudioId":32583440,
			"FromUin":2036206371,
			"MsgContent":{"Buff":"{\n\"ShowCount\": 726,\n\"RealCount\": 721,\n\"TotalViewCount\": 4182\n}\n"},
			"EmojiFlag":0,
			"CreateTime":1556292770,
			"Private":0,
			"FromNickName":"Prometeus 🐺","FromUserLv":1,"FromAccess":0,"GlobalIDFlag":0,"StudioIDFlag":0,"FromHeadImg":"https://lh6.googleusercontent.com/-xqI3AvMqs2o/AAAAAAAAAAI/AAAAAAAAABE/B_i17ZcBRLk/photo.jpg","MedalId":2029353423,"MeddlShowName":"FansCakcop","UseGoods":"","GoodsMaxUpdateTime":1556140740},
		// Join message
		{
			"MsgType":20002,
			"MsgId":{"Buff":"StudioMember#21759331#2021759331#1556292196#20002"},
			"StudioId":21759331,
			"FromUin":2021759331,
			"MsgContent":{"Buff":"{\n\"ShowCount\": 0,\n\"RealCount\": 0,\n\"TotalViewCount\": 334\n}\n"},
			"EmojiFlag":0,
			"CreateTime":1556292196,
			"Private":0,
			"FromNickName":"Prometeus 🐺","FromUserLv":2,"FromAccess":3,"GlobalIDFlag":129,"StudioIDFlag":10,"FromHeadImg":"https://d1m6wfg60yssal.cloudfront.net/upfile/201811/09331/2021759331/96b08b38f70c28da559a00d4338f3013_sm.jpeg?v=1543355190798","MedalId":0,"MeddlShowName":"","UseGoods":"","GoodsMaxUpdateTime":1556140740},
		// Join message 2
		{
			"MsgType":20002,
			"MsgId":{"Buff":"StudioMember#21759331#2021759331#1556292196#20002"},
			"StudioId":21759331,
			"FromUin":2021759331,
			"MsgContent":{"Buff":"{\n\"ShowCount\": 0,\n\"RealCount\": 0,\n\"TotalViewCount\": 334\n}\n"},
			"EmojiFlag":0,
			"CreateTime":1556292196,
			"Private":0,
			"FromNickName":"Luna ","FromUserLv":5,"FromAccess":5,"GlobalIDFlag":129,"StudioIDFlag":10,"FromHeadImg":"https://d1m6wfg60yssal.cloudfront.net/upfile/201811/09331/2021759331/96b08b38f70c28da559a00d4338f3013_sm.jpeg?v=1543355190798","MedalId":0,"MeddlShowName":"","UseGoods":"","GoodsMaxUpdateTime":1556140740},
		// Emote
		{
			"MsgType":20015,
			"MsgId":{"Buff":"SendLiveGift#32583440#1556293076#2035710261#20015"},
			"StudioId":32583440,
			"FromUin":2035710261,
			"MsgContent":{"Buff":"{\n\"GiftId\": 10,\n\"Nums\": 1,\n\"Index\": 1,\n\"SendLV\": 1,\n\"AnchorIncome\": 2561.000000,\n\"SendEventCost\": 0.000000,\n\"RefreshList\": 0,\n\"AnchorLV\": 2,\n\"SendLVUp\": 0,\n\"AnchorLVUp\": 0,\n\"GroupCount\": 1\n}\n"},
			"EmojiFlag":0,
			"CreateTime":1556293076,
			"Private":0,
			"FromNickName":"Tata",
			"FromUserLv":1,
			"FromAccess":0,
			"GlobalIDFlag":0,
			"StudioIDFlag":32,
			"FromHeadImg":"https://lh3.googleusercontent.com/-0AH7RuGyqc4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rc5FdImB9w5WKQncTbClLXIdoVhuw/mo/photo.jpg",
			"MedalId":2036671121,
			"MeddlShowName":"Furry",
			"UseGoods":"",
			"GoodsMaxUpdateTime":1556140740},
		// Follow 1
		{
			"MsgType":10005,
			"MsgId":{"Buff":"StudioMember#32583440#2036537103#1556293159#10005"},
			"StudioId":32583440,
			"FromUin":2036537103,
			"MsgContent":{"Buff":""},
			"EmojiFlag":0,
			"CreateTime":1556293159,
			"Private":0,
			"FromNickName":"Meji","FromUserLv":1,"FromAccess":0,"GlobalIDFlag":0,"StudioIDFlag":0,"FromHeadImg":"http://d1m6wfg60yssal.cloudfront.net/upfile/game/8917/1xcoIl9P_sm.jpg","MedalId":0,"MeddlShowName":"","UseGoods":"","GoodsMaxUpdateTime":1556140740},
		// Follow 2
		{
			"MsgType":10005,
			"MsgId":{"Buff":"StudioMember#32583440#2034824610#1556293161#10005"},
			"StudioId":32583440,
			"FromUin":2034824610,
			"MsgContent":{"Buff":""},
			"EmojiFlag":0,
			"CreateTime":1556293161,
			"Private":0,
			"FromNickName":"Tata","FromUserLv":1,"FromAccess":0,"GlobalIDFlag":0,"StudioIDFlag":0,"FromHeadImg":"https://lh6.googleusercontent.com/-WVtl9cDkr8U/AAAAAAAAAAI/AAAAAAAAAPg/Sp6-c0DQNW0/photo.jpg","MedalId":0,"MeddlShowName":"","UseGoods":"","GoodsMaxUpdateTime":1556140740}
	];

	window.floodTimer 			= null;

	app.on("chats81", (msg) => {
		if (msg[1] === "!testflood") {
			window.floodTimer 	= setInterval(() => {
				app.triggerMessage(["onmessage82", {
					pocketLen: 		669,
					headerLength: 	16,
					version: 		1,
					cmd: 			300104,
					seq: 			0,
					Len: 			649, 
					Response: 		messages[Math.floor(Math.random() * messages.length)]
				}]);
			}, 50);
		} else
		if (msg[1] === "!stopflood") {
			clearInterval(window.floodTimer);
		}
	});
}());